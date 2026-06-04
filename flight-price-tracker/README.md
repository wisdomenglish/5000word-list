# Flight Pulse

本機機票追價工具，前端會呼叫本機 proxy 的 `/api/flights/search`，再由 proxy 使用 Skyscanner Flights Live Prices API。

## 啟動

PowerShell：

```powershell
$env:SKYSCANNER_API_KEY="your-skyscanner-api-key"
node server.js
```

開啟：

```text
http://127.0.0.1:4177
```

如果沒有設定 `SKYSCANNER_API_KEY`，前端會自動 fallback 到模擬資料。

## Skyscanner Adapter

- 使用 Flights Live Prices API。
- 流程是 `/create` 建立查詢 session，再用 `/poll/{sessionToken}` 補齊結果。
- 因為 Skyscanner 需要精確日期，本工具會依照「月份 + 天數」產生候選出發日與回程日。
- 選擇「全部可查機場」時，目前最多查前 8 個機場，避免一次打太多 API。
