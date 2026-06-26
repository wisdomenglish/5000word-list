import { User, ClipboardList, BookOpen, Library, Headphones } from 'lucide-react';

const TABS = [
  { id: 'character', label: '角色',   Icon: User,          color: '#A855F7', grad: 'linear-gradient(160deg,#C084FC,#7C3AED)' },
  { id: 'quests',    label: '任務',   Icon: ClipboardList, color: '#F59E0B', grad: 'linear-gradient(160deg,#FCD34D,#D97706)' },
  { id: 'learning',  label: '學習',   Icon: BookOpen,      color: '#3B82F6', grad: 'linear-gradient(160deg,#60A5FA,#2563EB)' },
  { id: 'listening', label: '聽力',   Icon: Headphones,    color: '#EC4899', grad: 'linear-gradient(160deg,#F9A8D4,#DB2777)' },
  { id: 'vocab',     label: '詞彙本', Icon: Library,       color: '#22C55E', grad: 'linear-gradient(160deg,#4ADE80,#16A34A)' },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav
      className="fixed bottom-0 z-40 flex"
      style={{
        background: 'linear-gradient(180deg, rgba(255,252,245,0.96), rgba(251,233,204,0.98))',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--cozy-border)',
        boxShadow: '0 -6px 20px var(--cozy-shadow)',
        maxWidth: '480px',
        margin: '0 auto',
        right: 'auto',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        overflow: 'visible',
      }}
    >
      {TABS.map(({ id, label, Icon, color, grad }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
            className="flex-1 flex flex-col items-center justify-end pb-1.5 transition-all duration-150 active:opacity-80 relative"
            style={{ minHeight: '58px', overflow: 'visible' }}
          >
            {/* Icon — 選中時浮起成發光圓形徽章 */}
            <div
              style={{
                width: 42, height: 42,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isActive ? grad : 'transparent',
                border: isActive ? '2.5px solid rgba(255,255,255,0.85)' : '2.5px solid transparent',
                boxShadow: isActive
                  ? `0 0 16px ${color}90, 0 4px 10px rgba(0,0,0,0.45), inset 0 1.5px 0 rgba(255,255,255,0.45)`
                  : 'none',
                transform: isActive ? 'translateY(-13px)' : 'translateY(2px)',
                transition: 'all 0.22s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              <Icon
                size={21}
                aria-hidden="true"
                style={{
                  color: isActive ? '#fff' : 'var(--cozy-ink-faint)',
                  filter: isActive ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.35))' : undefined,
                  transition: 'color 0.15s',
                }}
              />
            </div>
            <span
              className="text-xs font-bold"
              style={{
                color: isActive ? color : 'var(--cozy-ink-faint)',
                marginTop: isActive ? -9 : 1,
                transition: 'all 0.2s',
                textShadow: isActive ? `0 0 10px ${color}70` : undefined,
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
