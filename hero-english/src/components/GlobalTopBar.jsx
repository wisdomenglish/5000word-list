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
        background: 'rgba(255,250,240,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--cozy-border)',
        boxShadow: '0 2px 10px var(--cozy-shadow-2)',
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
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
          background: 'rgba(150,110,60,0.12)',
        }}>
          <div style={{
            height: '100%',
            width: `${xpProgress.percent}%`,
            background: 'linear-gradient(90deg,#F6A94C,#7FB069)',
            transition: 'width 1s ease',
          }} />
        </div>
      )}

      {/* Streak + Level */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '3px',
          background: 'linear-gradient(180deg,#FFE3A8,#FBC56B)',
          border: '1px solid #E0A23C',
          borderRadius: 20, padding: '3px 9px 3px 6px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 5px rgba(200,140,40,0.25)',
        }}>
          <Flame size={13} color="#E8740E" aria-hidden="true" />
          <span style={{ fontSize: '0.73rem', fontWeight: '800', color: '#9A5414' }}>{streak}</span>
        </div>
        {level != null && (
          <div style={{
            fontSize: '0.68rem', fontWeight: '800', lineHeight: 1,
            color: '#3C6B2E',
            background: 'linear-gradient(180deg,#CDEBBB,#A9D88F)',
            border: '1px solid #7FB069',
            padding: '4px 9px', borderRadius: 20,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), 0 2px 5px rgba(120,160,90,0.25)',
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
          boxShadow: '0 0 0 2px rgba(246,169,76,0.4), 0 2px 8px rgba(200,140,40,0.35)',
        }}
      />

      {/* Hamburger */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={onOpenDrawer}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--cozy-ink-soft)',
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
