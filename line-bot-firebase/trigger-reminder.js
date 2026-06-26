"use strict";

const https = require("https");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// In CI (GitHub Actions), firebase.json is gitignored — read from env vars instead
let ICAL_URL, LINE_TOKEN;
try {
  const envVars = require("./firebase.json").functions[0].environmentVariables;
  ICAL_URL = process.env.GOOGLE_CALENDAR_ICAL_URL || envVars.GOOGLE_CALENDAR_ICAL_URL;
  LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN_BOT2 || envVars.LINE_CHANNEL_ACCESS_TOKEN_BOT2;
} catch {
  ICAL_URL = process.env.GOOGLE_CALENDAR_ICAL_URL;
  LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN_BOT2;
}
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
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => resolve(chunks.join("")));
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
      if (line.startsWith("SUMMARY:")) cur.summary = line.substring(8).replace(/\\n/g, " ").replace(/\\,/g, ",").replace(/\\\\/g, "\\");
      if (line.startsWith("UID:")) cur.uid = line.substring(4).trim();
      if (line.startsWith("LOCATION:")) cur.location = line.substring(9).replace(/\\n/g, "\n").replace(/\\,/g, ",");
      if (line.startsWith("DESCRIPTION:")) cur.description = line.substring(12).replace(/\\n/g, "\n").replace(/\\,/g, ",");
      if (line.startsWith("RECURRENCE-ID")) cur.isException = true;
      if (line.startsWith("RRULE:")) cur.rrule = line.substring(6).trim();
      if (line.startsWith("EXDATE")) {
        const val = line.substring(line.indexOf(":") + 1).trim();
        if (!cur.exdates) cur.exdates = [];
        val.split(",").forEach(d => cur.exdates.push(d.trim()));
      }
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

function parseRrule(rruleStr) {
  const r = {};
  rruleStr.split(";").forEach(part => {
    const eq = part.indexOf("=");
    if (eq > 0) r[part.slice(0, eq)] = part.slice(eq + 1);
  });
  return r;
}

// Returns true if a recurring event (RRULE) occurs on targetDateStr ("YYYY-MM-DD")
function rruleOccursOn(rawDtstart, rruleStr, exdates, targetDateStr) {
  if (!rruleStr) return false;
  const rr = parseRrule(rruleStr);
  if (!rr.FREQ) return false;
  const sm = rawDtstart.match(/(\d{4})(\d{2})(\d{2})/);
  if (!sm) return false;
  const startDate = new Date(Date.UTC(+sm[1], +sm[2] - 1, +sm[3]));
  const tm = targetDateStr.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!tm) return false;
  const targetDate = new Date(Date.UTC(+tm[1], +tm[2] - 1, +tm[3]));
  if (targetDate < startDate) return false;
  if (rr.UNTIL) {
    const um = rr.UNTIL.match(/(\d{4})(\d{2})(\d{2})/);
    if (um && targetDate > new Date(Date.UTC(+um[1], +um[2] - 1, +um[3]))) return false;
  }
  if (exdates && exdates.length) {
    const tFlat = `${tm[1]}${tm[2]}${tm[3]}`;
    for (const ex of exdates) {
      const xm = ex.match(/(\d{4})(\d{2})(\d{2})/);
      if (xm && `${xm[1]}${xm[2]}${xm[3]}` === tFlat) return false;
    }
  }
  const interval = parseInt(rr.INTERVAL || "1");
  const tY = +tm[1], tM0 = +tm[2] - 1, tD = +tm[3];
  const sY = +sm[1], sM0 = +sm[2] - 1, sD = +sm[3];
  const DOW = ["SU","MO","TU","WE","TH","FR","SA"];
  switch (rr.FREQ) {
    case "DAILY":
      return Math.round((targetDate - startDate) / 86400000) % interval === 0;
    case "WEEKLY": {
      const byDays = rr.BYDAY
        ? rr.BYDAY.split(",").map(d => d.replace(/^[+-]?\d+/, "").trim())
        : [DOW[startDate.getUTCDay()]];
      if (!byDays.includes(DOW[targetDate.getUTCDay()])) return false;
      if (interval === 1) return true;
      return Math.floor((targetDate - startDate) / (7 * 86400000)) % interval === 0;
    }
    case "MONTHLY": {
      const md = (tY - sY) * 12 + (tM0 - sM0);
      if (md < 0 || md % interval !== 0) return false;
      if (rr.BYMONTHDAY) {
        const n = parseInt(rr.BYMONTHDAY);
        if (n > 0) return tD === n;
        return tD === new Date(Date.UTC(tY, tM0 + 1, 0)).getUTCDate() + n + 1;
      }
      if (rr.BYDAY) {
        const bm = rr.BYDAY.match(/^([+-]?\d*)([A-Z]{2})$/);
        if (!bm) return false;
        const nth = bm[1] ? parseInt(bm[1]) : null;
        const dn = bm[2];
        if (DOW[targetDate.getUTCDay()] !== dn) return false;
        if (nth === null) return true;
        const di = DOW.indexOf(dn);
        if (nth > 0) {
          const firstDow = new Date(Date.UTC(tY, tM0, 1)).getUTCDay();
          const firstOcc = ((di - firstDow + 7) % 7) + 1;
          return tD === firstOcc + (nth - 1) * 7;
        } else {
          const lastDay = new Date(Date.UTC(tY, tM0 + 1, 0)).getUTCDate();
          const lastDow = new Date(Date.UTC(tY, tM0, lastDay)).getUTCDay();
          const lastOcc = lastDay - ((lastDow - di + 7) % 7);
          return tD === lastOcc - (Math.abs(nth) - 1) * 7;
        }
      }
      return tD === sD;
    }
    case "YEARLY": {
      const yr = tY - sY;
      if (yr < 0 || yr % interval !== 0) return false;
      if (rr.BYMONTH && parseInt(rr.BYMONTH) - 1 !== tM0) return false;
      if (rr.BYMONTHDAY) return tD === parseInt(rr.BYMONTHDAY);
      return tM0 === sM0 && tD === sD;
    }
    default: return false;
  }
}

// Returns { names: string[] | null, cleanTitle: string }
// names=null means "everyone" ([全部] or no bracket)
function parseEventTarget(title) {
  // Normalize full-width brackets (［］ U+FF3B/FF3D, 【】 U+3010/U+3011) and strip residual iCal \n escapes
  const normalized = title
    .replace(/［/g, "[").replace(/］/g, "]")
    .replace(/【/g, "[").replace(/】/g, "]")
    .replace(/\\n/g, " ")
    .trim();
  const m = normalized.match(/^\[([^\]]+)\]\s*(.*)/);
  if (!m) return { names: null, cleanTitle: normalized };
  const inside = m[1].trim();
  const cleanTitle = m[2].trim() || normalized;
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
  const tMStr = String(tM + 1).padStart(2, "0");
  const todayStr = `${tY}-${tMStr}-${String(tD).padStart(2, "0")}`;
  const tomorrowStr = `${tY}-${tMStr}-${String(tD + 1).padStart(2, "0")}`;
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
  const exceptions = [];
  for (const e of rawEvents) {
    if (e.isException) {
      exceptions.push(e);
    } else {
      const uid = e.uid || e.summary || "";
      if (!byUid.has(uid)) byUid.set(uid, e);
    }
  }

  // Track exception dates per UID to avoid double-counting RRULE + exception
  const exceptionDatesByUid = new Map();
  for (const e of exceptions) {
    const uid = e.uid || e.summary || "";
    const d = getDateStr(e.start);
    if (d) {
      if (!exceptionDatesByUid.has(uid)) exceptionDatesByUid.set(uid, new Set());
      exceptionDatesByUid.get(uid).add(d);
    }
  }

  const allEvents = [];
  // Expand RRULE events for today through today+90 days
  const expandEnd = new Date(Date.UTC(tY, tM, tD + 90));

  for (const e of [...byUid.values(), ...exceptions]) {
    const safeId = (e.uid || e.summary || "").replace(/[.#$\[\]/@]/g, "_");

    if (e.rrule && !e.isException) {
      // Recurring base event: expand each occurrence within today..today+90
      const uid = e.uid || e.summary || "";
      const covered = exceptionDatesByUid.get(uid) || new Set();
      const cursor = new Date(Date.UTC(tY, tM, tD));
      while (cursor <= expandEnd) {
        const dStr = cursor.toISOString().substring(0, 10);
        if (!covered.has(dStr) && rruleOccursOn(e.start, e.rrule, e.exdates, dStr)) {
          allEvents.push({
            id: `${safeId}_RRULE${dStr.replace(/-/g, "")}`,
            title: e.summary || "無標題",
            start: dStr,
            startObj: new Date(dStr + "T00:00:00Z").getTime(),
            end: e.end || "",
            location: e.location || "",
            description: e.description || "",
            isAllDay: true
          });
        }
        cursor.setUTCDate(cursor.getUTCDate() + 1);
      }
    } else {
      // Non-recurring or exception event
      const dateStr = getDateStr(e.start);
      if (!dateStr) continue;
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
      const key = `${evt.id}_${evt.start}_${userId}`;
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
      msg += `\n\n若老師尚未完成，請回覆：\n「${cleanTitle}尚未完成，預計[日期]前完成」`;

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
