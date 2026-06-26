/**
 * Frank Line英語教室 v2 — Rich Menu 設定腳本
 * 執行方式：node setup-rich-menu-frank.js
 *
 * 功能：
 *  1. 用 Chrome 截圖 rich-menu-frank-design.html → rich-menu-frank.png
 *  2. 上傳圖片到 LINE（Bot 1 / Frank）
 *  3. 建立 Rich Menu（3 格：作文批改 / 初階改寫 / 進階改寫，皆為 postback）
 *  4. 設為 Frank Bot 所有用戶的預設選單
 *
 * 使用流程：使用者點下方「✍️ 作文功能」tab → 選一個模式 → Bot 提示傳照片 →
 *           傳照片後由 handleImageMessage 進行批改／改寫（解題功能不受影響）。
 */

const https = require("https");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

// ========== 設定區 ==========
const envPath = path.join(__dirname, "functions/.env");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8").split("\n").forEach(line => {
    const [key, ...rest] = line.split("=");
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
  });
}
const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN; // Bot 1 / Frank

const HTML_FILE = path.join(__dirname, "rich-menu-frank-design.html");
const OUTPUT_IMAGE = path.join(__dirname, "rich-menu-frank.png");
const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

// Rich Menu 尺寸（LINE 全尺寸）
const WIDTH = 2500;
const HEIGHT = 843;

// ========== Step 1：截圖 ==========
function captureHTML() {
  console.log("📸 Step 1: 截圖 rich-menu-frank-design.html ...");
  return new Promise((resolve, reject) => {
    const args = [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      `--screenshot=${OUTPUT_IMAGE}`,
      `--window-size=${WIDTH},${HEIGHT}`,
      `--hide-scrollbars`,
      `file:///${HTML_FILE.replace(/\\/g, "/")}`
    ];
    const chrome = spawn(CHROME_PATH, args);
    chrome.on("close", () => {
      if (fs.existsSync(OUTPUT_IMAGE)) {
        console.log(`✅ 截圖完成：${OUTPUT_IMAGE}`);
        resolve();
      } else {
        reject(new Error("截圖失敗，找不到輸出檔案"));
      }
    });
    chrome.on("error", reject);
  });
}

// ========== Step 2：建立 Rich Menu ==========
function createRichMenu() {
  console.log("🗂️  Step 2: 建立 Rich Menu ...");
  const menu = {
    size: { width: WIDTH, height: HEIGHT },
    selected: true,
    name: "Frank 作文功能",
    chatBarText: "✍️ 作文功能",
    areas: [
      {
        bounds: { x: 0, y: 0, width: 833, height: 843 },
        action: { type: "postback", data: "essay_mode=批改", displayText: "作文批改" }
      },
      {
        bounds: { x: 833, y: 0, width: 834, height: 843 },
        action: { type: "postback", data: "essay_mode=初階", displayText: "初階改寫" }
      },
      {
        bounds: { x: 1667, y: 0, width: 833, height: 843 },
        action: { type: "postback", data: "essay_mode=進階", displayText: "進階改寫" }
      }
    ]
  };

  return new Promise((resolve, reject) => {
    const body = JSON.stringify(menu);
    const options = {
      hostname: "api.line.me",
      path: "/v2/bot/richmenu",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LINE_TOKEN}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body)
      }
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        if (res.statusCode === 200) {
          const result = JSON.parse(data);
          console.log(`✅ Rich Menu 建立成功：${result.richMenuId}`);
          resolve(result.richMenuId);
        } else {
          reject(new Error(`建立失敗 ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// ========== Step 3：上傳圖片到 LINE ==========
function uploadImage(richMenuId) {
  console.log(`📤 Step 3: 上傳圖片到 LINE (richMenuId: ${richMenuId}) ...`);
  return new Promise((resolve, reject) => {
    const imageData = fs.readFileSync(OUTPUT_IMAGE);
    const options = {
      hostname: "api-data.line.me",
      path: `/v2/bot/richmenu/${richMenuId}/content`,
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LINE_TOKEN}`,
        "Content-Type": "image/png",
        "Content-Length": imageData.length
      }
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log("✅ 圖片上傳成功");
          resolve();
        } else {
          reject(new Error(`上傳失敗 ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on("error", reject);
    req.write(imageData);
    req.end();
  });
}

// ========== Step 4：設為預設選單 ==========
function setDefaultMenu(richMenuId) {
  console.log(`🌐 Step 4: 設為 Frank Bot 預設選單 ...`);
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.line.me",
      path: `/v2/bot/user/all/richmenu/${richMenuId}`,
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LINE_TOKEN}`,
        "Content-Length": 0
      }
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log("✅ 已設為 Frank Bot 所有用戶的預設選單");
          resolve();
        } else {
          reject(new Error(`設定失敗 ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

// ========== 主流程 ==========
async function main() {
  if (!LINE_TOKEN) {
    console.error("❌ 找不到 LINE_CHANNEL_ACCESS_TOKEN（Frank Bot），請確認 functions/.env 設定");
    process.exit(1);
  }
  console.log("🚀 開始設定 Frank Rich Menu...\n");
  try {
    await captureHTML();
    const richMenuId = await createRichMenu();
    await uploadImage(richMenuId);
    await setDefaultMenu(richMenuId);
    console.log("\n🎉 Frank Rich Menu 設定完成！");
    console.log("打開 LINE 和 Frank Bot 聊天，底部會出現「✍️ 作文功能」選單。");
  } catch (err) {
    console.error("\n❌ 錯誤：", err.message);
  }
}

main();
