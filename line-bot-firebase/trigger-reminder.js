"use strict";

const https = require("https");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const envVars = require("./firebase.json").functions[0].environmentVariables;
const ICAL_URL = envVars.GOOGLE_CALENDAR_ICAL_URL;
const LINE_TOKEN = envVars.LINE_CHANNEL_ACCESS_TOKEN_BOT2;
const PROJECT = "news-english-ef2e4";

function fbGet(dbPath) {
  const raw = execSync(`firebase database:get ${dbPath} --project ${PROJECT}`, { encoding: "utf8" });
  try { return JSON.parse(raw.trim()); } catch { return null; }
}

function fbSet(dbPath, data) {
  const tmp = path.join(__dirname, "_tmp_fb.json");
  fs.writeFileSync(tmp, JSON.stringify(data));
  try {
    // Firebase CLI: database:set <path> [infile] — infile is positional, not a flag
    execSync(`firebase database:set ${dbPath} "${tmp}" --project ${PROJECT} --force`, { encoding: "utf8" });
  } finally {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
  }
}

async function fetchIcal(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function parseIcal(text) {
  const unfolded = text.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
  const lines = unfolded.split(/\r?\n/);
  const events = [];
  let cur = null;
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") { cur = {}; }
    else if (line === "END:VEVENT" && cur) { events.push(cur); cur = null; }
    else if (cur) {
      if (line.startsWith("DTSTART")) cur.start = line.substring(line.indexOf(":") + 1).trim();
      if (line.startsWith("SUMMARY:")) cur.summary = line.substring(8).replace(/\\,/g, ",").replace(/\\\\/g, "\\");
      if (line.startsWith("UID:")) cur.uid = line.substring(4).trim();
      if (line.startsWith("LOCATION:")) cur.location = line.substring(9).replace(/\\n/g, "\n").replace(/\\,/g, ",");
      if (line.startsWith("DESCRIPTION:")) cur.description = line.substring(12).replace(/\\n/g, "\n").replace(/\\,/g, ",");
      if (line.startsWith("RECURRENCE-ID")) cur.isException = true;
    }
  }
  return events;
}

function getDateStr(dtstart) {
  if (!dtstart) return null;
  const plain = dtstart.match(/(\d{4})(\d{2})(\d{2})/);
  if (plain) return `${plain[1]}-${plain[2]}-${plain[3]}`;
  return null;
}

// Returns { names: string[] | null, cleanTitle: string }
// names=null means "everyone" ([全部] or no bracket)
function parseEventTarget(title) {
  const m = title.match(/^\[([^\]]+)\]\s*(.*)/);
  if (!m) return { names: null, cleanTitle: title };
  const inside = m[1].trim();
  const cleanTitle = m[2].trim() || title;
  if (inside === "全部") return { names: null, cleanTitle };
  const names = inside.split(/[,，]\s*/).map(n => n.trim()).filter(Boolean);
  return { names, cleanTitle };
}

async function sendPush(to, text) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ to, messages: [{ type: "text", text }] });
    const req = https.request({
      hostname: "api.line.me", port: 443, path: "/v2/bot/message/push",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data, "utf8"),
        "Authorization": `Bearer ${LINE_TOKEN}`
      }
    }, res => {
      let body = "";
      res.on("data", c => body += c);
      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log(`    ✅ → ${to}`);
        } else {
          console.log(`    ❌ → ${to}: HTTP ${res.statusCode} ${body}`);
        }
        resolve();
      });
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log("=== Manual calendarReminder trigger ===");
  console.log("Time (UTC):", new Date().toISOString());

  const cacheOnly = process.argv.includes("--cache-only");
  if (cacheOnly) console.log("📦 Mode: CACHE-ONLY (no notifications will be sent)\n");

  const now = new Date();
  const taiwanNow = new Date(now.getTime() + 8 * 3600000);
  const tY = taiwanNow.getUTCFullYear(), tM = taiwanNow.getUTCMonth(), tD = taiwanNow.getUTCDate();
  const todayStr = `${tY}-${String(tM + 1).padStart(2, "0")}-${String(tD).padStart(2, "0")}`;
  const tomorrowStr = `${tY}-${String(tM + 1).padStart(2, "0")}-${String(tD + 1).padStart(2, "0")}`;
  console.log(`Taiwan today: ${todayStr}`);
  console.log(`Looking for events on: ${todayStr} (today) and ${tomorrowStr} (tomorrow)\n`);

  // 1. Fetch iCal
  console.log("[1] Fetching iCal...");
  const icalText = await fetchIcal(ICAL_URL);
  console.log(`    ${icalText.length} bytes`);
  if (icalText.length < 500) {
    console.error("    ERROR: Response too small:", icalText.substring(0, 200));
    process.exit(1);
  }

  const rawEvents = parseIcal(icalText);
  console.log(`    Parsed ${rawEvents.length} VEVENT blocks`);

  const byUid = new Map();
  for (const e of rawEvents) {
    const uid = e.uid || e.summary || "";
    if (!byUid.has(uid) || e.isException) byUid.set(uid, e);
  }

  const allEvents = [];
  for (const e of byUid.values()) {
    const dateStr = getDateStr(e.start);
    if (!dateStr) continue;
    const safeId = (e.uid || e.summary || "").replace(/[.#$\[\]/@]/g, "_");
    // Compute startObj: use time if available, else midnight UTC
    const dtmatch = e.start && e.start.match(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/);
    let startObj, isAllDay;
    if (dtmatch) {
      const [, y, m, d, h, min, s] = dtmatch;
      const isUTC = e.start.includes("Z");
      startObj = isUTC
        ? new Date(Date.UTC(+y, +m-1, +d, +h, +min, +s)).getTime() + 8 * 3600000
        : new Date(Date.UTC(+y, +m-1, +d, +h, +min, +s)).getTime();
      isAllDay = false;
    } else {
      startObj = new Date(dateStr + "T00:00:00Z").getTime();
      isAllDay = true;
    }
    allEvents.push({
      id: safeId,
      title: e.summary || "無標題",
      start: dateStr,
      startObj,
      end: e.end || "",
      location: e.location || "",
      description: e.description || "",
      isAllDay
    });
  }

  // Update Firebase calendar cache so Cloud Function can read fresh events
  console.log(`\n[UPDATE-CACHE] Saving ${allEvents.length} events to Firebase calendar cache...`);
  try {
    allEvents.sort((a, b) => a.startObj - b.startObj);
    fbSet("/calendar-cache", { timestamp: Date.now(), events: allEvents });
    console.log("    ✅ Firebase calendar cache updated");
  } catch (e) {
    console.log(`    ⚠️  Cache update failed: ${e.message.split("\n")[0]}`);
  }

  const todayEvents = allEvents.filter(e => e.start === todayStr);
  const tomorrowEvents = allEvents.filter(e => e.start === tomorrowStr);
  console.log(`\n[2] Events on ${todayStr} (today): ${todayEvents.length}`);
  todayEvents.forEach(e => console.log(`    - "${e.title}"`));
  console.log(`\n[2b] Events on ${tomorrowStr} (tomorrow): ${tomorrowEvents.length}`);
  tomorrowEvents.forEach(e => console.log(`    - "${e.title}"`));

  if (cacheOnly) {
    console.log("\n✅ Cache updated successfully (notification skipped)");
    process.exit(0);
  }

  if (todayEvents.length === 0 && tomorrowEvents.length === 0) {
    console.log("    No events, nothing to send.");
    process.exit(0);
  }

  // 2. Get teacher-mapping (name → userID)
  console.log("\n[3] Reading teacher-mapping...");
  const teacherData = fbGet("/teacher-mapping") || {};
  const nameToUserId = {};
  for (const [name, info] of Object.entries(teacherData)) {
    nameToUserId[name] = info.userId;
  }
  console.log(`    ${Object.keys(nameToUserId).length} teachers mapped`);

  // 3. Get subscribers (Set for fast lookup)
  console.log("\n[4] Reading subscribers...");
  const subsData = fbGet("/calendar-subscribers");
  if (!subsData) { console.log("    No subscribers."); process.exit(0); }
  const subscriberSet = new Set(Object.keys(subsData));
  console.log(`    ${subscriberSet.size} subscribers`);

  // 4. Get already-sent records
  console.log("\n[5] Reading sent records...");
  const sentData = fbGet("/calendar-sent") || {};
  console.log(`    ${Object.keys(sentData).length} records`);

  // 5. Send
  console.log("\n[6] Sending notifications...");
  const newSentRecords = {};

  // Combine today and tomorrow events
  const allEventsToSend = [
    ...todayEvents.map(e => ({ ...e, isToday: true })),
    ...tomorrowEvents.map(e => ({ ...e, isToday: false }))
  ];

  for (const evt of allEventsToSend) {
    const { names, cleanTitle } = parseEventTarget(evt.title);
    const dayLabel = evt.isToday ? "today" : "tomorrow";

    let targetIds;
    if (names === null) {
      targetIds = [...subscriberSet];
      console.log(`\n  Event: "${evt.title}" (${dayLabel}) → ALL (${targetIds.length} 人)`);
    } else {
      targetIds = names.map(n => nameToUserId[n]).filter(id => id && subscriberSet.has(id));
      const unknowns = names.filter(n => !nameToUserId[n]);
      if (unknowns.length > 0) console.log(`    ⚠️  Unknown names: ${unknowns.join(", ")}`);
      console.log(`\n  Event: "${evt.title}" (${dayLabel}) → [${names.join(",")}] (${targetIds.length} 人)`);
    }

    for (const userId of targetIds) {
      const key = `${evt.id}_${userId}`;
      if (sentData[key] || newSentRecords[key]) {
        console.log(`    SKIP ${userId} (already sent)`);
        continue;
      }
      let msg = evt.isToday
        ? `嗨！提醒老師，今天是【${cleanTitle}】喔！`
        : `嗨！提醒老師，記得明天是【${cleanTitle}】喔！`;
      if (evt.location) msg += `\n📍 地點：${evt.location}`;
      if (evt.description) msg += `\n📝 備註：${evt.description}`;
      msg += evt.isToday
        ? `\n\n今天加油！💪`
        : `\n\n請做好準備，加油！💪`;

      await sendPush(userId, msg);
      newSentRecords[key] = { sentAt: Date.now(), eventTitle: evt.title, eventStart: evt.start };
    }
  }

  // Batch write all sent records at once
  if (Object.keys(newSentRecords).length > 0) {
    console.log(`\n[7] Saving ${Object.keys(newSentRecords).length} sent records...`);
    const merged = { ...sentData, ...newSentRecords };
    try {
      fbSet("/calendar-sent", merged);
      console.log("    ✅ Saved");
    } catch (e) {
      console.log(`    ⚠️  DB write failed: ${e.message.split("\n")[0]}`);
    }
  }

  console.log("\n=== Done ===");
  process.exit(0);
}

main().catch(err => { console.error("FATAL:", err.message); process.exit(1); });
