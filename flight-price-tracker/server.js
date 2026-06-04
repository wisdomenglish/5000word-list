const http = require("http");
const fs = require("fs");
const path = require("path");

function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFile();

const PORT = Number(process.env.PORT || 4177);
const API_KEY = process.env.SKYSCANNER_API_KEY || "";
const BASE_URL = "https://partners.api.skyscanner.net/apiservices/v3/flights/live/search";
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => resolve(body ? JSON.parse(body) : {}));
    req.on("error", reject);
  });
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const safePath = path.normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  const requested = safePath === "/" || safePath === "\\" || safePath === ""
    ? "index.html"
    : safePath.replace(/^[/\\]/, "");
  const filePath = path.join(PUBLIC_DIR, requested);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(data);
  });
}

function toDateQuery(date) {
  return {
    year: Number(date.year),
    month: Number(date.month),
    day: Number(date.day)
  };
}

function priceToNumber(price) {
  if (!price) return null;
  if (typeof price.amount === "string") return Number(price.amount);
  if (typeof price.amount === "number") return price.amount;
  if (typeof price.raw === "number") return price.raw;
  if (typeof price.value === "number") return price.value;
  if (price.amountInMinorUnits) return Number(price.amountInMinorUnits) / 100;
  return null;
}

function getCarrierName(content, itinerary) {
  const carriers = content?.carriers || {};
  const legId = itinerary.legIds?.[0] || itinerary.legs?.[0]?.id;
  const leg = content?.legs?.[legId] || itinerary.legs?.[0];
  const segmentId = leg?.segmentIds?.[0] || leg?.segments?.[0]?.id;
  const segment = content?.segments?.[segmentId] || leg?.segments?.[0];
  const carrierId = segment?.marketingCarrierId || segment?.operatingCarrierId;
  return carriers[carrierId]?.name || carriers[carrierId]?.displayCode || "Skyscanner partner";
}

function getPlaceCode(content, placeId) {
  const place = content?.places?.[placeId];
  return place?.iata || place?.displayCode || place?.name || placeId || "--";
}

function getLegs(content, itinerary) {
  if (Array.isArray(itinerary.legs)) return itinerary.legs;
  const legs = content?.legs || {};
  return (itinerary.legIds || []).map((id) => legs[id]).filter(Boolean);
}

function getSegments(content, leg) {
  if (Array.isArray(leg?.segments)) return leg.segments;
  const segments = content?.segments || {};
  return (leg?.segmentIds || []).map((id) => segments[id]).filter(Boolean);
}

function getItinerarySegments(content, itinerary) {
  const carriers = content?.carriers || {};
  return getLegs(content, itinerary).flatMap((leg, legIndex) => {
    const segments = getSegments(content, leg);
    if (!segments.length) {
      const origin = getPlaceCode(content, leg?.originPlaceId || leg?.origin?.id);
      const destination = getPlaceCode(content, leg?.destinationPlaceId || leg?.destination?.id);
      return [`${legIndex === 0 ? "去程" : "回程"}：${origin} → ${destination}`];
    }
    return segments.map((segment, segmentIndex) => {
      const carrierId = segment.marketingCarrierId || segment.operatingCarrierId;
      const carrier = carriers[carrierId]?.name || carriers[carrierId]?.displayCode || "航空公司待確認";
      const origin = getPlaceCode(content, segment.originPlaceId || segment.origin?.id);
      const destination = getPlaceCode(content, segment.destinationPlaceId || segment.destination?.id);
      const label = legIndex === 0 ? "去程" : "回程";
      return `${label} ${segmentIndex + 1}：${origin} → ${destination}（${carrier}）`;
    });
  });
}

function getFlightPlan(content, itinerary) {
  const legs = getLegs(content, itinerary);
  if (!legs.length) return "航段資料待確認";
  return legs.map((leg, index) => {
    const segments = getSegments(content, leg);
    const stops = Math.max(segments.length - 1, 0);
    const label = index === 0 ? "去程" : "回程";
    return `${label}${stops === 0 ? "直飛" : `${stops} 次轉機`}`;
  }).join("；");
}

function getBookingInfo(content, itinerary) {
  const option = itinerary.pricingOptions?.[0] || itinerary.pricing_options?.[0] || {};
  const agentId = option.agentIds?.[0] || option.agent_ids?.[0] || option.items?.[0]?.agentId;
  const agent = content?.agents?.[agentId];
  return {
    source: agent?.name || agent?.displayName || "Skyscanner partner",
    deepLink: option.deepLink || option.deeplink || itinerary.deepLink || ""
  };
}

function extractItineraries(data) {
  const content = data.content?.results || data.content || {};
  if (Array.isArray(data.itineraries)) return data.itineraries.map((item) => ({ item, content }));
  if (Array.isArray(content.itineraries)) return content.itineraries.map((item) => ({ item, content }));
  if (content.itineraries && typeof content.itineraries === "object") {
    return Object.values(content.itineraries).map((item) => ({ item, content }));
  }
  return [];
}

function transformSkyscannerResponse(data, route, criteria) {
  const itineraries = extractItineraries(data);
  const priced = itineraries
    .map(({ item, content }) => {
      const price = priceToNumber(item.price || item.pricingOptions?.[0]?.price);
      return price ? { item, content, price } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.price - b.price);

  if (!priced.length) return null;

  const best = priced[0];
  const booking = getBookingInfo(best.content, best.item);
  const prices = priced.slice(0, 12).map((entry) => Math.round(entry.price));
  const recentLow = Math.min(...prices);
  const recentHigh = Math.max(...prices);
  const current = Math.round(best.price);
  const distance = (current - recentLow) / Math.max(recentHigh - recentLow, 1);

  return {
    id: `${criteria.origin}-${route.airport}-${route.departDate.year}-${route.departDate.month}-${route.departDate.day}`,
    source: "skyscanner",
    country: criteria.countryLabel,
    city: route.city,
    airport: route.airport,
    origin: criteria.origin,
    airline: getCarrierName(best.content, best.item),
    ticketState: data.status === "RESULT_STATUS_COMPLETE" || data.status === "completed"
      ? "可訂，Skyscanner 已完成搜尋"
      : "可訂，Skyscanner 仍在更新結果",
    flightPlan: getFlightPlan(best.content, best.item),
    bookingSource: booking.source,
    deepLink: booking.deepLink,
    segments: getItinerarySegments(best.content, best.item),
    dates: `${route.departDate.month}/${route.departDate.day} - ${route.returnDate.month}/${route.returnDate.day}`,
    days: criteria.days,
    history: prices.length > 1 ? prices : Array.from({ length: 12 }, () => current),
    recentLow,
    recentHigh,
    current,
    lowScore: Math.round((1 - distance) * 100)
  };
}

async function skyscannerCreate(route, criteria) {
  const body = {
    query: {
      market: "TW",
      locale: "zh-TW",
      currency: "TWD",
      queryLegs: [
        {
          originPlaceId: { iata: criteria.origin },
          destinationPlaceId: { iata: route.airport },
          date: toDateQuery(route.departDate)
        },
        {
          originPlaceId: { iata: route.airport },
          destinationPlaceId: { iata: criteria.origin },
          date: toDateQuery(route.returnDate)
        }
      ],
      adults: 1,
      cabinClass: "CABIN_CLASS_ECONOMY"
    }
  };

  const response = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || data.error || `Skyscanner create ${response.status}`);
  }
  return data;
}

async function skyscannerPoll(sessionToken) {
  if (!sessionToken) return null;
  const response = await fetch(`${BASE_URL}/poll/${encodeURIComponent(sessionToken)}`, {
    method: "POST",
    headers: { "x-api-key": API_KEY }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || data.error || `Skyscanner poll ${response.status}`);
  }
  return data;
}

async function searchRoute(route, criteria) {
  const created = await skyscannerCreate(route, criteria);
  const token = created.sessionToken || created.session?.token;
  let bestData = created;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    if (!token || bestData.status === "RESULT_STATUS_COMPLETE" || bestData.status === "completed") break;
    await new Promise((resolve) => setTimeout(resolve, 900));
    bestData = await skyscannerPoll(token);
  }

  return transformSkyscannerResponse(bestData, route, criteria);
}

async function handleFlightSearch(req, res) {
  if (!API_KEY) {
    sendJson(res, 503, { message: "SKYSCANNER_API_KEY is not set. Falling back to mock data." });
    return;
  }

  try {
    const criteria = await readBody(req);
    const routes = Array.isArray(criteria.routes) ? criteria.routes.slice(0, 8) : [];
    if (!routes.length) {
      sendJson(res, 400, { message: "No routes provided." });
      return;
    }

    const settled = await Promise.allSettled(routes.map((route) => searchRoute(route, criteria)));
    const flights = settled
      .filter((result) => result.status === "fulfilled" && result.value)
      .map((result) => result.value)
      .sort((a, b) => a.current - b.current);

    sendJson(res, 200, { source: "skyscanner", flights });
  } catch (error) {
    sendJson(res, 502, { message: error.message || "Skyscanner search failed." });
  }
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/flights/search") {
    handleFlightSearch(req, res);
    return;
  }
  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }
  res.writeHead(405);
  res.end("Method not allowed");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Flight Pulse running at http://127.0.0.1:${PORT}`);
  console.log(API_KEY ? "Skyscanner adapter enabled." : "SKYSCANNER_API_KEY missing; frontend will use mock fallback.");
});
