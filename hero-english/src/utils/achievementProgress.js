// Returns { current, target, pct } for any achievement, or null if not trackable.
export function getAchievementProgress(id, { level, hero, stats, masteredCount }) {
  const s = stats ?? {};
  const h = hero ?? {};
  const clamp = (c, t) => ({ current: Math.min(c, t), target: t, pct: Math.min(1, c / t) });

  switch (id) {
    // Progress
    case 'prog_lv5':   return clamp(level, 5);
    case 'prog_lv10':  return clamp(level, 10);
    case 'prog_lv20':  return clamp(level, 20);
    case 'prog_lv30':  return clamp(level, 30);
    // Behavior
    case 'beh_streak3':  return clamp(h.streak ?? 0, 3);
    case 'beh_streak7':  return clamp(h.streak ?? 0, 7);
    case 'beh_streak30': return clamp(h.streak ?? 0, 30);
    // Difficulty
    case 'diff_c50':   return clamp(s.correctAnswers ?? 0, 50);
    case 'diff_c100':  return clamp(s.correctAnswers ?? 0, 100);
    case 'diff_c300':  return clamp(s.correctAnswers ?? 0, 300);
    case 'diff_c1000': return clamp(s.correctAnswers ?? 0, 1000);
    // Mastery - conversation
    case 'mastery_conv1':  return clamp(s.conversationSessions ?? 0, 1);
    case 'mastery_conv5':  return clamp(s.conversationSessions ?? 0, 5);
    case 'mastery_conv10': return clamp(s.conversationSessions ?? 0, 10);
    // Exploration
    case 'exp_vocab':    return clamp((s.typesAttempted ?? []).includes('vocab')    ? 1 : 0, 1);
    case 'exp_phrase':   return clamp((s.typesAttempted ?? []).includes('phrase')   ? 1 : 0, 1);
    case 'exp_reading':  return clamp((s.typesAttempted ?? []).includes('reading')  ? 1 : 0, 1);
    case 'exp_conv':     return clamp((s.typesAttempted ?? []).includes('conversation') ? 1 : 0, 1);
    case 'exp_all': {
      const needed = ['vocab', 'phrase', 'reading', 'conversation'];
      const done   = needed.filter(t => (s.typesAttempted ?? []).includes(t)).length;
      return clamp(done, 4);
    }
    // Limited
    case 'limited_weekend': return clamp(s.weekendSessions ?? 0, 3);
    case 'limited_night':   return clamp(s.nightSessions ?? 0, 1);
    case 'limited_morning': return clamp(s.morningSessions ?? 0, 1);
    default: return null;
  }
}

// Returns null if not time-limited, or { isOpen, label, urgency }
export function getTimeWindowStatus(ach) {
  if (!ach?.timeWindow) return null;
  const now  = new Date();
  const day  = now.getDay();  // 0=Sun, 6=Sat
  const hour = now.getHours();
  const min  = now.getMinutes();

  if (ach.timeWindow.type === 'weekend') {
    const isOpen = day === 0 || day === 6;
    if (isOpen) return { isOpen: true, label: '本週末限定 🏖️', urgency: 'weekend' };
    const daysLeft = day === 5 ? 1 : day === 0 ? 6 : 6 - day;
    return { isOpen: false, label: `${daysLeft} 天後開放`, urgency: 'locked' };
  }

  if (ach.timeWindow.type === 'hours') {
    const [start, end] = ach.timeWindow.hours;
    const endHour = end === 24 ? 24 : end;
    const isOpen = hour >= start && hour < endHour;
    if (isOpen) {
      const minsLeft = (endHour - hour - 1) * 60 + (60 - min);
      const urgency  = minsLeft < 60 ? 'soon' : 'today';
      return {
        isOpen: true,
        label: minsLeft < 60 ? `剩 ${minsLeft} 分鐘！` : `今日開放中 (${start}:00–${endHour === 24 ? '24' : endHour}:00)`,
        urgency,
      };
    }
    return {
      isOpen: false,
      label: `每日 ${start}:00–${endHour === 24 ? '24' : endHour}:00 開放`,
      urgency: 'locked',
    };
  }

  return null;
}
