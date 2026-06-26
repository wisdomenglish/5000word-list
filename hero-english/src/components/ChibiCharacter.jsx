import { getSkinTier } from '../utils/characterTier';

// ── Q 版（chibi）SVG 角色 ────────────────────────────────────────────────────
// 取代舊的 16×16 像素 PNG（PixelCharacter）。
// Props 與 PixelCharacter 相同：classId / level / scale / animate / grayscale
// 寬 = scale*16，高 = 寬*1.16（含腳下陰影）。

const OUT  = '#4A332A';   // 外框線
const SKIN = '#FFD9B8';   // 膚色
const SKIN_SHADE = '#F5C29A';

const CSS = `
@keyframes chibiBlink { 0%,90%,100%{transform:scaleY(1)} 94%{transform:scaleY(0.12)} }
@keyframes chibiBob   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4.5px)} }
@keyframes chibiSparkle { 0%,100%{opacity:.2;transform:scale(.6)} 50%{opacity:1;transform:scale(1.15)} }
@keyframes chibiStepL   { 0%,50%,100%{transform:translateY(0)} 25%{transform:translateY(-6px)} }
@keyframes chibiStepR   { 0%,50%,100%{transform:translateY(0)} 75%{transform:translateY(-6px)} }
@keyframes chibiWalkBob { 0%,50%,100%{transform:translateY(0)} 25%,75%{transform:translateY(-3px)} }
@keyframes chibiWaddle  { 0%,100%{transform:rotate(-2.5deg)} 50%{transform:rotate(2.5deg)} }
.chibi-walking .chibi-foot-l { animation: chibiStepL 0.6s linear infinite; transform-box: fill-box; transform-origin: center; }
.chibi-walking .chibi-foot-r { animation: chibiStepR 0.6s linear infinite; transform-box: fill-box; transform-origin: center; }
.chibi-walking .chibi-waddle { animation: chibiWaddle 1.2s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 92%; }
.chibi-walking .chibi-walk-bob { animation: chibiWalkBob 0.6s linear infinite; }
@keyframes chibiTierGlow {
  0%   { filter: drop-shadow(0 0 6px #A855F7) drop-shadow(0 0 14px #A855F7AA); }
  25%  { filter: drop-shadow(0 0 6px #3B82F6) drop-shadow(0 0 14px #3B82F6AA); }
  50%  { filter: drop-shadow(0 0 6px #22C55E) drop-shadow(0 0 14px #22C55EAA); }
  75%  { filter: drop-shadow(0 0 6px #F59E0B) drop-shadow(0 0 14px #F59E0BAA); }
  100% { filter: drop-shadow(0 0 6px #A855F7) drop-shadow(0 0 14px #A855F7AA); }
}
.chibi-eyes { animation: chibiBlink 3.6s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.chibi-sparkle { animation: chibiSparkle 1.6s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
`;

const TIER_STYLE = {
  1: { filter: 'saturate(0.55) brightness(0.85)' },
  2: {},
  3: { filter: 'drop-shadow(0 0 6px #F59E0B) drop-shadow(0 0 13px #F59E0BAA)' },
  4: { animation: 'chibiTierGlow 2.4s linear infinite' },
};

// ── 共用零件 ──────────────────────────────────────────────────────────────────

function Face({ blushInset = 0, brows = null }) {
  const bx = 31.5 + blushInset;
  return (
    <g>
      <g className="chibi-eyes">
        <ellipse cx="40" cy="48" rx="5" ry="6.4" fill="#352419" />
        <ellipse cx="60" cy="48" rx="5" ry="6.4" fill="#352419" />
        <circle cx="38.3" cy="45.6" r="2" fill="#fff" />
        <circle cx="58.3" cy="45.6" r="2" fill="#fff" />
        <circle cx="41.7" cy="50.6" r="1" fill="#fff" opacity=".75" />
        <circle cx="61.7" cy="50.6" r="1" fill="#fff" opacity=".75" />
      </g>
      {brows === 'determined' && (
        <g stroke="#352419" strokeWidth="2.2" strokeLinecap="round">
          <line x1="34.5" y1="37.5" x2="44.5" y2="40" />
          <line x1="65.5" y1="37.5" x2="55.5" y2="40" />
        </g>
      )}
      <ellipse cx={bx} cy="56.5" rx="4.3" ry="2.5" fill="#FF9DAE" opacity=".55" />
      <ellipse cx={100 - bx} cy="56.5" rx="4.3" ry="2.5" fill="#FF9DAE" opacity=".55" />
      <path d="M45.5 58.5 Q50 62.5 54.5 58.5" fill="none" stroke="#352419" strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
}

function Feet({ color = '#6B4A35' }) {
  return (
    <g>
      <rect className="chibi-foot-l" x="38" y="90" width="10" height="12" rx="4.5" fill={color} stroke={OUT} strokeWidth="2.4" />
      <rect className="chibi-foot-r" x="52" y="90" width="10" height="12" rx="4.5" fill={color} stroke={OUT} strokeWidth="2.4" />
    </g>
  );
}

function Hand({ x, y, r = 5.2 }) {
  return <circle cx={x} cy={y} r={r} fill={SKIN} stroke={OUT} strokeWidth="2.4" />;
}

function Sparkle({ x, y, s = 1, delay = 0, color = '#FFD866' }) {
  return (
    <path
      className="chibi-sparkle"
      style={{ animationDelay: `${delay}s` }}
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -5 L1.4 -1.4 L5 0 L1.4 1.4 L0 5 L-1.4 1.4 L-5 0 L-1.4 -1.4 Z"
      fill={color}
    />
  );
}

function Crown() {
  return (
    <path d="M39 8 L43.5 14.5 L50 6 L56.5 14.5 L61 8 L61 18 L39 18 Z"
      fill="#FFC93C" stroke={OUT} strokeWidth="2.2" strokeLinejoin="round" />
  );
}

// ── 劍士 ─────────────────────────────────────────────────────────────────────

function Swordsman({ tier }) {
  return (
    <g>
      {/* 劍（身體右側） */}
      <g>
        <path d="M77.8 38 L81.2 29 L84.6 38 Z" fill="#DCE5EF" stroke={OUT} strokeWidth="2" strokeLinejoin="round" />
        <rect x="77.8" y="36.5" width="6.8" height="33" rx="3" fill="#DCE5EF" stroke={OUT} strokeWidth="2" />
        <line x1="81.2" y1="40" x2="81.2" y2="64" stroke="#fff" strokeWidth="1.5" opacity=".85" />
        <rect x="72.6" y="68.5" width="17.2" height="5.6" rx="2.8" fill="#FFC93C" stroke={OUT} strokeWidth="2" />
        <rect x="78.4" y="73.5" width="5.6" height="9.5" rx="2.6" fill="#9A6038" stroke={OUT} strokeWidth="2" />
      </g>
      <Feet />
      {/* 上衣 */}
      <path d="M36 67 Q50 61 64 67 L66.5 88 Q50 94 33.5 88 Z"
        fill="#E0473D" stroke={OUT} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M44 66 L50 73 L56 66" fill="none" stroke="#B22D24" strokeWidth="2.2" strokeLinecap="round" />
      {/* 腰帶 */}
      <path d="M34.5 81 Q50 86 65.5 81 L66 87 Q50 92 34 87 Z" fill="#5B3A29" stroke={OUT} strokeWidth="2" />
      <rect x="46.5" y="81.5" width="7" height="6.5" rx="1.6" fill="#FFC93C" stroke={OUT} strokeWidth="1.8" />
      <Hand x="27.5" y="78" />
      <Hand x="81.2" y="79" />
      {/* 頭 */}
      <circle cx="50" cy="44" r="27" fill={SKIN} stroke={OUT} strokeWidth="2.6" />
      {/* 頭髮（上層） */}
      <path d="M23.5 42 C22.5 25 33 16 50 16 C67 16 77.5 25 76.5 42 L70.5 35.5 L64 41 L57 34 L50 40.5 L43 34 L36 41 L29.5 35.5 Z"
        fill="#8A5A38" stroke={OUT} strokeWidth="2.4" strokeLinejoin="round" />
      {/* 頭帶 */}
      <path d="M24 32.5 Q50 24.5 76 32.5 L76 39.5 Q50 31.5 24 39.5 Z"
        fill="#E23E3E" stroke={OUT} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M76 33.5 Q86 30 89 36 Q84 36 82 40 Z" fill="#E23E3E" stroke={OUT} strokeWidth="2" strokeLinejoin="round" />
      <Face />
      {tier >= 3 && <>
        <Sparkle x="15" y="28" delay={0} />
        <Sparkle x="88" y="18" s={0.7} delay={0.5} />
        <Sparkle x="20" y="68" s={0.6} delay={0.9} />
      </>}
      {tier >= 4 && <Crown />}
    </g>
  );
}

// ── 法師 ─────────────────────────────────────────────────────────────────────

function Mage({ tier }) {
  return (
    <g>
      {/* 法杖 */}
      <g>
        <rect x="79.8" y="50" width="4.4" height="41" rx="2.2" fill="#9A6038" stroke={OUT} strokeWidth="2" />
        <circle cx="82" cy="46" r="9.5" fill="#5EEAD4" opacity=".3" />
        <circle cx="82" cy="46" r="6" fill="#5EEAD4" stroke={OUT} strokeWidth="2" />
        <circle cx="80" cy="44" r="1.8" fill="#fff" opacity=".9" />
        <Sparkle x="91" y="38" s={0.55} delay={0.3} color="#99F6E4" />
      </g>
      <Feet color="#4C3573" />
      {/* 長袍 */}
      <path d="M37 66 Q50 60 63 66 L68 90 Q50 96 32 90 Z"
        fill="#7C3AED" stroke={OUT} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M44 66 L50 92 L56 66" fill="#9F67FF" stroke={OUT} strokeWidth="1.8" strokeLinejoin="round" />
      <path transform="translate(50 80) scale(0.85)" d="M0 -5 L1.4 -1.4 L5 0 L1.4 1.4 L0 5 L-1.4 1.4 L-5 0 L-1.4 -1.4 Z" fill="#FFD866" />
      <Hand x="27.5" y="78" />
      <Hand x="82" y="62" />
      {/* 頭 */}
      <circle cx="50" cy="44" r="27" fill={SKIN} stroke={OUT} strokeWidth="2.6" />
      {/* 帽簷下的瀏海 */}
      <path d="M26 34 Q32 41 40 36 Q50 43 60 36 Q68 41 74 34 L74 30 L26 30 Z"
        fill="#8A5A38" stroke={OUT} strokeWidth="2.2" strokeLinejoin="round" />
      {/* 法師帽 */}
      <ellipse cx="50" cy="29" rx="31" ry="8.5" fill="#6D28D9" stroke={OUT} strokeWidth="2.4" />
      <path d="M31 27 C37 17 44.5 12 47 4 C47.8 1.4 52.5 1 54 3.6 C55.2 5.8 53 7.6 51.6 9 C54.5 16 61.5 22 69 27 Q50 21 31 27 Z"
        fill="#7C3AED" stroke={OUT} strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="54.5" cy="3.5" r="3.4" fill="#FFC93C" stroke={OUT} strokeWidth="2" />
      <path transform="translate(49 16) scale(0.8)" d="M0 -5 L1.4 -1.4 L5 0 L1.4 1.4 L0 5 L-1.4 1.4 L-5 0 L-1.4 -1.4 Z" fill="#FFD866" />
      <Face />
      {tier >= 3 && <>
        <Sparkle x="14" y="34" delay={0} />
        <Sparkle x="88" y="74" s={0.6} delay={0.7} />
      </>}
    </g>
  );
}

// ── 馴獸師 ───────────────────────────────────────────────────────────────────

function BeastTamer({ tier }) {
  return (
    <g>
      {/* 龍尾巴 */}
      <path d="M33 88 C20 95 9 89 12.5 78 C13.8 73.5 19 71.5 22.5 74.5 C19.5 75.5 17 78.5 18 81.5 C20 87.5 28 86 33 83 Z"
        fill="#2EAD5B" stroke={OUT} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M22.5 74.5 L15.5 67.5 L26.5 68.5 Z" fill="#FFB152" stroke={OUT} strokeWidth="2" strokeLinejoin="round" />
      <Feet color="#3E6B3A" />
      {/* 上衣 */}
      <path d="M36 67 Q50 61 64 67 L66.5 88 Q50 94 33.5 88 Z"
        fill="#27A856" stroke={OUT} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M44 66 L50 74 L56 66" fill="none" stroke="#1B7A3D" strokeWidth="2.2" strokeLinecap="round" />
      {/* 腰帶 + 骨頭吊飾 */}
      <path d="M34.5 81 Q50 86 65.5 81 L66 87 Q50 92 34 87 Z" fill="#5B3A29" stroke={OUT} strokeWidth="2" />
      <g transform="translate(50 84.5) rotate(-18)">
        <rect x="-4.5" y="-1.3" width="9" height="2.6" rx="1.3" fill="#FFF7E8" stroke={OUT} strokeWidth="1.4" />
        <circle cx="-4.5" cy="-1.2" r="1.6" fill="#FFF7E8" stroke={OUT} strokeWidth="1.2" />
        <circle cx="-4.5" cy="1.2" r="1.6" fill="#FFF7E8" stroke={OUT} strokeWidth="1.2" />
        <circle cx="4.5" cy="-1.2" r="1.6" fill="#FFF7E8" stroke={OUT} strokeWidth="1.2" />
        <circle cx="4.5" cy="1.2" r="1.6" fill="#FFF7E8" stroke={OUT} strokeWidth="1.2" />
      </g>
      <Hand x="27.5" y="78" />
      <Hand x="72.5" y="78" />
      {/* 頭（兜帽） */}
      <circle cx="50" cy="44" r="27" fill="#2EAD5B" stroke={OUT} strokeWidth="2.6" />
      {/* 小龍角 */}
      <path d="M30 23 Q31 9 40 13 Q42.5 19 37.5 25 Z" fill="#FFB152" stroke={OUT} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M70 23 Q69 9 60 13 Q57.5 19 62.5 25 Z" fill="#FFB152" stroke={OUT} strokeWidth="2.2" strokeLinejoin="round" />
      {/* 臉部開口 */}
      <circle cx="50" cy="47.5" r="20.5" fill={SKIN} stroke="#1B7A3D" strokeWidth="2.4" />
      <Face blushInset={2.5} />
      {tier >= 3 && <>
        <Sparkle x="14" y="40" delay={0.2} />
        <Sparkle x="87" y="60" s={0.65} delay={0.8} />
      </>}
      {tier >= 4 && <Crown />}
    </g>
  );
}

// ── 格鬥家 ───────────────────────────────────────────────────────────────────

function Fighter({ tier }) {
  return (
    <g>
      <Feet color="#7C3A22" />
      {/* 道服 */}
      <path d="M36 67 Q50 61 64 67 L66.5 88 Q50 94 33.5 88 Z"
        fill="#F4A340" stroke={OUT} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M43.5 65.5 L50 76 L56.5 65.5 L53 64 L50 70 L47 64 Z"
        fill="#FFF7E8" stroke={OUT} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M34.5 81 Q50 86 65.5 81 L66 87 Q50 92 34 87 Z" fill="#7C3A22" stroke={OUT} strokeWidth="2" />
      {/* 纏布拳頭（舉起） */}
      <g>
        <circle cx="26" cy="68" r="6.6" fill={SKIN} stroke={OUT} strokeWidth="2.4" />
        <path d="M20.5 65.5 Q26 63 31.5 65.5 M20 69 Q26 71.5 32 69" fill="none" stroke="#FFF7E8" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="74" cy="68" r="6.6" fill={SKIN} stroke={OUT} strokeWidth="2.4" />
        <path d="M68.5 65.5 Q74 63 79.5 65.5 M68 69 Q74 71.5 80 69" fill="none" stroke="#FFF7E8" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* 頭 */}
      <circle cx="50" cy="44" r="27" fill={SKIN} stroke={OUT} strokeWidth="2.6" />
      {/* 大刺刺頭髮 */}
      <path d="M24 42 C23.5 33 25 27 28.5 22.5 L31 12.5 L37.5 21 L44 7 L50 17.5 L56 5.5 L61.5 18.5 L68.5 11 L70.5 22 C74.5 27 76.5 33 76 42 L70 37.5 L63.5 42.5 L56.5 36.5 L50 42.5 L43.5 36.5 L36.5 42.5 L30 37.5 Z"
        fill="#E8923B" stroke={OUT} strokeWidth="2.4" strokeLinejoin="round" />
      {/* 白色頭帶 */}
      <path d="M24.5 34.5 Q50 27 75.5 34.5 L75.5 41 Q50 33.5 24.5 41 Z"
        fill="#FFF7E8" stroke={OUT} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M24.5 35.5 Q14 32 11.5 38 Q17 38 18.5 42 Z" fill="#FFF7E8" stroke={OUT} strokeWidth="2" strokeLinejoin="round" />
      <Face brows="determined" />
      {tier >= 3 && <>
        <Sparkle x="14" y="26" delay={0.1} />
        <Sparkle x="87" y="44" s={0.7} delay={0.6} />
      </>}
      {tier >= 4 && <Crown />}
    </g>
  );
}

const CHAR_RENDERERS = {
  swordsman: Swordsman,
  mage: Mage,
  beastTamer: BeastTamer,
  fighter: Fighter,
};

export default function ChibiCharacter({ classId, level = 1, scale = 4, animate = true, walking = false, grayscale = false }) {
  const tier = getSkinTier(level);
  const Char = CHAR_RENDERERS[classId] ?? CHAR_RENDERERS.swordsman;
  const size = scale * 16;

  const tierStyle = grayscale
    ? { filter: 'grayscale(1) brightness(0.6)' }
    : TIER_STYLE[tier];

  return (
    <div style={{ width: size, height: size * 1.16, flexShrink: 0 }}>
      <style>{CSS}</style>
      <svg
        viewBox="0 0 100 116" width="100%" height="100%"
        className={walking ? 'chibi-walking' : undefined}
        style={{ display: 'block', overflow: 'visible', ...tierStyle }}
      >
        <ellipse cx="50" cy="109" rx="21" ry="4.5" fill="rgba(0,0,0,0.28)" />
        <g className="chibi-waddle">
          <g
            className="chibi-walk-bob"
            style={{ animation: animate && !walking ? 'chibiBob 2.2s ease-in-out infinite' : undefined }}
          >
            <Char tier={tier} />
          </g>
        </g>
      </svg>
    </div>
  );
}
