# CLAUDE.md — 專案說明

## 專案概覽

這個 repo 包含兩個獨立子專案：

| 子專案 | 路徑 | 技術 | 部署 |
|--------|------|------|------|
| 5000英文單字學習 PWA | `/`（根目錄） | 純 HTML/CSS/JS | GitHub Pages |
| LINE Bot 英文教學助手 | `line-bot-firebase/` | Firebase Functions + Claude API | Firebase / GCP |

---

## 1. 5000英文單字學習 PWA

### 部署資訊

- **GitHub Pages URL**：`https://wisdomenglish.github.io/5000word-list/`
- **GitHub 組織**：`wisdomenglish`（原 `f88012`，私隱考量已轉移）
- **Git remote**：`wordlist` → `https://github.com/wisdomenglish/5000word-list.git`
- **工作分支**：`add-wisdom-icon`（push 到 `wordlist main`）

### 關鍵檔案

- [index.html](index.html) — 單一檔案 PWA，包含所有 CSS/JS
- [vocabulary-data.js](vocabulary-data.js) — 外部單字庫（4,506 字，格式：`{w, z, p}`）
- [phrases-data.js](phrases-data.js) — 外部片語庫（1,125 條，格式：`{p, z}`）
- [manifest.json](manifest.json) — PWA 設定（name: 5000英文單字學習）
- [sw.js](sw.js) — Service Worker，支援離線使用（目前版本：`vocab-app-v51`）
- [icon-192.png](icon-192.png) / [icon-512.png](icon-512.png) — Wisdom logo 圖示

### 功能

- 4,391 英文單字瀏覽、搜尋、字母篩選（移除重複變化形後）
- Claude AI 生成例句（單字詳細 Modal，📝 例句 Tab）
- Claude AI 字根拆解（單字詳細 Modal，🌱 字根 Tab）
- AI 測驗 Tab + 複習清單（單字／片語皆可出題）
- **片語查詢**：1,125 條英文片語，支援搜尋、A–Z 篩選、點擊開啟 Modal + AI 生成例句
- **自訂單字庫**：學生可新增自己的單字，整合進字典/搜尋/測驗（見下方說明）
- **雲端同步**：登入 Google 帳號後自訂單字庫與 ⭐ 星號複習清單自動同步至 Firebase Firestore
- **🃏 單字卡模式**：翻卡互動練習，自評還不熟／普通／會了，結果自動加入複習清單並標色
- **學習進度 Tab**：統計卡（掌握字數、連續打卡、正確率、本週答題）+ 本月熱力圖 + 排行榜
- **首頁**：學測倒數（116 學測 2027-01-22）、今日目標進度、連續打卡、快速操作卡
- **更新公告**：側邊欄 ☰ 可開啟，記錄功能更新歷史
- **學習資源**：側邊欄 ☰ 含三個 Google Drive 外部連結（學習歷程、面試攻略、字彙表）
- PWA：可加入主畫面、離線字典

### Cloud Functions（PWA 用）

| Function | URL | 用途 |
|----------|-----|------|
| `generateWordExample` | `https://generatewordexample-gtlccx6nka-uc.a.run.app` | 生成例句 |
| `generateWordEtymology` | `https://generatewordetymology-gtlccx6nka-uc.a.run.app` | 字根拆解（繁體中文）|
| `generateVocabQuiz` | `https://generatevocabquiz-gtlccx6nka-uc.a.run.app` | 單字 AI 測驗（句子填空）|
| `generateWordDefinition` | `https://generateworddefinition-gtlccx6nka-uc.a.run.app` | 查詢單字中文意思與詞性（新增單字用）|
| `generatePhraseQuiz` | `https://generatephrasequiz-gtlccx6nka-uc.a.run.app` | 片語 AI 測驗（句子填空）|

- 例句結果以 `vocab_ex_{word}` 為 key 存入 localStorage（快取）
- 字根結果以 `vocab_etym_{word}` 為 key 存入 localStorage（快取）
- **片語例句**以 `vocab_phrase_ex_{phrase}` 為 key 存入 localStorage（快取）
- 自訂單字以 `vocab_custom_words` 為 key 存入 localStorage（JSON array，格式：`{word, pos, zh, custom:true}`）
- **學習統計 localStorage keys**：
  - `vocab_streak`：`{streak, best, lastDate}` 連續打卡天數
  - `vocab_daily`：`{date, count, goal}` 今日答題數／目標
  - `vocab_heatmap`：`{"YYYY-MM-DD": count, ...}` 每日答題熱力圖（保留 90 天）
  - `vocab_accuracy`：`{correct, total}` 累計正確率
  - `vocab_mastery`：`{word: "unfamiliar"|"moderate"}` 單字卡熟悉度標記
- 所有 Cloud Run 服務已設定 `allUsers` `roles/run.invoker`（允許未登入呼叫）
- **新增 Cloud Function 規範**：函式宣告需加 `invoker: "public"`（`onRequest({ cors: true, invoker: "public" }, ...)`）才能公開訪問。第一次 deploy 輸出 CF URL，第二次 deploy 才顯示 Cloud Run URL（`{name}-gtlccx6nka-uc.a.run.app`）
- **密碼保護**：首次開啟需輸入授權密碼，通過後以 SHA-256 hash 存入 localStorage（key：`vocab_auth_v1`）；更換密碼只需在 `index.html` 更新 `AUTH_HASH` 常數即可強制所有用戶重新驗證（詳見 memory）

### vocabulary-data.js 架構

- 格式：`const WORDS = [{w, z, p}, ...]`（w=英文, z=中文, p=詞性）
- `index.html` 在 `<head>` 載入後，緊接一行 adapter：`WORDS.forEach(o=>{o.word=o.w;o.zh=o.z;o.pos=o.p||'';});`
  → 其餘程式碼繼續用 `w.word / w.zh / w.pos`，不需改動
- **重複字清除規則**：刪除 -s/-ed/-ing 衍生形，條件為 zh 相同且 pos 相同（跨詞性保留）
- **getZhDef() 邏輯**：若第一段（`；` 前）≤ 2 字，自動合併第二段，避免擷取到語境詞（如「飛機」）而非完整解釋
- 每次修改 `index.html` 或 `vocabulary-data.js` 後必須升版 `sw.js` 的 `CACHE` 常數，否則舊使用者拿到快取版
- **SW 自動更新機制**：`sw.js` 的 install 事件含 `self.skipWaiting()`，新 SW 安裝後立即接管；`index.html` 監聽 `controllerchange` 事件自動 `window.location.reload()`，使用者只需重新開啟頁面一次即可看到最新版本，無需手動硬重整

### UI 設計規範

- **色彩主題**：明亮（`--bg:#F2F2F7`），強調色 `--accent:#4361EE`（藍紫）、`--accent2:#F72585`（粉紅）；`--surface:#FFFFFF;--text:#1C1C1E;--muted:#8E8E93`
- **字體**：標題 Playfair Display（serif），內文 DM Sans（sans-serif）
- **導覽結構**：
  - 頂部固定列（`#globalTopBar`，52px）：Logo + 連續打卡 badge + ☰ 選單按鈕
  - 底部固定導覽（`#bottomNav`，76px）：首頁／單字／測驗／我的單字／進度 共 5 個 tab
  - `body` 設 `padding-top:52px; padding-bottom:76px`
  - `switchTab(tab)` 控制各 section 顯示隱藏；預設顯示 `homeSection`
- **側邊欄 `#sideDrawer`**（右側滑入）順序：帳號同步 → 👤 我的資料（登入後）→ 更新公告 → 其他功能（段落理解）→ 學習資源
- **詞性標籤分色**（`.pos-tag` + class）：
  - `n.` → 綠（`.pos-n`，`#6ecf88`）
  - `v.` → 藍（`.pos-v`，`#5bc0de`）
  - `adj.` → 琥珀（`.pos-adj`，`#f0ad4e`）
  - `adv.` → 淡紫（`.pos-adv`，`#b09ef8`）
  - 其他 → 粉紅（`.pos-other`，`--accent2`）
  - `getPosClass(pos)` helper 依前綴判斷（`n`→n, `v`→v, `adj`→adj, `adv`→adv）
- **A–Z 篩選列**（`.alpha-bar`）：`flex-wrap:nowrap;overflow-x:auto` 橫向滾動，按鈕 40×40px，`flex-shrink:0` 防止壓縮
- **「＋ 新增」按鈕**：以固定 FAB（`#fabAddWord`，`position:fixed;bottom:24px;right:20px`）取代 controls 內的按鈕；`updateFabVisibility()` 控制只在字典 + 單字模式時顯示
- **`dictMode`**：必須宣告在 `buildAlphaBar()` 呼叫之前（否則 TDZ 錯誤），預設值 `'word'`
- **觸控熱區**：星號 `.mark-btn` 加 `padding:10px` 擴大熱區；FAB 52×52px 圓形
- **語音測試列**（`#audioTest`）：低調樣式（`background:var(--surface);border-bottom:1px solid var(--border)`），不搶奪視覺焦點
- **熟悉度標籤顏色**：還不熟 → 紅（`#FEE2E2` / `#DC2626`），普通 → 橘（`#FED7AA` / `#EA580C`）；複習清單左側色條同色

### 自訂單字庫架構

- 字典右下角固定 FAB「＋」按鈕（`#fabAddWord`），點擊後彈出底部 sheet 填寫
- 自訂單字儲存於 `localStorage['vocab_custom_words']`，格式：`[{word, pos, zh, custom:true}, ...]`
- `getAllWords()` 函式統一合併 `WORDS`（vocabulary-data.js）＋ `customWords`，所有功能（搜尋、測驗、modal）皆透過此函式取得單字清單
- 自訂單字在字典卡片與 Modal 顯示粉色「自訂」徽章
- 支援 AI 例句、字根、發音、加星號、測驗，與一般單字完全相同
- 新增時會檢查是否與現有單字重複（大小寫不敏感）
- **輸入英文自動查詢中文**：`awmAutoLookup()` 在 `awmWordEn` 輸入時觸發，先查本地 `getAllWords()` 即時填入，找不到則 debounce 650ms 後呼叫 `generateWordDefinition` Cloud Function 自動填入 zh/pos，並顯示來源提示（可手動覆蓋）
- 「⭐ 我的單字」Tab 有「📝 自訂單字庫」區塊，可點「✕ 刪除」移除
- **重要**：`customWords`（`let`）必須宣告在 `buildAlphaBar()` 呼叫之前，否則 TDZ 錯誤導致整頁當掉

### 片語資料庫架構

- 格式：`const PHRASES = [{p, z}, ...]`（p=英文片語, z=中文解釋）
- 字典頁面有「📚 單字 / 🔖 片語」切換列（`dict-mode-bar`），呼叫 `setDictMode('word'/'phrase')`
- 片語卡片用 `data-pidx` + 事件委派觸發 `openPhraseModal(phraseText)`（避免特殊字符 onclick 解析錯誤）
- `renderPhraseGrid()` 每次重新渲染後只綁定一次 click 事件（`grid._phraseClickBound` 旗標防重複）
- `#phraseModal` 的 CSS 必須和 `#wordModal` 共用 `position:fixed;inset:0` 樣式，缺少會導致 Modal 不顯示
- 片語測驗有兩種模式（`qPhraseMode`）：
  - `'meaning'`（預設）：`generatePhraseQuestions()` 本地生成，選項為中文意思，無需網路
  - `'sentence'`：呼叫 `generatePhraseQuiz` Cloud Function 生成含空格英文句子，選項為英文片語（正確片語 + 3 個隨機干擾片語由 client 端從 PHRASES 選取）；題型物件 `type:'phrase_sentence'`，`answerQ()` 不觸發 markedWords
- 片語測驗字母篩選同樣有防洩題機制（`enforceLetterDistractors`），但 phrase_sentence 的選項是片語文字，字母分散較自然

### 雲端同步架構（Firebase）

- **Firebase 專案**：`news-english-ef2e4`（與 LINE Bot 共用）
- **SDK**：Firebase Compat v10（`<script>` 標記，非 ESM），載入 Auth + Firestore
- **Authentication**：Google Sign-In，授權網域需包含 `wisdomenglish.github.io`
- **Firestore 路徑**：`users/{uid}` 文件，含兩個欄位：
  - `customWords`（陣列）：自訂單字庫 `[{word, pos, zh, custom:true}]`
  - `markedWords`（陣列）：⭐ 星號複習清單 `["word1", "word2", ...]`
- **Security Rules**：只允許 `auth.uid === userId` 讀寫自己的文件
- **`saveCustomWords()`**：同時寫入 localStorage 和 Firestore `{ merge: true }`（已登入時）
- **`saveMark()`**：每次加/取消星號同時寫入 localStorage 和 Firestore `{ merge: true }`
- **`syncFromCloud()`**：登入時雲端優先覆蓋本地；舊帳號若雲端缺少 `markedWords` 欄位，自動上傳本地星號
- **登入流程**：`onAuthStateChanged` → `syncFromCloud(uid)` → 雲端優先覆蓋本地 → 刷新 UI
- Tab 列右側顯示 **☁ 同步** 按鈕（未登入）或大頭貼＋登出按鈕（已登入）（按鈕位於 ☰ 側邊欄）
- **未登入**：行為與之前相同，純 localStorage

### 單字卡模式架構

- `qMode = 'flashcard'` 時，`startQuiz()` 呼叫 `startFlashcard(pool)` 並 return，不走 AI 路徑
- `fcCards`（陣列）/ `fcIndex`（當前索引）/ `fcFlipped`（是否翻面）為全域狀態
- `renderFlashcard()`：正面顯示英文 + 詞性，點擊呼叫 `flipCard()` 切換 fcFlipped → 重繪；翻面後顯示中文 + 三個評分按鈕
- `rateFc(level)`：`'unfamiliar'` → `setMastery(word,'unfamiliar')` + `addMark()`；`'moderate'` → `setMastery(word,'moderate')` + `addMark()`；`'mastered'` → `setMastery(word,null)`；然後 `fcIndex++` → `renderFlashcard()`
- `fcNav(dir)`：左右跳卡，重置 fcFlipped
- **優先複習**：`qPrioritizeUnfamiliar`（全域 boolean），在 `startFlashcard()` 和 `startQuiz()` 裡，若為 true 則先抽 mastery='unfamiliar' 的單字再接其他

### 學習進度架構

- `renderProgress()` 動態生成 `#progressSection` 內容：統計卡 → 熱力圖 → 排行榜
- `buildHeatmap()`：讀 `vocab_heatmap`，生成 6 週日曆格，依 count 分 lv1–lv4（`rgba(67,97,238,...)` 透明度）
- `touchStreak()`：每次 `incrementDailyCount()` 呼叫時更新 `vocab_streak`（連續打卡）
- `trackAccuracy(correct)`：在 `answerQ()` 內呼叫，更新 `vocab_accuracy`
- `renderHome()`：學測倒數固定 `new Date(2027,0,22)`，讀 streak / daily goal / heatmap 渲染首頁

### 更新公告頁

- 公告從底部導覽移除，改為從側邊欄 ☰ 進入，對應 `#newsSection`（`switchTab('news')`）
- 在 `#newsSection` 內以 `<div class="news-card">` 為單位手動維護
- 每則公告結構：日期、分類徽章（`feature`/`fix`/`improve`）、標題、`<ul class="news-list">` 條列
- 新增公告：在 `newsSection` 最上方複製一個 `news-card` div，修改日期與內容即可

### 本地測試

用 VS Code Live Server 或任何靜態伺服器開啟根目錄即可。

---

## 2. LINE Bot 英文教學助手

### Firebase 專案

- **Project ID**：`news-english-ef2e4`
- **Realtime Database URL**：`https://news-english-ef2e4-default-rtdb.asia-southeast1.firebasedatabase.app`
- **Node.js Runtime**：`24`
- **本地模擬器 port**：`5007`

### 目錄結構

```
line-bot-firebase/
├── functions/
│   ├── index.js          # 所有 Cloud Functions 邏輯
│   ├── package.json      # Node 24，依賴套件清單
│   ├── .env              # 本地開發環境變數（不 commit）
│   └── .env.local        # 模擬器用環境變數
├── backups/
│   └── firebasedb_backup_YYYY-MM-DD.json  # 每週自動備份
├── firebase.json         # Firebase 設定 + 環境變數（硬編碼）
├── FIREBASE_SETUP.md     # Firebase 詳細設定文件
├── LINE_SETUP.md         # LINE Bot 設定文件
├── backup_restore.md     # 備份與還原指南
├── setup-rich-menu.js    # Rich Menu 設定腳本
└── rich-menu-design.html # Rich Menu 視覺設計
```

### Cloud Functions 列表

| Function | 類型 | 用途 |
|----------|------|------|
| `lineWebhook` | HTTP | LINE Bot Webhook（三支 Bot 共用） |
| `calendarReminder` | Scheduled（每天 08:00 台北）| 推送當日 + 隔日行程提醒 |
| `eveningFollowUp` | Scheduled（每天 23:00 台北）| 催促當日尚未回報的老師 |
| `generateWordEtymology` | HTTP（CORS 開放）| 字根拆解（PWA 用） |
| `generateWordExample` | HTTP | 生成例句（PWA 用） |
| `generateVocabQuiz` | HTTP | 單字 AI 測驗（PWA 用） |
| `generateWordDefinition` | HTTP | 查詢單字中文意思與詞性（PWA 新增單字用）|
| `generatePhraseQuiz` | HTTP | 片語 AI 測驗（PWA 用）|

### 三支 LINE Bot

| | Bot 1 | Bot 2 | Bot 3 |
|--|-------|-------|-------|
| **名稱** | Frank Line英語教室 v2 | Ivy's English Calendar | Wisdom AI Teacher |
| **Channel ID** | `2009816850` | `2009819826` | `2009871968` |
| **LINE User ID（destination）** | `Ubf2dcf1c5ebd1103328a7af4e9d7aee7` | `U45ed153ac9a4c65ec21dc3eb446649c1` | `U47f8478ef76c01abaf8a136b1ab80bbf` |
| **角色** | 英文教學助手 | Google 行事曆提醒 | 英文教學助手＋圖片改寫 |
| **Webhook** | 共用 `lineWebhook` URL | 共用 `lineWebhook` URL | 共用 `lineWebhook` URL |

Bot 透過 `event.destination`（LINE User ID）自動識別並套用對應憑證。

### 環境變數（firebase.json 內硬編碼）

| 變數 | 用途 |
|------|------|
| `LINE_CHANNEL_SECRET` | Bot 1 簽名驗證 |
| `LINE_CHANNEL_ACCESS_TOKEN` | Bot 1 傳訊 |
| `LINE_CHANNEL_SECRET_BOT2` | Bot 2 簽名驗證 |
| `LINE_CHANNEL_ACCESS_TOKEN_BOT2` | Bot 2 傳訊 |
| `LINE_CHANNEL_SECRET_BOT3` | Bot 3 簽名驗證 |
| `LINE_CHANNEL_ACCESS_TOKEN_BOT3` | Bot 3 傳訊 |
| `ANTHROPIC_API_KEY` | Claude API |
| `GOOGLE_CALENDAR_ICAL_URL` | Ivy's English Google 日曆 iCal |

### 常用指令

```powershell
# 啟動本地模擬器
cd line-bot-firebase ; firebase emulators:start

# 部署所有 Functions
cd line-bot-firebase ; firebase deploy --only functions

# 部署單一 Function（不影響其他已部署函式）
cd line-bot-firebase ; firebase deploy --only functions:lineWebhook
cd line-bot-firebase ; firebase deploy --only functions:generateWordEtymology
cd line-bot-firebase ; firebase deploy --only functions:calendarReminder

# 手動備份 Realtime Database
$date = Get-Date -Format "yyyy-MM-dd"
firebase database:get / --project news-english-ef2e4 2>$null | Out-File -FilePath "line-bot-firebase\backups\firebasedb_backup_$date.json" -Encoding utf8

# 設定 Rich Menu
node line-bot-firebase/setup-rich-menu.js
```

### LINE Bot 功能

**Bot 1（英文教學）：**
- **意圖分類**（Claude 智能檢測）：vocabulary、grammar、error_correction、essay_review、translation
- **群組支援**：只回應被 @提及的訊息
- **Firebase Realtime DB 快取**：MD5 key、7天 TTL
- **回覆格式**：分隔線（━━━━）+ emoji，無粗體

**Bot 2（行事曆）：**
- 查詢今日 / 明日 / 本週 / 下週 / 本月行程
- **行程提醒**：
  - 每日早上 08:00 發送「當日 + 隔日」行程提醒給訂閱老師
  - 當日行程文字：「嗨！提醒老師，今天是【xxx】喔！\n\n今天加油！💪」
  - 隔日行程文字：「嗨！提醒老師，記得明天是【xxx】喔！\n\n請做好準備，加油！💪」
  - 由 `calendarReminder` Cloud Function 執行，讀取 Firebase `/calendar-cache`
- **工作回報**：老師在 08:00 收到今日行程提醒後，可在 23:00 前回傳「完成 xxx」或「未完成 xxx」記錄進度
- **催促機制**：每日 23:00 執行 `eveningFollowUp` 函式，自動催促今日收到行程提醒但尚未回報的老師
- 資料來源：Google Calendar iCal → 解析後快取於 Firebase `/calendar-cache`
- **未識別輸入**：立即回傳使用說明（不進入行事曆 fetch，避免 replyToken 過期）
- **⚠️ Cloud Run 限制**：Cloud Run IP 被 Google 封鎖，無法直接抓 Google Calendar iCal（返回「Sorry...」頁面）。解決方案：由本機 `trigger-reminder.js` 抓取並寫入 Firebase 快取；Cloud Function 只讀快取，不直接抓 iCal
- **「重新整理」指令**：改為軟清除（只過期 timestamp，不刪資料），若 Cloud Run 抓取失敗自動 fallback 舊快取並顯示 ⚠️ 提示，此時需本機執行 `node trigger-reminder.js`

**Bot 3（Wisdom AI Teacher）：**
- 英文教學功能與 Bot 1 相同（vocabulary、grammar、error_correction、essay_review、translation）
- **圖片改寫**（`supportsImage: true`）：
  - 直接傳圖 → 作文批改 Feedback
  - 先說「初階改寫」再傳圖 → 保留原意修正文法（A2-B1）
  - 先說「進階改寫」再傳圖 → 全面提升至母語水準（B2-C1）
- **圖片狀態**：存於 `/pending-rewrite/{userId}`，5 分鐘 TTL
- **專屬回覆**：問「功能」→ 只顯示功能清單（不加抱歉）；非英文問題 → 加抱歉前言再顯示功能清單
- **關鍵函式**（勿刪）：`WISDOM_FEATURE_LIST`、`handleRewriteRequest`、`handleImageMessage`、`handleWisdomTextMessage`、`fetchLineImageAsBase64`

### Firebase Realtime DB 結構

| 路徑 | 說明 |
|------|------|
| `/cache/{md5}` | Bot 1/3 Claude 回覆快取（7天 TTL） |
| `/calendar-cache` | iCal 事件快取（24小時 TTL）；由 `trigger-reminder.js`（本機）或 Cloud Function 寫入 |
| `/calendar-subscribers/{userId}` | Bot 2 提醒訂閱者清單 |
| `/calendar-sent/{eventId}_{userId}` | 已發送的行程提醒記錄（防重複） |
| `/teacher-mapping/{name}` | 老師名稱 → `{ userId }` 對照表 |
| `/task-reports/{YYYY-MM-DD}/{userId}/{safeTitle}` | 工作回報記錄（完成／未完成） |
| `/pending-rewrite/{userId}` | Bot 3 圖片改寫等待指令（`{level, expiresAt}`，5分鐘 TTL） |

### Google Calendar 事件命名慣例

行事曆事件標題前綴決定提醒對象：

| 格式 | 說明 | 範例 |
|------|------|------|
| `[全部] 活動名稱` | 發給所有訂閱者 | `[全部] 期末考監考` |
| `[Frank] 活動名稱` | 只發給 Frank | `[Frank] 批改期末考卷` |
| `[Frank,Claire] 活動名稱` | 發給多人（逗號分隔） | `[Frank,Claire] 組卷會議` |
| `活動名稱`（無前綴） | 發給所有訂閱者 | `開學典禮` |

- 前綴在發送訊息中會自動去除（老師收到 `【批改期末考卷】` 而非 `【[Frank]批改期末考卷】`）
- 名稱必須對應 `/teacher-mapping` 中的 key（目前有 Frank、Claire、Xin、Gary、Ivy、Jason、Judy、Kyle、Linda、Michelle、Nina、Sammy、Sharon、Tiffany、Timothee、Ting、Demian、段、魚）

### 手動觸發行程提醒

#### 模式 1：只更新快取（推薦日常用）

```powershell
cd "c:\Users\f8801\myfirstcode\line-bot-firebase"
node trigger-reminder.js --cache-only
```

**功能**：
- ✅ 抓取 Google Calendar iCal
- ✅ 解析並更新 Firebase `/calendar-cache`
- ❌ 不發送提醒通知

**適用場景**：
- 每週自動更新（不打擾老師）
- 排查 iCal 解析問題
- 確保老師查詢行程時有最新資料

#### 模式 2：更新快取 + 發送提醒（手動觸發）

```powershell
cd "c:\Users\f8801\myfirstcode\line-bot-firebase"
node trigger-reminder.js
```

**功能**：
- ✅ 抓取 Google Calendar iCal
- ✅ 解析並更新 Firebase `/calendar-cache`
- ✅ 發送隔日行程提醒

**適用場景**：
- 模擬 `calendarReminder` Cloud Function 的行為
- 手動補發漏掉的提醒
- 排查提醒流程問題

**重要**：無論哪個模式，都會同時更新 Firebase `/calendar-cache`（含所有事件的解析結果），確保 Cloud Function 有最新資料可讀。當 LINE Bot 的「重新整理」顯示 ⚠️ 時，表示 Cloud Run 無法連到 Google Calendar，需在本機執行此腳本手動更新快取。

### 工作回報功能

老師收到多項工作提醒後，可回傳訊息報告完成狀態：

```
完成 比對高二複手冊
未完成 批改作業
```

Bot 回覆確認並將記錄寫入 `/task-reports/{日期}/{userId}/{工作名稱}`。  
工作名稱不需完整複製，打關鍵字即可（會原樣存入）。

### 備份策略

- **自動備份**：`.github/workflows/backup.yml`，每週日 10:00 台灣時間執行
- **備份位置**：`line-bot-firebase/backups/firebasedb_backup_YYYY-MM-DD.json`（保留最近 4 份）
- **詳細說明**：[backup_restore.md](line-bot-firebase/backup_restore.md)
- **GitHub Secrets 需求**：`FIREBASE_TOKEN`（`firebase login:ci` 產生）
- **⚠️ 注意**：`backup.yml` 在 `wisdomenglish/5000word-list` repo 執行，`cache-update.yml` 在 `f88012/line-bot-firebase` repo 執行。兩個 repo **各自**需要設定 `FIREBASE_TOKEN` Secret，不共用。
  - `wisdomenglish/5000word-list` Secrets：`https://github.com/wisdomenglish/5000word-list/settings/secrets/actions`
  - `f88012/line-bot-firebase` Secrets：`https://github.com/f88012/line-bot-firebase/settings/secrets/actions`

### 定期維護清單

#### 每週一次（推薦週一晚上 23:00 執行）

```powershell
# 更新行事曆快取（不發送提醒）
cd "c:\Users\f8801\myfirstcode\line-bot-firebase"
node trigger-reminder.js --cache-only

# 預期輸出：✅ Cache updated successfully
```

**檢查項目：**
- [ ] iCal 解析成功（無 `ERROR: Response too small` 或 `Invalid iCal content`）
- [ ] 事件數量合理（應 > 100 筆）
- [ ] 特殊字符正確（例：`[Sammy, Frank, Ivy]` 不含 `\,` 逃脫）
- [ ] 日期正確（無 "Invalid Date" 或亂碼）
- [ ] Firebase cache 已更新（`✅ Firebase calendar cache updated`）

#### 異常排查（LINE Bot 顯示 ⚠️ 提示時執行）

1. **「重新整理」回覆「⚠️ 無法連到 Google 日曆」**
   - 表示 Cloud Run 被 Google 封鎖
   - 解決：執行上述 `node trigger-reminder.js`

2. **Firebase cache 過期（超過 24 小時）**
   - 檢查：Firebase Console → `/calendar-cache` → `timestamp`
   - 計算：`(Date.now() - timestamp) / 1000 / 3600` 超過 24 時觸發
   - 解決：執行 `node trigger-reminder.js`

3. **事件顯示 "Invalid Date" 或異常**
   - 檢查：`node trigger-reminder.js` 輸出是否有錯誤
   - 驗證：iCal URL 是否仍可存取（瀏覽器開啟 `GOOGLE_CALENDAR_ICAL_URL`）
   - 確認：Firebase `/teacher-mapping` 中的老師名字是否與行事曆前綴匹配

4. **提醒對象不對或缺漏**
   - 驗證：`/teacher-mapping` 中的名字清單
   - 檢查：提醒對象是否已訂閱（`/calendar-subscribers/{userId}`）
   - 確認：Google 日曆事件標題前綴格式是否正確（`[全部]` / `[Name1,Name2]` / 無前綴）

#### 監控指標

| 指標 | 預期值 | 檢查方式 |
|------|--------|---------|
| Firebase `/calendar-cache/timestamp` | 應在 24 小時內更新 | Firebase Console |
| 每週至少成功執行一次 | 1 次 / 週 | GitHub Actions / 檢查執行日誌 |
| 事件解析無異常 | 0 錯誤 | 檢查是否有 "Invalid Date"、`\,`、"ERROR" |
| 提醒收件人清單完整 | 根據行事曆配置 | 手動驗證樣本事件的收件人 |

#### 自動化監控（GitHub Actions）

✅ **已設定**：`.github/workflows/cache-update.yml`
- **觸發時間**：每天 07:00 台灣時間（UTC 23:00 前一天）
- **為什麼是 07:00？**：`calendarReminder` 在 08:00 執行，需要預先更新快取（見下方快取同步問題）
- **執行命令**：`node trigger-reminder.js --cache-only`
- **執行記錄**：GitHub → Actions → Weekly Calendar Cache Update

**確認方式**：
1. GitHub 網頁 → **Actions** 頁籤 → **Weekly Calendar Cache Update**
2. 查看最近的執行記錄（綠色 ✅ = 成功）
3. 點擊執行 → **Update calendar cache** → 查看輸出日誌

**若執行失敗**：
- 檢查 GitHub Secrets 中 `FIREBASE_TOKEN` 是否有效
  - 產生新 token：`firebase login:ci`
  - 更新 Secrets：GitHub → Settings → Secrets and variables → Actions
- 查看 GitHub Actions 的錯誤日誌（紅色 ❌）

#### 快取同步問題（2026-05-05 事件）

**問題說明**：
- 5/5 早上 08:00 的 `calendarReminder` 應該發送隔日（5/6）的事件，包括 `[Xin]114學測模考本`
- 但 5/5 早上的快取中沒有 5/6 的 114 事件，導致未發送提醒
- 5/5 晚上 23:00 的 `eveningFollowUp` 也因此無法催促相關老師

**根本原因**：
1. Cloud Run IP 被 Google 封鎖，無法直接抓 Google Calendar iCal
2. 系統依賴 Firebase `/calendar-cache`（24 小時 TTL）
3. 5/5 早上的快取已超過 24 小時且無法更新 → 使用舊快取（缺少新事件）
4. 沒有在 08:00 前自動更新快取的機制

**解決方案**（2026-05-06 實施）：
- 改為每天 07:00 台灣時間執行 GitHub Actions，自動更新快取
- 確保快取始終是最新的，08:00 的提醒能找到所有事件
- 若 workflow 失敗，快取會使用舊資料（但有 24 小時容限）

**設定 `FIREBASE_TOKEN`（必須）**：
```powershell
firebase login:ci
# 複製產生的 token，設定為 GitHub Secret（需在兩個 repo 各自設定，見備份策略章節）
# GitHub → Settings → Secrets and variables → Actions → New repository secret
# Name: FIREBASE_TOKEN
```

**⚠️ Token 失效處理**：若 GitHub Actions 顯示 `FIREBASE_TOKEN: `（空白），表示 token 已過期或未設定。重新執行 `firebase login:ci` 產生新 token 並更新兩個 repo 的 Secret。

---

## MCP 工具（.mcp.json）

| MCP | 用途 |
|-----|------|
| `eyaltoledano-claude-task-master` | 任務管理 |
| `firebase` | Firebase 專案操作（project: news-english-ef2e4） |
| `playwright` | 瀏覽器自動化測試 |

Playwright Chromium 版本：`chromium-1217`（playwright MCP）、`chromium-1208`（notebooklm-skill）。

---

## Claude Code Skills

| Skill | 檔案 | 用途 |
|-------|------|------|
| `notebooklm-research` | `~/.claude/skills/notebooklm-research.md` | NotebookLM 研究 → Claude 內容生成 |

### notebooklm-skill

- **套件路徑**：`~/.claude/skills-src/notebooklm-skill/`
- **Session**：`~/.notebooklm/storage_state.json`（Google 帳號一次性登入）
- **CLI 指令**：`notebooklm-skill`、`notebooklm-pipeline`、`notebooklm-mcp`

```powershell
# 建立筆記本並匯入來源
notebooklm-skill create --title "研究主題" --sources https://example.com

# 對筆記本提問
notebooklm-skill ask --notebook "研究主題" --query "關鍵發現是什麼？"

# 生成 Podcast 音檔
notebooklm-skill podcast --notebook "研究主題" --lang zh-TW --output podcast.m4a

# 列出所有筆記本
notebooklm-skill list

# Session 過期時重新登入
python3 -m notebooklm login
```

---

## 開發注意事項

- **Shell 語法**：部署指令用 PowerShell，鏈結命令用 `;` 而非 `&&`
- **API 金鑰**：存放在 `functions/.env`（git ignored），勿 commit
- **PWA 圖示**：使用 Wisdom logo（`icon-192.png` / `icon-512.png`）
- **LINE Bot 回覆格式**：維持分隔線 + emoji 風格，不加粗體（`**`）
- **Cloud Function 語言**：prompt 中明確指定「ALL Chinese text must be in Traditional Chinese (繁體中文), NOT Simplified Chinese (簡體中文)」
- **Cloud Function 架構**：每個 export 函式自帶 `require('@anthropic-ai/sdk')` 和 client 實例，不依賴模組頂層共用物件（避免 Cloud Run 作用域問題）
- **generateVocabQuiz max_tokens**：必須設為 `4096`（非 1024），10 道題目的 JSON 約需 2500–3000 tokens，1024 會截斷 → `Unexpected end of JSON input` → 500 錯誤
- **Service Worker 快取版本**：更動 `index.html` 或 `vocabulary-data.js` 需同步升版 `sw.js` 的 `CACHE` 常數（目前 `vocab-app-v51`），否則舊使用者看不到更新
- **檔案編碼**：`functions/index.js` 和 `package.json` 必須存為 UTF-8（無 BOM），Windows PowerShell redirect 可能產生 UTF-16 BOM 導致部署失敗
- **行事曆 iCal 日期格式化**：`formatCalendarEvents` 使用 `evt.start`（YYYY-MM-DD 字串）手動格式化日期，不使用 `toLocaleDateString`（Cloud Run 環境下對 Invalid Date 輸出字串 "Invalid Date"）；`startObj` 存為毫秒 timestamp（`getTime()`），用 `getUTC*` 方法讀取時間
- **iCal 折疊（folding）**：iCal 超過 75 字元的行會折疊（`CRLF + 空格`），解析前必須先 unfolding（`icalText.replace(/\r\n[ \t]/g, "")...`），否則長標題（如 `[Sammy, Frank, Ivy] 考猜試教@ 府中`）會被截斷、名字解析失敗
- **Cloud Run 無法抓 Google Calendar iCal**：Cloud Run IP 被 Google 封鎖，返回「Sorry...」HTML（1KB）而非 iCal 內容。已加 `BEGIN:VCALENDAR` 有效性檢查，無效時拋錯而非靜默回傳 0 筆
- **全角括號（2026-05-07 修復）**：Google 日曆事件標題若含全角括號 `［` `］`（U+FF3B/FF3D），`parseEventTarget` 的正規表達式無法匹配，導致整個標題被視為「發給所有人」。`parseEventTarget` 函式（`index.js` 和 `trigger-reminder.js`）現已在 regex 前先正規化：`title.replace(/［/g, "[").replace(/］/g, "]")`
- **行程提醒回覆指示**：提醒訊息結尾加入「若老師尚未完成，請回覆：\n「xxx尚未完成，預計[日期]前完成」」，引導老師回報進度，讓 `eveningFollowUp` 能正確判斷未回報者
- **calendar-sent key 必須含日期（2026-05-16 修復）**：`/calendar-sent/` 的 key 格式為 `{eventUID}_{evt.start}_{userId}`，不可省略日期。舊格式 `{eventUID}_{userId}` 會導致：(1) 同一事件以「明天」發出後，隔天以「今天」重送時被判斷為已送出而跳過；(2) 循環事件（RRULE）首次寄出後，往後每週永遠跳過。`index.js` 和 `trigger-reminder.js` 兩處 key 格式需保持一致
- **RECURRENCE-ID 循環例外事件去重錯誤（2026-05-16 修復）**：`trigger-reminder.js` 的 `byUid` Map 去重邏輯會讓同一 UID 的多個循環例外事件互相覆蓋，最後只剩最後一筆。修法：有 `RECURRENCE-ID` 的例外事件一律放入獨立 `exceptions[]` 陣列（不做 UID 去重），最後與非循環事件合併處理。無此修復時，Google 日曆中有多個修改過日期/標題的循環事件（如每週師訓）只有一次能被偵測到
