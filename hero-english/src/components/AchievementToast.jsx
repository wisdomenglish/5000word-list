import { useEffect } from 'react';
import { ACHIEVEMENTS, ACHIEVEMENT_TYPES, RARITY_META } from '../data/achievements';

const TOAST_CSS = `
@keyframes slideInUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
@keyframes toastShimmer { 0%,100%{opacity:0.7} 50%{opacity:1} }
`;

export default function AchievementToast({ achievementId, onDismiss }) {
  const ach = ACHIEVEMENTS.find(a => a.id === achievementId);
  if (!ach) return null;

  const type    = ACHIEVEMENT_TYPES[ach.type];
  const rarity  = RARITY_META[ach.rarity ?? 'common'];

  useEffect(() => {
    const t = setTimeout(onDismiss, 3800);
    return () => clearTimeout(t);
  }, [achievementId, onDismiss]);

  return (
    <div
      onClick={onDismiss}
      style={{
        position: 'fixed',
        bottom: 84,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 60,
        width: 'calc(100% - 32px)',
        maxWidth: 420,
        animation: 'slideInUp 0.35s ease-out forwards',
        cursor: 'pointer',
      }}
    >
      <style>{TOAST_CSS}</style>
      <div style={{
        background: '#1E1F35',
        border: `1.5px solid ${rarity.color}55`,
        borderRadius: 16,
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxShadow: `0 4px 24px rgba(0,0,0,0.4), ${rarity.glow}`,
      }}>
        {/* Icon */}
        <div style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          background: type.bg,
          border: `1px solid ${type.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem',
        }}>
          {ach.icon}
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{ach.title}</span>
            <span style={{
              fontSize: '0.6rem', fontWeight: 700, padding: '1px 6px', borderRadius: 20,
              background: `${rarity.color}25`, color: rarity.color,
              animation: 'toastShimmer 1.5s ease-in-out infinite',
            }}>{RARITY_META[ach.rarity ?? 'common'].label}</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem' }}>{ach.desc}</div>
          <div style={{ color: type.color, fontSize: '0.68rem', fontWeight: 600, marginTop: 2 }}>
            🎁 {ach.reward}
          </div>
        </div>

        {/* Badge */}
        <div style={{
          fontSize: '0.65rem', color: '#9CA3AF',
          flexShrink: 0, textAlign: 'right', lineHeight: 1.4,
        }}>
          成就解鎖<br/>
          <span style={{ fontSize: '0.55rem' }}>點擊關閉</span>
        </div>
      </div>
    </div>
  );
}
