import { useState } from 'react';

const GRADES = ['國一', '國二', '國三', '高一', '高二', '高三', '大一', '大二', '大三', '大四', '社會人士'];

export default function ProfileSetupModal({ heroName, existingProfile, onSave, onSkip }) {
  const [nickname, setNickname] = useState(existingProfile?.nickname || heroName || '');
  const [grade, setGrade] = useState(existingProfile?.grade || '');
  const [school, setSchool] = useState(existingProfile?.school || '');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!nickname.trim()) { setError('請輸入排行榜暱稱'); return; }
    if (!grade) { setError('請選擇年級'); return; }
    onSave({ nickname: nickname.trim(), grade, school: school.trim() });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
    >
      <div
        className="w-full rounded-t-3xl px-5 pt-5 pb-10"
        style={{
          background: 'var(--cozy-panel)',
          borderTop: '1px solid var(--cozy-border)',
          maxWidth: '480px',
        }}
      >
        {/* Handle */}
        <div className="w-10 h-1 rounded-full mx-auto mb-5" style={{ background: 'var(--cozy-border)' }} />

        <div className="text-lg font-bold text-ink mb-1">設定個人資料</div>
        <div className="text-xs text-gray-500 mb-5">資料將用於排行榜顯示，可隨時在選單中修改</div>

        {/* Nickname */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-1.5 font-medium">排行榜暱稱 *</div>
          <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(140,100,55,0.1)', border: '1px solid var(--cozy-border)' }}>
            <input
              type="text"
              value={nickname}
              onChange={e => { setNickname(e.target.value); setError(''); }}
              placeholder="輸入你的暱稱"
              maxLength={16}
              className="w-full bg-transparent text-sm text-ink placeholder-gray-500 outline-none"
              autoComplete="off"
            />
          </div>
          <div className="text-xs text-gray-600 mt-1 text-right">{nickname.length}/16</div>
        </div>

        {/* Grade */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-1.5 font-medium">年級 *</div>
          <div className="flex flex-wrap gap-2">
            {GRADES.map(g => (
              <button
                key={g}
                onClick={() => { setGrade(g); setError(''); }}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                style={{
                  background: grade === g ? 'rgba(99,102,241,1)' : 'rgba(140,100,55,0.1)',
                  color: grade === g ? '#fff' : 'var(--cozy-ink-soft)',
                  border: grade === g ? '1px solid transparent' : '1px solid var(--cozy-border)',
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* School */}
        <div className="mb-5">
          <div className="text-xs text-gray-400 mb-1.5 font-medium">學校（選填）</div>
          <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(140,100,55,0.1)', border: '1px solid var(--cozy-border)' }}>
            <input
              type="text"
              value={school}
              onChange={e => setSchool(e.target.value)}
              placeholder="輸入學校名稱"
              maxLength={20}
              className="w-full bg-transparent text-sm text-ink placeholder-gray-500 outline-none"
              autoComplete="off"
            />
          </div>
        </div>

        {error && <div className="text-xs text-red-400 mb-3">{error}</div>}

        <button
          onClick={handleSave}
          className="w-full py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 mb-3"
          style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', color: '#fff' }}
        >
          儲存並繼續
        </button>
        {onSkip && (
          <button
            onClick={onSkip}
            className="w-full py-2 text-xs text-gray-500"
          >
            稍後設定
          </button>
        )}
      </div>
    </div>
  );
}
