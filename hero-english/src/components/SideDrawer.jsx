export default function SideDrawer({ open, onClose, user, authLoading, onSignIn, onSignOut, onManualSync, syncStatus, profile, onEditProfile }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(2px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 55,
          width: '272px',
          background: 'var(--cozy-panel)',
          borderLeft: '1px solid rgba(140,100,55,0.1)',
          display: 'flex',
          flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.25s ease',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 18px 16px',
          borderBottom: '1px solid rgba(140,100,55,0.1)',
        }}>
          <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--cozy-ink)' }}>選單</span>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(140,100,55,0.1)', border: 'none',
              color: 'var(--cozy-ink-soft)', width: '28px', height: '28px',
              borderRadius: '50%', cursor: 'pointer', fontSize: '0.85rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>

        {/* Profile section (always shown) */}
        <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(140,100,55,0.1)' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--cozy-ink-soft)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
            排行榜個人資料
          </div>
          {profile?.nickname ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--cozy-ink)' }}>{profile.nickname}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--cozy-ink-soft)' }}>
                  {profile.grade}{profile.school ? ` · ${profile.school}` : ''}
                </div>
              </div>
              <button
                onClick={() => { onEditProfile?.(); onClose(); }}
                style={{
                  padding: '6px 10px', borderRadius: '8px', border: 'none',
                  background: 'rgba(140,100,55,0.1)', color: 'var(--cozy-ink-soft)',
                  fontSize: '0.72rem', cursor: 'pointer', flexShrink: 0,
                }}
              >
                編輯
              </button>
            </div>
          ) : (
            <button
              onClick={() => { onEditProfile?.(); onClose(); }}
              style={{
                width: '100%', padding: '9px', borderRadius: '10px', border: '1px dashed var(--cozy-border)',
                background: 'transparent', color: 'var(--cozy-ink-soft)',
                fontSize: '0.78rem', cursor: 'pointer', textAlign: 'center',
              }}
            >
              ＋ 設定排行榜資料
            </button>
          )}
        </div>

        {/* Auth section */}
        <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(140,100,55,0.1)' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--cozy-ink-soft)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
            帳號與雲端同步
          </div>

          {authLoading ? (
            <div style={{ fontSize: '0.8rem', color: 'var(--cozy-ink-faint)', padding: '8px 0' }}>載入中…</div>
          ) : user ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid var(--cozy-border)' }}
                    alt=""
                  />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--cozy-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {user.displayName}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--cozy-ink-soft)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {user.email}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.72rem', color: 'var(--cozy-ink-soft)', marginBottom: '10px', minHeight: '16px' }}>
                {syncStatus}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={onManualSync}
                  style={{
                    flex: 1, padding: '8px 0', borderRadius: '10px', border: 'none',
                    background: 'rgba(140,100,55,0.1)', color: 'var(--cozy-ink)',
                    fontSize: '0.78rem', fontWeight: '600', cursor: 'pointer',
                  }}
                >
                  ☁️ 立即同步
                </button>
                <button
                  onClick={onSignOut}
                  style={{
                    padding: '8px 14px', borderRadius: '10px', border: 'none',
                    background: 'rgba(140,100,55,0.08)', color: 'var(--cozy-ink-soft)',
                    fontSize: '0.78rem', cursor: 'pointer',
                  }}
                >
                  登出
                </button>
              </div>
            </>
          ) : (
            <>
              <p style={{ fontSize: '0.78rem', color: 'var(--cozy-ink-soft)', lineHeight: 1.5, marginBottom: '12px' }}>
                登入後可在不同裝置間同步學習進度與自訂單字庫
              </p>
              <button
                onClick={onSignIn}
                style={{
                  width: '100%', padding: '11px', borderRadius: '12px',
                  background: 'rgba(140,100,55,0.1)',
                  border: '1px solid var(--cozy-border)',
                  color: 'var(--cozy-ink)', fontSize: '0.85rem', fontWeight: '600',
                  cursor: 'pointer', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '8px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                以 Google 帳號登入
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 'auto', padding: '18px', fontSize: '0.65rem', color: 'var(--cozy-ink-faint)', textAlign: 'center' }}>
          Hero's English Journey
        </div>
      </div>
    </>
  );
}
