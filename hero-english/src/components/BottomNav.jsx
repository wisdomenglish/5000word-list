import { User, ClipboardList, BookOpen, Library } from 'lucide-react';

const TABS = [
  { id: 'character', label: '角色',   Icon: User },
  { id: 'quests',    label: '任務',   Icon: ClipboardList },
  { id: 'learning',  label: '學習',   Icon: BookOpen },
  { id: 'vocab',     label: '詞彙本', Icon: Library },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex"
      style={{
        background: 'rgba(15,15,20,0.96)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        maxWidth: '480px',
        margin: '0 auto',
        right: 'auto',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      {TABS.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
            className="flex-1 flex flex-col items-center py-3 gap-0.5 transition-all duration-150 active:opacity-70"
            style={{ minHeight: '56px' }}
          >
            <Icon
              size={22}
              aria-hidden="true"
              style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.4)' }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.4)' }}
            >
              {label}
            </span>
            {isActive && (
              <div className="w-4 h-0.5 rounded-full bg-white mt-0.5" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
