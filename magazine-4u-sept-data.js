// 空中美語 4U 9月號 — 全部 Unit 皆為原磁誌已完整製作的內容（非 Claude 原創產製），直接轉檔自 4u_9.tsx。
const MAGAZINE_UNITS_4U202509 = {
  "Unit 1": {
    title: "A Look at Opera and Musicals",
    chineseTitle: "當歌聲遇上劇情——認識歌劇與音樂劇",
    passage: `Day 1\nOpera and musicals are both dramatic stage performances that combine music and storytelling. However, their history and style set them apart. To find out the differences between these two, let's first look into the world of opera.\n\nOpera started in Italy about 400 years ago. It usually takes place in opera houses and is a very important part of classical music. In a traditional opera, the actors tell the story by singing most of their lines. There is almost no spoken dialogue. Opera later became popular in France and Germany, too. That is why many famous operas today are sung in Italian, French, or German.\n\nThe focus of opera is primarily on music and vocal power. The composer plays a central role because the music drives the entire show. Singers must also be highly skilled because they need to project their voices over a full orchestra without microphones.\n\nDay 2\nMusicals, however, are different. They are a modern type of show from the 19th century. These shows developed from entertaining stage plays and popular songs. In a musical, the actors both speak and sing. They sing at important moments—for example, when the story becomes emotionally intense.\n\nUnlike opera, musical performers usually use microphones. This helps the audience hear them clearly over the music. It also allows these performers to use varied singing styles. Audiences might hear styles like pop, rock, or even hip-hop during the performance.\n\nDancing is also a key part of a musical. Performers often need to act, dance, and sing well. Actors with these three skills are often called "triple threats" in show business.\n\nIn conclusion, opera is mainly about classical singing and music, but musicals blend speaking, singing, and dancing. Still, both styles share the same purpose: they use great music and performance to tell a story.`,
    chineseTranslation: `【第 1 天】\n歌劇與音樂劇皆為結合音樂與敘事的戲劇性舞台演出。然而，兩者的歷史淵源與藝術風格大相逕庭。若要探究其間差異，不妨先走進歌劇的世界。\n歌劇約四百年前起源於義大利，通常在專門的歌劇院上演，是古典音樂極為重要的基石。在傳統歌劇中，演員幾乎全程以歌唱交代台詞，全劇幾無口語對白。歌劇隨後在法德風靡開來，這正是為何今日眾多傳世歌劇多以義語、法語或德語演唱。\n歌劇的重心主要在於音樂本身與人聲的穿透力。作曲家扮演核心樞紐，由音符引領整齣大戲。歌唱家更須技藝純熟，在不借助麥克風的情況下，將聲浪投射至管弦樂團之上。\n\n【第 2 天】\n然而音樂劇截然不同，是誕生於十九世紀的現代劇種，由富娛樂性的舞台短劇與通俗歌曲演化而來。在音樂劇中，演員兼具說白與唱段，通常於劇情張力最濃烈處引吭高歌。\n有別於歌劇，音樂劇演員通常配戴麥克風，讓觀眾在伴奏中清晰聽清唱腔，並容許演員變換流行、搖滾甚至嘻哈等多樣聲線。\n舞蹈亦為音樂劇靈魂所在，演員往往需兼備演、唱、跳三項才能，演藝圈稱其為「三棲全才（triple threats）」。\n總括而言，歌劇側重古典美聲，音樂劇則融會說、唱、跳。兩者本質殊途同歸：皆以精彩音樂與精湛演藝，為世人講述動人篇章。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "dramatic", pos: "adj.", meaning: "戲劇性的、引人注目的", collocations: "dramatic performances 戲劇演出" },
        { id: 2, word: "dialogue", pos: "n.", meaning: "對話、對白", collocations: "spoken dialogue 口語對白" },
        { id: 3, word: "primarily", pos: "adv.", meaning: "主要地、首要地", collocations: "focus primarily on... 主要聚焦於..." },
        { id: 4, word: "project", pos: "v.", meaning: "投射、發出(聲音)", collocations: "project one's voice 投射聲量" },
        { id: 5, word: "intense", pos: "adj.", meaning: "強烈的、熱烈的", collocations: "emotionally intense 情緒張力強烈的" },
        { id: 6, word: "varied", pos: "adj.", meaning: "各式各樣的、多變的", collocations: "varied singing styles 多樣演唱風格" }
      ],
      grammarNotes: [
        { id: "G1", title: "set A apart (使 A 與眾不同/脫穎而出)", excerpt: "their history and style set them apart", analysis: "動詞片語 set apart 表「區分、使出類拔萃」，受詞 them 夾在中間。" },
        { id: "G2", title: "That is why + S. + V. (這就是為什麼...)", excerpt: "That is why many famous operas today are sung", analysis: "that 代表前句所述背景原因，why 引導名詞子句作表語。" }
      ],
      patternNotes: [
        { id: "P1", title: "not only... but (also)... / A, but B (對比結構)", excerpt: "opera is mainly about classical singing and music, but musicals blend speaking, singing, and dancing", analysis: "連接詞 but 連接兩子句，凸顯傳統古典美聲與現代多元演出的鮮明對比。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'Opera and musicals are both ' },
          { type: 'vocab', text: 'dramatic', vid: 1 },
          { type: 'text', text: ' stage performances that combine music and storytelling. However, ' },
          { type: 'grammar', text: 'their history and style set them apart', gid: 'G1' },
          { type: 'text', text: '. To find out the differences between these two, let\'s first look into the world of opera.' }
        ],
        [
          { type: 'text', text: 'Opera started in Italy about 400 years ago. It usually takes place in opera houses and is a very important part of classical music. In a traditional opera, the actors tell the story by singing most of their lines. There is almost no spoken ' },
          { type: 'vocab', text: 'dialogue', vid: 2 },
          { type: 'text', text: '. Opera later became popular in France and Germany, too. ' },
          { type: 'grammar', text: 'That is why many famous operas today are sung', gid: 'G2' },
          { type: 'text', text: ' in Italian, French, or German.' }
        ],
        [
          { type: 'text', text: 'The focus of opera is ' },
          { type: 'vocab', text: 'primarily', vid: 3 },
          { type: 'text', text: ' on music and vocal power. The composer plays a central role because the music drives the entire show. Singers must also be highly skilled because they need to ' },
          { type: 'vocab', text: 'project', vid: 4 },
          { type: 'text', text: ' their voices over a full orchestra without microphones.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Musicals, however, are different. They are a modern type of show from the 19th century. These shows developed from entertaining stage plays and popular songs. In a musical, the actors both speak and sing. They sing at important moments—for example, when the story becomes emotionally ' },
          { type: 'vocab', text: 'intense', vid: 5 },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'Unlike opera, musical performers usually use microphones. This helps the audience hear them clearly over the music. It also allows these performers to use ' },
          { type: 'vocab', text: 'varied', vid: 6 },
          { type: 'text', text: ' singing styles. Audiences might hear styles like pop, rock, or even hip-hop during the performance.' }
        ],
        [
          { type: 'text', text: 'Dancing is also a key part of a musical. Performers often need to act, dance, and sing well. Actors with these three skills are often called "triple threats" in show business.' }
        ],
        [
          { type: 'pattern', text: 'opera is mainly about classical singing and music, but musicals blend speaking, singing, and dancing', pid: 'P1' },
          { type: 'text', text: '. Still, both styles share the same purpose: they use great music and performance to tell a story.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Without any audio amplification, classical opera soloists must ______ their powerful voices to the balcony.", options: ["A. project", "B. ignore", "C. inspect", "D. damage"], answer: "A", explanation: "【選項解析】\n- (A) project (v.) 投射、使聲音傳遠 (正解)\n- (B) ignore (v.) 忽視、不理睬\n- (C) inspect (v.) 檢查、視察\n- (D) damage (v.) 損害、破壞" },
      { id: 2, question: "The screenplay featured witty, natural ______ between the two estranged siblings.", options: ["A. dialogue", "B. obstacle", "C. texture", "D. category"], answer: "A", explanation: "【選項解析】\n- (A) dialogue (n.) 對白、對話 (正解)\n- (B) obstacle (n.) 障礙物\n- (C) texture (n.) 質地、手感\n- (D) category (n.) 類別、範疇" },
      { id: 3, question: "During the final act, the protagonist delivered an emotionally ______ monologue that moved everyone.", options: ["A. intense", "B. trivial", "C. frozen", "D. greedy"], answer: "A", explanation: "【選項解析】\n- (A) intense (adj.) 強烈的、激昂的 (正解)\n- (B) trivial (adj.) 瑣碎微不足道的\n- (C) frozen (adj.) 冷凍的\n- (D) greedy (adj.) 貪婪的" },
      { id: 4, question: "The international jazz festival showcased ______ musical arrangements from global composers.", options: ["A. varied", "B. clumsy", "C. modest", "D. dull"], answer: "A", explanation: "【選項解析】\n- (A) varied (adj.) 多樣的、各式各樣的 (正解)\n- (B) clumsy (adj.) 笨拙的\n- (C) modest (adj.) 謙虛的、適度的\n- (D) dull (adj.) 乏味的" }
    ],
    cloze: {
      text: "Although opera and musicals both unite theatrical drama with music, substantial stylistic contrasts distinguish them. Originating in Renaissance Italy, traditional opera relies almost [1] on continuous singing, entirely omitting spoken dialogue. Soloists must project their voices over roaring orchestras [2] electronic microphones. Conversely, the musical emerged during the 19th century as popular entertainment. Stage actors alternate smoothly [3] spoken lines and energetic showtunes. Furthermore, modern productions employ microphones, [4] casts to explore rock and hip-hop techniques. Performers mastering acting, vocalization, and choreography [5] as 'triple threats' in the theatrical sphere.",
      questions: [
        { id: 1, options: ["A. exclusively", "B. casually", "C. rarely", "D. temporarily"], answer: "A", explanation: "幾乎全然依賴歌唱，選副詞 exclusively（專門地、純粹地）。" },
        { id: 2, options: ["A. without", "B. through", "C. beside", "D. against"], answer: "A", explanation: "without microphones 在無麥克風的情形下。" },
        { id: 3, options: ["A. between", "B. among", "C. across", "D. inside"], answer: "A", explanation: "alternate between A and B 在兩者之間交替切換。" },
        { id: 4, options: ["A. enabling", "B. enabled", "C. to enable", "D. enable"], answer: "A", explanation: "分詞構句表伴隨結果，主動賦予演員能力用 enabling。" },
        { id: 5, options: ["A. are known", "B. have known", "C. knowing", "D. to be known"], answer: "A", explanation: "演員被稱作三棲人才，被動語態 are known as。" }
      ]
    },
    wordBank: {
      words: ["(A) blend", "(B) dialogue", "(C) dramatic", "(D) intense", "(E) microphones", "(F) orchestra", "(G) project", "(H) purpose", "(I) storytelling", "(J) varied"],
      passage: "Theatrical history presents two grand traditions combining melodies and [1]. Classical opera emphasizes raw vocal resonance, demanding that performers [2] powerful sound above a symphony [3]. Traditional plots advance with almost zero conversational [4]. In contrast, Broadway musicals incorporate spoken scenes, reserving songs for [5] moments of crisis. Performers routinely sing through sensitive [6], which lets them interpret [7] vocal genres such as pop and jazz. While modern musicals [8] choreographic spectacles with spoken acting, both [9] art forms fulfill the identical [10]: touching human hearts through drama.",
      answers: { 1: "I", 2: "G", 3: "F", 4: "B", 5: "D", 6: "E", 7: "J", 8: "A", 9: "C", 10: "H" }
    },
    discourse: {
      options: [
        "A. Operatic vocalists are required to project natural sound across auditoriums without amplification.",
        "B. They immediately cancelled all Broadway seasons to reconstruct ancient Italian theaters.",
        "C. Musicals, emerging centuries later, incorporated popular genres and spoken comedic dialogue.",
        "D. Both art forms utilize acoustic harmonies to narrate intricate dramatic plots on stage.",
        "E. Performers excelling simultaneously in singing, dancing, and theatrical acting are revered as triple threats."
      ],
      paragraphs: [
        "Opera and musicals remain two of the world's most enduring and widely appreciated performing traditions. [1]",
        "Opera trace its roots back to 17th-century Italian concert halls, placing primacy upon composer-led classical vocal mastery. [2] There is virtually no spoken speech, as melodies sustain continuous storytelling.",
        "[3] Performers rely upon discreet personal microphones, enabling delicate dynamic shifts between speech, rock, and jazz vocals.",
        "Dance forms another pillar of musical theater, demanding rigorous choreography across energetic ensemble scenes. [4]"
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What represents a fundamental operational distinction between traditional opera and Broadway musicals?", options: ["A. Opera is exclusively performed outdoors on street corners", "B. Opera relies almost entirely on singing without spoken dialogue, while musicals mix speech and song", "C. Musicals strictly forbid the usage of sound microphones", "D. Opera performers must improvise all their melodies onstage"], answer: "B", explanation: "細節題。第一天指出歌劇全劇幾乎以歌唱交代台詞、幾無對白，音樂劇則說唱兼備。" },
        { id: 2, question: "Why do musical performers routinely utilize body microphones?", options: ["A. To conceal forgotten song lyrics from the orchestra", "B. To allow subtle vocal variety and clarity over diverse instrumentation", "C. Because modern theaters no longer build stage curtains", "D. To record private conversations between stage acts"], answer: "B", explanation: "細節題。第二天提到麥克風幫助觀眾聽清歌詞，並容許歌手採用流行、搖滾等多元唱腔。" },
        { id: 3, question: "In theater terminology, what does the phrase 'triple threat' designate?", options: ["A. A dangerous physical stunt performed from the ceiling", "B. An actor who excels simultaneously in acting, dancing, and singing", "C. A harsh negative review by theater critics", "D. A performance that lasts over three consecutive days"], answer: "B", explanation: "細節題。第二天指出演、唱、跳兼備的藝人在演藝界被尊稱為 triple threats。" },
        { id: 4, question: "Which primary language is NOT listed as a common historical language for famous operas?", options: ["A. Italian", "B. French", "C. German", "D. Japanese"], answer: "D", explanation: "細節題。第一天載明日語並非著名古典歌劇的三大傳統語言（義大利語、法語、德語）。" }
      ]
    }
  },

  "Unit 2": {
    title: "The Island on Two Wheels: Inside Taiwan's Scooter Culture",
    chineseTitle: "兩輪上的臺灣日常 機車文化的過去與現在",
    passage: `Day 1\nWalk down any street in Taiwan, and you will quickly notice one thing: scooters are everywhere. They wait at traffic lights, fill parking spaces, and buzz through city streets from morning to night.\n\nScooters are a common sight across Taiwan. As of early 2025, the country had over 14.6 million registered scooters—about 63 for every 100 people. One big reason is convenience. Cars often get stuck in traffic, but scooters can weave between them or move through narrow alleys. Also, finding a parking spot for a scooter is far easier than finding one for a car.\n\nAnother reason is that scooters are more affordable. Buying and maintaining a scooter is much cheaper than owning a car. This makes scooters a popular choice for students and young workers who want independence.\n\nIn Taiwan, a scooter is more than just a vehicle; it's part of the rhythm of daily life.\n\nDay 2\nTaiwan's scooter culture took shape over time. From the Japanese colonial period (1895–1945) through the 1950s, Taiwan mainly depended on imported scooters. Owning one was often a sign of wealth. Scooters were basically out of reach for most people.\n\nThings began to change in the 1950s as Taiwan's economy grew. During this time, the government supported local industry. Companies such as Sanyang Motor began developing Taiwan's own scooter industry. Over the years, many famous models were introduced. Two of the most famous were the Sanyang Tact of the 1980s and the Dio of the 1990s. As cities grew, scooters replaced bicycles as a common choice for daily travel.\n\nTaiwan's scooter culture continues to evolve. Environmental concerns, new technology, and changing traffic policies are shaping its future. Electric scooters from brands like Gogoro are becoming more common. As Taiwan moves toward a greener future, scooters are changing, too. Yet one thing stays the same: they are still a big part of everyday life.`,
    chineseTranslation: `【第 1 天】\n漫步在台灣任何一條街頭，你很快會發現一件事：機車無處不在。它們在紅綠燈前停等、填滿路邊車格，從早到晚穿梭於大街小巷。\n機車是全台隨處可見的日常街景。截至 2025 年初，台灣登記機車數量已突破 1,460 萬輛——相當於每百人即擁有約 63 輛。便利是最大的主因：汽車常困於車陣，機車卻能在車縫中自如穿梭、遊刃於窄巷；尋找機車停車位更遠比汽車容易。\n另一關鍵在於經濟實惠。購車與後續保養成本皆遠低於汽車，使其成為追求獨立自主的青年學子與社會新鮮人的首選。\n在台灣，機車不只是一種代步工具，更是常民生活的日常脈動。\n\n【第 2 天】\n台灣的機車文化歷經歲月淬鍊成型。自日治時期至 1950 年代，台灣主要仰賴進口機車，擁有一輛往往是財富地位的象徵，多數人望塵莫及。\n1950 年代隨著經濟起飛與政府扶植本土產業，局勢迎來轉機。三陽工業等本土企業開啟了自研機車產業。歷經數十載，眾多傳奇車款應運而生，其中以 1980 年代的三陽達可達（Tact）與 1990 年代的 Dio 最具代表性。隨著城鎮擴張，機車取代自行車成為通勤主力。\n今日台灣機車文化持續蛻變。在環保意識、創新科技與交通政策引領下，如 Gogoro 等電動機車日益普及。台灣邁向綠能未來的同時，機車風貌亦在革新，但始終如一的是：它依舊是日常生活不可或缺的靈魂夥伴。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "convenience", pos: "n.", meaning: "便利、方便", collocations: "for the sake of convenience 為了方便起見" },
        { id: 2, word: "affordable", pos: "adj.", meaning: "負擔得起的、實惠的", collocations: "affordable prices 實惠的價格" },
        { id: 3, word: "colonial", pos: "adj.", meaning: "殖民地的", collocations: "colonial period 殖民統治時期" },
        { id: 4, word: "evolve", pos: "v.", meaning: "演變、發展", collocations: "continue to evolve 持續蛻變發展" }
      ],
      grammarNotes: [
        { id: "G1", title: "祈使句 + and + S. + will...", excerpt: "Walk down any street in Taiwan, and you will quickly notice one thing", analysis: "祈使句表條件，相當於 If you walk down any street..., you will..." },
        { id: "G2", title: "as 引導時間或進程副詞子句", excerpt: "As Taiwan moves toward a greener future", analysis: "as 表「隨著...」，表達綠能發展與機車演化並進的動態過程。" }
      ],
      patternNotes: [
        { id: "P1", title: "more than just + N. (不僅僅只是...)", excerpt: "a scooter is more than just a vehicle", analysis: "強調機車在台灣文化中的非凡象徵，超越純粹的交通工具定義。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'grammar', text: 'Walk down any street in Taiwan, and you will quickly notice one thing', gid: 'G1' },
          { type: 'text', text: ': scooters are everywhere. They wait at traffic lights, fill parking spaces, and buzz through city streets from morning to night.' }
        ],
        [
          { type: 'text', text: 'Scooters are a common sight across Taiwan. As of early 2025, the country had over 14.6 million registered scooters—about 63 for every 100 people. One big reason is ' },
          { type: 'vocab', text: 'convenience', vid: 1 },
          { type: 'text', text: '. Cars often get stuck in traffic, but scooters can weave between them or move through narrow alleys. Also, finding a parking spot for a scooter is far easier than finding one for a car.' }
        ],
        [
          { type: 'text', text: 'Another reason is that scooters are more ' },
          { type: 'vocab', text: 'affordable', vid: 2 },
          { type: 'text', text: '. Buying and maintaining a scooter is much cheaper than owning a car. This makes scooters a popular choice for students and young workers who want independence.' }
        ],
        [
          { type: 'text', text: 'In Taiwan, ' },
          { type: 'pattern', text: 'a scooter is more than just a vehicle', pid: 'P1' },
          { type: 'text', text: '; it\'s part of the rhythm of daily life.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Taiwan\'s scooter culture took shape over time. From the Japanese ' },
          { type: 'vocab', text: 'colonial', vid: 3 },
          { type: 'text', text: ' period (1895–1945) through the 1950s, Taiwan mainly depended on imported scooters. Owning one was often a sign of wealth. Scooters were basically out of reach for most people.' }
        ],
        [
          { type: 'text', text: 'Things began to change in the 1950s as Taiwan\'s economy grew. During this time, the government supported local industry. Companies such as Sanyang Motor began developing Taiwan\'s own scooter industry. Over the years, many famous models were introduced. Two of the most famous were the Sanyang Tact of the 1980s and the Dio of the 1990s. As cities grew, scooters replaced bicycles as a common choice for daily travel.' }
        ],
        [
          { type: 'text', text: 'Taiwan\'s scooter culture continues to ' },
          { type: 'vocab', text: 'evolve', vid: 4 },
          { type: 'text', text: '. Environmental concerns, new technology, and changing traffic policies are shaping its future. Electric scooters from brands like Gogoro are becoming more common. ' },
          { type: 'grammar', text: 'As Taiwan moves toward a greener future', gid: 'G2' },
          { type: 'text', text: ', scooters are changing, too. Yet one thing stays the same: they are still a big part of everyday life.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Compact city apartments offer tremendous urban ______ for commuters living near metro lines.", options: ["A. convenience", "B. obstacle", "C. suspicion", "D. disaster"], answer: "A", explanation: "【選項解析】\n- (A) convenience (n.) 便利性 (正解)\n- (B) obstacle (n.) 阻礙、障礙\n- (C) suspicion (n.) 懷疑、嫌疑\n- (D) disaster (n.) 災難、浩劫" },
      { id: 2, question: "Electric two-wheelers provide an ______ alternative to costly automobiles for students.", options: ["A. affordable", "B. aggressive", "C. arrogant", "D. awkward"], answer: "A", explanation: "【選項解析】\n- (A) affordable (adj.) 負擔得起的、平價的 (正解)\n- (B) aggressive (adj.) 好鬥的、侵略性的\n- (C) arrogant (adj.) 傲慢自大的\n- (D) awkward (adj.) 尷尬笨拙的" },
      { id: 3, question: "Historical relics preserved from the Japanese ______ era are exhibited in the city hall.", options: ["A. colonial", "B. synthetic", "C. frozen", "D. hostile"], answer: "A", explanation: "【選項解析】\n- (A) colonial (adj.) 殖民統治的 (正解)\n- (B) synthetic (adj.) 合成的、人造的\n- (C) frozen (adj.) 冷凍冰結的\n- (D) hostile (adj.) 懷有敵意的" },
      { id: 4, question: "Urban transportation networks must continually ______ to meet carbon reduction goals.", options: ["A. evolve", "B. vanish", "C. forfeit", "D. disrupt"], answer: "A", explanation: "【選項解析】\n- (A) evolve (v.) 演化、逐步發展 (正解)\n- (B) vanish (v.) 憑空消逝\n- (C) forfeit (v.) 喪失、被沒收\n- (D) disrupt (v.) 擾亂、打斷" }
    ],
    cloze: {
      text: "With over 14 million registered motorbikes, Taiwan possesses an unparalleled two-wheeled landscape. Scooters afford citizens extraordinary mobility, allowing riders to maneuver [1] crowded alleys where larger vehicles stall. Furthermore, purchasing and maintaining them remains far more economical than [2] a passenger car. Historically, scooters represented luxury imports [3] only wealthy elites could afford. However, domestic manufacturing took off during post-war modernization, [4] icons like the Sanyang Tact. Today, battery-swapping networks [5] Taiwan's fleet toward clean electric mobility without dampening daily convenience.",
      questions: [
        { id: 1, options: ["A. through", "B. beneath", "C. against", "D. outside"], answer: "A", explanation: "穿梭貫穿窄巷，用介系詞 through。" },
        { id: 2, options: ["A. owning", "B. owned", "C. own", "D. owner"], answer: "A", explanation: "than 比較對等結構，前面為 purchasing and maintaining，故用 owning。" },
        { id: 3, options: ["A. that", "B. what", "C. whom", "D. where"], answer: "A", explanation: "關係代名詞 that 作 afford 的受詞，修飾先行詞 luxury imports。" },
        { id: 4, options: ["A. producing", "B. produced", "C. to produce", "D. produces"], answer: "A", explanation: "分詞構句表自然結果，主動誕生名車用 producing。" },
        { id: 5, options: ["A. are steering", "B. will steer", "C. steered", "D. have steered"], answer: "A", explanation: "現在進行式 are steering 表示正在引領變革。" }
      ]
    },
    wordBank: {
      words: ["(A) affordable", "(B) alleys", "(C) colonial", "(D) convenience", "(E) electric", "(F) evolve", "(G) imported", "(H) mobility", "(I) registered", "(J) replaced"],
      passage: "The pervasive hum of scooters defines Taiwan's metropolitan rhythm. Boasting millions of [1] vehicles, riders celebrate the unmatched [2] of slicing through congestion and parking in snug [3]. For younger demographics seeking independent [4], scooters supply an extremely [5] option. During the Japanese [6] era, motorbikes remained scarce [7] luxuries. Post-war industrial policy transformed manufacturing, and two-wheelers gradually [8] pedal bicycles. Contemporary urban plans compel scooter culture to [9] alongside green technology, accelerating the adoption of silent [10] smart scooters across the nation.",
      answers: { 1: "I", 2: "D", 3: "B", 4: "H", 5: "A", 6: "C", 7: "G", 8: "J", 9: "F", 10: "E" }
    },
    discourse: {
      options: [
        "A. From the 1950s onward, government support helped domestic companies manufacture iconic local models.",
        "B. They completely banned all gasoline-powered vehicles across the entire island in 1910.",
        "C. Dense urban geography and economic practicality make scooters the undisputed king of local transportation.",
        "D. Today, smart battery-swapping networks and electric brands are leading the transition toward a greener tomorrow.",
        "E. During earlier colonial decades, imported scooters remained rare luxuries far out of ordinary reach."
      ],
      paragraphs: [
        "Two-wheeled vehicles weave seamlessly through every urban artery and rural alleyway across Taiwan. [1]",
        "Navigating dense city blocks and locating parking spaces proves vastly simpler on a scooter than in an automobile. Furthermore, lower purchase prices and modest maintenance fuel their mass popularity.",
        "The historical journey of Taiwan's motorbikes reflects wider national economic development. [2] [3] Renowned models like the Sanyang Tact and Dio soon transformed millions of daily commutes.",
        "As global environmental considerations mount, Taiwan's scooter culture embarks on a clean-energy evolution. [4]"
      ],
      answers: { 1: "C", 2: "E", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "According to statistical figures in Day 1, what was Taiwan's approximate scooter density by early 2025?", options: ["A. 15 scooters for every 1,000 citizens", "B. About 63 registered scooters for every 100 people", "C. Precisely one scooter per household", "D. Fewer than 5 million vehicles in total"], answer: "B", explanation: "細節題。第一天指出 2025 年初台灣登記機車超過 1,460 萬輛，約每百人擁有 63 輛。" },
        { id: 2, question: "Why were motorbikes largely inaccessible to everyday Taiwanese citizens prior to the 1950s?", options: ["A. Scooters were legally prohibited on all public roads", "B. Taiwan lacked petroleum fuel entirely", "C. Scooters had to be imported and were viewed as status symbols of extreme wealth", "D. Bicycles were compulsory for all citizens by imperial decree"], answer: "C", explanation: "細節題。第二天提到 1950 年代前主要仰賴進口，擁有一部機車是財富象徵，常人難以企及。" },
        { id: 3, question: "Which two iconic scooter models highlighted Taiwan's flourishing domestic motorcycle boom in the 1980s and 1990s?", options: ["A. Sanyang Tact and Dio", "B. Vespa Sprint and Primavera", "C. Yamaha Cygnus and BWS", "D. Gogoro Delight and Viva"], answer: "A", explanation: "細節題。第二天明確列舉 1980 年代的三陽達可達（Tact）與 1990 年代的 Dio。" },
        { id: 4, question: "What modern trend is actively reshaping the ecological footprint of Taiwan's scooter culture?", options: ["A. Constructing underground highway tunnels exclusively for diesel trucks", "B. The expanding emergence of electric scooters from brands like Gogoro", "C. Returning universally to wooden pedal bicycles", "D. Limiting vehicle ownership to drivers over sixty years old"], answer: "B", explanation: "細節題。文末指出如 Gogoro 等電動機車隨著綠能政策與科技進步正重塑機車未來。" }
      ]
    }
  },

  "News 1": {
    title: "AI Makes a Scene! Seedance 2.0 Raises Rights Questions",
    chineseTitle: "AI 大導演登場！Seedance 2.0 引發權益討論",
    passage: `Many AI tools can now create videos from just a short text prompt. Earlier tools were limited to low-quality, silent clips. Now, newer systems are moving toward audiovisual storytelling. One example is Seedance 2.0, an AI video generator from the Chinese company ByteDance.\n\nSeedance 2.0 stands out for its multimodal design. Beyond text, it accepts images, video clips, and audio clips as references. It can also generate synchronized sound and dialogue that match the video. This makes it useful for ads and short films. For small companies, it could make video production faster and cheaper.\n\nHowever, Seedance 2.0 has also caused serious concerns. Some viral clips made with Seedance 2.0 appeared to show famous actors like Tom Cruise. Others featured copyrighted characters, such as Spider-Man and Darth Vader. Disney, Paramount, and other major film and TV studios accused ByteDance of allowing copyrighted material to be used without permission. In response, ByteDance said it respects copyright and would work harder to stop misuse.\n\nThis copyright dispute shows how quickly AI video is changing. In the future, governments, AI companies, and creators will need clearer rules and licensing deals. How to support new technology without harming human creators is a question the world is still trying to answer.`,
    chineseTranslation: `當今眾多人工智慧工具僅憑簡短文字提示即可生成影片。早期工具受限於畫質粗糙且缺乏音效，如今嶄新架構正邁向視聽整合的篇章敘事。字節跳動推出的 AI 視訊生成器「Seedance 2.0」即為代表範例。\nSeedance 2.0 以多模態設計獨樹一幟。除文字外，它兼能將圖片、影音片段作為參考素材，甚至能生成對準唇形的同步音效與口白對話，對廣告設計與微電影極具助益，大幅降低微型企業製片門檻與經費。\n然而 Seedance 2.0 亦掀起軒然大波。部分瘋傳短片赫然出現湯姆·克魯斯等巨星身影，亦有蜘蛛人、黑武士達斯·維達等受版權保護的經典角色。迪士尼、派拉蒙等好萊塢影業巨頭嚴厲指控字節跳動放任未經授權侵害智財權。字節跳動回應稱尊重版權，承諾嚴防濫用。\n此場版權風暴揭示了生成式 AI 狂飆的演進速度。未來產官學界亟需更明晰的法規準則與授權機制。如何在扶植創新科技之際不傷及人類創作者的心血，是全球戮力尋求解方的重大課題。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "generator", pos: "n.", meaning: "生成器、發電機", collocations: "AI video generator AI 影片生成器" },
        { id: 2, word: "multimodal", pos: "adj.", meaning: "多模態的(結合文字、影像與聲音)", collocations: "multimodal design 多模態設計" },
        { id: 3, word: "synchronized", pos: "adj.", meaning: "同步的", collocations: "synchronized sound 同步音效" },
        { id: 4, word: "copyrighted", pos: "adj.", meaning: "受版權保護的", collocations: "copyrighted characters 具版權角色" },
        { id: 5, word: "licensing", pos: "n.", meaning: "授權許可", collocations: "licensing deals 授權協議" }
      ],
      grammarNotes: [
        { id: "G1", title: "accuse A of B (指控 A 做了 B)", excerpt: "accused ByteDance of allowing copyrighted material to be used", analysis: "動詞 accuse 接受詞後，需搭配介系詞 of 接動名詞 allowing。" }
      ],
      patternNotes: [
        { id: "P1", title: "without + V-ing (在不...的情況下)", excerpt: "without harming human creators", analysis: "without 作介系詞引導動名詞，強調科技發展不應犧牲人類心血。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'Many AI tools can now create videos from just a short text prompt. Earlier tools were limited to low-quality, silent clips. Now, newer systems are moving toward audiovisual storytelling. One example is Seedance 2.0, an AI video ' },
          { type: 'vocab', text: 'generator', vid: 1 },
          { type: 'text', text: ' from the Chinese company ByteDance.' }
        ],
        [
          { type: 'text', text: 'Seedance 2.0 stands out for its ' },
          { type: 'vocab', text: 'multimodal', vid: 2 },
          { type: 'text', text: ' design. Beyond text, it accepts images, video clips, and audio clips as references. It can also generate ' },
          { type: 'vocab', text: 'synchronized', vid: 3 },
          { type: 'text', text: ' sound and dialogue that match the video. This makes it useful for ads and short films. For small companies, it could make video production faster and cheaper.' }
        ],
        [
          { type: 'text', text: 'However, Seedance 2.0 has also caused serious concerns. Some viral clips made with Seedance 2.0 appeared to show famous actors like Tom Cruise. Others featured ' },
          { type: 'vocab', text: 'copyrighted', vid: 4 },
          { type: 'text', text: ' characters, such as Spider-Man and Darth Vader. Disney, Paramount, and other major film and TV studios ' },
          { type: 'grammar', text: 'accused ByteDance of allowing copyrighted material to be used', gid: 'G1' },
          { type: 'text', text: ' without permission. In response, ByteDance said it respects copyright and would work harder to stop misuse.' }
        ],
        [
          { type: 'text', text: 'This copyright dispute shows how quickly AI video is changing. In the future, governments, AI companies, and creators will need clearer rules and ' },
          { type: 'vocab', text: 'licensing', vid: 5 },
          { type: 'text', text: ' deals. How to support new technology ' },
          { type: 'pattern', text: 'without harming human creators', pid: 'P1' },
          { type: 'text', text: ' is a question the world is still trying to answer.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The high-tech studio implemented a cutting-edge audiovisual ______ capable of synthesizing cinematic scenes.", options: ["A. generator", "B. predator", "C. obstacle", "D. disaster"], answer: "A", explanation: "【選項解析】\n- (A) generator (n.) 生成器、產生裝置 (正解)\n- (B) predator (n.) 掠食者\n- (C) obstacle (n.) 阻礙障礙\n- (D) disaster (n.) 災難禍事" },
      { id: 2, question: "Modern artificial intelligence engines thrive on ______ input, processing voice, text, and imagery simultaneously.", options: ["A. multimodal", "B. primitive", "C. clumsy", "D. modest"], answer: "A", explanation: "【選項解析】\n- (A) multimodal (adj.) 多模態的 (正解)\n- (B) primitive (adj.) 原始簡陋的\n- (C) clumsy (adj.) 笨拙遲鈍的\n- (D) modest (adj.) 謙遜的、適中的" },
      { id: 3, question: "Publishing ______ intellectual property without legal permission can lead to expensive lawsuits.", options: ["A. copyrighted", "B. freezing", "C. greedy", "D. accidental"], answer: "A", explanation: "【選項解析】\n- (A) copyrighted (adj.) 受著作權保護的 (正解)\n- (B) freezing (adj.) 極度冰冷的\n- (C) greedy (adj.) 貪得無厭的\n- (D) accidental (adj.) 意外偶然的" },
      { id: 4, question: "Streaming giants negotiated lucrative content ______ agreements before expanding overseas.", options: ["A. licensing", "B. curiosity", "C. dialogue", "D. texture"], answer: "A", explanation: "【選項解析】\n- (A) licensing (n.) 授權許可 (正解)\n- (B) curiosity (n.) 好奇心\n- (C) dialogue (n.) 對白口語\n- (D) texture (n.) 質地觸感" }
    ],
    cloze: {
      text: "Generative artificial intelligence has progressed beyond static pixels into cinematic territory. ByteDance's Seedance 2.0 demonstrates this evolution [1] processing multi-format reference media including sound and motion. Unlike rudimentary past engines, it constructs synchronized audio [2] perfectly tracks spoken dialogue. Nevertheless, the software ignited international backlash after synthetic reels portrayed Hollywood stars [3] consent. Global studios formally accused the developer [4] intellectual theft. Moving forward, digital ecosystems demand robust ethical [5] to safeguard living artists.",
      questions: [
        { id: 1, options: ["A. by", "B. into", "C. with", "D. from"], answer: "A", explanation: "藉由處理多模態素材，用介系詞 by + V-ing。" },
        { id: 2, options: ["A. that", "B. what", "C. whom", "D. where"], answer: "A", explanation: "關係代名詞 that 作主詞，修飾先行詞 audio。" },
        { id: 3, options: ["A. without", "B. beyond", "C. through", "D. during"], answer: "A", explanation: "without consent 未經同意/授權。" },
        { id: 4, options: ["A. of", "B. for", "C. to", "D. against"], answer: "A", explanation: "accuse sb of sth 指控某人有某罪嫌。" },
        { id: 5, options: ["A. frameworks", "B. obstacles", "C. textures", "D. rehearsals"], answer: "A", explanation: "robust ethical frameworks 健全的道德法規架構。" }
      ]
    },
    wordBank: {
      words: ["(A) accused", "(B) audiovisual", "(C) concerns", "(D) generator", "(E) licensing", "(F) multimodal", "(G) permission", "(H) production", "(I) prompt", "(J) synchronized"],
      passage: "AI video technology can now convert a concise text [1] into sophisticated film clips. ByteDance recently introduced a cutting-edge video [2] known as Seedance 2.0. By adopting a truly [3] architecture, the system coordinates reference pictures, sound effects, and [4] speech. This dramatically accelerates marketing [5] for startup enterprises. However, ethical [6] surfaced when viral clips depicted Darth Vader without formal [7]. Major production companies [8] the firm of profiting from unauthorized intellectual property. Technologists concede that transparent [9] models are required to nurture [10] storytelling responsibly.",
      answers: { 1: "I", 2: "D", 3: "F", 4: "J", 5: "H", 6: "C", 7: "G", 8: "A", 9: "E", 10: "B" }
    },
    discourse: {
      options: [
        "A. Early AI video generators were severely limited to grainy, silent, and brief visual loops.",
        "B. They immediately shuttered all theatrical cinemas across the globe in protest.",
        "C. The sophisticated generator incorporates reference imagery and generates lipsync audio simultaneously.",
        "D. Major Hollywood studios swiftly lodged fierce legal complaints alleging rampant unauthorized copyright usage.",
        "E. Establishing clear legal licensing compacts will prove vital to protect human creators while encouraging innovation."
      ],
      paragraphs: [
        "Video-generation algorithms have leaped from rudimentary prototypes into complex cinematic engines.",
        "[1] Newer platforms, exemplified by ByteDance's Seedance 2.0, showcase extraordinary multi-sensory integration. [2] Small enterprises find these tools attractive for slashing advertising budgets.",
        "This technological leap, however, precipitated urgent legal showdowns over intellectual property rights. Viral demonstrations showcased recognizable celebrities and protected franchise icons without licensing. [3]",
        "Resolving this ideological collision demands equitable cooperation between tech pioneers and artists. [4]"
      ],
      answers: { 1: "A", 2: "C", 3: "D", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What technical feature distinguishes Seedance 2.0 from older AI video synthesis tools?", options: ["A. It prints hardcopy celluloid film reels", "B. Its multimodal capability accepts images and audio to produce synchronized speech", "C. It can only run on offline desktop calculators", "D. It exclusively generates silent black-and-white cartoons"], answer: "B", explanation: "細節題。文章第二段指出其多模態設計支援圖像、影片與音訊參考，能產出對齊嘴型的同步音訊與對白。" },
        { id: 2, question: "Why did Hollywood studios like Disney and Paramount issue fierce objections against ByteDance?", options: ["A. ByteDance bought all available cinema tickets", "B. The AI tool utilized copyrighted characters and celebrity likenesses without authorization", "C. The AI software was sold at excessively high subscription rates", "D. ByteDance refused to manufacture smartphone chips"], answer: "B", explanation: "細節題。第三段敘明短片未經授權使用阿湯哥面孔及蜘蛛人、黑武士等受著作權保護之角色。" },
        { id: 3, question: "What potential commercial advantage does Seedance 2.0 offer smaller businesses?", options: ["A. It completely exempts enterprises from corporate taxes", "B. It makes advertising and short film video production faster and more cost-effective", "C. It repairs damaged office furniture automatically", "D. It guarantees instant viral fame without internet connection"], answer: "B", explanation: "細節題。第二段末句提及對小企業而言，該工具能讓影片製作更快速、更節約成本。" },
        { id: 4, question: "What central unresolved challenge does the article highlight at the conclusion?", options: ["A. Banning electricity across film studios", "B. Striking an equitable balance between fostering AI technology and shielding human creators", "C. Forcing all software engineers to become stage actors", "D. Mandating that all films be under 10 seconds long"], answer: "B", explanation: "主旨題。末段點出如何在推動新科技發展之際不傷害人類創作者，是全球仍在努力解答的關鍵議題。" }
      ]
    }
  },

  "Unit 4": {
    title: "What Is Ageism?",
    chineseTitle: "你看得懂年齡歧視嗎？",
    passage: `Check the statements you have said or heard before.\n□ "Young people today are lazy."\n□ "At your age, you should get married."\n□ "Old drivers should not be on the road."\nIf you checked any box, you have probably seen ageism in real life. Ageism means judging or treating people unfairly because of their age. For example, some companies refuse to hire older workers even if they have excellent skills. At the same time, young workers might miss out on promotions because people think that they lack experience.\n\nAgeism can also have a strong impact on how people feel about themselves. Older people may lose confidence when others treat them like they are weak. Younger people may feel ignored when others don't take their problems seriously. They are often told that they are just too young to understand.\n\nAge is just one part of who we are. It does not decide what we can do or what we are worth. Let's look beyond age labels and treat people as individuals.`,
    chineseTranslation: `勾選你曾說過或聽過的言論：\n□「現在的年輕人都很懶散。」\n□「都這個歲數了，早該結婚生子了。」\n□「年長駕駛根本不該開車上路。」\n若你曾勾選其中任何一項，你很可能在生活中目睹過年齡歧視（Ageism）。年齡歧視是指單憑年齡對人做出不公的論斷或差別待遇。例如：部分企業即便資深求職者技術精湛仍悍然拒聘；與此同時，初出茅廬的青年工作者亦常因被貼上「缺乏經驗」的標籤而痛失升遷契機。\n年齡歧視亦嚴重戕害個人的自我認同與心理自信。當長輩被社會當作虛弱無能對待時，極易喪失自我價值；而青年族群在其困境被等閒視之時，常備感孤立忽視，甚至常被輕蔑地評為「毛頭小子什麼都不懂」。\n年齡僅是個人生命的一個面向，絕無法定義我們的才能與尊嚴。讓我們跨越年齡標籤的桎梏，將每位夥伴視為獨立無二的個體！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "unfairly", pos: "adv.", meaning: "不公平地、不公正地", collocations: "treat people unfairly 不公對待他人" },
        { id: 2, word: "promotions", pos: "n.", meaning: "升遷、晉升(複數)", collocations: "miss out on promotions 錯失升職機會" },
        { id: 3, word: "confidence", pos: "n.", meaning: "信心、自信", collocations: "lose confidence 失去自信心" },
        { id: 4, word: "individuals", pos: "n.", meaning: "獨立個體(複數)", collocations: "treat people as individuals 視人為獨立個體" }
      ],
      grammarNotes: [
        { id: "G1", title: "even if 引導讓步副詞子句 (即使...、哪怕...)", excerpt: "even if they have excellent skills", analysis: "even if 引導讓步條件，表示即使具備頂尖技能，仍遭不公拒聘。" }
      ],
      patternNotes: [
        { id: "P1", title: "look beyond (超越、放眼於...之外)", excerpt: "Let's look beyond age labels", analysis: "look beyond 引導讀者擺脫刻板標籤的束縛，看見內在本質。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'Check the statements you have said or heard before.\n□ "Young people today are lazy."\n□ "At your age, you should get married."\n□ "Old drivers should not be on the road."' }
        ],
        [
          { type: 'text', text: 'If you checked any box, you have probably seen ageism in real life. Ageism means judging or treating people ' },
          { type: 'vocab', text: 'unfairly', vid: 1 },
          { type: 'text', text: ' because of their age. For example, some companies refuse to hire older workers ' },
          { type: 'grammar', text: 'even if they have excellent skills', gid: 'G1' },
          { type: 'text', text: '. At the same time, young workers might miss out on ' },
          { type: 'vocab', text: 'promotions', vid: 2 },
          { type: 'text', text: ' because people think that they lack experience.' }
        ],
        [
          { type: 'text', text: 'Ageism can also have a strong impact on how people feel about themselves. Older people may lose ' },
          { type: 'vocab', text: 'confidence', vid: 3 },
          { type: 'text', text: ' when others treat them like they are weak. Younger people may feel ignored when others don\'t take their problems seriously. They are often told that they are just too young to understand.' }
        ],
        [
          { type: 'text', text: 'Age is just one part of who we are. It does not decide what we can do or what we are worth. ' },
          { type: 'pattern', text: 'Let\'s look beyond age labels', pid: 'P1' },
          { type: 'text', text: ' and treat people as ' },
          { type: 'vocab', text: 'individuals', vid: 4 },
          { type: 'text', text: '.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Arbitrary dismissal laws protect vulnerable workers from being treated ______ by employers.", options: ["A. unfairly", "B. smoothly", "C. casually", "D. safely"], answer: "A", explanation: "【選項解析】\n- (A) unfairly (adv.) 不公正地 (正解)\n- (B) smoothly (adv.) 平順流暢地\n- (C) casually (adv.) 隨興漫不經心地\n- (D) safely (adv.) 安全無虞地" },
      { id: 2, question: "Junior executives consistently overlooked for corporate ______ often seek employment elsewhere.", options: ["A. promotions", "B. curfews", "C. textures", "D. vouchers"], answer: "A", explanation: "【選項解析】\n- (A) promotions (n.) 職務升遷 (正解)\n- (B) curfews (n.) 夜間宵禁\n- (C) textures (n.) 質地表面\n- (D) vouchers (n.) 代金折價券" },
      { id: 3, question: "Continuous discouragement from managers will severely undermine an apprentice's self-______.", options: ["A. confidence", "B. prejudice", "C. obstacle", "D. barrier"], answer: "A", explanation: "【選項解析】\n- (A) confidence (n.) 自信心 (正解)\n- (B) prejudice (n.) 偏見歧視\n- (C) obstacle (n.) 障礙絆腳石\n- (D) barrier (n.) 屏障隔閡" },
      { id: 4, question: "Progressive educational methodologies respect students as unique ______ with personal talents.", options: ["A. individuals", "B. predators", "C. generators", "D. instruments"], answer: "A", explanation: "【選項解析】\n- (A) individuals (n.) 獨立個體 (正解)\n- (B) predators (n.) 掠食動物\n- (C) generators (n.) 發電機具\n- (D) instruments (n.) 樂器器材" }
    ],
    cloze: {
      text: "Prejudice based purely upon chronological age constitutes a widespread social blind spot. Known formally as ageism, this bias manifests [1] systemic inequality in corporate hiring and advancement. Seasoned workers are frequently dismissed as obsolete, [2] beginners are denied leadership posts due to presumed immaturity. Such systemic stereotypes [3] erode psychological well-being. Older demographics internalize feelings of helplessness, whereas adolescents [4] alienated when their grievances are belittled. To forge an equitable society, communities must perceive character [5] superficial generational labels.",
      questions: [
        { id: 1, options: ["A. as", "B. with", "C. into", "D. from"], answer: "A", explanation: "manifest as 表「體現為...形式」。" },
        { id: 2, options: ["A. while", "B. unless", "C. because", "D. despite"], answer: "A", explanation: "連接詞 while 形成鮮明的對比語意。" },
        { id: 3, options: ["A. severely", "B. slightly", "C. casually", "D. rarely"], answer: "A", explanation: "severely erode 嚴重侵蝕/損害。" },
        { id: 4, options: ["A. feel", "B. feels", "C. feeling", "D. felt"], answer: "A", explanation: "複數主詞 adolescents 搭配原形動詞 feel。" },
        { id: 5, options: ["A. beyond", "B. beneath", "C. under", "D. inside"], answer: "A", explanation: "perceive beyond 超越表面標籤洞悉本質。" }
      ]
    },
    wordBank: {
      words: ["(A) confidence", "(B) experience", "(C) hire", "(D) impact", "(E) individuals", "(F) labels", "(G) promotions", "(H) refuse", "(I) treat", "(J) unfairly"],
      passage: "Everyday generalizations often mask insidious generational discrimination. When firms [1] to interview elderly applicants, they judge people [2]. Concurrently, younger staff are denied well-deserved [3] because superiors assume they lack sufficient [4]. This dynamic exerts a damaging [5] on mental dignity. Seniors lose their professional [6] when addressed as fragile burdens, whereas youths feel silenced when adults dismiss their concerns. Age represents merely one metric of identity. Citizens must reject reductive [7] and [8] all colleagues as worthy [9], choosing to [10] candidates strictly upon capability.",
      answers: { 1: "H", 2: "J", 3: "G", 4: "B", 5: "D", 6: "A", 7: "F", 8: "I", 9: "E", 10: "C" }
    },
    discourse: {
      options: [
        "A. Older workers frequently encounter closed doors despite years of honed professional excellence.",
        "B. They must show their birth certificates to purchase ordinary groceries in supermarkets.",
        "C. Ageism denotes the unfair judgment and discriminatory treatment of people based upon chronological age.",
        "D. Overcoming these biases requires communities to evaluate people as distinct, multidimensional individuals.",
        "E. In addition to career setbacks, generational stereotyping inflicts profound psychological harm."
      ],
      paragraphs: [
        "Everyday remarks like 'young people are lazy' or 'older drivers shouldn't drive' reflect common generational biases.",
        "[1] In corporate environments, this prejudice manifests at both ends of the career spectrum. [2] Simultaneously, younger staff face exclusion from promotions under assumptions of inexperience.",
        "[3] Elderly citizens feel stripped of dignity when treated as weak, while adolescents feel disregarded when their thoughts are trivialized.",
        "Chronological age does not dictate capability or moral dignity. [4]"
      ],
      answers: { 1: "C", 2: "A", 3: "E", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "According to the author, how does ageism directly penalize younger employees in the workplace?", options: ["A. They are forced to pay double health insurance dues", "B. They may miss out on promotions due to assumptions regarding lack of experience", "C. They must work overnight without breaks", "D. They are banned from operating office computers"], answer: "B", explanation: "細節題。第一段指出年輕員工常因人們認為其缺乏經驗而錯失升職機會。" },
        { id: 2, question: "What psychological toll does age-based stereotyping inflict upon elderly citizens?", options: ["A. Sudden loss of physical hearing", "B. Losing confidence when societal attitudes treat them as fragile or weak", "C. Becoming addicted to video gaming", "D. Forgetting their native languages"], answer: "B", explanation: "細節題。第二段明確指出長者在被他人視為衰弱無能時，容易喪失自信心。" },
        { id: 3, question: "What is the primary objective of the introductory checklist presented in the text?", options: ["A. To test mathematical calculation speeds", "B. To illustrate how pervasive ageist attitudes are in common daily conversation", "C. To recruit volunteers for elderly care homes", "D. To advertise driver education academies"], answer: "B", explanation: "推論題。開頭的常見話語勾選清單旨在引導讀者察覺年齡歧視在日常言談中何等普遍。" },
        { id: 4, question: "Which statement best summarizes the author's closing moral appeal?", options: ["A. Employers should hire only employees between thirty and thirty-five years old", "B. Society should look beyond rigid age labels and respect people as individuals", "C. Retirement must be legally compulsory at fifty", "D. Young workers should avoid asking older mentors for advice"], answer: "B", explanation: "主旨題。文末呼籲大眾跨越年齡標籤，將每位夥伴視為獨立自主的個體。" }
      ]
    }
  },

  "Unit 5": {
    title: "Germany's Dual Education System: Learning Beyond the Classroom",
    chineseTitle: "學歷、經歷我都要！認識德國雙軌制教育",
    passage: `Day 1\nIn many countries, high school graduates feel forced to choose between continuing their education and starting their working life. In Germany, however, many young people follow a different path: the dual education system.\n\nThe "dual" part of the name refers to learning in two places: the classroom and the workplace. For one to two days a week, students go to a vocational school. There, they learn the theory of their future career. The rest of the workweek, they head to a real company to receive hands-on training. The training usually lasts around two to three and a half years, depending on the type of job.\n\nThis system covers over 320 different careers, which range from game design to healthcare to banking. Because companies in different industries help shape the training, students can be sure they're learning skills businesses actually need. In fact, about two-thirds of students are hired by their partner company after they finish the training program.\n\nDay 2\nThere are many advantages to Germany's dual education system. Students gain valuable work experience before graduation. What's more, under the dual education system, students don't have to pay tuition fees. On top of that, they receive a monthly salary. However, the pay is lower than a regular employee's salary because the company pays for the training and exams. Plus, the certificate students earn is accepted across the country and can even open doors to further studies.\n\nSo, how do students get into this system? Most students apply at around age 15 or 16, usually a year before the program starts. A smaller number of students choose a university type of this program, which combines a bachelor's degree with company training.\n\nIn Germany, vocational jobs are respected just as much as academic ones. This social attitude is what keeps the dual education system going. In a world where practical skills matter more than ever, this system offers students a strong start.`,
    chineseTranslation: `【第 1 天】\n在許多國家，高中畢業生常深陷於升學或就業的二選一難題。然而在德國，許多年輕人踏上一條嶄新的康莊大道：雙軌制職業教育（Dual Education System）。\n所謂「雙軌」，指在兩處場域並行學習：課堂與職場。學生每週有一至兩天前往職業學校研讀未來專業的理論基礎；其餘工作日則進駐真實企業接受實作鍛鍊。培訓期依工種通常為期兩年至三年半。\n該體系涵蓋逾 320 種職業領域，跨足遊戲開發、醫療護理乃至金融銀行。由於各界企業深度參與培訓課綱設計，學生能確信習得職場最前線的實用技能。實際上，高達三分之二的學生在結訓後直接獲合作企業留任！\n\n【第 2 天】\n德國雙軌教育優勢顯著：學生在畢業前即累積了無價的實務經歷；更棒的是，全期免繳學費，每月還能領取培訓津貼。儘管因企業負擔了培訓與考照規費，薪資略低於正職員工，但學生取得的專業執照獲全德認可，更能作為日後深造的敲門磚。\n那麼該如何加入呢？多數學生於 15 或 16 歲提出申請，通常於開學前一年著手準備；亦有部分學生選擇「雙軌大學」，同時修得學士學位與企業資歷。\n在德國，技職專才與學術人才享有同等崇高的社會尊嚴。正是這種尊重實務的社會底蘊，支撐著雙軌教育生生不息，為學子奠定卓越的起跑點。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "vocational", pos: "adj.", meaning: "職業的、技職的", collocations: "vocational school 職業學校" },
        { id: 2, word: "theory", pos: "n.", meaning: "理論、學說", collocations: "learn the theory of... 研習...的理論" },
        { id: 3, word: "hands-on", pos: "adj.", meaning: "親自動手的、實作的", collocations: "hands-on training 實作訓練" },
        { id: 4, word: "tuition", pos: "n.", meaning: "學費", collocations: "pay tuition fees 繳納學費" },
        { id: 5, word: "certificate", pos: "n.", meaning: "證書、證照", collocations: "earn an official certificate 考取正式證照" }
      ],
      grammarNotes: [
        { id: "G1", title: "which 引導非限定關係子句", excerpt: "which range from game design to healthcare", analysis: "which 代替先行詞 320 different careers，補充說明涵蓋產業廣泛。" }
      ],
      patternNotes: [
        { id: "P1", title: "as much as (同等程度地)", excerpt: "vocational jobs are respected just as much as academic ones", analysis: "同級比較結構，強調技職與學術在德國社會享有同等敬重。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'In many countries, high school graduates feel forced to choose between continuing their education and starting their working life. In Germany, however, many young people follow a different path: the dual education system.' }
        ],
        [
          { type: 'text', text: 'The "dual" part of the name refers to learning in two places: the classroom and the workplace. For one to two days a week, students go to a ' },
          { type: 'vocab', text: 'vocational', vid: 1 },
          { type: 'text', text: ' school. There, they learn the ' },
          { type: 'vocab', text: 'theory', vid: 2 },
          { type: 'text', text: ' of their future career. The rest of the workweek, they head to a real company to receive ' },
          { type: 'vocab', text: 'hands-on', vid: 3 },
          { type: 'text', text: ' training. The training usually lasts around two to three and a half years, depending on the type of job.' }
        ],
        [
          { type: 'text', text: 'This system covers over 320 different careers, ' },
          { type: 'grammar', text: 'which range from game design to healthcare to banking', gid: 'G1' },
          { type: 'text', text: '. Because companies in different industries help shape the training, students can be sure they\'re learning skills businesses actually need. In fact, about two-thirds of students are hired by their partner company after they finish the training program.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'There are many advantages to Germany\'s dual education system. Students gain valuable work experience before graduation. What\'s more, under the dual education system, students don\'t have to pay ' },
          { type: 'vocab', text: 'tuition', vid: 4 },
          { type: 'text', text: ' fees. On top of that, they receive a monthly salary. However, the pay is lower than a regular employee\'s salary because the company pays for the training and exams. Plus, the ' },
          { type: 'vocab', text: 'certificate', vid: 5 },
          { type: 'text', text: ' students earn is accepted across the country and can even open doors to further studies.' }
        ],
        [
          { type: 'text', text: 'So, how do students get into this system? Most students apply at around age 15 or 16, usually a year before the program starts. A smaller number of students choose a university type of this program, which combines a bachelor\'s degree with company training.' }
        ],
        [
          { type: 'text', text: 'In Germany, ' },
          { type: 'pattern', text: 'vocational jobs are respected just as much as academic ones', pid: 'P1' },
          { type: 'text', text: '. This social attitude is what keeps the dual education system going. In a world where practical skills matter more than ever, this system offers students a strong start.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Technical secondary academies focus heavily upon practical ______ skills for automotive engineering.", options: ["A. vocational", "B. colonial", "C. frozen", "D. dramatic"], answer: "A", explanation: "【選項解析】\n- (A) vocational (adj.) 技職職業的 (正解)\n- (B) colonial (adj.) 殖民統治的\n- (C) frozen (adj.) 結冰冷凍的\n- (D) dramatic (adj.) 戲劇引人注目的" },
      { id: 2, question: "Scientific research requires balancing abstract mathematical ______ with empirical experimental trials.", options: ["A. theory", "B. curfew", "C. texture", "D. voucher"], answer: "A", explanation: "【選項解析】\n- (A) theory (n.) 理論學說 (正解)\n- (B) curfew (n.) 宵禁\n- (C) texture (n.) 質地表面\n- (D) voucher (n.) 抵用折價券" },
      { id: 3, question: "Apprentices gain invaluable ______ technical experience by assembling engines in actual factories.", options: ["A. hands-on", "B. artificial", "C. clumsy", "D. greedy"], answer: "A", explanation: "【選項解析】\n- (A) hands-on (adj.) 親自動手實作的 (正解)\n- (B) artificial (adj.) 人工虛假的\n- (C) clumsy (adj.) 笨拙難看的\n- (D) greedy (adj.) 貪得無厭的" },
      { id: 4, question: "Scholarship recipients are completely exempt from paying costly university ______ fees.", options: ["A. tuition", "B. dialogue", "C. predator", "D. generator"], answer: "A", explanation: "【選項解析】\n- (A) tuition (n.) 學費 (正解)\n- (B) dialogue (n.) 對話台詞\n- (C) predator (n.) 掠食者\n- (D) generator (n.) 產生生成器" }
    ],
    cloze: {
      text: "Germany's dual education system presents an ingenious bridge linking school curricula to real commerce. Participants divide their weekly routine between academic lectures [1] factory workshop benches. Corporate partners participate actively in curriculum planning, ensuring apprentices master relevant [2] demanded by the economy. Financially, enrollees pay zero tuition while drawing monthly [3] from host firms. Upon concluding trials, students obtain nationally validated credentials [4] qualify them for permanent corporate roles. Crucially, the German public accords vocational craftsmanship equal [5] alongside theoretical university scholarship.",
      questions: [
        { id: 1, options: ["A. and", "B. with", "C. or", "D. into"], answer: "A", explanation: "between A and B 在兩者之間。" },
        { id: 2, options: ["A. skills", "B. obstacles", "C. curfews", "D. textures"], answer: "A", explanation: "master relevant skills 掌握相關技能。" },
        { id: 3, options: ["A. stipends", "B. penalties", "C. lawsuits", "D. vouchers"], answer: "A", explanation: "drawing monthly stipends 領取每月津貼/薪資。" },
        { id: 4, options: ["A. that", "B. what", "C. whom", "D. where"], answer: "A", explanation: "that 引導限定關係子句修飾 credentials。" },
        { id: 5, options: ["A. prestige", "B. suspicion", "C. hostility", "D. barrier"], answer: "A", explanation: "accord equal prestige 賦予同等威望/尊重。" }
      ]
    },
    wordBank: {
      words: ["(A) academic", "(B) apply", "(C) bachelor's", "(D) certificate", "(E) dual", "(F) hands-on", "(G) hired", "(H) tuition", "(I) vocational", "(J) workplace"],
      passage: "The renowned German [1] education program liberates secondary students from conventional school dilemmas. Learners spend several days in a [2] academy absorbing textbook principles, while remaining days are spent in the [3] receiving intensive [4] coaching. Over 300 careers are available, and roughly two-thirds of apprentices are immediately [5] by host sponsors. Students avoid crushing [6] debts while acquiring a nationally recognized [7]. Ambitious participants can even target integrated [8] degrees at technical universities. Ultimately, broad cultural parity ensuring [9] careers match [10] professions keeps the pipeline thriving.",
      answers: { 1: "E", 2: "I", 3: "J", 4: "F", 5: "G", 6: "H", 7: "D", 8: "C", 9: "A", 10: "B" }
    },
    discourse: {
      options: [
        "A. Companies participate directly in designing curricula, ensuring that apprentices master real-world workplace tools.",
        "B. They must pay tens of thousands of euros in upfront examination fines before entering classrooms.",
        "C. The dual education system elegantly combines vocational classroom study with practical on-the-job training.",
        "D. In German society, technical trades command equal social prestige and dignity alongside university degrees.",
        "E. In addition to gaining debt-free educations, trainees receive monthly wages throughout their apprenticeships."
      ],
      paragraphs: [
        "Across many nations, secondary school graduates face a rigid divide between academic study and manual labor.",
        "[1] For several days each week, German apprentices attend specialized classrooms, spending the remainder inside corporate facilities. [2] Consequently, over sixty percent of graduates transition smoothly into immediate permanent corporate employment.",
        "The economic benefits of this dual framework are substantial for young trainees. [3] The professional certificates earned unlock immediate corporate promotions as well as opportunities for tertiary study.",
        "This structural success is underpinned by deep cultural values. [4] This egalitarian social mindset ensures that practical mastery remains a revered life path."
      ],
      answers: { 1: "C", 2: "A", 3: "E", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the typical weekly time allocation for students enrolled in Germany's dual education system?", options: ["A. Five days in university libraries and weekends at home", "B. One to two days in vocational school and the rest gaining hands-on training at a company", "C. Seven continuous days of factory nightshifts", "D. Online lectures exclusively with zero physical contact"], answer: "B", explanation: "細節題。第一天指出學生每週一至兩天在職校學習理論，其餘工作日進駐企業接受實務培訓。" },
        { id: 2, question: "What financial incentive distinguishes the dual education pathway for German apprentices?", options: ["A. The government pays off their family mortgages", "B. Trainees pay zero tuition and receive a monthly training salary from their host company", "C. Students receive unlimited free airline travel across Europe", "D. Companies buy brand-new luxury automobiles for all graduates"], answer: "B", explanation: "細節題。第二天提到免繳學費（no tuition），且每個月還能領取培訓薪資。" },
        { id: 3, question: "What proportion of dual-education apprentices are hired directly by their training partner companies after graduation?", options: ["A. Less than 5%", "B. Exactly half", "C. About two-thirds", "D. None, as they are mandated to join the army"], answer: "C", explanation: "細節題。第一天結尾提及大約三分之二（two-thirds）的學生結訓後直接被合作企業聘僱。" },
        { id: 4, question: "What underlying societal attitude sustains the continued success of vocational training in Germany?", options: ["A. Vocational occupations are respected just as much as academic university careers", "B. College degrees are completely banned by federal law", "C. Physical office work is punished with severe fines", "D. Parents disown children who pursue literature"], answer: "A", explanation: "主旨題。第二天末段指出德國社會對技職專業與學術學位抱持同等崇高的敬重態度。" }
      ]
    }
  },

  "Unit 6": {
    title: "A Life Full of Mystery? Meet Agatha Christie!",
    chineseTitle: "謎案作家 謎樣人生——阿嘉莎・克莉絲蒂",
    passage: `Day 1\nDo you enjoy reading stories that keep you guessing until the very end? If you do, you have probably heard of Agatha Christie (1890–1976). She was an English author who is known for her detective novels and short-story collections. Because of this, people often call her the Queen of Crime.\n\nMany of her stories take place in confined spaces. One of her most famous books, Murder on the Orient Express, is set on a train. In addition, And Then There Were None is about mysterious events on a remote island. Both stories include very unexpected endings that shock readers.\n\nChristie also created some unforgettable characters. For instance, Hercule Poirot, a smart Belgian detective, always notices small details that others miss. Miss Marple, on the other hand, is an elderly woman who solves crimes by using her life experience. These characters changed mystery stories. They proved that detectives don't have to be strong heroes. A sharp mind is more powerful than physical strength.\n\nDay 2\nAgatha Christie wrote many mysteries, and interestingly, she became part of one herself.\n\nIn 1926, Christie's mother died, and her husband wanted a divorce. During this difficult time, she suddenly went missing for 11 days. Many people, from police officers to ordinary citizens, joined the search for her. When her car was found near a lake, the mystery only grew deeper. Finally, Christie was found safe at a hotel. Surprisingly, she had checked in at the hotel under the surname of her husband's mistress.\n\nPeople had different ideas about what had happened to her during the 11 days. Her husband claimed she had lost her memory during those days. However, a popular theory suggested that she had disappeared on purpose to punish her cheating husband. This way, she could embarrass him and his mistress or even make the police suspect him of a crime. Even today, no one knows exactly why she vanished.\n\nAs 2026 marks the 50th anniversary of Christie's death, her stories continue to fascinate readers around the world.`,
    chineseTranslation: `【第 1 天】\n你喜歡閱讀令人猜到最後一頁仍懸念未決的故事嗎？若然，你定曾聽聞阿嘉莎·克莉絲蒂（1890–1976）的大名。這位英國巨匠以偵探小說與短篇傑作享譽全球，世人尊奉其為「謀殺天后（Queen of Crime）」。\n她的大作常以密閉空間為舞台：傳世名篇《東方快車謀殺案》設於奔馳的列車；《一個都不留》則聚焦孤懸海外的絕島。兩者皆以震撼人心的反轉結局令讀者拍案叫絕。\n克莉絲蒂更塑造了眾多不朽神探：例如睿智的比利時偵探赫丘勒·白羅，總能明察秋毫洞悉細微破綻；而瑪波小姐則是位慈祥老嫗，憑藉洞悉世故的閱歷破解兇案。這些角色徹底革新了推理文學——神探不必是孔武有力的英雄，敏銳的心智遠勝於過人的體魄。\n\n【第 2 天】\n克莉絲蒂筆下懸疑無數，有趣的是，她本人亦曾化身為一樁未解之謎的主角。\n1926 年，克莉絲蒂遭遇喪母與丈夫求離的雙重打擊。在此艱困時刻，她竟離奇失蹤了 11 天！警方與數千民眾展開全城大搜捕；當她的座駕在湖畔被發現時，謎團益發撲朔迷離。最終，她被尋獲平安無恙地寄宿於一家溫泉飯店，令人詫異的是，她登記入住時所用的姓氏，竟是其丈夫外遇情婦的姓氏！\n這失蹤的 11 天眾說紛紜：其夫聲稱她經歷暫時性失憶；大眾普遍推論她是有意策劃失蹤以報復不忠的丈夫，令其名譽掃地甚至引來謀殺嫌疑。時至今日，真相依舊成謎。\n適逢 2026 年為克莉絲蒂逝世五十週年，她傳奇的文字與神祕的一生，依然令全球讀者深深著迷。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "confined", pos: "adj.", meaning: "狹窄的、受限的", collocations: "confined spaces 密閉空間" },
        { id: 2, word: "remote", pos: "adj.", meaning: "偏僻的、遙遠的", collocations: "remote island 偏遠孤島" },
        { id: 3, word: "divorce", pos: "n./v.", meaning: "離婚", collocations: "wanted a divorce 要求離婚" },
        { id: 4, word: "mistress", pos: "n.", meaning: "情婦、第三者", collocations: "husband's mistress 丈夫的情婦" },
        { id: 5, word: "fascinate", pos: "v.", meaning: "深深吸引、迷住", collocations: "continue to fascinate readers 持續令讀者著迷" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去完成式 had + p.p. (表示在過去某時點前已發生)", excerpt: "she had checked in at the hotel under the surname", analysis: "checked in 發生在被尋獲（was found）之前，故用過去完成式。" }
      ],
      patternNotes: [
        { id: "P1", title: "more A than B (與其說是 B 不如說是 A / A 比 B 更...)", excerpt: "A sharp mind is more powerful than physical strength", analysis: "比較結構，點出偵探智慧凌駕於肢體武力的核心主題。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'Do you enjoy reading stories that keep you guessing until the very end? If you do, you have probably heard of Agatha Christie (1890–1976). She was an English author who is known for her detective novels and short-story collections. Because of this, people often call her the Queen of Crime.' }
        ],
        [
          { type: 'text', text: 'Many of her stories take place in ' },
          { type: 'vocab', text: 'confined', vid: 1 },
          { type: 'text', text: ' spaces. One of her most famous books, Murder on the Orient Express, is set on a train. In addition, And Then There Were None is about mysterious events on a ' },
          { type: 'vocab', text: 'remote', vid: 2 },
          { type: 'text', text: ' island. Both stories include very unexpected endings that shock readers.' }
        ],
        [
          { type: 'text', text: 'Christie also created some unforgettable characters. For instance, Hercule Poirot, a smart Belgian detective, always notices small details that others miss. Miss Marple, on the other hand, is an elderly woman who solves crimes by using her life experience. These characters changed mystery stories. They proved that detectives don\'t have to be strong heroes. ' },
          { type: 'pattern', text: 'A sharp mind is more powerful than physical strength', pid: 'P1' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Agatha Christie wrote many mysteries, and interestingly, she became part of one herself.' }
        ],
        [
          { type: 'text', text: 'In 1926, Christie\'s mother died, and her husband wanted a ' },
          { type: 'vocab', text: 'divorce', vid: 3 },
          { type: 'text', text: '. During this difficult time, she suddenly went missing for 11 days. Many people, from police officers to ordinary citizens, joined the search for her. When her car was found near a lake, the mystery only grew deeper. Finally, Christie was found safe at a hotel. Surprisingly, ' },
          { type: 'grammar', text: 'she had checked in at the hotel under the surname', gid: 'G1' },
          { type: 'text', text: ' of her husband\'s ' },
          { type: 'vocab', text: 'mistress', vid: 4 },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'People had different ideas about what had happened to her during the 11 days. Her husband claimed she had lost her memory during those days. However, a popular theory suggested that she had disappeared on purpose to punish her cheating husband. This way, she could embarrass him and his mistress or even make the police suspect him of a crime. Even today, no one knows exactly why she vanished.' }
        ],
        [
          { type: 'text', text: 'As 2026 marks the 50th anniversary of Christie\'s death, her stories continue to ' },
          { type: 'vocab', text: 'fascinate', vid: 5 },
          { type: 'text', text: ' readers around the world.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Submarines operate inside severely ______ compartments deep beneath the ocean surface.", options: ["A. confined", "B. generous", "C. fertile", "D. reckless"], answer: "A", explanation: "【選項解析】\n- (A) confined (adj.) 密閉狹窄的 (正解)\n- (B) generous (adj.) 慷慨大度的\n- (C) fertile (adj.) 肥沃滋養的\n- (D) reckless (adj.) 魯莽輕率的" },
      { id: 2, question: "Botanists flew by helicopter to study uncharted flora on a ______ volcanic island.", options: ["A. remote", "B. dynamic", "C. clumsy", "D. modest"], answer: "A", explanation: "【選項解析】\n- (A) remote (adj.) 偏僻遙遠的 (正解)\n- (B) dynamic (adj.) 動態有活力的\n- (C) clumsy (adj.) 笨拙難看的\n- (D) modest (adj.) 適度的謙虛的" },
      { id: 3, question: "Following years of bitter marital disputes, the celebrity couple finalized their ______.", options: ["A. divorce", "B. theory", "C. dialogue", "D. generator"], answer: "A", explanation: "【選項解析】\n- (A) divorce (n.) 離婚協議 (正解)\n- (B) theory (n.) 理論原理\n- (C) dialogue (n.) 對白會話\n- (D) generator (n.) 發電機生成器" },
      { id: 4, question: "Ancient archaeological discoveries continue to ______ historians and travelers alike.", options: ["A. fascinate", "B. inspect", "C. forfeit", "D. threaten"], answer: "A", explanation: "【選項解析】\n- (A) fascinate (v.) 使著迷、吸引 (正解)\n- (B) inspect (v.) 視察檢查\n- (C) forfeit (v.) 喪失沒收\n- (D) threaten (v.) 威脅恐嚇" }
    ],
    cloze: {
      text: "Crowned globally as the 'Queen of Crime,' Agatha Christie revolutionized detective fiction. Setting unforgettable narratives in enclosed environments, she crafted plots [1] endings confounded even seasoned enthusiasts. Rather than relying upon muscle-bound protagonists, Christie championed Poirot and Miss Marple, [2] deductive intellect eclipsed physical brute force. In 1926, Christie herself triggered an authentic mystery [3] vanishing for eleven days amidst family bereavement. Found lodged under her husband's mistress's surname, she offered no explanation, [4] historians to debate whether amnesia or revenge caused the episode. Half a century after her passing, her literary genius [5] timeless.",
      questions: [
        { id: 1, options: ["A. whose", "B. which", "C. whom", "D. where"], answer: "A", explanation: "whose endings 其結局，所有格關係代名詞。" },
        { id: 2, options: ["A. whose", "B. that", "C. whom", "D. which"], answer: "A", explanation: "whose deductive intellect 其演繹推理心智。" },
        { id: 3, options: ["A. by", "B. from", "C. with", "D. into"], answer: "A", explanation: "by vanishing 藉由離奇失蹤。" },
        { id: 4, options: ["A. leaving", "B. left", "C. to leave", "D. leaves"], answer: "A", explanation: "分詞構句表伴隨結果，leaving historians to debate。" },
        { id: 5, options: ["A. remains", "B. remaining", "C. to remain", "D. remain"], answer: "A", explanation: "主詞 her literary genius 為單數，現在式動詞用 remains。" }
      ]
    },
    wordBank: {
      words: ["(A) anniversary", "(B) characters", "(C) confined", "(D) divorce", "(E) fascinate", "(F) mistress", "(G) powerful", "(H) remote", "(I) solved", "(J) vanished"],
      passage: "Agatha Christie reshaped mystery literature through unforgettable psychological puzzles. She mastered staging homicides within [1] rail cars and isolated mansions on [2] coasts. Instead of pugilists, her sharp [3] proved that analytical deduction is far more [4] than brute vigor. In late 1926, facing personal tragedy and an impending [5], Christie suddenly [6] without trace for eleven days. Search parties eventually located her registered at a resort under the alias of her spouse's [7]. Her investigators [8] intricate riddles, yet her private disappearance was never decoded. Approaching the 50th [9] of her death in 2026, her enigmatic legacy continues to [10] millions worldwide.",
      answers: { 1: "C", 2: "H", 3: "B", 4: "G", 5: "D", 6: "J", 7: "F", 8: "I", 9: "A", 10: "E" }
    },
    discourse: {
      options: [
        "A. Christie set many of her famous plots inside claustrophobic, confined settings like isolated trains and islands.",
        "B. She formally abandoned all literary writing to join the London Metropolitan Police as an officer.",
        "C. Her protagonists proved that meticulous observational logic mattered far more than physical intimidation.",
        "D. Agatha Christie gained international immortality as the undisputed 'Queen of Crime.'",
        "E. In 1926, the celebrated novelist shocked Britain by vanishing without a trace for eleven days."
      ],
      paragraphs: [
        "Readers who savor unraveling convoluted puzzles until the final climax universally cherish Agatha Christie's novels. [1]",
        "[2] Works like Murder on the Orient Express trap suspects together, delivering shocking psychological denouements that thrill readers.",
        "Christie also introduced detectives who fundamentally subverted standard action-hero tropes. Belgian sleuth Hercule Poirot and the observant Miss Marple embodied mental precision. [3]",
        "Yet in a twist mirroring her dark fiction, Christie plunged into her own real-life riddle. [4] Found living in a luxury hotel under the surname of her husband's paramour, the motive behind her vanishing remains unsolved."
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What structural setting characterizes Agatha Christie's famous works like Murder on the Orient Express and And Then There Were None?", options: ["A. Spacious open agricultural plains", "B. Confined or isolated spaces like moving passenger trains and cut-off islands", "C. Futuristic international space stations", "D. Bustling contemporary digital office complexes"], answer: "B", explanation: "細節題。第一天第二段指出其經典作品多以密閉狹窄或偏遠孤島為舞台。" },
        { id: 2, question: "What foundational premise did characters like Hercule Poirot and Miss Marple establish in detective literature?", options: ["A. Detectives must rely strictly on heavyweight boxing skills", "B. A razor-sharp analytical mind and life observation are far more potent than brute strength", "C. Police authorities should always ignore forensic clues", "D. Crimes can only be solved using advanced genetic laboratories"], answer: "B", explanation: "細節題。第一天指出這些角色證明神探無須是壯漢，敏銳的心智遠勝於過人的體力。" },
        { id: 3, question: "What peculiar discovery baffled authorities when Agatha Christie was located following her 11-day disappearance in 1926?", options: ["A. She had flown an aircraft to Australia", "B. She had registered at a spa hotel using the surname of her husband's mistress", "C. She had written fifty new mystery novels while hiding", "D. She was wearing a medieval suit of armor"], answer: "B", explanation: "細節題。第二天指出她竟以丈夫外遇情婦的姓氏登記入住飯店，引發熱烈猜測。" },
        { id: 4, question: "What milestone will occur regarding Agatha Christie's legacy in the year 2026?", options: ["A. The public auction of her personal diamond collection", "B. The 50th anniversary of her death", "C. The discovery of her real birth year", "D. The opening of an amusement park dedicated to Miss Marple"], answer: "B", explanation: "細節題。文末指出 2026 年適逢克莉絲蒂逝世 50 週年紀念。" }
      ]
    }
  },

  "Unit 7": {
    title: "Mockumentary: The Other Side of Reality",
    chineseTitle: "真假難辨！？歡迎來到「偽紀錄片」的世界",
    passage: `Have you ever watched a movie that looks like a real story, but is actually a joke? This kind of movie is called a mockumentary.\n\nMockumentaries often use handheld cameras, interviews, and everyday conversations. Some also include text on the screen or old videos to make the story feel more like a real documentary. In mockumentaries, emotional moments are usually created through silence or facial expressions. Characters may speak to the camera and share their private thoughts with the audience. This gives viewers a strong sense of connection and can make every moment feel more real.\n\nBy dressing up fiction as reality, mockumentaries often make fun of human behavior. This can be seen in works like This Is Spinal Tap and The Office. Their humor may be light, but the ideas behind them are sharp. However, not all mockumentaries are comedies. Some use this style to make fear feel more direct, such as the Taiwanese horror film Incantation.\n\nWhy not select a mockumentary that interests you and watch it today?`,
    chineseTranslation: `你是否曾看過一部看似紀實報導、實則純屬虛構惡搞的電影？這種影片形式被稱為「偽紀錄片（Mockumentary）」。\n偽紀錄片常運用手持晃動鏡頭、人物專訪與日常對白；部分更穿插螢幕字幕或泛黃影帶，使故事更貼近真實紀錄片。在偽紀錄片中，情緒的高潮常透過突如其來的沉寂或演員微妙的面部表情凝塑而成；角色更常直接面對鏡頭向觀眾傾吐內心私語，為觀者營造強烈的私密連結與無比逼真的臨場感。\n透過將虛構披上紀實外衣，偽紀錄片往往犀利嘲弄人性的荒謬，如經典搖滾喜劇《搖滾萬萬歲》與熱門美劇《辦公室瘋雲》。其笑料看似詼諧輕鬆，背後論述卻辛辣深刻。然而偽紀錄片並非皆為喜劇，亦有作品藉此風格強化恐懼的直觀壓迫感，如台灣現象級恐怖片《咒》。\n何妨挑選一部令你著迷的偽紀錄片，親自領略其虛實交錯的獨特魔力！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "include", pos: "v.", meaning: "包含、涵蓋", collocations: "include text on screen 包含螢幕文字" },
        { id: 2, word: "silence", pos: "n.", meaning: "沉寂、寂靜", collocations: "awkward silence 尷尬的沉默" },
        { id: 3, word: "private", pos: "adj.", meaning: "私密的、個人的", collocations: "private thoughts 內心私密想法" },
        { id: 4, word: "connection", pos: "n.", meaning: "連結、情感共鳴", collocations: "sense of connection 情感連結感" },
        { id: 5, word: "light", pos: "adj.", meaning: "輕鬆的、輕度的", collocations: "light humor 輕鬆的幽默" },
        { id: 6, word: "select", pos: "v.", meaning: "挑選、選擇", collocations: "select a movie 挑選電影" }
      ],
      grammarNotes: [
        { id: "G1", title: "By + V-ing (藉由...方式)", excerpt: "By dressing up fiction as reality", analysis: "介系詞 By 接動名詞 dressing up，表示達成諷刺效果的手法手段。" }
      ],
      patternNotes: [
        { id: "P1", title: "Why not + 原形動詞? (何不...？)", excerpt: "Why not select a mockumentary", analysis: "表達熱情邀請或建議的常用句型。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'Have you ever watched a movie that looks like a real story, but is actually a joke? This kind of movie is called a mockumentary.' }
        ],
        [
          { type: 'text', text: 'Mockumentaries often use handheld cameras, interviews, and everyday conversations. Some also ' },
          { type: 'vocab', text: 'include', vid: 1 },
          { type: 'text', text: ' text on the screen or old videos to make the story feel more like a real documentary. In mockumentaries, emotional moments are usually created through ' },
          { type: 'vocab', text: 'silence', vid: 2 },
          { type: 'text', text: ' or facial expressions. Characters may speak to the camera and share their ' },
          { type: 'vocab', text: 'private', vid: 3 },
          { type: 'text', text: ' thoughts with the audience. This gives viewers a strong sense of ' },
          { type: 'vocab', text: 'connection', vid: 4 },
          { type: 'text', text: ' and can make every moment feel more real.' }
        ],
        [
          { type: 'grammar', text: 'By dressing up fiction as reality', gid: 'G1' },
          { type: 'text', text: ', mockumentaries often make fun of human behavior. This can be seen in works like This Is Spinal Tap and The Office. Their humor may be ' },
          { type: 'vocab', text: 'light', vid: 5 },
          { type: 'text', text: ', but the ideas behind them are sharp. However, not all mockumentaries are comedies. Some use this style to make fear feel more direct, such as the Taiwanese horror film Incantation.' }
        ],
        [
          { type: 'pattern', text: 'Why not select a mockumentary', pid: 'P1' },
          { type: 'text', text: ' that interests you and watch it today?' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The documentary series will ______ rare archival footage recorded during the historical expedition.", options: ["A. include", "B. vanish", "C. threaten", "D. damage"], answer: "A", explanation: "【選項解析】\n- (A) include (v.) 包含、納入 (正解)\n- (B) vanish (v.) 消失\n- (C) threaten (v.) 威脅恐嚇\n- (D) damage (v.) 破壞受損" },
      { id: 2, question: "An awkward ______ descended upon the conference room when the secret was revealed.", options: ["A. silence", "B. generator", "C. texture", "D. obstacle"], answer: "A", explanation: "【選項解析】\n- (A) silence (n.) 沉寂、沉默 (正解)\n- (B) generator (n.) 生成發電機\n- (C) texture (n.) 質地觸感\n- (D) obstacle (n.) 絆腳石" },
      { id: 3, question: "The diary contained intimate, ______ confessions meant for no other eyes.", options: ["A. private", "B. colonial", "C. synthetic", "D. intense"], answer: "A", explanation: "【選項解析】\n- (A) private (adj.) 內心私密的 (正解)\n- (B) colonial (adj.) 殖民地的\n- (C) synthetic (adj.) 人造化學的\n- (D) intense (adj.) 劇烈強烈的" },
      { id: 4, question: "Please ______ your preferred language option from the dropdown menu before installation.", options: ["A. select", "B. evolve", "C. project", "D. ignore"], answer: "A", explanation: "【選項解析】\n- (A) select (v.) 挑選、選定 (正解)\n- (B) evolve (v.) 演變蛻變\n- (C) project (v.) 投射聲音\n- (D) ignore (v.) 忽視不理" }
    ],
    cloze: {
      text: "The mockumentary genre occupies a unique intersection between satire and cinema verite. By employing shaky handheld cameras, naturalistic dialogue, and candid confessionals, filmmakers craft illusory realism [1] audiences. Directors frequently exploit deadpan [2] and direct eye contact with lenses to elicit subtle humor. Classic satirical serials like The Office dissect mundane workplace absurdities, [3] lighthearted banter disguises acute societal critique. Conversely, genre directors harness identical techniques [4] raw terror, as proven by the acclaimed Taiwanese horror hit Incantation. Ultimately, this aesthetic proves that reality remains subjective [5] cinematic manipulation.",
      questions: [
        { id: 1, options: ["A. to captivate", "B. captivated", "C. captivate", "D. captivates"], answer: "A", explanation: "不定詞 to captivate 表示創造逼真臨場感以吸引觀眾的目的。" },
        { id: 2, options: ["A. silence", "B. obstacle", "C. generator", "D. curfew"], answer: "A", explanation: "deadpan silence 喜劇中面無表情的尷尬沉默。" },
        { id: 3, options: ["A. where", "B. which", "C. what", "D. whom"], answer: "A", explanation: "關係副詞 where 修飾前述喜劇系列環境。" },
        { id: 4, options: ["A. to induce", "B. induced", "C. induce", "D. induces"], answer: "A", explanation: "不定詞 to induce 表目的「以引發恐懼」。" },
        { id: 5, options: ["A. through", "B. across", "C. without", "D. toward"], answer: "A", explanation: "through cinematic manipulation 透過鏡頭手法操弄。" }
      ]
    },
    wordBank: {
      words: ["(A) connection", "(B) dialogue", "(C) documentary", "(D) fear", "(E) handheld", "(F) include", "(G) light", "(H) mockumentary", "(I) private", "(J) silence"],
      passage: "A [1] borrows non-fiction stylistic cues to depict entirely scripted satire. Filmmakers utilize loose [2] camera work, artificial interviews, and unscripted [3] to emulate legitimate journalism. Productions often [4] archived reels and graphic text overlays to accentuate authenticity. Comic timing relies heavily on awkward [5] and knowing looks cast straight into the lens. By sharing characters' [6] soliloquies, directors cultivate an intimate [7] with moviegoers. While works like This Is Spinal Tap display [8] mockery, other creators deploy the technique to amplify claustrophobic [9], proving that masquerading fiction as [10] delivers intense psychological resonance.",
      answers: { 1: "H", 2: "E", 3: "B", 4: "F", 5: "J", 6: "I", 7: "A", 8: "G", 9: "D", 10: "C" }
    },
    discourse: {
      options: [
        "A. By dressing up scripted fiction as authentic journalism, these films satirize absurdities of human nature.",
        "B. They force viewers to wear virtual reality headsets to watch black-and-white television.",
        "C. Stylistic hallmarks include shaky handheld camerawork, spontaneous interviews, and awkward silences.",
        "D. A mockumentary adopts the visual conventions of serious documentaries to deliver scripted comedy or horror.",
        "E. Beyond comedic television like The Office, horror features employ the technique to heighten visceral panic."
      ],
      paragraphs: [
        "Audiences viewing a mockumentary encounter a cinematic illusion that appears factual yet is completely fabricated. [1]",
        "[2] Characters routinely break traditional cinema barriers by staring directly into the camera and confessing their innermost anxieties to viewers.",
        "[3] Masterpieces such as This Is Spinal Tap present understated humor that conceals sharp philosophical critique.",
        "The stylistic toolkit is remarkably versatile across divergent film genres. [4] Taiwanese chiller Incantation utilized simulated amateur footage to make terrifying supernatural events feel horribly immediate."
      ],
      answers: { 1: "D", 2: "C", 3: "A", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the primary defining characteristic of a 'mockumentary'?", options: ["A. An animated documentary tracking rare oceanic species", "B. A scripted fiction film that utilizes documentary filmmaking techniques to satire or unnerve", "C. A biographical study recorded exclusively with silent photos", "D. An instructional video teaching television broadcasting"], answer: "B", explanation: "細節題。第一段指出偽紀錄片看似真實紀實，實則為虛構嘲諷或驚悚之作。" },
        { id: 2, question: "How do mockumentaries typically establish an intimate sense of connection with viewers?", options: ["A. Characters look straight into the camera lens and share their unfiltered private thoughts", "B. Directors phone every ticket buyer personally", "C. The movie theater distributes free meals to all patrons", "D. All speaking lines are converted into musical opera songs"], answer: "A", explanation: "細節題。第二段提到演員直接對鏡頭吐露私密思維，營造強烈的私密連結與真實感。" },
        { id: 3, question: "Which non-comedic Taiwanese cinematic title is cited as utilizing mockumentary techniques to intensify fear?", options: ["A. Cape No. 7", "B. Incantation", "C. A Sun", "D. Yi Yi"], answer: "B", explanation: "細節題。第三段明確舉出台灣現象級恐怖片《咒》（Incantation）為運用此類手法的範例。" },
        { id: 4, question: "What dramatic tool is highlighted for creating profound emotional resonance during mockumentary interviews?", options: ["A. Sudden silence and subtle facial expressions", "B. Massive computerized pyrotechnic explosions", "C. High-speed automobile races", "D. Loud electronic synthesizer soundtracks"], answer: "A", explanation: "細節題。第二段提及情緒張力常藉由突如其來的沉寂（silence）或細膩的面部表情所形塑。" }
      ]
    }
  },

  "Unit 8": {
    title: "What to Know About the Melamine Sponge",
    chineseTitle: "一擦就乾淨？看懂科技海綿的神奇功效",
    passage: `Day 1\nDo you have trouble removing dirty spots? Try using a melamine sponge! The sponge feels soft, but it works like fine sandpaper. The melamine sponge has many tiny, hard parts inside. Gently rub the sponge over the dirty spot. These tiny, hard parts can get into small cracks on a surface and take the dirt out. People often use the sponge on shoes, tables, walls, and sinks.\n\nThe melamine sponge only needs a little water—no soap or cleaner is needed. It works especially well against stubborn stains. For example, black marks on shoes and fingerprints on walls may disappear after just a few wipes. The sponge is firm enough to be cut into small pieces without falling apart. That's why it can reach corners that cloths and regular sponges cannot.\n\nFor these reasons, many families see the melamine sponge as a handy helper around the house. However, the sponge is not perfect—it also has its limits.\n\nDay 2\nEven though melamine sponges are popular, they aren't suitable for every material. Their rough texture can damage shiny surfaces. They can leave scratches on screens, car paint, and non-stick pans. Because of this, it's advisable to test the sponge on a small area before using it on the whole surface.\n\nAnother limit is that the sponge doesn't usually last very long. As people use it, the sponge gradually breaks into smaller pieces. This happens because the tiny, hard parts inside come off during cleaning.\n\nThere is also a safety concern to keep in mind. Hot water and oil can make the sponge break down faster. When this happens, the sponge may give off harmful particles. For this reason, the sponge should not be used on things like cups and bowls. After cleaning, you should clean the surface again with water to wash away any small pieces.\n\nEvery cleaning tool has its pros and cons, and the melamine sponge is no exception. So, use the sponge wisely to get the best results.`,
    chineseTranslation: `【第 1 天】\n頑固污漬讓你傷透腦筋嗎？不妨試試科技海綿（Melamine Sponge）！它觸感柔韌，本質卻猶如極細砂紙。海綿內部密布微小堅硬的樹脂結構，只要輕輕擦拭，這些微粒便能深入物體表面的細微隙縫將污垢掃除。人們常用於清潔白鞋、桌面、牆面與洗手槽。\n科技海綿只需沾取少許清水，無須任何肥皂或化學清潔劑，對付陳年頑垢尤具奇效。舉凡球鞋黑痕或牆上指紋，輕抹數次便杳無蹤影。此外，它質地緊實，可隨意裁切成小塊而不碎裂，能深入抹布與傳統海綿難以觸及的死角。\n正因如此，科技海綿被視為居家的清潔神隊友。然而它絕非萬靈丹——亦有其不可忽視的極限。\n\n【第 2 天】\n儘管科技海綿炙手可熱，卻非適用於所有材質。其粗糙微結構易損毀高光澤表面，可能在電子螢幕、汽車烤漆與不沾鍋上刮擦出不可逆的細痕。因此，使用於大面積前，切記先在隱蔽小角落進行局部測試。\n另一項限制在於耗損迅速。隨著反覆擦拭，海綿會漸次剝落縮小，宛如橡皮擦般自然磨耗。\n更關鍵的是安全顧慮：高溫熱水與油脂會加速其化學結構分解，釋放出潛在有害微粒。因此切忌將其用於洗滌碗盤餐具！擦拭完畢後，亦應以清水徹底沖洗物體表面，洗淨殘留屑屑。\n工欲善其事，必先利其器。深諳其優劣特質，方能發揮科技海綿的最佳功效。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "sandpaper", pos: "n.", meaning: "砂紙", collocations: "fine sandpaper 細砂紙" },
        { id: 2, word: "stubborn", pos: "adj.", meaning: "頑固的、難去除的", collocations: "stubborn stains 頑垢" },
        { id: 3, word: "texture", pos: "n.", meaning: "質地、觸感", collocations: "rough texture 粗糙質地" },
        { id: 4, word: "advisable", pos: "adj.", meaning: "明智的、明智可取的", collocations: "it is advisable to... 建議採取..." },
        { id: 5, word: "particles", pos: "n.", meaning: "微粒、顆粒(複數)", collocations: "harmful particles 有害微粒" }
      ],
      grammarNotes: [
        { id: "G1", title: "Adj. + enough to V. (足夠...得以做...)", excerpt: "firm enough to be cut into small pieces", analysis: "形容詞 firm 置於 enough 之前，後接被動不定詞 to be cut。" }
      ],
      patternNotes: [
        { id: "P1", title: "pros and cons (優缺點、利弊得失)", excerpt: "Every cleaning tool has its pros and cons", analysis: "常用成語片語，總結事物並存的長處與限制。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'Do you have trouble removing dirty spots? Try using a melamine sponge! The sponge feels soft, but it works like fine ' },
          { type: 'vocab', text: 'sandpaper', vid: 1 },
          { type: 'text', text: '. The melamine sponge has many tiny, hard parts inside. Gently rub the sponge over the dirty spot. These tiny, hard parts can get into small cracks on a surface and take the dirt out. People often use the sponge on shoes, tables, walls, and sinks.' }
        ],
        [
          { type: 'text', text: 'The melamine sponge only needs a little water—no soap or cleaner is needed. It works especially well against ' },
          { type: 'vocab', text: 'stubborn', vid: 2 },
          { type: 'text', text: ' stains. For example, black marks on shoes and fingerprints on walls may disappear after just a few wipes. The sponge is ' },
          { type: 'grammar', text: 'firm enough to be cut into small pieces', gid: 'G1' },
          { type: 'text', text: ' without falling apart. That\'s why it can reach corners that cloths and regular sponges cannot.' }
        ],
        [
          { type: 'text', text: 'For these reasons, many families see the melamine sponge as a handy helper around the house. However, the sponge is not perfect—it also has its limits.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Even though melamine sponges are popular, they aren\'t suitable for every material. Their rough ' },
          { type: 'vocab', text: 'texture', vid: 3 },
          { type: 'text', text: ' can damage shiny surfaces. They can leave scratches on screens, car paint, and non-stick pans. Because of this, it\'s ' },
          { type: 'vocab', text: 'advisable', vid: 4 },
          { type: 'text', text: ' to test the sponge on a small area before using it on the whole surface.' }
        ],
        [
          { type: 'text', text: 'Another limit is that the sponge doesn\'t usually last very long. As people use it, the sponge gradually breaks into smaller pieces. This happens because the tiny, hard parts inside come off during cleaning.' }
        ],
        [
          { type: 'text', text: 'There is also a safety concern to keep in mind. Hot water and oil can make the sponge break down faster. When this happens, the sponge may give off harmful ' },
          { type: 'vocab', text: 'particles', vid: 5 },
          { type: 'text', text: '. For this reason, the sponge should not be used on things like cups and bowls. After cleaning, you should clean the surface again with water to wash away any small pieces.' }
        ],
        [
          { type: 'text', text: 'Every cleaning tool has its ' },
          { type: 'pattern', text: 'pros and cons', pid: 'P1' },
          { type: 'text', text: ', and the melamine sponge is no exception. So, use the sponge wisely to get the best results.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Carpenters polish raw oak planks using coarse ______ before applying wood varnish.", options: ["A. sandpaper", "B. certificate", "C. dialogue", "D. generator"], answer: "A", explanation: "【選項解析】\n- (A) sandpaper (n.) 砂紙 (正解)\n- (B) certificate (n.) 證書證照\n- (C) dialogue (n.) 對白會話\n- (D) generator (n.) 發電生成器" },
      { id: 2, question: "Dishwashing detergents struggle to eliminate greasy, ______ residue baked onto oven trays.", options: ["A. stubborn", "B. affordable", "C. multimodal", "D. intense"], answer: "A", explanation: "【選項解析】\n- (A) stubborn (adj.) 頑固難除的 (正解)\n- (B) affordable (adj.) 負擔得起的\n- (C) multimodal (adj.) 多模態的\n- (D) intense (adj.) 劇烈強烈的" },
      { id: 3, question: "The silky ______ of the evening gown felt exceptionally luxurious against the skin.", options: ["A. texture", "B. theory", "C. obstacle", "D. promotion"], answer: "A", explanation: "【選項解析】\n- (A) texture (n.) 質地手感 (正解)\n- (B) theory (n.) 理論原理\n- (C) obstacle (n.) 阻礙屏障\n- (D) promotion (n.) 升遷宣傳" },
      { id: 4, question: "Prior to administering potent medication, it is ______ to consult an experienced physician.", options: ["A. advisable", "B. clumsy", "C. greedy", "D. hostile"], answer: "A", explanation: "【選項解析】\n- (A) advisable (adj.) 明智的可取的 (正解)\n- (B) clumsy (adj.) 笨拙難看的\n- (C) greedy (adj.) 貪得無厭的\n- (D) hostile (adj.) 懷有敵意的" }
    ],
    cloze: {
      text: "Known informally as the magic eraser, the melamine foam sponge revolutionizes domestic housework. Constructed from hard resin fibers, its microporous network functions [1] ultra-fine sandpaper. Trapped soil is excavated from microscopic indentations [2] introducing harsh detergents. Users simply moisten the sponge and apply gentle pressure. Nevertheless, its abrasive properties make it unsuitable [3] polished automotive coats and delicate non-stick skillets. Furthermore, exposure to scalding water or cooking grease accelerates chemical breakdown, [4] dangerous microscopic shavings. Consequently, sanitation specialists warn [5] deploying melamine pads across dining utensils.",
      questions: [
        { id: 1, options: ["A. like", "B. as", "C. for", "D. into"], answer: "A", explanation: "works like 運作起來猶如...一般。" },
        { id: 2, options: ["A. without", "B. through", "C. beyond", "D. against"], answer: "A", explanation: "without introducing 在不使用清潔劑的情況下。" },
        { id: 3, options: ["A. for", "B. to", "C. with", "D. over"], answer: "A", explanation: "unsuitable for 不適合用於...。" },
        { id: 4, options: ["A. releasing", "B. released", "C. to release", "D. releases"], answer: "A", explanation: "分詞構句表伴隨結果，主動釋出微粒用 releasing。" },
        { id: 5, options: ["A. against", "B. from", "C. toward", "D. over"], answer: "A", explanation: "warn against V-ing 警告不可從事某事。" }
      ]
    },
    wordBank: {
      words: ["(A) advisable", "(B) cracks", "(C) damage", "(D) friction", "(E) particles", "(F) sandpaper", "(G) scratches", "(H) stains", "(I) stubborn", "(J) texture"],
      passage: "Melamine sponges present astonishing cleaning potency powered by physical [1]. The foam feels pliant, yet internally resembles microscopic [2]. When rubbed across tiled sinks, microstructures penetrate minute [3] to lift resilient grime. The block tackles [4] grease marks on footwear and walls with plain water. However, its rough [5] can inflict permanent [6] upon laptop displays and non-stick cookware. Experts insist it is [7] to patch-test discrete corners before treating broad areas. Finally, hot water induces the material to shed toxic [8], meaning the tool should never wipe kitchen tableware, preserving household safety alongside its cleaning [9] over persistent [10].",
      answers: { 1: "D", 2: "F", 3: "B", 4: "I", 5: "J", 6: "G", 7: "A", 8: "E", 9: "C", 10: "H" }
    },
    discourse: {
      options: [
        "A. Although feeling gentle to human fingertips, its internal resin web operates exactly like abrasive micro-sandpaper.",
        "B. Many professional chefs use them to flavor beef broth during international culinary tournaments.",
        "C. Misusing the sponge upon glossy paint or electronic touchscreens can leave severe, irreversible scratches.",
        "D. Melamine sponges have earned widespread fame as miraculous household stain removers requiring only plain water.",
        "E. Furthermore, hot water and grease degrade the chemical structure, releasing harmful particles near foodstuffs."
      ],
      paragraphs: [
        "Eliminating stubborn scuffs from tile grout and footwear has never been simpler thanks to modern material science. [1]",
        "[2] Without requiring soaps or caustic solvents, microscopic polymer filaments enter hairline fissures to dislodge dirt. Its firm composition allows it to be cut to scrub unreachable angles.",
        "Nevertheless, this abrasive efficacy possesses critical material constraints. [3] Users must never apply melamine pads to delicate car lacquer or non-stick Teflon cookware.",
        "Health and chemical degradation form another imperative boundary. [4] Consequently, sanitary guidelines forbid using melamine pads on soup bowls or drinking tumblers."
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "By what physical mechanism does a melamine sponge remove grime from surfaces?", options: ["A. It emits ultrasonic soundwaves that dissolve dust", "B. Its tiny hard internal structures act like fine sandpaper, penetrating microscopic cracks", "C. It contains high concentrations of bleach and chemical lye", "D. It heats up to 100 degrees Celsius automatically"], answer: "B", explanation: "細節題。第一天指出海綿內部具有無數微小堅硬的結構，如同細砂紙般深入隙縫掃除污垢。" },
        { id: 2, question: "On which of the following household items is a melamine sponge strictly NOT recommended for use?", options: ["A. Dirty athletic sneaker soles", "B. Ceramic bathroom washbasins", "C. Non-stick frying pans and electronic digital touchscreens", "D. Concrete backyard garden walls"], answer: "C", explanation: "細節題。第二天提到粗糙質地會刮傷螢幕（screens）與不沾鍋（non-stick pans）。" },
        { id: 3, question: "Why must melamine sponges never be used in combination with hot water and oil on tableware?", options: ["A. The sponge will instantly ignite into open flames", "B. Thermal heat and grease accelerate chemical breakdown, potentially releasing harmful particles", "C. It turns water into solid ice immediately", "D. The sponge dissolves completely into soapy bubbles"], answer: "B", explanation: "細節題。第二天指出熱水與油脂會加速海綿分解並釋放有害微粒，因此絕不可用於餐具。" },
        { id: 4, question: "What is the recommended best practice before applying a melamine sponge over a large surface?", options: ["A. Burning the sponge over a candle flame", "B. Testing the sponge discreetly on a small hidden area first", "C. Soaking the sponge in vinegar for 48 hours", "D. Freezing the sponge overnight"], answer: "B", explanation: "細節題。第二天建議在大面積擦拭前，應先於小區域測試（test on a small area）。" }
      ]
    }
  },

  "News 2": {
    title: "German Scientists Successfully 'Wake Up' Frozen Mouse Brain Tissue",
    chineseTitle: "大腦可以暫停？德國科學家成功冷凍並喚醒小鼠腦組織",
    passage: `A team of German scientists has successfully frozen and rewarmed mouse brain tissue while keeping important nerve functions working.\n\nThe researchers focused on the hippocampus, a part of the brain linked to learning and memory. Before freezing the tissue, they treated it with special chemicals that replaced most of the water inside the cells. Then, they used a method called vitrification. Normally, frozen water forms sharp ice crystals that cut through cells like tiny knives. Vitrification works by cooling the tissue very quickly, turning it into a glass-like state—a solid with no sharp crystals inside. This helps protect the brain's delicate structure.\n\nNext, the brain slices were rapidly cooled and stored at about -150°C for ten minutes to seven days. After thawing, the nerve connections looked almost the same as before freezing. More importantly, the neurons could send electrical signals again and even form the kind of connections needed for learning and memory. The team also tried the method on a whole mouse brain, but larger brain tissue could dehydrate or shrink.\n\nExperts say human cryosleep is still far away. However, if brain tissue can be safely "paused," doctors may gain more time to treat serious diseases. It could also help scientists improve organ preservation for transplants.`,
    chineseTranslation: `一隊德國科學家成功冷凍並回溫了小鼠的腦組織，同時保持重要的神經機能正常運作。\n研究團隊聚焦於海馬迴，這是大腦中與學習及記憶息息相關的部位。在冷凍組織之前，他們先使用特殊化學試劑處理，取代細胞內的大部分水分。隨後，他們採用了一種稱為「玻璃化（vitrification）」的技術。一般情況下，結凍的水會形成鋒利的冰晶，像微型刀片般刺破細胞。而玻璃化藉由極速降溫，將組織轉化為玻璃狀的固體，內部不帶有任何尖銳結晶，從而保護大腦精細脆弱的構造。\n接著，腦組織切片被迅速冷卻並保存在約攝氏零下 150 度的環境中，時間從十分鐘到七天不等。解凍之後，神經元之間的連結看起來與冷凍前幾無二致。更關鍵的是，神經元能再度傳遞電訊號，甚至能建立學習與記憶所需的突觸連結。團隊亦嘗試將此方法應用於完整的小鼠大腦，但較龐大的腦組織可能會面臨脫水或縮小等難題。\n專家表示人類的低溫冬眠技術依然遙遙無期。然而，若大腦組織得以安全地「按下暫停鍵」，臨床醫師將能爭取更多寶貴時間來救治重大重症，亦能助益於改善器官移植的保存技術。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "tissue", pos: "n.", meaning: "生理組織", collocations: "brain tissue 腦組織" },
        { id: 2, word: "vitrification", pos: "n.", meaning: "玻璃化(急速降溫防結晶)", collocations: "vitrification technique 玻璃化技術" },
        { id: 3, word: "delicate", pos: "adj.", meaning: "脆弱的、精細的", collocations: "delicate structure 精細結構" },
        { id: 4, word: "preservation", pos: "n.", meaning: "保存、維護", collocations: "organ preservation 器官保存" }
      ],
      grammarNotes: [
        { id: "G1", title: "while + V-ing (分詞構句表伴隨狀態)", excerpt: "while keeping important nerve functions working", analysis: "while 保留連接詞，後接動名詞短語 keeping 作為時間或伴隨狀態補充說明。" },
        { id: "G2", title: "if 引導條件假設句", excerpt: "if brain tissue can be safely 'paused'", analysis: "if 表條件假設，指出若腦組織能安全暫停，將為醫療帶來重大突破。" }
      ],
      patternNotes: [
        { id: "P1", title: "be linked to (與...息息相關/相連)", excerpt: "a part of the brain linked to learning and memory", analysis: "過去分詞片語 linked to 修飾前面名詞 the brain，表達海馬迴與學習記憶的連結。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'A team of German scientists has successfully frozen and rewarmed mouse brain ' },
          { type: 'vocab', text: 'tissue', vid: 1 },
          { type: 'text', text: ' ' },
          { type: 'grammar', text: 'while keeping important nerve functions working', gid: 'G1' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'The researchers focused on the hippocampus, ' },
          { type: 'pattern', text: 'a part of the brain linked to learning and memory', pid: 'P1' },
          { type: 'text', text: '. Before freezing the tissue, they treated it with special chemicals that replaced most of the water inside the cells. Then, they used a method called ' },
          { type: 'vocab', text: 'vitrification', vid: 2 },
          { type: 'text', text: '. Normally, frozen water forms sharp ice crystals that cut through cells like tiny knives. Vitrification works by cooling the tissue very quickly, turning it into a glass-like state—a solid with no sharp crystals inside. This helps protect the brain\'s ' },
          { type: 'vocab', text: 'delicate', vid: 3 },
          { type: 'text', text: ' structure.' }
        ],
        [
          { type: 'text', text: 'Next, the brain slices were rapidly cooled and stored at about -150°C for ten minutes to seven days. After thawing, the nerve connections looked almost the same as before freezing. More importantly, the neurons could send electrical signals again and even form the kind of connections needed for learning and memory. The team also tried the method on a whole mouse brain, but larger brain tissue could dehydrate or shrink.' }
        ],
        [
          { type: 'text', text: 'Experts say human cryosleep is still far away. However, ' },
          { type: 'grammar', text: 'if brain tissue can be safely "paused"', gid: 'G2' },
          { type: 'text', text: ', doctors may gain more time to treat serious diseases. It could also help scientists improve organ ' },
          { type: 'vocab', text: 'preservation', vid: 4 },
          { type: 'text', text: ' for transplants.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Surgeons carefully handled the donor organ's ______ membrane to prevent cellular damage.", options: ["A. delicate", "B. greedy", "C. clumsy", "D. hostile"], answer: "A", explanation: "【選項解析】\n- (A) delicate (adj.) 脆弱細緻的 (正解)\n- (B) greedy (adj.) 貪婪的\n- (C) clumsy (adj.) 笨拙難看的\n- (D) hostile (adj.) 懷敵意的" },
      { id: 2, question: "Cryogenic laboratories specialize in the long-term ______ of rare biological specimens.", options: ["A. preservation", "B. obstacle", "C. curfew", "D. dialogue"], answer: "A", explanation: "【選項解析】\n- (A) preservation (n.) 保存、儲存 (正解)\n- (B) obstacle (n.) 阻礙障礙\n- (C) curfew (n.) 宵禁\n- (D) dialogue (n.) 對白對話" },
      { id: 3, question: "Microscopic analysis revealed that the patient's muscle ______ had begun regenerating.", options: ["A. tissue", "B. generator", "C. voucher", "D. promotion"], answer: "A", explanation: "【選項解析】\n- (A) tissue (n.) 生理組織 (正解)\n- (B) generator (n.) 發電機\n- (C) voucher (n.) 代金券\n- (D) promotion (n.) 升遷宣傳" },
      { id: 4, question: "Neurologists discovered that hippocampal cellular damage is directly ______ memory impairment.", options: ["A. linked to", "B. immune to", "C. opposed to", "D. blinded by"], answer: "A", explanation: "【選項解析】\n- (A) linked to (phr.) 與...相連結、相關 (正解)\n- (B) immune to (phr.) 對...有免疫力的\n- (C) opposed to (phr.) 反對...\n- (D) blinded by (phr.) 被...所蒙蔽" }
    ],
    cloze: {
      text: "German neuroscientists have reached an unprecedented biological milestone. By cryogenically freezing and subsequently thawing neural slices, they sustained fundamental [1] in mouse brain samples. To bypass lethal ice crystal formation, scientists [2] water inside cells with protective chemical compounds. Through vitrification, tissue transitions rapidly into an amorphous glass-like state, [3] cells from laceration. Upon rewarming, dormant neurons successfully initiated electrical impulses. While whole-organ cryopreservation continues to pose challenges, this research provides invaluable pathways [4] organ storage [5] clinical medicine.",
      questions: [
        { id: 1, options: ["A. functions", "B. obstacles", "C. textures", "D. curfews"], answer: "A", explanation: "保持重要生理功能 (nerve functions)。" },
        { id: 2, options: ["A. replaced", "B. had replaced", "C. replacing", "D. replace"], answer: "A", explanation: "敘述實驗過去步驟，動詞用過去式 replaced。" },
        { id: 3, options: ["A. shielding", "B. shielded", "C. shield", "D. to shield"], answer: "A", explanation: "分詞構句表伴隨結果，主動防護用 shielding。" },
        { id: 4, options: ["A. for", "B. toward", "C. over", "D. across"], answer: "A", explanation: "pathways for sth 為...提供途徑。" },
        { id: 5, options: ["A. in", "B. onto", "C. off", "D. against"], answer: "A", explanation: "在臨床醫學領域用介系詞 in clinical medicine。" }
      ]
    },
    wordBank: {
      words: ["(A) crystals", "(B) delicate", "(C) electrical", "(D) frozen", "(E) glass-like", "(F) memory", "(G) preservation", "(H) rewarmed", "(I) tissue", "(J) vitrification"],
      passage: "Pioneering research demonstrates that complex cerebral structures can survive extreme refrigeration. Researchers focused on the hippocampus, which controls learning and [1]. Scientists extracted vital brain [2] and treated it prior to cooling. Conventional freezing generates jagged ice [3] that tear membranes. In contrast, [4] instantly solidifies fluid into a [5] matrix. Brain slices were kept [6] at -150°C and subsequently [7]. Remarkably, cells produced active [8] firing again, protecting the brain's [9] circuits. This breakthrough offers hope for clinical organ [10] protocols.",
      answers: { 1: "F", 2: "I", 3: "A", 4: "J", 5: "E", 6: "D", 7: "H", 8: "C", 9: "B", 10: "G" }
    },
    discourse: {
      options: [
        "A. Vitrification bypasses crystalline damage by solidifying cellular fluids into smooth glass.",
        "B. They immediately constructed deep space rockets designed for multi-century human exploration.",
        "C. Scientists successfully preserved and revived functional mammalian brain slices.",
        "D. These revived neurons demonstrated intact electrical conductivity necessary for cognitive recall.",
        "E. Although whole-brain preservation remains elusive, this method promises major breakthroughs in clinical transplants."
      ],
      paragraphs: [
        "Cryogenic preservation has long captured human imagination, but technical obstacles have hindered preserving neural organs.",
        "[1] Researchers targeted the delicate hippocampus, which dictates memory consolidation.",
        "Standard ice formation inflicts fatal structural shredding across vulnerable neuron fibers. [2] Consequently, the thawed slices showed no destructive microscopic fissures.",
        "[3] [4] Extending storage windows could fundamentally revolutionize surgical organ transplantation."
      ],
      answers: { 1: "C", 2: "A", 3: "D", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "Why is traditional freezing harmful to delicate biological cell tissue?", options: ["A. Freezing creates sharp ice crystals that lacerate cellular membranes like knives", "B. The temperature turns all organic tissue into poisonous radioactive gas", "C. Cells spontaneously explode into open fire", "D. Water evaporates instantly, creating total vacuum voids"], answer: "A", explanation: "細節題。第二段指出一般水結冰會形成鋒利結晶，像小刀一樣割破細胞。" },
        { id: 2, question: "How does the vitrification process shield mouse brain slices from fatal injury?", options: ["A. By boiling the tissue in high-salinity seawater", "B. By ultra-rapid cooling that converts fluid into an amorphous glass-like solid without crystals", "C. By exposing brain slices to direct infrared laser radiation", "D. By wrapping neurons in synthetic plastic foil"], answer: "B", explanation: "細節題。第二段指出玻璃化技術透過極速降溫，轉化為無結晶的玻璃狀固體。" },
        { id: 3, question: "What technical challenge emerged when scientists attempted the technique on a complete mouse brain?", options: ["A. The entire brain disintegrated into sand", "B. Larger tissue structures experienced dehydration and shrinkage", "C. The brain began speaking human languages", "D. Electrical sensors permanently fused together"], answer: "B", explanation: "細節題。第三段末句說明若應用於整顆大腦，較大組織可能會脫水或縮小。" },
        { id: 4, question: "According to medical experts, what is the most realistic near-term application of this breakthrough?", options: ["A. Sending humans into centuries-long intergalactic cryosleep next year", "B. Extending preservation windows for donor organ transplants and critical patient therapy", "C. Reviving prehistoric woolly mammoths immediately", "D. Eliminating the necessity of sleep for surgeons"], answer: "B", explanation: "主旨題。末段指出人類人體冷凍仍很遙遠，但能為治療重大疾病爭取時間並改善器官移植保存。" }
      ]
    }
  },

  "Unit 9": {
    title: "Social Prescribing: A New Path to Care",
    chineseTitle: "身心健康的跨界解藥：「社會處方箋」的療癒力",
    passage: `In Montreal, Canada, a doctor's prescription may now come with a musical surprise: two free tickets to concerts by the Orchestre symphonique de Montréal (OSM).\n\nThis is part of a one-year program that began in October 2025. It is one example of social prescribing, a growing movement that brings culture and healthcare together. Instead of just using medicine, doctors are prescribing engagement with the arts, physical activity, or time in nature. These can better support a patient's mental health.\n\nSupporters of the program point to increasing research on the effects of music. Listening to music can lower stress and improve memory and focus. Attending a live performance may also help patients feel less lonely and give them something joyful to look forward to.\n\nFor the OSM, the program is a way to welcome more people into the concert hall. Classical music can sometimes seem distant or formal, but this program opens the door to new audiences. As the program continues, its organizers hope social prescribing will spread across the country and help more people.`,
    chineseTranslation: `在加拿大蒙特婁，醫師開立的處方箋如今可能附帶一份音樂驚喜：兩張蒙特婁交響樂團（OSM）的免費音樂會門票。\n這是一項始於 2025 年 10 月、為期一年的試辦計畫。這正是「社會處方箋（social prescribing）」的具體範例，這股日益興起的浪潮將文化藝術與醫療照護融為一體。醫師不再僅仰賴傳統藥物，更開始開立參與藝術鑑賞、體能活動或徜徉大自然的「生活處方」，以更全面地支持病患的心理健康。\n該計畫的支持者指出，越來越多科學研究證實了音樂的療癒成效。聆聽音樂能舒緩壓力、增進記憶力與專注度；親臨現場聆賞演出，亦能減輕病患的孤寂感，給予他們值得欣喜期盼的生命亮點。\n對蒙特婁交響樂團而言，這項倡議亦是吸引大眾走進音樂廳的契機。古典音樂有時令人感到遙不可及或拘謹正式，但此計畫為嶄新受眾敞開了大門。隨著計畫推展，主辦方期盼社會處方箋能拓展至全國各地，造福更多人群。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "prescription", pos: "n.", meaning: "處方箋、處方藥", collocations: "doctor's prescription 醫師處方" },
        { id: 2, word: "engagement", pos: "n.", meaning: "參與、投身", collocations: "engagement with the arts 參與藝術活動" },
        { id: 3, word: "lonely", pos: "adj.", meaning: "孤獨的、寂寞的", collocations: "feel less lonely 減輕孤寂感" },
        { id: 4, word: "distant", pos: "adj.", meaning: "有距離感的、遙遠的", collocations: "seem distant or formal 顯得遙不可及" }
      ],
      grammarNotes: [
        { id: "G1", title: "Instead of + V-ing (而非...、代替...)", excerpt: "Instead of just using medicine, doctors are prescribing", analysis: "Instead of 為介系詞片語，接動名詞 using，凸顯以文化參與取代單純吃藥的新思維。" },
        { id: "G2", title: "look forward to + V-ing/N. (期盼...)", excerpt: "give them something joyful to look forward to", analysis: "to 為介系詞，形容詞 joyful 修飾不定代名詞 something，後接不定詞短語表修飾。" }
      ],
      patternNotes: [
        { id: "P1", title: "open the door to (為...敞開大門)", excerpt: "this program opens the door to new audiences", analysis: "常用比喻片語，象徵為新族群創造參與古典音樂的絕佳契機。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'In Montreal, Canada, a doctor\'s ' },
          { type: 'vocab', text: 'prescription', vid: 1 },
          { type: 'text', text: ' may now come with a musical surprise: two free tickets to concerts by the Orchestre symphonique de Montréal (OSM).' }
        ],
        [
          { type: 'text', text: 'This is part of a one-year program that began in October 2025. It is one example of social prescribing, a growing movement that brings culture and healthcare together. ' },
          { type: 'grammar', text: 'Instead of just using medicine, doctors are prescribing', gid: 'G1' },
          { type: 'text', text: ' ' },
          { type: 'vocab', text: 'engagement', vid: 2 },
          { type: 'text', text: ' with the arts, physical activity, or time in nature. These can better support a patient\'s mental health.' }
        ],
        [
          { type: 'text', text: 'Supporters of the program point to increasing research on the effects of music. Listening to music can lower stress and improve memory and focus. Attending a live performance may also help patients feel less ' },
          { type: 'vocab', text: 'lonely', vid: 3 },
          { type: 'text', text: ' and ' },
          { type: 'grammar', text: 'give them something joyful to look forward to', gid: 'G2' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'For the OSM, the program is a way to welcome more people into the concert hall. Classical music can sometimes seem ' },
          { type: 'vocab', text: 'distant', vid: 4 },
          { type: 'text', text: ' or formal, but ' },
          { type: 'pattern', text: 'this program opens the door to new audiences', pid: 'P1' },
          { type: 'text', text: '. As the program continues, its organizers hope social prescribing will spread across the country and help more people.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The physician wrote a customized medical ______ containing both therapeutic drugs and meditation.", options: ["A. prescription", "B. obstacle", "C. generator", "D. texture"], answer: "A", explanation: "【選項解析】\n- (A) prescription (n.) 處方箋 (正解)\n- (B) obstacle (n.) 障礙物\n- (C) generator (n.) 生成發電機\n- (D) texture (n.) 質地觸感" },
      { id: 2, question: "Community centers actively promote civic ______ through volunteer community gardening projects.", options: ["A. engagement", "B. silence", "C. curfew", "D. voucher"], answer: "A", explanation: "【選項解析】\n- (A) engagement (n.) 參與投身 (正解)\n- (B) silence (n.) 沉寂沉默\n- (C) curfew (n.) 宵禁\n- (D) voucher (n.) 代金抵用券" },
      { id: 3, question: "Living alone in an unfamiliar foreign metropolis often made the exchange student feel ______.", options: ["A. lonely", "B. multimodal", "C. colonial", "D. fertile"], answer: "A", explanation: "【選項解析】\n- (A) lonely (adj.) 孤單寂寞的 (正解)\n- (B) multimodal (adj.) 多模態的\n- (C) colonial (adj.) 殖民統治的\n- (D) fertile (adj.) 肥沃滋養的" },
      { id: 4, question: "The ancient galactic nebula appeared extremely ______ even through the high-powered telescope.", options: ["A. distant", "B. clumsy", "C. greedy", "D. intense"], answer: "A", explanation: "【選項解析】\n- (A) distant (adj.) 遙遠的、疏離的 (正解)\n- (B) clumsy (adj.) 笨拙難看的\n- (C) greedy (adj.) 貪得無厭的\n- (D) intense (adj.) 劇烈強烈的" }
    ],
    cloze: {
      text: "Innovative healthcare models are bridging the gap between medicine and society. In Montreal, qualified patients can receive symphonic concert passes directly [1] clinical clinics. This progressive philosophy, termed social prescribing, [2] physical treatments with artistic and ecological immersion. Medical literature demonstrates that music therapy lowers cortisol levels, [3] cognition. Furthermore, attending orchestral concerts counteracts emotional isolation, [4] an optimistic outlook. By dismantling barriers surrounding classical music, the movement enables symphony orchestras to cultivate inclusive audiences while [5] societal health.",
      questions: [
        { id: 1, options: ["A. from", "B. toward", "C. into", "D. beneath"], answer: "A", explanation: "receive passes directly from clinics 從診所領取門票。" },
        { id: 2, options: ["A. supplements", "B. supplemented", "C. to supplement", "D. supplementing"], answer: "A", explanation: "主詞 This progressive philosophy 為單數，現在式動詞用 supplements。" },
        { id: 3, options: ["A. enhancing", "B. enhanced", "C. to enhance", "D. enhances"], answer: "A", explanation: "分詞構句表伴隨結果，主動增進用 enhancing。" },
        { id: 4, options: ["A. fostering", "B. fostered", "C. to foster", "D. fosters"], answer: "A", explanation: "分詞構句表伴隨結果，主動培養樂觀視角用 fostering。" },
        { id: 5, options: ["A. advancing", "B. advanced", "C. advance", "D. advances"], answer: "A", explanation: "連接詞 while 後省略主詞與 be 動詞，保留分詞 advancing。" }
      ]
    },
    wordBank: {
      words: ["(A) audiences", "(B) classical", "(C) distant", "(D) engagement", "(E) healthcare", "(F) lonely", "(G) mental", "(H) nature", "(I) prescription", "(J) research"],
      passage: "Social prescribing transforms traditional perspectives on therapy. In Montreal, a medical [1] can include tickets to a symphony orchestra. The initiative unites cultural [2] and public [3]. Rather than strictly administering pills, practitioners recommend [4] with concerts and outdoor [5]. Clinical [6] verifies that melodies reduce psychological fatigue, boosting [7] resilience. Patients struggling with chronic isolation feel less [8]. Concurrently, the orchestra dispels perceptions that symphonies are [9] and elitist, welcoming diverse [10] into concert halls.",
      answers: { 1: "I", 2: "E", 3: "D", 4: "D", 5: "H", 6: "J", 7: "G", 8: "F", 9: "C", 10: "A" }
    },
    discourse: {
      options: [
        "A. Instead of relying exclusively upon pills, doctors prescribe creative activities and outdoor strolls.",
        "B. They cancelled all medical insurance coverage for hospital medications nationwide.",
        "C. Innovative Canadian clinics are pairing medical treatment with complimentary symphony tickets.",
        "D. For performing arts ensembles, the initiative makes elite halls accessible to broad communities.",
        "E. Scientific investigations confirm that listening to harmonious melodies mitigates chronic stress."
      ],
      paragraphs: [
        "Modern medical care is expanding beyond traditional pharmaceuticals into holistic social connections.",
        "[1] In Montreal, physicians are offering tickets to the Orchestre symphonique de Montréal as part of social prescribing. [2]",
        "Evidence from neurological studies underscores the profound physiological benefits of aesthetic experiences. [3] Attending performances provides patients with joyful events that lessen isolation.",
        "[4] This reciprocal partnership demonstrates that music and medicine can heal communities harmoniously."
      ],
      answers: { 1: "C", 2: "A", 3: "E", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What unexpected item can Canadian doctors prescribe under the Montreal pilot program?", options: ["A. Free vouchers for fast-food hamburgers", "B. Two free tickets to performances by the Orchestre symphonique de Montréal", "C. Airline flight coupons to Europe", "D. Unlimited streaming video game downloads"], answer: "B", explanation: "細節題。第一段指出處方箋附帶兩張蒙特婁交響樂團（OSM）的免費音樂會門票。" },
        { id: 2, question: "What core philosophy defines the concept of 'social prescribing'?", options: ["A. Replacing medical doctors with robotic artificial algorithms", "B. Integrating cultural engagement, exercise, and nature with healthcare to support mental wellness", "C. Mandatory isolation of hospital patients in quiet rooms", "D. Banning all pharmaceutical medications legally"], answer: "B", explanation: "細節題。第二段說明社會處方箋結合文化與醫療，透過藝術、運動與大自然促進身心健康。" },
        { id: 3, question: "What physiological and psychological benefits of music are highlighted in the passage?", options: ["A. Lowering stress while improving memory, concentration, and alleviating loneliness", "B. Curing broken bones overnight", "C. Replacing the need for daily food consumption", "D. Enhancing physical jumping height"], answer: "A", explanation: "細節題。第三段提及音樂能降低壓力、提升記憶專注力，並減輕孤獨感。" },
        { id: 4, question: "How does the initiative mutually benefit the Orchestre symphonique de Montréal (OSM)?", options: ["A. It earns the orchestra millions in government fines", "B. It breaks down perceptions of elitism and welcomes new audiences into classical concert halls", "C. It replaces human musicians with digital speakers", "D. It allows musicians to skip daily rehearsals"], answer: "B", explanation: "細節題。第四段指出計畫消除了古典音樂高不可攀的刻板印象，吸引更多新觀眾。" }
      ]
    }
  },

  "Unit 10": {
    title: "More Than Just Lines: Fun Facts About Fingerprints",
    chineseTitle: "指紋——藏在指尖上的獨特密碼",
    passage: `Day 1\nTake a close look at your fingerprints. These patterns may look simple, but they are unique to you. Scientists believe fingerprints form inside the womb. They are shaped by both genes and what each baby experiences before birth. That's why no two people—not even identical twins—share the same fingerprints. Yet, in very rare cases, some people are born without fingerprints.\n\nFingerprints stay the same throughout your life. As you grow, they get bigger, but the patterns do not change. Even after small cuts or burns, the skin heals in a way that keeps the original design. Because these patterns last a lifetime, fingerprints are very useful for identification. The police have used them for over 100 years to solve crimes and confirm identities.\n\nFingerprints are not just for catching criminals, though. They also improve our sense of touch. When we touch something, the ridges make tiny vibrations. These vibrations help our fingers sense differences. For example, silk and wool feel very different when we touch them.\n\nDay 2\nHumans are not the only animals with fingerprints. Some primates, such as monkeys and apes, have them, too. This may not seem very surprising because primates are closely related to humans. Their fingerprints help them hold onto branches and other surfaces as they move around.\n\nTo many people's surprise, koalas have fingerprints as well. Unlike monkeys and apes, koalas are not primates. Even so, their fingerprint patterns are almost identical to ours! Koalas developed fingerprints for practical reasons. The ridges may assist them in grasping things and gripping tree branches as they climb. What's more, their fingerprints play a role in how they choose food. Koalas are famously picky eaters. They prefer certain kinds of eucalyptus leaves, especially young and fresh ones. Their sensitive fingers help them inspect the texture of leaves. As a result, they can choose the leaves they want more easily.\n\nFingerprints are small, but they have a big story to tell. They show who we are, how we feel things, and how some animals are like us.`,
    chineseTranslation: `【第 1 天】\n仔細端詳你的指紋吧！這些看似簡約的紋理，對每個人而言皆是獨一無二的印記。科學家認為指紋在母體子宮內便已成形，由先天基因與胎兒出生前在胎內所經歷的微環境共同塑造成型。這正是為何這世上絕無指紋完全相同的兩人——即使是同卵雙胞胎亦然！然而在極為罕見的案例中，亦有人天生不帶指紋。\n指紋終其一生恆常不變。隨著年歲增長，指紋雖會等比例放大，但紋樣構造絕不變更。即便歷經輕微劃傷或灼燙，皮膚癒合後仍會維持最初的紋路。正因指紋終生不變，它成為身分辨識不可或缺的利器；警方運用指紋偵破懸案、確認身分已有百餘年歷史。\n然而指紋絕非僅用於緝凶。它亦大幅提升了人類的觸覺敏銳度。當指尖撫過物體表面時，指紋脊紋會產生細微震顫，幫助手指辨識細微的觸感差異，例如撫摸絲綢與羊毛時能感受出截然不同的質地。\n\n【第 2 天】\n人類絕非唯一擁有指紋的生物。諸如猴子與類人猿等靈長類動物亦生有指紋，這並不令人驚訝，因其與人類演化親緣甚近，指紋有助於牠們在攀爬移動時牢牢攀附樹枝。\n令人嘖嘖稱奇的是，無尾熊居然也擁有指紋！無尾熊並非靈長類，但其指紋紋理竟與人類幾無二致！無尾熊演化出指紋源於極務實的生存考量：脊紋有助於牠們攀爬抓握尤加利樹枝；更關鍵的是，指紋在牠們挑選食物時扮演要角。無尾熊是出名的挑食客，專好特定品種鮮嫩幼葉，敏感的指尖能協助牠們檢視葉片的觸感質地，從而輕鬆挑出中意的鮮葉。\n指紋雖小，背後的生命故事卻浩瀚無邊。它彰顯了我們的獨特性、形塑了我們感官的敏銳度，更揭示了自然界跨物種的演化奇蹟。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "identification", pos: "n.", meaning: "身分確認、識別", collocations: "useful for identification 有助於身分識別" },
        { id: 2, word: "vibrations", pos: "n.", meaning: "震動、震顫(複數)", collocations: "tiny vibrations 微小震動" },
        { id: 3, word: "primates", pos: "n.", meaning: "靈長類動物(複數)", collocations: "monkeys, apes, and other primates 猴子與靈長類" },
        { id: 4, word: "identical", pos: "adj.", meaning: "完全相同的、一模一樣的", collocations: "almost identical to ours 與我們幾無二致" },
        { id: 5, word: "inspect", pos: "v.", meaning: "檢驗、視察", collocations: "inspect the texture 檢視觸感質地" }
      ],
      grammarNotes: [
        { id: "G1", title: "That's why + S. + V. (那就是為什麼...)", excerpt: "That's why no two people share the same fingerprints", analysis: "that 代表前句胎內基因與環境交互作用的成因，why 引導表語名詞子句。" },
        { id: "G2", title: "play a role in (在...中扮演角色)", excerpt: "fingerprints play a role in how they choose food", analysis: "常用句型，in 後接名詞或 how 引導的名詞子句。" }
      ],
      patternNotes: [
        { id: "P1", title: "not just for A, but also B (不僅為了 A，還能 B)", excerpt: "Fingerprints are not just for catching criminals", analysis: "常見擴充句型，強調指紋兼具司法辨識與強化觸覺的雙重效益。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'Take a close look at your fingerprints. These patterns may look simple, but they are unique to you. Scientists believe fingerprints form inside the womb. They are shaped by both genes and what each baby experiences before birth. ' },
          { type: 'grammar', text: 'That\'s why no two people share the same fingerprints', gid: 'G1' },
          { type: 'text', text: '—not even identical twins. Yet, in very rare cases, some people are born without fingerprints.' }
        ],
        [
          { type: 'text', text: 'Fingerprints stay the same throughout your life. As you grow, they get bigger, but the patterns do not change. Even after small cuts or burns, the skin heals in a way that keeps the original design. Because these patterns last a lifetime, fingerprints are very useful for ' },
          { type: 'vocab', text: 'identification', vid: 1 },
          { type: 'text', text: '. The police have used them for over 100 years to solve crimes and confirm identities.' }
        ],
        [
          { type: 'pattern', text: 'Fingerprints are not just for catching criminals', pid: 'P1' },
          { type: 'text', text: ', though. They also improve our sense of touch. When we touch something, the ridges make tiny ' },
          { type: 'vocab', text: 'vibrations', vid: 2 },
          { type: 'text', text: '. These vibrations help our fingers sense differences. For example, silk and wool feel very different when we touch them.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Humans are not the only animals with fingerprints. Some ' },
          { type: 'vocab', text: 'primates', vid: 3 },
          { type: 'text', text: ', such as monkeys and apes, have them, too. This may not seem very surprising because primates are closely related to humans. Their fingerprints help them hold onto branches and other surfaces as they move around.' }
        ],
        [
          { type: 'text', text: 'To many people\'s surprise, koalas have fingerprints as well. Unlike monkeys and apes, koalas are not primates. Even so, their fingerprint patterns are almost ' },
          { type: 'vocab', text: 'identical', vid: 4 },
          { type: 'text', text: ' to ours! Koalas developed fingerprints for practical reasons. The ridges may assist them in grasping things and gripping tree branches as they climb. What\'s more, their fingerprints ' },
          { type: 'grammar', text: 'play a role in how they choose food', gid: 'G2' },
          { type: 'text', text: '. Koalas are famously picky eaters. They prefer certain kinds of eucalyptus leaves, especially young and fresh ones. Their sensitive fingers help them ' },
          { type: 'vocab', text: 'inspect', vid: 5 },
          { type: 'text', text: ' the texture of leaves. As a result, they can choose the leaves they want more easily.' }
        ],
        [
          { type: 'text', text: 'Fingerprints are small, but they have a big story to tell. They show who we are, how we feel things, and how some animals are like us.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Immigration authorities mandate biometric ______ before approving overseas passports.", options: ["A. identification", "B. obstacle", "C. generator", "D. dialogue"], answer: "A", explanation: "【選項解析】\n- (A) identification (n.) 身分證明、識別 (正解)\n- (B) obstacle (n.) 障礙絆腳石\n- (C) generator (n.) 生成發電裝置\n- (D) dialogue (n.) 對白口語" },
      { id: 2, question: "Smartphones utilize acoustic ______ to notify users of urgent incoming messages.", options: ["A. vibrations", "B. textures", "C. curfews", "D. vouchers"], answer: "A", explanation: "【選項解析】\n- (A) vibrations (n.) 震動震顫 (正解)\n- (B) textures (n.) 質地觸感\n- (C) curfews (n.) 宵禁\n- (D) vouchers (n.) 折價抵用券" },
      { id: 3, question: "Anthropologists conduct extensive behavioral observations across African ______.", options: ["A. primates", "B. generators", "C. obstacles", "D. textures"], answer: "A", explanation: "【選項解析】\n- (A) primates (n.) 靈長類動物 (正解)\n- (B) generators (n.) 發電機組\n- (C) obstacles (n.) 障礙難題\n- (D) textures (n.) 質地手感" },
      { id: 4, question: "Customs inspectors carefully ______ baggage to intercept unauthorized biological contraband.", options: ["A. inspect", "B. vanish", "C. forfeit", "D. threaten"], answer: "A", explanation: "【選項解析】\n- (A) inspect (v.) 檢查視察 (正解)\n- (B) vanish (v.) 憑空消逝\n- (C) forfeit (v.) 沒收喪失\n- (D) threaten (v.) 恐嚇威脅" }
    ],
    cloze: {
      text: "Epidermal ridges, commonly known as fingerprints, represent exceptional biological identifiers. Formed deep inside the maternal womb, these intricate swirls [1] even between identical twins. Over a human lifespan, fingerprint motifs endure permanently, [2] superficial abrasion. Forensic detectives rely [3] ridge analysis to unravel enigmatic criminal investigations. Beyond biometric security, friction ridges amplify tactile sensitivity [4] inducing micro-vibrations. Outside humanity, arboreal primates and Australian marsupials like koalas possess comparable ridges, [5] them to inspect delicate eucalyptus foliage.",
      questions: [
        { id: 1, options: ["A. differ", "B. differs", "C. differing", "D. to differ"], answer: "A", explanation: "複數主詞 these intricate swirls 搭配原形動詞 differ。" },
        { id: 2, options: ["A. despite", "B. because", "C. although", "D. unless"], answer: "A", explanation: "介系詞 despite 表「儘管經歷表面擦傷」。" },
        { id: 3, options: ["A. on", "B. into", "C. toward", "D. against"], answer: "A", explanation: "rely on 為固定搭配，表「依賴、仰仗」。" },
        { id: 4, options: ["A. by", "B. with", "C. for", "D. off"], answer: "A", explanation: "by inducing 藉由引發微震動。" },
        { id: 5, options: ["A. aiding", "B. aided", "C. to aid", "D. aids"], answer: "A", explanation: "分詞構句表伴隨結果，主動協助用 aiding。" }
      ]
    },
    wordBank: {
      words: ["(A) branches", "(B) criminals", "(C) identical", "(D) inspect", "(E) koalas", "(F) lifetime", "(G) patterns", "(H) primates", "(I) ridges", "(J) vibrations"],
      passage: "Fingerprints embody an astounding evolutionary innovation. Each human possesses singular [1] that never alter over a [2]. Microscopic epidermal [3] produce minute [4] that heighten human tactile acuity. For over a century, police have apprehended [5] via dermal records. In the animal kingdom, arboreal [6] like chimpanzees wield fingerprints to clasp jungle [7]. Astonishingly, Australian [8] exhibit dermal signatures almost [9] to humans, utilizing heightened fingertip sensitivity to [10] tender eucalyptus leaves.",
      answers: { 1: "G", 2: "F", 3: "I", 4: "J", 5: "B", 6: "H", 7: "A", 8: "E", 9: "C", 10: "D" }
    },
    discourse: {
      options: [
        "A. Beyond forensic crime investigation, friction ridges greatly amplify tactile perception.",
        "B. Koalas were banned from climbing eucalyptus trees due to forest regulations.",
        "C. Formed in the womb by genetics and movement, no two individuals possess identical fingerprints.",
        "D. Although not primates, Australian koalas possess fingerprints nearly indistinguishable from humans.",
        "E. These unique epidermal ridges remain unchanged throughout an entire human lifetime."
      ],
      paragraphs: [
        "Human fingertips are covered with intricate swirling ridges that seem ordinary at first glance.",
        "[1] Even genetically identical twins display distinct fingertip patterns from birth. [2] The skin consistently regenerates following minor cuts or abrasions, preserving original configurations.",
        "[3] When touching rough textures, minute vibrations travel across nerve endings to convey delicate distinctions.",
        "Dermal friction ridges also evolved independently in certain animal species. [4] For these marsupials, sensitive pads aid in gripping branches and examining the tenderness of food."
      ],
      answers: { 1: "C", 2: "E", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "Why do identical twins NOT have the exact same fingerprints?", options: ["A. Twins undergo mandatory surgical fingerprint alterations at birth", "B. Fingerprint patterns are shaped by both genetics and unique intrauterine experiences in the womb", "C. One twin always inherits fingerprints from the father and the other from the mother", "D. Fingerprints change randomly every five years"], answer: "B", explanation: "細節題。第一天指出指紋由基因與子宮內的環境經歷共同塑造，因此同卵雙胞胎指紋亦不相同。" },
        { id: 2, question: "How do fingerprint ridges actively enhance the human sense of touch?", options: ["A. By secreting sweet perfume onto fingertips", "B. By producing tiny vibrations when passing over surfaces, transmitting subtle tactile differences", "C. By changing color when touching hot metals", "D. By generating electrical magnetic forces"], answer: "B", explanation: "細節題。第一天末段說明撫摸物體時，脊紋會產生細微震顫，幫助手指感知質地差異。" },
        { id: 3, question: "What surprising non-primate animal is identified as having fingerprints almost identical to humans?", options: ["A. The Australian koala", "B. The Antarctic emperor penguin", "C. The African red panda", "D. The Canadian beaver"], answer: "A", explanation: "細節題。第二天明確指出無尾熊（koalas）並非靈長類，但其指紋紋理與人類幾乎一模一樣。" },
        { id: 4, question: "How do fingerprints assist koalas in their daily feeding habits?", options: ["A. They allow koalas to catch fast-swimming river salmon", "B. Their sensitive fingertips allow them to inspect and select tender, fresh eucalyptus leaves", "C. They help koalas crack hard coconut shells like hammers", "D. They store extra water for digestion"], answer: "B", explanation: "細節題。第二天提及無尾熊是挑食客，敏銳的手指能檢視尤加利葉的質地（inspect texture），精準挑選嫩葉。" }
      ]
    }
  },

  "Unit 11": {
    title: "A Growing Debate: Should Some Places Say 'No Kids'?",
    chineseTitle: "包容還是設限？禁童空間爭議",
    passage: `Day 1\nIn countries like Japan, South Korea, and Taiwan, fewer people are having children than before. Many governments are actively encouraging people to have more babies. Yet complaints about noise from children in restaurants, cafés, and other public places are appearing online more frequently. People want more babies, but the sound of them is often unwelcome in public spaces. This growing tension has sparked a debate about whether such public places should be for adults only.\n\nSupporters of this idea argue that some places are meant to remain calm and quiet. For example, fine restaurants, museums, or art shows may lose their appeal when children are running and shouting. In such cases, customers pay not only for service but also for comfort.\n\nMany also believe business owners should have the right to set their own policies. These rules—like age limits or quiet hours—help customers enjoy a peaceful experience without interruption. Such policies are not about shutting children out. They are about preserving the experience adults pay for.\n\nDay 2\nOthers disagree with these limits. They believe children are members of society and should not be denied entry. Parents are paying customers, too. They also deserve to enjoy a meal or a cup of coffee. However, not every parent has someone to look after their children. When that happens, they have no choice but to bring their children along.\n\nIn addition, those who oppose these limits point to a growing problem in low-birth societies. As the number of children declines, adults may have less contact with them. This distance might weaken people's patience and understanding toward children. They also argue that children need chances to learn appropriate public behavior through real-life experience. If children are kept out, they lose chances to learn how to act in public.\n\nPerhaps the best way forward is shared effort. Parents can guide their children, while other adults offer patience in return. When both sides try, public spaces can be welcoming for everyone—children and adults alike.`,
    chineseTranslation: `【第 1 天】\n在日本、南韓與臺灣等國，生育率正持續探底。多國政府無不積極祭出政策鼓勵生育，然而在餐廳、咖啡館等公共場所，針對孩童喧鬧的網路抱怨卻與日俱增。社會渴求新生兒，但孩童的聲音在公共場域中卻常不受歡迎。這股日益緊繃的矛盾，掀起了公共場所是否應設立「成人專屬」禁童規定的激烈論戰。\n贊成設限者主張，某些場所本質上就應維持靜謐。舉凡精緻高級餐廳、博物館或藝廊展覽，一旦充斥孩童的奔跑呼喊，往往頓失高雅魅力。在這些情境下，顧客所付出的費用不僅是為了餐點服務，更是購買一份放鬆身心的舒適感。\n許多人亦深信店家理應享有自訂店規的商業自由。透過年齡限制或安靜時段等措施，能保障顧客享有不受干擾的平靜體驗。此類規範並非惡意排擠孩童，而是捍衛消費者付費追求的精緻體驗。\n\n【第 2 天】\n反對設限者則持相反立場。他們主張孩童同為社會大家庭的一份子，不應被剝奪進入公共空間的權利。為人父母者同樣是消費者，亦有權享受美食或啜飲咖啡。何況並非每位家長都能找到臨時托育幫手，無奈之餘只能將孩子帶在身旁。\n此外，反對者更點出少子化社會的潛在危機：隨著孩童數量銳減，成年族群與孩童的相處互動越發疏離，這種距離感將逐步侵蝕社會大眾對幼童的同理與包容。再者，孩童唯有透過真實生活的日常歷練，方能習得合宜的公共禮儀；倘若將孩童全面隔絕在外，他們便痛失了在生活中學習成長的契機。\n或許最理想的解方是雙向的共同努力：家長在公共場合悉心引導管教，而其他成年人則報以更多包容與體諒。唯有雙方皆釋出善意，公共空間才能成為兼顧每個人——無論老幼皆能備感溫暖的和諧環境。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "tension", pos: "n.", meaning: "緊張關係、張力", collocations: "growing tension 日益緊繃的對立" },
        { id: 2, word: "appeal", pos: "n.", meaning: "吸引力、魅力", collocations: "lose its appeal 失去吸引力" },
        { id: 3, word: "interruption", pos: "n.", meaning: "打擾、中斷", collocations: "without interruption 不受打擾地" },
        { id: 4, word: "appropriate", pos: "adj.", meaning: "恰當的、適當的", collocations: "appropriate behavior 合宜行為" }
      ],
      grammarNotes: [
        { id: "G1", title: "not only A but also B (不僅 A 而且 B)", excerpt: "customers pay not only for service but also for comfort", analysis: "對等連接詞引導兩介系詞片語，凸顯消費者對安寧氛圍的價值追求。" },
        { id: "G2", title: "have no choice but to V. (別無選擇只能...)", excerpt: "they have no choice but to bring their children along", analysis: "固定句型，but 為介系詞表「除...之外」，後接不定詞。" }
      ],
      patternNotes: [
        { id: "P1", title: "A and B alike (無論是 A 還是 B 都一樣)", excerpt: "welcoming for everyone—children and adults alike", analysis: "alike 置於名詞後作副詞，強調老幼同享友善空間的理想願景。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'In countries like Japan, South Korea, and Taiwan, fewer people are having children than before. Many governments are actively encouraging people to have more babies. Yet complaints about noise from children in restaurants, cafés, and other public places are appearing online more frequently. People want more babies, but the sound of them is often unwelcome in public spaces. This growing ' },
          { type: 'vocab', text: 'tension', vid: 1 },
          { type: 'text', text: ' has sparked a debate about whether such public places should be for adults only.' }
        ],
        [
          { type: 'text', text: 'Supporters of this idea argue that some places are meant to remain calm and quiet. For example, fine restaurants, museums, or art shows may lose their ' },
          { type: 'vocab', text: 'appeal', vid: 2 },
          { type: 'text', text: ' when children are running and shouting. In such cases, ' },
          { type: 'grammar', text: 'customers pay not only for service but also for comfort', gid: 'G1' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'Many also believe business owners should have the right to set their own policies. These rules—like age limits or quiet hours—help customers enjoy a peaceful experience without ' },
          { type: 'vocab', text: 'interruption', vid: 3 },
          { type: 'text', text: '. Such policies are not about shutting children out. They are about preserving the experience adults pay for.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Others disagree with these limits. They believe children are members of society and should not be denied entry. Parents are paying customers, too. They also deserve to enjoy a meal or a cup of coffee. However, not every parent has someone to look after their children. When that happens, ' },
          { type: 'grammar', text: 'they have no choice but to bring their children along', gid: 'G2' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'In addition, those who oppose these limits point to a growing problem in low-birth societies. As the number of children declines, adults may have less contact with them. This distance might weaken people\'s patience and understanding toward children. They also argue that children need chances to learn ' },
          { type: 'vocab', text: 'appropriate', vid: 4 },
          { type: 'text', text: ' public behavior through real-life experience. If children are kept out, they lose chances to learn how to act in public.' }
        ],
        [
          { type: 'text', text: 'Perhaps the best way forward is shared effort. Parents can guide their children, while other adults offer patience in return. When both sides try, public spaces can be welcoming for everyone—' },
          { type: 'pattern', text: 'children and adults alike', pid: 'P1' },
          { type: 'text', text: '.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Geopolitical ______ escalated along the border following maritime disagreements.", options: ["A. tension", "B. blanket", "C. texture", "D. voucher"], answer: "A", explanation: "【選項解析】\n- (A) tension (n.) 緊張關係、局勢 (正解)\n- (B) blanket (n.) 毛毯\n- (C) texture (n.) 質地觸感\n- (D) voucher (n.) 代金券" },
      { id: 2, question: "The luxury boutique resort lost much of its serene ______ after construction began nearby.", options: ["A. appeal", "B. generator", "C. obstacle", "D. dialogue"], answer: "A", explanation: "【選項解析】\n- (A) appeal (n.) 吸引力魅力 (正解)\n- (B) generator (n.) 發電裝置\n- (C) obstacle (n.) 障礙阻礙\n- (D) dialogue (n.) 對白口語" },
      { id: 3, question: "The symphony soloist played the entire concertos without any technical ______.", options: ["A. interruption", "B. silence", "C. curfew", "D. promotion"], answer: "A", explanation: "【選項解析】\n- (A) interruption (n.) 干擾中斷 (正解)\n- (B) silence (n.) 沉默寂靜\n- (C) curfew (n.) 宵禁\n- (D) promotion (n.) 晉升宣傳" },
      { id: 4, question: "School principals emphasize establishing ______ digital conduct on social forums.", options: ["A. appropriate", "B. frozen", "C. greedy", "D. clumsy"], answer: "A", explanation: "【選項解析】\n- (A) appropriate (adj.) 合宜適當的 (正解)\n- (B) frozen (adj.) 冷凍結冰的\n- (C) greedy (adj.) 貪得無厭的\n- (D) clumsy (adj.) 笨拙難看的" }
    ],
    cloze: {
      text: "Across East Asian societies facing severe demographic contractions, a contentious social friction has surfaced. While regional administrators urge citizens [1] birth rates, café owners report widespread irritation regarding rambunctious children. Advocates of adult-only commercial venues argue that consumers pay [2] peace and quiet. Conversely, opponents assert that banishing juveniles constitutes unfair marginalization. If youths [3] from community hubs, they cannot acquire social manners through empirical immersion. In the long run, societal cohesion [4] upon reciprocal empathy, demanding vigilant parental guidance [5] mutual adult tolerance.",
      questions: [
        { id: 1, options: ["A. to elevate", "B. elevate", "C. elevating", "D. elevated"], answer: "A", explanation: "urge sb to V. 督促某人做某事。" },
        { id: 2, options: ["A. for", "B. with", "C. into", "D. against"], answer: "A", explanation: "pay for 為...付費。" },
        { id: 3, options: ["A. are excluded", "B. will exclude", "C. exclude", "D. excluded"], answer: "A", explanation: "條件子句被動語態用現在式 are excluded。" },
        { id: 4, options: ["A. relies", "B. rely", "C. relying", "D. to rely"], answer: "A", explanation: "主詞 societal cohesion 為單數，現在式動詞用 relies。" },
        { id: 5, options: ["A. beside", "B. alongside", "C. under", "D. despite"], answer: "B", explanation: "alongside 表「並肩、與...並存」。" }
      ]
    },
    wordBank: {
      words: ["(A) appeal", "(B) appropriate", "(C) coffee", "(D) comfort", "(E) entry", "(F) experience", "(G) patience", "(H) public", "(I) quiet", "(J) tension"],
      passage: "The controversy over child-free zones reflects contemporary generational [1]. Proponents insist that upscale bistros forfeit customer [2] when infants scream loudly. Patrons invest money not merely for dining but for tranquil [3]. Consequently, merchants should reserve the liberty to maintain [4] atmospheres. In opposition, critics contend that children deserve unhindered [5] to public spaces. Barring youngsters deprives them of valuable real-life social [6]. Furthermore, isolating youths diminishes communal [7] across aging populations. Harmonious [8] environments require shared accountability, where parents model [9] decorum and patrons savor [10] in mutual consideration.",
      answers: { 1: "J", 2: "A", 3: "D", 4: "I", 5: "E", 6: "F", 7: "G", 8: "H", 9: "B", 10: "C" }
    },
    discourse: {
      options: [
        "A. Paying patrons at upscale art exhibitions and fine bistros rightfully expect calm and tranquil environments.",
        "B. They enacted legislation mandating that every toddler wear noise-cancelling headphones outside.",
        "C. A paradoxical clash has arisen in low-fertility nations between promoting childbirth and tolerating public children.",
        "D. Barring families completely deprives children of crucial settings to learn proper social etiquette.",
        "E. The optimal path requires parents to actively discipline their children while fellow patrons practice empathy."
      ],
      paragraphs: [
        "East Asian democracies are grappling with historically depressed birth rates alongside shifting urban sensibilities.",
        "[1] While authorities promote larger families, online complaints about loud children in restaurants have skyrocketed.",
        "Supporters of child-free restrictions argue that business owners possess the right to preserve ambiance. [2] Patrons pay substantial premiums for relaxation free from chaotic interruptions.",
        "Detractors, however, emphasize that children are valid members of society who should not be ostracized. [3] [4]"
      ],
      answers: { 1: "C", 2: "A", 3: "D", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What cultural contradiction is highlighted in Day 1 regarding East Asian societies?", options: ["A. People want higher taxes but refuse to buy local goods", "B. Governments encourage childbirth, yet citizens often reject the presence and noise of children in public spaces", "C. Schools have closed all playgrounds to build parking garages", "D. Only elderly citizens are legally allowed to drink coffee"], answer: "B", explanation: "細節題。第一天指出社會雖鼓勵增產報國，大眾在公共場所卻常無法容忍孩童吵鬧。" },
        { id: 2, question: "According to proponents, what justification supports business owners establishing child-free rules?", options: ["A. Children always destroy commercial restaurant furniture intentionally", "B. Customers pay premiums not just for service but for tranquil comfort and unhindered ambiance", "C. Health departments legally forbid children under twelve from consuming food", "D. Waiters refuse to take orders from family tables"], answer: "B", explanation: "細節題。第一天第二、三段指出消費者花錢亦是購買一份安寧舒適，店家有權捍衛氛圍。" },
        { id: 3, question: "What developmental drawback do opponents emphasize if children are barred from public venues?", options: ["A. Children will never learn to read textbooks", "B. Children lose critical real-world opportunities to learn appropriate public conduct and social etiquette", "C. Children will forget how to walk on two legs", "D. All preschools will permanently close"], answer: "B", explanation: "細節題。第二天指出若將孩童拒之門外，孩童便痛失在現實情境中學習合宜舉止的寶貴機會。" },
        { id: 4, question: "What collaborative resolution does the author propose in the conclusion?", options: ["A. Completely banning all adults from attending restaurants on weekends", "B. Parents actively guiding their children while other adults demonstrate patience and understanding", "C. Forcing all restaurants to install soundproof cages for children", "D. Fining parents five hundred dollars every time a baby cries"], answer: "B", explanation: "主旨題。文末建議家長悉心引導管教，其他成年人則報以耐心與體諒，共創友善空間。" }
      ]
    }
  },

  "Unit 12": {
    title: "Not Just a Name: Stories Behind City Nicknames",
    chineseTitle: "城市暱稱裡的歷史、榮光與形象",
    passage: `Day 1\nCities are often known by more than one name. Besides official names, many also have nicknames that reveal a city's history, pride, or public image. Now, let's take a look at a few famous examples.\n\nVenice, Italy\nFew cities wear their nicknames as beautifully as Venice. Apart from the City of Water, one of its most famous titles is La Serenissima. This name means "the most serene." It comes from the Republic of Venice (697–1797), which was formally called La Serenissima Repubblica di Venezia (The Most Serene Republic of Venice). The nickname suggests dignity, calm, and power. It also reflects the republic's strong government, peaceful image, and many years of wealth.\n\nAnother romantic nickname for Venice is the Bride of the Sea. It comes from an old ceremony, the Marriage of the Sea. During this event, the ruler of Venice would throw a gold ring into the Adriatic Sea. This act showed the city's close bond with the sea. It was a dramatic way of saying that Venice depended on the sea for wealth, safety, and identity.\n\nDay 2\nChicago, US\nAt first glance, Chicago's nickname, the Windy City, seems easy to understand. Many people link it to the cool breezes from Lake Michigan, which sits next to the city. However, Chicago is not even the windiest city in the US. So, where did the nickname come from?\n\nOne popular explanation goes back to the late 19th century. At that time, Chicago was trying hard to promote itself and gain national attention. Its politicians and supporters often spoke proudly and made big promises about the city's future. Because of this, some people started calling Chicago "windy." In English, "windy" can also describe a person who talks too much or brags. The nickname became especially popular when Chicago and New York competed to host the 1893 World's Fair. The competition between the two cities was intense. Although people in New York made fun of Chicago's bold claims, the city eventually won and hosted the fair. The Windy City is a great example of a nickname that began as criticism but later became a badge of identity.\n\nDay 3\nJohannesburg, South Africa, and Dubai, UAE\nMost city nicknames point to just one place, but some nicknames are shared. The City of Gold is one such example. It's a title that is linked to both Johannesburg and Dubai.\n\nJohannesburg's connection to gold begins with the ground beneath it. In 1886, one of the world's largest gold mines was discovered there. The news quickly attracted miners, workers, and fortune seekers from many places. The gold industry brought in so much money that the city quickly grew into a financial center. Even today, gold remains a powerful part of Johannesburg's identity. The province where Johannesburg is located is called Gauteng. In the local language, this name means "place of gold."\n\nDubai does not have gold mines. However, in the 20th century, it became an important trading hub for gold. Dubai's location on the Persian Gulf helped connect Asia, Africa, and the Middle East. This turned the city into a major commercial center. Even now, this golden history lives on in the Dubai Gold Souk. It is currently one of the largest gold markets in the world.`,
    chineseTranslation: `【第 1 天】\n全球眾多名城皆坐擁不只一個響亮名號。除官方正式名稱外，許多暱稱更深刻折射出城市的歷史脈絡、市民驕傲或鮮明形象。現在，就讓我們一同走訪幾座具代表性的經典範例。\n義大利威尼斯：\n鮮少有城市能如威尼斯般將其別名演繹得如此綽約迷人。除了耳熟能詳的「水都」外，其最著名的尊稱之一莫過於「La Serenissima」（意即最寧靜祥和之地）。此名源自曾統治當地的威尼斯共和國（697–1797），其官方全名即為「最寧靜的威尼斯共和國」。此一雅號象徵著高貴尊嚴、祥和寧靜與威權，亦輝映出共和國穩健的政局、和平的形象與長年累積的浩瀚財富。\n威尼斯另一浪漫暱稱為「亞得里亞海新娘（Bride of the Sea）」，典出於古老的「海洋婚禮」慶典。在儀式中，威尼斯執政官會將一枚金戒擲入亞得里亞海中，象徵城市與海洋長相廝守的深厚羈絆，並以極具戲劇張力的方式宣示：威尼斯的財富、安危與身分認同皆仰仗大海所賜。\n\n【第 2 天】\n美國芝加哥：\n初聞芝加哥「風城（Windy City）」的雅號，大眾多直覺聯想到來自相鄰密西根湖畔的陣陣涼風。然而在美國氣象統計中，芝加哥連全美風力最強前十名都排不上！那麼這個別號究竟從何而來？\n廣為流傳的由來可追溯至十九世紀末。當時芝加哥正全力對外宣傳以爭取全美矚目，當地政客與擁護者經常大放厥詞、對城市的輝煌願景誇下海口。正因如此，外人開始譏諷芝加哥人「好吹噓（windy）」，在英文俚語中 windy 亦可用來形容誇誇其談、自吹自擂之人。此暱稱在芝加哥與紐約角逐 1893 年世界博覽會主辦權時益發瘋傳；儘管紐約人極盡冷嘲熱諷，芝加哥最終逆勢勝出並成功舉辦世博會。「風城」正是由譏刺貶義蛻變為城市榮耀徽章的經典傳奇。\n\n【第 3 天】\n南非約翰尼斯堡與阿聯杜拜：\n多數別名皆專屬於特定名城，但亦有共用同名之例。「黃金之城（City of Gold）」正是同時加冕於約翰尼斯堡與杜拜的榮耀稱號。\n約翰尼斯堡與黃金的緣分深植於腳下沃土。1886 年當地挖掘出全球規模最宏大的金礦之一，淘金熱迅速吸引全球礦工與冒險家蜂擁而至，金礦產業帶來的滾滾財富促成城市迅速躍升為金融重鎮。時至今日，黃金依舊是約堡不可分割的精神圖騰，其所在的豪登省（Gauteng）在當地原住民語中即意指「黃金之鄉」。\n杜拜本土雖無金礦，卻在二十世紀躍升為全球至關重要的黃金轉口貿易樞紐。地處波斯灣樞紐的地理優勢，讓杜拜串接了亞洲、非洲與中東，蛻變為國際商業核心。時至今日，這段黃金傳奇仍在「杜拜黃金市集（Gold Souk）」生生不息，名列全球規模最龐大的黃金交易殿堂之一。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "serene", pos: "adj.", meaning: "平靜寧謐的", collocations: "the most serene 最寧靜祥和的" },
        { id: 2, word: "ceremony", pos: "n.", meaning: "典禮、儀式", collocations: "ancient ceremony 古老儀式" },
        { id: 3, word: "brag", pos: "v.", meaning: "誇耀、自吹自擂", collocations: "talk too much or brag 誇誇其談" },
        { id: 4, word: "badge", pos: "n.", meaning: "徽章、標誌", collocations: "a badge of identity 認同象徵" },
        { id: 5, word: "hub", pos: "n.", meaning: "樞紐、核心中心", collocations: "major trading hub 重要貿易樞紐" }
      ],
      grammarNotes: [
        { id: "G1", title: "Few + 複數名詞 (幾乎沒有...)", excerpt: "Few cities wear their nicknames as beautifully as Venice", analysis: "Few 帶有否定語意，強調鮮少有城市如威尼斯般優雅名實相符。" },
        { id: "G2", title: "so + Adj. + that + S. + V. (如此...以致於...)", excerpt: "The gold industry brought in so much money that the city quickly grew", analysis: "因果程度句型，說明黃金產業帶來的龐大財富促使城市躍升為金融中心。" }
      ],
      patternNotes: [
        { id: "P1", title: "at first glance (乍看之下)", excerpt: "At first glance, Chicago's nickname seems easy to understand", analysis: "常用轉折開頭片語，隨後帶出出人意表的事實真相。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'Cities are often known by more than one name. Besides official names, many also have nicknames that reveal a city\'s history, pride, or public image. Now, let\'s take a look at a few famous examples.' }
        ],
        [
          { type: 'text', text: 'Venice, Italy\n' },
          { type: 'grammar', text: 'Few cities wear their nicknames as beautifully as Venice', gid: 'G1' },
          { type: 'text', text: '. Apart from the City of Water, one of its most famous titles is La Serenissima. This name means "the most ' },
          { type: 'vocab', text: 'serene', vid: 1 },
          { type: 'text', text: '." It comes from the Republic of Venice (697–1797), which was formally called La Serenissima Repubblica di Venezia (The Most Serene Republic of Venice). The nickname suggests dignity, calm, and power. It also reflects the republic\'s strong government, peaceful image, and many years of wealth.' }
        ],
        [
          { type: 'text', text: 'Another romantic nickname for Venice is the Bride of the Sea. It comes from an old ' },
          { type: 'vocab', text: 'ceremony', vid: 2 },
          { type: 'text', text: ', the Marriage of the Sea. During this event, the ruler of Venice would throw a gold ring into the Adriatic Sea. This act showed the city\'s close bond with the sea. It was a dramatic way of saying that Venice depended on the sea for wealth, safety, and identity.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Chicago, US\n' },
          { type: 'pattern', text: 'At first glance', pid: 'P1' },
          { type: 'text', text: ', Chicago\'s nickname, the Windy City, seems easy to understand. Many people link it to the cool breezes from Lake Michigan, which sits next to the city. However, Chicago is not even the windiest city in the US. So, where did the nickname come from?' }
        ],
        [
          { type: 'text', text: 'One popular explanation goes back to the late 19th century. At that time, Chicago was trying hard to promote itself and gain national attention. Its politicians and supporters often spoke proudly and made big promises about the city\'s future. Because of this, some people started calling Chicago "windy." In English, "windy" can also describe a person who talks too much or ' },
          { type: 'vocab', text: 'brags', vid: 3 },
          { type: 'text', text: '. The nickname became especially popular when Chicago and New York competed to host the 1893 World\'s Fair. The competition between the two cities was intense. Although people in New York made fun of Chicago\'s bold claims, the city eventually won and hosted the fair. The Windy City is a great example of a nickname that began as criticism but later became a ' },
          { type: 'vocab', text: 'badge', vid: 4 },
          { type: 'text', text: ' of identity.' }
        ],
        [
          { type: 'text', text: '【Day 3】' }
        ],
        [
          { type: 'text', text: 'Johannesburg, South Africa, and Dubai, UAE\nMost city nicknames point to just one place, but some nicknames are shared. The City of Gold is one such example. It\'s a title that is linked to both Johannesburg and Dubai.' }
        ],
        [
          { type: 'text', text: 'Johannesburg\'s connection to gold begins with the ground beneath it. In 1886, one of the world\'s largest gold mines was discovered there. The news quickly attracted miners, workers, and fortune seekers from many places. ' },
          { type: 'grammar', text: 'The gold industry brought in so much money that the city quickly grew into a financial center', gid: 'G2' },
          { type: 'text', text: '. Even today, gold remains a powerful part of Johannesburg\'s identity. The province where Johannesburg is located is called Gauteng. In the local language, this name means "place of gold."' }
        ],
        [
          { type: 'text', text: 'Dubai does not have gold mines. However, in the 20th century, it became an important trading ' },
          { type: 'vocab', text: 'hub', vid: 5 },
          { type: 'text', text: ' for gold. Dubai\'s location on the Persian Gulf helped connect Asia, Africa, and the Middle East. This turned the city into a major commercial center. Even now, this golden history lives on in the Dubai Gold Souk. It is currently one of the largest gold markets in the world.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The mountain monastery overlooked a perfectly ______ alpine lake reflecting snowcaps.", options: ["A. serene", "B. clumsy", "C. greedy", "D. hostile"], answer: "A", explanation: "【選項解析】\n- (A) serene (adj.) 祥和寧靜的 (正解)\n- (B) clumsy (adj.) 笨拙難看的\n- (C) greedy (adj.) 貪心的\n- (D) hostile (adj.) 懷敵意的" },
      { id: 2, question: "Graduates participated in the commencement ______ wearing formal caps and gowns.", options: ["A. ceremony", "B. obstacle", "C. curfew", "D. voucher"], answer: "A", explanation: "【選項解析】\n- (A) ceremony (n.) 典禮儀式 (正解)\n- (B) obstacle (n.) 障礙絆腳石\n- (C) curfew (n.) 宵禁\n- (D) voucher (n.) 代金折價券" },
      { id: 3, question: "Arrogant athletes who endlessly ______ about victories often lose public admiration.", options: ["A. brag", "B. vanish", "C. forfeit", "D. inspect"], answer: "A", explanation: "【選項解析】\n- (A) brag (v.) 自吹自擂誇耀 (正解)\n- (B) vanish (v.) 憑空消逝\n- (C) forfeit (v.) 喪失沒收\n- (D) inspect (v.) 視察檢查" },
      { id: 4, question: "Singapore functions as an indispensable maritime freight ______ in Southeast Asia.", options: ["A. hub", "B. texture", "C. generator", "D. dialogue"], answer: "A", explanation: "【選項解析】\n- (A) hub (n.) 樞紐中心 (正解)\n- (B) texture (n.) 質地手感\n- (C) generator (n.) 發電生成器\n- (D) dialogue (n.) 對白口語" }
    ],
    cloze: {
      text: "Urban monikers serve as windows into historical identity and civic folklore. Venice earned the evocative epithet La Serenissima, [1] its maritime dominance and political equilibrium. Annually, the doge cast a golden wedding band into the waters, symbolizing an eternal covenant [2] the sea. Across the Atlantic, Chicago acquired its designation as the Windy City not strictly from Michigan gales, [3] from boastful politicians touting the 1893 World's Fair. Meanwhile, [4] moniker 'City of Gold' bridges two distant continents: Johannesburg excavated riches beneath its soil, while Dubai positioned its harbor as a glittering commercial emporium, [5] merchants across the globe.",
      questions: [
        { id: 1, options: ["A. reflecting", "B. reflected", "C. to reflect", "D. reflects"], answer: "A", explanation: "分詞構句表伴隨說明，主動反映用 reflecting。" },
        { id: 2, options: ["A. with", "B. under", "C. against", "D. off"], answer: "A", explanation: "covenant/bond with sth 與...的契約或連結。" },
        { id: 3, options: ["A. but", "B. while", "C. although", "D. unless"], answer: "A", explanation: "not A, but B（不是 A，而是 B）的對比結構。" },
        { id: 4, options: ["A. the", "B. an", "C. one", "D. some"], answer: "A", explanation: "特指「黃金之城」這個稱號，用定冠詞 the。" },
        { id: 5, options: ["A. attracting", "B. attracted", "C. to attract", "D. attracts"], answer: "A", explanation: "分詞構句表伴隨結果，主動吸引用 attracting。" }
      ]
    },
    wordBank: {
      words: ["(A) bond", "(B) brag", "(C) ceremony", "(D) commercial", "(E) financial", "(F) mines", "(G) moniker", "(H) politicians", "(I) serene", "(J) trade"],
      passage: "Metropolitan nicknames encapsulate cultural pride. Venice adopted the [1] title La Serenissima to signify peace. Its annual nautical [2] renewed its symbolic marriage [3] to the Adriatic. In the Midwest, Chicago gained the 'Windy City' label when [4] tended to boast and [5] about civic achievements. Across the Southern Hemisphere, Johannesburg mined rich subterranean ore, fostering a powerful [6] capital. Conversely, Dubai developed no natural gold [7], yet exploited geographical proximity to master international [8]. Both thrive as [9] wonders, demonstrating how an iconic [10] celebrates historical distinction.",
      answers: { 1: "I", 2: "C", 3: "A", 4: "H", 5: "B", 6: "E", 7: "F", 8: "J", 9: "D", 10: "G" }
    },
    discourse: {
      options: [
        "A. In Venice, the ancient ceremony of tossing a gold ring symbolized eternal dependence on the ocean.",
        "B. They abolished all paper money and mandated that citizens trade strictly in gold bullion.",
        "C. City nicknames reveal fascinating intersections of historical wealth, civic pride, and linguistic evolution.",
        "D. Although people assume Chicago's nickname references breeze, it originated from boastful politicians.",
        "E. Johannesburg mined immense subterranean riches, whereas Dubai flourished as an elite international trading crossroads."
      ],
      paragraphs: [
        "Metropolises frequently carry secondary titles that capture their cultural legacy in popular consciousness.",
        "[1] In Renaissance Italy, Venice was christened 'La Serenissima' for its imperial stability and maritime mastery. [2]",
        "[3] During the fierce 1893 World's Fair bid, New York critics mocked Midwestern leaders for windy braggadocio.",
        "Shared titles can also unite disparate geographies under identical emblems. [4] Both legitimately claim the glorious title 'City of Gold.'"
      ],
      answers: { 1: "C", 2: "A", 3: "D", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What historical reality did the ancient Venetian ritual 'Marriage of the Sea' dramatize?", options: ["A. Venice's total prohibition against shipbuilding", "B. The city's complete dependence on the sea for economic wealth, defense, and maritime identity", "C. A military alliance with the French Navy", "D. The discovery of golden sunken treasures"], answer: "B", explanation: "細節題。第一天指出執政官向大海擲金戒象徵與海洋成婚，體現威尼斯完全仰賴大海為生。" },
        { id: 2, question: "According to popular historical accounts in Day 2, why was Chicago labeled the 'Windy City'?", options: ["A. It experiences the highest recorded tornado frequencies in North America", "B. Its 19th-century politicians and promoters spoke boastfully and bragged extensively about the city's future", "C. All buildings were constructed with giant wind turbine mills", "D. Lake Michigan permanently froze during summer months"], answer: "B", explanation: "細節題。第二天指出十九世紀末政客大肆誇口自吹自擂（windy/brag），因此被冠上風城綽號。" },
        { id: 3, question: "What fundamental operational difference distinguishes Johannesburg's gold legacy from Dubai's?", options: ["A. Johannesburg extracted natural gold from underground mines, whereas Dubai flourished as a strategic trading hub", "B. Dubai excavated all its gold underwater, while Johannesburg bought gold from Europe", "C. Johannesburg banned gold jewelry entirely", "D. Dubai gave free gold bars to every tourist"], answer: "A", explanation: "細節題。第三天明確指出約翰尼斯堡是挖掘天然金礦，而杜拜本土無礦，是憑藉地利優勢成為黃金轉口貿易樞紐。" },
        { id: 4, question: "What does the provincial name 'Gauteng' signify in the local indigenous language of Johannesburg?", options: ["A. Mountain of Wind", "B. Place of Gold", "C. City of Water", "D. Desert Gateway"], answer: "B", explanation: "細節題。第三天末段提到約翰尼斯堡所在的豪登省（Gauteng）在當地原住民語中即意指「黃金之鄉（place of gold）」。" }
      ]
    }
  }
};

if (typeof window !== 'undefined') { window.MAGAZINE_UNITS_4U202509 = MAGAZINE_UNITS_4U202509; }

