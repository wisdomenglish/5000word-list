import { useState, useEffect } from 'react';
import ChibiCharacter from './ChibiCharacter';
import { TIER_META, getSkinTier } from '../utils/characterTier';
import { playDrumRoll, playReveal } from '../utils/soundFX';

// Confetti piece
const CONFETTI_COLORS = ['#F59E0B', '#A855F7', '#3B82F6', '#22C55E', '#EF4444', '#EC4899'];
const CONFETTI = Array.from({ length: 28 }, (_, i) => ({
  x: 8 + (i * 3.4) % 86,
  delay: (i * 0.07) % 1.2,
  dur: 0.9 + (i % 5) * 0.15,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  rotate: (i * 47) % 360,
  size: 6 + (i % 4) * 3,
}));

const CSS = `
@keyframes unboxFadeIn  { from{opacity:0} to{opacity:1} }
@keyframes silhouettePulse { 0%,100%{filter:brightness(0.12) blur(0)} 50%{filter:brightness(0.22) blur(1px)} }
@keyframes tapHint      { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
@keyframes unboxReveal  { 0%{transform:scale(0.2) rotate(-15deg);opacity:0} 60%{transform:scale(1.18) rotate(4deg)} 80%{transform:scale(0.95)} 100%{transform:scale(1) rotate(0);opacity:1} }
@keyframes flashWhite   { 0%{opacity:0} 15%{opacity:0.9} 100%{opacity:0} }
@keyframes confettiFall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(220px) rotate(var(--rot));opacity:0} }
@keyframes tierBadge    { 0%{transform:scale(0) translateY(10px);opacity:0} 70%{transform:scale(1.2) translateY(-4px)} 100%{transform:scale(1) translateY(0);opacity:1} }
@keyframes glowPulse    { 0%,100%{box-shadow:var(--glow-base)} 50%{box-shadow:var(--glow-peak)} }
`;

export default function CharacterUnboxingModal({ newLevel, classData, onDismiss }) {
  const [phase, setPhase] = useState('mystery'); // 'mystery' | 'reveal'
  const [flashing, setFlashing] = useState(false);

  const tier      = getSkinTier(newLevel);
  const tierMeta  = TIER_META[tier];

  useEffect(() => {
    playDrumRoll(2200);
  }, []);

  const handleReveal = () => {
    if (phase !== 'mystery') return;
    setFlashing(true);
    playReveal();
    setTimeout(() => setFlashing(false), 600);
    setTimeout(() => setPhase('reveal'), 300);
    setTimeout(onDismiss, 6500);
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 55,
        background: '#000',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        animation: 'unboxFadeIn 0.5s ease-out forwards',
        padding: '24px',
      }}
      onClick={phase === 'mystery' ? handleReveal : onDismiss}
    >
      <style>{CSS}</style>

      {/* Flash overlay */}
      {flashing && (
        <div style={{
          position: 'fixed', inset: 0, background: '#fff', zIndex: 60,
          animation: 'flashWhite 0.6s ease-out forwards', pointerEvents: 'none',
        }} />
      )}

      {/* Confetti (reveal phase only) */}
      {phase === 'reveal' && CONFETTI.map((c, i) => (
        <div key={i} style={{
          position: 'fixed',
          top: '30%', left: `${c.x}%`,
          width: c.size, height: c.size * 0.55,
          background: c.color,
          borderRadius: 2,
          animation: `confettiFall ${c.dur}s ease-in ${c.delay}s both`,
          '--rot': `${c.rotate}deg`,
          pointerEvents: 'none', zIndex: 56,
        }} />
      ))}

      {phase === 'mystery' ? (
        /* ── Mystery phase ── */
        <div style={{ textAlign: 'center' }}>
          {/* Tier tag */}
          <div style={{
            fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em',
            color: classData.primaryColor, marginBottom: 16,
            textTransform: 'uppercase', opacity: 0.8,
          }}>
            新造型解鎖
          </div>

          {/* Silhouette */}
          <div style={{
            position: 'relative',
            width: 120, height: 120,
            margin: '0 auto 28px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* Glow ring */}
            <div style={{
              position: 'absolute', inset: -16,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${classData.primaryColor}30 0%, transparent 70%)`,
              animation: 'silhouettePulse 1.6s ease-in-out infinite',
            }} />
            <div style={{
              animation: 'silhouettePulse 1.6s ease-in-out infinite',
              filter: 'brightness(0.15)',
            }}>
              <ChibiCharacter classId={classData.id} level={newLevel} scale={7} animate={false} />
            </div>
          </div>

          {/* Question marks */}
          <div style={{
            fontSize: '2.5rem', letterSpacing: '0.3em', marginBottom: 20,
            color: 'rgba(255,255,255,0.2)',
          }}>？ ？ ？</div>

          {/* Tap hint */}
          <div style={{
            animation: 'tapHint 1.2s ease-in-out infinite',
            color: classData.primaryColor,
            fontWeight: 700, fontSize: '1rem',
          }}>
            點擊揭開 ✨
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem', marginTop: 8 }}>
            Lv.{newLevel} 達成
          </div>
        </div>
      ) : (
        /* ── Reveal phase ── */
        <div style={{ textAlign: 'center' }}>
          {/* Glow background */}
          <div style={{
            position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1,
            background: `radial-gradient(circle at 50% 40%, ${classData.primaryColor}25 0%, transparent 60%)`,
          }} />

          {/* Character burst */}
          <div style={{
            animation: 'unboxReveal 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards',
            marginBottom: 20,
            filter: `drop-shadow(0 0 24px ${classData.primaryColor})`,
          }}>
            <ChibiCharacter classId={classData.id} level={newLevel} scale={8} animate />
          </div>

          {/* Tier badge */}
          <div style={{
            animation: 'tierBadge 0.5s ease-out 0.4s both',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
            border: `2px solid ${classData.primaryColor}80`,
            borderRadius: 20, padding: '8px 20px',
            marginBottom: 12,
            '--glow-base': `0 0 12px ${classData.glowColor}`,
            '--glow-peak': `0 0 28px ${classData.glowColor}`,
            animation: 'tierBadge 0.5s ease-out 0.4s both, glowPulse 2s ease-in-out 0.9s infinite',
          }}>
            <span style={{ fontSize: '1.4rem' }}>{tierMeta.icon}</span>
            <div>
              <div style={{ color: '#fff', fontWeight: 900, fontSize: '1rem' }}>{tierMeta.label}</div>
              <div style={{ color: classData.primaryColor, fontSize: '0.62rem', fontWeight: 600 }}>
                {classData.name}  Lv.{newLevel}
              </div>
            </div>
          </div>

          {/* Evolve message */}
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>
            {tierMeta.evolveMsg}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
            {tierMeta.desc} 解鎖！
          </div>

          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem', marginTop: 20 }}>
            點擊任意處繼續
          </div>
        </div>
      )}
    </div>
  );
}
