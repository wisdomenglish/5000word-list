import { useState, useEffect } from 'react';
import { fetchLeaderboard, getWeekKey, getMonthKey } from '../lib/leaderboard';

const FILTERS = [
  { id: 'level',   label: '等級' },
  { id: 'weekly',  label: '本週' },
  { id: 'monthly', label: '本月' },
  { id: 'custom',  label: '自訂單字' },
];

const MEDALS = ['🥇', '🥈', '🥉'];

const CLASS_ICONS = {
  swordsman: '⚔️', mage: '🪄', beastTamer: '🐾', fighter: '🥊',
};

function getScore(row, filter, weekKey, monthKey) {
  if (filter === 'level')   return { value: row.totalXP ?? 0, unit: 'XP' };
  if (filter === 'weekly')  return { value: row.weeklyXPKey === weekKey ? (row.weeklyXP ?? 0) : 0, unit: 'XP' };
  if (filter === 'monthly') return { value: row.monthlyXPKey === monthKey ? (row.monthlyXP ?? 0) : 0, unit: 'XP' };
  if (filter === 'custom')  return { value: row.customWordsCount ?? 0, unit: '字' };
  return { value: 0, unit: '' };
}

export default function LeaderboardSection({ uid, primaryColor, onEditProfile }) {
  const [filter, setFilter] = useState('level');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const weekKey = getWeekKey();
  const monthKey = getMonthKey();

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchLeaderboard()
      .then(data => setRows(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const sorted = [...rows].sort((a, b) => {
    if (filter === 'level')   return b.level - a.level || b.totalXP - a.totalXP;
    if (filter === 'weekly')  return (b.weeklyXPKey  === weekKey  ? b.weeklyXP  ?? 0 : 0) - (a.weeklyXPKey  === weekKey  ? a.weeklyXP  ?? 0 : 0);
    if (filter === 'monthly') return (b.monthlyXPKey === monthKey ? b.monthlyXP ?? 0 : 0) - (a.monthlyXPKey === monthKey ? a.monthlyXP ?? 0 : 0);
    if (filter === 'custom')  return (b.customWordsCount ?? 0) - (a.customWordsCount ?? 0);
    return 0;
  });

  const myRank = uid ? sorted.findIndex(r => r.uid === uid) : -1;

  const renderRow = (row, rank) => {
    const isMe = row.uid === uid;
    const { value, unit } = getScore(row, filter, weekKey, monthKey);
    return (
      <div
        key={row.uid}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5"
        style={{
          background: isMe ? `${primaryColor}22` : 'rgba(255,255,255,0.04)',
          border: `1px solid ${isMe ? primaryColor + '50' : 'transparent'}`,
        }}
      >
        <div className="w-6 text-center flex-shrink-0">
          {rank < 3
            ? <span className="text-base">{MEDALS[rank]}</span>
            : <span className="text-xs text-gray-500 font-medium">{rank + 1}</span>
          }
        </div>
        <span className="text-base flex-shrink-0">{CLASS_ICONS[row.classId] ?? '🧙'}</span>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-white truncate">
            {row.nickname}
            {isMe && <span className="ml-1 text-xs" style={{ color: primaryColor }}>← 我</span>}
          </div>
          <div className="text-xs text-gray-500 truncate">
            {row.grade}{row.school ? ` · ${row.school}` : ''}
          </div>
        </div>
        <div className="flex-shrink-0 text-right">
          {filter === 'level' && (
            <div className="text-xs font-bold" style={{ color: isMe ? primaryColor : 'rgba(255,255,255,0.7)' }}>
              Lv.{row.level}
            </div>
          )}
          <div className="text-xs font-semibold" style={{ color: isMe ? primaryColor : 'rgba(255,255,255,0.5)' }}>
            {value.toLocaleString()} {unit}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-gray-400 tracking-wide">排行榜</div>
        <div className="flex items-center gap-2">
          {!loading && !error && (
            <span className="text-xs text-gray-600">{rows.length} 位玩家</span>
          )}
          {uid && onEditProfile && (
            <button
              onClick={onEditProfile}
              className="text-xs px-2 py-1 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
            >
              編輯資料
            </button>
          )}
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-all"
            style={{
              background: filter === f.id ? primaryColor : 'rgba(255,255,255,0.06)',
              color: filter === f.id ? '#fff' : 'rgba(255,255,255,0.5)',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-8 text-xs text-gray-500">
          <div className="w-3 h-3 rounded-full border border-gray-500 border-t-transparent animate-spin" />
          載入排行榜…
        </div>
      )}

      {error && !loading && (
        <div className="text-center text-xs text-gray-500 py-6">無法載入排行榜，請稍後再試</div>
      )}

      {!loading && !error && sorted.length === 0 && (
        <div className="text-center py-8">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-sm text-gray-400">還沒有排行資料</div>
          <div className="text-xs text-gray-600 mt-1">登入並設定個人資料後自動上榜</div>
        </div>
      )}

      {!loading && !error && sorted.length > 0 && (
        <div className="space-y-2">
          {sorted.slice(0, 20).map((row, i) => renderRow(row, i))}

          {/* Show my rank if outside top 20 */}
          {myRank > 19 && uid && (
            <>
              <div className="text-center text-xs text-gray-700 py-1">·  ·  ·</div>
              {renderRow(sorted[myRank], myRank)}
            </>
          )}

          {/* Prompt non-logged-in or no-profile users */}
          {!uid && (
            <div
              className="flex items-center gap-3 rounded-xl px-3 py-3 mt-1"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px dashed rgba(99,102,241,0.3)' }}
            >
              <span className="text-xl">🔒</span>
              <div className="text-xs text-gray-400">登入並設定個人資料即可上榜</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
