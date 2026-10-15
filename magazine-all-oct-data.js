// ALL+互動英語 2026 年 10 月號（課文 Unit 1,2,3,5,7,8,9,11,12,13）
// 原始課文來源：All互動英語10月號_文章彙整.docx（僅課文本身，依雜誌原文逐字轉錄）。
// annotations/vocab/cloze/wordBank/discourse/reading 皆由 Claude 依黃金標準規範原創產製
// （同 Live 10月號／Studio Classroom 做法；該資料夾另有 4 份教師自製的「題目+詳解」
// 參考檔 U5/U7/U11/U13，但用的是改寫過、與彙整檔不同篇的短文，依使用者決定不採用，
// 僅供難度/風格參考，全部依彙整檔原文重新出題）。
// Unit 4,6,10,14 與 CNN News（AI Therapy）不在彙整檔收錄範圍內，故未收錄。
// 已逐一通過結構性驗證，但建議實際使用前仍抽查內容品質。
const MAGAZINE_UNITS_ALL202510 = {
  "Unit 1": {
    title: "AI-Designed Vaccine Shows Promise in First Human Trial",
    chineseTitle: "AI 設計疫苗首次人體試驗 初步成效可期",
    passage: `Researchers recently completed the first human trial of a new vaccine designed with the help of artificial intelligence. Developed at the University of Cambridge, the vaccine is intended to protect against many different coronaviruses instead of just one. Scientists hope it could help people prepare for future outbreaks before they begin to spread widely.

Most vaccines target a specific virus. This new vaccine takes a different approach. Researchers made use of AI to identify features shared by many coronaviruses and combined them into a single vaccine. The goal is to train the immune system to recognize a broader range of viruses. In a trial involving 39 volunteers, the vaccine was found to be safe and produced immune responses against several coronaviruses. It was also given without a needle, using a high-pressure jet of liquid.

All in all, the results have raised hopes among researchers, but they caution that more testing is needed. The vaccine is still in an early stage, and larger trials will be required before its effectiveness can be confirmed. If the technology proves successful, though, scientists believe the same method could be used to develop vaccines against other groups of viruses in the future.`,
    chineseTranslation: `研究人員近日完成了一款在人工智慧協助下設計的新疫苗首次人體試驗。這款疫苗由劍橋大學研發，目的是對抗多種不同的冠狀病毒，而非僅針對單一病毒。科學家希望它能幫助人們在未來疫情大規模爆發前，預先做好準備。

多數疫苗都是針對特定病毒設計。這款新疫苗則採取了不同的策略。研究人員運用 AI 找出多種冠狀病毒的共同特徵，並將這些特徵結合進單一疫苗之中。其目標是訓練免疫系統辨識更廣泛的病毒範圍。在一項涉及 39 名志願者的試驗中，這款疫苗被證實安全，並對多種冠狀病毒產生了免疫反應。此外，施打過程也不需使用針頭，而是利用高壓液體噴射的方式進行。

整體而言，這項結果讓研究人員燃起希望，但他們也提醒，仍需要更多測試。這款疫苗目前仍處於早期階段，必須經過更大規模的試驗，才能確認其有效性。不過，若這項技術證實成功，科學家相信同樣的方法未來也能用來開發對抗其他病毒群的疫苗。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "trial", pos: "n.", meaning: "試驗", collocations: "a human trial 人體試驗" },
        { id: 2, word: "outbreak", pos: "n.", meaning: "（疫情）爆發", collocations: "future outbreaks 未來疫情爆發" },
        { id: 3, word: "approach", pos: "n.", meaning: "方法、做法", collocations: "a different approach 不同的方法" },
        { id: 4, word: "identify", pos: "v.", meaning: "找出、辨識", collocations: "identify features 找出特徵" },
        { id: 5, word: "volunteer", pos: "n.", meaning: "志願者", collocations: "39 volunteers 39 名志願者" },
        { id: 6, word: "caution", pos: "v.", meaning: "提醒、警告", collocations: "caution that... 提醒…" },
        { id: 7, word: "effectiveness", pos: "n.", meaning: "有效性", collocations: "confirm its effectiveness 確認其有效性" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞片語作形容詞（Developed at...）", excerpt: "Developed at the University of Cambridge, the vaccine is intended to...", analysis: "Developed at the University of Cambridge 為過去分詞片語，省略 Being，修飾主詞 the vaccine，說明疫苗的研發地點。" },
        { id: "G2", title: "before + 子句，表「在…之前」", excerpt: "before its effectiveness can be confirmed", analysis: "before 引導時間子句，說明大規模試驗必須先完成，才能確認疫苗的有效性。" }
      ],
      patternNotes: [
        { id: "P1", title: "make use of + N. (運用…)", excerpt: "Researchers made use of AI to identify features", analysis: "make use of 為固定片語，表「運用、利用」，後接受詞 AI，說明研究人員如何運用人工智慧。" },
        { id: "P2", title: "If + 子句，表條件（若…）", excerpt: "If the technology proves successful", analysis: "if 引導條件子句，表「若…」，說明技術成功與否將決定後續發展。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Researchers recently completed the first human ` },
          { type: 'vocab', text: `trial`, vid: 1 },
          { type: 'text', text: ` of a new vaccine designed with the help of artificial intelligence. ` },
          { type: 'grammar', text: `Developed at the University of Cambridge, the vaccine is intended to protect against many different coronaviruses instead of just one`, gid: 'G1' },
          { type: 'text', text: `. Scientists hope it could help people prepare for future ` },
          { type: 'vocab', text: `outbreaks`, vid: 2 },
          { type: 'text', text: ` before they begin to spread widely.` }
        ],
        [
          { type: 'text', text: `Most vaccines target a specific virus. This new vaccine takes a different ` },
          { type: 'vocab', text: `approach`, vid: 3 },
          { type: 'text', text: `. ` },
          { type: 'pattern', text: `Researchers made use of AI to identify`, pid: 'P1' },
          { type: 'text', text: ` features shared by many coronaviruses and combined them into a single vaccine. The goal is to train the immune system to recognize a broader range of viruses. In a trial involving 39 ` },
          { type: 'vocab', text: `volunteers`, vid: 5 },
          { type: 'text', text: `, the vaccine was found to be safe and produced immune responses against several coronaviruses. It was also given without a needle, using a high-pressure jet of liquid.` }
        ],
        [
          { type: 'text', text: `All in all, the results have raised hopes among researchers, but they ` },
          { type: 'vocab', text: `caution`, vid: 6 },
          { type: 'text', text: ` that more testing is needed. The vaccine is still in an early stage, and larger trials will be required ` },
          { type: 'grammar', text: `before its effectiveness can be confirmed`, gid: 'G2' },
          { type: 'text', text: `. ` },
          { type: 'pattern', text: `If the technology proves successful`, pid: 'P2' },
          { type: 'text', text: `, though, scientists believe the same method could be used to develop vaccines against other groups of viruses in the future.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The new drug is currently in the final stage of clinical ______.", options: ["A. outbreak", "B. volunteer", "C. trial", "D. approach"], answer: "C", explanation: "【選項解析】\n- (A) outbreak (n.) 爆發\n- (B) volunteer (n.) 志願者\n- (C) trial (n.) 試驗 (正解)\n- (D) approach (n.) 方法" },
      { id: 2, question: "Health officials are preparing for a possible flu ______ this winter.", options: ["A. trial", "B. approach", "C. outbreak", "D. effectiveness"], answer: "C", explanation: "【選項解析】\n- (A) trial (n.) 試驗\n- (B) approach (n.) 方法\n- (C) outbreak (n.) （疫情）爆發 (正解)\n- (D) effectiveness (n.) 有效性" },
      { id: 3, question: "The teacher tried a new ______ to help students understand grammar.", options: ["A. outbreak", "B. volunteer", "C. caution", "D. approach"], answer: "D", explanation: "【選項解析】\n- (A) outbreak (n.) 爆發\n- (B) volunteer (n.) 志願者\n- (C) caution (n.) 謹慎\n- (D) approach (n.) 方法、做法 (正解)" },
      { id: 4, question: "Dozens of ______ showed up to help clean the beach on Saturday.", options: ["A. trials", "B. outbreaks", "C. volunteers", "D. approaches"], answer: "C", explanation: "【選項解析】\n- (A) trials (n.) 試驗\n- (B) outbreaks (n.) 爆發\n- (C) volunteers (n.) 志願者 (正解)\n- (D) approaches (n.) 方法" },
    ],
    cloze: {
      text: "Scientists recently tested a new vaccine designed [1] the help of artificial intelligence. Unlike most vaccines, which [2] a single virus, this one was built to work against many different coronaviruses at once. Researchers used AI to find features [3] by multiple viruses and combined them into one formula. In an early trial [4] 39 volunteers, the vaccine proved safe and triggered immune responses, all without the use of a needle. While the results are promising, experts stress that larger trials are still needed [5] the vaccine's effectiveness can be fully confirmed.",
      questions: [
        { id: 1, options: ["A. with", "B. for", "C. by", "D. of"], answer: "A", explanation: "with the help of + N. 表「在…的協助下」，固定搭配介系詞 with。" },
        { id: 2, options: ["A. targeted", "B. to target", "C. targeting", "D. target"], answer: "D", explanation: "此處為關係子句中的主要動詞，先行詞 vaccines 為複數，which 代替主詞，動詞需用原形複數 target。" },
        { id: 3, options: ["A. sharing", "B. to share", "C. shared", "D. share"], answer: "C", explanation: "過去分詞片語修飾 features，表「被…共享的特徵」，為被動關係，故用過去分詞 shared。" },
        { id: 4, options: ["A. involved", "B. to involve", "C. involving", "D. involve"], answer: "C", explanation: "現在分詞片語修飾 trial，表「涉及 39 名志願者的試驗」，為主動關係，故用現在分詞 involving。" },
        { id: 5, options: ["A. before", "B. unless", "C. despite", "D. although"], answer: "A", explanation: "before 引導時間子句，表「在…之前」，說明確認有效性前仍需更大規模試驗。" },
      ]
    },
    wordBank: {
      words: ["(A) administer", "(B) broad-spectrum", "(C) conduct", "(D) immune", "(E) needle-free", "(F) promising", "(G) response", "(H) target", "(I) traditional", "(J) widespread"],
      passage: "Most vaccines developed through [1] methods are designed to protect against a single virus. Scientists at Cambridge, however, set out to build something different: a [2] vaccine capable of defending against many coronaviruses at once.\n\nTo achieve this, researchers used artificial intelligence to [3] shared genetic features across several viruses, combining them into a single formula rather than designing separate vaccines for each threat.\n\nThe team then moved to human testing, choosing to [4] a small-scale trial involving 39 volunteers. One particularly interesting detail was how the vaccine was delivered: using a [5] injector that relies on a high-pressure jet of liquid instead of a traditional syringe.\n\nResults from the trial were encouraging. The vaccine triggered a strong [6] system reaction, producing a measurable immune [7] against several coronaviruses without causing serious side effects.\n\nDespite these [8] early results, researchers remain cautious. A small trial cannot prove that a vaccine works reliably across a larger, more diverse population, so [9] use remains far off.\n\nIf future trials confirm these findings, scientists believe the same AI-driven approach could eventually be used to [10] other groups of viruses, potentially changing how vaccines are designed in the years ahead.",
      answers: { 1: "I", 2: "B", 3: "H", 4: "C", 5: "E", 6: "D", 7: "G", 8: "F", 9: "J", 10: "A" }
    },
    discourse: {
      options: [
        "A. Many pharmaceutical companies have invested heavily in AI research over the past decade, hoping to speed up vaccine development.",
        "B. Few people enjoy receiving injections, so researchers were especially interested in testing an alternative delivery method.",
        "C. None of the volunteers experienced serious side effects, and the vaccine produced a measurable immune response in most participants.",
        "D. Larger studies involving far more participants will be necessary before regulators can even consider approving the vaccine for public use.",
        "E. Instead of targeting one specific virus, the research team set out to build protection against an entire family of viruses at once."
      ],
      paragraphs: [
        "Developing a vaccine that can protect against multiple viruses has long been a major challenge for researchers. A new project at the University of Cambridge may offer a promising step forward.",
        "[1] This approach relies heavily on artificial intelligence, which was used to identify features shared across many different coronaviruses.",
        "The vaccine was also delivered in an unusual way. [2] Instead of a traditional needle, the trial used a high-pressure jet of liquid to deliver the vaccine painlessly.",
        "Early results from the 39-person trial were encouraging. [3] Even so, researchers caution that the project remains in its early stages. [4]"
      ],
      answers: { 1: "E", 2: "B", 3: "C", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What makes this new vaccine different from most existing vaccines?", options: ["A. It is designed to protect against many coronaviruses instead of just one", "B. It can only be used on people under the age of 20", "C. It does not require any human testing at all", "D. It was developed entirely without the use of technology"], answer: "A", explanation: "主旨題。全文核心在於說明這款疫苗採用 AI 技術，設計成能對抗多種冠狀病毒，而非單一病毒。" },
        { id: 2, question: "How was the vaccine administered during the trial, according to the article?", options: ["A. Through a traditional needle injection", "B. Using a high-pressure jet of liquid", "C. By mixing it into the volunteers' food", "D. Through a tablet taken by mouth"], answer: "B", explanation: "細節題。文中明確提到「It was also given without a needle, using a high-pressure jet of liquid」。" },
        { id: 3, question: "How many volunteers took part in the trial mentioned in the article?", options: ["A. 13", "B. 29", "C. 39", "D. 93"], answer: "C", explanation: "細節題。文中指出「a trial involving 39 volunteers」。" },
        { id: 4, question: "What can be inferred about the researchers' attitude toward the trial results?", options: ["A. They believe the vaccine is ready for public use immediately", "B. They are cautiously optimistic but know more testing is required", "C. They consider the results a complete failure", "D. They have decided to abandon the project entirely"], answer: "B", explanation: "推論題。文中提到結果「raised hopes」，但同時強調「more testing is needed」，顯示研究人員態度審慎樂觀。" }
      ]
    }
  },

  "Unit 2": {
    title: "Jane Goodall: Inspiring Change Across Generations",
    chineseTitle: "珍．古德：啟發跨世代的改變",
    passage: `Earlier this year, Nathan Thadeo Yoashi, a Tanzanian doctoral student at National Taiwan University, delivered a commencement speech about his journey to higher education. He described a difficult childhood on a farm without electricity or clean water. A turning point came when he met Jane Goodall at a school event. Impressed by his determination, she offered financial support that allowed him to attend a better school and continue his studies. His story illustrates the reach of Goodall's influence.

Goodall's own path began in London, where a fascination with animals developed early. After finishing secondary school, she traveled to Kenya and met the paleontologist Louis Leakey. Recognizing her potential, he gave her the opportunity to take part in field research in Africa—an opportunity that was uncommon for women at the time.

In 1960, she traveled to Tanzania to study chimpanzees. She observed one using a stripped twig to remove insects from a mound. This was a major discovery, as tool use had previously been thought to be a uniquely human ability. Her work also showed that chimpanzees form close family bonds and display recognizable emotions. These findings changed how scientists understood both chimpanzees and humans.

As the years passed, Goodall became increasingly concerned about the threats that deforestation and illegal hunting posed to chimpanzees and their habitats. In 1986, she shifted her focus to conservation and public outreach, with her voice becoming one of the most widely heard in the global conversation about wildlife and the environment.

To support these efforts, she founded the Jane Goodall Institute, which promotes wildlife conservation and the sustainable development of local communities. She also launched Roots & Shoots, a youth program that now operates in more than 60 countries, including Taiwan. Participants plant native trees, clean up rivers, and carry out other projects to improve their local environments.

As we mark the first anniversary of Jane Goodall's passing, her amazing life proves that meaningful change can begin with a single person. Nathan Yoashi himself is a former member of Roots & Shoots, and stories like his are great examples of Goodall's philosophy in action. As she once said, "If you want conservation to work, you must involve the people who live there. If they are not part of the solution, there will be no solution."`,
    chineseTranslation: `今年稍早，就讀於國立台灣大學的坦尚尼亞籍博士生奈森．塔德奧．尤亞希，在一場畢業典禮演說中分享了自己邁向高等教育之路的歷程。他描述自己在一座沒有電力與乾淨水源的農場上度過艱辛的童年。轉捩點出現在他於一場校園活動中結識了珍．古德。古德為他的毅力所打動，提供了經濟援助，讓他得以進入更好的學校、繼續學業。他的故事，正說明了古德影響力所能觸及的範圍。

古德自己的人生道路始於倫敦，她對動物的著迷自幼便已萌芽。中學畢業後，她前往肯亞，結識了古生物學家路易斯．利基。利基看出了她的潛力，給了她一個在非洲參與實地研究的機會——這在當時對女性而言是相當罕見的機會。

1960 年，她前往坦尚尼亞研究黑猩猩。她觀察到一隻黑猩猩使用剝去枝葉的樹枝，從土丘中取出昆蟲。這是一項重大發現，因為工具使用在此之前一直被認為是人類獨有的能力。她的研究也顯示，黑猩猩會建立緊密的家庭連結，並表現出可辨識的情緒。這些發現改變了科學家對黑猩猩與人類雙方的理解。

隨著歲月流逝，古德愈來愈擔憂森林砍伐與非法獵捕對黑猩猩及其棲地所造成的威脅。1986 年，她將重心轉向保育工作與公眾推廣，她的聲音逐漸成為全球野生動物與環境議題討論中，最廣為人知的聲音之一。

為了支持這些努力，她創立了珍．古德協會，致力於推動野生動物保育與當地社區的永續發展。她也發起了「根與芽」青年計畫，如今已在包括台灣在內的超過 60 個國家推行。參與者會種植原生樹木、清理河川，並執行其他改善當地環境的計畫。

在我們紀念珍．古德辭世一週年之際，她精彩的一生證明了，有意義的改變可以從一個人開始。奈森．尤亞希本人正是「根與芽」計畫的前成員，而他的故事正是古德理念付諸實踐的絕佳範例。正如她曾說過的：「如果你希望保育工作成功，就必須讓當地居民參與其中。如果他們不是解決方案的一部分，就不會有真正的解決方案。」`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "commencement", pos: "n.", meaning: "畢業典禮", collocations: "a commencement speech 畢業典禮演說" },
        { id: 2, word: "determination", pos: "n.", meaning: "毅力、決心", collocations: "impressed by his determination 為他的毅力所打動" },
        { id: 3, word: "fascination", pos: "n.", meaning: "著迷", collocations: "a fascination with animals 對動物的著迷" },
        { id: 4, word: "discovery", pos: "n.", meaning: "發現", collocations: "a major discovery 重大發現" },
        { id: 5, word: "deforestation", pos: "n.", meaning: "森林砍伐", collocations: "the threats that deforestation... posed 森林砍伐所造成的威脅" },
        { id: 6, word: "sustainable", pos: "adj.", meaning: "永續的", collocations: "sustainable development 永續發展" },
        { id: 7, word: "philosophy", pos: "n.", meaning: "理念、哲學", collocations: "Goodall's philosophy in action 古德理念的實踐" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞片語作形容詞（Impressed by...）", excerpt: "Impressed by his determination, she offered financial support", analysis: "Impressed by his determination 為過去分詞片語，省略 Being，修飾主詞 she，說明古德因受其毅力感動而提供援助。" },
        { id: "G2", title: "as 引導原因子句", excerpt: "as tool use had previously been thought to be a uniquely human ability", analysis: "as 引導原因子句，表「因為」，說明此發現之所以重大，是因為工具使用先前被認為是人類獨有能力。" }
      ],
      patternNotes: [
        { id: "P1", title: "with + 獨立分詞構句（伴隨狀態）", excerpt: "with her voice becoming one of the most widely heard", analysis: "with + 受詞 + 現在分詞，表伴隨發生的狀態，說明古德將重心轉向保育的同時，其聲音也逐漸廣為人知。" },
        { id: "P2", title: "If...there will be no solution. (條件句)", excerpt: "If they are not part of the solution, there will be no solution", analysis: "if 引導條件子句，表「若…」，此處引用古德的名言，強調在地居民參與保育的重要性。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Earlier this year, Nathan Thadeo Yoashi, a Tanzanian doctoral student at National Taiwan University, delivered a ` },
          { type: 'vocab', text: `commencement`, vid: 1 },
          { type: 'text', text: ` speech about his journey to higher education. He described a difficult childhood on a farm without electricity or clean water. A turning point came when he met Jane Goodall at a school event. ` },
          { type: 'grammar', text: `Impressed by his determination, she offered financial support`, gid: 'G1' },
          { type: 'text', text: ` that allowed him to attend a better school and continue his studies. His story illustrates the reach of Goodall's influence.` }
        ],
        [
          { type: 'text', text: `Goodall's own path began in London, where a ` },
          { type: 'vocab', text: `fascination`, vid: 3 },
          { type: 'text', text: ` with animals developed early. After finishing secondary school, she traveled to Kenya and met the paleontologist Louis Leakey. Recognizing her potential, he gave her the opportunity to take part in field research in Africa—an opportunity that was uncommon for women at the time.` }
        ],
        [
          { type: 'text', text: `In 1960, she traveled to Tanzania to study chimpanzees. She observed one using a stripped twig to remove insects from a mound. This was a major ` },
          { type: 'vocab', text: `discovery`, vid: 4 },
          { type: 'text', text: `, ` },
          { type: 'grammar', text: `as tool use had previously been thought to be a uniquely human ability`, gid: 'G2' },
          { type: 'text', text: `. Her work also showed that chimpanzees form close family bonds and display recognizable emotions. These findings changed how scientists understood both chimpanzees and humans.` }
        ],
        [
          { type: 'text', text: `As the years passed, Goodall became increasingly concerned about the threats that ` },
          { type: 'vocab', text: `deforestation`, vid: 5 },
          { type: 'text', text: ` and illegal hunting posed to chimpanzees and their habitats. In 1986, she shifted her focus to conservation and public outreach, ` },
          { type: 'pattern', text: `with her voice becoming one of the most widely heard`, pid: 'P1' },
          { type: 'text', text: ` in the global conversation about wildlife and the environment.` }
        ],
        [
          { type: 'text', text: `To support these efforts, she founded the Jane Goodall Institute, which promotes wildlife conservation and the ` },
          { type: 'vocab', text: `sustainable`, vid: 6 },
          { type: 'text', text: ` development of local communities. She also launched Roots & Shoots, a youth program that now operates in more than 60 countries, including Taiwan. Participants plant native trees, clean up rivers, and carry out other projects to improve their local environments.` }
        ],
        [
          { type: 'text', text: `As we mark the first anniversary of Jane Goodall's passing, her amazing life proves that meaningful change can begin with a single person. Nathan Yoashi himself is a former member of Roots & Shoots, and stories like his are great examples of Goodall's ` },
          { type: 'vocab', text: `philosophy`, vid: 7 },
          { type: 'text', text: ` in action. As she once said, "If you want conservation to work, you must involve the people who live there. ` },
          { type: 'pattern', text: `If they are not part of the solution, there will be no solution`, pid: 'P2' },
          { type: 'text', text: `."` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The university's ______ ceremony was held outdoors this year under clear skies.", options: ["A. fascination", "B. philosophy", "C. discovery", "D. commencement"], answer: "D", explanation: "【選項解析】\n- (A) fascination (n.) 著迷\n- (B) philosophy (n.) 理念\n- (C) discovery (n.) 發現\n- (D) commencement (n.) 畢業典禮 (正解)" },
      { id: 2, question: "Her ______ to finish the marathon never weakened, even in the final kilometers.", options: ["A. discovery", "B. determination", "C. outbreak", "D. deforestation"], answer: "B", explanation: "【選項解析】\n- (A) discovery (n.) 發現\n- (B) determination (n.) 毅力、決心 (正解)\n- (C) outbreak (n.) 爆發\n- (D) deforestation (n.) 森林砍伐" },
      { id: 3, question: "As a child, he had a strong ______ with dinosaurs that never faded.", options: ["A. philosophy", "B. fascination", "C. approach", "D. commencement"], answer: "B", explanation: "【選項解析】\n- (A) philosophy (n.) 理念\n- (B) fascination (n.) 著迷 (正解)\n- (C) approach (n.) 方法\n- (D) commencement (n.) 畢業典禮" },
      { id: 4, question: "The company promotes ______ farming methods that protect the soil for future generations.", options: ["A. sustainable", "B. widespread", "C. needle-free", "D. broad-spectrum"], answer: "A", explanation: "【選項解析】\n- (A) sustainable (adj.) 永續的 (正解)\n- (B) widespread (adj.) 廣泛的\n- (C) needle-free (adj.) 無針的\n- (D) broad-spectrum (adj.) 廣效的" },
    ],
    cloze: {
      text: "Jane Goodall's influence on science and conservation began [1] a chance meeting in Kenya, where paleontologist Louis Leakey recognized her potential and gave her an opportunity [2] was rarely offered to women at the time. In 1960, her research in Tanzania [3] the scientific world when she observed a chimpanzee using a tool, a behavior [4] believed to be uniquely human. Later in her career, she shifted her focus toward conservation, [5] growing concern about threats to chimpanzee habitats. Her legacy continues today through programs like Roots & Shoots, which empowers young people across the globe.",
      questions: [
        { id: 1, options: ["A. of", "B. by", "C. with", "D. for"], answer: "C", explanation: "begin with + N. 表「以…開始」，說明古德的影響力源自於一次偶然的相遇。" },
        { id: 2, options: ["A. what", "B. who", "C. that", "D. whom"], answer: "C", explanation: "that 代替先行詞 an opportunity，引導形容詞子句，作子句中的主詞。" },
        { id: 3, options: ["A. surprised", "B. surprising", "C. to surprise", "D. was surprising"], answer: "A", explanation: "此處為主要子句動詞，主詞 her research 為引發驚訝的來源，應使用主動語態 surprised（使…感到驚訝）。" },
        { id: 4, options: ["A. despite", "B. unless", "C. although", "D. previously"], answer: "D", explanation: "previously 為副詞，修飾過去分詞 believed，表「先前被認為」。" },
        { id: 5, options: ["A. despite of", "B. regardless of", "C. driven by", "D. instead of"], answer: "C", explanation: "driven by + N. 為過去分詞片語，表「受…驅使」，說明她轉向保育工作的原因。" },
      ]
    },
    wordBank: {
      words: ["(A) advocate", "(B) breakthrough", "(C) empower", "(D) habitat", "(E) legacy", "(F) mentor", "(G) milestone", "(H) outreach", "(I) pioneer", "(J) threaten"],
      passage: "Long before she became one of the world's most recognized conservationists, Jane Goodall needed someone to believe in her potential. Paleontologist Louis Leakey became that early [1], offering her a rare chance to take part in field research in Africa.\n\nHer discovery that chimpanzees use tools marked a major [2] in the scientific understanding of animal behavior, challenging the long-held belief that tool use was uniquely human.\n\nAs her research career matured, Goodall became a committed [3] for wildlife protection, warning that deforestation and illegal hunting continued to [4] chimpanzee populations across Africa.\n\nRecognizing that protecting animals also meant protecting their [5], she shifted much of her later work toward public education and community-based conservation efforts.\n\nThrough the Jane Goodall Institute, she expanded her [6] far beyond scientific research, working directly with local communities to support sustainable development alongside wildlife protection.\n\nHer youth program, Roots & Shoots, was designed to [7] young people to take meaningful environmental action in their own communities, regardless of where they live.\n\nAs one of the earliest scientists to study primates so closely in the wild, Goodall is often remembered as a true [8] in her field, reshaping how researchers approach animal behavior.\n\nHer influence reached students like Nathan Yoashi, whose story illustrates the lasting [9] she leaves behind. Stories like his remind us that a single [10] decision to help someone can shape the course of an entire life.",
      answers: { 1: "F", 2: "B", 3: "A", 4: "J", 5: "D", 6: "H", 7: "C", 8: "I", 9: "E", 10: "G" }
    },
    discourse: {
      options: [
        "A. Critics at the time dismissed her research methods as unscientific simply because she had no formal university training.",
        "B. Rather than retreating from public life, she dedicated the following decades to protecting the species she had spent years studying.",
        "C. This single observation forced scientists to reconsider what truly separated humans from other animals.",
        "D. Her story is a reminder that one person's generosity can quietly change the direction of someone else's entire life.",
        "E. At a time when few women were given such opportunities, this chance would shape the rest of her career."
      ],
      paragraphs: [
        "Jane Goodall's journey from a curious young woman in London to one of the world's most influential conservationists began with a single opportunity few people receive.",
        "After meeting paleontologist Louis Leakey in Kenya, she was given a chance to conduct field research among wild chimpanzees in Tanzania. [1]",
        "Her discovery that chimpanzees use tools, once thought to be a uniquely human trait, stunned the scientific community. [2]",
        "As threats to chimpanzee habitats grew more serious, Goodall shifted her focus toward conservation and public outreach. [3] Nathan Yoashi, a student she once helped through financial support, later became a powerful example of her impact. [4]"
      ],
      answers: { 1: "E", 2: "C", 3: "B", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Jane Goodall's scientific discoveries and her lasting influence on conservation and young people", "B. A detailed biography of Louis Leakey's career in paleontology", "C. The history of chimpanzee research methods before the 1960s", "D. A comparison between Jane Goodall and other wildlife researchers"], answer: "A", explanation: "主旨題。全文介紹珍．古德的科學發現及其對保育與年輕世代的深遠影響。" },
        { id: 2, question: "According to the article, what did Jane Goodall observe that was considered a major discovery?", options: ["A. Chimpanzees using a tool to remove insects from a mound", "B. Chimpanzees building complex shelters from leaves", "C. Chimpanzees communicating using sign language", "D. Chimpanzees hunting in large organized groups"], answer: "A", explanation: "細節題。文中明確指出她觀察到黑猩猩「using a stripped twig to remove insects from a mound」。" },
        { id: 3, question: "Why did Goodall shift her focus in 1986, according to the article?", options: ["A. She retired from scientific research entirely", "B. She became increasingly concerned about threats to chimpanzees and their habitats", "C. She moved permanently to Taiwan to teach", "D. She lost funding for her chimpanzee research"], answer: "B", explanation: "細節題。文中說明她因擔憂森林砍伐與非法獵捕的威脅，而將重心轉向保育與公眾推廣。" },
        { id: 4, question: "What can be inferred about Nathan Yoashi's relationship to Jane Goodall's work?", options: ["A. He directly funded Goodall's chimpanzee research", "B. He is an example of how her generosity created opportunities for others", "C. He criticized her conservation methods publicly", "D. He replaced her as the leader of the Jane Goodall Institute"], answer: "B", explanation: "推論題。奈森的故事顯示古德的支持如何為他人創造機會，體現其理念的實踐。" }
      ]
    }
  },

  "Unit 3": {
    title: "The Kitchen Favorites Once Thought to Be Deadly",
    chineseTitle: "那些曾被視為致命的日常美食",
    passage: `Today, we can't imagine life without tomatoes, potatoes, coffee, or salt. Yet Europeans once looked upon these everyday staples with terror and suspicion. So how did they go from feared foods to favorites?

Tomatoes arrived in Europe in the 1500s, but for almost 200 years, Europeans were afraid to eat them. One popular story blames a string of aristocrat deaths: Tomatoes' natural acids supposedly reacted with the pewter plates they were served on, releasing toxic lead that poisoned the diners. Fascinating as the story is, though, it probably isn't true—the lead released would not have been nearly enough to kill anyone. A more likely explanation is that tomatoes simply looked too much like belladonna berries, which really are deadly.

Potatoes, unlike tomatoes, do have genuine poisonous potential, since their leaves contain a real toxin. Indigenous communities in the Andes spent generations breeding less toxic varieties, eventually domesticating the potato we know today. Even so, Europeans remained deeply suspicious of potatoes when the vegetable first arrived from South America. Fortunately for French fry lovers everywhere, that fear ultimately faded, and the world gained a fast-food favorite.

Coffee was shunned for entirely different reasons. After arriving in Europe around the same time as potatoes and tomatoes, the drink drew suspicion from Christian leaders, who branded it satanic. Why? Christians of the era were famously no fun, so perhaps they simply found it too enjoyable. Coffee's close ties to the Islamic world certainly didn't help either. According to legend, public opinion only began to shift after Pope Clement VIII tried the drink himself and declared it delicious.

Religion also played a part in shaping salt's reputation. Leonardo da Vinci's famous painting The Last Supper shows Judas Iscariot knocking over salt, a detail that helped fuel the superstition that spilled salt brings misfortune. Stories of armies salting their enemies' farmland added to this dark reputation, though the truth of these tales is debatable.

From a modern perspective, these old food fears can seem silly. We no longer tremble at tomatoes or see Satan in a cappuccino. Still, these strange chapters of history are worth remembering. If nothing else, they remind us that fearing the unfamiliar is simply human nature, and that progress often means learning to look past our own prejudices.`,
    chineseTranslation: `如今，我們很難想像沒有番茄、馬鈴薯、咖啡或鹽的生活。然而，歐洲人曾經對這些日常主食抱持著恐懼與懷疑。那麼，它們究竟是如何從令人畏懼的食物，變成人見人愛的美食呢？

番茄於 1500 年代傳入歐洲，但在接下來將近 200 年間，歐洲人都不敢食用它。有一則廣為流傳的說法，將一連串貴族死亡事件歸咎於番茄：據說番茄中的天然酸性物質，與盛裝它們的錫製餐盤產生反應，釋放出有毒的鉛，進而毒害了用餐者。然而，儘管這個故事引人入勝，但很可能並非事實——釋出的鉛含量根本不足以致人於死。一個更可信的解釋是，番茄的外觀與真正致命的顛茄果實實在太過相似。

與番茄不同的是，馬鈴薯確實具有真正的毒性潛力，因為其葉片中含有真實的毒素。安地斯山脈的原住民族花費了好幾個世代的時間，培育出毒性較低的品種，最終馴化出我們今日所熟知的馬鈴薯。即便如此，當這種蔬菜最初從南美洲傳入時，歐洲人仍對其深感懷疑。所幸，對薯條愛好者而言，這份恐懼最終消散，全世界也因此多了一道速食界的寵兒。

咖啡則是基於截然不同的原因而遭到排斥。在與馬鈴薯和番茄幾乎同一時期傳入歐洲後，這款飲品招致了基督教領袖的懷疑，被貼上「邪魔飲品」的標籤。為什麼呢？那個年代的基督徒素以嚴肅古板著稱，或許他們單純只是覺得咖啡太過令人愉悅。咖啡與伊斯蘭世界的密切關係，顯然也無助於扭轉這種印象。據傳，直到教宗克勉八世親自品嚐這款飲品、並宣稱它美味無比之後，大眾的觀感才開始有所轉變。

宗教同樣在塑造鹽的名聲上扮演了一角。達文西的名畫《最後的晚餐》中，描繪了猶大打翻鹽罐的畫面，這個細節助長了「灑鹽會招致厄運」的迷信。軍隊在敵方農地上灑鹽的傳說，也為這份陰暗的名聲增添了幾分色彩，儘管這些故事的真實性仍有待商榷。

從現代的角度來看，這些古老的食物恐懼症顯得有些可笑。我們不再對番茄心生畏懼，也不再在卡布奇諾中看見惡魔的身影。然而，這些歷史上奇特的篇章，仍然值得我們記取。若有什麼值得學習之處，那便是：對陌生事物感到恐懼，終究是人類的天性；而進步，往往意味著學會超越我們自身的偏見。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "staple", pos: "n.", meaning: "主食、必需品", collocations: "everyday staples 日常主食" },
        { id: 2, word: "suspicion", pos: "n.", meaning: "懷疑", collocations: "terror and suspicion 恐懼與懷疑" },
        { id: 3, word: "toxic", pos: "adj.", meaning: "有毒的", collocations: "toxic lead 有毒的鉛" },
        { id: 4, word: "domesticate", pos: "v.", meaning: "馴化", collocations: "domesticating the potato 馴化馬鈴薯" },
        { id: 5, word: "shun", pos: "v.", meaning: "避開、排斥", collocations: "coffee was shunned 咖啡遭到排斥" },
        { id: 6, word: "superstition", pos: "n.", meaning: "迷信", collocations: "fuel the superstition 助長迷信" },
        { id: 7, word: "prejudice", pos: "n.", meaning: "偏見", collocations: "our own prejudices 我們自身的偏見" }
      ],
      grammarNotes: [
        { id: "G1", title: "倒裝句（形容詞 + as + S + V，表讓步）", excerpt: "Fascinating as the story is, though, it probably isn't true", analysis: "此為「形容詞 + as + 主詞 + 動詞」的讓步倒裝句型，相當於 Although the story is fascinating，表「雖然這故事引人入勝」。" },
        { id: "G2", title: "which 引導非限定關係子句", excerpt: "belladonna berries, which really are deadly", analysis: "which 代替先行詞 belladonna berries，引導非限定關係子句補充說明顛茄果實確實具有致命性。" }
      ],
      patternNotes: [
        { id: "P1", title: "too...to V. (太…以致於無法…) 的變形：too much like", excerpt: "tomatoes simply looked too much like belladonna berries", analysis: "too much like + N. 表「太過像…」，說明番茄外觀與顛茄果實極為相似，容易造成混淆。" },
        { id: "P2", title: "If nothing else, (若無其他，至少…)", excerpt: "If nothing else, they remind us that fearing the unfamiliar is simply human nature", analysis: "If nothing else 為慣用語，表「至少、退一步說」，用於強調接下來所述是最基本可確定的一點。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Today, we can't imagine life without tomatoes, potatoes, coffee, or salt. Yet Europeans once looked upon these everyday ` },
          { type: 'vocab', text: `staples`, vid: 1 },
          { type: 'text', text: ` with terror and ` },
          { type: 'vocab', text: `suspicion`, vid: 2 },
          { type: 'text', text: `. So how did they go from feared foods to favorites?` }
        ],
        [
          { type: 'text', text: `Tomatoes arrived in Europe in the 1500s, but for almost 200 years, Europeans were afraid to eat them. One popular story blames a string of aristocrat deaths: Tomatoes' natural acids supposedly reacted with the pewter plates they were served on, releasing ` },
          { type: 'vocab', text: `toxic`, vid: 3 },
          { type: 'text', text: ` lead that poisoned the diners. ` },
          { type: 'grammar', text: `Fascinating as the story is, though, it probably isn't true`, gid: 'G1' },
          { type: 'text', text: `—the lead released would not have been nearly enough to kill anyone. A more likely explanation is that ` },
          { type: 'pattern', text: `tomatoes simply looked too much like belladonna berries`, pid: 'P1' },
          { type: 'text', text: `, ` },
          { type: 'grammar', text: `which really are deadly`, gid: 'G2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Potatoes, unlike tomatoes, do have genuine poisonous potential, since their leaves contain a real toxin. Indigenous communities in the Andes spent generations breeding less toxic varieties, eventually ` },
          { type: 'vocab', text: `domesticating`, vid: 4 },
          { type: 'text', text: ` the potato we know today. Even so, Europeans remained deeply suspicious of potatoes when the vegetable first arrived from South America. Fortunately for French fry lovers everywhere, that fear ultimately faded, and the world gained a fast-food favorite.` }
        ],
        [
          { type: 'text', text: `Coffee was ` },
          { type: 'vocab', text: `shunned`, vid: 5 },
          { type: 'text', text: ` for entirely different reasons. After arriving in Europe around the same time as potatoes and tomatoes, the drink drew suspicion from Christian leaders, who branded it satanic. Why? Christians of the era were famously no fun, so perhaps they simply found it too enjoyable. Coffee's close ties to the Islamic world certainly didn't help either. According to legend, public opinion only began to shift after Pope Clement VIII tried the drink himself and declared it delicious.` }
        ],
        [
          { type: 'text', text: `Religion also played a part in shaping salt's reputation. Leonardo da Vinci's famous painting The Last Supper shows Judas Iscariot knocking over salt, a detail that helped fuel the ` },
          { type: 'vocab', text: `superstition`, vid: 6 },
          { type: 'text', text: ` that spilled salt brings misfortune. Stories of armies salting their enemies' farmland added to this dark reputation, though the truth of these tales is debatable.` }
        ],
        [
          { type: 'text', text: `From a modern perspective, these old food fears can seem silly. We no longer tremble at tomatoes or see Satan in a cappuccino. Still, these strange chapters of history are worth remembering. ` },
          { type: 'pattern', text: `If nothing else, they remind us that fearing the unfamiliar is simply human nature`, pid: 'P2' },
          { type: 'text', text: `, and that progress often means learning to look past our own ` },
          { type: 'vocab', text: `prejudices`, vid: 7 },
          { type: 'text', text: `.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Rice is a dietary ______ in many Asian countries.", options: ["A. suspicion", "B. staple", "C. prejudice", "D. superstition"], answer: "B", explanation: "【選項解析】\n- (A) suspicion (n.) 懷疑\n- (B) staple (n.) 主食 (正解)\n- (C) prejudice (n.) 偏見\n- (D) superstition (n.) 迷信" },
      { id: 2, question: "The spilled chemicals turned out to be highly ______ to nearby plants.", options: ["A. widespread", "B. toxic", "C. sustainable", "D. promising"], answer: "B", explanation: "【選項解析】\n- (A) widespread (adj.) 廣泛的\n- (B) toxic (adj.) 有毒的 (正解)\n- (C) sustainable (adj.) 永續的\n- (D) promising (adj.) 有希望的" },
      { id: 3, question: "Some villagers still ______ the old house, believing it brings bad luck.", options: ["A. identify", "B. caution", "C. administer", "D. shun"], answer: "D", explanation: "【選項解析】\n- (A) identify (v.) 辨識\n- (B) caution (v.) 提醒\n- (C) administer (v.) 施予、管理\n- (D) shun (v.) 避開、排斥 (正解)" },
      { id: 4, question: "Walking under a ladder is a well-known ______ in many cultures.", options: ["A. breakthrough", "B. superstition", "C. discovery", "D. approach"], answer: "B", explanation: "【選項解析】\n- (A) breakthrough (n.) 突破\n- (B) superstition (n.) 迷信 (正解)\n- (C) discovery (n.) 發現\n- (D) approach (n.) 方法" },
    ],
    cloze: {
      text: "Many foods now considered kitchen staples were once viewed with deep suspicion in Europe. Tomatoes, for example, were avoided for [1] 200 years after their arrival, partly because they resembled a genuinely poisonous berry. Potatoes faced similar resistance, even [2] indigenous communities in South America had already bred safer varieties over many generations. Coffee's reputation suffered for a different reason: religious leaders viewed it [3] suspicion simply because people enjoyed it so much. Public opinion only shifted [4] a pope reportedly tasted the drink and approved of it. [5] these stories may now sound amusing, they reveal how deeply unfamiliar foods can unsettle a society.",
      questions: [
        { id: 1, options: ["A. nearly to", "B. almost", "C. close to", "D. almost of"], answer: "B", explanation: "almost + 數量詞，表「將近」，修飾後面的 200 years。" },
        { id: 2, options: ["A. so", "B. though", "C. unless", "D. because"], answer: "B", explanation: "though 引導讓步子句，表「儘管」，說明儘管已有安全品種，歐洲人仍抱持懷疑。" },
        { id: 3, options: ["A. by", "B. for", "C. as", "D. with"], answer: "D", explanation: "view...with suspicion 為固定搭配，表「以懷疑的眼光看待…」。" },
        { id: 4, options: ["A. unless", "B. despite", "C. after", "D. before"], answer: "C", explanation: "after + 子句，表「在…之後」，說明公眾觀感是在教宗品嚐之後才開始轉變。" },
        { id: 5, options: ["A. Since", "B. Unless", "C. While", "D. Because"], answer: "C", explanation: "While 引導讓步子句，表「雖然」，與後句形成語意上的轉折對比。" },
      ]
    },
    wordBank: {
      words: ["(A) breed", "(B) companion", "(C) folklore", "(D) genuine", "(E) misleading", "(F) origin", "(G) peculiar", "(H) resemblance", "(I) skeptical", "(J) unfamiliar"],
      passage: "Historians who study food culture often find that the [1] of a strange food fear can be traced back to a single misunderstanding rather than any real danger. In the case of tomatoes, Europeans were likely confused by the fruit's close [2] to a genuinely poisonous berry found in the region.\n\nWhile the tomato story turned out to be mostly [3], the fear surrounding potatoes was based on something more [4]. The leaves of the potato plant do contain real toxins, which explains why early growers in the Andes worked for generations to [5] safer varieties for eating.\n\nCoffee's unpopularity followed an entirely different pattern. Rather than fearing any physical danger, religious leaders at the time were deeply [6] of a drink so closely associated with a rival faith and culture.\n\nSalt, meanwhile, earned its unlucky reputation largely through [7] rather than science. A single detail in a famous painting was enough to transform an ordinary seasoning into a symbol of misfortune.\n\nTaken together, these stories reveal a [8] pattern: humans tend to treat anything [9] with far more suspicion than the evidence actually supports. Even foods that eventually become a daily [10] on dinner tables everywhere were once regarded as genuinely frightening.",
      answers: { 1: "F", 2: "H", 3: "E", 4: "D", 5: "A", 6: "I", 7: "C", 8: "G", 9: "J", 10: "B" }
    },
    discourse: {
      options: [
        "A. Unlike tomatoes, however, this fear was not entirely unfounded, since the plant's leaves genuinely contain toxic compounds.",
        "B. A famous painting, of all things, may have played a surprisingly large role in shaping this particular superstition.",
        "C. It is tempting to laugh at these old fears today, yet similar patterns of suspicion still shape how people view unfamiliar foods.",
        "D. Religious leaders at the time seemed less concerned with danger and more concerned with simple disapproval.",
        "E. The real explanation likely has nothing to do with chemistry and everything to do with a case of mistaken identity."
      ],
      paragraphs: [
        "Many foods now considered essential to daily life were once regarded with genuine fear across Europe. Understanding why reveals as much about human psychology as it does about food itself.",
        "Tomatoes, for instance, were avoided for nearly two centuries after one popular legend blamed them for a string of mysterious deaths. [1]",
        "Potatoes faced a similar wave of suspicion when they first arrived from South America. [2] Fortunately, careful breeding by indigenous farmers had already reduced much of this risk long before the vegetable reached European tables.",
        "Coffee and salt, by contrast, suffered more from superstition than science. [3] [4]"
      ],
      answers: { 1: "E", 2: "A", 3: "D", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Tomatoes, potatoes, coffee, and salt were once feared in Europe for various reasons before becoming everyday favorites", "B. Modern scientists have proven that all these foods are genuinely dangerous", "C. European food culture has remained unchanged since the 1500s", "D. Religious leaders were always correct about which foods were safe to eat"], answer: "A", explanation: "主旨題。全文介紹番茄、馬鈴薯、咖啡與鹽四種食物，如何從曾被歐洲人畏懼轉變為日常美食。" },
        { id: 2, question: "According to the article, what is the more likely explanation for early fears about tomatoes?", options: ["A. They genuinely poisoned diners through pewter plates", "B. They looked too similar to deadly belladonna berries", "C. They were banned by religious leaders at the time", "D. They caused widespread outbreaks of disease"], answer: "B", explanation: "細節題。文中指出更可信的解釋是「tomatoes simply looked too much like belladonna berries, which really are deadly」。" },
        { id: 3, question: "Why were potatoes considered genuinely risky, unlike tomatoes, according to the article?", options: ["A. Their leaves contain a real toxin", "B. They were associated with Satan by religious leaders", "C. They were too expensive for ordinary families", "D. They could not survive European weather conditions"], answer: "A", explanation: "細節題。文中明確指出馬鈴薯「do have genuine poisonous potential, since their leaves contain a real toxin」。" },
        { id: 4, question: "What can be inferred about the article's overall message regarding fear of unfamiliar things?", options: ["A. Fear of the unfamiliar is a natural human tendency that progress can help us move past", "B. All food fears throughout history have eventually been proven completely true", "C. Modern society no longer experiences any fear of unfamiliar things", "D. Religious leaders were the only group responsible for spreading food fears"], answer: "A", explanation: "推論題。文末提到「fearing the unfamiliar is simply human nature, and that progress often means learning to look past our own prejudices」，點出全文核心訊息。" }
      ]
    }
  },

  "Unit 5": {
    title: "A Scenic Journey Through Germany and Austria",
    chineseTitle: "背起行囊，漫遊德奧絕美風光",
    passage: `Last October, I set off through Germany and Austria with only a backpack. My first stop was Munich, a city where old stone architecture and a lively street culture sit comfortably side by side. I spent my days wandering the old town, picking up food from market stalls and enjoying cafés that are popular with locals and travelers alike.

From Munich, I headed south—first by train, then by bus—to the Königssee, a lake tucked inside the Bavarian Alps. The water was glassy, the cliffs steep, and the whole place was as stunning as it was peaceful. An electric boat carried us slowly across, mountains rising sharply on both sides. Midway through, the captain raised a trumpet and played a short phrase. The notes bounced off the rock faces in clean, distinct echoes—the kind of moment you wouldn't expect and won't easily forget.

From there, I crossed into Austria. After a brief stop in Salzburg, I pushed on to Hallstatt. The town came into view quietly—a cluster of rooftops caught between a lake and a steep mountain face, exactly as compact and striking as I'd heard.

In Hallstatt, I took the funicular up to the ancient salt mine above the town. After changing into protective overalls, our tour group followed a guide through narrow tunnels deep inside the mountain. The best part was the wooden slides the miners once used to move around. Riding them turned the visit into something between a history lesson and a theme park ride, the dead quiet of the tunnels making it feel even more surreal.

I later continued to Vienna by train, taking a Railjet for the last stretch. The landscape shifted as we moved east, trading lakes and peaks for flatter ground around the capital. In Vienna, I got around by metro and tram. I stopped at the Hundertwasserhaus, an apartment block painted in bold colors with trees growing from its window ledges. As the light faded, I walked over to the Prater, the city's vast public park, where its famous Ferris wheel was slowly turning as evening lights began to appear.

Traveling mostly by train kept things easy. Each departure felt like a natural extension of wherever I'd just been, rather than a break from it—which, for a trip like this, made all the difference.`,
    chineseTranslation: `去年十月，我僅背著一只背包，展開了一趟穿越德國與奧地利的旅程。我的第一站是慕尼黑，這座城市中，古老的石造建築與熱鬧的街頭文化自在地並存著。我把時間都花在漫步於舊城區之中，在市集攤位買些小吃，並流連於深受當地人與旅客喜愛的咖啡館裡。

離開慕尼黑後，我先搭火車、再轉乘巴士，一路南下前往國王湖——一座隱身於巴伐利亞阿爾卑斯山脈之中的湖泊。湖水清澈如鏡，峭壁陡峭，整個地方既令人屏息，又寧靜無比。一艘電動船緩緩載著我們渡過湖面，兩側山巒陡然聳立。航程中途，船長拿起一支小喇叭，吹奏了一段短短的旋律。樂音在岩壁間反彈，形成清晰分明的回聲——那是一種你意想不到、卻也難以輕易忘懷的時刻。

從那裡，我跨越邊境進入了奧地利。在薩爾斯堡短暫停留後，我繼續前往哈爾施塔特。這座小鎮悄然映入眼簾——一片屋頂群聚，夾在湖泊與陡峭山壁之間，正如我耳聞的那般小巧而醒目。

在哈爾施塔特，我搭乘纜車前往小鎮上方的古老鹽礦。換上防護工作服後，我們的團隊跟隨導遊，穿越山體深處的狹窄隧道。最精彩的部分，是過去礦工用來移動的木製滑梯。乘坐這些滑梯，讓這趟參觀體驗介於一堂歷史課與一場主題樂園遊樂設施之間，而隧道中死寂的靜謐，更讓這一切顯得格外超現實。

後來，我搭火車繼續前往維也納，最後一段路程搭乘了鐵路特快列車（Railjet）。隨著我們一路東行，沿途的景致逐漸轉變，湖泊與山峰讓位給首都周圍較為平坦的地勢。在維也納，我靠地鐵與電車代步。我在百水公寓停留——這是一棟漆上大膽色彩、窗台上還長著樹木的公寓建築。隨著天色漸暗，我走到了普拉特公園，這座城市廣闊的公共綠地，其著名的摩天輪正緩緩轉動，夜間燈光也開始一一亮起。

大部分旅程以火車代步，讓一切都變得輕鬆自在。每一次出發，感覺都像是前一站的自然延續，而非一種中斷——對於這樣一趟旅程而言，這正是最重要的關鍵所在。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "stall", pos: "n.", meaning: "攤位", collocations: "market stalls 市集攤位" },
        { id: 2, word: "steep", pos: "adj.", meaning: "陡峭的", collocations: "steep cliffs 陡峭的峭壁" },
        { id: 3, word: "funicular", pos: "n.", meaning: "纜車", collocations: "took the funicular up 搭乘纜車而上" },
        { id: 4, word: "surreal", pos: "adj.", meaning: "超現實的", collocations: "feel even more surreal 感覺更加超現實" },
        { id: 5, word: "stretch", pos: "n.", meaning: "一段路程", collocations: "the last stretch 最後一段路程" },
        { id: 6, word: "ledge", pos: "n.", meaning: "窗台、突出的邊緣", collocations: "window ledges 窗台" },
        { id: 7, word: "extension", pos: "n.", meaning: "延伸、延續", collocations: "a natural extension 自然的延續" }
      ],
      grammarNotes: [
        { id: "G1", title: "獨立分詞構句（表伴隨動作）", excerpt: "mountains rising sharply on both sides", analysis: "獨立分詞構句，主詞 mountains 與主要子句主詞不同，故保留主詞，表「兩側山巒陡然聳立」的伴隨狀態。" },
        { id: "G2", title: "as...as... 原級比較句型", excerpt: "exactly as compact and striking as I'd heard", analysis: "as + 形容詞 + as + 子句，表「正如…一樣」，說明小鎮的樣貌與傳聞中描述的完全相符。" }
      ],
      patternNotes: [
        { id: "P1", title: "rather than + N. (而非…)", excerpt: "a natural extension of wherever I'd just been, rather than a break from it", analysis: "rather than 後接名詞片語，表「而非」，用於對比兩種感受——延續感而非中斷感。" },
        { id: "P2", title: "分詞構句作結果狀語", excerpt: "the dead quiet of the tunnels making it feel even more surreal", analysis: "獨立分詞構句，主詞為 the dead quiet of the tunnels，表「使得…感覺更加超現實」的結果。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Last October, I set off through Germany and Austria with only a backpack. My first stop was Munich, a city where old stone architecture and a lively street culture sit comfortably side by side. I spent my days wandering the old town, picking up food from market ` },
          { type: 'vocab', text: `stalls`, vid: 1 },
          { type: 'text', text: ` and enjoying cafés that are popular with locals and travelers alike.` }
        ],
        [
          { type: 'text', text: `From Munich, I headed south—first by train, then by bus—to the Königssee, a lake tucked inside the Bavarian Alps. The water was glassy, the cliffs ` },
          { type: 'vocab', text: `steep`, vid: 2 },
          { type: 'text', text: `, and the whole place was as stunning as it was peaceful. An electric boat carried us slowly across, ` },
          { type: 'grammar', text: `mountains rising sharply on both sides`, gid: 'G1' },
          { type: 'text', text: `. Midway through, the captain raised a trumpet and played a short phrase. The notes bounced off the rock faces in clean, distinct echoes—the kind of moment you wouldn't expect and won't easily forget.` }
        ],
        [
          { type: 'text', text: `From there, I crossed into Austria. After a brief stop in Salzburg, I pushed on to Hallstatt. The town came into view quietly—a cluster of rooftops caught between a lake and a steep mountain face, ` },
          { type: 'grammar', text: `exactly as compact and striking as I'd heard`, gid: 'G2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `In Hallstatt, I took the ` },
          { type: 'vocab', text: `funicular`, vid: 3 },
          { type: 'text', text: ` up to the ancient salt mine above the town. After changing into protective overalls, our tour group followed a guide through narrow tunnels deep inside the mountain. The best part was the wooden slides the miners once used to move around. Riding them turned the visit into something between a history lesson and a theme park ride, ` },
          { type: 'pattern', text: `the dead quiet of the tunnels making it feel even more`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `surreal`, vid: 4 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `I later continued to Vienna by train, taking a Railjet for the last ` },
          { type: 'vocab', text: `stretch`, vid: 5 },
          { type: 'text', text: `. The landscape shifted as we moved east, trading lakes and peaks for flatter ground around the capital. In Vienna, I got around by metro and tram. I stopped at the Hundertwasserhaus, an apartment block painted in bold colors with trees growing from its window ` },
          { type: 'vocab', text: `ledges`, vid: 6 },
          { type: 'text', text: `. As the light faded, I walked over to the Prater, the city's vast public park, where its famous Ferris wheel was slowly turning as evening lights began to appear.` }
        ],
        [
          { type: 'text', text: `Traveling mostly by train kept things easy. Each departure felt like a natural ` },
          { type: 'vocab', text: `extension`, vid: 7 },
          { type: 'text', text: ` of wherever I'd just been, ` },
          { type: 'pattern', text: `rather than a break from it`, pid: 'P1' },
          { type: 'text', text: `—which, for a trip like this, made all the difference.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "On weekends, the plaza fills with food ______ selling snacks from around the world.", options: ["A. stalls", "B. extensions", "C. ledges", "D. stretches"], answer: "A", explanation: "【選項解析】\n- (A) stalls (n.) 攤位 (正解)\n- (B) extensions (n.) 延伸\n- (C) ledges (n.) 窗台\n- (D) stretches (n.) 一段路程" },
      { id: 2, question: "The trail became dangerously ______ near the top of the mountain.", options: ["A. sustainable", "B. surreal", "C. steep", "D. toxic"], answer: "C", explanation: "【選項解析】\n- (A) sustainable (adj.) 永續的\n- (B) surreal (adj.) 超現實的\n- (C) steep (adj.) 陡峭的 (正解)\n- (D) toxic (adj.) 有毒的" },
      { id: 3, question: "Standing alone in the empty airport at 3 a.m. felt strangely ______.", options: ["A. genuine", "B. surreal", "C. steep", "D. sustainable"], answer: "B", explanation: "【選項解析】\n- (A) genuine (adj.) 真實的\n- (B) surreal (adj.) 超現實的 (正解)\n- (C) steep (adj.) 陡峭的\n- (D) sustainable (adj.) 永續的" },
      { id: 4, question: "We drove the final ______ of the journey in complete silence, exhausted from the long trip.", options: ["A. stall", "B. stretch", "C. extension", "D. ledge"], answer: "B", explanation: "【選項解析】\n- (A) stall (n.) 攤位\n- (B) stretch (n.) 一段路程 (正解)\n- (C) extension (n.) 延伸\n- (D) ledge (n.) 窗台" },
    ],
    cloze: {
      text: "Traveling through Germany and Austria by train and bus made it easy to move [1] cities without much planning. One highlight was a boat ride across the Königssee, [2] steep cliffs rose on either side of the glassy water. Partway through the trip, a trumpet player performed a short tune, and the notes echoed [3] the surrounding rock walls. Later, in Hallstatt, visitors could ride old wooden slides once used by miners, [4] turned a simple tour into something closer to an adventure. By [5] mostly by train, the entire trip felt connected rather than broken into separate stops.",
      questions: [
        { id: 1, options: ["A. unless", "B. between", "C. although", "D. despite"], answer: "B", explanation: "move between + 複數名詞，表「在…之間移動」，說明搭乘交通工具往返不同城市。" },
        { id: 2, options: ["A. where", "B. which", "C. that", "D. when"], answer: "A", explanation: "where 作關係副詞，引導地方子句修飾 the Königssee，表「在那裡」。" },
        { id: 3, options: ["A. at", "B. on", "C. off", "D. with"], answer: "C", explanation: "echo off + N. 表「從…反彈回音」，固定搭配介系詞 off。" },
        { id: 4, options: ["A. who", "B. what", "C. that", "D. which"], answer: "D", explanation: "which 代替前面整個子句的概念（乘坐滑梯這件事），引導非限定關係子句補充結果。" },
        { id: 5, options: ["A. traveling", "B. travel", "C. to travel", "D. traveled"], answer: "A", explanation: "by + V-ing 表「藉由…的方式」，介系詞 by 後須接動名詞。" },
      ]
    },
    wordBank: {
      words: ["(A) breathtaking", "(B) compact", "(C) detour", "(D) efficient", "(E) glassy", "(F) itinerary", "(G) landmark", "(H) remote", "(I) spontaneous", "(J) transit"],
      passage: "Traveling without a fixed [1] can lead to some of the most memorable moments of a trip. Rather than booking every stop in advance, the author allowed room for [2] decisions, such as a sudden boat ride across a quiet alpine lake.\n\nThe Königssee, with its [3] surface and towering cliffs, offered one of the trip's most [4] views. Its location deep within the Bavarian Alps makes it feel wonderfully [5] from the noise of larger cities.\n\nHallstatt, by contrast, impressed through sheer charm rather than scale. Its [6] layout of rooftops squeezed between a lake and a mountainside made the entire town feel like a single, carefully framed photograph.\n\nMoving between cities relied heavily on public [7], including trains, buses, and trams. This network proved remarkably [8], allowing the traveler to shift from mountain scenery to city streets within a single day.\n\nIn Vienna, the Hundertwasserhaus stood out as an unmissable [9], instantly recognizable for its bold colors and rooftop greenery. Even without taking a single planned [10] from the main route, the trip still delivered constant surprises simply through the pace of train travel itself.",
      answers: { 1: "F", 2: "I", 3: "E", 4: "A", 5: "H", 6: "B", 7: "J", 8: "D", 9: "G", 10: "C" }
    },
    discourse: {
      options: [
        "A. Old stone buildings and a relaxed café culture made it an easy place to simply wander without a fixed plan.",
        "B. Instead of feeling like separate, disconnected stops, each new city felt like a natural continuation of the last.",
        "C. Few visitors expect a quiet mountain lake to deliver one of the most memorable moments of an entire trip.",
        "D. Wooden slides once used by miners turned the underground visit into something closer to a playground than a history lesson.",
        "E. The boat glided silently across the water until the captain surprised everyone with a short trumpet performance."
      ],
      paragraphs: [
        "Traveling through Germany and Austria with nothing but a backpack, the author began the journey in Munich.",
        "From there, the trip continued south to the Königssee, a lake tucked deep within the Bavarian Alps. [1] [2]",
        "After crossing into Austria, a brief stop in Salzburg led to the picturesque town of Hallstatt, famous for its ancient salt mine. [3]",
        "The journey ended in Vienna, reached entirely by train alongside the rest of the trip. [4]"
      ],
      answers: { 1: "C", 2: "E", 3: "D", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main purpose of this article?", options: ["A. To review hotels across Germany and Austria", "B. To share a personal travel experience through Germany and Austria", "C. To compare train systems in different European countries", "D. To advertise a specific tour company's services"], answer: "B", explanation: "主旨題。全文以第一人稱敘述作者背包旅行穿越德國與奧地利的個人經歷。" },
        { id: 2, question: "According to the article, what happened during the boat ride on the Königssee?", options: ["A. The boat broke down in the middle of the lake", "B. The captain played a short tune on a trumpet", "C. A storm forced the boat to turn back early", "D. Passengers were required to row the boat themselves"], answer: "B", explanation: "細節題。文中提到「the captain raised a trumpet and played a short phrase」，樂音在岩壁間產生回聲。" },
        { id: 3, question: "What did the author do in the ancient salt mine near Hallstatt?", options: ["A. Watched a live mining demonstration", "B. Rode wooden slides once used by miners", "C. Purchased souvenirs made of salt", "D. Attended a classical music concert underground"], answer: "B", explanation: "細節題。文中明確提到「The best part was the wooden slides the miners once used to move around」。" },
        { id: 4, question: "What can be inferred about why the author preferred traveling mostly by train?", options: ["A. Trains were the cheapest option available", "B. It made each stop feel connected rather than separate", "C. The author was afraid of flying", "D. Buses were not available in most areas"], answer: "B", explanation: "推論題。文末提到搭火車讓每一站感覺像是前一站的自然延續，而非中斷，這正是作者偏好火車的原因。" }
      ]
    }
  },

  "Unit 7": {
    title: "The Hidden Science Behind Your Favorite Restaurants",
    chineseTitle: "你最愛餐廳裡隱藏的科學",
    passage: `When you walk into a restaurant, you probably don't give much thought to its lighting or layout. A restaurant's atmosphere is rarely accidental, though. Indeed, restaurants draw on a variety of subtle strategies to shape your experience—and your spending. Here are just some of the tricks you can find hiding in plain sight.

Color Psychology: Why Red and Yellow Are Go-To Hues

Fast-food giants like McDonald's and KFC use red and yellow on purpose. Warm colors stimulate appetite and raise energy levels, which makes you dig in quickly and move on sooner. In contrast, cool colors like blue and purple suppress hunger, and that's why you almost never see them used as the main colors in a restaurant.

The Power of Menu Placement

Restaurants carefully design menus to guide your choices. Studies show that customers tend to notice items placed in the top-right corner first, so restaurants often set aside that space for their most profitable dishes. Expensive items are also sometimes placed near the top to make other choices seem more reasonable by comparison. Even the absence of dollar signs can boost spending, as it encourages customers to focus on the food itself rather than the cost.

How Music Controls Your Pace

That relaxing background music playing in a nice restaurant is working against your wallet. Studies have found that slow-tempo music causes diners to stay longer and spend up to 40 percent more on drinks than fast-paced music does. Meanwhile, upbeat, loud music speeds up eating and pushes customers out the door faster, which is exactly what fast-food restaurants want during busy rush hours.

Sit and Stay as Long as They Like

Take a closer look at the chairs next time you eat out. The hard stools and narrow seats in fast-food restaurants are no accident. They are designed to make you physically uncomfortable after about 20 minutes and nudge you out the door. Fancy restaurants do the opposite—plush, cushioned chairs invite you to stay, order another round, and slowly linger over dessert.

Dim Lighting and Bigger Bills

Fine dining restaurants don't use dim lighting just to set a romantic mood. Research shows that diners in dimly lit environments order more calories and are considerably more likely to order dessert. Darkness makes diners feel relaxed and less self-conscious about their choices, so they tend to indulge a little more.`,
    chineseTranslation: `當你走進一間餐廳時，大概不會特別留意它的燈光或空間配置。然而，一間餐廳的氛圍，其實鮮少是偶然形成的。事實上，餐廳會運用各式各樣細膩的策略，來形塑你的用餐體驗——以及你的消費金額。以下就是幾個藏在你眼前、卻容易被忽略的小技巧。

色彩心理學：為何紅色與黃色是首選色調

像麥當勞與肯德基這樣的速食巨頭，都是刻意使用紅色與黃色。暖色調能刺激食慾、提升能量感，讓你快速進食、盡快離開。相反地，像藍色與紫色這類冷色調則會抑制食慾，這也是為什麼你幾乎不會看到餐廳以這些顏色作為主色調的原因。

菜單擺放位置的力量

餐廳會精心設計菜單，藉此引導你的選擇。研究顯示，顧客往往會最先注意到放在右上角的品項，因此餐廳經常將這個位置，留給利潤最高的菜色。昂貴的品項有時也會被安排在上方，藉由比較效果，讓其他選項顯得更加「划算」。就連菜單上不標示金錢符號這件事，也能提升消費，因為這能讓顧客將注意力放在食物本身，而非價格之上。

音樂如何控制你的用餐節奏

那在高級餐廳裡播放、令人放鬆的背景音樂，其實正在悄悄對付你的荷包。研究發現，慢節奏音樂會讓用餐者停留更久，在飲料上的花費甚至比快節奏音樂時多出高達 40%。相反地，輕快、大聲的音樂則會加速用餐速度、催促顧客盡快離開，而這正是速食餐廳在尖峰時段最希望達到的效果。

想坐多久就坐多久

下次外出用餐時，不妨仔細看看椅子。速食餐廳裡那些堅硬的高腳椅與狹窄座位，絕非偶然。它們的設計，就是要讓你在大約 20 分鐘後開始感到身體不適，進而催促你離開。高級餐廳則恰恰相反——鬆軟舒適的椅子邀請你多留一會兒，再點一輪飲品，慢慢享用甜點。

昏暗燈光與更大的帳單

高級餐廳使用昏暗燈光，並不只是為了營造浪漫氛圍。研究顯示，在光線昏暗的環境中用餐的顧客，點餐的卡路里總量較高，點甜點的機率也顯著提升。黑暗讓用餐者感到更放鬆、對自己的選擇較不在意，因此也更容易放縱自己多享用一些。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "atmosphere", pos: "n.", meaning: "氛圍", collocations: "a restaurant's atmosphere 餐廳的氛圍" },
        { id: 2, word: "stimulate", pos: "v.", meaning: "刺激", collocations: "stimulate appetite 刺激食慾" },
        { id: 3, word: "suppress", pos: "v.", meaning: "抑制", collocations: "suppress hunger 抑制食慾" },
        { id: 4, word: "profitable", pos: "adj.", meaning: "獲利高的", collocations: "most profitable dishes 利潤最高的菜色" },
        { id: 5, word: "tempo", pos: "n.", meaning: "節奏、速度", collocations: "slow-tempo music 慢節奏音樂" },
        { id: 6, word: "plush", pos: "adj.", meaning: "柔軟舒適的、豪華的", collocations: "plush, cushioned chairs 柔軟舒適的椅子" },
        { id: 7, word: "indulge", pos: "v.", meaning: "放縱、盡情享受", collocations: "tend to indulge a little more 更容易多放縱一些" }
      ],
      grammarNotes: [
        { id: "G1", title: "which 引導非限定關係子句（補充結果）", excerpt: "Warm colors stimulate appetite and raise energy levels, which makes you dig in quickly", analysis: "which 代替前面整句的概念（暖色調刺激食慾並提升能量），引導非限定關係子句補充其所造成的結果。" },
        { id: "G2", title: "as 引導原因子句", excerpt: "as it encourages customers to focus on the food itself", analysis: "as 引導原因子句，表「因為」，說明省略金錢符號能提升消費的原因。" }
      ],
      patternNotes: [
        { id: "P1", title: "which is exactly what... (這正是…)", excerpt: "which is exactly what fast-food restaurants want during busy rush hours", analysis: "which 代替前述整個概念，引導非限定關係子句，表「這正是…」，強調速食餐廳所期望達到的效果。" },
        { id: "P2", title: "be considerably more likely to V. (更有可能做…)", excerpt: "are considerably more likely to order dessert", analysis: "be more likely to V. 表「更有可能做…」，considerably 加強程度，表示昏暗燈光顯著提升點甜點的機率。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `When you walk into a restaurant, you probably don't give much thought to its lighting or layout. A restaurant's ` },
          { type: 'vocab', text: `atmosphere`, vid: 1 },
          { type: 'text', text: ` is rarely accidental, though. Indeed, restaurants draw on a variety of subtle strategies to shape your experience—and your spending. Here are just some of the tricks you can find hiding in plain sight.` }
        ],
        [
          { type: 'text', text: `Color Psychology: Why Red and Yellow Are Go-To Hues\n\nFast-food giants like McDonald's and KFC use red and yellow on purpose. Warm colors ` },
          { type: 'vocab', text: `stimulate`, vid: 2 },
          { type: 'text', text: ` appetite and raise energy levels, ` },
          { type: 'grammar', text: `which makes you dig in quickly and move on sooner`, gid: 'G1' },
          { type: 'text', text: `. In contrast, cool colors like blue and purple ` },
          { type: 'vocab', text: `suppress`, vid: 3 },
          { type: 'text', text: ` hunger, and that's why you almost never see them used as the main colors in a restaurant.` }
        ],
        [
          { type: 'text', text: `The Power of Menu Placement\n\nRestaurants carefully design menus to guide your choices. Studies show that customers tend to notice items placed in the top-right corner first, so restaurants often set aside that space for their most ` },
          { type: 'vocab', text: `profitable`, vid: 4 },
          { type: 'text', text: ` dishes. Expensive items are also sometimes placed near the top to make other choices seem more reasonable by comparison. Even the absence of dollar signs can boost spending, ` },
          { type: 'grammar', text: `as it encourages customers to focus on the food itself rather than the cost`, gid: 'G2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `How Music Controls Your Pace\n\nThat relaxing background music playing in a nice restaurant is working against your wallet. Studies have found that slow-` },
          { type: 'vocab', text: `tempo`, vid: 5 },
          { type: 'text', text: ` music causes diners to stay longer and spend up to 40 percent more on drinks than fast-paced music does. Meanwhile, upbeat, loud music speeds up eating and pushes customers out the door faster, ` },
          { type: 'pattern', text: `which is exactly what fast-food restaurants want during busy rush hours`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Sit and Stay as Long as They Like\n\nTake a closer look at the chairs next time you eat out. The hard stools and narrow seats in fast-food restaurants are no accident. They are designed to make you physically uncomfortable after about 20 minutes and nudge you out the door. Fancy restaurants do the opposite—` },
          { type: 'vocab', text: `plush`, vid: 6 },
          { type: 'text', text: `, cushioned chairs invite you to stay, order another round, and slowly linger over dessert.` }
        ],
        [
          { type: 'text', text: `Dim Lighting and Bigger Bills\n\nFine dining restaurants don't use dim lighting just to set a romantic mood. Research shows that diners in dimly lit environments order more calories and ` },
          { type: 'pattern', text: `are considerably more likely to order dessert`, pid: 'P2' },
          { type: 'text', text: `. Darkness makes diners feel relaxed and less self-conscious about their choices, so they tend to ` },
          { type: 'vocab', text: `indulge`, vid: 7 },
          { type: 'text', text: ` a little more.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Soft lighting and quiet music helped create a relaxing ______ in the small café.", options: ["A. discovery", "B. atmosphere", "C. tempo", "D. layout"], answer: "B", explanation: "【選項解析】\n- (A) discovery (n.) 發現\n- (B) atmosphere (n.) 氛圍 (正解)\n- (C) tempo (n.) 節奏\n- (D) layout (n.) 配置" },
      { id: 2, question: "The smell of fresh bread is often used to ______ customers' appetites.", options: ["A. stimulate", "B. caution", "C. identify", "D. suppress"], answer: "A", explanation: "【選項解析】\n- (A) stimulate (v.) 刺激 (正解)\n- (B) caution (v.) 提醒\n- (C) identify (v.) 辨識\n- (D) suppress (v.) 抑制" },
      { id: 3, question: "The new café on Main Street has quickly become one of the most ______ shops in town.", options: ["A. toxic", "B. surreal", "C. sustainable", "D. profitable"], answer: "D", explanation: "【選項解析】\n- (A) toxic (adj.) 有毒的\n- (B) surreal (adj.) 超現實的\n- (C) sustainable (adj.) 永續的\n- (D) profitable (adj.) 獲利高的 (正解)" },
      { id: 4, question: "On vacation, she allowed herself to ______ in desserts she normally avoids.", options: ["A. identify", "B. suppress", "C. indulge", "D. stimulate"], answer: "C", explanation: "【選項解析】\n- (A) identify (v.) 辨識\n- (B) suppress (v.) 抑制\n- (C) indulge (v.) 放縱、盡情享受 (正解)\n- (D) stimulate (v.) 刺激" },
    ],
    cloze: {
      text: "Restaurants rely on far more psychology than most customers realize. Warm colors like red and yellow are chosen [1] purpose because they stimulate appetite and encourage diners to eat quickly. Menus are also carefully designed, [2] profitable items often placed in the top-right corner, where customers' eyes tend to land first. Background music plays a role as well: slow music causes people to linger, [3] fast-paced music pushes them to finish and leave sooner. Even seating can be used strategically, [4] uncomfortable chairs in fast-food restaurants that encourage customers to eat and go. [5] all these details are designed carefully, dining out rarely feels like a completely neutral experience.",
      questions: [
        { id: 1, options: ["A. on", "B. by", "C. with", "D. for"], answer: "A", explanation: "on purpose 為固定片語，表「故意地」，指餐廳刻意選用暖色調。" },
        { id: 2, options: ["A. of", "B. by", "C. with", "D. for"], answer: "C", explanation: "with + 受詞 + 過去分詞，為獨立分詞構句，表「…被放置在…」的伴隨狀態。" },
        { id: 3, options: ["A. because", "B. so", "C. while", "D. unless"], answer: "C", explanation: "while 引導對比子句，表「然而」，與前句慢音樂的效果形成對比。" },
        { id: 4, options: ["A. with", "B. although", "C. unless", "D. despite"], answer: "A", explanation: "with + 名詞片語，為獨立分詞構句的簡化形式，表「伴隨著…」，此處舉例說明座椅策略。" },
        { id: 5, options: ["A. Unless", "B. Despite", "C. Because", "D. Although"], answer: "C", explanation: "Because 引導原因子句，表「因為」，說明正因這些細節經過精心設計，用餐體驗才難以保持中立。" },
      ]
    },
    wordBank: {
      words: ["(A) cue", "(B) deliberate", "(C) discreet", "(D) influence", "(E) layout", "(F) linger", "(G) manipulate", "(H) perception", "(I) subconscious", "(J) turnover"],
      passage: "Every detail inside a restaurant, from the color on the walls to the music overhead, is often the result of a highly [1] design process rather than simple decoration.\n\nColors, for instance, are chosen to quietly [2] how hungry or relaxed customers feel, often without diners ever noticing the effect taking place.\n\nMenu [3] works in a similar way, using small visual cues to [4] attention toward specific dishes that restaurants most want customers to order.\n\nMusic functions as another powerful [5], subtly adjusting how quickly or slowly people eat depending on its tempo and volume.\n\nFurniture choices send signals as well. Hard, narrow seating in fast-food restaurants is [6] designed to discourage customers from staying too long, increasing table [7] during busy hours.\n\nLighting, meanwhile, shapes a diner's [8] of their own behavior. In dim environments, people tend to feel less self-conscious, which often leads them to [9] longer over dessert and extra drinks.\n\nMost customers remain completely unaware that these strategies exist, since restaurants design them to feel [10] rather than obvious, working quietly on the subconscious mind rather than demanding direct attention.",
      answers: { 1: "B", 2: "G", 3: "E", 4: "A", 5: "D", 6: "C", 7: "J", 8: "H", 9: "F", 10: "I" }
    },
    discourse: {
      options: [
        "A. None of these strategies are visible to the average customer, which is exactly why they work so effectively.",
        "B. Even small design choices, such as removing a dollar sign, can quietly influence how much a customer spends.",
        "C. Slower rhythms, by contrast, tend to make diners linger and order more, especially when it comes to drinks.",
        "D. Warm tones like red and yellow are chosen specifically because they are known to speed up how quickly people eat.",
        "E. Soft, cushioned chairs send an unspoken invitation for guests to relax, order dessert, and stay a while longer."
      ],
      paragraphs: [
        "Few people walking into a restaurant stop to consider why the walls are a certain color or why the music sounds a particular way. Yet almost nothing about a restaurant's design is left to chance.",
        "Color plays a surprisingly large role in shaping appetite. [1] This is part of the reason fast-food chains rarely use cool colors like blue or purple in their branding.",
        "Menu design works just as carefully behind the scenes. [2] Music adds another invisible layer of influence, with upbeat songs encouraging customers to finish quickly during busy hours. [3]",
        "Even furniture choices are far from random. [4]"
      ],
      answers: { 1: "D", 2: "B", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Restaurants use design, color, music, and lighting strategically to influence customer behavior", "B. Fast-food restaurants always provide better service than fine dining restaurants", "C. Customers are generally aware of all the psychological tricks restaurants use", "D. Restaurant design has no real effect on how much customers spend"], answer: "A", explanation: "主旨題。全文介紹餐廳如何透過色彩、菜單設計、音樂與燈光等策略，影響顧客的用餐行為與消費。" },
        { id: 2, question: "According to the article, why do fast-food restaurants often use red and yellow?", options: ["A. These colors are the cheapest to use in signage", "B. These colors suppress appetite and slow down eating", "C. Warm colors stimulate appetite and encourage customers to eat quickly", "D. These colors are required by food safety regulations"], answer: "C", explanation: "細節題。文中指出暖色調「stimulate appetite and raise energy levels, which makes you dig in quickly」。" },
        { id: 3, question: "What effect does slow-tempo music have on diners, according to the article?", options: ["A. It causes them to leave the restaurant more quickly", "B. It has no measurable effect on spending", "C. It causes them to stay longer and spend more on drinks", "D. It makes diners feel less hungry overall"], answer: "C", explanation: "細節題。文中提到慢節奏音樂「causes diners to stay longer and spend up to 40 percent more on drinks」。" },
        { id: 4, question: "What can be inferred about why fine dining restaurants use dim lighting?", options: ["A. To save money on electricity bills", "B. To make diners feel relaxed and more willing to order more", "C. To make the food appear more expensive than it is", "D. To comply with government lighting regulations"], answer: "B", explanation: "推論題。文中提到昏暗燈光讓顧客感到放鬆、較不在意自身選擇，因此更容易多點餐，暗示這是餐廳刻意營造的效果。" }
      ]
    }
  },

  "Unit 8": {
    title: "Learning to Let Go",
    chineseTitle: "學會放手",
    passage: `Do you have a friend or family member who seemingly can't throw anything away? Is their home filling up with item after item, year after year, so that even moving around in it is becoming a danger? If so, it may be a sign of a hoarding disorder.

It's important to distinguish hoarding from simple collecting. Collectors usually focus on specific objects—often objects of value—such as trading cards, antiques, or old books. Although they may own many items, their collections are typically highly organized. Hoarders, on the other hand, simply struggle with throwing anything away. Old newspapers, stationery, tissue packets, and broken cups keep piling up, which often leads to a dangerous level of clutter.

It is thought that around 2.5 percent of people suffer from hoarding disorder and that it tends to get worse with age. Treatment can be challenging, as hoarders often feel comforted when surrounded by their possessions. However, targeted therapy can help a hoarder recognize the thought patterns that drive the behavior and begin to control it. It takes patience and a lot of support, but people with hoarding disorder can be shown that it's possible to let things go.`,
    chineseTranslation: `你是否有朋友或家人，似乎什麼東西都捨不得丟棄？他們的家，是否年復一年地堆滿了一件又一件的物品，甚至連在屋內走動都變成一件危險的事？如果答案是肯定的，這可能是囤積症的徵兆。

區分「囤積」與單純的「收藏」是很重要的。收藏者通常專注於特定物品——往往是具有價值的物品——例如卡片、古董或舊書。儘管他們可能擁有大量物品，但他們的收藏通常都整理得井井有條。相反地，囤積者則單純難以丟棄任何東西。舊報紙、文具用品、面紙包裝，以及破損的杯子不斷堆積，往往導致危險程度的雜亂。

據估計，約有 2.5% 的人患有囤積症，且情況往往會隨著年齡增長而惡化。治療可能頗具挑戰性，因為囤積者往往在被自己的物品環繞時，才會感到安心。然而，針對性的治療，能幫助囤積者辨識出驅動此行為的思維模式，並開始學習控制它。這需要耐心與大量的支持，但囤積症患者是可以被引導認知到，放手其實是可行的。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "seemingly", pos: "adv.", meaning: "似乎、表面上看來", collocations: "seemingly can't throw anything away 似乎什麼都捨不得丟" },
        { id: 2, word: "distinguish", pos: "v.", meaning: "區分", collocations: "distinguish hoarding from collecting 區分囤積與收藏" },
        { id: 3, word: "antique", pos: "n.", meaning: "古董", collocations: "trading cards, antiques, or old books 卡片、古董或舊書" },
        { id: 4, word: "clutter", pos: "n.", meaning: "雜亂", collocations: "a dangerous level of clutter 危險程度的雜亂" },
        { id: 5, word: "challenging", pos: "adj.", meaning: "具挑戰性的", collocations: "treatment can be challenging 治療可能頗具挑戰性" },
        { id: 6, word: "possession", pos: "n.", meaning: "所有物", collocations: "surrounded by their possessions 被自己的物品環繞" },
        { id: 7, word: "recognize", pos: "v.", meaning: "辨識、意識到", collocations: "recognize the thought patterns 辨識思維模式" }
      ],
      grammarNotes: [
        { id: "G1", title: "so that + 子句，表結果", excerpt: "so that even moving around in it is becoming a danger", analysis: "so that 引導結果子句，表「以致於」，說明物品堆積造成的後果——連在屋內移動都變得危險。" },
        { id: "G2", title: "as 引導原因子句", excerpt: "as hoarders often feel comforted when surrounded by their possessions", analysis: "as 引導原因子句，表「因為」，說明治療之所以具挑戰性，是因為囤積者被物品環繞時會感到安心。" }
      ],
      patternNotes: [
        { id: "P1", title: "It is thought that... (據認為…)", excerpt: "It is thought that around 2.5 percent of people suffer from hoarding disorder", analysis: "It is thought that + 子句為被動句型，表「據認為…」，常用於陳述研究估計或普遍看法。" },
        { id: "P2", title: "It takes + 受詞 + to V. (需要…才能…)", excerpt: "It takes patience and a lot of support", analysis: "It takes + 受詞（+ to V.）表「需要…」，說明協助囤積症患者需要耐心與大量支持。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Do you have a friend or family member who ` },
          { type: 'vocab', text: `seemingly`, vid: 1 },
          { type: 'text', text: ` can't throw anything away? Is their home filling up with item after item, year after year, ` },
          { type: 'grammar', text: `so that even moving around in it is becoming a danger`, gid: 'G1' },
          { type: 'text', text: `? If so, it may be a sign of a hoarding disorder.` }
        ],
        [
          { type: 'text', text: `It's important to ` },
          { type: 'vocab', text: `distinguish`, vid: 2 },
          { type: 'text', text: ` hoarding from simple collecting. Collectors usually focus on specific objects—often objects of value—such as trading cards, ` },
          { type: 'vocab', text: `antiques`, vid: 3 },
          { type: 'text', text: `, or old books. Although they may own many items, their collections are typically highly organized. Hoarders, on the other hand, simply struggle with throwing anything away. Old newspapers, stationery, tissue packets, and broken cups keep piling up, which often leads to a dangerous level of ` },
          { type: 'vocab', text: `clutter`, vid: 4 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'pattern', text: `It is thought that around 2.5 percent of people suffer from hoarding disorder`, pid: 'P1' },
          { type: 'text', text: ` and that it tends to get worse with age. Treatment can be ` },
          { type: 'vocab', text: `challenging`, vid: 5 },
          { type: 'text', text: `, ` },
          { type: 'grammar', text: `as hoarders often feel comforted when surrounded by their possessions`, gid: 'G2' },
          { type: 'text', text: `. However, targeted therapy can help a hoarder ` },
          { type: 'vocab', text: `recognize`, vid: 7 },
          { type: 'text', text: ` the thought patterns that drive the behavior and begin to control it. ` },
          { type: 'pattern', text: `It takes patience and a lot of support`, pid: 'P2' },
          { type: 'text', text: `, but people with hoarding disorder can be shown that it's possible to let things go.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The house seemed empty at first, but it was ______ full of hidden rooms.", options: ["A. genuinely", "B. previously", "C. considerably", "D. seemingly"], answer: "D", explanation: "【選項解析】\n- (A) genuinely (adv.) 真正地\n- (B) previously (adv.) 先前\n- (C) considerably (adv.) 相當地\n- (D) seemingly (adv.) 似乎、表面上看來 (正解)" },
      { id: 2, question: "It can be hard to ______ fact from opinion in some news articles.", options: ["A. distinguish", "B. indulge", "C. shun", "D. administer"], answer: "A", explanation: "【選項解析】\n- (A) distinguish (v.) 區分 (正解)\n- (B) indulge (v.) 放縱\n- (C) shun (v.) 避開\n- (D) administer (v.) 施予" },
      { id: 3, question: "After the storm, the yard was covered in branches and other ______.", options: ["A. possession", "B. clutter", "C. antique", "D. layout"], answer: "B", explanation: "【選項解析】\n- (A) possession (n.) 所有物\n- (B) clutter (n.) 雜亂 (正解)\n- (C) antique (n.) 古董\n- (D) layout (n.) 配置" },
      { id: 4, question: "Learning a new language as an adult can be surprisingly ______.", options: ["A. profitable", "B. steep", "C. challenging", "D. surreal"], answer: "C", explanation: "【選項解析】\n- (A) profitable (adj.) 獲利高的\n- (B) steep (adj.) 陡峭的\n- (C) challenging (adj.) 具挑戰性的 (正解)\n- (D) surreal (adj.) 超現實的" },
    ],
    cloze: {
      text: "Hoarding disorder is often confused with simple collecting, but the two are quite different. Collectors usually focus [1] specific, valuable items and tend to keep their collections carefully organized. Hoarders, [2] contrast, struggle to throw away almost anything, regardless of its actual value. Over time, this behavior can cause clutter [3] builds to a dangerous level, making it difficult to move safely through the home. Experts estimate that roughly 2.5 percent of people [4] from hoarding disorder, and the condition tends to worsen [5] age. Fortunately, targeted therapy can help hoarders slowly learn to let go.",
      questions: [
        { id: 1, options: ["A. with", "B. on", "C. for", "D. of"], answer: "B", explanation: "focus on + N. 為固定搭配，表「專注於…」。" },
        { id: 2, options: ["A. by", "B. at", "C. on", "D. in"], answer: "D", explanation: "in contrast 為固定片語，表「相反地」，用於對比收藏者與囤積者的差異。" },
        { id: 3, options: ["A. whom", "B. what", "C. who", "D. that"], answer: "D", explanation: "that 代替先行詞 clutter，引導形容詞子句，作子句中的主詞。" },
        { id: 4, options: ["A. suffers", "B. suffer", "C. suffered", "D. suffering"], answer: "B", explanation: "主詞 2.5 percent of people 為複數概念，動詞需用原形複數 suffer。" },
        { id: 5, options: ["A. with", "B. at", "C. for", "D. by"], answer: "A", explanation: "worsen with age 為固定搭配，表「隨著年齡增長而惡化」。" },
      ]
    },
    wordBank: {
      words: ["(A) accumulate", "(B) attachment", "(C) chaotic", "(D) cope", "(E) discard", "(F) emotional", "(G) hazard", "(H) organized", "(I) reluctant", "(J) therapist"],
      passage: "At a glance, hoarding and collecting may look similar, since both involve people who [1] large numbers of objects over time. The key difference lies in how those items are kept and what they mean to the owner.\n\nCollectors tend to keep their items highly [2], carefully displaying or storing pieces they consider valuable. Hoarders, by contrast, often live in increasingly [3] spaces, with items piled up in ways that make daily life more difficult.\n\nMany hoarders feel a strong [4] attachment to their belongings, which makes it extremely hard to simply [5] even items with little practical use.\n\nThis deep [6] connection explains why hoarders are often genuinely [7] to let go of things that seem worthless to outside observers.\n\nOver time, severe clutter can become a serious safety [8], blocking exits or making it dangerous to move through parts of the home.\n\nFortunately, with guidance from a trained [9], many hoarders can gradually learn new ways to [10] with the anxiety that drives their behavior, slowly reducing their reliance on possessions for comfort.",
      answers: { 1: "A", 2: "H", 3: "C", 4: "F", 5: "E", 6: "B", 7: "I", 8: "G", 9: "J", 10: "D" }
    },
    discourse: {
      options: [
        "A. A collector's prized trading cards, for instance, are usually stored with far more care than a hoarder's old newspapers.",
        "B. This emotional comfort is precisely what makes the disorder so difficult to treat successfully.",
        "C. Experts estimate that the condition affects a small but significant percentage of the population worldwide.",
        "D. Unlike collectors, hoarders rarely organize their belongings by type, value, or any clear system at all.",
        "E. With consistent support, many people with hoarding disorder can gradually learn to part with their belongings."
      ],
      paragraphs: [
        "Not everyone who keeps a lot of belongings has a hoarding disorder. Understanding the difference between hoarding and ordinary collecting is an important first step.",
        "Collectors typically focus on specific, often valuable items, keeping their collections neatly organized and displayed. [1] [2]",
        "Hoarders behave very differently, struggling to throw away almost anything regardless of its actual worth. [3] Many feel genuinely comforted simply being surrounded by their possessions, even when the clutter creates real safety risks.",
        "[4] Though treatment can be slow and challenging, targeted therapy offers real hope for change."
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main purpose of this article?", options: ["A. To explain the difference between hoarding disorder and simple collecting", "B. To promote a specific therapy clinic for hoarders", "C. To argue that collecting is a more serious problem than hoarding", "D. To describe the history of hoarding disorder research"], answer: "A", explanation: "主旨題。全文主要在說明囤積症與單純收藏之間的差異，並介紹治療方式。" },
        { id: 2, question: "According to the article, how are collectors different from hoarders?", options: ["A. Collectors never throw anything away, just like hoarders", "B. Collectors' items are typically highly organized, unlike hoarders' belongings", "C. Collectors only keep items that have no value at all", "D. Collectors are more likely to need professional therapy"], answer: "B", explanation: "細節題。文中指出收藏者的物品「typically highly organized」，與囤積者形成對比。" },
        { id: 3, question: "What percentage of people are thought to suffer from hoarding disorder, according to the article?", options: ["A. About 1 percent", "B. About 2.5 percent", "C. About 10 percent", "D. About 25 percent"], answer: "B", explanation: "細節題。文中明確指出「around 2.5 percent of people suffer from hoarding disorder」。" },
        { id: 4, question: "What can be inferred about why treatment for hoarding disorder is challenging?", options: ["A. Hoarders often feel comforted when surrounded by their possessions", "B. There is no known treatment for hoarding disorder at all", "C. Hoarders are generally unwilling to speak with therapists", "D. The disorder only affects a very small number of elderly people"], answer: "A", explanation: "推論題。文中提到治療困難，是因為「hoarders often feel comforted when surrounded by their possessions」。" }
      ]
    }
  },
  "Unit 9": {
    title: "The Hidden Costs of Energy Drinks",
    chineseTitle: "能量飲料背後的隱藏代價",
    passage: `Pop open a cold energy drink, and you're instantly hit with a sweet, bubbly rush that promises to help you through a late-night study session. For many teenagers, these brightly colored beverages seem like the perfect solution to fatigue. But what are their actual effects on your body?

Energy drinks typically contain high levels of caffeine along with guarana and sugar, ingredients that stimulate the central nervous system. They can thus trigger a temporary release of adrenaline, making you feel more alert and energetic. At the same time, your heart beats faster and your blood pressure may rise.

The real catch is the inevitable crash. Once the caffeine and sugar wear off, you may end up feeling more tired, anxious, or irritable than before. Over time, relying on energy drinks can disrupt the body's natural energy cycle and make it harder to get quality sleep.

Among teenagers, whose bodies and brains are still developing, these effects are especially worth paying attention to. Health experts generally advise young people to be cautious with caffeine and avoid depending on energy drinks to get through the day. Because the truth is, those quick boosts can come with significant long-term costs.`,
    chineseTranslation: `打開一罐冰涼的能量飲料，你會立刻感受到那股甜甜氣泡的衝勁，彷彿能幫你撐過一整晚的熬夜讀書。對許多青少年來說，這些色彩鮮豔的飲料似乎是對抗疲勞的完美解方。但它們對身體實際上造成什麼影響？

能量飲料通常含有高劑量的咖啡因，再加上瓜拿納和糖分，這些成分會刺激中樞神經系統。它們因此會觸發腎上腺素的暫時釋放，讓你感覺更清醒、更有活力。同時，你的心跳會加快，血壓也可能上升。

真正的問題在於難以避免的崩潰期。一旦咖啡因與糖分的效果消退，你可能會變得比之前更疲倦、焦慮或易怒。長期下來，依賴能量飲料可能打亂身體原有的能量循環，讓人更難獲得優質睡眠。

對於身體與大腦仍在發育中的青少年而言，這些影響格外值得留意。健康專家普遍建議年輕人對咖啡因保持謹慎，避免依賴能量飲料來撐過一天。因為事實是，那些快速的提神效果，往往伴隨著不小的長期代價。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "fatigue", pos: "n.", meaning: "疲勞", collocations: "the perfect solution to fatigue 對抗疲勞的完美解方" },
        { id: 2, word: "stimulate", pos: "v.", meaning: "刺激", collocations: "stimulate the central nervous system 刺激中樞神經系統" },
        { id: 3, word: "adrenaline", pos: "n.", meaning: "腎上腺素", collocations: "a release of adrenaline 腎上腺素的釋放" },
        { id: 4, word: "crash", pos: "n.", meaning: "（精力）崩潰、驟降", collocations: "the inevitable crash 難以避免的崩潰期" },
        { id: 5, word: "disrupt", pos: "v.", meaning: "打亂", collocations: "disrupt the body's natural energy cycle 打亂身體原有的能量循環" },
        { id: 6, word: "cautious", pos: "adj.", meaning: "謹慎的", collocations: "be cautious with caffeine 對咖啡因保持謹慎" }
      ],
      grammarNotes: [
        { id: "G1", title: "that 引導形容詞子句修飾名詞", excerpt: "that promises to help you through a late-night study session", analysis: "that 引導形容詞子句，修飾先行詞 rush，說明這股衝勁「承諾能幫助你撐過…」。" },
        { id: "G2", title: "whose 引導非限定關係子句", excerpt: "whose bodies and brains are still developing", analysis: "whose 代替 teenagers'，引導非限定關係子句補充說明青少年的身體與大腦仍在發育中。" }
      ],
      patternNotes: [
        { id: "P1", title: "The real N. is the + adj. + N. (真正的…在於…)", excerpt: "The real catch is the inevitable crash", analysis: "The real + N. + is + N. 表「真正的（問題/關鍵）在於…」，強調緊接其後的崩潰期才是真正該注意的重點。" },
        { id: "P2", title: "come with + N. (伴隨著…)", excerpt: "those quick boosts can come with significant long-term costs", analysis: "come with + N. 表「伴隨著…而來」，說明快速的提神效果背後所隱藏的長期代價。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Pop open a cold energy drink, and you're instantly hit with a sweet, bubbly rush ` },
          { type: 'grammar', text: `that promises to help you through a late-night study session`, gid: 'G1' },
          { type: 'text', text: `. For many teenagers, these brightly colored beverages seem like the perfect solution to ` },
          { type: 'vocab', text: `fatigue`, vid: 1 },
          { type: 'text', text: `. But what are their actual effects on your body?` }
        ],
        [
          { type: 'text', text: `Energy drinks typically contain high levels of caffeine along with guarana and sugar, ingredients that ` },
          { type: 'vocab', text: `stimulate`, vid: 2 },
          { type: 'text', text: ` the central nervous system. They can thus trigger a temporary release of ` },
          { type: 'vocab', text: `adrenaline`, vid: 3 },
          { type: 'text', text: `, making you feel more alert and energetic. At the same time, your heart beats faster and your blood pressure may rise.` }
        ],
        [
          { type: 'pattern', text: `The real catch is the inevitable`, pid: 'P1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `crash`, vid: 4 },
          { type: 'text', text: `. Once the caffeine and sugar wear off, you may end up feeling more tired, anxious, or irritable than before. Over time, relying on energy drinks can ` },
          { type: 'vocab', text: `disrupt`, vid: 5 },
          { type: 'text', text: ` the body's natural energy cycle and make it harder to get quality sleep.` }
        ],
        [
          { type: 'text', text: `Among teenagers, ` },
          { type: 'grammar', text: `whose bodies and brains are still developing`, gid: 'G2' },
          { type: 'text', text: `, these effects are especially worth paying attention to. Health experts generally advise young people to be ` },
          { type: 'vocab', text: `cautious`, vid: 6 },
          { type: 'text', text: ` with caffeine and avoid depending on energy drinks to get through the day. Because the truth is, ` },
          { type: 'pattern', text: `those quick boosts can come with significant long-term costs`, pid: 'P2' },
          { type: 'text', text: `.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Loud alarms are often used to ______ people into action during emergencies.", options: ["A. calm", "B. stimulate", "C. disrupt", "D. soothe"], answer: "B", explanation: "【選項解析】\n- (A) calm (v.) 使平靜\n- (B) stimulate (v.) 刺激 (正解)\n- (C) disrupt (v.) 打亂\n- (D) soothe (v.) 撫慰" },
      { id: 2, question: "During the race, a surge of ______ helped the runner push through the pain.", options: ["A. tolerance", "B. fatigue", "C. patience", "D. adrenaline"], answer: "D", explanation: "【選項解析】\n- (A) tolerance (n.) 耐受度\n- (B) fatigue (n.) 疲勞\n- (C) patience (n.) 耐心\n- (D) adrenaline (n.) 腎上腺素 (正解)" },
      { id: 3, question: "After staying up all night, he became unusually ______ and snapped at his coworkers.", options: ["A. irritable", "B. confident", "C. cautious", "D. flexible"], answer: "A", explanation: "【選項解析】\n- (A) irritable (adj.) 易怒的 (正解)\n- (B) confident (adj.) 有自信的\n- (C) cautious (adj.) 謹慎的\n- (D) flexible (adj.) 靈活的" },
      { id: 4, question: "Loud construction noise can ______ a baby's nap schedule.", options: ["A. strengthen", "B. extend", "C. disrupt", "D. simplify"], answer: "C", explanation: "【選項解析】\n- (A) strengthen (v.) 強化\n- (B) extend (v.) 延長\n- (C) disrupt (v.) 打亂 (正解)\n- (D) simplify (v.) 簡化" },
    ],
    cloze: {
      text: "Animals have evolved an incredible range of abilities that allow them to survive in extremely different environments. Energy drinks have become extremely popular [1] students and young professionals who need a quick boost before a busy day. Most of these drinks rely heavily [2] caffeine and sugar to produce a temporary feeling of alertness. [3] the initial rush feels helpful, it is usually followed by a noticeable crash once the effects wear off. Some people continue reaching for another can [4] they feel tired again, creating a cycle that is hard to break. Health experts recommend moderation [5] relying on these drinks every day.",
      questions: [
        { id: 1, options: ["A. among", "B. beside", "C. despite", "D. throughout"], answer: "A", explanation: "among + 複數名詞，表「在…之中」，指能量飲料在學生與年輕專業人士之間很受歡迎。" },
        { id: 2, options: ["A. in", "B. on", "C. for", "D. at"], answer: "B", explanation: "rely on 為固定搭配，表「依賴」，指這些飲料仰賴咖啡因與糖分產生提神效果。" },
        { id: 3, options: ["A. Because", "B. Unless", "C. While", "D. Since"], answer: "C", explanation: "While 引導對比子句，表「雖然」，與後面「仍會出現崩潰期」形成對比。" },
        { id: 4, options: ["A. despite", "B. unless", "C. although", "D. whenever"], answer: "D", explanation: "whenever 引導時間子句，表「每當」，指每當感到疲倦就繼續打開一罐。" },
        { id: 5, options: ["A. regardless of", "B. rather than", "C. due to", "D. in spite of"], answer: "B", explanation: "rather than 表「而非」，指健康專家建議適度飲用，而非每天依賴。" },
      ]
    },
    wordBank: {
      words: ["(A) adaptation", "(B) camouflage", "(C) extinction", "(D) habitat", "(E) invertebrate", "(F) lifespan", "(G) migrate", "(H) predator", "(I) prey", "(J) vertebrate"],
      passage: "Every living creature depends on some kind of [1] to survive the unique pressures of its environment, whether that means growing thick fur for cold climates or developing excellent eyesight for hunting.\n\nSome animals rely heavily on [2], using patterns and colors that allow them to blend into their surroundings and avoid being noticed by nearby predators.\n\nA skilled [3] must be able to track, chase, and capture its prey quickly, often relying on speed, strength, or sharp senses to succeed.\n\nMeanwhile, the [4] species they hunt have developed their own defenses, from thick shells to the ability to sense danger from a distance.\n\nAnimals such as dogs, whales, and humans are classified as [5], meaning they have a backbone that supports their entire body structure.\n\nBy contrast, creatures like jellyfish, worms, and insects are known as [6], since they lack this internal skeletal support entirely.\n\nThe specific [7] an animal lives in, whether a rainforest, desert, or coral reef, strongly shapes which adaptations prove most useful for survival.\n\nSome species must [8] long distances each year, traveling between breeding grounds and feeding areas as seasons change.\n\nA creature's natural [9] can vary enormously, with some insects living only a few days while certain deep-sea animals survive for centuries.\n\nSadly, when a species cannot adapt quickly enough to a changing environment, it faces a serious risk of [10], disappearing from the planet entirely.",
      answers: { 1: "A", 2: "B", 3: "H", 4: "I", 5: "J", 6: "E", 7: "D", 8: "G", 9: "F", 10: "C" }
    },
    discourse: {
      options: [
        "A. A single whale's daily diet can include several tons of tiny sea creatures, an amount that seems impossible for such a massive body to need.",
        "B. Repeated reliance on these drinks can also make it harder to fall asleep at a reasonable hour.",
        "C. Reading nutrition labels carefully can help consumers understand exactly how much caffeine they are consuming.",
        "D. A sudden crash often leaves people feeling more drained than before they had the drink at all.",
        "E. Choosing water or a short walk instead can sometimes provide a more lasting sense of alertness."
      ],
      paragraphs: [
        "Caffeinated energy drinks have become a familiar sight in gyms, offices, and school backpacks alike, especially among people juggling demanding schedules.",
        "Marketing for these products tends to emphasize the immediate boost in energy and focus they can provide. [1]",
        "Once the initial rush fades, many people experience a sudden drop in energy that feels worse than before. [2] This pattern can gradually push people toward relying on caffeine just to get through an ordinary day. [3]",
        "Nutritionists generally suggest treating energy drinks as an occasional choice rather than a daily habit. [4]"
      ],
      answers: { 1: "B", 2: "D", 3: "A", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main purpose of this article?", options: ["A. To promote the use of energy drinks for busy students", "B. To explain the chemical formula used in energy drinks", "C. To describe the appeal and the hidden downsides of energy drinks", "D. To compare the price of different energy drink brands"], answer: "C", explanation: "主旨題。全文先描述能量飲料吸引人的提神效果，再說明其背後隱藏的長期代價。" },
        { id: 2, question: "According to the article, which ingredients commonly trigger a temporary release of adrenaline?", options: ["A. Caffeine and guarana", "B. Vitamin C and fiber", "C. Protein and electrolytes", "D. Artificial coloring and preservatives"], answer: "A", explanation: "細節題。文中指出能量飲料含有「high levels of caffeine along with guarana and sugar」，這些成分會刺激神經系統並觸發腎上腺素釋放。" },
        { id: 3, question: "What typically happens once the effects of an energy drink wear off, according to the article?", options: ["A. The body returns immediately to its normal resting state", "B. Blood pressure permanently stays elevated", "C. Most people fall asleep within minutes", "D. People often feel more tired, anxious, or irritable than before"], answer: "D", explanation: "細節題。文中提到咖啡因與糖分消退後，可能「feeling more tired, anxious, or irritable than before」。" },
        { id: 4, question: "What can be inferred about why the article specifically advises teenagers to be cautious with energy drinks?", options: ["A. Because teenagers cannot legally purchase energy drinks in most countries", "B. Because teenagers' bodies and brains are still developing, making them more vulnerable to these effects", "C. Because energy drinks are more expensive than other beverages", "D. Because teenagers are required by schools to avoid caffeine"], answer: "B", explanation: "推論題。文中指出青少年「bodies and brains are still developing」，暗示這正是特別需要謹慎的原因。" }
      ]
    }
  },

  "Unit 11": {
    title: "Nature's Record-Breakers",
    chineseTitle: "自然界的紀錄之王",
    passage: `The animal kingdom is the result of billions of years of evolution, which has produced creatures with an astonishing variety of abilities and adaptations. Among them are record-holders that stand out for their size, speed, strength, or other remarkable traits. From giant whales to tiny beetles, these animals show how amazing life on Earth can be.

The Largest Animal Ever

No other creature is as large as the blue whale. It can grow to about 30 meters long and weigh around 200 tons—the largest animal to have ever lived. Its heart is roughly the size of a small car, and it must consume several tons of krill each day to support its body. Despite its massive size, the blue whale survives mainly on these tiny creatures.

The Fastest Animal of All

The peregrine falcon holds the record for speed. During a hunting dive, it can reach speeds of more than 380 kilometers per hour. This means it is far faster than the cheetah, the fastest land animal. By pulling in its wings and streamlining its body, the falcon becomes a living missile as it plunges toward its prey. This adaptation makes it one of nature's most effective hunters.

The Strongest Animal for Its Size

When strength is measured relative to body weight, the dung beetle is the undisputed champion. Some species can pull more than 1,000 times their own weight. For comparison, that would be like a person pulling six city buses at once. This incredible strength helps dung beetles transport food across surprisingly long distances.

The Oldest Living Vertebrate

The Greenland shark is believed to be the longest-lived vertebrate on Earth. Scientists estimate that some individuals can live over 500 years, which means some sharks alive today could have been swimming in the Arctic Ocean before the invention of the telescope. However, even these remarkable lifespans are surpassed by those of some invertebrates. For example, the giant volcano sponge, a type of deep-sea sponge, is estimated to live for up to 15,000 years!

The Most Venomous Animal

The box jellyfish claims the title of the world's most venomous animal. Found in tropical waters, it has tentacles covered with stinging cells that release powerful toxins. In severe cases, these toxins can cause death within minutes. Although it appears fragile, the box jellyfish is one of the ocean's deadliest creatures.`,
    chineseTranslation: `動物界是數十億年演化的結果，造就了擁有驚人多樣能力與適應方式的生物。其中不乏在體型、速度、力量或其他特殊特質上脫穎而出的「紀錄保持者」。從巨大的鯨魚到微小的甲蟲，這些動物展現出地球生命有多麼令人驚嘆。

史上最大的動物

沒有任何生物比藍鯨更龐大。牠的體長可達約30公尺，體重約200公噸——是史上存在過最大的動物。牠的心臟大小大約相當於一台小型汽車，每天必須吃下好幾噸的磷蝦才能維持身體所需。儘管體型如此龐大，藍鯨卻主要靠這些微小的生物維生。

速度最快的動物

遊隼擁有速度紀錄。在俯衝獵食時，牠的速度可超過每小時380公里。這表示牠的速度遠勝於陸地上速度最快的動物——獵豹。透過收緊雙翼、讓身體呈流線型，遊隼在俯衝獵物時就像一枚活生生的飛彈。這項適應能力使牠成為自然界中最有效率的獵食者之一。

以體型而論最強壯的動物

若以相對於體重的力量來衡量，糞金龜無疑是冠軍。某些物種能拖動超過自身體重1,000倍的重物。打個比方，這就像一個人同時拉動六輛巴士一樣。這股驚人的力量，幫助糞金龜能將食物搬運到相當遙遠的距離。

現存最長壽的脊椎動物

格陵蘭鯊被認為是地球上最長壽的脊椎動物。科學家估計，有些個體的壽命可超過500年，這意味著今天還活著的某些鯊魚，可能在望遠鏡發明之前，就已經在北極海中游動。不過，即使是這樣驚人的壽命，仍比不上某些無脊椎動物。例如，巨型火山海綿這種深海海綿，估計壽命可長達15,000年！

毒性最強的動物

箱型水母擁有「世界上毒性最強動物」的稱號。牠生活在熱帶海域，觸手上布滿了會釋放強力毒素的刺細胞。在嚴重的情況下，這些毒素可能在數分鐘內導致死亡。儘管外表看似脆弱，箱型水母卻是海洋中最致命的生物之一。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "astonishing", pos: "adj.", meaning: "驚人的", collocations: "an astonishing variety 驚人多樣的能力" },
        { id: 2, word: "consume", pos: "v.", meaning: "消耗、吃下", collocations: "consume several tons of krill 吃下好幾噸磷蝦" },
        { id: 3, word: "streamline", pos: "v.", meaning: "使呈流線型", collocations: "streamlining its body 讓身體呈流線型" },
        { id: 4, word: "undisputed", pos: "adj.", meaning: "無可爭議的", collocations: "the undisputed champion 無可爭議的冠軍" },
        { id: 5, word: "surpass", pos: "v.", meaning: "超越", collocations: "surpassed by those of some invertebrates 被某些無脊椎動物超越" },
        { id: 6, word: "toxin", pos: "n.", meaning: "毒素", collocations: "release powerful toxins 釋放強力毒素" }
      ],
      grammarNotes: [
        { id: "G1", title: "which 引導非限定關係子句（補充結果）", excerpt: "which has produced creatures with an astonishing variety of abilities and adaptations", analysis: "which 代替前面整句（數十億年的演化），引導非限定關係子句補充說明其所造成的結果。" },
        { id: "G2", title: "which 引導非限定關係子句（表推論結果）", excerpt: "which means some sharks alive today could have been swimming in the Arctic Ocean before the invention of the telescope", analysis: "which 代替前句整個概念（壽命可超過500年），引導非限定關係子句推論出驚人的結果。" }
      ],
      patternNotes: [
        { id: "P1", title: "By V-ing..., S + V (藉由…的方式，…)", excerpt: "By pulling in its wings and streamlining its body, the falcon becomes a living missile", analysis: "By + V-ing 表「藉由…的方式」，說明遊隼透過收緊雙翼、流線化身體這個動作達成俯衝獵食的效果。" },
        { id: "P2", title: "that would be like + N. (這就像是…)", excerpt: "that would be like a person pulling six city buses at once", analysis: "that would be like + N. 表「這就像是…」，用具體的比喻說明抽象的力量數據。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `The animal kingdom is the result of billions of years of evolution, ` },
          { type: 'grammar', text: `which has produced creatures with an`, gid: 'G1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `astonishing`, vid: 1 },
          { type: 'text', text: ` variety of abilities and adaptations. Among them are record-holders that stand out for their size, speed, strength, or other remarkable traits. From giant whales to tiny beetles, these animals show how amazing life on Earth can be.` }
        ],
        [
          { type: 'text', text: `The Largest Animal Ever\n\nNo other creature is as large as the blue whale. It can grow to about 30 meters long and weigh around 200 tons—the largest animal to have ever lived. Its heart is roughly the size of a small car, and it must ` },
          { type: 'vocab', text: `consume`, vid: 2 },
          { type: 'text', text: ` several tons of krill each day to support its body. Despite its massive size, the blue whale survives mainly on these tiny creatures.` }
        ],
        [
          { type: 'text', text: `The Fastest Animal of All\n\nThe peregrine falcon holds the record for speed. During a hunting dive, it can reach speeds of more than 380 kilometers per hour. This means it is far faster than the cheetah, the fastest land animal. ` },
          { type: 'pattern', text: `By pulling in its wings and`, pid: 'P1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `streamlining`, vid: 3 },
          { type: 'text', text: ` its body, the falcon becomes a living missile as it plunges toward its prey. This adaptation makes it one of nature's most effective hunters.` }
        ],
        [
          { type: 'text', text: `The Strongest Animal for Its Size\n\nWhen strength is measured relative to body weight, the dung beetle is the ` },
          { type: 'vocab', text: `undisputed`, vid: 4 },
          { type: 'text', text: ` champion. Some species can pull more than 1,000 times their own weight. For comparison, ` },
          { type: 'pattern', text: `that would be like a person pulling six city buses at once`, pid: 'P2' },
          { type: 'text', text: `. This incredible strength helps dung beetles transport food across surprisingly long distances.` }
        ],
        [
          { type: 'text', text: `The Oldest Living Vertebrate\n\nThe Greenland shark is believed to be the longest-lived vertebrate on Earth. Scientists estimate that some individuals can live over 500 years, ` },
          { type: 'grammar', text: `which means some sharks alive today could have been swimming in the Arctic Ocean before the invention of the telescope`, gid: 'G2' },
          { type: 'text', text: `. However, even these remarkable lifespans are ` },
          { type: 'vocab', text: `surpassed`, vid: 5 },
          { type: 'text', text: ` by those of some invertebrates. For example, the giant volcano sponge, a type of deep-sea sponge, is estimated to live for up to 15,000 years!` }
        ],
        [
          { type: 'text', text: `The Most Venomous Animal\n\nThe box jellyfish claims the title of the world's most venomous animal. Found in tropical waters, it has tentacles covered with stinging cells that release powerful ` },
          { type: 'vocab', text: `toxins`, vid: 6 },
          { type: 'text', text: `. In severe cases, these toxins can cause death within minutes. Although it appears fragile, the box jellyfish is one of the ocean's deadliest creatures.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Hiking for six hours left her hungry enough to ______ an entire pizza by herself.", options: ["A. preserve", "B. ignore", "C. consume", "D. discard"], answer: "C", explanation: "【選項解析】\n- (A) preserve (v.) 保存\n- (B) ignore (v.) 忽略\n- (C) consume (v.) 吃下、消耗 (正解)\n- (D) discard (v.) 丟棄" },
      { id: 2, question: "After winning the championship three years in a row, the team became the ______ favorite heading into this season.", options: ["A. temporary", "B. doubtful", "C. reluctant", "D. undisputed"], answer: "D", explanation: "【選項解析】\n- (A) temporary (adj.) 暫時的\n- (B) doubtful (adj.) 可疑的\n- (C) reluctant (adj.) 不情願的\n- (D) undisputed (adj.) 無可爭議的 (正解)" },
      { id: 3, question: "Sales this quarter are expected to easily ______ last year's total.", options: ["A. surpass", "B. resemble", "C. delay", "D. repeat"], answer: "A", explanation: "【選項解析】\n- (A) surpass (v.) 超越 (正解)\n- (B) resemble (v.) 相似\n- (C) delay (v.) 延遲\n- (D) repeat (v.) 重複" },
      { id: 4, question: "Certain mushrooms contain a dangerous ______ that can cause serious illness if eaten.", options: ["A. nutrient", "B. toxin", "C. fiber", "D. protein"], answer: "B", explanation: "【選項解析】\n- (A) nutrient (n.) 營養素\n- (B) toxin (n.) 毒素 (正解)\n- (C) fiber (n.) 纖維\n- (D) protein (n.) 蛋白質" },
    ],
    cloze: {
      text: "Animals have evolved an incredible range of abilities that allow them to survive in extremely different environments. Some species are remarkable [1] their enormous size, while others stand out because of their speed or strength. [2] a creature is measured by size, speed, or strength, scientists often rely on dramatic comparisons to describe its abilities in a way ordinary people can picture. Certain animals can also survive far longer than scientists once believed possible, [3] continues to surprise researchers who study aging in the wild. Other species defend themselves not through size or speed [4] through powerful natural chemicals instead. Together, these extremes remind us [5] just how varied life on Earth truly is.",
      questions: [
        { id: 1, options: ["A. for", "B. despite", "C. unless", "D. although"], answer: "A", explanation: "be remarkable for 表「以…著稱」，指該物種以其龐大體型著稱。" },
        { id: 2, options: ["A. Unless", "B. Whether", "C. Because", "D. Since"], answer: "B", explanation: "Whether 引導名詞子句作主詞，表「無論…」，指不論以哪種方式衡量動物的能力。" },
        { id: 3, options: ["A. what", "B. who", "C. that", "D. which"], answer: "D", explanation: "which 引導非限定關係子句，代替前面整句概念，表「這件事…」。" },
        { id: 4, options: ["A. but", "B. so", "C. and", "D. or"], answer: "A", explanation: "not A but B 表「不是A而是B」，指動物不是靠體型或速度，而是靠天然化學物質來自我防衛。" },
        { id: 5, options: ["A. about", "B. for", "C. with", "D. of"], answer: "D", explanation: "remind sb. of sth. 為固定搭配，表「使人想起、提醒某人關於…」。" },
      ]
    },
    wordBank: {
      words: ["(A) adaptation", "(B) camouflage", "(C) extinction", "(D) habitat", "(E) invertebrate", "(F) lifespan", "(G) migrate", "(H) predator", "(I) prey", "(J) vertebrate"],
      passage: "Every living creature depends on some kind of [1] to survive the unique pressures of its environment, whether that means growing thick fur for cold climates or developing excellent eyesight for hunting.\n\nSome animals rely heavily on [2], using patterns and colors that allow them to blend into their surroundings and avoid being noticed by nearby predators.\n\nA skilled [3] must be able to track, chase, and capture its prey quickly, often relying on speed, strength, or sharp senses to succeed.\n\nMeanwhile, the [4] species they hunt have developed their own defenses, from thick shells to the ability to sense danger from a distance.\n\nAnimals such as dogs, whales, and humans are classified as [5], meaning they have a backbone that supports their entire body structure.\n\nBy contrast, creatures like jellyfish, worms, and insects are known as [6], since they lack this internal skeletal support entirely.\n\nThe specific [7] an animal lives in, whether a rainforest, desert, or coral reef, strongly shapes which adaptations prove most useful for survival.\n\nSome species must [8] long distances each year, traveling between breeding grounds and feeding areas as seasons change.\n\nA creature's natural [9] can vary enormously, with some insects living only a few days while certain deep-sea animals survive for centuries.\n\nSadly, when a species cannot adapt quickly enough to a changing environment, it faces a serious risk of [10], disappearing from the planet entirely.",
      answers: { 1: "A", 2: "B", 3: "H", 4: "I", 5: "J", 6: "E", 7: "D", 8: "G", 9: "F", 10: "C" }
    },
    discourse: {
      options: [
        "A. A single whale's daily diet can include several tons of tiny sea creatures, an amount that seems impossible for such a massive body to need.",
        "B. Such strength is especially impressive when compared directly to the animal's own body weight.",
        "C. Scientists continue studying these animals partly because their abilities challenge long-held assumptions about biological limits.",
        "D. Certain birds, for instance, can reach speeds during a dive that leave even the fastest land animals far behind.",
        "E. A few deep-sea species are now believed to live for thousands of years, far outlasting almost every other form of life on the planet."
      ],
      paragraphs: [
        "When people imagine record-breaking animals, giant dinosaurs or mythical creatures often come to mind first, yet the real animal kingdom offers records that are just as remarkable.",
        "Size alone can be astonishing, with some ocean giants dwarfing anything that has ever walked on land. [1]",
        "Speed and strength push the limits of biology in very different ways. [2] Meanwhile, some small creatures can lift objects many times heavier than their own bodies. [3]",
        "Even survival itself can become a kind of record, with certain species living far longer than anyone once thought possible. [4]"
      ],
      answers: { 1: "A", 2: "D", 3: "B", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main purpose of this article?", options: ["A. To introduce several animals that each hold a different natural record", "B. To rank animals by which are the most dangerous to humans", "C. To explain how all animals evolved from a single common ancestor", "D. To argue that marine animals are superior to land animals"], answer: "A", explanation: "主旨題。全文依序介紹體型、速度、力量、壽命、毒性等不同面向的「紀錄保持者」動物。" },
        { id: 2, question: "According to the article, roughly how much does a blue whale weigh?", options: ["A. About 50 tons", "B. About 100 tons", "C. About 500 tons", "D. About 200 tons"], answer: "D", explanation: "細節題。文中明確指出藍鯨「weigh around 200 tons」。" },
        { id: 3, question: "What does the article say about the peregrine falcon compared to the cheetah?", options: ["A. The falcon is slower than the cheetah in every situation", "B. The cheetah and the falcon move at exactly the same top speed", "C. The falcon can reach higher speeds than the cheetah, the fastest land animal", "D. The article does not compare the falcon to any other animal"], answer: "C", explanation: "細節題。文中指出遊隼的速度「far faster than the cheetah, the fastest land animal」。" },
        { id: 4, question: "What can be inferred from the article about animal lifespans?", options: ["A. All animals share roughly the same lifespan regardless of species", "B. Some invertebrates, like the giant volcano sponge, may outlive even the longest-living vertebrates", "C. Vertebrates always live longer than invertebrates", "D. The Greenland shark is the longest-living creature on the planet overall"], answer: "B", explanation: "推論題。文中提到格陵蘭鯊的驚人壽命仍「surpassed by those of some invertebrates」，如巨型火山海綿。" }
      ]
    }
  },

  "Unit 12": {
    title: "Should Students Use AI in College Applications?",
    chineseTitle: "學生在申請大學時應使用 AI 嗎？",
    passage: `High school students are increasingly using advanced AI tools when preparing their learning portfolios. While some supporters believe these tools can help students present their ideas more clearly, critics worry that AI blurs the line between assistance and authorship. This issue ultimately brings significant challenges to keeping college admissions fair.

A. Ms. Huang, High School Teacher: "Learning portfolios are meant to reflect a student's growth and achievements. When AI generates much of the content, it becomes harder to tell what the student actually learned or produced independently."

B. Mr. Lin, Parent: "Applying to college is already stressful and competitive. If AI helps students present their experiences more clearly, that isn't any different from using a grammar checker or seeking a teacher's advice. The experiences still belong to the student."

C. Professor Chang, Education Researcher: "The key issue is honesty and transparency. AI itself is not the problem, but it is important that students clearly disclose how much they used it and for which parts of their work."

D. Ms. Wang, Admissions Officer: "Universities want portfolios that show a student's real abilities and interests. Excessive AI assistance makes applicants' submissions look increasingly similar, which makes fair evaluations more difficult."

E. Kevin, High School Senior: "Many students use AI to organize information, brainstorm ideas, or improve their writing. That doesn't mean the experiences and opinions in their portfolios aren't their own."

F. Amy, High School Student: "Polishing an essay with AI might seem harmless, but universities will question us closely during interviews. If a student cannot explain their own portfolio in person, that gap will be obvious."

G. Dr. Chen, Computer Scientist: "Current AI detection tools are far from reliable. They sometimes flag human-written work as AI-generated, leading to unfair judgments and serious consequences for students who did nothing wrong."

H. Mrs. Liu, School Counselor: "Students need guidance, not fear. Schools should teach responsible AI use and establish clear rules, rather than defaulting to punishment."

I. Eric, Rural High School Student: "Students in large cities have better resources, and some attend cram schools that help them refine portfolios using AI. We don't have that here, which makes competing for college slots feel deeply unfair."

J. Mr. Wu, Technology Consultant: "As AI improves, telling the difference between human writing and AI-generated writing will become harder. Schools and universities will need to develop new ways to assess applications."`,
    chineseTranslation: `現在越來越多高中生會使用先進的AI工具來準備自己的學習歷程檔案。雖然有些支持者認為這些工具能幫助學生更清楚地呈現想法，但批評者則擔心AI會模糊「協助」與「原創」之間的界線。這個議題最終為維持大學招生公平性帶來了不小的挑戰。

A. 黃老師（高中教師）：「學習歷程檔案本應反映學生的成長與成就。當AI生成了大部分內容時，就更難判斷學生實際學到了什麼、又是獨立完成了哪些部分。」

B. 林先生（家長）：「申請大學本來就充滿壓力又競爭激烈。如果AI能幫助學生更清楚地呈現自己的經驗，這其實跟使用文法檢查工具或請教老師沒什麼不同。那些經驗終究還是屬於學生本人的。」

C. 張教授（教育研究者）：「關鍵在於誠實與透明。AI本身不是問題，重要的是學生要清楚揭露自己使用AI的程度，以及用在作品的哪些部分。」

D. 王小姐（招生人員）：「大學想看到的是能展現學生真實能力與興趣的歷程檔案。過度依賴AI協助，會讓申請者的作品看起來越來越相似，使公平評量變得更加困難。」

E. Kevin（高三學生）：「許多學生使用AI來整理資訊、激發靈感或潤飾文筆。但這並不代表歷程檔案裡的經驗與想法就不是他們自己的。」

F. Amy（高中生）：「用AI潤飾文章看似無害，但大學在面試時會仔細追問。如果學生無法親自說明自己的歷程檔案，這個落差就會顯而易見。」

G. 陳博士（電腦科學家）：「目前的AI偵測工具遠遠稱不上可靠。它們有時會把人類親自寫的作品誤判為AI生成，導致不公平的判斷，讓無辜的學生承受嚴重後果。」

H. 劉老師（輔導老師）：「學生需要的是引導，而不是恐懼。學校應該教導負責任的AI使用方式，並建立清楚的規範，而不是習慣性地直接處罰。」

I. Eric（偏鄉高中生）：「大城市的學生擁有更好的資源，有些人甚至會上補習班，請人協助用AI潤飾歷程檔案。我們這裡沒有這些資源，這讓我們在申請大學名額時感覺相當不公平。」

J. 吳先生（科技顧問）：「隨著AI的進步，要分辨人類寫的文章和AI生成的文章會越來越困難。學校與大學都需要發展新的方式來評估申請資料。」`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "reflect", pos: "v.", meaning: "反映", collocations: "reflect a student's growth 反映學生的成長" },
        { id: 2, word: "transparency", pos: "n.", meaning: "透明度", collocations: "honesty and transparency 誠實與透明" },
        { id: 3, word: "disclose", pos: "v.", meaning: "揭露、透露", collocations: "disclose how much they used it 揭露使用的程度" },
        { id: 4, word: "excessive", pos: "adj.", meaning: "過度的", collocations: "Excessive AI assistance 過度的AI協助" },
        { id: 5, word: "reliable", pos: "adj.", meaning: "可靠的", collocations: "far from reliable 遠非可靠" },
        { id: 6, word: "default", pos: "v.", meaning: "預設採用、習慣性採取", collocations: "defaulting to punishment 習慣性地直接處罰" }
      ],
      grammarNotes: [
        { id: "G1", title: "If 條件句表假設情況", excerpt: "If a student cannot explain their own portfolio in person, that gap will be obvious", analysis: "If 引導條件句，表「如果…」，說明學生若無法親自說明作品，落差便會顯現。" },
        { id: "G2", title: "that 引導形容詞子句修飾名詞", excerpt: "that help them refine portfolios using AI", analysis: "that 引導形容詞子句，修飾先行詞 cram schools，說明補習班「協助潤飾歷程檔案」的功能。" }
      ],
      patternNotes: [
        { id: "P1", title: "That doesn't mean... (這並不代表…)", excerpt: "That doesn't mean the experiences and opinions in their portfolios aren't their own", analysis: "That doesn't mean + 子句，表「這並不代表…」，用於反駁「用AI整理想法＝內容不屬於自己」的推論。" },
        { id: "P2", title: "be far from + adj. (遠非…、一點也不…)", excerpt: "Current AI detection tools are far from reliable", analysis: "be far from + adj. 表「遠非…」，強調目前的AI偵測工具一點也不可靠。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `High school students are increasingly using advanced AI tools when preparing their learning portfolios. While some supporters believe these tools can help students present their ideas more clearly, critics worry that AI blurs the line between assistance and authorship. This issue ultimately brings significant challenges to keeping college admissions fair.` }
        ],
        [
          { type: 'text', text: `A. Ms. Huang, High School Teacher: "Learning portfolios are meant to ` },
          { type: 'vocab', text: `reflect`, vid: 1 },
          { type: 'text', text: ` a student's growth and achievements. When AI generates much of the content, it becomes harder to tell what the student actually learned or produced independently."` }
        ],
        [
          { type: 'text', text: `B. Mr. Lin, Parent: "Applying to college is already stressful and competitive. If AI helps students present their experiences more clearly, that isn't any different from using a grammar checker or seeking a teacher's advice. The experiences still belong to the student."` }
        ],
        [
          { type: 'text', text: `C. Professor Chang, Education Researcher: "The key issue is honesty and ` },
          { type: 'vocab', text: `transparency`, vid: 2 },
          { type: 'text', text: `. AI itself is not the problem, but it is important that students clearly ` },
          { type: 'vocab', text: `disclose`, vid: 3 },
          { type: 'text', text: ` how much they used it and for which parts of their work."` }
        ],
        [
          { type: 'text', text: `D. Ms. Wang, Admissions Officer: "Universities want portfolios that show a student's real abilities and interests. ` },
          { type: 'vocab', text: `Excessive`, vid: 4 },
          { type: 'text', text: ` AI assistance makes applicants' submissions look increasingly similar, which makes fair evaluations more difficult."` }
        ],
        [
          { type: 'text', text: `E. Kevin, High School Senior: "Many students use AI to organize information, brainstorm ideas, or improve their writing. ` },
          { type: 'pattern', text: `That doesn't mean the experiences and opinions in their portfolios aren't their own`, pid: 'P1' },
          { type: 'text', text: `."` }
        ],
        [
          { type: 'text', text: `F. Amy, High School Student: "Polishing an essay with AI might seem harmless, but universities will question us closely during interviews. ` },
          { type: 'grammar', text: `If a student cannot explain their own portfolio in person, that gap will be obvious`, gid: 'G1' },
          { type: 'text', text: `."` }
        ],
        [
          { type: 'text', text: `G. Dr. Chen, Computer Scientist: "Current AI detection tools ` },
          { type: 'pattern', text: `are far from`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `reliable`, vid: 5 },
          { type: 'text', text: `. They sometimes flag human-written work as AI-generated, leading to unfair judgments and serious consequences for students who did nothing wrong."` }
        ],
        [
          { type: 'text', text: `H. Mrs. Liu, School Counselor: "Students need guidance, not fear. Schools should teach responsible AI use and establish clear rules, rather than ` },
          { type: 'vocab', text: `defaulting`, vid: 6 },
          { type: 'text', text: ` to punishment."` }
        ],
        [
          { type: 'text', text: `I. Eric, Rural High School Student: "Students in large cities have better resources, and some attend cram schools ` },
          { type: 'grammar', text: `that help them refine portfolios using AI`, gid: 'G2' },
          { type: 'text', text: `. We don't have that here, which makes competing for college slots feel deeply unfair."` }
        ],
        [
          { type: 'text', text: `J. Mr. Wu, Technology Consultant: "As AI improves, telling the difference between human writing and AI-generated writing will become harder. Schools and universities will need to develop new ways to assess applications."` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Before publishing the study, the researchers were required to ______ any financial support they received from the company.", options: ["A. conceal", "B. disclose", "C. ignore", "D. postpone"], answer: "B", explanation: "【選項解析】\n- (A) conceal (v.) 隱藏\n- (B) disclose (v.) 揭露、透露 (正解)\n- (C) ignore (v.) 忽略\n- (D) postpone (v.) 延後" },
      { id: 2, question: "Doctors warned that ______ use of the medication could lead to serious side effects.", options: ["A. excessive", "B. minimal", "C. occasional", "D. balanced"], answer: "A", explanation: "【選項解析】\n- (A) excessive (adj.) 過度的 (正解)\n- (B) minimal (adj.) 極少的\n- (C) occasional (adj.) 偶爾的\n- (D) balanced (adj.) 均衡的" },
      { id: 3, question: "After years of accurate predictions, the weather app gained a reputation for being highly ______.", options: ["A. doubtful", "B. unstable", "C. reliable", "D. careless"], answer: "C", explanation: "【選項解析】\n- (A) doubtful (adj.) 可疑的\n- (B) unstable (adj.) 不穩定的\n- (C) reliable (adj.) 可靠的 (正解)\n- (D) careless (adj.) 粗心的" },
      { id: 4, question: "When unsure which language to display, the website will ______ to English.", options: ["A. apologize", "B. hesitate", "C. complain", "D. default"], answer: "D", explanation: "【選項解析】\n- (A) apologize (v.) 道歉\n- (B) hesitate (v.) 猶豫\n- (C) complain (v.) 抱怨\n- (D) default (v.) 預設採用 (正解)" },
    ],
    cloze: {
      text: "As artificial intelligence tools become more common in schools, students are increasingly turning to them for help [1] writing essays, organizing ideas, and polishing their applications. Supporters argue that these tools simply make it easier for students to express thoughts they already have, [2] AI were just another kind of writing assistant. Critics, however, worry that heavy reliance on AI makes it harder to judge a student's true ability, [3] of how talented or hardworking that student actually is. Some experts suggest that schools should require students to clearly explain [4] parts of their work involved AI assistance. [5] clearer rules are put in place, universities may continue to struggle with evaluating applications fairly.",
      questions: [
        { id: 1, options: ["A. in", "B. for", "C. with", "D. by"], answer: "C", explanation: "help with + V-ing 表「幫忙做…」，指AI工具協助學生寫文章、整理想法。" },
        { id: 2, options: ["A. even though", "B. unless", "C. so that", "D. as if"], answer: "D", explanation: "as if 引導假設語氣子句，表「彷彿…」，將AI比擬成另一種寫作輔助工具。" },
        { id: 3, options: ["A. regardless", "B. instead", "C. despite", "D. moreover"], answer: "A", explanation: "regardless of 表「不論、無論」，指不論該學生實際有多努力或有才華。" },
        { id: 4, options: ["A. that", "B. which", "C. what", "D. whose"], answer: "C", explanation: "what 引導名詞子句作 explain 的受詞，表「哪些部分」。" },
        { id: 5, options: ["A. Because", "B. Unless", "C. Although", "D. So"], answer: "B", explanation: "Unless 引導條件子句，表「除非」，指除非訂出更明確的規範，否則大學將持續難以公平評量申請資料。" },
      ]
    },
    wordBank: {
      words: ["(A) authentic", "(B) bias", "(C) credential", "(D) detect", "(E) ethical", "(F) guideline", "(G) originality", "(H) plagiarism", "(I) transparent", "(J) verify"],
      passage: "As AI writing tools become more common, schools are being forced to rethink what counts as [1] student work, especially when a polished essay could have been written largely by a machine.\n\nOne major concern is [2], since copying AI-generated text without acknowledgment raises many of the same ethical questions as copying another person's work.\n\nTeachers are also worried about losing a sense of [3] in student writing, as AI-assisted essays can sometimes feel strangely similar to one another in tone and structure.\n\nTo address these concerns, some schools are developing clear [4] explaining exactly how and when students may use AI tools.\n\nBeing fully [5] about AI use, rather than hiding it, is often seen as the fairest approach for both students and teachers.\n\nSeveral companies now offer software designed to [6] AI-generated text, although these tools remain far from perfect.\n\nAdmissions officers sometimes struggle to [7] whether a student's writing sample truly reflects their own abilities.\n\nUltimately, many experts argue that using AI itself is not necessarily [8], as long as students remain honest about how it was used.\n\nSome critics also worry that AI detection tools themselves may contain hidden [9], unfairly flagging certain writing styles as suspicious.\n\nFor some admissions officers, a student's academic [10] matters less than whether the application process as a whole remains fair to everyone involved.",
      answers: { 1: "A", 2: "H", 3: "G", 4: "F", 5: "I", 6: "D", 7: "J", 8: "E", 9: "B", 10: "C" }
    },
    discourse: {
      options: [
        "A. From this perspective, AI assistance is simply one more tool in a long tradition of outside support.",
        "B. A grammar suggestion is one thing, but having AI write entire paragraphs raises very different concerns about authorship.",
        "C. Students from wealthier families may already have greater access to private tutors and admissions consultants.",
        "D. Some admissions offices have begun experimenting with short interviews specifically designed to test this kind of authenticity.",
        "E. Clear, consistently enforced guidelines may ultimately matter more than banning any single technology outright."
      ],
      paragraphs: [
        "Opinions about AI-assisted college applications tend to fall somewhere between two extremes: total acceptance and total rejection, with most educators landing somewhere in between.",
        "Supporters of AI tools point out that students have always received outside help, from teachers, parents, and private tutors. [1]",
        "Opponents counter that AI is fundamentally different because it can generate entire passages rather than simply offering feedback. [2] This distinction becomes especially important when evaluators try to judge how much of an application truly reflects the student's own voice. [3]",
        "Finding a workable middle ground will likely require ongoing cooperation between schools, families, and the universities reviewing these applications. [4]"
      ],
      answers: { 1: "A", 2: "B", 3: "D", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this article mainly about?", options: ["A. A comparison of AI writing tools used by businesses", "B. A step-by-step guide to using AI for college essays", "C. Different people's opinions on whether students should use AI in college application portfolios", "D. A history of how college admissions have changed over time"], answer: "C", explanation: "主旨題。全文呈現多位不同身分人士對學生在申請大學歷程檔案中使用AI的不同看法。" },
        { id: 2, question: "According to Dr. Chen, what is a major problem with current AI detection tools?", options: ["A. They are too expensive for most schools to use", "B. They only work for essays written in English", "C. They have never been tested in real schools", "D. They can unfairly flag human-written work as AI-generated"], answer: "D", explanation: "細節題。陳博士提到AI偵測工具「sometimes flag human-written work as AI-generated」。" },
        { id: 3, question: "What concern does Eric raise about AI use in college applications?", options: ["A. He worries that rural students may lack the same access to resources as students in large cities", "B. He believes AI should be banned completely in all schools", "C. He thinks AI makes portfolios too easy to write", "D. He argues that AI should only be used by teachers, not students"], answer: "A", explanation: "細節題。Eric 提到大城市學生擁有更好的資源，而他所在地區缺乏這些資源，使競爭顯得不公平。" },
        { id: 4, question: "What can be inferred from Professor Chang's opinion about AI use?", options: ["A. She believes AI should never be used under any circumstances", "B. She believes the main solution lies in transparency about how AI was used, not banning it outright", "C. She believes only wealthy students should be allowed to use AI", "D. She believes schools should stop accepting learning portfolios altogether"], answer: "B", explanation: "推論題。張教授強調「honesty and transparency」才是關鍵，而非AI本身是問題。" }
      ]
    }
  },

  "Unit 13": {
    title: "Up, Up, and Away: Surprising Secrets of the Elevator",
    chineseTitle: "一路向上：電梯的驚奇冷知識",
    passage: `Going up? Most of us use elevators without giving them much thought. We step inside, press a button, and expect to arrive at our destination within seconds. Yet elevators have a surprisingly long history and have played a major role in shaping modern cities.

The Greek inventor Archimedes reportedly built the first elevator around 236 BCE. It likely used pulleys and ropes pulled by people or animals to move goods between levels. The first elevator known to carry humans was built in 1743 to enable King Louis XV of France to travel between floors of his palace. By the mid-1800s, elevators powered by steam and hydraulics were catching on.

Even so, early elevators were widely feared because of what might happen if a lifting rope snapped. That changed in 1852 when American inventor Elisha Graves Otis pioneered a safety brake that could halt a falling elevator. His invention made elevators much safer and paved the way for their widespread use. Before long, passenger elevators appeared in hotels and office buildings, and electric models soon followed. By the 1930s, elevators had truly come into their own and made skyscrapers practical. Had it not been for this technology, architects would never have been able to construct buildings that soared far higher than ever before.

Today, elevators can be found almost everywhere, from apartment buildings to giant office towers. Some are remarkable for their size or speed. In Mumbai, India, the Jio World Centre has an elevator enormous enough to carry about 235 people at once. Meanwhile, modern high-speed elevators can travel at hundreds of meters per minute, which helps people move efficiently through some of the world's tallest buildings.

Elevators also utilize clever design features that many riders never notice. For example, mirrors were first added simply because passengers often complained that rides seemed to drag on for too long. Looking at a mirror distracts people and makes the wait seem shorter. Mirrors also create the illusion of a larger space, and this effect reduces the uncomfortable feeling of being crowded into a small box.

Another surprising feature is the "close door" button. In many countries, it often has little effect because accessibility rules require doors to remain open long enough for everyone to enter safely. Still, the button is usually kept since it grants passengers a sense of control. Combined with strong steel cables and automatic safety brakes, these small details help make elevators one of the safest and most reliable forms of modern transportation.`,
    chineseTranslation: `要上樓嗎？我們大多數人使用電梯時，幾乎不會多想。我們走進電梯、按下按鈕，然後期待在幾秒內抵達目的地。然而，電梯其實擁有一段意外悠久的歷史，並在塑造現代城市的過程中扮演了重要角色。

希臘發明家阿基米德據說在西元前236年左右建造了第一台電梯。它可能是利用滑輪與繩索，由人力或獸力拉動，將貨物在不同樓層間搬運。已知第一台載人電梯建於1743年，是為了讓法國國王路易十五能在自己的宮殿樓層間移動。到了19世紀中期，以蒸汽與液壓驅動的電梯逐漸普及。

儘管如此，早期的電梯仍普遍令人害怕，因為一旦吊索斷裂，後果不堪設想。這種情況在1852年有了轉變，當時美國發明家伊萊莎·格雷夫斯·奧的斯開創了一種能在電梯墜落時緊急制動的安全裝置。他的發明讓電梯變得更加安全，也為電梯的廣泛使用鋪平了道路。不久之後，載客電梯開始出現在飯店與辦公大樓中，電動電梯也隨之問世。到了1930年代，電梯真正發展成熟，使摩天大樓變得實際可行。如果沒有這項技術，建築師根本不可能建造出比以往任何建築都高聳得多的大樓。

如今，電梯幾乎無處不在，從公寓大樓到巨型辦公大樓都能見到它的身影。有些電梯則以體型或速度聞名。在印度孟買的Jio World Centre，就有一座大到能同時容納約235人的電梯。同時，現代高速電梯每分鐘可移動數百公尺，幫助人們在世界上最高的一些建築中有效率地移動。

電梯還運用了許多乘客幾乎不會注意到的巧妙設計。例如，鏡子最初被安裝的原因，單純是因為乘客常抱怨搭乘過程感覺特別漫長。看著鏡子能分散注意力，讓等待時間感覺變短。鏡子也能營造出空間更寬敞的錯覺，減輕被擠在狹小空間裡的不舒適感。

另一個令人意外的設計是「關門」按鈕。在許多國家，這個按鈕其實效果有限，因為無障礙規範要求電梯門必須保持足夠長的開啟時間，讓所有人都能安全進入。儘管如此，這個按鈕通常仍被保留下來，因為它能讓乘客感受到一種掌控感。再加上堅固的鋼纜與自動安全制動裝置，這些小細節共同讓電梯成為現代最安全、最可靠的交通方式之一。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "pulleys", pos: "n.", meaning: "滑輪", collocations: "used pulleys and ropes 利用滑輪與繩索" },
        { id: 2, word: "pioneered", pos: "v.", meaning: "開創", collocations: "pioneered a safety brake 開創了一種安全裝置" },
        { id: 3, word: "practical", pos: "adj.", meaning: "實用的、可行的", collocations: "made skyscrapers practical 使摩天大樓變得可行" },
        { id: 4, word: "enormous", pos: "adj.", meaning: "巨大的", collocations: "an elevator enormous enough 大到足以…的電梯" },
        { id: 5, word: "illusion", pos: "n.", meaning: "幻覺、錯覺", collocations: "create the illusion of a larger space 營造出空間更寬敞的錯覺" },
        { id: 6, word: "accessibility", pos: "n.", meaning: "無障礙、易達性", collocations: "accessibility rules 無障礙規範" }
      ],
      grammarNotes: [
        { id: "G1", title: "Had it not been for... 假設語氣倒裝句", excerpt: "Had it not been for this technology, architects would never have been able to construct buildings that soared far higher than ever before", analysis: "Had it not been for + N. 為與過去事實相反的假設語氣倒裝句，表「若不是因為…」，省略 if 並將 had 提前。" },
        { id: "G2", title: "which 引導非限定關係子句", excerpt: "which helps people move efficiently through some of the world's tallest buildings", analysis: "which 代替前句整個概念（高速電梯的速度），引導非限定關係子句補充說明其帶來的效果。" }
      ],
      patternNotes: [
        { id: "P1", title: "pave the way for + N. (為…鋪路、促成…)", excerpt: "paved the way for their widespread use", analysis: "pave the way for + N. 表「為…鋪路」，說明安全裝置的發明促成了電梯的廣泛使用。" },
        { id: "P2", title: "because + 子句引導原因", excerpt: "because accessibility rules require doors to remain open long enough for everyone to enter safely", analysis: "because 引導原因子句，表「因為」，說明「關門」按鈕效果有限的原因。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Going up? Most of us use elevators without giving them much thought. We step inside, press a button, and expect to arrive at our destination within seconds. Yet elevators have a surprisingly long history and have played a major role in shaping modern cities.` }
        ],
        [
          { type: 'text', text: `The Greek inventor Archimedes reportedly built the first elevator around 236 BCE. It likely used ` },
          { type: 'vocab', text: `pulleys`, vid: 1 },
          { type: 'text', text: ` and ropes pulled by people or animals to move goods between levels. The first elevator known to carry humans was built in 1743 to enable King Louis XV of France to travel between floors of his palace. By the mid-1800s, elevators powered by steam and hydraulics were catching on.` }
        ],
        [
          { type: 'text', text: `Even so, early elevators were widely feared because of what might happen if a lifting rope snapped. That changed in 1852 when American inventor Elisha Graves Otis ` },
          { type: 'vocab', text: `pioneered`, vid: 2 },
          { type: 'text', text: ` a safety brake that could halt a falling elevator. His invention made elevators much safer and ` },
          { type: 'pattern', text: `paved the way for their widespread use`, pid: 'P1' },
          { type: 'text', text: `. Before long, passenger elevators appeared in hotels and office buildings, and electric models soon followed. By the 1930s, elevators had truly come into their own and made skyscrapers ` },
          { type: 'vocab', text: `practical`, vid: 3 },
          { type: 'text', text: `. ` },
          { type: 'grammar', text: `Had it not been for this technology, architects would never have been able to construct buildings that soared far higher than ever before`, gid: 'G1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Today, elevators can be found almost everywhere, from apartment buildings to giant office towers. Some are remarkable for their size or speed. In Mumbai, India, the Jio World Centre has an elevator ` },
          { type: 'vocab', text: `enormous`, vid: 4 },
          { type: 'text', text: ` enough to carry about 235 people at once. Meanwhile, modern high-speed elevators can travel at hundreds of meters per minute, ` },
          { type: 'grammar', text: `which helps people move efficiently through some of the world's tallest buildings`, gid: 'G2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Elevators also utilize clever design features that many riders never notice. For example, mirrors were first added simply because passengers often complained that rides seemed to drag on for too long. Looking at a mirror distracts people and makes the wait seem shorter. Mirrors also create the ` },
          { type: 'vocab', text: `illusion`, vid: 5 },
          { type: 'text', text: ` of a larger space, and this effect reduces the uncomfortable feeling of being crowded into a small box.` }
        ],
        [
          { type: 'text', text: `Another surprising feature is the "close door" button. In many countries, it often has little effect ` },
          { type: 'pattern', text: `because accessibility rules require doors to remain open long enough for everyone to enter safely`, pid: 'P2' },
          { type: 'text', text: `. Still, the button is usually kept since it grants passengers a sense of control. Combined with strong steel cables and automatic safety brakes, these small details help make elevators one of the safest and most reliable forms of modern transportation.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "In the 1970s, she helped ______ a new surgical technique that is still used today.", options: ["A. imitate", "B. abandon", "C. pioneer", "D. criticize"], answer: "C", explanation: "【選項解析】\n- (A) imitate (v.) 模仿\n- (B) abandon (v.) 放棄\n- (C) pioneer (v.) 開創 (正解)\n- (D) criticize (v.) 批評" },
      { id: 2, question: "The new design is more ______ for daily use than the original prototype.", options: ["A. practical", "B. fragile", "C. ancient", "D. theoretical"], answer: "A", explanation: "【選項解析】\n- (A) practical (adj.) 實用的 (正解)\n- (B) fragile (adj.) 易碎的\n- (C) ancient (adj.) 古老的\n- (D) theoretical (adj.) 理論上的" },
      { id: 3, question: "The company reported ______ profits after the product went viral online.", options: ["A. modest", "B. enormous", "C. uncertain", "D. temporary"], answer: "B", explanation: "【選項解析】\n- (A) modest (adj.) 適度的\n- (B) enormous (adj.) 巨大的 (正解)\n- (C) uncertain (adj.) 不確定的\n- (D) temporary (adj.) 暫時的" },
      { id: 4, question: "The mirrors on the wall created an ______ of a much bigger room.", options: ["A. accident", "B. exception", "C. argument", "D. illusion"], answer: "D", explanation: "【選項解析】\n- (A) accident (n.) 意外\n- (B) exception (n.) 例外\n- (C) argument (n.) 爭論\n- (D) illusion (n.) 幻覺、錯覺 (正解)" },
    ],
    cloze: {
      text: "Elevators are so common today that most people rarely think twice [1] stepping into one. Yet their invention dramatically changed how cities could be built. [2] engineers developed reliable safety brakes in the 1800s, many people were understandably nervous about riding in them. Once these safety concerns were addressed, elevators quickly became essential [3] constructing taller and taller buildings. Modern elevators now move passengers [4] remarkable speed through some of the world's tallest skyscrapers. Interestingly, some design features, such as mirrors, were added not for safety [5] simply to make the ride feel shorter and more comfortable.",
      questions: [
        { id: 1, options: ["A. after", "B. before", "C. during", "D. since"], answer: "B", explanation: "think twice before V-ing 為固定搭配，表「在…之前仔細考慮」。" },
        { id: 2, options: ["A. Before", "B. Unless", "C. Although", "D. Because"], answer: "A", explanation: "Before 引導時間子句，表「在…之前」，指安全裝置問世前，人們普遍感到緊張。" },
        { id: 3, options: ["A. of", "B. at", "C. for", "D. in"], answer: "C", explanation: "essential for + V-ing 表「對…而言是必要的」，指電梯成為建造高樓不可或缺的要素。" },
        { id: 4, options: ["A. in", "B. on", "C. with", "D. at"], answer: "D", explanation: "move at + 速度，為固定搭配，表「以…速度移動」。" },
        { id: 5, options: ["A. so", "B. but", "C. and", "D. or"], answer: "B", explanation: "not A but B 表「不是A而是B」，指加裝鏡子不是為了安全，而是單純讓乘坐感覺更舒適。" },
      ]
    },
    wordBank: {
      words: ["(A) cable", "(B) counterweight", "(C) hoist", "(D) landmark", "(E) mechanism", "(F) shaft", "(G) skyscraper", "(H) sturdy", "(I) vertical", "(J) weight-bearing"],
      passage: "Long before electric elevators existed, early inventors experimented with simple ways to [1] heavy loads from one level to another using ropes and pulleys.\n\nMost modern elevators travel through a narrow [2] built directly into the structure of a building, running from the basement all the way to the top floor.\n\nInside this space, a strong steel [3] connects the elevator car to a motor above, allowing it to be pulled upward smoothly and safely.\n\nTo reduce the amount of energy needed, many systems use a heavy [4] that moves in the opposite direction of the car, balancing much of its weight.\n\nThe entire lifting [5] depends on dozens of carefully engineered parts working together at exactly the right moment.\n\nSafety brakes must be extremely [6], capable of stopping a fully loaded car instantly if something goes wrong.\n\nEngineers must also calculate the maximum [7] capacity of each elevator, ensuring it never carries more weight than it was designed to handle.\n\nWithout dependable elevators, it would be nearly impossible to construct a modern [8] that rises hundreds of meters into the sky.\n\nSome historic elevators have themselves become architectural [9], attracting tourists eager to see the machines that changed how cities were built.\n\nAs a result, moving people [10] through tall buildings quickly and safely became one of the defining engineering achievements of the modern age.",
      answers: { 1: "C", 2: "F", 3: "A", 4: "B", 5: "E", 6: "H", 7: "J", 8: "G", 9: "D", 10: "I" }
    },
    discourse: {
      options: [
        "A. Before this innovation, many passengers worried that a snapped cable could send the car crashing down.",
        "B. Small touches like mirrors or lighting can make a short ride feel noticeably more comfortable.",
        "C. Early versions were powered entirely by human or animal strength working through ropes and pulleys.",
        "D. City planners have long debated how many elevators a single building should realistically need.",
        "E. Without this shift in confidence, skyscrapers as we know them might never have become structurally or commercially practical."
      ],
      paragraphs: [
        "Few inventions have shaped the modern skyline as quietly and as thoroughly as the elevator, yet most riders give it almost no thought at all.",
        "Long before electricity, inventors relied on simple mechanical systems to lift goods and people between floors. [1]",
        "Public trust in elevators changed dramatically once reliable safety brakes were introduced in the nineteenth century. [2] This breakthrough encouraged architects to imagine buildings that reached far higher than anything built before. [3]",
        "Beyond safety, designers have also quietly shaped how riding an elevator actually feels. [4]"
      ],
      answers: { 1: "C", 2: "A", 3: "E", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main purpose of this article?", options: ["A. To criticize modern elevator safety standards", "B. To compare elevators in different countries", "C. To explain the history and surprising design details of elevators", "D. To promote a specific elevator manufacturer"], answer: "C", explanation: "主旨題。全文介紹電梯的發展歷史，以及乘客平常不會注意到的設計細節。" },
        { id: 2, question: "According to the article, what was Elisha Graves Otis's contribution to elevator history?", options: ["A. He invented the first elevator ever built", "B. He designed the first elevator used by a king", "C. He built the tallest elevator in the world", "D. He pioneered a safety brake that could stop a falling elevator"], answer: "D", explanation: "細節題。文中指出奧的斯「pioneered a safety brake that could halt a falling elevator」。" },
        { id: 3, question: "What does the article say about the elevator at the Jio World Centre in Mumbai?", options: ["A. It can carry about 235 people at once", "B. It is the fastest elevator in the world", "C. It was the first elevator ever installed in India", "D. It only operates during certain hours of the day"], answer: "A", explanation: "細節題。文中指出該電梯「enormous enough to carry about 235 people at once」。" },
        { id: 4, question: "What can be inferred about why the \"close door\" button is still included in many elevators, even though it often has little real effect?", options: ["A. It is required by international manufacturing standards", "B. It gives passengers a sense of control, even if it rarely speeds up the doors", "C. It is cheaper to include than to remove during manufacturing", "D. It helps elevators pass government safety inspections"], answer: "B", explanation: "推論題。文中提到按鈕通常仍被保留，因為「it grants passengers a sense of control」。" }
      ]
    }
  }
};
window.MAGAZINE_UNITS_ALL202510 = (typeof MAGAZINE_UNITS_ALL202510 !== 'undefined') ? MAGAZINE_UNITS_ALL202510 : undefined;

