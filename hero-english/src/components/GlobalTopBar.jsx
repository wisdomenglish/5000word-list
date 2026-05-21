import { Flame, Menu } from 'lucide-react';

export default function GlobalTopBar({ streak, onOpenDrawer }) {
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        zIndex: 40,
      }}
    >
      {/* Streak badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Flame size={16} color="#F59E0B" aria-hidden="true" />
        <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#F59E0B' }}>{streak}</span>
        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>天連續</span>
      </div>

      {/* Hamburger */}
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
  );
}
