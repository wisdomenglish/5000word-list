// 空中美語 4U 10月號（課文 Unit 1-12 + News 1,2 + 封面，共 15 篇）
// 原始課文來源：空中美語4U10月號_文章彙整.docx（Google Drive，使用者逐字轉錄，掃描辨識錯誤已人工校對，
// 並移除註解上標編號與單字註解；Unit 8 原雜誌本身即為克漏字題型，挖空位置與選項取自原文，答案由
// Claude 依上下文判斷新寫，其餘題型皆由 Claude 依黃金標準規範原創產製）。
// 單字題/克漏字正解字母與篇章結構填空對應已從下筆時就隨機打散（非事後補修），
// 已逐一通過結構性驗證，但建議實際使用前仍抽查內容品質。
const MAGAZINE_UNITS_4U202510 = {
  "Unit 1": {
    title: "Eat Smart, Live Green: Celebrate World Vegetarian Day",
    chineseTitle: "世界素食日：給身體與地球一份綠色禮物",
    passage: `Every year on October 1, people around the world observe World Vegetarian Day. This special day began in 1977. It celebrates the joy, kindness, and endless possibilities of vegetarian living. The day also marks the beginning of Vegetarian Awareness Month. This is a time when people think more about what they eat—and how it affects their health, animals, and the planet.

On World Vegetarian Day, people take part in simple but meaningful activities. Families may cook easy vegetarian dishes. Some people visit vegetarian restaurants, exchange recipes online, or invite friends to try a vegetarian meal together. Schools and local communities might hold food fairs or cooking classes. Through these activities, people can discover that vegetarian food is not dull or limited. It can be colorful, creative, and full of flavor!

World Vegetarian Day is not simply about removing meat from the menu. It encourages people to slow down and think about what their food choices mean.

A meal may look simple, but its effects can reach far beyond the dinner table. A balanced vegetarian diet usually includes vegetables, fruits, beans, grains, nuts, and seeds. Such a diet often provides fiber, vitamin C, vitamin E, and minerals that help keep the body healthy.

For many people, eating vegetarian food is also a way to help animals. On modern farms, animals are often raised in crowded spaces. By eating less meat, people hope fewer animals will suffer.

Vegetarian meals can benefit the planet as well. This is because animal agriculture uses large amounts of fresh water and land. Clearing land for farms often destroys the homes of wild animals. Animal agriculture also produces greenhouse gases. Cows, for example, release these gases as they digest their food.

On World Vegetarian Day, why not take a closer look at the menu and try a meatless dish? You might be surprised by how delicious and satisfying a green choice can be!`,
    chineseTranslation: `每年10月1日，世界各地的人們都會慶祝世界素食日。這個特別的日子始於1977年。它慶祝的是素食生活所帶來的喜悅、善意，以及無限的可能性。這一天同時也是「素食認知月」的開始。這是一段讓人們更多去思考自己吃了什麼——以及這些選擇如何影響自身健康、動物與地球——的時期。

在世界素食日，人們會參與一些簡單卻富有意義的活動。家庭可能會烹煮簡單的素食料理。有些人會造訪素食餐廳、在線上交流食譜，或邀請朋友一起嘗試一頓素食餐。學校與當地社區可能會舉辦美食市集或烹飪課程。透過這些活動，人們能發現，素食其實並不無趣或受限。它可以是色彩豐富、充滿創意，且風味十足的！

世界素食日並不只是單純從菜單上移除肉類而已。它鼓勵人們放慢腳步，思考自己的飲食選擇究竟意味著什麼。

一餐看起來可能很簡單，但它所帶來的影響，卻能遠遠超越餐桌本身。均衡的素食飲食通常包含蔬菜、水果、豆類、穀物、堅果與種子。這樣的飲食，通常能提供有助於維持身體健康的纖維、維生素C、維生素E與各種礦物質。

對許多人來說，吃素同時也是一種幫助動物的方式。在現代農場上，動物經常被養在擁擠的空間裡。透過減少肉類攝取，人們希望能有更少的動物因此受苦。

素食餐點同樣也能對地球有益。這是因為畜牧農業會使用大量的淡水與土地。為了開墾農地而清除林地，往往會破壞野生動物的棲息地。畜牧農業同時也會產生溫室氣體。舉例來說，牛在消化食物的過程中，就會排放這些氣體。

在世界素食日這天，何不仔細看看菜單，試試一道無肉料理呢？你可能會驚訝地發現，一個綠色選擇竟能如此美味又令人滿足！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "observe", pos: "v.", meaning: "慶祝、紀念（節日）", collocations: "observe a day 慶祝一個節日" },
        { id: 2, word: "dull", pos: "adj.", meaning: "無趣的", collocations: "not dull or limited 並不無趣或受限" },
        { id: 3, word: "crowded", pos: "adj.", meaning: "擁擠的", collocations: "crowded spaces 擁擠的空間" },
        { id: 4, word: "agriculture", pos: "n.", meaning: "農業", collocations: "animal agriculture 畜牧農業" },
        { id: 5, word: "beyond", pos: "prep.", meaning: "超越、超出", collocations: "reach far beyond 遠遠超越" },
        { id: 6, word: "satisfying", pos: "adj.", meaning: "令人滿足的", collocations: "delicious and satisfying 美味又令人滿足" }
      ],
      grammarNotes: [
        { id: "G1", title: "when 引導形容詞子句修飾名詞", excerpt: "when people think more about what they eat", analysis: "when 引導形容詞子句，修飾先行詞 time，表「人們更多思考自己吃了什麼的」這段時期。" },
        { id: "G2", title: "that 引導形容詞子句修飾名詞", excerpt: "that help keep the body healthy", analysis: "that 引導形容詞子句，修飾先行詞 minerals，表「有助於維持身體健康的」礦物質。" }
      ],
      patternNotes: [
        { id: "P1", title: "Why not + VR...? (何不…？)", excerpt: "why not take a closer look at the menu and try a meatless dish", analysis: "Why not + 原形動詞，表「何不…？」，用於提出建議，邀請讀者嘗試無肉料理。" },
        { id: "P2", title: "as 引導時間子句（表同時）", excerpt: "as they digest their food", analysis: "as 引導時間子句，表「當…的同時」，說明牛在消化食物的過程中排放氣體。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Every year on October 1, people around the world ` },
          { type: 'vocab', text: `observe`, vid: 1 },
          { type: 'text', text: ` World Vegetarian Day. This special day began in 1977. It celebrates the joy, kindness, and endless possibilities of vegetarian living. The day also marks the beginning of Vegetarian Awareness Month. This is a time ` },
          { type: 'grammar', text: `when people think more about what they eat`, gid: 'G1' },
          { type: 'text', text: `—and how it affects their health, animals, and the planet.` }
        ],
        [
          { type: 'text', text: `On World Vegetarian Day, people take part in simple but meaningful activities. Families may cook easy vegetarian dishes. Some people visit vegetarian restaurants, exchange recipes online, or invite friends to try a vegetarian meal together. Schools and local communities might hold food fairs or cooking classes. Through these activities, people can discover that vegetarian food is not ` },
          { type: 'vocab', text: `dull`, vid: 2 },
          { type: 'text', text: ` or limited. It can be colorful, creative, and full of flavor!` }
        ],
        [
          { type: 'text', text: `World Vegetarian Day is not simply about removing meat from the menu. It encourages people to slow down and think about what their food choices mean.` }
        ],
        [
          { type: 'text', text: `A meal may look simple, but its effects can reach far ` },
          { type: 'vocab', text: `beyond`, vid: 5 },
          { type: 'text', text: ` the dinner table. A balanced vegetarian diet usually includes vegetables, fruits, beans, grains, nuts, and seeds. Such a diet often provides fiber, vitamin C, vitamin E, and minerals ` },
          { type: 'grammar', text: `that help keep the body healthy`, gid: 'G2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `For many people, eating vegetarian food is also a way to help animals. On modern farms, animals are often raised in ` },
          { type: 'vocab', text: `crowded`, vid: 3 },
          { type: 'text', text: ` spaces. By eating less meat, people hope fewer animals will suffer.` }
        ],
        [
          { type: 'text', text: `Vegetarian meals can benefit the planet as well. This is because animal ` },
          { type: 'vocab', text: `agriculture`, vid: 4 },
          { type: 'text', text: ` uses large amounts of fresh water and land. Clearing land for farms often destroys the homes of wild animals. Animal agriculture also produces greenhouse gases. Cows, for example, release these gases ` },
          { type: 'pattern', text: `as they digest their food`, pid: 'P2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `On World Vegetarian Day, ` },
          { type: 'pattern', text: `why not take a closer look at the menu and try a meatless dish`, pid: 'P1' },
          { type: 'text', text: `? You might be surprised by how delicious and ` },
          { type: 'vocab', text: `satisfying`, vid: 6 },
          { type: 'text', text: ` a green choice can be!` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Many families ______ the holiday by gathering together for a big meal.", options: ["A. forbid", "B. observe", "C. deny", "D. cancel"], answer: "B", explanation: "【選項解析】\n- (A) forbid (v.) 禁止\n- (B) observe (v.) 慶祝、紀念 (正解)\n- (C) deny (v.) 否認\n- (D) cancel (v.) 取消" },
      { id: 2, question: "The lecture was so ______ that several students fell asleep.", options: ["A. exciting", "B. colorful", "C. useful", "D. dull"], answer: "D", explanation: "【選項解析】\n- (A) exciting (adj.) 刺激的\n- (B) colorful (adj.) 色彩豐富的\n- (C) useful (adj.) 有用的\n- (D) dull (adj.) 無趣的 (正解)" },
      { id: 3, question: "The train was so ______ during rush hour that it was hard to move.", options: ["A. crowded", "B. empty", "C. quiet", "D. spacious"], answer: "A", explanation: "【選項解析】\n- (A) crowded (adj.) 擁擠的 (正解)\n- (B) empty (adj.) 空的\n- (C) quiet (adj.) 安靜的\n- (D) spacious (adj.) 寬敞的" },
      { id: 4, question: "After the long hike, the warm meal felt incredibly ______.", options: ["A. boring", "B. confusing", "C. satisfying", "D. stressful"], answer: "C", explanation: "【選項解析】\n- (A) boring (adj.) 令人厭煩的\n- (B) confusing (adj.) 令人困惑的\n- (C) satisfying (adj.) 令人滿足的 (正解)\n- (D) stressful (adj.) 壓力大的" },
    ],
    cloze: {
      text: "Choosing to eat more plant-based meals is becoming popular [1] many parts of the world, as more people learn about its possible benefits. [2] simply cutting meat out completely, many people start by replacing just one or two meals a week with vegetarian options. A well-planned vegetarian diet can provide [3] of the same nutrients found in meat, as long as people include a variety of vegetables, grains, and beans. Some people choose this lifestyle mainly for their own health, [4] others are more concerned about animals or the environment. [5] the reason, small changes to daily eating habits can add up to a meaningful difference over time.",
      questions: [
        { id: 1, options: ["A. of", "B. for", "C. across", "D. with"], answer: "C", explanation: "across + 地點，表「遍及…」，指這種飲食方式在世界各地逐漸受到歡迎。" },
        { id: 2, options: ["A. Rather than", "B. Instead", "C. Despite", "D. Because of"], answer: "A", explanation: "Rather than + V-ing 表「而非」，指許多人選擇逐步取代，而非完全戒除肉類。" },
        { id: 3, options: ["A. a few", "B. little", "C. much", "D. many"], answer: "D", explanation: "many of + 複數名詞，表「許多…」，指素食飲食能提供許多與肉類相同的營養素。" },
        { id: 4, options: ["A. because", "B. while", "C. unless", "D. so"], answer: "B", explanation: "while 引導對比子句，表「然而」，對比兩種不同的選擇動機。" },
        { id: 5, options: ["A. Whatever", "B. However", "C. Whichever", "D. Whoever"], answer: "A", explanation: "Whatever + 名詞，表「不論…是什麼」，指不論原因為何，小小的改變都能累積出有意義的差異。" },
      ]
    },
    wordBank: {
      words: ["(A) carbon", "(B) deforestation", "(C) emission", "(D) ethical", "(E) livestock", "(F) nutrient", "(G) plant-based", "(H) sustainable", "(I) vegan", "(J) wildlife"],
      passage: "More people are shifting toward [1] diets, choosing meals built around vegetables, grains, and legumes instead of meat.\n\nSome choose this lifestyle for [2] reasons, feeling uncomfortable with how animals are often treated on large farms.\n\nRaising [3] such as cattle and pigs requires significant amounts of land, water, and feed compared to growing crops directly for human consumption.\n\nLarge-scale farming is also a major contributor to global greenhouse [4], which trap heat and contribute to climate change.\n\nEvery pound of beef produced generates a measurable [5] footprint, largely from methane released during digestion.\n\nIn some regions, expanding farmland has led to serious [6], as forests are cleared to make room for grazing animals.\n\nThis habitat loss can seriously threaten local [7], pushing some species toward extinction in affected areas.\n\nA diet completely free of animal products, often called [8], requires careful planning to avoid missing key nutrients.\n\nEven small changes, like adding more beans and leafy greens, can boost important [9] intake without any major lifestyle overhaul.\n\nUltimately, experts generally agree that more [10] food systems will be necessary to feed a growing global population.",
      answers: { 1: "G", 2: "D", 3: "E", 4: "C", 5: "A", 6: "B", 7: "J", 8: "I", 9: "F", 10: "H" }
    },
    discourse: {
      options: [
        "A. Even one or two meatless meals a week can meaningfully reduce a household's overall environmental footprint.",
        "B. In reality, creative vegetarian cooking can be just as colorful and satisfying as any meat-based dish.",
        "C. Clearing forests to make room for grazing animals also destroys habitats that countless wild species depend on.",
        "D. Crowded, industrial farming conditions have led some consumers to rethink how their food choices affect animals.",
        "E. Some restaurants have started offering entirely plant-based menus in response to growing customer demand."
      ],
      paragraphs: [
        "Every October, awareness campaigns around the world encourage people to think more carefully about what ends up on their plates.",
        "One common misunderstanding is that eating less meat automatically means eating less interesting food. [1]",
        "Beyond personal health, many people are drawn to plant-based eating because of its connection to animal welfare. [2] The environmental case is equally compelling, since raising animals for food demands far more land and water than growing crops directly. [3]",
        "None of this requires giving up meat entirely overnight. [4]"
      ],
      answers: { 1: "B", 2: "D", 3: "C", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. World Vegetarian Day requires everyone to become fully vegan.", "B. Vegetarian food is generally considered bland and limited.", "C. World Vegetarian Day encourages people to reflect on how their food choices affect health, animals, and the environment.", "D. Vegetarian diets are only beneficial for animals, not for human health or the environment."], answer: "C", explanation: "主旨題。全文說明世界素食日鼓勵人們反思飲食選擇對健康、動物與環境的影響。" },
        { id: 2, question: "According to the article, what nutrients does a balanced vegetarian diet often provide?", options: ["A. Fiber, vitamin C, vitamin E, and minerals.", "B. Only protein and calcium.", "C. Exclusively vitamin D and iron.", "D. No significant nutrients at all."], answer: "A", explanation: "細節題。文中指出均衡素食飲食能提供「fiber, vitamin C, vitamin E, and minerals」。" },
        { id: 3, question: "According to the article, why does animal agriculture contribute to greenhouse gases?", options: ["A. Because farms require large amounts of electricity.", "B. Because trucks transport animals long distances.", "C. Because factories process meat using fossil fuels.", "D. Because animals like cows release gases as they digest their food."], answer: "D", explanation: "細節題。文中指出「Cows, for example, release these gases as they digest their food」。" },
        { id: 4, question: "What can be inferred about why the article mentions crowded conditions on modern farms?", options: ["A. To argue that crowded farms are more efficient and should be encouraged.", "B. To suggest one reason why eating less meat might help reduce animal suffering.", "C. To prove that all farms around the world are crowded.", "D. To explain why vegetarian food tastes better than meat."], answer: "B", explanation: "推論題。文中提到擁擠的飼養空間，暗示這正是減少肉食可能有助於減少動物痛苦的原因之一。" }
      ]
    }
  },

  "News 1": {
    title: "Taiwan Travelogue Brings Taiwan to the International Booker Prize Stage",
    chineseTitle: "《臺灣漫遊錄》勇奪國際布克獎 臺灣故事走向世界",
    passage: `Taiwanese author Yang Shuang-zi and translator Lin King have won the 2026 International Booker Prize for Taiwan Travelogue. The award was announced in London on May 19, and it brought new international attention to Taiwanese literature. It is the first novel translated from Mandarin Chinese to receive this honor.

The International Booker Prize honors fiction translated into English and published in the UK or Ireland. The prize money, £50,000 (about NT$2.1 million), is shared between the writer and translator, highlighting the translator's important role.

The novel is set in Taiwan in the 1930s, during the period of Japanese rule. It follows a Japanese female writer and a Taiwanese female interpreter as they travel across Taiwan and enjoy local food. Through this fictional travelogue, the story explores love, language, class, and colonial history.

This is not the first time Taiwan Travelogue has received major recognition. In the US, its English translation won the 2024 National Book Award for Translated Literature. It was the first Taiwanese work to do so. The novel's latest win further reflects its growing global presence. Its translation rights have been sold in more than 20 languages. Through this success, readers worldwide are gaining deeper insights into Taiwan's history, culture, and literary voice.`,
    chineseTranslation: `台灣作家楊双子與譯者金翎，以《臺灣漫遊錄》榮獲2026年國際布克獎。這項獎項於5月19日在倫敦公布，為臺灣文學帶來全新的國際關注。這是第一部從中文翻譯的小說獲得此項殊榮。

國際布克獎表彰翻譯成英文、並在英國或愛爾蘭出版的小說作品。獎金5萬英鎊（約新台幣210萬元），由作者與譯者共同分享，凸顯了譯者的重要角色。

這部小說的故事背景設定在1930年代、日本統治時期的臺灣。故事描述一位日本女作家與一位臺灣女通譯，一同遊歷臺灣各地並品嚐當地美食。透過這部虛構的旅行紀事，故事探討了愛情、語言、階級，以及殖民歷史。

這並非《臺灣漫遊錄》首次獲得重大肯定。在美國，它的英文譯本曾獲得2024年美國國家書卷獎翻譯文學類獎項，是第一部獲此殊榮的臺灣作品。這部小說最新的獲獎，進一步反映出它在國際上日益成長的影響力。它的翻譯版權已售出超過20種語言。透過這次成功，全世界的讀者正對臺灣的歷史、文化與文學之聲，獲得更深入的理解。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "honor", pos: "n.", meaning: "殊榮", collocations: "receive this honor 獲得此項殊榮" },
        { id: 2, word: "interpreter", pos: "n.", meaning: "口譯員、通譯", collocations: "a female interpreter 一位女通譯" },
        { id: 3, word: "colonial", pos: "adj.", meaning: "殖民的", collocations: "colonial history 殖民歷史" },
        { id: 4, word: "recognition", pos: "n.", meaning: "肯定、認可", collocations: "major recognition 重大肯定" },
        { id: 5, word: "insight", pos: "n.", meaning: "深入的理解、洞察", collocations: "gaining deeper insights 獲得更深入的理解" },
        { id: 6, word: "highlight", pos: "v.", meaning: "凸顯", collocations: "highlighting the translator's role 凸顯譯者的角色" }
      ],
      grammarNotes: [
        { id: "G1", title: "as 引導時間子句（表同時）", excerpt: "as they travel across Taiwan and enjoy local food", analysis: "as 引導時間子句，表「當…的同時」，說明這兩位角色一同遊歷臺灣並享用美食的過程。" },
        { id: "G2", title: "不定詞修飾名詞", excerpt: "to do so", analysis: "不定詞片語修飾先行詞 work，表「成為第一部這樣做的台灣作品」。" }
      ],
      patternNotes: [
        { id: "P1", title: "分詞構句表結果", excerpt: "highlighting the translator's important role", analysis: "分詞構句（省略主詞與連接詞），補充說明前面動作所造成的結果，表「凸顯了譯者的重要角色」。" },
        { id: "P2", title: "Through + N. (透過…)", excerpt: "Through this success, readers worldwide are gaining deeper", analysis: "Through + 名詞，表「透過…」，說明透過這次成功，全球讀者對臺灣有了更深入的理解。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Taiwanese author Yang Shuang-zi and translator Lin King have won the 2026 International Booker Prize for Taiwan Travelogue. The award was announced in London on May 19, and it brought new international attention to Taiwanese literature. It is the first novel translated from Mandarin Chinese to receive this ` },
          { type: 'vocab', text: `honor`, vid: 1 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The International Booker Prize honors fiction translated into English and published in the UK or Ireland. The prize money, £50,000 (about NT$2.1 million), is shared between the writer and translator, ` },
          { type: 'vocab', text: `highlighting`, vid: 6 },
          { type: 'text', text: ` ` },
          { type: 'pattern', text: `the translator's important role`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The novel is set in Taiwan in the 1930s, during the period of Japanese rule. It follows a Japanese female writer and a Taiwanese female ` },
          { type: 'vocab', text: `interpreter`, vid: 2 },
          { type: 'text', text: ` ` },
          { type: 'grammar', text: `as they travel across Taiwan and enjoy local food`, gid: 'G1' },
          { type: 'text', text: `. Through this fictional travelogue, the story explores love, language, class, and ` },
          { type: 'vocab', text: `colonial`, vid: 3 },
          { type: 'text', text: ` history.` }
        ],
        [
          { type: 'text', text: `This is not the first time Taiwan Travelogue has received major ` },
          { type: 'vocab', text: `recognition`, vid: 4 },
          { type: 'text', text: `. In the US, its English translation won the 2024 National Book Award for Translated Literature. It was the first Taiwanese work ` },
          { type: 'grammar', text: `to do so`, gid: 'G2' },
          { type: 'text', text: `. The novel's latest win further reflects its growing global presence. Its translation rights have been sold in more than 20 languages. ` },
          { type: 'pattern', text: `Through this success, readers worldwide are gaining deeper`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `insights`, vid: 5 },
          { type: 'text', text: ` into Taiwan's history, culture, and literary voice.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Receiving the award was a great ______ for the young scientist.", options: ["A. accident", "B. burden", "C. complaint", "D. honor"], answer: "D", explanation: "【選項解析】\n- (A) accident (n.) 意外\n- (B) burden (n.) 負擔\n- (C) complaint (n.) 抱怨\n- (D) honor (n.) 殊榮 (正解)" },
      { id: 2, question: "The report's conclusion ______ the urgent need for better funding.", options: ["A. highlights", "B. hides", "C. denies", "D. ignores"], answer: "A", explanation: "【選項解析】\n- (A) highlights (v.) 凸顯 (正解)\n- (B) hides (v.) 隱藏\n- (C) denies (v.) 否認\n- (D) ignores (v.) 忽略" },
      { id: 3, question: "Since she couldn't speak Spanish, she hired an ______ for the meeting.", options: ["A. architect", "B. accountant", "C. interpreter", "D. electrician"], answer: "C", explanation: "【選項解析】\n- (A) architect (n.) 建築師\n- (B) accountant (n.) 會計師\n- (C) interpreter (n.) 口譯員 (正解)\n- (D) electrician (n.) 電工" },
      { id: 4, question: "Many old buildings in the city still reflect its ______ past.", options: ["A. modern", "B. colonial", "C. digital", "D. imaginary"], answer: "B", explanation: "【選項解析】\n- (A) modern (adj.) 現代的\n- (B) colonial (adj.) 殖民的 (正解)\n- (C) digital (adj.) 數位的\n- (D) imaginary (adj.) 想像的" },
    ],
    cloze: {
      text: "Winning a major international literary prize can bring a work of fiction [1] global attention almost overnight. [2] simply translating the words of a novel, a skilled translator must also capture its tone, rhythm, and emotional depth. Prize committees increasingly recognize this contribution, [3] awarding prize money jointly to both the author and the translator. A single award win can also encourage publishers in other countries to purchase translation rights, [4] the story available to readers in dozens of new languages. In the end, this kind of recognition does more than honor one book; it shows [5] literature in translation can connect readers across very different cultures.",
      questions: [
        { id: 1, options: ["A. temporary", "B. instant", "C. limited", "D. occasional"], answer: "B", explanation: "instant attention 表「立即的關注」，指獲獎幾乎能在一夜之間帶來全球關注。" },
        { id: 2, options: ["A. Rather than", "B. Instead", "C. Despite", "D. Because of"], answer: "A", explanation: "Rather than + V-ing 表「而非」，指譯者不只是翻譯文字，更要捕捉語氣與節奏。" },
        { id: 3, options: ["A. never", "B. rarely", "C. hardly", "D. sometimes"], answer: "D", explanation: "sometimes 表「有時」，指獎項委員會有時會將獎金同時頒給作者與譯者。" },
        { id: 4, options: ["A. made", "B. to make", "C. making", "D. make"], answer: "C", explanation: "分詞構句表結果，現在分詞 making，表「使這個故事得以讓更多讀者看見」。" },
        { id: 5, options: ["A. how", "B. what", "C. that", "D. which"], answer: "A", explanation: "how 引導名詞子句，作 shows 的受詞，表「翻譯文學如何能連結不同文化的讀者」。" },
      ]
    },
    wordBank: {
      words: ["(A) adaptation", "(B) anthology", "(C) award", "(D) fiction", "(E) literary", "(F) manuscript", "(G) narrative", "(H) publisher", "(I) recognition", "(J) translator"],
      passage: "International [1] prizes often bring overdue attention to writers whose work has been overlooked outside their home country.\n\nBehind every successful translated novel stands a skilled [2], someone who must recreate not just meaning but tone and rhythm in a new language.\n\nA compelling [3], the underlying story and how it unfolds, can still shine through even when read in translation.\n\nA major literary [4] often comes with significant prize money, which can dramatically change a writer's career.\n\nGenuine [5] from international judges can validate years of work that went largely unnoticed at home.\n\nOnce a novel gains attention abroad, a foreign [6] may quickly move to acquire rights for a local edition.\n\nSome works of [7] are inspired by real historical events, blending imagination with documented fact.\n\nOccasionally, a successful novel is later turned into a film [8], introducing the story to an entirely new audience.\n\nBefore publication, an author's original [9] often goes through many rounds of editing and revision.\n\nSome publishers also release themed [10] collecting short stories from multiple authors around a shared topic.",
      answers: { 1: "E", 2: "J", 3: "G", 4: "C", 5: "I", 6: "H", 7: "D", 8: "A", 9: "F", 10: "B" }
    },
    discourse: {
      options: [
        "A. Capturing tone, rhythm, and emotional nuance in an entirely different language requires genuine literary skill of its own.",
        "B. A single prize win can quickly lead to a novel being translated into dozens of additional languages.",
        "C. Readers abroad may suddenly want to explore other works by the same author or from the same literary tradition.",
        "D. What begins as curiosity about one award-winning book often grows into a lasting interest in an entire country's literature.",
        "E. Some critics argue that international prizes favor certain writing styles over others, regardless of literary merit."
      ],
      paragraphs: [
        "International literary prizes don't just celebrate a single book; they often reshape how the rest of the world sees an entire national literature.",
        "When a novel wins a major translated-fiction award, interest in its author's home country tends to surge almost overnight. [1]",
        "Much of this attention rightly extends to the translator as well, whose work is far more demanding than simple word-for-word conversion. [2] Publishers in other countries often take notice too, moving quickly to secure translation rights for additional markets. [3]",
        "For readers encountering a culture's literature for the first time, a single award-winning novel can open the door to an entire tradition. [4]"
      ],
      answers: { 1: "C", 2: "A", 3: "B", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Taiwan Travelogue was written entirely in English.", "B. Taiwan Travelogue's International Booker Prize win brought significant new attention to Taiwanese literature.", "C. The International Booker Prize is only open to authors from the UK and Ireland.", "D. Taiwan Travelogue has never received any international recognition before."], answer: "B", explanation: "主旨題。全文說明《臺灣漫遊錄》榮獲國際布克獎，為臺灣文學帶來重大國際關注。" },
        { id: 2, question: "According to the article, what historical period does Taiwan Travelogue take place in?", options: ["A. Taiwan during the 21st century.", "B. Taiwan before any foreign contact.", "C. Taiwan during the Qing dynasty.", "D. Taiwan in the 1930s, during the period of Japanese rule."], answer: "D", explanation: "細節題。文中指出小說「is set in Taiwan in the 1930s, during the period of Japanese rule」。" },
        { id: 3, question: "According to the article, how is the International Booker Prize money divided?", options: ["A. It is shared between the writer and the translator.", "B. It goes entirely to the publisher.", "C. It is divided among all nominated authors.", "D. It is donated to a literary charity."], answer: "A", explanation: "細節題。文中指出獎金「is shared between the writer and translator」。" },
        { id: 4, question: "What can be inferred about why the article mentions that Taiwan Travelogue's translation rights have been sold in more than 20 languages?", options: ["A. To show that the novel has not been successful internationally.", "B. To prove that the novel was originally written in 20 different languages.", "C. To illustrate how widely the novel's international recognition has grown.", "D. To argue that the novel should not be translated further."], answer: "C", explanation: "推論題。這項事實用來說明這部小說日益成長的全球影響力與知名度。" }
      ]
    }
  },

  "Unit 2": {
    title: "Managing App Subscriptions: From Signing Up to Signing Off",
    chineseTitle: "暫停還是取消？訂閱服務的注意事項",
    passage: `Ethan and Nora

Ethan: Hi, Nora. What are you doing?

Nora: I'm trying to subscribe to this language-learning app. It offers daily lessons, listening practice, and short quizzes.

Ethan: That sounds useful. Is it free?

Nora: There is a free version, but it's full of ads. Also, some lessons are locked.

Ethan: So, you're thinking about getting the paid plan?

Nora: Yes. The monthly plan is NT$150, but the yearly plan is cheaper in the long run.

Ethan: Did you read the plan details?

Nora: I did. It says the paid plan comes with a free trial. The app will charge me automatically after the free trial ends.

Ethan: That's important. A lot of people forget when the free trial ends, and then the app charges them.

Nora: I already set a reminder on my phone, so I can decide before the free trial ends.

Ethan: Good idea. What payment method are you going to use?

Nora: I'll use my debit card.

Ethan: Well, if the app really helps, it may be worth it.

Nora: I hope so. I'll try it for a week and see if I actually use it every day.

The following week

Nora: Hey, Ethan, do you remember that language-learning app I previously subscribed to?

Ethan: Yes. How is it going?

Nora: It's good, but I haven't used it much. I think I should cancel the subscription.

Ethan: That makes sense. There is no point in paying for something you don't use that much.

Nora: Exactly. (Nora takes out her phone.) I'm trying to find the "Cancel Subscription" button now, but somehow I can't find it!

Ethan: You might need to manage it through your account settings.

Nora: Oh, I see it now. Wait ... it's asking if I want to pause my subscription instead.

Ethan: A pause feature is pretty useful. It allows you to take a temporary break from payments.

Nora: That sounds tempting, but I think I'll just stick with canceling it.

Ethan: Totally. Then you don't have to worry about it anymore.

Nora: It's canceled now. The app says I can still use the free trial until it expires.

Ethan: That's usually how it works. After that, you won't be charged.

Nora: Great. Thanks for walking me through the process.`,
    chineseTranslation: `Ethan 與 Nora

Ethan：嗨，Nora，你在做什麼？

Nora：我正在試著訂閱這個語言學習App。它提供每日課程、聽力練習，還有簡短的小測驗。

Ethan：聽起來很實用。它是免費的嗎？

Nora：有免費版本，但裡面滿是廣告，而且有些課程還被鎖住。

Ethan：所以，你在考慮要升級成付費方案？

Nora：對啊。月繳方案是新台幣150元，但年繳方案長期算起來比較划算。

Ethan：妳有讀過方案細節嗎？

Nora：有啊。上面寫付費方案附有免費試用期。試用期結束後，這個App會自動開始扣款。

Ethan：這點很重要。很多人都會忘記試用期什麼時候結束，結果就被扣款了。

Nora：我已經在手機上設了提醒，這樣我就能在免費試用期結束前做出決定。

Ethan：好主意。妳打算用哪種付款方式？

Nora：我會用我的金融卡。

Ethan：嗯，如果這個App真的有幫助，那應該值得。

Nora：希望是這樣。我先試用一個星期，看看自己是不是真的每天都會用。

下週

Nora：嘿，Ethan，你還記得我之前訂閱的那個語言學習App嗎？

Ethan：記得啊。用得怎麼樣？

Nora：還不錯，但我沒怎麼用它。我覺得我應該取消訂閱了。

Ethan：這很合理。花錢訂閱一個你用得不多的東西，根本沒有意義。

Nora：對啊。（Nora拿出手機。）我正在找「取消訂閱」的按鈕，但不知道為什麼，我找不到！

Ethan：妳可能需要透過帳戶設定來處理。

Nora：噢，我現在看到了。等等……它問我要不要改成暫停訂閱。

Ethan：暫停功能其實挺實用的。它讓你可以先暫時停止付款一段時間。

Nora：聽起來是挺誘人的，但我覺得我還是會選擇直接取消。

Ethan：完全沒問題。那樣妳之後就不用再擔心這件事了。

Nora：已經取消了。App說我還可以繼續使用免費試用期，直到它到期為止。

Ethan：通常就是這樣運作的。之後，妳就不會被扣款了。

Nora：太好了。謝謝你陪我走完整個流程。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "subscribe", pos: "v.", meaning: "訂閱", collocations: "subscribe to an app 訂閱一個App" },
        { id: 2, word: "automatically", pos: "adv.", meaning: "自動地", collocations: "charge automatically 自動扣款" },
        { id: 3, word: "reminder", pos: "n.", meaning: "提醒", collocations: "set a reminder 設定提醒" },
        { id: 4, word: "temporary", pos: "adj.", meaning: "暫時的", collocations: "a temporary break 暫時的中斷" },
        { id: 5, word: "tempting", pos: "adj.", meaning: "誘人的", collocations: "sounds tempting 聽起來很誘人" },
        { id: 6, word: "expire", pos: "v.", meaning: "到期、失效", collocations: "until it expires 直到它到期" }
      ],
      grammarNotes: [
        { id: "G1", title: "after 引導時間子句", excerpt: "after the free trial ends", analysis: "after 引導時間子句，表「在…之後」，說明免費試用期結束之後App才會自動扣款。" },
        { id: "G2", title: "allow + O + to V (允許某人做…)", excerpt: "It allows you to take a", analysis: "allow + 受詞 + to V.，表「允許某人做…」，說明暫停功能讓使用者能暫時停止付款。" }
      ],
      patternNotes: [
        { id: "P1", title: "There is no point in V-ing (做…沒有意義)", excerpt: "There is no point in paying for something you don't use that much", analysis: "There is no point in + V-ing，表「做…沒有意義」，說明為用得不多的東西付費並不合理。" },
        { id: "P2", title: "so + S + V (口語目的表達，以便於…)", excerpt: "so I can decide before the free trial ends", analysis: "so 在口語中可直接引導目的子句，表「這樣我就能…」，說明設定提醒的目的。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Ethan and Nora\n\nEthan: Hi, Nora. What are you doing?\n\nNora: I'm trying to ` },
          { type: 'vocab', text: `subscribe`, vid: 1 },
          { type: 'text', text: ` to this language-learning app. It offers daily lessons, listening practice, and short quizzes.\n\nEthan: That sounds useful. Is it free?\n\nNora: There is a free version, but it's full of ads. Also, some lessons are locked.\n\nEthan: So, you're thinking about getting the paid plan?\n\nNora: Yes. The monthly plan is NT$150, but the yearly plan is cheaper in the long run.\n\nEthan: Did you read the plan details?\n\nNora: I did. It says the paid plan comes with a free trial. The app will charge me ` },
          { type: 'vocab', text: `automatically`, vid: 2 },
          { type: 'text', text: ` ` },
          { type: 'grammar', text: `after the free trial ends`, gid: 'G1' },
          { type: 'text', text: `.\n\nEthan: That's important. A lot of people forget when the free trial ends, and then the app charges them.\n\nNora: I already set a ` },
          { type: 'vocab', text: `reminder`, vid: 3 },
          { type: 'text', text: ` on my phone, ` },
          { type: 'pattern', text: `so I can decide before the free trial ends`, pid: 'P2' },
          { type: 'text', text: `.\n\nEthan: Good idea. What payment method are you going to use?\n\nNora: I'll use my debit card.\n\nEthan: Well, if the app really helps, it may be worth it.\n\nNora: I hope so. I'll try it for a week and see if I actually use it every day.` }
        ],
        [
          { type: 'text', text: `The following week\n\nNora: Hey, Ethan, do you remember that language-learning app I previously subscribed to?\n\nEthan: Yes. How is it going?\n\nNora: It's good, but I haven't used it much. I think I should cancel the subscription.\n\nEthan: That makes sense. ` },
          { type: 'pattern', text: `There is no point in paying for something you don't use that much`, pid: 'P1' },
          { type: 'text', text: `.\n\nNora: Exactly. (Nora takes out her phone.) I'm trying to find the "Cancel Subscription" button now, but somehow I can't find it!\n\nEthan: You might need to manage it through your account settings.\n\nNora: Oh, I see it now. Wait ... it's asking if I want to pause my subscription instead.\n\nEthan: A pause feature is pretty useful. ` },
          { type: 'grammar', text: `It allows you to take a`, gid: 'G2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `temporary`, vid: 4 },
          { type: 'text', text: ` break from payments.\n\nNora: That sounds ` },
          { type: 'vocab', text: `tempting`, vid: 5 },
          { type: 'text', text: `, but I think I'll just stick with canceling it.\n\nEthan: Totally. Then you don't have to worry about it anymore.\n\nNora: It's canceled now. The app says I can still use the free trial until it ` },
          { type: 'vocab', text: `expires`, vid: 6 },
          { type: 'text', text: `.\n\nEthan: That's usually how it works. After that, you won't be charged.\n\nNora: Great. Thanks for walking me through the process.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "She decided to ______ to the magazine for a full year.", options: ["A. forbid", "B. subscribe", "C. cancel", "D. ignore"], answer: "B", explanation: "【選項解析】\n- (A) forbid (v.) 禁止\n- (B) subscribe (v.) 訂閱 (正解)\n- (C) cancel (v.) 取消\n- (D) ignore (v.) 忽略" },
      { id: 2, question: "The lights ______ turn off when no one is in the room.", options: ["A. rarely", "B. manually", "C. occasionally", "D. automatically"], answer: "D", explanation: "【選項解析】\n- (A) rarely (adv.) 很少\n- (B) manually (adv.) 手動地\n- (C) occasionally (adv.) 偶爾\n- (D) automatically (adv.) 自動地 (正解)" },
      { id: 3, question: "He set a ______ on his phone so he wouldn't forget the meeting.", options: ["A. reminder", "B. password", "C. receipt", "D. warning"], answer: "A", explanation: "【選項解析】\n- (A) reminder (n.) 提醒 (正解)\n- (B) password (n.) 密碼\n- (C) receipt (n.) 收據\n- (D) warning (n.) 警告" },
      { id: 4, question: "The discount made the expensive jacket seem more ______.", options: ["A. boring", "B. forgettable", "C. tempting", "D. painful"], answer: "C", explanation: "【選項解析】\n- (A) boring (adj.) 令人厭煩的\n- (B) forgettable (adj.) 容易被遺忘的\n- (C) tempting (adj.) 誘人的 (正解)\n- (D) painful (adj.) 痛苦的" },
    ],
    cloze: {
      text: "Many digital services now offer a free trial [1] signing up for a paid plan. [2] users forget to cancel before the trial ends, they are often charged automatically without warning. Some apps make canceling surprisingly difficult, [3] the option deep within account settings rather than on the main screen. Setting a reminder a few days before a trial ends can help users decide [4] to continue or cancel in time. In the end, paying for a service you rarely use rarely makes sense, [5] how affordable the monthly fee might seem.",
      questions: [
        { id: 1, options: ["A. after", "B. during", "C. before", "D. since"], answer: "C", explanation: "before + V-ing，表「在…之前」，指服務在要求付費之前提供免費試用期。" },
        { id: 2, options: ["A. If", "B. Unless", "C. Although", "D. Because"], answer: "A", explanation: "If 引導條件子句，表「如果」，指如果使用者忘記取消，就會被自動扣款。" },
        { id: 3, options: ["A. hidden", "B. to hide", "C. hide", "D. hiding"], answer: "D", explanation: "分詞構句表伴隨狀態，現在分詞 hiding，表「將選項隱藏在…」。" },
        { id: 4, options: ["A. that", "B. whether", "C. which", "D. what"], answer: "B", explanation: "whether 引導名詞子句，作 decide 的受詞，表「是否要繼續或取消」。" },
        { id: 5, options: ["A. no matter", "B. even", "C. despite", "D. although"], answer: "A", explanation: "no matter + how + 形容詞，表「不論…多麼…」，指不論月費看起來多便宜。" },
      ]
    },
    wordBank: {
      words: ["(A) automatic", "(B) billing", "(C) cancellation", "(D) commitment", "(E) notification", "(F) renewal", "(G) subscriber", "(H) subscription", "(I) trial", "(J) upgrade"],
      passage: "The [1] economy has grown rapidly as more companies shift from one-time purchases to ongoing monthly plans.\n\nMost services attract new users with a free [2] period, hoping they will stay once the trial ends.\n\nAfter the trial period, [3] charges typically begin without requiring any further action from the user.\n\nA sudden, unexpected [4] on a credit card statement is one of the most common subscription complaints.\n\nSome companies now send a [5] a few days before charging a customer, giving them a chance to cancel first.\n\nUnfortunately, the [6] process itself is sometimes made deliberately confusing or time-consuming.\n\nEvery active [7] represents steady, predictable monthly income for the company providing the service.\n\nAt the end of each billing cycle, most subscriptions move automatically into [8] unless a user actively cancels.\n\nMany people hesitate before making a long-term [9] to a paid plan, preferring to test a product first.\n\nSome services also offer a paid [10] with extra features for customers willing to pay more each month.",
      answers: { 1: "H", 2: "I", 3: "A", 4: "B", 5: "E", 6: "C", 7: "G", 8: "F", 9: "D", 10: "J" }
    },
    discourse: {
      options: [
        "A. Setting a calendar reminder a few days before the trial ends gives users time to make a clear decision.",
        "B. Consumer advocates have criticized this practice, arguing that it discourages customers from leaving a service.",
        "C. The reality, however, is that many people simply forget to cancel before being charged.",
        "D. A clearly visible cancel button on the main screen would make this process far less frustrating.",
        "E. Some services have started offering shorter trial periods specifically to reduce unexpected charges."
      ],
      paragraphs: [
        "Free trials have become one of the most common ways for digital services to attract new paying customers.",
        "The promise is simple: try the service for free, then decide whether it's worth paying for. [1]",
        "In practice, many users forget the exact date their trial ends and get charged without expecting it. [2] Canceling isn't always straightforward either, since some companies deliberately bury the option deep in account settings. [3]",
        "A little planning ahead can prevent most of these frustrating surprises. [4]"
      ],
      answers: { 1: "C", 2: "B", 3: "D", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this dialogue?", options: ["A. Ethan convinces Nora to subscribe to a service she dislikes.", "B. Nora goes through the process of subscribing to and later canceling an app subscription.", "C. Nora and Ethan argue about which language app is best.", "D. Ethan cancels his own subscription after Nora's advice."], answer: "B", explanation: "主旨題。全文描述Nora先訂閱一款App，後來又決定取消訂閱的完整過程。" },
        { id: 2, question: "According to the dialogue, what happens if Nora doesn't cancel before the free trial ends?", options: ["A. The app will delete her account automatically.", "B. She will receive a refund automatically.", "C. The subscription will pause itself automatically.", "D. The app will charge her automatically."], answer: "D", explanation: "細節題。對話中指出「The app will charge me automatically after the free trial ends」。" },
        { id: 3, question: "According to the dialogue, what option does the app offer Nora instead of canceling completely?", options: ["A. Pausing the subscription temporarily.", "B. Switching to a cheaper yearly plan.", "C. Sharing the subscription with a friend.", "D. Upgrading to a premium plan for free."], answer: "A", explanation: "細節題。對話中App詢問她「if I want to pause my subscription instead」。" },
        { id: 4, question: "What can be inferred about why Nora decides to cancel the subscription rather than pause it?", options: ["A. She plans to subscribe to a different app instead.", "B. She wants to continue using it secretly for free.", "C. She realizes she hasn't been using the app enough to justify keeping it active in any form.", "D. She was told by Ethan that pausing is against the app's rules."], answer: "C", explanation: "推論題。Nora先前提到自己「haven't used it much」，暗示她決定直接取消而非僅暫停。" }
      ]
    }
  },

  "Unit 3": {
    title: "Famous Statues and Their Hidden Secrets",
    chineseTitle: "世界名雕像背後的奇聞軼事",
    passage: `Statues may seem silent, but funny stories, mistakes, and even lies sometimes hide behind those faces. Here are three world-famous statues and the secrets they carry!

John Harvard Statue

At Harvard University in Massachusetts, US, a bronze statue shows a man who sits calmly in a chair. The base reads: "JOHN HARVARD • FOUNDER • 1638." However, Harvard students have nicknamed it the "Statue of Three Lies," and the reason comes from those very words.

The first lie is that it doesn't show John Harvard's real face. No reliable portrait of him survived, so the sculptor used a Harvard student, Sherman Hoar, as the model. The second lie appears in the word "founder." John Harvard didn't start the school. He was the first major benefactor who left half of his money and about 400 books to the university. The final lie is the year 1638. That was the year John Harvard died, not the year the school was founded. For a quiet statue, it certainly tells quite a story!

The Little Mermaid

In Copenhagen, Denmark, The Little Mermaid rests on a rock by the water. This statue was inspired by Hans Christian Andersen's fairy tale of the same name. Today, it is one of the city's most famous landmarks.

The statue was commissioned by Carl Jacobsen, a wealthy Danish brewer. After he watched a ballet that was based on The Little Mermaid, Jacobsen became deeply moved by the story. He wanted to capture the beauty of the lead ballerina, Ellen Price, in bronze. Although Price agreed to model for the statue's face, she refused to pose without clothes. The sculptor, Edvard Eriksen, finished the statue in 1913. But to complete it, he had to ask his wife, Eline Eriksen, to model for the mermaid's body.

The Little Mermaid has not always had a peaceful life. Visitors may not realize the statue has been attacked many times, and that someone even cut off her head! However, the people of Copenhagen always fix her, because she is a part of who they are.

Michelangelo's David

In Florence, Italy, Michelangelo's David stands as one of the world's greatest artworks. People think it represents the ideal human body. However, this perfect statue began with a very imperfect piece of marble.

Before Michelangelo, two other artists had tried to carve the giant piece of marble but eventually gave up. The stone was damaged, difficult to shape, and too narrow. Because of this, Michelangelo could not freely design David in any pose he wanted. These limits may explain several of David's features. The body is slim, and the head turns to the side instead of facing forward. Even the gap between the legs was likely a clever way to work around an existing hole in the marble.

Michelangelo also carefully considered the view from below because the statue was originally planned to stand high up. For this reason, some body parts were made larger than normal, especially David's head and hands. Michelangelo understood anatomy very well, so these proportions were most likely added by design, not by accident.`,
    chineseTranslation: `雕像看似沉默不語，但有趣的故事、錯誤，甚至謊言，有時就藏在那些面孔背後。以下是三座世界知名的雕像，以及它們各自隱藏的秘密！

約翰·哈佛雕像

在美國麻薩諸塞州的哈佛大學裡，一座青銅雕像展示著一位安靜坐在椅子上的男子。雕像底座上寫著：「約翰·哈佛・創辦人・1638」。然而，哈佛的學生們卻給它取了個外號，叫做「三謊雕像」，而這個外號正是源自底座上這幾個字。

第一個謊言是：這座雕像並沒有展示約翰·哈佛的真實樣貌。由於沒有任何可靠的肖像畫流傳下來，雕刻家只好以一位哈佛學生——薰曼·霍爾——作為模特兒。第二個謊言出現在「創辦人」這個詞上。約翰·哈佛並沒有創立這所學校，他是學校最早的主要捐助者之一，將自己一半的財產與大約400本書捐贈給了這所大學。最後一個謊言則是1638這個年份——那其實是約翰·哈佛去世的那一年，而不是學校創立的那一年。對於一座安靜的雕像而言，它所講述的故事可真不少！

小美人魚

在丹麥哥本哈根，小美人魚雕像靜靜地坐在水邊的岩石上。這座雕像的靈感，來自安徒生同名童話故事。如今，它已成為這座城市最知名的地標之一。

這座雕像是由丹麥富有的釀酒商卡爾·雅各布森所委託製作的。他在觀賞一部以《小美人魚》為題的芭蕾舞劇後，深深被這個故事感動。他想要將首席芭蕾舞者艾倫·普萊斯的美麗，以青銅雕像的形式呈現出來。雖然普萊斯同意擔任雕像臉部的模特兒，但她拒絕不穿衣服擺姿勢。雕刻家埃德瓦德·艾瑞克森於1913年完成了這座雕像。但為了完成作品，他必須請自己的妻子艾琳·艾瑞克森，來擔任美人魚身體部分的模特兒。

小美人魚的日子並不總是平靜無波。遊客或許沒注意到，這座雕像曾多次遭到破壞，甚至有人把她的頭給砍掉了！然而，哥本哈根的居民總是一次又一次地修復她，因為她早已是他們身分認同的一部分。

米開朗基羅的大衛像

在義大利佛羅倫斯，米開朗基羅的大衛像被視為世界上最偉大的藝術品之一。人們普遍認為它展現了理想中的人體體態。然而，這座完美的雕像，一開始使用的卻是一塊極不完美的大理石。

在米開朗基羅之前，另外兩位藝術家曾嘗試雕刻這塊巨大的大理石，但最終都放棄了。這塊石頭有損傷、難以塑形，而且太過狹窄。正因如此，米開朗基羅無法自由地將大衛雕塑成他想要的任何姿勢。這些限制，或許能解釋大衛像的幾項特徵。他的身形偏瘦，頭部也轉向一側，而非直視前方。甚至連雙腿之間的那道縫隙，很可能也是為了巧妙避開大理石中原有的一個孔洞而設計的。

米開朗基羅也仔細考量了從下方仰望雕像的視角，因為這座雕像原本計畫要立在高處。正因如此，有些身體部位被刻意放大，尤其是大衛的頭部與雙手。米開朗基羅對人體解剖學有著深厚的了解，因此這些比例，很可能是經過刻意設計，而非出於意外。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "nickname", pos: "v.", meaning: "給…取外號", collocations: "nicknamed it the Statue of Three Lies 給它取了個外號" },
        { id: 2, word: "benefactor", pos: "n.", meaning: "捐助者", collocations: "the first major benefactor 最早的主要捐助者" },
        { id: 3, word: "commission", pos: "v.", meaning: "委託製作", collocations: "commissioned by Carl Jacobsen 由卡爾·雅各布森委託製作" },
        { id: 4, word: "pose", pos: "v.", meaning: "擺姿勢", collocations: "refused to pose 拒絕擺姿勢" },
        { id: 5, word: "carve", pos: "v.", meaning: "雕刻", collocations: "carve the giant piece of marble 雕刻這塊巨大的大理石" },
        { id: 6, word: "anatomy", pos: "n.", meaning: "解剖學、人體構造", collocations: "understood anatomy very well 對人體解剖學有深厚了解" }
      ],
      grammarNotes: [
        { id: "G1", title: "so 引導結果子句", excerpt: "so the sculptor used a Harvard student, Sherman Hoar, as the model", analysis: "so 引導結果子句，表「因此」，說明因為沒有可靠肖像流傳，雕刻家因此改用哈佛學生作為模特兒。" },
        { id: "G2", title: "過去完成時（had + p.p.）", excerpt: "Before Michelangelo, two other artists had tried to", analysis: "過去完成時，表示在米開朗基羅之前，已經有兩位藝術家「曾經嘗試過」雕刻這塊大理石，是比過去時間點更早發生的動作。" }
      ],
      patternNotes: [
        { id: "P1", title: "For + N., S + V (就…而言)", excerpt: "For a quiet statue, it certainly tells quite a story", analysis: "For + 名詞，表「就…而言」，帶有對比意味，強調這座看似安靜的雕像背後卻藏著不少故事。" },
        { id: "P2", title: "not by accident (而非出於意外，加強語氣的否定補述)", excerpt: "these proportions were most likely added by design, not by accident", analysis: "not by accident 置於句尾補述，表「而非出於意外」，強調這些比例是刻意設計的結果。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Statues may seem silent, but funny stories, mistakes, and even lies sometimes hide behind those faces. Here are three world-famous statues and the secrets they carry!` }
        ],
        [
          { type: 'text', text: `John Harvard Statue\n\nAt Harvard University in Massachusetts, US, a bronze statue shows a man who sits calmly in a chair. The base reads: "JOHN HARVARD • FOUNDER • 1638." However, Harvard students have ` },
          { type: 'vocab', text: `nicknamed`, vid: 1 },
          { type: 'text', text: ` it the "Statue of Three Lies," and the reason comes from those very words.` }
        ],
        [
          { type: 'text', text: `The first lie is that it doesn't show John Harvard's real face. No reliable portrait of him survived, ` },
          { type: 'grammar', text: `so the sculptor used a Harvard student, Sherman Hoar, as the model`, gid: 'G1' },
          { type: 'text', text: `. The second lie appears in the word "founder." John Harvard didn't start the school. He was the first major ` },
          { type: 'vocab', text: `benefactor`, vid: 2 },
          { type: 'text', text: ` who left half of his money and about 400 books to the university. The final lie is the year 1638. That was the year John Harvard died, not the year the school was founded. ` },
          { type: 'pattern', text: `For a quiet statue, it certainly tells quite a story`, pid: 'P1' },
          { type: 'text', text: `!` }
        ],
        [
          { type: 'text', text: `The Little Mermaid\n\nIn Copenhagen, Denmark, The Little Mermaid rests on a rock by the water. This statue was inspired by Hans Christian Andersen's fairy tale of the same name. Today, it is one of the city's most famous landmarks.` }
        ],
        [
          { type: 'text', text: `The statue was ` },
          { type: 'vocab', text: `commissioned`, vid: 3 },
          { type: 'text', text: ` by Carl Jacobsen, a wealthy Danish brewer. After he watched a ballet that was based on The Little Mermaid, Jacobsen became deeply moved by the story. He wanted to capture the beauty of the lead ballerina, Ellen Price, in bronze. Although Price agreed to model for the statue's face, she refused to ` },
          { type: 'vocab', text: `pose`, vid: 4 },
          { type: 'text', text: ` without clothes. The sculptor, Edvard Eriksen, finished the statue in 1913. But to complete it, he had to ask his wife, Eline Eriksen, to model for the mermaid's body.` }
        ],
        [
          { type: 'text', text: `The Little Mermaid has not always had a peaceful life. Visitors may not realize the statue has been attacked many times, and that someone even cut off her head! However, the people of Copenhagen always fix her, because she is a part of who they are.` }
        ],
        [
          { type: 'text', text: `Michelangelo's David\n\nIn Florence, Italy, Michelangelo's David stands as one of the world's greatest artworks. People think it represents the ideal human body. However, this perfect statue began with a very imperfect piece of marble.` }
        ],
        [
          { type: 'grammar', text: `Before Michelangelo, two other artists had tried to`, gid: 'G2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `carve`, vid: 5 },
          { type: 'text', text: ` the giant piece of marble but eventually gave up. The stone was damaged, difficult to shape, and too narrow. Because of this, Michelangelo could not freely design David in any pose he wanted. These limits may explain several of David's features. The body is slim, and the head turns to the side instead of facing forward. Even the gap between the legs was likely a clever way to work around an existing hole in the marble.` }
        ],
        [
          { type: 'text', text: `Michelangelo also carefully considered the view from below because the statue was originally planned to stand high up. For this reason, some body parts were made larger than normal, especially David's head and hands. Michelangelo understood ` },
          { type: 'vocab', text: `anatomy`, vid: 6 },
          { type: 'text', text: ` very well, so ` },
          { type: 'pattern', text: `these proportions were most likely added by design, not by accident`, pid: 'P2' },
          { type: 'text', text: `.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Because he was so tall, his friends ______ him 'Giant'.", options: ["A. renamed", "B. forgot", "C. nicknamed", "D. introduced"], answer: "C", explanation: "【選項解析】\n- (A) renamed (v.) 重新命名\n- (B) forgot (v.) 忘記\n- (C) nicknamed (v.) 給…取外號 (正解)\n- (D) introduced (v.) 介紹" },
      { id: 2, question: "The wealthy ______ donated millions to build the new hospital wing.", options: ["A. benefactor", "B. patient", "C. visitor", "D. critic"], answer: "A", explanation: "【選項解析】\n- (A) benefactor (n.) 捐助者 (正解)\n- (B) patient (n.) 病人\n- (C) visitor (n.) 訪客\n- (D) critic (n.) 評論家" },
      { id: 3, question: "The models had to ______ perfectly still for the painting.", options: ["A. walk", "B. speak", "C. laugh", "D. pose"], answer: "D", explanation: "【選項解析】\n- (A) walk (v.) 走路\n- (B) speak (v.) 說話\n- (C) laugh (v.) 笑\n- (D) pose (v.) 擺姿勢 (正解)" },
      { id: 4, question: "The artist used a sharp tool to ______ the wooden figure.", options: ["A. paint", "B. carve", "C. wash", "D. fold"], answer: "B", explanation: "【選項解析】\n- (A) paint (v.) 繪畫\n- (B) carve (v.) 雕刻 (正解)\n- (C) wash (v.) 清洗\n- (D) fold (v.) 摺疊" },
    ],
    cloze: {
      text: "Many of the world's most famous statues carry stories [1] are far stranger than most visitors realize. Some monuments were built to honor someone who, in truth, never personally [2] the achievement written on their base. Others required models who were only willing to pose [3] certain conditions, leading sculptors to quietly combine features from more than one person. [4] a statue looks damaged or has been attacked over the years, local communities often insist on repairing it again and again. In the end, learning the true history behind a statue [5] often make it even more fascinating to look at.",
      questions: [
        { id: 1, options: ["A. who", "B. that", "C. whom", "D. whose"], answer: "B", explanation: "that 引導形容詞子句，修飾先行詞 stories，表「比遊客以為的更離奇的」故事。" },
        { id: 2, options: ["A. achieves", "B. achieving", "C. to achieve", "D. achieved"], answer: "D", explanation: "過去式 achieved，與 never 搭配表「從未親自達成」底座上所寫的成就。" },
        { id: 3, options: ["A. under", "B. on", "C. at", "D. by"], answer: "A", explanation: "under + 條件，表「在…條件下」，指模特兒只願意在特定條件下擺姿勢。" },
        { id: 4, options: ["A. Unless", "B. Because", "C. Even if", "D. So that"], answer: "C", explanation: "Even if 引導讓步子句，表「即使」，指即使雕像看起來受損或遭破壞，當地社區仍堅持修復。" },
        { id: 5, options: ["A. must", "B. can", "C. should", "D. will"], answer: "B", explanation: "can 表「可能、能夠」，指了解雕像背後的真實歷史，能讓它變得更引人入勝。" },
      ]
    },
    wordBank: {
      words: ["(A) bronze", "(B) commission", "(C) exhibit", "(D) landmark", "(E) marble", "(F) monument", "(G) portrait", "(H) restoration", "(I) sculptor", "(J) tribute"],
      passage: "Wealthy patrons throughout history have often paid to [1] a talented artist to create a lasting work of public art.\n\nMany famous statues are carved from solid blocks of [2], a material prized for its smooth, pale surface and durability.\n\nOthers are cast instead in [3], a metal alloy that can hold fine detail and survive outdoors for centuries.\n\nThe [4] responsible for shaping these works often spends years studying the human body before beginning the actual carving.\n\nSome cities build a towering [5] specifically to honor an important historical event or figure.\n\nOver time, a particularly famous statue can become a beloved [6], instantly recognizable to both locals and tourists alike.\n\nMuseums sometimes create a temporary [7] dedicated entirely to one artist's lifetime body of work.\n\nAn artist may also create a formal [8] of an important person, capturing their likeness in careful detail.\n\nWhen outdoor statues suffer damage from weather or vandalism, skilled teams undertake careful [9] work to return them to their original condition.\n\nSome newer statues are designed specifically as a [10] to someone the public deeply admires.",
      answers: { 1: "B", 2: "E", 3: "A", 4: "I", 5: "F", 6: "D", 7: "C", 8: "G", 9: "H", 10: "J" }
    },
    discourse: {
      options: [
        "A. A statue celebrating someone as a founder may actually honor a major donor instead, with the wording chosen more for tribute than strict accuracy.",
        "B. Some have been damaged or vandalized over the years, only to be lovingly restored again and again by the communities that cherish them.",
        "C. A model willing to pose for a statue's face sometimes refused to pose for the rest of the body.",
        "D. City officials have occasionally debated relocating famous statues to less crowded public squares.",
        "E. The final result blended two different people's features into what viewers assume is a single, unified figure."
      ],
      paragraphs: [
        "Statues look permanent and unchanging, but the stories behind how they were made are often far messier than visitors ever suspect.",
        "Some statues honor a person using inscriptions that aren't entirely accurate once historians dig into the details. [1]",
        "Other statues ran into trouble because the model originally chosen for the work had limits of their own. [2] Sculptors occasionally had to improvise, sometimes combining features from more than one real person into a single figure. [3]",
        "Even after completion, a famous statue's story doesn't always end peacefully. [4]"
      ],
      answers: { 1: "A", 2: "C", 3: "E", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. All famous statues accurately depict historical facts.", "B. Statues are never damaged or restored.", "C. Only Michelangelo's David has an interesting backstory.", "D. Many famous statues have surprising, lesser-known stories behind how they were made."], answer: "D", explanation: "主旨題。全文介紹三座世界知名雕像背後鮮為人知又令人意外的故事。" },
        { id: 2, question: "According to the article, why is the John Harvard statue nicknamed the \"Statue of Three Lies\"?", options: ["A. Because the face, the word 'founder,' and the year on the statue are all inaccurate.", "B. Because it was built using fake bronze.", "C. Because John Harvard never existed.", "D. Because it was originally built in a different country."], answer: "A", explanation: "細節題。文中指出雕像的臉、「創辦人」一詞與年份三處都與事實不符。" },
        { id: 3, question: "According to the article, why did sculptor Edvard Eriksen need two different models for The Little Mermaid?", options: ["A. Because Ellen Price was unavailable for the entire project.", "B. Because the statue was originally meant to have two heads.", "C. Because Ellen Price agreed to model for the face but refused to pose without clothes for the body.", "D. Because the original model moved to another country."], answer: "C", explanation: "細節題。文中指出普萊斯同意擔任臉部模特兒，但「refused to pose without clothes」。" },
        { id: 4, question: "What can be inferred about why Michelangelo's David has certain unusual proportions, such as a larger head and hands?", options: ["A. Michelangelo made a careless mistake while carving.", "B. Michelangelo deliberately adjusted the proportions because the statue was meant to be viewed from below.", "C. The marble block was too large for normal proportions.", "D. Michelangelo was inexperienced with human anatomy."], answer: "B", explanation: "推論題。文中指出米開朗基羅「carefully considered the view from below」，暗示這些比例是刻意設計的結果。" }
      ]
    }
  },

  "Unit 4": {
    title: "Sleep Banking: Saving Rest for Later",
    chineseTitle: "什麼是睡眠存款法？",
    passage: `Sleep matters for our health, mood, and brainpower. That's why when people don't get enough sleep, they feel exhausted, lose focus easily, and can't remember things well. While these problems affect people's daily lives, some researchers point to one possible way to help: sleep banking.

Sleep banking means getting extra sleep before a period of sleep loss begins. Similar to making a deposit into a savings account, people can build up more rest before they actually need it. To try sleep banking, people should start a few days before a sleep-loss period and change their bedtime gradually.

For example, students might know they have to stay up late for an important exam. In this case, they can start going to bed earlier about a week before the exam. Each night, they get one or two extra hours of sleep. According to research, people who "bank" sleep feel less tired and stay more alert when the busy days arrive.

Sleep banking is also controversial. Some researchers compare sleep to a piggy bank and believe people can save extra rest for later. Others think sleep is more like a credit card: you can build up "sleep debt" by sleeping too little. However, you cannot store extra sleep ahead of time.

While sleep banking may help some people, it is not suitable for everyone. People with insomnia especially need to be careful with this method. For them, staying in bed longer may not improve their sleep. Instead, it could make them feel more stressed when they're already struggling to fall asleep. Some researchers also remind people that sleep debt should be paid off as soon as possible.

Overall, sleep banking can be useful, but it works best only for short-term situations. It cannot replace a regular sleep schedule. Getting enough sleep each night is still important for long-term health.`,
    chineseTranslation: `睡眠對我們的健康、情緒與腦力都至關重要。這也是為什麼當人們睡眠不足時，會感到疲憊不堪、難以集中注意力，也記不住事情。雖然這些問題會影響人們的日常生活，但有些研究人員指出了一種可能有幫助的方法：睡眠存款法。

睡眠存款法指的是，在一段睡眠不足的時期開始之前，先多睡一些。就像把錢存進儲蓄帳戶一樣，人們可以在真正需要之前，先累積更多的休息。想嘗試睡眠存款法，應該在睡眠不足時期開始的前幾天，逐漸調整自己的睡覺時間。

舉例來說，學生可能知道自己必須為重要的考試熬夜。這種情況下，他們可以在考試前大約一週，就開始提早上床睡覺。每天晚上，多睡一到兩個小時。根據研究，那些事先「存」睡眠的人，在忙碌的日子來臨時，會感覺較不疲倦，也能保持更清醒的狀態。

睡眠存款法同時也存在爭議。有些研究人員將睡眠比喻為小豬撲滿，認為人們可以提前儲存多餘的休息。而另一些人則認為，睡眠更像是信用卡：睡得太少會累積出「睡眠債」，但你無法提前儲存多餘的睡眠。

雖然睡眠存款法可能對某些人有幫助，但並不適合每一個人。患有失眠症的人，尤其需要謹慎使用這個方法。對他們來說，待在床上更久的時間，未必能改善睡眠品質。相反地，在他們本來就難以入睡的情況下，這反而可能讓他們感覺更有壓力。有些研究人員也提醒，睡眠債應該盡快償還。

總體來說，睡眠存款法確實可能有用，但它只適用於短期的情況。它無法取代規律的睡眠習慣。每晚獲得充足的睡眠，對長期健康而言仍然至關重要。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "exhausted", pos: "adj.", meaning: "疲憊不堪的", collocations: "feel exhausted 感到疲憊不堪" },
        { id: 2, word: "gradually", pos: "adv.", meaning: "逐漸地", collocations: "change bedtime gradually 逐漸調整睡覺時間" },
        { id: 3, word: "alert", pos: "adj.", meaning: "警覺的、清醒的", collocations: "stay more alert 保持更清醒" },
        { id: 4, word: "controversial", pos: "adj.", meaning: "有爭議的", collocations: "also controversial 也存在爭議" },
        { id: 5, word: "insomnia", pos: "n.", meaning: "失眠症", collocations: "people with insomnia 患有失眠症的人" },
        { id: 6, word: "suitable", pos: "adj.", meaning: "適合的", collocations: "not suitable for everyone 不適合每個人" }
      ],
      grammarNotes: [
        { id: "G1", title: "when 引導時間子句", excerpt: "when people don't get enough sleep", analysis: "when 引導時間子句，表「當…時」，說明人們睡眠不足時所產生的影響。" },
        { id: "G2", title: "who 引導形容詞子句修飾人", excerpt: "who", analysis: "who 引導形容詞子句，修飾先行詞 people，表「事先『存』睡眠的」人。" }
      ],
      patternNotes: [
        { id: "P1", title: "Similar to + N./V-ing (類似於…)", excerpt: "Similar to making a deposit into a savings account, people can build up more rest before they actually need it", analysis: "Similar to + 動名詞片語，表「類似於…」，用儲蓄帳戶的比喻說明睡眠存款法的概念。" },
        { id: "P2", title: "as soon as possible (盡快)", excerpt: "as soon as possible", analysis: "as soon as possible 為固定片語，表「盡快」，強調睡眠債應及早償還。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Sleep matters for our health, mood, and brainpower. That's why ` },
          { type: 'grammar', text: `when people don't get enough sleep`, gid: 'G1' },
          { type: 'text', text: `, they feel ` },
          { type: 'vocab', text: `exhausted`, vid: 1 },
          { type: 'text', text: `, lose focus easily, and can't remember things well. While these problems affect people's daily lives, some researchers point to one possible way to help: sleep banking.` }
        ],
        [
          { type: 'text', text: `Sleep banking means getting extra sleep before a period of sleep loss begins. ` },
          { type: 'pattern', text: `Similar to making a deposit into a savings account, people can build up more rest before they actually need it`, pid: 'P1' },
          { type: 'text', text: `. To try sleep banking, people should start a few days before a sleep-loss period and change their bedtime ` },
          { type: 'vocab', text: `gradually`, vid: 2 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `For example, students might know they have to stay up late for an important exam. In this case, they can start going to bed earlier about a week before the exam. Each night, they get one or two extra hours of sleep. According to research, people ` },
          { type: 'grammar', text: `who`, gid: 'G2' },
          { type: 'text', text: ` "bank" sleep feel less tired and stay more ` },
          { type: 'vocab', text: `alert`, vid: 3 },
          { type: 'text', text: ` when the busy days arrive.` }
        ],
        [
          { type: 'text', text: `Sleep banking is also ` },
          { type: 'vocab', text: `controversial`, vid: 4 },
          { type: 'text', text: `. Some researchers compare sleep to a piggy bank and believe people can save extra rest for later. Others think sleep is more like a credit card: you can build up "sleep debt" by sleeping too little. However, you cannot store extra sleep ahead of time.` }
        ],
        [
          { type: 'text', text: `While sleep banking may help some people, it is not ` },
          { type: 'vocab', text: `suitable`, vid: 6 },
          { type: 'text', text: ` for everyone. People with ` },
          { type: 'vocab', text: `insomnia`, vid: 5 },
          { type: 'text', text: ` especially need to be careful with this method. For them, staying in bed longer may not improve their sleep. Instead, it could make them feel more stressed when they're already struggling to fall asleep. Some researchers also remind people that sleep debt should be paid off ` },
          { type: 'pattern', text: `as soon as possible`, pid: 'P2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Overall, sleep banking can be useful, but it works best only for short-term situations. It cannot replace a regular sleep schedule. Getting enough sleep each night is still important for long-term health.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "After the marathon, the runners looked completely ______.", options: ["A. curious", "B. relaxed", "C. amused", "D. exhausted"], answer: "D", explanation: "【選項解析】\n- (A) curious (adj.) 好奇的\n- (B) relaxed (adj.) 放鬆的\n- (C) amused (adj.) 感到好笑的\n- (D) exhausted (adj.) 疲憊不堪的 (正解)" },
      { id: 2, question: "The weather began to improve ______ over the following week.", options: ["A. gradually", "B. suddenly", "C. rarely", "D. accidentally"], answer: "A", explanation: "【選項解析】\n- (A) gradually (adv.) 逐漸地 (正解)\n- (B) suddenly (adv.) 突然地\n- (C) rarely (adv.) 很少地\n- (D) accidentally (adv.) 意外地" },
      { id: 3, question: "Coffee helps keep her ______ during the long night shift.", options: ["A. sleepy", "B. bored", "C. alert", "D. careless"], answer: "C", explanation: "【選項解析】\n- (A) sleepy (adj.) 想睡的\n- (B) bored (adj.) 感到無聊的\n- (C) alert (adj.) 警覺清醒的 (正解)\n- (D) careless (adj.) 粗心的" },
      { id: 4, question: "The new policy has become quite ______, with people strongly disagreeing about it.", options: ["A. simple", "B. controversial", "C. ordinary", "D. forgettable"], answer: "B", explanation: "【選項解析】\n- (A) simple (adj.) 簡單的\n- (B) controversial (adj.) 有爭議的 (正解)\n- (C) ordinary (adj.) 普通的\n- (D) forgettable (adj.) 容易被遺忘的" },
    ],
    cloze: {
      text: "Preparing for a period of limited sleep, such as finals week or a big trip, often works better [1] simply trying to catch up afterward. Sleep experts generally agree that gradually adjusting one's bedtime earlier for several nights can help the body build up a reserve of rest. [2] this approach cannot completely replace lost sleep later, it does seem to reduce feelings of exhaustion during a demanding stretch. Some researchers remain skeptical, [3] that sleep simply doesn't work the same way a bank account does. Still, nearly everyone agrees on one point: sleep debt, once accumulated, should be repaid [4] possible. [5] all, consistent, sufficient sleep each night remains the healthiest long-term strategy.",
      questions: [
        { id: 1, options: ["A. as", "B. with", "C. than", "D. for"], answer: "C", explanation: "better than 為比較句型，表「比…更好」，指提前準備比事後補救更有效。" },
        { id: 2, options: ["A. While", "B. Unless", "C. Because", "D. So"], answer: "A", explanation: "While 引導讓步子句，表「雖然」，與後句「確實能減少疲憊感」形成對比。" },
        { id: 3, options: ["A. argued", "B. to argue", "C. argue", "D. arguing"], answer: "D", explanation: "分詞構句表伴隨狀態，現在分詞 arguing，表「同時主張…」。" },
        { id: 4, options: ["A. by the time", "B. as soon as", "C. so far", "D. no longer"], answer: "B", explanation: "as soon as possible 為固定片語，表「盡快」，指睡眠債一旦累積應盡快償還。" },
        { id: 5, options: ["A. After", "B. Before", "C. Since", "D. Until"], answer: "A", explanation: "After all 為固定片語，表「畢竟」，用於總結全文論點。" },
      ]
    },
    wordBank: {
      words: ["(A) alertness", "(B) deprivation", "(C) drowsiness", "(D) fatigue", "(E) insomnia", "(F) recovery", "(G) regimen", "(H) restorative", "(I) schedule", "(J) sufficient"],
      passage: "Chronic sleep [1] can gradually weaken memory, mood, and even physical health over time.\n\nMany people struggling with [2] find it difficult to fall asleep even when they feel physically tired.\n\nConsistent [3] often shows up as yawning, slow reaction times, and difficulty concentrating throughout the day.\n\nGeneral [4], a heavier and more persistent kind of tiredness, can build up gradually over many sleepless nights.\n\nMaintaining a steady sleep [5], going to bed and waking up at roughly the same time daily, is one of the simplest ways to improve sleep quality.\n\nA strict nightly [6] that includes limiting screens and caffeine before bed can meaningfully improve how quickly someone falls asleep.\n\nMorning [7] often depends heavily on how much deep sleep a person got the night before.\n\nDeep, uninterrupted sleep is considered especially [8], helping the body repair tissue and consolidate memories.\n\nFull physical and mental [9] from a demanding week usually requires more than just one good night's sleep.\n\nExperts generally agree that adults need [10] sleep, typically around seven to nine hours, to function at their best.",
      answers: { 1: "B", 2: "E", 3: "C", 4: "D", 5: "I", 6: "G", 7: "A", 8: "H", 9: "F", 10: "J" }
    },
    discourse: {
      options: [
        "A. Some compare sleep instead to a credit card, arguing that lost sleep becomes a debt rather than something saved in advance.",
        "B. Students preparing for exam week or travelers facing a long flight are common examples of people who try this approach.",
        "C. It cannot replace a consistent, adequate sleep schedule as a long-term solution.",
        "D. Whether or not the underlying science is fully settled, the practical benefit seems real enough to many who try it.",
        "E. Sleep clinics have begun offering specialized consultations for patients hoping to prepare for unusually demanding schedules."
      ],
      paragraphs: [
        "Not all sleep strategies involve going to bed earlier every single night; some are designed specifically for temporary stretches of unavoidable sleep loss.",
        "One such strategy, often compared to making deposits into a savings account, involves gradually sleeping more in the days leading up to a known busy period. [1]",
        "Not every expert agrees that sleep actually works this way. [2] Despite the disagreement, many people who try the approach report feeling noticeably less exhausted during the demanding stretch itself. [3]",
        "Even supporters of the strategy admit it has clear limits. [4]"
      ],
      answers: { 1: "B", 2: "A", 3: "D", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Sleep banking can completely replace the need for regular sleep.", "B. Sleep banking has no effect on how people feel during busy periods.", "C. Sleep banking may help in the short term, but it cannot replace a regular, sufficient sleep schedule.", "D. Only people with insomnia should try sleep banking."], answer: "C", explanation: "主旨題。全文說明睡眠存款法在短期內可能有幫助，但無法取代規律充足的睡眠。" },
        { id: 2, question: "According to the article, how should someone try sleep banking before a busy period?", options: ["A. By gradually going to bed earlier a few days before the sleep-loss period.", "B. By sleeping as little as possible beforehand to get used to it.", "C. By taking medication to force extra sleep.", "D. By sleeping only on weekends before the busy period."], answer: "A", explanation: "細節題。文中指出應在睡眠不足時期前「change their bedtime gradually」。" },
        { id: 3, question: "According to the article, why do some researchers compare sleep to a credit card rather than a savings account?", options: ["A. Because sleep can be transferred between people like money.", "B. Because sleep banking requires a monthly fee.", "C. Because extra sleep can be withdrawn at any time.", "D. Because they believe you cannot store extra sleep ahead of time, only build up a debt by sleeping too little."], answer: "D", explanation: "細節題。文中指出「you cannot store extra sleep ahead of time」，只能透過睡得太少累積「睡眠債」。" },
        { id: 4, question: "What can be inferred about why people with insomnia are advised to be careful with sleep banking?", options: ["A. Because insomnia has no connection to sleep quality.", "B. Because staying in bed longer without actually sleeping could increase their stress rather than help them.", "C. Because insomnia only affects children.", "D. Because sleep banking is illegal for people with insomnia."], answer: "B", explanation: "推論題。文中指出對失眠者而言，待在床上更久「could make them feel more stressed」，暗示這反而可能造成負面影響。" }
      ]
    }
  },

  "Unit 5": {
    title: "Turning Steps into a Fresh Surprise with the Butter Run",
    chineseTitle: "跑步跑出奶油？燃燒熱量的新鮮挑戰",
    passage: `Do you want to exercise and make food at the same time? Meet the butter run! This playful challenge has drawn attention online because it lets runners burn calories while they churn some fresh butter.

The idea is simple. Runners pour heavy cream into a sealed container and carry it while they run. With each step, the up-and-down motion shakes the cream inside. This repeated shaking works like a butter churn. As the run goes on, fat molecules in the cream start to stick together. After a long run, the fat may separate out. The solid part becomes butter, and the liquid part becomes buttermilk.

However, not every butter run ends with perfect butter. The results can vary, depending on running distance, shaking intensity, and the cream's fat level. That makes opening the container feel like opening a blind box after each run.

By turning a regular run into something fun, the butter run may help people enjoy exercise more!`,
    chineseTranslation: `你想要同時運動又能做出食物嗎？認識一下「奶油跑」吧！這項趣味挑戰在網路上引起了關注，因為它讓跑者在燃燒卡路里的同時，還能攪打出新鮮的奶油。

概念很簡單。跑者將濃奶油倒入一個密封容器中，邊跑邊帶著它。每踏出一步，上下晃動的動作就會搖晃容器內的奶油。這種反覆的搖晃，作用就像一台奶油攪拌機。隨著跑步持續進行，奶油中的脂肪分子會開始互相黏合在一起。跑完一段長距離後，脂肪可能會分離出來。固體的部分就成了奶油，液體的部分則成了白脫牛奶（buttermilk）。

然而，並非每一次奶油跑都能做出完美的奶油。結果可能會有所不同，取決於跑步距離、搖晃強度，以及奶油本身的脂肪含量。這讓每次跑完打開容器，感覺就像打開一個驚喜盒（盲盒）一樣。

透過把一次普通的跑步變成一件有趣的事，奶油跑或許能幫助人們更享受運動！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "playful", pos: "adj.", meaning: "趣味的、嬉鬧的", collocations: "a playful challenge 一項趣味挑戰" },
        { id: 2, word: "churn", pos: "v.", meaning: "攪打、攪拌", collocations: "churn some fresh butter 攪打出新鮮奶油" },
        { id: 3, word: "separate", pos: "v.", meaning: "分離", collocations: "the fat may separate out 脂肪可能會分離出來" },
        { id: 4, word: "vary", pos: "v.", meaning: "有所不同、變化", collocations: "the results can vary 結果可能會有所不同" },
        { id: 5, word: "intensity", pos: "n.", meaning: "強度", collocations: "shaking intensity 搖晃強度" },
        { id: 6, word: "molecule", pos: "n.", meaning: "分子", collocations: "fat molecules 脂肪分子" }
      ],
      grammarNotes: [
        { id: "G1", title: "while 引導時間子句（表同時）", excerpt: "while they", analysis: "while 引導時間子句，表「當…的同時」，說明跑者在燃燒卡路里的同時也在攪打奶油。" },
        { id: "G2", title: "depending on + N. (分詞構句表條件)", excerpt: "depending on running distance, shaking", analysis: "depending on + 名詞，為分詞構句，表「取決於…」，說明結果會因不同條件而有所不同。" }
      ],
      patternNotes: [
        { id: "P1", title: "make + O + V (使役動詞)", excerpt: "That makes opening the container feel like opening a blind box after each run", analysis: "make + 受詞 + 原形動詞，表「使…感覺像…」，用開盲盒的比喻形容打開容器時的不確定感。" },
        { id: "P2", title: "By V-ing..., S + V (藉由…的方式)", excerpt: "By turning a regular run into something fun, the butter run may help people enjoy exercise more", analysis: "By + V-ing 片語，表「藉由…的方式」，說明奶油跑透過把跑步變得有趣，來幫助人們更享受運動。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Do you want to exercise and make food at the same time? Meet the butter run! This ` },
          { type: 'vocab', text: `playful`, vid: 1 },
          { type: 'text', text: ` challenge has drawn attention online because it lets runners burn calories ` },
          { type: 'grammar', text: `while they`, gid: 'G1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `churn`, vid: 2 },
          { type: 'text', text: ` some fresh butter.` }
        ],
        [
          { type: 'text', text: `The idea is simple. Runners pour heavy cream into a sealed container and carry it while they run. With each step, the up-and-down motion shakes the cream inside. This repeated shaking works like a butter churn. As the run goes on, fat ` },
          { type: 'vocab', text: `molecules`, vid: 6 },
          { type: 'text', text: ` in the cream start to stick together. After a long run, the fat may ` },
          { type: 'vocab', text: `separate`, vid: 3 },
          { type: 'text', text: ` out. The solid part becomes butter, and the liquid part becomes buttermilk.` }
        ],
        [
          { type: 'text', text: `However, not every butter run ends with perfect butter. The results can ` },
          { type: 'vocab', text: `vary`, vid: 4 },
          { type: 'text', text: `, ` },
          { type: 'grammar', text: `depending on running distance, shaking`, gid: 'G2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `intensity`, vid: 5 },
          { type: 'text', text: `, and the cream's fat level. ` },
          { type: 'pattern', text: `That makes opening the container feel like opening a blind box after each run`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'pattern', text: `By turning a regular run into something fun, the butter run may help people enjoy exercise more`, pid: 'P2' },
          { type: 'text', text: `!` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The puppy's ______ behavior made everyone laugh.", options: ["A. playful", "B. serious", "C. aggressive", "D. nervous"], answer: "A", explanation: "【選項解析】\n- (A) playful (adj.) 嬉鬧的 (正解)\n- (B) serious (adj.) 嚴肅的\n- (C) aggressive (adj.) 有攻擊性的\n- (D) nervous (adj.) 緊張的" },
      { id: 2, question: "Farmers once had to ______ cream by hand to make butter.", options: ["A. boil", "B. freeze", "C. churn", "D. slice"], answer: "C", explanation: "【選項解析】\n- (A) boil (v.) 煮沸\n- (B) freeze (v.) 冷凍\n- (C) churn (v.) 攪打 (正解)\n- (D) slice (v.) 切片" },
      { id: 3, question: "Oil and water naturally ______ when left to sit.", options: ["A. combine", "B. dissolve", "C. mix", "D. separate"], answer: "D", explanation: "【選項解析】\n- (A) combine (v.) 結合\n- (B) dissolve (v.) 溶解\n- (C) mix (v.) 混合\n- (D) separate (v.) 分離 (正解)" },
      { id: 4, question: "Prices at the market ______ depending on the season.", options: ["A. remain", "B. vary", "C. disappear", "D. multiply"], answer: "B", explanation: "【選項解析】\n- (A) remain (v.) 保持\n- (B) vary (v.) 有所不同 (正解)\n- (C) disappear (v.) 消失\n- (D) multiply (v.) 增加" },
    ],
    cloze: {
      text: "Social media has helped turn ordinary exercise routines [1] playful challenges that combine fitness with unexpected results. Some of these trends ask participants to carry an object [2] they run, allowing the motion itself to transform the object somehow. [3] the exact outcome often depends on factors like distance and intensity, part of the fun comes from not knowing exactly what you'll get. Participants often film themselves [4] the container at the end, turning the reveal into its own form of entertainment. Ultimately, trends like this succeed [5] they make a familiar activity feel new and a little unpredictable.",
      questions: [
        { id: 1, options: ["A. with", "B. for", "C. at", "D. into"], answer: "D", explanation: "turn A into B 為固定搭配，表「將A轉變成B」，指把日常運動變成趣味挑戰。" },
        { id: 2, options: ["A. while", "B. unless", "C. although", "D. despite"], answer: "A", explanation: "while 引導時間子句，表「當…的同時」，指參與者跑步時同時攜帶物品。" },
        { id: 3, options: ["A. Unless", "B. Because", "C. Although", "D. So"], answer: "C", explanation: "Although 引導讓步子句，表「雖然」，與後句「樂趣來自於不確定性」形成對比。" },
        { id: 4, options: ["A. open", "B. opening", "C. opened", "D. to open"], answer: "B", explanation: "動名詞 opening 作 film themselves 的受詞補語，表「拍下自己打開容器的過程」。" },
        { id: 5, options: ["A. because", "B. unless", "C. although", "D. despite"], answer: "A", explanation: "because 引導原因子句，表「因為」，說明這類趨勢之所以成功的原因。" },
      ]
    },
    wordBank: {
      words: ["(A) churn", "(B) consistency", "(C) culture", "(D) curdle", "(E) dairy", "(F) ferment", "(G) homemade", "(H) molecule", "(I) separation", "(J) texture"],
      passage: "Traditional [1] products such as milk, cream, and cheese have been part of human diets for thousands of years.\n\nTo make butter at home, people once had to [2] cream by hand for a long period of time.\n\nDuring this process, fat [3]s inside the cream gradually stick together and form small clumps.\n\nEventually, a clear [4] occurs between the solid fat and the remaining liquid.\n\nThe liquid left behind after this process is known as buttermilk, which has its own tangy [5].\n\nSome dairy products are intentionally allowed to [6], developing a sour taste through the action of specific bacteria.\n\nIf milk is heated improperly, it may unexpectedly [7], separating into clumps and watery liquid.\n\nA good [8] starter, a small amount of living bacteria, is essential for producing yogurt or certain cheeses.\n\nMany people enjoy making [9] dairy products at home, even though the process can take considerable time and effort.\n\nThe final [10] of butter, whether smooth or slightly grainy, often depends on how thoroughly the cream was churned.",
      answers: { 1: "E", 2: "A", 3: "H", 4: "I", 5: "J", 6: "F", 7: "D", 8: "C", 9: "G", 10: "B" }
    },
    discourse: {
      options: [
        "A. Running distance, shaking intensity, and the cream's fat content can all change the final result.",
        "B. Hand-churning cream into butter traditionally required many minutes of steady, repetitive motion.",
        "C. Checking the container afterward has been compared to opening a surprise box, since no one knows exactly what they'll find.",
        "D. Online fitness communities have started sharing their own variations on the original challenge.",
        "E. Nutritionists note that homemade butter is not necessarily healthier than store-bought varieties."
      ],
      paragraphs: [
        "Fitness trends occasionally borrow ideas from completely unrelated activities, and the butter run is a good example of just how strange that mix can get.",
        "The challenge works by combining a basic physical motion with a simple kitchen process that normally takes much longer. [1]",
        "Carrying a sealed container of cream while running provides exactly the kind of repeated shaking that butter-making traditionally requires. [2] The outcome isn't always guaranteed, since several variables affect how much butter actually forms. [3]",
        "Part of the appeal seems to come from this very uncertainty. [4]"
      ],
      answers: { 1: "B", 2: "D", 3: "A", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. The butter run always produces perfect butter.", "B. The butter run is a playful fitness challenge that combines running with making butter.", "C. The butter run requires special professional equipment.", "D. The butter run has no connection to exercise at all."], answer: "B", explanation: "主旨題。全文介紹奶油跑這項結合跑步與製作奶油的趣味健身挑戰。" },
        { id: 2, question: "According to the article, what happens to the cream during a butter run?", options: ["A. It freezes solid from the cold air.", "B. It immediately turns into cheese.", "C. It evaporates completely during the run.", "D. The shaking motion causes fat molecules to stick together and eventually separate from the liquid."], answer: "D", explanation: "細節題。文中指出奶油中的脂肪分子「start to stick together」，最終「the fat may separate out」。" },
        { id: 3, question: "According to the article, what factors affect the results of a butter run?", options: ["A. Running distance, shaking intensity, and the cream's fat level.", "B. The runner's shoe brand and running speed only.", "C. The color of the container used.", "D. The time of day the run takes place."], answer: "A", explanation: "細節題。文中指出結果取決於「running distance, shaking intensity, and the cream's fat level」。" },
        { id: 4, question: "What can be inferred about why the article compares opening the container to opening a \"blind box\"?", options: ["A. Because runners are required to wear a blindfold.", "B. Because the container is always completely empty.", "C. Because the exact result of each butter run is unpredictable, like a surprise toy.", "D. Because the container cannot be opened until the next day."], answer: "C", explanation: "推論題。由於結果「can vary」且無法預測，這種不確定性正如打開盲盒一般。" }
      ]
    }
  },

  "Unit 6": {
    title: "More Than a Game: Cheering Culture in Taiwanese Baseball",
    chineseTitle: "應援聲起！啟動你的臺灣棒球魂",
    passage: `Baseball is one of the most popular sports in Taiwan. At every game, you can hear fans cheering. They keep the stadium alive by singing, shouting slogans, and moving with the music through almost every inning. Have you ever wondered how Taiwan's baseball cheering culture has developed into today's unique style? What makes it different from other countries?

Taiwan's baseball cheering culture has its roots in Japan. Japanese cheering feels more orderly: trumpets, drums, and steady clapping are what set the beat. A cheering leader also guides the crowd through team songs and short chants.

This organized cheering style is different from the usual way fans cheer in the US. There, the focus often stays on what happens on the field. While the game is going on, cheering loudly may draw people's attention away from the action on the field. The crowd often cheers only at big moments such as home runs.

A major turning point for Taiwan's baseball cheering came in 2013. The Taiwanese baseball team Lamigo Monkeys (now the Rakuten Monkeys) brought in cheering ideas from South Korea. Unlike Japan's baseball cheering, South Korea's features more electronic music, energetic dance moves, and cheerleading squads. As Lamigo's style grew in popularity, other baseball teams followed and added their own ideas.

Now, different teams and players have their signature cheering songs. There is also a clear divide between home and away fans. Home fans usually lead the loudest cheers, while away fans respond from their own cheering section. This creates a lively back-and-forth of sound.

Cheerleading squads are another key part of Taiwan's modern baseball culture. They lead dance routines and get the crowd excited. Thanks to them, many people who never watched baseball before now attend games.

Today, cheering has become central to Taiwan's baseball identity. It turns every game into a special shared moment for fans in the stands.`,
    chineseTranslation: `棒球是臺灣最受歡迎的運動之一。在每一場比賽中，你都能聽到球迷們的歡呼聲。他們透過唱歌、喊口號，以及幾乎每一局都跟著音樂擺動身體，讓整座球場活力十足。你是否曾好奇，臺灣的棒球應援文化是如何發展成今天這種獨特風格的？它與其他國家又有什麼不同呢？

臺灣的棒球應援文化源自於日本。日本的應援方式顯得更有條理：喇叭、鼓聲與穩定的拍手節奏，共同打出節拍。還有一位應援團長，會帶領全場唱團歌、喊簡短的口號。

這種有組織的應援風格，與美國球迷常見的應援方式有所不同。在美國，大家的注意力通常放在場上發生的事情上。當比賽正在進行時，大聲歡呼可能會把人們的注意力從場上動作上移開。觀眾通常只在重要時刻，例如全壘打發生時，才會歡呼。

2013年，臺灣棒球應援文化出現了一個重大的轉折點。臺灣的桃猿隊（Lamigo Monkeys，現為樂天桃猿）引進了來自南韓的應援點子。與日本的棒球應援不同，南韓的應援風格更強調電子音樂、充滿活力的舞蹈動作，以及應援女郎團隊。隨著Lamigo這種風格日益受歡迎，其他球隊也紛紛跟進，並加入自己的創意。

現在，不同球隊與球員都有各自的招牌應援歌。主隊與客隊球迷之間，也存在著明顯的分界。主隊球迷通常帶頭喊出最大聲的歡呼，而客隊球迷則會從自己的應援區回應。這創造出一種熱鬧的來回應援聲浪。

啦啦隊也是臺灣現代棒球文化中另一個關鍵的組成部分。她們帶領舞蹈動作，讓全場氣氛沸騰起來。多虧了她們，許多從未看過棒球的人，如今也開始走進球場觀賽。

如今，應援已成為臺灣棒球認同感的核心。它讓每一場比賽，都成為觀眾席上球迷們共同擁有的特別時刻。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "slogan", pos: "n.", meaning: "口號", collocations: "shouting slogans 喊口號" },
        { id: 2, word: "orderly", pos: "adj.", meaning: "有條理的", collocations: "feels more orderly 顯得更有條理" },
        { id: 3, word: "turning point", pos: "n.", meaning: "轉折點", collocations: "a major turning point 一個重大的轉折點" },
        { id: 4, word: "feature", pos: "v.", meaning: "以…為特色", collocations: "features more electronic music 更強調電子音樂" },
        { id: 5, word: "signature", pos: "adj.", meaning: "招牌的、標誌性的", collocations: "signature cheering songs 招牌應援歌" },
        { id: 6, word: "identity", pos: "n.", meaning: "認同感、身分", collocations: "Taiwan's baseball identity 臺灣棒球認同感" }
      ],
      grammarNotes: [
        { id: "G1", title: "While 引導時間子句（表進行中）", excerpt: "While the game is going on", analysis: "While 引導時間子句，表「當…正在進行時」，說明比賽進行中大聲歡呼可能分散注意力。" },
        { id: "G2", title: "while 引導對比子句", excerpt: "while away fans respond from their own cheering section", analysis: "while 引導對比子句，表「然而」，對比主隊與客隊球迷不同的應援方式。" }
      ],
      patternNotes: [
        { id: "P1", title: "Thanks to + N. (多虧了…)", excerpt: "Thanks to them, many people who never watched baseball before now attend games", analysis: "Thanks to + 名詞，表「多虧了…」，說明多虧啦啦隊，許多原本不看棒球的人也開始進場觀賽。" },
        { id: "P2", title: "Unlike + N., S + V (與…不同)", excerpt: "Unlike Japan's baseball cheering, South Korea's", analysis: "Unlike + 名詞，表「與…不同」，用於對比日本與南韓不同的應援風格。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Baseball is one of the most popular sports in Taiwan. At every game, you can hear fans cheering. They keep the stadium alive by singing, shouting ` },
          { type: 'vocab', text: `slogans`, vid: 1 },
          { type: 'text', text: `, and moving with the music through almost every inning. Have you ever wondered how Taiwan's baseball cheering culture has developed into today's unique style? What makes it different from other countries?` }
        ],
        [
          { type: 'text', text: `Taiwan's baseball cheering culture has its roots in Japan. Japanese cheering feels more ` },
          { type: 'vocab', text: `orderly`, vid: 2 },
          { type: 'text', text: `: trumpets, drums, and steady clapping are what set the beat. A cheering leader also guides the crowd through team songs and short chants.` }
        ],
        [
          { type: 'text', text: `This organized cheering style is different from the usual way fans cheer in the US. There, the focus often stays on what happens on the field. ` },
          { type: 'grammar', text: `While the game is going on`, gid: 'G1' },
          { type: 'text', text: `, cheering loudly may draw people's attention away from the action on the field. The crowd often cheers only at big moments such as home runs.` }
        ],
        [
          { type: 'text', text: `A major ` },
          { type: 'vocab', text: `turning point`, vid: 3 },
          { type: 'text', text: ` for Taiwan's baseball cheering came in 2013. The Taiwanese baseball team Lamigo Monkeys (now the Rakuten Monkeys) brought in cheering ideas from South Korea. ` },
          { type: 'pattern', text: `Unlike Japan's baseball cheering, South Korea's`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `features`, vid: 4 },
          { type: 'text', text: ` more electronic music, energetic dance moves, and cheerleading squads. As Lamigo's style grew in popularity, other baseball teams followed and added their own ideas.` }
        ],
        [
          { type: 'text', text: `Now, different teams and players have their ` },
          { type: 'vocab', text: `signature`, vid: 5 },
          { type: 'text', text: ` cheering songs. There is also a clear divide between home and away fans. Home fans usually lead the loudest cheers, ` },
          { type: 'grammar', text: `while away fans respond from their own cheering section`, gid: 'G2' },
          { type: 'text', text: `. This creates a lively back-and-forth of sound.` }
        ],
        [
          { type: 'text', text: `Cheerleading squads are another key part of Taiwan's modern baseball culture. They lead dance routines and get the crowd excited. ` },
          { type: 'pattern', text: `Thanks to them, many people who never watched baseball before now attend games`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Today, cheering has become central to Taiwan's baseball ` },
          { type: 'vocab', text: `identity`, vid: 6 },
          { type: 'text', text: `. It turns every game into a special shared moment for fans in the stands.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The company's new ______ appeared on billboards across the city.", options: ["A. recipe", "B. receipt", "C. document", "D. slogan"], answer: "D", explanation: "【選項解析】\n- (A) recipe (n.) 食譜\n- (B) receipt (n.) 收據\n- (C) document (n.) 文件\n- (D) slogan (n.) 口號 (正解)" },
      { id: 2, question: "The students lined up in an ______ fashion before entering the hall.", options: ["A. orderly", "B. chaotic", "C. careless", "D. random"], answer: "A", explanation: "【選項解析】\n- (A) orderly (adj.) 有條理的 (正解)\n- (B) chaotic (adj.) 混亂的\n- (C) careless (adj.) 粗心的\n- (D) random (adj.) 隨機的" },
      { id: 3, question: "The chef is famous for his ______ dessert, a chocolate souffle.", options: ["A. ordinary", "B. forgettable", "C. signature", "D. accidental"], answer: "C", explanation: "【選項解析】\n- (A) ordinary (adj.) 普通的\n- (B) forgettable (adj.) 容易被遺忘的\n- (C) signature (adj.) 招牌的 (正解)\n- (D) accidental (adj.) 意外的" },
      { id: 4, question: "Music plays an important role in shaping a country's cultural ______.", options: ["A. budget", "B. identity", "C. weather", "D. currency"], answer: "B", explanation: "【選項解析】\n- (A) budget (n.) 預算\n- (B) identity (n.) 認同感 (正解)\n- (C) weather (n.) 天氣\n- (D) currency (n.) 貨幣" },
    ],
    cloze: {
      text: "Fan culture at sporting events often reflects broader cultural values, [1] some countries favoring organized, rhythmic cheering while others prefer louder, more spontaneous reactions. In some stadiums, a dedicated cheer leader stands [2] the crowd through coordinated songs and chants throughout the entire game. [3] certain fans focus entirely on the action on the field, others treat the atmosphere in the stands as equally important as the game itself. Over time, teams sometimes borrow cheering styles from other countries, [4] their own traditions with fresh ideas from abroad. As a result, a single stadium's atmosphere can end up reflecting influences [5] several different cheering traditions at once.",
      questions: [
        { id: 1, options: ["A. for", "B. of", "C. with", "D. by"], answer: "C", explanation: "with + 獨立分詞構句，表「伴隨著…」，舉例說明不同國家偏好的應援風格。" },
        { id: 2, options: ["A. to lead", "B. leading", "C. led", "D. leads"], answer: "A", explanation: "stand to V. 表「站著做…」，不定詞表目的，指應援團長站著帶領全場。" },
        { id: 3, options: ["A. Unless", "B. Because", "C. So", "D. While"], answer: "D", explanation: "While 引導對比子句，表「然而」，對比不同球迷關注的重點。" },
        { id: 4, options: ["A. blend", "B. blending", "C. blended", "D. to blend"], answer: "B", explanation: "分詞構句表結果，現在分詞 blending，表「將自身傳統與國外新點子融合」。" },
        { id: 5, options: ["A. of", "B. for", "C. from", "D. with"], answer: "C", explanation: "influences from + N. 表「來自…的影響」，指球場氛圍反映了多種應援傳統的影響。" },
      ]
    },
    wordBank: {
      words: ["(A) anthem", "(B) atmosphere", "(C) chant", "(D) choreography", "(E) fanbase", "(F) rhythm", "(G) rival", "(H) spectator", "(I) stadium", "(J) unity"],
      passage: "A packed [1] filled with cheering fans can transform an ordinary game into an unforgettable experience.\n\nMany teams develop a signature [2], a short repeated phrase that fans shout together to show support.\n\nCheerleading squads often perform carefully planned [3], choreography that gets the entire crowd moving together in time.\n\nMaintaining a steady [4] through drums or clapping helps keep the whole section cheering in sync.\n\nSome teams even have their own official [5], a song played at key moments to rally fan spirits.\n\nEvery casual [6] in the stands contributes to the overall energy of the game, even without actively cheering.\n\nA loyal [7] that travels to away games often brings its own distinct section of noise and color.\n\nGames against a longtime [8] tend to draw especially large and enthusiastic crowds.\n\nShared chants and songs can create a powerful sense of [9] among strangers sitting side by side.\n\nUltimately, the overall [10] inside a stadium depends as much on the fans as on the players themselves.",
      answers: { 1: "I", 2: "C", 3: "D", 4: "F", 5: "A", 6: "H", 7: "E", 8: "G", 9: "J", 10: "B" }
    },
    discourse: {
      options: [
        "A. This orderly, rhythmic style stands in contrast to the more spontaneous cheering found in many American ballparks.",
        "B. That shift introduced livelier music, choreographed dance moves, and dedicated cheerleading squads to the stands.",
        "C. Many fans now say the energy in the stands is just as memorable as the game itself.",
        "D. Each team eventually developed its own identity, with home and away sections trading cheers back and forth.",
        "E. Some stadiums have also begun experimenting with giant video screens to display cheering lyrics for fans."
      ],
      paragraphs: [
        "Baseball stadiums around the world sound very different depending on where you are, and Taiwan's version has developed a flavor all its own.",
        "Early influences came primarily from Japan, where organized chants, drums, and a dedicated cheer leader keep the crowd moving in sync. [1]",
        "A major shift happened in 2013 when a local team began borrowing ideas from South Korean baseball instead. [2] Other teams soon followed, adding their own signature songs and cheering routines. [3]",
        "Today, the result is a cheering culture that blends several different traditions into something uniquely Taiwanese. [4]"
      ],
      answers: { 1: "A", 2: "B", 3: "D", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Taiwanese baseball cheering culture is identical to Japan's.", "B. Cheering has no real impact on Taiwan's baseball culture.", "C. Taiwan's baseball cheering culture developed a unique style by blending influences from Japan and South Korea.", "D. Cheerleading squads were banned from Taiwanese baseball stadiums in 2013."], answer: "C", explanation: "主旨題。全文說明臺灣棒球應援文化融合日本與南韓的影響，發展出獨特風格。" },
        { id: 2, question: "According to the article, what characterizes traditional Japanese baseball cheering?", options: ["A. Trumpets, drums, steady clapping, and a cheering leader guiding the crowd.", "B. Complete silence during the entire game.", "C. Fans cheering only during home runs.", "D. Electronic music and dance routines."], answer: "A", explanation: "細節題。文中指出日本應援風格包含「trumpets, drums, and steady clapping」，並由應援團長帶領。" },
        { id: 3, question: "According to the article, what happened in 2013 that changed Taiwan's baseball cheering culture?", options: ["A. Baseball was banned in Taiwan for one year.", "B. The Lamigo Monkeys team was disbanded.", "C. American cheering styles were officially adopted nationwide.", "D. The Lamigo Monkeys brought in cheering ideas from South Korea."], answer: "D", explanation: "細節題。文中指出2013年「Lamigo Monkeys brought in cheering ideas from South Korea」。" },
        { id: 4, question: "What can be inferred about why the article mentions cheerleading squads attracting new fans?", options: ["A. Cheerleading squads have completely replaced the game of baseball itself.", "B. The entertainment value of cheering and cheerleading can draw people to baseball who weren't originally interested in the sport itself.", "C. Cheerleading squads are only allowed to perform before the game starts.", "D. Baseball games in Taiwan no longer require cheerleading squads."], answer: "B", explanation: "推論題。文中指出多虧啦啦隊，「many people who never watched baseball before now attend games」。" }
      ]
    }
  },

  "News 2": {
    title: "Danjiang Bridge: A New Sight over the Tamsui River",
    chineseTitle: "淡江大橋通車！淡水河口新風景登場",
    passage: `After years of construction, the Danjiang Bridge was finally opened to the public in May. The new landmark stretches across the mouth of the Tamsui River, connecting Tamsui and Bali.

Designed by the world-famous ZHA (formerly known as Zaha Hadid Architects), the cable-stayed bridge uses just one tower instead of the usual two. This blocks less of the sky and helps preserve the sunset view over the Tamsui River. The impressive engineering achievement created the world's longest asymmetric bridge of its kind. Measuring about 920 meters (m) long, the Danjiang Bridge has a main span of 450m.

The bridge also solves a persistent traffic problem. Drivers no longer need to take a long detour to cross the river. Travel time between Tamsui and Bali can be shortened by about 25 minutes.

Pedestrians, cyclists, cars, and motorcycles are all allowed to use the bridge. The lane in the center of the bridge is reserved for a future light rail extension. However, the motorcycle lane has caused debate. Many riders say the space they can actually ride in is too narrow, raising safety concerns.

Nevertheless, the Danjiang Bridge marks significant progress in Taiwan's transport system. It not only shortens travel time but also gives the area a striking new landmark.`,
    chineseTranslation: `經過多年的施工，淡江大橋終於在五月正式對外開放。這座新地標橫跨淡水河口，將淡水與八里連接起來。

這座斜張橋由享譽國際的ZHA建築師事務所（前身為札哈·哈蒂建築師事務所）設計，僅使用一座橋塔，而非傳統常見的兩座。這樣的設計能遮擋較少的天空，有助於保留淡水河上的夕陽景致。這項令人驚豔的工程成就，打造出同類型中世界最長的不對稱橋梁。淡江大橋全長約920公尺，主跨距則為450公尺。

這座橋也解決了一個長期存在的交通問題。駕駛不再需要繞一大段遠路才能過河。淡水與八里之間的通勤時間，可以縮短約25分鐘。

行人、自行車騎士、汽車與機車都可以使用這座橋。橋面中央的車道，則保留給未來的輕軌延伸線使用。然而，機車道卻引發了爭議。許多騎士表示，他們實際能騎乘的空間太過狹窄，因而引發安全上的擔憂。

儘管如此，淡江大橋仍標誌著臺灣交通系統的重大進展。它不僅縮短了通勤時間，也為這個地區帶來了一座令人驚艷的新地標。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "stretch", pos: "v.", meaning: "延伸、橫跨", collocations: "stretches across the mouth 橫跨河口" },
        { id: 2, word: "preserve", pos: "v.", meaning: "保留、維護", collocations: "helps preserve the sunset view 有助於保留夕陽景致" },
        { id: 3, word: "asymmetric", pos: "adj.", meaning: "不對稱的", collocations: "the longest asymmetric bridge 最長的不對稱橋梁" },
        { id: 4, word: "persistent", pos: "adj.", meaning: "長期存在的", collocations: "a persistent traffic problem 長期存在的交通問題" },
        { id: 5, word: "detour", pos: "n.", meaning: "繞道、迂迴路線", collocations: "take a long detour 繞一大段遠路" },
        { id: 6, word: "striking", pos: "adj.", meaning: "令人驚艷的、顯著的", collocations: "a striking new landmark 令人驚艷的新地標" }
      ],
      grammarNotes: [
        { id: "G1", title: "分詞構句修飾名詞", excerpt: "Designed by the world-famous ZHA (formerly known as Zaha Hadid Architects)", analysis: "分詞構句（過去分詞 Designed 開頭），修飾主詞 the cable-stayed bridge，說明這座橋是由誰設計的。" },
        { id: "G2", title: "省略關係代詞的形容詞子句", excerpt: "the space they can actually ride in", analysis: "space 後方省略了受格關係代詞 that/which，完整為 the space that they can actually ride in，表「他們實際能騎乘的空間」。" }
      ],
      patternNotes: [
        { id: "P1", title: "not only...but also... (不僅…而且…)", excerpt: "It not only shortens travel time but also gives the area a", analysis: "not only A but also B 表「不僅…而且…」，並列說明這座橋帶來的兩項效益。" },
        { id: "P2", title: "分詞構句表附加說明", excerpt: "Measuring about 920 meters (m) long, the Danjiang Bridge has a main span of 450m", analysis: "分詞構句（現在分詞 Measuring 開頭），補充說明橋梁的長度數據。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `After years of construction, the Danjiang Bridge was finally opened to the public in May. The new landmark ` },
          { type: 'vocab', text: `stretches`, vid: 1 },
          { type: 'text', text: ` across the mouth of the Tamsui River, connecting Tamsui and Bali.` }
        ],
        [
          { type: 'grammar', text: `Designed by the world-famous ZHA (formerly known as Zaha Hadid Architects)`, gid: 'G1' },
          { type: 'text', text: `, the cable-stayed bridge uses just one tower instead of the usual two. This blocks less of the sky and helps ` },
          { type: 'vocab', text: `preserve`, vid: 2 },
          { type: 'text', text: ` the sunset view over the Tamsui River. The impressive engineering achievement created the world's longest ` },
          { type: 'vocab', text: `asymmetric`, vid: 3 },
          { type: 'text', text: ` bridge of its kind. ` },
          { type: 'pattern', text: `Measuring about 920 meters (m) long, the Danjiang Bridge has a main span of 450m`, pid: 'P2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The bridge also solves a ` },
          { type: 'vocab', text: `persistent`, vid: 4 },
          { type: 'text', text: ` traffic problem. Drivers no longer need to take a long ` },
          { type: 'vocab', text: `detour`, vid: 5 },
          { type: 'text', text: ` to cross the river. Travel time between Tamsui and Bali can be shortened by about 25 minutes.` }
        ],
        [
          { type: 'text', text: `Pedestrians, cyclists, cars, and motorcycles are all allowed to use the bridge. The lane in the center of the bridge is reserved for a future light rail extension. However, the motorcycle lane has caused debate. Many riders say ` },
          { type: 'grammar', text: `the space they can actually ride in`, gid: 'G2' },
          { type: 'text', text: ` is too narrow, raising safety concerns.` }
        ],
        [
          { type: 'text', text: `Nevertheless, the Danjiang Bridge marks significant progress in Taiwan's transport system. ` },
          { type: 'pattern', text: `It not only shortens travel time but also gives the area a`, pid: 'P1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `striking`, vid: 6 },
          { type: 'text', text: ` new landmark.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Museums work hard to ______ ancient artifacts for future generations.", options: ["A. destroy", "B. preserve", "C. sell", "D. ignore"], answer: "B", explanation: "【選項解析】\n- (A) destroy (v.) 摧毀\n- (B) preserve (v.) 保留 (正解)\n- (C) sell (v.) 出售\n- (D) ignore (v.) 忽略" },
      { id: 2, question: "Her face has a slightly ______ shape, with one side different from the other.", options: ["A. round", "B. square", "C. smooth", "D. asymmetric"], answer: "D", explanation: "【選項解析】\n- (A) round (adj.) 圓的\n- (B) square (adj.) 方的\n- (C) smooth (adj.) 平滑的\n- (D) asymmetric (adj.) 不對稱的 (正解)" },
      { id: 3, question: "Despite several warnings, the problem remained ______ for months.", options: ["A. persistent", "B. temporary", "C. rare", "D. forgotten"], answer: "A", explanation: "【選項解析】\n- (A) persistent (adj.) 長期存在的 (正解)\n- (B) temporary (adj.) 暫時的\n- (C) rare (adj.) 罕見的\n- (D) forgotten (adj.) 被遺忘的" },
      { id: 4, question: "The sunset over the ocean was absolutely ______.", options: ["A. boring", "B. ordinary", "C. striking", "D. forgettable"], answer: "C", explanation: "【選項解析】\n- (A) boring (adj.) 令人厭煩的\n- (B) ordinary (adj.) 普通的\n- (C) striking (adj.) 令人驚艷的 (正解)\n- (D) forgettable (adj.) 容易被遺忘的" },
    ],
    cloze: {
      text: "Modern bridge design increasingly balances function [1] visual appeal, since a well-placed landmark can boost tourism as much as it solves traffic problems. Engineers sometimes choose an unusual, asymmetric structure [2] of a traditional symmetrical one, often to preserve a scenic view that would otherwise be blocked. [3] completed, a striking new bridge can immediately become one of a city's most recognizable landmarks. Still, practical concerns [4] cyclist and motorcycle safety must be carefully addressed during the design process. In the end, a successful bridge manages to shorten travel time [5] adding genuine beauty to its surroundings.",
      questions: [
        { id: 1, options: ["A. for", "B. of", "C. with", "D. by"], answer: "C", explanation: "balance A with B 表「在A與B之間取得平衡」，指功能與視覺美感之間的平衡。" },
        { id: 2, options: ["A. instead", "B. despite", "C. because", "D. unless"], answer: "A", explanation: "instead of + N. 表「而非」，指工程師選擇不對稱結構，而非傳統對稱設計。" },
        { id: 3, options: ["A. Unless", "B. Although", "C. Because", "D. Once"], answer: "D", explanation: "Once + 過去分詞，為分詞構句的簡化形式，表「一旦完工」。" },
        { id: 4, options: ["A. despite", "B. regarding", "C. instead of", "D. because of"], answer: "B", explanation: "regarding + N. 表「關於」，指涉及自行車與機車安全的實際考量。" },
        { id: 5, options: ["A. despite", "B. unless", "C. while", "D. because"], answer: "C", explanation: "while 表「同時」，指成功的橋梁能在縮短通勤時間的同時，也為周邊環境增添美感。" },
      ]
    },
    wordBank: {
      words: ["(A) asymmetric", "(B) cable-stayed", "(C) commute", "(D) congestion", "(E) detour", "(F) infrastructure", "(G) landmark", "(H) pedestrian", "(I) span", "(J) tower"],
      passage: "Investing in modern [1] such as roads, bridges, and rail lines can significantly improve daily life in a growing city.\n\nTraffic [2] during rush hour often forces drivers to spend far longer on the road than necessary.\n\nWithout a direct route, residents sometimes must take a long [3] simply to reach the other side of a river.\n\nA [4] bridge design uses strong cables anchored to one or more towers to support the roadway below.\n\nUnlike a traditional design with two matching towers, some newer bridges use a bold [5] layout with just one.\n\nThe main [6] of a bridge, the longest unsupported section between supports, is often the most technically challenging part to build.\n\nA single tall [7] rising from the center of a bridge can become a dramatic visual feature on its own.\n\nWell-designed bridges also include a safe, separated path for every [8] crossing on foot.\n\nOnce finished, an especially striking bridge often becomes an unofficial [9], attracting photographers and tourists alike.\n\nFor many residents, a faster bridge crossing can meaningfully shorten their daily [10] to work or school.",
      answers: { 1: "F", 2: "D", 3: "E", 4: "B", 5: "A", 6: "I", 7: "J", 8: "H", 9: "G", 10: "C" }
    },
    discourse: {
      options: [
        "A. Commuters who once needed a lengthy detour can now cross directly, cutting travel time significantly.",
        "B. Some motorcyclists have complained that their designated lane feels uncomfortably narrow for everyday use.",
        "C. Engineers chose this unusual design specifically to avoid blocking the area's famous sunset views.",
        "D. Faster travel times and a dramatic new landmark seem to outweigh the lingering complaints for most people.",
        "E. City officials have promised to review lighting along the bridge after dark."
      ],
      paragraphs: [
        "Major infrastructure projects rarely satisfy every single stakeholder, and a newly opened bridge connecting two riverside towns is no exception.",
        "The design itself drew attention immediately, favoring a single tall tower over the more traditional two-tower layout. [1]",
        "Beyond its striking appearance, the bridge was built to solve a long-standing traffic problem between the two communities. [2] Not every feature of the new crossing has been welcomed equally, however. [3]",
        "Even with these concerns, most residents view the project as a clear step forward. [4]"
      ],
      answers: { 1: "C", 2: "A", 3: "B", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. The Danjiang Bridge was built only for pedestrians.", "B. The Danjiang Bridge is a striking new landmark that also solves a traffic problem, though its motorcycle lane has sparked some debate.", "C. The Danjiang Bridge has been permanently closed due to safety issues.", "D. The Danjiang Bridge was designed with two towers like most cable-stayed bridges."], answer: "B", explanation: "主旨題。全文說明淡江大橋既是醒目新地標，也解決了交通問題，但機車道設計也引發爭議。" },
        { id: 2, question: "According to the article, why does the Danjiang Bridge use only one tower instead of two?", options: ["A. To save money on construction materials.", "B. Because two towers were structurally impossible to build.", "C. To allow for a wider motorcycle lane.", "D. To block less of the sky and help preserve the sunset view."], answer: "D", explanation: "細節題。文中指出單塔設計「blocks less of the sky and helps preserve the sunset view」。" },
        { id: 3, question: "According to the article, how much can the bridge shorten travel time between Tamsui and Bali?", options: ["A. About 25 minutes.", "B. About 2 hours.", "C. About 5 minutes.", "D. About 90 minutes."], answer: "A", explanation: "細節題。文中明確指出通勤時間「can be shortened by about 25 minutes」。" },
        { id: 4, question: "What can be inferred about why the article mentions the lane reserved for a future light rail extension?", options: ["A. The bridge currently has no other lanes available for vehicles.", "B. Light rail service already operates on the bridge today.", "C. City planners designed the bridge with future transportation expansion in mind, not just current traffic needs.", "D. The light rail lane will never actually be used."], answer: "C", explanation: "推論題。保留輕軌車道的設計，暗示城市規劃者已將未來交通擴展需求納入考量。" }
      ]
    }
  },

  "Unit 7": {
    title: "The Hands That Built Today: Tales of Forgotten Jobs",
    chineseTitle: "歷史的餘音 被時代遺忘的職業",
    passage: `How did people live without today's technology? Many special workers once played an important role in solving everyday problems, though their jobs no longer exist today.

Lamplighter

In the 1800s, many cities in Europe and North America were lit by gas lamps. Every evening, lamplighters would walk through town with a long pole and a ladder. One by one, they lit the lamps by hand. At dawn, they returned to put the flames out. As electric streetlights became common by the early 1900s, the job gradually disappeared.

Knocker-Upper

During the Industrial Revolution in the 1800s, factory workers in Britain and Ireland could lose their jobs for waking up late. However, alarm clocks were expensive and often unreliable. To solve this problem, people hired knocker-uppers. Knocker-uppers would use a long stick to tap on windows. They had to keep tapping until the person got up. Some knocker-uppers were more creative—they shot dried peas at their clients' windows! The job disappeared as cheap alarm clocks became common in the 20th century.

Resurrectionist

In the 1700s and early 1800s, medical schools in Britain and Ireland needed bodies for anatomy lessons. However, there were not enough bodies they could legally use. Because of this, some people secretly dug up recently buried bodies and sold them to medical schools. These people were known as resurrectionists. In 1832, new laws provided medical schools with a legal supply of bodies, so the trade came to an end.

Switchboard Operator

In the early days of the telephone, callers needed switchboard operators to connect their phone calls. These operators sat in front of a large board with hundreds of small holes, or "jacks." Each jack belonged to a customer. When a call came in, the operator would ask, "Number, please?" and use a cord to connect the two jacks. However, as telephone systems became automatic, machines began taking over this work.

These examples show how jobs change with technology, laws, and social needs. Perhaps one day, some of today's jobs will also become stories from the past.`,
    chineseTranslation: `在沒有今日科技的時代，人們是怎麼生活的？過去曾有許多特殊的工作者，在解決日常問題上扮演重要角色，儘管他們的工作如今已不復存在。

點燈人

1800年代，歐洲與北美的許多城市都以煤氣燈照明。每天傍晚，點燈人會帶著長竿與梯子走遍城鎮，一盞接一盞地親手點亮街燈。到了黎明，他們再回來把火熄滅。隨著電力路燈在1900年代初期逐漸普及，這份工作也慢慢消失了。

叫醒人

1800年代工業革命期間，英國與愛爾蘭的工廠工人可能因為睡過頭而丟掉工作。然而，鬧鐘不但昂貴，而且常常不可靠。為了解決這個問題，人們會雇用「叫醒人」。叫醒人會用一根長棍敲打窗戶，而且必須一直敲到對方起床為止。有些叫醒人更有創意——他們會用乾豌豆射向客戶的窗戶！隨著便宜的鬧鐘在20世紀普及，這份工作也跟著消失了。

盜屍人

1700年代到1800年代初期，英國與愛爾蘭的醫學院需要遺體來上解剖課。然而，能合法使用的遺體並不夠。因此，有些人會偷偷挖出剛下葬的遺體，再賣給醫學院。這些人被稱為「盜屍人」（resurrectionists）。1832年，新的法律讓醫學院得以合法取得遺體，這門生意也就此告終。

電話接線生

在電話剛問世的年代，撥打電話的人需要接線生來幫忙接通。這些接線生坐在一塊有著數百個小孔（也就是「插孔」）的大型交換台前，每個插孔都對應一位用戶。電話打進來時，接線生會問：「請問號碼？」然後用一條線把兩個插孔接起來。然而，隨著電話系統走向自動化，機器開始取代了這份工作。

這些例子說明了工作如何隨著科技、法律與社會需求而改變。或許有一天，今日的某些工作也會成為過去的故事。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "unreliable", pos: "adj.", meaning: "不可靠的", collocations: "expensive and often unreliable 昂貴又常常不可靠" },
        { id: 2, word: "client", pos: "n.", meaning: "客戶", collocations: "their clients' windows 客戶的窗戶" },
        { id: 3, word: "legally", pos: "adv.", meaning: "合法地", collocations: "bodies they could legally use 能合法使用的遺體" },
        { id: 4, word: "supply", pos: "n.", meaning: "供應", collocations: "a legal supply of bodies 合法的遺體來源" },
        { id: 5, word: "operator", pos: "n.", meaning: "接線生、操作員", collocations: "switchboard operators 電話接線生" },
        { id: 6, word: "automatic", pos: "adj.", meaning: "自動的", collocations: "became automatic 走向自動化" }
      ],
      grammarNotes: [
        { id: "G1", title: "would + VR 表過去的習慣", excerpt: "lamplighters would walk through town with a long pole and a ladder", analysis: "would + 原形動詞，可表示過去經常、習慣性的動作，指點燈人每天傍晚都會走遍城鎮。" },
        { id: "G2", title: "keep + V-ing / until 引導時間子句", excerpt: "They had to keep tapping until the person got up", analysis: "keep + V-ing 表「持續做…」；until 引導時間子句，表「直到…為止」，指一直敲到對方起床。" }
      ],
      patternNotes: [
        { id: "P1", title: "As + S + V (隨著…)", excerpt: "As electric streetlights became common by the early 1900s", analysis: "As 引導副詞子句，表「隨著…」，說明電力路燈普及後，點燈人這份工作逐漸消失。" },
        { id: "P2", title: "provide A with B (提供A某物B)", excerpt: "provided medical schools with a legal", analysis: "provide + 人/機構 + with + 物，表「提供…給…」，指新法讓醫學院能合法取得遺體。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `How did people live without today's technology? Many special workers once played an important role in solving everyday problems, though their jobs no longer exist today.` }
        ],
        [
          { type: 'text', text: `Lamplighter\n\nIn the 1800s, many cities in Europe and North America were lit by gas lamps. Every evening, ` },
          { type: 'grammar', text: `lamplighters would walk through town with a long pole and a ladder`, gid: 'G1' },
          { type: 'text', text: `. One by one, they lit the lamps by hand. At dawn, they returned to put the flames out. ` },
          { type: 'pattern', text: `As electric streetlights became common by the early 1900s`, pid: 'P1' },
          { type: 'text', text: `, the job gradually disappeared.` }
        ],
        [
          { type: 'text', text: `Knocker-Upper\n\nDuring the Industrial Revolution in the 1800s, factory workers in Britain and Ireland could lose their jobs for waking up late. However, alarm clocks were expensive and often ` },
          { type: 'vocab', text: `unreliable`, vid: 1 },
          { type: 'text', text: `. To solve this problem, people hired knocker-uppers. Knocker-uppers would use a long stick to tap on windows. ` },
          { type: 'grammar', text: `They had to keep tapping until the person got up`, gid: 'G2' },
          { type: 'text', text: `. Some knocker-uppers were more creative—they shot dried peas at their ` },
          { type: 'vocab', text: `clients'`, vid: 2 },
          { type: 'text', text: ` windows! The job disappeared as cheap alarm clocks became common in the 20th century.` }
        ],
        [
          { type: 'text', text: `Resurrectionist\n\nIn the 1700s and early 1800s, medical schools in Britain and Ireland needed bodies for anatomy lessons. However, there were not enough bodies they could ` },
          { type: 'vocab', text: `legally`, vid: 3 },
          { type: 'text', text: ` use. Because of this, some people secretly dug up recently buried bodies and sold them to medical schools. These people were known as resurrectionists. In 1832, new laws ` },
          { type: 'pattern', text: `provided medical schools with a legal`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `supply`, vid: 4 },
          { type: 'text', text: ` of bodies, so the trade came to an end.` }
        ],
        [
          { type: 'text', text: `Switchboard Operator\n\nIn the early days of the telephone, callers needed switchboard ` },
          { type: 'vocab', text: `operators`, vid: 5 },
          { type: 'text', text: ` to connect their phone calls. These operators sat in front of a large board with hundreds of small holes, or "jacks." Each jack belonged to a customer. When a call came in, the operator would ask, "Number, please?" and use a cord to connect the two jacks. However, as telephone systems became ` },
          { type: 'vocab', text: `automatic`, vid: 6 },
          { type: 'text', text: `, machines began taking over this work.` }
        ],
        [
          { type: 'text', text: `These examples show how jobs change with technology, laws, and social needs. Perhaps one day, some of today's jobs will also become stories from the past.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The old bus schedule was so ______ that nobody trusted it.", options: ["A. accurate", "B. punctual", "C. unreliable", "D. convenient"], answer: "C", explanation: "【選項解析】\n- (A) accurate (adj.) 準確的\n- (B) punctual (adj.) 準時的\n- (C) unreliable (adj.) 不可靠的 (正解)\n- (D) convenient (adj.) 方便的" },
      { id: 2, question: "The lawyer met with her ______ to discuss the case.", options: ["A. client", "B. rival", "C. stranger", "D. judge"], answer: "A", explanation: "【選項解析】\n- (A) client (n.) 客戶 (正解)\n- (B) rival (n.) 對手\n- (C) stranger (n.) 陌生人\n- (D) judge (n.) 法官" },
      { id: 3, question: "In Taiwan, people can ______ vote once they turn 18.", options: ["A. hardly", "B. secretly", "C. rarely", "D. legally"], answer: "D", explanation: "【選項解析】\n- (A) hardly (adv.) 幾乎不\n- (B) secretly (adv.) 秘密地\n- (C) rarely (adv.) 很少\n- (D) legally (adv.) 合法地 (正解)" },
      { id: 4, question: "The doors are ______ and open as soon as you approach.", options: ["A. broken", "B. automatic", "C. manual", "D. heavy"], answer: "B", explanation: "【選項解析】\n- (A) broken (adj.) 壞掉的\n- (B) automatic (adj.) 自動的 (正解)\n- (C) manual (adj.) 手動的\n- (D) heavy (adj.) 沉重的" },
    ],
    cloze: {
      text: "Many jobs that once seemed essential have disappeared [1] technology changed the way people live. Before electric lights, workers walked through towns every evening [2] light street lamps by hand. Factory workers who could not afford reliable alarm clocks depended [3] people who tapped on their windows each morning. [4] new machines and laws made these services unnecessary, the jobs gradually faded away. Thinking about these lost professions reminds us that many of today's jobs could one day become history [5].",
      questions: [
        { id: 1, options: ["A. unless", "B. although", "C. as", "D. despite"], answer: "C", explanation: "as 引導副詞子句，表「隨著…」，指隨著科技改變生活方式，許多工作跟著消失。" },
        { id: 2, options: ["A. to", "B. for", "C. by", "D. with"], answer: "A", explanation: "不定詞 to + VR 表目的，指工人走遍城鎮是「為了」點亮街燈。" },
        { id: 3, options: ["A. at", "B. in", "C. for", "D. on"], answer: "D", explanation: "depend on + N. 為固定搭配，表「依賴…」。" },
        { id: 4, options: ["A. Unless", "B. Once", "C. Even though", "D. Before"], answer: "B", explanation: "Once 引導時間子句，表「一旦」，指新機器與法律讓這些服務變得多餘後，工作就逐漸消失。" },
        { id: 5, options: ["A. as well", "B. instead", "C. either", "D. at all"], answer: "A", explanation: "as well 置於句尾表「也」，用於肯定句；either 只用於否定句，故選 as well。" },
      ]
    },
    wordBank: {
      words: ["(A) apprentice", "(B) craft", "(C) livelihood", "(D) mechanize", "(E) obsolete", "(F) occupation", "(G) profession", "(H) replace", "(I) trade", "(J) wage"],
      passage: "Throughout history, countless people earned their [1] through jobs that no longer exist today.\n\nSome of these jobs required years of training as an [2] under an experienced master.\n\nOthers needed little training but demanded long hours for a very low [3].\n\nAs new inventions appeared, many once-common jobs gradually became [4].\n\nFactories began to [5] tasks that had always been done by hand.\n\nIn many cases, a single machine could [6] the work of dozens of people.\n\nSome workers moved into a new [7], learning skills that matched the changing economy.\n\nTraditional handmade goods remain valued today as a skilled [8] passed down through generations.\n\nCertain jobs, such as medicine or law, developed into a respected [9] with strict training requirements.\n\nEven a secret, illegal [10], like selling bodies to medical schools, could end once new laws were passed.",
      answers: { 1: "C", 2: "A", 3: "J", 4: "E", 5: "D", 6: "H", 7: "F", 8: "B", 9: "G", 10: "I" }
    },
    discourse: {
      options: [
        "A. Knocker-uppers, for example, woke factory workers who could not afford dependable alarm clocks.",
        "B. These lamplighters returned at dawn to put out the flames before the city woke up.",
        "C. Some resurrectionists secretly dug up bodies to sell to medical schools until new laws ended the practice.",
        "D. One method involved shooting dried peas at windows rather than tapping with a long stick.",
        "E. Many museums now hold exhibitions dedicated to the history of street lighting."
      ],
      paragraphs: [
        "Many jobs that people once depended on every day have quietly vanished from modern life.",
        "Before electric streetlights, city streets relied on workers who lit each lamp by hand. [1]",
        "Other jobs existed simply because the technology of the time was unreliable or too expensive. [2] Some workers even found creative ways to do their jobs more efficiently. [3]",
        "Not every forgotten job was respectable, however. [4]"
      ],
      answers: { 1: "B", 2: "A", 3: "D", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Modern jobs are more difficult than old jobs.", "B. Lamplighters were the most important workers in history.", "C. Many jobs that were once important disappeared as technology, laws, and social needs changed.", "D. Alarm clocks were invented by knocker-uppers."], answer: "C", explanation: "主旨題。全文介紹幾種曾經重要、但隨著科技、法律與社會需求改變而消失的職業。" },
        { id: 2, question: "According to the article, why did people hire knocker-uppers?", options: ["A. Alarm clocks were expensive and often unreliable.", "B. Factories required workers to arrive at night.", "C. Street lamps went out every morning.", "D. Laws banned the use of alarm clocks."], answer: "A", explanation: "細節題。文中指出「alarm clocks were expensive and often unreliable」，因此人們雇用叫醒人。" },
        { id: 3, question: "According to the article, what ended the resurrectionist trade?", options: ["A. Medical schools closed down.", "B. Bodies became too expensive to buy.", "C. Workers refused to continue the job.", "D. New laws in 1832 gave medical schools a legal supply of bodies."], answer: "D", explanation: "細節題。文中指出1832年新法「provided medical schools with a legal supply of bodies」。" },
        { id: 4, question: "What does the author suggest in the last paragraph?", options: ["A. Today's jobs will never change.", "B. Some of today's jobs may also disappear in the future.", "C. Old jobs should be brought back.", "D. Technology always removes more jobs than it creates."], answer: "B", explanation: "推論題。作者提到「some of today's jobs will also become stories from the past」，暗示現今的工作未來也可能消失。" }
      ]
    }
  },

  "Unit 8": {
    title: "The Sweet Rise of Dubai Chocolate",
    chineseTitle: "杜拜巧克力——舌尖上的酥脆風暴",
    passage: `You bite into a sweet chocolate shell, hit a rich and creamy pistachio filling, and hear a loud crunch. This is Dubai chocolate, the treat of the moment!

The story began in 2022 at FIX Dessert Chocolatier, a shop in Dubai. Its founder, Sarah Hamouda, a mother-to-be, was looking for a dessert like nothing else out there. So, she made her own. The dessert was created with milk chocolate, pistachio cream, and kadayif. Kadayif is a thin pastry that looks like noodles and turns crispy when it is toasted. It is often used in Middle Eastern desserts. Together, these ingredients make each bite feel smooth, crunchy, and buttery.

Many people love the satisfying sound the chocolate bar makes when it breaks open. The dessert became a global hit after people shared videos of themselves tasting it online. Now, chocolate shops in different countries are creating their own versions by adding flavors such as hazelnut, caramel, or even strawberry.

The only question is: have you tried it yet?`,
    chineseTranslation: `你一口咬下甜甜的巧克力外殼，嚐到濃郁滑順的開心果內餡，還聽見清脆響亮的「喀滋」聲。這就是杜拜巧克力——當下最夯的甜點！

這個故事始於2022年杜拜一家名為 FIX Dessert Chocolatier 的店。創辦人莎拉·哈穆達當時是一位準媽媽，她一直在尋找一款與眾不同的甜點，於是乾脆自己動手做。這款甜點以牛奶巧克力、開心果醬和卡達伊夫（kadayif）製成。卡達伊夫是一種外型像麵條的細絲酥皮，烘烤後會變得酥脆，常用於中東甜點中。這些食材結合在一起，讓每一口都吃起來滑順、酥脆又帶有奶油香。

許多人都很喜歡巧克力片被掰開時那種令人滿足的聲音。在人們紛紛上網分享自己品嚐的影片後，這款甜點便爆紅全球。如今，各國的巧克力店都推出了自己的版本，加入榛果、焦糖甚至草莓等口味。

唯一的問題是：你吃過了嗎？`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "creamy", pos: "adj.", meaning: "濃郁滑順的、含奶油的", collocations: "a creamy pistachio filling 濃郁滑順的開心果內餡" },
        { id: 2, word: "founder", pos: "n.", meaning: "創辦人", collocations: "its founder 它的創辦人" },
        { id: 3, word: "pastry", pos: "n.", meaning: "酥皮、酥皮點心", collocations: "a thin pastry 一種細絲酥皮" },
        { id: 4, word: "ingredient", pos: "n.", meaning: "食材、成分", collocations: "these ingredients 這些食材" },
        { id: 5, word: "crispy", pos: "adj.", meaning: "酥脆的", collocations: "turns crispy 變得酥脆" },
        { id: 6, word: "version", pos: "n.", meaning: "版本", collocations: "their own versions 自己的版本" }
      ],
      grammarNotes: [
        { id: "G1", title: "that 引導形容詞子句修飾名詞", excerpt: "that looks like noodles and turns", analysis: "that 引導形容詞子句，修飾先行詞 pastry，說明這種酥皮「外型像麵條，烘烤後會變酥脆」。" },
        { id: "G2", title: "省略受格關係代詞的形容詞子句", excerpt: "the satisfying sound the chocolate bar makes when it breaks open", analysis: "sound 後方省略了受格關係代詞 that/which，完整為 the sound that the chocolate bar makes，表「巧克力片所發出的聲音」。" }
      ],
      patternNotes: [
        { id: "P1", title: "make + O + VR (使役動詞)", excerpt: "make each bite feel smooth, crunchy, and buttery", analysis: "make + 受詞 + 原形動詞，表「使…感覺…」，說明這些食材讓每一口都吃起來滑順又酥脆。" },
        { id: "P2", title: "by + V-ing (藉由…方式)", excerpt: "by adding flavors such as hazelnut, caramel, or even strawberry", analysis: "by + V-ing 表「藉由…」；such as 表「例如」，說明各國店家透過加入新口味推出自己的版本。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `You bite into a sweet chocolate shell, hit a rich and ` },
          { type: 'vocab', text: `creamy`, vid: 1 },
          { type: 'text', text: ` pistachio filling, and hear a loud crunch. This is Dubai chocolate, the treat of the moment!` }
        ],
        [
          { type: 'text', text: `The story began in 2022 at FIX Dessert Chocolatier, a shop in Dubai. Its ` },
          { type: 'vocab', text: `founder`, vid: 2 },
          { type: 'text', text: `, Sarah Hamouda, a mother-to-be, was looking for a dessert like nothing else out there. So, she made her own. The dessert was created with milk chocolate, pistachio cream, and kadayif. Kadayif is a thin ` },
          { type: 'vocab', text: `pastry`, vid: 3 },
          { type: 'text', text: ` ` },
          { type: 'grammar', text: `that looks like noodles and turns`, gid: 'G1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `crispy`, vid: 5 },
          { type: 'text', text: ` when it is toasted. It is often used in Middle Eastern desserts. Together, these ` },
          { type: 'vocab', text: `ingredients`, vid: 4 },
          { type: 'text', text: ` ` },
          { type: 'pattern', text: `make each bite feel smooth, crunchy, and buttery`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Many people love ` },
          { type: 'grammar', text: `the satisfying sound the chocolate bar makes when it breaks open`, gid: 'G2' },
          { type: 'text', text: `. The dessert became a global hit after people shared videos of themselves tasting it online. Now, chocolate shops in different countries are creating their own ` },
          { type: 'vocab', text: `versions`, vid: 6 },
          { type: 'text', text: ` ` },
          { type: 'pattern', text: `by adding flavors such as hazelnut, caramel, or even strawberry`, pid: 'P2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The only question is: have you tried it yet?` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "This soup is thick and ______ because it is made with milk.", options: ["A. crunchy", "B. creamy", "C. spicy", "D. bitter"], answer: "B", explanation: "【選項解析】\n- (A) crunchy (adj.) 酥脆的\n- (B) creamy (adj.) 濃郁滑順的 (正解)\n- (C) spicy (adj.) 辣的\n- (D) bitter (adj.) 苦的" },
      { id: 2, question: "Steve Jobs was a ______ of Apple.", options: ["A. customer", "B. critic", "C. rival", "D. founder"], answer: "D", explanation: "【選項解析】\n- (A) customer (n.) 顧客\n- (B) critic (n.) 評論家\n- (C) rival (n.) 對手\n- (D) founder (n.) 創辦人 (正解)" },
      { id: 3, question: "Croissants and pies are both types of ______.", options: ["A. pastry", "B. beverage", "C. seafood", "D. vegetable"], answer: "A", explanation: "【選項解析】\n- (A) pastry (n.) 酥皮點心 (正解)\n- (B) beverage (n.) 飲料\n- (C) seafood (n.) 海鮮\n- (D) vegetable (n.) 蔬菜" },
      { id: 4, question: "The movie has a new ______ with a different ending.", options: ["A. receipt", "B. recipe", "C. version", "D. ticket"], answer: "C", explanation: "【選項解析】\n- (A) receipt (n.) 收據\n- (B) recipe (n.) 食譜\n- (C) version (n.) 版本 (正解)\n- (D) ticket (n.) 票" },
    ],
    cloze: {
      text: "You bite into a sweet chocolate shell, hit a rich and creamy pistachio filling, and hear a loud crunch. This is Dubai chocolate, the [1] of the moment!\n\nThe story began in 2022 at FIX Dessert Chocolatier, a shop in Dubai. Its founder, Sarah Hamouda, a mother-to-be, was looking for a dessert like nothing else out there. So, she made her own. The dessert was created with milk chocolate, pistachio cream, and kadayif. Kadayif is a thin pastry that looks like noodles and [2] crispy when it is toasted. It is often used in Middle Eastern desserts. Together, these ingredients make each bite [3] smooth, crunchy, and buttery.\n\nMany people love the satisfying sound the chocolate [4] makes when it breaks open. The dessert became a global hit after people shared videos of themselves tasting it online. Now, chocolate shops in different countries are creating their own versions by adding flavors [5] hazelnut, caramel, or even strawberry.\n\nThe only question is: have you tried it yet?",
      questions: [
        { id: 1, options: ["A. key", "B. face", "C. point", "D. treat"], answer: "D", explanation: "the treat of the moment 表「當下最夯的點心」，treat 指美味的點心、享受。" },
        { id: 2, options: ["A. turns", "B. falls", "C. weighs", "D. measures"], answer: "A", explanation: "turn + adj. 表「變得…」，turns crispy 指烤過後變得酥脆。" },
        { id: 3, options: ["A. feel", "B. feeling", "C. feels", "D. to feel"], answer: "A", explanation: "make + 受詞 + 原形動詞為使役用法，故用原形 feel。" },
        { id: 4, options: ["A. jar", "B. bar", "C. tube", "D. pound"], answer: "B", explanation: "chocolate bar 指巧克力條／片，符合「掰開時發出聲音」的語意。" },
        { id: 5, options: ["A. up to", "B. instead of", "C. rather than", "D. such as"], answer: "D", explanation: "such as 表「例如」，後接列舉的口味。" },
      ]
    },
    wordBank: {
      words: ["(A) bakery", "(B) craving", "(C) dessert", "(D) flavor", "(E) garnish", "(F) imported", "(G) luxury", "(H) recipe", "(I) texture", "(J) viral"],
      passage: "A single short video can make a new snack go [1] overnight, spreading across social media in just a few days.\n\nMany food trends begin when a creative baker experiments with a new [2] at home.\n\nA small local [3] can suddenly attract customers from around the world.\n\nThe contrast between soft and crunchy [4] is often what makes a snack memorable.\n\nSome shops add unusual [5] combinations, such as pistachio with rose or chili.\n\nIngredients [6] from other countries can make a simple treat feel exotic.\n\nSome limited-edition chocolates are sold at high prices as a [7] item.\n\nWatching others enjoy a snack online can trigger a strong [8] for it.\n\nA sprinkle of chopped nuts on top serves as an attractive [9].\n\nWhether it is cake, ice cream, or chocolate, a good [10] often ends a meal on a happy note.",
      answers: { 1: "J", 2: "H", 3: "A", 4: "I", 5: "D", 6: "F", 7: "G", 8: "B", 9: "E", 10: "C" }
    },
    discourse: {
      options: [
        "A. Videos of people breaking the bars open and enjoying the loud crunch spread quickly online.",
        "B. Kadayif, a thin pastry that becomes crispy when toasted, gives each bite its famous crunch.",
        "C. Chocolate shops in many countries now offer their own versions with flavors like hazelnut and caramel.",
        "D. The founder, expecting a baby at the time, combined milk chocolate, pistachio cream, and kadayif.",
        "E. Some nutritionists warn that the dessert contains a large amount of sugar."
      ],
      paragraphs: [
        "Every so often, a single dessert captures the attention of food lovers around the world.",
        "Dubai chocolate began as one person's attempt to create something she could not find anywhere else. [1]",
        "Its popularity owes a great deal to one key ingredient borrowed from Middle Eastern desserts. [2] Social media then turned the treat into a global sensation. [3]",
        "Today, the original idea has inspired many new interpretations. [4]"
      ],
      answers: { 1: "D", 2: "B", 3: "A", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Dubai chocolate became a worldwide hit thanks to its unique ingredients and social media.", "B. Dubai chocolate was invented in a European factory.", "C. Dubai chocolate is only sold in Dubai.", "D. Kadayif is a type of chocolate."], answer: "A", explanation: "主旨題。全文介紹杜拜巧克力的由來、獨特食材，以及它如何透過社群媒體爆紅全球。" },
        { id: 2, question: "According to the article, what is kadayif?", options: ["A. A type of milk chocolate.", "B. A pistachio sauce.", "C. A thin, noodle-like pastry that turns crispy when toasted.", "D. A fruit from the Middle East."], answer: "C", explanation: "細節題。文中指出「Kadayif is a thin pastry that looks like noodles and turns crispy when it is toasted」。" },
        { id: 3, question: "According to the article, how did Dubai chocolate become a global hit?", options: ["A. It won an international award.", "B. It was sold in airports around the world.", "C. Famous chefs promoted it on TV.", "D. People shared videos of themselves tasting it online."], answer: "D", explanation: "細節題。文中指出「The dessert became a global hit after people shared videos of themselves tasting it online」。" },
        { id: 4, question: "Why might chocolate shops in other countries add flavors such as hazelnut or caramel?", options: ["A. Pistachio is banned in many countries.", "B. To adapt the popular dessert to local tastes and offer something new.", "C. Kadayif is no longer available.", "D. The original recipe is kept secret."], answer: "B", explanation: "推論題。各國店家推出自己的版本並加入新口味，可推知是為了迎合當地口味、增加新鮮感。" }
      ]
    }
  },

  "封面": {
    title: "Get Ready for XG WORLD TOUR: THE CORE in Taipei!",
    chineseTitle: "XG 世界巡演再啟動 十月強勢攻佔臺北小巨蛋",
    passage: `The fast-rising global group XG has officially announced their second world tour, XG WORLD TOUR: THE CORE. Following their sold-out Taiwan debut in 2024, XG will return to Taipei on October 17, 2026. This time, they are upgrading to the much larger Taipei Arena to perform in front of over 10,000 fans.

XG is a Japanese vocal group consisting of JURIN, CHISA, HINATA, HARVEY, JURIA, MAYA, and COCONA. Since debuting in 2022 with "Tippy Toes," they have captured the world's attention with their unique style. Their music features confident dance beats, sharp raps, and smooth R&B—a mix they proudly call "X-pop." The name XG stands for "Xtraordinary Genes." It reflects how they refuse to be limited by old rules and use their unique music and performances to break boundaries and inspire youth globally.

The group has achieved incredible success, including performing at Coachella and selling out Tokyo Dome. Their latest album, The Core, even entered the US Billboard 200 chart. Get ready, Taipei—XG is bringing their powerful vocals and slick moves to the stage this October!`,
    chineseTranslation: `人氣急速竄升的全球女團 XG 正式宣布第二次世界巡迴演唱會「XG WORLD TOUR: THE CORE」。繼2024年在臺灣首演門票秒殺之後，XG 將於2026年10月17日重返臺北。這一次，她們將升級到規模更大的臺北小巨蛋，在超過一萬名粉絲面前演出。

XG 是一個日本歌唱團體，成員包括 JURIN、CHISA、HINATA、HARVEY、JURIA、MAYA 與 COCONA。自2022年以〈Tippy Toes〉出道以來，她們便以獨特的風格吸引全世界的目光。她們的音樂融合自信的舞曲節奏、俐落的饒舌與滑順的 R&B——她們驕傲地將這種混搭稱為「X-pop」。XG 這個名字代表「Xtraordinary Genes（非凡基因）」，象徵她們拒絕被舊有規則所限制，並以獨特的音樂與表演打破界線、啟發全球的年輕人。

這個團體已取得驚人的成就，包括登上科切拉音樂節的舞台，以及售罄東京巨蛋的門票。她們最新的專輯《The Core》甚至打進了美國告示牌兩百大專輯榜。準備好了嗎，臺北——XG 將在今年十月帶著強大的歌聲與流暢俐落的舞步登上舞台！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "debut", pos: "n.", meaning: "首次登場、出道", collocations: "a sold-out Taiwan debut 門票售罄的臺灣首演" },
        { id: 2, word: "upgrade", pos: "v.", meaning: "升級", collocations: "upgrading to a larger arena 升級到更大的場館" },
        { id: 3, word: "consist", pos: "v.", meaning: "由…組成（consist of）", collocations: "a group consisting of... 由…組成的團體" },
        { id: 4, word: "capture", pos: "v.", meaning: "吸引、捕捉", collocations: "captured the world's attention 吸引全世界的目光" },
        { id: 5, word: "boundary", pos: "n.", meaning: "界線", collocations: "break boundaries 打破界線" },
        { id: 6, word: "slick", pos: "adj.", meaning: "流暢俐落的", collocations: "slick moves 流暢俐落的舞步" }
      ],
      grammarNotes: [
        { id: "G1", title: "Following + N. (在…之後)", excerpt: "Following their sold-out Taiwan", analysis: "following 在此作介系詞用，表「在…之後」，說明繼臺灣首演售罄之後，XG 將重返臺北。" },
        { id: "G2", title: "Since + V-ing 搭配現在完成式", excerpt: "Since debuting in 2022 with \"Tippy Toes,\" they have", analysis: "Since + V-ing 表「自從…以來」，主要子句搭配現在完成式 have captured，表示從過去持續到現在的狀態。" }
      ],
      patternNotes: [
        { id: "P1", title: "stand for + N. (代表…)", excerpt: "The name XG stands for", analysis: "stand for 為固定片語，表「代表、是…的縮寫」，說明 XG 名稱的由來。" },
        { id: "P2", title: "including + V-ing (包括…)", excerpt: "including performing at Coachella and selling out Tokyo Dome", analysis: "including 後接動名詞片語，列舉該團體取得的具體成就。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `The fast-rising global group XG has officially announced their second world tour, XG WORLD TOUR: THE CORE. ` },
          { type: 'grammar', text: `Following their sold-out Taiwan`, gid: 'G1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `debut`, vid: 1 },
          { type: 'text', text: ` in 2024, XG will return to Taipei on October 17, 2026. This time, they are ` },
          { type: 'vocab', text: `upgrading`, vid: 2 },
          { type: 'text', text: ` to the much larger Taipei Arena to perform in front of over 10,000 fans.` }
        ],
        [
          { type: 'text', text: `XG is a Japanese vocal group ` },
          { type: 'vocab', text: `consisting`, vid: 3 },
          { type: 'text', text: ` of JURIN, CHISA, HINATA, HARVEY, JURIA, MAYA, and COCONA. ` },
          { type: 'grammar', text: `Since debuting in 2022 with "Tippy Toes," they have`, gid: 'G2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `captured`, vid: 4 },
          { type: 'text', text: ` the world's attention with their unique style. Their music features confident dance beats, sharp raps, and smooth R&B—a mix they proudly call "X-pop." ` },
          { type: 'pattern', text: `The name XG stands for`, pid: 'P1' },
          { type: 'text', text: ` "Xtraordinary Genes." It reflects how they refuse to be limited by old rules and use their unique music and performances to break ` },
          { type: 'vocab', text: `boundaries`, vid: 5 },
          { type: 'text', text: ` and inspire youth globally.` }
        ],
        [
          { type: 'text', text: `The group has achieved incredible success, ` },
          { type: 'pattern', text: `including performing at Coachella and selling out Tokyo Dome`, pid: 'P2' },
          { type: 'text', text: `. Their latest album, The Core, even entered the US Billboard 200 chart. Get ready, Taipei—XG is bringing their powerful vocals and ` },
          { type: 'vocab', text: `slick`, vid: 6 },
          { type: 'text', text: ` moves to the stage this October!` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The young singer made her ______ on a TV talent show at age 15.", options: ["A. decision", "B. complaint", "C. debut", "D. apology"], answer: "C", explanation: "【選項解析】\n- (A) decision (n.) 決定\n- (B) complaint (n.) 抱怨\n- (C) debut (n.) 首次登場、出道 (正解)\n- (D) apology (n.) 道歉" },
      { id: 2, question: "The airline offered to ______ us to business class for free.", options: ["A. upgrade", "B. delay", "C. cancel", "D. reduce"], answer: "A", explanation: "【選項解析】\n- (A) upgrade (v.) 升級 (正解)\n- (B) delay (v.) 延誤\n- (C) cancel (v.) 取消\n- (D) reduce (v.) 減少" },
      { id: 3, question: "The photographer managed to ______ the beauty of the sunset.", options: ["A. ignore", "B. damage", "C. forget", "D. capture"], answer: "D", explanation: "【選項解析】\n- (A) ignore (v.) 忽略\n- (B) damage (v.) 損壞\n- (C) forget (v.) 忘記\n- (D) capture (v.) 捕捉 (正解)" },
      { id: 4, question: "Scientists keep pushing the ______ of what technology can do.", options: ["A. rumors", "B. boundaries", "C. receipts", "D. accidents"], answer: "B", explanation: "【選項解析】\n- (A) rumors (n.) 謠言\n- (B) boundaries (n.) 界線 (正解)\n- (C) receipts (n.) 收據\n- (D) accidents (n.) 意外" },
    ],
    cloze: {
      text: "Many music groups today aim to reach fans [1] their home countries. After building a loyal audience at home, some performers move on to larger venues [2] they can meet the growing demand for tickets. Their music often blends several genres, [3] it hard for fans to place them in a single category. [4] performing at major international festivals, a group can quickly attract new listeners from around the world. For fans, the chance to see their favorite stars live is often worth the long wait [5] tickets.",
      questions: [
        { id: 1, options: ["A. under", "B. among", "C. beyond", "D. within"], answer: "C", explanation: "beyond + N. 表「在…之外」，指音樂團體希望觸及本國以外的粉絲。" },
        { id: 2, options: ["A. so that", "B. even if", "C. unless", "D. in case"], answer: "A", explanation: "so that 引導目的子句，表「以便」，指換到更大的場館是為了滿足門票需求。" },
        { id: 3, options: ["A. made", "B. to make", "C. makes", "D. making"], answer: "D", explanation: "分詞構句表結果，現在分詞 making，表「使得粉絲很難把她們歸類」。" },
        { id: 4, options: ["A. Despite", "B. By", "C. Without", "D. Instead of"], answer: "B", explanation: "By + V-ing 表「藉由…」，指透過在國際音樂節演出來吸引新聽眾。" },
        { id: 5, options: ["A. at", "B. on", "C. for", "D. of"], answer: "C", explanation: "wait for + N. 為固定搭配，表「等待…」。" },
      ]
    },
    wordBank: {
      words: ["(A) album", "(B) audience", "(C) chart", "(D) choreography", "(E) concert", "(F) debut", "(G) fandom", "(H) genre", "(I) lyrics", "(J) venue"],
      passage: "A group's first official song release, known as its [1], can shape how the public sees it for years.\n\nMany fans memorize every line of the [2] and sing along at shows.\n\nSome artists blend more than one musical [3], combining hip-hop, pop, and R&B in a single song.\n\nPrecise, high-energy [4] is a key part of many idol groups' live performances.\n\nWhen a group grows more popular, it may move to a larger [5] that can hold more people.\n\nA sold-out [6] can bring tens of thousands of fans together for one unforgettable night.\n\nA new [7] with ten or more songs gives fans plenty to listen to between tours.\n\nReaching the top of a music [8] is a sign that a song has become truly popular.\n\nA passionate [9] often creates its own name, merchandise, and online communities.\n\nPerformers often feed off the energy of a cheering [10].",
      answers: { 1: "F", 2: "I", 3: "H", 4: "D", 5: "J", 6: "E", 7: "A", 8: "C", 9: "G", 10: "B" }
    },
    discourse: {
      options: [
        "A. Mixing dance beats, rap, and R&B into one recognizable sound gives listeners something they cannot easily find elsewhere.",
        "B. If those first shows sell out, they often return to much larger arenas that can hold thousands more fans.",
        "C. Performing at famous international festivals and reaching global music charts are among the clearest examples.",
        "D. Some names are chosen to show that the members refuse to be limited by traditional rules.",
        "E. Ticket prices for international tours have risen sharply in recent years."
      ],
      paragraphs: [
        "International music tours have become one of the clearest signs of a group's global success.",
        "Groups often start by performing in smaller venues when they first visit a new country. [1]",
        "A distinctive musical style can help a group stand out in a crowded industry. [2] A meaningful group name can also express what the members stand for. [3]",
        "Major milestones help prove that a group's appeal reaches far beyond its home country. [4]"
      ],
      answers: { 1: "B", 2: "A", 3: "D", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is this article mainly about?", options: ["A. The history of the Taipei Arena.", "B. How to buy concert tickets online.", "C. A review of each song on XG's latest album.", "D. XG's return to Taipei for a larger concert as part of their world tour."], answer: "D", explanation: "主旨題。全文介紹 XG 第二次世界巡演將重返臺北，並升級至更大的場館演出。" },
        { id: 2, question: "According to the article, when did XG first perform in Taiwan?", options: ["A. In 2022.", "B. In 2024.", "C. In 2025.", "D. In 2026."], answer: "B", explanation: "細節題。文中提到「Following their sold-out Taiwan debut in 2024」。" },
        { id: 3, question: "According to the article, what does the name XG stand for?", options: ["A. Xtraordinary Genes.", "B. Extra Girls.", "C. Xtreme Group.", "D. X-pop Generation."], answer: "A", explanation: "細節題。文中指出「The name XG stands for \"Xtraordinary Genes.\"」。" },
        { id: 4, question: "Why might XG be performing at the much larger Taipei Arena this time?", options: ["A. The previous venue was closed down.", "B. They want a quieter, smaller show.", "C. Their popularity has grown since their sold-out debut, so they need a bigger venue.", "D. Tokyo Dome was unavailable."], answer: "C", explanation: "推論題。首演門票售罄、這次改到可容納上萬人的場館，可推知她們的人氣持續成長。" }
      ]
    }
  },

  "Unit 9": {
    title: "Step into the Past and Present of Wanhua!",
    chineseTitle: "走進萬華 看見臺北的古今風景",
    passage: `When you think of Wanhua, what comes to mind? Maybe you picture narrow streets full of food scents and noisy crowds. In fact, one of Taipei's oldest areas is hidden behind this busy scene.

To understand Wanhua's history, we cannot miss Bopiliao Historic Block. Over 200 years ago, the area was a busy commercial neighborhood because it was close to the port of Bangka. Now, what makes Bopiliao special is its mix of architectural styles. You can see Qing-dynasty Chinese shophouses on one side and Western-style red-brick fronts from the Japanese era on the other. Some old buildings are now exhibition spaces that allow visitors to learn about Wanhua's history.

How did Bopiliao get its name? There are several stories. In Chinese, bo pi means "to peel skin or bark," while liao means "a simple hut." Some believe workers here used to peel tree bark from imported wood, or peel animal skins. Others believe the name came from the Taiwanese pronunciation of the area's older Chinese names, such as Fupiliao or Beipiliao. Still, no one knows for sure.

Next, let's head to Longshan Temple. As one of Taipei's Three Great Temples, it was built in 1738 and has been an important center of local faith. Visitors can find unique bronze dragon columns and detailed carvings here. The temple is also home to over 100 gods, including the popular Old Man Under the Moon. It is believed that this god helps people find love.

Not far away, Bangka Night Market offers another side of the area. Here, we can find a wide variety of street food and seafood, from oyster omelets and rice noodles to shaved ice. One must-try is Donggang swordfish tempura. Fresh swordfish paste is wrapped around a piece of boiled egg and deep-fried until golden and crispy. Each bite gives you fish, egg, and crunch all at once.

Together, Bopiliao, Longshan Temple, and Bangka Night Market show what makes Wanhua special. They let visitors step into the past without leaving the present.`,
    chineseTranslation: `說到萬華，你會想到什麼？或許你腦海中浮現的是充滿食物香氣與喧鬧人潮的狹窄街道。事實上，臺北最古老的區域之一，就隱藏在這片熱鬧景象的背後。

想了解萬華的歷史，就不能錯過剝皮寮歷史街區。兩百多年前，這裡因為靠近艋舺港口，而是熱鬧的商業街區。如今，剝皮寮的特別之處在於它融合了多種建築風格：一側可以看到清代的閩南式街屋，另一側則是日治時期的西式紅磚立面。部分老建築現已改為展覽空間，讓遊客能認識萬華的歷史。

剝皮寮的名稱是怎麼來的呢？說法有好幾種。在中文裡，「剝皮」指「剝下皮或樹皮」，「寮」則是「簡陋的小屋」。有人認為，以前這裡的工人會剝除進口木材的樹皮，或是剝製獸皮；也有人認為，這個名字來自當地較早期地名（例如「福皮寮」或「北皮寮」）的臺語發音。不過，至今仍沒有人能確定。

接下來，我們前往龍山寺。身為臺北三大廟宇之一，龍山寺建於1738年，一直是當地重要的信仰中心。遊客可以在這裡看到獨特的銅鑄龍柱與精細的雕刻。寺內還供奉超過一百尊神明，其中包括人氣很高的月下老人，據說祂能幫助人們找到姻緣。

不遠處的艋舺夜市，則呈現了這個地區的另一種面貌。在這裡，我們能找到各式各樣的小吃與海鮮，從蚵仔煎、米粉到剉冰應有盡有。其中一道必吃的是東港旗魚黑輪：新鮮的旗魚漿包裹著一塊水煮蛋，下鍋油炸至金黃酥脆。每一口都能同時嚐到魚肉、蛋和酥脆的口感。

剝皮寮、龍山寺與艋舺夜市，共同展現了萬華的特別之處。它們讓遊客不必離開現在，就能走進過去。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "scent", pos: "n.", meaning: "香氣、氣味", collocations: "food scents 食物香氣" },
        { id: 2, word: "commercial", pos: "adj.", meaning: "商業的", collocations: "a busy commercial neighborhood 熱鬧的商業街區" },
        { id: 3, word: "architectural", pos: "adj.", meaning: "建築的", collocations: "architectural styles 建築風格" },
        { id: 4, word: "exhibition", pos: "n.", meaning: "展覽", collocations: "exhibition spaces 展覽空間" },
        { id: 5, word: "faith", pos: "n.", meaning: "信仰", collocations: "a center of local faith 當地的信仰中心" },
        { id: 6, word: "variety", pos: "n.", meaning: "多樣、種類", collocations: "a wide variety of street food 各式各樣的小吃" }
      ],
      grammarNotes: [
        { id: "G1", title: "what 引導名詞子句作主詞", excerpt: "what makes Bopiliao special", analysis: "what 引導名詞子句，作整句的主詞，表「讓剝皮寮特別的地方」，後接 is 說明其內容。" },
        { id: "G2", title: "It is believed that... (據信…)", excerpt: "It is believed that this god helps people find love", analysis: "It 為虛主詞，真正主詞為 that 子句，表「一般相信…、據說…」，常用於描述傳說或普遍看法。" }
      ],
      patternNotes: [
        { id: "P1", title: "from A to B (從A到B，列舉範圍)", excerpt: "from oyster omelets and rice noodles to shaved ice", analysis: "from A to B 表「從A到B」，用來列舉夜市小吃的範圍與種類。" },
        { id: "P2", title: "let + O + VR / without + V-ing", excerpt: "They let visitors step into the past without leaving the present", analysis: "let + 受詞 + 原形動詞表「讓…做…」；without + V-ing 表「不必…」，說明遊客不必離開現在就能感受過去。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `When you think of Wanhua, what comes to mind? Maybe you picture narrow streets full of food ` },
          { type: 'vocab', text: `scents`, vid: 1 },
          { type: 'text', text: ` and noisy crowds. In fact, one of Taipei's oldest areas is hidden behind this busy scene.` }
        ],
        [
          { type: 'text', text: `To understand Wanhua's history, we cannot miss Bopiliao Historic Block. Over 200 years ago, the area was a busy ` },
          { type: 'vocab', text: `commercial`, vid: 2 },
          { type: 'text', text: ` neighborhood because it was close to the port of Bangka. Now, ` },
          { type: 'grammar', text: `what makes Bopiliao special`, gid: 'G1' },
          { type: 'text', text: ` is its mix of ` },
          { type: 'vocab', text: `architectural`, vid: 3 },
          { type: 'text', text: ` styles. You can see Qing-dynasty Chinese shophouses on one side and Western-style red-brick fronts from the Japanese era on the other. Some old buildings are now ` },
          { type: 'vocab', text: `exhibition`, vid: 4 },
          { type: 'text', text: ` spaces that allow visitors to learn about Wanhua's history.` }
        ],
        [
          { type: 'text', text: `How did Bopiliao get its name? There are several stories. In Chinese, bo pi means "to peel skin or bark," while liao means "a simple hut." Some believe workers here used to peel tree bark from imported wood, or peel animal skins. Others believe the name came from the Taiwanese pronunciation of the area's older Chinese names, such as Fupiliao or Beipiliao. Still, no one knows for sure.` }
        ],
        [
          { type: 'text', text: `Next, let's head to Longshan Temple. As one of Taipei's Three Great Temples, it was built in 1738 and has been an important center of local ` },
          { type: 'vocab', text: `faith`, vid: 5 },
          { type: 'text', text: `. Visitors can find unique bronze dragon columns and detailed carvings here. The temple is also home to over 100 gods, including the popular Old Man Under the Moon. ` },
          { type: 'grammar', text: `It is believed that this god helps people find love`, gid: 'G2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Not far away, Bangka Night Market offers another side of the area. Here, we can find a wide ` },
          { type: 'vocab', text: `variety`, vid: 6 },
          { type: 'text', text: ` of street food and seafood, ` },
          { type: 'pattern', text: `from oyster omelets and rice noodles to shaved ice`, pid: 'P1' },
          { type: 'text', text: `. One must-try is Donggang swordfish tempura. Fresh swordfish paste is wrapped around a piece of boiled egg and deep-fried until golden and crispy. Each bite gives you fish, egg, and crunch all at once.` }
        ],
        [
          { type: 'text', text: `Together, Bopiliao, Longshan Temple, and Bangka Night Market show what makes Wanhua special. ` },
          { type: 'pattern', text: `They let visitors step into the past without leaving the present`, pid: 'P2' },
          { type: 'text', text: `.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The sweet ______ of fresh bread filled the bakery.", options: ["A. noise", "B. scent", "C. color", "D. shadow"], answer: "B", explanation: "【選項解析】\n- (A) noise (n.) 噪音\n- (B) scent (n.) 香氣 (正解)\n- (C) color (n.) 顏色\n- (D) shadow (n.) 影子" },
      { id: 2, question: "This street was once quiet but is now a busy ______ district full of shops.", options: ["A. rural", "B. ancient", "C. empty", "D. commercial"], answer: "D", explanation: "【選項解析】\n- (A) rural (adj.) 鄉村的\n- (B) ancient (adj.) 古老的\n- (C) empty (adj.) 空的\n- (D) commercial (adj.) 商業的 (正解)" },
      { id: 3, question: "Many people visit the temple to express their religious ______.", options: ["A. faith", "B. anger", "C. doubt", "D. debt"], answer: "A", explanation: "【選項解析】\n- (A) faith (n.) 信仰 (正解)\n- (B) anger (n.) 憤怒\n- (C) doubt (n.) 懷疑\n- (D) debt (n.) 債務" },
      { id: 4, question: "The store offers a wide ______ of snacks from around the world.", options: ["A. silence", "B. shortage", "C. variety", "D. distance"], answer: "C", explanation: "【選項解析】\n- (A) silence (n.) 寂靜\n- (B) shortage (n.) 短缺\n- (C) variety (n.) 多樣、種類 (正解)\n- (D) distance (n.) 距離" },
    ],
    cloze: {
      text: "Old neighborhoods often reveal a city's history [1] clearly than modern districts do. In some areas, buildings [2] different time periods stand side by side, showing how architecture changed over the years. Local temples are not only places of worship [3] also important gathering spots for the community. [4] the sun goes down, night markets come alive with food stalls, music, and crowds. Walking through such a neighborhood allows visitors to experience both its past and present [5] the same time.",
      questions: [
        { id: 1, options: ["A. less", "B. more", "C. most", "D. much"], answer: "B", explanation: "more + 副詞 + than 為比較級句型，表「比…更清楚地」。" },
        { id: 2, options: ["A. of", "B. into", "C. by", "D. from"], answer: "D", explanation: "from + 時期，表「來自…年代」，指不同時代的建築並排而立。" },
        { id: 3, options: ["A. but", "B. and", "C. or", "D. so"], answer: "A", explanation: "not only A but (also) B 為固定句型，表「不僅…而且…」。" },
        { id: 4, options: ["A. Unless", "B. Although", "C. Once", "D. Because"], answer: "C", explanation: "Once 引導時間子句，表「一旦」，指太陽一下山，夜市便熱鬧起來。" },
        { id: 5, options: ["A. in", "B. at", "C. on", "D. by"], answer: "B", explanation: "at the same time 為固定片語，表「同時」。" },
      ]
    },
    wordBank: {
      words: ["(A) alley", "(B) heritage", "(C) historic", "(D) incense", "(E) landmark", "(F) local", "(G) preserve", "(H) renovate", "(I) shrine", "(J) vendor"],
      passage: "Walking through a narrow [1], visitors may discover small shops hidden from the main road.\n\nInstead of tearing old houses down, the government chose to [2] them, repairing walls and roofs carefully.\n\nThe goal is to [3] the area's original character for future generations.\n\nThese protected buildings are now treated as part of the city's cultural [4].\n\nSome [5] streets still look much the way they did more than a century ago.\n\nInside the temple, the smell of burning [6] fills the air.\n\nWorshippers often stop at a small [7] to pray for good health or luck in love.\n\nAt the night market, a friendly [8] may invite you to try a free sample.\n\nFor many visitors, the famous temple is the area's most important [9].\n\nTrying [10] snacks is one of the best ways to understand a neighborhood's culture.",
      answers: { 1: "A", 2: "H", 3: "G", 4: "B", 5: "C", 6: "D", 7: "I", 8: "J", 9: "E", 10: "F" }
    },
    discourse: {
      options: [
        "A. Many people visit to pray to the god believed to help people find love.",
        "B. Some say it came from workers peeling bark or animal skins, while others link it to older place names.",
        "C. Its streets mix Qing-dynasty shophouses with red-brick fronts built during the Japanese era.",
        "D. Visitors can try dishes ranging from oyster omelets to crispy swordfish tempura.",
        "E. City planners are considering building a new shopping mall nearby."
      ],
      paragraphs: [
        "Some of Taipei's oldest stories can be found in a neighborhood better known today for its busy streets and food stalls.",
        "A historic block in the area reflects its past as a busy trading center near an old port. [1]",
        "Even the block's unusual name has sparked several different explanations. [2] Not far away stands a famous temple that has served the community for centuries. [3]",
        "When evening comes, a lively night market shows yet another side of the neighborhood. [4]"
      ],
      answers: { 1: "C", 2: "B", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Wanhua combines rich history with lively modern culture.", "B. Wanhua is Taipei's newest district.", "C. Longshan Temple was built during the Japanese era.", "D. Bangka Night Market only sells seafood."], answer: "A", explanation: "主旨題。全文透過剝皮寮、龍山寺與艋舺夜市，介紹萬華豐富的歷史與熱鬧的現代生活。" },
        { id: 2, question: "According to the article, why was Bopiliao a busy commercial area over 200 years ago?", options: ["A. It was home to Longshan Temple.", "B. It had Taipei's first night market.", "C. It was close to the port of Bangka.", "D. It was the center of the Japanese government."], answer: "C", explanation: "細節題。文中指出該區「was close to the port of Bangka」。" },
        { id: 3, question: "According to the article, what is the Old Man Under the Moon believed to do?", options: ["A. Protect fishermen at sea.", "B. Bring good harvests.", "C. Help students pass exams.", "D. Help people find love."], answer: "D", explanation: "細節題。文中指出「It is believed that this god helps people find love」。" },
        { id: 4, question: "What does the author mean by saying visitors can \"step into the past without leaving the present\"?", options: ["A. Visitors must travel back in time.", "B. Visitors can experience history while still enjoying modern city life.", "C. The area has no modern buildings.", "D. The past and present are completely separated in Wanhua."], answer: "B", explanation: "推論題。萬華同時保有歷史古蹟與熱鬧的現代生活，因此遊客能在當下體驗過去。" }
      ]
    }
  },

  "Unit 10": {
    title: "Helpful Tool or Hidden Risk? Smart Glasses 101",
    chineseTitle: "智慧眼鏡入門課——便利背後藏著什麼風險？",
    passage: `Technology keeps making daily life easier. Today, many advanced tools help people work, shop, study, and stay connected with others. Among these tools, smart glasses have recently received a lot of attention.

Smart glasses look like regular eyewear, but they can do much more. They are often connected to a smartphone or the internet. Because of this, users can receive information in real time without looking down at a screen. Some models can take photos, record videos, play music, and answer calls. Others can show messages, directions, captions, or translations in front of the wearer's eyes.

These features make everyday tasks more efficient. For instance, tourists can follow a map while they carry baggage with both hands. Businesspeople can read quick translations during meetings in another language. Chefs can follow recipes without touching a screen.

With functions such as AI support, smart glasses can do more than show information. The more advanced these tools become, the more helpful they may be in different situations.

However, people should be cautious about the risks of these intelligent devices and learn to use them responsibly. One big worry is privacy. Smart glasses may constantly collect data about users and the world around them. For example, they can record where users go or what they look at. The camera is hidden in the frames, so others may not notice when recording begins. This can raise concerns about data safety and misuse.

Distraction creates another problem. Pop-up notifications in the wearer's view may pull their focus away from traffic or nearby people. This could happen when a message suddenly appears as users cross the road. At that moment, even a quick glance at the message could put them in danger. People should put smart glasses away during activities that require their full attention.

With just a tap, smart glasses can become helpful assistants, but they should be used with care. As they become more common, clearer rules, safer designs, and better habits may become necessary.`,
    chineseTranslation: `科技不斷讓日常生活變得更便利。如今，許多先進的工具幫助人們工作、購物、學習，並與他人保持聯繫。在這些工具之中，智慧眼鏡最近受到了相當多的關注。

智慧眼鏡看起來就像一般的眼鏡，但功能卻多得多。它們通常會連接智慧型手機或網路，因此使用者不必低頭看螢幕，就能即時接收資訊。有些機型可以拍照、錄影、播放音樂和接聽電話；有些則能在配戴者眼前顯示訊息、路線指引、字幕或翻譯。

這些功能讓日常事務變得更有效率。例如，觀光客可以一邊雙手提著行李、一邊跟著地圖走；商務人士在以外語進行的會議中，可以讀取即時翻譯；廚師則能不碰螢幕就看著食譜做菜。

加上 AI 輔助等功能，智慧眼鏡能做的已不只是顯示資訊。這些工具越先進，在各種情境中可能就越能派上用場。

然而，人們應該對這些智慧裝置的風險保持謹慎，並學習負責任地使用它們。其中一大疑慮是隱私。智慧眼鏡可能持續收集使用者與周遭世界的資料，例如記錄使用者去了哪裡、看了什麼。由於鏡頭藏在鏡框裡，旁人可能不會察覺錄影何時開始，這可能引發資料安全與遭到濫用的擔憂。

分心則是另一個問題。配戴者視野中跳出的通知，可能會讓他們的注意力離開車流或身邊的人。當使用者過馬路時，訊息突然跳出就可能發生這種情況。在那一刻，即使只是瞄一眼訊息，也可能讓他們陷入危險。在需要全神貫注的活動中，人們應該把智慧眼鏡收起來。

只要輕輕一點，智慧眼鏡就能成為得力的助手，但使用時必須小心謹慎。隨著它們越來越普及，更明確的規範、更安全的設計，以及更好的使用習慣，可能都將成為必要。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "efficient", pos: "adj.", meaning: "有效率的", collocations: "more efficient 更有效率" },
        { id: 2, word: "cautious", pos: "adj.", meaning: "謹慎的", collocations: "be cautious about the risks 對風險保持謹慎" },
        { id: 3, word: "privacy", pos: "n.", meaning: "隱私", collocations: "one big worry is privacy 一大疑慮是隱私" },
        { id: 4, word: "constantly", pos: "adv.", meaning: "持續地、不斷地", collocations: "constantly collect data 持續收集資料" },
        { id: 5, word: "misuse", pos: "n.", meaning: "濫用、誤用", collocations: "data safety and misuse 資料安全與濫用" },
        { id: 6, word: "distraction", pos: "n.", meaning: "分心、使人分心的事物", collocations: "Distraction creates another problem 分心造成另一個問題" }
      ],
      grammarNotes: [
        { id: "G1", title: "without + V-ing (不必…、沒有…)", excerpt: "without looking down at a screen", analysis: "without 為介系詞，後接動名詞，表「不必低頭看螢幕」就能接收資訊。" },
        { id: "G2", title: "so 引導結果子句 / when 引導名詞子句", excerpt: "so others may not notice when recording begins", analysis: "so 引導結果子句，表「因此」；when recording begins 為名詞子句，作 notice 的受詞，表「錄影何時開始」。" }
      ],
      patternNotes: [
        { id: "P1", title: "The + 比較級..., the + 比較級... (越…就越…)", excerpt: "The more advanced these tools become, the more helpful they may be in different situations", analysis: "The + 比較級 + S + V, the + 比較級 + S + V 表「越…就越…」，說明工具越先進就越實用。" },
        { id: "P2", title: "pull + N. + away from + N. (使…遠離…)", excerpt: "pull their focus away from traffic or nearby people", analysis: "pull A away from B 表「把A從B拉開」，指跳出的通知會讓注意力離開車流與行人。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Technology keeps making daily life easier. Today, many advanced tools help people work, shop, study, and stay connected with others. Among these tools, smart glasses have recently received a lot of attention.` }
        ],
        [
          { type: 'text', text: `Smart glasses look like regular eyewear, but they can do much more. They are often connected to a smartphone or the internet. Because of this, users can receive information in real time ` },
          { type: 'grammar', text: `without looking down at a screen`, gid: 'G1' },
          { type: 'text', text: `. Some models can take photos, record videos, play music, and answer calls. Others can show messages, directions, captions, or translations in front of the wearer's eyes.` }
        ],
        [
          { type: 'text', text: `These features make everyday tasks more ` },
          { type: 'vocab', text: `efficient`, vid: 1 },
          { type: 'text', text: `. For instance, tourists can follow a map while they carry baggage with both hands. Businesspeople can read quick translations during meetings in another language. Chefs can follow recipes without touching a screen.` }
        ],
        [
          { type: 'text', text: `With functions such as AI support, smart glasses can do more than show information. ` },
          { type: 'pattern', text: `The more advanced these tools become, the more helpful they may be in different situations`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `However, people should be ` },
          { type: 'vocab', text: `cautious`, vid: 2 },
          { type: 'text', text: ` about the risks of these intelligent devices and learn to use them responsibly. One big worry is ` },
          { type: 'vocab', text: `privacy`, vid: 3 },
          { type: 'text', text: `. Smart glasses may ` },
          { type: 'vocab', text: `constantly`, vid: 4 },
          { type: 'text', text: ` collect data about users and the world around them. For example, they can record where users go or what they look at. The camera is hidden in the frames, ` },
          { type: 'grammar', text: `so others may not notice when recording begins`, gid: 'G2' },
          { type: 'text', text: `. This can raise concerns about data safety and ` },
          { type: 'vocab', text: `misuse`, vid: 5 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'vocab', text: `Distraction`, vid: 6 },
          { type: 'text', text: ` creates another problem. Pop-up notifications in the wearer's view may ` },
          { type: 'pattern', text: `pull their focus away from traffic or nearby people`, pid: 'P2' },
          { type: 'text', text: `. This could happen when a message suddenly appears as users cross the road. At that moment, even a quick glance at the message could put them in danger. People should put smart glasses away during activities that require their full attention.` }
        ],
        [
          { type: 'text', text: `With just a tap, smart glasses can become helpful assistants, but they should be used with care. As they become more common, clearer rules, safer designs, and better habits may become necessary.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Using a dishwasher is a more ______ way to clean dishes than washing them by hand.", options: ["A. careless", "B. expensive", "C. noisy", "D. efficient"], answer: "D", explanation: "【選項解析】\n- (A) careless (adj.) 粗心的\n- (B) expensive (adj.) 昂貴的\n- (C) noisy (adj.) 吵鬧的\n- (D) efficient (adj.) 有效率的 (正解)" },
      { id: 2, question: "Please respect my ______ and don't read my diary.", options: ["A. privacy", "B. permission", "C. pressure", "D. patience"], answer: "A", explanation: "【選項解析】\n- (A) privacy (n.) 隱私 (正解)\n- (B) permission (n.) 許可\n- (C) pressure (n.) 壓力\n- (D) patience (n.) 耐心" },
      { id: 3, question: "The baby cried ______ throughout the long flight.", options: ["A. rarely", "B. briefly", "C. constantly", "D. barely"], answer: "C", explanation: "【選項解析】\n- (A) rarely (adv.) 很少\n- (B) briefly (adv.) 短暫地\n- (C) constantly (adv.) 不斷地 (正解)\n- (D) barely (adv.) 幾乎沒有" },
      { id: 4, question: "Phones can be a major ______ when students are trying to study.", options: ["A. reward", "B. distraction", "C. solution", "D. support"], answer: "B", explanation: "【選項解析】\n- (A) reward (n.) 獎勵\n- (B) distraction (n.) 使人分心的事物 (正解)\n- (C) solution (n.) 解決方法\n- (D) support (n.) 支持" },
    ],
    cloze: {
      text: "Wearable technology is changing how people [1] information during daily life. Instead of checking a phone, users can see messages or directions [2] in front of their eyes. These devices can save time, [3] they also raise new concerns about privacy and safety. For example, people nearby may not know [4] a hidden camera is recording them. To avoid accidents, experts recommend [5] such devices away during activities that require full attention.",
      questions: [
        { id: 1, options: ["A. deny", "B. receive", "C. delete", "D. forget"], answer: "B", explanation: "receive information 表「接收資訊」，符合穿戴式科技改變人們獲取資訊方式的語意。" },
        { id: 2, options: ["A. rarely", "B. hardly", "C. slowly", "D. directly"], answer: "D", explanation: "directly in front of their eyes 表「就在眼前」，說明資訊直接顯示在眼前。" },
        { id: 3, options: ["A. so", "B. for", "C. but", "D. or"], answer: "C", explanation: "but 表轉折，前句說優點（節省時間），後句說隱憂（隱私與安全）。" },
        { id: 4, options: ["A. whether", "B. what", "C. which", "D. who"], answer: "A", explanation: "whether 引導名詞子句，作 know 的受詞，表「是否」有隱藏鏡頭正在錄影。" },
        { id: 5, options: ["A. put", "B. to put", "C. putting", "D. puts"], answer: "C", explanation: "recommend + V-ing 為固定用法，表「建議做…」。" },
      ]
    },
    wordBank: {
      words: ["(A) augmented", "(B) battery", "(C) caption", "(D) device", "(E) gadget", "(F) hands-free", "(G) notification", "(H) real-time", "(I) surveillance", "(J) wearable"],
      passage: "Smart glasses belong to a growing category of [1] technology designed to be worn on the body.\n\nUnlike a phone, they allow users to stay [2] while cooking, cycling, or carrying bags.\n\nSome models display a [3] under a speaker's face, turning spoken words into text.\n\nMap apps can provide [4] updates that change instantly as the user turns a corner.\n\nSome glasses use [5] reality, adding digital images on top of the world the user sees.\n\nEach new [6] promises to make life a little easier, from smart watches to smart rings.\n\nHowever, every pop-up [7] can pull the wearer's attention away from the road.\n\nBecause they are small, smart glasses usually have limited [8] life.\n\nCritics worry that hidden cameras could lead to a form of everyday [9].\n\nLike any electronic [10], smart glasses should be used responsibly.",
      answers: { 1: "J", 2: "F", 3: "C", 4: "H", 5: "A", 6: "E", 7: "G", 8: "B", 9: "I", 10: "D" }
    },
    discourse: {
      options: [
        "A. Because the camera is hidden in the frame, people nearby may not realize they are being recorded.",
        "B. A sudden message appearing in front of the eyes could pull a walker's attention away from traffic.",
        "C. Hidden inside, however, are tools that can record videos, play music, and display translations.",
        "D. Travelers can follow maps while carrying luggage, and chefs can read recipes without touching a screen.",
        "E. Some fashion brands now sell smart glasses in a wide range of colors."
      ],
      paragraphs: [
        "Smart glasses are one of the newest examples of technology moving closer to our bodies.",
        "At first glance, they look almost exactly like ordinary eyeglasses. [1]",
        "These features can save time in many everyday situations. [2] Yet the same technology also raises serious concerns. [3]",
        "Distraction is another risk that users should not ignore. [4]"
      ],
      answers: { 1: "C", 2: "D", 3: "A", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Smart glasses should be banned.", "B. Smart glasses offer useful features but also bring privacy and safety risks.", "C. Smart glasses are only useful for chefs.", "D. Smart glasses cannot connect to the internet."], answer: "B", explanation: "主旨題。全文先介紹智慧眼鏡的便利功能，再說明隱私與分心等風險。" },
        { id: 2, question: "Which of the following is mentioned as something smart glasses can do?", options: ["A. Cook meals automatically.", "B. Replace a car's navigation system.", "C. Charge a smartphone.", "D. Show translations in front of the wearer's eyes."], answer: "D", explanation: "細節題。文中提到智慧眼鏡可以「show messages, directions, captions, or translations in front of the wearer's eyes」。" },
        { id: 3, question: "According to the article, why might others not notice when smart glasses start recording?", options: ["A. The camera is hidden in the frames.", "B. The glasses make no sound at all.", "C. Recording only happens at night.", "D. The glasses are completely invisible."], answer: "A", explanation: "細節題。文中指出「The camera is hidden in the frames, so others may not notice when recording begins」。" },
        { id: 4, question: "What does the author most likely recommend?", options: ["A. Avoiding smart glasses entirely.", "B. Using them while crossing the road.", "C. Using them with care and putting them away when full attention is needed.", "D. Waiting until they become cheaper."], answer: "C", explanation: "推論題。作者建議在需要全神貫注時收起眼鏡，並強調「they should be used with care」。" }
      ]
    }
  },

  "Unit 11": {
    title: "Extreme Heat and Aging: A Newly Confirmed Health Risk",
    chineseTitle: "天氣越熱 老得越快？研究揭露熱浪老化危機",
    passage: `Hot days do more than make us sweat. Research suggests that long periods of extreme heat may also make our bodies grow older more quickly.

In the study, researchers looked at health data of about 25,000 adults in Taiwan over a 15-year period. They studied the adults' biological age by measuring blood pressure, cholesterol, and inflammation. Also, the team checked how well their major organs such as the heart and kidneys worked. The results showed that people who went through more heat wave days over two years aged eight to 12 days faster. The change doesn't seem huge; however, researchers warned that the effects could build up over time. People who work outside are especially in danger because they often have to work in the hot sun.

Scientists still don't fully understand how extreme heat may speed up aging. One possible reason is that long periods of high temperature may harm cells or damage DNA. Further research is needed to explain this health problem.`,
    chineseTranslation: `炎熱的天氣不只會讓我們流汗。研究指出，長期處於極端高溫下，也可能讓我們的身體老化得更快。

在這項研究中，研究人員分析了臺灣約兩萬五千名成年人長達十五年的健康資料。他們透過測量血壓、膽固醇與發炎指數來研究這些成年人的生理年齡，同時也檢查了心臟、腎臟等主要器官的運作狀況。結果顯示，兩年內經歷較多熱浪天數的人，老化速度快了八到十二天。這樣的變化看似不大，但研究人員警告，這些影響可能會隨著時間不斷累積。在戶外工作的人尤其危險，因為他們經常必須在烈日下工作。

科學家目前仍不完全了解極端高溫如何加速老化。其中一個可能的原因是，長時間的高溫可能會傷害細胞或破壞DNA。要解釋這個健康問題，還需要進一步的研究。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "extreme", pos: "adj.", meaning: "極端的", collocations: "extreme heat 極端高溫" },
        { id: 2, word: "biological", pos: "adj.", meaning: "生理的、生物的", collocations: "biological age 生理年齡" },
        { id: 3, word: "inflammation", pos: "n.", meaning: "發炎", collocations: "measuring inflammation 測量發炎指數" },
        { id: 4, word: "organ", pos: "n.", meaning: "器官", collocations: "major organs 主要器官" },
        { id: 5, word: "warn", pos: "v.", meaning: "警告", collocations: "researchers warned that... 研究人員警告…" },
        { id: 6, word: "harm", pos: "v.", meaning: "傷害", collocations: "harm cells 傷害細胞" }
      ],
      grammarNotes: [
        { id: "G1", title: "do more than + VR (不只是…)", excerpt: "Hot days do more than make us sweat", analysis: "do more than + 原形動詞，表「不只是做…」，說明炎熱的天氣影響不僅止於讓人流汗。" },
        { id: "G2", title: "how + adv. 引導名詞子句", excerpt: "how well their major", analysis: "how well ... worked 為名詞子句，作 checked 的受詞，表「主要器官運作得多好」。" }
      ],
      patternNotes: [
        { id: "P1", title: "by + V-ing (藉由…方式)", excerpt: "by measuring blood pressure, cholesterol, and", analysis: "by + 動名詞，表「藉由…」，說明研究人員如何評估受試者的生理年齡。" },
        { id: "P2", title: "One possible reason is that... (一個可能的原因是…)", excerpt: "One possible reason is that long periods of high temperature may", analysis: "One possible reason is that + 子句，用於提出推測性的解釋，that 子句作主詞補語。" }
      ],
      paragraphs: [
        [
          { type: 'grammar', text: `Hot days do more than make us sweat`, gid: 'G1' },
          { type: 'text', text: `. Research suggests that long periods of ` },
          { type: 'vocab', text: `extreme`, vid: 1 },
          { type: 'text', text: ` heat may also make our bodies grow older more quickly.` }
        ],
        [
          { type: 'text', text: `In the study, researchers looked at health data of about 25,000 adults in Taiwan over a 15-year period. They studied the adults' ` },
          { type: 'vocab', text: `biological`, vid: 2 },
          { type: 'text', text: ` age ` },
          { type: 'pattern', text: `by measuring blood pressure, cholesterol, and`, pid: 'P1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `inflammation`, vid: 3 },
          { type: 'text', text: `. Also, the team checked ` },
          { type: 'grammar', text: `how well their major`, gid: 'G2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `organs`, vid: 4 },
          { type: 'text', text: ` such as the heart and kidneys worked. The results showed that people who went through more heat wave days over two years aged eight to 12 days faster. The change doesn't seem huge; however, researchers ` },
          { type: 'vocab', text: `warned`, vid: 5 },
          { type: 'text', text: ` that the effects could build up over time. People who work outside are especially in danger because they often have to work in the hot sun.` }
        ],
        [
          { type: 'text', text: `Scientists still don't fully understand how extreme heat may speed up aging. ` },
          { type: 'pattern', text: `One possible reason is that long periods of high temperature may`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `harm`, vid: 6 },
          { type: 'text', text: ` cells or damage DNA. Further research is needed to explain this health problem.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The desert can reach ______ temperatures of over 50°C.", options: ["A. mild", "B. gentle", "C. extreme", "D. average"], answer: "C", explanation: "【選項解析】\n- (A) mild (adj.) 溫和的\n- (B) gentle (adj.) 輕柔的\n- (C) extreme (adj.) 極端的 (正解)\n- (D) average (adj.) 平均的" },
      { id: 2, question: "Your ______ age may be different from the number of years you have lived.", options: ["A. biological", "B. legal", "C. musical", "D. political"], answer: "A", explanation: "【選項解析】\n- (A) biological (adj.) 生理的 (正解)\n- (B) legal (adj.) 法律的\n- (C) musical (adj.) 音樂的\n- (D) political (adj.) 政治的" },
      { id: 3, question: "The heart and the kidneys are important ______ in the human body.", options: ["A. bones", "B. nerves", "C. hairs", "D. organs"], answer: "D", explanation: "【選項解析】\n- (A) bones (n.) 骨頭\n- (B) nerves (n.) 神經\n- (C) hairs (n.) 毛髮\n- (D) organs (n.) 器官 (正解)" },
      { id: 4, question: "The doctor ______ him that smoking could damage his lungs.", options: ["A. promised", "B. warned", "C. thanked", "D. invited"], answer: "B", explanation: "【選項解析】\n- (A) promised (v.) 承諾\n- (B) warned (v.) 警告 (正解)\n- (C) thanked (v.) 感謝\n- (D) invited (v.) 邀請" },
    ],
    cloze: {
      text: "Rising global temperatures are affecting human health in ways scientists are only beginning [1] understand. Heat waves are no longer rare events; [2], they are becoming longer and more frequent in many regions. Researchers have found that repeated exposure to extreme heat may place extra stress [3] the body's organs. [4] the effects of a single hot day may be small, they can add up over many years. Outdoor workers face the greatest risk, [5] they often spend long hours under the hot sun.",
      questions: [
        { id: 1, options: ["A. for", "B. to", "C. of", "D. at"], answer: "B", explanation: "begin to + VR 表「開始…」，指科學家才剛開始了解。" },
        { id: 2, options: ["A. instead", "B. otherwise", "C. besides", "D. therefore"], answer: "A", explanation: "instead 表「反而、相反地」，說明熱浪不再罕見，反而變得更長、更頻繁。" },
        { id: 3, options: ["A. with", "B. at", "C. from", "D. on"], answer: "D", explanation: "place stress on + N. 為固定搭配，表「對…造成壓力／負擔」。" },
        { id: 4, options: ["A. Because", "B. Unless", "C. Although", "D. Since"], answer: "C", explanation: "Although 引導讓步子句，表「雖然」，與後句「長期累積」形成對比。" },
        { id: 5, options: ["A. unless", "B. since", "C. although", "D. so that"], answer: "B", explanation: "since 引導原因子句，表「因為」，說明戶外工作者風險最高的原因。" },
      ]
    },
    wordBank: {
      words: ["(A) aging", "(B) climate", "(C) dehydration", "(D) exposure", "(E) heatstroke", "(F) humidity", "(G) outdoor", "(H) shade", "(I) temperature", "(J) vulnerable"],
      passage: "As the global [1] changes, many cities are experiencing hotter summers than ever before.\n\nHigh [2] makes hot weather feel even worse because sweat cannot evaporate easily.\n\nNot drinking enough water on hot days can quickly lead to [3].\n\nIn severe cases, people may suffer from [4], a dangerous condition that requires emergency care.\n\nLong-term [5] to extreme heat may affect the body in ways scientists are still studying.\n\nSome research even suggests that heat may speed up the [6] process.\n\nWorkers in [7] jobs, such as farming and construction, face especially high risks.\n\nOlder adults and young children are particularly [8] to heat-related illness.\n\nResting in the [9] during the hottest hours of the day can help lower the risk.\n\nDoctors recommend checking the daily [10] before planning long activities outside.",
      answers: { 1: "B", 2: "F", 3: "C", 4: "E", 5: "D", 6: "A", 7: "G", 8: "J", 9: "H", 10: "I" }
    },
    discourse: {
      options: [
        "A. One possibility is that long periods of high temperatures could damage cells or DNA.",
        "B. They measured signs such as blood pressure and inflammation to estimate each person's biological age.",
        "C. However, researchers warn that these small effects could add up over a lifetime.",
        "D. Those who work outdoors, for example, often spend long hours in the hot sun.",
        "E. Air conditioning sales in Taiwan have increased steadily over the past decade."
      ],
      paragraphs: [
        "Most people think of heat waves as uncomfortable, but new research suggests they may also have long-term effects on health.",
        "Researchers in Taiwan studied the health records of tens of thousands of adults over many years. [1]",
        "The difference in aging speed may appear small at first. [2] Some groups of people appear to be at greater risk than others. [3]",
        "Scientists are still trying to understand exactly why heat might speed up aging. [4]"
      ],
      answers: { 1: "B", 2: "C", 3: "D", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Hot weather has no effect on health.", "B. Taiwan has the hottest climate in the world.", "C. Only children are affected by heat waves.", "D. Long periods of extreme heat may speed up how quickly our bodies age."], answer: "D", explanation: "主旨題。全文介紹研究發現長期極端高溫可能加速身體老化。" },
        { id: 2, question: "According to the article, about how many adults were included in the study?", options: ["A. About 25,000.", "B. About 2,500.", "C. About 15,000.", "D. About 250,000."], answer: "A", explanation: "細節題。文中指出研究分析了「about 25,000 adults in Taiwan」。" },
        { id: 3, question: "According to the article, how much faster did people who experienced more heat wave days age?", options: ["A. Two to three years.", "B. About one month.", "C. Eight to 12 days.", "D. 15 years."], answer: "C", explanation: "細節題。文中指出這些人「aged eight to 12 days faster」。" },
        { id: 4, question: "What can be inferred from the last paragraph?", options: ["A. Scientists have fully explained how heat causes aging.", "B. More studies are needed before the cause is clearly understood.", "C. DNA is not affected by temperature.", "D. The study's results were proven wrong."], answer: "B", explanation: "推論題。文中提到科學家「still don't fully understand」，且「Further research is needed」。" }
      ]
    }
  },

  "Unit 12": {
    title: "Hear Me Out! Which Earphones Fit Your Life Best?",
    chineseTitle: "耳機「線」在式——有線無線怎麼選？",
    passage: `Wired earphones have recently become popular again because of their old-school look. At the same time, wireless earphones are still very common today. You might wonder: which type of earphones is better? Let's look at a few key points!

Which choice gives you better sound quality?

Wired earphones send sound directly through a cable, so the signal stays steady and is less likely to break up. The clearer signal can help preserve more musical details, such as soft notes behind the main melody. Meanwhile, wireless earphones send sound through Bluetooth. Bluetooth, however, can only carry so much data at once, so the audio may be compressed before it reaches your ears. This can affect the listening experience.

What about audio lag?

When it comes to playing games or editing videos, audio and picture need to match. Sound sent through a cable can reach your ears almost immediately. This means wired earphones usually have less sound delay, whereas wireless ones need extra processing time. The lag is usually small, but some users might still notice it.

Which choice is more convenient?

Wired earphones are not as easy to carry around. Their cords may get tangled in your bag or pocket. Also, many new cellphones no longer have a headphone jack, so you need an adapter to use wired earphones. Wireless earphones, however, offer users greater freedom since there is no cable to get caught on things. Many models also come with useful features, including blocking outside noise and pausing the music when you take them off.

What about power needs and how long the earphones last?

Wired earphones do not require charging. You can simply plug them in and use them anytime. Normally, if you store them properly, they may continue working for many years. Wireless earphones, on the other hand, contain batteries. The batteries tend to hold less charge after about two or three years of frequent use. At that point, users might need to buy a new pair.

In the end, this comparison shows that neither type is always superior. The better choice depends on what you care about most.`,
    chineseTranslation: `有線耳機最近因為復古的造型而再度流行起來；與此同時，無線耳機在今日依然非常普遍。你或許會好奇：哪一種耳機比較好呢？讓我們來看看幾個重點吧！

哪一種的音質比較好？

有線耳機直接透過線材傳送聲音，因此訊號穩定，不容易中斷。較清晰的訊號有助於保留更多音樂細節，例如主旋律背後輕柔的音符。另一方面，無線耳機則是透過藍牙傳送聲音。然而，藍牙一次能傳輸的資料量有限，因此音訊在傳到你耳朵之前可能會被壓縮，進而影響聆聽體驗。

那聲音延遲呢？

在玩遊戲或剪輯影片時，聲音和畫面必須同步。透過線材傳送的聲音幾乎能立刻傳到你的耳朵，這表示有線耳機的聲音延遲通常較少，而無線耳機則需要額外的處理時間。延遲通常很小，但有些使用者仍可能察覺得到。

哪一種比較方便？

有線耳機不那麼容易隨身攜帶，線材可能會在包包或口袋裡纏成一團。此外，許多新款手機已經沒有耳機孔，因此你需要轉接頭才能使用有線耳機。相較之下，無線耳機讓使用者擁有更大的自由，因為沒有線材會勾到東西。許多款式還附有實用的功能，包括阻隔外界噪音，以及在你拿下耳機時自動暫停音樂。

那電力需求與耳機能用多久呢？

有線耳機不需要充電，隨時插上就能使用。一般來說，只要妥善收納，它們可能可以使用很多年。另一方面，無線耳機內含電池，在頻繁使用約兩、三年後，電池的蓄電量往往會下降。到那時，使用者可能就需要買一副新的。

總而言之，這番比較顯示，沒有哪一種耳機永遠比較優秀。比較好的選擇，取決於你最在乎的是什麼。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "steady", pos: "adj.", meaning: "穩定的", collocations: "the signal stays steady 訊號保持穩定" },
        { id: 2, word: "compress", pos: "v.", meaning: "壓縮", collocations: "the audio may be compressed 音訊可能被壓縮" },
        { id: 3, word: "delay", pos: "n.", meaning: "延遲", collocations: "less sound delay 較少的聲音延遲" },
        { id: 4, word: "tangle", pos: "v.", meaning: "纏結", collocations: "get tangled 纏成一團" },
        { id: 5, word: "frequent", pos: "adj.", meaning: "頻繁的", collocations: "frequent use 頻繁使用" },
        { id: 6, word: "superior", pos: "adj.", meaning: "較優秀的", collocations: "always superior 永遠較優秀" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞片語修飾名詞", excerpt: "Sound sent through a cable", analysis: "sent through a cable 為過去分詞片語，修飾 Sound（＝Sound that is sent through a cable），表「透過線材傳送的聲音」。" },
        { id: "G2", title: "whereas 引導對比子句", excerpt: "whereas wireless ones need extra processing time", analysis: "whereas 引導對比子句，表「然而、反之」，對比有線與無線耳機在延遲上的差異。" }
      ],
      patternNotes: [
        { id: "P1", title: "When it comes to + N./V-ing (談到…)", excerpt: "When it comes to playing games or editing videos", analysis: "When it comes to 後接名詞或動名詞，表「說到、談到…」，用於引出要討論的情境。" },
        { id: "P2", title: "neither + 單數名詞 (兩者皆不…)", excerpt: "this comparison shows that neither type is always", analysis: "neither 後接單數名詞與單數動詞，表「兩者都不…」，說明有線與無線耳機都不是永遠比較好。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Wired earphones have recently become popular again because of their old-school look. At the same time, wireless earphones are still very common today. You might wonder: which type of earphones is better? Let's look at a few key points!` }
        ],
        [
          { type: 'text', text: `Which choice gives you better sound quality?\n\nWired earphones send sound directly through a cable, so the signal stays ` },
          { type: 'vocab', text: `steady`, vid: 1 },
          { type: 'text', text: ` and is less likely to break up. The clearer signal can help preserve more musical details, such as soft notes behind the main melody. Meanwhile, wireless earphones send sound through Bluetooth. Bluetooth, however, can only carry so much data at once, so the audio may be ` },
          { type: 'vocab', text: `compressed`, vid: 2 },
          { type: 'text', text: ` before it reaches your ears. This can affect the listening experience.` }
        ],
        [
          { type: 'text', text: `What about audio lag?\n\n` },
          { type: 'pattern', text: `When it comes to playing games or editing videos`, pid: 'P1' },
          { type: 'text', text: `, audio and picture need to match. ` },
          { type: 'grammar', text: `Sound sent through a cable`, gid: 'G1' },
          { type: 'text', text: ` can reach your ears almost immediately. This means wired earphones usually have less sound ` },
          { type: 'vocab', text: `delay`, vid: 3 },
          { type: 'text', text: `, ` },
          { type: 'grammar', text: `whereas wireless ones need extra processing time`, gid: 'G2' },
          { type: 'text', text: `. The lag is usually small, but some users might still notice it.` }
        ],
        [
          { type: 'text', text: `Which choice is more convenient?\n\nWired earphones are not as easy to carry around. Their cords may get ` },
          { type: 'vocab', text: `tangled`, vid: 4 },
          { type: 'text', text: ` in your bag or pocket. Also, many new cellphones no longer have a headphone jack, so you need an adapter to use wired earphones. Wireless earphones, however, offer users greater freedom since there is no cable to get caught on things. Many models also come with useful features, including blocking outside noise and pausing the music when you take them off.` }
        ],
        [
          { type: 'text', text: `What about power needs and how long the earphones last?\n\nWired earphones do not require charging. You can simply plug them in and use them anytime. Normally, if you store them properly, they may continue working for many years. Wireless earphones, on the other hand, contain batteries. The batteries tend to hold less charge after about two or three years of ` },
          { type: 'vocab', text: `frequent`, vid: 5 },
          { type: 'text', text: ` use. At that point, users might need to buy a new pair.` }
        ],
        [
          { type: 'text', text: `In the end, ` },
          { type: 'pattern', text: `this comparison shows that neither type is always`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `superior`, vid: 6 },
          { type: 'text', text: `. The better choice depends on what you care about most.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Keep your hands ______ while taking the photo so it won't be blurry.", options: ["A. steady", "B. shaky", "C. empty", "D. loose"], answer: "A", explanation: "【選項解析】\n- (A) steady (adj.) 穩定的 (正解)\n- (B) shaky (adj.) 搖晃的\n- (C) empty (adj.) 空的\n- (D) loose (adj.) 鬆的" },
      { id: 2, question: "Bad weather caused a two-hour ______ to our flight.", options: ["A. reward", "B. discount", "C. delay", "D. upgrade"], answer: "C", explanation: "【選項解析】\n- (A) reward (n.) 獎勵\n- (B) discount (n.) 折扣\n- (C) delay (n.) 延誤 (正解)\n- (D) upgrade (n.) 升級" },
      { id: 3, question: "My headphone cord always gets ______ in my backpack.", options: ["A. polished", "B. repaired", "C. charged", "D. tangled"], answer: "D", explanation: "【選項解析】\n- (A) polished (adj.) 擦亮的\n- (B) repaired (adj.) 修好的\n- (C) charged (adj.) 充好電的\n- (D) tangled (adj.) 纏成一團的 (正解)" },
      { id: 4, question: "This new phone's camera is clearly ______ to the old model, with sharper photos in every situation.", options: ["A. similar", "B. superior", "C. identical", "D. inferior"], answer: "B", explanation: "【選項解析】\n- (A) similar (adj.) 相似的\n- (B) superior (adj.) 較優秀的 (正解)\n- (C) identical (adj.) 完全相同的\n- (D) inferior (adj.) 較差的" },
    ],
    cloze: {
      text: "Choosing a pair of earphones can be harder than it seems, since each type has its own strengths [1] weaknesses. Wired earphones send sound through a cable, [2] provides a steady signal and almost no delay. Wireless earphones, by contrast, offer more freedom of movement [3] there is no cord to get in the way. However, their batteries tend to wear out [4] a few years of frequent use. [5], the best choice depends on how and where each person plans to use them.",
      questions: [
        { id: 1, options: ["A. or", "B. but", "C. and", "D. nor"], answer: "C", explanation: "strengths and weaknesses 表「優點與缺點」，以 and 連接兩個並列名詞。" },
        { id: 2, options: ["A. which", "B. what", "C. who", "D. where"], answer: "A", explanation: "which 引導非限定關係子句，代替前面整句概念（透過線材傳送聲音）。" },
        { id: 3, options: ["A. unless", "B. although", "C. so that", "D. because"], answer: "D", explanation: "because 引導原因子句，說明無線耳機活動較自由的原因。" },
        { id: 4, options: ["A. before", "B. after", "C. during", "D. until"], answer: "B", explanation: "after + 時間，表「在…之後」，指使用數年之後電池會逐漸老化。" },
        { id: 5, options: ["A. Otherwise", "B. Instead", "C. Ultimately", "D. Meanwhile"], answer: "C", explanation: "Ultimately 表「最終、歸根究柢」，用於總結全文結論。" },
      ]
    },
    wordBank: {
      words: ["(A) adapter", "(B) audio", "(C) Bluetooth", "(D) charge", "(E) compatible", "(F) durable", "(G) headphone", "(H) noise-canceling", "(I) portable", "(J) wireless"],
      passage: "Many listeners care most about clear, high-quality [1] when choosing earphones.\n\nEarphones that are [2] connect to a phone without any cables at all.\n\nMost of these earphones rely on [3] technology to receive sound from a device.\n\nBecause they are small and light, earbuds are highly [4] and easy to slip into a pocket.\n\nSome newer phones have removed the traditional [5] jack completely.\n\nWithout that jack, users may need an [6] to connect wired earphones.\n\nNot every pair of earphones is [7] with every phone or computer.\n\nModels with [8] technology can block out the sound of traffic or crowds.\n\nWireless earphones slowly lose their ability to hold a [9] and must be plugged in regularly.\n\nA well-made, [10] pair of earphones can last for many years if stored properly.",
      answers: { 1: "B", 2: "J", 3: "C", 4: "I", 5: "G", 6: "A", 7: "E", 8: "H", 9: "D", 10: "F" }
    },
    discourse: {
      options: [
        "A. With no cord to tangle or catch on things, they are easier to carry and move around with.",
        "B. Gamers and video editors, for example, need the sound to match the picture with almost no delay.",
        "C. Wired earphones never need charging, while wireless batteries usually weaken after a few years.",
        "D. Because a cable carries a steadier signal, wired earphones can often preserve more musical detail.",
        "E. Many stores now offer free trials so customers can test earphones before buying them."
      ],
      paragraphs: [
        "Earphones may seem like a simple purchase, but choosing between wired and wireless models involves several trade-offs.",
        "Sound quality is often the first thing listeners compare. [1]",
        "Timing can matter just as much as sound quality for some users. [2] Convenience, on the other hand, tends to favor wireless models. [3]",
        "Finally, power and lifespan are worth considering before buying. [4]"
      ],
      answers: { 1: "D", 2: "B", 3: "A", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. Wired earphones are always better than wireless ones.", "B. Wireless earphones will soon replace wired ones completely.", "C. Wired and wireless earphones each have advantages, so the best choice depends on the user's needs.", "D. Bluetooth technology has no effect on sound quality."], answer: "C", explanation: "主旨題。全文比較有線與無線耳機的優缺點，結論是最佳選擇取決於使用者在意什麼。" },
        { id: 2, question: "According to the article, why may wireless earphones have lower sound quality?", options: ["A. Bluetooth can carry only limited data, so the audio may be compressed.", "B. Wireless earphones have smaller batteries.", "C. Wireless earphones block outside noise.", "D. Their cords get tangled easily."], answer: "A", explanation: "細節題。文中指出藍牙「can only carry so much data at once, so the audio may be compressed」。" },
        { id: 3, question: "According to the article, why might users need an adapter?", options: ["A. Wireless earphones need extra charging.", "B. Bluetooth signals are too weak.", "C. Wired earphones are too long.", "D. Many new phones no longer have a headphone jack."], answer: "D", explanation: "細節題。文中指出「many new cellphones no longer have a headphone jack, so you need an adapter」。" },
        { id: 4, question: "Based on the article, who would most likely prefer wired earphones?", options: ["A. Someone who jogs and dislikes cords.", "B. A video editor who needs sound to match the picture closely.", "C. A person who wants noise-blocking features.", "D. Someone who often loses things in their bag."], answer: "B", explanation: "推論題。有線耳機延遲較少，最適合需要聲音與畫面同步的影片剪輯者。" }
      ]
    }
  }
};
if (typeof window !== 'undefined') { window.MAGAZINE_UNITS_4U202510 = MAGAZINE_UNITS_4U202510; }
