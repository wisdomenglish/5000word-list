// Studio Classroom 9月號（課文 U1-U14）— 目前僅 Unit 1 為完整樣張，供審核內容品質用。
// 審核通過後再依相同 schema 補齊 Unit 2-14（原始課文來源：Studio Classroom 9月號_課文 U1-U14.pdf）。
const MAGAZINE_UNITS_SC202509 = {
  "Unit 1": {
    title: "WePlay",
    chineseTitle: "WePlay：自在又安全的交友遊戲空間",
    passage: `Many people want to connect with others but find interacting in public hard. Social media offers a comfortable alternative. It lets users be part of the group without much risk. WePlay mixes games and social chat. Users create colorful online characters instead of showing their real faces. This extra bit of privacy can help shy users feel more relaxed.\n\nWePlay works like a social playground. Users enter virtual rooms and play short party games together. Some games ask players to guess words or draw pictures. Others test logic or quick thinking. Players can also talk using voice chat while they play. Many rooms have hosts who guide the game and manage the group. The shared activity helps people start conversations naturally.\n\nThe app feels less like endless scrolling and more like a quick social break. A player may join a room, play a game and chat for a few minutes. A player can leave and return later. Many users say that short visits feel comfortable. For many, WePlay offers a light and playful way to meet others online.`,
    chineseTranslation: `許多人渴望與他人建立連結，卻覺得在公開場合互動很困難。社群媒體提供了一個自在的替代方案，讓使用者能夠融入群體而不必承擔太多風險。WePlay 將遊戲與社交聊天結合在一起。使用者可以創造色彩繽紛的線上角色，而不必展示真實的容貌。這一點額外的隱私，能幫助害羞的使用者感到更加放鬆。\n\nWePlay 運作起來就像一座社交遊樂場。使用者進入虛擬房間，一起玩簡短的派對遊戲。有些遊戲要求玩家猜字或畫圖，其他則考驗邏輯或反應速度。玩家也可以在遊玩時使用語音聊天交談。許多房間都設有主持人，負責引導遊戲並管理群組。這份共同的活動能幫助人們自然而然地展開對話。\n\n這款應用程式給人的感覺不像無止盡的滑動瀏覽，反而更像一次輕鬆的社交小憩。玩家可能加入一個房間、玩一場遊戲並聊上幾分鐘，之後也能離開、稍後再回來。許多使用者表示，這種短暫的造訪讓人感到很自在。對許多人來說，WePlay 提供了一種輕鬆又有趣的方式，讓人們在線上認識彼此。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "interact", pos: "v.", meaning: "互動、打交道", collocations: "interact with others 與他人互動" },
        { id: 2, word: "alternative", pos: "n.", meaning: "替代方案、另一種選擇", collocations: "a comfortable alternative 令人自在的替代方案" },
        { id: 3, word: "privacy", pos: "n.", meaning: "隱私", collocations: "protect one's privacy 保護隱私" },
        { id: 4, word: "virtual", pos: "adj.", meaning: "虛擬的", collocations: "virtual room 虛擬房間" },
        { id: 5, word: "logic", pos: "n.", meaning: "邏輯", collocations: "test one's logic 考驗邏輯能力" },
        { id: 6, word: "host", pos: "n.", meaning: "主持人；東道主", collocations: "act as a host 擔任主持人" },
        { id: 7, word: "playful", pos: "adj.", meaning: "愛嬉鬧的、好玩的", collocations: "a playful way 一種好玩的方式" }
      ],
      grammarNotes: [
        { id: "G1", title: "who 引導形容詞子句", excerpt: "who guide the game and manage the group", analysis: "who 代替先行詞 hosts 作主詞，引導限定關係子句補充說明主持人的職責。" },
        { id: "G2", title: "instead of + V-ing (而非、取代)", excerpt: "instead of showing their real faces", analysis: "instead of 為介系詞片語，表「而非、取代」，後方須接動名詞。" }
      ],
      patternNotes: [
        { id: "P1", title: "less like A and more like B (比起A，更像B)", excerpt: "less like endless scrolling and more like a quick social break", analysis: "此句型用於對比兩種性質，強調後者 B 才是更貼切的描述。" },
        { id: "P2", title: "help + O. + V. (原形動詞，省略 to)", excerpt: "help shy users feel more relaxed", analysis: "help 接受詞後，受詞補語可用原形動詞（省略 to）或 to V.，兩者皆常見於大考。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'Many people want to connect with others but find ' },
          { type: 'vocab', text: 'interacting', vid: 1 },
          { type: 'text', text: ' in public hard. Social media offers a comfortable ' },
          { type: 'vocab', text: 'alternative', vid: 2 },
          { type: 'text', text: '. It lets users be part of the group without much risk. WePlay mixes games and social chat. Users create colorful online characters ' },
          { type: 'grammar', text: 'instead of showing their real faces', gid: 'G2' },
          { type: 'text', text: '. This extra bit of ' },
          { type: 'vocab', text: 'privacy', vid: 3 },
          { type: 'text', text: ' can ' },
          { type: 'pattern', text: 'help shy users feel more relaxed', pid: 'P2' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'WePlay works like a social playground. Users enter ' },
          { type: 'vocab', text: 'virtual', vid: 4 },
          { type: 'text', text: ' rooms and play short party games together. Some games ask players to guess words or draw pictures. Others test ' },
          { type: 'vocab', text: 'logic', vid: 5 },
          { type: 'text', text: ' or quick thinking. Players can also talk using voice chat while they play. Many rooms have ' },
          { type: 'vocab', text: 'hosts', vid: 6 },
          { type: 'text', text: ' ' },
          { type: 'grammar', text: 'who guide the game and manage the group', gid: 'G1' },
          { type: 'text', text: '. The shared activity helps people start conversations naturally.' }
        ],
        [
          { type: 'text', text: 'The app feels ' },
          { type: 'pattern', text: 'less like endless scrolling and more like a quick social break', pid: 'P1' },
          { type: 'text', text: '. A player may join a room, play a game and chat for a few minutes. A player can leave and return later. Many users say that short visits feel comfortable. For many, WePlay offers a light and ' },
          { type: 'vocab', text: 'playful', vid: 7 },
          { type: 'text', text: ' way to meet others online.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Because he was too nervous to ______ with strangers, he often stayed quiet at parties.", options: ["A. interact", "B. escape", "C. compete", "D. apologize"], answer: "A", explanation: "【選項解析】\n- (A) interact (v.) 互動、打交道 (正解)\n- (B) escape (v.) 逃離\n- (C) compete (v.) 競爭\n- (D) apologize (v.) 道歉" },
      { id: 2, question: "Since the café was closed, they looked for a convenient ______ nearby.", options: ["A. alternative", "B. apology", "C. container", "D. donation"], answer: "A", explanation: "【選項解析】\n- (A) alternative (n.) 替代方案 (正解)\n- (B) apology (n.) 道歉\n- (C) container (n.) 容器\n- (D) donation (n.) 捐贈" },
      { id: 3, question: "Many celebrities value their ______ and avoid sharing personal details online.", options: ["A. privacy", "B. currency", "C. poverty", "D. majority"], answer: "A", explanation: "【選項解析】\n- (A) privacy (n.) 隱私 (正解)\n- (B) currency (n.) 貨幣\n- (C) poverty (n.) 貧窮\n- (D) majority (n.) 多數" },
      { id: 4, question: "The puppy's ______ behavior made everyone in the room smile.", options: ["A. playful", "B. anxious", "C. formal", "D. selfish"], answer: "A", explanation: "【選項解析】\n- (A) playful (adj.) 愛嬉鬧的、好玩的 (正解)\n- (B) anxious (adj.) 焦慮的\n- (C) formal (adj.) 正式的\n- (D) selfish (adj.) 自私的" }
    ],
    cloze: {
      text: "WePlay is a social app that combines games with online chat. Instead [1] talking face-to-face, users create digital characters and join virtual rooms to play together. Some rooms are hosted by members who guide the activities and keep everyone [2]. Because the games are short and simple, strangers often end up chatting [3] realizing it. Compared with typical social apps, WePlay feels less [4] a stream of endless posts and more like a quick, playful break. For shy users especially, this format makes it easier to open up, [5] their real faces never have to appear on screen.",
      questions: [
        { id: 1, options: ["A. of", "B. for", "C. to", "D. from"], answer: "A", explanation: "instead of + V-ing 表「而非、取代」，固定接介系詞 of。" },
        { id: 2, options: ["A. engaged", "B. engaging", "C. engage", "D. to engage"], answer: "A", explanation: "keep + O. + p.p. 表使受詞保持某狀態，engaged (p.p./adj.) 表「投入的」。" },
        { id: 3, options: ["A. without", "B. despite", "C. unless", "D. besides"], answer: "A", explanation: "without + V-ing 表「沒有…而…」，句意為在不知不覺中聊了起來。" },
        { id: 4, options: ["A. like", "B. alike", "C. likely", "D. liking"], answer: "A", explanation: "less like A and more like B 句型中的 like 為介系詞，意為「像」。" },
        { id: 5, options: ["A. since", "B. unless", "C. although", "D. once"], answer: "A", explanation: "since 作連接詞表「既然、因為」，說明此設計對害羞使用者友善的原因。" }
      ]
    },
    wordBank: {
      words: ["(A) anonymous", "(B) avoid", "(C) casual", "(D) characters", "(E) comfortable", "(F) connect", "(G) discover", "(H) guide", "(I) privacy", "(J) strangers"],
      passage: "Meeting new people can feel intimidating, especially for those who find it hard to approach [1]. In recent years, many apps have tried to make social interaction less stressful by offering more [2] environments. WePlay is one such example. Instead of showing a real photo, users design colorful [3] to represent themselves online, staying mostly [4] until they choose to reveal more. This small layer of [5] can make a big difference, allowing people to relax and be themselves without worrying about first impressions.\n\nUnlike traditional social platforms that focus on posting photos or status updates, WePlay encourages users to [6] through shared activities. Each virtual room includes short games that require little more than quick thinking or a bit of imagination. Because the games are simple, they help members [7] common ground almost immediately, even with people they have never met before.\n\nMany rooms also include a host, whose job is to [8] the group through each round and keep the mood light. This structure helps [9] awkward silences, which are often the biggest barrier to starting a conversation with someone new. Instead, the shared task gives everyone something to talk about.\n\nPerhaps the most appealing part of WePlay is how [10] the whole experience feels. There is no pressure to stay long or commit to a deep conversation. A short visit, a few rounds of games and a bit of laughter are often enough. For users who once found socializing exhausting, WePlay offers a gentler, more playful path toward making friends.",
      answers: { 1: "J", 2: "E", 3: "D", 4: "A", 5: "I", 6: "F", 7: "G", 8: "H", 9: "B", 10: "C" }
    },
    discourse: {
      options: [
        "A. Instead of typing a personal introduction, most users first appear as a simple, customizable avatar.",
        "B. Every player must pay a monthly fee before joining any game room on the platform.",
        "C. Because the games require quick reactions, players rarely have time to worry about being judged.",
        "D. Hosts are chosen at random and are trained to keep each round moving smoothly.",
        "E. As a result, small talk emerges naturally, without anyone feeling pressured to perform."
      ],
      paragraphs: [
        "Designers behind social apps constantly look for ways to lower the emotional barriers that keep strangers from talking to each other. WePlay took an unusual approach by turning conversation itself into part of a game.",
        "[1] This removes the pressure of crafting the perfect bio or worrying about first impressions, letting users focus on the activity instead.",
        "Game rooms are built around short, simple challenges such as guessing games or quick drawing rounds. [2] [3] Within minutes, players who were complete strangers are laughing over a shared mistake or celebrating a clever guess.",
        "To keep things running smoothly, larger rooms often rely on a host to manage pacing and settle disputes. [4] This light structure is enough to turn a room of strangers into a temporary, easygoing community."
      ],
      answers: { 1: "A", 2: "C", 3: "E", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the central idea of this article?", options: ["A. WePlay charges hidden fees for premium avatars", "B. WePlay makes online socializing easier by combining games with a layer of comfortable anonymity", "C. WePlay requires users to reveal their real identities before playing", "D. WePlay is designed exclusively for professional networking"], answer: "B", explanation: "主旨題。全文說明 WePlay 藉由遊戲化社交與角色扮演降低互動壓力，幫助害羞使用者自在認識新朋友。" },
        { id: 2, question: "According to the article, how do users represent themselves on WePlay?", options: ["A. By uploading a real photo of their face", "B. By creating colorful online characters", "C. By recording a short video introduction", "D. By listing their real name and occupation"], answer: "B", explanation: "細節題。文中明確指出使用者以 colorful online characters 取代展示真實容貌。" },
        { id: 3, question: "What role do hosts play in WePlay's game rooms?", options: ["A. They sell in-app items to other players", "B. They guide the game and manage the group", "C. They monitor players for rule violations only", "D. They design new games for the platform"], answer: "B", explanation: "細節題。文中提到「Many rooms have hosts who guide the game and manage the group.」" },
        { id: 4, question: "Based on the article, why might short, casual visits to WePlay feel appealing to users?", options: ["A. Because users are required to stay for at least an hour", "B. Because there is no pressure to commit to long or deep interactions", "C. Because users must complete every game before leaving", "D. Because visits are scheduled weeks in advance"], answer: "B", explanation: "推論題。文中提到玩家可隨時加入或離開、短暫造訪也令人感到自在，暗示低壓力、彈性的使用方式正是其吸引力所在。" }
      ]
    }
  }
};
if (typeof window !== 'undefined') { window.MAGAZINE_UNITS_SC202509 = MAGAZINE_UNITS_SC202509; }
