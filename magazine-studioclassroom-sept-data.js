// Studio Classroom 9月號（課文 U1-U14）— 全部 14 個 Unit 皆為完整內容。
// 原始課文來源：Studio Classroom 9月號_課文 U1-U14.pdf（僅課文本身，annotations/
// vocab/cloze/wordBank/discourse/reading 皆由 Claude 依黃金標準規範原創產製，
// 已逐一通過結構性驗證，但建議實際使用前仍抽查內容品質）。
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
  },

  "Unit 2": {
    title: "Saving the World One Teddy at a Time",
    chineseTitle: "拯救世界，從一隻泰迪熊開始",
    passage: `Many people feel sentimental about the stuffed toys they had as children. These toys may have gone on trips with them or been their comfort when they were sick. But what happens when those toys are no longer wanted?\n\nMany toys, especially stuffed toys, are made from artificial materials, which can take hundreds of years to decay. Because of this, some people consider it important to reuse or donate old toys instead of throwing them away. Despite this, they often end up in dumps.\n\nOne UK company is trying to give old toys their best shot at a second chance. Loved Before collects unwanted stuffed toys, cleans and fixes them and prepares them for adoption. Each toy, which already has its own name and story, is photographed. This helps people learn about its “personality.” Customers who visit the company’s website can read these stories and choose a toy to bring home. Through programs like this, toys that might have been tossed out are saved.\n\nSmall actions can make a difference. By finding new homes for old toys, people can keep these childhood companions out of landfills and give them a new lease on life.`,
    chineseTranslation: `許多人對自己童年時期擁有的填充玩偶懷有深厚的情感。這些玩偶或許曾陪他們一同旅行，或是在他們生病時給予安慰。但當這些玩偶不再被需要時，會發生什麼事呢？\n\n許多玩具，尤其是填充玩偶，是由人造材質製成，可能需要數百年才能分解。正因如此，有些人認為重複利用或捐贈舊玩具，而非直接丟棄，是很重要的事。儘管如此，它們往往還是最終被送進了垃圾場。\n\n一家英國公司正致力於讓舊玩具獲得重新開始的最佳機會。Loved Before 收集無人要的填充玩偶，清洗並修復它們，並為牠們準備好被領養。每個玩偶都已經擁有自己的名字與故事，並會被拍照記錄。這能幫助人們了解牠的「個性」。造訪該公司網站的顧客可以閱讀這些故事，並選擇一個玩偶帶回家。透過這類計畫，原本可能被丟棄的玩具得以被拯救。\n\n微小的行動也能帶來改變。藉由為舊玩具尋找新家，人們得以讓這些童年時期的夥伴遠離垃圾掩埋場，並賦予牠們嶄新的生命旅程。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "sentimental", pos: "adj.", meaning: "多愁善感的、帶有情感依戀的", collocations: "feel sentimental about... 對…懷有情感依戀" },
        { id: 2, word: "artificial", pos: "adj.", meaning: "人造的", collocations: "artificial materials 人造材質" },
        { id: 3, word: "donate", pos: "v.", meaning: "捐贈", collocations: "donate old toys 捐贈舊玩具" },
        { id: 4, word: "dump", pos: "n.", meaning: "垃圾場", collocations: "end up in a dump 最終落腳於垃圾場" },
        { id: 5, word: "adoption", pos: "n.", meaning: "領養", collocations: "prepare for adoption 準備被領養" },
        { id: 6, word: "companion", pos: "n.", meaning: "夥伴、同伴", collocations: "childhood companion 童年夥伴" },
        { id: 7, word: "landfill", pos: "n.", meaning: "垃圾掩埋場", collocations: "keep out of landfills 遠離垃圾掩埋場" }
      ],
      grammarNotes: [
        { id: "G1", title: "非限定關係子句 (先行詞為事物)", excerpt: "which can take hundreds of years to decay", analysis: "which 代替先行詞 materials，引導補充說明的非限定關係子句，前面需加逗號。" },
        { id: "G2", title: "非限定關係子句 (插入語)", excerpt: "which already has its own name and story", analysis: "此非限定關係子句插入於主詞 Each toy 與動詞 is photographed 之間，補充說明每個玩偶已有的背景故事。" }
      ],
      patternNotes: [
        { id: "P1", title: "情態完成式被動語態 (might have been + p.p.)", excerpt: "might have been tossed out", analysis: "表對過去的不確定推測，加上被動語態，意為「原本可能已經被丟棄」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'Many people feel ' },
          { type: 'vocab', text: 'sentimental', vid: 1 },
          { type: 'text', text: ' about the stuffed toys they had as children. These toys may have gone on trips with them or been their comfort when they were sick. But what happens when those toys are no longer wanted?' }
        ],
        [
          { type: 'text', text: 'Many toys, especially stuffed toys, are made from ' },
          { type: 'vocab', text: 'artificial', vid: 2 },
          { type: 'text', text: ' materials, ' },
          { type: 'grammar', text: 'which can take hundreds of years to decay', gid: 'G1' },
          { type: 'text', text: '. Because of this, some people consider it important to reuse or ' },
          { type: 'vocab', text: 'donate', vid: 3 },
          { type: 'text', text: ' old toys instead of throwing them away. Despite this, they often end up in ' },
          { type: 'vocab', text: 'dumps', vid: 4 },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'One UK company is trying to give old toys their best shot at a second chance. Loved Before collects unwanted stuffed toys, cleans and fixes them and prepares them for ' },
          { type: 'vocab', text: 'adoption', vid: 5 },
          { type: 'text', text: '. Each toy, ' },
          { type: 'grammar', text: 'which already has its own name and story', gid: 'G2' },
          { type: 'text', text: ', is photographed. This helps people learn about its “personality.” Customers who visit the company’s website can read these stories and choose a toy to bring home. Through programs like this, toys that ' },
          { type: 'pattern', text: 'might have been tossed out', pid: 'P1' },
          { type: 'text', text: ' are saved.' }
        ],
        [
          { type: 'text', text: 'Small actions can make a difference. By finding new homes for old toys, people can keep these childhood ' },
          { type: 'vocab', text: 'companions', vid: 6 },
          { type: 'text', text: ' out of ' },
          { type: 'vocab', text: 'landfills', vid: 7 },
          { type: 'text', text: ' and give them a new lease on life.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "She still feels ______ about her old diary, even though the pages are falling apart.", options: ["A. sentimental", "B. artificial", "C. accurate", "D. suspicious"], answer: "A", explanation: "【選項解析】\n- (A) sentimental (adj.) 多愁善感的、帶有情感依戀的 (正解)\n- (B) artificial (adj.) 人造的\n- (C) accurate (adj.) 準確的\n- (D) suspicious (adj.) 可疑的" },
      { id: 2, question: "Instead of throwing away her old clothes, she decided to ______ them to a local charity.", options: ["A. donate", "B. decay", "C. postpone", "D. suspect"], answer: "A", explanation: "【選項解析】\n- (A) donate (v.) 捐贈 (正解)\n- (B) decay (v.) 腐敗、分解\n- (C) postpone (v.) 延後\n- (D) suspect (v.) 懷疑" },
      { id: 3, question: "The shelter carefully matches each cat with a family before finalizing the ______.", options: ["A. adoption", "B. donation", "C. decoration", "D. explanation"], answer: "A", explanation: "【選項解析】\n- (A) adoption (n.) 領養 (正解)\n- (B) donation (n.) 捐贈\n- (C) decoration (n.) 裝飾\n- (D) explanation (n.) 解釋" },
      { id: 4, question: "After years of traveling together, the old backpack had become more than luggage — it felt like a ______.", options: ["A. companion", "B. container", "C. donation", "D. landfill"], answer: "A", explanation: "【選項解析】\n- (A) companion (n.) 夥伴、同伴 (正解)\n- (B) container (n.) 容器\n- (C) donation (n.) 捐贈\n- (D) landfill (n.) 垃圾掩埋場" }
    ],
    cloze: {
      text: "Loved Before is a UK company that gives unwanted stuffed toys a second chance. Rather [1] letting old toys end up in landfills, the company collects, cleans and repairs them before finding new owners. Each toy [2] a name and a short story, which are posted online along with a photo. This storytelling approach helps customers feel more connected [3] the toy they are considering. Since stuffed toys are often made from materials [4] take a long time to break down, reusing them can meaningfully reduce waste. Small, thoughtful choices like this can add up, [5] real change for the environment over time.",
      questions: [
        { id: 1, options: ["A. than", "B. that", "C. as", "D. of"], answer: "A", explanation: "rather than + V-ing 表「與其…不如」，用於比較兩種做法。" },
        { id: 2, options: ["A. is given", "B. gives", "C. giving", "D. to give"], answer: "A", explanation: "toy 為受詞轉主詞的被動語態，每個玩偶「被賦予」一個名字，故用被動式。" },
        { id: 3, options: ["A. to", "B. with", "C. at", "D. in"], answer: "A", explanation: "connected to + N. 為固定搭配，表「與…有連結」。" },
        { id: 4, options: ["A. that", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 materials 為物，且無逗號隔開，用限定關係代名詞 that。" },
        { id: 5, options: ["A. creating", "B. created", "C. create", "D. to be created"], answer: "A", explanation: "分詞構句表伴隨結果，主動「進而創造出」用 creating。" }
      ]
    },
    wordBank: {
      words: ["(A) charity", "(B) deserve", "(C) durable", "(D) emotional", "(E) memory", "(F) packaging", "(G) reduce", "(H) repair", "(I) rescue", "(J) unwanted"],
      passage: "Every year, millions of toys are thrown away simply because a child has outgrown them or because a button has fallen off and no one has bothered to [1] it. Many of these toys are still in decent condition, yet they are treated as [2] items the moment they lose their appeal.\n\nLoved Before wants to change that pattern. Instead of letting forgotten toys pile up in the trash, the company works to [3] them, giving each one a second life. Volunteers clean the toys, fix small damages and remove any leftover [4] before photographing them for the website.\n\nWhat makes the project unusual is how much attention is paid to storytelling. Staff members do more than list a toy's condition; they try to capture the kind of [5] connection a child might once have had with it. A soft rabbit with a torn ear, for instance, might be introduced as a loyal bedtime friend rather than simply \"used.\"\n\nThis approach appeals to a growing number of shoppers who see [6] as part of the experience, not just a simple purchase. Every sale supports the organization's work and helps [7] the amount of textile waste sent to landfills each year. Because many stuffed toys are built to be [8], with sturdy stitching and washable fabric, they can often be enjoyed by a second or even third child.\n\nSupporters argue that the toys [9] a chance to be loved again, no matter how old or worn they look. For many buyers, choosing a secondhand toy also means passing on a small piece of someone else's childhood [10], which makes the purchase feel more meaningful than an ordinary transaction.",
      answers: { 1: "H", 2: "J", 3: "I", 4: "F", 5: "D", 6: "A", 7: "G", 8: "C", 9: "B", 10: "E" }
    },
    discourse: {
      options: [
        "A. Each toy's uniqueness is preserved rather than erased, turning a simple transaction into something closer to adoption.",
        "B. The company guarantees same-day delivery to any address in the United Kingdom.",
        "C. Photographs and short biographies are posted for every toy before it goes up for sale.",
        "D. Because the toys are pre-owned, prices remain far lower than those of brand-new stuffed animals.",
        "E. As interest in sustainable shopping grows, similar toy-rescue projects have begun appearing in other countries."
      ],
      paragraphs: [
        "The stuffed toy industry generates a surprising amount of waste each year, as toys made from mixed synthetic materials are notoriously difficult to recycle. One UK company has built an entire business around slowing that cycle down.",
        "Before anything is listed for sale, each toy is carefully cleaned and repaired by a small team of volunteers. [1]",
        "[2] For budget-conscious families, this makes the toys an appealing alternative to store shelves packed with mass-produced characters. [3]",
        "The idea has clearly struck a chord with shoppers looking for a more meaningful way to spend their money. [4] What began as a small local effort may soon become a familiar part of sustainable shopping worldwide."
      ],
      answers: { 1: "C", 2: "D", 3: "A", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main purpose of this article?", options: ["A. To criticize companies that manufacture stuffed toys", "B. To introduce a company that gives old stuffed toys a second life", "C. To explain how stuffed toys are manufactured from artificial materials", "D. To warn parents about the dangers of donating old toys"], answer: "B", explanation: "主旨題。全文介紹 Loved Before 如何收集、修復並協助舊玩偶找到新家，讓玩具免於被丟棄。" },
        { id: 2, question: "According to the article, why do old stuffed toys often end up in dumps?", options: ["A. Because recycling centers refuse to accept them", "B. Because most children prefer new toys over used ones", "C. Because they are no longer wanted once children outgrow them", "D. Because stores require customers to discard old toys before buying new ones"], answer: "C", explanation: "細節題。第一段提到玩偶「不再被需要」的處境，暗示遭丟棄的主因是不再被需要（no longer wanted）。" },
        { id: 3, question: "What does Loved Before do to help people learn about a toy's “personality”?", options: ["A. It interviews the toy's original owner", "B. It photographs each toy and shares its name and story", "C. It assigns a professional writer to each toy", "D. It sells the toys only after a background check"], answer: "B", explanation: "細節題。文中提到每個玩偶都已有自己的名字與故事，並會被拍照，幫助顧客了解牠的「個性」。" },
        { id: 4, question: "What can be inferred about the mission of Loved Before?", options: ["A. It focuses only on selling toys at the lowest possible price", "B. It aims to reduce waste by giving unwanted toys a meaningful second chance", "C. It only accepts toys that are brand new and unused", "D. It primarily targets toy collectors interested in rare items"], answer: "B", explanation: "推論題。從公司修復玩偶、協助牠們找到新家、並強調「小小的行動也能帶來改變」可推論其宗旨在於減少浪費，讓玩具獲得有意義的第二次機會。" }
      ]
    }
  },

  "Unit 3": {
    title: "Telehealth",
    chineseTitle: "遠距醫療：醫師不在身邊，也能被治療嗎？",
    passage: `Day 1\n\nDiscussions of technical progress and its effect on the medical field often focus on new treatments for diseases. But technology can also play a role in solving a different problem: accessibility. Sometimes people have diseases that can be cured, but they live too far from a hospital to receive treatment. Or the hospitals they are able to reach may not have a doctor who specializes in that disease. If they could receive medical care from a distance, it might save their lives. And telehealth offers that very possibility.\n\nTelehealth refers to medical care provided when the doctor and patient are not physically in the same place, including video conferences with doctors that replace office visits. Telehealth also allows patients to send text messages to doctors or nurses between visits. It can even involve patients wearing sensors or monitors at home and this data being sent to their doctor.\n\nTelehealth has some distinct advantages over conventional medicine. First, it avoids the risk of patients catching contagious diseases from other patients. Also, whoever needs medical care can meet with a doctor without making the trip to a hospital, which is especially important for people living in remote or rural areas. Remote monitoring of patients also allows doctors to gain information over an extended time without keeping the patient hospitalized.\n\nDay 2\n\nCurrently, telehealth is mostly used for verbal consultations and remote monitoring of patients. But since 2001, technology has made remote surgery possible, which is now happening more and more often.\n\nLast year, researchers in Dundee, Scotland, removed a blood clot from a dead human body using a robot that they controlled from a hospital across the city. A few hours later, a surgeon based in the United States did the same procedure. Even across the Atlantic Ocean, the time between the surgeon moving his instruments and the robot doing the same was only a fraction of a second. The doctor in Dundee commented that the remote surgery felt just like performing a normal operation.\n\nThe operation the robots were used for is used to treat stroke patients. It requires special training, and a delay of even a few minutes can be deadly. A patient who has a stroke in a small town could die before reaching a hospital with a doctor qualified to perform the surgery. But hospitals in small towns could adopt remote surgery technology once it is developed and becomes affordable, allowing surgeons in larger hospitals to perform life-saving surgery on patients who otherwise couldn’t get it.\n\nTelehealth is already making medical care more accessible and convenient, and technical advances could open up amazing possibilities, such as remote surgery.`,
    chineseTranslation: `【第 1 天】\n\n關於科技進步及其對醫療領域影響的討論，通常聚焦於疾病的新型治療方式。但科技其實也能在解決另一個問題上扮演重要角色：可近性。有時候，人們罹患的疾病是可以被治癒的，但他們居住的地方離醫院太遠，無法獲得治療。或者，他們所能到達的醫院可能沒有專精於該疾病的醫師。如果他們能夠遠距獲得醫療照護，或許就能挽救他們的生命。而遠距醫療正提供了這樣的可能性。\n\n遠距醫療指的是在醫師與病患不在同一實體空間時所提供的醫療照護，包括以視訊會議取代門診看診。遠距醫療也讓病患能在就診之間，以簡訊與醫師或護理師聯繫。它甚至可能包含病患在家中配戴感測器或監測裝置，並將這些數據傳送給醫師。\n\n遠距醫療相較於傳統醫療有幾項明顯優勢。首先，它能避免病患從其他病患身上感染傳染病的風險。此外，任何需要醫療照護的人都能在不必親自前往醫院的情況下與醫師會面，這對居住在偏遠或鄉村地區的人們來說格外重要。遠距監測病患的狀況，也能讓醫師在較長一段時間內持續掌握資訊，而不必讓病患一直住院。\n\n【第 2 天】\n\n目前，遠距醫療主要用於口頭問診與病患的遠距監測。但自 2001 年起，科技已使遠距手術成為可能，而且這類手術正變得愈來愈頻繁。\n\n去年，蘇格蘭丹地的研究人員利用一具由城市另一端醫院操控的機器人，從一具已故的人體中取出血栓。幾個小時後，一位美國的外科醫師也完成了相同的手術。即便橫跨大西洋，外科醫師移動器械與機器人做出相同動作之間的時間差，也僅僅是幾分之一秒。丹地的醫師表示，這場遠距手術的感覺就跟執行一般手術完全一樣。\n\n這項機器人所執行的手術，是用來治療中風病患的。它需要特殊訓練，即使只是延遲幾分鐘，也可能致命。一名在小城鎮中風的病患，可能會在抵達有合格醫師能執行該手術的醫院前就已死亡。但小城鎮的醫院一旦能負擔並採用遠距手術技術，就能讓大型醫院的外科醫師為原本無法獲得治療的病患執行救命手術。\n\n遠距醫療已經讓醫療照護變得更加普及與便利，而科技的進步可能開啟更多驚人的可能性，例如遠距手術。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "accessibility", pos: "n.", meaning: "可近性、易取得性", collocations: "a problem of accessibility 可近性的問題" },
        { id: 2, word: "contagious", pos: "adj.", meaning: "傳染性的", collocations: "contagious diseases 傳染性疾病" },
        { id: 3, word: "remote", pos: "adj.", meaning: "偏遠的", collocations: "remote areas 偏遠地區" },
        { id: 4, word: "monitoring", pos: "n.", meaning: "監測", collocations: "remote monitoring 遠距監測" },
        { id: 5, word: "consultations", pos: "n.", meaning: "問診、諮詢", collocations: "verbal consultations 口頭問診" },
        { id: 6, word: "qualified", pos: "adj.", meaning: "合格的", collocations: "a doctor qualified to... 合格能夠…的醫師" },
        { id: 7, word: "affordable", pos: "adj.", meaning: "負擔得起的", collocations: "become affordable 變得可負擔" },
        { id: 8, word: "procedure", pos: "n.", meaning: "手術、療程", collocations: "do the same procedure 進行相同的手術" }
      ],
      grammarNotes: [
        { id: "G1", title: "who 引導形容詞子句 (先行詞為人)", excerpt: "who specializes in that disease", analysis: "who 代替先行詞 a doctor 作主詞，引導限定關係子句。" },
        { id: "G2", title: "過去分詞片語作形容詞 (省略關代+be動詞)", excerpt: "based in the United States", analysis: "based in the United States 為過去分詞片語，修飾 surgeon，等於 who was based in the United States 的省略形式。" },
        { id: "G3", title: "allowing + O. + to V. (分詞構句表結果)", excerpt: "allowing surgeons in larger hospitals to perform life-saving surgery", analysis: "分詞構句表自然而然產生的結果，主動用 allowing，後接受詞+不定詞。" }
      ],
      patternNotes: [
        { id: "P1", title: "too + adj. + to V. (太…以致於無法…)", excerpt: "they live too far from a hospital to receive treatment", analysis: "帶有否定意味的程度句型，表示「距離太遠而無法接受治療」。" },
        { id: "P2", title: "even + 名詞片語 (強調極端例子)", excerpt: "a delay of even a few minutes can be deadly", analysis: "even 置於名詞片語前，強調即使是极小的量也會造成嚴重後果。" }
      ],
      paragraphs: [
        [ { type: 'text', text: 'Day 1' } ],
        [
          { type: 'text', text: 'Discussions of technical progress and its effect on the medical field often focus on new treatments for diseases. But technology can also play a role in solving a different problem: ' },
          { type: 'vocab', text: 'accessibility', vid: 1 },
          { type: 'text', text: '. Sometimes people have diseases that can be cured, but ' },
          { type: 'pattern', text: 'they live too far from a hospital to receive treatment', pid: 'P1' },
          { type: 'text', text: '. Or the hospitals they are able to reach may not have a doctor ' },
          { type: 'grammar', text: 'who specializes in that disease', gid: 'G1' },
          { type: 'text', text: '. If they could receive medical care from a distance, it might save their lives. And telehealth offers that very possibility.' }
        ],
        [
          { type: 'text', text: 'Telehealth refers to medical care provided when the doctor and patient are not physically in the same place, including video conferences with doctors that replace office visits. Telehealth also allows patients to send text messages to doctors or nurses between visits. It can even involve patients wearing sensors or monitors at home and this data being sent to their doctor.' }
        ],
        [
          { type: 'text', text: 'Telehealth has some distinct advantages over conventional medicine. First, it avoids the risk of patients catching ' },
          { type: 'vocab', text: 'contagious', vid: 2 },
          { type: 'text', text: ' diseases from other patients. Also, whoever needs medical care can meet with a doctor without making the trip to a hospital, which is especially important for people living in ' },
          { type: 'vocab', text: 'remote', vid: 3 },
          { type: 'text', text: ' or rural areas. Remote ' },
          { type: 'vocab', text: 'monitoring', vid: 4 },
          { type: 'text', text: ' of patients also allows doctors to gain information over an extended time without keeping the patient hospitalized.' }
        ],
        [ { type: 'text', text: 'Day 2' } ],
        [
          { type: 'text', text: 'Currently, telehealth is mostly used for verbal ' },
          { type: 'vocab', text: 'consultations', vid: 5 },
          { type: 'text', text: ' and remote monitoring of patients. But since 2001, technology has made remote surgery possible, which is now happening more and more often.' }
        ],
        [
          { type: 'text', text: 'Last year, researchers in Dundee, Scotland, removed a blood clot from a dead human body using a robot that they controlled from a hospital across the city. A few hours later, a surgeon ' },
          { type: 'grammar', text: 'based in the United States', gid: 'G2' },
          { type: 'text', text: ' did the same ' },
          { type: 'vocab', text: 'procedure', vid: 8 },
          { type: 'text', text: '. Even across the Atlantic Ocean, the time between the surgeon moving his instruments and the robot doing the same was only a fraction of a second. The doctor in Dundee commented that the remote surgery felt just like performing a normal operation.' }
        ],
        [
          { type: 'text', text: 'The operation the robots were used for is used to treat stroke patients. It requires special training, and ' },
          { type: 'pattern', text: 'a delay of even a few minutes can be deadly', pid: 'P2' },
          { type: 'text', text: '. A patient who has a stroke in a small town could die before reaching a hospital with a doctor ' },
          { type: 'vocab', text: 'qualified', vid: 6 },
          { type: 'text', text: ' to perform the surgery. But hospitals in small towns could adopt remote surgery technology once it is developed and becomes ' },
          { type: 'vocab', text: 'affordable', vid: 7 },
          { type: 'text', text: ', ' },
          { type: 'grammar', text: 'allowing surgeons in larger hospitals to perform life-saving surgery', gid: 'G3' },
          { type: 'text', text: ' on patients who otherwise couldn’t get it.' }
        ],
        [
          { type: 'text', text: 'Telehealth is already making medical care more accessible and convenient, and technical advances could open up amazing possibilities, such as remote surgery.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The new subway elevators greatly improved ______ for passengers using wheelchairs.", options: ["A. accessibility", "B. anxiety", "C. generosity", "D. curiosity"], answer: "A", explanation: "【選項解析】\n- (A) accessibility (n.) 可近性、易取得性 (正解)\n- (B) anxiety (n.) 焦慮\n- (C) generosity (n.) 慷慨\n- (D) curiosity (n.) 好奇心" },
      { id: 2, question: "Doctors urged the public to stay home to avoid spreading the ______ illness.", options: ["A. contagious", "B. qualified", "C. affordable", "D. remote"], answer: "A", explanation: "【選項解析】\n- (A) contagious (adj.) 傳染性的 (正解)\n- (B) qualified (adj.) 合格的\n- (C) affordable (adj.) 負擔得起的\n- (D) remote (adj.) 偏遠的" },
      { id: 3, question: "Only a ______ electrician should attempt to repair the building's wiring.", options: ["A. qualified", "B. contagious", "C. sentimental", "D. artificial"], answer: "A", explanation: "【選項解析】\n- (A) qualified (adj.) 合格的 (正解)\n- (B) contagious (adj.) 傳染性的\n- (C) sentimental (adj.) 多愁善感的\n- (D) artificial (adj.) 人造的" },
      { id: 4, question: "The clinic offers ______ health checkups so that more families can get regular care.", options: ["A. affordable", "B. accessible", "C. contagious", "D. qualified"], answer: "A", explanation: "【選項解析】\n- (A) affordable (adj.) 負擔得起的 (正解)\n- (B) accessible (adj.) 可接近的、易取得的\n- (C) contagious (adj.) 傳染性的\n- (D) qualified (adj.) 合格的" }
    ],
    cloze: {
      text: "Telehealth allows patients to receive medical care without traveling to a hospital. Rather than waiting weeks for an in-person appointment, patients can consult a doctor [1] video call from home. This is especially useful for people [2] live far from specialized clinics. Some telehealth programs even let patients wear small devices that send health data directly [3] their doctor's office, so problems can be caught early. While telehealth cannot replace every kind of treatment, it has already made routine checkups far more convenient, [4] many patients to avoid unnecessary hospital visits. As technology continues to improve, remote surgery may [5] become a standard option for emergency care in areas without nearby specialists.",
      questions: [
        { id: 1, options: ["A. via", "B. despite", "C. unless", "D. among"], answer: "A", explanation: "via 為介系詞，表「透過、經由」某種方式或管道。" },
        { id: 2, options: ["A. who", "B. which", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 people 為人，who 在子句中作主詞，引導限定關係子句。" },
        { id: 3, options: ["A. to", "B. of", "C. at", "D. for"], answer: "A", explanation: "send A to B 表「將A傳送給B」，固定搭配介系詞 to。" },
        { id: 4, options: ["A. allowing", "B. allowed", "C. allow", "D. to allow"], answer: "A", explanation: "分詞構句表伴隨結果，主動「進而讓許多病患得以避免」用 allowing。" },
        { id: 5, options: ["A. eventually", "B. eventual", "C. eventuality", "D. eventuate"], answer: "A", explanation: "eventually (adv.) 修飾動詞片語 may become，表「最終、終究」。" }
      ]
    },
    wordBank: {
      words: ["(A) barrier", "(B) diagnose", "(C) efficient", "(D) eliminate", "(E) expand", "(F) shortage", "(G) specialist", "(H) transmit", "(I) vulnerable", "(J) widespread"],
      passage: "In many rural regions, a severe [1] of doctors means patients sometimes wait weeks just to see a general physician, let alone a [2] trained to treat a specific condition. Telehealth is beginning to close this gap by allowing a single specialist to serve patients scattered across an entire region.\n\nOne of the clearest benefits is speed. A doctor connected by video call can often [3] a common illness within minutes, sparing patients a long drive and an even longer wait in a crowded clinic. For elderly or [4] patients with weakened immune systems, avoiding a crowded waiting room also lowers the risk of catching something new during a routine visit.\n\nTelehealth also helps [5] health information more safely, sending test results and medical histories directly between providers instead of relying on paper records passed from office to office.\n\nHospitals and clinics are working to [6] their telehealth programs to cover more conditions, from mental health counseling to follow-up care after surgery. Supporters hope that, over time, this approach can help [7] a major [8] that has kept quality healthcare out of reach for rural communities.\n\nOf course, telehealth is not a cure-all. A stable internet connection is not yet [9] enough for every household, and certain conditions still require hands-on examination. Even so, as telehealth tools become more [10] and easier to use, they are likely to remain a permanent part of how medical care is delivered.",
      answers: { 1: "F", 2: "G", 3: "B", 4: "I", 5: "H", 6: "E", 7: "D", 8: "A", 9: "J", 10: "C" }
    },
    discourse: {
      options: [
        "A. Despite these advantages, telehealth cannot fully replace hands-on procedures such as surgery or physical therapy.",
        "B. All telehealth consultations are currently provided completely free of charge worldwide.",
        "C. Patients in remote areas no longer need to travel for hours just to receive a basic diagnosis.",
        "D. Because appointments can be scheduled around a patient's daily routine, missed visits have become less common.",
        "E. Hospitals are now training more staff specifically to manage video consultations and remote monitoring systems."
      ],
      paragraphs: [
        "Healthcare systems around the world are under growing pressure, with too few doctors expected to serve too many patients, especially outside major cities. Telehealth has emerged as one of the most promising tools for closing this gap.",
        "[1] Instead of waiting for a rare in-person appointment, many people can now describe their symptoms to a doctor over a video call the same day.",
        "This shift has also changed how patients manage their own schedules. [2] For working parents and caregivers in particular, this flexibility can make the difference between receiving timely care and postponing it indefinitely. [3]",
        "Still, telehealth is not without limits. [4] For conditions that require imaging equipment, lab work or a surgeon's hands, an in-person visit remains essential."
      ],
      answers: { 1: "C", 2: "D", 3: "E", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Telehealth will completely replace traditional hospitals within a decade", "B. Telehealth improves access to medical care and has even enabled remote surgery", "C. Telehealth is primarily used to treat contagious diseases", "D. Telehealth requires patients to travel to specialized city hospitals"], answer: "B", explanation: "主旨題。全文說明遠距醫療如何提升醫療可近性，並延伸至遠距手術的最新應用。" },
        { id: 2, question: "According to the article, what is one advantage of telehealth mentioned on Day 1?", options: ["A. It eliminates the need for any medical training", "B. It avoids the risk of patients catching contagious diseases from others", "C. It guarantees a faster recovery than in-person treatment", "D. It is only available to patients in major cities"], answer: "B", explanation: "細節題。第一天第三段提到遠距醫療能避免病患從其他病患身上感染傳染病的風險。" },
        { id: 3, question: "What happened in Dundee, Scotland, according to the article?", options: ["A. Doctors performed the world's first heart transplant", "B. Researchers used a remotely controlled robot to remove a blood clot from a body", "C. A hospital was completely replaced by telehealth services", "D. A patient traveled from the United States for surgery"], answer: "B", explanation: "細節題。文中提到丹地的研究人員利用遠距操控的機器人，從一具人體中取出血栓。" },
        { id: 4, question: "What can be inferred about the future of remote surgery for stroke patients?", options: ["A. It will likely remain limited to wealthy countries forever", "B. It could eventually help patients in small towns receive life-saving treatment faster", "C. It is expected to replace all forms of in-person surgery", "D. It will no longer require any special training for surgeons"], answer: "B", explanation: "推論題。文中提到一旦遠距手術技術發展成熟且變得可負擔，就能讓大型醫院的外科醫師為小城鎮原本無法獲得治療的病患執行救命手術，暗示未來可能因此提升偏鄉中風病患的存活機會。" }
      ]
    }
  },

  "Unit 4": {
    title: "The Rising Trend of Convenience Store Travel",
    chineseTitle: "便利商店旅遊正夯",
    passage: `When you travel, you probably think about famous landmarks to see or exciting activities to do. But have you ever thought about visiting a convenience store on your trip? In Asia, convenience stores like 7-Eleven and FamilyMart are part of everyday life. People visit them to grab drinks, snacks or quick meals. For many tourists, these small stores have become surprising travel highlights. Visitors walk in to explore shelves full of unique food they cannot easily find anywhere else.\n\nThis travel trend is called snack tourism. It involves visiting convenience stores in different places to try local snacks and drinks. These stores often sell items that are not expensive and are easy to carry. Many visitors take home interesting snacks as souvenirs.\n\nSnack tourism has become even more popular because of short videos on apps like TikTok and Instagram. Travelers love posting clips of unusual snacks or fun drinks that they find in convenience stores around the world. On your next trip, step into a convenience store and see what small adventure is waiting on the shelves.`,
    chineseTranslation: `當你旅行時，你可能會想到要去看知名地標，或從事令人興奮的活動。但你是否曾想過在旅途中造訪一間便利商店呢？在亞洲，像 7-Eleven 與全家這樣的便利商店是日常生活的一部分。人們造訪這些商店購買飲料、零食或簡便的餐點。對許多觀光客來說，這些小小的商店已成為令人驚喜的旅遊亮點。遊客走進店內，探索擺滿獨特食品的貨架，那些商品是他們在其他地方不容易找到的。\n\n這股旅遊趨勢被稱為「零食旅遊」。它指的是造訪不同地方的便利商店，品嚐當地的零食與飲料。這些商店所販售的商品通常價格不貴，也方便攜帶。許多遊客會把有趣的零食當作伴手禮帶回家。\n\n由於 TikTok 與 Instagram 等應用程式上的短影音，零食旅遊變得更加風靡。旅人們熱衷於發布他們在世界各地便利商店中發現的特殊零食或有趣飲料的影片。在你下次旅行時，不妨走進一間便利商店，看看貨架上正等著你的小小冒險。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "landmarks", pos: "n.", meaning: "地標", collocations: "famous landmarks 知名地標" },
        { id: 2, word: "unique", pos: "adj.", meaning: "獨特的", collocations: "unique food 獨特的食物" },
        { id: 3, word: "trend", pos: "n.", meaning: "趨勢", collocations: "a travel trend 旅遊趨勢" },
        { id: 4, word: "souvenirs", pos: "n.", meaning: "紀念品、伴手禮", collocations: "take home... as souvenirs 帶回…當紀念品" },
        { id: 5, word: "unusual", pos: "adj.", meaning: "不尋常的", collocations: "unusual snacks 不尋常的零食" },
        { id: 6, word: "adventure", pos: "n.", meaning: "冒險", collocations: "a small adventure 一場小冒險" }
      ],
      grammarNotes: [
        { id: "G1", title: "受格關係代名詞省略", excerpt: "food they cannot easily find anywhere else", analysis: "food 後省略受格關係代名詞 that/which，還原為 food that they cannot easily find anywhere else。" }
      ],
      patternNotes: [
        { id: "P1", title: "現在完成式表趨勢持續至今", excerpt: "Snack tourism has become even more popular", analysis: "has become 為現在完成式，強調此趨勢從過去持續發展至今，且現在依然如此。" },
        { id: "P2", title: "love + V-ing (熱衷於做某事)", excerpt: "Travelers love posting clips of", analysis: "love 接受詞時可用動名詞 V-ing，表示對該行為的高度喜好與熱衷。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'When you travel, you probably think about famous ' },
          { type: 'vocab', text: 'landmarks', vid: 1 },
          { type: 'text', text: ' to see or exciting activities to do. But have you ever thought about visiting a convenience store on your trip? In Asia, convenience stores like 7-Eleven and FamilyMart are part of everyday life. People visit them to grab drinks, snacks or quick meals. For many tourists, these small stores have become surprising travel highlights. Visitors walk in to explore shelves full of ' },
          { type: 'vocab', text: 'unique', vid: 2 },
          { type: 'text', text: ' ' },
          { type: 'grammar', text: 'food they cannot easily find anywhere else', gid: 'G1' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'This travel ' },
          { type: 'vocab', text: 'trend', vid: 3 },
          { type: 'text', text: ' is called snack tourism. It involves visiting convenience stores in different places to try local snacks and drinks. These stores often sell items that are not expensive and are easy to carry. Many visitors take home interesting snacks as ' },
          { type: 'vocab', text: 'souvenirs', vid: 4 },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'pattern', text: 'Snack tourism has become even more popular', pid: 'P1' },
          { type: 'text', text: ' because of short videos on apps like TikTok and Instagram. ' },
          { type: 'pattern', text: 'Travelers love posting clips of', pid: 'P2' },
          { type: 'text', text: ' ' },
          { type: 'vocab', text: 'unusual', vid: 5 },
          { type: 'text', text: ' snacks or fun drinks that they find in convenience stores around the world. On your next trip, step into a convenience store and see what small ' },
          { type: 'vocab', text: 'adventure', vid: 6 },
          { type: 'text', text: ' is waiting on the shelves.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Tourists often take photos in front of famous ______ such as the Eiffel Tower.", options: ["A. landmarks", "B. souvenirs", "C. trends", "D. adventures"], answer: "A", explanation: "【選項解析】\n- (A) landmarks (n.) 地標 (正解)\n- (B) souvenirs (n.) 紀念品\n- (C) trends (n.) 趨勢\n- (D) adventures (n.) 冒險" },
      { id: 2, question: "She bought a small wooden mask as a ______ to remember her trip to Bali.", options: ["A. souvenir", "B. landmark", "C. trend", "D. procedure"], answer: "A", explanation: "【選項解析】\n- (A) souvenir (n.) 紀念品、伴手禮 (正解)\n- (B) landmark (n.) 地標\n- (C) trend (n.) 趨勢\n- (D) procedure (n.) 手術、程序" },
      { id: 3, question: "The chef created a ______ dish by combining ingredients from three different countries.", options: ["A. unique", "B. contagious", "C. sentimental", "D. qualified"], answer: "A", explanation: "【選項解析】\n- (A) unique (adj.) 獨特的 (正解)\n- (B) contagious (adj.) 傳染性的\n- (C) sentimental (adj.) 多愁善感的\n- (D) qualified (adj.) 合格的" },
      { id: 4, question: "Backpacking across South America alone turned out to be the ______ of a lifetime.", options: ["A. adventure", "B. donation", "C. landfill", "D. consultation"], answer: "A", explanation: "【選項解析】\n- (A) adventure (n.) 冒險 (正解)\n- (B) donation (n.) 捐贈\n- (C) landfill (n.) 垃圾掩埋場\n- (D) consultation (n.) 諮詢" }
    ],
    cloze: {
      text: "Snack tourism is a growing trend [1] travelers explore local culture through convenience store shelves instead of restaurant menus. Rather than planning a trip [2] famous landmarks, some visitors now build part of their itinerary around finding unusual snacks. Because convenience stores are found almost everywhere, this kind of exploration is [3] to fit into even a short layover between flights. Social media has made the trend spread quickly, [4] millions of viewers to try snacks they had never heard of before. For budget travelers, snack tourism offers a cheap and easy way to experience a new culture [5] spending much money at all.",
      questions: [
        { id: 1, options: ["A. where", "B. which", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 trend 表抽象情境，where 在此作關係副詞，相當於 in which。" },
        { id: 2, options: ["A. around", "B. despite", "C. unless", "D. among"], answer: "A", explanation: "build a trip around + N. 表「圍繞著…規劃行程」。" },
        { id: 3, options: ["A. easy", "B. easily", "C. ease", "D. easing"], answer: "A", explanation: "be + adj. + to V. 句型，easy 為形容詞，修飾主詞補語。" },
        { id: 4, options: ["A. inspiring", "B. inspired", "C. inspire", "D. to inspire"], answer: "A", explanation: "分詞構句表伴隨結果，主動「進而激勵」用 inspiring。" },
        { id: 5, options: ["A. without", "B. besides", "C. instead", "D. except"], answer: "A", explanation: "without + V-ing 表「沒有…而…」。" }
      ]
    },
    wordBank: {
      words: ["(A) capture", "(B) colorful", "(C) culture", "(D) curiosity", "(E) discover", "(F) encourage", "(G) explore", "(H) limited", "(I) local", "(J) shelf"],
      passage: "For many travelers, a trip is no longer complete without a stop at a local convenience store. What once seemed like an ordinary errand has turned into a chance to [1] a country's food culture one small package at a time.\n\nPart of the appeal comes from sheer variety. A single [2] might hold dozens of snacks that never make it onto store shelves back home, from seasonal fruit drinks to regional chip flavors. Travelers often photograph these finds before trying them, eager to [3] a moment that feels uniquely tied to the place they are visiting.\n\nThis habit also satisfies a deeper sense of [4]. Instead of ordering a familiar dish at a restaurant, snack tourists get to [5] small, affordable products almost at random, turning a five-minute stop into a mini adventure. Because the selection is often [6] to a specific region, the same snack may be impossible to find just a few hundred kilometers away.\n\nConvenience store chains have started to notice. Several brands now [7] curious travelers to hunt for limited-edition items, sometimes releasing special packaging that reflects [8] traditions or seasonal festivals. Some stores have even begun collaborating with popular characters or artists to create [9] designs that shoppers are eager to collect.\n\nWhat makes this trend stand out is how deeply it connects visitors to everyday [10], one unexpected snack at a time.",
      answers: { 1: "G", 2: "J", 3: "A", 4: "D", 5: "E", 6: "H", 7: "F", 8: "I", 9: "B", 10: "C" }
    },
    discourse: {
      options: [
        "A. Because the products rotate seasonally, even returning visitors rarely see the exact same shelf twice.",
        "B. Every convenience store in Asia is required by law to stock at least fifty imported snack brands.",
        "C. What started as a niche habit among adventurous backpackers has grown into a recognized travel category.",
        "D. Short-form videos showcasing snack hauls have turned ordinary purchases into shareable moments.",
        "E. As a result, some travelers now plan entire day trips around visiting several store chains in a single city."
      ],
      paragraphs: [
        "Convenience stores rarely appear on a typical travel bucket list, yet for a growing number of visitors to Asia, they have quietly become one of the most memorable stops on any itinerary.",
        "[1] Today, travel bloggers and casual tourists alike dedicate entire posts to comparing snack selections from one country to the next.",
        "Social media has played no small part in this shift. [2] A single unusual drink or limited-edition treat can reach millions of viewers within hours of being posted. [3]",
        "Part of the charm lies in unpredictability. [4] That sense of discovery, more than any single snack, keeps travelers coming back for another look."
      ],
      answers: { 1: "C", 2: "D", 3: "E", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this article mainly about?", options: ["A. A ranking of the best convenience store chains in Asia", "B. A growing travel trend of visiting convenience stores for unique snacks", "C. A guide to famous landmarks tourists should visit in Asia", "D. A warning about food safety at convenience stores"], answer: "B", explanation: "主旨題。全文介紹「零食旅遊」這股新興旅遊趨勢，說明遊客如何透過便利商店探索在地文化。" },
        { id: 2, question: "According to the article, why do convenience stores appeal to many tourists?", options: ["A. They offer the cheapest hotel bookings in the area", "B. They sell unique food that is hard to find elsewhere", "C. They provide free walking tours of the city", "D. They are the only places open late at night"], answer: "B", explanation: "細節題。文中提到遊客探索擺滿獨特食品的貨架，那些商品在其他地方不容易找到。" },
        { id: 3, question: "What has helped snack tourism become even more popular, according to the article?", options: ["A. Government travel subsidies", "B. Short videos on apps like TikTok and Instagram", "C. New international trade agreements", "D. A decrease in convenience store prices"], answer: "B", explanation: "細節題。文中提到零食旅遊因 TikTok 與 Instagram 等應用程式上的短影音而變得更加風靡。" },
        { id: 4, question: "What can be inferred about the items travelers often bring home from convenience stores?", options: ["A. They are usually too expensive for most tourists", "B. They often serve as small, easy-to-carry souvenirs of the trip", "C. They must be shipped separately due to size", "D. They are rarely food-related items"], answer: "B", explanation: "推論題。文中提到許多遊客會把有趣的零食當作伴手禮帶回家，且這些商店的商品通常不貴又方便攜帶，可推論這些零食是小巧易攜帶的紀念品。" }
      ]
    }
  },

  "Unit 5": {
    title: "Tom Holland: Swinging Into Action",
    chineseTitle: "湯姆·霍蘭：盪出屬於自己的英雄路",
    passage: `Day 1\n\nTom Holland swings into theaters again this year as Spider-Man to save the day. This is his seventh appearance in the role that he is best known for. Yet he is more than a talented superhero; his movies cover a wide spectrum, from drama to comedy to action.\n\nLife for Tom Holland began in 1996 in England. He was born into an artistic family — his mother is a photographer, and his father is a comedian and author.\n\nWhen Holland was a small child, his mother discovered that he had a natural rhythm and loved to dance. She signed him up for dance classes. The more he danced, the more he learned, and the better he became. In 2006, the studio owner, recognizing the young boy’s talent, convinced him to try out for Billy Elliot the Musical. Even though he had no formal training in ballet or drama, Holland’s natural talent impressed the musical director.\n\nHolland spent the next two years in ballet lessons. Then in 2008, he made his debut in Billy Elliot the Musical in London’s famous West End. Before long, he was promoted to the starring role, which he played until his final performance in May 2010.\n\nDay 2\n\nA few months later, Holland won a starring role in the film The Impossible, based on real-life events surrounding the 2004 Indian Ocean tsunami. The young actor was widely praised, receiving several awards for his incredible performance as a courageous 12-year-old boy.\n\nThe Impossible brought Holland popularity and additional opportunities, both in movies and on television. But his big break finally came in 2016 when he first appeared in his now signature role as Spider-Man in Captain America: Civil War. As a lifelong fan of the superhero, he considered it a dream come true to land the remarkable part!\n\nWhile Holland enjoys playing the popular character, he has stated that he wants to push himself as an actor and expand beyond playing a superhero. Indeed, he has several personal goals on his bucket list.\n\n“The 20-year goal is to be a film director,” Holland said in a magazine interview. “The 15-year goal is to win an Oscar. The five-year goal is to just keep enjoying myself. I really am having the time of my life.”\n\nAs for the fans, they’ll be ready, no matter what adventure Tom Holland swings into next!`,
    chineseTranslation: `【第 1 天】\n\n湯姆·霍蘭今年再度飾演蜘蛛人重返大銀幕拯救世界。這是他第七次出演這個讓他聲名大噪的角色。然而，他遠不只是個才華洋溢的超級英雄；他的電影類型橫跨戲劇、喜劇與動作片等廣泛領域。\n\n湯姆·霍蘭的人生始於 1996 年的英國。他出生在一個充滿藝術氣息的家庭——他的母親是攝影師，父親則是喜劇演員兼作家。\n\n霍蘭還是個小孩子時，他的母親發現他天生具有節奏感，並且熱愛跳舞。於是她讓他報名參加舞蹈課程。他跳得愈多，學得就愈多，也變得愈來愈厲害。2006 年，舞蹈教室的老闆發掘了這個男孩的天賦，說服他去試演《舞動人生》音樂劇。儘管他從未接受過正式的芭蕾或戲劇訓練，霍蘭的天生才華仍然讓音樂劇導演印象深刻。\n\n霍蘭接下來花了兩年時間學習芭蕾舞。到了 2008 年，他在倫敦知名的西區正式於《舞動人生》音樂劇中初登場。不久後，他便被拔擢為主角，一直演到 2010 年 5 月的最後一場演出。\n\n【第 2 天】\n\n幾個月後，霍蘭在電影《The Impossible》中贏得了主角，這部電影改編自 2004 年印度洋海嘯的真實事件。這位年輕演員獲得廣泛讚譽，他所飾演那位勇敢的 12 歲男孩的精湛演出，為他贏得了多個獎項。\n\n《The Impossible》為霍蘭帶來了知名度與更多機會，不論是電影或電視方面皆然。但他真正的大突破直到 2016 年才到來，當時他首度在《美國隊長3：英雄內戰》中演出如今已成為他招牌角色的蜘蛛人。身為這位超級英雄的終身粉絲，他認為能拿下這個非凡的角色，簡直是美夢成真！\n\n儘管霍蘭喜愛飾演這個深受歡迎的角色，他也曾表示，他希望身為演員能不斷挑戰自我，並拓展戲路，不侷限於扮演超級英雄。事實上，他的人生清單上還列著幾個個人目標。\n\n霍蘭在一次雜誌專訪中表示：「二十年的目標是成為電影導演。十五年的目標是贏得奧斯卡獎。五年的目標則只是持續享受當下。我真的正過著人生中最精彩的時光。」\n\n至於粉絲們，無論湯姆·霍蘭接下來要盪向什麼樣的冒險，他們都已經準備好了！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "spectrum", pos: "n.", meaning: "範圍、領域", collocations: "a wide spectrum 廣泛的範圍" },
        { id: 2, word: "rhythm", pos: "n.", meaning: "節奏感", collocations: "a natural rhythm 天生的節奏感" },
        { id: 3, word: "formal", pos: "adj.", meaning: "正式的", collocations: "formal training 正式訓練" },
        { id: 4, word: "debut", pos: "n.", meaning: "初次登場、首演", collocations: "make one's debut 初次登場" },
        { id: 5, word: "courageous", pos: "adj.", meaning: "勇敢的", collocations: "a courageous performance 勇敢的演出" },
        { id: 6, word: "signature", pos: "adj.", meaning: "招牌的、標誌性的", collocations: "a signature role 招牌角色" },
        { id: 7, word: "remarkable", pos: "adj.", meaning: "非凡的、卓越的", collocations: "a remarkable part 非凡的角色" },
        { id: 8, word: "promoted", pos: "v.", meaning: "被拔擢、被晉升", collocations: "be promoted to... 被拔擢為…" }
      ],
      grammarNotes: [
        { id: "G1", title: "分詞構句 (表原因，主動語態)", excerpt: "recognizing the young boy’s talent", analysis: "分詞構句代替 as/because he recognized the young boy’s talent，表達工作室老闆發掘男孩天賦的原因。" },
        { id: "G2", title: "非限定關係子句 (受格關代，先行詞為事物)", excerpt: "which he played until his final performance in May 2010", analysis: "which 代替先行詞 the starring role 作受詞，引導補充說明的非限定關係子句。" },
        { id: "G3", title: "過去分詞片語作形容詞 (省略關代+be動詞)", excerpt: "based on real-life events surrounding the 2004 Indian Ocean tsunami", analysis: "based on... 為過去分詞片語，修飾 The Impossible，等於 which was based on... 的省略形式。" }
      ],
      patternNotes: [
        { id: "P1", title: "the + 比較級, the + 比較級 (愈…就愈…)", excerpt: "The more he danced, the more he learned, and the better he became", analysis: "此句型表示兩件事程度上同步增減，意為「他跳得愈多，學得愈多，也變得愈好」。" },
        { id: "P2", title: "as + N.P. (身為…；以…身分)", excerpt: "As a lifelong fan of the superhero", analysis: "as 在此作介系詞，表「身為、以…的身分」，用於表明主詞的立場背景。" }
      ],
      paragraphs: [
        [ { type: 'text', text: 'Day 1' } ],
        [
          { type: 'text', text: 'Tom Holland swings into theaters again this year as Spider-Man to save the day. This is his seventh appearance in the role that he is best known for. Yet he is more than a talented superhero; his movies cover a wide ' },
          { type: 'vocab', text: 'spectrum', vid: 1 },
          { type: 'text', text: ', from drama to comedy to action.' }
        ],
        [
          { type: 'text', text: 'Life for Tom Holland began in 1996 in England. He was born into an artistic family — his mother is a photographer, and his father is a comedian and author.' }
        ],
        [
          { type: 'text', text: 'When Holland was a small child, his mother discovered that he had a natural ' },
          { type: 'vocab', text: 'rhythm', vid: 2 },
          { type: 'text', text: ' and loved to dance. She signed him up for dance classes. ' },
          { type: 'pattern', text: 'The more he danced, the more he learned, and the better he became', pid: 'P1' },
          { type: 'text', text: '. In 2006, the studio owner, ' },
          { type: 'grammar', text: 'recognizing the young boy’s talent', gid: 'G1' },
          { type: 'text', text: ', convinced him to try out for Billy Elliot the Musical. Even though he had no ' },
          { type: 'vocab', text: 'formal', vid: 3 },
          { type: 'text', text: ' training in ballet or drama, Holland’s natural talent impressed the musical director.' }
        ],
        [
          { type: 'text', text: 'Holland spent the next two years in ballet lessons. Then in 2008, he made his ' },
          { type: 'vocab', text: 'debut', vid: 4 },
          { type: 'text', text: ' in Billy Elliot the Musical in London’s famous West End. Before long, he was ' },
          { type: 'vocab', text: 'promoted', vid: 8 },
          { type: 'text', text: ' to the starring role, ' },
          { type: 'grammar', text: 'which he played until his final performance in May 2010', gid: 'G2' },
          { type: 'text', text: '.' }
        ],
        [ { type: 'text', text: 'Day 2' } ],
        [
          { type: 'text', text: 'A few months later, Holland won a starring role in the film The Impossible, ' },
          { type: 'grammar', text: 'based on real-life events surrounding the 2004 Indian Ocean tsunami', gid: 'G3' },
          { type: 'text', text: '. The young actor was widely praised, receiving several awards for his incredible performance as a ' },
          { type: 'vocab', text: 'courageous', vid: 5 },
          { type: 'text', text: ' 12-year-old boy.' }
        ],
        [
          { type: 'text', text: 'The Impossible brought Holland popularity and additional opportunities, both in movies and on television. But his big break finally came in 2016 when he first appeared in his now ' },
          { type: 'vocab', text: 'signature', vid: 6 },
          { type: 'text', text: ' role as Spider-Man in Captain America: Civil War. ' },
          { type: 'pattern', text: 'As a lifelong fan of the superhero', pid: 'P2' },
          { type: 'text', text: ', he considered it a dream come true to land the ' },
          { type: 'vocab', text: 'remarkable', vid: 7 },
          { type: 'text', text: ' part!' }
        ],
        [
          { type: 'text', text: 'While Holland enjoys playing the popular character, he has stated that he wants to push himself as an actor and expand beyond playing a superhero. Indeed, he has several personal goals on his bucket list.' }
        ],
        [
          { type: 'text', text: '“The 20-year goal is to be a film director,” Holland said in a magazine interview. “The 15-year goal is to win an Oscar. The five-year goal is to just keep enjoying myself. I really am having the time of my life.”' }
        ],
        [
          { type: 'text', text: 'As for the fans, they’ll be ready, no matter what adventure Tom Holland swings into next!' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The festival featured a wide ______ of music, from classical to hip-hop.", options: ["A. spectrum", "B. procedure", "C. consultation", "D. shortage"], answer: "A", explanation: "【選項解析】\n- (A) spectrum (n.) 範圍、領域 (正解)\n- (B) procedure (n.) 手術、程序\n- (C) consultation (n.) 諮詢\n- (D) shortage (n.) 短缺" },
      { id: 2, question: "It took a ______ firefighter to run back into the burning building to save the child.", options: ["A. courageous", "B. sentimental", "C. artificial", "D. affordable"], answer: "A", explanation: "【選項解析】\n- (A) courageous (adj.) 勇敢的 (正解)\n- (B) sentimental (adj.) 多愁善感的\n- (C) artificial (adj.) 人造的\n- (D) affordable (adj.) 負擔得起的" },
      { id: 3, question: "Critics called her debut novel a ______ achievement for such a young writer.", options: ["A. remarkable", "B. sentimental", "C. qualified", "D. widespread"], answer: "A", explanation: "【選項解析】\n- (A) remarkable (adj.) 非凡的、卓越的 (正解)\n- (B) sentimental (adj.) 多愁善感的\n- (C) qualified (adj.) 合格的\n- (D) widespread (adj.) 普遍的" },
      { id: 4, question: "The young singer made her ______ on a national talent show at just fourteen years old.", options: ["A. debut", "B. adoption", "C. consultation", "D. procedure"], answer: "A", explanation: "【選項解析】\n- (A) debut (n.) 初次登場、首演 (正解)\n- (B) adoption (n.) 領養\n- (C) consultation (n.) 諮詢\n- (D) procedure (n.) 手術、程序" }
    ],
    cloze: {
      text: "Long before he became famous for playing a superhero, Tom Holland trained for years as a dancer and stage performer. His early background in musical theater gave him a level of physical discipline that few young actors [1] at the time. Holland has often said that [2] he first walked onto a West End stage as a child, he knew he wanted to perform for the rest of his life. His breakout film role [3] him international attention almost overnight, and offers soon followed from major studios. Even after becoming one of the most recognizable actors of his generation, Holland insists on continuing to grow, [4] roles that push him outside his comfort zone. For a performer who once dreamed of simply finishing a dance recital without tripping, [5] far he has come is nothing short of extraordinary.",
      questions: [
        { id: 1, options: ["A. possessed", "B. possessing", "C. to possess", "D. possess"], answer: "A", explanation: "few young actors possessed 為過去簡單式動詞，指「當時很少有演員擁有」。" },
        { id: 2, options: ["A. when", "B. although", "C. unless", "D. despite"], answer: "A", explanation: "when 引導時間副詞子句，表「當…的時候」。" },
        { id: 3, options: ["A. brought", "B. bringing", "C. to bring", "D. bring"], answer: "A", explanation: "bring sb sth 表「帶給某人某物」，主詞為 role，過去式用 brought。" },
        { id: 4, options: ["A. seeking", "B. sought", "C. seek", "D. to seek"], answer: "A", explanation: "分詞構句表伴隨動作，主動「進而尋求」用 seeking。" },
        { id: 5, options: ["A. How", "B. So", "C. Too", "D. As"], answer: "A", explanation: "How far + S. + V. 表「…有多麼大的進展」，在此整個子句作句子主詞。" }
      ]
    },
    wordBank: {
      words: ["(A) achieve", "(B) audition", "(C) dedicated", "(D) discipline", "(E) humble", "(F) inspire", "(G) rehearse", "(H) spotlight", "(I) talent", "(J) versatile"],
      passage: "Long before most fans knew his name, Tom Holland spent countless afternoons learning to [1] for stage productions, often competing against dozens of other hopefuls for a single role. That early exposure to rejection taught him something many young performers never learn: resilience.\n\nDance and theater also gave Holland a rare kind of [2]. Actors who [3] as children often develop sharper instincts for timing and movement, skills that translate surprisingly well to action films filled with stunts and choreography. Directors who have worked with him frequently praise his raw [4], noting that he seems just as comfortable in a quiet dramatic scene as he does swinging between buildings.\n\nWhat makes Holland stand out among young actors today is his willingness to stay [5], despite years in the [6]. Interviewers often note that he credits his family, his early stage training and simple luck for his success, rather than claiming the spotlight entirely for himself.\n\nHe has also proven to be remarkably [7], taking on projects ranging from war dramas to lighthearted comedies. This range allows him to [8] audiences who might never watch a superhero film, broadening his career well beyond a single franchise.\n\nColleagues describe him as deeply [9], someone who treats every project, large or small, with the same seriousness. Young performers who hope to follow a similar path are often told the same thing: talent alone rarely explains success; it is the years of quiet preparation beforehand that ultimately help someone [10] their biggest dreams.",
      answers: { 1: "B", 2: "D", 3: "G", 4: "I", 5: "E", 6: "H", 7: "J", 8: "F", 9: "C", 10: "A" }
    },
    discourse: {
      options: [
        "A. Before landing the role, he endured a grueling audition process that included multiple screen tests and physical challenges.",
        "B. Every actor who plays a superhero is contractually required to perform all of their own stunts.",
        "C. This early training instilled a level of discipline that many actors only develop much later in their careers.",
        "D. As a result, directors increasingly cast him in roles that blend physical action with genuine emotional depth.",
        "E. Long before stepping onto a film set, he spent years performing on stage in a demanding musical production."
      ],
      paragraphs: [
        "Few actors arrive at stardom through quite the same path as Tom Holland. Long before superhero franchises became part of his résumé, his career began in a far less glamorous setting: a dance studio.",
        "[1] Rehearsing several nights a week while also attending school taught him how to manage exhaustion and pressure at a young age.",
        "[2] By the time he transitioned into film, that foundation was already deeply ingrained. [3]",
        "That combination of physical training and emotional range has not gone unnoticed in the industry. [4] For Holland, the stage may have been the beginning, but it is clearly far from the end."
      ],
      answers: { 1: "E", 2: "C", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main focus of this article?", options: ["A. A review of Tom Holland's most recent Spider-Man film", "B. Tom Holland's journey from young dancer to celebrated actor", "C. A comparison between Tom Holland and other superhero actors", "D. The history of the Spider-Man character in film"], answer: "B", explanation: "主旨題。全文介紹湯姆·霍蘭從舞蹈起步，逐步發展成知名演員的歷程。" },
        { id: 2, question: "How did Tom Holland first get involved in performing, according to the article?", options: ["A. He was discovered while performing street dance", "B. His mother signed him up for dance classes after noticing his natural rhythm", "C. He auditioned for a talent show at school", "D. His father encouraged him to pursue acting directly"], answer: "B", explanation: "細節題。文中提到他的母親發現他天生具有節奏感，因而讓他報名參加舞蹈課程。" },
        { id: 3, question: "What role marked Holland's breakout into the Marvel superhero franchise?", options: ["A. His role in Billy Elliot the Musical", "B. His role in The Impossible", "C. His appearance as Spider-Man in Captain America: Civil War", "D. A leading role in a television series"], answer: "C", explanation: "細節題。文中提到他的大突破是 2016 年在《美國隊長3：英雄內戰》中首次飾演蜘蛛人。" },
        { id: 4, question: "Based on the article, what can be inferred about Holland's career goals?", options: ["A. He wants to be remembered only for playing Spider-Man", "B. He hopes to limit his acting career to superhero films", "C. He aims to grow as an actor and eventually try new roles, including directing", "D. He plans to retire from acting within the next five years"], answer: "C", explanation: "推論題。文中提到他希望挑戰自我、拓展戲路，並透露自己長期目標是成為電影導演，顯示他有意持續成長並嘗試不同角色。" }
      ]
    }
  },

  "Unit 6": {
    title: "The Truth Behind the Green Label",
    chineseTitle: "綠色標章的真相",
    passage: `Day 1\n\nTwo shampoo bottles promise similar benefits at the same price, but one displays a seal stating “eco-friendly;” the other doesn’t. All else being equal, you’d likely choose the eco-friendly one as the ethical choice.\n\nYou may have fallen for a marketing scheme called greenwashing, a strategy companies use to increase sales by making themselves or their products appear kinder to the environment than they really are. As a result, consumers may believe they are making environmentally responsible choices when they are not.\n\nA report by McKinsey, a global consulting firm, states that Generation Z consumers prefer buying from brands that appear to be more conscious of the environment, and they’ll pay more for those products. This may give companies an incentive to be better citizens, but some take shortcuts to increase sales.\n\nCompanies make their products appear environmentally friendly (note the shampoo bottle example) by using vague labels like eco-friendly without providing supporting evidence. Another tactic is that they might promise to reach net zero by a certain year without having clear steps to reduce carbon emissions.\n\nOthers make a single sustainable action look like the company is very responsible while hiding larger harmful practices. For example, in 2018, Starbucks introduced a special lid designed to eliminate straws, but it used more plastic by weight to make the lid.\n\nDay 2\n\nOther companies pretend to be industry leaders in sustainable practices by meeting the minimal standard to qualify for a certificate or by getting certified through greenwashing agencies. In 2020, for example, IKEA was found to be illegally logging in Ukraine while holding a certificate from the greenwashing agency Forest Stewardship Council.\n\nEven companies with good intentions can be guilty of greenwashing. Companies adopt sustainable practices but allow poor management, poor communication or lack of expertise to cause their promises to fail.\n\nFailing to keep promises betrays consumer trust. When a company’s reputation is damaged by greenwashing, down go its profits because angry consumers won’t buy their products. In addition, consumers may stop trusting positive claims and give up on shopping with their conscience, harming sales of ethical companies.\n\nAvoid falling for greenwashing tactics by learning to spot them. Educate yourself about sustainable and ethical practices and research certifying agencies. Rather than evaluating only one product, consider company-wide performance on environmental, social and governance standards. Avoid companies facing environmental lawsuits.\n\nBuy products from companies that are transparent about their impact on the environment, provide clear, measurable goals to become more sustainable, are certified by trusted third-party agencies, and align with government regulations. Voting with your wallet shows that it’s not just what companies produce but how they produce it that counts.`,
    chineseTranslation: `【第 1 天】\n\n兩瓶洗髮精承諾提供相似的效果、售價也相同，但其中一瓶貼有標示「環保」的標章，另一瓶則沒有。在其他條件相同的情況下，你很可能會選擇那瓶標示環保的產品，認為這是較符合道德的選擇。\n\n你可能已經落入了一種名為「漂綠」的行銷手法陷阱，這是企業用來提升銷售額的策略，讓自己或自家產品看起來比實際上更對環境友善。結果，消費者可能誤以為自己做出了對環境負責任的選擇，實際上卻並非如此。\n\n麥肯錫（一家全球顧問公司）的一份報告指出，Z 世代消費者偏好向看起來更具環保意識的品牌購買商品，並且願意為這類產品支付更高的價格。這或許能促使企業成為更負責任的企業公民，但也有些企業選擇走捷徑來提升銷售額。\n\n企業讓自家產品看起來對環境友善（如前述洗髮精的例子）的方法之一，是使用「環保」這類模糊的標籤，卻不提供任何佐證。另一種手法則是承諾在某個特定年份達成淨零排放，卻沒有明確減碳步驟。\n\n另一些企業則是讓單一項永續作為看起來公司非常負責任，藉此掩蓋規模更大的有害作為。例如，2018 年星巴克推出了一款專為淘汰吸管而設計的特殊杯蓋，但製作這款杯蓋所使用的塑膠重量，反而比原本更多。\n\n【第 2 天】\n\n其他企業則假裝自己是永續實踐方面的產業領導者，做法是只達到取得認證的最低標準，或是透過漂綠機構取得認證。例如 2020 年，IKEA 被發現在烏克蘭非法伐木，當時它仍持有來自漂綠機構「森林管理委員會」（Forest Stewardship Council）的認證。\n\n即使是立意良善的企業，也可能犯下漂綠的過錯。有些企業採行永續作為，卻因為管理不善、溝通不良或缺乏專業知識，而導致這些承諾最終落空。\n\n未能履行承諾會背叛消費者的信任。當一間企業的聲譽因漂綠而受損時，其獲利便會隨之下滑，因為憤怒的消費者將不再購買他們的產品。此外，消費者也可能不再信任正面的宣稱，進而放棄「用消費實踐良知」，連帶傷害到真正符合道德標準企業的銷售。\n\n學會辨識漂綠手法，以避免上當。多了解永續與道德實踐的相關知識，並研究認證機構的可信度。與其只評估單一產品，不如考量企業在環境、社會與治理標準上的整體表現。避免選擇正面臨環境訴訟的企業。\n\n選購那些對自身環境影響保持透明、提供明確可衡量的永續目標、通過可信第三方機構認證，並符合政府法規的企業產品。用你的錢包投票，證明真正重要的不只是企業生產了什麼，而是他們如何生產這些東西。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "greenwashing", pos: "n.", meaning: "漂綠（假裝環保的行銷手法）", collocations: "a marketing scheme called greenwashing 稱為漂綠的行銷手法" },
        { id: 2, word: "incentive", pos: "n.", meaning: "誘因、動機", collocations: "give sb an incentive to V. 給予某人做…的誘因" },
        { id: 3, word: "vague", pos: "adj.", meaning: "模糊的", collocations: "vague labels 模糊的標籤" },
        { id: 4, word: "tactic", pos: "n.", meaning: "手法、策略", collocations: "another tactic is... 另一種手法是…" },
        { id: 5, word: "sustainable", pos: "adj.", meaning: "永續的", collocations: "a sustainable action 永續作為" },
        { id: 6, word: "certified", pos: "v.", meaning: "被認證、被核可", collocations: "get certified through... 透過…取得認證" },
        { id: 7, word: "expertise", pos: "n.", meaning: "專業知識", collocations: "lack of expertise 缺乏專業知識" },
        { id: 8, word: "conscience", pos: "n.", meaning: "良知", collocations: "shop with one's conscience 用良知消費" },
        { id: 9, word: "transparent", pos: "adj.", meaning: "透明的", collocations: "be transparent about... 對…保持透明" },
        { id: 10, word: "measurable", pos: "adj.", meaning: "可衡量的", collocations: "measurable goals 可衡量的目標" },
        { id: 11, word: "align", pos: "v.", meaning: "使一致、符合", collocations: "align with regulations 符合法規" }
      ],
      grammarNotes: [
        { id: "G1", title: "make + O. + OC. (受詞補語為原形動詞)", excerpt: "making themselves or their products appear kinder to the environment than they really are", analysis: "make 後接受詞 themselves/their products，受詞補語用原形動詞 appear，表「使…顯得」。" },
        { id: "G2", title: "過去分詞片語作形容詞 (省略關代+be動詞)", excerpt: "designed to eliminate straws", analysis: "designed to V. 為過去分詞片語，修飾 lid，等於 which was designed to eliminate straws 的省略形式。" },
        { id: "G3", title: "副詞前置倒裝句", excerpt: "down go its profits", analysis: "down 置於句首，主詞 its profits 與動詞 go 需倒裝，強調獲利下滑的結果，等於 its profits go down 的倒裝強調用法。" }
      ],
      patternNotes: [
        { id: "P1", title: "not just A but B that... (不只是A而是B)", excerpt: "it’s not just what companies produce but how they produce it that counts", analysis: "此為強調句型搭配 not just A but B，強調真正重要的是後者「如何生產」而非前者「生產什麼」。" },
        { id: "P2", title: "rather than + V-ing (與其…不如)", excerpt: "Rather than evaluating only one product, consider company-wide performance on environmental, social and governance standards", analysis: "rather than 後接動名詞，表「與其…不如」，用於比較兩種做法並建議後者。" }
      ],
      paragraphs: [
        [ { type: 'text', text: 'Day 1' } ],
        [
          { type: 'text', text: 'Two shampoo bottles promise similar benefits at the same price, but one displays a seal stating “eco-friendly;” the other doesn’t. All else being equal, you’d likely choose the eco-friendly one as the ethical choice.' }
        ],
        [
          { type: 'text', text: 'You may have fallen for a marketing scheme called ' },
          { type: 'vocab', text: 'greenwashing', vid: 1 },
          { type: 'text', text: ', a strategy companies use to increase sales by ' },
          { type: 'grammar', text: 'making themselves or their products appear kinder to the environment than they really are', gid: 'G1' },
          { type: 'text', text: '. As a result, consumers may believe they are making environmentally responsible choices when they are not.' }
        ],
        [
          { type: 'text', text: 'A report by McKinsey, a global consulting firm, states that Generation Z consumers prefer buying from brands that appear to be more conscious of the environment, and they’ll pay more for those products. This may give companies an ' },
          { type: 'vocab', text: 'incentive', vid: 2 },
          { type: 'text', text: ' to be better citizens, but some take shortcuts to increase sales.' }
        ],
        [
          { type: 'text', text: 'Companies make their products appear environmentally friendly (note the shampoo bottle example) by using ' },
          { type: 'vocab', text: 'vague', vid: 3 },
          { type: 'text', text: ' labels like eco-friendly without providing supporting evidence. Another ' },
          { type: 'vocab', text: 'tactic', vid: 4 },
          { type: 'text', text: ' is that they might promise to reach net zero by a certain year without having clear steps to reduce carbon emissions.' }
        ],
        [
          { type: 'text', text: 'Others make a single ' },
          { type: 'vocab', text: 'sustainable', vid: 5 },
          { type: 'text', text: ' action look like the company is very responsible while hiding larger harmful practices. For example, in 2018, Starbucks introduced a special lid ' },
          { type: 'grammar', text: 'designed to eliminate straws', gid: 'G2' },
          { type: 'text', text: ', but it used more plastic by weight to make the lid.' }
        ],
        [ { type: 'text', text: 'Day 2' } ],
        [
          { type: 'text', text: 'Other companies pretend to be industry leaders in sustainable practices by meeting the minimal standard to qualify for a certificate or by getting ' },
          { type: 'vocab', text: 'certified', vid: 6 },
          { type: 'text', text: ' through greenwashing agencies. In 2020, for example, IKEA was found to be illegally logging in Ukraine while holding a certificate from the greenwashing agency Forest Stewardship Council.' }
        ],
        [
          { type: 'text', text: 'Even companies with good intentions can be guilty of greenwashing. Companies adopt sustainable practices but allow poor management, poor communication or lack of ' },
          { type: 'vocab', text: 'expertise', vid: 7 },
          { type: 'text', text: ' to cause their promises to fail.' }
        ],
        [
          { type: 'text', text: 'Failing to keep promises betrays consumer trust. When a company’s reputation is damaged by greenwashing, ' },
          { type: 'grammar', text: 'down go its profits', gid: 'G3' },
          { type: 'text', text: ' because angry consumers won’t buy their products. In addition, consumers may stop trusting positive claims and give up on shopping with their ' },
          { type: 'vocab', text: 'conscience', vid: 8 },
          { type: 'text', text: ', harming sales of ethical companies.' }
        ],
        [
          { type: 'text', text: 'Avoid falling for greenwashing tactics by learning to spot them. Educate yourself about sustainable and ethical practices and research certifying agencies. ' },
          { type: 'pattern', text: 'Rather than evaluating only one product, consider company-wide performance on environmental, social and governance standards', pid: 'P2' },
          { type: 'text', text: '. Avoid companies facing environmental lawsuits.' }
        ],
        [
          { type: 'text', text: 'Buy products from companies that are ' },
          { type: 'vocab', text: 'transparent', vid: 9 },
          { type: 'text', text: ' about their impact on the environment, provide clear, ' },
          { type: 'vocab', text: 'measurable', vid: 10 },
          { type: 'text', text: ' goals to become more sustainable, are certified by trusted third-party agencies, and ' },
          { type: 'vocab', text: 'align', vid: 11 },
          { type: 'text', text: ' with government regulations. Voting with your wallet shows that ' },
          { type: 'pattern', text: 'it’s not just what companies produce but how they produce it that counts', pid: 'P1' },
          { type: 'text', text: '.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Critics accused the company of ______, since its “green” packaging hid the fact that the product itself was harmful to the ocean.", options: ["A. greenwashing", "B. donation", "C. adoption", "D. consultation"], answer: "A", explanation: "【選項解析】\n- (A) greenwashing (n.) 漂綠（假裝環保的行銷手法） (正解)\n- (B) donation (n.) 捐贈\n- (C) adoption (n.) 領養\n- (D) consultation (n.) 諮詢" },
      { id: 2, question: "The farm switched to ______ methods that protect the soil for future generations.", options: ["A. sustainable", "B. contagious", "C. artificial", "D. affordable"], answer: "A", explanation: "【選項解析】\n- (A) sustainable (adj.) 永續的 (正解)\n- (B) contagious (adj.) 傳染性的\n- (C) artificial (adj.) 人造的\n- (D) affordable (adj.) 負擔得起的" },
      { id: 3, question: "Shareholders demanded that the company be more ______ about how it spends its budget.", options: ["A. transparent", "B. sentimental", "C. remarkable", "D. courageous"], answer: "A", explanation: "【選項解析】\n- (A) transparent (adj.) 透明的 (正解)\n- (B) sentimental (adj.) 多愁善感的\n- (C) remarkable (adj.) 非凡的\n- (D) courageous (adj.) 勇敢的" },
      { id: 4, question: "He couldn't ignore his ______ any longer and finally admitted what he had done.", options: ["A. conscience", "B. discipline", "C. spotlight", "D. shortage"], answer: "A", explanation: "【選項解析】\n- (A) conscience (n.) 良知 (正解)\n- (B) discipline (n.) 紀律\n- (C) spotlight (n.) 鎂光燈焦點\n- (D) shortage (n.) 短缺" }
    ],
    cloze: {
      text: "Greenwashing can be difficult to spot because the language companies use often sounds positive without actually meaning much. A label reading \"all natural,\" for example, tells a shopper almost nothing [1] how a product was actually made. Consumers who want to avoid [2] fooled should look past marketing slogans and check whether a company publishes specific data about its environmental impact. It also helps to research [3] issued a company's certification, since some certifying agencies apply far [4] standards than others. By comparing several sources rather than trusting a single label, shoppers can make choices [5] are genuinely informed rather than simply persuaded.",
      questions: [
        { id: 1, options: ["A. about", "B. despite", "C. unless", "D. among"], answer: "A", explanation: "tell sb nothing about + N. 表「完全沒有告訴某人關於…的資訊」。" },
        { id: 2, options: ["A. being", "B. be", "C. to be", "D. been"], answer: "A", explanation: "avoid + V-ing 後接動名詞，being fooled 為被動動名詞，表「被愚弄」。" },
        { id: 3, options: ["A. which", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞為機構 (agency)，關係代名詞用 which 代替，在子句中作主詞。" },
        { id: 4, options: ["A. stricter", "B. strictly", "C. strictness", "D. strict"], answer: "A", explanation: "far 修飾比較級 stricter，表「…得多」，加強比較程度。" },
        { id: 5, options: ["A. that", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 choices 為事物，that 在子句中作主詞，引導限定關係子句。" }
      ]
    },
    wordBank: {
      words: ["(A) accountable", "(B) credible", "(C) deceptive", "(D) disclose", "(E) exaggerate", "(F) footprint", "(G) loophole", "(H) mislead", "(I) verify", "(J) watchdog"],
      passage: "Consumers today face a flood of environmental claims, and separating honest efforts from clever marketing has become its own kind of skill. Some companies use [1] language on purpose, choosing words that sound impressive but promise very little in concrete terms.\n\nIndependent organizations have stepped in to help. Environmental [2] groups now review corporate claims, publish reports and occasionally call out companies that [3] the public about their practices. These groups cannot force a company to change, but public pressure alone has been enough to make some brands rewrite their marketing entirely.\n\nRegulators in several countries are also closing legal [4] that once let companies advertise vague claims without proof. New rules increasingly require businesses to [5] exactly how a product's environmental impact was measured, rather than relying on broad statements like \"eco-friendly.\"\n\nStill, not every claim can be easily checked. A company might [6] a modest improvement, describing a five percent reduction in waste as though it were a complete transformation of its supply chain. Shoppers who want a [7] source of information often turn to independent labels that [8] a company's claims before approving its use of a certification mark.\n\nUltimately, experts argue that real change requires companies to be fully [9] for their environmental [10], not just for the story they tell about it in advertisements.",
      answers: { 1: "C", 2: "J", 3: "H", 4: "G", 5: "D", 6: "E", 7: "B", 8: "I", 9: "A", 10: "F" }
    },
    discourse: {
      options: [
        "A. Regulators in several countries have begun fining companies that cannot back up their environmental claims with evidence.",
        "B. Every company that advertises eco-friendly products is automatically audited on a monthly basis by the United Nations.",
        "C. This has pushed some companies to publish detailed sustainability reports rather than relying on a single catchy slogan.",
        "D. As consumer awareness grows, vague or unsupported claims are increasingly met with public skepticism rather than automatic trust.",
        "E. Independent journalists and environmental groups now regularly investigate claims that once went unquestioned."
      ],
      paragraphs: [
        "For years, a company could label a product \"green\" with little more than a catchy slogan and expect shoppers to take the claim at face value. That is beginning to change.",
        "[1] A vague label alone is no longer enough to convince an informed shopper.",
        "[2] Investigative reports have exposed several well-known brands whose sustainability claims did not match their actual practices. [3]",
        "Governments have also begun to respond. [4] Together, these forces are making it harder for greenwashing to go unnoticed."
      ],
      answers: { 1: "D", 2: "E", 3: "C", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main purpose of this article?", options: ["A. To promote a specific eco-friendly shampoo brand", "B. To explain what greenwashing is and how consumers can avoid being misled by it", "C. To argue that all environmental certifications are fraudulent", "D. To criticize Generation Z consumers for caring about sustainability"], answer: "B", explanation: "主旨題。全文說明漂綠手法的運作方式，並教導消費者如何辨識、避免受騙。" },
        { id: 2, question: "According to the article, what did Starbucks do that is considered an example of greenwashing?", options: ["A. It stopped selling coffee entirely", "B. It introduced a lid to eliminate straws that actually used more plastic by weight", "C. It was found illegally logging in Ukraine", "D. It refused to publish any sustainability data"], answer: "B", explanation: "細節題。文中提到星巴克推出一款設計用來淘汰吸管的杯蓋，但製作該杯蓋所用的塑膠重量反而更多。" },
        { id: 3, question: "Based on the article, what happened to IKEA in 2020?", options: ["A. It won an award for sustainable packaging", "B. It was found illegally logging in Ukraine while holding a greenwashing agency's certificate", "C. It switched entirely to recycled materials", "D. It was banned from selling furniture in Europe"], answer: "B", explanation: "細節題。文中提到 2020 年 IKEA 被發現在烏克蘭非法伐木，當時仍持有漂綠機構的認證。" },
        { id: 4, question: "What can be inferred from the article about companies that are genuinely sustainable?", options: ["A. They rarely bother to get any kind of certification", "B. They tend to be transparent, provide measurable goals and are certified by trusted agencies", "C. They only exist in the technology industry", "D. They never raise their prices for eco-friendly products"], answer: "B", explanation: "推論題。文末建議消費者選購對環境影響保持透明、提供可衡量目標、並經可信第三方認證的企業產品，可推論真正永續的企業通常具備這些特質。" }
      ]
    }
  },

  "Unit 7": {
    title: "Because of Winn-Dixie",
    chineseTitle: "因為溫迪克西",
    passage: `Sometimes the most important friendships start in the most unexpected places — like in a supermarket. In Because of Winn-Dixie, a lonely girl named Opal finds a dog who looks ragged, and he changes her life. She names him after the store where she found him. Winn-Dixie helps her discover friendship and the power of kindness.\n\nHer first new friend is Miss Franny Block, the town librarian, who mistakes Winn-Dixie for a bear at her window. Miss Franny shares tales with Opal, including one about the sweet and sad candies. Miss Franny gives one to Opal to taste. That is when Opal understands how sadness can be sweet.\n\nSoon after, Winn-Dixie leaps into Gloria Dump’s backyard, and Opal follows. Gloria, who is blind, invites Opal to share her stories, so she can “see” Opal with her heart. Opal also encourages Otis, the timid pet shop clerk whose guitar playing is magical, when she labors at the store. Opal also encounters five-year-old Sweetie Pie when Opal is out walking Winn-Dixie. Sweetie Pie quickly decides they should be friends.\n\nIn the end, Because of Winn-Dixie shows how friendship and kindness can bring people together and change lives.`,
    chineseTranslation: `有時候，最重要的友誼會在最意想不到的地方展開——例如一間超市裡。在《因為溫迪克西》中，一位名叫奧帕爾的孤單女孩，發現了一隻看起來邋遢破舊的狗，牠從此改變了她的人生。她以發現牠的那間商店為牠取名。溫迪克西幫助她發掘了友誼與善良的力量。\n\n她的第一位新朋友是法蘭妮·布洛克小姐，鎮上的圖書館員，她曾在窗邊把溫迪克西誤認成一隻熊。法蘭妮小姐與奧帕爾分享了許多故事，其中一則是關於又甜又悲傷的糖果。法蘭妮小姐給了奧帕爾一顆嚐嚐。就在那一刻，奧帕爾明白了悲傷也可以是甜美的。\n\n不久後，溫迪克西跳進了葛洛莉亞·當普的後院，奧帕爾也跟著進去了。葛洛莉亞雖然雙眼失明，卻邀請奧帕爾與她分享自己的故事，讓她能用「心」去「看見」奧帕爾。奧帕爾也在寵物店打工時，鼓勵了害羞的店員歐提斯，他彈起吉他來有種神奇的魅力。奧帕爾還在遛溫迪克西時，遇見了五歲的甜心派。甜心派很快就認定他們應該要成為朋友。\n\n到了最後，《因為溫迪克西》這本書向我們展現了友誼與善良如何能夠將人們凝聚在一起，並改變彼此的人生。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "unexpected", pos: "adj.", meaning: "意想不到的", collocations: "unexpected places 意想不到的地方" },
        { id: 2, word: "ragged", pos: "adj.", meaning: "破舊的、邋遢的", collocations: "look ragged 看起來破舊邋遢" },
        { id: 3, word: "blind", pos: "adj.", meaning: "失明的", collocations: "who is blind 失明的人" },
        { id: 4, word: "timid", pos: "adj.", meaning: "膽怯的、害羞的", collocations: "a timid clerk 害羞的店員" },
        { id: 5, word: "encounters", pos: "v.", meaning: "遇見、偶遇", collocations: "encounter sb 偶遇某人" }
      ],
      grammarNotes: [
        { id: "G1", title: "who 引導形容詞子句 (先行詞為人)", excerpt: "who mistakes Winn-Dixie for a bear at her window", analysis: "who 代替先行詞 Miss Franny Block 作主詞，引導補充說明的非限定關係子句。" },
        { id: "G2", title: "whose 引導形容詞子句 (所有格關代)", excerpt: "whose guitar playing is magical", analysis: "whose 代替先行詞 Otis 表所有格，修飾其後的名詞 guitar playing。" }
      ],
      patternNotes: [
        { id: "P1", title: "That is when + S. + V. (那正是…的時刻)", excerpt: "That is when Opal understands how sadness can be sweet", analysis: "that is when... 用來強調某個特定時刻，指出關鍵轉折發生的瞬間。" },
        { id: "P2", title: "so (that) + S. + can/could + V. (以便、為了)", excerpt: "so she can “see” Opal with her heart", analysis: "so 在此引導目的子句，相當於 so that，表「以便、如此才能」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'Sometimes the most important friendships start in the most ' },
          { type: 'vocab', text: 'unexpected', vid: 1 },
          { type: 'text', text: ' places — like in a supermarket. In Because of Winn-Dixie, a lonely girl named Opal finds a dog who looks ' },
          { type: 'vocab', text: 'ragged', vid: 2 },
          { type: 'text', text: ', and he changes her life. She names him after the store where she found him. Winn-Dixie helps her discover friendship and the power of kindness.' }
        ],
        [
          { type: 'text', text: 'Her first new friend is Miss Franny Block, the town librarian, ' },
          { type: 'grammar', text: 'who mistakes Winn-Dixie for a bear at her window', gid: 'G1' },
          { type: 'text', text: '. Miss Franny shares tales with Opal, including one about the sweet and sad candies. Miss Franny gives one to Opal to taste. ' },
          { type: 'pattern', text: 'That is when Opal understands how sadness can be sweet', pid: 'P1' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'Soon after, Winn-Dixie leaps into Gloria Dump’s backyard, and Opal follows. Gloria, who is ' },
          { type: 'vocab', text: 'blind', vid: 3 },
          { type: 'text', text: ', invites Opal to share her stories, ' },
          { type: 'pattern', text: 'so she can “see” Opal with her heart', pid: 'P2' },
          { type: 'text', text: '. Opal also encourages Otis, the ' },
          { type: 'vocab', text: 'timid', vid: 4 },
          { type: 'text', text: ' pet shop clerk ' },
          { type: 'grammar', text: 'whose guitar playing is magical', gid: 'G2' },
          { type: 'text', text: ', when she labors at the store. Opal also ' },
          { type: 'vocab', text: 'encounters', vid: 5 },
          { type: 'text', text: ' five-year-old Sweetie Pie when Opal is out walking Winn-Dixie. Sweetie Pie quickly decides they should be friends.' }
        ],
        [
          { type: 'text', text: 'In the end, Because of Winn-Dixie shows how friendship and kindness can bring people together and change lives.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Their reunion after twenty years apart was a truly ______ moment neither of them had planned.", options: ["A. unexpected", "B. qualified", "C. affordable", "D. contagious"], answer: "A", explanation: "【選項解析】\n- (A) unexpected (adj.) 意想不到的 (正解)\n- (B) qualified (adj.) 合格的\n- (C) affordable (adj.) 負擔得起的\n- (D) contagious (adj.) 傳染性的" },
      { id: 2, question: "The ______ stray cat had clearly been living on the streets for months.", options: ["A. ragged", "B. sentimental", "C. remarkable", "D. versatile"], answer: "A", explanation: "【選項解析】\n- (A) ragged (adj.) 破舊的、邋遢的 (正解)\n- (B) sentimental (adj.) 多愁善感的\n- (C) remarkable (adj.) 非凡的\n- (D) versatile (adj.) 多才多藝的" },
      { id: 3, question: "Despite being naturally ______, she forced herself to raise her hand and ask a question.", options: ["A. timid", "B. courageous", "C. humble", "D. dedicated"], answer: "A", explanation: "【選項解析】\n- (A) timid (adj.) 膽怯的、害羞的 (正解)\n- (B) courageous (adj.) 勇敢的\n- (C) humble (adj.) 謙遜的\n- (D) dedicated (adj.) 奉獻的" },
      { id: 4, question: "On the hiking trail, they ______ a family of deer grazing peacefully near the river.", options: ["A. encountered", "B. donated", "C. diagnosed", "D. rehearsed"], answer: "A", explanation: "【選項解析】\n- (A) encountered (v.) 遇見、偶遇 (正解)\n- (B) donated (v.) 捐贈\n- (C) diagnosed (v.) 診斷\n- (D) rehearsed (v.) 排練" }
    ],
    cloze: {
      text: "Because of Winn-Dixie tells the story of a girl [1] loneliness slowly fades after she adopts a stray dog. Through Winn-Dixie, Opal meets a series of neighbors [2] she might never have spoken to otherwise, including a kind librarian and a mysterious old woman. Each new friendship [3] Opal something different about compassion, and by the end of the novel, she no longer feels quite so alone. The dog himself never says a word, yet his presence is [4] enough to change the course of an entire summer. Readers often finish the book [5] that sometimes the smallest, most unplanned encounters turn out to matter the most.",
      questions: [
        { id: 1, options: ["A. whose", "B. who", "C. which", "D. whom"], answer: "A", explanation: "先行詞 a girl 為人，whose 表所有格關係，修飾 loneliness（她的孤單）。" },
        { id: 2, options: ["A. whom", "B. who", "C. whose", "D. which"], answer: "A", explanation: "先行詞為人 (neighbors)，且在子句中作受詞，正式用法使用 whom。" },
        { id: 3, options: ["A. teaches", "B. teaching", "C. taught", "D. to teach"], answer: "A", explanation: "teach sb sth 表「教導某人某事」，主詞 friendship 為單數，動詞用現在式 teaches。" },
        { id: 4, options: ["A. powerful", "B. powerfully", "C. power", "D. empower"], answer: "A", explanation: "be + adj. + enough to V. 句型，powerful 為形容詞，修飾主詞補語。" },
        { id: 5, options: ["A. realizing", "B. realized", "C. realize", "D. to realize"], answer: "A", explanation: "分詞構句表伴隨狀態，主動「進而意識到」用 realizing。" }
      ]
    },
    wordBank: {
      words: ["(A) bond", "(B) companionship", "(C) compassion", "(D) comfort", "(E) gentle", "(F) heartwarming", "(G) isolation", "(H) overcome", "(I) adopt", "(J) unlikely"],
      passage: "Few children's novels capture loneliness as honestly as Because of Winn-Dixie. At the story's start, Opal is living through a period of quiet [1], having recently moved to a new town where she knows almost no one.\n\nEverything changes the moment she decides to [2] a scruffy, homeless dog at the local supermarket. What begins as a simple act of kindness toward an animal slowly opens the door to an entire community of [3] friends, from an elderly librarian to a formerly troubled woman living on the edge of town.\n\nEach character Opal meets carries a private sorrow of their own, and much of the novel's emotional power comes from watching these strangers [4] each other rather than offer easy solutions. Opal herself begins to [5] with people she might have overlooked before, discovering that shared pain can be the start of real connection rather than something to hide.\n\nBy the final chapters, the [6] has clearly brought genuine comfort into Opal's life, and readers see how far a little [7] can go in helping someone [8] a difficult season. The dog never performs a single dramatic rescue; he simply stays close, patient and [9], while his owner slowly learns to trust again.\n\nIt is this small-scale, [10] storytelling — no grand adventure, just ordinary neighbors choosing kindness — that has made the novel a beloved classic for young readers.",
      answers: { 1: "G", 2: "I", 3: "J", 4: "D", 5: "A", 6: "B", 7: "C", 8: "H", 9: "E", 10: "F" }
    },
    discourse: {
      options: [
        "A. Rather than offering advice, most of these new friends simply share their own stories of loss and hope.",
        "B. The novel was later adapted into a major motion picture that won several international film awards.",
        "C. What begins as a simple act of kindness toward a stray animal quickly opens up an entire community.",
        "D. Through these small, ordinary moments, the story suggests that healing rarely happens all at once.",
        "E. Each of these neighbors initially seems reluctant to let a ten-year-old girl into their private world."
      ],
      paragraphs: [
        "Because of Winn-Dixie opens with a lonely girl wandering into a supermarket and walking out with an unexpected companion. What follows is less a dramatic adventure than a quiet study of friendship.",
        "[1] A shy librarian, a blind old woman and a timid pet shop worker each become part of Opal's growing circle.",
        "[2] Yet one by one, they open up to the curious, good-hearted girl who keeps returning. [3]",
        "None of these encounters solve Opal's loneliness overnight. [4] By the novel's end, she has not forgotten her sadness, but she no longer has to face it alone."
      ],
      answers: { 1: "C", 2: "E", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this book review mainly about?", options: ["A. A summary of how a girl and her dog help her build new friendships and heal from loneliness", "B. A biography of the author of Because of Winn-Dixie", "C. A comparison of Because of Winn-Dixie to other classic novels", "D. A list of awards the novel has received"], answer: "A", explanation: "主旨題。全文摘要小說內容，說明奧帕爾如何藉由溫迪克西建立新友誼並走出孤單。" },
        { id: 2, question: "How did Opal get her dog's name, according to the article?", options: ["A. She named him after a childhood friend", "B. She named him after the store where she found him", "C. She named him after her favorite book character", "D. The dog's original owner gave him the name"], answer: "B", explanation: "細節題。文中提到奧帕爾以發現這隻狗的那間商店為牠取名。" },
        { id: 3, question: "What does Gloria Dump do that shows her kindness toward Opal, according to the article?", options: ["A. She teaches Opal how to play guitar", "B. She invites Opal to share her stories so she can “see” Opal with her heart", "C. She gives Opal a job at her store", "D. She adopts Opal as her own daughter"], answer: "B", explanation: "細節題。文中提到葛洛莉亞雖然雙眼失明，卻邀請奧帕爾與她分享故事，以「心」去「看見」奧帕爾。" },
        { id: 4, question: "What message does the novel seem to convey, based on the article?", options: ["A. Friendship can only form between people of similar age", "B. Kindness and friendship have the power to bring people together and change lives", "C. Pets should never be given human names", "D. Librarians make the best friends for children"], answer: "B", explanation: "推論題。文末總結指出，友誼與善良能夠將人們凝聚在一起，並改變彼此的人生。" }
      ]
    }
  },

  "Unit 8": {
    title: "The Homework Debate",
    chineseTitle: "作業之辯：多少才算太多？",
    passage: `Day 1\n\nThe need for homework has been debated by students, parents and teachers since the very first assignment was given. The debate continues today. Some say homework boosts learning while it builds study habits, but others say it is busywork that causes stress. Most agree that balance is key.\n\nOne advantage of homework is that it gives students extra time to practice skills that they have learned in class. It also provides students with the opportunity to review important ideas and improve their understanding of a concept. Additionally, it can teach students to be responsible and to regulate their time. When they must finish assignments on their own, they learn how to organize their schedules and meet deadlines. Also, it helps parents stay involved as they see what their children are studying.\n\nHowever, too much homework can cause stress and fatigue, which is especially true for students who already spend hours in class. Young people need time to relax, exercise and interact with family and friends. Excessive homework may reduce time for hobbies, sports and creative activities that are important for development.\n\nDay 2\n\nMother: Do you have any homework tonight, Alex?\n\nAlex: Quite a bit, actually. I have math, English and a short history assignment. Honestly, I think homework can be harmful.\n\nMother: Why do you say that?\n\nAlex: It can cause stress and burnout. After a day at school, I’m exhausted, but I still have hours of homework to do. It makes me dread learning.\n\nMother: I understand that it can be overwhelming, but homework is meant to strengthen what you learned in class.\n\nAlex: Maybe, but when I’m tired, I just rush to finish. Some students even copy answers just to get it done.\n\nMother: That’s a concern. Still, homework can build responsibility and time-management skills.\n\nAlex: But when there’s too much, it defeats the purpose. I’m just not motivated.\n\nMother: So you’re saying the problem isn’t the homework, but the amount of it?\n\nAlex: Exactly. A reasonable amount could help, but feeling overwhelmed leads to stress, less learning and even cheating.\n\nMother: I think balance is really important.\n\nAlex: I hope teachers remember that. I’m going to start my homework now. I want to go running when I’m done.`,
    chineseTranslation: `【第 1 天】\n\n是否該有家庭作業，自從第一份作業被指派以來，就一直是學生、家長與老師爭論不休的話題，這樣的辯論至今仍在持續。有些人認為，家庭作業能在培養讀書習慣的同時提升學習成效；但也有人認為，那只是造成壓力的瑣碎工作。多數人同意，關鍵在於取得平衡。\n\n家庭作業的其中一項優點，是讓學生有額外的時間練習在課堂上學到的技能。它也提供學生複習重要概念、加深理解的機會。此外，它還能培養學生的責任感與時間管理能力。當學生必須獨立完成作業時，他們便學會了如何安排時程、準時完成任務。此外，家庭作業也有助於家長保持參與，讓他們了解孩子正在學習的內容。\n\n然而，過多的家庭作業可能造成壓力與疲勞，對於已經在學校待上數小時的學生來說更是如此。年輕人需要時間放鬆、運動，並與家人朋友互動。過量的家庭作業可能會排擠掉興趣、運動與創意活動的時間，而這些對於成長發展來說同樣重要。\n\n【第 2 天】\n\n媽媽：亞歷克斯，你今天晚上有作業嗎？\n\n亞歷克斯：還不少呢。我有數學、英文，還有一份簡短的歷史作業。老實說，我覺得家庭作業其實對人有害。\n\n媽媽：你為什麼這麼說？\n\n亞歷克斯：它會造成壓力與過勞。在學校待了一整天後，我已經筋疲力盡了，回家卻還有好幾個小時的作業要做。這讓我對學習感到畏懼。\n\n媽媽：我理解這可能會讓人喘不過氣，但家庭作業的用意，其實是要鞏固你在課堂上學到的內容。\n\n亞歷克斯：也許吧，但當我累的時候，我只會想趕快寫完。有些同學甚至會直接抄答案，只為了把作業完成。\n\n媽媽：那確實令人擔心。不過家庭作業仍然能培養責任感與時間管理的能力。\n\n亞歷克斯：但當作業量太多時，這一切就失去了意義。我只是提不起動力而已。\n\n媽媽：所以你想說的是，問題不在於家庭作業本身，而是作業的份量？\n\n亞歷克斯：沒錯。適量的作業或許有幫助，但一旦感到不堪負荷，就會導致壓力、學習成效下降，甚至出現作弊的情況。\n\n媽媽：我覺得「平衡」真的很重要。\n\n亞歷克斯：希望老師們也能記住這一點。我現在要開始寫作業了，寫完以後我想去跑個步。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "fatigue", pos: "n.", meaning: "疲勞", collocations: "cause stress and fatigue 造成壓力與疲勞" },
        { id: 2, word: "Excessive", pos: "adj.", meaning: "過量的", collocations: "excessive homework 過量的作業" },
        { id: 3, word: "burnout", pos: "n.", meaning: "過勞、精疲力竭", collocations: "cause burnout 造成過勞" },
        { id: 4, word: "overwhelming", pos: "adj.", meaning: "令人喘不過氣的、難以負荷的", collocations: "feel overwhelming 讓人感到喘不過氣" },
        { id: 5, word: "motivated", pos: "adj.", meaning: "有動力的", collocations: "not motivated 提不起動力" },
        { id: 6, word: "cheating", pos: "v.", meaning: "作弊", collocations: "lead to cheating 導致作弊" }
      ],
      grammarNotes: [
        { id: "G1", title: "現在完成式被動語態", excerpt: "has been debated by students, parents and teachers", analysis: "has been debated 為現在完成式被動語態，強調此議題從過去持續被討論至今。" },
        { id: "G2", title: "be meant to V. (旨在…、本意是要…)", excerpt: "homework is meant to strengthen what you learned in class", analysis: "be meant to V. 表「本意是要…、旨在…」，說明事物存在的目的。" }
      ],
      patternNotes: [
        { id: "P1", title: "not A, but B (不是A，而是B)", excerpt: "the problem isn’t the homework, but the amount of it", analysis: "not A but B 用於澄清真正的問題所在，強調重點在於後者 B（份量），而非前者 A（作業本身）。" }
      ],
      paragraphs: [
        [ { type: 'text', text: 'Day 1' } ],
        [
          { type: 'text', text: 'The need for homework ' },
          { type: 'grammar', text: 'has been debated by students, parents and teachers', gid: 'G1' },
          { type: 'text', text: ' since the very first assignment was given. The debate continues today. Some say homework boosts learning while it builds study habits, but others say it is busywork that causes stress. Most agree that balance is key.' }
        ],
        [
          { type: 'text', text: 'One advantage of homework is that it gives students extra time to practice skills that they have learned in class. It also provides students with the opportunity to review important ideas and improve their understanding of a concept. Additionally, it can teach students to be responsible and to regulate their time. When they must finish assignments on their own, they learn how to organize their schedules and meet deadlines. Also, it helps parents stay involved as they see what their children are studying.' }
        ],
        [
          { type: 'text', text: 'However, too much homework can cause stress and ' },
          { type: 'vocab', text: 'fatigue', vid: 1 },
          { type: 'text', text: ', which is especially true for students who already spend hours in class. Young people need time to relax, exercise and interact with family and friends. ' },
          { type: 'vocab', text: 'Excessive', vid: 2 },
          { type: 'text', text: ' homework may reduce time for hobbies, sports and creative activities that are important for development.' }
        ],
        [ { type: 'text', text: 'Day 2' } ],
        [ { type: 'text', text: 'Mother: Do you have any homework tonight, Alex?' } ],
        [ { type: 'text', text: 'Alex: Quite a bit, actually. I have math, English and a short history assignment. Honestly, I think homework can be harmful.' } ],
        [ { type: 'text', text: 'Mother: Why do you say that?' } ],
        [
          { type: 'text', text: 'Alex: It can cause stress and ' },
          { type: 'vocab', text: 'burnout', vid: 3 },
          { type: 'text', text: '. After a day at school, I’m exhausted, but I still have hours of homework to do. It makes me dread learning.' }
        ],
        [
          { type: 'text', text: 'Mother: I understand that it can be ' },
          { type: 'vocab', text: 'overwhelming', vid: 4 },
          { type: 'text', text: ', but homework is meant to strengthen what you learned in class.' }
        ],
        [ { type: 'text', text: 'Alex: Maybe, but when I’m tired, I just rush to finish. Some students even copy answers just to get it done.' } ],
        [ { type: 'text', text: 'Mother: That’s a concern. Still, homework can build responsibility and time-management skills.' } ],
        [
          { type: 'text', text: 'Alex: But when there’s too much, it defeats the purpose. I’m just not ' },
          { type: 'vocab', text: 'motivated', vid: 5 },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'Mother: So you’re saying ' },
          { type: 'pattern', text: 'the problem isn’t the homework, but the amount of it', pid: 'P1' },
          { type: 'text', text: '?' }
        ],
        [
          { type: 'text', text: 'Alex: Exactly. A reasonable amount could help, but feeling overwhelmed leads to stress, less learning and even ' },
          { type: 'vocab', text: 'cheating', vid: 6 },
          { type: 'text', text: '.' }
        ],
        [ { type: 'text', text: 'Mother: I think balance is really important.' } ],
        [ { type: 'text', text: 'Alex: I hope teachers remember that. I’m going to start my homework now. I want to go running when I’m done.' } ]
      ]
    },
    vocab: [
      { id: 1, question: "Working three jobs at once left her with constant ______ and little time to rest.", options: ["A. fatigue", "B. discipline", "C. compassion", "D. curiosity"], answer: "A", explanation: "【選項解析】\n- (A) fatigue (n.) 疲勞 (正解)\n- (B) discipline (n.) 紀律\n- (C) compassion (n.) 同情心\n- (D) curiosity (n.) 好奇心" },
      { id: 2, question: "The sheer number of emails waiting in his inbox felt completely ______.", options: ["A. overwhelming", "B. remarkable", "C. versatile", "D. affordable"], answer: "A", explanation: "【選項解析】\n- (A) overwhelming (adj.) 令人喘不過氣的、難以負荷的 (正解)\n- (B) remarkable (adj.) 非凡的\n- (C) versatile (adj.) 多才多藝的\n- (D) affordable (adj.) 負擔得起的" },
      { id: 3, question: "After watching the documentary, she felt truly ______ to start volunteering at the shelter.", options: ["A. motivated", "B. qualified", "C. sentimental", "D. courageous"], answer: "A", explanation: "【選項解析】\n- (A) motivated (adj.) 有動力的 (正解)\n- (B) qualified (adj.) 合格的\n- (C) sentimental (adj.) 多愁善感的\n- (D) courageous (adj.) 勇敢的" },
      { id: 4, question: "The student was caught ______ during the final exam and had to retake the entire course.", options: ["A. cheating", "B. donating", "C. rehearsing", "D. auditioning"], answer: "A", explanation: "【選項解析】\n- (A) cheating (v.) 作弊 (正解)\n- (B) donating (v.) 捐贈\n- (C) rehearsing (v.) 排練\n- (D) auditioning (v.) 試鏡" }
    ],
    cloze: {
      text: "The homework debate rarely has a simple answer, since both sides can point to real benefits and real drawbacks. Supporters argue that regular practice helps students [1] what they learned in class, while critics worry that long nights of assignments leave students too exhausted [2] enjoy anything else. Teachers who assign too much work risk pushing some students toward shortcuts, such as copying answers [3] of actually learning the material. Many education experts now argue that the real issue is not homework itself but [4] much of it students are given. A more balanced approach, [5] mixes shorter assignments with more free time, may be the most realistic compromise for everyone involved.",
      questions: [
        { id: 1, options: ["A. retain", "B. retaining", "C. retained", "D. to retain"], answer: "A", explanation: "help + O. + V原形 (省略to)，retain 表「保留、記住」。" },
        { id: 2, options: ["A. to", "B. for", "C. that", "D. of"], answer: "A", explanation: "too...to... 句型，too exhausted to V. 表「太過疲憊以致於無法…」。" },
        { id: 3, options: ["A. instead", "B. despite", "C. unless", "D. besides"], answer: "A", explanation: "instead of + V-ing 表「而非」，instead 與後面的 of 搭配為固定用法。" },
        { id: 4, options: ["A. how", "B. what", "C. which", "D. that"], answer: "A", explanation: "how much + N. 作受詞，how 引導名詞子句作 but 的受詞。" },
        { id: 5, options: ["A. which", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞為前面整個概念 (a more balanced approach)，which 引導非限定關係子句補充說明。" }
      ]
    },
    wordBank: {
      words: ["(A) assign", "(B) burden", "(C) counterproductive", "(D) deadline", "(E) exhausting", "(F) manageable", "(G) pressure", "(H) prioritize", "(I) procrastinate", "(J) workload"],
      passage: "Teachers face a difficult balancing act every time they [1] homework. Give too little, and students may not practice enough to remember what they learned. Give too much, and the extra work can begin to [2] students rather than help them.\n\nMany students, when faced with a heavy [3], respond by putting off their work until the last possible moment. Ironically, students who [4] the most often end up rushing through assignments the night before a [5], turning a learning opportunity into a stressful scramble.\n\nResearchers who study student well-being warn that constant academic [6] can lead to anxiety, poor sleep and a general dislike of school. Beyond a certain point, extra assignments become [7] rather than helpful, since a tired, stressed brain absorbs far less information than a rested one.\n\nTo avoid overloading students, some schools now encourage teachers to [8] the most essential assignments and skip busywork that adds little educational value. When the amount of work is kept [9], students are more likely to complete it carefully rather than just to finish it.\n\nUltimately, most experts agree that a heavy, [10] nightly routine rarely improves learning; a thoughtful, limited amount usually works far better.",
      answers: { 1: "A", 2: "B", 3: "J", 4: "I", 5: "D", 6: "G", 7: "C", 8: "H", 9: "F", 10: "E" }
    },
    discourse: {
      options: [
        "A. Some teachers have started assigning shorter, more focused tasks instead of lengthy nightly packets.",
        "B. Every school district in the country now limits homework to exactly thirty minutes per subject.",
        "C. Parents, too, are caught in the middle, wanting to support their children without adding unnecessary pressure.",
        "D. As a result, many students report feeling less anxious and more willing to actually complete their assignments.",
        "E. Even well-intentioned assignments can backfire when students are already stretched thin by extracurricular activities."
      ],
      paragraphs: [
        "The debate over homework has simmered in households for generations, with no side ever fully winning the argument. Both students and parents often find themselves caught between two reasonable positions.",
        "[1] A single late-night assignment can easily turn an already busy evening into an overwhelming one.",
        "[2] They want their children to succeed academically, yet they also see the toll that late nights and constant deadlines can take. [3]",
        "[4] While the debate is unlikely to end anytime soon, small adjustments in how homework is assigned appear to make a real difference."
      ],
      answers: { 1: "E", 2: "C", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the central debate discussed in this article?", options: ["A. Whether schools should eliminate exams entirely", "B. Whether homework helps or harms students, and how to find balance", "C. Whether students should be allowed to choose their own teachers", "D. Whether parents should complete homework for their children"], answer: "B", explanation: "主旨題。全文探討家庭作業究竟是助益還是傷害，並強調取得平衡的重要性。" },
        { id: 2, question: "According to the article, what is one advantage of homework mentioned on Day 1?", options: ["A. It guarantees higher test scores for all students", "B. It gives students extra time to practice skills learned in class", "C. It eliminates the need for classroom instruction", "D. It allows students to skip attending school"], answer: "B", explanation: "細節題。文中提到家庭作業的優點之一是讓學生有額外時間練習在課堂上學到的技能。" },
        { id: 3, question: "In the Day 2 dialogue, what does Alex say can happen when there is too much homework?", options: ["A. Students tend to work more carefully and slowly", "B. Students may rush, copy answers or even cheat", "C. Teachers assign even more homework as a result", "D. Parents become less involved in their children's education"], answer: "B", explanation: "細節題。亞歷克斯提到當作業量太多時，會導致壓力、學習成效下降，甚至出現抄答案、作弊的情況。" },
        { id: 4, question: "Based on the dialogue, what conclusion do Alex and his mother seem to reach?", options: ["A. Homework should be banned completely", "B. The real problem is not homework itself, but having too much of it", "C. Only advanced students should be given homework", "D. Parents should do their children's homework for them"], answer: "B", explanation: "推論題。對話中媽媽問「問題不是作業本身，而是作業的份量」，亞歷克斯表示同意，顯示兩人最終認為關鍵在於適量而非有無作業。" }
      ]
    }
  },

  "Unit 9": {
    title: "The Echo Chamber Effect",
    chineseTitle: "同溫層效應",
    passage: `Day 1\n\nThe term “echo chamber” is used to describe a situation in which people are repeatedly exposed to the same ideas, opinions or viewpoints. On social media, these environments can gradually develop as algorithms learn what users prefer to see. Then, instead of offering a wide range of perspectives, platforms may consistently display content based on the user’s past behavior. What feels like a neutral feed is often a carefully filtered stream shaped by one’s previous clicks, views and pauses.\n\nAlgorithms have several motives for doing this. Every minute, millions of posts, videos and comments are uploaded across different platforms. This enormous amount of information must be curated to decide which items appear first and which remain hidden. Perhaps more importantly, these systems are built to keep users engaged for as long as possible. By showing users things that make them react, algorithms make social media accounts far more interesting than they might otherwise be.\n\nSeldom do users notice how gradually this narrowing occurs. However, when similar opinions appear again and again, they may begin to feel more commonplace or more convincing than they truly are. Psychologists sometimes call this the “majority illusion.” This continuous repetition creates a false sense of widespread agreement.\n\nDay 2\n\nThe false sense of reality found in echo chambers can have a wide range of effects. One of the most significant is a distorted understanding of public opinion. When people repeatedly encounter the same viewpoints, those ideas can begin to seem as if they prevail more than they actually do. This can lead to conflict when users assume that most people share their beliefs, only to discover that society as a whole is far more diverse.\n\nEcho chambers can also influence how people judge information itself. Messages that appear frequently within a community often seem more reliable simply because they are familiar. When a claim is stated many times, it can feel more legitimate, even if the evidence behind it is weak or incomplete. This can lead to poorly informed decisions of all kinds.\n\nBy no means does understanding the echo chamber effect imply you should avoid social media entirely. Instead, it encourages more deliberate habits. Following a variety of sources along with seeking out different opinions and questioning similar messages can all broaden a user’s experience. Actively interacting with unfamiliar topics can gradually retrain recommendation systems over time. With awareness and intention, users can enjoy social media while reducing the risk of being trapped inside a narrow stream of ideas.`,
    chineseTranslation: `【第 1 天】\n\n「同溫層」一詞用來描述人們反覆接觸相同想法、意見或觀點的情境。在社群媒體上，隨著演算法逐漸學習使用者偏好看到的內容，這類環境也會慢慢形成。於是，平台不再提供多元廣泛的觀點，反而持續根據使用者過去的行為展示內容。感覺起來中立的動態消息，其實往往是根據個人過去的點擊、瀏覽與停留時間所篩選出來的內容流。\n\n演算法這麼做有幾個動機。每一分鐘，各平台上都會上傳數百萬則貼文、影片與留言。這龐大的資訊量必須經過篩選，以決定哪些內容優先顯示、哪些則被隱藏。或許更重要的是，這些系統的設計目的，就是要盡可能延長使用者的停留與參與時間。透過展示能引發使用者反應的內容，演算法讓社群媒體帳號變得比原本更加吸引人。\n\n使用者很少察覺到這種範圍逐漸縮小的過程。然而，當相似的意見一再出現時，使用者可能會開始覺得這些觀點比實際上更加常見，或更具說服力。心理學家有時將此現象稱為「多數錯覺」。這種持續不斷的重複，會製造出一種虛假的、看似廣泛一致的共識感。\n\n【第 2 天】\n\n同溫層所帶來的這種虛假現實感，可能產生各式各樣的影響。其中最顯著的一項，是對公眾意見產生扭曲的理解。當人們一再接觸到相同的觀點時，這些想法可能會開始看似比實際上更為普遍。這可能導致衝突，因為使用者會誤以為大多數人都認同自己的看法，結果卻發現整體社會其實遠比想像中更加多元。\n\n同溫層也可能影響人們對資訊本身的判斷。在某個社群中頻繁出現的訊息，往往僅僅因為熟悉，就顯得更加可信。當某個說法被重複陳述多次時，即使背後的證據薄弱或不完整，它也可能感覺起來更加合理可信。這可能導致各式各樣判斷不周的決策。\n\n了解同溫層效應，絕不代表你應該完全避開社群媒體。相反地，它鼓勵的是更加深思熟慮的使用習慣。追蹤多元的資訊來源、主動尋求不同的意見，並對相似的訊息提出質疑，都能拓展使用者的視野。積極與不熟悉的主題互動，也能逐漸重新訓練推薦系統。只要保有覺察與意圖，使用者依然能享受社群媒體，同時降低被困在狹隘思維之流中的風險。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "exposed", pos: "v.", meaning: "使接觸、暴露於", collocations: "be exposed to... 接觸到…" },
        { id: 2, word: "perspectives", pos: "n.", meaning: "觀點、視角", collocations: "a wide range of perspectives 廣泛的觀點" },
        { id: 3, word: "curated", pos: "v.", meaning: "被篩選、被策劃", collocations: "must be curated 必須經過篩選" },
        { id: 4, word: "engaged", pos: "v.", meaning: "使投入、使參與", collocations: "keep users engaged 讓使用者保持投入" },
        { id: 5, word: "commonplace", pos: "adj.", meaning: "常見的、普遍的", collocations: "feel commonplace 感覺很常見" },
        { id: 6, word: "distorted", pos: "adj.", meaning: "扭曲的", collocations: "a distorted understanding 扭曲的理解" },
        { id: 7, word: "legitimate", pos: "adj.", meaning: "合理的、可信的", collocations: "feel more legitimate 感覺更加合理可信" },
        { id: 8, word: "deliberate", pos: "adj.", meaning: "深思熟慮的、刻意的", collocations: "deliberate habits 深思熟慮的習慣" }
      ],
      grammarNotes: [
        { id: "G1", title: "否定副詞前置倒裝句 (Seldom)", excerpt: "Seldom do users notice how gradually this narrowing occurs", analysis: "Seldom 為否定意味的副詞，置於句首時主詞與助動詞須倒裝，意為「使用者很少察覺」。" },
        { id: "G2", title: "否定副詞片語前置倒裝句 (By no means)", excerpt: "By no means does understanding the echo chamber effect imply you should avoid social media entirely", analysis: "By no means 為否定意味的副詞片語，置於句首時主詞與助動詞須倒裝，意為「絕非…」。" }
      ],
      patternNotes: [
        { id: "P1", title: "seem as if + S. + V. (看似…；似乎…)", excerpt: "seem as if they prevail more than they actually do", analysis: "as if 引導子句表「看似、彷彿」，強調這些想法看似比實際上更為普遍。" },
        { id: "P2", title: "only to V. (結果卻…；沒想到卻…)", excerpt: "only to discover that society as a whole is far more diverse", analysis: "only to V. 置於句尾，表出乎意料的結果，意為「沒想到卻發現…」。" }
      ],
      paragraphs: [
        [ { type: 'text', text: 'Day 1' } ],
        [
          { type: 'text', text: 'The term “echo chamber” is used to describe a situation in which people are repeatedly ' },
          { type: 'vocab', text: 'exposed', vid: 1 },
          { type: 'text', text: ' to the same ideas, opinions or viewpoints. On social media, these environments can gradually develop as algorithms learn what users prefer to see. Then, instead of offering a wide range of ' },
          { type: 'vocab', text: 'perspectives', vid: 2 },
          { type: 'text', text: ', platforms may consistently display content based on the user’s past behavior. What feels like a neutral feed is often a carefully filtered stream shaped by one’s previous clicks, views and pauses.' }
        ],
        [
          { type: 'text', text: 'Algorithms have several motives for doing this. Every minute, millions of posts, videos and comments are uploaded across different platforms. This enormous amount of information must be ' },
          { type: 'vocab', text: 'curated', vid: 3 },
          { type: 'text', text: ' to decide which items appear first and which remain hidden. Perhaps more importantly, these systems are built to keep users ' },
          { type: 'vocab', text: 'engaged', vid: 4 },
          { type: 'text', text: ' for as long as possible. By showing users things that make them react, algorithms make social media accounts far more interesting than they might otherwise be.' }
        ],
        [
          { type: 'grammar', text: 'Seldom do users notice how gradually this narrowing occurs', gid: 'G1' },
          { type: 'text', text: '. However, when similar opinions appear again and again, they may begin to feel more ' },
          { type: 'vocab', text: 'commonplace', vid: 5 },
          { type: 'text', text: ' or more convincing than they truly are. Psychologists sometimes call this the “majority illusion.” This continuous repetition creates a false sense of widespread agreement.' }
        ],
        [ { type: 'text', text: 'Day 2' } ],
        [
          { type: 'text', text: 'The false sense of reality found in echo chambers can have a wide range of effects. One of the most significant is a ' },
          { type: 'vocab', text: 'distorted', vid: 6 },
          { type: 'text', text: ' understanding of public opinion. When people repeatedly encounter the same viewpoints, those ideas can begin to ' },
          { type: 'pattern', text: 'seem as if they prevail more than they actually do', pid: 'P1' },
          { type: 'text', text: '. This can lead to conflict when users assume that most people share their beliefs, ' },
          { type: 'pattern', text: 'only to discover that society as a whole is far more diverse', pid: 'P2' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'Echo chambers can also influence how people judge information itself. Messages that appear frequently within a community often seem more reliable simply because they are familiar. When a claim is stated many times, it can feel more ' },
          { type: 'vocab', text: 'legitimate', vid: 7 },
          { type: 'text', text: ', even if the evidence behind it is weak or incomplete. This can lead to poorly informed decisions of all kinds.' }
        ],
        [
          { type: 'grammar', text: 'By no means does understanding the echo chamber effect imply you should avoid social media entirely', gid: 'G2' },
          { type: 'text', text: '. Instead, it encourages more ' },
          { type: 'vocab', text: 'deliberate', vid: 8 },
          { type: 'text', text: ' habits. Following a variety of sources along with seeking out different opinions and questioning similar messages can all broaden a user’s experience. Actively interacting with unfamiliar topics can gradually retrain recommendation systems over time. With awareness and intention, users can enjoy social media while reducing the risk of being trapped inside a narrow stream of ideas.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The debate panel invited speakers with very different ______ to ensure a balanced discussion.", options: ["A. perspectives", "B. shortages", "C. barriers", "D. footprints"], answer: "A", explanation: "【選項解析】\n- (A) perspectives (n.) 觀點、視角 (正解)\n- (B) shortages (n.) 短缺\n- (C) barriers (n.) 障礙\n- (D) footprints (n.) 足跡、碳足跡" },
      { id: 2, question: "The museum's latest exhibit was carefully ______ to tell a single coherent story.", options: ["A. curated", "B. donated", "C. rehearsed", "D. diagnosed"], answer: "A", explanation: "【選項解析】\n- (A) curated (v.) 策劃、精選 (正解)\n- (B) donated (v.) 捐贈\n- (C) rehearsed (v.) 排練\n- (D) diagnosed (v.) 診斷" },
      { id: 3, question: "Owning a smartphone has become so ______ that few people remember life without one.", options: ["A. commonplace", "B. contagious", "C. deceptive", "D. vulnerable"], answer: "A", explanation: "【選項解析】\n- (A) commonplace (adj.) 常見的、普遍的 (正解)\n- (B) contagious (adj.) 傳染性的\n- (C) deceptive (adj.) 欺騙性的\n- (D) vulnerable (adj.) 脆弱的" },
      { id: 4, question: "Without official documentation, it was hard to prove the claim was ______.", options: ["A. legitimate", "B. humble", "C. versatile", "D. ragged"], answer: "A", explanation: "【選項解析】\n- (A) legitimate (adj.) 合理的、合法的 (正解)\n- (B) humble (adj.) 謙遜的\n- (C) versatile (adj.) 多才多藝的\n- (D) ragged (adj.) 破舊的" }
    ],
    cloze: {
      text: "Social media platforms rely on algorithms [1] constantly analyze what users click, watch and share. Over time, these systems learn to predict [2] kind of content will keep a particular user scrolling, and they adjust the feed accordingly. The danger is that this process happens so gradually most users are not even aware [3] it. As a result, people can end up seeing only opinions that match their own, [4] believing that their view is shared by nearly everyone. Breaking out of this pattern usually requires a conscious effort, such as [5] out sources that challenge one's existing beliefs.",
      questions: [
        { id: 1, options: ["A. that", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 algorithms 為物，that 在子句中作主詞，引導限定關係子句。" },
        { id: 2, options: ["A. what", "B. which", "C. that", "D. whose"], answer: "A", explanation: "what kind of + N. 表「哪一種…」，作 predict 的受詞。" },
        { id: 3, options: ["A. of", "B. about", "C. with", "D. for"], answer: "A", explanation: "aware of + N. 為固定搭配，表「意識到…」。" },
        { id: 4, options: ["A. falsely", "B. false", "C. falsity", "D. falsify"], answer: "A", explanation: "falsely 為副詞，修飾動詞 believing，表「錯誤地相信」。" },
        { id: 5, options: ["A. seeking", "B. seek", "C. sought", "D. to seek"], answer: "A", explanation: "介系詞 as 後接動名詞，such as seeking out... 表「例如主動尋找…」。" }
      ]
    },
    wordBank: {
      words: ["(A) algorithm", "(B) bias", "(C) diversify", "(D) echo", "(E) homogeneous", "(F) manipulate", "(G) polarized", "(H) reinforce", "(I) subtle", "(J) validate"],
      passage: "Every time a user scrolls, clicks or lingers on a post, an invisible [1] quietly records the interaction and uses it to shape what appears next. Over months and years, these small decisions add up, gradually narrowing the range of ideas a person regularly encounters.\n\nResearchers describe this process as a kind of feedback loop. Content that matches a user's existing [2] earns more attention, which teaches the system to show even more of the same, further [3] that original viewpoint rather than challenging it. Because the change is so [4], most users never notice the feed slowly evolving around them.\n\nOver time, entire online communities can begin to feel strangely [5], as though everyone within them holds the same opinions and reacts to news in exactly the same way. This uniformity can be comforting, but it also means fewer chances to encounter a genuinely different argument.\n\nSome critics worry that bad actors deliberately try to [6] these systems, flooding communities with content designed to [7] existing anger or suspicion rather than encourage calm discussion. The result, in extreme cases, is a deeply [8] online space where compromise feels nearly impossible.\n\nExperts suggest a few practical habits to counter this drift: deliberately [9] one's sources of news, following accounts that offer opposing views and resisting the urge to mistake a loud [10] for the truth itself.",
      answers: { 1: "A", 2: "B", 3: "H", 4: "I", 5: "E", 6: "F", 7: "J", 8: "G", 9: "C", 10: "D" }
    },
    discourse: {
      options: [
        "A. Breaking free requires a conscious decision to seek out sources that challenge, rather than confirm, existing beliefs.",
        "B. Every social media company has publicly admitted to designing algorithms specifically to spread misinformation.",
        "C. Over time, the feed narrows further, reinforcing the same handful of viewpoints again and again.",
        "D. At first, the difference between a personalized feed and a neutral one is difficult to notice.",
        "E. Users who follow only like-minded accounts are especially likely to end up inside a narrow information bubble."
      ],
      paragraphs: [
        "A social media feed rarely feels curated, even though it almost always is. Every click, pause and share quietly trains the algorithm to show more of what a user already enjoys.",
        "[1] The content still seems varied, and the platform still feels open to the wider world.",
        "[2] The algorithm rewards whatever keeps a person scrolling the longest, which is often content that confirms rather than challenges their existing views. [3]",
        "Escaping this pattern is not automatic. [4] Left unchecked, a feed will keep narrowing on its own."
      ],
      answers: { 1: "D", 2: "C", 3: "E", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Social media algorithms are entirely harmless and should not concern users", "B. Echo chambers form through algorithms and can distort users' understanding of public opinion", "C. All social media platforms should be banned for young people", "D. Psychologists have proven that echo chambers do not actually exist"], answer: "B", explanation: "主旨題。全文說明同溫層如何透過演算法形成，並扭曲使用者對公眾意見的理解。" },
        { id: 2, question: "According to the article, why are algorithms designed to keep users engaged?", options: ["A. To protect users from misinformation", "B. To make social media accounts more interesting and keep users on the platform longer", "C. To randomly show users unrelated content", "D. To reduce the amount of content uploaded each day"], answer: "B", explanation: "細節題。文中提到這些系統的設計目的是盡可能延長使用者的停留時間，並讓帳號變得更吸引人。" },
        { id: 3, question: "What is the “majority illusion” mentioned in the article?", options: ["A. A false sense that an opinion is more common than it actually is", "B. A technical error in how algorithms are coded", "C. A term for when a platform shuts down unexpectedly", "D. A marketing strategy used by social media companies"], answer: "A", explanation: "細節題。文中提到心理學家將這種因重複曝光而誤以為某意見比實際更普遍的現象稱為「多數錯覺」。" },
        { id: 4, question: "What does the article suggest users can do to reduce the effects of echo chambers?", options: ["A. Delete all social media accounts immediately", "B. Follow a variety of sources and actively seek out different opinions", "C. Only trust information shared by close friends", "D. Avoid discussing opinions with anyone online"], answer: "B", explanation: "推論題。文末建議使用者追蹤多元資訊來源、主動尋求不同意見，以降低陷入狹隘思維的風險。" }
      ]
    }
  },

  "Unit 10": {
    title: "Flag Football",
    chineseTitle: "旗式美式足球",
    passage: `What started as a form of recreation for soldiers during World War II has grown into a global sport. It is estimated that over 20 million people play flag football in more than 100 countries.\n\nIn this noncontact form of American football, two teams of five players each are on the field. Offensive players wear a belt with two attached cloth flags. Starting at their end zone, they advance the ball down the field by running with it or passing it. The goal is to get over the opposing team’s goal line and into their end zone. When they succeed, their team scores six points! They can try for an extra point by running or passing the ball again, but from the five-yard line. Defensive players try to stop them by pulling one or both flags from a runner’s belt. When a flag is pulled, the play stops.\n\nIt is exciting for fans to follow the sport and get to know the players. Men’s and women’s teams will compete over the next two years for a spot at the 2028 Olympics.`,
    chineseTranslation: `旗式美式足球最初是二戰期間士兵們的一種消遣活動，如今已發展成一項全球性的運動。據估計，全球超過 100 個國家、共有超過 2000 萬人參與這項運動。\n\n在這項非身體碰撞形式的美式足球運動中，場上會有兩隊、每隊五名球員。進攻方球員會配戴繫有兩條布旗的腰帶。球隊從自己的底線區出發，透過帶球奔跑或傳球的方式推進球陣。目標是要越過對方的球門線、進入對方的底線區。一旦成功，該隊就能得到六分！他們還可以嘗試從五碼線再次帶球或傳球，爭取多得一分。防守方球員則試圖阻止進攻方，方法是從帶球者的腰帶上拔下一條或兩條布旗。一旦布旗被拔下，該次進攻便宣告結束。\n\n對球迷來說，追蹤這項運動並認識選手是件令人興奮的事。男子與女子代表隊接下來兩年將展開競爭，爭奪 2028 年奧運的參賽資格。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "noncontact", pos: "adj.", meaning: "非身體碰撞的", collocations: "a noncontact sport 非身體碰撞運動" },
        { id: 2, word: "Offensive", pos: "adj.", meaning: "進攻的", collocations: "offensive players 進攻方球員" },
        { id: 3, word: "opposing", pos: "adj.", meaning: "對方的、敵對的", collocations: "the opposing team 對方隊伍" },
        { id: 4, word: "Defensive", pos: "adj.", meaning: "防守的", collocations: "defensive players 防守方球員" },
        { id: 5, word: "compete", pos: "v.", meaning: "競爭、比賽", collocations: "compete for a spot 競爭一個名額" }
      ],
      grammarNotes: [
        { id: "G1", title: "what 引導名詞子句作主詞", excerpt: "What started as a form of recreation for soldiers during World War II", analysis: "what 在此引導名詞子句，作整句的主詞，相當於 the thing that。" }
      ],
      patternNotes: [
        { id: "P1", title: "try for + N. (爭取、試圖獲得)", excerpt: "try for an extra point", analysis: "try for + N. 表「試圖獲得、爭取」某項事物，後接欲爭取的目標。" }
      ],
      paragraphs: [
        [
          { type: 'grammar', text: 'What started as a form of recreation for soldiers during World War II', gid: 'G1' },
          { type: 'text', text: ' has grown into a global sport. It is estimated that over 20 million people play flag football in more than 100 countries.' }
        ],
        [
          { type: 'text', text: 'In this ' },
          { type: 'vocab', text: 'noncontact', vid: 1 },
          { type: 'text', text: ' form of American football, two teams of five players each are on the field. ' },
          { type: 'vocab', text: 'Offensive', vid: 2 },
          { type: 'text', text: ' players wear a belt with two attached cloth flags. Starting at their end zone, they advance the ball down the field by running with it or passing it. The goal is to get over the ' },
          { type: 'vocab', text: 'opposing', vid: 3 },
          { type: 'text', text: ' team’s goal line and into their end zone. When they succeed, their team scores six points! They can ' },
          { type: 'pattern', text: 'try for an extra point', pid: 'P1' },
          { type: 'text', text: ' by running or passing the ball again, but from the five-yard line. ' },
          { type: 'vocab', text: 'Defensive', vid: 4 },
          { type: 'text', text: ' players try to stop them by pulling one or both flags from a runner’s belt. When a flag is pulled, the play stops.' }
        ],
        [
          { type: 'text', text: 'It is exciting for fans to follow the sport and get to know the players. Men’s and women’s teams will ' },
          { type: 'vocab', text: 'compete', vid: 5 },
          { type: 'text', text: ' over the next two years for a spot at the 2028 Olympics.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Chess and table tennis are examples of ______ sports where players never touch each other.", options: ["A. noncontact", "B. contagious", "C. sustainable", "D. versatile"], answer: "A", explanation: "【選項解析】\n- (A) noncontact (adj.) 非身體碰撞的 (正解)\n- (B) contagious (adj.) 傳染性的\n- (C) sustainable (adj.) 永續的\n- (D) versatile (adj.) 多才多藝的" },
      { id: 2, question: "The coach designed a new ______ strategy to help the team score more points.", options: ["A. offensive", "B. blind", "C. timid", "D. ragged"], answer: "A", explanation: "【選項解析】\n- (A) offensive (adj.) 進攻的 (正解)\n- (B) blind (adj.) 失明的\n- (C) timid (adj.) 膽怯的\n- (D) ragged (adj.) 破舊的" },
      { id: 3, question: "A strong ______ line prevented the opposing team from scoring all game.", options: ["A. defensive", "B. remarkable", "C. courageous", "D. humble"], answer: "A", explanation: "【選項解析】\n- (A) defensive (adj.) 防守的 (正解)\n- (B) remarkable (adj.) 非凡的\n- (C) courageous (adj.) 勇敢的\n- (D) humble (adj.) 謙遜的" },
      { id: 4, question: "Athletes from over fifty countries will ______ in the upcoming championship.", options: ["A. compete", "B. donate", "C. diagnose", "D. rehearse"], answer: "A", explanation: "【選項解析】\n- (A) compete (v.) 競爭、比賽 (正解)\n- (B) donate (v.) 捐贈\n- (C) diagnose (v.) 診斷\n- (D) rehearse (v.) 排練" }
    ],
    cloze: {
      text: "Flag football has grown rapidly in popularity, largely [1] its lower risk of injury compared to traditional tackle football. Because players are not allowed [2] tackle one another, the sport appeals to a wider range of ages and body types. Leagues have sprung up in schools and communities [3] never had access to full-contact football programs before. With its inclusion in the 2028 Olympics now confirmed, national teams are [4] harder than ever to secure a spot on the roster. Fans who once considered flag football a casual backyard game are beginning to see it [5] a legitimate competitive sport in its own right.",
      questions: [
        { id: 1, options: ["A. due to", "B. despite", "C. unless", "D. among"], answer: "A", explanation: "due to + N. 表「由於、因為」，修飾原因。" },
        { id: 2, options: ["A. to", "B. for", "C. of", "D. with"], answer: "A", explanation: "be allowed to V. 表「被允許做…」。" },
        { id: 3, options: ["A. that", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 communities 為事物，that 在子句中作主詞，引導限定關係子句。" },
        { id: 4, options: ["A. training", "B. trained", "C. train", "D. to train"], answer: "A", explanation: "are training 為現在進行式，表「正在訓練」。" },
        { id: 5, options: ["A. as", "B. for", "C. like", "D. to"], answer: "A", explanation: "see A as B 表「將A視為B」，as 為固定搭配介系詞。" }
      ]
    },
    wordBank: {
      words: ["(A) agile", "(B) amateur", "(C) competitive", "(D) intercept", "(E) opponent", "(F) qualify", "(G) recruit", "(H) roster", "(I) sprint", "(J) stamina"],
      passage: "Local flag football leagues are experiencing a surge of interest, and coaches across the country are working hard to [1] new players of all skill levels. Unlike traditional tackle football, the sport does not require enormous size or strength, so a quick, [2] athlete can often outperform a much larger one simply by changing direction faster.\n\nA single game can move at a remarkable pace. Players must constantly watch their [3], anticipating when to [4] a pass or when to [5] toward the end zone before a defender can react. Matches often come down to split-second decisions rather than sheer physical power.\n\nBecause the sport is relatively new to international competition, most national teams still rely heavily on [6] athletes who play for the love of the game rather than a professional paycheck. Still, as flag football has become more [7], countries are investing serious resources into training camps and coaching staff.\n\nBuilding a strong [8] takes more than raw talent. Coaches look for players with sharp reflexes, reliable hands and enough [9] to sustain repeated short sprints throughout an entire match. Teams hoping to [10] for the 2028 Olympics know that the competition for a limited number of spots will only intensify in the coming years.",
      answers: { 1: "G", 2: "A", 3: "E", 4: "D", 5: "I", 6: "B", 7: "C", 8: "H", 9: "J", 10: "F" }
    },
    discourse: {
      options: [
        "A. Unlike tackle football, players are stopped simply by having a flag pulled from their belt.",
        "B. Every flag football player is required to have at least five years of tackle football experience first.",
        "C. This lower barrier to injury has made the sport popular among people who might otherwise avoid football entirely.",
        "D. With official Olympic status now secured, national federations are investing heavily in youth programs.",
        "E. As a result, the sport has spread quickly among schools, workplaces and casual weekend leagues."
      ],
      paragraphs: [
        "Flag football began as a simple way for soldiers to stay active without the injury risks of full-contact football. Decades later, that same appeal has helped the sport spread far beyond military bases.",
        "[1] Instead, the game ends the moment a defender removes one of the flags from a ball carrier's belt.",
        "[2] [3] Local leagues now welcome players who never considered trying football before, simply because the risk of serious injury is so much lower.",
        "The sport's profile has only grown since its selection for the 2028 Olympics. [4] What was once considered a casual backyard activity is quickly becoming a serious competitive pursuit."
      ],
      answers: { 1: "A", 2: "C", 3: "E", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this article mainly about?", options: ["A. A history and explanation of the sport of flag football", "B. A biography of a famous flag football player", "C. A comparison between flag football and soccer", "D. A review of the 2028 Olympic venue"], answer: "A", explanation: "主旨題。全文介紹旗式美式足球的起源與比賽規則。" },
        { id: 2, question: "According to the article, how does a defensive player stop an offensive player?", options: ["A. By tackling them to the ground", "B. By pulling one or both flags from the runner's belt", "C. By blocking the entire field", "D. By calling a timeout"], answer: "B", explanation: "細節題。文中提到防守方球員藉由拔下帶球者腰帶上的一條或兩條布旗來終止該次進攻。" },
        { id: 3, question: "How many points does a team score when they successfully reach the end zone?", options: ["A. Three points", "B. Six points", "C. Ten points", "D. One point"], answer: "B", explanation: "細節題。文中提到成功進入底線區可得六分。" },
        { id: 4, question: "What can be inferred about the popularity of flag football, based on the article?", options: ["A. It is a niche sport with very few players worldwide", "B. It is rapidly growing in popularity and will be featured at the 2028 Olympics", "C. It is losing popularity compared to traditional football", "D. It is only played by professional athletes"], answer: "B", explanation: "推論題。文中提到全球已有超過 2000 萬人參與，且男女代表隊正競逐 2028 奧運參賽資格，顯示這項運動正快速成長。" }
      ]
    }
  },

  "Unit 11": {
    title: "The Locker Letters",
    chineseTitle: "置物櫃情書之謎",
    passage: `Day 1\n\nBy Friday, love letters had taken over Owl City High School. Dozens of students found anonymous notes in their lockers — some were shy confessions, and others were poetic expressions of hidden feelings. The writing was smooth, the compliments specific. People were flattered. And embarrassed. And curious.\n\n“It’s a flood of feelings,” Dean said, watching three girls blush as they read their letters.\n\n“Too many notes. Too similar,” Ivy said, flipping through hers. “Same ink. Same style. Same silly poetry voice.”\n\nDean raised an eyebrow. “What if someone’s playing matchmaker?”\n\n“What if someone’s playing everyone?” Ivy answered.\n\nDay 2\n\nDean studied one of the letters. “It’s important that we figure out who’s writing these letters — they sound emotional without being real.” Dean’s eyes narrowed. “You know what? That chatbot the computer lab’s testing — it’s still open to students. You think …?”\n\nTen minutes later, he and Ivy were in the computer lab digging through the chatbot’s log data and, sure enough, they struck gold. Dozens of prompts had been fed into the system, each tied to the same login name, with timestamps lined up perfectly with the letters.\n\nDean opened one of the logs and read the prompt aloud:\n\n“Write a romantic letter to someone who loves frogs and hates chocolate. Reference a science field trip and a joke about pencils.”\n\nHe whistled. “He’s using people’s public profiles as source material.”\n\n“And letting them believe the feelings were genuine,” Ivy finished, frowning.\n\nThe culprit? Jonah Rhee. Quiet. Smart. Forgettable — until now.\n\nThey found Jonah cleaning paintbrushes in the art room.\n\n“Jonah,” Ivy said gently, “We’ve seen the letters. And the prompts you wrote.”\n\nJonah set a brush down. “I didn’t think my own words were good enough for anyone to care about. But if they got a beautiful, heartfelt letter, they’d feel the way I wish I could.”\n\n“So you used the chatbot?” asked Dean.\n\nJonah gave a small nod. “I didn’t know what to say. But I knew what they liked — frogs, concerts, old field trips.”\n\n“Jonah, it’s evident that you want to be seen. But pretending to be other people doesn’t make you more lovable. Just harder to trust,” said Ivy kindly.\n\nJonah looked down. “I didn’t think it’d work.”\n\n“It didn’t,” Ivy said softly. “But maybe now you can try something riskier.”\n\n“Like what?”\n\n“Being honest.”`,
    chineseTranslation: `【第 1 天】\n\n到了星期五，情書已經席捲了貓頭鷹城高中。許多學生在自己的置物櫃裡發現了匿名紙條——有些是害羞的告白，有些則是充滿詩意、訴說著隱藏心意的文字。字跡工整流暢，讚美之詞也十分具體。大家既感到受寵若驚，又覺得尷尬，同時也充滿好奇。\n\n「這簡直是一波情感的洪流，」迪恩說著，看著三個女孩紅著臉讀信。\n\n「太多紙條了，而且太相似了，」艾薇邊翻閱著自己收到的信邊說。「同樣的墨水，同樣的風格，同樣拙劣的詩意語氣。」\n\n迪恩挑起眉毛。「會不會是有人在扮演月老？」\n\n「會不會是有人在耍弄所有人？」艾薇回應道。\n\n【第 2 天】\n\n迪恩仔細研究其中一封信。「我們得找出到底是誰在寫這些信——這些信讀起來充滿情感，卻不像是真心的。」迪恩瞇起了眼睛。「你知道嗎？電腦教室正在測試的那個聊天機器人——它現在還開放給學生使用。你覺得……？」\n\n十分鐘後，他和艾薇已經身在電腦教室，翻找著聊天機器人的紀錄資料，結果不出所料，他們挖到了重要線索。系統中被輸入了數十筆提示詞，全都綁定在同一個登入帳號下，而且時間戳記與那些信件的時間完全吻合。\n\n迪恩打開其中一則紀錄，大聲唸了出來：\n\n「幫我寫一封浪漫情書，對象是一個喜歡青蛙、討厭巧克力的人。內容要提到一次科學校外教學，還要有個關於鉛筆的笑話。」\n\n他吹了聲口哨。「他根本是在拿別人的公開個人檔案當寫作素材。」\n\n「而且還讓對方誤以為那些情感是真的，」艾薇接著說，皺起了眉頭。\n\n犯人是誰？喬納·瑞。安靜。聰明。存在感薄弱——直到現在為止。\n\n他們在美術教室找到了正在清洗畫筆的喬納。\n\n「喬納，」艾薇溫和地說，「我們已經看過那些信了，也看過你寫的那些提示詞。」\n\n喬納放下畫筆。「我覺得自己的話不夠好，不足以讓任何人在意。但如果他們收到一封美麗、真情流露的信，他們就能感受到我希望自己能表達出的那種感覺。」\n\n「所以你用了聊天機器人？」迪恩問道。\n\n喬納輕輕點了點頭。「我不知道該說什麼。但我知道他們喜歡什麼——青蛙、演唱會，還有以前的校外教學。」\n\n「喬納，很明顯你渴望被看見。但假裝成別人並不會讓你變得更討人喜歡，只會讓人更難信任你，」艾薇語氣溫柔地說。\n\n喬納垂下了頭。「我沒想到會被發現。」\n\n「確實沒成功，」艾薇輕聲說道。「但也許現在你可以試試更有勇氣的做法。」\n\n「像是什麼？」\n\n「誠實面對。」`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "anonymous", pos: "adj.", meaning: "匿名的", collocations: "anonymous notes 匿名紙條" },
        { id: 2, word: "flattered", pos: "v.", meaning: "感到受寵若驚", collocations: "feel flattered 感到受寵若驚" },
        { id: 3, word: "genuine", pos: "adj.", meaning: "真誠的、真實的", collocations: "genuine feelings 真實的情感" },
        { id: 4, word: "culprit", pos: "n.", meaning: "犯人、罪魁禍首", collocations: "the culprit 犯人" },
        { id: 5, word: "Forgettable", pos: "adj.", meaning: "容易被遺忘的", collocations: "forgettable and quiet 存在感薄弱又安靜" }
      ],
      grammarNotes: [
        { id: "G1", title: "What if...? (假設疑問句，表懷疑猜測)", excerpt: "“What if someone’s playing matchmaker?”", analysis: "What if...? 用於提出假設性的猜測或疑問，表「如果…會怎樣？」。" },
        { id: "G2", title: "without + V-ing (沒有…卻…)", excerpt: "without being real", analysis: "without 後接動名詞，表「沒有…」，此處形容信件聽起來充滿情感卻不真實。" }
      ],
      patternNotes: [
        { id: "P1", title: "it's evident that + S. + V. (顯而易見的是…)", excerpt: "it’s evident that you want to be seen", analysis: "it is evident that... 為虛主詞句型，強調後方子句所陳述的事實顯而易見。" }
      ],
      paragraphs: [
        [ { type: 'text', text: 'Day 1' } ],
        [
          { type: 'text', text: 'By Friday, love letters had taken over Owl City High School. Dozens of students found ' },
          { type: 'vocab', text: 'anonymous', vid: 1 },
          { type: 'text', text: ' notes in their lockers — some were shy confessions, and others were poetic expressions of hidden feelings. The writing was smooth, the compliments specific. People were ' },
          { type: 'vocab', text: 'flattered', vid: 2 },
          { type: 'text', text: '. And embarrassed. And curious.' }
        ],
        [ { type: 'text', text: '“It’s a flood of feelings,” Dean said, watching three girls blush as they read their letters.' } ],
        [ { type: 'text', text: '“Too many notes. Too similar,” Ivy said, flipping through hers. “Same ink. Same style. Same silly poetry voice.”' } ],
        [
          { type: 'text', text: 'Dean raised an eyebrow. ' },
          { type: 'grammar', text: '“What if someone’s playing matchmaker?”', gid: 'G1' }
        ],
        [ { type: 'text', text: '“What if someone’s playing everyone?” Ivy answered.' } ],
        [ { type: 'text', text: 'Day 2' } ],
        [
          { type: 'text', text: 'Dean studied one of the letters. “It’s important that we figure out who’s writing these letters — they sound emotional ' },
          { type: 'grammar', text: 'without being real', gid: 'G2' },
          { type: 'text', text: '.” Dean’s eyes narrowed. “You know what? That chatbot the computer lab’s testing — it’s still open to students. You think …?”' }
        ],
        [ { type: 'text', text: 'Ten minutes later, he and Ivy were in the computer lab digging through the chatbot’s log data and, sure enough, they struck gold. Dozens of prompts had been fed into the system, each tied to the same login name, with timestamps lined up perfectly with the letters.' } ],
        [ { type: 'text', text: 'Dean opened one of the logs and read the prompt aloud:' } ],
        [ { type: 'text', text: '“Write a romantic letter to someone who loves frogs and hates chocolate. Reference a science field trip and a joke about pencils.”' } ],
        [ { type: 'text', text: 'He whistled. “He’s using people’s public profiles as source material.”' } ],
        [
          { type: 'text', text: '“And letting them believe the feelings were ' },
          { type: 'vocab', text: 'genuine', vid: 3 },
          { type: 'text', text: ',” Ivy finished, frowning.' }
        ],
        [
          { type: 'text', text: 'The ' },
          { type: 'vocab', text: 'culprit', vid: 4 },
          { type: 'text', text: '? Jonah Rhee. Quiet. Smart. ' },
          { type: 'vocab', text: 'Forgettable', vid: 5 },
          { type: 'text', text: ' — until now.' }
        ],
        [ { type: 'text', text: 'They found Jonah cleaning paintbrushes in the art room.' } ],
        [ { type: 'text', text: '“Jonah,” Ivy said gently, “We’ve seen the letters. And the prompts you wrote.”' } ],
        [ { type: 'text', text: 'Jonah set a brush down. “I didn’t think my own words were good enough for anyone to care about. But if they got a beautiful, heartfelt letter, they’d feel the way I wish I could.”' } ],
        [ { type: 'text', text: '“So you used the chatbot?” asked Dean.' } ],
        [ { type: 'text', text: 'Jonah gave a small nod. “I didn’t know what to say. But I knew what they liked — frogs, concerts, old field trips.”' } ],
        [
          { type: 'text', text: '“Jonah, ' },
          { type: 'pattern', text: 'it’s evident that you want to be seen', pid: 'P1' },
          { type: 'text', text: '. But pretending to be other people doesn’t make you more lovable. Just harder to trust,” said Ivy kindly.' }
        ],
        [ { type: 'text', text: 'Jonah looked down. “I didn’t think it’d work.”' } ],
        [ { type: 'text', text: '“It didn’t,” Ivy said softly. “But maybe now you can try something riskier.”' } ],
        [ { type: 'text', text: '“Like what?”' } ],
        [ { type: 'text', text: '“Being honest.”' } ]
      ]
    },
    vocab: [
      { id: 1, question: "The charity received a large ______ donation from someone who wished to remain unnamed.", options: ["A. anonymous", "B. deceptive", "C. sentimental", "D. artificial"], answer: "A", explanation: "【選項解析】\n- (A) anonymous (adj.) 匿名的 (正解)\n- (B) deceptive (adj.) 欺騙性的\n- (C) sentimental (adj.) 多愁善感的\n- (D) artificial (adj.) 人造的" },
      { id: 2, question: "Her apology sounded ______, and everyone could tell she truly meant it.", options: ["A. genuine", "B. vague", "C. contagious", "D. excessive"], answer: "A", explanation: "【選項解析】\n- (A) genuine (adj.) 真誠的、真實的 (正解)\n- (B) vague (adj.) 模糊的\n- (C) contagious (adj.) 傳染性的\n- (D) excessive (adj.) 過量的" },
      { id: 3, question: "Detectives eventually identified the ______ behind the string of break-ins.", options: ["A. culprit", "B. companion", "C. host", "D. spectrum"], answer: "A", explanation: "【選項解析】\n- (A) culprit (n.) 犯人、罪魁禍首 (正解)\n- (B) companion (n.) 夥伴\n- (C) host (n.) 主持人\n- (D) spectrum (n.) 範圍" },
      { id: 4, question: "The movie's plot was so ______ that she couldn't remember a single detail the next day.", options: ["A. forgettable", "B. remarkable", "C. courageous", "D. qualified"], answer: "A", explanation: "【選項解析】\n- (A) forgettable (adj.) 容易被遺忘的 (正解)\n- (B) remarkable (adj.) 非凡的\n- (C) courageous (adj.) 勇敢的\n- (D) qualified (adj.) 合格的" }
    ],
    cloze: {
      text: "When a wave of anonymous love letters appeared at Owl City High School, two curious students decided to investigate [1] had written them. At first, the notes seemed like an innocent, even charming mystery, but the writing style was suspiciously [2] across every letter. Rather than accept the notes at face value, Dean and Ivy began looking for clues, [3] led them straight to the school's computer lab. There, they discovered [4] appeared to be the true source of the romantic messages: an AI chatbot. The real surprise, however, was not the technology itself but the shy, overlooked classmate [5] had been quietly typing the prompts all along.",
      questions: [
        { id: 1, options: ["A. who", "B. whom", "C. whose", "D. which"], answer: "A", explanation: "investigate 後接名詞子句，who 引導子句作受詞，表「調查是誰…」。" },
        { id: 2, options: ["A. similar", "B. similarly", "C. similarity", "D. similarize"], answer: "A", explanation: "be + adj. 句型，similar 為形容詞作主詞補語。" },
        { id: 3, options: ["A. which", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞為前面整個概念（尋找線索的過程），which 引導非限定關係子句補充說明。" },
        { id: 4, options: ["A. what", "B. that", "C. which", "D. who"], answer: "A", explanation: "what 引導名詞子句，作 discovered 的受詞，相當於 the thing that。" },
        { id: 5, options: ["A. who", "B. which", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 classmate 為人，who 在子句中作主詞，引導限定關係子句。" }
      ]
    },
    wordBank: {
      words: ["(A) confess", "(B) confession", "(C) convincing", "(D) disguise", "(E) evidence", "(F) expose", "(G) motive", "(H) remorseful", "(I) suspect", "(J) suspicious"],
      passage: "Mystery stories set in high schools often follow a familiar pattern: something strange happens, a small group of students starts asking questions, and the truth turns out to be far more personal than anyone expected. Before investigators can [1] any single classmate, they usually need real [2], not just a hunch.\n\nIn many cases, the first clue is something small and oddly [3], a detail that does not quite match the story being told. A handwriting style that looks too polished, a compliment that feels suspiciously specific — these tiny inconsistencies are often enough to make sharp-eyed classmates start paying closer attention.\n\nOnce investigators begin digging, they usually look for a clear [4]. Why would someone go to such lengths to hide their identity? Loneliness, a crush or a simple desire to be noticed are common answers, and understanding the reason often makes the mystery's resolution far more [5].\n\nWhen the culprit is finally identified, reactions vary widely. Some try to [6] their true feelings right away, offering a full [7] without much resistance. Others attempt to [8] their involvement for as long as possible, hoping no one will [9] the whole story before graduation.\n\nIn the end, most of these stories are not really about catching a rule-breaker. They are about a [10] student finally working up the courage to be honest, even after being caught.",
      answers: { 1: "I", 2: "E", 3: "J", 4: "G", 5: "C", 6: "A", 7: "B", 8: "D", 9: "F", 10: "H" }
    },
    discourse: {
      options: [
        "A. A closer look revealed that every letter shared oddly similar phrasing and style.",
        "B. The school principal immediately canceled all extracurricular clubs as a punishment.",
        "C. This digital trail eventually led the two students straight to an AI chatbot in the school's computer lab.",
        "D. Rather than punishing him, Ivy encouraged him to try a far simpler, more honest approach instead.",
        "E. At first, most students assumed the letters were simply the work of a secret admirer."
      ],
      paragraphs: [
        "When anonymous love letters flooded the lockers of Owl City High School, the reaction was part delight and part confusion. Nobody could say for certain who was behind them.",
        "[1] But two classmates, Dean and Ivy, were not so easily convinced.",
        "[2] Suspicious, they decided to investigate further, tracing login records and timestamps back to a single source. [3]",
        "The real culprit turned out to be a quiet, overlooked classmate who simply wanted to be noticed. [4] In the end, the mystery said less about deception and more about the courage it takes to be truly seen."
      ],
      answers: { 1: "E", 2: "A", 3: "C", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this story mainly about?", options: ["A. Two students solving a mystery about who has been secretly using a chatbot to write love letters", "B. A romantic love story between Dean and Ivy", "C. A technical guide to building chatbots", "D. A school election scandal"], answer: "A", explanation: "主旨題。全文描述迪恩與艾薇如何調查並揭穿是誰利用聊天機器人撰寫情書的謎團。" },
        { id: 2, question: "What first made Dean and Ivy suspicious of the love letters?", options: ["A. The letters were written in a foreign language", "B. The letters shared a suspiciously similar writing style", "C. The letters were signed with a real name", "D. The letters were delivered by mail instead of placed in lockers"], answer: "B", explanation: "細節題。艾薇提到這些信件用詞相似、風格雷同，讓他們開始起疑。" },
        { id: 3, question: "How did Dean and Ivy discover who was writing the letters?", options: ["A. They asked the school principal for help", "B. They found fingerprints on the letters", "C. They traced chatbot prompts and timestamps linked to the same login name", "D. They hired a private investigator"], answer: "C", explanation: "細節題。文中提到他們透過聊天機器人的紀錄資料，發現提示詞都與同一個登入帳號、且時間戳記與信件時間吻合。" },
        { id: 4, question: "What can be inferred about Jonah's motivation for writing the letters, based on the story?", options: ["A. He wanted to embarrass his classmates", "B. He wanted to be noticed and cared about but felt his own words weren't good enough", "C. He was hired by someone else to write the letters", "D. He was practicing for a creative writing class assignment"], answer: "B", explanation: "推論題。喬納表示自己覺得「話不夠好，不足以讓任何人在意」，顯示他其實渴望被關注，卻對自己缺乏自信。" }
      ]
    }
  },

  "Unit 12": {
    title: "Greenland's Cool History",
    chineseTitle: "格陵蘭的酷歷史",
    passage: `Day 1\n\nAn icy island almost entirely within the Arctic Circle with a tiny population, Greenland might not sound like a historically important place, yet a noticeable number of nations have engaged with Greenland over the years.\n\nDespite its cold climate and the surrounding waters, Greenland is believed to have been inhabited for 4,500 years. The first people to reach Greenland came from North America through what is now Canada. Several waves of migration from Canada took place, and although some of these groups either left or died out, remains of their culture still exist there.\n\nThere is some irony in a cold place with few plants being named Greenland. The island’s name came from a Viking explorer named Erik the Red. He found the island in the 10th century and then convinced others from his homeland to settle there. At the time, the southern parts of Greenland may have been green enough to inspire its name, but he also chose it to make the prospect of living there appealing. The Norse settlement founded by Erik the Red lasted until the 15th century, but then it disappeared for reasons that remain a mystery.\n\nAnother group of people traveled to Greenland from Siberia in the 12th century. Their descendants, called the Inuit, live in Greenland to this day and comprise most of its population.\n\nDay 2\n\nAfter the disappearance of the Norse settlement, European involvement with the island ceased for a few centuries. But in 1721, a Norwegian priest set out for Greenland as a missionary, planning to search for the lost settlement to give them spiritual guidance. Instead, he found Inuit communities and sought to convince them to convert to Christianity. Over the course of several generations, most of the Inuit became Christian, and Greenland became a colony of Denmark, which at the time was united with Norway. When Norway and Denmark split into separate nations, Norway asserted that they should own Greenland, but an international court ruled that the island still belonged to Denmark.\n\nToday, Greenland remains part of Denmark, but Denmark’s law says Greenland can become independent whenever it chooses. Most people in Greenland want to become independent eventually, but so far, they have not voted for independence for fear that Greenland’s government would collapse without financial support from Denmark.\n\nDuring World War II, Denmark’s ambassador to the United States granted the U.S. permission to establish military bases on the island, one of which still exists. Greenland sits in a strategic location off the coast of North America, so its future may be more important for global affairs than its climate and population may suggest.`,
    chineseTranslation: `【第 1 天】\n\n格陵蘭是一座幾乎完全位於北極圈內、人口稀少的冰封島嶼，聽起來或許不像是個在歷史上舉足輕重的地方，但事實上，相當多的國家多年來都與格陵蘭有著密切的往來。\n\n儘管氣候嚴寒、四周環海，格陵蘭據信已有人居住長達 4500 年之久。最早抵達格陵蘭的人們，是經由現今加拿大的地區從北美洲而來。之後又歷經了數波來自加拿大的遷徙潮，儘管其中一些族群後來離開或消失了，他們的文化遺跡至今仍存在於此。\n\n一個幾乎不長植物的寒冷之地，卻被命名為「格陵蘭」（意為「綠地」），這其中頗具諷刺意味。這座島嶼的名字，來自一位名叫「紅髮艾瑞克」的維京探險家。他於十世紀發現這座島嶼，並說服故鄉的族人一同前來定居。在當時，格陵蘭南部或許真的有足夠的綠意，足以啟發這個名字的由來，但他選擇這個名字，也是為了讓人們覺得移居此地更具吸引力。由紅髮艾瑞克建立的北歐移民聚落，一直延續到十五世紀，之後便神秘消失，原因至今成謎。\n\n另一群人則於十二世紀從西伯利亞遷徙至格陵蘭。他們的後裔，也就是今日的因紐特人，至今仍居住在格陵蘭，並構成當地人口的絕大多數。\n\n【第 2 天】\n\n北歐移民聚落消失後，歐洲與這座島嶼的往來中斷了數個世紀。但到了 1721 年，一位挪威籍的傳教士啟程前往格陵蘭，原本計畫尋找那個失落的聚落，給予他們心靈上的指引。然而，他找到的卻是因紐特人的部落，並試圖說服他們改信基督教。經過數個世代之後，大多數因紐特人皆已改信基督教，格陵蘭也成為丹麥（當時與挪威為同一國）的殖民地。後來當挪威與丹麥分裂為兩個獨立國家時，挪威一度主張格陵蘭應歸其所有，但國際法庭最終裁定，這座島嶼仍屬於丹麥。\n\n如今，格陵蘭仍是丹麥的一部分，但根據丹麥的法律，格陵蘭隨時可以選擇獨立。多數格陵蘭人最終都希望能夠獨立，但截至目前為止，他們尚未投票支持獨立，原因在於他們擔心，一旦失去丹麥的財政支持，格陵蘭政府恐怕會因此垮台。\n\n二戰期間，丹麥駐美大使批准美國在該島上建立軍事基地，其中一座至今仍然存在。由於格陵蘭地處北美洲海岸外的戰略要地，其未來對於全球事務的重要性，恐怕遠超過它的氣候與人口數字所能顯示的程度。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "inhabited", pos: "v.", meaning: "被居住", collocations: "be inhabited for... years 被居住…年" },
        { id: 2, word: "migration", pos: "n.", meaning: "遷徙", collocations: "waves of migration 一波波的遷徙" },
        { id: 3, word: "irony", pos: "n.", meaning: "諷刺意味", collocations: "there is irony in... …頗具諷刺意味" },
        { id: 4, word: "settlement", pos: "n.", meaning: "移民聚落", collocations: "a Norse settlement 北歐移民聚落" },
        { id: 5, word: "descendants", pos: "n.", meaning: "後裔", collocations: "their descendants 他們的後裔" },
        { id: 6, word: "missionary", pos: "n.", meaning: "傳教士", collocations: "set out as a missionary 以傳教士身分啟程" },
        { id: 7, word: "convert", pos: "v.", meaning: "使改信、皈依", collocations: "convert to Christianity 改信基督教" },
        { id: 8, word: "strategic", pos: "adj.", meaning: "戰略上的", collocations: "a strategic location 戰略要地" }
      ],
      grammarNotes: [
        { id: "G1", title: "for fear that + S. + V. (因為害怕…)", excerpt: "for fear that Greenland’s government would collapse without financial support from Denmark", analysis: "for fear that... 表「因為害怕、唯恐…」，說明尚未採取行動（投票獨立）的原因。" },
        { id: "G2", title: "one of which + V. (非限定關係子句，先行詞為複數事物)", excerpt: "one of which still exists", analysis: "of which 代替先行詞 military bases 表「其中之一」，引導補充說明的非限定關係子句。" }
      ],
      patternNotes: [
        { id: "P1", title: "may have + p.p. (過去可能已經…)", excerpt: "may have been green enough to inspire its name", analysis: "may have + p.p. 表對過去事實的不確定推測，意為「當時可能已經…」。" }
      ],
      paragraphs: [
        [ { type: 'text', text: 'Day 1' } ],
        [
          { type: 'text', text: 'An icy island almost entirely within the Arctic Circle with a tiny population, Greenland might not sound like a historically important place, yet a noticeable number of nations have engaged with Greenland over the years.' }
        ],
        [
          { type: 'text', text: 'Despite its cold climate and the surrounding waters, Greenland is believed to have been ' },
          { type: 'vocab', text: 'inhabited', vid: 1 },
          { type: 'text', text: ' for 4,500 years. The first people to reach Greenland came from North America through what is now Canada. Several waves of ' },
          { type: 'vocab', text: 'migration', vid: 2 },
          { type: 'text', text: ' from Canada took place, and although some of these groups either left or died out, remains of their culture still exist there.' }
        ],
        [
          { type: 'text', text: 'There is some ' },
          { type: 'vocab', text: 'irony', vid: 3 },
          { type: 'text', text: ' in a cold place with few plants being named Greenland. The island’s name came from a Viking explorer named Erik the Red. He found the island in the 10th century and then convinced others from his homeland to settle there. At the time, the southern parts of Greenland ' },
          { type: 'pattern', text: 'may have been green enough to inspire its name', pid: 'P1' },
          { type: 'text', text: ', but he also chose it to make the prospect of living there appealing. The Norse ' },
          { type: 'vocab', text: 'settlement', vid: 4 },
          { type: 'text', text: ' founded by Erik the Red lasted until the 15th century, but then it disappeared for reasons that remain a mystery.' }
        ],
        [
          { type: 'text', text: 'Another group of people traveled to Greenland from Siberia in the 12th century. Their ' },
          { type: 'vocab', text: 'descendants', vid: 5 },
          { type: 'text', text: ', called the Inuit, live in Greenland to this day and comprise most of its population.' }
        ],
        [ { type: 'text', text: 'Day 2' } ],
        [
          { type: 'text', text: 'After the disappearance of the Norse settlement, European involvement with the island ceased for a few centuries. But in 1721, a Norwegian priest set out for Greenland as a ' },
          { type: 'vocab', text: 'missionary', vid: 6 },
          { type: 'text', text: ', planning to search for the lost settlement to give them spiritual guidance. Instead, he found Inuit communities and sought to convince them to ' },
          { type: 'vocab', text: 'convert', vid: 7 },
          { type: 'text', text: ' to Christianity. Over the course of several generations, most of the Inuit became Christian, and Greenland became a colony of Denmark, which at the time was united with Norway. When Norway and Denmark split into separate nations, Norway asserted that they should own Greenland, but an international court ruled that the island still belonged to Denmark.' }
        ],
        [
          { type: 'text', text: 'Today, Greenland remains part of Denmark, but Denmark’s law says Greenland can become independent whenever it chooses. Most people in Greenland want to become independent eventually, but so far, they have not voted for independence ' },
          { type: 'grammar', text: 'for fear that Greenland’s government would collapse without financial support from Denmark', gid: 'G1' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'During World War II, Denmark’s ambassador to the United States granted the U.S. permission to establish military bases on the island, ' },
          { type: 'grammar', text: 'one of which still exists', gid: 'G2' },
          { type: 'text', text: '. Greenland sits in a ' },
          { type: 'vocab', text: 'strategic', vid: 8 },
          { type: 'text', text: ' location off the coast of North America, so its future may be more important for global affairs than its climate and population may suggest.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Archaeologists found evidence that the cave had been ______ thousands of years ago.", options: ["A. inhabited", "B. curated", "C. certified", "D. exhausted"], answer: "A", explanation: "【選項解析】\n- (A) inhabited (v.) 被居住 (正解)\n- (B) curated (v.) 策劃\n- (C) certified (v.) 被認證\n- (D) exhausted (v.) 精疲力竭的" },
      { id: 2, question: "Every autumn, millions of birds begin their long ______ south for the winter.", options: ["A. migration", "B. consultation", "C. procedure", "D. adoption"], answer: "A", explanation: "【選項解析】\n- (A) migration (n.) 遷徙 (正解)\n- (B) consultation (n.) 諮詢\n- (C) procedure (n.) 手術\n- (D) adoption (n.) 領養" },
      { id: 3, question: "The early ______ struggled through a harsh first winter with little food.", options: ["A. settlement", "B. spectrum", "C. incentive", "D. tactic"], answer: "A", explanation: "【選項解析】\n- (A) settlement (n.) 移民聚落 (正解)\n- (B) spectrum (n.) 範圍\n- (C) incentive (n.) 誘因\n- (D) tactic (n.) 手法" },
      { id: 4, question: "Many of her ______ can be traced back to farmers who settled in this valley centuries ago.", options: ["A. descendants", "B. companions", "C. specialists", "D. watchdogs"], answer: "A", explanation: "【選項解析】\n- (A) descendants (n.) 後裔 (正解)\n- (B) companions (n.) 夥伴\n- (C) specialists (n.) 專家\n- (D) watchdogs (n.) 監督機構" }
    ],
    cloze: {
      text: "Greenland's history is far more complicated than its small population might suggest. Long before any European explorer arrived, Indigenous groups [1] traveled across the Arctic had already made the island their home. Centuries later, a Norse explorer gave the island a name [2] was arguably more hopeful than accurate, hoping it would attract new settlers. That early settlement eventually vanished, [3] leaving historians with more questions than answers. Missionaries who arrived much later found a very different population already living there, and their efforts eventually [4] the island's connection to Denmark. Today, Greenland's political status remains unsettled, [5] many residents hoping for eventual independence while remaining cautious about the economic risks involved.",
      questions: [
        { id: 1, options: ["A. who", "B. which", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 groups 為人，who 在子句中作主詞，引導限定關係子句。" },
        { id: 2, options: ["A. that", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 a name 為事物，that 在子句中作主詞，引導限定關係子句。" },
        { id: 3, options: ["A. thus", "B. despite", "C. unless", "D. among"], answer: "A", explanation: "thus 為副詞，表「因此」，連接前後兩個結果。" },
        { id: 4, options: ["A. shaped", "B. shaping", "C. to shape", "D. shape"], answer: "A", explanation: "過去簡單式敘述歷史事實，shaped 為過去式動詞。" },
        { id: 5, options: ["A. with", "B. despite", "C. unless", "D. among"], answer: "A", explanation: "with + N. + V-ing 為獨立分詞構句，表附帶狀態，意為「伴隨著…」。" }
      ]
    },
    wordBank: {
      words: ["(A) assimilate", "(B) autonomous", "(C) colonize", "(D) dwindle", "(E) heritage", "(F) indigenous", "(G) preserve", "(H) remote", "(I) sovereignty", "(J) territory"],
      passage: "Long before national borders existed in the Arctic, [1] communities had already adapted to one of the planet's harshest climates, developing skills in hunting, fishing and building shelter from ice and stone. When European explorers later attempted to [2] the region, they often underestimated how difficult survival there truly was.\n\nEarly Norse settlements struggled for generations before their population began to [3], eventually disappearing altogether for reasons historians still debate. Meanwhile, Inuit communities, arriving separately from Siberia, proved far more resilient in the same harsh environment.\n\nCenturies later, missionaries and colonial powers pressured many Inuit families to [4] into European culture and religion, often at the cost of traditional practices. Even so, many communities worked quietly to [5] their language, stories and customs for future generations.\n\nToday, questions of [6] and political control remain central to Greenland's identity. While the island is governed as part of Denmark, it enjoys an [7] level of self-rule that allows local leaders to manage many of their own affairs.\n\nSome Greenlanders argue that full [8] would better protect their cultural [9], while others worry that losing Danish financial support could leave a [10] population struggling to support itself. Either way, Greenland's small population continues to navigate an outsized role in international affairs.",
      answers: { 1: "F", 2: "C", 3: "D", 4: "A", 5: "G", 6: "J", 7: "B", 8: "I", 9: "E", 10: "H" }
    },
    discourse: {
      options: [
        "A. Centuries later, a very different group of Europeans arrived not as settlers but as missionaries.",
        "B. Every resident of Greenland is currently required to relocate to Denmark by the year 2030.",
        "C. Unlike the Norse, these newer arrivals survived and their descendants remain the island's majority population today.",
        "D. This unresolved tension between identity and economics continues to shape Greenland's politics today.",
        "E. His chosen name, ironically, promised a landscape far greener than the island actually offered."
      ],
      paragraphs: [
        "Greenland's history stretches back thousands of years, long before any European explorer set foot on its icy shores. Its story is one of repeated arrivals, disappearances and quiet endurance.",
        "A Viking explorer named Erik the Red is often credited with giving the island its hopeful name. [1]",
        "His settlement eventually vanished under mysterious circumstances. [2] [3]",
        "Greenland remains part of Denmark today, though many residents hope for eventual independence, held back mainly by concerns over losing financial support. [4]"
      ],
      answers: { 1: "E", 2: "A", 3: "C", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this article mainly about?", options: ["A. A travel guide to Greenland's best tourist attractions", "B. The history of Greenland's settlement, naming and political status", "C. A scientific study of Greenland's melting ice", "D. A biography of Erik the Red"], answer: "B", explanation: "主旨題。全文介紹格陵蘭的移民史、命名由來，以及其政治地位的演變。" },
        { id: 2, question: "According to the article, why did Erik the Red name the island “Greenland”?", options: ["A. Because the entire island was covered in thick green forests", "B. Because the southern part may have looked green enough, and to make it sound appealing to settlers", "C. Because it was named after a Norwegian king", "D. Because Inuit communities had already given it that name"], answer: "B", explanation: "細節題。文中提到南部或許真的有足夠綠意，且他選擇這個名字也是為了讓移居此地看起來更具吸引力。" },
        { id: 3, question: "What happened when Norway and Denmark split into separate nations, according to the article?", options: ["A. Greenland immediately became an independent country", "B. Norway claimed ownership of Greenland, but an international court ruled it belonged to Denmark", "C. Greenland was divided equally between the two countries", "D. The United States took control of Greenland"], answer: "B", explanation: "細節題。文中提到挪威主張擁有格陵蘭，但國際法庭裁定該島仍屬於丹麥。" },
        { id: 4, question: "Based on the article, why haven't most Greenlanders voted for independence?", options: ["A. They are not legally allowed to vote on the matter", "B. They fear losing financial support from Denmark", "C. They prefer being governed entirely by Norway", "D. They believe the United States would take over instead"], answer: "B", explanation: "推論題。文中提到多數格陵蘭人擔心一旦失去丹麥的財政支持，政府恐將垮台，因此尚未投票支持獨立。" }
      ]
    }
  },

  "Unit 13": {
    title: "Celebrating Educators",
    chineseTitle: "向教育工作者致敬",
    passage: `Some holidays celebrate food, while others celebrate history. But September 28 honors the heroes of the classroom — teachers!\n\nThis day is believed to be the birthday of Confucius, who is known as the world’s “first teacher.” He earned this title for his focus on learning and his great contributions to education.\n\nBoth teachers and Confucius are celebrated on September 28 in Taiwan with special events. Some attend ceremonies that exhibit ancient customs. With beautiful costumes, traditional music and dance, the events often feel like grand celebrations from the past.\n\nWhen Teachers’ Day approaches, students often take the opportunity to express their gratitude to their teachers in different ways. Some offer cards, gifts or food as tokens of appreciation. Many schools and universities hold award ceremonies to recognize educators who are making an impact on their students’ lives. Other people elect to enjoy their day off by eating out, shopping or watching a movie.\n\nNo matter how you celebrate today, remember to thank those who inspire you and make learning exciting!`,
    chineseTranslation: `有些節日慶祝美食，有些則紀念歷史事件。但 9 月 28 日，要向教室裡的英雄致敬——那就是老師們！\n\n這一天被認為是孔子的誕辰，他被譽為世界上的「至聖先師」。他之所以獲得這個稱號，是因為他專注於學習，並對教育做出了偉大的貢獻。\n\n在台灣，教師節與孔子誕辰同樣都在 9 月 28 日這天，透過特別的活動一同慶祝。有些人會參加展現古代習俗的祭孔典禮。透過華麗的服飾、傳統音樂與舞蹈，這些活動往往讓人感覺像是重現了過去盛大的慶典。\n\n每當教師節將近，學生們常會把握機會，用不同的方式向老師表達感謝。有些人會贈送卡片、禮物或食物，作為心意的象徵。許多學校與大學也會舉辦頒獎典禮，表揚那些正在深刻影響學生生命的教育者。也有些人則選擇以外出用餐、購物或看電影的方式，享受這一天的假期。\n\n無論你今天用什麼方式慶祝，都別忘了感謝那些啟發你、讓學習變得精彩有趣的人！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "honors", pos: "v.", meaning: "向…致敬", collocations: "honor the heroes 向英雄致敬" },
        { id: 2, word: "contributions", pos: "n.", meaning: "貢獻", collocations: "make contributions to... 對…做出貢獻" },
        { id: 3, word: "ceremonies", pos: "n.", meaning: "典禮、儀式", collocations: "attend ceremonies 參加典禮" },
        { id: 4, word: "gratitude", pos: "n.", meaning: "感激", collocations: "express gratitude 表達感激" },
        { id: 5, word: "tokens", pos: "n.", meaning: "象徵、表示心意的物品", collocations: "tokens of appreciation 感謝的象徵" }
      ],
      grammarNotes: [
        { id: "G1", title: "who 引導形容詞子句 (先行詞為人)", excerpt: "who is known as the world’s “first teacher.”", analysis: "who 代替先行詞 Confucius 作主詞，引導補充說明的非限定關係子句。" }
      ],
      patternNotes: [
        { id: "P1", title: "No matter how + S. + V. (無論如何…)", excerpt: "No matter how you celebrate today", analysis: "no matter how 引導讓步子句，表「無論以何種方式」，強調後面敘述不受前面條件影響。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'Some holidays celebrate food, while others celebrate history. But September 28 ' },
          { type: 'vocab', text: 'honors', vid: 1 },
          { type: 'text', text: ' the heroes of the classroom — teachers!' }
        ],
        [
          { type: 'text', text: 'This day is believed to be the birthday of Confucius, ' },
          { type: 'grammar', text: 'who is known as the world’s “first teacher.”', gid: 'G1' },
          { type: 'text', text: ' He earned this title for his focus on learning and his great ' },
          { type: 'vocab', text: 'contributions', vid: 2 },
          { type: 'text', text: ' to education.' }
        ],
        [
          { type: 'text', text: 'Both teachers and Confucius are celebrated on September 28 in Taiwan with special events. Some attend ' },
          { type: 'vocab', text: 'ceremonies', vid: 3 },
          { type: 'text', text: ' that exhibit ancient customs. With beautiful costumes, traditional music and dance, the events often feel like grand celebrations from the past.' }
        ],
        [
          { type: 'text', text: 'When Teachers’ Day approaches, students often take the opportunity to express their ' },
          { type: 'vocab', text: 'gratitude', vid: 4 },
          { type: 'text', text: ' to their teachers in different ways. Some offer cards, gifts or food as ' },
          { type: 'vocab', text: 'tokens', vid: 5 },
          { type: 'text', text: ' of appreciation. Many schools and universities hold award ceremonies to recognize educators who are making an impact on their students’ lives. Other people elect to enjoy their day off by eating out, shopping or watching a movie.' }
        ],
        [
          { type: 'pattern', text: 'No matter how you celebrate today', pid: 'P1' },
          { type: 'text', text: ', remember to thank those who inspire you and make learning exciting!' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The annual parade ______ the veterans who served in the war.", options: ["A. honors", "B. donates", "C. diagnoses", "D. rehearses"], answer: "A", explanation: "【選項解析】\n- (A) honors (v.) 向…致敬 (正解)\n- (B) donates (v.) 捐贈\n- (C) diagnoses (v.) 診斷\n- (D) rehearses (v.) 排練" },
      { id: 2, question: "Her research made significant ______ to the field of renewable energy.", options: ["A. contributions", "B. consultations", "C. procedures", "D. shortages"], answer: "A", explanation: "【選項解析】\n- (A) contributions (n.) 貢獻 (正解)\n- (B) consultations (n.) 諮詢\n- (C) procedures (n.) 手術、程序\n- (D) shortages (n.) 短缺" },
      { id: 3, question: "He wrote a heartfelt letter to express his deep ______ for her support.", options: ["A. gratitude", "B. isolation", "C. curiosity", "D. discipline"], answer: "A", explanation: "【選項解析】\n- (A) gratitude (n.) 感激 (正解)\n- (B) isolation (n.) 孤立\n- (C) curiosity (n.) 好奇心\n- (D) discipline (n.) 紀律" },
      { id: 4, question: "The temple holds religious ______ every year to honor its founders.", options: ["A. ceremonies", "B. barriers", "C. loopholes", "D. footprints"], answer: "A", explanation: "【選項解析】\n- (A) ceremonies (n.) 典禮、儀式 (正解)\n- (B) barriers (n.) 障礙\n- (C) loopholes (n.) 漏洞\n- (D) footprints (n.) 足跡" }
    ],
    cloze: {
      text: "Teachers' Day in Taiwan falls on September 28, a date [1] also marks the traditional birthday of Confucius. Schools across the island use the occasion [2] recognize educators who go above and beyond for their students. Some students choose [3] write personal notes, while others prefer to attend a small celebration organized by their class. Regardless of the method, the underlying message remains the same: teachers deserve to be thanked for the impact they have, even [4] that impact is not always obvious right away. Many educators say that a single note of appreciation can mean more [5] any gift purchased from a store.",
      questions: [
        { id: 1, options: ["A. that", "B. who", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 a date 為事物，that 在子句中作主詞，引導限定關係子句。" },
        { id: 2, options: ["A. to", "B. for", "C. of", "D. at"], answer: "A", explanation: "to V. 表目的，相當於 in order to，說明使用這個節日的目的。" },
        { id: 3, options: ["A. to", "B. for", "C. of", "D. at"], answer: "A", explanation: "choose to V. 表「選擇做…」，choose 後接不定詞。" },
        { id: 4, options: ["A. though", "B. so", "C. unless", "D. despite"], answer: "A", explanation: "even though + S. + V. 表「即使」，though 在此與 even 搭配強調讓步語氣。" },
        { id: 5, options: ["A. than", "B. then", "C. that", "D. as"], answer: "A", explanation: "mean more than + N. 表「比…更有意義」，than 用於比較。" }
      ]
    },
    wordBank: {
      words: ["(A) commemorate", "(B) devotion", "(C) esteemed", "(D) heartfelt", "(E) honor", "(F) influential", "(G) legacy", "(H) mentor", "(I) nurture", "(J) tribute"],
      passage: "Across many cultures, a single day each year is set aside to [1] the people who shape young minds inside a classroom. In Taiwan, that day coincides with the traditional birthday of Confucius, a scholar whose ideas about education remain [2] more than two thousand years later.\n\nFar beyond formal ceremonies, the true spirit of the holiday often shows up in small, everyday moments. A teacher who stays late to [3] a struggling student, or one who quietly offers encouragement during a difficult week, rarely expects public recognition. Yet these small acts of [4] often shape a student's confidence for years to come.\n\nStudents frequently mark the occasion with a simple, [5] note rather than an expensive gift, and many teachers say these messages mean more than any formal award. Some schools go further, organizing events specifically designed to [6] the most [7] educators on staff, individuals whose guidance has clearly changed the direction of students' lives.\n\nBeyond the celebrations themselves, the holiday also serves as a quiet reminder of the long-term impact a single teacher can have. A dedicated mentor does not simply transfer facts; they help [8] curiosity, resilience and character, qualities that often outlast any single lesson plan. In this sense, every student who grows up to make a difference carries forward a small piece of a teacher's [9], a lasting [10] to the guidance they once received.",
      answers: { 1: "E", 2: "F", 3: "H", 4: "B", 5: "D", 6: "A", 7: "C", 8: "I", 9: "G", 10: "J" }
    },
    discourse: {
      options: [
        "A. Students of all ages take part, from young children drawing thank-you cards to university students writing heartfelt letters.",
        "B. Every teacher in Taiwan receives a mandatory cash bonus equal to one month's salary on this day.",
        "C. The date was deliberately chosen to align with the traditional birthday of Confucius, revered as the nation's first teacher.",
        "D. Long after a school year ends, many adults still remember the specific words a favorite teacher once said to them.",
        "E. Some schools also hold formal ceremonies featuring traditional costumes, music and dance passed down for generations."
      ],
      paragraphs: [
        "Every September 28, classrooms across Taiwan pause their usual routines to celebrate Teachers' Day. Unlike holidays built around food or fireworks, this occasion centers entirely on gratitude.",
        "[1] For many, the day carries a deeper historical meaning as well.",
        "[2] [3] Whatever form it takes, the gesture is rarely about the gift itself.",
        "The true impact of a great teacher, however, often outlasts a single holiday. [4] That quiet, lasting influence may be the truest form of thanks a teacher could ever receive."
      ],
      answers: { 1: "C", 2: "E", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this article mainly about?", options: ["A. The history and traditions of Teachers' Day in Taiwan", "B. A biography of Confucius's early life", "C. A guide to planning a classroom party", "D. A comparison of holidays around the world"], answer: "A", explanation: "主旨題。全文介紹台灣教師節的由來與慶祝方式。" },
        { id: 2, question: "Why is September 28 significant, according to the article?", options: ["A. It marks the founding of the first school in Taiwan", "B. It is believed to be the birthday of Confucius, known as the world's “first teacher”", "C. It is a national holiday unrelated to education", "D. It celebrates the anniversary of a famous university"], answer: "B", explanation: "細節題。文中提到這一天被認為是被譽為「至聖先師」的孔子誕辰。" },
        { id: 3, question: "According to the article, how do some students show appreciation for their teachers on this day?", options: ["A. By giving cards, gifts or food as tokens of appreciation", "B. By organizing a school-wide exam", "C. By taking over teaching duties for the day", "D. By donating money to build a new school"], answer: "A", explanation: "細節題。文中提到學生常以卡片、禮物或食物來表達感謝之意。" },
        { id: 4, question: "What is the overall message the article wants to convey?", options: ["A. Teachers' Day is only meaningful in Taiwan", "B. People should take the opportunity to thank those who inspire and teach them", "C. Confucius is more important than modern teachers", "D. Celebrations should focus only on ancient customs"], answer: "B", explanation: "推論題。文末提醒讀者無論如何慶祝，都別忘了感謝那些啟發自己、讓學習變得精彩的人，可見全文核心訊息是鼓勵表達感謝。" }
      ]
    }
  },

  "Unit 14": {
    title: "Perfect Perth",
    chineseTitle: "完美伯斯",
    passage: `Day 1\n\nMention Australia, and many people immediately picture Sydney’s famous Harbour Bridge or the creative street art of Melbourne. But across the continent, closer to the Indian Ocean than to any other major Australian city, sits Perth — a place that many travelers overlook. That’s a mistake. Perth might just be one of Australia’s most surprising destinations.\n\nIn Perth, beaches take center stage. Along the coast, clear blue waves roll gently onto gorgeous stretches of soft, white sand. One of the most beloved local spots is Mettams Pool, a sheltered area perfect for snorkeling. On calm days, swimmers pass over seagrass where small, patterned fish, starfish and even the occasional octopus move quietly below the surface.\n\nAnother must-see is Cottesloe Beach, often called Perth’s postcard beach. Just a 20-minute drive from the city center, the beach has been loved by locals for more than 100 years. Swim, surf, stroll on the sand or dine on fresh seafood while looking out over the Indian Ocean.\n\nBack in Perth, visit the Bell Tower, famous for its glass and copper sail-like design. Housing 18 bells, it is one of the few places in the world where people can watch bell ringing.\n\nDay 2\n\nPerth offers plenty more to explore. The historic arcade of London Court looks like something straight out of Merry Old England. Enjoy a coffee or ice cream and browse in the little shops. Don’t miss the fancy mechanical clocks at both ends of the arcade, with moving figures inspired by historic English scenes.\n\nAnother popular place to visit is the Perth Zoo, which offers a close-up look at animals from around the world as well as some of Australia’s unique wildlife.\n\nSee one of these creatures in the wild by taking a short ferry ride to Rottnest Island. It’s famous for its friendly residents: the charming quokka. These pint-sized marsupials are often called the happiest animals on Earth because of their friendly, smile-like facial expressions. Visitors love taking photos with them. The island is also great for adventure. You can try glass-bottom boating or stay overnight in the simple tents at Pinky Beach, falling asleep to the sound of waves brushing the shore.\n\nPerth may not always be the first place people think of when planning an Australian adventure. But some travelers do visit Perth, only to discover it is one of Australia’s most surprising destinations.`,
    chineseTranslation: `【第 1 天】\n\n一提到澳洲，許多人腦海中立刻浮現雪梨知名的海港大橋，或墨爾本充滿創意的街頭藝術。但在這片大陸的另一端，比起任何其他澳洲大城市都更靠近印度洋的地方，坐落著伯斯——一個常被許多旅人忽略的城市。這實在是個錯誤的疏忽。伯斯很可能是澳洲最令人驚豔的旅遊目的地之一。\n\n在伯斯，海灘才是真正的主角。沿著海岸線，清澈的藍色海浪輕輕拍打在一片片絕美的白色沙灘上。其中最受當地人喜愛的景點之一，是梅塔姆斯池——一處適合浮潛的隱蔽海灣。在風平浪靜的日子裡，游泳的人們會經過海草叢，可以看見帶有花紋的小魚、海星，甚至偶爾出沒的章魚，在水面下靜靜地移動。\n\n另一處不容錯過的景點是科特斯洛海灘，常被稱為「伯斯的明信片海灘」。這裡距離市中心僅需 20 分鐘車程，超過百年來一直深受當地人喜愛。你可以在這裡游泳、衝浪、漫步沙灘，或是一邊眺望印度洋、一邊享用新鮮海鮮。\n\n回到伯斯市區，別忘了造訪鐘塔，它以玻璃與銅製成、宛如船帆般的外觀設計聞名。鐘塔內共有 18 座鐘，是全世界少數能夠讓民眾親眼觀賞敲鐘過程的地方之一。\n\n【第 2 天】\n\n伯斯還有更多值得探索的地方。歷史悠久的倫敦廊拱廊街，看起來彷彿直接從古老的英格蘭搬移而來。你可以在小商店裡喝杯咖啡、吃支冰淇淋，四處逛逛。千萬別錯過拱廊街兩端那些精緻的機械時鐘，鐘上會有仿照英國歷史場景設計、會動的人偶。\n\n另一個熱門景點是伯斯動物園，遊客能在這裡近距離觀賞來自世界各地的動物，以及一些澳洲獨有的野生動物。\n\n只要搭乘短程渡輪前往羅特尼斯島，就能親眼看見其中一種野生動物。這座島以牠親切友善的居民聞名——那就是討人喜歡的短尾矮袋鼠。這些嬌小玲瓏的有袋類動物，常被稱為「地球上最快樂的動物」，因為牠們友善、彷彿總是在微笑的臉部表情。遊客都很喜歡和牠們一起拍照。這座島也很適合展開冒險活動。你可以嘗試搭乘玻璃船底船，或選擇在平基海灘的簡易帳篷裡過夜，伴隨著海浪輕拍岸邊的聲音入睡。\n\n伯斯或許不總是人們規劃澳洲旅遊時第一個想到的地方。但有些旅人確實造訪了伯斯，結果卻發現，這裡正是澳洲最令人驚豔的旅遊目的地之一。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "overlook", pos: "v.", meaning: "忽略", collocations: "a place many overlook 一個許多人忽略的地方" },
        { id: 2, word: "gorgeous", pos: "adj.", meaning: "美極了的", collocations: "gorgeous stretches of sand 絕美的沙灘" },
        { id: 3, word: "sheltered", pos: "adj.", meaning: "隱蔽的、有遮蔽的", collocations: "a sheltered area 隱蔽的區域" },
        { id: 4, word: "arcade", pos: "n.", meaning: "拱廊街、商場", collocations: "a historic arcade 歷史悠久的拱廊街" },
        { id: 5, word: "wildlife", pos: "n.", meaning: "野生動物", collocations: "unique wildlife 獨特的野生動物" },
        { id: 6, word: "marsupials", pos: "n.", meaning: "有袋類動物", collocations: "pint-sized marsupials 嬌小的有袋類動物" },
        { id: 7, word: "adventure", pos: "n.", meaning: "冒險", collocations: "great for adventure 很適合展開冒險" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞片語作形容詞 (省略關代+be動詞)", excerpt: "often called Perth’s postcard beach", analysis: "called... 為過去分詞片語，修飾 Cottesloe Beach，等於 which is often called... 的省略形式。" },
        { id: "G2", title: "分詞構句 (表伴隨結果，主動語態)", excerpt: "falling asleep to the sound of waves brushing the shore", analysis: "分詞構句表伴隨發生的結果，主動用 falling，描述入睡時伴隨的情境。" }
      ],
      patternNotes: [
        { id: "P1", title: "only to V. (結果卻…；沒想到卻…)", excerpt: "only to discover it is one of Australia’s most surprising destinations", analysis: "only to V. 置於句尾，表出乎意料的結果，意為「沒想到卻發現…」。" }
      ],
      paragraphs: [
        [ { type: 'text', text: 'Day 1' } ],
        [
          { type: 'text', text: 'Mention Australia, and many people immediately picture Sydney’s famous Harbour Bridge or the creative street art of Melbourne. But across the continent, closer to the Indian Ocean than to any other major Australian city, sits Perth — a place that many travelers ' },
          { type: 'vocab', text: 'overlook', vid: 1 },
          { type: 'text', text: '. That’s a mistake. Perth might just be one of Australia’s most surprising destinations.' }
        ],
        [
          { type: 'text', text: 'In Perth, beaches take center stage. Along the coast, clear blue waves roll gently onto ' },
          { type: 'vocab', text: 'gorgeous', vid: 2 },
          { type: 'text', text: ' stretches of soft, white sand. One of the most beloved local spots is Mettams Pool, a ' },
          { type: 'vocab', text: 'sheltered', vid: 3 },
          { type: 'text', text: ' area perfect for snorkeling. On calm days, swimmers pass over seagrass where small, patterned fish, starfish and even the occasional octopus move quietly below the surface.' }
        ],
        [
          { type: 'text', text: 'Another must-see is Cottesloe Beach, ' },
          { type: 'grammar', text: 'often called Perth’s postcard beach', gid: 'G1' },
          { type: 'text', text: '. Just a 20-minute drive from the city center, the beach has been loved by locals for more than 100 years. Swim, surf, stroll on the sand or dine on fresh seafood while looking out over the Indian Ocean.' }
        ],
        [
          { type: 'text', text: 'Back in Perth, visit the Bell Tower, famous for its glass and copper sail-like design. Housing 18 bells, it is one of the few places in the world where people can watch bell ringing.' }
        ],
        [ { type: 'text', text: 'Day 2' } ],
        [
          { type: 'text', text: 'Perth offers plenty more to explore. The historic ' },
          { type: 'vocab', text: 'arcade', vid: 4 },
          { type: 'text', text: ' of London Court looks like something straight out of Merry Old England. Enjoy a coffee or ice cream and browse in the little shops. Don’t miss the fancy mechanical clocks at both ends of the arcade, with moving figures inspired by historic English scenes.' }
        ],
        [
          { type: 'text', text: 'Another popular place to visit is the Perth Zoo, which offers a close-up look at animals from around the world as well as some of Australia’s unique ' },
          { type: 'vocab', text: 'wildlife', vid: 5 },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'See one of these creatures in the wild by taking a short ferry ride to Rottnest Island. It’s famous for its friendly residents: the charming quokka. These pint-sized ' },
          { type: 'vocab', text: 'marsupials', vid: 6 },
          { type: 'text', text: ' are often called the happiest animals on Earth because of their friendly, smile-like facial expressions. Visitors love taking photos with them. The island is also great for ' },
          { type: 'vocab', text: 'adventure', vid: 7 },
          { type: 'text', text: '. You can try glass-bottom boating or stay overnight in the simple tents at Pinky Beach, ' },
          { type: 'grammar', text: 'falling asleep to the sound of waves brushing the shore', gid: 'G2' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'Perth may not always be the first place people think of when planning an Australian adventure. But some travelers do visit Perth, ' },
          { type: 'pattern', text: 'only to discover it is one of Australia’s most surprising destinations', pid: 'P1' },
          { type: 'text', text: '.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Don't ______ the small details; they can make a huge difference in the final result.", options: ["A. overlook", "B. donate", "C. diagnose", "D. rehearse"], answer: "A", explanation: "【選項解析】\n- (A) overlook (v.) 忽略 (正解)\n- (B) donate (v.) 捐贈\n- (C) diagnose (v.) 診斷\n- (D) rehearse (v.) 排練" },
      { id: 2, question: "The sunset over the mountains was absolutely ______, painting the sky in shades of orange and pink.", options: ["A. gorgeous", "B. contagious", "C. deceptive", "D. vulnerable"], answer: "A", explanation: "【選項解析】\n- (A) gorgeous (adj.) 美極了的 (正解)\n- (B) contagious (adj.) 傳染性的\n- (C) deceptive (adj.) 欺騙性的\n- (D) vulnerable (adj.) 脆弱的" },
      { id: 3, question: "The old shopping ______ was lined with tiny boutiques selling handmade jewelry.", options: ["A. arcade", "B. landfill", "C. dump", "D. spectrum"], answer: "A", explanation: "【選項解析】\n- (A) arcade (n.) 拱廊街、商場 (正解)\n- (B) landfill (n.) 垃圾掩埋場\n- (C) dump (n.) 垃圾場\n- (D) spectrum (n.) 範圍" },
      { id: 4, question: "Climbing the tallest peak in the region turned into the ______ of their entire trip.", options: ["A. adventure", "B. donation", "C. consultation", "D. procedure"], answer: "A", explanation: "【選項解析】\n- (A) adventure (n.) 冒險 (正解)\n- (B) donation (n.) 捐贈\n- (C) consultation (n.) 諮詢\n- (D) procedure (n.) 手術、程序" }
    ],
    cloze: {
      text: "Perth rarely appears at the top of most travelers' must-see lists, [1] it arguably deserves to. Compared [2] Sydney or Melbourne, the city receives relatively little international attention, even though it offers beaches, wildlife and historic architecture within a short distance of each other. Visitors [3] make the trip are often surprised by how much the city has to offer. From snorkeling at a quiet cove [4] photographing a famously cheerful marsupial, Perth packs a wide variety of experiences into a single destination. Travel writers increasingly argue that Perth's relative lack of fame is exactly [5] makes it worth visiting.",
      questions: [
        { id: 1, options: ["A. although", "B. because", "C. unless", "D. since"], answer: "A", explanation: "although 引導讓步子句，表「儘管」，與前面的陳述形成對比。" },
        { id: 2, options: ["A. to", "B. by", "C. for", "D. at"], answer: "A", explanation: "compare A to B 表「將A與B比較」，固定搭配介系詞 to。" },
        { id: 3, options: ["A. who", "B. which", "C. whom", "D. whose"], answer: "A", explanation: "先行詞 Visitors 為人，who 在子句中作主詞，引導限定關係子句。" },
        { id: 4, options: ["A. to", "B. for", "C. at", "D. with"], answer: "A", explanation: "from A to B 表「從A到B」，用於列舉一系列經驗或範圍。" },
        { id: 5, options: ["A. what", "B. that", "C. which", "D. who"], answer: "A", explanation: "what 引導名詞子句，作 is 的主詞，相當於 the thing that。" }
      ]
    },
    wordBank: {
      words: ["(A) coastline", "(B) getaway", "(C) landmark", "(D) laid-back", "(E) scenic", "(F) showcase", "(G) stroll", "(H) underrated", "(I) unwind", "(J) venture"],
      passage: "Ask most travelers to name Australia's top destinations, and Perth rarely makes the list. Sydney's opera house and Melbourne's laneways tend to dominate the conversation, leaving this sunny western city strangely [1] by comparison.\n\nYet Perth offers exactly the kind of relaxed, [2] pace many travelers say they are searching for. Along its long [3], visitors can [4] past quiet coves, spend an afternoon at a café or simply [5] on a beach without ever feeling rushed.\n\nThe city also makes an ideal base for day trips. Adventurous travelers can [6] out to nearby islands, historic arcades or wildlife parks, each offering a slightly different side of Western Australia.\n\nPerth's most famous [7], the sail-shaped Bell Tower, draws visitors curious to watch its bells ring in person, a rare experience found in few other cities worldwide. Meanwhile, smaller museums and galleries [8] the region's unique history without the crowds found in larger capital cities.\n\nFor travelers planning a longer Australian itinerary, Perth makes a practical and memorable weekend [9]. Those willing to look past the more famous cities may find that this [10] corner of the country offers some of the country's most rewarding surprises.",
      answers: { 1: "H", 2: "D", 3: "A", 4: "G", 5: "I", 6: "J", 7: "C", 8: "F", 9: "B", 10: "E" }
    },
    discourse: {
      options: [
        "A. Its relative distance from Australia's eastern cities has, ironically, helped keep the region feeling uncrowded and unspoiled.",
        "B. Every visitor to Western Australia is legally required to see a quokka before leaving the country.",
        "C. Its pristine beaches and calm, protected coves rival any coastline found on the country's more famous east coast.",
        "D. Nearby Rottnest Island offers an entirely different kind of charm, centered around a famously cheerful little marsupial.",
        "E. From colonial-era arcades to a striking modern bell tower, the city center rewards visitors willing to explore on foot."
      ],
      paragraphs: [
        "While Sydney and Melbourne dominate most conversations about Australian travel, the western city of Perth quietly offers an entirely different kind of appeal.",
        "Perth sits far from the country's eastern hubs, closer to Southeast Asia than to Sydney. [1]",
        "[2] [3] Beyond the water, downtown Perth has its own architectural charm.",
        "A short ferry ride away, the adventure continues. [4] For many travelers, that island alone is worth the entire trip to Western Australia."
      ],
      answers: { 1: "A", 2: "C", 3: "E", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this article mainly about?", options: ["A. A ranking of Australia's most dangerous cities", "B. A travel guide introducing Perth's beaches, landmarks and nearby attractions", "C. A history of British colonization in Australia", "D. A scientific study of quokka behavior"], answer: "B", explanation: "主旨題。全文介紹伯斯的海灘、地標與周邊景點，屬旅遊介紹文章。" },
        { id: 2, question: "According to the article, what makes Mettams Pool special?", options: ["A. It is the largest beach in Australia", "B. It is a sheltered area perfect for snorkeling", "C. It only allows swimming at night", "D. It is located inside the Perth Zoo"], answer: "B", explanation: "細節題。文中提到梅塔姆斯池是一處適合浮潛的隱蔽海灣。" },
        { id: 3, question: "Why are quokkas often called “the happiest animals on Earth,” according to the article?", options: ["A. Because they can perform tricks for tourists", "B. Because of their friendly, smile-like facial expressions", "C. Because they live only on Rottnest Island", "D. Because they are the largest marsupials in Australia"], answer: "B", explanation: "細節題。文中提到短尾矮袋鼠因友善、彷彿總在微笑的臉部表情，而被稱為地球上最快樂的動物。" },
        { id: 4, question: "What is the overall tone of this article toward Perth as a travel destination?", options: ["A. Critical and discouraging", "B. Neutral and purely factual", "C. Positive, suggesting Perth is an underrated destination worth visiting", "D. Warning readers to avoid visiting Perth"], answer: "C", explanation: "推論題。全文多次強調伯斯常被忽略卻值得造訪，並稱其為澳洲最令人驚豔的目的地之一，語氣正面，鼓勵讀者前往。" }
      ]
    }
  }
};
if (typeof window !== 'undefined') { window.MAGAZINE_UNITS_SC202509 = MAGAZINE_UNITS_SC202509; }
