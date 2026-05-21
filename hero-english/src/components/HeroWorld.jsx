import { useState, useEffect, useRef } from 'react';
import { MOOD_CONFIG, HERO_CRIES } from '../data/classes';

// Pre-computed static layouts (avoid re-creating on each render)
const STARS = Array.from({ length: 16 }, (_, i) => ({
  x: (i * 13 + 5) % 97,
  y: (i * 17 + 3) % 54,
  r: i % 3 === 0 ? 2 : 1.5,
  o: 0.15 + (i % 5) * 0.07,
}));
const SPARKS = Array.from({ length: 7 }, (_, i) => ({
  x: 12 + (i * 12) % 74,
  delay: parseFloat(((i * 0.4) % 2.4).toFixed(2)),
}));
const RAINDROPS = Array.from({ length: 12 }, (_, i) => ({
  x: (i * 8 + 3) % 97,
  delay: parseFloat(((i * 0.15) % 1.5).toFixed(2)),
  dur: parseFloat((0.65 + (i % 5) * 0.08).toFixed(2)),
}));

const MOOD_SPEED = { happy: 0.55, neutral: 0.38, sad: 0.2, critical: 0.07 };

function SparkleLayer() {
  return SPARKS.map((s, i) => (
    <div key={i} style={{
      position: 'absolute', bottom: '46px', left: `${s.x}%`,
      fontSize: '9px', color: '#FFD700', pointerEvents: 'none',
      animation: `sparkleRise 2.2s ease-out ${s.delay}s infinite`,
    }}>✦</div>
  ));
}

function RainLayer() {
  return RAINDROPS.map((d, i) => (
    <div key={i} style={{
      position: 'absolute', left: `${d.x}%`, top: '-8px',
      width: '1.5px', height: '10px',
      background: 'linear-gradient(180deg, transparent, rgba(110,160,255,0.5))',
      animation: `rainFall ${d.dur}s linear ${d.delay}s infinite`,
      pointerEvents: 'none',
    }} />
  ));
}

export default function HeroWorld({ classData, mood, happiness, level = 1 }) {
  const xRef = useRef(25);
  const dirRef = useRef(1);
  const pauseRef = useRef(false);

  const [charX, setCharX] = useState(25);
  const [facingRight, setFacingRight] = useState(true);
  const [bounce, setBounce] = useState(false);
  const [isSitting, setIsSitting] = useState(false);
  const [bubble, setBubble] = useState(null); // { msg, x }

  const speed = MOOD_SPEED[mood] ?? 0.38;
  const moodCfg = MOOD_CONFIG[mood];
  const hungerFilled = Math.max(0, Math.ceil((happiness / 100) * 5));
  const cries = HERO_CRIES[classData.id]?.[mood] ?? ['加油！'];

  // Walk loop — 80ms tick, uses ref to avoid stale closures
  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseRef.current) return;
      let x = xRef.current + dirRef.current * speed;
      if (x >= 80) { x = 80; dirRef.current = -1; setFacingRight(false); }
      if (x <= 10) { x = 10; dirRef.current = 1; setFacingRight(true); }
      xRef.current = x;
      setCharX(x);
    }, 80);
    return () => clearInterval(interval);
  }, [speed]);

  // Idle behaviors — periodic pauses
  useEffect(() => {
    let t;
    const schedule = () => {
      t = setTimeout(() => {
        pauseRef.current = true;
        if (mood === 'critical') {
          setIsSitting(true);
          setTimeout(() => { setIsSitting(false); pauseRef.current = false; schedule(); }, 3500);
        } else if (mood === 'happy') {
          setBounce(true);
          setTimeout(() => { setBounce(false); pauseRef.current = false; schedule(); }, 1200);
        } else {
          setTimeout(() => { pauseRef.current = false; schedule(); }, 1200);
        }
      }, 4500 + Math.random() * 5000);
    };
    schedule();
    return () => clearTimeout(t);
  }, [mood]);

  // Auto bubble when critical
  useEffect(() => {
    if (mood !== 'critical') return;
    const interval = setInterval(() => {
      const x = Math.min(Math.max(xRef.current, 15), 68);
      setBubble({ msg: cries[Math.floor(Math.random() * cries.length)], x });
      setTimeout(() => setBubble(null), 2800);
    }, 9000);
    return () => clearInterval(interval);
  }, [mood]);

  const handleTap = () => {
    const msg = cries[Math.floor(Math.random() * cries.length)];
    const x = Math.min(Math.max(xRef.current, 15), 68);
    setBubble({ msg, x });
    setBounce(true);
    setTimeout(() => { setBounce(false); setBubble(null); }, 2500);
  };

  return (
    <div
      className="mx-4 mt-3 rounded-2xl overflow-hidden relative"
      style={{
        height: '210px',
        userSelect: 'none',
        background: mood === 'happy'
          ? 'linear-gradient(180deg, #090B18 0%, #111430 50%, #191C3C 100%)'
          : mood === 'critical'
          ? 'linear-gradient(180deg, #070710 0%, #0B0B1C 50%, #0F1020 100%)'
          : 'linear-gradient(180deg, #07080F 0%, #0E0F1E 50%, #13142A 100%)',
      }}
    >
      {/* Stars */}
      {STARS.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${s.x}%`, top: `${s.y}%`,
          width: `${s.r}px`, height: `${s.r}px`, borderRadius: '50%',
          background: '#fff', opacity: s.o, pointerEvents: 'none',
        }} />
      ))}

      {/* Moon */}
      <div style={{
        position: 'absolute', top: '10px', left: '14px',
        fontSize: '16px', opacity: mood === 'critical' ? 0.35 : 0.7,
        pointerEvents: 'none',
      }}>
        {mood === 'happy' ? '⭐' : '🌙'}
      </div>

      {/* Mood effects */}
      {mood === 'happy' && <SparkleLayer />}
      {mood === 'critical' && <RainLayer />}

      {/* Trees */}
      <div style={{ position: 'absolute', bottom: '42px', left: '2%', fontSize: '24px', opacity: 0.55, pointerEvents: 'none' }}>🌲</div>
      <div style={{ position: 'absolute', bottom: '42px', right: '2%', fontSize: '20px', opacity: 0.45, pointerEvents: 'none' }}>🌲</div>

      {/* Speech bubble */}
      {bubble && (
        <div style={{
          position: 'absolute',
          bottom: '95px',
          left: `${bubble.x}%`,
          transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.97)',
          color: '#12122A',
          fontSize: '0.7rem',
          fontWeight: '700',
          padding: '5px 10px',
          borderRadius: '12px',
          whiteSpace: 'nowrap',
          maxWidth: '200px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          boxShadow: '0 3px 14px rgba(0,0,0,0.5)',
          zIndex: 10,
          pointerEvents: 'none',
        }}>
          {bubble.msg}
          <div style={{
            position: 'absolute', bottom: '-7px', left: '50%', transform: 'translateX(-50%)',
            borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
            borderTop: '7px solid rgba(255,255,255,0.97)',
          }} />
        </div>
      )}

      {/* Character — outer: position + flip / inner: bounce */}
      <div
        onClick={handleTap}
        style={{
          position: 'absolute',
          bottom: isSitting ? '32px' : '44px',
          left: `${charX}%`,
          transform: `translateX(-50%) scaleX(${facingRight ? 1 : -1})`,
          transition: 'left 0.12s linear, bottom 0.3s ease',
          cursor: 'pointer',
          willChange: 'left',
          zIndex: 5,
        }}
      >
        <div style={{
          fontSize: `${Math.min(72, 46 + Math.floor(level / 5) * 6)}px`,
          lineHeight: 1,
          filter: mood === 'critical'
            ? 'grayscale(0.55) brightness(0.7)'
            : mood === 'sad'
            ? 'brightness(0.85)'
            : mood === 'happy'
            ? `drop-shadow(0 0 10px ${classData.glowColor})`
            : 'none',
          animation: bounce ? 'charBounce 0.3s ease-in-out 3' : 'none',
        }}>
          {classData.emoji}
        </div>

        {/* Hunger icon above head */}
        {happiness < 25 && !bubble && (
          <div style={{
            position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '14px', animation: 'float 0.9s ease-in-out infinite alternate',
            pointerEvents: 'none',
          }}>🍖</div>
        )}

        {/* ZZZ when sitting */}
        {isSitting && (
          <div style={{
            position: 'absolute', top: '-22px', right: '-4px',
            fontSize: '12px', opacity: 0.8,
            animation: 'float 1.3s ease-in-out infinite alternate',
            pointerEvents: 'none',
          }}>💤</div>
        )}
      </div>

      {/* Ground */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '42px',
        background: 'linear-gradient(180deg, #172117 0%, #0C130C 100%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }} />

      {/* Hunger bar */}
      <div style={{
        position: 'absolute', bottom: '11px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '4px',
      }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{
            fontSize: '13px',
            opacity: i < hungerFilled ? 1 : 0.12,
            transition: 'opacity 0.8s ease',
            filter: i < hungerFilled ? 'none' : 'grayscale(1)',
          }}>🍗</span>
        ))}
      </div>

      {/* Mood badge — top right */}
      <div style={{
        position: 'absolute', top: '10px', right: '12px',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '20px', padding: '3px 9px',
        display: 'flex', gap: '4px', alignItems: 'center',
        border: `1px solid ${moodCfg?.color ?? '#444'}33`,
      }}>
        <span style={{ fontSize: '11px' }}>{moodCfg?.emoji ?? '😊'}</span>
        <span style={{ fontSize: '0.62rem', color: moodCfg?.color ?? '#aaa', fontWeight: '600' }}>
          {moodCfg?.label ?? ''}
        </span>
      </div>

      {/* Tap hint — very subtle */}
      <div style={{
        position: 'absolute', bottom: '46px', left: '50%', transform: 'translateX(-50%)',
        fontSize: '0.55rem', color: 'rgba(255,255,255,0.15)', whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        點擊角色互動
      </div>
    </div>
  );
}
