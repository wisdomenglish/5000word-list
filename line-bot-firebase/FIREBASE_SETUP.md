# Firebase 專案設定文件

## 專案資訊

| 項目 | 值 |
|------|-----|
| Project ID | `news-english-ef2e4` |
| Realtime Database URL | `https://news-english-ef2e4-default-rtdb.asia-southeast1.firebasedatabase.app` |
| Node.js Runtime | `24` |
| Functions 區域 | `us-central1`（預設） |

---

## Cloud Functions 列表

| Function 名稱 | 類型 | 觸發方式 | 用途 |
|--------------|------|---------|------|
| `lineWebhook` | HTTP | POST `/` | LINE Bot Webhook（多 Bot 支援） |
| `calendarReminder` | Scheduled | 每天 08:00 台北時間 | 推送隔日行事曆提醒給訂閱者 |
| `generateWordEtymology` | HTTP | POST（CORS 開放） | 單字字根拆解（供 PWA 使用） |
| `generateWordExample` | HTTP | POST | 生成英文例句（供 PWA 使用） |
| `generateVocabQuiz` | HTTP | POST | AI 測驗生成（供 PWA 使用） |

### Cloud Run 服務 URLs（PWA 用）

| Function | URL |
|----------|-----|
| `generateWordExample` | `https://generatewordexample-gtlccx6nka-uc.a.run.app` |
| `generateWordEtymology` | `https://generatewordetymology-gtlccx6nka-uc.a.run.app` |
| `generateVocabQuiz` | `https://generatevocabquiz-gtlccx6nka-uc.a.run.app` |

> 以上服務已設定 `allUsers` `roles/run.invoker`（允許未登入呼叫）

---

## 環境變數（firebase.json）

> **安全警告**：以下環境變數目前直接寫在 `firebase.json` 的 `environmentVariables` 欄位。  
> 建議改用 Firebase Secret Manager 或 Cloud Run Secrets 管理。

| 變數名稱 | 用途 |
|---------|------|
| `LINE_CHANNEL_SECRET` | LINE Bot 1（Frank Line英語教室 v2）簽名驗證 |
| `LINE_CHANNEL_ACCESS_TOKEN` | LINE Bot 1 傳訊 Token |
| `LINE_CHANNEL_SECRET_BOT2` | LINE Bot 2（Ivy's English Calendar）簽名驗證 |
| `LINE_CHANNEL_ACCESS_TOKEN_BOT2` | LINE Bot 2 傳訊 Token |
| `ANTHROPIC_API_KEY` | Claude API 金鑰 |
| `GOOGLE_CALENDAR_ICAL_URL` | Google 日曆 iCal 公開連結（Ivy's English 行事曆） |

---

## Firebase Realtime Database 結構

```
/ (root)
├── cache/
│   └── {md5_hash}/          # 回覆快取（7天 TTL）
│       ├── text              # Claude 回覆文字
│       └── createdAt         # Unix timestamp (ms)
├── calendar-cache/
│   ├── timestamp             # 快取時間 (Unix ms)
│   └── events/               # 行事曆事件陣列
├── calendar-subscribers/
│   └── {userId}/             # 訂閱者
│       └── subscribedAt      # 訂閱時間 (Unix ms)
└── calendar-sent/
    └── {eventId}_{userId}/   # 已發送通知記錄
        ├── sentAt
        ├── eventTitle
        └── eventStart
```

---

## 本地開發設定

### 前置需求

```powershell
npm install -g firebase-tools
firebase login
```

### 啟動模擬器

```powershell
cd line-bot-firebase
firebase emulators:start
# Functions 模擬器 port: 5007
```

### 部署指令

```powershell
# 部署所有 Functions
cd line-bot-firebase
firebase deploy --only functions

# 部署單一 Function
firebase deploy --only functions:lineWebhook
firebase deploy --only functions:generateWordEtymology
firebase deploy --only functions:calendarReminder
```

---

## 依賴套件（functions/package.json）

| 套件 | 版本 | 用途 |
|------|------|------|
| `@anthropic-ai/sdk` | ^0.89.0 | Claude AI API |
| `@line/bot-sdk` | ^11.0.0 | LINE Messaging API |
| `express` | ^4.18.2 | HTTP 框架 |
| `firebase-admin` | ^13.6.0 | Firebase Admin SDK |
| `firebase-functions` | ^7.0.0 | Cloud Functions SDK |
| `node-ical` | ^0.26.0 | iCal 解析 |
