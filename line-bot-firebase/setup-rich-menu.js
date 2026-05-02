/**
 * Rich Menu 自動設定腳本
 * 執行方式：node setup-rich-menu.js
 *
 * 功能：
 *  1. 用 Chrome 截圖 rich-menu-design.html → rich-menu.png
 *  2. 上傳圖片到 LINE
 *  3. 建立 Rich Menu（5 格：上排 行事曆+印刷單，下排 請假單+資料提取+公告區）
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

const PRINT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc5Bayi-T6-yCUo_kozyVfzl7bQ9u79oWCd2z7pbLeiO8ykOA/viewform?usp=send_form";
const LEAVE_FORM_URL = "https://docs.google.com/forms/d/17Uee6PF6Ij80gP6r42_20irDb5A11bSHJB325h0syxs/viewform";
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
      // 左上：行事曆（height=422 蓋住 2px gap，避免死區）
      {
        bounds: { x: 0, y: 0, width: 1250, height: 422 },
        action: { type: "message", text: "行事曆" }
      },
      // 右上：印刷單（發送訊息，Bot 回傳 Quick Reply 讓老師選表單）
      {
        bounds: { x: 1250, y: 0, width: 1250, height: 422 },
        action: { type: "message", text: "印刷單" }
      },
      // 左下：請假單
      {
        bounds: { x: 0, y: 422, width: 833, height: 421 },
        action: { type: "uri", uri: LEAVE_FORM_URL }
      },
      // 中下：資料提取（連結到 OneDrive）
      {
        bounds: { x: 833, y: 422, width: 834, height: 421 },
        action: { type: "uri", uri: "https://1drv.ms/f/c/ed0685dff9d8666e/IgBuZtj534UGIIDtRKwAAAAAAUoMQOQ4c1iafODy-Wz-ISc?e=VLgQDG" }
      },
      // 右下：公告區（發送訊息，Bot 回傳最新公告）
      {
        bounds: { x: 1667, y: 422, width: 833, height: 421 },
        action: { type: "message", text: "公告" }
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
