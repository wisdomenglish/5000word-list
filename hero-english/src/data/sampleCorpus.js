// Placeholder corpus — replace with real data when provided
export const vocabulary = [
  { word: 'brave', zh: '勇敢的', pos: 'adj.', level: 'A2' },
  { word: 'quest', zh: '任務；探索', pos: 'n.', level: 'B1' },
  { word: 'sword', zh: '劍', pos: 'n.', level: 'A2' },
  { word: 'magic', zh: '魔法', pos: 'n.', level: 'A1' },
  { word: 'journey', zh: '旅程', pos: 'n.', level: 'A2' },
  { word: 'discover', zh: '發現', pos: 'v.', level: 'A2' },
  { word: 'challenge', zh: '挑戰', pos: 'n./v.', level: 'A2' },
  { word: 'victory', zh: '勝利', pos: 'n.', level: 'B1' },
  { word: 'ancient', zh: '古老的', pos: 'adj.', level: 'B1' },
  { word: 'treasure', zh: '寶藏', pos: 'n.', level: 'A2' },
  { word: 'hero', zh: '英雄', pos: 'n.', level: 'A1' },
  { word: 'monster', zh: '怪物', pos: 'n.', level: 'A1' },
  { word: 'battle', zh: '戰鬥', pos: 'n./v.', level: 'A2' },
  { word: 'power', zh: '力量；能力', pos: 'n.', level: 'A1' },
  { word: 'wisdom', zh: '智慧', pos: 'n.', level: 'B1' },
  { word: 'adventure', zh: '冒險', pos: 'n.', level: 'A2' },
  { word: 'forest', zh: '森林', pos: 'n.', level: 'A1' },
  { word: 'spell', zh: '咒語；拼寫', pos: 'n./v.', level: 'A2' },
  { word: 'protect', zh: '保護', pos: 'v.', level: 'A2' },
  { word: 'explore', zh: '探索', pos: 'v.', level: 'A2' },
  { word: 'fierce', zh: '兇猛的', pos: 'adj.', level: 'B1' },
  { word: 'legend', zh: '傳說', pos: 'n.', level: 'A2' },
  { word: 'shield', zh: '盾牌', pos: 'n.', level: 'A2' },
  { word: 'dragon', zh: '龍', pos: 'n.', level: 'A1' },
  { word: 'energy', zh: '能量；精力', pos: 'n.', level: 'A2' },
];

export const phrases = [
  { phrase: 'give up', zh: '放棄', level: 'A2' },
  { phrase: 'set out', zh: '出發；開始', level: 'B1' },
  { phrase: 'look for', zh: '尋找', level: 'A1' },
  { phrase: 'level up', zh: '升級', level: 'A1' },
  { phrase: 'stand out', zh: '脫穎而出', level: 'B1' },
  { phrase: 'take on', zh: '接受挑戰；應付', level: 'B1' },
  { phrase: 'break through', zh: '突破', level: 'B1' },
  { phrase: 'fight back', zh: '反擊', level: 'A2' },
  { phrase: 'move forward', zh: '向前進', level: 'A2' },
  { phrase: 'face up to', zh: '勇敢面對', level: 'B1' },
  { phrase: 'carry on', zh: '繼續；堅持', level: 'A2' },
  { phrase: 'show up', zh: '出現；露面', level: 'A2' },
];

// Fill-in-the-blank sentences using the vocabulary above
export const fillBlanks = [
  {
    sentence: 'The knight was very _____ and never ran away from danger.',
    answer: 'brave',
    choices: ['brave', 'angry', 'tired', 'quiet'],
    zh: '這位騎士非常勇敢，從不逃離危險。',
  },
  {
    sentence: 'The hero went on a _____ to find the magical sword.',
    answer: 'quest',
    choices: ['quest', 'rest', 'map', 'wish'],
    zh: '英雄踏上任務尋找魔法劍。',
  },
  {
    sentence: 'The wizard used a powerful _____ to defeat the monster.',
    answer: 'spell',
    choices: ['spell', 'book', 'fire', 'arrow'],
    zh: '法師用強力咒語擊敗了怪物。',
  },
  {
    sentence: 'They found hidden _____ deep inside the cave.',
    answer: 'treasure',
    choices: ['treasure', 'danger', 'water', 'sadness'],
    zh: '他們在洞穴深處找到了隱藏的寶藏。',
  },
  {
    sentence: 'The team worked together to _____ the village from the dragon.',
    answer: 'protect',
    choices: ['protect', 'leave', 'forget', 'copy'],
    zh: '團隊合作保護村莊不受龍的侵害。',
  },
];
