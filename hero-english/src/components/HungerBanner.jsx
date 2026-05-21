import { useState, useEffect } from 'react';

const DISMISS_KEY = 'hej_hunger_banner_dismissed';

export default function HungerBanner({ hero, classData, happiness, onGoTrain }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const daysSince = hero?.lastStudied
    ? Math.floor((Date.now() - new Date(hero.lastStudied).getTime()) / 86400000)
    : (hero ? 0 : -1);

  const isHungry = daysSince >= 3;
  const isCritical = happiness < 20;

  useEffect(() => {
    if (!isHungry) return;
    const dismissed = sessionStorage.getItem(DISMISS_KEY);
    if (dismissed) return;
    // Slight delay so it slides in after mount
    const t = setTimeout(() => { setVisible(true); setMounted(true); }, 800);
    return () => clearTimeout(t);
  }, [isHungry]);

  if (!mounted) return null;

  const bgColor = isCritical ? '#3B0000' : '#1A1200';
  const borderColor = isCritical ? '#DC2626' : '#F59E0B';
  const accentColor = isCritical ? '#EF4444' : '#F59E0B';

  const dismiss = () => {
    setVisible(false);
    setTimeout(() => setMounted(false), 400);
    sessionStorage.setItem(DISMISS_KEY, '1');
  };

  const goTrain = () => {
    dismiss();
    onGoTrain();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 80,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: '0 12px',
        transform: visible ? 'translateY(0)' : 'translateY(120%)',
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      <div
        style={{
          background: bgColor,
          border: `1.5px solid ${borderColor}`,
          borderRadius: 20,
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: `0 4px 24px ${accentColor}40`,
        }}
      >
        {/* Character emoji with pulse */}
        <div
          style={{
            fontSize: 32,
            flexShrink: 0,
            animation: isCritical ? 'hungerShake 0.6s ease-in-out infinite' : 'hungerFloat 2s ease-in-out infinite',
            filter: `drop-shadow(0 0 8px ${accentColor}80)`,
          }}
        >
          {classData.emoji}
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: accentColor, marginBottom: 2 }}>
            {isCritical ? '⚠️ 危急！英雄體力耗盡！' : `🍖 ${daysSince}天沒練習！英雄餓了！`}
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            答題幫助活化角色，恢復體力！
          </div>
        </div>

        {/* CTA button */}
        <button
          onClick={goTrain}
          style={{
            flexShrink: 0,
            background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '8px 12px',
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: `0 2px 10px ${classData.glowColor}`,
            whiteSpace: 'nowrap',
          }}
        >
          去練習 ⚡
        </button>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          style={{
            flexShrink: 0,
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.3)',
            cursor: 'pointer',
            fontSize: 16,
            padding: '4px',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      </div>

      <style>{`
        @keyframes hungerFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes hungerShake{0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}
      `}</style>
    </div>
  );
}
