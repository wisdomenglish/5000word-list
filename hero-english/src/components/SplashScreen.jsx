import { useEffect, useState } from 'react';

const CSS = `
@keyframes ss-twinkle { 0%,100%{opacity:.2;transform:scale(.6)} 50%{opacity:1;transform:scale(1.3)} }
@keyframes ss-float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
@keyframes ss-fadeup  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
@keyframes ss-pop     { from{opacity:0;transform:scale(.7)} 60%{transform:scale(1.08)} to{opacity:1;transform:scale(1)} }
@keyframes ss-blink   { 0%,100%{opacity:.2} 50%{opacity:.7} }
@keyframes ss-sparkle { 0%{opacity:0;transform:translateY(0) scale(.5)} 40%{opacity:.9;transform:translateY(-26px) scale(1)} 100%{opacity:0;transform:translateY(-52px) scale(.4)} }
@keyframes ss-sway    { 0%,100%{transform:rotate(-4deg)} 50%{transform:rotate(4deg)} }
@keyframes ss-shimmer { 0%,100%{opacity:.5} 50%{opacity:1} }
@keyframes ss-scan    { from{transform:translateY(-100%)} to{transform:translateY(400%)} }
`;

const STARS = [
  {x:4, y:6, r:1.5,dur:1.4,del:0},   {x:14,y:2, r:1,  dur:2.0,del:.3},
  {x:27,y:10,r:2,  dur:1.7,del:.1},  {x:39,y:4, r:1,  dur:1.5,del:.6},
  {x:52,y:8, r:1.5,dur:2.2,del:.2},  {x:67,y:3, r:1,  dur:1.8,del:.5},
  {x:77,y:10,r:2,  dur:1.3,del:.4},  {x:87,y:5, r:1,  dur:2.0,del:.7},
  {x:94,y:13,r:1.5,dur:1.6,del:.1},  {x:21,y:19,r:1,  dur:2.1,del:.8},
  {x:44,y:17,r:1.5,dur:1.9,del:.3},  {x:71,y:21,r:1,  dur:1.4,del:.6},
  {x:9, y:27,r:2,  dur:2.3,del:.2},  {x:34,y:24,r:1,  dur:1.7,del:.9},
  {x:59,y:29,r:1.5,dur:1.5,del:.4},  {x:84,y:25,r:1,  dur:2.0,del:.1},
  {x:49,y:34,r:2,  dur:1.8,del:.7},  {x:24,y:32,r:1,  dur:1.6,del:.5},
  {x:63,y:16,r:1,  dur:2.2,del:.2},  {x:90,y:33,r:1.5,dur:1.4,del:.6},
];

const SPARKLES = [
  {x:7,  char:'✦', color:'#C4B5FD', del:0   },
  {x:19, char:'★', color:'#93C5FD', del:.45 },
  {x:33, char:'✧', color:'#FCD34D', del:.9  },
  {x:50, char:'✦', color:'#6EE7B7', del:.2  },
  {x:65, char:'★', color:'#F9A8D4', del:.65 },
  {x:80, char:'✧', color:'#C4B5FD', del:1.1 },
  {x:92, char:'✦', color:'#93C5FD', del:.35 },
];

const CLASSES = [
  { emoji:'⚔️', label:'劍士',  color:'#A78BFA', glow:'rgba(167,139,250,' },
  { emoji:'🔮', label:'法師',  color:'#60A5FA', glow:'rgba(96,165,250,'  },
  { emoji:'🐾', label:'馴獸師',color:'#34D399', glow:'rgba(52,211,153,'  },
  { emoji:'🥊', label:'鬥士',  color:'#F87171', glow:'rgba(248,113,113,' },
];

const TUFTS = Array.from({ length: 24 }, (_, i) => ({
  x:    (i * 4.25 + 1.2) % 97,
  h:    10 + [0, 5, 8, 3, 6][i % 5],
  dark: i % 2 === 0,
  del:  (i * 0.09) % 1.5,
  dur:  1.6 + [0, .3, .6, .1, .4][i % 5],
}));

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('show');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('out'), 2900);
    const t2 = setTimeout(onDone, 3280);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  const skip = () => { setPhase('out'); setTimeout(onDone, 360); };

  return (
    <div
      onClick={skip}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'linear-gradient(180deg,#05051A 0%,#0D0A38 38%,#0A1E0A 78%,#040D04 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        overflow: 'hidden', cursor: 'pointer', userSelect: 'none',
        opacity: phase === 'out' ? 0 : 1,
        transition: 'opacity 0.38s ease',
      }}
    >
      <style>{CSS}</style>

      {/* Stars */}
      {STARS.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${s.x}%`, top: `${s.y}%`,
          width: s.r * 2.5, height: s.r * 2.5, borderRadius: '50%',
          background: '#fff',
          animation: `ss-twinkle ${s.dur}s ${s.del}s ease-in-out infinite`,
        }} />
      ))}

      {/* Floating sparkles */}
      {SPARKLES.map((p, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${p.x}%`, top: '44%',
          fontSize: '1rem', color: p.color, opacity: 0, pointerEvents: 'none',
          animation: `ss-sparkle 2.5s ${p.del}s ease-out infinite`,
        }}>{p.char}</div>
      ))}

      {/* ── Main content (sky zone) ── */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 2, width: '100%',
        paddingBottom: 148,
      }}>

        {/* App icon with glow + scan line effect */}
        <div style={{ animation: 'ss-pop .6s .05s both', marginBottom: 18 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src="/pwa-192x192.png"
              alt="英雄英語"
              style={{
                width: 78, height: 78, borderRadius: '22%',
                imageRendering: 'pixelated', display: 'block',
                boxShadow: '0 0 0 3px rgba(167,139,250,.28),0 0 28px rgba(124,58,237,.55),0 0 64px rgba(124,58,237,.22)',
              }}
            />
            {/* scan-line shimmer overlay */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '22%', overflow: 'hidden', pointerEvents: 'none',
            }}>
              <div style={{
                position: 'absolute', left: 0, right: 0, height: '30%',
                background: 'linear-gradient(180deg,transparent,rgba(255,255,255,.12),transparent)',
                animation: 'ss-scan 2.4s .8s ease-in-out infinite',
              }} />
            </div>
            <span style={{ position: 'absolute', top: -9, right: -9, fontSize: '1.1rem', animation: 'ss-shimmer 1.6s .5s ease-in-out infinite' }}>✦</span>
            <span style={{ position: 'absolute', bottom: -5, left: -9, fontSize: '.8rem', color: '#60A5FA', animation: 'ss-shimmer 1.9s .9s ease-in-out infinite' }}>★</span>
          </div>
        </div>

        {/* Title block */}
        <div style={{ animation: 'ss-fadeup .55s .28s both', textAlign: 'center', marginBottom: 6 }}>

          {/* Deco stars row */}
          <div style={{ marginBottom: 7, letterSpacing: '2em', paddingLeft: '2em' }}>
            <span style={{ color: '#FCD34D', fontSize: '.9rem' }}>✦</span>
            <span style={{ color: '#A78BFA', fontSize: '1.05rem' }}>★</span>
            <span style={{ color: '#60A5FA', fontSize: '.9rem' }}>✦</span>
          </div>

          {/* Main title */}
          <div style={{
            fontSize: '2.75rem', fontWeight: 900, letterSpacing: '.06em', lineHeight: 1.05,
            background: 'linear-gradient(135deg,#DDD6FE 0%,#818CF8 45%,#67E8F9 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            fontFamily: '"Playfair Display",serif',
          }}>英雄英語</div>

          {/* RPG badge pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 10,
            background: 'rgba(167,139,250,.1)',
            border: '1px solid rgba(167,139,250,.22)',
            borderRadius: 100, padding: '4px 16px',
          }}>
            <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.38)', letterSpacing: '.2em', fontWeight: 700 }}>HERO ENGLISH</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'inline-block' }} />
            <span style={{ fontSize: '.68rem', color: '#A78BFA', letterSpacing: '.14em', fontWeight: 800 }}>RPG</span>
          </div>
        </div>

        {/* Class characters */}
        <div style={{
          animation: 'ss-fadeup .55s .52s both',
          display: 'flex', gap: 14, marginTop: 28,
        }}>
          {CLASSES.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <div style={{
                width: 54, height: 54,
                background: `${c.glow}0.10)`,
                border: `2px solid ${c.glow}0.32)`,
                borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem',
                boxShadow: `0 0 14px ${c.glow}0.22)`,
                animation: `ss-float ${2 + i * .22}s ${i * .28}s ease-in-out infinite`,
              }}>{c.emoji}</div>
              <span style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.3)', fontWeight: 600 }}>{c.label}</span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div style={{
          animation: 'ss-fadeup .55s .72s both',
          color: 'rgba(255,255,255,.45)', fontSize: '.84rem',
          marginTop: 22, textAlign: 'center', lineHeight: 1.75,
        }}>
          像素世界，英文大冒險！
        </div>

        {/* Tap hint */}
        <div style={{
          color: 'rgba(255,255,255,.2)', fontSize: '.7rem',
          marginTop: 14, letterSpacing: '.1em',
          animation: 'ss-blink 1.7s 1.1s ease-in-out infinite',
        }}>點擊進入</div>
      </div>

      {/* ── Pixel grass strip ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 140, pointerEvents: 'none', overflow: 'hidden',
      }}>
        {/* Dark ground fill */}
        <div style={{
          position: 'absolute', top: 34, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg,#0D220D,#040D04)',
        }} />

        {/* Pixel grass — lighter top row */}
        <div style={{
          position: 'absolute', top: 30, left: 0, right: 0, height: 6,
          background: 'repeating-linear-gradient(90deg,#32b432 0,#32b432 9px,#3dcf3d 9px,#3dcf3d 18px)',
        }} />

        {/* Pixel grass — darker main row */}
        <div style={{
          position: 'absolute', top: 34, left: 0, right: 0, height: 8,
          background: 'repeating-linear-gradient(90deg,#1f7a1f 0,#1f7a1f 12px,#268a26 12px,#268a26 24px)',
        }} />

        {/* Grass tufts */}
        {TUFTS.map((t, i) => (
          <div key={i} style={{
            position: 'absolute',
            bottom: 102,
            left: `${t.x}%`,
            width: 5, height: t.h,
            background: t.dark ? '#1f7a1f' : '#2d9e2d',
            borderRadius: '45% 45% 0 0',
            transformOrigin: 'bottom center',
            animation: `ss-sway ${t.dur}s ${t.del}s ease-in-out infinite`,
          }} />
        ))}

        {/* Subtle ground fog */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 50,
          background: 'linear-gradient(0deg,rgba(4,13,4,.9),transparent)',
        }} />
      </div>
    </div>
  );
}
