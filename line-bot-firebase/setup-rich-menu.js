/**
 * Rich Menu 自動設定腳本
 * 執行方式：node setup-rich-menu.js
 *
 * 功能：
 *  1. 用 Chrome 截圖 rich-menu-design.html → rich-menu.png
 *  2. 上傳圖片到 LINE
 *  3. 建立 Rich Menu（6 格：上排 行事曆+素材庫+公告區，下排 各式表單+課程進度表+其他）
 *  4. 設為所有用戶的預設選單
 */

const https = require("https");
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");

// ========== 設定區 ==========
// 手動讀取 functions/.env
const envPath = path.join(__dirname, "functions/.env");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8").split("\n").forEach(line => {
    const [key, ...rest] = line.split("=");
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
  });
}
const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN_BOT2;

const HTML_FILE = path.join(__dirname, "rich-menu-design.html");
const OUTPUT_IMAGE = path.join(__dirname, "rich-menu.png");
const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

// Rich Menu 尺寸
const WIDTH = 2500;
const HEIGHT = 843;

// ========== Step 1：截圖 ==========
async function captureHTML() {
  console.log("📸 Step 1: 截圖 rich-menu-design.html ...");

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
    chrome.on("close", (code) => {
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

// ========== Step 2：上傳圖片到 LINE ==========
function uploadImage(richMenuId) {
  console.log(`📤 Step 2: 上傳圖片到 LINE (richMenuId: ${richMenuId}) ...`);

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

// ========== Step 3：建立 Rich Menu ==========
function createRichMenu() {
  console.log("🗂️  Step 3: 建立 Rich Menu ...");

  const menu = {
    size: { width: WIDTH, height: HEIGHT },
    selected: true,
    name: "主選單",
    chatBarText: "功能選單",
    areas: [
      // 上排（height=422 蓋住 2px gap，避免死區）：行事曆、素材庫、公告區
      { bounds: { x: 0, y: 0, width: 833, height: 422 }, action: { type: "message", text: "行事曆" } },
      // 素材庫：Bot 回傳使用說明；實際建立素材靠老師直接貼網址觸發
      { bounds: { x: 833, y: 0, width: 834, height: 422 }, action: { type: "message", text: "素材庫" } },
      { bounds: { x: 1667, y: 0, width: 833, height: 422 }, action: { type: "message", text: "公告" } },
      // 下排：各式表單（Flex 連結清單）、課程進度表、其他（代課格式 Quick Reply）
      { bounds: { x: 0, y: 422, width: 833, height: 421 }, action: { type: "message", text: "各式表單" } },
      { bounds: { x: 833, y: 422, width: 834, height: 421 }, action: { type: "message", text: "課程進度表" } },
      { bounds: { x: 1667, y: 422, width: 833, height: 421 }, action: { type: "message", text: "其他" } }
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

// ========== Step 4：設為預設選單 ==========
function setDefaultMenu(richMenuId) {
  console.log(`🌐 Step 4: 設為預設選單 ...`);

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
          console.log("✅ 已設為所有用戶的預設選單");
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
    console.error("❌ 找不到 LINE_CHANNEL_ACCESS_TOKEN_BOT2，請確認 functions/.env 設定");
    process.exit(1);
  }

  console.log("🚀 開始設定 Rich Menu...\n");

  try {
    await captureHTML();
    const richMenuId = await createRichMenu();
    await uploadImage(richMenuId);
    await setDefaultMenu(richMenuId);

    console.log("\n🎉 Rich Menu 設定完成！");
    console.log("打開 LINE 和 Ivy's English Bot 聊天，底部應該會出現選單。");
  } catch (err) {
    console.error("\n❌ 錯誤：", err.message);
  }
}

main();
