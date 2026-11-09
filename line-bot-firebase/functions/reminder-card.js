// 行程提醒卡片（LINE Flex Message）
// Cloud Function calendarReminder 與本機 trigger-reminder.js 共用，兩邊樣式才會一致。
// evt 欄位：start（YYYY-MM-DD）、startObj/endObj（ms，getUTC* 即為台灣時間）、isAllDay、location、description

const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];
const LINE_GREEN = "#06C755";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatHm(ms) {
  const d = new Date(Number(ms));
  return `${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}`;
}

function formatDate(start) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start || "")) return start || "日期不詳";
  const [y, m, d] = start.split("-").map(Number);
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return `${y}/${pad2(m)}/${pad2(d)}（${WEEKDAYS[wd]}）`;
}

function formatTime(evt) {
  if (evt.isAllDay) return "整天";
  const ts = Number(evt.startObj);
  if (!(ts > 0)) return "整天";
  const te = Number(evt.endObj);
  return te > 0 && te !== ts ? `${formatHm(ts)}–${formatHm(te)}` : formatHm(ts);
}

// 行事曆內容細項（主持人、出席、流程…）可能夾帶 HTML，轉成純文字並保留換行
function cleanDescription(text) {
  const plain = String(text || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return plain.length > 1500 ? plain.slice(0, 1500) + "…" : plain;
}

function infoRow(label, value) {
  return {
    type: "box",
    layout: "baseline",
    spacing: "md",
    contents: [
      { type: "text", text: label, size: "md", color: "#999999", flex: 0 },
      { type: "text", text: value, size: "md", color: "#444444", wrap: true, flex: 1 }
    ]
  };
}

// 仿 LINE 預約卡的白底外框按鈕（Flex 原生 button 沒有外框樣式）
function outlineButton(label, action) {
  return {
    type: "box",
    layout: "vertical",
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    cornerRadius: "md",
    paddingAll: "md",
    action,
    flex: 1,
    contents: [{ type: "text", text: label, size: "md", color: "#777777", align: "center" }]
  };
}

function filledButton(label, action) {
  return {
    type: "box",
    layout: "vertical",
    backgroundColor: LINE_GREEN,
    cornerRadius: "md",
    paddingAll: "md",
    action,
    flex: 1,
    contents: [{ type: "text", text: label, size: "md", color: "#FFFFFF", align: "center", weight: "bold" }]
  };
}

function buildReminderFlex(evt, cleanTitle, isToday) {
  const title = (cleanTitle || evt.title || "未命名行程").trim();
  // 按鈕代傳的文字要對上 detectCalendarIntent 的 /^(完成|未完成)/ 才會被記錄；message action 上限 300 字
  const reportTitle = title.slice(0, 280);
  const heading = isToday ? "今日行程提醒" : "明日行程提醒";

  const rows = [
    infoRow("行程", title),
    infoRow("日期", formatDate(evt.start)),
    infoRow("時間", formatTime(evt))
  ];
  if (evt.location) rows.push(infoRow("地點", evt.location));
  const desc = cleanDescription(evt.description);
  if (desc) rows.push(infoRow("內容", desc));
  rows.push(infoRow("備註", "尚未完成可直接回覆「未完成 工作名稱 預計日期」"));

  const footer = [];
  footer.push({
    type: "box",
    layout: "horizontal",
    spacing: "sm",
    contents: [
      outlineButton("尚未完成", { type: "message", label: "尚未完成", text: `未完成 ${reportTitle}` }),
      filledButton("回報已完成", { type: "message", label: "回報已完成", text: `完成 ${reportTitle}` })
    ]
  });

  return {
    type: "flex",
    altText: `${heading}：【${title}】`.slice(0, 400),
    contents: {
      type: "bubble",
      size: "mega",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        paddingAll: "xl",
        contents: [
          { type: "text", text: heading, weight: "bold", size: "xl", color: "#333333" },
          { type: "text", text: isToday ? "今天加油！💪" : "請做好準備，加油！💪", size: "sm", color: "#999999" },
          { type: "box", layout: "vertical", spacing: "md", margin: "lg", contents: rows }
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        paddingAll: "lg",
        contents: footer
      }
    }
  };
}

// 23:00 未回報催促卡片：列出今天提醒過、但老師還沒回報的工作，每件各附一組回報按鈕
const FOLLOW_UP_MAX_TASKS = 5;

function buildFollowUpFlex(titles) {
  const tasks = [...new Set((titles || []).map(t => String(t || "").trim()).filter(Boolean))];
  const shown = tasks.slice(0, FOLLOW_UP_MAX_TASKS);

  const taskBlocks = shown.map((title, i) => {
    const reportTitle = title.slice(0, 280);
    return {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      margin: i === 0 ? "lg" : "xl",
      contents: [
        infoRow("工作", title),
        {
          type: "box",
          layout: "horizontal",
          spacing: "sm",
          contents: [
            outlineButton("尚未完成", { type: "message", label: "尚未完成", text: `未完成 ${reportTitle}` }),
            filledButton("回報已完成", { type: "message", label: "回報已完成", text: `完成 ${reportTitle}` })
          ]
        }
      ]
    };
  });

  const note = tasks.length > shown.length
    ? `另有 ${tasks.length - shown.length} 項，可直接回覆「完成 工作名稱」或「未完成 工作名稱」`
    : "也可直接回覆「完成 工作名稱」或「未完成 工作名稱」";

  return {
    type: "flex",
    altText: "⏰ 溫馨提醒：今天尚有工作進度未回報",
    contents: {
      type: "bubble",
      size: "mega",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        paddingAll: "xl",
        contents: [
          { type: "text", text: "工作進度回報提醒", weight: "bold", size: "xl", color: "#333333" },
          { type: "text", text: "老師好！今天尚有工作進度未回報，請記得回報喔😊", size: "sm", color: "#999999", wrap: true },
          ...taskBlocks,
          { type: "box", layout: "vertical", margin: "xl", contents: [infoRow("備註", note)] }
        ]
      }
    }
  };
}

module.exports = { buildReminderFlex, buildFollowUpFlex };
