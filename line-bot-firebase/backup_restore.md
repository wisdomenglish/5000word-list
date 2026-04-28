# LINE Bot Firebase 備份與還原指南

## 備份項目

| 項目 | 檔案 | 說明 |
|------|------|------|
| Firebase Realtime Database | `firebasedb_backup_YYYY-MM-DD.json` | 快取、訂閱者、行事曆資料 |
| Cloud Functions 原始碼 | `functions/index.js` | 所有 Function 邏輯 |
| Firebase 設定 | `firebase.json` | 環境變數、emulator 設定 |
| LINE Bot 設定文件 | `LINE_SETUP.md` | Channel ID、Webhook URL |
| Firebase 設定文件 | `FIREBASE_SETUP.md` | 專案 ID、Functions 清單 |

---

## 備份指令

### 手動備份 Realtime Database

```powershell
# Windows PowerShell
$date = Get-Date -Format "yyyy-MM-dd"
firebase database:get / --project news-english-ef2e4 2>$null | Out-File -FilePath "firebasedb_backup_$date.json" -Encoding utf8
Write-Host "備份完成：firebasedb_backup_$date.json"
```

```bash
# Linux / macOS / GitHub Actions
DATE=$(date +%Y-%m-%d)
firebase database:get / --project news-english-ef2e4 > firebasedb_backup_$DATE.json
```

### 備份 Cloud Functions 設定

```powershell
# 列出所有 Functions 和其觸發器
firebase functions:list --project news-english-ef2e4
```

---

## 還原步驟

### 1. 前置準備

```powershell
# 安裝 Firebase CLI
npm install -g firebase-tools

# 登入 Firebase
firebase login

# 確認專案存取權限
firebase projects:list
```

### 2. 還原 Realtime Database

```powershell
# 完全還原（覆蓋現有資料）
firebase database:set / firebasedb_backup_2026-04-28.json --project news-english-ef2e4

# 只還原特定節點（例如：只還原訂閱者）
firebase database:set /calendar-subscribers firebasedb_backup_2026-04-28.json --project news-english-ef2e4
```

> **警告**：`database:set` 會覆蓋目標路徑的所有資料，請確認後再執行。

### 3. 還原 Cloud Functions

```powershell
cd line-bot-firebase

# 安裝依賴
cd functions
npm install
cd ..

# 部署所有 Functions
firebase deploy --only functions --project news-english-ef2e4
```

### 4. 驗證環境變數

確認 `firebase.json` 中以下環境變數已正確設定：

- `LINE_CHANNEL_SECRET`
- `LINE_CHANNEL_ACCESS_TOKEN`
- `LINE_CHANNEL_SECRET_BOT2`
- `LINE_CHANNEL_ACCESS_TOKEN_BOT2`
- `ANTHROPIC_API_KEY`
- `GOOGLE_CALENDAR_ICAL_URL`

### 5. 測試 Webhook

```powershell
# 驗證 lineWebhook 是否正常回應（預期回應 200 OK）
curl -X POST https://us-central1-news-english-ef2e4.cloudfunctions.net/lineWebhook `
  -H "Content-Type: application/json" `
  -d '{"destination":"test","events":[]}'
```

---

## 災難復原流程

### 場景 A：Firebase DB 資料遺失

1. 從最近一次備份取得 `firebasedb_backup_YYYY-MM-DD.json`
2. 執行 `firebase database:set /` 還原
3. 確認快取（`/cache`）和訂閱者（`/calendar-subscribers`）資料正確

### 場景 B：Cloud Functions 刪除或損壞

1. 從 git 取出最新版 `functions/index.js`
2. 執行 `npm install` 安裝依賴
3. 執行 `firebase deploy --only functions`
4. 在 LINE Developers Console 確認 Webhook URL 仍然有效

### 場景 C：完整重建（新 Firebase 專案）

1. 在 Firebase Console 建立新專案
2. 啟用 Realtime Database（region: asia-southeast1）
3. 更新 `functions/index.js` 中的 `databaseURL`
4. 部署 Functions：`firebase deploy --only functions`
5. 還原 DB 資料：`firebase database:set /`
6. 更新 LINE Bot Webhook URL
7. 測試所有功能

---

## 備份排程（GitHub Actions）

自動備份設定於 `.github/workflows/backup.yml`：

- **執行時間**：每週日 02:00 UTC（台灣時間週日上午 10:00）
- **備份內容**：Firebase Realtime Database 完整匯出
- **儲存位置**：Git commit 到 `backups/` 分支（或主分支的備份目錄）

所需 GitHub Secrets：

| Secret 名稱 | 說明 |
|------------|------|
| `FIREBASE_TOKEN` | `firebase login:ci` 產生的 CI token |
| `GH_PAT` | GitHub Personal Access Token（具備 repo write 權限） |

---

## 注意事項

- 備份檔案包含 Firebase Realtime Database 的**所有資料**（含快取內容）
- **不建議**將 `firebase.json`（含憑證）或備份 JSON 公開上傳到公開 repo
- 快取資料（`/cache`）遺失後系統會自動重建，無需擔心
- 訂閱者資料（`/calendar-subscribers`）遺失後需請用戶重新訂閱
