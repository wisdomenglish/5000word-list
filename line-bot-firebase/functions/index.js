"use strict";

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const logger = require("firebase-functions/logger");
const https = require("https");
const { Anthropic } = require("@anthropic-ai/sdk");
const admin = require("firebase-admin");
const crypto = require("crypto");
const express = require("express");

// ========== Bot Config ==========
const BOT_CONFIG = {
  "Ubf2dcf1c5ebd1103328a7af4e9d7aee7": {
    name: "Frank Line英語教室 v2",
    channelId: 2009816850,
    supportsImage: true,
    imageMode: "solve",
    secretEnvVar: "LINE_CHANNEL_SECRET",
    tokenEnvVar: "LINE_CHANNEL_ACCESS_TOKEN",
    joinMessage: `大家好！我是 Frank 老師的英文小幫手 👋\n\n我可以幫你：\n\n📚 文法問答、單字查詢、句子糾錯\n📝 作文批改、寫作範例、句子翻譯\n📷 傳照片解題（選擇題、填空題、閱讀測驗等）\n✍️ 作文批改／改寫：點下方「作文功能」選單 → 選「作文批改／初階改寫／進階改寫」→ 再傳照片\n\n群組解題方式：\n1️⃣ 先傳文字：「@Bot 解題」\n2️⃣ 再傳圖片（3 分鐘內）\n\n一對一聊天：直接傳圖即可 📸\n\n期待為大家解答英文問題！😊`
  },
  "U45ed153ac9a4c65ec21dc3eb446649c1": {
    name: "Ivy's English Calendar",
    role: "calendar",
    channelId: 2009819826,
    secretEnvVar: "LINE_CHANNEL_SECRET_BOT2",
    tokenEnvVar: "LINE_CHANNEL_ACCESS_TOKEN_BOT2",
    joinMessage: `大家好！我是 Ivy's English 行事曆提醒機器人 📅\n\n功能：\n🔔 每天早上自動提醒隔日行程\n📋 查詢今日/明日/本週行程\n\n查詢方式（直接輸入關鍵字）：\n今日行程 / 今天 → 今天的所有活動\n明日行程 / 明天 → 明天的所有活動\n本週行程 / 這週 → 本週的所有活動\n下一個活動 → 最近即將開始的活動\n\n期待為大家提供貼心的行程提醒！😊`
  },
  "U47f8478ef76c01abaf8a136b1ab80bbf": {
    name: "Wisdom AI Teacher",
    supportsImage: true,
    imageMode: "rewrite",
    secretEnvVar: "LINE_CHANNEL_SECRET_BOT3",
    tokenEnvVar: "LINE_CHANNEL_ACCESS_TOKEN_BOT3",
    joinMessage: `大家好！我是 Wisdom AI Teacher 👋\n\n我可以幫你：\n\n📚 文法問答、單字查詢、句子糾錯\n📝 作文批改、寫作範例、句子翻譯\n🖼️ 傳照片作文或看圖 → 我幫你改寫！\n\n傳圖片後，在 30 秒內回覆：\n✏️「初階改寫」→ 簡單易懂版\n🎯「進階改寫」→ 高分進階版\n\n期待為大家解答英文問題！😊`
  }
};

// ========== Credential Helpers ==========
function getCredential(envVarName) {
  const envValue = process.env[envVarName];
  if (!envValue) {
    throw new Error(`Missing required environment variable: ${envVarName}`);
  }
  return envValue;
}

function getBotCredentials(botConfig) {
  return {
    secret: getCredential(botConfig.secretEnvVar),
    token: getCredential(botConfig.tokenEnvVar)
  };
}

setGlobalOptions({ maxInstances: 10 });

// ========== Express App ==========
const app = express();
app.use(express.json({
  verify: (req, res, buf, encoding) => {
    req.rawBody = buf.toString(encoding || "utf8");
  }
}));

// ========== 初始化 ==========
let anthropic;
let anthropicWisdom;
let dbRef;

function initializeAnthropic() {
  if (anthropic) return;
  try {
    const apiKey = getCredential("ANTHROPIC_API_KEY_STUDENT");
    anthropic = new Anthropic({ apiKey });
  } catch (error) {
    console.error("[ERROR] Failed to initialize Anthropic:", error.message);
    throw error;
  }
}

function initializeAnthropicWisdom() {
  if (anthropicWisdom) return;
  try {
    const apiKey = getCredential("ANTHROPIC_API_KEY_PWAPROD");
    anthropicWisdom = new Anthropic({ apiKey });
  } catch (error) {
    console.error("[ERROR] Failed to initialize AnthropicWisdom:", error.message);
    throw error;
  }
}

function initializeFirebase() {
  if (dbRef) return;
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        databaseURL: "https://news-english-ef2e4-default-rtdb.asia-southeast1.firebasedatabase.app",
      });
    }
    dbRef = admin.database();
  } catch (error) {
    console.error("[ERROR] Failed to initialize Firebase:", error.message);
    throw error;
  }
}

// ========== LINE API ==========
async function replyLineMessage(replyToken, message, token) {
  return new Promise((resolve, reject) => {
    if (!token) {
      console.error("[ERROR] LINE token not provided");
      return reject(new Error("LINE token is required"));
    }
    const data = JSON.stringify({ replyToken, messages: [message] });
    const options = {
      hostname: "api.line.me",
      port: 443,
      path: "/v2/bot/message/reply",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data, "utf8"),
        "Authorization": `Bearer ${token}`
      }
    };
    const req = https.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => { responseData += chunk; });
      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log("[INFO] Message replied successfully");
          resolve(responseData);
        } else {
          console.error(`[ERROR] Failed to reply: ${res.statusCode}`, responseData);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    });
    req.on("error", (error) => {
      console.error("[ERROR] HTTP request error:", error.message);
      reject(error);
    });
    req.write(data);
    req.end();
  });
}

async function pushLineMessage(to, message, token) {
  return new Promise((resolve, reject) => {
    if (!token) {
      console.error("[ERROR] LINE token not provided");
      return reject(new Error("LINE token is required"));
    }
    const data = JSON.stringify({ to, messages: [message] });
    const options = {
      hostname: "api.line.me",
      port: 443,
      path: "/v2/bot/message/push",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data, "utf8"),
        "Authorization": `Bearer ${token}`
      }
    };
    const req = https.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => { responseData += chunk; });
      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log("[INFO] Push message sent successfully");
          resolve(responseData);
        } else {
          console.error(`[ERROR] Failed to push: ${res.statusCode}`, responseData);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    });
    req.on("error", (error) => {
      console.error("[ERROR] HTTP request error:", error.message);
      reject(error);
    });
    req.write(data);
    req.end();
  });
}

// 一次 push 多則訊息（LINE 單次最多 5 則）
async function pushLineMulti(to, messages, token) {
  return new Promise((resolve, reject) => {
    if (!token) return reject(new Error("LINE token is required"));
    const data = JSON.stringify({ to, messages });
    const options = {
      hostname: "api.line.me", port: 443, path: "/v2/bot/message/push", method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data, "utf8"),
        "Authorization": `Bearer ${token}`
      }
    };
    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (c) => { body += c; });
      res.on("end", () => {
        if (res.statusCode === 200) resolve(body);
        else { console.error(`[ERROR] push multi: ${res.statusCode}`, body); reject(new Error(`HTTP ${res.statusCode}`)); }
      });
    });
    req.on("error", reject);
    req.write(data); req.end();
  });
}

// 從 User-Agent 取出簡短裝置/瀏覽器字串，方便重現問題
function shortDeviceFromUA(ua) {
  if (!ua) return "";
  let os = "";
  if (/iPhone/.test(ua)) os = "iPhone";
  else if (/iPad/.test(ua)) os = "iPad";
  else if (/Android/.test(ua)) os = "Android";
  else if (/Windows/.test(ua)) os = "Windows";
  else if (/Mac OS X/.test(ua)) os = "Mac";
  let br = "";
  if (/Edg\//.test(ua)) br = "Edge";
  else if (/CriOS|Chrome/.test(ua)) br = "Chrome";
  else if (/FxiOS|Firefox/.test(ua)) br = "Firefox";
  else if (/Safari/.test(ua)) br = "Safari";
  return [os, br].filter(Boolean).join(" / ") || ua.slice(0, 40);
}

// 「綁定回報 / 解除回報」：記錄/移除接收回報的管理員 userId（任何 bot 皆可用）
// 同時存下是在哪支 bot 綁的（tokenEnvVar）——LINE userId 分頻道，推播必須用同一支 token
async function handleReportBind(bind, replyToken, token, userId, botConfig) {
  try {
    initializeFirebase();
    if (bind) {
      await dbRef.ref(`/report-recipients/${userId}`).set({
        boundAt: Date.now(),
        tokenEnvVar: (botConfig && botConfig.tokenEnvVar) || "LINE_CHANNEL_ACCESS_TOKEN_BOT2",
        botName: (botConfig && botConfig.name) || ""
      });
      await replyLineMessage(replyToken, { type: "text", text: "✅ 已綁定問題回報\n\n日後同學在 App 點「🛟 回報問題」送出的內容（含截圖）都會推播到這裡。\n\n要停止接收請輸入「解除回報」。" }, token);
    } else {
      await dbRef.ref(`/report-recipients/${userId}`).remove();
      await replyLineMessage(replyToken, { type: "text", text: "已解除問題回報通知，這裡將不再收到同學的回報。" }, token);
    }
  } catch (e) {
    console.error("[ERROR] handleReportBind:", e.message);
    try { await replyLineMessage(replyToken, { type: "text", text: "❌ 設定失敗，請稍後再試" }, token); } catch (_) {}
  }
}

// ========== 快取 ==========
function generateCacheKey(intent, text) {
  const input = `${intent}:${text.toLowerCase().trim()}`;
  return crypto.createHash("md5").update(input).digest("hex");
}

async function getCachedResponse(cacheKey) {
  try {
    initializeFirebase();
    const snapshot = await dbRef.ref(`/cache/${cacheKey}`).get();
    if (!snapshot.exists()) return null;
    const data = snapshot.val();
    const createdAt = data.createdAt || 0;
    const now = Date.now();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    if (now - createdAt > sevenDaysMs) {
      await dbRef.ref(`/cache/${cacheKey}`).remove();
      return null;
    }
    return data.text;
  } catch (error) {
    console.error("[ERROR] Cache read error:", error.message);
    return null;
  }
}

async function setCachedResponse(cacheKey, text) {
  try {
    initializeFirebase();
    await dbRef.ref(`/cache/${cacheKey}`).set({ text, createdAt: Date.now() });
  } catch (error) {
    console.error("[ERROR] Cache write error:", error.message);
  }
}

// ========== Claude API ==========
async function callClaude(systemPrompt, userMessage, maxTokens = 1024) {
  try {
    initializeAnthropic();
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });
    return message.content[0].type === "text" ? message.content[0].text : "";
  } catch (error) {
    console.error("[ERROR] Claude API error:", error.message);
    throw error;
  }
}

async function callClaudeWisdom(systemPrompt, userMessage, maxTokens = 1024) {
  try {
    initializeAnthropicWisdom();
    const message = await anthropicWisdom.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });
    return message.content[0].type === "text" ? message.content[0].text : "";
  } catch (error) {
    console.error("[ERROR] Claude Wisdom API error:", error.message);
    throw error;
  }
}

// ========== 文本清理 ==========
function sanitizeTextForLine(text) {
  return text.replace(/[\r\n]+/g, "\n").trim();
}

// ========== 智能意圖偵測 ==========
async function detectIntentWithClaude(userMessage) {
  try {
    initializeAnthropic();
    const systemPrompt = `你是一個英文教學助手的意圖識別器。分析用戶訊息，判斷他們的真正需求，並提取關鍵內容。  分類規則（檢查訊息中是否包含關鍵詞）：  1. vocabulary（單字查詞）- 用戶想查單字的各方面資訊（支持大写开头的单字如 Serendipity、Apple 等）     1.1 subIntent: "meaning" - 查單字的中文意思、定義        關鍵詞：「是什麼意思」、「意思」、「定義」、「翻譯」        例：「serendipity 是什麼意思？」或「Serendipity 是什麼意思？」     1.2 subIntent: "pronunciation" - 查發音、怎麼唸        關鍵詞：「怎麼唸」、「唸法」、「發音」、「音標」        例：「ephemeral 怎麼唸」或「Ephemeral 怎麼唸」     1.3 subIntent: "synonym" - 查同義詞、相似詞        關鍵詞：「同義詞」、「類似詞」、「近似詞」、「同義」        例：「ephemeral 有何同義詞？」或「Ephemeral 有何同義詞？」     1.4 subIntent: "antonym" - 查反義詞、相反詞        關鍵詞：「反義詞」、「相反詞」、「反義」        例：「happy 的反義詞是什麼」或「Happy 的反義詞是什麼」     1.5 subIntent: "example" - 查用法例句        關鍵詞：「例句」、「怎麼用」、「用法」、「造句」、「應用」        例：「用 ubiquitous 造句」或「用 Ubiquitous 造句」     ⭐ 重要：提取單字時，保留用戶輸入的大小寫形式（大寫開頭或全小寫都可）    預設 subIntent：如果沒有明確關鍵詞，預設為 "meaning"    提取內容：單字本身（保持用戶的大小寫格式）    → intent: "vocabulary", subIntent: "meaning|pronunciation|synonym|antonym|example", content: "serendipity" 或 "Serendipity"  2. translation（翻譯）- 用戶請求翻譯句子或文章（英譯中或中譯英）    關鍵詞：「翻譯」、「translate」、「中文是」、「英文怎麼說」    例：    - 「請幫我翻譯：How are you?」    - 「翻譯：This is a beautiful day」    - 「'你好'英文怎麼說」    提取內容：要翻譯的句子    → intent: "translation", content: "How are you?"  3. grammar（文法問題）- 用戶問文法、語法規則、句子結構或選擇題     3.1 基本文法問題        關鍵詞：「差別」、「差異」、「怎麼用」、「用法」、「什麼」、「文法」+ 詞彙對        例：        - 「is 和 are 的差別」        - 「would 和 should 的用法」        - 「現在完成式是什麼」        → intent: "grammar", subIntent: "explanation", content: "is 和 are 的差別"     3.2 選擇題/填空題 ✨ 新增        特徵：包含 ________ 或 _____ 空白、有 (A)(B)(C)(D) 選項        例：        - 「________ the water in the bottle ________ clean, so you can drink it.          (A) One of; is (B) Any of; is (C) All of; is (D) None; is」        - 「The book ________ by my teacher yesterday.          (A) was given (B) were given (C) has been given (D) is given」        → intent: "grammar", subIntent: "quiz", content: "[完整題目]"  4. error_correction（句子糾錯）- 用戶請求檢查或修正英文句子    關鍵詞：「對嗎」、「改」、「修改」、「檢查」、「糾正」、「英文句子」    例：    - 「這句對嗎：I go to school yesterday」    - 「請幫我改這句」    - 「He don't like apples，這樣對嗎」    提取內容：英文句子    → intent: "error_correction", content: "I go to school yesterday"  4. essay_review（寫作協助）- 用戶請求批改文章或寫作範例     4.1 subIntent: "review" - 批改、修正文章        關鍵詞：「批改」、「修改潤飾」、「文章」、「段落」、「有什麼問題」        例：        - 「請幫我修改潤飾這段英文」        - 「這篇文章有什麼問題」        - 「幫我改一下這個句子」        提取內容：英文段落或文章內容        → intent: "essay_review", subIntent: "review", content: "[文章內容]"     4.2 subIntent: "example" - 提供寫作範例或範本        關鍵詞：「範例」、「寫個」、「給我」、「怎麼寫」、「範本」、「模板」、「描述」、「如何描述」、「如何用英文」、「英文怎麼描述」、「作文題目」、「寫作主題」        ⭐ 特殊規則：當用戶提供中文作文主題（如「作文描述XXX」、「描述XXX的情況」）但沒有提供英文文章時，一律歸類為 "example"，因為用戶是想要英文寫作範例，而非批改已有的文章。        例：        - 「商業信範例：客訴回應信」        - 「幫我寫個感謝信」        - 「給我一封求職信的範例」        - 「怎麼寫一個道歉信」        - 「作文描述人潮擁擠的狀況」        - 「如何用英文描述天氣」        - 「描述一個緊張的場面」        提取內容：要寫什麼類型的信/文章/主題        → intent: "essay_review", subIntent: "example", content: "感謝信" 或 content: "人潮擁擠的狀況"  回覆為純 JSON（不要加 markdown 符號或其他文字）： {   "intent": "vocabulary|translation|grammar|error_correction|essay_review",   "subIntent": "vocabulary 時：meaning|pronunciation|synonym|antonym|example（預設 meaning）；grammar 時：explanation|quiz（預設 explanation）；essay_review 時：review|example（預設 review）",   "content": "提取的關鍵內容"}  規則： - 必須回覆 JSON - 如果無法判斷，回覆 {"intent": "unknown", "content": "原始訊息"} - content 務必精確提取，例如單字就提取單字，句子就提取句子 - 不要有 markdown、code block 或任何其他文字`;
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });
    const response = message.content[0].type === "text" ? message.content[0].text : "{}";
    let cleanResponse = response.trim();
    if (cleanResponse.startsWith("```json")) {
      cleanResponse = cleanResponse.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    } else if (cleanResponse.startsWith("```")) {
      cleanResponse = cleanResponse.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }
    cleanResponse = cleanResponse.trim();
    console.log("[DEBUG] Claude intent response:", cleanResponse);
    try {
      const result = JSON.parse(cleanResponse);
      if (!result.intent || !["vocabulary", "translation", "grammar", "error_correction", "essay_review"].includes(result.intent)) {
        result.intent = "unknown";
      }
      if (result.intent === "vocabulary") {
        result.subIntent = result.subIntent || "meaning";
        if (!["meaning", "pronunciation", "synonym", "antonym", "example"].includes(result.subIntent)) {
          result.subIntent = "meaning";
        }
      } else if (result.intent === "grammar") {
        result.subIntent = result.subIntent || "explanation";
        if (!["explanation", "quiz"].includes(result.subIntent)) {
          result.subIntent = "explanation";
        }
      } else if (result.intent === "essay_review") {
        result.subIntent = result.subIntent || "review";
        if (!["review", "example"].includes(result.subIntent)) {
          result.subIntent = "review";
        }
      }
      console.log("[INFO] Intent detected:", result.intent, result.subIntent ? `(${result.subIntent})` : "", "| Content:", result.content?.substring(0, 30));
      return {
        intent: result.intent || "unknown",
        subIntent: result.subIntent || null,
        content: result.content || userMessage,
      };
    } catch (e) {
      console.error("[ERROR] Failed to parse Claude intent response:", cleanResponse);
      return { intent: "unknown", subIntent: null, content: userMessage };
    }
  } catch (error) {
    console.error("[ERROR] Intent detection failed:", error.message);
    return { intent: "unknown", content: userMessage };
  }
}

// ========== System Prompts ==========
function buildPrompt(intent, subIntent = null) {
  const baseSystem = `你是 Frank Lin 老師的英文教學助手。  【個性與風格】 - 友善、耐心、鼓勵、專業但親切 - 像一位關心學生進度的英文老師 - 用繁體中文回答，語氣自然不刻板 - 每個回覆都要有鼓勵的語氣  【格式規範 - 絕對重要】 ❌ 絕對不要使用 ** 粗體標記 ✅ 使用 emoji 標示重點（🔹、💡、✓、❌ 等） ✅ 用分隔線 ━━━━━━━━━━━━━━━━ 區分段落 ✅ 適當使用換行和空行 ✅ 層級清楚，易於閱讀  【回答原則】 - 解釋清楚但不囉嗦（150-200字為佳） - 一定要提供實用例句 - 用分隔線和 emoji 讓內容清晰易讀 - 激勵學生繼續學習  【重要提醒】 你不只是知識提供者，而是學生的學習夥伴。回覆時要： 1. 確保學生真正理解了概念 2. 給予具體、可用的例子 3. 在回覆末尾鼓勵學生提出更多問題`;
  const prompts = {
    grammar_explanation: `${baseSystem}  你的任務是回答英文文法問題。使用以下格式回覆：  📚 [文法主題名稱] ━━━━━━━━━━━━━━━━  🔹 結構 [說明該文法的基本結構]  🔹 用法 1️⃣ [用法1] - [詳細說明] [例句] 2️⃣ [用法2] - [詳細說明] [例句] 3️⃣ [用法3] - [詳細說明]（如果有）  ━━━━━━━━━━━━━━━━ 💡 例句 ✓ [例句1英文] （翻譯） ✓ [例句2英文] （翻譯） ✓ [例句3英文] （翻譯）  ━━━━━━━━━━━━━━━━ 🎯 快速記憶法 [簡潔的記憶技巧或口訣]  💪 來試試看吧！ [鼓勵語]  格式要求： - 清楚解釋該文法規則（繁體中文） - 舉 2-3 個具體例句（含翻譯） - 提供記憶技巧 - 最後用 💪 鼓勵 - 簡潔，不超過 500 字`,
    grammar_quiz: `${baseSystem}  你的任務是解析英文選擇題/填空題。使用以下格式回覆：  🎯 正確答案 ━━━━━━━━━━━━━━━━ ✅ [正確選項]  🔹 為什麼正確 [詳細說明為什麼這個選項是對的]  ━━━━━━━━━━━━━━━━ ❌ 選項分析  ❌ [錯誤選項A] [為什麼錯]  ❌ [錯誤選項B] [為什麼錯]  ❌ [錯誤選項C]（如果有） [為什麼錯]  ━━━━━━━━━━━━━━━━ 📖 涉及文法規則  1️⃣ [文法規則1] [簡短說明]  2️⃣ [文法規則2]（如果有） [簡短說明]  ━━━━━━━━━━━━━━━━ 💡 記憶技巧 [幫助記住此規則的技巧或口訣]  💪 下次遇到類似題目就沒問題了！加油！  規則： - 直接指出正確答案 - 逐一分析每個選項為什麼對或錯 - 清晰說明涉及的文法原理 - 簡潔有力，不超過 500 字`,
    grammar: `${baseSystem}  你的任務是回答英文文法問題。使用以下格式回覆：  📚 [文法主題名稱] ━━━━━━━━━━━━━━━━  🔹 結構 [說明該文法的基本結構]  🔹 用法 1️⃣ [用法1] - [詳細說明] [例句] 2️⃣ [用法2] - [詳細說明] [例句]  ━━━━━━━━━━━━━━━━ 💡 例句 ✓ [例句1英文] （翻譯） ✓ [例句2英文] （翻譯） ✓ [例句3英文] （翻譯）  ━━━━━━━━━━━━━━━━ 🎯 快速記憶法 [簡潔的記憶技巧或口訣]  💪 來試試看吧！  - 清楚解釋該文法規則（繁體中文） - 舉 2-3 個具體例句（含翻譯） - 提供記憶技巧 - 最後用 💪 鼓勵 - 簡潔，不超過 500 字`,
    vocabulary_meaning: `你是英語老師。回覆單字查詢時，必須完全按照以下範例格式回覆，每一個空行、每一個符號、每一個換行都要一樣。不可有任何偏差。  📖 apple ━━━━━━━━━━━━━━━━ 🔹 發音 /ˈæp(ə)l/  🔹 詞性與意思 名詞 (n.) - 蘋果（水果）；蘋果公司  ━━━━━━━━━━━━━━━━ 💡 例句 ✓ I eat an apple every day for my health. (我每天吃一個蘋果來保持健康。)  ✓ The apple tree in our garden is very old. (我們花園裡的蘋果樹很老了。)  ✓ She works for Apple, one of the biggest tech companies. (她在蘋果公司工作，那是最大的科技公司之一。)  ━━━━━━━━━━━━━━━━ 📝 延伸學習 形容詞：apple-red（蘋果紅色的） 相關詞：fruit（水果）、tree（樹）  💪 堅持學習英文，每個單字都會讓你更強大！ 試著在日記中用用看吧！✨  必須遵守： ✓ 第1行：📖 + 空格 + 單字 ✓ 第2行：分隔線 ━━━━━━━━━━━━━━━━ ✓ 第3行：🔹 發音 ✓ 第4行：/音標/ ✓ 第5行：空行 ✓ 第6行：🔹 詞性與意思 ✓ 第7行：詞性 - 意思1；意思2 ✓ 第8行：空行 ✓ 第9行：分隔線 ✓ 第10行：💡 例句 ✓ 第11行：✓ 例句1英文 ✓ 第12行：(中文翻譯) ✓ 第13行：空行 ✓ 第14行：✓ 例句2英文 ✓ 第15行：(中文翻譯) ✓ 第16行：空行 ✓ 第17行：✓ 例句3英文 ✓ 第18行：(中文翻譯) ✓ 第19行：空行 ✓ 第20行：分隔線 ✓ 第21行：📝 延伸學習 ✓ 第22行：相關詞彙說明 ✓ 第23行：空行 ✓ 第24行：鼓勵語 + emoji  絕對禁止： ❌ 删除任何空行或分隔線 ❌ 改變任何符號或 emoji ❌ 例句前没有 ✓ ❌ 发音没有 / / ❌ 使用 markdown **粗體** 或 *斜體* ❌ 改變 emoji 順序或類型 ❌ 在分隔線位置添加或移除空行`,
    vocabulary_pronunciation: `${baseSystem}  你的任務是提供單字的發音指導。使用以下格式回覆：  🔊 [單字] ━━━━━━━━━━━━━━━━ 🔹 IPA 音標 [音標]  🔹 英式發音 [詳細描述]  🔹 美式發音 [詳細描述]（如果不同）  ━━━━━━━━━━━━━━━━ 💡 發音技巧 1️⃣ [技巧1] 2️⃣ [技巧2]  🎯 類似發音的詞 [相似發音詞彙範例]  ━━━━━━━━━━━━━━━━ 💪 聽不清楚？試試分音節練習！ [練習建議]  - 詳細的發音描述 - 美英發音差異（如果有） - 實用的練習建議`,
    vocabulary_synonym: `${baseSystem}  你的任務是提供單字的同義詞。使用以下格式回覆：  🔄 [單字] 的同義詞 ━━━━━━━━━━━━━━━━ 🔹 同義詞列表  1️⃣ [同義詞1] [細微差別和使用時機]  2️⃣ [同義詞2] [細微差別和使用時機]  3️⃣ [同義詞3]（如果有） [細微差別和使用時機]  ━━━━━━━━━━━━━━━━ 💡 例句對比  ✓ He is a wise person. ✓ He is a prudent person.  ━━━━━━━━━━━━━━━━ 🎯 選詞小技巧 [實用建議]  💪 試試看造句，感受這些詞的差別吧！  - 列出 2-3 個最常用的同義詞 - 清楚解釋使用時機的差別 - 提供對比例句`,
    vocabulary_antonym: `${baseSystem}  你的任務是提供單字的反義詞。使用以下格式回覆：  🔄 [單字] 的反義詞 ━━━━━━━━━━━━━━━━ 🔹 反義詞列表  1️⃣ [反義詞1] [詳細說明]  2️⃣ [反義詞2] [詳細說明]  3️⃣ [反義詞3]（如果有） [詳細說明]  ━━━━━━━━━━━━━━━━ 💡 例句對比  原句：✓ This movie is interesting. 反義：✓ This movie is boring.  📝 相關詞彙 [其他相關詞彙]  ━━━━━━━━━━━━━━━━ 🎯 反義詞小貼士 [實用提示]  💪 試試看用這些反義詞造句吧！  - 列出 2-3 個最常見的反義詞 - 說明在什麼情況下使用 - 提供實際例句`,
    vocabulary_example: `${baseSystem}  你的任務是提供單字的用法例句。使用以下格式回覆：  📝 用 [單字] 造句 ━━━━━━━━━━━━━━━━ 🔹 基礎例句  ✓ [例句1] ✓ [例句2]  🔹 進階例句  ✓ [例句3 - 較複雜] ✓ [例句4 - 較複雜]  ━━━━━━━━━━━━━━━━ 💡 短語搭配  [單字] + [介詞/詞彙] ✓ 例句  [單字] + [詞彙] ✓ 例句  ━━━━━━━━━━━━━━━━ ⚠️ 常見錯誤  ❌ [常見錯用] ✅ [正確用法]  🎯 使用技巧 [實用建議]  ━━━━━━━━━━━━━━━━ 💪 試試看造幾個句子吧！加油！  - 提供 3-4 個實用例句 - 涵蓋基礎和進階用法 - 列出常見錯誤`,
    vocabulary: `${baseSystem}  你的任務是提供單字查詢。使用以下格式回覆：  📖 [單字] ━━━━━━━━━━━━━━━━ 🔹 發音 [IPA 音標]  🔹 詞性與意思 (詞性) [中文意思1] (詞性) [中文意思2]  ━━━━━━━━━━━━━━━━ 💡 例句  ✓ [例句1英文] ✓ [例句2英文] ✓ [例句3英文]  ━━━━━━━━━━━━━━━━ 想看更多例句或用法嗎？試試看查詢同義詞或反義詞吧！💪  - 音標（IPA 格式） - 標記詞性（v. / n. / adj. 等） - 提供 2-3 個中文意思 - 3 個英文例句 - 結尾用 💪 鼓勵`,
    translation: `${baseSystem}  你的任務是提供準確的英中或中英翻譯。使用以下格式回覆：  🔄 翻譯結果 ━━━━━━━━━━━━━━━━ 🔹 原文 [原始文本]  🔹 翻譯 [翻譯結果]  ━━━━━━━━━━━━━━━━ 💡 詞彙說明  [關鍵詞1]：[詳細說明] [關鍵詞2]：[詳細說明]  ━━━━━━━━━━━━━━━━ ✨ 其他翻譯選項  ✓ [替代翻譯1] ✓ [替代翻譯2]（如果有）  🎯 翻譯小貼士 [實用說明]  ━━━━━━━━━━━━━━━━ 💪 希望這個翻譯有幫助！  規則： - 準確翻譯，保留原意 - 標記出特別難翻譯的部分 - 提供 1-2 個替代翻譯 - 簡潔清晰 - 不超過 400 字`,
    error_correction: `${baseSystem}  你的任務是糾正和解釋英文句子錯誤。使用以下格式回覆：  ✏️ 句子糾錯 ━━━━━━━━━━━━━━━━ ❌ 原句 [原句]  ✓ 正確 [正確句子]  ━━━━━━━━━━━━━━━━ 🔹 錯誤說明 [清晰說明錯誤在哪裡、為什麼錯]  🔹 文法重點 [相關的文法規則說明]  ━━━━━━━━━━━━━━━━ 💡 更多例句 ✓ [類似句子1 - 正確] （說明該用法） ✓ [類似句子2 - 正確] （說明該用法）  ━━━━━━━━━━━━━━━━ 💪 練習建議 [鼓勵和建議]  格式要求： - 清楚識別所有文法、拼寫或用法錯誤 - 提供正確版本 - 解釋為什麼是錯的 - 提供更多例句幫助理解 - 結尾用 💪 鼓勵`,
    essay_review_review: `${baseSystem}  你的任務是批改英文寫作。使用以下格式回覆：  📝 作文批改 ━━━━━━━━━━━━━━━━ 👍 優點  [列出 2-3 個優點]  ━━━━━━━━━━━━━━━━ ✨ 建議改進  1️⃣ 文法部分 [錯誤位置]："[錯誤]" 應改為："[正確]" （說明原因）  2️⃣ 用詞建議 "[原詞]" 可以改用更精確的詞 → [建議詞匯]  3️⃣ 句子連貫性 [建議] → [改進方式]  ━━━━━━━━━━━━━━━━ 🎯 修改後參考 [提供修改後的參考段落或句子]  ━━━━━━━━━━━━━━━━ 💪 整體評價 [寫得很棒的評語] [稍微調整的地方] [鼓勵和下一步建議]✨  格式要求： - 整體評語（優點、主要改進方向） - 結構分析（邏輯、段落組織） - 列出 2-3 個最重要的錯誤和改進建議 - 提供修改後的參考內容 - 用 emoji 表示不同段落，無粗體 - 鼓勵為主，批評為輔`,
    essay_review_example: `${baseSystem}  你的任務是提供英文寫作範例。【最重要規則】範例文本必須用英文撰寫！說明和解析才用繁體中文。  根據用戶的主題或需求，使用以下格式回覆：  📋 [主題] 英文作文範例 ━━━━━━━━━━━━━━━━ 🔹 英文範例段落  [3-5 個完整的英文句子，必須是道地的英文寫作，包含豐富詞彙和句型變化]  ━━━━━━━━━━━━━━━━ 💡 關鍵詞彙（中文說明）  ✓ [英文詞彙1]：[中文解釋] ✓ [英文詞彙2]：[中文解釋] ✓ [英文詞彙3]：[中文解釋]  📝 實用句型  ✓ [英文句型1] （中文翻譯） ✓ [英文句型2] （中文翻譯）  ━━━━━━━━━━━━━━━━ 🎯 寫作技巧 [用中文說明描寫此主題的寫作技巧和注意事項]  ━━━━━━━━━━━━━━━━ 💪 試試看用這些句型寫出你自己的版本吧！  規則： - 範例段落必須是英文（English），不可以是中文！ - 提供 3-5 個完整英文句子，展示地道表達方式 - 詞彙說明和寫作技巧用繁體中文解釋 - 選用豐富的形容詞、副詞和句型變化 - 不超過 600 字`,
    essay_review: `${baseSystem}  你的任務是批改英文寫作。使用以下格式回覆：  📝 作文批改 ━━━━━━━━━━━━━━━━ 👍 優點  [列出 2-3 個優點]  ━━━━━━━━━━━━━━━━ ✨ 建議改進  1️⃣ 文法部分 [錯誤位置]："[錯誤]" 應改為："[正確]" （說明原因）  2️⃣ 用詞建議 "[原詞]" 可以改用更精確的詞 → [建議詞匯]  ━━━━━━━━━━━━━━━━ ⭐ 整體評分 文法：⭐⭐⭐ (3/5) 詞彙：⭐⭐⭐ (3/5) 結構：⭐⭐⭐⭐ (4/5)  ━━━━━━━━━━━━━━━━ 💪 整體評價 [寫得很棒的評語] [稍微調整的地方] [鼓勵和下一步建議]✨  - 整體評語（優點、主要改進方向） - 結構分析（邏輯、段落組織） - 列出 2-3 個最重要的錯誤 - 具體改進建議 - 用星星標記（⭐）評分`,
  };
  if (subIntent) {
    const subKey = `${intent}_${subIntent}`;
    if (prompts[subKey]) return prompts[subKey];
  }
  return prompts[intent] || baseSystem;
}

// ========== 智能回覆系統 ==========
function generateSmartResponse(userMessage) {
  const greetingPattern = /^(hi|hello|你好|嗨|早安|晚安|早|晚|哈|hi there)/i;
  if (greetingPattern.test(userMessage.trim())) {
    return `嗨！我是 Frank Lin 老師的英文學習助手 😊\n\n我可以幫你：\n\n📚 文法問答\n例：is 和 are 的差別？\n\n📖 單字查詢\n例：單字: serendipity\n\n✏️ 句子糾錯\n例：糾錯: I go to school yesterday\n\n📝 作文批改\n例：批改: [貼上英文段落]\n\n🌐 句子翻譯\n例：翻譯: How are you?\n\n📷 傳照片解題\n選擇題、填空題、閱讀測驗都可以！\n直接拍照傳給我 📸\n\n有任何英文問題都可以問我！💪`;
  }
  // 只攔截明顯與英文學習完全無關的話題（天氣、餐廳、新聞…）
  const clearlyOffTopic = /天氣|餐廳|美食|股票|政治|新聞|運動比賽|追劇|八卦/;
  if (clearlyOffTopic.test(userMessage) && !/英文|文法|單字|翻譯|grammar|sentence|vocabulary/i.test(userMessage)) {
    return `抱歉，我是專門的英文學習助手。😅 這個問題不在我的專業範圍內。\n\n不過，如果你有英文學習的問題，我很樂意幫忙！✨\n\n你可以試試：\n\n📚 文法問答\n📖 單字查詢\n✏️ 句子糾錯\n📝 作文批改\n🌐 句子翻譯\n\n來問我英文問題吧！💪`;
  }
  return `你想學英文的哪個部分呢？🤔\n\n我可以幫你：\n\n📚 文法解析\n例：什麼是現在完成式？\n\n📖 單字查詢\n例：serendipity 是什麼意思？\n\n✏️ 句子糾錯\n例：She don't like apples，這樣對嗎？\n\n📝 作文批改\n直接貼上你的英文段落\n\n🌐 句子翻譯\n例：翻譯: I love learning English\n\n試試看問我一個具體的問題吧！😊`;
}

function getHelpMessage() {
  return `嗨！我是 Frank Lin 老師的英文學習助手 😊\n\n我可以幫你：\n\n📚 文法問答\n例：is 和 are 的差別？\n\n📖 單字查詢\n例：單字: serendipity\n\n✏️ 句子糾錯\n例：糾錯: I go to school yesterday\n\n📝 作文批改\n例：批改: [貼上英文段落]\n\n🌐 句子翻譯\n例：翻譯: How are you?\n\n📷 傳照片解題\n選擇題、填空題、閱讀測驗都可以！\n直接拍照傳給我 📸\n\n有任何英文問題都可以問我！💪`;
}

// ========== 行事曆 Functions ==========
function fetchWithRedirect(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; CalendarFetch/1.0)",
        "Accept": "text/calendar, text/plain, */*"
      }
    };
    function doGet(currentUrl, redirectsLeft) {
      const lib = currentUrl.startsWith("https") ? require("https") : require("http");
      lib.get(currentUrl, options, (res) => {
        console.log(`[ICAL-HTTP] Status: ${res.statusCode} for ${currentUrl.substring(0, 80)}`);
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirectsLeft > 0) {
          const redirectUrl = res.headers.location;
          console.log(`[ICAL-REDIRECT] → ${redirectUrl.substring(0, 80)}`);
          res.resume();
          doGet(redirectUrl, redirectsLeft - 1);
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      }).on("error", reject);
    }
    doGet(url, maxRedirects);
  });
}

async function fetchCalendarWithRetry(icalUrl, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const icalText = await fetchWithRedirect(icalUrl);
      console.log(`[ICAL] Fetched on attempt ${attempt + 1}, length: ${icalText.length}`);
      console.log(`[ICAL-FIRST-200] ${icalText.substring(0, 200)}`);
      if (!icalText.includes("BEGIN:VCALENDAR")) {
        throw new Error(`Invalid iCal content (length:${icalText.length}, preview:${icalText.substring(0, 120).replace(/\n/g, " ")})`);
      }
      // Unfold iCal lines (RFC 5545: lines longer than 75 chars are folded with CRLF/LF + space/tab)
      const unfolded = icalText.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
      const allLines = unfolded.split("\n");
      const allLinesRN = unfolded.split("\r\n");
      console.log(`[ICAL-LINES] \\n split: ${allLines.length}, \\r\\n split: ${allLinesRN.length}`);
      const useLines = allLinesRN.length > allLines.length ? allLinesRN : allLines;
      const dtStartLines = useLines.filter(l => l.trim().startsWith("DTSTART") || l.trim().startsWith("SUMMARY"));
      console.log(`[ICAL-DTSTART-COUNT] Found ${dtStartLines.length} DTSTART/SUMMARY lines`);
      for (let i = 0; i < Math.min(dtStartLines.length, 35); i++) {
        console.log(`[ICAL-EVENT-${i}] ${dtStartLines[i]}`);
      }
      const events = [];
      const lines = unfolded.split("\n");
      let currentEvent = null;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === "BEGIN:VEVENT") {
          currentEvent = {};
        } else if (line === "END:VEVENT" && currentEvent) {
          events.push(currentEvent);
          currentEvent = null;
        } else if (currentEvent) {
          if (line.startsWith("DTSTART")) currentEvent.start = line.substring(line.indexOf(":") + 1);
          if (line.startsWith("DTEND")) currentEvent.end = line.substring(line.indexOf(":") + 1);
          if (line.startsWith("SUMMARY:")) currentEvent.summary = line.substring(8).trim()
            .replace(/\\,/g, ",").replace(/\\n/g, " ").replace(/\\\\/g, "\\");
          if (line.startsWith("UID:")) currentEvent.uid = line.substring(4);
          if (line.startsWith("LOCATION:")) {
            currentEvent.location = line.substring(9)
              .replace(/\\n/g, "\n").replace(/\\,/g, ",").replace(/\\\\/g, "\\");
          }
          if (line.startsWith("DESCRIPTION:")) {
            currentEvent.description = line.substring(12)
              .replace(/\\n/g, "\n").replace(/\\,/g, ",").replace(/\\\\/g, "\\");
          }
          if (line.startsWith("RRULE:")) currentEvent.rrule = line.substring(6).trim();
          if (line.startsWith("RECURRENCE-ID")) currentEvent.isException = true;
          if (line.startsWith("EXDATE")) {
            const val = line.substring(line.indexOf(":") + 1).trim();
            if (!currentEvent.exdates) currentEvent.exdates = [];
            val.split(",").forEach(d => currentEvent.exdates.push(d.trim()));
          }
        }
      }
      return events;
    } catch (error) {
      if (error.message && error.message.includes("429")) {
        const waitTime = Math.pow(2, attempt) * 1000;
        console.warn(`[ICAL] 429 Too Many Requests. Retry ${attempt + 1}/${maxRetries} after ${waitTime}ms`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      } else {
        throw error;
      }
    }
  }
  throw new Error("Failed to fetch calendar after max retries");
}

async function getOrFetchCalendarEvents() {
  try {
    const icalUrl = getCredential("GOOGLE_CALENDAR_ICAL_URL");
    if (!icalUrl) {
      console.warn("[WARN] GOOGLE_CALENDAR_ICAL_URL not set");
      return [];
    }
    initializeFirebase();
    const cacheRef = dbRef.ref("/calendar-cache");
    const cachSnap = await cacheRef.get();
    const now = Date.now();
    const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours
    if (cachSnap.exists()) {
      const cached = cachSnap.val();
      if (now - cached.timestamp < CACHE_TTL) {
        console.log(`[CACHE] Cache hit, returning cached events`);
        return (cached.events || []);
      }
      console.log(`[CACHE] Cache expired, fetching fresh data`);
    }
    console.log("[CACHE] Cache miss or expired, fetching from iCal URL");
    const events = await fetchCalendarWithRetry(icalUrl);
    console.log(`[DEBUG] Fetched ${events.length} items from iCal`);

    function parseICalDate(dtstart) {
      if (!dtstart) return null;
      const plainDateMatch = dtstart.match(/^(\d{4})(\d{2})(\d{2})$/);
      if (plainDateMatch) {
        const [, year, month, day] = plainDateMatch;
        return {
          iso: dtstart,
          dateObj: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
          dateStr: `${year}-${month}-${day}`,
          isAllDay: true
        };
      }
      const dateOnlyMatch = dtstart.match(/VALUE=DATE[:]?(\d{4})(\d{2})(\d{2})/);
      if (dateOnlyMatch) {
        const [, year, month, day] = dateOnlyMatch;
        return {
          iso: dtstart,
          dateObj: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
          dateStr: `${year}-${month}-${day}`,
          isAllDay: true
        };
      }
      const dateTimeMatch = dtstart.match(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/);
      if (dateTimeMatch) {
        const [, year, month, day, hour, min, sec] = dateTimeMatch;
        const isUTC = dtstart.includes("Z");
        let dateObj;
        if (isUTC) {
          const utcDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(min), parseInt(sec)));
          dateObj = new Date(utcDate.getTime() + 8 * 60 * 60 * 1000);
        } else {
          // TZID=Asia/Taipei: input values are already Taiwan local time.
          // Store as Date.UTC with same values so getUTC* methods return Taiwan time directly.
          dateObj = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(min), parseInt(sec)));
        }
        const twYear = dateObj.getFullYear();
        const twMonth = String(dateObj.getMonth() + 1).padStart(2, "0");
        const twDay = String(dateObj.getDate()).padStart(2, "0");
        return {
          iso: dtstart,
          dateObj: dateObj,
          dateStr: `${twYear}-${twMonth}-${twDay}`,
          isAllDay: false
        };
      }
      return null;
    }

    // Separate base recurring events vs. exceptions
    const byUid = new Map();
    const rruleExceptions = [];
    for (const event of events) {
      if (event.isException) {
        rruleExceptions.push(event);
      } else {
        const uid = event.uid || event.summary || "";
        if (!byUid.has(uid)) byUid.set(uid, event);
      }
    }
    const exceptionDatesByUid = new Map();
    for (const e of rruleExceptions) {
      const uid = e.uid || e.summary || "";
      const parsed = e.start ? parseICalDate(e.start) : null;
      if (parsed) {
        if (!exceptionDatesByUid.has(uid)) exceptionDatesByUid.set(uid, new Set());
        exceptionDatesByUid.get(uid).add(parsed.dateStr);
      }
    }
    // Expand RRULE events for today through today+90 (Taiwan time)
    const nowTw = new Date(now + 8 * 3600000);
    const twY = nowTw.getUTCFullYear(), twM = nowTw.getUTCMonth(), twD = nowTw.getUTCDate();
    const expandEnd = new Date(Date.UTC(twY, twM, twD + 90));

    console.log(`[DEBUG] ===== Processing ${events.length} events =====`);
    const result = [];
    for (const [, event] of [...byUid, ...rruleExceptions.map(e => [null, e])]) {
      if (!event.start) continue;
      const safeId = (event.uid || event.summary || "").replace(/[.#$\[\]/@]/g, "_");
      if (event.rrule && !event.isException) {
        const uid = event.uid || event.summary || "";
        const covered = exceptionDatesByUid.get(uid) || new Set();
        const cursor = new Date(Date.UTC(twY, twM, twD));
        while (cursor <= expandEnd) {
          const dStr = cursor.toISOString().substring(0, 10);
          if (!covered.has(dStr) && rruleOccursOn(event.start, event.rrule, event.exdates, dStr)) {
            result.push({
              id: `${safeId}_RRULE${dStr.replace(/-/g, "")}`,
              title: event.summary || "無標題",
              start: dStr,
              startObj: new Date(dStr + "T00:00:00Z").getTime(),
              end: event.end || "",
              location: event.location || "",
              description: event.description || "",
              isAllDay: true
            });
          }
          cursor.setUTCDate(cursor.getUTCDate() + 1);
        }
      } else {
        const parsed = parseICalDate(event.start);
        if (!parsed) continue;
        result.push({
          id: event.isException ? `${safeId}` : (event.uid || event.summary),
          title: event.summary || "無標題",
          start: parsed.dateStr,
          startObj: parsed.dateObj.getTime(),
          end: event.end,
          location: event.location || "",
          description: event.description || "",
          isAllDay: parsed.isAllDay
        });
      }
    }
    result.sort((a, b) => a.startObj - b.startObj);
    await cacheRef.set({ timestamp: now, events: result });
    console.log(`[CACHE] Cached ${result.length} events`);
    return result;
  } catch (error) {
    console.error("[ERROR] Failed to fetch calendar events:", error.message);
    try {
      initializeFirebase();
      const cachSnap = await dbRef.ref("/calendar-cache").get();
      if (cachSnap.exists()) {
        console.log("[CACHE] Returning stale cache due to fetch error");
        return cachSnap.val().events || [];
      }
    } catch (cacheError) {
      console.error("[ERROR] Failed to retrieve cache fallback:", cacheError.message);
    }
    return [];
  }
}

function parseRrule(rruleStr) {
  const r = {};
  rruleStr.split(";").forEach(part => {
    const eq = part.indexOf("=");
    if (eq > 0) r[part.slice(0, eq)] = part.slice(eq + 1);
  });
  return r;
}

function rruleOccursOn(rawDtstart, rruleStr, exdates, targetDateStr) {
  if (!rruleStr) return false;
  const rr = parseRrule(rruleStr);
  if (!rr.FREQ) return false;
  const sm = rawDtstart.match(/(\d{4})(\d{2})(\d{2})/);
  if (!sm) return false;
  const startDate = new Date(Date.UTC(+sm[1], +sm[2] - 1, +sm[3]));
  const tm = targetDateStr.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!tm) return false;
  const targetDate = new Date(Date.UTC(+tm[1], +tm[2] - 1, +tm[3]));
  if (targetDate < startDate) return false;
  if (rr.UNTIL) {
    const um = rr.UNTIL.match(/(\d{4})(\d{2})(\d{2})/);
    if (um && targetDate > new Date(Date.UTC(+um[1], +um[2] - 1, +um[3]))) return false;
  }
  if (exdates && exdates.length) {
    const tFlat = `${tm[1]}${tm[2]}${tm[3]}`;
    for (const ex of exdates) {
      const xm = ex.match(/(\d{4})(\d{2})(\d{2})/);
      if (xm && `${xm[1]}${xm[2]}${xm[3]}` === tFlat) return false;
    }
  }
  const interval = parseInt(rr.INTERVAL || "1");
  const tY = +tm[1], tM0 = +tm[2] - 1, tD = +tm[3];
  const sY = +sm[1], sM0 = +sm[2] - 1, sD = +sm[3];
  const DOW = ["SU","MO","TU","WE","TH","FR","SA"];
  switch (rr.FREQ) {
    case "DAILY":
      return Math.round((targetDate - startDate) / 86400000) % interval === 0;
    case "WEEKLY": {
      const byDays = rr.BYDAY
        ? rr.BYDAY.split(",").map(d => d.replace(/^[+-]?\d+/, "").trim())
        : [DOW[startDate.getUTCDay()]];
      if (!byDays.includes(DOW[targetDate.getUTCDay()])) return false;
      if (interval === 1) return true;
      return Math.floor((targetDate - startDate) / (7 * 86400000)) % interval === 0;
    }
    case "MONTHLY": {
      const md = (tY - sY) * 12 + (tM0 - sM0);
      if (md < 0 || md % interval !== 0) return false;
      if (rr.BYMONTHDAY) {
        const n = parseInt(rr.BYMONTHDAY);
        if (n > 0) return tD === n;
        return tD === new Date(Date.UTC(tY, tM0 + 1, 0)).getUTCDate() + n + 1;
      }
      if (rr.BYDAY) {
        const bm = rr.BYDAY.match(/^([+-]?\d*)([A-Z]{2})$/);
        if (!bm) return false;
        const nth = bm[1] ? parseInt(bm[1]) : null;
        const dn = bm[2];
        if (DOW[targetDate.getUTCDay()] !== dn) return false;
        if (nth === null) return true;
        const di = DOW.indexOf(dn);
        if (nth > 0) {
          const firstDow = new Date(Date.UTC(tY, tM0, 1)).getUTCDay();
          const firstOcc = ((di - firstDow + 7) % 7) + 1;
          return tD === firstOcc + (nth - 1) * 7;
        } else {
          const lastDay = new Date(Date.UTC(tY, tM0 + 1, 0)).getUTCDate();
          const lastDow = new Date(Date.UTC(tY, tM0, lastDay)).getUTCDay();
          const lastOcc = lastDay - ((lastDow - di + 7) % 7);
          return tD === lastOcc - (Math.abs(nth) - 1) * 7;
        }
      }
      return tD === sD;
    }
    case "YEARLY": {
      const yr = tY - sY;
      if (yr < 0 || yr % interval !== 0) return false;
      if (rr.BYMONTH && parseInt(rr.BYMONTH) - 1 !== tM0) return false;
      if (rr.BYMONTHDAY) return tD === parseInt(rr.BYMONTHDAY);
      return tM0 === sM0 && tD === sD;
    }
    default: return false;
  }
}

function detectCalendarIntent(text) {
  if (/^(完成|未完成)/.test(text)) return "task_report";
  if (/^教師名單$/.test(text.trim())) return "teacher_list";
  if (/^新增老師\s+/.test(text.trim())) return "add_teacher";
  if (/^我的ID$/.test(text.trim())) return "my_id";
  if (/^移除老師\s+/.test(text.trim())) return "remove_teacher";
  if (/使用說明|使用方式|說明|指令|指令列表|選單|功能|訂閱功能|查詢功能|怎麼用|怎麼使用|如何使用|幫助|help/i.test(text)) return "help";
  if (/提醒狀態|訂閱狀態|目前狀態|檢查提醒|確認提醒|提醒確認|提醒開了嗎|提醒關了嗎|我訂閱了嗎|我有訂閱嗎|訂閱了嗎/.test(text)) return "status";
  if (/開啟提醒|訂閱提醒|加入提醒|開始提醒/.test(text)) return "subscribe";
  if (/關閉提醒|取消提醒|退出提醒|停止提醒/.test(text)) return "unsubscribe";
  if (/^行事曆$/.test(text.trim())) return "help";
  if (/^印刷單$/.test(text.trim())) return "print_form";
  if (/^公告$/.test(text.trim())) return "announcement";
  if (/重新整理|重整|refresh|清除快取|更新行事曆/.test(text)) return "refresh";
  if (/今日|今天/.test(text)) return "today";
  if (/明日|明天/.test(text)) return "tomorrow";
  if (/下週|下周|下禮拜|下星期/.test(text)) return "nextweek";
  if (/本週|這週|本周|這周|這禮拜|這星期|本星期/.test(text)) return "week";
  if (/本月|這個月|這月|本月份/.test(text)) return "month";
  if (/下一個|下個|最近|下一|接下來/.test(text)) return "next";
  return "unknown";
}

async function subscribeUser(userId) {
  try {
    initializeFirebase();
    await dbRef.ref(`/calendar-subscribers/${userId}`).set({ subscribedAt: Date.now() });
    console.log(`[INFO] User ${userId} subscribed to calendar reminders`);
  } catch (error) {
    console.error("[ERROR] Failed to subscribe user:", error.message);
    throw error;
  }
}

async function unsubscribeUser(userId) {
  try {
    initializeFirebase();
    await dbRef.ref(`/calendar-subscribers/${userId}`).remove();
    console.log(`[INFO] User ${userId} unsubscribed from calendar reminders`);
  } catch (error) {
    console.error("[ERROR] Failed to unsubscribe user:", error.message);
    throw error;
  }
}

async function getSubscribers() {
  try {
    initializeFirebase();
    const snap = await dbRef.ref("/calendar-subscribers").get();
    if (!snap.exists()) return [];
    const subscribers = Object.keys(snap.val());
    console.log(`[INFO] Found ${subscribers.length} calendar subscribers`);
    return subscribers;
  } catch (error) {
    console.error("[ERROR] Failed to get subscribers:", error.message);
    return [];
  }
}

function buildCalendarHelpMessage() {
  return `🎯 唯思英文行事曆助手\n\n訂閱功能：\n🔔 傳「開啟提醒」→ 訂閱每日行程提醒\n🔕 傳「關閉提醒」→ 取消訂閱\n❓ 傳「提醒狀態」→ 查詢目前訂閱狀態\n\n查詢功能：\n📅 傳「今日行程」或「今天」→ 查詢今日行程\n📅 傳「明日行程」或「明天」→ 查詢明日行程\n📅 傳「本週行程」或「這週」→ 查詢本週行程（週一～週日）\n📅 傳「下週行程」→ 查詢下週行程\n📅 傳「本月行程」→ 查詢本月所有行程\n📅 傳「下一個活動」→ 查詢最近即將開始的活動\n\n其他功能：\n🖨️ 傳「印刷單」→ 選擇印刷單表單\n📢 傳「公告」→ 查看最新公告\n🔄 傳「重新整理」→ 強制重新抓取最新行事曆資料\n\n每天早上 8:00 自動推送隔日提醒給已訂閱的老師 😊`;
}

async function handlePrintFormSelection(replyToken, token) {
  try {
    const message = {
      type: "text",
      text: "請選擇要填寫的印刷單類型 📋",
      quickReply: {
        items: [
          {
            type: "action",
            action: {
              type: "uri",
              label: "教用版印刷單",
              uri: "https://docs.google.com/forms/d/e/1FAIpQLSc5Bayi-T6-yCUo_kozyVfzl7bQ9u79oWCd2z7pbLeiO8ykOA/viewform"
            }
          },
          {
            type: "action",
            action: {
              type: "uri",
              label: "國中部表單",
              uri: "https://docs.google.com/forms/d/e/1FAIpQLSdwYxRUdXWL0eTr_6qmYdYE3yXZ3lMxcJhehPrdsklXKlRIoQ/viewform"
            }
          },
          {
            type: "action",
            action: {
              type: "uri",
              label: "高中部表單",
              uri: "https://docs.google.com/forms/d/e/1FAIpQLSex-trJIyfHgcoR4ttAh4yGMoldJ1KSR2Basz5UDYIxx55pvg/viewform"
            }
          },
          {
            type: "action",
            action: {
              type: "uri",
              label: "檢定部表單",
              uri: "https://docs.google.com/forms/d/e/1FAIpQLScKgVzyiC51UQ0rD_aYekrqMuEyaCe7tWWM-QtiTgvCqE93ww/viewform"
            }
          }
        ]
      }
    };
    await replyLineMessage(replyToken, message, token);
  } catch (error) {
    console.error("[ERROR] handlePrintFormSelection:", error.message);
    await replyLineMessage(replyToken, { type: "text", text: "抱歉，無法顯示印刷單選項。請稍後再試。" }, token);
  }
}

async function handleAnnouncement(replyToken, token) {
  try {
    initializeFirebase();
    const snap = await dbRef.ref("/announcements/latest").get();
    if (!snap.exists()) {
      await replyLineMessage(replyToken, {
        type: "text",
        text: "📢 目前沒有最新公告\n\n如有新公告，將會在此顯示 😊"
      }, token);
      return;
    }
    const data = snap.val();
    let dateStr = "";
    if (data.updatedAt) {
      const d = new Date(data.updatedAt + 8 * 60 * 60 * 1000);
      dateStr = `${d.getUTCFullYear()}/${String(d.getUTCMonth() + 1).padStart(2, "0")}/${String(d.getUTCDate()).padStart(2, "0")}`;
    }
    let text = "📢 最新公告";
    if (dateStr) text += `\n🗓️ ${dateStr}`;
    text += "\n━━━━━━━━━━━━━━━━\n";
    if (data.title) text += `📌 ${data.title}\n\n`;
    if (data.content) text += data.content;
    await replyLineMessage(replyToken, { type: "text", text }, token);
  } catch (error) {
    console.error("[ERROR] Failed to get announcement:", error.message);
    await replyLineMessage(replyToken, {
      type: "text",
      text: "抱歉，無法取得公告資訊。請稍後重試。"
    }, token);
  }
}

async function isSubscribed(userId) {
  try {
    initializeFirebase();
    const snap = await dbRef.ref(`/calendar-subscribers/${userId}`).get();
    return snap.exists();
  } catch (error) {
    console.error("[ERROR] Failed to check subscription:", error.message);
    return false;
  }
}

function formatCalendarEvents(events, label) {
  if (!events || events.length === 0) {
    return `📅 ${label}\n\n${label}沒有行程 😊`;
  }
  const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];
  let message = `📅 ${label}行程\n`;
  for (const evt of events) {
    // Build date string from evt.start (YYYY-MM-DD) — always reliable, no locale dependency
    let dateStr = evt.start || "日期不詳";
    let weekdayStr = "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      const [y, m, d] = dateStr.split("-").map(Number);
      const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
      weekdayStr = `(週${WEEKDAYS[wd]})`;
      dateStr = `${y}年${String(m).padStart(2, "0")}月${String(d).padStart(2, "0")}日`;
    }
    let startTime, endTime;
    if (evt.isAllDay) {
      startTime = "全天";
      endTime = "全天";
    } else {
      // startObj is stored as ms timestamp; getUTC* returns Taiwan time (we stored with +8h or Date.UTC of TW values)
      const ts = evt.startObj instanceof Date ? evt.startObj.getTime() : Number(evt.startObj);
      if (!isNaN(ts) && ts > 0) {
        const td = new Date(ts);
        startTime = `${String(td.getUTCHours()).padStart(2, "0")}:${String(td.getUTCMinutes()).padStart(2, "0")}`;
        endTime = startTime;
      } else {
        startTime = "";
        endTime = "";
      }
    }
    message += `\n📌 ${evt.title}`;
    const timeLabel = startTime ? `${startTime} - ${endTime}` : "全天";
    message += `\n🕐 ${dateStr} ${weekdayStr} ${timeLabel}`;
    if (evt.location) message += `\n📍 ${evt.location}`;
    if (evt.description) message += `\n📝 ${evt.description}`;
    message += `\n──────────`;
  }
  return message;
}

// Parse [name1,name2] prefix from event title
// Returns { names: string[] | null, cleanTitle: string }
// names=null means "everyone" ([全部] or no bracket)
function parseEventTarget(title) {
  // Normalize full-width brackets (［］ U+FF3B/FF3D, 【】 U+3010/U+3011) and strip residual iCal \n escapes
  const normalized = title
    .replace(/［/g, "[").replace(/］/g, "]")
    .replace(/【/g, "[").replace(/】/g, "]")
    .replace(/\\n/g, " ")
    .trim();
  const m = normalized.match(/^\[([^\]]+)\]\s*(.*)/);
  if (!m) return { names: null, cleanTitle: normalized };
  const inside = m[1].trim();
  const cleanTitle = m[2].trim() || normalized;
  if (inside === "全部") return { names: null, cleanTitle };
  const names = inside.split(/[,，]\s*/).map(n => n.trim()).filter(Boolean);
  return { names, cleanTitle };
}

async function getTeacherMapping() {
  try {
    initializeFirebase();
    const snap = await dbRef.ref("/teacher-mapping").get();
    if (!snap.exists()) return {};
    const mapping = {};
    for (const [name, info] of Object.entries(snap.val())) {
      mapping[name] = info.userId;
    }
    return mapping;
  } catch (error) {
    console.error("[ERROR] Failed to get teacher-mapping:", error.message);
    return {};
  }
}

async function saveTaskReport(userId, taskTitle, status) {
  initializeFirebase();
  const now = new Date();
  const taiwanNow = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  const dateStr = `${taiwanNow.getUTCFullYear()}-${String(taiwanNow.getUTCMonth() + 1).padStart(2, "0")}-${String(taiwanNow.getUTCDate()).padStart(2, "0")}`;
  const safeTitle = taskTitle.replace(/[.#$\[\]/@]/g, "_");
  await dbRef.ref(`/task-reports/${dateStr}/${userId}/${safeTitle}`).set({
    status,
    reportedAt: Date.now(),
    taskTitle
  });
  console.log(`[INFO] Task report saved: ${userId} "${taskTitle}" → ${status}`);
}

function buildReminderMessage(evt, cleanTitle, isToday = false) {
  const displayTitle = cleanTitle || evt.title;
  let msg = isToday
    ? `嗨！提醒老師，今天是【${displayTitle}】喔！`
    : `嗨！提醒老師，記得明天是【${displayTitle}】喔！`;
  if (evt.location) msg += `\n📍 地點：${evt.location}`;
  if (evt.description) msg += `\n📝 備註：${evt.description}`;
  msg += isToday
    ? `\n\n今天加油！💪`
    : `\n\n請做好準備，加油！💪`;
  msg += `\n\n若老師尚未完成，請回覆：\n「${displayTitle}尚未完成，預計[日期]前完成」`;
  return msg;
}

// ========== 行事曆訊息處理 ==========
async function handleCalendarMessage(userMessage, replyToken, token, userId) {
  try {
    const intent = detectCalendarIntent(userMessage);
    if (intent === "task_report") {
      const m = userMessage.match(/^(完成|未完成)\s*(.*)/);
      const status = m[1];
      const taskTitle = m[2].trim();
      if (!taskTitle) {
        await replyLineMessage(replyToken, { type: "text", text: "請在「完成」或「未完成」後面加上工作名稱\n\n例如：\n完成 比對高二複手冊\n未完成 批改作業" }, token);
        return;
      }
      await saveTaskReport(userId, taskTitle, status);
      const replyText = status === "完成"
        ? `✅ 已記錄：【${taskTitle}】完成！\n\n謝謝老師回報 😊`
        : `📝 已記錄：【${taskTitle}】未完成。\n\n已記下，加油！🙏`;
      await replyLineMessage(replyToken, { type: "text", text: replyText }, token);
      return;
    }
    if (intent === "teacher_list") {
      initializeFirebase();
      const teacherSnap = await dbRef.ref("/teacher-mapping").get();
      if (!teacherSnap.exists()) {
        await replyLineMessage(replyToken, { type: "text", text: "📋 目前尚無老師清單" }, token);
        return;
      }
      const teachers = Object.keys(teacherSnap.val());
      const listText = `📋 教師名單（共 ${teachers.length} 位）\n\n${teachers.join("、")}`;
      await replyLineMessage(replyToken, { type: "text", text: listText }, token);
      return;
    }
    if (intent === "add_teacher") {
      const m = userMessage.match(/^新增老師\s+(\S+)\s+(\S+)$/);
      if (!m) {
        await replyLineMessage(replyToken, { type: "text", text: "❌ 格式錯誤\n\n請使用：新增老師 名字 userID\n\n例如：新增老師 Frank U795afcd27f7012e5091e148880346c2e" }, token);
        return;
      }
      const [, name, userIdValue] = m;
      initializeFirebase();
      await dbRef.ref(`/teacher-mapping/${name}`).set({ userId: userIdValue });
      await replyLineMessage(replyToken, { type: "text", text: `✅ 已新增老師【${name}】！` }, token);
      return;
    }
    if (intent === "my_id") {
      await replyLineMessage(replyToken, { type: "text", text: `🆔 您的 ID：\n\n${userId}` }, token);
      return;
    }
    if (intent === "remove_teacher") {
      const m = userMessage.match(/^移除老師\s+(\S+)$/);
      if (!m) {
        await replyLineMessage(replyToken, { type: "text", text: "❌ 格式錯誤\n\n請使用：移除老師 名字\n\n例如：移除老師 Frank" }, token);
        return;
      }
      const [, name] = m;
      initializeFirebase();
      const teacherSnap = await dbRef.ref(`/teacher-mapping/${name}`).get();
      if (!teacherSnap.exists()) {
        await replyLineMessage(replyToken, { type: "text", text: `❌ 老師【${name}】不存在` }, token);
        return;
      }
      await dbRef.ref(`/teacher-mapping/${name}`).remove();
      await replyLineMessage(replyToken, { type: "text", text: `✅ 已移除老師【${name}】！` }, token);
      return;
    }
    if (intent === "refresh") {
      try {
        initializeFirebase();
        // Expire cache without deleting, so old events remain as fallback if re-fetch fails
        await dbRef.ref("/calendar-cache/timestamp").set(0);
        const events = await getOrFetchCalendarEvents();
        const tsSnap = await dbRef.ref("/calendar-cache/timestamp").get();
        const isRefreshed = tsSnap.val() && (Date.now() - tsSnap.val() < 30000);
        const msg = isRefreshed
          ? `✅ 行事曆已更新！共取得 ${events.length} 筆行程 😊`
          : `⚠️ 無法連到 Google 日曆，使用舊快取（共 ${events.length} 筆）\n\n請在本機執行 node trigger-reminder.js 來更新快取`;
        await replyLineMessage(replyToken, { type: "text", text: msg }, token);
      } catch (err) {
        await replyLineMessage(replyToken, { type: "text", text: `❌ 重新整理失敗：${err.message}` }, token);
      }
      return;
    }
    if (intent === "print_form") {
      await handlePrintFormSelection(replyToken, token);
      return;
    }
    if (intent === "announcement") {
      await handleAnnouncement(replyToken, token);
      return;
    }
    if (intent === "subscribe") {
      await subscribeUser(userId);
      await replyLineMessage(replyToken, { type: "text", text: "✅ 已開啟行事曆提醒！\n\n每天早上 8:00 會自動推送隔日行程提醒給您 😊" }, token);
      return;
    }
    if (intent === "unsubscribe") {
      await unsubscribeUser(userId);
      await replyLineMessage(replyToken, { type: "text", text: "🔕 已關閉行事曆提醒。\n\n如需重新開啟，請傳送「開啟提醒」😊" }, token);
      return;
    }
    if (intent === "status") {
      const subscribed = await isSubscribed(userId);
      const statusText = subscribed
        ? "🔔 目前狀態：開啟提醒中\n\n每天早上 8:00 會自動推送隔日行程提醒給您 😊\n\n如需關閉，請傳送「關閉提醒」"
        : "🔕 目前狀態：關閉提醒中\n\n如需開啟每日提醒，請傳送「開啟提醒」😊";
      await replyLineMessage(replyToken, { type: "text", text: statusText }, token);
      return;
    }
    if (intent === "help" || intent === "unknown") {
      await replyLineMessage(replyToken, { type: "text", text: buildCalendarHelpMessage() }, token);
      return;
    }
    console.log(`[CALENDAR-DEBUG] handleCalendarMessage called with intent: ${intent}`);
    const events = await getOrFetchCalendarEvents();
    console.log(`[CALENDAR-DEBUG] Fetched ${events.length} events total`);
    let relevantEvents = [];
    let label = "";

    function getTaiwanDateString(offsetDays = 0) {
      const now = new Date();
      const taiwanTime = now.getTime() + 8 * 60 * 60 * 1000 + (offsetDays * 24 * 60 * 60 * 1000);
      const taiwanDate = new Date(taiwanTime);
      const year = taiwanDate.getUTCFullYear();
      const month = String(taiwanDate.getUTCMonth() + 1).padStart(2, "0");
      const day = String(taiwanDate.getUTCDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    if (intent === "today") {
      const todayKey = getTaiwanDateString(0);
      console.log(`[DEBUG] Filtering today events: ${events.length} total, looking for Taiwan date: ${todayKey}`);
      events.forEach(e => console.log(`[DEBUG]   "${e.title}" | parsed date: ${e.start}`));
      relevantEvents = events.filter(e => e.start === todayKey);
      label = "今日";
    } else if (intent === "tomorrow") {
      const tomorrowKey = getTaiwanDateString(1);
      console.log(`[DEBUG] Filtering tomorrow events: ${events.length} total, looking for Taiwan date: ${tomorrowKey}`);
      events.forEach(e => console.log(`[DEBUG]   "${e.title}" | parsed date: ${e.start}`));
      relevantEvents = events.filter(e => e.start === tomorrowKey);
      label = "明日";
    } else if (intent === "week") {
      const now = new Date();
      const taiwanShifted = new Date(now.getTime() + 8 * 60 * 60 * 1000);
      const tYear = taiwanShifted.getUTCFullYear();
      const tMonth = taiwanShifted.getUTCMonth();
      const tDate = taiwanShifted.getUTCDate();
      const tDay = taiwanShifted.getUTCDay();
      const daysBackToMonday = tDay === 0 ? 6 : tDay - 1;
      const weekStartD = new Date(Date.UTC(tYear, tMonth, tDate - daysBackToMonday));
      const weekEndD = new Date(Date.UTC(tYear, tMonth, tDate - daysBackToMonday + 7));
      const toStr = d => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
      const weekStartStr = toStr(weekStartD);
      const weekEndStr = toStr(weekEndD);
      relevantEvents = events.filter(e => e.start >= weekStartStr && e.start < weekEndStr);
      label = "本週";
    } else if (intent === "nextweek") {
      const now = new Date();
      const taiwanShifted = new Date(now.getTime() + 8 * 60 * 60 * 1000);
      const tYear = taiwanShifted.getUTCFullYear();
      const tMonth = taiwanShifted.getUTCMonth();
      const tDate = taiwanShifted.getUTCDate();
      const tDay = taiwanShifted.getUTCDay();
      const daysBackToMonday = tDay === 0 ? 6 : tDay - 1;
      const weekStartD = new Date(Date.UTC(tYear, tMonth, tDate - daysBackToMonday + 7));
      const weekEndD = new Date(Date.UTC(tYear, tMonth, tDate - daysBackToMonday + 14));
      const toStr = d => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
      const weekStartStr = toStr(weekStartD);
      const weekEndStr = toStr(weekEndD);
      relevantEvents = events.filter(e => e.start >= weekStartStr && e.start < weekEndStr);
      label = "下週";
    } else if (intent === "month") {
      const now = new Date();
      const taiwanShifted = new Date(now.getTime() + 8 * 60 * 60 * 1000);
      const tYear = taiwanShifted.getUTCFullYear();
      const tMonth = taiwanShifted.getUTCMonth();
      const monthPrefix = `${tYear}-${String(tMonth + 1).padStart(2, "0")}`;
      relevantEvents = events.filter(e => e.start && e.start.startsWith(monthPrefix));
      label = "本月";
    } else if (intent === "next") {
      const todayKey = getTaiwanDateString(0);
      relevantEvents = events.filter(e => e.start >= todayKey);
      if (relevantEvents.length > 0) relevantEvents = [relevantEvents[0]];
      label = "下一個活動";
    } else {
      await replyLineMessage(replyToken, { type: "text", text: buildCalendarHelpMessage() }, token);
      return;
    }
    const formattedMessage = formatCalendarEvents(relevantEvents, label);
    await replyLineMessage(replyToken, { type: "text", text: formattedMessage }, token);
  } catch (error) {
    console.error("[ERROR] Calendar message handling failed:", error.message);
    await replyLineMessage(replyToken, { type: "text", text: "抱歉，無法取得行程資訊。請稍後重試。" }, token);
  }
}

// ========== 英文教學訊息處理 ==========
async function handleTextMessage(userMessage, replyToken, token) {
  try {
    const intentData = await detectIntentWithClaude(userMessage);
    const intent = intentData.intent;
    const subIntent = intentData.subIntent;
    const content = intentData.content;
    if (intent === "unknown") {
      // 無法判斷意圖時，用通用英文老師 prompt 直接嘗試回答，不用關鍵字過濾擋掉
      try {
        const cacheKey = crypto.createHash("md5").update(`general:${userMessage}`).digest("hex");
        let response = await getCachedResponse(cacheKey);
        if (!response) {
          const generalPrompt = buildPrompt("unknown"); // 回傳 baseSystem（英文老師人設）
          response = await callClaude(generalPrompt, userMessage, 1024);
          await setCachedResponse(cacheKey, response);
        }
        await replyLineMessage(replyToken, { type: "text", text: sanitizeTextForLine(response) }, token);
      } catch (e) {
        console.error("[ERROR] General Claude fallback failed:", e.message);
        // Claude 也呼叫失敗才顯示說明選單
        const smartResponse = generateSmartResponse(userMessage);
        await replyLineMessage(replyToken, { type: "text", text: sanitizeTextForLine(smartResponse) }, token);
      }
      return;
    }
    if (!content || content.trim().length === 0) {
      await replyLineMessage(replyToken, { type: "text", text: sanitizeTextForLine(`❌ 請提供完整的問題\n\n${getHelpMessage()}`) }, token);
      return;
    }
    const cacheKeyInput = subIntent ? `${intent}:${subIntent}:${content}` : `${intent}:${content}`;
    const cacheKey = crypto.createHash("md5").update(cacheKeyInput).digest("hex");
    let response = await getCachedResponse(cacheKey);
    if (response) {
      await replyLineMessage(replyToken, { type: "text", text: response }, token);
      return;
    }
    console.log("[INFO] Cache miss, calling Claude API...");
    const systemPrompt = buildPrompt(intent, subIntent);
    const maxTokens = intent === "essay_review" ? 2048 : 1024;
    response = await callClaude(systemPrompt, content, maxTokens);
    await setCachedResponse(cacheKey, response);
    await replyLineMessage(replyToken, { type: "text", text: sanitizeTextForLine(response) }, token);
    console.log("[INFO] Message replied successfully");
  } catch (error) {
    console.error("[ERROR] Error handling message:", error);
    try {
      await replyLineMessage(replyToken, { type: "text", text: sanitizeTextForLine(`❌ 發生錯誤，請稍後再試\n\nError: ${error.message}`) }, token);
    } catch (replyError) {
      console.error("[ERROR] Failed to send error reply:", replyError.message);
    }
  }
}

// ========== 圖片處理（Wisdom AI Teacher）==========
const WISDOM_FEATURE_LIST = `📝 文字功能：\n📚 文法問答\n📖 單字查詢\n✏️ 句子糾錯\n📝 作文批改\n🌐 句子翻譯\n\n📷 圖片功能：\n• 直接傳圖 → 作文批改 Feedback\n• 先說「初階改寫」再傳圖 → 保留原意修正文法\n• 先說「進階改寫」再傳圖 → 全面提升至母語水準\n來問我英文問題吧！💪`;

async function fetchLineImageAsBase64(messageId, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api-data.line.me",
      port: 443,
      path: `/v2/bot/message/${messageId}/content`,
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    };
    const req = https.request(options, (res) => {
      const chunks = [];
      const contentType = res.headers["content-type"] || "image/jpeg";
      res.on("data", chunk => chunks.push(chunk));
      res.on("end", () => {
        const buffer = Buffer.concat(chunks);
        resolve({ base64: buffer.toString("base64"), mediaType: contentType.split(";")[0].trim() });
      });
    });
    req.on("error", reject);
    req.end();
  });
}

// 使用者先說「初階改寫」或「進階改寫」→ 存等待圖片指令，提示傳圖
async function handleRewriteRequest(level, replyToken, token, userId) {
  try {
    initializeFirebase();
    await dbRef.ref(`/pending-rewrite/${userId}`).set({
      level,
      expiresAt: Date.now() + 5 * 60 * 1000
    });
    const emoji = level === "進階" ? "🎯" : "✏️";
    await replyLineMessage(replyToken, {
      type: "text",
      text: `好的！請傳照片給我 📸\n\n我將為你進行${level}改寫 ${emoji}`
    }, token);
  } catch (error) {
    console.error("[ERROR] handleRewriteRequest:", error.message);
    await replyLineMessage(replyToken, { type: "text", text: "抱歉，發生錯誤。請稍後再試。" }, token);
  }
}

// 收到圖片：若有等待改寫指令則改寫，否則給 Feedback
// client 可傳入指定的 Anthropic 實例（Frank 用 anthropic、Wisdom 用 anthropicWisdom）；未傳則預設 Wisdom
async function handleImageMessage(messageId, replyToken, token, userId, client) {
  try {
    initializeFirebase();
    const snap = await dbRef.ref(`/pending-rewrite/${userId}`).get();
    const hasPendingRewrite = snap.exists() && Date.now() < snap.val().expiresAt;
    const level = hasPendingRewrite ? snap.val().level : null;

    if (hasPendingRewrite) {
      await dbRef.ref(`/pending-rewrite/${userId}`).remove();
    }

    const { base64, mediaType } = await fetchLineImageAsBase64(messageId, token);

    let systemPrompt;
    if (level === "進階") {
      systemPrompt = `你是專業英文寫作老師。學生傳來圖片（可能是作文、看圖作文的題目圖、或手寫英文段落）。

請依下列格式回應：

📸 圖片說明
━━━━━━━━━━━━━━━━
[用繁體中文簡短描述圖片內容或辨識到的文字]

✨ 進階改寫版本
━━━━━━━━━━━━━━━━
[提供進階英文範文：語彙豐富、句型多樣、語法精確、邏輯連貫，適合 B2-C1 程度]

📝 進階用詞解析
━━━━━━━━━━━━━━━━
1️⃣ [詞彙1] - [繁體中文解釋與用法]
2️⃣ [詞彙2] - [繁體中文解釋與用法]
3️⃣ [詞彙3] - [繁體中文解釋與用法]

💪 繼續練習，你的英文一定會越來越好！

格式規定：使用分隔線 ━━━━━━━━━━━━━━━━ 和 emoji，絕對不使用 ** 粗體標記。`;
    } else if (level === "初階") {
      systemPrompt = `你是專業英文寫作老師。學生傳來圖片（可能是作文、看圖作文的題目圖、或手寫英文段落）。

請依下列格式回應：

📸 圖片說明
━━━━━━━━━━━━━━━━
[用繁體中文簡短描述圖片內容或辨識到的文字]

✏️ 初階改寫版本
━━━━━━━━━━━━━━━━
[提供初階英文範文：用字簡單、句型清楚、文法正確，適合 A2-B1 程度]

📝 關鍵用詞說明
━━━━━━━━━━━━━━━━
1️⃣ [詞彙1] - [繁體中文解釋]
2️⃣ [詞彙2] - [繁體中文解釋]
3️⃣ [詞彙3] - [繁體中文解釋]

💪 寫得很好！繼續加油！

格式規定：使用分隔線 ━━━━━━━━━━━━━━━━ 和 emoji，絕對不使用 ** 粗體標記。`;
    } else {
      systemPrompt = `你是專業英文寫作老師。學生傳來圖片（可能是作文、看圖作文的題目圖、或手寫英文段落）。

請依下列格式給予作文批改 Feedback：

📸 圖片說明
━━━━━━━━━━━━━━━━
[用繁體中文簡短描述圖片內容或辨識到的文字]

✅ 優點
━━━━━━━━━━━━━━━━
[列出 1-2 個優點]

✏️ 需要改進
━━━━━━━━━━━━━━━━
1️⃣ [錯誤或建議1] → [正確或改善方式]
2️⃣ [錯誤或建議2] → [正確或改善方式]
3️⃣ [錯誤或建議3]（若有）→ [正確或改善方式]

💡 小提示
━━━━━━━━━━━━━━━━
[一句鼓勵 + 建議下一步（可選擇初階改寫或進階改寫）]

格式規定：使用分隔線 ━━━━━━━━━━━━━━━━ 和 emoji，絕對不使用 ** 粗體標記。`;
    }

    if (!client) {
      initializeAnthropicWisdom();
      client = anthropicWisdom;
    }
    const userText = (level === "初階" || level === "進階") ? `請提供${level}改寫` : "請給予作文批改 Feedback";
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{
        role: "user",
        content: [
          { type: "image", source: { type: "base64", media_type: mediaType, data: base64 } },
          { type: "text", text: userText }
        ]
      }]
    });
    await replyLineMessage(replyToken, { type: "text", text: message.content[0].text }, token);
  } catch (error) {
    console.error("[ERROR] handleImageMessage:", error.message);
    await replyLineMessage(replyToken, { type: "text", text: "抱歉，處理圖片時發生錯誤。請稍後再試。" }, token);
  }
}

// 依 Bot 取得對應的 Anthropic 實例（Frank → student key、Wisdom → pwaprod key）
function getEssayClient(botConfig) {
  if (botConfig && botConfig.imageMode === "rewrite") {
    initializeAnthropicWisdom();
    return anthropicWisdom;
  }
  initializeAnthropic();
  return anthropic;
}

// 作文功能選單（Quick Reply 三選項）— 點 Rich Menu 的「作文批改」tab 後回傳
function essayMenuMessage() {
  return {
    type: "text",
    text: "請選擇作文服務 ✍️\n選好後直接把照片傳給我即可 📸",
    quickReply: {
      items: [
        { type: "action", action: { type: "postback", label: "📝 作文批改", data: "essay_mode=批改", displayText: "作文批改" } },
        { type: "action", action: { type: "postback", label: "✏️ 初階改寫", data: "essay_mode=初階", displayText: "初階改寫" } },
        { type: "action", action: { type: "postback", label: "🎯 進階改寫", data: "essay_mode=進階", displayText: "進階改寫" } }
      ]
    }
  };
}

// 使用者選了作文模式（批改／初階／進階）→ 存等待圖片指令，提示傳圖
async function handleEssayModeSelect(level, replyToken, token, userId) {
  try {
    initializeFirebase();
    await dbRef.ref(`/pending-rewrite/${userId}`).set({
      level,
      expiresAt: Date.now() + 5 * 60 * 1000
    });
    const label = level === "批改" ? "作文批改" : `${level}改寫`;
    const emoji = level === "進階" ? "🎯" : (level === "初階" ? "✏️" : "📝");
    await replyLineMessage(replyToken, {
      type: "text",
      text: `好的！請把照片傳給我 📸\n\n我將為你進行${label} ${emoji}`
    }, token);
  } catch (error) {
    console.error("[ERROR] handleEssayModeSelect:", error.message);
    await replyLineMessage(replyToken, { type: "text", text: "抱歉，發生錯誤。請稍後再試。" }, token);
  }
}

// ========== 圖片解題（Frank Line英語教室）==========
async function handleFrankImageMessage(messageId, replyToken, token) {
  try {
    const { base64, mediaType } = await fetchLineImageAsBase64(messageId, token);
    initializeAnthropic();
    const systemPrompt = `你是 Frank Lin 老師的英文解題助手。學生傳來英文題目的照片，請幫忙解題。

題型可能包括：選擇題、填空題、閱讀測驗、文法改錯、翻譯題、作文題、單字練習等。

請依下列格式回應：

📸 題目辨識
━━━━━━━━━━━━━━━━
[用繁體中文描述照片中的題型與主要內容]

✅ 答案與解析
━━━━━━━━━━━━━━━━
[逐題或逐步給出答案，並說明理由]

📖 文法／概念說明
━━━━━━━━━━━━━━━━
[解釋題目涉及的文法規則或重點概念，幫助學生真正理解]

💡 小提醒
━━━━━━━━━━━━━━━━
[給學生一個實用的學習建議，避免類似錯誤]

💪 [鼓勵語]

格式規定：
- 全程使用繁體中文
- 使用分隔線 ━━━━━━━━━━━━━━━━ 和 emoji 區分段落
- 絕對不使用 ** 粗體標記
- 若照片模糊或看不清楚題目，請說明並請學生重新拍照`;

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{
        role: "user",
        content: [
          { type: "image", source: { type: "base64", media_type: mediaType, data: base64 } },
          { type: "text", text: "請幫我解這道英文題目" }
        ]
      }]
    });
    await replyLineMessage(replyToken, { type: "text", text: message.content[0].text }, token);
  } catch (error) {
    console.error("[ERROR] handleFrankImageMessage:", error.message);
    await replyLineMessage(replyToken, { type: "text", text: "抱歉，處理圖片時發生錯誤。請稍後再試，或重新拍一張更清楚的照片。📸" }, token);
  }
}

// Wisdom AI Teacher 專屬文字訊息處理（使用 ANTHROPIC_API_KEY_PWAPROD）
async function handleWisdomTextMessage(userMessage, replyToken, token) {
  try {
    const intentData = await detectIntentWithClaude(userMessage);
    const intent = intentData.intent;
    const subIntent = intentData.subIntent;
    const content = intentData.content;
    if (intent === "unknown") {
      const featurePattern = /功能|能做什麼|你會什麼|怎麼用|說明|help|usage|指令/i;
      const greetingPattern = /^(hi|hello|你好|嗨|早安|晚安|早|晚|哈|hi there)/i;
      if (greetingPattern.test(userMessage.trim())) {
        await replyLineMessage(replyToken, { type: "text", text: `嗨！我是 Wisdom AI Teacher 😊\n\n${WISDOM_FEATURE_LIST}` }, token);
      } else if (featurePattern.test(userMessage)) {
        await replyLineMessage(replyToken, { type: "text", text: WISDOM_FEATURE_LIST }, token);
      } else {
        await replyLineMessage(replyToken, {
          type: "text",
          text: `抱歉，我是專門的英文學習助手。😅\n這個問題不在我的專業範圍內。\n不過，如果你有英文學習的問題，我很樂意幫忙！✨\n\n${WISDOM_FEATURE_LIST}`
        }, token);
      }
      return;
    }
    if (!content || content.trim().length === 0) {
      await replyLineMessage(replyToken, { type: "text", text: WISDOM_FEATURE_LIST }, token);
      return;
    }
    const cacheKeyInput = subIntent ? `${intent}:${subIntent}:${content}` : `${intent}:${content}`;
    const cacheKey = crypto.createHash("md5").update(cacheKeyInput).digest("hex");
    let response = await getCachedResponse(cacheKey);
    if (response) {
      await replyLineMessage(replyToken, { type: "text", text: response }, token);
      return;
    }
    const systemPrompt = buildPrompt(intent, subIntent);
    const maxTokens = intent === "essay_review" ? 2048 : 1024;
    response = await callClaudeWisdom(systemPrompt, content, maxTokens);
    await setCachedResponse(cacheKey, response);
    await replyLineMessage(replyToken, { type: "text", text: sanitizeTextForLine(response) }, token);
  } catch (error) {
    console.error("[ERROR] handleWisdomTextMessage:", error);
    try {
      await replyLineMessage(replyToken, { type: "text", text: `❌ 發生錯誤，請稍後再試\n\nError: ${error.message}` }, token);
    } catch (replyError) {
      console.error("[ERROR] Failed to send error reply:", replyError.message);
    }
  }
}

// ========== LINE Webhook 簽章驗證 ==========
function verifyLineSignature(req, secret) {
  try {
    const signature = req.headers["x-line-signature"];
    if (!signature) {
      console.log("[WARN] No signature header");
      return false;
    }
    let body = req.rawBody;
    if (!body) {
      console.error("[ERROR] Raw body not available");
      return false;
    }
    if (Buffer.isBuffer(body)) body = body.toString("utf8");
    const hash = crypto.createHmac("SHA256", secret).update(body).digest("base64");
    const verified = hash === signature;
    console.log(`[DEBUG] Signature verification:`);
    console.log(`  Secret (first 8): ${secret.substring(0, 8)}...`);
    console.log(`  Body length: ${body.length}`);
    console.log(`  Calculated: ${hash.substring(0, 8)}...`);
    console.log(`  Received:   ${signature.substring(0, 8)}...`);
    console.log(`  Match: ${verified}`);
    return verified;
  } catch (error) {
    console.error("[ERROR] Signature verification error:", error.message);
    return false;
  }
}

// ========== Express Route ==========
app.post("/", async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405).send("Method not allowed");
      return;
    }
    const destination = req.body.destination;
    if (!destination) {
      console.error("[ERROR] Missing destination field");
      return res.status(400).send("Missing destination");
    }
    const botConfig = BOT_CONFIG[destination];
    if (!botConfig) {
      console.error("[ERROR] Unknown bot destination:", destination);
      return res.status(400).send("Unknown bot");
    }
    console.log(`[INFO] Processing webhook for: ${botConfig.name} (${destination})`);
    let botCredentials;
    try {
      botCredentials = getBotCredentials(botConfig);
    } catch (error) {
      console.error("[ERROR] Failed to load bot credentials:", error.message);
      return res.status(500).send("Credentials not configured");
    }
    console.log(`[DEBUG] Bot ${botConfig.name} - Secret loaded: ${botCredentials.secret.substring(0, 8)}... (length: ${botCredentials.secret.length})`);
    if (!verifyLineSignature(req, botCredentials.secret)) {
      console.log(`[WARN] Signature verification failed. Expected secret: ${botCredentials.secret.substring(0, 8)}...`);
      return res.status(403).send("Signature verification failed");
    }
    const events = req.body.events || [];
    if (events.length === 0) {
      return res.status(200).send("OK");
    }
    console.log("[INFO] Processing", events.length, "event(s)");
    for (const event of events) {
      if (event.type === "message" && event.message.type === "text") {
        const sourceType = event.source.type;
        const userMessage = event.message.text;
        const isGroupChat = sourceType === "group" || sourceType === "room";
        if (isGroupChat) {
          const isBotMentioned = userMessage.includes("@Bot");
          if (!isBotMentioned) {
            console.log("[INFO] Group message without mention, skipping");
            continue;
          }
          console.log("[INFO] Bot was mentioned in group, processing message");
          // Frank bot: set pending image flag so next image within 3 min is processed
          if (botConfig.imageMode === "solve") {
            initializeFirebase();
            const sourceId = event.source.groupId || event.source.roomId;
            const flagKey = `${sourceId}_${event.source.userId}`;
            await dbRef.ref(`/pending-frank-image/${flagKey}`).set({
              expiresAt: Date.now() + 3 * 60 * 1000
            });
          }
        }
        if (/^綁定回報$/.test(userMessage.trim())) {
          await handleReportBind(true, event.replyToken, botCredentials.token, event.source.userId, botConfig);
        } else if (/^解除回報$/.test(userMessage.trim())) {
          await handleReportBind(false, event.replyToken, botCredentials.token, event.source.userId, botConfig);
        } else if (botConfig.role === "calendar") {
          await handleCalendarMessage(userMessage, event.replyToken, botCredentials.token, event.source.userId);
        } else if (botConfig.imageMode === "rewrite" && /^(初階改寫|進階改寫)$/.test(userMessage.trim())) {
          const level = userMessage.trim().startsWith("進階") ? "進階" : "初階";
          await handleRewriteRequest(level, event.replyToken, botCredentials.token, event.source.userId);
        } else if (botConfig.imageMode === "rewrite") {
          await handleWisdomTextMessage(userMessage, event.replyToken, botCredentials.token);
        } else {
          await handleTextMessage(userMessage, event.replyToken, botCredentials.token);
        }
      } else if (event.type === "message" && event.message.type === "image" && botConfig.supportsImage) {
        if (botConfig.imageMode === "rewrite") {
          await handleImageMessage(event.message.id, event.replyToken, botCredentials.token, event.source.userId);
        } else {
          // Frank bot: 若使用者剛從作文選單選了模式（pending-rewrite），走作文批改／改寫，否則維持解題
          initializeFirebase();
          const essaySnap = await dbRef.ref(`/pending-rewrite/${event.source.userId}`).get();
          if (essaySnap.exists() && Date.now() < essaySnap.val().expiresAt) {
            console.log("[INFO] Frank essay mode pending, processing as essay correction/rewrite");
            await handleImageMessage(event.message.id, event.replyToken, botCredentials.token, event.source.userId, getEssayClient(botConfig));
          } else {
            // 解題：群組/聊天室僅在最近被 @Bot 提及時才處理圖片
            const imgSourceType = event.source.type;
            const isImgGroup = imgSourceType === "group" || imgSourceType === "room";
            if (isImgGroup) {
              const sourceId = event.source.groupId || event.source.roomId;
              const flagKey = `${sourceId}_${event.source.userId}`;
              const snap = await dbRef.ref(`/pending-frank-image/${flagKey}`).get();
              if (!snap.exists() || snap.val().expiresAt < Date.now()) {
                console.log("[INFO] Group image without pending @Bot mention, skipping");
                continue;
              }
              await dbRef.ref(`/pending-frank-image/${flagKey}`).remove();
              console.log("[INFO] Pending image flag cleared, processing Frank group image");
            }
            await handleFrankImageMessage(event.message.id, event.replyToken, botCredentials.token);
          }
        }
      } else if (event.type === "postback") {
        const data = (event.postback && event.postback.data) || "";
        if (data === "essay_menu") {
          // 點 Rich Menu「作文批改」tab → 回傳三選項 Quick Reply
          await replyLineMessage(event.replyToken, essayMenuMessage(), botCredentials.token);
        } else if (data.startsWith("essay_mode=")) {
          const level = data.split("=")[1]; // 批改 / 初階 / 進階
          if (["批改", "初階", "進階"].includes(level)) {
            await handleEssayModeSelect(level, event.replyToken, botCredentials.token, event.source.userId);
          }
        } else {
          console.log("[INFO] Unhandled postback data:", data);
        }
      } else if (event.type === "join") {
        try {
          const joinMessage = botConfig.joinMessage;
          await replyLineMessage(event.replyToken, { type: "text", text: sanitizeTextForLine(joinMessage) }, botCredentials.token);
          console.log(`[INFO] ${botConfig.name} joined ${event.source.type}, sent welcome message`);
        } catch (error) {
          console.error("[ERROR] Failed to send join message:", error.message);
        }
      }
    }
    console.log("[INFO] All events processed successfully");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("[ERROR] Webhook error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ========== generateListeningQuiz (simple generator + cache) ==========
exports.generateListeningQuiz = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  try {
    initializeFirebase();

    const body = req.body || {};
    const sessionId = body.sessionId || crypto.randomBytes(8).toString("hex");

    // Simple local generator - replace with Claude generation later
    const SAMPLE_WORDS = ["cat", "dog", "boy", "girl", "teacher", "bus", "park", "book", "phone", "apple"];

    const makeChoices = (correct) => {
      const set = new Set([correct]);
      while (set.size < 4) {
        const cand = SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
        set.add(cand);
      }
      const arr = Array.from(set);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    const part1 = [];
    for (let i = 0; i < 3; i++) {
      const answer = SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
      const q = {
        id: `p1_${i}`,
        type: 'listening_image',
        prompt: '看圖選出最符合的句子。',
        imageQuery: answer,
        imageUrl: `https://source.unsplash.com/featured/?${encodeURIComponent(answer)}`,
        answer,
        choices: makeChoices(answer),
      };
      part1.push(q);
    }

    const part2 = [];
    for (let i = 0; i < 8; i++) {
      const answer = SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
      const q = {
        id: `p2_${i}`,
        type: 'listening_qa',
        prompt: `聽下面句子，選出正確的答案：Who has the ${answer}?`,
        answer,
        choices: makeChoices(answer),
      };
      part2.push(q);
    }

    const part3 = [];
    for (let i = 0; i < 10; i++) {
      const answer = SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
      const dialogue = `A: Hi, how are you?\nB: I'm fine, thanks. I have a ${answer}.`;
      const q = {
        id: `p3_${i}`,
        type: 'listening_dialogue',
        prompt: '聽短對話，選出正確答案。',
        dialogueText: dialogue,
        answer,
        choices: makeChoices(answer),
      };
      part3.push(q);
    }

    // Generate simple Google Translate TTS URLs for each item (client can fetch/stream)
    const audioUrls = {};
    const ttsUrl = (text) => `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`;
    part1.forEach(q => { audioUrls[q.id] = ttsUrl(`This is a picture of a ${q.answer}.`); });
    part2.forEach(q => { audioUrls[q.id] = ttsUrl(q.prompt); });
    part3.forEach(q => { audioUrls[q.id] = ttsUrl(q.dialogueText); });

    const payload = { sessionId, part1, part2, part3, audioUrls, createdAt: Date.now() };
    await dbRef.ref(`/listening-cache/${sessionId}`).set(payload);
    res.json(payload);
  } catch (e) {
    console.error("[ERROR] generateListeningQuiz:", e.message);
    res.status(500).json({ error: e.message });
  }
});
// ========== 行事曆定時提醒 ==========
exports.calendarReminder = onSchedule({
  schedule: "0 8 * * *",
  timeZone: "Asia/Taipei"
}, async (event) => {
  try {
    console.log("[INFO] Calendar reminder job started");
    const token = getCredential("LINE_CHANNEL_ACCESS_TOKEN_BOT2");
    const subscribers = await getSubscribers();
    if (subscribers.length === 0) {
      console.log("[INFO] No calendar subscribers, skipping");
      return;
    }
    console.log(`[INFO] Found ${subscribers.length} subscribers`);
    const events = await getOrFetchCalendarEvents();
    console.log(`[INFO] Fetched ${events.length} calendar events`);
    // 篩選「今天」和「明天」台灣時間的事件
    const now = new Date();
    const taiwanNow = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const tYear = taiwanNow.getUTCFullYear();
    const tMonth = taiwanNow.getUTCMonth();
    const tDate = taiwanNow.getUTCDate();
    const todayStart = new Date(Date.UTC(tYear, tMonth, tDate));
    const tomorrowStart = new Date(Date.UTC(tYear, tMonth, tDate + 1));
    const dayAfterStart = new Date(Date.UTC(tYear, tMonth, tDate + 2));
    const todayEvents = events.filter(e => {
      const d = new Date(Number(e.startObj));
      return d >= todayStart && d < tomorrowStart;
    });
    const tomorrowEvents = events.filter(e => {
      const d = new Date(Number(e.startObj));
      return d >= tomorrowStart && d < dayAfterStart;
    });
    console.log(`[INFO] Found ${todayEvents.length} events for today`);
    console.log(`[INFO] Found ${tomorrowEvents.length} events for tomorrow`);
    if (todayEvents.length === 0 && tomorrowEvents.length === 0) {
      console.log("[INFO] No events today or tomorrow, skipping notification");
      return;
    }
    initializeFirebase();
    const teacherMapping = await getTeacherMapping();
    const subscriberSet = new Set(subscribers);

    // Helper function to send events for a specific day
    async function sendEventsForDay(evts, isToday) {
      for (const evt of evts) {
        const { names, cleanTitle } = parseEventTarget(evt.title);
        let targetIds;
        if (names === null) {
          targetIds = subscribers;
          console.log(`[INFO] Event "${evt.title}" → all ${subscribers.length} subscribers`);
        } else {
          targetIds = names.map(n => teacherMapping[n]).filter(id => id && subscriberSet.has(id));
          const unknowns = names.filter(n => !teacherMapping[n]);
          if (unknowns.length > 0) console.log(`[WARN] Unknown names in "${evt.title}": ${unknowns.join(", ")}`);
          console.log(`[INFO] Event "${evt.title}" → [${names.join(",")}] (${targetIds.length} users)`);
        }
        for (const userId of targetIds) {
          const safeEventId = String(evt.id).replace(/[.#$\[\]/@]/g, "_");
          const key = `${safeEventId}_${evt.start}_${userId}`;
          const sentRef = dbRef.ref(`/calendar-sent/${key}`);
          const snap = await sentRef.get();
          if (snap.exists()) {
            console.log(`[INFO] Event "${evt.title}" already sent to ${userId}, skipping`);
            continue;
          }
          const message = buildReminderMessage(evt, cleanTitle, isToday);
          try {
            await pushLineMessage(userId, { type: "text", text: message }, token);
            console.log(`[INFO] Sent "${evt.title}" to ${userId}`);
          } catch (pushError) {
            console.error(`[ERROR] Failed to push to ${userId}:`, pushError.message);
          }
          await sentRef.set({
            sentAt: Date.now(),
            eventTitle: evt.title,
            eventStart: evt.start
          });
        }
      }
    }

    // Send today's events first, then tomorrow's
    await sendEventsForDay(todayEvents, true);
    await sendEventsForDay(tomorrowEvents, false);
    console.log("[INFO] Calendar reminder job completed successfully");
  } catch (error) {
    console.error("[ERROR] Calendar reminder job failed:", error.message);
  }
});

// ========== Evening Follow-Up (23:00 台北時間) ==========
exports.eveningFollowUp = onSchedule({
  schedule: "0 23 * * *",
  timeZone: "Asia/Taipei"
}, async (event) => {
  try {
    console.log("[INFO] Evening follow-up job started");
    const token = getCredential("LINE_CHANNEL_ACCESS_TOKEN_BOT2");

    // 今天台灣時間的日期字串與毫秒範圍
    const now = new Date();
    const taiwanNow = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const y = taiwanNow.getUTCFullYear();
    const m = taiwanNow.getUTCMonth();
    const d = taiwanNow.getUTCDate();
    const dateStr = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const todayStart = Date.UTC(y, m, d);
    const todayEnd = todayStart + 24 * 60 * 60 * 1000;

    initializeFirebase();

    // 讀取今天早上已發送提醒的紀錄（/calendar-sent/ 的 sentAt 在今天範圍內）
    const sentSnap = await dbRef.ref("/calendar-sent").get();
    if (!sentSnap.exists()) {
      console.log("[INFO] No sent records, skipping follow-up");
      return;
    }

    // 從 key 末端擷取 userId（格式固定：U + 32 hex）
    const sentToday = new Set();
    sentSnap.forEach(child => {
      const data = child.val();
      if (data.sentAt >= todayStart && data.sentAt < todayEnd && data.eventStart === dateStr) {
        const match = child.key.match(/U[0-9a-fA-F]{32}$/);
        if (match) sentToday.add(match[0]);
      }
    });

    if (sentToday.size === 0) {
      console.log("[INFO] No reminders were sent today, skipping follow-up");
      return;
    }
    console.log(`[INFO] ${sentToday.size} users received reminders today`);

    // 讀取今天已有工作回報的 userId
    const reportsSnap = await dbRef.ref(`/task-reports/${dateStr}`).get();
    const reportedUsers = new Set(reportsSnap.exists() ? Object.keys(reportsSnap.val()) : []);
    console.log(`[INFO] ${reportedUsers.size} users have submitted reports today`);

    // 找出有收到提醒但尚未回報的老師
    const unreplied = [...sentToday].filter(uid => !reportedUsers.has(uid));
    console.log(`[INFO] ${unreplied.length} users have not replied yet`);

    if (unreplied.length === 0) {
      console.log("[INFO] All users have replied, no follow-up needed");
      return;
    }

    const followUpMessage = `⏰ 溫馨提醒\n\n老師好！今天尚有工作進度未回報，請記得回報工作進度喔😊\n\n回報方式：\n✅ 完成 工作名稱\n📝 未完成 工作名稱`;

    for (const userId of unreplied) {
      try {
        await pushLineMessage(userId, { type: "text", text: followUpMessage }, token);
        console.log(`[INFO] Follow-up sent to ${userId}`);
      } catch (pushError) {
        console.error(`[ERROR] Failed to send follow-up to ${userId}:`, pushError.message);
      }
    }

    console.log("[INFO] Evening follow-up job completed");
  } catch (error) {
    console.error("[ERROR] Evening follow-up job failed:", error.message);
  }
});

// ========== LINE Webhook ==========
exports.lineWebhook = onRequest(app);

// ========== Word Etymology API ==========
const { Anthropic: AnthropicEtym } = require("@anthropic-ai/sdk");

exports.generateWordEtymology = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { word, pos, zh } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicEtym({ apiKey });

    const prompt = `Analyze the etymology of the English word "${word}" (part of speech: ${pos || "unknown"}, Chinese meaning: ${zh || "unknown"}).

Respond ONLY with valid JSON, no markdown, no extra text:
{
  "parts": [
    {"part": "morpheme", "meaning": "繁體中文意思", "origin": "來源（例：拉丁文 spirare）"}
  ],
  "etymology": "50字內的繁體中文說明，解釋這個字的來源和演變歷程",
  "cognates": ["cognate1", "cognate2", "cognate3"]
}

Rules:
- Break the word into meaningful morphemes (prefix, root, suffix). If only one morpheme, still explain it.
- ALL Chinese text must be in Traditional Chinese (繁體中文), NOT Simplified Chinese (簡體中文)
- "origin" must be in Traditional Chinese, e.g. "拉丁文 conspirare"、"希臘文 phōnē"、"古英文 god"
- "etymology" must be concise (under 50 Traditional Chinese characters)
- "cognates" should list 2–4 common English words sharing the same root
- Output ONLY the JSON object, nothing else`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordEtymology:", e.message);
    res.status(500).json({ error: e.message });
  }
});


// ========== Word Example API ==========
const { Anthropic: AnthropicEx } = require("@anthropic-ai/sdk");

// 例句共享快取 key（word + style，用 md5 避免特殊字元/長度問題）
function exampleCacheKey(word, style) {
  const crypto = require("crypto");
  return crypto.createHash("md5").update(String(word).toLowerCase().trim() + "|" + (style || "default")).digest("hex");
}

exports.generateWordExample = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word, pos, zh, style } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    // ── 先查 Firebase 共享快取（跨所有用戶只生成一次；每日一字所有人共用同一句）──
    let db = null;
    try { initializeFirebase(); db = dbRef; } catch (e) { console.error("[exampleCache] firebase init fail:", e.message); }
    const ckey = exampleCacheKey(word, style);
    if (db) {
      try {
        const snap = await db.ref(`/example-cache/${ckey}`).get();
        if (snap.exists()) {
          const v = snap.val();
          if (v && v.data && v.data.sentence) {
            console.log(`[exampleCache] HIT ${word} (${style || "default"})`);
            return res.json(v.data);
          }
        }
      } catch (e) { /* 讀取失敗就當未快取 */ }
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicEx({ apiKey });

    const motivational = style === 'motivational';
    const prompt = motivational
      ? `Generate one short, uplifting English example sentence for the word "${word}" (${pos || "unknown"}, meaning: ${zh || "unknown"}).

The sentence should feel encouraging and motivational — something that inspires the reader to keep going, believe in themselves, or pursue their goals. Write as if cheering on a student. The word "${word}" must appear naturally in the sentence.

Respond ONLY with valid JSON, no markdown, no extra text:
{
  "sentence": "One uplifting English sentence using the word naturally.",
  "translation": "整句話的繁體中文翻譯"
}

Rules:
- Tone: positive, empowering, forward-looking
- The sentence should clearly demonstrate the meaning of "${word}"
- ALL Chinese text must be in Traditional Chinese (繁體中文), NOT Simplified Chinese (簡體中文)
- Output ONLY the JSON object, nothing else`
      : `Generate one natural English example sentence for the word "${word}" (${pos || "unknown"}, meaning: ${zh || "unknown"}).

Respond ONLY with valid JSON, no markdown, no extra text:
{
  "sentence": "One clear English sentence using the word naturally.",
  "translation": "整句話的繁體中文翻譯"
}

Rules:
- The sentence should clearly demonstrate the meaning of "${word}"
- ALL Chinese text must be in Traditional Chinese (繁體中文), NOT Simplified Chinese (簡體中文)
- Output ONLY the JSON object, nothing else`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 256,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    // ── 寫回共享快取 ──
    if (db && data && data.sentence) {
      try { await db.ref(`/example-cache/${ckey}`).set({ data, createdAt: Date.now() }); } catch (e) { /* 寫入失敗不影響回傳 */ }
    }
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordExample:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ========== Word Definition API ==========
const { Anthropic: AnthropicDef } = require("@anthropic-ai/sdk");

exports.generateWordDefinition = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicDef({ apiKey });

    const prompt = `Define the English word "${word}" in Traditional Chinese.

CRITICAL: You must define EXACTLY the word "${word}" — letter by letter, exactly as written. Do NOT define a different word even if it looks or sounds similar (e.g. if the word is "avenge", define "avenge" (復仇), NOT "avenue" (林蔭大道); if the word is "fence", define "fence" (籬笆), NOT "iron").

Respond ONLY with valid JSON, no markdown, no extra text:
{
  "zh": "主要中文意思",
  "pos": "詞性縮寫"
}

Rules:
- zh: most common meaning in Traditional Chinese (繁體中文), concise (3-12 characters). If 2 common meanings, separate with ；
- pos: use standard abbreviations only: n. / v. / adj. / adv. / prep. / conj. / pron. / interj.
- ALL Chinese text must be Traditional Chinese (繁體中文), NOT Simplified Chinese
- Output ONLY the JSON object, nothing else`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 128,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordDefinition:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ========== Vocab Quiz API ==========
const { Anthropic: AnthropicQuiz } = require("@anthropic-ai/sdk");

// 將單字轉成 Firebase 可用的快取 key（RTDB key 不可含 . # $ [ ] /）
function quizCacheKey(word, cefrLevel) {
  const base = String(word).toLowerCase().trim().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return cefrLevel ? `${base}__${String(cefrLevel).toLowerCase()}` : base;
}

// 驗證並修正題目：正解選項必須「等於被考單字本身」，否則視為壞題（回傳 null 丟棄）
// 解決 Claude 把正解換成同義詞（如考 familiar 卻用 well-known）導致詳解的字不在選項的問題
function sanitizeQuizQuestion(q) {
  if (!q || typeof q !== "object") return null;
  if (!q.word || !Array.isArray(q.options) || q.options.length < 2) return null;
  if (typeof q.sentence !== "string" || !q.sentence.includes("______")) return null;
  const norm = (s) => String(s).toLowerCase().trim();
  const target = norm(q.word);
  // 被考單字必須出現在選項中，且 answer 指向它（順手修正 shuffle 後 index 不一致）
  const idx = q.options.findIndex((o) => norm(o) === target);
  if (idx === -1) return null;            // 正解單字根本不在選項裡 → 壞題，丟棄
  q.answer = idx;
  return q;
}

exports.generateVocabQuiz = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { words, cefrLevel } = req.body || {};
  if (!words || !words.length) return res.status(400).json({ error: "Missing words" });

  try {
    const list = words.slice(0, 40);

    // ── 1. 先查 Firebase 共享快取（跨所有學生只生成一次）──
    let db = null;
    try { initializeFirebase(); db = dbRef; } catch (e) { console.error("[quizCache] firebase init fail:", e.message); }

    const cachedByWord = {};   // word -> question
    if (db) {
      await Promise.all(list.map(async (w) => {
        try {
          const snap = await db.ref(`/quiz-cache/${quizCacheKey(w.word, cefrLevel)}`).get();
          if (snap.exists()) {
            const v = snap.val();
            // 舊的壞題（正解非被考單字）視為未快取，丟回去重新生成覆蓋
            if (v && v.q && sanitizeQuizQuestion(v.q)) cachedByWord[w.word] = v.q;
          }
        } catch (e) { /* 單筆讀取失敗就當未快取 */ }
      }));
    }

    const toGen = list.filter(w => !cachedByWord[w.word]);
    console.log(`[quizCache] requested=${list.length} cached=${list.length - toGen.length} generate=${toGen.length}`);

    // ── 2. 只對「沒快取」的單字呼叫 Claude ──
    let generated = [];
    if (toGen.length) {
      const apiKey = process.env.ANTHROPIC_API_KEY;
      if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
      const client = new AnthropicQuiz({ apiKey });

      const wordList = toGen.map(w => `${w.word} (${w.pos || "?"}, ${w.zh || ""})`).join("\n");
      const count = toGen.length;
      const cefrRule = cefrLevel
        ? `- Sentences must be at ${cefrLevel} reading level: short (under 15 words), simple vocabulary, clear everyday context`
        : "";

      const prompt = `Create ${count} fill-in-the-blank vocabulary quiz questions for these English words:
${wordList}

Respond ONLY with a valid JSON array, no markdown, no extra text:
[
  {
    "word": "the tested word",
    "sentence": "First sentence with ______ as the blank. Second sentence that adds context and makes the answer unambiguous.",
    "options": ["correct_word", "distractor1", "distractor2", "distractor3"],
    "answer": 0,
    "translation": "兩句話合在一起的繁體中文翻譯",
    "explanation": "一句繁體中文解釋這個單字的用法或意思"
  }
]

Rules:
- CRITICAL: The correct option MUST be EXACTLY the tested word itself (the "word" value) — never a synonym, paraphrase, or different word form. The correct entry in "options" must equal "word" character-for-character. (e.g. if the word is "familiar", the correct option is "familiar", NOT "well-known".)
- The only word that correctly fills the blank is the tested word, and "explanation" must explain that same tested word.
- EVERY question MUST contain exactly two sentences. The blank (______) appears in the FIRST sentence. The SECOND sentence adds a specific context clue that rules out all distractors and makes only one answer correct.
- Each sentence must use ______ (6 underscores) as the blank — only in the first sentence
- "answer" is the index (0-3) of the correct option in "options"
- Shuffle so the correct answer is NOT always index 0
- Distractors should be clearly wrong when the second sentence is read — mentally insert each distractor and verify the two-sentence combination sounds wrong or contradicts the second sentence
- CRITICAL: Only ONE option must work across both sentences combined. The second sentence must eliminate all three distractors, not just hint at the answer
- Do NOT repeat the target word or its direct synonym in the second sentence
${cefrRule}
- ALL Chinese text must be in Traditional Chinese (繁體中文), NOT Simplified Chinese (簡體中文)
- Output ONLY the JSON array, nothing else`;

      const message = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 16000,
        messages: [{ role: "user", content: prompt }],
      });

      let raw = message.content[0].text.trim();
      if (raw.startsWith("```"))
        raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
      generated = JSON.parse(raw);
      if (!Array.isArray(generated)) generated = generated.questions || [];
      // 過濾＋修正：正解必須等於被考單字，壞題直接丟棄（不快取、不回傳）
      generated = generated.map(sanitizeQuizQuestion).filter(Boolean);

      // ── 3. 寫回共享快取 ──
      if (db) {
        const byNorm = {};
        toGen.forEach(w => { byNorm[String(w.word).toLowerCase().trim()] = w.word; });
        await Promise.all(generated.map(async (q) => {
          if (!q || !q.word || !Array.isArray(q.options)) return;
          const orig = byNorm[String(q.word).toLowerCase().trim()] || q.word;
          try {
            await db.ref(`/quiz-cache/${quizCacheKey(orig, cefrLevel)}`).set({ q, createdAt: Date.now() });
          } catch (e) { /* 寫入失敗不影響回傳 */ }
        }));
      }
    }

    // ── 4. 合併（依原請求順序）回傳 ──
    const genByNorm = {};
    generated.forEach(q => { if (q && q.word) genByNorm[String(q.word).toLowerCase().trim()] = q; });
    const result = [];
    for (const w of list) {
      if (cachedByWord[w.word]) result.push(cachedByWord[w.word]);
      else {
        const g = genByNorm[String(w.word).toLowerCase().trim()];
        if (g) result.push(g);
      }
    }
    res.json(result.length ? result : generated);
  } catch (e) {
    console.error("[ERROR] generateVocabQuiz:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ========== App 問題回報（PWA「🛟 回報問題」用）==========
// reportImage 的公開 URL（同專案 Cloud Run 命名規則：{小寫函式名}-gtlccx6nka-uc.a.run.app）
const REPORT_IMAGE_BASE = "https://reportimage-gtlccx6nka-uc.a.run.app";

// 學生送出回報 → 寫 RTDB /app-reports/{id}，並 push 給已綁定的管理員（Wisdom Bot）
exports.submitReport = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  try {
    const { message, image, user, nickname, meta } = req.body || {};
    const msg = (message || "").toString().slice(0, 2000);
    if (!msg && !image) return res.status(400).json({ error: "Empty report" });

    initializeFirebase();

    // 解析 data URL 圖片
    let imageData = null, imageMime = "image/jpeg";
    if (typeof image === "string" && image.startsWith("data:image/")) {
      const m = image.match(/^data:(image\/[a-zA-Z+]+);base64,(.+)$/);
      if (m) { imageMime = m[1]; imageData = m[2]; }
    }

    const ref = dbRef.ref("/app-reports").push();
    const id = ref.key;
    const record = {
      message: msg,
      user: user || null,
      nickname: nickname || "",
      meta: meta || null,
      hasImage: !!imageData,
      imageMime,
      createdAt: Date.now(),
      status: "new"
    };
    if (imageData) record.image = imageData;   // base64（不含 data: 前綴）
    await ref.set(record);

    // 推播給所有已綁定的管理員（每位用「他綁定時那支 bot」的 token，因為 LINE userId 分頻道）
    const recSnap = await dbRef.ref("/report-recipients").get();
    const recipients = recSnap.exists() ? recSnap.val() : {};
    const uids = Object.keys(recipients);
    if (uids.length) {
      const who = (user && (user.name || user.email)) || nickname || "匿名同學";
      const device = meta && meta.ua ? shortDeviceFromUA(meta.ua) : "";
      const when = new Date(record.createdAt + 8 * 3600 * 1000).toISOString().replace("T", " ").slice(0, 16);
      const textMsg = {
        type: "text",
        text: `🛟 App 問題回報\n━━━━━━━━\n👤 ${who}\n🕐 ${when}（台灣）\n📱 ${device}\n\n${msg || "（無文字，見下方圖片）"}`
      };
      const messages = [textMsg];
      if (imageData) {
        const url = `${REPORT_IMAGE_BASE}?id=${id}`;
        messages.push({ type: "image", originalContentUrl: url, previewImageUrl: url });
      }
      await Promise.all(uids.map(uid => {
        const envVar = (recipients[uid] && recipients[uid].tokenEnvVar) || "LINE_CHANNEL_ACCESS_TOKEN_BOT2";
        const token = process.env[envVar];
        if (!token) { console.error("[report push] missing token env:", envVar); return Promise.resolve(); }
        return pushLineMulti(uid, messages, token).catch(e => console.error("[report push fail]", uid, e.message));
      }));
    } else {
      console.log("[report] 尚無綁定的接收者（請對 bot 傳「綁定回報」）");
    }

    res.json({ ok: true, id });
  } catch (e) {
    console.error("[ERROR] submitReport:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// 以 HTTPS 提供回報圖片（供 LINE 圖片訊息抓取）
exports.reportImage = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  try {
    const id = (req.query.id || "").toString();
    if (!id) return res.status(400).send("Missing id");
    initializeFirebase();
    const snap = await dbRef.ref(`/app-reports/${id}`).get();
    if (!snap.exists()) return res.status(404).send("Not found");
    const v = snap.val();
    if (!v.image) return res.status(404).send("No image");
    const buf = Buffer.from(v.image, "base64");
    res.set("Content-Type", v.imageMime || "image/jpeg");
    res.set("Cache-Control", "public, max-age=86400");
    res.send(buf);
  } catch (e) {
    console.error("[ERROR] reportImage:", e.message);
    res.status(500).send("Error");
  }
});

// ========== Phrase Quiz API ==========
const { Anthropic: AnthropicPQ } = require("@anthropic-ai/sdk");

exports.generatePhraseQuiz = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { phrases } = req.body || {};
  if (!phrases || !phrases.length) return res.status(400).json({ error: "Missing phrases" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicPQ({ apiKey });

    const phraseList = phrases.slice(0, 40)
      .map(p => `"${p.p}" (meaning: ${p.z})`)
      .join("\n");
    const count = Math.min(phrases.length, 40);

    const prompt = `Create ${count} fill-in-the-blank quiz sentences for these English phrases:
${phraseList}

Respond ONLY with a valid JSON array, no markdown, no extra text:
[
  {
    "phrase": "the exact tested phrase",
    "sentence": "English sentence with ______ where the phrase fits naturally.",
    "translation": "整句話的繁體中文翻譯",
    "explanation": "一句繁體中文解釋這個片語的用法或意思"
  }
]

Rules:
- Use ______ (6 underscores) as the blank placeholder for the phrase
- CRITICAL: Do NOT include any part of the phrase text anywhere else in the sentence — the phrase must appear ONLY as ______
- CRITICAL: The sentence MUST be structured so that inserting the EXACT phrase (word-for-word, no conjugation) directly into the blank produces a grammatically correct English sentence. Before finalising each sentence, verify: [words before blank] + EXACT_PHRASE + [words after blank] = grammatically correct. If the phrase starts with "be" (e.g. "be opposed to", "be aware of"), do NOT place a conjugated form of "be" or any auxiliary verb immediately before the blank — instead use a modal (would, should, might, can) or infinitive marker "to" before the blank so the base form fits naturally (e.g. "My parents would ______ my decision" → "would be opposed to" ✓; NOT "My parents are ______ my decision" → "are be opposed to" ✗)
- The sentence context (surrounding words) should imply the meaning without revealing the exact phrase
- Keep sentences natural and at B1-B2 level
- ALL Chinese text must be Traditional Chinese (繁體中文), NOT Simplified Chinese (簡體中文)
- Output ONLY the JSON array, nothing else`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 16000,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generatePhraseQuiz:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ========== Paragraph Generation API ==========
const { Anthropic: AnthropicPara } = require("@anthropic-ai/sdk");

exports.generateParagraph = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { words, mode, topic } = req.body || {};
  if (!words || !words.length) return res.status(400).json({ error: "Missing words" });

  const count = words.length;
  const lengthHint = count <= 2 ? "3 to 5 sentences"
                   : count <= 5 ? "4 to 6 sentences"
                   : "5 to 8 sentences";

  const wordList = words.map(w => `"${w.word}" (${w.pos||'?'}, ${w.zh||'?'})`).join(", ");
  const modeInstr = mode === 'custom' && topic
    ? `The paragraph should be about the topic: "${topic}".`
    : "The paragraph should be a creative narrative story.";

  const prompt = `Create an English paragraph (${lengthHint}) that naturally includes ALL of these words: ${wordList}.

${modeInstr}

Rules:
- Use every given word at least once, as naturally as possible
- Paragraph length: ${lengthHint}
- ALL Chinese text must be in Traditional Chinese (繁體中文), NOT Simplified Chinese (簡體中文)
- Output ONLY valid JSON, no markdown:
{
  "paragraph": "The English paragraph...",
  "translation": "整段的繁體中文翻譯"
}`;

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicPara({ apiKey });

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateParagraph:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ========== Conversation Practice API (Hero English) ==========
const { Anthropic: AnthropicConv } = require("@anthropic-ai/sdk");

// ========== Reading Quiz API (Hero English) ==========
const { Anthropic: AnthropicRQ } = require("@anthropic-ai/sdk");

const READING_SOURCES = [
  { name: "BBC News", style: "British news broadcaster BBC News", topic_hint: "technology, science, culture, environment, or society" },
  { name: "TIME Magazine", style: "American news magazine TIME", topic_hint: "global affairs, innovation, people, or health" },
  { name: "Focus Taiwan", style: "Taiwan's Central News Agency English service Focus Taiwan", topic_hint: "Taiwan society, culture, education, or business" },
  { name: "The Guardian", style: "British newspaper The Guardian", topic_hint: "environment, arts, sport, or world news" },
  { name: "Scientific American", style: "science magazine Scientific American", topic_hint: "science, technology, nature, or medicine" },
];

exports.generateReadingQuiz = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicRQ({ apiKey });

    const src = READING_SOURCES[Math.floor(Math.random() * READING_SOURCES.length)];

    const prompt = `You are an English reading comprehension quiz generator for Taiwanese junior high school students (A2 level, CEFR).

Write a short English news-style passage (120–160 words) in the style of ${src.style}. Choose an engaging topic related to ${src.topic_hint}.

Passage difficulty rules for A2:
- Use only common, everyday vocabulary (top 2000 most frequent English words)
- Short sentences (8–12 words each), simple subject-verb-object structure
- Avoid idioms, phrasal verbs, complex clauses, or passive voice
- Present tense preferred; past simple is fine; avoid perfect or conditional tenses

Then create exactly 3 multiple-choice comprehension questions based on the passage.

Question types to cover (one each):
1. Main idea / purpose of the passage
2. Specific detail stated in the passage
3. Vocabulary in context (what a word/phrase means as used in the passage)

Rules:
- All 4 choices must be plausible; only ONE is clearly correct based on the passage
- Do NOT make the answer obvious from the question wording alone
- The passage, title, questions, and all choices MUST be written in English only
- Only the "explanation" field should be in Traditional Chinese (繁體中文), NOT Simplified Chinese
- Questions and choices must also use simple A2 vocabulary

Return ONLY valid JSON, no markdown:
{
  "source": "${src.name}",
  "title": "Short engaging headline (under 12 words)",
  "passage": "Full passage text here...",
  "questions": [
    {
      "prompt": "Question text?",
      "choices": ["Choice A text", "Choice B text", "Choice C text", "Choice D text"],
      "answer": "Exact text of the correct choice",
      "explanation": "一句繁體中文解釋為什麼這個選項正確"
    }
  ]
}`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    if (!data.passage || !Array.isArray(data.questions) || data.questions.length < 1) {
      throw new Error("Invalid response structure");
    }
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateReadingQuiz:", e.message);
    res.status(500).json({ error: e.message });
  }
});

const { Anthropic: AnthropicListen } = require("@anthropic-ai/sdk");

// 會考聽力測驗：Part 1 辨識句意(看圖) 3 題 / Part 2 基本問答 8 題 / Part 3 言談理解 10 題
// 音檔 URL 由前端用 Google Translate TTS 依文字組出，本函式只負責生成題目文字
exports.generateListeningQuiz = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicListen({ apiKey });

    const prompt = `You are an English listening test generator for Taiwanese junior high school students (台灣國中教育會考英語聽力, A2 level CEFR). Create ONE full listening test with three parts.

Difficulty rules (A2):
- Only common everyday vocabulary (top 2000 frequent words)
- Short sentences (under 14 words), simple present/past tense, no idioms or complex clauses
- Every English line must be natural spoken English

PART 1 — 辨識句意 (3 questions): For each question, FIRST decide the correct sentence describing a simple everyday scene (a person doing an action, or an object in a place). Then provide "emoji": 1 to 3 emojis that clearly and unambiguously depict THAT correct scene (e.g. a woman cooking eggs → "👩‍🍳🍳", a boy playing soccer → "⚽👦", raining with umbrellas → "🌧️☂️"). Provide 4 short English sentences in "choices"; exactly ONE (the "answer") must match the emoji scene; the other 3 describe clearly DIFFERENT actions/objects/places (do not just change small details). The student sees only the emoji and picks the matching sentence, so the emoji and answer MUST agree.

PART 2 — 基本問答 (8 questions): Each question is a single spoken question or statement ("question"). Provide 4 short English responses; exactly ONE is the natural, appropriate reply.

PART 3 — 言談理解 (10 questions): Items 1-5 are short TWO-speaker dialogues, items 6-10 are short SINGLE-speaker talks/announcements. For each give a "scenario" (繁體中文場景，15字內), a "dialogue" (the spoken text; for two speakers prefix lines with "M:" / "W:" and join with \\n; for a single speaker just the talk), one comprehension "question" in English, and 4 English "choices" with exactly one correct "answer".

Return ONLY valid JSON, no markdown:
{
  "part1": [
    { "emoji": "1-3 emojis depicting the correct scene", "choices": ["Sentence A","Sentence B","Sentence C","Sentence D"], "answer": "exact text of correct sentence", "explanation": "一句繁體中文解釋" }
  ],
  "part2": [
    { "question": "Spoken question?", "choices": ["Reply A","Reply B","Reply C","Reply D"], "answer": "exact correct reply", "explanation": "一句繁體中文解釋" }
  ],
  "part3": [
    { "scenario": "繁體中文場景", "dialogue": "M: ...\\nW: ...", "question": "Comprehension question?", "choices": ["A","B","C","D"], "answer": "exact correct choice", "explanation": "一句繁體中文解釋" }
  ]
}

Rules:
- EXACTLY 3 part1, 8 part2, 10 part3 items
- All English in choices/answer/question/dialogue; only "scenario" and "explanation" in Traditional Chinese (繁體中文, NOT 簡體)
- "answer" must be character-for-character identical to one of the "choices"
- Shuffle choices so the answer is not always first
- Output ONLY the JSON object`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 8192,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    if (!Array.isArray(data.part1) || !Array.isArray(data.part2) || !Array.isArray(data.part3)) {
      throw new Error("Invalid response structure");
    }
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateListeningQuiz:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generateConversation = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const TOPICS = [
    "放學後的計劃", "週末安排", "最喜歡的食物",
    "最喜歡的科目", "運動與健身", "喜歡的音樂",
    "最近看的電影或影集", "假期計劃", "天氣閒聊",
    "購物經驗", "朋友聚會", "生日慶祝",
    "家庭生活", "寵物", "課外活動與社團"
  ];

  const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicConv({ apiKey });

    const prompt = `You are creating an English conversation exercise for Taiwanese junior high school students (ages 12-15, A2-B1 level).

Create a natural 4-turn conversation about: "${topic}"
The scenario is a casual chat between two students or a student and a friend.

Return ONLY valid JSON, no markdown:
{
  "topic": "${topic}",
  "scenario": "一句繁體中文場景說明（15字以內）",
  "turns": [
    {
      "ai": "AI's line in English (friendly, 1-2 short sentences, under 20 words)",
      "aiZh": "AI那句話的繁體中文翻譯",
      "choices": [
        { "en": "Natural, contextually fitting response (1-2 sentences)", "isNatural": true },
        { "en": "Grammatically OK but clearly off-topic response", "isNatural": false },
        { "en": "Another irrelevant or awkward response", "isNatural": false }
      ]
    }
  ]
}

Rules:
- Exactly 4 turns
- Simple everyday vocabulary (A2-B1)
- Natural choice must genuinely continue the topic
- Wrong choices are plausible English but clearly miss the context
- Shuffle choices so correct is NOT always first
- All Chinese must be Traditional Chinese (繁體中文)
- Output ONLY the JSON object, nothing else`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1200,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateConversation:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ========== v2 Functions: PWA Production (5000word + hero-english) ==========
// Using: ANTHROPIC_API_KEY_PWAPROD

exports.generateWordExampleV2 = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word, pos, zh, style } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_PWAPROD;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_PWAPROD");
    const client = new Anthropic({ apiKey });

    const motivational = style === 'motivational';
    const prompt = motivational
      ? `Generate one short, uplifting English example sentence for the word "${word}" (${pos || "unknown"}, meaning: ${zh || "unknown"}). The sentence should feel encouraging and motivational. The word "${word}" must appear naturally.\nRespond ONLY with valid JSON, no markdown:\n{"sentence": "...", "translation": "..."}\nRules:\n- Tone: positive, empowering\n- ALL Chinese text must be Traditional Chinese (繁體中文)\n- Output ONLY the JSON object`
      : `Generate one natural English example sentence for the word "${word}" (${pos || "unknown"}, meaning: ${zh || "unknown"}).\nRespond ONLY with valid JSON:\n{"sentence": "...", "translation": "..."}\nRules:\n- ALL Chinese text must be Traditional Chinese (繁體中文)\n- Output ONLY the JSON object`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 256,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordExampleV2:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generateWordEtymologyV2 = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word, pos, zh } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_PWAPROD;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_PWAPROD");
    const client = new Anthropic({ apiKey });

    const prompt = `Analyze the etymology of the English word "${word}" (${pos || "unknown"}, ${zh || "unknown"}).\nRespond ONLY with valid JSON:\n{"parts": [{"part": "morpheme", "meaning": "繁體中文", "origin": "拉丁文 xxx"}], "etymology": "50字內繁體說明", "cognates": ["word1", "word2"]}\nRules:\n- ALL Chinese text MUST be Traditional Chinese (繁體中文)\n- Output ONLY the JSON object`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordEtymologyV2:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generateWordDefinitionV2 = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_PWAPROD;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_PWAPROD");
    const client = new Anthropic({ apiKey });

    const prompt = `Define the English word "${word}" in Traditional Chinese.\nCRITICAL: Define EXACTLY "${word}" — letter by letter, exactly as written.\nRespond ONLY with valid JSON:\n{"zh": "主要中文意思", "pos": "詞性縮寫"}\nRules:\n- zh: most common meaning (3-12 chars), use ； for 2 meanings\n- pos: n. / v. / adj. / adv. / prep. / conj. / pron. / interj.\n- ALL Chinese MUST be Traditional Chinese (繁體中文)\n- Output ONLY the JSON object`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 128,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordDefinitionV2:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generateVocabQuizV2 = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  // Updated: Re-deploy to refresh environment variables (2026-06-05)
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { words, cefrLevel } = req.body || {};
  if (!words || !words.length) return res.status(400).json({ error: "Missing words" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_PWAPROD;
    console.log("[DEBUG] ANTHROPIC_API_KEY_PWAPROD exists:", !!apiKey);
    console.log("[DEBUG] Environment keys with KEY:", Object.keys(process.env).filter(k => k.includes('KEY')));
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_PWAPROD - available: " + Object.keys(process.env).filter(k => k.includes('KEY')).join(', '));
    const client = new Anthropic({ apiKey });

    const wordList = words.slice(0, 10).map(w => `${w.word} (${w.pos || "?"}, ${w.zh || ""})`).join("\n");
    const count = Math.min(words.length, 10);
    const prompt = `Generate ${count} vocabulary fill-in-the-blank questions based on these words:\n${wordList}\n\nRespond ONLY with valid JSON array:\n[{"sentence": "...", "answer": "word", "options": ["a", "b", "c", "d"]}]\nRules:\n- Sentence must be natural English with one _____ blank\n- answer is the correct word from the list\n- options array has 4 distinct words (1 correct + 3 distractors)\n- ALL Chinese text MUST be Traditional Chinese\n- Output ONLY valid JSON`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(Array.isArray(data) ? data : data.questions || data);
  } catch (e) {
    console.error("[ERROR] generateVocabQuizV2:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generatePhraseQuizV2 = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { phrases } = req.body || {};
  if (!phrases || !phrases.length) return res.status(400).json({ error: "Missing phrases" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_PWAPROD;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_PWAPROD");
    const client = new Anthropic({ apiKey });

    const phraseList = phrases.slice(0, 10).map(p => p.p || p).join("\n");
    const prompt = `Generate multiple-choice questions for these English phrases:\n${phraseList}\n\nRespond ONLY with valid JSON array:\n[{"sentence": "...", "answer": "phrase", "options": ["phrase1", "phrase2", "phrase3", "phrase4"]}]\nRules:\n- Sentence must have one _____ blank\n- answer is the correct phrase\n- options has 4 distinct phrases\n- Output ONLY valid JSON`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(Array.isArray(data) ? data : data.questions || data);
  } catch (e) {
    console.error("[ERROR] generatePhraseQuizV2:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ========== v3 Functions: Student Vocab Database (獨立追蹤) ==========
// Using: ANTHROPIC_API_KEY_STUDENT

exports.generateWordExampleV3 = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word, pos, zh, style } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_STUDENT;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_STUDENT");
    const client = new Anthropic({ apiKey });

    const motivational = style === 'motivational';
    const prompt = motivational
      ? `Generate one short, uplifting English example sentence for the word "${word}" (${pos || "unknown"}, meaning: ${zh || "unknown"}). The sentence should feel encouraging and motivational. The word "${word}" must appear naturally.\nRespond ONLY with valid JSON, no markdown:\n{"sentence": "...", "translation": "..."}\nRules:\n- Tone: positive, empowering\n- ALL Chinese text must be Traditional Chinese (繁體中文)\n- Output ONLY the JSON object`
      : `Generate one natural English example sentence for the word "${word}" (${pos || "unknown"}, meaning: ${zh || "unknown"}).\nRespond ONLY with valid JSON:\n{"sentence": "...", "translation": "..."}\nRules:\n- ALL Chinese text must be Traditional Chinese (繁體中文)\n- Output ONLY the JSON object`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 256,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordExampleV3:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generateWordEtymologyV3 = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word, pos, zh } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_STUDENT;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_STUDENT");
    const client = new Anthropic({ apiKey });

    const prompt = `Analyze the etymology of the English word "${word}" (${pos || "unknown"}, ${zh || "unknown"}).\nRespond ONLY with valid JSON:\n{"parts": [{"part": "morpheme", "meaning": "繁體中文", "origin": "拉丁文 xxx"}], "etymology": "50字內繁體說明", "cognates": ["word1", "word2"]}\nRules:\n- ALL Chinese text MUST be Traditional Chinese (繁體中文)\n- Output ONLY the JSON object`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordEtymologyV3:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generateWordDefinitionV3 = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_STUDENT;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_STUDENT");
    const client = new Anthropic({ apiKey });

    const prompt = `Define the English word "${word}" in Traditional Chinese.\nCRITICAL: Define EXACTLY "${word}" — letter by letter, exactly as written.\nRespond ONLY with valid JSON:\n{"zh": "主要中文意思", "pos": "詞性縮寫"}\nRules:\n- zh: most common meaning (3-12 chars), use ； for 2 meanings\n- pos: n. / v. / adj. / adv. / prep. / conj. / pron. / interj.\n- ALL Chinese MUST be Traditional Chinese (繁體中文)\n- Output ONLY the JSON object`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 128,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateWordDefinitionV3:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generateVocabQuizV3 = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { words, cefrLevel } = req.body || {};
  if (!words || !words.length) return res.status(400).json({ error: "Missing words" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_STUDENT;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_STUDENT");
    const client = new Anthropic({ apiKey });

    const wordList = words.slice(0, 10).map(w => `${w.word} (${w.pos || "?"}, ${w.zh || ""})`).join("\n");
    const count = Math.min(words.length, 10);
    const prompt = `Generate ${count} vocabulary fill-in-the-blank questions based on these words:\n${wordList}\n\nRespond ONLY with valid JSON array:\n[{"sentence": "...", "answer": "word", "options": ["a", "b", "c", "d"]}]\nRules:\n- Sentence must be natural English with one _____ blank\n- answer is the correct word from the list\n- options array has 4 distinct words (1 correct + 3 distractors)\n- ALL Chinese text MUST be Traditional Chinese\n- Output ONLY valid JSON`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(Array.isArray(data) ? data : data.questions || data);
  } catch (e) {
    console.error("[ERROR] generateVocabQuizV3:", e.message);
    res.status(500).json({ error: e.message });
  }
});

exports.generatePhraseQuizV3 = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { phrases } = req.body || {};
  if (!phrases || !phrases.length) return res.status(400).json({ error: "Missing phrases" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_STUDENT;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_STUDENT");
    const client = new Anthropic({ apiKey });

    const phraseList = phrases.slice(0, 10).map(p => p.p || p).join("\n");
    const prompt = `Generate multiple-choice questions for these English phrases:\n${phraseList}\n\nRespond ONLY with valid JSON array:\n[{"sentence": "...", "answer": "phrase", "options": ["phrase1", "phrase2", "phrase3", "phrase4"]}]\nRules:\n- Sentence must have one _____ blank\n- answer is the correct phrase\n- options has 4 distinct phrases\n- Output ONLY valid JSON`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    res.json(Array.isArray(data) ? data : data.questions || data);
  } catch (e) {
    console.error("[ERROR] generatePhraseQuizV3:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ========== generateReadingQuizV2 for hero-english ==========
exports.generateReadingQuizV2 = onRequest({ cors: true, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY_PWAPROD;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY_PWAPROD");
    const client = new Anthropic({ apiKey });

    const READING_SOURCES = [
      { name: "Science Daily", style: "science news", topic_hint: "recent discoveries or technology" },
      { name: "Travel Blog", style: "travel guide", topic_hint: "interesting places or cultures" },
      { name: "Sports Update", style: "sports news", topic_hint: "popular sports or athletes" },
      { name: "Health Tips", style: "health advice", topic_hint: "wellness or healthy living" },
      { name: "Food Magazine", style: "food review", topic_hint: "cuisine or cooking" }
    ];
    const src = READING_SOURCES[Math.floor(Math.random() * READING_SOURCES.length)];

    const prompt = `You are an English reading comprehension quiz generator for Taiwanese junior high school students (A2 level, CEFR).

Write a short English news-style passage (120–160 words) in the style of ${src.style}. Choose an engaging topic related to ${src.topic_hint}.

Passage difficulty rules for A2:
- Use only common, everyday vocabulary (top 2000 most frequent English words)
- Short sentences (8–12 words each), simple subject-verb-object structure
- Avoid idioms, phrasal verbs, complex clauses, or passive voice
- Present tense preferred; past simple is fine; avoid perfect or conditional tenses

Then create exactly 3 multiple-choice comprehension questions based on the passage.

Question types to cover (one each):
1. Main idea / purpose of the passage
2. Specific detail stated in the passage
3. Vocabulary in context (what a word/phrase means as used in the passage)

Rules:
- All 4 choices must be plausible; only ONE is clearly correct based on the passage
- Do NOT make the answer obvious from the question wording alone
- The passage, title, questions, and all choices MUST be written in English only
- Only the "explanation" field should be in Traditional Chinese (繁體中文), NOT Simplified Chinese
- Questions and choices must also use simple A2 vocabulary

Return ONLY valid JSON, no markdown:
{
  "source": "${src.name}",
  "title": "Short engaging headline (under 12 words)",
  "passage": "Full passage text here...",
  "questions": [
    {
      "prompt": "Question text?",
      "choices": ["Choice A text", "Choice B text", "Choice C text", "Choice D text"],
      "answer": "Exact text of the correct choice",
      "explanation": "一句繁體中文解釋為什麼這個選項正確"
    }
  ]
}`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```")) raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();
    const data = JSON.parse(raw);
    if (!data.passage || !Array.isArray(data.questions) || data.questions.length < 1) {
      throw new Error("Invalid response structure");
    }
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateReadingQuizV2:", e.message);
    res.status(500).json({ error: e.message });
  }
});

