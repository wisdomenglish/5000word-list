import { useState } from 'react';
import { BookOpen, Headphones, Mic, PenLine, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { MOOD_CONFIG } from '../data/classes';
import TaiwanMapWorld from './TaiwanMapWorld';
import LeaderboardSection from './LeaderboardSection';
import { getSkinTier, TIER_META } from '../utils/characterTier';
import { ACHIEVEMENTS, ACHIEVEMENT_TYPES, RARITY_META } from '../data/achievements';
import { getAchievementProgress, getTimeWindowStatus } from '../utils/achievementProgress';


// ── Action Pill ──────────────────────────────────────────────────────────────

function getActionPillData({ happiness, xpProgress, unlockedAchievements, hero }) {
  // 1. Critical stamina
  if (happiness < 20) return {
    icon: '💀', color: '#EF4444', bg: 'rgba(239,68,68,0.13)',
    message: `英雄體力剩 ${happiness}%！快去答題救牠`,
    tab: 'learning',
  };

  // 2. Limited-time achievements open
  const limitedOpen = ACHIEVEMENTS.filter(a => {
    if (!a.timeWindow) return false;
    const tw = getTimeWindowStatus(a);
    return tw?.isOpen && !unlockedAchievements[a.id];
  });
  if (limitedOpen.length > 0) {
    const isSoon = limitedOpen.some(a => getTimeWindowStatus(a)?.urgency === 'soon');
    return {
      icon: '⏰',
      message: `${limitedOpen.length} 個限時成就開放中！`,
      color: isSoon ? '#EF4444' : '#F59E0B',
      bg: isSoon ? 'rgba(239,68,68,0.13)' : 'rgba(245,158,11,0.13)',
      tab: 'quests',
    };
  }

  // 3. Close to leveling up (≥70% XP filled)
  if (xpProgress?.percent >= 70) {
    const xpLeft = xpProgress.xpNeeded - xpProgress.xpIntoLevel;
    return {
      icon: '⚡', color: '#60A5FA', bg: 'rgba(96,165,250,0.13)',
      message: `再 ${xpLeft} XP 升到 Lv.${xpProgress.level + 1}！`,
      tab: 'learning',
    };
  }

  // 4. Streak at risk (has streak, hasn't studied today)
  if (hero?.streak > 1 && hero?.lastStudied) {
    const lastDate = new Date(hero.lastStudied).toDateString();
    if (lastDate !== new Date().toDateString()) return {
      icon: '🔥', color: '#FB923C', bg: 'rgba(251,146,60,0.13)',
      message: `連續 ${hero.streak} 天！今天還沒練習`,
      tab: 'learning',
    };
  }

  return null;
}

function ActionPill({ icon, message, color, bg, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mx-4 mt-2 flex items-center gap-3 transition-all active:scale-[0.97]"
      style={{
        background: bg,
        border: `1px solid ${color}45`,
        borderRadius: 100,
        padding: '11px 18px',
        boxShadow: `0 0 18px ${color}28, 0 2px 8px rgba(0,0,0,0.25)`,
        cursor: 'pointer',
        width: 'calc(100% - 32px)',
      }}
      aria-label={message}
    >
      <span style={{ fontSize: '1.1rem', lineHeight: 1, flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1, textAlign: 'left', fontSize: '0.875rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
        {message}
      </span>
      <ChevronRight size={16} color={color} strokeWidth={2.5} style={{ flexShrink: 0 }} />
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

const STAMINA_LEVELS = [
  { min: 80, label: '元氣滿滿', icon: '💪', color: '#22C55E' },
  { min: 50, label: '稍微疲憊', icon: '😐', color: '#F59E0B' },
  { min: 20, label: '飢餓中！', icon: '🍖', color: '#F97316' },
  { min:  0, label: '危急狀態', icon: '💀', color: '#EF4444' },
];

function StaminaBar({ happiness, lastStudied }) {
  const daysSince = lastStudied
    ? Math.floor((Date.now() - new Date(lastStudied).getTime()) / 86400000)
    : 0;
  const lv = STAMINA_LEVELS.find(l => happiness >= l.min) ?? STAMINA_LEVELS[3];
  const isCritical = happiness < 20;
  const isHungry   = happiness < 50;

  return (
    <div className="mx-4 mt-3 rounded-2xl p-4" style={{ background: '#1A1B2E' }}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold tracking-wide">
          <span>體力值</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: lv.color }}>
          <span>{lv.icon}</span>
          <span>{lv.label}</span>
          {daysSince >= 1 && (
            <span className="text-gray-500 font-normal ml-1">· {daysSince}天未練習</span>
          )}
        </div>
      </div>

      {/* Bar */}
      <div className="relative h-3.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${happiness}%`,
            background: `linear-gradient(90deg, ${lv.color}66, ${lv.color})`,
            boxShadow: isHungry ? `0 0 8px ${lv.color}70` : undefined,
            animation: isCritical ? 'staminaPulse 1.4s ease-in-out infinite' : undefined,
          }}
        />
        {[25, 50, 75].map(p => (
          <div key={p} className="absolute top-0 h-full w-px bg-black/30" style={{ left: `${p}%` }} />
        ))}
      </div>

      {isHungry && (
        <p className="text-xs mt-2 text-center" style={{ color: lv.color }}>
          {isCritical
            ? '⚠️ 英雄體力耗盡！快去答題救牠！'
            : '🍖 英雄餓了！答題可以恢復體力！'}
        </p>
      )}
      <style>{`@keyframes staminaPulse{0%,100%{opacity:1}50%{opacity:0.45}}`}</style>
    </div>
  );
}

const ABILITY_CONFIG = [
  { key: 'reading',   label: '閱讀力', color: '#3B82F6', Icon: BookOpen },
  { key: 'listening', label: '聽力',   color: '#F59E0B', Icon: Headphones },
  { key: 'speaking',  label: '口說',   color: '#A855F7', Icon: Mic },
  { key: 'writing',   label: '寫作',   color: '#22C55E', Icon: PenLine },
];

const CEFR_COLOR = { A1:'#6B7280', A2:'#10B981', B1:'#3B82F6', B2:'#8B5CF6', C1:'#F59E0B', C2:'#EF4444' };

const CLASS_SUBTITLE = {
  swordsman: 'Vocabulary Warrior',
  mage: 'Vocabulary Mage',
  beastTamer: 'Phrase Tamer',
  fighter: 'Grammar Fighter',
};

const TIER_UNLOCK_LEVEL = { 1: 1, 2: 10, 3: 20, 4: 30 };

const COLLECTION_CSS = `
@keyframes shimmerBadge { 0%,100%{opacity:0.7} 50%{opacity:1} }
@keyframes urgencyPulse { 0%,100%{box-shadow:0 0 0 0 #EF444460} 50%{box-shadow:0 0 0 6px transparent} }
`;

function CollectionCard({ level, unlockedAchievements, classData }) {
  const tier          = getSkinTier(level);
  const tiersUnlocked = tier; // 1-4
  const totalTiers    = 4;
  const achUnlocked   = Object.keys(unlockedAchievements).length;
  const achTotal      = ACHIEVEMENTS.filter(a => !a.comingSoon).length;
  const pct           = Math.round(((tiersUnlocked - 1) / (totalTiers - 1)) * 100);

  const limitedNow = ACHIEVEMENTS.filter(a => {
    if (!a.timeWindow) return false;
    const tw = getTimeWindowStatus(a);
    return tw?.isOpen && !unlockedAchievements[a.id];
  });

  return (
    <div className="mx-4 mt-3 rounded-2xl overflow-hidden"
      style={{ background: '#1A1B2E', border: `1px solid ${classData.primaryColor}25` }}>
      <style>{COLLECTION_CSS}</style>

      {/* Header strip */}
      <div style={{
        background: `linear-gradient(135deg, ${classData.gradientFrom}80, ${classData.gradientTo}50)`,
        padding: '10px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>
          📖 英雄圖鑑
        </div>
        {limitedNow.length > 0 && (
          <div style={{
            background: '#EF4444', color: '#fff', fontWeight: 700,
            fontSize: '0.6rem', padding: '2px 8px', borderRadius: 20,
            animation: 'urgencyPulse 1.2s ease-in-out infinite',
          }}>
            ⏰ {limitedNow.length} 個限時成就開放中！
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Two counters */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Tiers */}
          <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="flex items-center justify-between mb-2">
              <span style={{ color: '#9CA3AF', fontSize: '0.65rem', fontWeight: 600 }}>角色造型</span>
              <span style={{ color: classData.primaryColor, fontWeight: 800, fontSize: '0.9rem' }}>
                {tiersUnlocked}/{totalTiers}
              </span>
            </div>
            <div style={{ height: 5, background: 'rgba(255,255,255,0.07)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 3,
                width: `${pct}%`,
                background: `linear-gradient(90deg,${classData.gradientFrom},${classData.primaryColor})`,
                transition: 'width 0.8s ease',
              }} />
            </div>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', marginTop: 4 }}>
              {TIER_META[tier]?.label} 造型解鎖中
            </div>
          </div>

          {/* Achievements */}
          <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="flex items-center justify-between mb-2">
              <span style={{ color: '#9CA3AF', fontSize: '0.65rem', fontWeight: 600 }}>成就解鎖</span>
              <span style={{ color: '#F59E0B', fontWeight: 800, fontSize: '0.9rem' }}>
                {achUnlocked}/{achTotal}
              </span>
            </div>
            <div style={{ height: 5, background: 'rgba(255,255,255,0.07)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 3,
                width: `${Math.round((achUnlocked / achTotal) * 100)}%`,
                background: 'linear-gradient(90deg,#D97706,#F59E0B)',
                transition: 'width 0.8s ease',
              }} />
            </div>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', marginTop: 4 }}>
              {achTotal - achUnlocked} 個待解鎖
            </div>
          </div>
        </div>

        {/* Tier mini-icons */}
        <div className="flex gap-2 justify-center">
          {[1,2,3,4].map(t => {
            const m = TIER_META[t];
            const unlocked = tier >= t;
            return (
              <div key={t} style={{
                width: 40, height: 40, borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
                background: unlocked ? `${m.color}18` : 'rgba(255,255,255,0.03)',
                border: unlocked ? `1.5px solid ${m.color}50` : '1.5px solid rgba(255,255,255,0.06)',
                filter: unlocked ? 'none' : 'grayscale(1) opacity(0.25)',
                boxShadow: tier === t ? `0 0 12px ${m.color}50` : undefined,
              }}>
                {m.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function EvolutionRoadmap({ level, primaryColor }) {
  const currentTier = getSkinTier(level);
  return (
    <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
      <div className="text-xs font-semibold text-gray-400 mb-4 tracking-wide">進化路線</div>

      {/* Progress bar */}
      <div className="relative h-1.5 rounded-full mb-4 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${Math.min(100, ((currentTier - 1) / 3) * 100)}%`,
            background: primaryColor,
            boxShadow: `0 0 6px ${primaryColor}80`,
          }}
        />
        {/* Tick marks at each tier */}
        {[0, 33.3, 66.6, 100].map((p, i) => (
          <div key={i} style={{
            position: 'absolute', top: 0, left: `${p}%`,
            width: 2, height: '100%',
            background: 'rgba(0,0,0,0.4)',
            transform: 'translateX(-50%)',
          }} />
        ))}
      </div>

      {/* Tier nodes */}
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4].map(tier => {
          const meta     = TIER_META[tier];
          const unlocked = currentTier >= tier;
          const isCur    = currentTier === tier;
          const reqLv    = TIER_UNLOCK_LEVEL[tier];
          return (
            <div
              key={tier}
              className="flex flex-col items-center gap-1 rounded-xl py-2.5 px-1"
              style={{
                background: isCur
                  ? `${meta.color}20`
                  : unlocked
                  ? 'rgba(255,255,255,0.04)'
                  : 'rgba(255,255,255,0.02)',
                border: isCur ? `1px solid ${meta.color}60` : '1px solid transparent',
                boxShadow: isCur ? `0 0 10px ${meta.color}30` : undefined,
                transition: 'all 0.3s',
              }}
            >
              <div style={{ fontSize: '1.3rem', filter: unlocked ? 'none' : 'grayscale(1) opacity(0.35)' }}>
                {meta.icon}
              </div>
              <div
                className="text-xs font-bold text-center leading-tight"
                style={{ color: isCur ? meta.color : unlocked ? '#E5E7EB' : '#4B5563' }}
              >
                {meta.label}
              </div>
              <div className="text-xs text-center" style={{ color: unlocked ? '#9CA3AF' : '#374151', fontSize: '0.65rem' }}>
                {unlocked ? '✓' : `Lv.${reqLv}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ACH_SECTION_CSS = `
@keyframes limitedPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.7;transform:scale(0.95)} }
`;

function AchievementSection({ unlockedAchievements, primaryColor, progressData }) {
  const categories = Object.keys(ACHIEVEMENT_TYPES);
  const totalCount    = ACHIEVEMENTS.filter(a => !a.comingSoon).length;
  const unlockedCount = Object.keys(unlockedAchievements).length;
  const [collapsed, setCollapsed] = useState({});
  const toggleCat = (cat) => setCollapsed(p => ({ ...p, [cat]: !p[cat] }));

  return (
    <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
      <style>{ACH_SECTION_CSS}</style>
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-gray-400 tracking-wide">成就系統</div>
        <div className="text-xs font-bold" style={{ color: primaryColor }}>
          {unlockedCount} / {totalCount}
        </div>
      </div>

      <div className="space-y-4">
        {categories.map(cat => {
          const typeMeta      = ACHIEVEMENT_TYPES[cat];
          const catAchs       = ACHIEVEMENTS.filter(a => a.type === cat);
          const unlockedInCat = catAchs.filter(a => unlockedAchievements[a.id]);
          const isCollapsed   = !!collapsed[cat];

          return (
            <div key={cat}>
              {/* Category header — tappable to collapse */}
              <button
                onClick={() => toggleCat(cat)}
                className="w-full flex items-center justify-between mb-2.5"
                style={{ minHeight: '36px' }}
                aria-expanded={!isCollapsed}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{ background: typeMeta.bg, color: typeMeta.color }}>
                    {typeMeta.label}
                  </span>
                  <span className="text-xs text-gray-500">{unlockedInCat.length}/{catAchs.length}</span>
                </div>
                {isCollapsed
                  ? <ChevronDown size={14} color="rgba(255,255,255,0.3)" />
                  : <ChevronUp size={14} color="rgba(255,255,255,0.3)" />
                }
              </button>

              {!isCollapsed && <div className="space-y-2">
                {catAchs.map(ach => {
                  const isUnlocked = !!unlockedAchievements[ach.id];
                  const rarityMeta = RARITY_META[ach.rarity ?? 'common'];
                  const progress   = progressData ? getAchievementProgress(ach.id, progressData) : null;
                  const tw         = getTimeWindowStatus(ach);
                  const isLimitedOpen = tw?.isOpen;
                  const isSoon        = tw?.urgency === 'soon';

                  return (
                    <div key={ach.id} style={{
                      display: 'flex', gap: 10, alignItems: 'flex-start',
                      padding: '10px 12px', borderRadius: 14,
                      background: isUnlocked
                        ? `${typeMeta.color}12`
                        : isLimitedOpen
                        ? 'rgba(239,68,68,0.08)'
                        : 'rgba(255,255,255,0.03)',
                      border: isUnlocked
                        ? `1px solid ${rarityMeta.color}40`
                        : isLimitedOpen
                        ? `1px solid ${isSoon ? '#EF4444' : '#F59E0B'}50`
                        : '1px solid rgba(255,255,255,0.05)',
                      boxShadow: isUnlocked ? rarityMeta.glow : undefined,
                      opacity: !isUnlocked && tw && !isLimitedOpen ? 0.55 : 1,
                    }}>
                      {/* Icon */}
                      <div style={{
                        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.3rem',
                        background: isUnlocked ? typeMeta.bg : 'rgba(255,255,255,0.05)',
                        filter: isUnlocked || isLimitedOpen ? 'none' : 'grayscale(1) opacity(0.5)',
                        position: 'relative',
                      }}>
                        {ach.icon}
                        {ach.comingSoon && (
                          <div style={{
                            position: 'absolute', inset: 0, borderRadius: 10,
                            background: 'rgba(0,0,0,0.5)', fontSize: '0.65rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>🔜</div>
                        )}
                      </div>

                      {/* Text + progress */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 1 }}>
                          <span style={{
                            color: isUnlocked ? '#fff' : '#D1D5DB',
                            fontWeight: 700, fontSize: '0.78rem',
                          }}>{ach.title}</span>
                          {/* Rarity badge */}
                          <span style={{
                            fontSize: '0.62rem', padding: '1px 6px', borderRadius: 20,
                            background: `${rarityMeta.color}20`, color: rarityMeta.color, fontWeight: 700,
                          }}>{rarityMeta.label}</span>
                          {/* Limited-time open badge */}
                          {isLimitedOpen && !isUnlocked && (
                            <span style={{
                              fontSize: '0.62rem', padding: '1px 6px', borderRadius: 20,
                              background: isSoon ? '#EF4444' : '#F59E0B',
                              color: '#fff', fontWeight: 800,
                              animation: isSoon ? 'limitedPulse 0.8s ease-in-out infinite' : 'shimmerBadge 1.5s ease-in-out infinite',
                            }}>{isSoon ? '⏰ 快截止！' : '🔓 開放中'}</span>
                          )}
                        </div>

                        <div style={{ color: '#6B7280', fontSize: '0.65rem', marginBottom: 3 }}>
                          {ach.desc}
                        </div>

                        {/* Time window label (for locked time-limited) */}
                        {tw && !isUnlocked && (
                          <div style={{
                            color: isLimitedOpen ? (isSoon ? '#EF4444' : '#F59E0B') : '#4B5563',
                            fontSize: '0.68rem', fontWeight: 600, marginBottom: 3,
                          }}>
                            ⏱ {tw.label}
                          </div>
                        )}

                        {/* Progress bar */}
                        {!isUnlocked && progress && progress.target > 1 && (
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                              <span style={{ color: '#6B7280', fontSize: '0.68rem' }}>
                                {progress.current} / {progress.target}
                              </span>
                              <span style={{ color: typeMeta.color, fontSize: '0.68rem', fontWeight: 600 }}>
                                {Math.round(progress.pct * 100)}%
                              </span>
                            </div>
                            <div style={{ height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
                              <div style={{
                                height: '100%', borderRadius: 2,
                                width: `${Math.round(progress.pct * 100)}%`,
                                background: typeMeta.color,
                                transition: 'width 0.8s ease',
                              }} />
                            </div>
                          </div>
                        )}

                        {/* Reward line */}
                        {isUnlocked && (
                          <div style={{ color: typeMeta.color, fontSize: '0.7rem', fontWeight: 600 }}>
                            {ach.rewardIcon} {ach.reward}
                          </div>
                        )}
                      </div>

                      {/* Unlocked checkmark */}
                      {isUnlocked && (
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                          background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontSize: '0.75rem', fontWeight: 900,
                        }}>✓</div>
                      )}
                    </div>
                  );
                })}
              </div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AbilityBar({ label, Icon, value, color }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} color={color} aria-hidden="true" className="shrink-0" />
      <span className="text-sm text-gray-300 w-12 shrink-0">{label}</span>
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: color, boxShadow: `0 0 6px ${color}60` }}
        />
      </div>
      <span className="text-sm font-bold text-white w-8 text-right">{value}</span>
    </div>
  );
}

function StudyCta({ happiness, xpProgress, classData, onNavigate }) {
  const isUrgent = happiness < 30;
  const isNearLv = xpProgress?.percent >= 75;
  let bg, label, sub, icon;
  if (isUrgent) {
    bg = 'linear-gradient(135deg,#EF4444,#DC2626)';
    label = '英雄快沒體力了！'; sub = '立刻答題補充體力'; icon = '💀';
  } else if (isNearLv) {
    bg = `linear-gradient(135deg,${classData.gradientFrom},${classData.primaryColor})`;
    label = `快升到 Lv.${xpProgress.level + 1}！`;
    sub = `還差 ${xpProgress.xpNeeded - xpProgress.xpIntoLevel} XP`; icon = '⚡';
  } else {
    bg = 'linear-gradient(135deg,#D97706,#F97316)';
    label = '今日練習'; sub = '繼續你的英語冒險'; icon = '⚔️';
  }
  const shadowColor = isUrgent ? '#EF4444' : isNearLv ? classData.primaryColor : '#F59E0B';
  return (
    <button
      onClick={() => onNavigate?.('learning')}
      className="active:scale-[0.97] transition-transform"
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        margin: '12px 16px 0', width: 'calc(100% - 32px)',
        padding: '15px 18px',
        background: bg, border: 'none', borderRadius: 18, cursor: 'pointer',
        boxShadow: `0 4px 28px ${shadowColor}50, 0 2px 8px rgba(0,0,0,0.3)`,
      }}
    >
      <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1, textAlign: 'left' }}>
        <div style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', lineHeight: 1.3 }}>{label}</div>
        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem' }}>{sub}</div>
      </div>
      <div style={{
        background: 'rgba(0,0,0,0.2)', borderRadius: 10,
        padding: '5px 12px', color: '#fff', fontWeight: 800, fontSize: '0.8rem',
      }}>GO ›</div>
    </button>
  );
}

export default function CharacterTab({ hero, classData, xpProgress, mood, happiness, abilities, cefr, stats, masteredCount, uid, onEditProfile, accuracy, checkinDays, unlockedAchievements = {}, profile, onNavigate }) {
  const subtitle     = CLASS_SUBTITLE[classData.id] ?? classData.nameEn;
  const progressData = { level: xpProgress.level, hero, stats, masteredCount, profile };
  const pillData     = getActionPillData({ happiness, xpProgress, unlockedAchievements, hero });

  return (
    <div className="pb-24 overflow-y-auto">
      {/* Header */}
      <div className="px-5 pt-5 pb-1 text-center text-xs text-gray-500 font-semibold tracking-widest uppercase">
        大廳
      </div>

      {/* Dynamic action pill */}
      {pillData && (
        <ActionPill
          icon={pillData.icon}
          message={pillData.message}
          color={pillData.color}
          bg={pillData.bg}
          onClick={() => onNavigate?.(pillData.tab)}
        />
      )}

      {/* 圖鑑完成度 */}
      <CollectionCard
        level={xpProgress.level}
        unlockedAchievements={unlockedAchievements}
        classData={classData}
      />

      {/* Walking hero world */}
      <TaiwanMapWorld
        classData={classData}
        level={xpProgress.level}
        checkinDays={checkinDays}
      />

      {/* Game-style study CTA */}
      <StudyCta happiness={happiness} xpProgress={xpProgress} classData={classData} onNavigate={onNavigate} />

      {/* Name + Level + XP */}
      <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
        <div className="text-center mb-4">
          <div className="font-display text-lg font-bold text-white">
            {hero.name} · Lv.{xpProgress.level}
          </div>
          <div className="text-sm text-gray-400">{subtitle}</div>
        </div>

        {/* XP bar */}
        <div className="mb-1 flex justify-between text-xs text-gray-400">
          <span>{xpProgress.xpIntoLevel} / {xpProgress.xpNeeded} XP</span>
          <span>下一級</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${xpProgress.percent}%`,
              background: `linear-gradient(90deg, ${classData.gradientFrom}, ${classData.primaryColor})`,
            }}
          />
        </div>

        {/* Stat badges — game resource style */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { icon: '📘', value: cefr,         label: '英語等級', color: CEFR_COLOR[cefr] ?? '#60A5FA' },
            { icon: '⭐', value: masteredCount, label: '已掌握',   color: '#F59E0B' },
            { icon: '🔥', value: hero.streak,  label: '天連續',   color: '#F97316' },
          ].map(r => (
            <div key={r.label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '10px 4px 8px',
              background: `${r.color}12`,
              border: `1px solid ${r.color}35`,
              borderRadius: 14,
            }}>
              <span style={{ fontSize: '0.85rem', lineHeight: 1, marginBottom: 3 }}>{r.icon}</span>
              <span style={{ color: r.color, fontWeight: 800, fontSize: '0.95rem', lineHeight: 1 }}>{r.value}</span>
              <span style={{ color: '#6B7280', fontSize: '0.6rem', marginTop: 3 }}>{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stamina bar */}
      <StaminaBar happiness={happiness} lastStudied={hero.lastStudied} />

      {/* Ability bars */}
      <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
        <div className="text-xs font-semibold text-gray-400 mb-4 tracking-wide">能力值</div>
        <div className="space-y-4">
          {ABILITY_CONFIG.map(({ key, label, color, Icon }) => (
            <AbilityBar key={key} label={label} color={color} Icon={Icon} value={abilities[key]} />
          ))}
        </div>
      </div>

      {/* Evolution roadmap */}
      <EvolutionRoadmap level={xpProgress.level} primaryColor={classData.primaryColor} />

      {/* Achievement wall */}
      <AchievementSection
        unlockedAchievements={unlockedAchievements}
        primaryColor={classData.primaryColor}
        progressData={progressData}
      />

      {/* Leaderboard */}
      <LeaderboardSection
        uid={uid}
        primaryColor={classData.primaryColor}
        onEditProfile={onEditProfile}
      />
    </div>
  );
}
