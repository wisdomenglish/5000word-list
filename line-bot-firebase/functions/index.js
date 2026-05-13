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
    joinMessage: `大家好！我是 Frank 老師的英文小幫手 👋\n\n我可以幫你：\n\n📚 文法問答、單字查詢、句子糾錯\n📝 作文批改、寫作範例、句子翻譯\n📷 傳照片解題（選擇題、填空題、閱讀測驗等）\n\n群組使用方式：\n1️⃣ 先傳文字：「@Bot 解題」\n2️⃣ 再傳圖片（3 分鐘內）\n\n一對一聊天：直接傳圖即可 📸\n\n期待為大家解答英文問題！😊`
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
let dbRef;

function initializeAnthropic() {
  if (anthropic) return;
  try {
    const apiKey = getCredential("ANTHROPIC_API_KEY");
    anthropic = new Anthropic({ apiKey });
  } catch (error) {
    console.error("[ERROR] Failed to initialize Anthropic:", error.message);
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

// ========== 文本清理 ==========
function sanitizeTextForLine(text) {
  return text.replace(/[\r\n]+/g, "\n").trim();
}

// ========== 智能意圖偵測 ==========
async function detectIntentWithClaude(userMessage) {
  try {
    initializeAnthropic();
    const systemPrompt = `你是一個英文教學助手的意圖識別器。分析用戶訊息，判斷他們的真正需求，並提取關鍵內容。  分類規則（檢查訊息中是否包含關鍵詞）：  1. vocabulary（單字查詞）- 用戶想查單字的各方面資訊（支持大写开头的单字如 Serendipity、Apple 等）     1.1 subIntent: "meaning" - 查單字的中文意思、定義        關鍵詞：「是什麼意思」、「意思」、「定義」、「翻譯」        例：「serendipity 是什麼意思？」或「Serendipity 是什麼意思？」     1.2 subIntent: "pronunciation" - 查發音、怎麼唸        關鍵詞：「怎麼唸」、「唸法」、「發音」、「音標」        例：「ephemeral 怎麼唸」或「Ephemeral 怎麼唸」     1.3 subIntent: "synonym" - 查同義詞、相似詞        關鍵詞：「同義詞」、「類似詞」、「近似詞」、「同義」        例：「ephemeral 有何同義詞？」或「Ephemeral 有何同義詞？」     1.4 subIntent: "antonym" - 查反義詞、相反詞        關鍵詞：「反義詞」、「相反詞」、「反義」        例：「happy 的反義詞是什麼」或「Happy 的反義詞是什麼」     1.5 subIntent: "example" - 查用法例句        關鍵詞：「例句」、「怎麼用」、「用法」、「造句」、「應用」        例：「用 ubiquitous 造句」或「用 Ubiquitous 造句」     ⭐ 重要：提取單字時，保留用戶輸入的大小寫形式（大寫開頭或全小寫都可）    預設 subIntent：如果沒有明確關鍵詞，預設為 "meaning"    提取內容：單字本身（保持用戶的大小寫格式）    → intent: "vocabulary", subIntent: "meaning|pronunciation|synonym|antonym|example", content: "serendipity" 或 "Serendipity"  2. translation（翻譯）- 用戶請求翻譯句子或文章（英譯中或中譯英）    關鍵詞：「翻譯」、「translate」、「中文是」、「英文怎麼說」    例：    - 「請幫我翻譯：How are you?」    - 「翻譯：This is a beautiful day」    - 「'你好'英文怎麼說」    提取內容：要翻譯的句子    → intent: "translation", content: "How are you?"  3. grammar（文法問題）- 用戶問文法、語法規則、句子結構或選擇題     3.1 基本文法問題        關鍵詞：「差別」、「差異」、「怎麼用」、「用法」、「什麼」、「文法」+ 詞彙對        例：        - 「is 和 are 的差別」        - 「would 和 should 的用法」        - 「現在完成式是什麼」        → intent: "grammar", subIntent: "explanation", content: "is 和 are 的差別"     3.2 選擇題/填空題 ✨ 新增        特徵：包含 ________ 或 _____ 空白、有 (A)(B)(C)(D) 選項        例：        - 「________ the water in the bottle ________ clean, so you can drink it.          (A) One of; is (B) Any of; is (C) All of; is (D) None; is」        - 「The book ________ by my teacher yesterday.          (A) was given (B) were given (C) has been given (D) is given」        → intent: "grammar", subIntent: "quiz", content: "[完整題目]"  4. error_correction（句子糾錯）- 用戶請求檢查或修正英文句子    關鍵詞：「對嗎」、「改」、「修改」、「檢查」、「糾正」、「英文句子」    例：    - 「這句對嗎：I go to school yesterday」    - 「請幫我改這句」    - 「He don't like apples，這樣對嗎」    提取內容：英文句子    → intent: "error_correction", content: "I go to school yesterday"  4. essay_review（寫作協助）- 用戶請求批改文章或寫作範例     4.1 subIntent: "review" - 批改、修正文章        關鍵詞：「批改」、「修改潤飾」、「文章」、「段落」、「有什麼問題」        例：        - 「請幫我修改潤飾這段英文」        - 「這篇文章有什麼問題」        - 「幫我改一下這個句子」        提取內容：英文段落或文章內容        → intent: "essay_review", subIntent: "review", content: "[文章內容]"     4.2 subIntent: "example" - 提供寫作範例或範本        關鍵詞：「範例」、「寫個」、「給我」、「怎麼寫」、「範本」、「模板」        例：        - 「商業信範例：客訴回應信」        - 「幫我寫個感謝信」        - 「給我一封求職信的範例」        - 「怎麼寫一個道歉信」        提取內容：要寫什麼類型的信/文章        → intent: "essay_review", subIntent: "example", content: "感謝信"  回覆為純 JSON（不要加 markdown 符號或其他文字）： {   "intent": "vocabulary|translation|grammar|error_correction|essay_review",   "subIntent": "vocabulary 時：meaning|pronunciation|synonym|antonym|example（預設 meaning）；grammar 時：explanation|quiz（預設 explanation）；essay_review 時：review|example（預設 review）",   "content": "提取的關鍵內容"}  規則： - 必須回覆 JSON - 如果無法判斷，回覆 {"intent": "unknown", "content": "原始訊息"} - content 務必精確提取，例如單字就提取單字，句子就提取句子 - 不要有 markdown、code block 或任何其他文字`;
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
    essay_review_example: `${baseSystem}  你的任務是提供英文寫作範例或範本。根據用戶要求，提供一個專業、實用的範例。使用以下格式回覆：  📋 [文件類型] 範例 ━━━━━━━━━━━━━━━━ 🔹 範例文本  [完整的範例內容]  ━━━━━━━━━━━━━━━━ 💡 關鍵要點  ✓ [要點1] - [解釋] ✓ [要點2] - [解釋] ✓ [要點3] - [解釋]  📝 可用短語  [常用短語1] [常用短語2] [常用短語3]  ━━━━━━━━━━━━━━━━ ⚠️ 注意事項  [常見錯誤或注意事項1] [常見錯誤或注意事項2]  🎯 實用建議 [延伸應用或寫作建議]  ━━━━━━━━━━━━━━━━ 💪 試試用這個範例寫出你自己的作品吧！  規則： - 提供完整、可直接參考的範例 - 標記出關鍵的表達方式 - 列出可套用的短語和句型 - 簡潔明確，不超過 600 字`,
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
  const englishKeywords = /英文|文法|單字|單词|詞彙|翻譯|句子|作文|文章|發音|例句|糾正|改正|寫作|批改|grammar|word|sentence|essay|writing|pronunciation/i;
  if (!englishKeywords.test(userMessage)) {
    return `抱歉，我是專門的英文學習助手。😅 這個問題不在我的專業範圍內。\n\n不過，如果你有英文學習的問題，我很樂意幫忙！✨\n\n你可以試試：\n\n📚 文法問答\n📖 單字查詢\n✏️ 句子糾錯\n📝 作文批改\n🌐 句子翻譯\n\n來問我英文問題吧！💪`;
  }
  return `你想學英文的哪個部分呢？🤔\n\n我可以幫你：\n\n📚 文法解析\n例：什麼是現在完成式？\n\n📖 單字查詢\n例：單字: accommodate\n\n✏️ 句子糾錯\n例：糾錯: She don't like apples\n\n📝 作文批改\n直接貼上你的英文段落\n\n🌐 句子翻譯\n例：翻譯: I love learning English\n\n試試看問我一個具體的問題吧！😊`;
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
            .replace(/\\,/g, ",").replace(/\\n/g, "\n").replace(/\\\\/g, "\\");
          if (line.startsWith("UID:")) currentEvent.uid = line.substring(4);
          if (line.startsWith("LOCATION:")) {
            currentEvent.location = line.substring(9)
              .replace(/\\n/g, "\n").replace(/\\,/g, ",").replace(/\\\\/g, "\\");
          }
          if (line.startsWith("DESCRIPTION:")) {
            currentEvent.description = line.substring(12)
              .replace(/\\n/g, "\n").replace(/\\,/g, ",").replace(/\\\\/g, "\\");
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

    console.log(`[DEBUG] ===== Processing ${events.length} events =====`);
    const result = [];
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      if (!event.start) {
        console.log(`[RAW-ALL] Event ${i}: NO DTSTART`);
        continue;
      }
      console.log(`[RAW-ALL] Event ${i}: "${event.summary}" | DTSTART: "${event.start}"`);
      const parsed = parseICalDate(event.start);
      if (!parsed) {
        console.log(`[PARSE-FAIL] Event ${i}: Could not parse "${event.start}"`);
        continue;
      }
      console.log(`[PARSED] Event ${i}: "${event.summary}" | Date: ${parsed.dateStr}`);
      result.push({
        id: event.uid || event.summary,
        title: event.summary || "無標題",
        start: parsed.dateStr,
        startObj: parsed.dateObj.getTime(),
        end: event.end,
        location: event.location || "",
        description: event.description || "",
        isAllDay: parsed.isAllDay
      });
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
  // Normalize full-width brackets (e.g. ［Frank］ or [Frank］) to ASCII
  const normalized = title.replace(/［/g, "[").replace(/］/g, "]");
  const m = normalized.match(/^\[([^\]]+)\]\s*(.*)/);
  if (!m) return { names: null, cleanTitle: title };
  const inside = m[1].trim();
  const cleanTitle = m[2].trim() || title;
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
      const smartResponse = generateSmartResponse(userMessage);
      await replyLineMessage(replyToken, { type: "text", text: sanitizeTextForLine(smartResponse) }, token);
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
async function handleImageMessage(messageId, replyToken, token, userId) {
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

    initializeAnthropic();
    const userText = level ? `請提供${level}改寫` : "請給予作文批改 Feedback";
    const message = await anthropic.messages.create({
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

// Wisdom AI Teacher 專屬文字訊息處理（智能回覆使用 Wisdom 風格訊息）
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
    response = await callClaude(systemPrompt, content, maxTokens);
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
        if (botConfig.role === "calendar") {
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
          // Frank bot: in group/room chats, only process image if @Bot was recently mentioned
          const imgSourceType = event.source.type;
          const isImgGroup = imgSourceType === "group" || imgSourceType === "room";
          if (isImgGroup) {
            initializeFirebase();
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
          const key = `${safeEventId}_${userId}`;
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
      if (data.sentAt >= todayStart && data.sentAt < todayEnd) {
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

exports.generateWordExample = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { word, pos, zh } = req.body || {};
  if (!word) return res.status(400).json({ error: "Missing word" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicEx({ apiKey });

    const prompt = `Generate one natural English example sentence for the word "${word}" (${pos || "unknown"}, meaning: ${zh || "unknown"}).

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

    const prompt = `Look up the English word "${word}" and provide its primary Traditional Chinese definition and part of speech.

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

exports.generateVocabQuiz = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { words } = req.body || {};
  if (!words || !words.length) return res.status(400).json({ error: "Missing words" });

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");
    const client = new AnthropicQuiz({ apiKey });

    const wordList = words.slice(0, 10).map(w => `${w.word} (${w.pos || "?"}, ${w.zh || ""})`).join("\n");
    const count = Math.min(words.length, 10);

    const prompt = `Create ${count} fill-in-the-blank vocabulary quiz questions for these English words:
${wordList}

Respond ONLY with a valid JSON array, no markdown, no extra text:
[
  {
    "word": "the tested word",
    "sentence": "English sentence with ______ as the blank.",
    "options": ["correct_word", "distractor1", "distractor2", "distractor3"],
    "answer": 0,
    "translation": "整句話的繁體中文翻譯",
    "explanation": "一句繁體中文解釋這個單字的用法或意思"
  }
]

Rules:
- Each sentence must use ______ (6 underscores) as the blank
- "answer" is the index (0-3) of the correct option in "options"
- Shuffle so the correct answer is NOT always index 0
- Distractors should be plausible words of similar part of speech
- ALL Chinese text must be in Traditional Chinese (繁體中文), NOT Simplified Chinese (簡體中文)
- Output ONLY the JSON array, nothing else`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = message.content[0].text.trim();
    if (raw.startsWith("```"))
      raw = raw.replace(/^```json?\s*/, "").replace(/\s*```$/, "").trim();

    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    console.error("[ERROR] generateVocabQuiz:", e.message);
    res.status(500).json({ error: e.message });
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

    const phraseList = phrases.slice(0, 10)
      .map(p => `"${p.p}" (meaning: ${p.z})`)
      .join("\n");
    const count = Math.min(phrases.length, 10);

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
      max_tokens: 4096,
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