const destinations = {
  "Japan": [
    { city: "東京羽田機場", airport: "HND", base: 9100, airlines: ["STARLUX", "EVA Air", "Japan Airlines"] },
    { city: "東京成田機場", airport: "NRT", base: 8300, airlines: ["STARLUX", "EVA Air", "Scoot"] },
    { city: "大阪關西機場", airport: "KIX", base: 7600, airlines: ["Peach", "China Airlines", "Tigerair Taiwan"] },
    { city: "大阪伊丹機場", airport: "ITM", base: 9800, airlines: ["Japan Airlines", "ANA", "EVA Air"] },
    { city: "名古屋中部機場", airport: "NGO", base: 7800, airlines: ["STARLUX", "China Airlines", "Japan Airlines"] },
    { city: "札幌新千歲機場", airport: "CTS", base: 10400, airlines: ["Scoot", "EVA Air", "ANA"] },
    { city: "札幌丘珠機場", airport: "OKD", base: 12200, airlines: ["Japan Airlines", "ANA", "EVA Air"] },
    { city: "函館機場", airport: "HKD", base: 11300, airlines: ["ANA", "Japan Airlines", "STARLUX"] },
    { city: "旭川機場", airport: "AKJ", base: 11900, airlines: ["Japan Airlines", "ANA", "Tigerair Taiwan"] },
    { city: "釧路機場", airport: "KUH", base: 12600, airlines: ["ANA", "Japan Airlines", "EVA Air"] },
    { city: "帶廣機場", airport: "OBO", base: 12800, airlines: ["Japan Airlines", "ANA", "STARLUX"] },
    { city: "女滿別機場", airport: "MMB", base: 13100, airlines: ["Japan Airlines", "ANA", "EVA Air"] },
    { city: "稚內機場", airport: "WKJ", base: 14200, airlines: ["ANA", "Japan Airlines", "EVA Air"] },
    { city: "青森機場", airport: "AOJ", base: 11600, airlines: ["Japan Airlines", "ANA", "STARLUX"] },
    { city: "三澤機場", airport: "MSJ", base: 12300, airlines: ["Japan Airlines", "ANA", "China Airlines"] },
    { city: "秋田機場", airport: "AXT", base: 11800, airlines: ["ANA", "Japan Airlines", "STARLUX"] },
    { city: "仙台機場", airport: "SDJ", base: 9300, airlines: ["EVA Air", "STARLUX", "Peach"] },
    { city: "新潟機場", airport: "KIJ", base: 10400, airlines: ["Japan Airlines", "ANA", "Tigerair Taiwan"] },
    { city: "富山機場", airport: "TOY", base: 11100, airlines: ["ANA", "Japan Airlines", "EVA Air"] },
    { city: "小松金澤機場", airport: "KMQ", base: 10100, airlines: ["EVA Air", "Japan Airlines", "ANA"] },
    { city: "靜岡機場", airport: "FSZ", base: 9400, airlines: ["China Airlines", "ANA", "STARLUX"] },
    { city: "神戶機場", airport: "UKB", base: 8700, airlines: ["ANA", "Skymark", "Japan Airlines"] },
    { city: "岡山機場", airport: "OKJ", base: 8900, airlines: ["Tigerair Taiwan", "EVA Air", "Japan Airlines"] },
    { city: "廣島機場", airport: "HIJ", base: 9200, airlines: ["China Airlines", "Japan Airlines", "ANA"] },
    { city: "米子機場", airport: "YGJ", base: 10900, airlines: ["ANA", "Japan Airlines", "EVA Air"] },
    { city: "出雲機場", airport: "IZO", base: 11200, airlines: ["Japan Airlines", "ANA", "STARLUX"] },
    { city: "高松機場", airport: "TAK", base: 8700, airlines: ["China Airlines", "Japan Airlines", "ANA"] },
    { city: "松山機場", airport: "MYJ", base: 9100, airlines: ["EVA Air", "Japan Airlines", "ANA"] },
    { city: "高知機場", airport: "KCZ", base: 10400, airlines: ["Japan Airlines", "ANA", "STARLUX"] },
    { city: "德島機場", airport: "TKS", base: 10200, airlines: ["Japan Airlines", "ANA", "EVA Air"] },
    { city: "福岡機場", airport: "FUK", base: 6900, airlines: ["Tigerair Taiwan", "EVA Air", "STARLUX"] },
    { city: "北九州機場", airport: "KKJ", base: 8200, airlines: ["StarFlyer", "Japan Airlines", "ANA"] },
    { city: "長崎機場", airport: "NGS", base: 9300, airlines: ["Japan Airlines", "ANA", "EVA Air"] },
    { city: "熊本機場", airport: "KMJ", base: 8800, airlines: ["China Airlines", "Japan Airlines", "ANA"] },
    { city: "大分機場", airport: "OIT", base: 9600, airlines: ["Japan Airlines", "ANA", "STARLUX"] },
    { city: "宮崎機場", airport: "KMI", base: 9800, airlines: ["ANA", "Japan Airlines", "EVA Air"] },
    { city: "鹿兒島機場", airport: "KOJ", base: 9400, airlines: ["China Airlines", "Japan Airlines", "ANA"] },
    { city: "沖繩那霸機場", airport: "OKA", base: 7200, airlines: ["Tigerair Taiwan", "Peach", "EVA Air"] },
    { city: "石垣機場", airport: "ISG", base: 10800, airlines: ["Japan Airlines", "ANA", "China Airlines"] },
    { city: "宮古機場", airport: "MMY", base: 11200, airlines: ["ANA", "Japan Airlines", "EVA Air"] }
  ],
  "South Korea": [
    { city: "首爾仁川機場", airport: "ICN", base: 6400, airlines: ["T'way Air", "Korean Air", "EVA Air"] },
    { city: "釜山金海機場", airport: "PUS", base: 5900, airlines: ["Air Busan", "Jeju Air", "China Airlines"] }
  ],
  "Thailand": [
    { city: "曼谷素萬那普機場", airport: "BKK", base: 7100, airlines: ["Thai VietJet", "Thai Airways", "STARLUX"] },
    { city: "清邁機場", airport: "CNX", base: 8400, airlines: ["Thai AirAsia", "EVA Air", "China Airlines"] }
  ],
  "Vietnam": [
    { city: "峴港機場", airport: "DAD", base: 5600, airlines: ["VietJet Air", "STARLUX", "EVA Air"] },
    { city: "胡志明市新山一機場", airport: "SGN", base: 6200, airlines: ["Vietnam Airlines", "China Airlines", "VietJet Air"] }
  ],
  "Singapore": [
    { city: "新加坡樟宜機場", airport: "SIN", base: 7900, airlines: ["Scoot", "Singapore Airlines", "STARLUX"] }
  ],
  "Malaysia": [
    { city: "吉隆坡機場", airport: "KUL", base: 6500, airlines: ["AirAsia", "Malaysia Airlines", "China Airlines"] },
    { city: "檳城機場", airport: "PEN", base: 7600, airlines: ["AirAsia", "STARLUX", "Malaysia Airlines"] }
  ],
  "United States": [
    { city: "洛杉磯機場", airport: "LAX", base: 24500, airlines: ["EVA Air", "China Airlines", "STARLUX"] },
    { city: "舊金山機場", airport: "SFO", base: 26800, airlines: ["United", "EVA Air", "China Airlines"] },
    { city: "紐約甘迺迪機場", airport: "JFK", base: 33200, airlines: ["EVA Air", "Cathay Pacific", "China Airlines"] }
  ],
  "France": [
    { city: "巴黎戴高樂機場", airport: "CDG", base: 28600, airlines: ["EVA Air", "Air France", "Turkish Airlines"] }
  ]
};

const countryLabels = {
  "Japan": "日本",
  "South Korea": "韓國",
  "Thailand": "泰國",
  "Vietnam": "越南",
  "Singapore": "新加坡",
  "Malaysia": "馬來西亞",
  "United States": "美國",
  "France": "法國"
};

const monthInput = document.querySelector("#month");
const countrySelect = document.querySelector("#country");
const destinationAirportSelect = document.querySelector("#destinationAirport");
const form = document.querySelector("#searchForm");
const cards = document.querySelector("#cards");
const template = document.querySelector("#flightCardTemplate");
const resultsTitle = document.querySelector("#resultsTitle");
const buySignal = document.querySelector("#buySignal");
const signalText = document.querySelector("#signalText");
const scoreText = document.querySelector("#scoreText");
const scoreBar = document.querySelector("#scoreBar");
const alertsList = document.querySelector("#alertsList");
const watchCount = document.querySelector("#watchCount");
const lowestRoute = document.querySelector("#lowestRoute");
const clearAlerts = document.querySelector("#clearAlerts");
const simulateDrop = document.querySelector("#simulateDrop");

const currency = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0
});

let currentResults = [];
let alerts = JSON.parse(localStorage.getItem("flightPulseAlerts") || "[]");

function setDefaultMonth() {
  const now = new Date();
  now.setMonth(now.getMonth() + 1);
  monthInput.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function seededNoise(seed) {
  let value = 0;
  for (let index = 0; index < seed.length; index += 1) {
    value = (value * 31 + seed.charCodeAt(index)) % 9973;
  }
  return value / 9973;
}

function getSeasonFactor(month) {
  const high = [1, 2, 7, 8, 12];
  const shoulder = [3, 4, 10, 11];
  if (high.includes(month)) return 1.18;
  if (shoulder.includes(month)) return 0.96;
  return 0.9;
}

function buildHistory(route, country, month, days, origin) {
  return Array.from({ length: 12 }, (_, index) => {
    const noise = seededNoise(`${country}-${route.airport}-${month}-${days}-${origin}-${index}`);
    const wave = Math.sin((index + month) * 0.85) * 0.08;
    const weekendPressure = days <= 4 ? 1.08 : 1;
    const price = route.base * getSeasonFactor(month) * weekendPressure * (0.88 + noise * 0.28 + wave);
    return Math.round(price / 100) * 100;
  });
}

function getCandidateDate(monthValue, days, index) {
  const [year, month] = monthValue.split("-").map(Number);
  const startDay = Math.min(3 + index * 5, new Date(year, month, 0).getDate() - days);
  const depart = new Date(year, month - 1, Math.max(startDay, 1));
  const back = new Date(depart);
  back.setDate(back.getDate() + days);
  return { depart, back };
}

function formatDateRange(depart, back) {
  const format = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
  return `${format(depart)} - ${format(back)}`;
}

function isoDateParts(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
}

function buildMockFlights({ country, destinationAirport, monthValue, days, origin }) {
  const month = Number(monthValue.split("-")[1]);
  const routes = destinationAirport === "ALL"
    ? destinations[country]
    : destinations[country].filter((route) => route.airport === destinationAirport);

  return routes.map((route, index) => {
    const history = buildHistory(route, country, month, days, origin);
    const recentLow = Math.min(...history);
    const recentHigh = Math.max(...history);
    const current = history.at(-1);
    const distance = (current - recentLow) / Math.max(recentHigh - recentLow, 1);
    const lowScore = Math.round((1 - distance) * 100);
    const airline = route.airlines[Math.floor(seededNoise(`${route.city}-${days}-${month}`) * route.airlines.length)];
    const { depart, back } = getCandidateDate(monthValue, days, index);
    const mix = seededNoise(`${route.airport}-${monthValue}-${origin}-mix`);
    const via = mix > 0.72 ? "香港 HKG" : mix > 0.52 ? "首爾 ICN" : "";
    const segments = via
      ? [
          `${origin} → ${via.split(" ")[1]}（${airline}）`,
          `${via.split(" ")[1]} → ${route.airport}（合作航空）`,
          `${route.airport} → ${origin}（${airline}）`
        ]
      : [
          `${origin} → ${route.airport} 直飛（${airline}）`,
          `${route.airport} → ${origin} 直飛（${airline}）`
        ];
    return {
      id: `${origin}-${route.airport}-${monthValue}-${days}`,
      source: "mock",
      country: countryLabels[country] || country,
      city: route.city,
      airport: route.airport,
      origin,
      airline,
      ticketState: current <= recentLow * 1.03 ? "可訂，價格接近近期低點" : "可訂，價格仍在波動",
      flightPlan: via ? `去程 1 次轉機：${via}；回程直飛` : "來回直飛",
      bookingSource: "模擬供應商",
      deepLink: "",
      segments,
      dates: formatDateRange(depart, back),
      days,
      history,
      recentLow,
      recentHigh,
      current,
      lowScore
    };
  }).sort((a, b) => a.current - b.current);
}

async function searchWithAdapter(criteria) {
  const routes = criteria.destinationAirport === "ALL"
    ? destinations[criteria.country].slice(0, 8)
    : destinations[criteria.country].filter((route) => route.airport === criteria.destinationAirport);

  const payload = {
    ...criteria,
    countryLabel: countryLabels[criteria.country] || criteria.country,
    routes: routes.map((route, index) => {
      const { depart, back } = getCandidateDate(criteria.monthValue, criteria.days, index);
      return {
        city: route.city,
        airport: route.airport,
        departDate: isoDateParts(depart),
        returnDate: isoDateParts(back)
      };
    })
  };

  try {
    const response = await fetch("/api/flights/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API ${response.status}`);
    }

    const data = await response.json();
    if (!data.flights?.length) {
      throw new Error(data.message || "No live prices");
    }
    return data.flights;
  } catch (error) {
    console.warn("Using mock flight data:", error);
    notify("顯示示範票價", "尚未設定 Skyscanner API key，先用完整示範資料呈現版面。");
    return buildMockFlights(criteria);
  }
}

function getStatus(flight) {
  if (flight.current <= flight.recentLow * 1.03) {
    return { text: "近期低點", className: "good" };
  }
  if (flight.current <= flight.recentLow * 1.12) {
    return { text: "可觀察", className: "watch" };
  }
  return { text: "偏高", className: "high" };
}

function renderDestinationAirports(country) {
  const options = destinations[country].map((route) => {
    const label = `${route.city} ${route.airport}`;
    return `<option value="${route.airport}">${label}</option>`;
  });
  destinationAirportSelect.innerHTML = `<option value="ALL">全部可查機場</option>${options.join("")}`;
}

function renderCards(results) {
  cards.innerHTML = "";
  results.forEach((flight) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const status = getStatus(flight);
    node.querySelector(".routeTag").textContent = `${flight.origin} -> ${flight.airport}`;
    node.querySelector(".routeName").textContent = `${flight.country} ${flight.city}`;
    node.querySelector(".statusBadge").textContent = status.text;
    node.querySelector(".statusBadge").classList.add(status.className);
    node.querySelector(".price").textContent = currency.format(flight.current);
    node.querySelector(".range").textContent = `近期區間 ${currency.format(flight.recentLow)} - ${currency.format(flight.recentHigh)}`;
    node.querySelector(".airline").textContent = flight.airline;
    node.querySelector(".dates").textContent = `${flight.dates}，${flight.days} 天`;
    node.querySelector(".recentLow").textContent = currency.format(flight.recentLow);
    node.querySelector(".ticketState").textContent = flight.ticketState || "可訂，等待供應商確認";
    node.querySelector(".flightPlan").textContent = flight.flightPlan || "航段資料待確認";
    node.querySelector(".bookingSource").textContent = flight.bookingSource || "Skyscanner partner";
    node.querySelector(".targetPrice").value = Math.round((flight.recentLow * 1.02) / 100) * 100;

    const itinerary = node.querySelector(".itinerary");
    const segments = flight.segments?.length ? flight.segments : [flight.flightPlan || `${flight.origin} → ${flight.airport}`];
    itinerary.innerHTML = segments.map((segment, index) => `
      <div class="itinerary-row">
        <strong>${index + 1}</strong>
        <span>${segment}</span>
      </div>
    `).join("");

    const bookingLink = node.querySelector(".bookingLink");
    if (flight.deepLink) {
      bookingLink.href = flight.deepLink;
      bookingLink.textContent = "前往 Skyscanner 訂票頁";
      bookingLink.classList.remove("is-disabled");
    } else {
      bookingLink.href = "#";
      bookingLink.textContent = flight.source === "skyscanner" ? "訂票連結待供應商回傳" : "模擬資料無訂票連結";
      bookingLink.classList.add("is-disabled");
    }

    const sparkline = node.querySelector(".sparkline");
    flight.history.forEach((price) => {
      const bar = document.createElement("span");
      const height = 18 + ((price - flight.recentLow) / Math.max(flight.recentHigh - flight.recentLow, 1)) * 32;
      bar.style.height = `${height}px`;
      sparkline.append(bar);
    });

    node.querySelector(".alert-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const targetPrice = Number(node.querySelector(".targetPrice").value);
      addAlert(flight, targetPrice);
    });

    cards.append(node);
  });
}

function renderInsights(results, country, monthValue, days) {
  const best = results[0];
  const averageScore = Math.round(results.reduce((sum, item) => sum + item.lowScore, 0) / results.length);
  const signal = averageScore >= 78 ? "可以出手" : averageScore >= 55 ? "先追蹤" : "暫緩購買";
  const sourceText = best.source === "skyscanner" ? "Skyscanner 即時價格" : "模擬價格";
  buySignal.textContent = signal;
  signalText.textContent = `${sourceText}：${countryLabels[country] || country} ${monthValue}、${days} 天，目前最低為 ${best.city} ${currency.format(best.current)}，${getStatus(best).text}。`;
  scoreText.textContent = `${averageScore}/100`;
  scoreBar.style.width = `${averageScore}%`;
  lowestRoute.textContent = `${best.city} ${currency.format(best.current)}`;
}

function saveAlerts() {
  localStorage.setItem("flightPulseAlerts", JSON.stringify(alerts));
}

function renderAlerts() {
  watchCount.textContent = alerts.length;
  if (!alerts.length) {
    alertsList.className = "alerts-empty";
    alertsList.textContent = "還沒有提醒。先查詢航班，再設定目標價。";
    return;
  }

  alertsList.className = "";
  alertsList.innerHTML = alerts.map((alert) => `
    <div class="alert-item">
      <strong>${alert.city} ${currency.format(alert.targetPrice)}</strong><br />
      <span>${alert.route} | 目前 ${currency.format(alert.current)} | ${alert.dates}</span>
    </div>
  `).join("");
}

async function addAlert(flight, targetPrice) {
  const alert = {
    id: `${flight.id}-${targetPrice}`,
    city: flight.city,
    route: `${flight.origin} -> ${flight.airport}`,
    targetPrice,
    current: flight.current,
    dates: flight.dates
  };
  alerts = [alert, ...alerts.filter((item) => item.id !== alert.id)].slice(0, 8);
  saveAlerts();
  renderAlerts();

  if ("Notification" in window && Notification.permission === "default") {
    await Notification.requestPermission();
  }
  notify(`已建立 ${flight.city} 降價提醒`, `目標價 ${currency.format(targetPrice)}，目前 ${currency.format(flight.current)}`);
}

function notify(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
    return;
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = `${title}：${body}`;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 3600);
}

function simulatePriceDrop() {
  if (!alerts.length) {
    notify("尚未設定提醒", "請先查詢航班並設定目標價。");
    return;
  }

  const matched = alerts.find((alert) => alert.targetPrice >= Math.round(alert.current * 0.94));
  if (matched) {
    notify("票價已接近你的目標", `${matched.city} 模擬降至 ${currency.format(Math.round(matched.current * 0.94))}`);
  } else {
    notify("目前尚未達標", "檢查完成，還沒有低於目標價的航班。");
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const criteria = {
    country: data.get("country"),
    destinationAirport: data.get("destinationAirport"),
    monthValue: data.get("month"),
    days: Number(data.get("days")),
    origin: data.get("origin")
  };

  cards.innerHTML = `<div class="empty-state"><strong>正在向 Skyscanner 掃描票價</strong><p>若尚未設定 API key，系統會自動改用本機模擬資料。</p></div>`;
  const destinationLabel = criteria.destinationAirport === "ALL" ? "全部可查機場" : criteria.destinationAirport;
  resultsTitle.textContent = `${countryLabels[criteria.country] || criteria.country} ${destinationLabel} ${criteria.monthValue}，${criteria.days} 天`;
  currentResults = await searchWithAdapter(criteria);
  renderCards(currentResults);
  renderInsights(currentResults, criteria.country, criteria.monthValue, criteria.days);
});

countrySelect.addEventListener("change", () => {
  renderDestinationAirports(countrySelect.value);
});

clearAlerts.addEventListener("click", () => {
  alerts = [];
  saveAlerts();
  renderAlerts();
});

simulateDrop.addEventListener("click", simulatePriceDrop);

setDefaultMonth();
renderDestinationAirports(countrySelect.value);
renderAlerts();
