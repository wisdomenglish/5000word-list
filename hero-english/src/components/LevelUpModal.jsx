import { useEffect } from 'react';
import PixelCharacter from './PixelCharacter';
import { isTierMilestone, getSkinTier, TIER_META } from '../utils/characterTier';
import { playLevelUp } from '../utils/soundFX';

const PARTICLES_CSS = `
@keyframes levelUp  { from{opacity:0;transform:scale(0.5) translateY(30px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes rise     { 0%{opacity:0;transform:translateY(0) scale(0.6)} 60%{opacity:1} 100%{opacity:0;transform:translateY(-90px) scale(1.3)} }
@keyframes shimmer  { 0%,100%{opacity:0.5} 50%{opacity:1} }
@keyframes starBurst{ 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 40%{opacity:1} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.5)} }
`;

// 8 burst stars shooting out radially
const BURST_STARS = Array.from({ length: 8 }, (_, i) => ({
  angle: (i * 45) * Math.PI / 180,
  dist: 80 + (i % 3) * 20,
  delay: i * 0.04,
}));

const PARTICLES = ['✨','⭐','🌟','💫','✨','⭐','🌟'];

export default function LevelUpModal({ newLevel, prevLevel = null, classData, onDismiss }) {
  const isMilestone = isTierMilestone(newLevel);
  const newTier     = getSkinTier(newLevel);
  const tierMeta    = TIER_META[newTier];

  useEffect(() => {
    playLevelUp();
    const timer = setTimeout(onDismiss, 4500);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
      onClick={onDismiss}
    >
      <style>{PARTICLES_CSS}</style>

      {/* Always-on floating particles */}
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position: 'fixed',
          left: `${6 + i * 13}%`,
          bottom: `${15 + (i % 3) * 8}%`,
          fontSize: `${1.1 + (i % 3) * 0.3}rem`,
          animation: `rise ${1.0 + i * 0.2}s ease-out ${i * 0.12}s infinite`,
          pointerEvents: 'none',
          zIndex: 51,
        }}>{p}</div>
      ))}

      {/* Radial star burst */}
      {BURST_STARS.map((s, i) => (
        <div key={i} style={{
          position: 'fixed',
          top: '50%', left: '50%',
          width: 10, height: 10,
          transform: `translate(-50%,-50%) translate(${Math.cos(s.angle)*s.dist}px, ${Math.sin(s.angle)*s.dist}px)`,
          animation: `starBurst 0.8s ease-out ${s.delay}s both`,
          fontSize: '1.1rem', pointerEvents: 'none', zIndex: 51,
        }}>⭐</div>
      ))}

      <div
        className="w-full max-w-xs rounded-3xl p-7 text-center animate-[levelUp_0.6s_ease-out_forwards]"
        style={{
          background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
          boxShadow: `0 0 60px ${classData.glowColor}, 0 0 ${isMilestone ? '120px' : '40px'} ${classData.glowColor}55`,
          border: `2px solid ${classData.primaryColor}80`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Tier milestone banner */}
        {isMilestone && (
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 12,
            padding: '4px 14px',
            display: 'inline-block',
            marginBottom: 12,
            fontSize: '0.7rem',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            animation: 'shimmer 1.4s ease-in-out infinite',
          }}>
            {tierMeta.evolveMsg}
          </div>
        )}

        {/* Character display */}
        {isMilestone && prevLevel !== null ? (
          /* Before → After comparison */
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 12 }}>
            <div style={{ textAlign: 'center', opacity: 0.65 }}>
              <PixelCharacter classId={classData.id} level={prevLevel} scale={4} animate={false} grayscale />
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.6rem', marginTop: 4 }}>
                {TIER_META[getSkinTier(prevLevel)]?.label}
              </div>
            </div>
            <div style={{ color: '#fff', fontSize: '1.5rem', opacity: 0.8 }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ animation: 'float 1.5s ease-in-out infinite' }}>
                <PixelCharacter classId={classData.id} level={newLevel} scale={5} animate={false} />
              </div>
              <div style={{ color: tierMeta.color, fontSize: '0.65rem', fontWeight: 700, marginTop: 4 }}>
                {tierMeta.icon} {tierMeta.label}
              </div>
            </div>
          </div>
        ) : (
          /* Normal level-up: just the emoji floating */
          <div className="text-6xl mb-4" style={{ animation: 'float 1.5s ease-in-out infinite' }}>
            {classData.emoji}
          </div>
        )}

        <div className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">
          Level Up!
        </div>

        <div className="font-display text-5xl font-bold text-white mb-1">
          Lv.{newLevel}
        </div>

        <div className="text-base font-semibold mb-4" style={{ color: classData.primaryColor }}>
          {classData.name}の力が増した！
        </div>

        {!isMilestone && (
          <div className="grid grid-cols-2 gap-2 mb-5">
            {Object.entries(classData.stats).map(([key, val]) => (
              <div key={key} className="bg-black/20 rounded-xl py-2 px-3">
                <div className="text-sm font-bold text-white">{val}</div>
                <div className="text-xs text-white/60">
                  {key === 'strength' ? '力量' : key === 'magic' ? '魔法' : key === 'agility' ? '敏捷' : '耐力'}
                </div>
              </div>
            ))}
          </div>
        )}

        <button onClick={onDismiss} className="text-sm text-white/60 hover:text-white transition-colors">
          點擊繼續 →
        </button>
      </div>
    </div>
  );
}
