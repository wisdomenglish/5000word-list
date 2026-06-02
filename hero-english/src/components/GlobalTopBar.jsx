import { Flame, Menu } from 'lucide-react';

export default function GlobalTopBar({ streak, level, xpProgress, onOpenDrawer }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '480px',
        height: '48px',
        background: 'rgba(15,15,20,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        padding: '0 16px',
        zIndex: 40,
      }}
    >
      {/* XP progress strip */}
      {xpProgress && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
          background: 'rgba(255,255,255,0.05)',
        }}>
          <div style={{
            height: '100%',
            width: `${xpProgress.percent}%`,
            background: 'linear-gradient(90deg,#7C3AED,#A78BFA)',
            transition: 'width 1s ease',
          }} />
        </div>
      )}

      {/* Streak + Level */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '3px',
          background: 'rgba(245,158,11,0.12)',
          border: '1px solid rgba(245,158,11,0.3)',
          borderRadius: 20, padding: '3px 8px 3px 6px',
        }}>
          <Flame size={13} color="#F59E0B" aria-hidden="true" />
          <span style={{ fontSize: '0.73rem', fontWeight: '800', color: '#F59E0B' }}>{streak}</span>
        </div>
        {level != null && (
          <div style={{
            fontSize: '0.68rem', fontWeight: '800', lineHeight: 1,
            color: '#C4B5FD',
            background: 'rgba(124,58,237,0.18)',
            border: '1px solid rgba(124,58,237,0.35)',
            padding: '3px 8px', borderRadius: 20,
          }}>
            Lv.{level}
          </div>
        )}
      </div>

      {/* Center logo */}
      <img
        src="/pwa-192x192.png"
        alt="英雄英語"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '22%',
          imageRendering: 'pixelated',
          boxShadow: '0 0 8px rgba(124,58,237,0.5)',
        }}
      />

      {/* Hamburger */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={onOpenDrawer}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            padding: '10px',
            lineHeight: 1,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '44px',
            minHeight: '44px',
          }}
          aria-label="開啟選單"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
