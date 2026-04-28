# LINE Bot 設定文件

## Bot 列表

### Bot 1：Frank Line英語教室 v2

| 項目 | 值 |
|------|-----|
| Channel ID | `2009816850` |
| 名稱 | Frank Line英語教室 v2 |
| 用途 | 英文教學助手（文法、單字、糾錯、作文、翻譯） |
| LINE User ID（Destination） | `Ubf2dcf1c5ebd1103328a7af4e9d7aee7` |
| Webhook URL | `https://us-central1-news-english-ef2e4.cloudfunctions.net/lineWebhook` |

### Bot 2：Ivy's English Calendar

| 項目 | 值 |
|------|-----|
| Channel ID | `2009819826` |
| 名稱 | Ivy's English - Calendar Reminder Bot |
| 用途 | Google Calendar 行程提醒 |
| LINE User ID（Destination） | `U45ed153ac9a4c65ec21dc3eb446649c1` |
| Webhook URL | `https://us-central1-news-english-ef2e4.cloudfunctions.net/lineWebhook` |

---

## Webhook 設定

兩支 Bot 共用同一個 Webhook URL：

```
https://us-central1-news-english-ef2e4.cloudfunctions.net/lineWebhook
```

系統透過 `event.destination`（LINE User ID）自動識別是哪支 Bot，並套用對應的 Channel Secret 驗證。

### LINE Developers Console 設定步驟

1. 前往 [LINE Developers Console](https://developers.line.biz/)
2. 選擇 Provider → Channel
3. Messaging API 頁籤 → Webhook Settings
4. Webhook URL 填入上方 URL
5. 啟用「Use webhook」
6. 停用「Auto-reply messages」
7. 停用「Greeting messages」

---

## Bot 功能說明

### Bot 1：英文教學功能

支援的意圖（由 Claude AI 智能分類）：

| 意圖 | 子意圖 | 範例問法 |
|------|--------|---------|
| `vocabulary` | `meaning` | "serendipity 是什麼意思？" |
| `vocabulary` | `pronunciation` | "ephemeral 怎麼唸？" |
| `vocabulary` | `synonym` | "happy 的同義詞" |
| `vocabulary` | `antonym` | "happy 的反義詞" |
| `vocabulary` | `example` | "用 ubiquitous 造句" |
| `grammar` | `explanation` | "is 和 are 的差別" |
| `grammar` | `quiz` | "_____ the water clean? (A) Is (B) Are" |
| `error_correction` | — | "I go to school yesterday，對嗎？" |
| `essay_review` | `review` | "幫我改這段英文：..." |
| `essay_review` | `example` | "給我一封感謝信的範例" |
| `translation` | — | "翻譯：How are you?" |

群組使用：在訊息中加上 `@Bot` 即可觸發回覆。

### Bot 2：行事曆功能

| 指令 | 說明 |
|------|------|
| `開啟提醒` / `訂閱提醒` | 訂閱每日早上 8:00 隔日行程提醒 |
| `關閉提醒` / `取消提醒` | 取消訂閱 |
| `提醒狀態` | 查詢目前訂閱狀態 |
| `今日行程` / `今天` | 查詢今日行程 |
| `明日行程` / `明天` | 查詢明日行程 |
| `本週行程` / `這週` | 查詢本週（週一～週日）行程 |
| `下週行程` | 查詢下週行程 |
| `本月行程` | 查詢本月行程 |
| `下一個活動` | 查詢最近即將開始的活動 |

---

## 快取機制

- 儲存位置：Firebase Realtime Database `/cache/{md5_hash}`
- 快取 Key 格式：`MD5(intent:subIntent:content)`
- TTL：7 天
- 命中快取時直接回覆，不呼叫 Claude API

---

## 回覆格式規範

- 使用分隔線 `━━━━━━━━━━━━━━━━` 區分段落
- 使用 emoji 標示重點（🔹、💡、✓、❌ 等）
- **不使用** markdown `**粗體**` 語法（LINE 不支援）
- 回覆長度：150–200 字為佳，作文批改最多 2048 tokens
- 所有說明文字使用**繁體中文**

---

## 環境變數清單

| 變數 | 對應 Bot | 說明 |
|------|---------|------|
| `LINE_CHANNEL_SECRET` | Bot 1 | HMAC-SHA256 簽名驗證用 |
| `LINE_CHANNEL_ACCESS_TOKEN` | Bot 1 | 傳訊 API Token |
| `LINE_CHANNEL_SECRET_BOT2` | Bot 2 | HMAC-SHA256 簽名驗證用 |
| `LINE_CHANNEL_ACCESS_TOKEN_BOT2` | Bot 2 | 傳訊 API Token |

> Token 有效期：長期（Stateless channel access token）  
> 如需輪換：前往 LINE Developers Console → Messaging API → Channel access token → Issue
