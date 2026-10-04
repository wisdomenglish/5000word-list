# CLAUDE.md — 專案說明

## 專案概覽

這個 repo 包含四個獨立子專案：

| 子專案 | 路徑 | 技術 | 部署 |
|--------|------|------|------|
| 5000英文單字學習 PWA | `/`（根目錄） | 純 HTML/CSS/JS | GitHub Pages |
| hero-english React RPG PWA | `hero-english/` | React + Vite + Firebase Hosting | https://hero-english-ef2e4.web.app |
| LINE Bot 英文教學助手 | `line-bot-firebase/` | Firebase Functions + Claude API | Firebase / GCP |
| Fluent（YouTube 影片學英語） | `youtube-english/`（**獨立 git repo**，見下方） | Next.js 16 + Firebase + OpenAI | Firebase App Hosting（asia-east1） |

---

## 1. 5000英文單字學習 PWA

### 部署資訊

- **GitHub Pages URL**：`https://wisdomenglish.github.io/5000word-list/`
- **GitHub 組織**：`wisdomenglish`（原 `f88012`，私隱考量已轉移）
- **Git remote**：`wordlist` → `https://github.com/wisdomenglish/5000word-list.git`
- **工作分支**：`add-wisdom-icon`（push 到 `wordlist main`）

### 關鍵檔案

- [index.html](index.html) — 單一檔案 PWA，包含所有 CSS/JS
- [vocabulary-data.js](vocabulary-data.js) — 外部單字庫（4,549 字，格式：`{w, z, p}`；2026-06-11 由 4,391 擴充至 5,565 後，2026-06-12 精簡純變化形回 4,549，並 AI 校正中文釋義標點，保留原形＋真形容詞/獨立詞）
- [phrases-data.js](phrases-data.js) — 外部片語庫（1,125 條，格式：`{p, z}`）
- [manifest.json](manifest.json) — PWA 設定（name: 5000英文單字學習）
- [sw.js](sw.js) — Service Worker，支援離線使用（目前版本：`vocab-app-v109`）
- [icon-192.png](icon-192.png) / [icon-512.png](icon-512.png) — Wisdom logo 圖示

### 功能

- 4,549 英文單字瀏覽、搜尋、字母篩選
- Claude AI 生成例句（單字詳細 Modal，📝 例句 Tab）
- Claude AI 字根拆解（單字詳細 Modal，🌱 字根 Tab）
- AI 測驗 Tab + 複習清單（單字／片語皆可出題）
- **片語查詢**：1,125 條英文片語，支援搜尋、A–Z 篩選、點擊開啟 Modal + AI 生成例句
- **自訂單字庫**：學生可新增自己的單字，整合進字典/搜尋/測驗（見下方說明）
- **雲端同步**：登入 Google 帳號後自訂單字庫與 ⭐ 星號複習清單自動同步至 Firebase Firestore
- **🃏 單字卡模式**：翻卡互動練習，自評還不熟／普通／會了，結果自動加入複習清單並標色
- **學習進度 Tab**：統計卡（掌握字數、連續打卡、正確率、本週答題）+ 本月熱力圖 + 排行榜
- **首頁**（2026-06-12 改版「考生倒數 Hero」）：深藍 hero 大字學測倒數（116 學測 2027-01-22）+ 備考進度條（以考前一年為起點算 %）→ 3 顆 mini 統計磚（🔥連續打卡／🎯今日目標／⭐複習清單，可點擊跳對應 Tab）→ 橘色每日一字卡 → 快速操作卡 → 我的字表
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
| `submitReport` | `https://submitreport-gtlccx6nka-uc.a.run.app` | 學生問題回報（寫 RTDB + 推播給綁定的管理員 LINE）|
| `reportImage` | `https://reportimage-gtlccx6nka-uc.a.run.app` | 以 HTTPS 提供回報截圖（供 LINE 圖片訊息抓取）|

- 例句結果以 `vocab_ex_{word}` 為 key 存入 localStorage（快取）
- 字根結果以 `vocab_etym_{word}` 為 key 存入 localStorage（快取）
- **片語例句**以 `vocab_phrase_ex_{phrase}` 為 key 存入 localStorage（快取）
- **句子填空題目**以 `vocab_quiz_{word}` 為 key 存入 localStorage（客戶端題庫快取，疊加在 Firebase 共享快取之上）：`startQuiz()` sentence 模式出題前先讀本地快取，只對未快取單字呼叫 `generateVocabQuiz`，回傳後寫回；**已練過的單字離線也能複習**（fetch 失敗時若有部分本地快取則用快取題目，全無才報錯）
- 自訂單字以 `vocab_custom_words` 為 key 存入 localStorage（JSON array，格式：`{word, pos, zh, custom:true}`）
- **學習統計 localStorage keys**：
  - `vocab_streak`：`{streak, best, lastDate}` 連續打卡天數（**2026-06-13 起也同步至 Firestore `users/{uid}.streak`**，見下方雲端同步）
  - `vocab_daily`：`{date, count, goal}` 今日答題數／目標
  - `vocab_heatmap`：`{"YYYY-MM-DD": count, ...}` 每日答題熱力圖（保留 90 天）
  - `vocab_accuracy`：`{correct, total}` 累計正確率
  - `vocab_mastery`：`{word: "unfamiliar"|"moderate"}` 單字卡熟悉度標記
  - `vocab_settings`：`{haptics}` App 設定（觸感回饋開關，預設 `true`；側邊欄「⚙️ 設定」可切換）
- **觸感回饋（haptics，2026-06-13）**：`haptic(pattern)` helper 受 `appSettings.haptics` 控制；在 `answerQ()`/`submitSpelling()`（答對 `18`、答錯 `[0,25,40,25]` 雙震）與 `rateFc()`（`12` 輕震）呼叫。開關存 `vocab_settings`，`setHaptics(on)` 寫入
  - **平台分流**：`navigator.vibrate` 存在（Android 等）→ 用 Vibration API 完整震動；否則 `_isIOS()` 為真 → `iosHaptic()` 借 iOS 17.4+ 的 `<input type="checkbox" switch>` 系統觸感（建立一個隱藏 label，`.click()` 切換 switch 觸發觸感；`_iosHapticEl` 重用同一元素）
  - **iOS 限制**：只有一種輕觸（無法分答對/答錯強弱）、需 iOS 17.4+、屬非官方行為（Apple 可能改掉）、須在 user gesture 同步流程內呼叫（答題點擊符合）。失效時自動靜默。要完整 Taptic 需包原生殼（Capacitor `@capacitor/haptics`）
- 所有 Cloud Run 服務已設定 `allUsers` `roles/run.invoker`（允許未登入呼叫）
- **新增 Cloud Function 規範**：函式宣告需加 `invoker: "public"`（`onRequest({ cors: true, invoker: "public" }, ...)`）才能公開訪問。第一次 deploy 輸出 CF URL，第二次 deploy 才顯示 Cloud Run URL（`{name}-gtlccx6nka-uc.a.run.app`）
- **密碼保護**：首次開啟需輸入授權密碼，通過後以 SHA-256 hash 存入 localStorage（key：`vocab_auth_v1`）；更換密碼只需在 `index.html` 更新 `AUTH_HASH` 常數即可強制所有用戶重新驗證（詳見 memory）

### vocabulary-data.js 架構

- 格式：`const WORDS = [{w, z, p, lv?}, ...]`（w=英文, z=中文, p=詞性, lv=大考中心參考詞彙表級別 1–6）
- **`lv` 級別欄（2026-06-17）**：對照大考中心《高中英文參考詞彙表》(111起) 標上 Level 1–6。**官方表查無的字不加 `lv` 欄**（非標 0），App 視為「未分級／超綱」。4,134 字有級別、415 字未分級。建表工具：`build-levels.mjs`（讀 `level-ref.txt` 官方對照表 5,991 筆，含 lemmatize 讓規則衍生形繼承字根級別），可重跑；產 `level-report.txt` 核對報告
- `index.html` 在 `<head>` 載入後，緊接一行 adapter：`WORDS.forEach(o=>{o.word=o.w;o.zh=o.z;o.pos=o.p||'';});`（`lv` 直接用 `w.lv`，不需 adapter）
  → 其餘程式碼繼續用 `w.word / w.zh / w.pos`，不需改動
- **重複字清除規則**：刪除 -s/-ed/-ing 衍生形，條件為 zh 相同且 pos 相同（跨詞性保留）
- **getZhDef() 邏輯**：若第一段（`；` 前）≤ 2 字，自動合併第二段，避免擷取到語境詞（如「飛機」）而非完整解釋
- 每次修改 `index.html` 或 `vocabulary-data.js` 後必須升版 `sw.js` 的 `CACHE` 常數，否則舊使用者拿到快取版
- **SW 自動更新機制**：`sw.js` 的 install 事件含 `self.skipWaiting()`，新 SW 安裝後立即接管；`index.html` 監聽 `controllerchange` 事件自動 `window.location.reload()`，使用者只需重新開啟頁面一次即可看到最新版本，無需手動硬重整

### UI 設計規範

- **色彩主題**：明亮（`--bg:#F2F2F7`），強調色 `--accent:#4361EE`（藍紫）、`--accent2:#F72585`（粉紅）；`--surface:#FFFFFF;--text:#1C1C1E;--muted:#8E8E93`
  - **2026-06-13 全站配色統一**：移除舊主題殘留的紫色 tint `rgba(124,106,247,*)`，全部改成藍色 accent `rgba(67,97,238,*)`；藍→紫漸層按鈕端點 `#9b8bf0` 改 `#7B9EFF`；修掉 `.dict-mode-bar` 深色殘留底（`#12121c` → `var(--surface)`）
- **共用深藍 hero（`.page-hero`，2026-06-13）**：首頁/進度頁/測驗頁/我的字本頁統一的主視覺卡 — `linear-gradient(135deg,#1E1B4B,#3730A3,#4361EE)` + 右上粉紅光暈 `::after`。子元素 `.page-hero-eyebrow`（小標）/`.page-hero-title`（Playfair 大標）/`.page-hero-sub`/`.page-hero-chips`+`.page-hero-chip`（半透明白膠囊統計）。測驗頁 `renderQuizSetup` 頂部「🎯 測驗中心」、我的字本 `renderMyWords` 頂部「⭐ 我的單字」+ 資料夾/自訂/複習 chips 用此元件；首頁 `.home-hero`、進度頁 `.prog-hero` 是同語言的獨立版本
- **字體**：標題 Playfair Display（serif），內文 DM Sans（sans-serif）
- **導覽結構**：
  - 頂部固定列（`#globalTopBar`，52px）：Logo + 連續打卡 badge + ☰ 選單按鈕
  - 底部固定導覽（`#bottomNav`，76px）：首頁／單字／測驗／我的單字／進度 共 5 個 tab
  - `body` 設 `padding-top:52px; padding-bottom:76px`
  - `switchTab(tab)` 控制各 section 顯示隱藏；預設顯示 `homeSection`
- **側邊欄 `#sideDrawer`**（右側滑入）順序：帳號同步 → 👤 我的資料（登入後）→ 更新公告 → 其他功能（段落理解）→ ⚙️ 設定（觸感回饋開關 `#hapticToggle`）→ 學習資源
- **詞性標籤分色**（`.pos-tag` + class）：
  - `n.` → 綠（`.pos-n`，`#6ecf88`）
  - `v.` → 藍（`.pos-v`，`#5bc0de`）
  - `adj.` → 琥珀（`.pos-adj`，`#f0ad4e`）
  - `adv.` → 淡紫（`.pos-adv`，`#b09ef8`）
  - 其他 → 粉紅（`.pos-other`，`--accent2`）
  - `getPosClass(pos)` helper 依前綴判斷（`n`→n, `v`→v, `adj`→adj, `adv`→adv）
- **A–Z 篩選列**（`.alpha-bar`）：`flex-wrap:nowrap;overflow-x:auto` 橫向滾動，按鈕 40×40px，`flex-shrink:0` 防止壓縮
- **篩選模式切換（字母 / 級別，2026-06-17）**：字典頁搜尋列下有 `.filter-mode-toggle`（`🔤 字母` / `📊 級別`兩顆 `.fm-btn`），`setFilterMode('alpha'|'level')` 切換。**A–Z 列（`#alphaBar`）與級別列（`#levelBar`）互斥，只顯示其一**（切換時 `display` 互換並清掉另一種選取，避免隱藏條件）。級別列 `buildLevelBar()` 產生 `全部 / Lv1–6 / 未分級` 按鈕（`.lvl-btn`，各級用 `LEVEL_COLORS` 上緣色條 + 字數），`setLevel(n)` 切換 `selectedLevels`（0=未分級）。`update()` 依 `filterMode` 套用字母或級別過濾
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

### 雜誌題庫架構（2026-09-28 新增）

- **來源**：學生用 LiveABC 雜誌製作的獨立 React 應用（`live_abc_9.tsx`，未 commit，僅供參考），因主站是無建置流程的單檔 vanilla JS PWA，**不引入 React/npm build**，改把純資料部分（`UNITS_DATA`）用 PowerShell 逐行擷取成 `magazine-sept-data.js`（`const MAGAZINE_UNITS_202509 = {...}`），互動邏輯全部改寫成 vanilla JS 比照既有 tab 的 render 函式模式（詳見「段落理解」）
- **首頁入口**：`.home-quick-row` 從 2 欄改 3 欄（`repeat(3,1fr)`），新增「📚 雜誌題庫」卡片 → `switchTab('magazine')` → `#magazineSection`（比照 `#paragraphSection` 慣例，新增 tab 不進 `bnavMap`，無底部導覽對應項）
- **資料結構**：`MAGAZINES` 陣列固定 5 個「卡位」（不分品牌，卡位本身沒有語意），每筆 meta 含 `id/label/desc/color/cover/passcodeHash/data`。`data:null` 顯示「即將推出」（`.mz-mag-card.disabled`，不可點擊）；要上一本新雜誌，直接佔用一個空卡位，把 `label/desc` 改成真實的期數/品牌名稱即可，**不需要幫「品牌」另外設計資料結構**（2026-10-01 討論過要不要分品牌分組顯示，決定用這個更簡單的做法）
  - `color`：卡片識別色（HEX），沒有封面圖時卡片頂部色條 + icon 底色會用這個；`cover`：封面縮圖路徑/URL，設定後卡片改顯示縮圖而非 emoji+色塊。目前 `202509`（Live 互動英語）＝`#4361EE`、`sc202509`（Studio Classroom）＝`#F97316`、其餘未上架卡位＝`#94A3B8`
  - **目前已上架**：
    - `202509` = Live 互動英語 9月號（9 個 Unit，完整，原始 React 檔 `live_abc_9.tsx` 直接轉檔，非 Claude 產製內容）
    - `sc202509` = Studio Classroom 9月號（`magazine-studioclassroom-sept-data.js`，**Unit 1–14 全數完整**，2026-10-01 一次做完）——原始課文來源 `Studio Classroom 9月號_課文 U1-U14.pdf`，14 個 Unit 連續編號、只有課文原文，annotations/vocab/cloze/wordBank/discourse/reading 皆為 Claude 依黃金標準規範原創產製，**非雜誌原有內容**，已通過結構性驗證（passage 與 annotations.paragraphs 逐字重組比對含課文原有的半形/全形標點與 curly quote/apostrophe、wordBank/discourse 答案字母打散、篇章結構首段不挖空、cloze/vocab/reading 每題 4 個選項且解析涵蓋全部選項），但**內容品質（例句是否自然、干擾選項難度、中文解析用字）仍建議實際使用前抽查**，AI 產製終究不是人工編審
    - `4u202509` = 空中美語 4U 9月號（`magazine-4u-sept-data.js`，13 個 Unit：Unit 1,2,4,5,6,7,8,9,10,11,12 + News 1,2，原始 React 檔 `4u_9.tsx` 直接轉檔，**內容為原磁誌已完整製作，非 Claude 產製**）。轉檔驗證時發現 **Unit 1,2,6,7,8 這 5 個 Unit 的篇章結構題違反「首段不得挖空」規則**（第一段就出現 [1] 空格）
    - `all202509` = ALL+互動英語 9月號（`magazine-all-sept-data.js`，10 個 Unit：Unit 1,2,3,4,6,8,9,10,12,13，原始 React 檔 `all_9.tsx` 直接轉檔，**內容同樣是原雜誌已完整製作，非 Claude 產製**）。轉檔驗證比例更高：**10 個裡有 9 個（除了 Unit 1）都違反「首段不得挖空」規則**
    - **待補修清單（2026-10-01 累積，尚未動手）**：4U 的 Unit 1,2,6,7,8 + ALL+ 的 Unit 2,3,4,6,8,9,10,12,13，共 14 個 Unit 的 `discourse.paragraphs`／`discourse.answers` 空格編號需要重新調整，讓首段恢復完整不挖空（跟 Live ABC／Studio Classroom 兩本的規範一致）。不影響測驗功能（照樣能作答、批改、算分），只是不符合golden-master 規範的「首段不得挖空」鐵律，用戶已決定先上架、之後再一次補修
    - 之後若要新增其他期雜誌：若來源已是完整題庫（像 `live_abc_9.tsx`／`4u_9.tsx`／`all_9.tsx` 這種 React 檔）→ 直接用 PowerShell 逐行擷取 `UNITS_DATA` 轉檔即可，記得跑一次結構性驗證（passage 與 annotations.paragraphs 逐字重組比對、wordBank/discourse 答案字母打散、**篇章結構首段不得挖空**、cloze/vocab/reading 每題 4 選項）——**實測這類「完整題庫」來源常常無法通過首段不挖空的檢查**，要有心理準備多半需要事後補修；若來源只有課文原文（像 PDF）→ 需要先依黃金標準規範自己產製全部題型內容，工作量大很多，見上方 Studio Classroom 的做法
- 單一雜誌內為 `{ "Unit 1": {...}, "Unit 2": {...}, ... }`（key 為原始不連續編號，如 9 月號僅含 Unit 1,2,3,4,5,8,9,11,14，對應原雜誌實際單元序號，**保留原樣不重新編號**）；每個 Unit 含 `title/chineseTitle/passage/chineseTranslation/annotations（keyVocabList+grammarNotes+patternNotes+paragraphs 分段標註）/vocab（單字四選一）/cloze（克漏字）/wordBank（文意選填 A-J）/discourse（篇章結構 A-E）/reading（閱讀測驗）`
- **導覽層級**：首頁卡片 → `renderMagazineList()`（5 本雜誌）→ `openMagazine(id)` → `renderMagazineUnitList()`（該期 Unit 清單）→ `openMagazineUnit(key)` → `renderMagazineUnit()`（6 個子 tab：課文精讀/單字/克漏字/文意選填/篇章結構/閱讀測驗，另有跨 Unit 的「📕 錯題」tab）
- **答題狀態**：`mzAnswers`（記憶體內，格式 `{unitKey}_{tab}_{qid}: letter`，不落地存 localStorage，重整頁面會重置，比照原 React 版本行為）；切換 Unit/Tab 只重置 `mzShowExplain`（隱藏解析），**不清答案**，只有按「重置本題型」才清除當前 `{unitKey}_{tab}_` 前綴的作答
- **選項點擊用事件委派 + 針對性 DOM 更新**（`document.addEventListener('click', ...)` 在 `.mz-opt-btn`/`.mz-anno` 做 `closest()` 判斷），選答案只 toggle class 不整頁重繪（避免長頁面滾動位置跳動）；批改（`mzGradeCurrentTab()`）才整頁重繪顯示對錯顏色
- **錯題本（📕 錯題）**：批改後答錯的題目（`uAns && uAns!==正解`，未作答不算錯題）寫入 `mzMistakes`（`localStorage['vocab_magazine_mistakes']`，跨頁面持久化，**目前未同步 Firestore**，之後若要跨裝置同步可比照 `folders` 寫法），依 `id`（`{unitKey}_{tab}_{qid}`）去重；「回溯至原題型重做」按錯題卡片可跳回原 Unit/Tab
- **課文精讀 tab 的標註點擊**：`seg.type` 為 `vocab/grammar/pattern` 的片段渲染成 `<span class="mz-anno" data-note-type data-note-id>`，點擊經事件委派查對應 `keyVocabList/grammarNotes/patternNotes` 顯示提示卡（`mzActiveNote`），**不用 inline onclick 傳文字**（避免 passage 內容常見的撇號如 `Ali Baba's` 造成引號解析錯誤，比照片語模組 `_phraseFolderTarget` 的作法）；`mzAnnotationMode`（all/vocab/grammar/pattern/clean）篩選顯示哪些標註類型
- **每本雜誌可獨立設通行密碼（2026-10-01 新增）**：`MAGAZINES` 每筆 meta 有選填欄位 `passcodeHash`（SHA-256 hex，比照站內 `AUTH_HASH`/`_sha256()` 算法），預設 `null` 表示沿用 App 本身首頁那層全站密碼即可，不必重複設一道。要幫某一期單獨鎖密碼：瀏覽器 console 跑 `await _sha256('密碼明文')`，把結果填進該期的 `passcodeHash`。`openMagazine(id)` 會先查 `mzIsUnlocked(mag)`（比對 `localStorage['vocab_magazine_unlock_'+id]` 是否等於該雜誌的 `passcodeHash`），沒解鎖就導去 `renderMagazinePasscodeGate()`（獨立一頁表單，非 overlay，因為使用者可能要先返回雜誌列表看別期），驗證成功後寫入 localStorage 永久解鎖（不會每次重問），`renderMagazineUnitList()` 進入點也有同一道防護（防止直接呼叫函式繞過）
- **列印／匯出試卷（2026-10-01 新增，原本 v1 刻意砍掉的功能，後續補齊；同一天內連續修過兩輪手機無法使用的 bug，見下）**：Unit 頁頂部 🖨️ 圖示按鈕 → `mzOpenPrintModal()` 彈出格式（學生空白卷／教師詳解卷）+ 範圍（當前題型/課文／全單元完整考卷／弱點錯題本）選擇框 → `mzBuildPrintBody()` 組出內容 HTML
  - **⚠️ 第一輪修復（已作廢，不要再採用）**：`window.open('', '_blank')` 開新分頁列印 → 手機上（尤其是 PWA standalone 模式）新分頁常卡死或被擋，只能整個關掉 App。改成直接在當前頁面用 `@media print` 切換顯示後呼叫同一個視窗的 `window.print()`——**這個版本後來證實依然無法使用**：`window.print()` 依賴系統原生列印面板，但很多行動裝置瀏覽器環境（尤其是 **LINE 內建瀏覽器這類 in-app webview**，這個 App 的使用情境很常見學生/老師透過 LINE 分享連結開啟）**根本沒有實作 `window.print()`，呼叫了也完全沒有反應**，使用者端表現就是「連不起來、什麼都不會發生」
  - **✅ 第二輪修復（2026-10-01，目前採用的版本）：改成前端直接產生真正的 PDF 檔案，完全不經過系統列印面板**。流程：`mzStartPdfExport()`（async）→ 把 `mzBuildPrintBody()` 的內容寫入 `#mzPrintArea`（平常 `display:none`，產生時暫時用 `position:fixed;left:-9999px` 讓它「可被渲染但在畫面外」——html2canvas 無法擷取 `display:none` 的元素，必須是這種畫面外但仍渲染的技巧）→ `mzLoadPdfLibs()` 動態注入 **html2canvas**（CDN `cdnjs.cloudflare.com/.../html2canvas.min.js`）與 **jsPDF**（同網域 `.../jspdf.umd.min.js`，不是一開始就在 `<head>` 載入，只有第一次真的用到列印功能才會載入，避免平白增加所有使用者的頁面重量）→ html2canvas 把 `#mzPrintArea` 整個轉成一張長圖 canvas → jsPDF 把這張長圖依 A4 頁高切成多頁组成 PDF Blob → 包成 `File` 物件存進 `mzPrintFile`
    - **為什麼不直接用 `window.print()` 搭配 CSS `@media print`**：那個機制完全依賴瀏覽器/系統自己的列印管線，而**手機瀏覽器對這條管線的支援落差極大，尤其 webview 類（LINE/FB 等 App 內建瀏覽器）經常整個沒有**，程式端無法偵測「列印面板根本沒跳出來」這種沉默失敗，使用者只會覺得「按了沒反應」。改成前端自己組 PDF 檔案後，不管在什麼瀏覽器/webview 裡，行為都是我們自己控制、一致的
    - **iOS canvas 像素上限保護**：iOS Safari 對單一 canvas 的總像素數有上限（約 1,677 萬 px²），長篇內容（如「全單元完整考卷」）在 `scale:2` 下很容易超過，超過時畫面會整張變空白或損毀。`mzStartPdfExport()` 會先讀 `area.scrollHeight` 估算實際內容高度，動態降低 `scale`（最低到 1）讓總像素數維持在安全範圍內，犧牲一點解析度換取能穩定產生
    - **分享/下載用「先產生、再點擊」兩階段，避開 iOS 的 user-gesture 限制**：html2canvas 轉圖＋jsPDF 組頁需要時間（長文件可能要幾秒），不能在同一個點擊事件裡同步跑完再呼叫 `navigator.share()`（iOS Safari 要求 `share()` 必須在使用者手勢的同步呼叫鏈內，await 太久會失去這個資格，這點跟 WOTD 分享圖片當初踩的坑是同一類）。所以改成：按下「產生 PDF」後先顯示 loading 動畫（`mzPrintStage='generating'`），背景跑完 html2canvas/jsPDF 後把狀態切成 `'ready'` 並重繪出「📤 分享」「⬇️ 下載」兩顆按鈕，這兩顆按鈕本身的點擊才是全新、乾淨的使用者手勢，可以同步呼叫 `navigator.share({files:[mzPrintFile]})` 或觸發 `<a download>`；`canShare` 不支援分享檔案時自動退回下載
    - 各題型各有一個 `mzPrint*Section(u, isTeacher)` 產生器（passage/vocab/cloze/wordBank/discourse/reading），學生卷只印題幹+選項+空白作答格，教師卷額外印 `✔ 正解` + 解析；`.mzp-*` 樣式直接寫在主 `<style>` 區塊
    - **錯題本列印**（`mzPrintMistakesSection`）依「單元+題型」分組，且先印該題型的完整上下文再條列題目——克漏字先印全文、文意選填先印詞庫+選填全文、篇章結構先印句子選項庫+四段落、閱讀測驗先印完整文章——避免孤立空格題目沒有上下文可對照
    - 沒有走任何 Cloud Function 或後端，純前端（html2canvas + jsPDF，兩個都是透過 CDN script 動態載入，不需要額外部署或密鑰）
    - `@media print` 那組 CSS 規則還留著沒刪（`#mzPrintArea` 顯示、App 其餘區塊隱藏），算是給桌機使用者手動按 Ctrl+P 的額外加分功能，但**已經不是「產生 PDF」按鈕實際走的路徑**，不要被這組 CSS 還在檔案裡誤導成「就是靠這個列印」
  - 2026-10-01 用 Playwright 實測過完整流程（CDN 載入成功、產生的 PDF 檔案 `%PDF-` 開頭/`%%EOF` 結尾、內部確實有多個 page object 與圖片物件、下載行為正常觸發），確認是結構完整的真實 PDF 檔案
- **閱讀測驗錯題卡片內嵌原文（2026-10-01 新增）**：`mzRenderMistakesTab()` 對 `m.tab==='reading'` 的錯題卡，額外抓該 Unit 的 `passage`（優先讀當下 `MAGAZINES` 資料，抓不到才退回錯題物件自己存的 `m.passage` 快照）渲染在題幹上方，`mzTogglePassage(id)` 控制收合/展開（`mzExpandedPassages` 狀態，預設展開）
- 每次修改 `magazine-{id}-data.js` 或新增雜誌後，記得升版 `sw.js` 的 `CACHE` 常數（比照 vocabulary-data.js/phrases-data.js 慣例），並視需要把新資料檔加進 `sw.js` 的 `addAll` 預快取清單

### 單字資料夾架構（含片語）

- **資料結構**：`wordFolders`（`let`，存 `localStorage['vocab_folders']`），每個資料夾物件為 `{ id, name, words:[字串], phrases:[字串] }`
  - `words` 存單字字串（與 `getAllWords()` 的 `word` 對應）；`phrases` 存片語字串（與 `PHRASES` 的 `p` 對應）
  - **向下相容**：舊資料夾沒有 `phrases` 欄位，讀取時一律 `f.phrases || []`
- **快取集合**：`folderWordSet` / `folderPhraseSet`（Set），由 `rebuildFolderWordSet()` 從所有資料夾攤平重建；卡片右下角 📁 標示靠這兩個 Set 判斷
- **`saveFolders()`**：寫 localStorage → `rebuildFolderWordSet()` → Firestore `{ folders }` `{ merge:true }`（片語隨整個 folder 物件一起同步，免改 sync 邏輯）
- **單字加入資料夾**：單字 Modal `📁 資料夾` 按鈕 → `openFolderSheet(word)` → `toggleWordInFolder` / `createFolderAndAdd`
- **片語加入資料夾**：片語 Modal footer `📁 資料夾` 按鈕 → `openPhraseFolderSheetCurrent()` → `openPhraseFolderSheet(phrase)` → `togglePhraseInFolder(folderId)` / `createFolderAndAddPhrase()`
  - **重點**：片語可能含 `'`（如 can't），inline onclick 不傳片語字串，改用全域 `_phraseFolderTarget` 暫存目標片語，避免引號解析爆掉
- **資料夾詳情**（`openFolderDetail`）：分「📚 單字」與「🔖 片語」兩區；片語列用 index（`openPhraseFromFolder(id,i)` / `removePhraseFromFolder(id,i)`）而非字串，同樣避免引號問題；只含片語的資料夾不顯示「開始測驗」按鈕（測驗僅支援單字）
- **字典批次選取**（Gmail 式多選，2026-06-11）：
  - 狀態：`selectMode`（boolean）+ `selectedCards`（Set，存單字字串，**跨分頁保留**）
  - 字典控制列「☑ 選取」按鈕 → `toggleSelectMode()`；卡片 onclick 改走 `onCardClick(word)` 分流（select 模式 → `toggleCardSelect`，否則 `openWordModal`）
  - **勾選框平時不顯示**：`.card-check` 預設 `display:none`，只有 `.grid.select-mode .card-check` 才顯示（符合「按下選取前沒有方格」需求）
  - 勾選用 targeted DOM 更新（不整頁重繪）；卡片帶 `data-word`，用 `CSS.escape` 定位
  - 批次加入：`addSelectedToFolder()` → `bulkAddToFolder(id)` / `createFolderAndBulkAdd()`（全域 `_bulkFolderTargets` 暫存選取清單），加入後 `_exitSelectMode()` 自動退出
  - 選取工具列 `.select-bar` `position:sticky; top:calc(52px + safe-area)`（避開固定頂部列）
- **「我的單字」頁批次選取**（2026-06-12）：同樣的多選，作用於 `renderMyWords()` 的 📝 自訂單字庫 + ⭐ 複習清單
  - 獨立狀態 `mwSelectMode` / `mwSelected`（與字典 `selectMode`/`selectedCards` **分開**，避免互相干擾）；`toggleMwSelectMode()` 重繪整頁
  - `.mw-item` 帶 `data-word`，內含 `.mw-check`（平時不渲染，select 模式才加）；onclick 走 `onMwItemClick(word)` 分流；`.mw-wrap.mw-selecting .mw-actions-col{display:none}` 隱藏編輯/刪除/已熟按鈕
  - **共用 bulk 寫入**：`addSelectedToFolder`（字典）/ `addMwSelectedToFolder`（我的單字）/ `addPhraseSelectedToFolder`（片語）都設 `_bulkFolderTargets` + `_bulkSource`（`'dict'`/`'mw'`/`'phrase'`）後呼叫 `_openBulkFolderSheet()`；`bulkAddToFolder`/`createFolderAndBulkAdd` 依 `_bulkIsPhrase()` 決定寫入 `f.phrases` 或 `f.words`、彈窗文案切換「片語/單字」；完成時 `_bulkFinish()` 依 `_bulkSource` 退出對應選取模式並重繪對應頁面
  - 注意 `.select-toggle-btn` 在字典/片語/我的單字各有一顆（CSS class 共用，id 各為 `#selectToggleBtn`/`#phraseSelectToggleBtn`，我的單字那顆無 id）
- **片語頁批次選取**（2026-06-12）：狀態 `phraseSelectMode` / `phraseSelected`（存片語字串 `p.p`）；片語卡用 `data-pidx` + 事件委派分流（select 模式 → 切換選取，否則 `openPhraseModal`），卡內 `.pcard-check` 平時 `display:none`、`#phraseGrid.select-mode` 才顯示；用 data-pidx + Set **避開片語含 `'`/`/`/`=`/`(` 的引號問題**
- **TDZ 注意**：`wordFolders` / `folderWordSet` / `folderPhraseSet` / `selectMode` / `selectedCards` / `mwSelectMode` / `mwSelected` / `phraseSelectMode` / `phraseSelected` 皆為 top-level `let`，宣告位置在 `update()` 定義之後沒問題（init 在整段 script 解析完才執行），但**不可在宣告前的 top-level 程式碼呼叫 `update()`**

### 雲端同步架構（Firebase）

- **Firebase 專案**：`news-english-ef2e4`（與 LINE Bot 共用）
- **SDK**：Firebase Compat v10（`<script>` 標記，非 ESM），載入 Auth + Firestore
- **Authentication**：Google Sign-In，授權網域需包含 `wisdomenglish.github.io`
- **Firestore 路徑**：`users/{uid}` 文件，含以下欄位：
  - `customWords`（陣列）：自訂單字庫 `[{word, pos, zh, custom:true}]`
  - `markedWords`（陣列）：⭐ 星號複習清單 `["word1", "word2", ...]`
  - `folders`（陣列）：單字/片語資料夾 `[{id, name, words:[], phrases:[]}]`（見「單字資料夾架構」）
  - `streak`（物件，2026-06-13 新增）：連續打卡 `{streak, best, lastDate}`，解決跨裝置打卡日期不一致
  - `stats` / `profile`：答題統計與個人資料
- **Security Rules**：只允許 `auth.uid === userId` 讀寫自己的文件
- **`saveCustomWords()`**：同時寫入 localStorage 和 Firestore `{ merge: true }`（已登入時）
- **`saveMark()`**：每次加/取消星號同時寫入 localStorage 和 Firestore `{ merge: true }`
- **`saveStreak(s)`**：`touchStreak()` 每次打卡後寫入 Firestore `users/{uid}.streak`（已登入時）
- **`syncFromCloud()`**：登入時雲端優先覆蓋本地；舊帳號若雲端缺少 `markedWords` 欄位，自動上傳本地星號。**連續打卡採「取較大次數」合併**：`streak=max(本地,雲端)`、`best=max(全部)`、`lastDate` 取較新者，合併後寫回雲端讓兩裝置一致（符合「從多數那個次數計算起」）
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
- `renderHome()`（2026-06-12「考生倒數 Hero」改版）：學測倒數固定 `new Date(2027,0,22)`，算 `daysLeft` + `prepPct`（備考進度＝今天落在「考前一年→考試日」區間的 %）；讀 streak / daily goal / markedWords 渲染深藍 hero 卡 + 3 顆 `.home-stat-tile` + 橘色每日一字卡。舊版的 `.goal-card` 大藍卡與 `.streak-section` 7 日打卡點已移除（CSS class 一併刪除）

### 每日一字（Word of the Day）架構

- `showWotdIfNeeded()`：每天首次開啟才彈出（`localStorage[WOTD_SHOWN_KEY]` 比對 `getTWDate()`）；`closeWotd()` 寫入今日日期，當天不再出現
- `getWotdWord()`：用台灣日期 seed 的 Knuth 乘法雜湊取 `WORDS[idx]` → **所有用戶當天同一個字**（前提：同一份 WORDS）
- `showWotd()`：`getWotdWord()` 取當日單字 → 設 `_wotdWord` → 抓例句（`EXAMPLE_FN_URL`，`style:'motivational'`，本地快取 `vocab_wotd_ex_{word}`）→ `renderWotdEx()`
- **共享例句**：`generateWordExample` CF 已加 Firebase `/example-cache/{md5(word\|style)}`，第一位用戶生成後其他人共用同一句（每日一字所有人看到的句子一致、省 token）
- **可重複開啟**：首頁有 `.home-wotd-card`（橘色橫幅，2026-06-12 改版前為藍紫，改色避免與 hero 撞色）`onclick="showWotd()"`，看完關閉後仍可隨時再打開觀看 / 分享（`showWotdIfNeeded()` 的每日一次只控制「自動彈出」，手動開啟不受限）
- **分享成限動/貼文圖片**（2026-06-12）：
  - `📤 分享` 按鈕（`#wotdShareBtn`）→ `shareWotdImage()`
  - `buildWotdShareImage()`：用隱藏 `#shareCanvas`（1080×1920）畫直式圖（藍紫漸層底 + 白卡：單字/詞性/釋義/例句/翻譯 + 品牌頁尾），回傳 PNG `Blob`；含 CJK+latin 混排換行 helper `_shTokens`/`_shWrap`、圓角 `_shRound`；單字過長自動縮字級
  - **iOS gesture 重點**：圖片在 `renderWotdEx()` 結尾就用 `prepareWotdShareImage()` 預先產生並存 `_wotdShareFile`，這樣 `shareWotdImage()` 能**同步**呼叫 `navigator.share({files})`，不會因 await 失去 user activation
  - 分享路徑：`navigator.canShare({files})` 為真 → `navigator.share`（手機跳系統選單選 IG/FB）；否則 fallback 下載 PNG（桌機）。使用者取消為 `AbortError`，靜默處理
  - 字型：畫圖前 `await document.fonts.ready`，font stack 用 `"Playfair Display"`（單字）/ `"DM Sans","Noto Sans TC","PingFang TC","Microsoft JhengHei"`（中文）
- **兩種分享並存（2026-06-25）**：WOTD footer 兩排 — 第一排 `⭐ 加入我的單字`；第二排 `📤 單字卡`（`#wotdShareBtn`→`shareWotdImage()`，完整卡）｜ `🎨 例句`（`#wotdExShareBtn`→`openExShare()`）｜ `✕`。footer `flex-wrap`，mark-btn `flex:1 1 100%`
- **分享例句限動圖（`openExShare`，2026-06-25）**：只放**英文例句 + 中文翻譯**的純淨直式圖（大引號 + 細分隔線），給 IG 限動用。`#exShareModal` 內含預覽 `#exSharePreview` + 風格列 `#exStyleRow`
  - **4 種字型風格** `EX_STYLES`（`優雅` Playfair／`現代` DM Sans 深藍底白字／`手寫` Caveat 暖底／`透明` 去背）；`setExStyle(i)` 即時重畫預覽。手寫字型 **Caveat** 由 `<head>` Google Fonts 載入
  - **透明風格**（`transparent:true`）：`buildExShareImage()` 走 `clearRect`（去背），文字加 `shadowColor` 陰影確保疊在任何照片上可讀，**且不放浮水印**（其餘三風格保留底部品牌）；學生疊圖用：IG 限動先放自己的照片 → 加貼圖選這張透明 PNG。預覽用 `.exs-preview-wrap.is-transparent` 深色棋盤底才看得到白字
  - **iOS gesture**：`refreshExPreview()` 每次切風格就預先產生 `_exShareFile`，`shareExImage()` 才能同步呼叫 `navigator.share({files})`
  - 共用 `#shareCanvas`、`_shWrap`/`getTWDateDisplay`；例句來源讀 `localStorage['vocab_wotd_ex_'+word]`

### 每日簽到板架構（進度 Tab）

- 進度 Tab 排行榜下方 `#checkinBoard`（`renderProgress()` 內呼叫 `loadCheckins()`）；資料存 Firestore `checkins/{today}/posts/{uid}`，`today` 為 `getTodayTW()`（台灣時區 `YYYY-MM-DD`），每天台灣時間 00:00 自然換新集合等於重置
- `loadCheckins()` 用 `onSnapshot` 即時監聽當日 `posts`（依 `ts` 排序），有變動就整段重繪 `renderCheckinBoard()`——**注意**：任何人簽到都會觸發全體重繪，若使用者正在輸入中的文字/照片尚未送出會被重置（既有限制，非本次新增功能引入）
- 登入才能簽到，`submitCheckin()` 寫入 `{uid, name, photo(大頭貼), text, imgs, ts, likes:{}}`（`imgs` 為陣列，2026-07-31 起取代舊的單張 `img` 欄位，見下）；已簽到過則走 `update`（按鈕文字變「更新」）
- 按讚：`toggleCheckinLike(authorUid)` 寫 `likes.{uid}=true`／刪除該欄位；自己的留言不顯示讚按鈕
- **📷 貼照片（2026-07-21 新增，2026-07-31 改多圖＋永久保留）**：textarea 下方「📷 新增照片 (n/10)」按鈕（額滿變「已達上限 10/10」disabled）→ `onCheckinFilePick()`（`<input multiple>`，一次選取的檔案數若超過剩餘額度會 alert 告知並自動截斷）→ `_compressCheckinImage()` 逐張壓成寬 ≤640px 的 JPEG q0.7 dataURL，push 進全域陣列 `_checkinImages`（最多10張）→ `_renderCheckinPhotoRow()` 重繪縮圖網格，每張縮圖右上角 ✕ 移除鈕帶 index（`removeCheckinImage(idx)`）。`submitCheckin()` 把 `_checkinImages` 整組存進該篇 post 的 `imgs` 欄位（Firestore 單一文件內，未使用 Firebase Storage）
  - **向下相容**：舊資料只有單張 `img` 字串，讀取一律經過 `_checkinPostImgs(p)`（`p.imgs?.length ? p.imgs : (p.img ? [p.img] : [])`），該 helper 是所有渲染/初始化邏輯的唯一入口，不要繞過
  - 編輯已簽到留言時，`renderCheckinBoard()` 會把 `_checkinImages` 初始化為 `_checkinPostImgs(myPost)`，所以重新打開簽到板會看到自己原本貼的所有照片
  - 其他同學的留言若有圖，卡片內用 `.checkin-post-imgs`（3欄網格）顯示縮圖，點擊呼叫共用的 `openImgView(src)` 全螢幕檢視（`#imgViewModal`，任何頁面要放大看圖都可重用這個 helper）
  - **🔒 選擇性永久保留（2026-07-31 新增）**：照片列下方有「🔒 永久保留這些照片」checkbox（預設不勾）。勾選後 `submitCheckin()` 額外把 `{uid,name,photo,text,imgs,ts}` 寫入獨立的 top-level collection `permanent-checkins/{uid}`（每人一份，覆蓋式，不受 `checkins/{date}` 每日換集合影響，永久保留）；若取消勾選後再次送出，且原本有永久記錄，則刪除該筆 `permanent-checkins` 文件。`loadCheckins()` 額外訂閱這個 collection（`_checkinPermPosts`），`renderCheckinBoard()` 把所有人的永久貼文顯示在同一個 `.checkin-posts` 容器最上方「📌 永久回憶相簿」區塊（`.checkin-post.pinned` 樣式標示），下方才是「💬 今日簽到」一般每日貼文——**刻意沒有另外開一個獨立頁面/分頁**，維持在原本簽到板的同一位置。自己的永久貼文右上角有「🗑 取消永久」按鈕（`removePermanentCheckin()`，需 confirm）。當天勾選永久保留並送出，同一則內容當天會同時出現在「📌 永久回憶相簿」與「💬 今日簽到」兩處（已知的小重複，因為兩者是不同 collection 各自渲染，未特別去重，非 bug）
  - Firestore 規則：`line-bot-firebase/firestore.rules` 新增 `match /permanent-checkins/{userId}`（公開讀、本人寫），部署指令 `cd line-bot-firebase ; firebase deploy --only firestore:rules`

### 分享做題成果架構（進度 Tab，2026-07-21）

- 進度頁 `.prog-hero` 內新增「📤 分享做題成果」按鈕（`openStatsShare()`），彈出 `#statsShareModal`（沿用每日一字分享例句的 `.exs-box`/`.exs-preview-wrap`/`.exs-styles` 樣式）
- 三個統計範圍 `STATS_SHARE_PERIODS`（今天/本週/本月）→ `setStatsSharePeriod(key)` 切換並呼叫 `refreshStatsPreview()` 即時重畫預覽
- 數字來源：今天＝`getDailyData().count`（`vocab_daily`）、本週／本月＝`userStats.weeklyReviews`／`userStats.monthlyReviews`（`vocab_stats`，見「Stats & Leaderboard」）；額外帶入 `getStreakData().streak` 與 `ACCURACY_KEY` 正確率一起畫進圖卡
- `buildStatsShareImage(period)`：沿用每日一字分享共用的隱藏 `#shareCanvas`（1080×1920）、`_shRound`/`_shWrap` helper，畫深藍→紫→藍漸層底（與 `.prog-hero` 同色系）+ 白卡大數字 + 連續打卡/正確率兩顆膠囊 + 品牌頁尾
- `shareStatsImage()`：`refreshStatsPreview()` 已預先產生 `_statsShareFile`，故能同步呼叫 `navigator.share({files})` 保留 iOS user-gesture；不支援檔案分享則 fallback 下載 PNG

### 字典頁連續播放（2026-06-25）

- 字典頁統計列（`#statsBar`）右側 `#playAllBtn`（`playAllWords()`）：依目前篩選清單 `filtered`（字母/級別/搜尋皆通用）一字一字連續朗讀
- **同一鍵三態**：閒置→播放、播放→暫停（`pausePlayAll`，保留 `_playAllIdx`）、暫停→從原位置續播。`updatePlayAllBtn()` 切換顯示（`🔊 連續播放(N)`／`⏸ 暫停(i/N)`／`▶ 繼續`）
- 核心 `_ttsSeq` 用 Web Speech API（離線同步），有快取 MP3（`audioCache`）優先；`onend` 串接下一字 + watchdog 防 Chrome 長序列卡住 + `_startKeepAlive` pause/resume 保活
- `_resetPlayAllOnRangeChange()` 在 `setLetter`/`setLevel`/`setFilterMode`/`setSort`/搜尋時呼叫，更換範圍即停止重置；`switchTab`/`setDictMode`/`speak`（點單字）也會停掉連續播放

### 問題回報架構（2026-06-25）

- **入口**：側邊欄 ☰ →「意見回饋 → 🛟 回報問題」（`openReportModal()`）；`#reportModal` 文字框 + 截圖（支援剪貼簿貼上 `_reportPasteHandler` 或選檔），`_compressReportImage()` 壓成 ≤1080px JPEG
- **班級／老師（2026-10-05 新增）**：文字框上方兩個選填輸入框 `#reportClass`／`#reportTeacher`，方便老師知道是哪個班級/哪位老師的學生回報。`openReportModal()` 從 `localStorage['vocab_report_info']` 預填上次填過的值，`submitReport()` 送出時連同寫回 localStorage（同一台裝置下次開啟直接帶出，不用每次重打）
- **一次性公告彈窗**：`maybeShowAnnounce()`（key `vocab_announce_report_v1`）在 `showWotdIfNeeded()` 開頭呼叫，**優先於每日一字**，看過一次不再出現
- **送出**：`submitReport` CF → 寫 RTDB `/app-reports/{id}`（message/className/teacher/user/nickname/meta/image(base64)/createdAt），並 push 給所有 `/report-recipients`（LINE 通知文字會在裝置型號那行上方多印一行「🏫 班級　👩‍🏫 老師」，兩者都沒填就不印這行）
- **收件人綁定**：對任一 LINE Bot 傳「**綁定回報**」→ `handleReportBind()` 存 `/report-recipients/{userId} = {boundAt, tokenEnvVar, botName}`；「**解除回報**」移除。**`tokenEnvVar` 記住在哪支 bot 綁的**（LINE userId 分頻道，push 必須用同一支 token）；`submitReport` 依此挑 token 推播
- **目前收件 bot**：**English Calendar（Bot 2，destination `U45ed153…`，LINE 顯示名稱為「Wisdom Assistant」）** — 詳見 LINE Bot 章節的命名說明
- **圖片**：`reportImage?id={id}` 把該筆 base64 以 `image/jpeg` 吐回 → LINE 圖片訊息用此 URL（省去啟用 Firebase Storage）
- **加 LINE 官方好友入口（2026-10-05 新增）**：`#reportModal` 送出按鈕下方多一行純連結（`https://line.me/R/ti/p/@sds9548e`），供想直接聯繫的學生/家長使用；側邊欄「意見回饋」區塊也新增同連結的「💬 加 LINE 官方好友」項目（跟 🛟 回報問題並列），兩處都是單純外部連結，非走 `submitReport` 流程

### 更新公告頁

- 公告從底部導覽移除，改為從側邊欄 ☰ 進入，對應 `#newsSection`（`switchTab('news')`）
- 兩種卡片格式並存：
  - **置頂使用技巧**（`.news-pinned-label` 區塊）：`<div class="news-card">` 直接展開顯示，不可折疊，目前只有「加入主畫面」「雲端同步」兩則長期置頂內容
  - **一般更新紀錄**（`.news-index-section` 區塊，**新公告都加在這裡**）：`<div class="news-index-entry">` 包 `.news-index-item`（`onclick="toggleNewsDetail(this.parentElement)"`，含日期＋分類徽章＋`.ni-title`＋展開箭頭）+ `.news-detail`（`<ul class="news-list">`，預設收合，點頭部展開）
- 分類徽章（`.news-type`）：`feature`（新功能）/`fix`（修正）/`improve`（優化），同一則可疊多個
- **新增公告**：在 `.news-index-section-title`（📋 更新紀錄）正下方複製一個 `.news-index-entry` 區塊貼最上方（最新在最上），修改日期／徽章／`.ni-title`／`.news-detail` 內文即可，不需改 JS

### 本地測試

用 VS Code Live Server 或任何靜態伺服器開啟根目錄即可。

---

## 2. hero-english React RPG PWA

### 部署資訊

- **Firebase Hosting URL**：`https://hero-english-ef2e4.web.app`
- **Firebase 專案**：`news-english-ef2e4`（與 LINE Bot 共用）
- **技術棧**：React 18 + Vite + Tailwind CSS + Lucide React + Firebase SDK v10

### 部署指令

```powershell
cd hero-english
npm run build
$env:NODE_OPTIONS="--use-system-ca"
firebase deploy --only hosting
```

### 目錄結構

```
hero-english/src/
├── App.jsx                          # 主應用（SplashScreen → AuthGate → 新手流程 → 主畫面）
├── components/
│   ├── SplashScreen.jsx             # RPG 進場畫面，含四職業 Q 版角色展示（sessionStorage 控制每次開啟顯示一次）
│   ├── Onboarding.jsx               # 新手引導
│   ├── ClassSelect.jsx              # 職業選擇（劍士/法師/馴獸師/鬥士）
│   ├── GlobalTopBar.jsx             # 頂部 HUD（🔥連續 + Lv 徽章 + XP 微進度條）
│   ├── BottomNav.jsx                # 底部導覽（4 tabs，active icon 浮起成發光圓形徽章，每 tab 專屬色）
│   ├── SideDrawer.jsx               # 右側抽屜（雲端同步 + 個人資料）
│   ├── CharacterTab.jsx             # 角色頁（圖鑑 + 地圖 + StudyCta + 能力值 + 成就）
│   ├── QuestBoardTab.jsx            # 任務板
│   ├── LearningTab.jsx              # 學習 tab（答題/測驗）
│   ├── VocabBookTab.jsx             # 詞彙本
│   ├── TaiwanMapWorld.jsx           # 角色走動場景（台灣地圖世界）
│   ├── ChibiCharacter.jsx           # Q 版 SVG 角色（2026-06-12 取代像素圖，會眨眼/彈跳/走路 + Tier 特效）
│   ├── CapybaraCompanion.jsx        # 水豚夥伴「卡比」SVG（2026-06-14 卡比巴拉風吉祥物，頭頂柚子、會眨眼/走路/表情）
│   ├── PixelCharacter.jsx           # （舊）像素角色，已無人引用，保留備用
│   ├── LevelUpModal.jsx             # 升級彈窗
│   ├── CharacterUnboxingModal.jsx   # Tier 里程碑進化演出（Lv.10/20/30）
│   ├── AchievementToast.jsx         # 成就解鎖浮動通知
│   ├── HungerBanner.jsx             # 體力過低警告橫幅
│   ├── ProfileSetupModal.jsx        # 暱稱設定
│   └── WelcomeGuideModal.jsx        # 新手歡迎導覽
├── hooks/
│   ├── useHeroState.js              # 核心狀態管理（hero/XP/成就/統計）
│   └── useAuth.js                   # Firebase Auth 狀態
├── data/
│   └── achievements.js              # 25 個成就定義（ACHIEVEMENTS / ACHIEVEMENT_TYPES / RARITY_META）
├── utils/
│   ├── characterTier.js             # Tier 計算（getSkinTier / isTierMilestone / TIER_META）
│   ├── achievementChecker.js        # 成就觸發邏輯
│   ├── achievementProgress.js       # 成就進度計算 + 限時成就狀態
│   ├── soundFX.js                   # 音效工具
│   └── storage.js                   # localStorage 封裝
└── lib/
    ├── cloudSync.js                 # Firestore 讀寫
    └── leaderboard.js               # 排行榜更新
```

### 功能架構

**啟動流程**：SplashScreen → AuthGate（授權密碼，key: `hero_auth_v1`）→ Onboarding → ClassSelect → ProfileSetupModal → 主畫面

**底部 4 tabs**：角色（CharacterTab）/ 任務（QuestBoardTab）/ 學習（LearningTab）/ 詞彙本（VocabBookTab）

**CharacterTab 元件順序**（2026-06-12 改版後實際渲染順序）：
1. `ActionPill`：最優先行動提示（體力危急🔴 / 限時成就⏰ / 快升級⚡ / 打卡提醒🔥）
2. `CollectionCard`：英雄圖鑑（Tier 進度 + 成就解鎖數 + 限時成就警示）
3. `TaiwanMapWorld`：角色走動場景（Q 版角色 `walking` 踏步動畫）
4. `MentorTip`：智慧法師 🧙 NPC 對話泡泡（依體力/連續天數/XP 給提示）
5. `StudyCta`：大型 3D 糖果 CTA 按鈕（橘色「今日練習」→ 低體力變紅、近升級變職業色）
6. `HeroSheet`：英雄資訊卡 — 左側 Q 版立繪（發光底座＋名牌）＋ Lv/CEFR + HP/XP 條 + 底部資源列（⭐已掌握 / 🔥天連續 / 📘英語等級）
7. `AbilityBar`：四項能力值（閱讀/聽力/口說/寫作）
8. `EvolutionRoadmap`：四階段進化路線圖
9. `AchievementSection`：可折疊分類的成就牆
10. `LeaderboardSection`：排行榜

（`StaminaBar` 元件仍在檔案內但目前未渲染，HP 已整合進 `HeroSheet`）

### 角色 Tier 系統

| Tier | 等級 | 稱號 | 視覺特效（ChibiCharacter） |
|------|------|------|---------|
| 1 | Lv.1–9 | 🌱 學徒 | `saturate(0.55) brightness(0.85)` 略灰 |
| 2 | Lv.10–19 | ⚔️ 初學者 | 正常 |
| 3 | Lv.20–29 | ✨ 精英 | 金色 drop-shadow + 閃爍星星 |
| 4 | Lv.30+ | 👑 大師 | 彩虹 glow 動畫 + 金皇冠（法師除外，有帽子） |

- Tier 里程碑（Lv.10/20/30）→ `isTierMilestone(level)` 為 `true` → 渲染 `CharacterUnboxingModal`（進化演出），否則渲染 `LevelUpModal`
- ~~自訂 Tier PNG 圖~~：舊 `{classId}-t{1-4}.png` 機制只屬於已停用的 `PixelCharacter.jsx`；現行角色為純 SVG（`ChibiCharacter.jsx`），改造型直接改 SVG 程式碼

### 成就系統

- **25 個成就**，分 5 類（`ACHIEVEMENT_TYPES`）：學習里程碑 / 連續打卡 / 詞彙精通 / 探索冒險 / 限時挑戰
- **稀有度**（`RARITY_META`）：common / rare / epic / legendary（各有顏色 + glow）
- **限時成就**：`timeWindow` 欄位定義開放週期（寒假/暑假/月考季等），`getTimeWindowStatus()` 回傳 `{ isOpen, urgency, label }`
- `triggerAchievementCheck(hero, stats, masteredCount, profile)` 在每次答題後觸發
- `newAchievementIds[]` 佇列 → `AchievementToast` 逐一彈出通知

### SplashScreen 架構

- RPG 風格：深紫 → 深黑綠漸層天空 + 像素草地 + 閃爍星星 + 四職業 Q 版角色浮動展示（ChibiCharacter，scale 3.2）；標語「召喚你的英雄，英文大冒險！」
- `sessionStorage['hej_splash_v1']`：每次關閉瀏覽器後重新顯示；無痕視窗每次都顯示
- 自動 2.9s 後淡出（opacity transition 0.38s），點擊立即跳過
- CSS 動畫：`ss-twinkle` / `ss-float` / `ss-fadeup` / `ss-pop` / `ss-blink` / `ss-sparkle` / `ss-sway` / `ss-scan`

### GlobalTopBar HUD 樣式

- 左側：🔥連續天數（琥珀漸層光澤膠囊）+ Lv.X（紫色漸層光澤膠囊，帶 glow）
- 中：App icon（Wisdom logo，紫色 glow）
- 右：☰ 選單按鈕
- 底部：2px XP 微進度條（`#7C3AED → #A78BFA` 漸層，實時反映當前 XP%）
- Props：`streak` / `level` / `xpProgress` / `onOpenDrawer`

### 雲端同步（Firestore）

- **路徑**：`users/{uid}` — 欄位：`{ hero, stats, mastery, customWords, profile }`
- **排行榜**：`leaderboard/{uid}` — 3s debounce 更新（需設定 `profile.nickname`）
- 登入後自動載入雲端資料（雲端優先覆蓋本地）
- 2s debounce 自動儲存（任何 state 變化觸發）

### 授權密碼（hero-english）

- `App.jsx` 的 `AUTH_HASH` 常數（SHA-256 hash），localStorage key: `hero_auth_v1`
- 密碼詳見 memory（`project_pwa_auth.md`）

### UI 設計規範（hero-english）

- **色彩主題（2026-06-14 卡比巴拉暖色療癒改版）**：全站從深紫科技感翻成米色療癒亮系。CSS 變數定義於 [index.css](hero-english/src/index.css) `:root`：`--cozy-bg-top:#FFF6E6`／`--cozy-bg-bot:#FBE9CC`（奶油漸層底，掛在 `#root`）、`--cozy-panel:#FFFCF5`（暖白卡）、`--cozy-panel-2:#FBF1DD`（次級暖面）、`--cozy-ink:#4A3A2A`／`--cozy-ink-soft:#8A7860`／`--cozy-ink-faint:#B0A088`（暖墨三階文字）、`--cozy-border:#EBDABB`、`--cozy-shadow*`（暖棕柔影）、點綴色 `--cozy-grass:#7FB069`／`--cozy-sun:#F6A94C`／`--cozy-sky:#6FB5D9`／`--cozy-berry:#E68BA6`／`--cozy-capy:#C68A4E`。四職業 `primaryColor`（紅/紫/綠/琥珀）保留為角色識別，在暖底上當點綴
  - **全域文字覆蓋**：index.css 用 `body .text-gray-400/500/600 { color: var(--cozy-ink-*) }` 一次把多數 muted 灰字翻暖（比 Tailwind 單一 class 高一階特異性）；亮卡上原本 `text-white` 的文字改用 `.text-ink`／`.text-ink-soft` 工具類；彩色漸層按鈕/徽章上的白字維持 `#fff`
  - **舊深色色票對照**（沿用於改其他元件時）：`#1A1B2E`→`var(--cozy-panel)`、`#12131F`→panel、`rgba(255,255,255,0.0X)` 表面→`rgba(140,100,55,0.0X)` 或 `--cozy-panel-2`、白色 rgba 文字→`--cozy-ink*`
- **共用樣式（index.css）**：`.game-panel`（暖白卡＋上緣亮邊＋暖棕柔影）、`.game-btn`（3D 糖果按鈕，`--btn-edge`/`--btn-glow`）、`.game-section-title`（emoji 標題＋暖色分隔線）、`.text-ink`/`.text-ink-soft`（暖墨文字）、`.cozy-surface`
- **答題療癒回饋（LearningTab，2026-06-14）**：答對時 `RewardBurst` 元件浮出 — 金幣 🪙 上浮（`coinPop`）＋「+XP」分數彈跳（`scorePop`）＋橘色光環擴散（`correctBurst`），keyframes 定義於 index.css
- **水豚夥伴「卡比」**：`CapybaraCompanion.jsx`，卡比巴拉風吉祥物（圓 loaf 身、頭頂柚子、會眨眼/走路/`content·happy·sleepy` 表情）。用於 ① CharacterTab 的 `MentorTip`（取代舊「🧙 智慧法師」，依體力/連續天數給療癒口吻提示）② TaiwanMapWorld 地圖上跟在英雄旁邊一起走（`walking`）
- **（已淘汰）舊深色主題**：`#0F0F14` 背景＋紫色 `#7C3AED` 主色
- **字體**：標題 Playfair Display，內文 DM Sans + Tailwind CSS utility classes
- **StudyCta 按鈕**：happiness < 30 → 紅色；xpProgress.percent ≥ 75 → 職業主色；其他 → 橘黃漸層（皆為 `.game-btn` 3D 糖果款）
- **最小字體**：game UI 標籤最小 `0.65rem`（0.5rem 以下不可用）
- **BottomNav active 指示（2026-06-12 改版）**：選中 tab 的 icon 浮起成發光圓形漸層徽章（每 tab 專屬色：角色紫/任務琥珀/學習藍/詞彙綠），彈性動畫 `cubic-bezier(0.34,1.56,0.64,1)`
- **角色系統（2026-06-12 改版）**：`ChibiCharacter.jsx` 取代 16×16 像素 PNG。純 SVG 手繪 Q 版（大頭大眼、`chibiBlink` 眨眼、`chibiBob` 待機彈跳），四職業專屬造型（劍士：紅頭帶＋劍／法師：尖帽＋發光法杖／馴獸師：恐龍連帽＋尾巴／格鬥家：刺刺頭＋纏布拳）。Props 與舊 PixelCharacter 相同（`classId/level/scale/animate/grayscale`），另有 `walking`（true 時雙腳交替踏步 `chibiStepL/R` + 身體搖擺 `chibiWaddle` + 步伐彈跳 `chibiWalkBob`，取代待機 bob；TaiwanMapWorld 地圖角色使用）。寬 = `scale*16`、高 = 寬×1.16（含腳下陰影）。Tier 1 降飽和、Tier 3 金光＋星星、Tier 4 彩虹光暈＋皇冠（法師除外，有帽子）。使用處：TaiwanMapWorld、LevelUpModal、CharacterUnboxingModal、CharacterTab HeroSheet 立繪、ClassSelect、SplashScreen
- **遊戲風共用樣式（index.css）**：`.game-panel`（漸層面板＋上緣亮邊＋立體陰影）、`.game-btn`（3D 糖果按鈕：CSS 變數 `--btn-edge` 底邊色／`--btn-glow` 光暈色，`:active` 下沉 4px）、`.game-section-title`（emoji 標題＋漸層分隔線）

---

## 3. LINE Bot 英文教學助手

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
| **名稱（程式 config）** | Frank Line英語教室 v2 | Ivy's English Calendar | Wisdom AI Teacher |
| **LINE 顯示名稱** | Frank Line英語教室 | **Wisdom Assistant** | Wisdom AI Teacher |
| **Channel ID** | `2009816850` | `2009819826` | `2009871968` |
| **LINE User ID（destination）** | `Ubf2dcf1c5ebd1103328a7af4e9d7aee7` | `U45ed153ac9a4c65ec21dc3eb446649c1` | `U47f8478ef76c01abaf8a136b1ab80bbf` |
| **角色** | 英文教學助手 | Google 行事曆提醒 | 英文教學助手＋圖片改寫 |
| **Webhook** | 共用 `lineWebhook` URL | 共用 `lineWebhook` URL | 共用 `lineWebhook` URL |

Bot 透過 `event.destination`（LINE User ID）自動識別並套用對應憑證。

- **⚠️ 命名陷阱**：Bot 2 的程式 config `name` 仍是 `Ivy's English Calendar`，但它在 LINE 的**顯示名稱是「Wisdom Assistant」**，也是**問題回報的收件 bot**（不是 Bot 3）。Bot 3 才是「Wisdom AI Teacher」。談「Wisdom Assistant」時指的是 Bot 2。
- **問題回報指令（任何 bot 皆可）**：傳「綁定回報」→ `handleReportBind` 把該 userId + 綁定當下的 `tokenEnvVar` 存入 `/report-recipients`；傳「解除回報」移除。webhook 文字分派在最前面攔截這兩個指令（早於行事曆 / rewrite 分支）。詳見 PWA「問題回報架構」

### 環境變數

**⚠️ 實際部署讀取來源是 `functions/.env`（`firebase deploy` log 會印「Loaded environment variables from .env.」），不是 `firebase.json` 的 `environmentVariables` 欄位！** 兩邊目前內容重複維護，新增/修改環境變數時**兩個檔案都要改**，只改 firebase.json 部署後函式讀不到值（曾在 2026-07-20 新增 `NOTION_TOKEN` 時踩到，只改 firebase.json 導致 deploy 完仍讀不到，補上 `.env` 重 deploy 才生效）。`functions/.env` 已 git ignore，不會進版控。

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
| `NOTION_TOKEN` | Bot 2 素材庫功能，Notion internal integration token |

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
- **⚠️ 只用於一對一聊天（2026-08-30 起不再拉入任何群組）**：原本的群組 @Bot 提及機制、以及對應的 `/pending-frank-image` 旗標（群組限定的解題手勢）已整個移除。程式碼不再區分群組/一對一，解題判斷一律只看 `/pending-solve`。上層仍保留通用的「群組訊息需 @Bot 提及才處理」skip 邏輯（其他 bot 可能還會用到），但 Frank 之後理論上不會再產生群組事件
- **Firebase Realtime DB 快取**：MD5 key、7天 TTL
- **回覆格式**：分隔線（━━━━）+ emoji，無粗體
- **自由對話／解題雙模式（2026-08-29）**：Frank 預設為**自由對話模式**，要解題需先按 Rich Menu「🧩 開始解題」才能進入**解題模式**：
  - **自由對話模式＝完全不自動回覆**：只要不在解題模式，文字和圖片訊息都不會觸發任何自動回覆（不呼叫 `handleTextMessage`，也不會回「請按解題選單」之類的提示），完全交由 Frank 老師本人在 LINE 親自回覆
  - 狀態存 `/pending-solve/{userId}`（`{expiresAt}`），`SOLVE_MODE_TTL_MINUTES`（目前 10 分鐘）常數控制時限；`isFrankSolveModeActive()` 檢查並在過期時自動清除、`refreshFrankSolveMode()` 在**每次成功解題後**（不論文字或照片）延長時限，讓學生連續解多題不會中途被踢回自由對話
  - 解題模式中：文字描述題目 → `handleFrankTextSolve`（沿用 `callOpenAIText`，格式與圖片解題一致但無「📸 題目辨識」段落）；傳照片 → `handleFrankImageMessage`
  - 按 Rich Menu「💬 自由對話」（postback `solve_mode=off`）或時限到 → 移除 `/pending-solve/{userId}`，之後恢復完全靜默
  - Rich Menu postback：`solve_mode=on` / `solve_mode=off`，由 `handleSolveModeToggle()` 處理，回覆說明目前模式與切換方式
- **圖片解題**（`imageMode: "solve"`）：解題模式中傳圖 → `handleFrankImageMessage` 解英文題（選擇/填空/閱讀等）
- **加好友／被拉群組歡迎詞**：`join`（被拉進群組）與 `follow`（使用者第一次加為好友，2026-08-30 補上）事件共用 `botConfig.joinMessage`，內容說明自由對話／解題模式差異；Frank 的版本已移除群組相關說明
- **作文批改／改寫（2026-06-23，同步自 Wisdom）**：Rich Menu 下排（3 格 postback：`essay_mode=批改/初階/進階`）。點選 → `handleEssayModeSelect` 寫入 `/pending-rewrite/{userId}`（5 分鐘）+ 提示傳照片 → 傳圖時 Frank image 分支偵測到 pending 即走 `handleImageMessage`（用 Frank 的 `anthropic` client，`getEssayClient()` 選 client），優先權高於解題模式判斷。批改/初階/進階共用 Wisdom 的 system prompt（`level` 為 `批改` 時走 feedback else 分支）。建選單：`node setup-rich-menu-frank.js`（讀 `rich-menu-frank-design.html`，用 `LINE_CHANNEL_ACCESS_TOKEN`；2026-08-29 起選單改兩排：上排 開始解題／自由對話，下排 作文批改／初階改寫／進階改寫）
- **作文對話記憶（2026-08-31，Frank + Wisdom 共用）**：解決「AI 批改完主動問學生要改哪一段，但下一則訊息其實是無狀態重新分類，接不上前文」的問題（見 [[project_linebot_essay_context_memory]]）。`getEssayContext`/`saveEssayContext`/`clearEssayContext` 操作 `/essay-context/{userId}`（10 分鐘 TTL，`ESSAY_CONTEXT_TTL_MINUTES`，每次延續對話會刷新）。**Frank 沒有文字型 essay_review 入口**——`handleTextMessage`（含 essay_review 意圖分類）現在的 webhook routing 順序下對 Frank 永遠不會被呼叫到（Frank 的訊息一定先命中 `imageMode==="solve"` 的其中一個分支），是實際上的死代碼，不要被它還在檔案裡誤導。所以 Frank 的作文記憶只從 Rich Menu 照片流程（`handleImageMessage`）建立；Wisdom 則是文字（`handleWisdomTextMessage`，essay_review 意圖）和照片都會建立/更新。有 active context 時：
  - 文字訊息：先用 `isEssayContinuationMessage()`（用 Frank 傳 `callOpenAIText`／Wisdom 傳 `callClaudeWisdom` 做輕量分類，判斷是否為延續前文的訊息，例如「全都要改」）判斷，是的話走 `handleEssayContinuationReply()` 生成接續回覆（不查一般快取，因為是個人化延續內容），**這個分支的優先權在 webhook routing 中排在 Frank 的自由對話靜默規則之前**，所以即使 Frank 目前是「自由對話=完全不回覆」，只要是延續作文對話一樣會回覆（視為完成一個學生已經明確開始的互動，不是隨機自動回覆）
  - 照片訊息：Wisdom／Frank 的 `handleImageMessage` 一律先查 active essay context，有的話把先前作文內容/上一則回覆併進 system prompt 再生成，讓學生可以「先打字討論，之後補傳作文題目照片」取得更完整的建議；Frank 的圖片分支判斷順序是 `pending-rewrite` > `essay-context` > 解題模式
  - 固定指令（`綁定回報`/`解除回報`/`初階改寫`/`進階改寫`）會跳過延續判斷，避免跟 Wisdom 既有的精準文字指令衝突
  - `handleRewriteRequest`／`handleEssayModeSelect`（明確重新選擇作文模式）都會先 `clearEssayContext()`，避免舊作文記憶混入新一輪
  - **順手修掉的舊 bug**：`handleImageMessage` 的 openai 分支原本 `userText` 那行是編碼損毀的亂碼（`level === "??"` 這種），永遠對不到 `"初階"/"進階"`，導致 Frank 走 Rich Menu 初階/進階改寫時，實際送給 OpenAI 的指令文字一直是亂碼版本的 fallback，已修正為正常文字比對

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
- **Notion 素材庫串接（2026-07-20）**：老師傳純網址（含 `http(s)://` 的訊息）→ `handleContentIntake` 自動在 Notion「新聞素材庫 Content Intake」建立頁面（狀態 Not started）。抓網頁 `og:title`/`<title>` 當標題（抓不到 fallback 網址，用 `decodeHtmlEntities` 解 HTML entity 避免 `&#x27;` 這種亂碼進 Notion）、依網域比對 `NOTION_SOURCE_SITE_MAP` 判斷「來源網站」（BBC/CNN/VOA/The Guardian/NPR/Live Science/Taipei Times/New York Times/Focus Taiwan，比對不到固定填「其他」）。⚠️ 2026-07-30：Notion 端把「來源網站」欄位型別從 select 改成 rich_text（純文字），程式碼仍用舊的 `select` 格式寫入導致整個貼連結功能 400 失敗（「來源網站 is expected to be rich_text」）——已改成 `rich_text` 格式寫入並修好；改完後**不用再管選項是否存在**，字串隨便寫都不會 400（select 時代「名稱要跟 Notion 一字不差」的限制已經不適用，是舊版遺留的坑）。若日後又遇到 Notion 400，第一步先查該欄位目前的真實型別（`GET /v1/data_sources/{id}` 的 `properties.{欄位}.type`），不要假設它還是原本記錄的型別，Notion 端的 schema 隨時可能被人改掉。`data_source_id` 固定 `2e55907b-14d0-4400-9f79-93b4b99532d3`（硬編碼於 `NOTION_CONTENT_DATA_SOURCE_ID`）。**Token**：`functions/.env` 的 `NOTION_TOKEN` 才是實際部署讀取的來源（見上方環境變數章節），`firebase.json` 那份只是備份用途。此判斷**只套用在 Bot 2**（`botConfig.role === "calendar"`，LINE 顯示名稱「Wisdom Assistant」）；判斷順序在「綁定回報/解除回報」之後、一般行事曆意圖之前。**Rich Menu** 上排新增第三格「📰 素材庫」（`setup-rich-menu.js`，`message` action 傳「素材庫」→ `content_intake_help` 意圖回覆使用說明，實際建立仍靠老師直接貼網址觸發，選單按鈕本身無法代傳網址）；上排從 2 格 1250px 改為與下排一致的 3 欄 833/834/833px 版面，改完需重跑 `node setup-rich-menu.js` 才會套用到 LINE
- **文章標準化＋出題（2026-07-20，⚠️ 2026-07-20 當天又從「排程自動輪詢」整個改成「LINE 互動精靈」，取代前一版設計）**：老師在 LINE 傳「**標準化**」或「**出題**」觸發，Bot 用回覆數字的方式一步步問（Quick Reply 也會附上 1/2/3 數字按鈕，可點可打字），全程同步執行完才回覆結果（不是背景排程，`lineWebhook` 因此把 `timeoutSeconds` 拉到 120）：
  - **「標準化」流程**：列出 Content Intake 狀態=`Not started` 的文章（最多10篇）→ 選一篇 → 列出 Difficulty Profile 狀態=使用中的選項（A2/B1/B2/C1/C2）→ 選難度 → 列出該 CEFR 適用的 Exam Style（`適用CEFR範圍` multi_select 篩選，例如 A2→會考CAP、B2/C1→GSAT，B1 目前沒有專屬考試風格會顯示空清單只剩「不套用」）→ 選考試風格（或不套用）→ `runStandardization` 執行：抓全文→ Claude 依 `CEFR_WORD_COUNT_TABLE`（A2 200±20／B1 230±20／B2 280±40／C1 330±30／C2 360±40，固定用這張表，**不吃 Exam Style 的字數規格**）改寫＋自評 unknown words%（**不查 5000單字庫**，見 [[feedback_5000wordlist_not_for_unknown_detection]]）→ 算字數/平均句長→ 若初稿字數超出目標範圍，`adjustArticleWordCount` 用第二次獨立 Claude 呼叫修正（不足就補文章已提到的細節、過多就刪減，不新增/刪掉核心事實），實測比純靠 prompt 要求「請控制在X字」可靠很多（Claude 生成時常憑感覺停筆，沒有真的算字數，容易在範圍邊緣或以下）→ 三項達標才勾 `Ready for Questions`→ 寫入 Standardized Articles（含選定的 Exam Style relation）→ 自動綁 Difficulty Profile relation（`CEFR_DIFFICULTY_PROFILE_PAGE_ID`）→ 回填 Content Intake 的「CEFR預估」「主題分類」（只在原本是空的時候寫，不覆蓋人工設定）→ Content Intake 狀態改 `Done`→ 用 `replyLineMessage`（同一個 reply token，不是 push）回報結果給老師（⚠️ 2026-07-30 原本完成通知是用 `pushLineMessage`，結果 Bot 2 月推播額度用盡時整段 push 直接 429、老師完全收不到通知、看起來像卡在標準化不會動——實際上背景已經跑完寫進 Notion 了。改成 reply 後不再計入月額度，見 [[project_linebot_calendar_reminder_bugs]]）
  - **「出題」流程**：列出 Standardized Articles `Ready for Questions=✓` 的文章 → 選一篇 → 列出 Question Blueprint 狀態=使用中的題型（目前 5 種：Reading Comprehension／混合題 Mixed Reading／克漏字 Cloze Test／文意選填 Vocabulary Matching／篇章結構 Discourse Structure）→ 選題型 → `runQuestionGeneration` 執行：組 Final Prompt（文章內容＋Difficulty Profile 描述欄位＋有綁 Exam Style 才加考試風格規則＋Blueprint 的 Prompt Body/題目結構/答案排序規則＋三個 Prompt Components：干擾項設計原則/輸出格式要求/QA檢查規則，另外「出題理由與子技能標記（通用）」component 固定用 `OUTPUT_REASONING_COMPONENT_ID` 引用，不靠 Blueprint 的 relation）→ 呼叫 Claude 出題（**完全依照選定 Blueprint 自己的 Prompt Body/題目結構**，只有 Blueprint=Reading Comprehension 且 CEFR=A2 才額外插入「只出 Main Idea/Detail/Vocabulary in Context 三題型」的規則；⚠️ 2026-07-20 曾經在 prompt 裡寫死「請針對以下題型各出一題：Main Idea/Detail/Inference/...」，這是舊版只有 Reading Comprehension 一種 Blueprint 時留下的，新增 4 種 Blueprint 後沒拔掉，導致老師選克漏字/文意選填等其他題型時 Claude 還是被這行蓋過去、出成閱讀理解題組——已修掉，往後**新增/修改題型相關邏輯時，不要對「所有 Blueprint」套用只屬於某一個 Blueprint 的格式假設**）→ **QA 用第二次獨立 Claude 呼叫**逐題判 pass/fail（QA prompt 會把選定 Blueprint 的 Prompt Body/題目結構原文也放進去，明確要求核對格式是否符合規格；⚠️ 2026-07-20 曾經只給 QA 標準通用文字、沒給 Blueprint 規格本身，導致 QA 完全抓不到「題型跑掉」這種格式錯誤——例如克漏字題混進幾題完整句子的傳統閱讀理解問句，QA 卻判定通過，已修掉）。「題目」寫入 Notion 的長度上限從 200 字元拉高到 1900（Notion title 屬性上限 2000）——原本 200 字元會把稍長的克漏字句子從中間切斷，也一併修掉 → 全部題目都寫入 Question Bank，`Verified` 依 QA 結果設 true/false（未通過不是不寫，是寫但標記未驗證，避免 Notion 端一直卡著沒進度）→ `replyLineMessage` 回報結果給老師（同「標準化」流程，2026-07-30 起改用 reply 不用 push，理由同上）
  - **架構重點**：Difficulty Profile／Exam Style 綁在 **文章層**（Standardized Articles）；Question Blueprint 綁在 **題目層**（Question Bank 每一題），不是三個都掛文章上（這是實測 schema 才確認的，手冊文字容易誤解）。舊的「Blueprint 出題規格庫」已停用。
  - **⚠️ 5 種 Blueprint 不是同一種資料形狀（2026-07-30 發現＋修復）**：Reading Comprehension／克漏字是「逐題四選一」，適合 選項A-D/正確答案(select A-D) 這組欄位（`MCQ_FORMAT_BLUEPRINTS` 常量）。但**文意選填**是十格共用一組 10 選項（A-J）、**篇章結構**是四格共用一組 5 候選句（A-E）、**混合題**是摘要填空+多選+簡答混合——這三種根本不是逐題四選一，硬套原本的 JSON schema 會讓 Claude 出的內容跟驗證對不上，`generateQuestionsWithClaude` 的防呆驗證會把全部題目判定格式不完整、整批擋掉（`Cannot read properties of undefined (reading 'A')` 崩潰或「Claude 回傳的題目格式都不完整」錯誤，都是這個原因）。修法：這三種改走 `buildExerciseGenerationPrompt`／`generateExerciseWithClaude`／`runExerciseQAWithClaude`／`createExerciseQuestionBankPage`，**一整組練習存 Question Bank 一列**（不是一列一小題），Notion 新增「完整內容」rich_text 欄位存整段文字（挖空文章＋選項池＋答案對照＋出題理由），選項A-D/正確答案留空。`buildBlueprintContextSection` 把兩條路徑共用的 Difficulty Profile/Exam Style/Blueprint/Components 組裝邏輯抽出來共用，避免兩份 prompt 各自維護一份容易漂移。⚠️ 實測這三種題型規格文字非常長、規則非常細（例如篇章結構的「五選四」規則有 7 大段），現在用的 haiku 模型常常出不出合格內容（曾經生成到一半自己發現不對、在同一份內容裡塞第二次嘗試），QA 大部分會判不通過——這是預期內的品質限制，不是程式錯誤，機制本身（不崩潰、正確寫入 Notion、QA 正確攔截）是正常運作的。
  - **Claude JSON 回覆解析要容錯（2026-07-30 修復）**：原本用 `raw.startsWith("\`\`\`") ? 剝 code fence : JSON.parse(raw)`，Claude 只要在 JSON 前後多加一點說明文字（例如 code fence 沒收乾淨、结尾多一句話）就會直接 `JSON.parse` 炸掉（"Unexpected non-whitespace character after JSON..."）。已改成 `extractJsonFromClaudeReply`：找第一個 `[`／`{` 到「深度歸零」的對應收尾括號（逐字掃描、跳過字串內容含跳脫字元，避免題目文字裡剛好有方括號誤判深度），只 parse 中間那段，忽略前後多餘文字。STEP2 標準化／字數修正／出題／QA 四個呼叫點都已改用這個 helper（PWA 那邊其他 Cloud Functions 的 JSON.parse 沒有動，不在這次修復範圍）。
  - **⚠️ 整組練習生成 max_tokens 不夠導致崩潰（2026-07-31 修復）**：`generateExerciseWithClaude`（文意選填/篇章結構/混合題共用）原本 `max_tokens: 3072`，含詳細出題理由的完整內容常超過這個上限，Claude 的 JSON 輸出被硬切斷，`extractJsonFromClaudeReply` 抓到不完整字串直接 `JSON.parse` 炸掉（"Unterminated string in JSON"），整個出題流程崩潰、老師端看起來像「出題失敗」。已調高（見下方模型切換後的最終數值）。與 [[project_linebot_notion_reading_pipeline]] 提到的 `generateVocabQuiz` 1024→4096 是同一類坑：Claude 內容變長時，先檢查 max_tokens 夠不夠，不要只debug JSON 解析邏輯本身。
  - **文意選填/篇章結構/混合題：Notion 規格文字微調 + 換模型雙管齊下（2026-07-30～31，已解決）**：這三種 Blueprint 的規格文字本身先做了多輪精簡＋補強規則（文意選填因此穩定通過 QA；篇章結構/混合題規則太密集，`claude-haiku-4-5` 仍常出錯——不是格式跑掉，是內容瑕疵：捏造原文沒有的細節、摘要填空答案不唯一、子文本則數不符規格）。改用更強模型後徹底解決，見下方「LINE Bot 模型控制」。
  - **LINE Bot 模型控制**：`index.js` 目前 30 處 Claude 呼叫全部各自寫死 `model: "claude-haiku-4-5-20251001"` 字串，沒有集中設定、沒有環境變數。文意選填/篇章結構/混合題這 3 種規則密集的題型改用常數 `EXERCISE_GEN_MODEL = "claude-sonnet-5"`（[index.js:1522](line-bot-firebase/functions/index.js#L1522) 附近宣告，`generateExerciseWithClaude`／`runExerciseQAWithClaude` 兩處引用），其餘 28 處呼叫仍用 Haiku 不受影響（只有這兩種容易出錯的題型吃到較貴較慢的模型，控制成本）。要調模型只需改這一個常數；可選值見系統已知的 model ID：`claude-haiku-4-5-20251001`／`claude-sonnet-5`／`claude-opus-5`。
    - **⚠️ 換用有 extended thinking 的模型（sonnet-5/opus-5）務必注意兩件事**，否則會出現 `Cannot read properties of undefined (reading 'text')` 或回覆內容是 `undefined`：
      1. **回覆不能再假設 `message.content[0]` 是文字**——這類模型常把 thinking block 放在 content[0]，text 被推到後面的 index。要用新增的共用 helper `extractTextFromClaudeMessage(message)`（[index.js:1250](line-bot-firebase/functions/index.js#L1250) 附近，用 `.find(b => b.type === "text")` 找，不受 index 影響），不要再手動 `.content[0].text`。
      2. **`thinking: {type:"enabled", budget_tokens:N}` 這組舊參數在 sonnet-5/opus-5 上已棄用**，API 會直接 400 拒絕（"Use thinking.type.adaptive and output_config.effort"）。要用新參數 `thinking: {type:"adaptive"}` + `output_config: {effort:"low"|"medium"|...}`。實測若省略這兩個參數（讓 thinking 用預設行為），thinking 有時會吃光整個 `max_tokens` 預算、完全沒留給最終答案（`stop_reason:"max_tokens"`, `blocks:["thinking"]`），是非固定重現的問題，不能只加大 max_tokens 解決，一定要顯式設定 `output_config.effort` 才會穩定。目前 `generateExerciseWithClaude` 用 `max_tokens:16000`+`effort:"medium"`、`runExerciseQAWithClaude` 用 `max_tokens:4096`+`effort:"low"`，實測穩定不再出現預算被 thinking 吃光的狀況。
      3. **⚠️ 換模型後光生成就常要 50-90 秒，遠超 LINE reply token 的有效期限（2026-09-24 修復）**：文意選填/篇章結構/混合題改用 sonnet-5+extended thinking 後，`runQuestionGeneration` 原本整個流程（生成→QA→寫入 Notion）跑完才用 `replyToken` 回覆，實測光生成就 51-78 秒（QA、Notion 讀寫還沒算），reply token 早就過期，老師端完全收不到任何訊息（看起來像「不能出題了」，但 Cloud Function 本身沒有報錯、Notion 甚至可能已經成功寫入——純粹是最後那一步的回覆送不出去）。已改為：`handleQuestionWizardReply` 選定題型當下立刻用 `replyToken` 回「出題中，請稍候」，`runQuestionGeneration` 改用 `pushLineMessage`（而非 `replyLineMessage`）送完成通知，且 `lineWebhook` 的 `timeoutSeconds` 從 120 拉高到 240 留緩衝。Reading Comprehension／克漏字仍用 haiku（幾秒內完成），不受影響。**日後任何會呼叫 sonnet-5/opus-5 extended thinking 模型、且結果要回覆給 LINE 使用者的流程，都要假設耗時以「幾十秒到 1-2 分鐘」計算，不能沿用 reply token 這套（它是為「幾秒內完成」設計的），一律先立即 reply 承接掉 token，結果改用 push 送出。**
  - **⚠️ Exam Style 的字數規格為什麼不拿來改寫文章**：2026-07-30 GSAT 的「各CEFR級距調整規則」被改版成**依題型分字數**（克漏字200-280／文意選填260-311／篇章結構270-300／閱讀測驗300-420／混合題280-380），不再是單純依 CEFR 分。但 STEP2（標準化）發生在 STEP4（選題型）**之前**，標準化當下根本不知道之後會套用哪個 Question Blueprint，而且同一篇文章要能重複套用不同題型出題——不可能讓一篇文章的字數同時滿足克漏字 200-280 又滿足閱讀測驗 300-420。討論後決定 STEP2 固定用通用 CEFR 表，不管 Exam Style 字數；Exam Style 只在文章層綁 relation 當參考 metadata，不影響改寫字數。
  - **同一篇文章可以重複跑「出題」選不同 Blueprint**，各自獨立記錄在 Question Bank，互不影響。
  - **狀態靠 Firebase RTDB 暫存**：`/pending-standardize-wizard/{userId}`、`/pending-question-wizard/{userId}`，10 分鐘 TTL，回「取消」可中止。老師傳「標準化」或「出題」開新流程時，即使前一個精靈還沒選完也會直接蓋掉重開（設計上允許中途改變主意，舊狀態放著等 TTL 過期即可，無害）。
  - **文章清單分頁（2026-07-20）**：素材庫/待出題文章會越堆越多，選文章那一步改用 `notionQueryDataSourceAll`（跟著 `next_cursor` 撈全部，不只抓第一頁）+ `buildPagedSelectionMessage` 每次只顯示 10 筆。難度/考試風格/題型清單目前都很短（≤5 筆）不需要分頁，維持原本 `buildDigitQuickReply` 一次全顯示。
  - **出題選文章：固定編號＋關鍵字搜尋＋Notion連結（2026-08-03，取代純翻頁）**：老師反映文章一多，靠「選取不同篇」一頁一頁翻（原本每頁編號是「清單裡的絕對位置」）很麻煩，且清單增減時位置編號會跑掉、老師記不住。改法：
    1. Standardized Articles 新增 Notion 內建「編號」欄位（`unique_id` 型別，`PATCH /v1/data_sources/{id}` 加的，`{"unique_id":{}}`，無 prefix，純數字且永久不變、Notion 自動遞增、不會因清單增減而改變已存在文章的編號）。`listReadyStandardizedArticles` 讀出 `p.properties["編號"].unique_id.number` 存成 `a.no`，並依 `no` 排序。
    2. `buildPagedSelectionMessage` 新增 `opts` 參數：`useItemNo`（顯示 `it.no` 而非清單位置）／`searchable`（說明文字強調可打關鍵字）／`notionUrl`（附上可直接開 Notion App/網頁瀏覽的連結）。出題流程用新的 `buildArticleListMessage(list, page)` wrapper 統一套用這三個 opts；標準化流程的 Content Intake 清單（沒有編號欄位）維持原本純位置編號，不受影響。
    3. `handleQuestionWizardReply` 的 `select_article` 步驟：純數字輸入＝比對 Notion 固定編號（`activeList.find(a => a.no === N)`），不是清單位置；非數字輸入＝當關鍵字，永遠從 `state.candidates`（完整原始清單，不是上次篩選結果）重新篩選標題（`toLowerCase().includes`），篩選結果存 `state.filtered`，「選取不同篇」會在目前的 activeList（篩選後或全部）裡翻頁。每次打新關鍵字都是從頭篩選（不會越篩越窄卡死），想看全部清單只要重新輸入「出題」重開精靈。
    4. Notion 資料庫連結固定：`STANDARDIZED_ARTICLES_NOTION_URL = "https://app.notion.com/p/a0a035941eef42f8b9c3b8a6ec6a4d4d"`（從任一文章頁面的 `parent.database_id` 推出，`https://app.notion.com/p/{database_id 去掉連字號}`），點開會用手機上的 Notion App（沒裝則開網頁版），讓老師能用 Notion 原生搜尋/篩選/排序找文章，不必侷限在 LINE 的翻頁介面。
  - **⚠️ 關鍵字搜尋「找不到」但 Notion 裡明明看得到文章（2026-08-03 發現＋修復）**：出題候選清單只抓 `Ready for Questions=true` 的文章，若某篇文章其實存在但**還沒通過標準化品質門檻**（`Unknown Words %` / `平均句長` / 字數任一超標），`Ready for Questions` 就是 `false`，對出題流程的關鍵字搜尋來說形同不存在——回「找不到」在邏輯上沒錯，但老師在 Notion 明明看得到那篇文章，會誤以為搜尋壞了。實測案例：「President Lai oversees Kaohsiung coastal drills」（A2）字數 185（達標）、平均句長 10.9（達標），但 `Unknown Words % = 8%` 超過 A2 上限 5%，卡在這一項。修法：新增 `findNotReadyStandardizedArticlesByTitle(notionToken, keyword)`，關鍵字在 Ready 候選裡搜不到時，改查全部 Standardized Articles（不篩 Ready）比對標題，找到的話具體回報卡在哪個門檻（例如「Unknown Words% 8%（上限 5%）」），並提示可到 Notion 人工複核勾選 `Ready for Questions`，或重新跑一次「標準化」——不再是死路一條的「找不到」。
  - 6 個相關資料庫 data_source_id：Content Intake `2e55907b-14d0-4400-9f79-93b4b99532d3`／Standardized Articles `59cfc5c8-3b12-4429-b0ec-f576abdbed4e`／Question Bank `1c557006-885d-40b8-bd3e-3b08bd47b8dc`／Question Blueprint `57819685-d6da-4129-826a-39957418b65e`／Difficulty Profile `00747a2e-8999-4400-ba30-92593ea84dc3`／Exam Style `1697ffde-10f4-410b-83a9-bd2002699d1e`／Prompt Components `8bf5672e-83a2-4d39-851e-588dfaead2b0`
  - `GET /v1/data_sources/{id}` 查 schema 曾經回傳過舊快取漏欄位，寫程式前務必用真實頁面 `GET /v1/pages/{id}` 核對（見 [[feedback_notion_datasource_schema_stale]]）

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
| `/quiz-cache/{word}` | `generateVocabQuiz` 共享題庫快取（無 TTL）；`{ q:{word,sentence,options,answer,translation,explanation}, createdAt }`，key 為單字小寫去非英數（見下方說明） |
| `/example-cache/{md5}` | `generateWordExample` 共享例句快取（無 TTL）；key = `md5(word小寫\|style)`，value `{ data:{sentence,translation}, createdAt }`；讓**每日一字所有用戶共用同一句**，也快取一般單字/片語例句 |
| `/calendar-cache` | iCal 事件快取（24小時 TTL）；由 `trigger-reminder.js`（本機）或 Cloud Function 寫入 |
| `/calendar-subscribers/{userId}` | Bot 2 提醒訂閱者清單 |
| `/calendar-sent/{eventId}_{userId}` | 已發送的行程提醒記錄（防重複） |
| `/teacher-mapping/{name}` | 老師名稱 → `{ userId }` 對照表 |
| `/task-reports/{YYYY-MM-DD}/{userId}/{safeTitle}` | 工作回報記錄（完成／未完成） |
| `/pending-rewrite/{userId}` | Bot 3 圖片改寫等待指令（`{level, expiresAt}`，5分鐘 TTL）；Frank essay 選單也共用此路徑（見 Bot 1 作文批改／改寫） |
| `/pending-solve/{userId}` | Bot 1（Frank）解題模式旗標（`{expiresAt}`，10分鐘 TTL，`SOLVE_MODE_TTL_MINUTES`）；按 Rich Menu「開始解題」設定，每次解題成功會延長，時限到或按「自由對話」則移除。**Frank 已不支援群組**，2026-08-30 起原本的 `/pending-frank-image` 群組旗標已整個移除 |
| `/essay-context/{userId}` | Bot 1（Frank）+ Bot 3（Wisdom）共用的作文對話記憶（`{essayText, lastReply, updatedAt, expiresAt}`，10分鐘 TTL，`ESSAY_CONTEXT_TTL_MINUTES`）；作文批改/改寫後寫入，延續對話（如「全都要改」）或補傳作文題目照片時會讀取並刷新，明確重選作文模式時清除 |
| `/app-reports/{id}` | PWA 問題回報（`{message, user, nickname, meta, hasImage, imageMime, image(base64), createdAt, status}`）；`submitReport` 寫入、`reportImage` 讀圖 |
| `/report-recipients/{userId}` | 接收回報的管理員（`{boundAt, tokenEnvVar, botName}`）；`tokenEnvVar` 記住綁在哪支 bot，push 時用對應 token。目前綁在 Bot 2（Wisdom Assistant）|

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

5. **⚠️ iCal 網址回傳 Google 官方 404（2026-08-03 發現＋修復，跟上面 #1 的「假 Sorry 頁面」是不同問題）**：直接 fetch `GOOGLE_CALENDAR_ICAL_URL` 若回傳的是 Google 自己的 `<title>Error 404 (找不到)!!1</title>` 頁面（不是 1KB 的 Cloud Run 假頁面），代表**該日曆的公開分享權限被取消了**，不是 Cloud Run IP 被擋。症狀：`trigger-reminder.js`／GitHub Actions 每天都顯示「執行成功」，但 log 印出「Parsed 0 VEVENT blocks」，`calendarReminder`/`eveningFollowUp` 因此連續多天都是「Found 0 events」——**腳本本身沒有報錯，因為 404 頁面本身是合法的 HTTP 回應，只是解析出來的事件數是 0**，容易被誤以為是「這幾天真的沒有行程」而忽略。修法：日曆擁有者到 Google 日曆設定 →「活動的存取權限」，把「公開這個日曆」打勾，**還要記得把旁邊「查看所有活動的詳細資訊」下拉選單也選成「查看所有活動的詳細資訊」**——只打勾「公開這個日曆」但沒選這個下拉選單，iCal 會恢復 200 但每一則事件的 `SUMMARY` 全部都是字面上的 `"Busy"`（Google 免費/忙碌層級的分享），事件標題（含 `[老師名]` 前綴）完全讀不到，一樣沒辦法正確分派提醒對象，必須兩個都設定對才行。排查時第一步就該直接在瀏覽器/程式碼裡 fetch 那個 iCal 網址看實際回應內容，不要只看腳本有沒有報錯。

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

## 4. Fluent（youtube-english）

把使用者看的 YouTube 影片轉成個人化單字/片語/口說練習的學習平台，正式產品名稱「Fluent」。

**⚠️ `youtube-english/` 是獨立的 git repo（`f88012/fluent-english`，private），沒有併入 `myfirstcode` 這個 monorepo。** 在這個資料夾裡操作 git 指令時，作用範圍是那個獨立 repo，不會影響外層。

### 部署資訊

- **GitHub repo**：`f88012/fluent-english`（private）
- **Firebase/GCP 專案**：`english-app-c1097`（Firebase 主控台顯示名稱 "YouTube-English-app"，Google AI Studio 帳單頁也是同一個）
- **App Hosting backend**：`fluent-english`，region **asia-east1**（台灣）
- **正式網址**：https://fluent-english--english-app-c1097.asia-east1.hosted.app
- **CI**（PR/push main 觸發，`.github/workflows/ci.yml`）：`npm run lint` + `npm run typecheck` + `npm run test:phase11`
- **CD**：Firebase App Hosting 監看 `main` 分支自動部署，跟 GitHub Actions CI 是分開的兩條路（CI 只負責擋爛程式碼合併，不負責部署）

### 部署指令 / 常用操作

```powershell
cd youtube-english
git push                                    # push main 會自動觸發 App Hosting 部署
firebase apphosting:backends:get fluent-english --project english-app-c1097
firebase apphosting:secrets:set <NAME> --data-file <path> --project english-app-c1097
firebase apphosting:secrets:grantaccess <NAME> --backend fluent-english --project english-app-c1097
firebase deploy --only firestore:rules --project english-app-c1097
```

### 健康檢查（2026-08-27 新增）

- `GET /api/health/yt-dlp`：直接呼叫跟正式功能同一套 `YtDlpTranscriptProvider`，測試固定的已知影片（`n-nGpjLCMAE`），驗證 yt-dlp 抽取全流程（含 cookies、SSL 憑證設定）還活著。需要 `x-health-check-secret` header 才能打，不是公開端點
- `.github/workflows/health-check.yml`：每 6 小時排程打一次上面那個端點，失敗會讓這個 workflow run 變紅
- **⚠️ workflow 變紅不等於你會被通知（2026-09-01 發現＋修復）**：GitHub 對排程（`schedule`）觸發的 workflow **預設不會**寄 email/網頁通知，要自己去 GitHub 帳號 Settings → Notifications → Actions 手動開「Only notify for failed workflow runs」才會收到——8/31 22:13 那次 cookies 過期就是因為這個沒開，完全沒人發現，隔天才手動查到。已改成失敗時额外加一步直接 push LINE 訊息（重用 `line-bot-firebase` 既有的推播基礎設施），不依賴任何人的 GitHub 帳號通知設定，保證送達：GitHub repo secrets `LINE_NOTIFY_TOKEN`（= **Bot 1「Frank Line英語教室」**的 `LINE_CHANNEL_ACCESS_TOKEN`，2026-09-01 從 Bot 2 改過來，Frank 指定要收在自己這支 bot）與 `LINE_NOTIFY_USER_ID`（`U795afcd27f7012e5091e148880346c2e`，原本是綁在 Bot 2 `/report-recipients` 的接收者 userId，實測同一個 userId 在 Bot 1 底下推送也成功——LINE 的 userId 是以 Provider 為範圍，同一個 Provider 底下的不同 channel 通用，不需要另外查 Bot 1 專屬的 userId）。已用 `workflow_dispatch` 手動模擬失敗實測過 LINE 真的會送達
- `HEALTH_CHECK_SECRET` 同時存在 Firebase Secret Manager（給正式環境的 API route 讀）跟 GitHub repo secret（給 Actions 呼叫用），兩邊要對得上，值是 `crypto.randomBytes(32).toString('hex')` 產生的
- 目的是接住「未知」章節第 4 點（cookies 過期/YouTube 反爬蟲）那類問題，讓你在學生回報壞掉之前先知道

### GCP IAM / Secret Manager

- `gcloud` CLI **在這台機器裝不起來**（NSIS 安裝程式需要真實互動桌面工作階段，winget 預設安裝、指定來源、直接靜默安裝三種方式都在同一步失敗 exit code 2）。目前所有 GCP 操作都靠已登入的 `firebase` CLI 完成，沒有裝 gcloud
- 正式環境密鑰存在 Secret Manager，不寫在 `apphosting.yaml` 明碼裡：
  - `OPENAI_API_KEY`
  - `YT_DLP_COOKIES`（見下方 yt-dlp 章節）
  - ECPay 相關 key **尚未搬**（還在 staging 測試階段，之後要正式上線金流時要記得補）
- 兩個 secret 都已授權給 App Hosting 自動建立的 service account：`firebase-app-hosting-compute@english-app-c1097.iam.gserviceaccount.com`（App Hosting 建立 backend 時會自動生成這個 SA，不需要手動用 gcloud 建立自訂 SA）
- `NEXT_PUBLIC_FIREBASE_*` 這幾個是公開值（本來就會被打包進前端 JS），直接寫在 `apphosting.yaml` 明碼即可，不用進 Secret Manager
- `GOOGLE_APPLICATION_CREDENTIALS` / `FIREBASE_ADMIN_*` 只在本機開發用（指向下載的 service account JSON），正式環境完全不用設，App Hosting 掛載的 SA 會自動提供 Application Default Credentials

### App Hosting backend 建置的坑（花了很多輪才搞懂）

1. **Primary region 建立後不能改**，只能整個刪除重建。這台專案的 backend 建立過程：`us-central1` → 刪除重建到 `asia-east1`（台灣）→ 改名 `fluent-english` → `fluent` → 最後又變回 `fluent-english`（Console 精靈的互動流程重建時取的名字），目前最終定案是 **`fluent-english` @ asia-east1**
2. **GitHub repo 連結只能在「建立 backend」當下的互動式流程設定**（會跳出瀏覽器做 GitHub App 授權），Console 沒有一個獨立的「事後補連結」設定頁。用 `firebase apphosting:backends:create --non-interactive` 建立的 backend 永遠不會有 repo 連結，只能刪掉用 Console 精靈或不帶 `--non-interactive` 的 CLI 重建
3. 每次刪除重建 backend 後，要重新跑一次 `secrets:grantaccess`（雖然通常是同一個 auto-provision 的 service account，但養成習慣重新確認比較保險）
4. `apphosting.yaml` 裡的 `NEXT_PUBLIC_APP_URL` 要跟著 backend 名稱/region 變動同步更新（網址格式是 `{backend}--{project}.{region}.hosted.app`）

### 字幕來源架構（2026-10-04 起 Gemini 優先）

**現行順序：Gemini → Supadata → TranscriptAPI → yt-dlp**（`reliable-transcript-provider.ts`）。
- **Gemini**（`gemini-transcript-provider.ts`，模型 `gemini-3.8-flash`）：由 Google 端直接讀公開 YouTube 網址轉寫，不受機房 IP 封鎖／cookies 影響。先用 **YouTube Data API v3** 取長度/公開狀態/是否直播（太長、直播、非公開的影片在花錢轉寫前就擋掉；非公開影片會往下交給其他供應商）。金鑰 `GEMINI_API_KEY`（Secret Manager），是一把只限 Gemini API + YouTube Data API 的金鑰（GCP 金鑰顯示名稱「Fluent transcripts (Gemini + YouTube Data)」）。實測對照人工字幕：用字約 98–99%、時間戳 ±0.7 秒；成本約 US$0.05/15 分鐘影片（2027 起約翻倍）。輸出是 Gemini 自己的語音辨識，不是 YouTube 原生字幕軌。`gemini-2.5-flash` 對新金鑰已 404
- **TranscriptAPI**：方案 2026-09-24 到期、**刻意不續訂**，LINE 通知已從健康檢查移除（只留「全部供應商都失敗」那則）
- 健康檢查改用 19 秒短片 `jNQXAC9IVRw`，每次約 US$0.0015
- ⚠️ **新增 secret 的順序**：一定要先 `firebase apphosting:secrets:set` + `grantaccess`，再在 `apphosting.yaml` 引用。2026-09-24～10-02 因 `apphosting.yaml` 引用了不存在的 `AZURE_SPEECH_KEY`，App Hosting 建置連續失敗一週、正式站停在舊版（已將 Azure 兩項註解掉）。push 後要看 commit 的「App Hosting - Rollout」檢查是否成功，CI 綠燈不代表有部署成功

以下為 2026-09-07 的舊架構說明（順序已被上方取代，細節仍可參考）：


`ReliableTranscriptProvider` 依序嘗試 **TranscriptAPI → Supadata → yt-dlp**，介面是 `TranscriptProvider`（只有 `getTranscript(videoId)` 一個方法，要再加第四家就是一個新檔案 + 建構子多一個參數）。

- **為什麼是這個順序**：TranscriptAPI 是付費主線、承擔日常流量；Supadata 是每月 100 次免費額度的**緊急備援**（走到它就代表主線掛了）；yt-dlp 排最後，因為 cookies 幾小時就被輪換、自從 TranscriptAPI 變主線後**一次都沒成功服務過**，但它免費，放棄前值得試一次
- **`too_long` / `unsupported` 會直接中止整條鏈**（`isVideoVerdict`）：這兩個是對「影片本身」的判定，換誰來看結論都一樣，繼續往下問只是白花別家的額度

**TranscriptAPI 的額度用盡偵測（2026-09-07）**

- ⚠️ **它沒有任何查詢餘額的端點**，而且 `X-RateLimit-Remaining` 標頭是「每分鐘 300 次速率視窗」的剩餘數，**跟本月 credits 完全無關**——曾經想拿它做「額度快用完」預警，查證後發現前提根本不成立，照做只會產生假警報。**真正的早期預警在他們的 API 上做不出來**
- 唯一訊號是 **HTTP 402**（回應 body 帶 `detail.reason`：`insufficient_credits` / `no_active_paid_plan`）。已對應到獨立的 `quota_exhausted` reason，不重試（空的方案不會自己補滿），而且這個 reason 會穿過後面的備援保留下來，不會被 yt-dlp 的一般錯誤蓋掉——否則警報只會說「都失敗了」，完全沒提到唯一能解決的動作是儲值

**Supadata 的兩個坑（都是實際打 API 才發現，跟文件描述不同）**

1. **字幕端點不回傳影片長度，也不回傳 video id**，但上游 `prepareYouTubeVideo` **沒有長度就直接拒絕整支影片**（就是「無法確認這部影片的長度」那個錯誤），所以 provider 必須先打 `/v1/youtube/video?id=` 拿 `duration`（秒），順便拿 `id` 驗證「回來的字幕確實屬於這支影片」、拿 `isLive` 擋直播。**刻意排在字幕請求之前而非並行**：太長或直播的影片會在這步就被擋掉，不會白花一次字幕額度
2. **它的 `offset`/`duration` 是毫秒，我們內部全部用秒。** 這種單位錯誤不會報錯，只會讓所有字幕時間戳跑到影片結尾之外，非常難察覺——`tests/transcript-api-provider.test.mjs` 有一個用真實 API 回應釘住這個換算的測試，不要拿掉
- 字幕一樣餵給共用的 `parseYtDlpJson3Transcript`，所以不管哪家服務，學生看到的斷句完全一致
- **429 沒有被標成額度用盡**：Supadata 的 429 同時代表「額度用完」和「請求太快」，沒有任何欄位或標頭能區分（headers 也沒有額度資訊），硬標會犯跟上面 `X-RateLimit-Remaining` 同一類的錯

**健康檢查現在有三種警報**（`.github/workflows/health-check.yml`，全部推 LINE）

| 條件 | 意義 |
|---|---|
| `source` 開頭是 `supadata` | 付費主線掛了、正在燒每月 100 次的免費備援（學生還能用，但額度會安靜被用完）|
| `transcriptApiQuota=exhausted` | TranscriptAPI 額度用盡，但這次被頂過去了（訊息帶 top-up 連結）|
| HTTP != 200 | 全部供應商都失敗，學生已中斷；`reason=quota_exhausted` 時訊息會直接指向儲值 |

**手動貼逐字稿（最終人工退路，本來就已完成）**：自動抓取失敗時 `video-learning-flow.tsx` 的 textarea 才可編輯（成功時唯讀），UI 內含三步驟教學，**來源就是 YouTube 自己的「顯示轉錄稿」按鈕**。實際會用的人是老師而非學生（要學生上課中途跳去 YouTube 複製貼上，摩擦太大），定位是「全部都掛了但課現在就要上」的逃生口

**Secrets**：`TRANSCRIPT_API_KEY`、`SUPADATA_API_KEY` 都在 Secret Manager，`apphosting.yaml` 以 `secret:` 綁定、`availability: [RUNTIME]`。本機沒設 `SUPADATA_API_KEY` 時該層自動跳過，不影響開發

### 已知問題與修復記錄

1. **`tsc --noEmit` 在乾淨 checkout（含 CI）會失敗**：Next.js 16 的路由型別（`.next/types`）要先跑過 `next dev`/`next build` 才會產生，本機因為留有舊的 `.next/` 才沒發現。`package.json` 的 `typecheck` script 已改成 `next typegen && tsc --noEmit`
2. **App Hosting 沒有 yt-dlp**：App Hosting 只支援 Buildpacks、**不支援自訂 Dockerfile**（已查證官方文件），所以裝了 `scripts/install-yt-dlp.mjs` 當 `postinstall` hook，在 Linux build 環境下載獨立執行檔到 `./bin/yt-dlp`（本機 Windows 開發、GitHub Actions CI 都會自動跳過）。`apphosting.yaml` 設定 `YT_DLP_PATH=./bin/yt-dlp`
3. **yt-dlp 在正式環境 SSL 憑證驗證失敗**：`src/lib/transcript/yt-dlp-transcript-provider.ts` 呼叫 yt-dlp 時原本寫死 `--compat-options no-certifi`（叫 yt-dlp 用作業系統憑證庫，而不是自己內建的 certifi 包）——這是為了修**本機 Windows 開發環境**（這台機器的 Avast 會攔截 SSL，需要改用系統憑證庫才行，跟今天修 Gemini API 腳本踩到的坑同一類）。但正式環境是 Linux 容器，那邊沒有系統憑證庫，同一個參數在那邊反而讓憑證驗證整個失敗。已改成 `process.platform === "win32"` 才加這個參數，正式環境改用 yt-dlp 自己內建、比較新的憑證包
4. **YouTube 對 Cloud Run 等機房 IP 做反爬蟲封鎖**（錯誤訊息：`Sign in to confirm you're not a bot`，換影片測試過不是單一影片問題，是整個 IP 被盯上）：
   - 解法是 `YT_DLP_COOKIES` secret（一個**備用 Google 帳號**的登入 cookies，Netscape 格式），不是專案主帳號——避免自動化流量把帳號搞到被 YouTube 限制，連帶波及那個帳號管理的 GCP/Firebase 存取權
   - 匯出 cookies 過程踩了不少坑，記錄一下避免下次重踩：
     - 瀏覽器擴充功能一定要用 **「Get cookies.txt LOCALLY」**（注意 LOCALLY 三個字），另一個叫「Get cookies.txt」（沒有 LOCALLY）的舊版擴充功能匯出永遠是空檔案
     - 擴充功能要選「Export cookies for **this site**」，不要選「Export All」——選全部會把整個瀏覽器 profile 所有網站（含其他 Google 服務、一堆廣告網域）的 cookies 都掃進去，範圍太大也有隱私疑慮
     - `yt-dlp --cookies-from-browser edge` 這條路走不通：新版 Edge/Chrome 的 App-Bound Encryption 會擋掉 DPAPI 解密（`Failed to decrypt with DPAPI`），連在使用者自己的互動式終端機跑都一樣失敗，只能用瀏覽器擴充功能手動匯出
     - **「無痕凍結法」讓 cookies 撐幾個月而不是幾天（2026-08-28，yt-dlp 官方 wiki 建議）**：YouTube 會對「還在活動中的 session」頻繁輪換 cookies——在一般視窗匯出後，只要該帳號 session 又有活動（同步、開 YouTube 分頁）匯出的檔案就作廢，這就是 cookies「不定期過期」的原因。正確做法：開全新無痕視窗登入備用帳號 → 同分頁導航到 `https://www.youtube.com/robots.txt`（純文字頁不觸發活動偵測）→ 擴充功能匯出 this site → **立刻關閉無痕視窗且之後永不再用該 session**，session 被凍結就不會被輪換
     - **一鍵更新腳本**：`youtube-english/scripts/refresh-yt-cookies.ps1`——驗證 cookies 檔 → 上傳 Secret Manager → 刪除本機檔案 → 空 commit push 觸發重新部署。**注意：Secret Manager 更新後 App Hosting 不會自動吃到新值**（secret 在 rollout 時解析），一定要觸發一次重新部署才生效，腳本已包含這步
     - **全自動同步（2026-09-02 新增，因為一天壞 2-3 次，人工／半自動都跟不上；2026-09-04 降頻）**：`scripts/sync-yt-cookies-from-firefox.ps1` + Windows工作排程器「Fluent-YtDlpCookieSync」（`-WakeToRun` 睡眠也會喚醒執行，`Interactive` principal 綁在目前登入的使用者）。前提：這台電腦裝了 Firefox，備用帳號在**一般（非無痕）視窗**登入並保持登入狀態——這跟上面「無痕凍結法」的一次性快照是不同用途，這裡要的是活著、會自然被 YouTube 輪換也沒關係的 session，因為腳本本身就是定期去抓「當下最新」的 cookies，不是想讓它凍結不變
       - **2026-09-04 從每 3 小時降為每天一次（凌晨 4:00）**：`ReliableTranscriptProvider` 換成 TranscriptAPI 為主之後（見上方「字幕來源架構：三層備援」），比對了 2026-09-02～09-03 橫跨兩天多的 7 次健康檢查記錄，`source` 全部都是 `transcript-api:asr-en`，一次都沒出現過 `yt-dlp:*`——代表 yt-dlp 這條路徑完全沒被觸發過，同步再新鮮的 cookies 也用不到，等於白白讓帳號每 3 小時被戳一次卻沒有任何實際效益（風險沒消失，效益卻是零）。降頻後仍保留這個機制當「萬一 TranscriptAPI 掛掉時的救急備援」，但不需要那麼高頻率去驗證/更新一個平常根本不會被呼叫到的東西
       - 原理：`yt-dlp --cookies-from-browser firefox` 直接讀 Firefox profile 的 `cookies.sqlite`（Firefox 不像 Edge/Chrome 有 App-Bound Encryption 擋 DPAPI 解密），對固定影片跑一次 `--simulate` 逼 yt-dlp 把讀到的 cookie jar 存成 Netscape 檔，再交給 `refresh-yt-cookies.ps1`
       - `refresh-yt-cookies.ps1` 的網域驗證邏輯因此調整過：yt-dlp 從真實瀏覽器讀到的 session 本來就橫跨 `accounts.google.com`／`google.<cctld>`／`googlevideo.com` 等整個 Google 登入網域家族，不是只有 `youtube.com`；而且長期保持登入的 Firefox profile 難免混入不相干的雜訊（實測踩過 Firefox 新分頁 Pocket 推薦文章帶進 `.economist.com` cookie）。改成「過濾掉不在已知網域家族清單內的 cookies，安靜跳過」而不是整包拒絕失敗——一次性手動流程整包拒絕是對的（人在看），但無人值守的排程如果每次雜訊都整包失敗、狂發 LINE 失敗通知，會失去自動化的意義
       - **PowerShell 5.1 的 `*>&1` 陷阱**：sync 腳本原本用 `*>&1 | ForEach-Object` 包住 nested 的 `git push` 呼叫來即時記錄每一行，結果 git 把正常進度訊息寫到 stderr，PowerShell 5.1 把這個誤判成 `NativeCommandError`、导致明明成功的更新被腳本回報成失敗。已移除這個 stream 合併，改成直接呼叫＋檢查 `$LASTEXITCODE`
       - 已完整驗證：直接跑腳本兩次＋透過 `Start-ScheduledTask` 真的觸發工作排程器跑一次，三次都成功建立新 Secret Manager 版本並推送部署（`LastTaskResult=0`）
       - **已知限制**：這台電腦要保持開機／可喚醒才會準時執行；如果之後這支備用帳號被 Google 判定為自動化異常行為而整個停用，再頻繁的自動更新也救不回來，屆時需要換一個全新的備用帳號重新走一次登入流程
   - `src/lib/transcript/yt-dlp-transcript-provider.ts` 把 `YT_DLP_COOKIES` 內容寫到 `os.tmpdir()` 的暫存檔（每個 container instance 只寫一次），加 `--cookies <path>` 參數；沒設這個環境變數時完全不影響行為（本機開發不需要）
   - **這是目前整條 pipeline 最脆弱的一環**：cookies 會過期需要手動重新匯出更新；技術上算是自動化存取 YouTube，有違反服務條款的風險（即使用備用帳號也一樣，只是後果被隔離開）。**使用者原本考慮過用其他 YouTube 字幕擷取工具**，這次是先選 yt-dlp 頂著用；如果之後 cookies 維護負擔太高或帳號被限制，值得重新比較其他方案（例如評估 YouTube Data API v3 官方字幕端點的實際限制、付費住宅型 proxy 服務等），減少對單一備用帳號存活狀態的依賴
5. **App Hosting 預設資源配置偏緊**：`runConfig` 預設 512MiB 記憶體，跑 Next.js SSR + Firebase Admin + OpenAI SDK 又要另外 spawn yt-dlp 子行程有點吃緊，已在 `apphosting.yaml` 調高到 `cpu: 1` / `memoryMiB: 1024`（這個是先調高再測試，過程中曾經懷疑是這個造成 502，後來發現 502 其實是同時期還沒修好的 SSL 憑證問題，但調高資源本身沒有壞處就保留了）

### 品牌 / 設計系統

- `docs/brand-guidelines.md`：色彩 token、字體系統（`html[lang="zh-TW"]` 中英字體自動切換）、hero 卡片共用樣式、語氣文案規範（kicker/titleBefore/titleAccent/intro 三段式結構）、Logo 使用規則
- 色調：靛藍 `--forest:#101b36` + 琥珀 `--mint-strong:#c08a2e` + 米白 `--canvas:#f3f0e8`，2026-08-27 從原本的深墨綠+薄荷綠改版
- **⚠️ `docs/brand-guidelines.md` 寫於全站色彩硬編碼掃描（84 處 `rgba(18,63,58,*)`/`rgba(185,232,212,*)` 舊色殘留一次性替換掉）之前**，裡面「已知缺口」那段記錄已經過時，之後有空可以更新
- Logo：`src/components/layout/brand.tsx` 裡的 `FluentMark`（inline SVG，靛藍開口圓弧 + 琥珀箭頭），取代原本用 CSS `::before`/`::after` 畫的交叉線標記

## yt-dlp 字幕擷取工具

### 安裝

```powershell
winget install --source winget yt-dlp.yt-dlp
# 安裝完需重開 PowerShell 才能直接呼叫 yt-dlp
```

**執行檔路徑**（PATH 未生效時直接用）：
`C:\Users\f8801\AppData\Local\Microsoft\WinGet\Packages\yt-dlp.yt-dlp_Microsoft.Winget.Source_8wekyb3d8bbwe\yt-dlp.exe`

### 下載字幕（.vtt）

```powershell
# 重開終端後可直接用（仍需加 --no-check-certificate，SSL 憑證驗證會失敗）
yt-dlp --no-check-certificate --write-auto-sub --skip-download --sub-lang en -o 輸出檔名 "YouTube網址"

# 若 PATH 未生效，用完整路徑
& "C:\Users\f8801\AppData\Local\Microsoft\WinGet\Packages\yt-dlp.yt-dlp_Microsoft.Winget.Source_8wekyb3d8bbwe\yt-dlp.exe" --no-check-certificate --write-auto-sub --skip-download --sub-lang en -o 輸出檔名 "YouTube網址"
```

產出檔案為 `輸出檔名.en.vtt`。

### 轉換 .vtt → 純文字 .txt

```powershell
$vttFile = "chess.en.vtt"   # 輸入
$txtFile = "chess.txt"      # 輸出

$lines = Get-Content $vttFile -Encoding UTF8
$seen = [System.Collections.Generic.HashSet[string]]::new()
$result = [System.Collections.Generic.List[string]]::new()

foreach ($line in $lines) {
    if ($line -match '^\s*$' -or $line -match '-->' -or $line -match '^WEBVTT' -or $line -match '^Kind:' -or $line -match '^Language:') { continue }
    $clean = $line -replace '<[^>]+>', ''
    $clean = $clean.Trim()
    if ($clean -eq '' -or $clean -eq '[Music]' -or $clean -eq 'foreign') { continue }
    if ($seen.Add($clean)) { $result.Add($clean) }
}

$result | Out-File $txtFile -Encoding UTF8
Write-Host "完成，共 $($result.Count) 行"
```

**邏輯說明**：跳過時間碼行、空行、WEBVTT header；移除 `<c>`、時間標記等 inline tag；去重複行；過濾 `[Music]`、`foreign` 等雜訊。

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
- **generateVocabQuiz 共享題庫快取（2026-06-12，省 token）**：出題前先用 `quizCacheKey(word)`（小寫、非英數轉 `_`）查 Firebase Realtime DB `/quiz-cache/{key}`，只對「未快取」的單字呼叫 Claude，生成後寫回；跨所有學生每個單字題目只生成一次，命中快取 0 token、約 9 倍快。`initializeFirebase()` 取得 `dbRef`；Firebase 連不上時 fallback 為原本即時生成（不會壞）。回傳依原請求順序合併「快取 + 新生成」。無 TTL（句子不會過期）。若日後啟用 `cefrLevel`，key 會加 `__{cefr}` 後綴避免混用。客戶端 `QUIZ_FN_URL` 打的是 base `generateVocabQuiz`（非 V2/V3）
- **Service Worker 快取版本**：更動 `index.html` 或 `vocabulary-data.js` 需同步升版 `sw.js` 的 `CACHE` 常數（目前 `vocab-app-v109`），否則舊使用者看不到更新
- **檔案編碼**：`functions/index.js` 和 `package.json` 必須存為 UTF-8（無 BOM），Windows PowerShell redirect 可能產生 UTF-16 BOM 導致部署失敗
- **⚠️ `line-bot-firebase/functions` 沒有 `package-lock.json`（2026-07-31 發現）**：deploy 時 Cloud Build 用當下 npm 解析到的版本安裝依賴，沒有鎖版本。曾經因此在完全沒改 `package.json` 的情況下，某次 deploy 突然開始失敗（Cloud Run "Container Healthcheck failed"，log 顯示 `Cannot find module '@firebase/app'`，`firebase-admin` 的 database 模組透過 `@firebase/database-compat` 間接需要 `@firebase/app` 和 `@firebase/app-compat`，但這兩個套件沒有被宣告成 `dependencies`、也不會被 npm 自動安裝）。已明確把 `@firebase/app`、`@firebase/app-compat` 加進 `package.json` 的 `dependencies` 並 `npm install` 產生 `package-lock.json`（現在存在了，之後 deploy 會鎖版本，不會再無預警漂移）。日後若又遇到「程式沒改、deploy 卻突然 500/健康檢查失敗」，先查 Cloud Run log 找 `Cannot find module`，不要假設是自己的程式碼壞掉。
- **行事曆 iCal 日期格式化**：`formatCalendarEvents` 使用 `evt.start`（YYYY-MM-DD 字串）手動格式化日期，不使用 `toLocaleDateString`（Cloud Run 環境下對 Invalid Date 輸出字串 "Invalid Date"）；`startObj` 存為毫秒 timestamp（`getTime()`），用 `getUTC*` 方法讀取時間
- **iCal 折疊（folding）**：iCal 超過 75 字元的行會折疊（`CRLF + 空格`），解析前必須先 unfolding（`icalText.replace(/\r\n[ \t]/g, "")...`），否則長標題（如 `[Sammy, Frank, Ivy] 考猜試教@ 府中`）會被截斷、名字解析失敗
- **Cloud Run 無法抓 Google Calendar iCal**：Cloud Run IP 被 Google 封鎖，返回「Sorry...」HTML（1KB）而非 iCal 內容。已加 `BEGIN:VCALENDAR` 有效性檢查，無效時拋錯而非靜默回傳 0 筆
- **全角括號（2026-05-07 修復）**：Google 日曆事件標題若含全角括號 `［` `］`（U+FF3B/FF3D），`parseEventTarget` 的正規表達式無法匹配，導致整個標題被視為「發給所有人」。`parseEventTarget` 函式（`index.js` 和 `trigger-reminder.js`）現已在 regex 前先正規化：`title.replace(/［/g, "[").replace(/］/g, "]")`
- **行程提醒回覆指示**：提醒訊息結尾加入「若老師尚未完成，請回覆：\n「xxx尚未完成，預計[日期]前完成」」，引導老師回報進度，讓 `eveningFollowUp` 能正確判斷未回報者
- **calendar-sent key 必須含日期（2026-05-16 修復）**：`/calendar-sent/` 的 key 格式為 `{eventUID}_{evt.start}_{userId}`，不可省略日期。舊格式 `{eventUID}_{userId}` 會導致：(1) 同一事件以「明天」發出後，隔天以「今天」重送時被判斷為已送出而跳過；(2) 循環事件（RRULE）首次寄出後，往後每週永遠跳過。`index.js` 和 `trigger-reminder.js` 兩處 key 格式需保持一致
- **RECURRENCE-ID 循環例外事件去重錯誤（2026-05-16 修復）**：`trigger-reminder.js` 的 `byUid` Map 去重邏輯會讓同一 UID 的多個循環例外事件互相覆蓋，最後只剩最後一筆。修法：有 `RECURRENCE-ID` 的例外事件一律放入獨立 `exceptions[]` 陣列（不做 UID 去重），最後與非循環事件合併處理。無此修復時，Google 日曆中有多個修改過日期/標題的循環事件（如每週師訓）只有一次能被偵測到
