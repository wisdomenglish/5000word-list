// build-levels.mjs — 把官方參考詞彙表(level-ref.txt)的 Level 1-6 比對進 vocabulary-data.js
// 用法: node build-levels.mjs
import fs from 'fs';

const REF = 'level-ref.txt';
const VOCAB = 'vocabulary-data.js';

// ---- 1. 讀官方對照表，建 variant -> level map ----
const refLines = fs.readFileSync(REF, 'utf8').split(/\r?\n/);
const level = new Map();          // key(lower) -> level number
function put(k, lv) {
  k = k.trim().toLowerCase();
  if (!k) return;
  if (!level.has(k) || lv < level.get(k)) level.set(k, lv); // 較低級別優先
}
function expand(entry) {
  // entry 可能含 "/", "(ment)", "(s)", 空白
  const out = new Set();
  let e = entry.trim();
  // 處理括號: agree(ment) -> agree, agreement ; chopstick(s) -> chopstick, chopsticks
  const m = e.match(/^([^()]+)\(([^()]+)\)([^()]*)$/);
  if (m) {
    out.add(m[1] + (m[3] || ''));            // 去掉括號: agree
    out.add(m[1] + m[2] + (m[3] || ''));     // 接字尾: agreement
    out.add(m[2] + (m[3] || ''));            // 括號內為完整字: argue(argument)->argument
  } else {
    out.add(e);
  }
  // 處理斜線變體: a/an, actor/actress, advertise(ment)/ad
  const result = new Set();
  for (const v of out) {
    for (const part of v.split('/')) result.add(part.trim());
  }
  return [...result].filter(Boolean);
}
let refCount = 0;
for (const line of refLines) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  // 格式: "<entry>\t<level>" 或 "<entry> <level>"
  const mm = t.match(/^(.*?)[\s\t]+([1-6])$/);
  if (!mm) { console.warn('skip ref line:', t); continue; }
  const entry = mm[1], lv = +mm[2];
  refCount++;
  for (const v of expand(entry)) put(v, lv);
}

// ---- 2. lemmatize: 衍生形 -> 找字根的 level ----
function candidates(w) {
  w = w.toLowerCase();
  const c = new Set([w]);
  const add = s => { if (s && s.length >= 2) c.add(s); };
  // 複數/三單
  if (w.endsWith('ies')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('es')) { add(w.slice(0, -2)); add(w.slice(0, -1)); }
  if (w.endsWith('s')) add(w.slice(0, -1));
  // 過去式/過去分詞
  if (w.endsWith('ied')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('ed')) {
    add(w.slice(0, -2)); add(w.slice(0, -1));
    if (w.length > 4 && w[w.length-3] === w[w.length-4]) add(w.slice(0, -3)); // stopped->stop
  }
  // 進行式
  if (w.endsWith('ing')) {
    add(w.slice(0, -3)); add(w.slice(0, -3) + 'e');
    if (w.length > 5 && w[w.length-4] === w[w.length-5]) add(w.slice(0, -4)); // running->run
  }
  // 副詞/名詞化
  if (w.endsWith('ily')) add(w.slice(0, -3) + 'y');   // happily->happy
  if (w.endsWith('ly')) add(w.slice(0, -2));          // quickly->quick
  if (w.endsWith('iness')) add(w.slice(0, -5) + 'y');
  if (w.endsWith('ness')) add(w.slice(0, -4));
  if (w.endsWith('less')) add(w.slice(0, -4));
  if (w.endsWith('ful')) add(w.slice(0, -3));
  if (w.endsWith('ment')) add(w.slice(0, -4));
  if (w.endsWith('able')) add(w.slice(0, -4)); else if (w.endsWith('ible')) add(w.slice(0, -4));
  // 比較級/最高級
  if (w.endsWith('iest')) add(w.slice(0, -4) + 'y');
  if (w.endsWith('est')) { add(w.slice(0, -3)); add(w.slice(0, -2)); }
  if (w.endsWith('ier')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('er')) { add(w.slice(0, -2)); add(w.slice(0, -1)); }
  // 前綴否定/重複
  for (const p of ['un', 'im', 'in', 'ir', 'il', 'dis', 're', 'non']) {
    if (w.startsWith(p) && w.length - p.length >= 3) add(w.slice(p.length));
  }
  return [...c];
}
function lookup(w) {
  const wl = w.toLowerCase();
  if (level.has(wl)) return { lv: level.get(wl), how: 'direct' };
  for (const cand of candidates(wl)) {
    if (cand !== wl && level.has(cand)) return { lv: level.get(cand), how: 'derived:' + cand };
  }
  return { lv: 0, how: 'none' };
}

// ---- 3. 讀 vocabulary-data.js ----
const raw = fs.readFileSync(VOCAB, 'utf8');
const arrStr = raw.slice(raw.indexOf('['), raw.lastIndexOf(']') + 1);
const WORDS = JSON.parse(arrStr);

// ---- 4. 比對 ----
const stat = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };
const unmatched = [], derived = [];
for (const o of WORDS) {
  const r = lookup(o.w);
  o.lv = r.lv;
  stat[r.lv]++;
  if (r.how === 'none') unmatched.push(o.w);
  else if (r.how.startsWith('derived')) derived.push(o.w + '  ←  ' + r.how.slice(8));
}

// ---- 5. 寫回 vocabulary-data.js (備份原檔) ----
if (!fs.existsSync(VOCAB + '.bak')) fs.copyFileSync(VOCAB, VOCAB + '.bak');
const body = WORDS.map(o => {
  const obj = { w: o.w, z: o.z, p: o.p };
  if (o.lv > 0) obj.lv = o.lv;   // lv=0（官方表查無）不標記
  return JSON.stringify(obj);
}).join(',');
fs.writeFileSync(VOCAB, 'const WORDS = [' + body + '];\n', 'utf8');

// ---- 6. 寫報告 ----
const lines = [];
lines.push('# 5000單字 vs 大考中心參考詞彙表(111起) 核對報告');
lines.push('');
lines.push('官方對照表載入 entry 數: ' + refCount + '（展開後 key 數: ' + level.size + '）');
lines.push('App 單字總數: ' + WORDS.length);
lines.push('');
lines.push('## 各級別分佈（含衍生形繼承字根級別）');
for (let i = 1; i <= 6; i++) lines.push('Level ' + i + ': ' + stat[i]);
lines.push('未列入官方表(lv=0): ' + stat[0]);
lines.push('');
lines.push('## 衍生形對應字根 (' + derived.length + ')');
lines.push(...derived);
lines.push('');
lines.push('## 官方表查無、未標級別的單字 (' + unmatched.length + ')');
lines.push(...unmatched);
fs.writeFileSync('level-report.txt', lines.join('\n'), 'utf8');

console.log('完成。Level分佈:', stat);
console.log('衍生對應:', derived.length, '／ 未match:', unmatched.length);
console.log('已寫: vocabulary-data.js (備份 .bak)、level-report.txt');
