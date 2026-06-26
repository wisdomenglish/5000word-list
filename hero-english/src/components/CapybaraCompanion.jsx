// ── 水豚夥伴（卡比巴拉風吉祥物）────────────────────────────────────────────
// 圓滾滾 loaf 身形、頭頂一顆柚子，會眨眼、待機微晃、走路踏步。
// Props:
//   scale   數字，寬 = scale*16（高依比例）
//   animate 待機呼吸晃動（預設 true）
//   walking true → 雙腳交替踏步 + 身體搖擺（取代待機晃）
//   mood    'content'(預設) | 'happy' | 'sleepy'
//   yuzu    頭頂柚子（預設 true）

const BODY   = '#C99A63';
const BODY_D = '#B5824B';
const OUT    = '#6E4B2E';
const MUZZLE = '#EAD2AC';
const NOSE   = '#5A3D27';

const CSS = `
@keyframes capyBlink  { 0%,92%,100%{transform:scaleY(1)} 96%{transform:scaleY(0.1)} }
@keyframes capyBreath { 0%,100%{transform:translateY(0) scaleX(1)} 50%{transform:translateY(-2px) scaleX(1.02)} }
@keyframes capyStepL  { 0%,50%,100%{transform:translateY(0)} 25%{transform:translateY(-4px)} }
@keyframes capyStepR  { 0%,50%,100%{transform:translateY(0)} 75%{transform:translateY(-4px)} }
@keyframes capyWaddle { 0%,100%{transform:rotate(-2deg)} 50%{transform:rotate(2deg)} }
@keyframes capyWalkBob{ 0%,50%,100%{transform:translateY(0)} 25%,75%{transform:translateY(-2px)} }
.capy-eyes { animation: capyBlink 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.capy-walking .capy-foot-l { animation: capyStepL 0.62s linear infinite; transform-box: fill-box; transform-origin: center; }
.capy-walking .capy-foot-r { animation: capyStepR 0.62s linear infinite; transform-box: fill-box; transform-origin: center; }
.capy-walking .capy-waddle { animation: capyWaddle 1.24s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 92%; }
.capy-walking .capy-walk-bob { animation: capyWalkBob 0.62s linear infinite; }
`;

function Eyes({ mood }) {
  if (mood === 'happy') {
    return (
      <g stroke={NOSE} strokeWidth="3.2" strokeLinecap="round" fill="none">
        <path d="M33 47 Q38 42 43 47" />
        <path d="M57 47 Q62 42 67 47" />
      </g>
    );
  }
  if (mood === 'sleepy') {
    return (
      <g stroke={NOSE} strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M34 48 Q38 50 42 48" />
        <path d="M58 48 Q62 50 66 48" />
      </g>
    );
  }
  // content — round dot eyes with a highlight
  return (
    <g>
      <ellipse cx="38" cy="47" rx="3.6" ry="4.2" fill={NOSE} />
      <ellipse cx="62" cy="47" rx="3.6" ry="4.2" fill={NOSE} />
      <circle cx="36.8" cy="45.4" r="1.3" fill="#fff" />
      <circle cx="60.8" cy="45.4" r="1.3" fill="#fff" />
    </g>
  );
}

export default function CapybaraCompanion({
  scale = 4, animate = true, walking = false, mood = 'content', yuzu = true,
}) {
  const w = scale * 16;
  const h = w * 0.92;

  return (
    <div style={{ width: w, height: h, flexShrink: 0 }}>
      <style>{CSS}</style>
      <svg
        viewBox="0 0 100 92" width="100%" height="100%"
        className={walking ? 'capy-walking' : undefined}
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* 影子 */}
        <ellipse cx="50" cy="86" rx="30" ry="5" fill="rgba(110,75,46,0.22)" />

        <g className="capy-waddle">
          <g
            className="capy-walk-bob"
            style={{ animation: animate && !walking ? 'capyBreath 2.8s ease-in-out infinite' : undefined,
                     transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            {/* 腳 */}
            <g>
              <rect className="capy-foot-l" x="26" y="74" width="13" height="11" rx="5" fill={BODY_D} stroke={OUT} strokeWidth="2.4" />
              <rect className="capy-foot-r" x="61" y="74" width="13" height="11" rx="5" fill={BODY_D} stroke={OUT} strokeWidth="2.4" />
            </g>

            {/* 耳朵 */}
            <ellipse cx="28" cy="26" rx="8" ry="7" fill={BODY} stroke={OUT} strokeWidth="2.4" />
            <ellipse cx="72" cy="26" rx="8" ry="7" fill={BODY} stroke={OUT} strokeWidth="2.4" />
            <ellipse cx="28" cy="27" rx="3.4" ry="3" fill={NOSE} opacity="0.55" />
            <ellipse cx="72" cy="27" rx="3.4" ry="3" fill={NOSE} opacity="0.55" />

            {/* loaf 身體 */}
            <rect x="14" y="24" width="72" height="56" rx="28" fill={BODY} stroke={OUT} strokeWidth="2.6" />
            {/* 肚子淺色 */}
            <ellipse cx="50" cy="62" rx="30" ry="20" fill="#D9B486" opacity="0.55" />

            {/* 口鼻 */}
            <ellipse cx="50" cy="60" rx="21" ry="15" fill={MUZZLE} stroke={OUT} strokeWidth="2" />
            <ellipse cx="50" cy="54" rx="11.5" ry="8" fill={NOSE} />
            <ellipse cx="45.5" cy="53" rx="1.7" ry="2.2" fill="#2E1E12" />
            <ellipse cx="54.5" cy="53" rx="1.7" ry="2.2" fill="#2E1E12" />
            <path d="M44 64 Q50 69 56 64"
              fill="none" stroke={OUT} strokeWidth="2.2" strokeLinecap="round" />

            {/* 腮紅 */}
            <ellipse cx="30" cy="56" rx="5" ry="3.2" fill="#F0A9B0" opacity="0.5" />
            <ellipse cx="70" cy="56" rx="5" ry="3.2" fill="#F0A9B0" opacity="0.5" />

            {/* 眼睛 */}
            <g className="capy-eyes"><Eyes mood={mood} /></g>

            {/* 頭頂柚子 */}
            {yuzu && (
              <g>
                <ellipse cx="50" cy="84" rx="0" ry="0" />
                <circle cx="50" cy="18" r="8" fill="#F6A94C" stroke="#C9742A" strokeWidth="2" />
                <ellipse cx="47" cy="15.5" rx="2.4" ry="1.6" fill="#FFD089" opacity="0.8" />
                <path d="M50 10 Q54 6 58 9 Q53 10 52 13 Z" fill="#7FB069" stroke="#4E7A3F" strokeWidth="1.4" strokeLinejoin="round" />
              </g>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}
