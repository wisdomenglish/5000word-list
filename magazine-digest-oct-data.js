// 空中美語 Digest 10月號（課文 Unit 1,2,3,4,6,7,8,10,11,12,14,15，共 12 篇）
// 原始課文來源：空中美語Digest10月號_文章彙整.docx（Google Drive，使用者逐字轉錄，掃描辨識錯誤已人工校對）。
// Unit 1、14（克漏字）、Unit 6（文意選填）、Unit 10（篇章結構）原雜誌本身即為該題型：該題型直接沿用
// 雜誌原本的空格與選項，答案由 Claude 依上下文判斷（原檔不附答案），passage 放填入答案後的完整文章；
// 其餘題型皆由 Claude 依黃金標準規範原創產製，答案字母從下筆即隨機打散。
// 已逐一通過結構性驗證，但建議實際使用前仍抽查內容品質。
const MAGAZINE_UNITS_DIGEST202510 = {
  "Unit 1": {
    title: "The Yeti: Monster, Myth, or Bear?",
    chineseTitle: "喜馬拉雅山中的神祕雪人",
    passage: `High in the Himalayas, local people have told stories for centuries about a mysterious creature covered in fur and walking on two legs through the snow. Known as the Yeti, it is sometimes called the Abominable Snowman in the West — a name originating from a mistranslation in 1921. The term metoh-kangmi, a Himalayan phrase often interpreted as "man-bear snowman," was mistakenly translated as "abominable snowman," and the frightening label stuck.

For Sherpa communities in Nepal and Tibet, the Yeti has never been seen as a mere monster. It holds a place in religious tradition, sometimes described as a guardian spirit of the mountains or a creature capable of crossing between the physical and spiritual worlds. Local beliefs even recognize several types, ranging from a fierce fifteen-foot giant to a smaller, red-furred being that moves silently through the forest.

Western explorers brought the legend to global attention in the 20th century, triggering a wave of expeditions to the Himalayas. Temples in Nepal displayed what were claimed to be Yeti scalps and hand bones. However, scientific testing told a different story — the scalps turned out to be made from a local animal's hide, and the bones were identified as human remains. DNA analysis of hair samples later confirmed that the most likely explanation was simple: people had been spotting Himalayan brown bears all along.`,
    chineseTranslation: `在喜馬拉雅山的高處，當地人數百年來一直流傳著一種神祕生物的故事：牠全身覆滿毛髮，以雙腳在雪地中行走。這種生物被稱為「雪人」（Yeti），在西方有時又被稱作「可憎的雪人」——這個名稱源自1921年的一次誤譯。喜馬拉雅地區的詞語 metoh-kangmi，常被解讀為「人熊雪人」，卻被錯譯為「可憎的雪人」，這個嚇人的稱號從此便流傳下來。

對尼泊爾與西藏的雪巴族群而言，雪人從來不只是一頭怪物。牠在宗教傳統中占有一席之地，有時被描述為山中的守護靈，或是能穿梭於物質世界與靈性世界之間的生物。當地信仰甚至區分出好幾種類型，從兇猛、高達十五英尺的巨人，到體型較小、紅毛、在森林中悄然穿行的生物都有。

西方探險家在20世紀讓這個傳說受到全球矚目，掀起一波前往喜馬拉雅山的探險熱潮。尼泊爾的寺廟展示據稱是雪人頭皮與手骨的物品。然而，科學檢驗卻呈現了不同的結果——那些頭皮其實是用當地動物的獸皮製成，骨頭則被鑑定為人類遺骸。後來對毛髮樣本進行的DNA分析證實，最可能的解釋其實很簡單：人們一直以來看到的，就是喜馬拉雅棕熊。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "mysterious", pos: "adj.", meaning: "神祕的", collocations: "a mysterious creature 一種神祕生物" },
        { id: 2, word: "mistranslation", pos: "n.", meaning: "誤譯", collocations: "originating from a mistranslation 源自一次誤譯" },
        { id: 3, word: "mere", pos: "adj.", meaning: "僅僅的、只不過的", collocations: "a mere monster 只不過是一頭怪物" },
        { id: 4, word: "guardian", pos: "n.", meaning: "守護者", collocations: "a guardian spirit 守護靈" },
        { id: 5, word: "expedition", pos: "n.", meaning: "探險、遠征", collocations: "a wave of expeditions 一波探險熱潮" },
        { id: 6, word: "hide", pos: "n.", meaning: "獸皮", collocations: "a local animal's hide 當地動物的獸皮" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞構句（Known as...）", excerpt: "Known as the Yeti", analysis: "Known as the Yeti 為過去分詞構句（省略 Being），修飾主詞 it，表「被稱為雪人的這種生物」。" },
        { id: "G2", title: "what 引導名詞子句作受詞", excerpt: "what were claimed to be Yeti scalps and hand bones", analysis: "what 引導名詞子句，作動詞 displayed 的受詞，表「據稱是雪人頭皮與手骨的東西」。" }
      ],
      patternNotes: [
        { id: "P1", title: "range from A to B (範圍從A到B)", excerpt: "ranging from a fierce fifteen-foot giant to a smaller, red-furred being", analysis: "range from A to B 表「範圍從A到B」，此處以分詞片語說明當地信仰中雪人的不同類型。" },
        { id: "P2", title: "turn out to be + p.p. (結果證明是…)", excerpt: "the scalps turned out to be made from a local animal's", analysis: "turn out to be 表「結果證明是…」，說明檢驗後發現頭皮其實是獸皮製成。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `High in the Himalayas, local people have told stories for centuries about a ` },
          { type: 'vocab', text: `mysterious`, vid: 1 },
          { type: 'text', text: ` creature covered in fur and walking on two legs through the snow. ` },
          { type: 'grammar', text: `Known as the Yeti`, gid: 'G1' },
          { type: 'text', text: `, it is sometimes called the Abominable Snowman in the West — a name originating from a ` },
          { type: 'vocab', text: `mistranslation`, vid: 2 },
          { type: 'text', text: ` in 1921. The term metoh-kangmi, a Himalayan phrase often interpreted as "man-bear snowman," was mistakenly translated as "abominable snowman," and the frightening label stuck.` }
        ],
        [
          { type: 'text', text: `For Sherpa communities in Nepal and Tibet, the Yeti has never been seen as a ` },
          { type: 'vocab', text: `mere`, vid: 3 },
          { type: 'text', text: ` monster. It holds a place in religious tradition, sometimes described as a ` },
          { type: 'vocab', text: `guardian`, vid: 4 },
          { type: 'text', text: ` spirit of the mountains or a creature capable of crossing between the physical and spiritual worlds. Local beliefs even recognize several types, ` },
          { type: 'pattern', text: `ranging from a fierce fifteen-foot giant to a smaller, red-furred being`, pid: 'P1' },
          { type: 'text', text: ` that moves silently through the forest.` }
        ],
        [
          { type: 'text', text: `Western explorers brought the legend to global attention in the 20th century, triggering a wave of ` },
          { type: 'vocab', text: `expeditions`, vid: 5 },
          { type: 'text', text: ` to the Himalayas. Temples in Nepal displayed ` },
          { type: 'grammar', text: `what were claimed to be Yeti scalps and hand bones`, gid: 'G2' },
          { type: 'text', text: `. However, scientific testing told a different story — ` },
          { type: 'pattern', text: `the scalps turned out to be made from a local animal's`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `hide`, vid: 6 },
          { type: 'text', text: `, and the bones were identified as human remains. DNA analysis of hair samples later confirmed that the most likely explanation was simple: people had been spotting Himalayan brown bears all along.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Nobody knew who sent the ______ letter that had no name on it.", options: ["A. official", "B. ordinary", "C. careful", "D. mysterious"], answer: "D", explanation: "【選項解析】\n- (A) official (adj.) 官方的\n- (B) ordinary (adj.) 普通的\n- (C) careful (adj.) 小心的\n- (D) mysterious (adj.) 神祕的 (正解)" },
      { id: 2, question: "He was a ______ child of five when he first started playing the violin.", options: ["A. mere", "B. huge", "C. senior", "D. famous"], answer: "A", explanation: "【選項解析】\n- (A) mere (adj.) 僅僅的 (正解)\n- (B) huge (adj.) 巨大的\n- (C) senior (adj.) 年長的\n- (D) famous (adj.) 有名的" },
      { id: 3, question: "The old dog acted as a loyal ______ of the house.", options: ["A. visitor", "B. thief", "C. guardian", "D. tenant"], answer: "C", explanation: "【選項解析】\n- (A) visitor (n.) 訪客\n- (B) thief (n.) 小偷\n- (C) guardian (n.) 守護者 (正解)\n- (D) tenant (n.) 房客" },
      { id: 4, question: "The team set off on an ______ to climb the world's highest peak.", options: ["A. excuse", "B. expedition", "C. exception", "D. explosion"], answer: "B", explanation: "【選項解析】\n- (A) excuse (n.) 藉口\n- (B) expedition (n.) 探險、遠征 (正解)\n- (C) exception (n.) 例外\n- (D) explosion (n.) 爆炸" },
    ],
    cloze: {
      text: "High in the Himalayas, local people have told stories for centuries about a mysterious creature covered in fur and walking on two legs through the snow. Known as the Yeti, it is sometimes called the Abominable Snowman in the West — a name originating from a mistranslation in 1921. The term metoh-kangmi, a Himalayan phrase often interpreted as \"man-bear snowman,\" was mistakenly translated as \"abominable snowman,\" and the frightening [1] stuck.\n\nFor Sherpa communities in Nepal and Tibet, the Yeti has never been seen as a mere monster. It [2] religious tradition, sometimes described as a guardian spirit of the mountains or a creature capable of crossing between the physical and spiritual worlds. Local beliefs even recognize several types, ranging from a fierce fifteen-foot giant to a smaller, red-furred being [3] silently through the forest.\n\nWestern explorers brought the legend to global attention in the 20th century, [4] a wave of expeditions to the Himalayas. Temples in Nepal displayed what were claimed to be Yeti scalps and hand bones. However, scientific testing [5] — the scalps turned out to be made from a local animal's hide, and the bones were identified as human remains. DNA analysis of hair samples later confirmed that the most likely explanation was simple: people had been spotting Himalayan brown bears all along.",
      questions: [
        { id: 1, options: ["A. specimen", "B. capacity", "C. label", "D. beast"], answer: "C", explanation: "label 指「稱號、標籤」，承接前文 abominable snowman 這個譯名，表示這個嚇人的稱號從此沿用下來。" },
        { id: 2, options: ["A. gets rid of", "B. holds a place in", "C. steers clear of", "D. has no faith in"], answer: "B", explanation: "hold a place in 表「在…中占有一席之地」，與後文「被視為山中守護靈」相呼應。" },
        { id: 3, options: ["A. that moves", "B. moves", "C. to move", "D. moved"], answer: "A", explanation: "空格修飾名詞 being，需用形容詞子句 that moves（＝在森林中悄然穿行的生物）；moves 缺關代、to move 與 moved 語意不合。" },
        { id: 4, options: ["A. investing", "B. shielding", "C. ceasing", "D. triggering"], answer: "D", explanation: "分詞構句表結果，trigger 表「引發」，指西方探險家讓傳說爆紅，因而引發一波探險熱潮。" },
        { id: 5, options: ["A. supported earlier claims", "B. turned over a new leaf", "C. told a different story", "D. made up an excuse"], answer: "C", explanation: "tell a different story 表「呈現不同的結果」，與破折號後「頭皮其實是獸皮、骨頭是人骨」相符。" },
      ]
    },
    wordBank: {
      words: ["(A) creature", "(B) evidence", "(C) footprint", "(D) folklore", "(E) habitat", "(F) legend", "(G) remote", "(H) skeptic", "(I) sighting", "(J) specimen"],
      passage: "Stories about strange beasts living in [1] mountain areas have been told for generations.\n\nSuch tales are part of local [2], passed down from parents to children.\n\nThe [3] of the Yeti describes a large, hairy figure walking upright in the snow.\n\nEvery reported [4] of the creature attracts the attention of curious researchers.\n\nSome climbers claim to have photographed a huge [5] left in fresh snow.\n\nHowever, a single photo is rarely strong [6] that a new animal exists.\n\nScientists need a real [7], such as hair or bone, to study in a laboratory.\n\nA [8] usually doubts such stories until clear proof is found.\n\nBrown bears, which share the same mountain [9], may explain many of the reports.\n\nIn the end, the mysterious [10] may simply be an animal people already know.",
      answers: { 1: "G", 2: "D", 3: "F", 4: "I", 5: "C", 6: "B", 7: "J", 8: "H", 9: "E", 10: "A" }
    },
    discourse: {
      options: [
        "A. It plays a role in religious tradition and is sometimes seen as a guardian spirit of the mountains.",
        "B. DNA tests on hair samples pointed to Himalayan brown bears rather than an unknown species.",
        "C. Temples even displayed scalps and bones said to belong to the creature.",
        "D. It came from a 1921 mistranslation that turned a local phrase into \"abominable snowman.\"",
        "E. Some travel companies now offer Yeti-themed trekking tours."
      ],
      paragraphs: [
        "Few legends have captured the imagination quite like the story of a giant, hairy creature roaming the snowy Himalayas.",
        "Even the creature's well-known English nickname has an unusual origin. [1]",
        "For local communities, the Yeti means far more than a frightening beast. [2] Western explorers, however, were more interested in finding physical proof. [3]",
        "In the end, modern science offered a much simpler answer. [4]"
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. The Yeti has been proven to exist.", "B. Sherpa people fear the Yeti as a dangerous monster.", "C. The Yeti legend has cultural meaning, but science suggests the sightings were likely bears.", "D. Western explorers invented the Yeti story."], answer: "C", explanation: "主旨題。全文說明雪人傳說的由來與文化意義，最後指出科學證據顯示目擊的很可能是熊。" },
        { id: 2, question: "According to the article, where does the name \"Abominable Snowman\" come from?", options: ["A. A mistranslation of a Himalayan phrase in 1921.", "B. A Sherpa religious text.", "C. A popular Western novel.", "D. A temple in Nepal."], answer: "A", explanation: "細節題。文中指出這個名稱「originating from a mistranslation in 1921」。" },
        { id: 3, question: "According to the article, what did scientific testing reveal about the Yeti scalps?", options: ["A. They belonged to an unknown ape.", "B. They were made of metal.", "C. They came from a fifteen-foot giant.", "D. They were made from a local animal's hide."], answer: "D", explanation: "細節題。文中指出「the scalps turned out to be made from a local animal's hide」。" },
        { id: 4, question: "What does the phrase \"people had been spotting Himalayan brown bears all along\" suggest?", options: ["A. Bears had only recently arrived in the Himalayas.", "B. Many Yeti sightings were probably bears mistaken for a mysterious creature.", "C. Bears and Yetis live together in the mountains.", "D. Local people never actually saw any animals."], answer: "B", explanation: "推論題。all along 表「一直以來」，暗示許多所謂的雪人目擊其實都是把棕熊誤認成神祕生物。" }
      ]
    }
  },

  "Unit 2": {
    title: "News Watch",
    chineseTitle: "新聞剪影",
    passage: `Finland's Underground Answer to Nuclear Waste

Finland is preparing to open Onkalo, the world's first permanent underground repository for high-level nuclear waste. Located on Olkiluoto Island, the facility has been under construction since 2004 and extends more than 400 meters below the surface. Its name means "cave" in Finnish, but the project is far more complex than a simple hole in the ground.

At a nearby plant, highly radioactive fuel rods will be sealed inside copper canisters. These containers will then be placed in tunnels and surrounded by bentonite clay, a material that expands when wet and helps block water from reaching the waste. The surrounding bedrock, about 1.9 billion years old, was chosen for its stability and low earthquake risk.

Supporters argue that Onkalo offers a practical answer to one of nuclear energy's biggest questions: what to do with dangerous waste for the long term. Still, some experts warn that the long-term risks of corrosion and geological shifts remain difficult to predict. The facility is expected to operate for about a century before being permanently sealed.

Kimchi Bacteria May Help Flush Microplastics Out of the Body

Microplastics have become an invisible part of modern life, appearing in food, water, and even the human body. Now, researchers in South Korea have found that a bacterium from kimchi may offer a surprising way to reduce this problem.

The study focused on Leuconostoc mesenteroides CBA3656, a lactic acid bacterium isolated from kimchi. In laboratory tests, the bacterium was able to bind to polystyrene nanoplastics, which are even smaller than microplastics. Because of their tiny size, nanoplastics may pass through the intestinal barrier and build up in organs.

Animal experiments showed promising results. Mice given the kimchi-derived probiotic excreted more than twice as many nanoplastics in their feces as mice in the control group. Researchers believe the bacterium may help carry plastic particles out of the gut before they can accumulate in the body.

Still, scientists caution that the findings are preliminary. More human studies are needed before kimchi can be considered a proven solution.`,
    chineseTranslation: `芬蘭以地下設施解決核廢料問題

芬蘭正準備啟用「Onkalo」，這是全球第一座用來永久存放高階核廢料的地下處置場。這座設施位於奧爾基洛托島，自2004年起開始興建，深入地表下超過400公尺。它的名字在芬蘭語中意為「洞穴」，但這項工程遠比在地上挖個洞要複雜得多。

在附近的一座工廠裡，具有高度放射性的燃料棒將被密封在銅製容器中。這些容器接著會被放進隧道，並以膨潤土包覆——這種材料遇水會膨脹，有助於阻擋水接觸到廢料。周圍的岩床約有19億年歷史，因其穩定性高、地震風險低而雀屏中選。

支持者認為，Onkalo為核能最大的難題之一——如何長期處理危險廢料——提供了務實的解答。然而，也有專家警告，腐蝕與地質變動等長期風險仍難以預測。這座設施預計將運作約一個世紀，之後便會被永久封存。

泡菜細菌可能有助於將微塑膠排出體外

微塑膠已成為現代生活中看不見的一部分，出現在食物、水，甚至人體之中。如今，南韓研究人員發現，一種來自泡菜的細菌，或許能提供減少這個問題的意外方法。

這項研究聚焦於從泡菜中分離出的一種乳酸菌——腸膜明串珠菌 CBA3656。在實驗室測試中，這種細菌能與比微塑膠更小的聚苯乙烯奈米塑膠結合。由於體積極小，奈米塑膠可能穿過腸道屏障，並在器官中累積。

動物實驗顯示出令人期待的結果。服用這種泡菜益生菌的小鼠，糞便中排出的奈米塑膠數量是對照組小鼠的兩倍以上。研究人員認為，這種細菌或許能在塑膠微粒於體內累積之前，幫助將它們帶出腸道。

不過，科學家提醒，這些發現仍屬初步階段。在泡菜被視為經過證實的解決方案之前，還需要更多人體研究。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "permanent", pos: "adj.", meaning: "永久的", collocations: "a permanent underground repository 永久性的地下處置場" },
        { id: 2, word: "radioactive", pos: "adj.", meaning: "放射性的", collocations: "highly radioactive fuel rods 高度放射性的燃料棒" },
        { id: 3, word: "stability", pos: "n.", meaning: "穩定性", collocations: "chosen for its stability 因其穩定性而被選中" },
        { id: 4, word: "corrosion", pos: "n.", meaning: "腐蝕", collocations: "the risks of corrosion 腐蝕的風險" },
        { id: 5, word: "invisible", pos: "adj.", meaning: "看不見的", collocations: "an invisible part of modern life 現代生活中看不見的一部分" },
        { id: 6, word: "preliminary", pos: "adj.", meaning: "初步的", collocations: "the findings are preliminary 研究結果屬初步階段" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞構句表位置（Located...）", excerpt: "Located on Olkiluoto Island", analysis: "Located on... 為過去分詞構句（省略 Being），修飾主詞 the facility，說明這座設施的所在位置。" },
        { id: "G2", title: "that 引導形容詞子句（含省略的副詞子句）", excerpt: "a material that expands when wet", analysis: "that 引導形容詞子句修飾 material；when wet 為 when it is wet 的省略，表「遇水時會膨脹的材料」。" }
      ],
      patternNotes: [
        { id: "P1", title: "far + 比較級 + than (遠比…更…)", excerpt: "far more complex than a simple hole in the ground", analysis: "far 修飾比較級 more complex，加強比較程度，表「遠比在地上挖個洞複雜得多」。" },
        { id: "P2", title: "倍數 + as many + N. + as (是…的幾倍)", excerpt: "excreted more than twice as many nanoplastics in their feces as mice in the control group", analysis: "twice as many + 複數名詞 + as 表「是…的兩倍」，more than 則表「超過」，說明實驗組排出的奈米塑膠是對照組的兩倍以上。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Finland's Underground Answer to Nuclear Waste\n\nFinland is preparing to open Onkalo, the world's first ` },
          { type: 'vocab', text: `permanent`, vid: 1 },
          { type: 'text', text: ` underground repository for high-level nuclear waste. ` },
          { type: 'grammar', text: `Located on Olkiluoto Island`, gid: 'G1' },
          { type: 'text', text: `, the facility has been under construction since 2004 and extends more than 400 meters below the surface. Its name means "cave" in Finnish, but the project is ` },
          { type: 'pattern', text: `far more complex than a simple hole in the ground`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `At a nearby plant, highly ` },
          { type: 'vocab', text: `radioactive`, vid: 2 },
          { type: 'text', text: ` fuel rods will be sealed inside copper canisters. These containers will then be placed in tunnels and surrounded by bentonite clay, ` },
          { type: 'grammar', text: `a material that expands when wet`, gid: 'G2' },
          { type: 'text', text: ` and helps block water from reaching the waste. The surrounding bedrock, about 1.9 billion years old, was chosen for its ` },
          { type: 'vocab', text: `stability`, vid: 3 },
          { type: 'text', text: ` and low earthquake risk.` }
        ],
        [
          { type: 'text', text: `Supporters argue that Onkalo offers a practical answer to one of nuclear energy's biggest questions: what to do with dangerous waste for the long term. Still, some experts warn that the long-term risks of ` },
          { type: 'vocab', text: `corrosion`, vid: 4 },
          { type: 'text', text: ` and geological shifts remain difficult to predict. The facility is expected to operate for about a century before being permanently sealed.` }
        ],
        [
          { type: 'text', text: `Kimchi Bacteria May Help Flush Microplastics Out of the Body\n\nMicroplastics have become an ` },
          { type: 'vocab', text: `invisible`, vid: 5 },
          { type: 'text', text: ` part of modern life, appearing in food, water, and even the human body. Now, researchers in South Korea have found that a bacterium from kimchi may offer a surprising way to reduce this problem.` }
        ],
        [
          { type: 'text', text: `The study focused on Leuconostoc mesenteroides CBA3656, a lactic acid bacterium isolated from kimchi. In laboratory tests, the bacterium was able to bind to polystyrene nanoplastics, which are even smaller than microplastics. Because of their tiny size, nanoplastics may pass through the intestinal barrier and build up in organs.` }
        ],
        [
          { type: 'text', text: `Animal experiments showed promising results. Mice given the kimchi-derived probiotic ` },
          { type: 'pattern', text: `excreted more than twice as many nanoplastics in their feces as mice in the control group`, pid: 'P2' },
          { type: 'text', text: `. Researchers believe the bacterium may help carry plastic particles out of the gut before they can accumulate in the body.` }
        ],
        [
          { type: 'text', text: `Still, scientists caution that the findings are ` },
          { type: 'vocab', text: `preliminary`, vid: 6 },
          { type: 'text', text: `. More human studies are needed before kimchi can be considered a proven solution.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "After years of renting, they finally found a ______ home.", options: ["A. temporary", "B. permanent", "C. portable", "D. narrow"], answer: "B", explanation: "【選項解析】\n- (A) temporary (adj.) 暫時的\n- (B) permanent (adj.) 永久的 (正解)\n- (C) portable (adj.) 可攜帶的\n- (D) narrow (adj.) 狹窄的" },
      { id: 2, question: "Workers must wear special suits when handling ______ materials.", options: ["A. organic", "B. edible", "C. recycled", "D. radioactive"], answer: "D", explanation: "【選項解析】\n- (A) organic (adj.) 有機的\n- (B) edible (adj.) 可食用的\n- (C) recycled (adj.) 回收的\n- (D) radioactive (adj.) 放射性的 (正解)" },
      { id: 3, question: "Most germs are ______ to the naked eye.", options: ["A. invisible", "B. delicious", "C. noisy", "D. visible"], answer: "A", explanation: "【選項解析】\n- (A) invisible (adj.) 看不見的 (正解)\n- (B) delicious (adj.) 美味的\n- (C) noisy (adj.) 吵鬧的\n- (D) visible (adj.) 看得見的" },
      { id: 4, question: "The ______ results look good, but more tests are needed.", options: ["A. final", "B. official", "C. preliminary", "D. permanent"], answer: "C", explanation: "【選項解析】\n- (A) final (adj.) 最終的\n- (B) official (adj.) 官方的\n- (C) preliminary (adj.) 初步的 (正解)\n- (D) permanent (adj.) 永久的" },
    ],
    cloze: {
      text: "Dealing with dangerous waste is one of the biggest challenges [1] modern societies. Some countries have decided to bury such waste deep underground, [2] it can remain isolated for thousands of years. Meanwhile, scientists are also searching for natural ways to remove tiny plastic particles [3] the human body. One promising study found that a type of bacteria may bind to these particles, [4] them to leave the body more easily. [5] these discoveries are encouraging, researchers agree that more testing is needed.",
      questions: [
        { id: 1, options: ["A. faced", "B. facing", "C. to face", "D. faces"], answer: "B", explanation: "現在分詞片語 facing modern societies 修飾 challenges，表「現代社會所面臨的挑戰」。" },
        { id: 2, options: ["A. which", "B. what", "C. where", "D. when"], answer: "C", explanation: "where 為關係副詞，代替地點 deep underground，表「在那裡」廢料可被隔絕數千年。" },
        { id: 3, options: ["A. from", "B. with", "C. into", "D. for"], answer: "A", explanation: "remove A from B 為固定搭配，表「將A從B中移除」。" },
        { id: 4, options: ["A. allowed", "B. to allow", "C. allows", "D. allowing"], answer: "D", explanation: "分詞構句表結果，現在分詞 allowing，表「使它們更容易排出體外」。" },
        { id: 5, options: ["A. Because", "B. Although", "C. Unless", "D. Since"], answer: "B", explanation: "Although 引導讓步子句，表「雖然」，與後句「仍需更多測試」形成對比。" },
      ]
    },
    wordBank: {
      words: ["(A) accumulate", "(B) bacteria", "(C) contamination", "(D) dispose", "(E) facility", "(F) hazardous", "(G) isolate", "(H) particle", "(I) probiotic", "(J) repository"],
      passage: "Countries that use nuclear power must find safe ways to [1] of their waste.\n\nSpent nuclear fuel is extremely [2] and must be handled with great care.\n\nA deep underground [3] is designed to store such waste for thousands of years.\n\nThe [4] is built inside solid bedrock far below the surface.\n\nEngineers hope to [5] the waste completely from groundwater.\n\nPlastic [6] can be found in food, water, and even the air we breathe.\n\nEach tiny plastic [7] is too small to see without a microscope.\n\nOver time, these pieces may [8] in the body's organs.\n\nCertain kinds of [9] found in fermented foods may help the body.\n\nA [10] supplement contains living microbes that support gut health.",
      answers: { 1: "D", 2: "F", 3: "J", 4: "E", 5: "G", 6: "C", 7: "H", 8: "A", 9: "B", 10: "I" }
    },
    discourse: {
      options: [
        "A. Some experts worry that corrosion or geological shifts could cause problems far in the future.",
        "B. Its purpose is to store highly radioactive waste safely for an extremely long period of time.",
        "C. Copper canisters, special clay, and stable rock all help keep water away from the waste.",
        "D. Researchers found that a bacterium from kimchi helped mice pass more nanoplastics out of their bodies.",
        "E. Nuclear power plants in several countries are expected to close within the next decade."
      ],
      paragraphs: [
        "Two recent science stories show how researchers are tackling problems that cannot be seen with the naked eye.",
        "In Finland, engineers have spent two decades building a facility deep inside ancient bedrock. [1]",
        "The design relies on several layers of protection working together. [2] Even so, not everyone is convinced the plan is risk-free. [3]",
        "Meanwhile, a very different study in South Korea focused on plastic pollution inside the body. [4]"
      ],
      answers: { 1: "B", 2: "C", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What do the two news stories have in common?", options: ["A. Both are about food safety in Finland.", "B. Both describe completed solutions that are proven safe.", "C. Both report on new types of plastic.", "D. Both describe scientific efforts to deal with harmful materials."], answer: "D", explanation: "主旨題。兩則新聞分別處理核廢料與微塑膠，都是在處理有害物質的科學努力。" },
        { id: 2, question: "According to the article, why was the bedrock at Olkiluoto chosen?", options: ["A. For its stability and low earthquake risk.", "B. Because it is close to the ocean.", "C. Because it contains copper.", "D. Because it is easy to dig."], answer: "A", explanation: "細節題。文中指出岩床「was chosen for its stability and low earthquake risk」。" },
        { id: 3, question: "According to the article, what did the mouse experiment show?", options: ["A. The mice stopped eating plastic.", "B. Kimchi made the mice grow faster.", "C. Mice given the probiotic excreted more than twice as many nanoplastics.", "D. The nanoplastics disappeared completely."], answer: "C", explanation: "細節題。文中指出實驗組小鼠「excreted more than twice as many nanoplastics」。" },
        { id: 4, question: "What can be inferred about the kimchi bacterium?", options: ["A. It is already used as a medicine for humans.", "B. Its effects on humans have not yet been confirmed.", "C. It works only in Finland.", "D. It increases microplastics in the body."], answer: "B", explanation: "推論題。文中提到研究結果「preliminary」且「More human studies are needed」，可知對人體的效果尚未證實。" }
      ]
    }
  },

  "Unit 3": {
    title: "The Concert Ticket Dilemma",
    chineseTitle: "演唱會搶票大作戰",
    passage: `Peggy and Kevin

Peggy: Kevin, have you managed to get the concert tickets yet? I've been trying to access the official website since noon, but it crashed within seconds after ticket sales began.

Kevin: Tell me about it! I experienced the exact same issue. As soon as the countdown timer hit zero, the website froze, and an error message said the server was temporarily unavailable. I kept refreshing the page for almost 40 minutes.

Peggy: It was really frustrating. I tried contacting customer service to see if they could help, but all I got was an automated message saying their phone lines were overloaded.

Kevin: Yeah, and by the time the system finally came back online, all the standard seats were sold out. The only tickets left were the premium VIP packages with front-row seats and special merchandise.

Peggy: Wow, those must be expensive. How much are they?

Kevin: They're NT$7,000 each.

Peggy: That's definitely expensive, but considering how much we love the band's music, I think we should just buy the VIP tickets before they sell out too.

Kevin: I disagree. That's nearly three times the original price we expected. I'm not sure I can justify spending that much.

Peggy: But this band rarely comes to Taiwan. We might not get another chance to see them live.

Kevin: You may be right, but I need some time to think about it before I make a decision. Let's check again tonight and decide then.

Concert Tickets: Refunds and Collection Policy

Thank you for purchasing tickets for the Aurora Lights World Tour in Taipei. To ensure a smooth entry process, please carefully review the following refund regulations and ticket collection procedures before the concert date.

Refund requests must be submitted within three days after purchase (excluding the date of purchase), and a handling fee of 5% may apply. Refunds are not available after this period, except in exceptional circumstances such as event cancellation, schedule changes announced by the organizer, or major changes to the performer lineup.

For ticket collection, customers who selected electronic tickets will receive a QR code through the mobile application about three days before the event. Attendees must present their QR code along with a valid photo ID at the venue entrance. Screenshots, printed copies, or altered digital tickets will not be accepted.

Customers who chose physical ticket collection may pick up their tickets at designated convenience stores beginning five days before the concert. Please remember to bring the collection number and the phone number used during registration.

In addition, the organizer would like to remind all customers that electronic tickets are strictly non-transferable. The name registered on the ticket must match the identification document presented at entry. Any unauthorized resale, transfer, or duplication of electronic tickets may result in immediate cancellation without refund.

For further assistance, please contact customer support through the official website or by calling the hotline during regular business hours.`,
    chineseTranslation: `Peggy 與 Kevin

Peggy：Kevin，你搶到演唱會門票了嗎？我從中午就一直想進官方網站，結果開賣後不到幾秒網站就當機了。

Kevin：別提了！我也遇到一模一樣的問題。倒數計時一歸零，網站就卡住，還跳出錯誤訊息說伺服器暫時無法使用。我狂按重新整理快四十分鐘。

Peggy：真的很讓人崩潰。我試著聯絡客服，看看他們能不能幫忙，結果只聽到自動語音說電話線路滿線。

Kevin：對啊，等到系統終於恢復正常時，一般座位全都賣光了。剩下的只有附前排座位和特別周邊商品的高級 VIP 套票。

Peggy：哇，那一定很貴。多少錢？

Kevin：一張新台幣七千元。

Peggy：確實很貴，但想想我們有多愛這個樂團的音樂，我覺得我們應該在 VIP 票也賣光之前趕快買。

Kevin：我不同意。那幾乎是我們原本預期價格的三倍，我不確定花那麼多錢值不值得。

Peggy：可是這個樂團很少來臺灣，我們可能再也沒有機會看他們的現場演出了。

Kevin：妳說的可能沒錯，但我需要一點時間考慮再做決定。我們今晚再看一次，到時候再決定吧。

演唱會門票：退票與取票規定

感謝您購買 Aurora Lights 世界巡迴演唱會臺北場的門票。為確保入場順利，請在演出日期前仔細閱讀以下退票規定與取票程序。

退票申請須於購票後三天內提出（不含購票當日），並可能酌收5%手續費。超過此期限即不予退票，但遇特殊情況除外，例如活動取消、主辦單位宣布時間異動，或演出陣容有重大變更。

取票方面，選擇電子票的顧客將於活動前約三天，透過手機應用程式收到 QR 碼。入場時須出示 QR 碼並搭配有效的附照片身分證件。截圖、列印版本或經竄改的電子票恕不受理。

選擇實體取票的顧客，可於演出前五天起至指定便利商店取票。請記得攜帶取票序號，以及註冊時使用的手機號碼。

此外，主辦單位提醒所有顧客，電子票嚴禁轉讓。票面登記的姓名必須與入場時出示的身分證件相符。任何未經授權的轉售、轉讓或複製電子票，都可能導致票券立即作廢且不予退款。

如需進一步協助，請透過官方網站聯絡客服，或於一般上班時間撥打服務專線。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "overloaded", pos: "adj.", meaning: "超載的、負荷過重的", collocations: "phone lines were overloaded 電話線路滿線" },
        { id: 2, word: "premium", pos: "adj.", meaning: "高級的、優質的", collocations: "premium VIP packages 高級 VIP 套票" },
        { id: 3, word: "justify", pos: "v.", meaning: "證明…是合理的", collocations: "justify spending that much 證明花那麼多錢是合理的" },
        { id: 4, word: "exceptional", pos: "adj.", meaning: "特殊的、例外的", collocations: "exceptional circumstances 特殊情況" },
        { id: 5, word: "designated", pos: "adj.", meaning: "指定的", collocations: "designated convenience stores 指定便利商店" },
        { id: 6, word: "unauthorized", pos: "adj.", meaning: "未經授權的", collocations: "unauthorized resale 未經授權的轉售" }
      ],
      grammarNotes: [
        { id: "G1", title: "As soon as 引導時間子句 (一…就…)", excerpt: "As soon as the countdown timer hit zero", analysis: "As soon as 引導時間子句，表「一…就…」，說明倒數一歸零網站就立刻卡住。" },
        { id: "G2", title: "by the time 引導時間子句 (等到…時)", excerpt: "by the time the system finally came back online", analysis: "by the time 引導時間子句，表「等到…的時候」，主要子句的動作（座位賣光）在此之前已經發生。" }
      ],
      patternNotes: [
        { id: "P1", title: "considering + 名詞子句 (考慮到…)", excerpt: "considering how much we love the band's music", analysis: "considering 後接名詞子句，表「考慮到…、想想…」，用來說明支持購買的理由。" },
        { id: "P2", title: "result in + N. (導致…)", excerpt: "resale, transfer, or duplication of electronic tickets may result in immediate cancellation", analysis: "result in + 名詞，表「導致、造成…結果」，說明違規轉售或複製票券的後果。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Peggy and Kevin\n\nPeggy: Kevin, have you managed to get the concert tickets yet? I've been trying to access the official website since noon, but it crashed within seconds after ticket sales began.\n\nKevin: Tell me about it! I experienced the exact same issue. ` },
          { type: 'grammar', text: `As soon as the countdown timer hit zero`, gid: 'G1' },
          { type: 'text', text: `, the website froze, and an error message said the server was temporarily unavailable. I kept refreshing the page for almost 40 minutes.\n\nPeggy: It was really frustrating. I tried contacting customer service to see if they could help, but all I got was an automated message saying their phone lines were ` },
          { type: 'vocab', text: `overloaded`, vid: 1 },
          { type: 'text', text: `.\n\nKevin: Yeah, and ` },
          { type: 'grammar', text: `by the time the system finally came back online`, gid: 'G2' },
          { type: 'text', text: `, all the standard seats were sold out. The only tickets left were the ` },
          { type: 'vocab', text: `premium`, vid: 2 },
          { type: 'text', text: ` VIP packages with front-row seats and special merchandise.\n\nPeggy: Wow, those must be expensive. How much are they?\n\nKevin: They're NT$7,000 each.\n\nPeggy: That's definitely expensive, but ` },
          { type: 'pattern', text: `considering how much we love the band's music`, pid: 'P1' },
          { type: 'text', text: `, I think we should just buy the VIP tickets before they sell out too.\n\nKevin: I disagree. That's nearly three times the original price we expected. I'm not sure I can ` },
          { type: 'vocab', text: `justify`, vid: 3 },
          { type: 'text', text: ` spending that much.\n\nPeggy: But this band rarely comes to Taiwan. We might not get another chance to see them live.\n\nKevin: You may be right, but I need some time to think about it before I make a decision. Let's check again tonight and decide then.` }
        ],
        [
          { type: 'text', text: `Concert Tickets: Refunds and Collection Policy\n\nThank you for purchasing tickets for the Aurora Lights World Tour in Taipei. To ensure a smooth entry process, please carefully review the following refund regulations and ticket collection procedures before the concert date.` }
        ],
        [
          { type: 'text', text: `Refund requests must be submitted within three days after purchase (excluding the date of purchase), and a handling fee of 5% may apply. Refunds are not available after this period, except in ` },
          { type: 'vocab', text: `exceptional`, vid: 4 },
          { type: 'text', text: ` circumstances such as event cancellation, schedule changes announced by the organizer, or major changes to the performer lineup.` }
        ],
        [
          { type: 'text', text: `For ticket collection, customers who selected electronic tickets will receive a QR code through the mobile application about three days before the event. Attendees must present their QR code along with a valid photo ID at the venue entrance. Screenshots, printed copies, or altered digital tickets will not be accepted.` }
        ],
        [
          { type: 'text', text: `Customers who chose physical ticket collection may pick up their tickets at ` },
          { type: 'vocab', text: `designated`, vid: 5 },
          { type: 'text', text: ` convenience stores beginning five days before the concert. Please remember to bring the collection number and the phone number used during registration.` }
        ],
        [
          { type: 'text', text: `In addition, the organizer would like to remind all customers that electronic tickets are strictly non-transferable. The name registered on the ticket must match the identification document presented at entry. Any ` },
          { type: 'vocab', text: `unauthorized`, vid: 6 },
          { type: 'text', text: ` ` },
          { type: 'pattern', text: `resale, transfer, or duplication of electronic tickets may result in immediate cancellation`, pid: 'P2' },
          { type: 'text', text: ` without refund.` }
        ],
        [
          { type: 'text', text: `For further assistance, please contact customer support through the official website or by calling the hotline during regular business hours.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The phone network was ______ during the typhoon, so calls kept failing.", options: ["A. repaired", "B. silent", "C. overloaded", "D. empty"], answer: "C", explanation: "【選項解析】\n- (A) repaired (adj.) 修好的\n- (B) silent (adj.) 安靜的\n- (C) overloaded (adj.) 負荷過重的 (正解)\n- (D) empty (adj.) 空的" },
      { id: 2, question: "Passengers who pay more can enjoy ______ seats with extra legroom.", options: ["A. premium", "B. broken", "C. ordinary", "D. cheap"], answer: "A", explanation: "【選項解析】\n- (A) premium (adj.) 高級的 (正解)\n- (B) broken (adj.) 壞掉的\n- (C) ordinary (adj.) 普通的\n- (D) cheap (adj.) 便宜的" },
      { id: 3, question: "How can you ______ spending so much money on a phone case?", options: ["A. deny", "B. borrow", "C. forget", "D. justify"], answer: "D", explanation: "【選項解析】\n- (A) deny (v.) 否認\n- (B) borrow (v.) 借\n- (C) forget (v.) 忘記\n- (D) justify (v.) 證明…合理 (正解)" },
      { id: 4, question: "Smoking is only allowed in ______ areas outside the building.", options: ["A. crowded", "B. designated", "C. forbidden", "D. secret"], answer: "B", explanation: "【選項解析】\n- (A) crowded (adj.) 擁擠的\n- (B) designated (adj.) 指定的 (正解)\n- (C) forbidden (adj.) 被禁止的\n- (D) secret (adj.) 秘密的" },
    ],
    cloze: {
      text: "Buying tickets for popular concerts has become increasingly stressful [1] fans. Websites often crash within seconds, [2] thousands of people try to log in at the same time. By the time the system recovers, the cheaper seats are usually gone, leaving only expensive packages [3]. Fans must then decide [4] the extra cost is worth it. Before purchasing, it is also important to read the refund rules carefully, [5] tickets often cannot be returned after a short period.",
      questions: [
        { id: 1, options: ["A. to", "B. at", "C. for", "D. with"], answer: "C", explanation: "stressful for + 人，表「對某人而言壓力很大」。" },
        { id: 2, options: ["A. as", "B. unless", "C. although", "D. so"], answer: "A", explanation: "as 引導原因子句，表「因為」，說明網站當機的原因是數千人同時登入。" },
        { id: 3, options: ["A. availability", "B. available", "C. avail", "D. availably"], answer: "B", explanation: "形容詞 available 後置修飾 packages，表「剩下可購買的昂貴套票」。" },
        { id: 4, options: ["A. that", "B. what", "C. which", "D. whether"], answer: "D", explanation: "whether 引導名詞子句，作 decide 的受詞，表「是否值得」。" },
        { id: 5, options: ["A. since", "B. unless", "C. although", "D. so that"], answer: "A", explanation: "since 引導原因子句，表「因為」，說明需要仔細閱讀退票規定的原因。" },
      ]
    },
    wordBank: {
      words: ["(A) attendee", "(B) cancellation", "(C) eligible", "(D) entrance", "(E) identification", "(F) policy", "(G) purchase", "(H) refund", "(I) resale", "(J) venue"],
      passage: "Before buying, fans should read the event's ticket [1] carefully.\n\nMost organizers allow a [2] only within a few days of purchase.\n\nFans who want their money back must submit a request soon after the [3].\n\nOnly customers who meet certain conditions are [4] for a full refund.\n\nIf an event is called off, a [5] notice is usually sent to all ticket holders.\n\nEvery [6] must show a valid ticket at the gate.\n\nGuests may be asked to present photo [7] along with their tickets.\n\nLong lines often form at the main [8] before the doors open.\n\nThe concert [9] can hold more than 10,000 people.\n\nUnauthorized [10] of tickets at higher prices is strictly prohibited.",
      answers: { 1: "F", 2: "H", 3: "G", 4: "C", 5: "B", 6: "A", 7: "E", 8: "D", 9: "J", 10: "I" }
    },
    discourse: {
      options: [
        "A. Refunds, for example, may only be allowed within a few days of purchase and may involve a handling fee.",
        "B. Websites can crash within seconds as thousands of people try to log in at the same time.",
        "C. Electronic tickets may need to be shown with a valid photo ID, and screenshots are often not accepted.",
        "D. What remains are often premium packages that cost several times the original price.",
        "E. Some fans prefer to watch concerts online instead of attending in person."
      ],
      paragraphs: [
        "For many music fans, getting concert tickets has become a test of speed, patience, and luck.",
        "Ticket sales for popular performers often begin with a huge rush of online traffic. [1]",
        "By the time systems recover, the cheaper seats have usually disappeared. [2] Fans who do manage to buy tickets still need to understand the rules that come with them. [3]",
        "Ticket holders should also pay attention to how tickets are collected and used. [4]"
      ],
      answers: { 1: "B", 2: "D", 3: "A", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main purpose of the second text?", options: ["A. To advertise VIP packages.", "B. To explain why the website crashed.", "C. To explain the refund rules and ticket collection procedures.", "D. To announce that the concert has been canceled."], answer: "C", explanation: "主旨題。第二篇為購票須知，說明退票規定與取票程序。" },
        { id: 2, question: "According to the conversation, why does Kevin hesitate to buy the VIP tickets?", options: ["A. They cost nearly three times the price he expected.", "B. He does not like the band.", "C. The concert is too far away.", "D. He already has standard tickets."], answer: "A", explanation: "細節題。Kevin 表示「That's nearly three times the original price we expected」。" },
        { id: 3, question: "Which of the following will NOT be accepted at the venue entrance?", options: ["A. A QR code from the mobile app.", "B. A valid photo ID.", "C. A ticket picked up at a convenience store.", "D. A screenshot of an electronic ticket."], answer: "D", explanation: "細節題。須知中指出「Screenshots, printed copies, or altered digital tickets will not be accepted」。" },
        { id: 4, question: "If Peggy buys a ticket on a Monday, what is the last day she can request a refund (assuming no exceptional circumstances)?", options: ["A. Monday.", "B. Thursday.", "C. Saturday.", "D. The day before the concert."], answer: "B", explanation: "推論題。退票須於購票後三天內提出且不含購票當日，週一購票則最晚須在週四提出。" }
      ]
    }
  },

  "Unit 4": {
    title: "The Hidden History of Silent Letters",
    chineseTitle: "英語單字裡的隱形客：那些不發音的字母",
    passage: `When English learners first encounter words like knife and knee, a common question arises: why include a "k" that is not pronounced? The answer lies in the long history of English pronunciation. In Old English and related Germanic languages, the k in many kn- words was once fully articulated. A word like knee likely began with a clear /k/ sound, closer to "k-nee" than to the modern pronunciation. Over centuries, however, English speakers gradually simplified difficult consonant clusters. Pronouncing /kn/ at the beginning of a word required extra effort, so the initial /k/ sound faded away. The spelling, meanwhile, endured.

This is one reason English spelling can feel like a museum. It preserves traces of earlier stages of speech, even after everyday pronunciation has moved on. The same pattern appears in words such as knight, knot, and knock. Their silent k is not a random decoration, but a linguistic fossil from an earlier stage of the language.

English is especially rich in such fossils because it developed from diverse sources. Its foundation is Germanic, but later contact with Old Norse, Latin, and French also left visible marks. After the Norman Conquest of 1066, French became the dominant language of England's ruling class, and hundreds of French words entered English. Words such as honest and hour arrived with French spellings in which the h was already silent. English retained both the vocabulary and the silent h.

Therefore, silent letters are not simply random features of English spelling. They are historical footprints. They remind us that English did not grow in a straight line. Instead, it was shaped by invasion, borrowing, social change, and centuries of shifting pronunciation.

If some silent letters entered English through centuries of sound change, others were deliberately inserted by scholars who wanted the language to appear more refined. During the Renaissance, educated writers felt that English was inferior to Latin and Greek. In an effort to elevate it, they began adding letters to common words to signal their supposed classical roots.

The word doubt offers a compelling example. It had traveled from the Latin dubitare into French as doute, and English writers had simply recorded it as dote for centuries. Renaissance scholars then noticed the Latin connection and inserted a b, creating doubt even though that consonant had never been spoken. In a similar fashion, dette became debt, and receit gained a silent p to become receipt, echoing the Latin receptus. These added letters were no more than visual markers of learning, never designed to guide pronunciation.

Some additions, however, were built on pure error. The word island had no Latin roots at all. It came from the Old English igland, simply meaning land surrounded by water. In the 16th century, scholars mistakenly linked it to the Latin insula and inserted an s. This silent letter emerged from a false assumption, yet it has persisted to this day.

Attempts to reverse such spelling irregularities have met with limited success. In the late 18th century, the American lexicographer Noah Webster advocated spelling reform, changing colour to color and musick to music. Some of his simplified spellings were adopted in the United States, while British English largely kept the older forms.

Silent letters, whether inherited, imported, or invented, continue to perplex learners around the world.`,
    chineseTranslation: `當英語學習者第一次看到 knife、knee 這類單字時，常會有個疑問：為什麼要放一個不發音的 k？答案就藏在英語發音的漫長歷史中。在古英語及相關的日耳曼語言裡，許多 kn- 開頭單字中的 k 曾經是完整發音的。像 knee 這個字，一開始很可能帶有清楚的 /k/ 音，聽起來比較接近「k-nee」，而不是現代的唸法。然而，數百年來，說英語的人逐漸簡化了難發的子音串。在字首發出 /kn/ 需要額外的力氣，於是開頭的 /k/ 音便逐漸消失。但與此同時，拼寫卻保留了下來。

這正是英語拼字讓人覺得像一座博物館的原因之一。即使日常發音早已改變，拼字仍保存了早期語音的痕跡。同樣的模式也出現在 knight、knot、knock 等字中。它們不發音的 k 並不是隨意的裝飾，而是語言早期階段留下的「語言化石」。

英語之所以特別富含這類化石，是因為它的發展來源多元。英語以日耳曼語為基礎，但後來與古諾斯語、拉丁語和法語的接觸，也都留下了明顯的痕跡。1066年諾曼征服之後，法語成為英格蘭統治階級的主要語言，數以百計的法語詞彙進入了英語。像 honest、hour 這樣的字，傳入時就帶著 h 已不發音的法語拼法，而英語同時保留了這些詞彙與不發音的 h。

因此，不發音的字母並不只是英語拼字中隨機的特徵，而是歷史的足跡。它們提醒我們，英語並不是直線發展的，而是由入侵、借用、社會變遷，以及數百年來不斷改變的發音所塑造而成。

如果說有些不發音字母是透過數百年的音變進入英語，那麼另一些則是學者為了讓語言顯得更高雅而刻意加入的。文藝復興時期，受過教育的作家認為英語不如拉丁語和希臘語。為了提升英語的地位，他們開始在常用字中加入字母，以標示這些字所謂的古典字源。

doubt 這個字就是一個極具說服力的例子。它從拉丁文 dubitare 傳入法語成為 doute，而英語作家數百年來都只把它記為 dote。後來文藝復興時期的學者注意到它與拉丁文的關聯，便插入了一個 b，造出 doubt 這個拼法，儘管這個子音從來沒有被唸出來過。同樣地，dette 變成了 debt，receit 則多了一個不發音的 p 而成為 receipt，以呼應拉丁文 receptus。這些加上去的字母只是學問的視覺標記，從來就不是用來指引發音的。

然而，有些添加的字母完全是建立在錯誤之上。island 這個字根本沒有拉丁字源，它來自古英語 igland，意思只是「被水包圍的陸地」。16世紀時，學者誤將它與拉丁文 insula 聯想在一起，於是插入了一個 s。這個不發音的字母源自錯誤的假設，卻一直沿用至今。

想要矯正這些不規則拼字的嘗試，成效有限。18世紀末，美國詞典編纂家諾亞·韋伯斯特提倡拼字改革，把 colour 改成 color、musick 改成 music。他的部分簡化拼法在美國被採用，而英式英語則大多保留了舊有的寫法。

不發音的字母，無論是承襲而來、外來借用，還是人為創造，至今仍持續困擾著世界各地的學習者。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "articulate", pos: "v.", meaning: "清楚地發音", collocations: "was once fully articulated 曾經完整發音" },
        { id: 2, word: "endure", pos: "v.", meaning: "持續存在、保留下來", collocations: "the spelling endured 拼寫保留了下來" },
        { id: 3, word: "fossil", pos: "n.", meaning: "化石", collocations: "a linguistic fossil 語言化石" },
        { id: 4, word: "dominant", pos: "adj.", meaning: "主導的、佔優勢的", collocations: "the dominant language 主要語言" },
        { id: 5, word: "deliberately", pos: "adv.", meaning: "刻意地", collocations: "deliberately inserted 刻意加入" },
        { id: 6, word: "perplex", pos: "v.", meaning: "使困惑", collocations: "continue to perplex learners 持續困擾學習者" }
      ],
      grammarNotes: [
        { id: "G1", title: "動名詞片語作主詞", excerpt: "Pronouncing /kn/ at the beginning of a word", analysis: "動名詞片語作句子主詞，後接單數動詞 required，表「在字首發出 /kn/ 這件事」需要額外力氣。" },
        { id: "G2", title: "過去完成式（had + p.p.）", excerpt: "It had traveled from the Latin dubitare into French as doute", analysis: "過去完成式表示在文藝復興學者加上 b 之前，這個字「早已」從拉丁文傳入法語，強調動作發生的先後順序。" }
      ],
      patternNotes: [
        { id: "P1", title: "not A, but B (不是A，而是B)", excerpt: "Their silent k is not a random decoration, but a linguistic", analysis: "not A, but B 表「不是A而是B」，強調不發音的 k 並非裝飾，而是語言化石。" },
        { id: "P2", title: "whether A, B, or C (無論是A、B或C)", excerpt: "whether inherited, imported, or invented", analysis: "whether 引導省略的讓步子句，列舉不發音字母的三種來源：承襲、借入或人為創造。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `When English learners first encounter words like knife and knee, a common question arises: why include a "k" that is not pronounced? The answer lies in the long history of English pronunciation. In Old English and related Germanic languages, the k in many kn- words was once fully ` },
          { type: 'vocab', text: `articulated`, vid: 1 },
          { type: 'text', text: `. A word like knee likely began with a clear /k/ sound, closer to "k-nee" than to the modern pronunciation. Over centuries, however, English speakers gradually simplified difficult consonant clusters. ` },
          { type: 'grammar', text: `Pronouncing /kn/ at the beginning of a word`, gid: 'G1' },
          { type: 'text', text: ` required extra effort, so the initial /k/ sound faded away. The spelling, meanwhile, ` },
          { type: 'vocab', text: `endured`, vid: 2 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `This is one reason English spelling can feel like a museum. It preserves traces of earlier stages of speech, even after everyday pronunciation has moved on. The same pattern appears in words such as knight, knot, and knock. ` },
          { type: 'pattern', text: `Their silent k is not a random decoration, but a linguistic`, pid: 'P1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `fossil`, vid: 3 },
          { type: 'text', text: ` from an earlier stage of the language.` }
        ],
        [
          { type: 'text', text: `English is especially rich in such fossils because it developed from diverse sources. Its foundation is Germanic, but later contact with Old Norse, Latin, and French also left visible marks. After the Norman Conquest of 1066, French became the ` },
          { type: 'vocab', text: `dominant`, vid: 4 },
          { type: 'text', text: ` language of England's ruling class, and hundreds of French words entered English. Words such as honest and hour arrived with French spellings in which the h was already silent. English retained both the vocabulary and the silent h.` }
        ],
        [
          { type: 'text', text: `Therefore, silent letters are not simply random features of English spelling. They are historical footprints. They remind us that English did not grow in a straight line. Instead, it was shaped by invasion, borrowing, social change, and centuries of shifting pronunciation.` }
        ],
        [
          { type: 'text', text: `If some silent letters entered English through centuries of sound change, others were ` },
          { type: 'vocab', text: `deliberately`, vid: 5 },
          { type: 'text', text: ` inserted by scholars who wanted the language to appear more refined. During the Renaissance, educated writers felt that English was inferior to Latin and Greek. In an effort to elevate it, they began adding letters to common words to signal their supposed classical roots.` }
        ],
        [
          { type: 'text', text: `The word doubt offers a compelling example. ` },
          { type: 'grammar', text: `It had traveled from the Latin dubitare into French as doute`, gid: 'G2' },
          { type: 'text', text: `, and English writers had simply recorded it as dote for centuries. Renaissance scholars then noticed the Latin connection and inserted a b, creating doubt even though that consonant had never been spoken. In a similar fashion, dette became debt, and receit gained a silent p to become receipt, echoing the Latin receptus. These added letters were no more than visual markers of learning, never designed to guide pronunciation.` }
        ],
        [
          { type: 'text', text: `Some additions, however, were built on pure error. The word island had no Latin roots at all. It came from the Old English igland, simply meaning land surrounded by water. In the 16th century, scholars mistakenly linked it to the Latin insula and inserted an s. This silent letter emerged from a false assumption, yet it has persisted to this day.` }
        ],
        [
          { type: 'text', text: `Attempts to reverse such spelling irregularities have met with limited success. In the late 18th century, the American lexicographer Noah Webster advocated spelling reform, changing colour to color and musick to music. Some of his simplified spellings were adopted in the United States, while British English largely kept the older forms.` }
        ],
        [
          { type: 'text', text: `Silent letters, ` },
          { type: 'pattern', text: `whether inherited, imported, or invented`, pid: 'P2' },
          { type: 'text', text: `, continue to ` },
          { type: 'vocab', text: `perplex`, vid: 6 },
          { type: 'text', text: ` learners around the world.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Despite many hardships, their friendship ______ for decades.", options: ["A. vanished", "B. endured", "C. collapsed", "D. shrank"], answer: "B", explanation: "【選項解析】\n- (A) vanished (v.) 消失\n- (B) endured (v.) 持續存在 (正解)\n- (C) collapsed (v.) 崩塌\n- (D) shrank (v.) 縮小" },
      { id: 2, question: "Scientists found a dinosaur ______ buried deep in the rock.", options: ["A. recipe", "B. passport", "C. receipt", "D. fossil"], answer: "D", explanation: "【選項解析】\n- (A) recipe (n.) 食譜\n- (B) passport (n.) 護照\n- (C) receipt (n.) 收據\n- (D) fossil (n.) 化石 (正解)" },
      { id: 3, question: "English has become the ______ language of international business.", options: ["A. dominant", "B. ancient", "C. silent", "D. minor"], answer: "A", explanation: "【選項解析】\n- (A) dominant (adj.) 主導的 (正解)\n- (B) ancient (adj.) 古老的\n- (C) silent (adj.) 不發音的、安靜的\n- (D) minor (adj.) 次要的" },
      { id: 4, question: "He ______ broke the vase to get attention; it was no accident.", options: ["A. accidentally", "B. rarely", "C. deliberately", "D. politely"], answer: "C", explanation: "【選項解析】\n- (A) accidentally (adv.) 意外地\n- (B) rarely (adv.) 很少\n- (C) deliberately (adv.) 刻意地 (正解)\n- (D) politely (adv.) 有禮貌地" },
    ],
    cloze: {
      text: "English spelling often seems confusing [1] many words contain letters that are not pronounced. Some of these silent letters were once spoken aloud, but pronunciation changed over time [2] spelling stayed the same. Others were added on purpose by scholars [3] wanted English to look more like Latin. In a few cases, letters were even inserted [4] mistake, based on incorrect ideas about a word's origin. Although reformers tried to simplify spelling, many silent letters remain in use [5] this day.",
      questions: [
        { id: 1, options: ["A. unless", "B. because", "C. although", "D. so"], answer: "B", explanation: "because 引導原因子句，說明英語拼字令人困惑的原因。" },
        { id: 2, options: ["A. while", "B. unless", "C. because", "D. so that"], answer: "A", explanation: "while 引導對比子句，表「而」，對比發音改變與拼寫不變。" },
        { id: 3, options: ["A. which", "B. whom", "C. who", "D. whose"], answer: "C", explanation: "who 引導形容詞子句，修飾先行詞 scholars，並在子句中作主詞。" },
        { id: 4, options: ["A. on", "B. in", "C. at", "D. by"], answer: "D", explanation: "by mistake 為固定片語，表「錯誤地、誤將」。" },
        { id: 5, options: ["A. to", "B. for", "C. at", "D. in"], answer: "A", explanation: "to this day 為固定片語，表「直到今天」。" },
      ]
    },
    wordBank: {
      words: ["(A) consonant", "(B) etymology", "(C) inherit", "(D) irregular", "(E) lexicographer", "(F) pronunciation", "(G) reform", "(H) scholar", "(I) spelling", "(J) vowel"],
      passage: "The way a word is said aloud, its [1], can change greatly over centuries.\n\nIn contrast, the written form, or [2], often stays the same.\n\nSome words begin with a cluster of two [3] sounds, such as /k/ and /n/.\n\nLearners often find English [4] because spelling and sound do not always match.\n\nThe study of a word's origin and history is called [5].\n\nA Renaissance [6] might add letters to show a word's Latin roots.\n\nA [7] writes dictionaries and records how words are used.\n\nSome languages [8] spelling patterns from the older languages they developed from.\n\nAttempts to [9] English spelling have had mixed success.\n\nIn some words, a silent [10] such as the final e changes how the word is pronounced.",
      answers: { 1: "F", 2: "I", 3: "A", 4: "D", 5: "B", 6: "H", 7: "E", 8: "C", 9: "G", 10: "J" }
    },
    discourse: {
      options: [
        "A. French words such as honest and hour entered English with an h that was already silent.",
        "B. The k in knee, for example, was once clearly pronounced before speakers gradually dropped it.",
        "C. Noah Webster's simplified spellings caught on in the United States, but British English kept many older forms.",
        "D. Renaissance scholars inserted a b into doubt to show its connection to the Latin dubitare.",
        "E. Many modern languages, such as Spanish, have spelling that closely matches pronunciation."
      ],
      paragraphs: [
        "Many English learners wonder why so many words contain letters that are never pronounced.",
        "Some silent letters are leftovers from older pronunciations. [1]",
        "Other silent letters arrived along with borrowed words. [2] Still others were added on purpose by educated writers. [3]",
        "Efforts to clean up these irregular spellings have not been completely successful. [4]"
      ],
      answers: { 1: "B", 2: "A", 3: "D", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of this article?", options: ["A. English spelling has never changed.", "B. Silent letters should be removed from English.", "C. Noah Webster invented most silent letters.", "D. Silent letters reflect English's history of sound change, borrowing, and scholarly additions."], answer: "D", explanation: "主旨題。全文說明不發音字母來自音變、外來借字以及學者刻意或錯誤的添加。" },
        { id: 2, question: "According to the article, why did the k in knee become silent?", options: ["A. Scholars removed it from the spelling.", "B. Speakers gradually simplified the difficult /kn/ consonant cluster.", "C. French speakers did not use the k.", "D. Noah Webster changed the spelling."], answer: "B", explanation: "細節題。文中指出說英語的人「gradually simplified difficult consonant clusters」，開頭的 /k/ 因而消失。" },
        { id: 3, question: "According to the article, why was an s added to island?", options: ["A. Scholars mistakenly linked it to the Latin insula.", "B. It came from French.", "C. Old English speakers pronounced the s.", "D. Noah Webster suggested it."], answer: "A", explanation: "細節題。文中指出學者「mistakenly linked it to the Latin insula and inserted an s」。" },
        { id: 4, question: "Why does the author compare English spelling to a museum?", options: ["A. Because it is mainly studied in museums.", "B. Because it is expensive to learn.", "C. Because it preserves traces of how words were pronounced in the past.", "D. Because it never accepts new words."], answer: "C", explanation: "推論題。作者說拼字「preserves traces of earlier stages of speech」，就像博物館保存過去的痕跡。" }
      ]
    }
  },

  "Unit 6": {
    title: "Why We Follow the Crowd: Understanding the Bandwagon Effect",
    chineseTitle: "為什麼我們都愛跟風？認識從眾效應",
    passage: `Have you ever bought a product simply because everyone around you seemed to own one? Or have you ever supported an idea after seeing many classmates agree with it? If so, you have experienced the bandwagon effect, a psychological phenomenon in which people adopt certain behaviors, attitudes, or beliefs because others are doing the same.

The term originates from 19th-century American politics. Campaign managers would hire a bandwagon, a decorated wagon carrying musicians, to parade through towns, attracting crowds and signaling popular support. Over time, "jumping on the bandwagon" came to mean following whatever was fashionable or popular.

At its core, the bandwagon effect is driven by conformity and social pressure. Humans are inherently social creatures who seek acceptance and fear exclusion. In psychologist Solomon Asch's well-known conformity experiments, about 75% of participants gave an obviously wrong answer at least once, simply to align with the group. The results showed how easily people may doubt their own judgment when surrounded by a confident majority. When we observe that a large number of people favor something, we tend to assume it must be correct or worthwhile. This assumption, however, is logically flawed. Popularity does not equal quality or truth.

The consequences of this bias can be significant. In financial markets, it contributes to speculative bubbles, as investors rush to buy assets simply because prices are rising. In politics, polling data can sway undecided voters toward the leading candidate, making election outcomes partially self-fulfilling. In everyday consumer culture, trends spread rapidly through social media, convincing millions to purchase items they may not genuinely need. A product may appear more attractive simply because influencers, friends, or online reviews make it seem widely approved.

Resisting the bandwagon effect requires conscious effort. Before making a decision, pause and ask yourself: am I making this choice based on evidence and personal values, or am I simply following the crowd?`,
    chineseTranslation: `你是否曾經只因為身邊每個人似乎都有某樣產品，就跟著買了一個？或者，你是否曾經在看到許多同學贊同某個想法後，也跟著支持它？如果有，你就體驗過「從眾效應」了。這是一種心理現象，指人們因為別人都在做同樣的事，而採取某些行為、態度或信念。

這個詞源自19世紀的美國政治。競選經理會僱用一輛「樂隊花車」，也就是載著樂手的裝飾馬車，在城鎮中遊行，以吸引群眾並展現廣泛的支持。久而久之，「跳上樂隊花車」就演變成追隨任何流行或受歡迎事物的意思。

從根本上來說，從眾效應是由從眾心理與社會壓力所驅動。人類天生是社會性的動物，渴望被接納並害怕被排擠。在心理學家所羅門·阿希著名的從眾實驗中，約有75%的受試者至少有一次給出明顯錯誤的答案，只為了和群體保持一致。結果顯示，當人們被自信的多數人包圍時，有多麼容易懷疑自己的判斷。當我們看到很多人都偏好某樣東西時，往往會認定它一定是正確或值得的。然而，這種假設在邏輯上是有缺陷的。受歡迎並不等於品質好或真實。

這種偏誤的後果可能相當嚴重。在金融市場中，它會助長投機泡沫，因為投資人只因價格上漲就搶著買進資產。在政治上，民調數據可能會左右尚未決定的選民倒向領先的候選人，使選舉結果某種程度上成為自我應驗的預言。在日常消費文化中，潮流透過社群媒體迅速擴散，說服數百萬人購買他們未必真正需要的東西。一項產品可能只因為網紅、朋友或網路評論讓它看起來廣受認可，就顯得更有吸引力。

抗拒從眾效應需要有意識的努力。在做決定之前，停下來問問自己：我是根據證據和個人價值觀做出這個選擇，還是只是在跟隨群眾？`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "conformity", pos: "n.", meaning: "從眾、順從", collocations: "conformity experiments 從眾實驗" },
        { id: 2, word: "inherently", pos: "adv.", meaning: "天生地、本質上", collocations: "inherently social creatures 天生的社會性動物" },
        { id: 3, word: "exclusion", pos: "n.", meaning: "排斥、排除在外", collocations: "fear exclusion 害怕被排擠" },
        { id: 4, word: "speculative", pos: "adj.", meaning: "投機的", collocations: "speculative bubbles 投機泡沫" },
        { id: 5, word: "genuinely", pos: "adv.", meaning: "真正地", collocations: "genuinely need 真正需要" },
        { id: 6, word: "conscious", pos: "adj.", meaning: "有意識的、刻意的", collocations: "conscious effort 有意識的努力" }
      ],
      grammarNotes: [
        { id: "G1", title: "介系詞 + 關係代名詞 (in which)", excerpt: "in which people adopt certain behaviors, attitudes, or beliefs", analysis: "in which 引導形容詞子句修飾 phenomenon，相當於 where，表「在這種現象中，人們會…」。" },
        { id: "G2", title: "how + 副詞 引導名詞子句", excerpt: "how easily people may doubt their own judgment", analysis: "how easily 引導名詞子句作 showed 的受詞，表「人們有多麼容易…」。" }
      ],
      patternNotes: [
        { id: "P1", title: "come to + V (逐漸變成…)", excerpt: "came to mean following whatever was fashionable or popular", analysis: "come to + 原形動詞，表「漸漸變得…」，說明詞義隨時間演變。" },
        { id: "P2", title: "make + O + V (使…看起來…)", excerpt: "make it seem widely approved", analysis: "使役動詞 make 後接受詞與原形動詞，表「讓某物看起來…」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Have you ever bought a product simply because everyone around you seemed to own one? Or have you ever supported an idea after seeing many classmates agree with it? If so, you have experienced the bandwagon effect, a psychological phenomenon ` },
          { type: 'grammar', text: `in which people adopt certain behaviors, attitudes, or beliefs`, gid: 'G1' },
          { type: 'text', text: ` because others are doing the same.` }
        ],
        [
          { type: 'text', text: `The term originates from 19th-century American politics. Campaign managers would hire a bandwagon, a decorated wagon carrying musicians, to parade through towns, attracting crowds and signaling popular support. Over time, "jumping on the bandwagon" ` },
          { type: 'pattern', text: `came to mean following whatever was fashionable or popular`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `At its core, the bandwagon effect is driven by conformity and social pressure. Humans are ` },
          { type: 'vocab', text: `inherently`, vid: 2 },
          { type: 'text', text: ` social creatures who seek acceptance and fear ` },
          { type: 'vocab', text: `exclusion`, vid: 3 },
          { type: 'text', text: `. In psychologist Solomon Asch's well-known ` },
          { type: 'vocab', text: `conformity`, vid: 1 },
          { type: 'text', text: ` experiments, about 75% of participants gave an obviously wrong answer at least once, simply to align with the group. The results showed ` },
          { type: 'grammar', text: `how easily people may doubt their own judgment`, gid: 'G2' },
          { type: 'text', text: ` when surrounded by a confident majority. When we observe that a large number of people favor something, we tend to assume it must be correct or worthwhile. This assumption, however, is logically flawed. Popularity does not equal quality or truth.` }
        ],
        [
          { type: 'text', text: `The consequences of this bias can be significant. In financial markets, it contributes to ` },
          { type: 'vocab', text: `speculative`, vid: 4 },
          { type: 'text', text: ` bubbles, as investors rush to buy assets simply because prices are rising. In politics, polling data can sway undecided voters toward the leading candidate, making election outcomes partially self-fulfilling. In everyday consumer culture, trends spread rapidly through social media, convincing millions to purchase items they may not ` },
          { type: 'vocab', text: `genuinely`, vid: 5 },
          { type: 'text', text: ` need. A product may appear more attractive simply because influencers, friends, or online reviews ` },
          { type: 'pattern', text: `make it seem widely approved`, pid: 'P2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Resisting the bandwagon effect requires ` },
          { type: 'vocab', text: `conscious`, vid: 6 },
          { type: 'text', text: ` effort. Before making a decision, pause and ask yourself: am I making this choice based on evidence and personal values, or am I simply following the crowd?` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Wearing a school uniform encourages ______; everyone looks and acts the same.", options: ["A. conformity", "B. rebellion", "C. creativity", "D. variety"], answer: "A", explanation: "【選項解析】\n- (A) conformity (n.) 從眾、一致 (正解)\n- (B) rebellion (n.) 反叛\n- (C) creativity (n.) 創造力\n- (D) variety (n.) 多樣性" },
      { id: 2, question: "Babies are ______ curious about the world around them.", options: ["A. hardly", "B. rarely", "C. barely", "D. inherently"], answer: "D", explanation: "【選項解析】\n- (A) hardly (adv.) 幾乎不\n- (B) rarely (adv.) 很少\n- (C) barely (adv.) 勉強\n- (D) inherently (adv.) 天生地 (正解)" },
      { id: 3, question: "Prices rose quickly because of ______ buying by investors hoping for quick profits.", options: ["A. careful", "B. speculative", "C. generous", "D. honest"], answer: "B", explanation: "【選項解析】\n- (A) careful (adj.) 謹慎的\n- (B) speculative (adj.) 投機的 (正解)\n- (C) generous (adj.) 慷慨的\n- (D) honest (adj.) 誠實的" },
      { id: 4, question: "She made a ______ effort to speak more slowly during the presentation.", options: ["A. careless", "B. sudden", "C. conscious", "D. secret"], answer: "C", explanation: "【選項解析】\n- (A) careless (adj.) 粗心的\n- (B) sudden (adj.) 突然的\n- (C) conscious (adj.) 有意識的 (正解)\n- (D) secret (adj.) 秘密的" },
    ],
    cloze: {
      text: "Many people buy things simply [1] their friends own them. This tendency, known as the bandwagon effect, is common [2] humans want to be accepted by others. In one famous experiment, many participants gave wrong answers just to agree with the group, [3] they knew the correct answer. Following the crowd is not always harmful, [4] it can lead to poor decisions in areas such as investing. The best way to avoid this bias is to think carefully about [5] a choice is truly right for you.",
      questions: [
        { id: 1, options: ["A. although", "B. unless", "C. so that", "D. because"], answer: "D", explanation: "because 引導原因子句，說明人們購買東西的原因只是朋友都有。" },
        { id: 2, options: ["A. unless", "B. since", "C. although", "D. so"], answer: "B", explanation: "since 引導原因子句，表「因為」人類渴望被他人接納。" },
        { id: 3, options: ["A. even though", "B. because", "C. so", "D. unless"], answer: "A", explanation: "even though 表讓步「即使」，受試者明知正確答案仍給出錯誤答案。" },
        { id: 4, options: ["A. or", "B. so", "C. but", "D. for"], answer: "C", explanation: "not always harmful, but… 表轉折，從眾不一定有害，但可能導致錯誤決定。" },
        { id: 5, options: ["A. that", "B. what", "C. which", "D. whether"], answer: "D", explanation: "whether 引導名詞子句作介系詞 about 的受詞，表「是否」。" },
      ]
    },
    wordBank: {
      words: ["(A) flawed", "(B) phenomenon", "(C) pressure", "(D) approved", "(E) consequences", "(F) sway", "(G) parade", "(H) favor", "(I) majority", "(J) trends"],
      passage: "Have you ever bought a product simply because everyone around you seemed to own one? Or have you ever supported an idea after seeing many classmates agree with it? If so, you have experienced the bandwagon effect, a psychological [1] in which people adopt certain behaviors, attitudes, or beliefs because others are doing the same.\n\nThe term originates from 19th-century American politics. Campaign managers would hire a bandwagon, a decorated wagon carrying musicians, to [2] through towns, attracting crowds and signaling popular support. Over time, \"jumping on the bandwagon\" came to mean following whatever was fashionable or popular.\n\nAt its core, the bandwagon effect is driven by conformity and social [3]. Humans are inherently social creatures who seek acceptance and fear exclusion. In psychologist Solomon Asch's well-known conformity experiments, about 75% of participants gave an obviously wrong answer at least once, simply to align with the group. The results showed how easily people may doubt their own judgment when surrounded by a confident [4]. When we observe that a large number of people [5] something, we tend to assume it must be correct or worthwhile. This assumption, however, is logically [6]. Popularity does not equal quality or truth.\n\nThe [7] of this bias can be significant. In financial markets, it contributes to speculative bubbles, as investors rush to buy assets simply because prices are rising. In politics, polling data can [8] undecided voters toward the leading candidate, making election outcomes partially self-fulfilling. In everyday consumer culture, [9] spread rapidly through social media, convincing millions to purchase items they may not genuinely need. A product may appear more attractive simply because influencers, friends, or online reviews make it seem widely [10].\n\nResisting the bandwagon effect requires conscious effort. Before making a decision, pause and ask yourself: am I making this choice based on evidence and personal values, or am I simply following the crowd?",
      answers: { 1: "B", 2: "G", 3: "C", 4: "I", 5: "H", 6: "A", 7: "E", 8: "F", 9: "J", 10: "D" }
    },
    discourse: {
      options: [
        "A. Online trends, for example, can persuade millions of people to buy things they do not really need.",
        "B. Asking whether a choice is based on evidence can help us think more independently.",
        "C. Campaign managers hired decorated wagons carrying musicians to attract crowds.",
        "D. Some animals also live in large groups for protection.",
        "E. In one famous experiment, many participants gave obviously wrong answers just to match the group."
      ],
      paragraphs: [
        "Many people adopt behaviors or beliefs simply because others are doing the same, a tendency known as the bandwagon effect.",
        "The expression comes from 19th-century American politics. [1] Over time, the phrase came to mean following what is popular.",
        "This effect is driven by our strong need to be accepted. [2] Its influence can be seen in finance, politics, and shopping. [3]",
        "Fortunately, the bandwagon effect can be resisted with conscious effort. [4]"
      ],
      answers: { 1: "C", 2: "E", 3: "A", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How political campaigns used music.", "B. Why investors buy assets.", "C. What the bandwagon effect is, why it happens, and how to resist it.", "D. How social media influencers make money."], answer: "C", explanation: "主旨題。全文介紹從眾效應的定義、由來、成因、影響與抗拒方法。" },
        { id: 2, question: "In Asch's experiments, about how many participants gave an obviously wrong answer at least once?", options: ["A. About 75%.", "B. About 25%.", "C. About 50%.", "D. Nearly all of them."], answer: "A", explanation: "細節題。文中指出「about 75% of participants gave an obviously wrong answer at least once」。" },
        { id: 3, question: "Why does the author say the assumption is \"logically flawed\"?", options: ["A. Because crowds are always wrong.", "B. Because scientists disagree with each other.", "C. Because polls are usually inaccurate.", "D. Because popularity does not prove that something is good or true."], answer: "D", explanation: "推論題。下一句即說明「Popularity does not equal quality or truth」。" },
        { id: 4, question: "Which of the following is an example of the bandwagon effect?", options: ["A. A student chooses a club after researching its activities.", "B. A man buys a stock only because everyone is talking about its rising price.", "C. A woman compares reviews before buying a laptop.", "D. A voter carefully studies each candidate's policies."], answer: "B", explanation: "應用題。只因眾人都在談論股價上漲就跟著買進，正是文中金融市場的從眾例子。" }
      ]
    }
  },

  "Unit 7": {
    title: "Is Taiwan Ready for Its Indian Workforce?",
    chineseTitle: "引進印度移工 治標還是治本？",
    passage: `After Taiwan and India signed a memorandum of understanding in 2024, Taiwan's Ministry of Labor announced that roughly 1,000 Indian migrant workers could arrive as early as the end of this year. The policy immediately sparked fierce online debate, with supporters calling it a remedy for labor shortages while opponents launched petitions urging suspension. The petitions gathered over 30,000 signatures within days.

Three pressures explain why Taiwan is so determined to recruit from India. First, falling birthrates and an aging population have left manufacturers facing a painful paradox: plenty of orders, but too few workers. Second, overreliance on workers from Indonesia, Vietnam, the Philippines, and Thailand makes labor supplies vulnerable to political or economic disruption. Third, India, one of the world's foremost labor-exporting nations, is already being considered by countries like Japan. Had Taiwan failed to negotiate with India, it might have lost access to a vital labor source.

Nevertheless, much of the debate has centered on fear rather than policy. Although official figures suggest that sexual violence in India may not be as widespread as online discussions imply, sensational media coverage tends to mistake high-profile cases for general reality. The quiet presence of Indian students and professionals living here without incident goes largely unnoticed. Rather than treating an entire nationality as inherently suspect, people should focus on thorough screening and the rule of law.

What deserves greater attention is the deeper structural flaws this policy may expose. Differences in religion, language, and diet will test whether Taiwanese workplaces are genuinely inclusive. More importantly, migrant workers in Taiwan often face unfair conditions, including brokers charging excessive fees and limited freedom to change employers. Without meaningful reform, introducing workers from new countries would be little more than giving a painkiller to a patient whose illness remains untreated.`,
    chineseTranslation: `臺灣與印度於2024年簽署合作備忘錄後，臺灣勞動部宣布，最快今年底約有1,000名印度移工可能抵台。此政策立即在網路上引發激烈辯論：支持者認為這是解決缺工問題的良方，反對者則發起連署要求暫緩實施。連署在短短幾天內就累積超過三萬人簽名。

有三大壓力可以說明臺灣為何如此積極地向印度招募勞工。第一，少子化與人口高齡化讓製造業者面臨令人痛苦的矛盾：訂單接不完，人手卻不足。第二，過度依賴來自印尼、越南、菲律賓與泰國的移工，使勞動力供給容易受到政治或經濟變動的衝擊。第三，印度是全球主要的勞力輸出國之一，日本等國家已在考慮向其招募。若臺灣當初沒有與印度協商，可能就會失去一個重要的勞力來源。

然而，這場辯論大多聚焦於恐懼而非政策本身。儘管官方數據顯示，印度的性暴力問題可能不如網路討論所暗示的那樣普遍，但聳動的媒體報導往往將引人注目的個案誤認為普遍現實。那些在臺灣生活、從未出事的印度學生與專業人士，其默默的存在卻大多無人注意。與其把整個國籍的人都視為天生可疑，大家更應該把焦點放在嚴謹的審查與法治上。

更值得關注的是，這項政策可能暴露出更深層的結構性缺陷。宗教、語言與飲食上的差異，將考驗臺灣職場是否真的具有包容性。更重要的是，在臺移工經常面臨不公平的處境，包括仲介收取過高的費用，以及轉換雇主的自由受限。若沒有實質的改革，從新的國家引進移工，不過就像是給病根未除的病人吃止痛藥而已。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "remedy", pos: "n.", meaning: "解決辦法、補救措施", collocations: "a remedy for labor shortages 解決缺工的良方" },
        { id: 2, word: "paradox", pos: "n.", meaning: "矛盾的情況", collocations: "a painful paradox 令人痛苦的矛盾" },
        { id: 3, word: "vulnerable", pos: "adj.", meaning: "易受傷害的、脆弱的", collocations: "vulnerable to disruption 容易受到衝擊" },
        { id: 4, word: "sensational", pos: "adj.", meaning: "聳動的、譁眾取寵的", collocations: "sensational media coverage 聳動的媒體報導" },
        { id: 5, word: "inclusive", pos: "adj.", meaning: "包容的", collocations: "genuinely inclusive 真正具包容性的" },
        { id: 6, word: "excessive", pos: "adj.", meaning: "過度的、過多的", collocations: "excessive fees 過高的費用" }
      ],
      grammarNotes: [
        { id: "G1", title: "省略 if 的倒裝假設語氣 (與過去事實相反)", excerpt: "Had Taiwan failed to negotiate with India, it might have lost access", analysis: "Had + S + p.p. 為省略 if 的倒裝，等於 If Taiwan had failed…，主要子句用 might have + p.p.，表示與過去事實相反的假設。" },
        { id: "G2", title: "what 引導名詞子句作主詞", excerpt: "What deserves greater attention", analysis: "What 引導名詞子句作整句主詞，表「更值得關注的事」，後接 is。" }
      ],
      patternNotes: [
        { id: "P1", title: "mistake A for B (把A誤認為B)", excerpt: "mistake high-profile cases for general reality", analysis: "mistake A for B 表「把A誤當成B」，指媒體把少數引人注目的個案誤當成普遍現象。" },
        { id: "P2", title: "rather than + V-ing；treat A as B", excerpt: "Rather than treating an entire nationality as inherently suspect", analysis: "rather than 表「與其…不如…」；treat A as B 表「把A視為B」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `After Taiwan and India signed a memorandum of understanding in 2024, Taiwan's Ministry of Labor announced that roughly 1,000 Indian migrant workers could arrive as early as the end of this year. The policy immediately sparked fierce online debate, with supporters calling it a ` },
          { type: 'vocab', text: `remedy`, vid: 1 },
          { type: 'text', text: ` for labor shortages while opponents launched petitions urging suspension. The petitions gathered over 30,000 signatures within days.` }
        ],
        [
          { type: 'text', text: `Three pressures explain why Taiwan is so determined to recruit from India. First, falling birthrates and an aging population have left manufacturers facing a painful ` },
          { type: 'vocab', text: `paradox`, vid: 2 },
          { type: 'text', text: `: plenty of orders, but too few workers. Second, overreliance on workers from Indonesia, Vietnam, the Philippines, and Thailand makes labor supplies ` },
          { type: 'vocab', text: `vulnerable`, vid: 3 },
          { type: 'text', text: ` to political or economic disruption. Third, India, one of the world's foremost labor-exporting nations, is already being considered by countries like Japan. ` },
          { type: 'grammar', text: `Had Taiwan failed to negotiate with India, it might have lost access`, gid: 'G1' },
          { type: 'text', text: ` to a vital labor source.` }
        ],
        [
          { type: 'text', text: `Nevertheless, much of the debate has centered on fear rather than policy. Although official figures suggest that sexual violence in India may not be as widespread as online discussions imply, ` },
          { type: 'vocab', text: `sensational`, vid: 4 },
          { type: 'text', text: ` media coverage tends to ` },
          { type: 'pattern', text: `mistake high-profile cases for general reality`, pid: 'P1' },
          { type: 'text', text: `. The quiet presence of Indian students and professionals living here without incident goes largely unnoticed. ` },
          { type: 'pattern', text: `Rather than treating an entire nationality as inherently suspect`, pid: 'P2' },
          { type: 'text', text: `, people should focus on thorough screening and the rule of law.` }
        ],
        [
          { type: 'grammar', text: `What deserves greater attention`, gid: 'G2' },
          { type: 'text', text: ` is the deeper structural flaws this policy may expose. Differences in religion, language, and diet will test whether Taiwanese workplaces are genuinely ` },
          { type: 'vocab', text: `inclusive`, vid: 5 },
          { type: 'text', text: `. More importantly, migrant workers in Taiwan often face unfair conditions, including brokers charging ` },
          { type: 'vocab', text: `excessive`, vid: 6 },
          { type: 'text', text: ` fees and limited freedom to change employers. Without meaningful reform, introducing workers from new countries would be little more than giving a painkiller to a patient whose illness remains untreated.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Getting enough sleep is often the best ______ for tiredness.", options: ["A. damage", "B. excuse", "C. remedy", "D. burden"], answer: "C", explanation: "【選項解析】\n- (A) damage (n.) 損害\n- (B) excuse (n.) 藉口\n- (C) remedy (n.) 解決辦法 (正解)\n- (D) burden (n.) 負擔" },
      { id: 2, question: "Small islands are especially ______ to rising sea levels.", options: ["A. vulnerable", "B. immune", "C. grateful", "D. similar"], answer: "A", explanation: "【選項解析】\n- (A) vulnerable (adj.) 易受傷害的 (正解)\n- (B) immune (adj.) 免疫的\n- (C) grateful (adj.) 感激的\n- (D) similar (adj.) 相似的" },
      { id: 3, question: "The newspaper was criticized for its ______ headlines that exaggerated the story.", options: ["A. accurate", "B. modest", "C. boring", "D. sensational"], answer: "D", explanation: "【選項解析】\n- (A) accurate (adj.) 準確的\n- (B) modest (adj.) 謙虛的\n- (C) boring (adj.) 無聊的\n- (D) sensational (adj.) 聳動的 (正解)" },
      { id: 4, question: "The restaurant charged an ______ amount for a simple bowl of noodles.", options: ["A. reasonable", "B. excessive", "C. tiny", "D. average"], answer: "B", explanation: "【選項解析】\n- (A) reasonable (adj.) 合理的\n- (B) excessive (adj.) 過度的 (正解)\n- (C) tiny (adj.) 極小的\n- (D) average (adj.) 平均的" },
    ],
    cloze: {
      text: "Taiwan plans to bring in workers from India [1] help solve its labor shortage. The plan has caused heated debate, [2] some people support it while others strongly oppose it. Many factories have plenty of orders [3] cannot find enough workers. Experts say the public should focus on screening and the rule of law [4] fear. They also point out that bringing in new workers will not solve deeper problems if migrant workers [5] already here continue to be treated unfairly.",
      questions: [
        { id: 1, options: ["A. for", "B. to", "C. so", "D. with"], answer: "B", explanation: "不定詞 to + V 表目的，「為了」幫助解決缺工問題。" },
        { id: 2, options: ["A. unless", "B. so that", "C. even if", "D. as"], answer: "D", explanation: "as 引導原因子句，表「因為」有人支持、有人反對而引發爭論。" },
        { id: 3, options: ["A. or", "B. so", "C. but", "D. for"], answer: "C", explanation: "but 表轉折，訂單很多「但」找不到足夠人手。" },
        { id: 4, options: ["A. rather than", "B. because of", "C. as well as", "D. in spite of"], answer: "A", explanation: "rather than 表「而不是」，應聚焦於審查與法治而非恐懼。" },
        { id: 5, options: ["A. who is", "B. who are", "C. which is", "D. whom are"], answer: "B", explanation: "who 引導形容詞子句修飾複數先行詞 migrant workers，be 動詞用 are。" },
      ]
    },
    wordBank: {
      words: ["(A) broker", "(B) disruption", "(C) diet", "(D) employer", "(E) petition", "(F) recruit", "(G) screening", "(H) shortage", "(I) migrant", "(J) suspension"],
      passage: "Many factories face a labor [1] because too few young people want factory jobs.\n\nMore than 30,000 people signed a [2] against the new policy.\n\nTaiwan hopes to [3] workers from India to fill empty positions.\n\nA [4] worker moves to another country to find a job.\n\nRelying on only a few countries makes labor supplies open to [5].\n\nOpponents called for the [6] of the plan until more details were known.\n\nCareful [7] can help make sure that new workers have no criminal record.\n\nSome workers must pay high fees to a [8] to find a job abroad.\n\nMany migrant workers have limited freedom to change their [9].\n\nWorkplaces may need to adjust to workers' different religions and [10].",
      answers: { 1: "H", 2: "E", 3: "F", 4: "I", 5: "B", 6: "J", 7: "G", 8: "A", 9: "D", 10: "C" }
    },
    discourse: {
      options: [
        "A. Falling birthrates have left many factories with plenty of orders but too few workers.",
        "B. Real progress will depend on reforms such as limiting broker fees and allowing workers to change employers.",
        "C. Many critics focused on fears about crime instead of on how the policy would actually work.",
        "D. Within days, petitions opposing the plan had gathered more than 30,000 signatures.",
        "E. Taiwan's night markets attract millions of tourists every year."
      ],
      paragraphs: [
        "Taiwan plans to bring in about 1,000 workers from India, and the policy has quickly become a hot topic.",
        "Supporters see the plan as a solution to labor shortages, but opponents reacted strongly. [1]",
        "Several pressures explain why Taiwan wants workers from India. [2] However, the public debate has not always focused on these facts. [3]",
        "Some experts believe the real issue lies in how migrant workers are treated. [4]"
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. Why India is the world's largest labor exporter.", "B. How Japan recruits foreign workers.", "C. The history of Taiwan's Ministry of Labor.", "D. Taiwan's plan to hire Indian workers, the debate over it, and the deeper problems it may reveal."], answer: "D", explanation: "主旨題。全文說明引進印度移工的原因、社會爭議，以及政策可能暴露的結構性問題。" },
        { id: 2, question: "Which is NOT mentioned as a reason Taiwan wants to recruit from India?", options: ["A. Indian workers accept lower wages.", "B. An aging population and falling birthrates.", "C. Overreliance on workers from a few countries.", "D. Competition from countries like Japan."], answer: "A", explanation: "細節題。文中提到的三大壓力為人口結構、過度依賴少數國家與他國競爭，並未提及工資較低。" },
        { id: 3, question: "According to the author, what should people focus on instead of fear?", options: ["A. Banning workers from certain countries.", "B. Thorough screening and the rule of law.", "C. Reducing the number of factories.", "D. Increasing media coverage of crime."], answer: "B", explanation: "細節題。作者主張「people should focus on thorough screening and the rule of law」。" },
        { id: 4, question: "What does the author mean by \"giving a painkiller to a patient whose illness remains untreated\"?", options: ["A. Migrant workers need better health care.", "B. Factories should hire more doctors.", "C. Bringing in new workers without reform only hides the deeper problems.", "D. The policy will completely solve the labor shortage."], answer: "C", explanation: "推論題。止痛藥只能暫時緩解症狀，比喻若不改革，引進新移工只是治標不治本。" }
      ]
    }
  },

  "Unit 8": {
    title: "More Than Baseball: The Rise of CPBL Cheer Culture",
    chineseTitle: "不只看棒球！中職啦啦隊如何圈粉全臺灣",
    passage: `Walk into any Chinese Professional Baseball League (CPBL) game in Taiwan on a weekday evening, and you might be surprised by what awaits you. Even before you find your seat, the stadium is alive with electronic music and the cheers of enthusiastic fans. A group of performers dances beside the field with the same high energy you would expect at a major concert rather than a typical baseball game. These are the CPBL cheerleaders, and they have become one of the most distinctive parts of baseball culture in Taiwan.

It was not always this way. When cheerleaders were first introduced to the CPBL in the late 2000s, the league was facing a serious crisis. A series of game-fixing scandals had severely damaged public trust and pushed fans away. Attendance numbers fell sharply, and those who did come to games were hardly in the mood to celebrate. Under such adverse circumstances, cheerleaders struggled to appeal to fans. The timing, as many observers noted, could not have been worse.

The turning point came in 2013, when the Lamigo Monkeys (now the Rakuten Monkeys) decided to try something different. While competing in South Korea the previous year, the club was exposed to Korean baseball's cheer culture, which blends non-stop dance music with coordinated crowd chanting. They brought that energy back to Taiwan, mixing it with the drums and trumpets that local fans already knew. At first, many fans were skeptical. But slowly, the crowds grew, and by 2016, every club in the CPBL had its own cheer squad.

Many baseball fans do not realize how much work is needed to keep the atmosphere exciting during games. Each cheerleader must memorize nearly 50 different routines, including chants and dances tailored to individual players, as well as opening and mid-game performances. Once the game begins, the cheerleaders stay active on platforms for at least six innings. In addition, the weather doesn't always cooperate. On hot summer afternoons, the heat can become overwhelming. Rain can also create dangerous conditions. Cheerleaders must continue dancing on slippery platforms until the game is officially suspended.

That dedication has paid off in ways few could have predicted. Even ordinary midweek games now regularly draw thousands of spectators, and CPBL cheerleaders have become extremely popular in Taiwan. Members of groups such as the Rakuten Girls and Fubon Angels often appear on television shows, in advertisements, and on social media platforms. Many fans attend games not only for baseball, but also to see their favorite cheerleaders perform and interact with the crowd.

The popularity of CPBL cheerleaders has also created debate. Some critics believe that too much attention is placed on entertainment rather than baseball itself. Yet others argue that cheerleading has opened the door to entirely new audiences. People who know nothing about baseball might come to a game simply because they enjoy a particular chant or performer and gradually find themselves following the team. Whether fans come for baseball, the music, or the dancing, there's no denying that the unique atmosphere of a CPBL game would not be the same without its cheerleaders.`,
    chineseTranslation: `平日晚上走進臺灣任何一場中華職棒（CPBL）比賽，眼前的景象可能會讓你大吃一驚。甚至在你找到座位之前，球場就已經充滿了電子音樂和熱情球迷的歡呼聲。一群表演者在場邊跳舞，那股高昂的活力，讓人以為身處大型演唱會，而不是一般的棒球比賽。他們就是中職啦啦隊，如今已成為臺灣棒球文化中最具特色的一部分。

事情並非一直都是這樣。2000年代後期，啦啦隊剛被引進中職時，聯盟正面臨嚴重的危機。一連串打假球醜聞嚴重損害了大眾的信任，也把球迷趕跑了。進場人數大幅下滑，而那些仍然進場看球的人也根本沒有心情慶祝。在如此不利的情況下，啦啦隊很難吸引球迷。正如許多觀察家所說，時機簡直糟到不能再糟。

轉捩點出現在2013年，當時的 Lamigo 桃猿（現為樂天桃猿）決定嘗試不一樣的做法。前一年在南韓參賽時，球團接觸到韓國棒球的應援文化，那是一種結合不停歇的舞曲與整齊劃一的觀眾呼喊口號的應援方式。他們把這股活力帶回臺灣，再融入本地球迷早已熟悉的鼓聲與小號。起初，許多球迷抱持懷疑態度。但觀眾慢慢增加，到了2016年，中職每支球隊都有了自己的啦啦隊。

許多球迷並不知道，要在比賽期間維持熱烈的氣氛需要付出多少努力。每位啦啦隊員都必須記住將近50套不同的應援動作，包括為個別球員量身打造的口號和舞蹈，以及開場和比賽中場的表演。比賽一開始，啦啦隊員至少要在應援台上持續表演六局。此外，天氣也不總是配合。在炎熱的夏日午後，高溫可能令人難以承受。下雨也可能造成危險的狀況，啦啦隊員必須在濕滑的應援台上持續跳舞，直到比賽正式宣布暫停為止。

這份投入帶來了少有人能預料到的回報。如今即使是普通的週間比賽，也經常吸引數千名觀眾，而中職啦啦隊在臺灣也變得非常受歡迎。像 Rakuten Girls 和 Fubon Angels 等團體的成員經常出現在電視節目、廣告和社群媒體平台上。許多球迷進場不只是為了看棒球，也是為了看自己喜愛的啦啦隊員表演並與觀眾互動。

中職啦啦隊的高人氣也引發了爭議。有些批評者認為，大家把太多注意力放在娛樂上，而非棒球本身。然而也有人主張，啦啦隊為棒球打開了通往全新觀眾群的大門。對棒球一無所知的人，可能只因為喜歡某段應援口號或某位表演者而來看比賽，接著漸漸發現自己開始追隨這支球隊。無論球迷是為了棒球、音樂還是舞蹈而來，不可否認的是，少了啦啦隊，中職比賽獨特的氣氛就不會一樣了。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "distinctive", pos: "adj.", meaning: "獨特的、與眾不同的", collocations: "one of the most distinctive parts 最具特色的部分之一" },
        { id: 2, word: "adverse", pos: "adj.", meaning: "不利的、逆境的", collocations: "adverse circumstances 不利的情況" },
        { id: 3, word: "skeptical", pos: "adj.", meaning: "懷疑的", collocations: "be skeptical about 對…抱持懷疑" },
        { id: 4, word: "tailored", pos: "adj.", meaning: "量身打造的", collocations: "tailored to individual players 為個別球員量身打造" },
        { id: 5, word: "overwhelming", pos: "adj.", meaning: "難以承受的、壓倒性的", collocations: "the heat can become overwhelming 高溫令人難以承受" },
        { id: 6, word: "spectator", pos: "n.", meaning: "觀眾", collocations: "draw thousands of spectators 吸引數千名觀眾" }
      ],
      grammarNotes: [
        { id: "G1", title: "祈使句 + and + 子句 (只要…就會…)", excerpt: "Walk into any Chinese Professional Baseball League (CPBL) game … and you might be surprised", analysis: "祈使句 + and + 子句，表「只要做某事，就會…」，用來帶出讀者走進球場會看到的驚喜。" },
        { id: "G2", title: "過去完成式 (had + p.p.)", excerpt: "A series of game-fixing scandals had severely damaged public trust", analysis: "過去完成式表示在啦啦隊引進之前，假球醜聞「早已」重創大眾信任。" }
      ],
      patternNotes: [
        { id: "P1", title: "could not have been worse (糟到不能再糟)", excerpt: "could not have been worse", analysis: "could not have been + 比較級，表「不可能再更…了」，強調時機極差。" },
        { id: "P2", title: "there's no denying that… (不可否認…)", excerpt: "there's no denying that", analysis: "There is no + V-ing 表「不可能…」，there's no denying that 即「不可否認的是…」。" }
      ],
      paragraphs: [
        [
          { type: 'grammar', text: `Walk into any Chinese Professional Baseball League (CPBL) game in Taiwan on a weekday evening, and you might be surprised`, gid: 'G1' },
          { type: 'text', text: ` by what awaits you. Even before you find your seat, the stadium is alive with electronic music and the cheers of enthusiastic fans. A group of performers dances beside the field with the same high energy you would expect at a major concert rather than a typical baseball game. These are the CPBL cheerleaders, and they have become one of the most ` },
          { type: 'vocab', text: `distinctive`, vid: 1 },
          { type: 'text', text: ` parts of baseball culture in Taiwan.` }
        ],
        [
          { type: 'text', text: `It was not always this way. When cheerleaders were first introduced to the CPBL in the late 2000s, the league was facing a serious crisis. ` },
          { type: 'grammar', text: `A series of game-fixing scandals had severely damaged public trust`, gid: 'G2' },
          { type: 'text', text: ` and pushed fans away. Attendance numbers fell sharply, and those who did come to games were hardly in the mood to celebrate. Under such ` },
          { type: 'vocab', text: `adverse`, vid: 2 },
          { type: 'text', text: ` circumstances, cheerleaders struggled to appeal to fans. The timing, as many observers noted, ` },
          { type: 'pattern', text: `could not have been worse`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The turning point came in 2013, when the Lamigo Monkeys (now the Rakuten Monkeys) decided to try something different. While competing in South Korea the previous year, the club was exposed to Korean baseball's cheer culture, which blends non-stop dance music with coordinated crowd chanting. They brought that energy back to Taiwan, mixing it with the drums and trumpets that local fans already knew. At first, many fans were ` },
          { type: 'vocab', text: `skeptical`, vid: 3 },
          { type: 'text', text: `. But slowly, the crowds grew, and by 2016, every club in the CPBL had its own cheer squad.` }
        ],
        [
          { type: 'text', text: `Many baseball fans do not realize how much work is needed to keep the atmosphere exciting during games. Each cheerleader must memorize nearly 50 different routines, including chants and dances ` },
          { type: 'vocab', text: `tailored`, vid: 4 },
          { type: 'text', text: ` to individual players, as well as opening and mid-game performances. Once the game begins, the cheerleaders stay active on platforms for at least six innings. In addition, the weather doesn't always cooperate. On hot summer afternoons, the heat can become ` },
          { type: 'vocab', text: `overwhelming`, vid: 5 },
          { type: 'text', text: `. Rain can also create dangerous conditions. Cheerleaders must continue dancing on slippery platforms until the game is officially suspended.` }
        ],
        [
          { type: 'text', text: `That dedication has paid off in ways few could have predicted. Even ordinary midweek games now regularly draw thousands of ` },
          { type: 'vocab', text: `spectators`, vid: 6 },
          { type: 'text', text: `, and CPBL cheerleaders have become extremely popular in Taiwan. Members of groups such as the Rakuten Girls and Fubon Angels often appear on television shows, in advertisements, and on social media platforms. Many fans attend games not only for baseball, but also to see their favorite cheerleaders perform and interact with the crowd.` }
        ],
        [
          { type: 'text', text: `The popularity of CPBL cheerleaders has also created debate. Some critics believe that too much attention is placed on entertainment rather than baseball itself. Yet others argue that cheerleading has opened the door to entirely new audiences. People who know nothing about baseball might come to a game simply because they enjoy a particular chant or performer and gradually find themselves following the team. Whether fans come for baseball, the music, or the dancing, ` },
          { type: 'pattern', text: `there's no denying that`, pid: 'P2' },
          { type: 'text', text: ` the unique atmosphere of a CPBL game would not be the same without its cheerleaders.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Despite ______ weather, the runners finished the race on time.", options: ["A. pleasant", "B. adverse", "C. mild", "D. perfect"], answer: "B", explanation: "【選項解析】\n- (A) pleasant (adj.) 宜人的\n- (B) adverse (adj.) 不利的 (正解)\n- (C) mild (adj.) 溫和的\n- (D) perfect (adj.) 完美的" },
      { id: 2, question: "At first, many people were ______ about the new plan, but they changed their minds later.", options: ["A. certain", "B. thrilled", "C. skeptical", "D. grateful"], answer: "C", explanation: "【選項解析】\n- (A) certain (adj.) 確定的\n- (B) thrilled (adj.) 興奮的\n- (C) skeptical (adj.) 懷疑的 (正解)\n- (D) grateful (adj.) 感激的" },
      { id: 3, question: "The course is ______ to the needs of each student.", options: ["A. tailored", "B. hidden", "C. opposed", "D. limited"], answer: "A", explanation: "【選項解析】\n- (A) tailored (adj.) 量身打造的 (正解)\n- (B) hidden (adj.) 隱藏的\n- (C) opposed (adj.) 反對的\n- (D) limited (adj.) 有限的" },
      { id: 4, question: "Thousands of ______ filled the stadium to watch the final game.", options: ["A. patients", "B. passengers", "C. tenants", "D. spectators"], answer: "D", explanation: "【選項解析】\n- (A) patients (n.) 病人\n- (B) passengers (n.) 乘客\n- (C) tenants (n.) 房客\n- (D) spectators (n.) 觀眾 (正解)" },
    ],
    cloze: {
      text: "CPBL cheerleaders have become a key part of baseball games in Taiwan. When they first appeared, fans were losing interest [1] a series of scandals. Things changed after one team brought back ideas from Korea, [2] cheering combines dance music with crowd chants. By 2016, every team had [3] own cheer squad. Cheerleaders work hard, memorizing dozens of routines and performing [4] in heat or rain. Today, many people go to games not only to watch baseball [5] to see their favorite cheerleaders.",
      questions: [
        { id: 1, options: ["A. because of", "B. instead of", "C. in spite of", "D. in addition to"], answer: "A", explanation: "because of + N. 表原因，球迷因假球醜聞而失去興趣。" },
        { id: 2, options: ["A. which", "B. that", "C. where", "D. what"], answer: "C", explanation: "where 引導非限定關係副詞子句修飾地點 Korea，子句本身結構完整。" },
        { id: 3, options: ["A. their", "B. it's", "C. our", "D. its"], answer: "D", explanation: "主詞 every team 為單數，所有格用 its。" },
        { id: 4, options: ["A. only", "B. even", "C. never", "D. hardly"], answer: "B", explanation: "even 表「甚至」，強調在高溫或下雨中仍照常表演。" },
        { id: 5, options: ["A. and", "B. or", "C. but also", "D. so"], answer: "C", explanation: "not only A but also B 為固定句型，表「不只A，也B」。" },
      ]
    },
    wordBank: {
      words: ["(A) atmosphere", "(B) attendance", "(C) chant", "(D) crisis", "(E) dedication", "(F) platform", "(G) routine", "(H) scandal", "(I) squad", "(J) trumpet"],
      passage: "The game-fixing [1] damaged fans' trust in the league.\n\nBaseball [2] fell sharply as fans stayed away from stadiums.\n\nThe league was in a serious [3] and needed new ways to attract fans.\n\nFans shouted a team [4] together to support the batter.\n\nEvery team now has its own cheer [5] of talented dancers.\n\nEach dance [6] must be memorized and practiced many times.\n\nCheerleaders perform on a raised [7] beside the field.\n\nLocal fans were already familiar with the sound of drums and the [8].\n\nThe music and dancing create an exciting [9] in the stadium.\n\nTheir hard work and [10] have made them very popular.",
      answers: { 1: "H", 2: "B", 3: "D", 4: "C", 5: "I", 6: "G", 7: "F", 8: "J", 9: "A", 10: "E" }
    },
    discourse: {
      options: [
        "A. Each cheerleader must memorize nearly 50 routines and perform for at least six innings.",
        "B. Some critics, however, feel that entertainment is drawing attention away from baseball itself.",
        "C. Game-fixing scandals had driven fans away, so few were in the mood to celebrate.",
        "D. Inspired by Korea's cheer culture, the Lamigo Monkeys created a new style of cheering.",
        "E. Baseball was first introduced to Taiwan in the late 19th century."
      ],
      paragraphs: [
        "Today, cheerleaders are one of the most distinctive parts of a CPBL game in Taiwan.",
        "When cheerleaders first appeared in the late 2000s, however, the league was in trouble. [1]",
        "Things began to change in 2013. [2] Behind the energetic performances lies a great deal of hard work. [3]",
        "The popularity of cheerleaders has brought many new fans to baseball. [4] Still, most agree that the games would not feel the same without them."
      ],
      answers: { 1: "C", 2: "D", 3: "A", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How cheerleading grew into a key part of CPBL culture.", "B. Why CPBL games are canceled when it rains.", "C. How to become a professional baseball player.", "D. The history of Korean baseball."], answer: "A", explanation: "主旨題。全文描述中職啦啦隊從不受歡迎到成為棒球文化重要一環的歷程。" },
        { id: 2, question: "Why did cheerleaders struggle when they were first introduced?", options: ["A. They lacked proper training.", "B. Teams could not afford to pay them.", "C. Scandals had damaged public trust and driven fans away.", "D. Fans preferred Korean cheerleaders."], answer: "C", explanation: "細節題。當時假球醜聞「had severely damaged public trust and pushed fans away」。" },
        { id: 3, question: "Which of the following is true about cheerleaders' work?", options: ["A. They only perform before the game starts.", "B. They stop dancing as soon as it starts to rain.", "C. They perform the same dance for every player.", "D. They must memorize nearly 50 different routines."], answer: "D", explanation: "細節題。文中指出「Each cheerleader must memorize nearly 50 different routines」。" },
        { id: 4, question: "What can be inferred from the last paragraph?", options: ["A. Cheerleaders will soon replace baseball games.", "B. Cheerleading may attract people who were not baseball fans before.", "C. Critics want to ban cheerleaders completely.", "D. Only young people enjoy CPBL games."], answer: "B", explanation: "推論題。對棒球一無所知的人可能因喜歡應援而進場，進而開始支持球隊。" }
      ]
    }
  },

  "Unit 10": {
    title: "Pompeii Revealed: The World Beneath the Ash",
    chineseTitle: "一夜消失的城市：龐貝古城埋藏千年的祕密",
    passage: `Near the Bay of Naples in Italy, the ancient city of Pompeii stands as a remarkable time capsule. In 79 AD, at the height of the Roman Empire's prosperity, Mount Vesuvius erupted with overwhelming force. Within hours, the city was buried under meters of ash and pumice. This catastrophe turned out to be an unintentional act of preservation, sealing an entire civilization in place for nearly 2,000 years.

Walking through Pompeii, visitors are struck by the sophistication of its urban design and the vivid traces of daily life it preserves. The ash sealed out air and moisture, leaving streets, buildings, and everyday objects intact. The city's well-organized roads, raised sidewalks for pedestrians, and public fountains reveal the Romans' advanced engineering techniques. Written messages can also be seen on walls, including election slogans, restaurant menus, and graffiti by ordinary citizens. Together, these features offer a clear picture of a lively and orderly commercial society.

Perhaps the most haunting discoveries are the plaster casts of the victims. As bodies decomposed inside hardened ash, they left behind hollow cavities that retained their final postures. In the 19th century, archaeologists filled these spaces with plaster, capturing the victims' final moments. Some figures appear to be shielding themselves, while others cling to loved ones or personal belongings. Such details transform historical facts into deeply human stories, connecting us emotionally to people who lived two millennia ago.

Today, Pompeii remains one of the world's most important archaeological sites. As visitors walk through its quiet streets, they are reminded not only of Roman civilization's brilliance, but also of this city's sudden end. No matter how powerful or prosperous a society may be, it cannot escape the forces of nature. The ruins of Pompeii, frozen in time, continue to speak of human vulnerability and the fleeting nature of life.`,
    chineseTranslation: `在義大利那不勒斯灣附近，古城龐貝宛如一座非凡的時空膠囊。西元79年，正值羅馬帝國最繁榮的時期，維蘇威火山以驚人的威力爆發。短短數小時內，整座城市就被數公尺厚的火山灰與浮石掩埋。這場災難意外成了一種保存，將整個文明原封不動地封存了將近兩千年。

漫步在龐貝城中，遊客會對其都市設計的精巧，以及所保存的鮮活日常生活痕跡印象深刻。火山灰隔絕了空氣與濕氣，使街道、建築和日常用品得以完好保存。城市規劃完善的道路、供行人使用的墊高人行道，以及公共噴泉，都展現了羅馬人先進的工程技術。牆上也能看到各種文字，包括選舉標語、餐廳菜單，以及一般市民的塗鴉。這些特色共同呈現出一個熱鬧又有秩序的商業社會。

或許最令人難忘的發現，是那些罹難者的石膏像。遺體在硬化的火山灰中腐化後，留下了保有他們最後姿態的中空空腔。19世紀時，考古學家將石膏灌入這些空間，捕捉了罹難者最後的時刻。有些人像看起來正試圖保護自己，有些則緊抱著摯愛或個人物品。這些細節把歷史事實轉化為深刻的人性故事，讓我們在情感上與兩千年前的人們產生連結。

如今，龐貝仍是世界上最重要的考古遺址之一。當遊客走在寂靜的街道上，他們不僅會想起羅馬文明的輝煌，也會想起這座城市突如其來的終結。無論一個社會多麼強大或繁榮，都無法逃脫大自然的力量。凝結在時光中的龐貝遺跡，持續訴說著人類的脆弱與生命的短暫。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "prosperity", pos: "n.", meaning: "繁榮、興盛", collocations: "at the height of prosperity 在最繁榮的時期" },
        { id: 2, word: "catastrophe", pos: "n.", meaning: "大災難", collocations: "a natural catastrophe 天災" },
        { id: 3, word: "sophistication", pos: "n.", meaning: "精密、精巧", collocations: "the sophistication of its urban design 都市設計的精巧" },
        { id: 4, word: "decompose", pos: "v.", meaning: "腐爛、分解", collocations: "bodies decomposed 遺體腐化" },
        { id: 5, word: "vulnerability", pos: "n.", meaning: "脆弱", collocations: "human vulnerability 人類的脆弱" },
        { id: 6, word: "fleeting", pos: "adj.", meaning: "短暫的、稍縱即逝的", collocations: "the fleeting nature of life 生命的短暫" }
      ],
      grammarNotes: [
        { id: "G1", title: "分詞構句表結果", excerpt: "sealing an entire civilization in place for nearly 2,000 years", analysis: "現在分詞 sealing 引導分詞構句，表示前句災難所帶來的結果：將整個文明封存近兩千年。" },
        { id: "G2", title: "No matter how + adj. + S + V (無論多麼…)", excerpt: "No matter how powerful or prosperous a society may be", analysis: "No matter how 引導讓步子句，等於 However powerful…，表「無論多麼強大或繁榮」。" }
      ],
      patternNotes: [
        { id: "P1", title: "turn out to be (結果竟然是…)", excerpt: "turned out to be an unintentional act of preservation", analysis: "turn out to be 表「結果證明是、原來是」，說明災難出乎意料地成了保存。" },
        { id: "P2", title: "not only A but also B", excerpt: "not only of Roman civilization's brilliance, but also of", analysis: "not only A but also B 連接兩個對等的介系詞片語（of…, of…），表「不僅…也…」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Near the Bay of Naples in Italy, the ancient city of Pompeii stands as a remarkable time capsule. In 79 AD, at the height of the Roman Empire's ` },
          { type: 'vocab', text: `prosperity`, vid: 1 },
          { type: 'text', text: `, Mount Vesuvius erupted with overwhelming force. Within hours, the city was buried under meters of ash and pumice. This ` },
          { type: 'vocab', text: `catastrophe`, vid: 2 },
          { type: 'text', text: ` ` },
          { type: 'pattern', text: `turned out to be an unintentional act of preservation`, pid: 'P1' },
          { type: 'text', text: `, ` },
          { type: 'grammar', text: `sealing an entire civilization in place for nearly 2,000 years`, gid: 'G1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Walking through Pompeii, visitors are struck by the ` },
          { type: 'vocab', text: `sophistication`, vid: 3 },
          { type: 'text', text: ` of its urban design and the vivid traces of daily life it preserves. The ash sealed out air and moisture, leaving streets, buildings, and everyday objects intact. The city's well-organized roads, raised sidewalks for pedestrians, and public fountains reveal the Romans' advanced engineering techniques. Written messages can also be seen on walls, including election slogans, restaurant menus, and graffiti by ordinary citizens. Together, these features offer a clear picture of a lively and orderly commercial society.` }
        ],
        [
          { type: 'text', text: `Perhaps the most haunting discoveries are the plaster casts of the victims. As bodies ` },
          { type: 'vocab', text: `decomposed`, vid: 4 },
          { type: 'text', text: ` inside hardened ash, they left behind hollow cavities that retained their final postures. In the 19th century, archaeologists filled these spaces with plaster, capturing the victims' final moments. Some figures appear to be shielding themselves, while others cling to loved ones or personal belongings. Such details transform historical facts into deeply human stories, connecting us emotionally to people who lived two millennia ago.` }
        ],
        [
          { type: 'text', text: `Today, Pompeii remains one of the world's most important archaeological sites. As visitors walk through its quiet streets, they are reminded ` },
          { type: 'pattern', text: `not only of Roman civilization's brilliance, but also of`, pid: 'P2' },
          { type: 'text', text: ` this city's sudden end. ` },
          { type: 'grammar', text: `No matter how powerful or prosperous a society may be`, gid: 'G2' },
          { type: 'text', text: `, it cannot escape the forces of nature. The ruins of Pompeii, frozen in time, continue to speak of human ` },
          { type: 'vocab', text: `vulnerability`, vid: 5 },
          { type: 'text', text: ` and the ` },
          { type: 'vocab', text: `fleeting`, vid: 6 },
          { type: 'text', text: ` nature of life.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Ancient Rome enjoyed centuries of peace and ______.", options: ["A. poverty", "B. hunger", "C. silence", "D. prosperity"], answer: "D", explanation: "【選項解析】\n- (A) poverty (n.) 貧窮\n- (B) hunger (n.) 飢餓\n- (C) silence (n.) 寂靜\n- (D) prosperity (n.) 繁榮 (正解)" },
      { id: 2, question: "The earthquake was a ______ that destroyed thousands of homes.", options: ["A. celebration", "B. catastrophe", "C. ceremony", "D. contest"], answer: "B", explanation: "【選項解析】\n- (A) celebration (n.) 慶祝\n- (B) catastrophe (n.) 大災難 (正解)\n- (C) ceremony (n.) 典禮\n- (D) contest (n.) 比賽" },
      { id: 3, question: "Childhood seems ______; it passes before we know it.", options: ["A. fleeting", "B. permanent", "C. endless", "D. ancient"], answer: "A", explanation: "【選項解析】\n- (A) fleeting (adj.) 短暫的 (正解)\n- (B) permanent (adj.) 永久的\n- (C) endless (adj.) 無止盡的\n- (D) ancient (adj.) 古老的" },
      { id: 4, question: "The storm revealed the ______ of the small coastal villages.", options: ["A. wealth", "B. strength", "C. vulnerability", "D. beauty"], answer: "C", explanation: "【選項解析】\n- (A) wealth (n.) 財富\n- (B) strength (n.) 力量\n- (C) vulnerability (n.) 脆弱 (正解)\n- (D) beauty (n.) 美麗" },
    ],
    cloze: {
      text: "Pompeii was an ancient Roman city [1] was destroyed when Mount Vesuvius erupted in 79 AD. Within hours, the city was buried [2] thick layers of ash. Surprisingly, the ash protected the city, keeping streets and buildings in good condition for nearly 2,000 years. Visitors today can see roads, fountains, and even messages [3] on walls. Plaster casts show the victims' final moments, [4] history feel deeply personal. Pompeii reminds us that no society, [5] powerful, can escape the forces of nature.",
      questions: [
        { id: 1, options: ["A. who", "B. where", "C. that", "D. what"], answer: "C", explanation: "that 引導形容詞子句修飾先行詞 city，並在子句中作主詞。" },
        { id: 2, options: ["A. under", "B. above", "C. between", "D. among"], answer: "A", explanation: "be buried under… 表「被埋在…之下」。" },
        { id: 3, options: ["A. write", "B. writing", "C. to write", "D. written"], answer: "D", explanation: "過去分詞 written 後置修飾 messages，表被動「被寫在牆上的訊息」。" },
        { id: 4, options: ["A. made", "B. making", "C. to make", "D. makes"], answer: "B", explanation: "現在分詞 making 引導分詞構句，表前句帶來的結果：讓歷史變得更貼近人心。" },
        { id: 5, options: ["A. however", "B. whatever", "C. whenever", "D. wherever"], answer: "A", explanation: "however + 形容詞 表讓步「無論多麼…」，此處 however powerful 為省略句。" },
      ]
    },
    wordBank: {
      words: ["(A) archaeologist", "(B) ash", "(C) cast", "(D) eruption", "(E) graffiti", "(F) intact", "(G) preservation", "(H) ruins", "(I) sidewalk", "(J) victim"],
      passage: "The [1] of Mount Vesuvius buried the city in a single day.\n\nThick layers of [2] covered streets and buildings.\n\nSurprisingly, many objects remained [3] after nearly 2,000 years.\n\nAn [4] studies ancient places and objects to learn about the past.\n\nA raised [5] allowed pedestrians to walk safely beside the road.\n\nOrdinary citizens left [6] on the city's walls.\n\nEach plaster [7] shows the shape of a person's body.\n\nOne [8] appears to be protecting a child.\n\nThe ash acted as an accidental form of [9].\n\nToday, tourists from around the world visit the [10] of the ancient city.",
      answers: { 1: "D", 2: "B", 3: "F", 4: "A", 5: "I", 6: "E", 7: "C", 8: "J", 9: "G", 10: "H" }
    },
    discourse: {
      options: [
        "A. These techniques have uncovered details about the victims' health, social status, and even family relationships.",
        "B. As visitors walk through its quiet streets, they are reminded not only of Roman civilization's brilliance, but also of this city's sudden end.",
        "C. Within hours, the city was buried under meters of ash and pumice.",
        "D. In the 19th century, archaeologists filled these spaces with plaster, capturing the victims' final moments.",
        "E. Written messages can also be seen on walls, including election slogans, restaurant menus, and graffiti by ordinary citizens."
      ],
      paragraphs: [
        "Near the Bay of Naples in Italy, the ancient city of Pompeii stands as a remarkable time capsule. In 79 AD, at the height of the Roman Empire's prosperity, Mount Vesuvius erupted with overwhelming force. [1] This catastrophe turned out to be an unintentional act of preservation, sealing an entire civilization in place for nearly 2,000 years.",
        "Walking through Pompeii, visitors are struck by the sophistication of its urban design and the vivid traces of daily life it preserves. The ash sealed out air and moisture, leaving streets, buildings, and everyday objects intact. The city's well-organized roads, raised sidewalks for pedestrians, and public fountains reveal the Romans' advanced engineering techniques. [2] Together, these features offer a clear picture of a lively and orderly commercial society.",
        "Perhaps the most haunting discoveries are the plaster casts of the victims. As bodies decomposed inside hardened ash, they left behind hollow cavities that retained their final postures. [3] Some figures appear to be shielding themselves, while others cling to loved ones or personal belongings. Such details transform historical facts into deeply human stories, connecting us emotionally to people who lived two millennia ago.",
        "Today, Pompeii remains one of the world's most important archaeological sites. [4] No matter how powerful or prosperous a society may be, it cannot escape the forces of nature. The ruins of Pompeii, frozen in time, continue to speak of human vulnerability and the fleeting nature of life."
      ],
      answers: { 1: "C", 2: "E", 3: "D", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. Why Mount Vesuvius erupted.", "B. How Pompeii's destruction preserved a detailed picture of Roman life and what it teaches us.", "C. How plaster is made.", "D. How Roman election campaigns worked."], answer: "B", explanation: "主旨題。全文說明火山爆發如何意外保存龐貝的城市樣貌與人們的最後時刻，並帶出其啟示。" },
        { id: 2, question: "What did archaeologists do in the 19th century?", options: ["A. They rebuilt the city's fountains.", "B. They removed ash from the volcano.", "C. They filled hollow spaces with plaster to capture the victims' final moments.", "D. They translated the graffiti into Italian."], answer: "C", explanation: "細節題。文中指出考古學家「filled these spaces with plaster, capturing the victims' final moments」。" },
        { id: 3, question: "Which is NOT mentioned as part of Pompeii's urban design?", options: ["A. Raised sidewalks.", "B. Public fountains.", "C. Well-organized roads.", "D. Underground water tunnels."], answer: "D", explanation: "細節題。文中提到道路、墊高人行道與公共噴泉，並未提及地下水道。" },
        { id: 4, question: "What lesson does the author draw from Pompeii?", options: ["A. Even powerful societies cannot escape the forces of nature.", "B. Volcanic eruptions are easy to predict.", "C. Roman engineering was poorly planned.", "D. Ancient cities should be rebuilt."], answer: "A", explanation: "推論題。作者寫道「No matter how powerful or prosperous a society may be, it cannot escape the forces of nature」。" }
      ]
    }
  },

  "Unit 11": {
    title: "Study Less, Retain More: A Smarter Way to Learn",
    chineseTitle: "讀更少、記更多：讓大腦開外掛的學習法",
    passage: `Have you ever studied all night, only to forget almost everything the next day? Many students blame a lack of intelligence or effort, but the reality is often simpler: you're fighting against your brain's natural design. Your brain doesn't record everything it sees like a camera; instead, it selectively preserves information based on your physical state and environment. So, instead of simply studying for longer, it's more useful to improve how you study.

First, identify the optimal state for focus. Surprisingly, being slightly hungry or physically active can sharpen your concentration. Rather than sitting motionless for hours, try reviewing key concepts while walking or reciting them aloud before dinner. This light activity can improve both attention and memory.

Furthermore, avoid the temptation to scroll through social media immediately after a study session. When you finish learning, your brain enters a critical phase of processing and storing information. Exposing yourself to intense stimulation from short videos or social feeds can disrupt this fragile process, essentially erasing what you've just learned. A brief period of quiet reflection or even a short nap is far more beneficial for long-term retention.

Finally, never underestimate the power of sleep. Many students view sleep as a waste of time, yet it's actually the most productive part of the learning cycle. During sleep, your brain organizes and strengthens the day's information. Research suggests that reviewing the most challenging material right before bed allows your brain to prioritize those facts during its nightly processing. By adjusting your study habits, reducing distractions, and making good use of sleep, you can train your brain to learn more effectively.`,
    chineseTranslation: `你是否曾經熬夜讀了一整晚，結果隔天幾乎全忘光了？許多學生把原因歸咎於不夠聰明或不夠努力，但事實往往更簡單：你正在和大腦的天生設計對抗。你的大腦不會像相機一樣把看到的一切都記錄下來；相反地，它會根據你的身體狀態與環境，有選擇性地保存資訊。所以，與其只是拉長讀書時間，不如改善讀書的方法，這樣會更有用。

首先，找出最適合專注的狀態。令人意外的是，稍微有點餓或保持身體活動，反而能讓注意力更集中。與其一動也不動地坐上好幾個小時，不如試著邊走路邊複習重要觀念，或在晚餐前把它們大聲唸出來。這種輕度的活動能同時提升注意力與記憶力。

此外，讀完書後要避免立刻滑社群媒體的誘惑。當你結束學習時，大腦會進入處理與儲存資訊的關鍵階段。這時若讓自己暴露在短影音或社群動態的強烈刺激下，可能會干擾這個脆弱的過程，基本上等於把剛學的東西抹掉。短暫地安靜沉澱，甚至小睡片刻，對長期記憶要有益得多。

最後，千萬別低估睡眠的力量。許多學生認為睡覺是浪費時間，但其實睡眠是學習循環中最有生產力的一環。睡眠期間，大腦會整理並強化當天的資訊。研究指出，在睡前複習最困難的內容，能讓大腦在夜間處理資訊時優先處理這些內容。只要調整讀書習慣、減少干擾，並善用睡眠，你就能訓練大腦更有效率地學習。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "selectively", pos: "adv.", meaning: "有選擇性地", collocations: "selectively preserves information 有選擇性地保存資訊" },
        { id: 2, word: "optimal", pos: "adj.", meaning: "最佳的", collocations: "the optimal state 最佳狀態" },
        { id: 3, word: "motionless", pos: "adj.", meaning: "一動也不動的", collocations: "sit motionless 靜坐不動" },
        { id: 4, word: "temptation", pos: "n.", meaning: "誘惑", collocations: "avoid the temptation to V 避免…的誘惑" },
        { id: 5, word: "fragile", pos: "adj.", meaning: "脆弱的、易碎的", collocations: "a fragile process 脆弱的過程" },
        { id: 6, word: "retention", pos: "n.", meaning: "記憶、保留", collocations: "long-term retention 長期記憶" }
      ],
      grammarNotes: [
        { id: "G1", title: "only to + V (結果卻…)", excerpt: "only to forget almost everything the next day", analysis: "only to + 原形動詞 表示出乎意料或令人失望的結果，熬夜苦讀「結果卻」隔天全忘光。" },
        { id: "G2", title: "動名詞片語作主詞", excerpt: "Exposing yourself to intense stimulation from short videos or social feeds", analysis: "動名詞片語作主詞，後接助動詞 can disrupt，表「讓自己暴露在強烈刺激下這件事」會干擾記憶過程。" }
      ],
      patternNotes: [
        { id: "P1", title: "instead of + V-ing (不…而…)", excerpt: "instead of simply studying for longer", analysis: "instead of 後接動名詞，表「與其…、而不是…」，強調改善方法比拉長時間更重要。" },
        { id: "P2", title: "allow + O + to V (使…能夠…)", excerpt: "allows your brain to prioritize those facts", analysis: "allow + 受詞 + to + 原形動詞，表「讓某人／某物得以做某事」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Have you ever studied all night, ` },
          { type: 'grammar', text: `only to forget almost everything the next day`, gid: 'G1' },
          { type: 'text', text: `? Many students blame a lack of intelligence or effort, but the reality is often simpler: you're fighting against your brain's natural design. Your brain doesn't record everything it sees like a camera; instead, it ` },
          { type: 'vocab', text: `selectively`, vid: 1 },
          { type: 'text', text: ` preserves information based on your physical state and environment. So, ` },
          { type: 'pattern', text: `instead of simply studying for longer`, pid: 'P1' },
          { type: 'text', text: `, it's more useful to improve how you study.` }
        ],
        [
          { type: 'text', text: `First, identify the ` },
          { type: 'vocab', text: `optimal`, vid: 2 },
          { type: 'text', text: ` state for focus. Surprisingly, being slightly hungry or physically active can sharpen your concentration. Rather than sitting ` },
          { type: 'vocab', text: `motionless`, vid: 3 },
          { type: 'text', text: ` for hours, try reviewing key concepts while walking or reciting them aloud before dinner. This light activity can improve both attention and memory.` }
        ],
        [
          { type: 'text', text: `Furthermore, avoid the ` },
          { type: 'vocab', text: `temptation`, vid: 4 },
          { type: 'text', text: ` to scroll through social media immediately after a study session. When you finish learning, your brain enters a critical phase of processing and storing information. ` },
          { type: 'grammar', text: `Exposing yourself to intense stimulation from short videos or social feeds`, gid: 'G2' },
          { type: 'text', text: ` can disrupt this ` },
          { type: 'vocab', text: `fragile`, vid: 5 },
          { type: 'text', text: ` process, essentially erasing what you've just learned. A brief period of quiet reflection or even a short nap is far more beneficial for long-term ` },
          { type: 'vocab', text: `retention`, vid: 6 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Finally, never underestimate the power of sleep. Many students view sleep as a waste of time, yet it's actually the most productive part of the learning cycle. During sleep, your brain organizes and strengthens the day's information. Research suggests that reviewing the most challenging material right before bed ` },
          { type: 'pattern', text: `allows your brain to prioritize those facts`, pid: 'P2' },
          { type: 'text', text: ` during its nightly processing. By adjusting your study habits, reducing distractions, and making good use of sleep, you can train your brain to learn more effectively.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The ______ temperature for growing these plants is around 25 degrees Celsius.", options: ["A. optimal", "B. harmful", "C. frozen", "D. random"], answer: "A", explanation: "【選項解析】\n- (A) optimal (adj.) 最佳的 (正解)\n- (B) harmful (adj.) 有害的\n- (C) frozen (adj.) 冰凍的\n- (D) random (adj.) 隨機的" },
      { id: 2, question: "She resisted the ______ to eat another piece of cake.", options: ["A. ability", "B. permission", "C. temptation", "D. invitation"], answer: "C", explanation: "【選項解析】\n- (A) ability (n.) 能力\n- (B) permission (n.) 許可\n- (C) temptation (n.) 誘惑 (正解)\n- (D) invitation (n.) 邀請" },
      { id: 3, question: "Handle the old glass vase with care; it is very ______.", options: ["A. heavy", "B. fragile", "C. cheap", "D. solid"], answer: "B", explanation: "【選項解析】\n- (A) heavy (adj.) 重的\n- (B) fragile (adj.) 易碎的 (正解)\n- (C) cheap (adj.) 便宜的\n- (D) solid (adj.) 堅固的" },
      { id: 4, question: "Regular review improves the ______ of new vocabulary.", options: ["A. loss", "B. cost", "C. noise", "D. retention"], answer: "D", explanation: "【選項解析】\n- (A) loss (n.) 損失\n- (B) cost (n.) 成本\n- (C) noise (n.) 噪音\n- (D) retention (n.) 記憶、保留 (正解)" },
    ],
    cloze: {
      text: "Many students study late into the night, [1] they forget most of what they learned by the next day. The brain does not store everything; it keeps information [2] on our physical state and environment. Light activity, such as walking, can help us focus better, [3] sitting still for hours may make us sleepy. After studying, it is better to rest quietly [4] check social media right away. Sleep is also important, [5] the brain organizes and strengthens new information at night.",
      questions: [
        { id: 1, options: ["A. so that", "B. unless", "C. because", "D. yet"], answer: "D", explanation: "yet 表轉折「然而」，熬夜苦讀卻隔天就忘光。" },
        { id: 2, options: ["A. based", "B. basing", "C. to base", "D. base"], answer: "A", explanation: "based on 為過去分詞片語，表「根據…」。" },
        { id: 3, options: ["A. so", "B. while", "C. because of", "D. unless"], answer: "B", explanation: "while 表對比「而」，對照輕度活動與久坐不動的不同效果。" },
        { id: 4, options: ["A. and", "B. but", "C. than", "D. so"], answer: "C", explanation: "it is better to A than (to) B 表「做A比做B好」。" },
        { id: 5, options: ["A. since", "B. unless", "C. although", "D. or"], answer: "A", explanation: "since 引導原因子句，說明睡眠重要的原因。" },
      ]
    },
    wordBank: {
      words: ["(A) concentration", "(B) distraction", "(C) environment", "(D) memory", "(E) nap", "(F) recite", "(G) reflection", "(H) session", "(I) stimulation", "(J) habit"],
      passage: "Background noise can make [1] difficult, especially when reading.\n\nOur [2] can weaken if we do not review what we learn.\n\nA quiet [3] with good lighting is ideal for studying.\n\nTry to [4] key words aloud to remember them better.\n\nEach study [5] should be followed by a short break.\n\nShort videos provide strong [6] that keeps the brain busy.\n\nA phone on the desk is a constant [7] for many students.\n\nA short [8] after lunch can help you feel refreshed.\n\nTaking a few minutes for quiet [9] helps you think about what you learned.\n\nReviewing before bed every night is a good [10] to develop.",
      answers: { 1: "A", 2: "D", 3: "C", 4: "F", 5: "H", 6: "I", 7: "B", 8: "E", 9: "G", 10: "J" }
    },
    discourse: {
      options: [
        "A. Light activity, such as walking while reviewing, can actually sharpen our concentration.",
        "B. Coffee is one of the most popular drinks among college students.",
        "C. During sleep, the brain organizes and strengthens what we learned during the day.",
        "D. Scrolling through short videos right after studying can disrupt how the brain stores information.",
        "E. The brain does not record everything; instead, it selectively keeps information."
      ],
      paragraphs: [
        "Many students study for hours but forget most of the material the next day.",
        "The problem is often not a lack of effort. [1] Learning how the brain works can help us study more effectively.",
        "One useful tip is to avoid sitting still for too long. [2] What we do after studying matters, too. [3]",
        "Finally, sleep should never be seen as a waste of time. [4]"
      ],
      answers: { 1: "E", 2: "A", 3: "D", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the main idea of the article?", options: ["A. Students should study all night before exams.", "B. Social media helps students relax after studying.", "C. Studying smarter, not longer, helps us remember more.", "D. Hungry students cannot concentrate."], answer: "C", explanation: "主旨題。文章主張改善讀書方法比拉長讀書時間更有效。" },
        { id: 2, question: "According to the article, what is recommended right after a study session?", options: ["A. Watching short videos.", "B. Quiet reflection or a short nap.", "C. Eating a large meal.", "D. Starting another subject immediately."], answer: "B", explanation: "細節題。文中指出「A brief period of quiet reflection or even a short nap is far more beneficial」。" },
        { id: 3, question: "Why does the author suggest reviewing difficult material right before bed?", options: ["A. The brain may prioritize it during nightly processing.", "B. It helps you fall asleep faster.", "C. Teachers usually test difficult material.", "D. It reduces the amount of sleep you need."], answer: "A", explanation: "細節題。睡前複習能讓大腦「prioritize those facts during its nightly processing」。" },
        { id: 4, question: "Which of the following would the author most likely agree with?", options: ["A. Sleeping less leaves more time to learn.", "B. Sitting still for hours is the best way to study.", "C. A lack of intelligence is the main reason students forget.", "D. Changing study habits can improve learning results."], answer: "D", explanation: "推論題。作者最後總結調整讀書習慣、減少干擾並善用睡眠，就能更有效學習。" }
      ]
    }
  },

  "Unit 12": {
    title: "Hanbok: A Language of Color and Tradition",
    chineseTitle: "從衣著看韓國文化：韓服的象徵意義",
    passage: `When most people picture hanbok, they imagine graceful skirts in soft pastels or rich jewel tones. Yet this Korean national costume hasn't always looked the way it does today. Its history spans more than 2,000 years, shaped by cultural exchange with neighboring civilizations.

The earliest form of hanbok appeared during the Three Kingdoms period (57 BC–668 AD). Its foundation rested on three garments: the jeogori, a short jacket fastened at the front; the chima, a long wrap skirt worn by women; and the baji, wide trousers for men. These core elements prevailed throughout hanbok's long transformation.

During the Unified Silla era (676–935), close ties with China's Tang Dynasty brought new fashions to the Korean court. Rounded collars and wide, flowing sleeves became popular, lending hanbok a more sophisticated look. A decorative wrap draped across the shoulders was also commonly added, reflecting the elegant style of Tang nobility.

A different influence arrived during the Goryeo Dynasty (918–1392). As the Mongol Yuan Dynasty expanded its influence in East Asia, royal marriages and court exchanges brought new fashions to the peninsula. Both the jeogori and chima were cut shorter and made more fitted — practical for the horseback-riding culture the Mongols prized. During this period, differences in dress between genders and across social classes also became less pronounced.

It was under the Joseon Dynasty (1392–1910) that hanbok took on its most familiar form. Confucian values sharpened distinctions between male and female dress. The women's jeogori continued to shorten, eventually rising well above the waist and creating a dramatic contrast with the full, high-waisted chima — the elegant profile now recognized worldwide as classic hanbok.

Hanbok comprises a few essential pieces that differ between men and women. Women wear a jeogori over a chima, while men pair their jeogori with baji. For formal occasions, men often add a durumagi, a long outer coat, to complete the look.

Beyond its basic structure, color in hanbok is far more than decoration. The traditional color system, known as obangsaek, links five main colors to the five elements of nature. White, representing metal, symbolizes purity, while red, linked to fire, signifies passion and good fortune. Blue corresponds to wood, carrying the meaning of growth and new beginnings. Black, tied to water, suggests wisdom and depth, and yellow, associated with earth, reflects balance and nobility. This color philosophy, rooted in yin-yang theory, shaped not only fashion choices but also how Koreans understood the world around them.

Color also communicated a wearer's social position and life stage. Unmarried young women traditionally wore a yellow jeogori with a red chima to signal their readiness for marriage. After their weddings, married women switched to a green jeogori paired with a red chima. Young children wore hanbok with rainbow-striped sleeves known as saekdong, which was believed to protect them from evil and bring good fortune. Ordinary commoners were largely forbidden from wearing anything but undyed white clothing, while royalty and the nobility could wear vibrant, richly dyed fabrics.

Embroidered patterns on hanbok carried meaning as well. Peonies stitched on a bridal gown expressed hopes for honor and wealth. Bats and pomegranates — both auspicious symbols — conveyed wishes for children and family prosperity. Together, color, form, and embroidery rendered hanbok a language worn on the body.`,
    chineseTranslation: `提到韓服，大多數人腦中浮現的是柔和粉嫩色系或濃郁寶石色調的優雅裙裝。然而，這套韓國的民族服飾並非一直都是現在的模樣。它的歷史橫跨兩千多年，在與鄰近文明的文化交流中逐漸成形。

韓服最早的形式出現在三國時代（西元前57年至西元668年）。其基礎由三件衣物構成：「赤古里」，一種在前方繫結的短上衣；「契瑪」，女性穿著的長圍裙；以及「巴基」，男性穿的寬褲。這些核心元素在韓服漫長的演變過程中一直延續下來。

統一新羅時期（676–935年），與中國唐朝的密切往來為朝鮮宮廷帶來了新的時尚。圓領和寬大飄逸的袖子開始流行，讓韓服看起來更加精緻。人們也常在肩上披一條裝飾性的披帛，反映出唐朝貴族的優雅風格。

高麗王朝（918–1392年）時期則出現了不同的影響。隨著蒙古元朝在東亞擴張勢力，皇室聯姻與宮廷交流為朝鮮半島帶來了新的時尚。赤古里和契瑪都被裁得更短、更合身——這很適合蒙古人所重視的騎馬文化。在這段時期，男女之間以及不同社會階級之間的服裝差異也變得不那麼明顯。

直到朝鮮王朝（1392–1910年），韓服才形成了今天人們最熟悉的樣貌。儒家價值觀使男女服裝的區別更加鮮明。女性的赤古里持續變短，最後高到遠在腰部之上，與蓬鬆的高腰契瑪形成強烈對比——這種優雅的輪廓如今在全世界都被視為經典韓服。

韓服由幾件基本單品組成，男女有所不同。女性在契瑪外搭配赤古里，男性則將赤古里與巴基搭配。在正式場合，男性通常會再加上一件長版外袍「周衣」，讓整體造型更完整。

除了基本結構之外，韓服的顏色也遠不只是裝飾。傳統的色彩系統稱為「五方色」，將五種主要顏色與自然界的五行相連結。代表金的白色象徵純潔；與火相連的紅色代表熱情與好運。藍色對應木，帶有成長與新開始的意義。與水相關的黑色意味著智慧與深度，而與土相關的黃色則反映平衡與高貴。這種根植於陰陽理論的色彩哲學，不僅影響了服裝的選擇，也影響了韓國人理解周遭世界的方式。

顏色也傳達了穿著者的社會地位與人生階段。未婚的年輕女性傳統上會穿黃色赤古里搭配紅色契瑪，表示已準備好結婚。婚後，已婚女性則改穿綠色赤古里搭配紅色契瑪。年幼的孩子穿著袖子有彩虹條紋的韓服，稱為「色東」，人們相信它能保護孩子免於邪惡並帶來好運。一般平民大多被禁止穿著未染色白衣以外的衣服，而王室與貴族則可以穿著鮮豔、色彩濃郁的布料。

韓服上的刺繡圖案也同樣具有意義。新娘禮服上繡的牡丹，表達對榮華富貴的期盼。蝙蝠和石榴——兩者都是吉祥的象徵——傳達了多子多孫與家族興旺的祝福。顏色、形制與刺繡結合在一起，使韓服成為一種穿在身上的語言。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "prevail", pos: "v.", meaning: "盛行、持續存在", collocations: "prevailed throughout 一直延續" },
        { id: 2, word: "sophisticated", pos: "adj.", meaning: "精緻的、講究的", collocations: "a more sophisticated look 更精緻的外觀" },
        { id: 3, word: "pronounced", pos: "adj.", meaning: "明顯的", collocations: "become less pronounced 變得不那麼明顯" },
        { id: 4, word: "comprise", pos: "v.", meaning: "由…組成", collocations: "comprise a few essential pieces 由幾件基本單品組成" },
        { id: 5, word: "auspicious", pos: "adj.", meaning: "吉祥的", collocations: "auspicious symbols 吉祥的象徵" },
        { id: 6, word: "vibrant", pos: "adj.", meaning: "鮮豔的、充滿活力的", collocations: "vibrant fabrics 鮮豔的布料" }
      ],
      grammarNotes: [
        { id: "G1", title: "分裂句 It was … that … (強調)", excerpt: "It was under the Joseon Dynasty (1392–1910) that hanbok took on its most familiar form", analysis: "It is/was + 強調部分 + that… 為分裂句，用來強調「正是在朝鮮王朝」韓服才形成最熟悉的樣貌。" },
        { id: "G2", title: "非限定關係子句 (which 被動)", excerpt: "which was believed to protect them from evil", analysis: "which 引導非限定形容詞子句補充說明 saekdong；be believed to + V 表「被認為能…」。" }
      ],
      patternNotes: [
        { id: "P1", title: "not only A but also B", excerpt: "not only fashion choices but also how Koreans understood", analysis: "not only A but also B 連接名詞與名詞子句，表色彩哲學「不僅」影響服裝選擇，「也」影響世界觀。" },
        { id: "P2", title: "render + O + OC (使…成為…)", excerpt: "rendered hanbok a language worn on the body", analysis: "render + 受詞 + 受詞補語，表「使…變成…」，此處受詞補語為名詞片語 a language worn on the body。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `When most people picture hanbok, they imagine graceful skirts in soft pastels or rich jewel tones. Yet this Korean national costume hasn't always looked the way it does today. Its history spans more than 2,000 years, shaped by cultural exchange with neighboring civilizations.` }
        ],
        [
          { type: 'text', text: `The earliest form of hanbok appeared during the Three Kingdoms period (57 BC–668 AD). Its foundation rested on three garments: the jeogori, a short jacket fastened at the front; the chima, a long wrap skirt worn by women; and the baji, wide trousers for men. These core elements ` },
          { type: 'vocab', text: `prevailed`, vid: 1 },
          { type: 'text', text: ` throughout hanbok's long transformation.` }
        ],
        [
          { type: 'text', text: `During the Unified Silla era (676–935), close ties with China's Tang Dynasty brought new fashions to the Korean court. Rounded collars and wide, flowing sleeves became popular, lending hanbok a more ` },
          { type: 'vocab', text: `sophisticated`, vid: 2 },
          { type: 'text', text: ` look. A decorative wrap draped across the shoulders was also commonly added, reflecting the elegant style of Tang nobility.` }
        ],
        [
          { type: 'text', text: `A different influence arrived during the Goryeo Dynasty (918–1392). As the Mongol Yuan Dynasty expanded its influence in East Asia, royal marriages and court exchanges brought new fashions to the peninsula. Both the jeogori and chima were cut shorter and made more fitted — practical for the horseback-riding culture the Mongols prized. During this period, differences in dress between genders and across social classes also became less ` },
          { type: 'vocab', text: `pronounced`, vid: 3 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'grammar', text: `It was under the Joseon Dynasty (1392–1910) that hanbok took on its most familiar form`, gid: 'G1' },
          { type: 'text', text: `. Confucian values sharpened distinctions between male and female dress. The women's jeogori continued to shorten, eventually rising well above the waist and creating a dramatic contrast with the full, high-waisted chima — the elegant profile now recognized worldwide as classic hanbok.` }
        ],
        [
          { type: 'text', text: `Hanbok ` },
          { type: 'vocab', text: `comprises`, vid: 4 },
          { type: 'text', text: ` a few essential pieces that differ between men and women. Women wear a jeogori over a chima, while men pair their jeogori with baji. For formal occasions, men often add a durumagi, a long outer coat, to complete the look.` }
        ],
        [
          { type: 'text', text: `Beyond its basic structure, color in hanbok is far more than decoration. The traditional color system, known as obangsaek, links five main colors to the five elements of nature. White, representing metal, symbolizes purity, while red, linked to fire, signifies passion and good fortune. Blue corresponds to wood, carrying the meaning of growth and new beginnings. Black, tied to water, suggests wisdom and depth, and yellow, associated with earth, reflects balance and nobility. This color philosophy, rooted in yin-yang theory, shaped ` },
          { type: 'pattern', text: `not only fashion choices but also how Koreans understood`, pid: 'P1' },
          { type: 'text', text: ` the world around them.` }
        ],
        [
          { type: 'text', text: `Color also communicated a wearer's social position and life stage. Unmarried young women traditionally wore a yellow jeogori with a red chima to signal their readiness for marriage. After their weddings, married women switched to a green jeogori paired with a red chima. Young children wore hanbok with rainbow-striped sleeves known as saekdong, ` },
          { type: 'grammar', text: `which was believed to protect them from evil`, gid: 'G2' },
          { type: 'text', text: ` and bring good fortune. Ordinary commoners were largely forbidden from wearing anything but undyed white clothing, while royalty and the nobility could wear ` },
          { type: 'vocab', text: `vibrant`, vid: 6 },
          { type: 'text', text: `, richly dyed fabrics.` }
        ],
        [
          { type: 'text', text: `Embroidered patterns on hanbok carried meaning as well. Peonies stitched on a bridal gown expressed hopes for honor and wealth. Bats and pomegranates — both ` },
          { type: 'vocab', text: `auspicious`, vid: 5 },
          { type: 'text', text: ` symbols — conveyed wishes for children and family prosperity. Together, color, form, and embroidery ` },
          { type: 'pattern', text: `rendered hanbok a language worn on the body`, pid: 'P2' },
          { type: 'text', text: `.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The hotel offers a ______ dining experience with fine wine and elegant service.", options: ["A. simple", "B. careless", "C. sophisticated", "D. rough"], answer: "C", explanation: "【選項解析】\n- (A) simple (adj.) 簡單的\n- (B) careless (adj.) 粗心的\n- (C) sophisticated (adj.) 精緻講究的 (正解)\n- (D) rough (adj.) 粗糙的" },
      { id: 2, question: "Red is considered an ______ color for weddings in many Asian cultures.", options: ["A. unlucky", "B. ordinary", "C. awful", "D. auspicious"], answer: "D", explanation: "【選項解析】\n- (A) unlucky (adj.) 不吉利的\n- (B) ordinary (adj.) 普通的\n- (C) awful (adj.) 糟糕的\n- (D) auspicious (adj.) 吉祥的 (正解)" },
      { id: 3, question: "The garden was full of ______ flowers in red, yellow, and purple.", options: ["A. vibrant", "B. faded", "C. dull", "D. dead"], answer: "A", explanation: "【選項解析】\n- (A) vibrant (adj.) 鮮豔的 (正解)\n- (B) faded (adj.) 褪色的\n- (C) dull (adj.) 暗淡的\n- (D) dead (adj.) 枯死的" },
      { id: 4, question: "The committee ______ ten members from different schools.", options: ["A. hides", "B. comprises", "C. ignores", "D. rejects"], answer: "B", explanation: "【選項解析】\n- (A) hides (v.) 隱藏\n- (B) comprises (v.) 由…組成 (正解)\n- (C) ignores (v.) 忽視\n- (D) rejects (v.) 拒絕" },
    ],
    cloze: {
      text: "Hanbok, Korea's traditional clothing, has a history of more than 2,000 years. Its basic pieces have remained [1] same, but its style has changed over time. Under Tang influence, wide sleeves became popular, [2] Mongol influence later made the clothes shorter and more fitted. Colors in hanbok are also meaningful, [3] each main color is linked to one of the five elements. In the past, color even showed [4] a woman was married or not. Ordinary people, however, were [5] allowed to wear only undyed white clothing.",
      questions: [
        { id: 1, options: ["A. a", "B. the", "C. an", "D. that"], answer: "B", explanation: "remain the same 為固定用法，same 前須加定冠詞 the。" },
        { id: 2, options: ["A. so", "B. because", "C. unless", "D. while"], answer: "D", explanation: "while 表對比「而」，對照唐朝與蒙古對韓服的不同影響。" },
        { id: 3, options: ["A. although", "B. unless", "C. as", "D. so that"], answer: "C", explanation: "as 引導原因子句，表「因為」每種主要顏色都對應五行之一。" },
        { id: 4, options: ["A. whether", "B. what", "C. which", "D. that"], answer: "A", explanation: "whether… or not 引導名詞子句，表「是否」。" },
        { id: 5, options: ["A. never", "B. hardly", "C. rarely", "D. generally"], answer: "D", explanation: "generally 表「大致上、通常」，平民大致只能穿未染色的白衣；其他選項與 only 語意矛盾。" },
      ]
    },
    wordBank: {
      words: ["(A) collar", "(B) costume", "(C) dynasty", "(D) element", "(E) embroidery", "(F) garment", "(G) nobility", "(H) sleeve", "(I) symbol", "(J) trousers"],
      passage: "Hanbok is Korea's national [1], often worn on holidays.\n\nThe jeogori is a short [2] fastened at the front.\n\nMen traditionally wore baji, a pair of wide [3].\n\nThe Joseon [4] ruled Korea for more than 500 years.\n\nA rounded [5] became popular during the Unified Silla era.\n\nEach wide [6] flowed gracefully when the wearer moved.\n\nIn the past, only the royal family and the [7] could wear brightly dyed fabrics.\n\nWhite is linked to metal, one [8] of nature in the obangsaek system.\n\nThe peony is a [9] of honor and wealth.\n\nColorful [10] of bats and pomegranates decorated the gown.",
      answers: { 1: "B", 2: "F", 3: "J", 4: "C", 5: "A", 6: "H", 7: "G", 8: "D", 9: "I", 10: "E" }
    },
    discourse: {
      options: [
        "A. Unmarried women, for example, wore a yellow jeogori with a red chima.",
        "B. Under Mongol influence, the jeogori and chima became shorter and more fitted.",
        "C. Each of the five main colors is linked to one of the five elements of nature.",
        "D. Korean dramas have made traditional clothing popular around the world.",
        "E. Its basic pieces were a short jacket, a long skirt for women, and wide trousers for men."
      ],
      paragraphs: [
        "Hanbok, Korea's traditional clothing, has a history of more than 2,000 years.",
        "The earliest hanbok appeared during the Three Kingdoms period. [1] These core pieces have remained throughout its long history.",
        "Over the centuries, contact with neighboring cultures changed its style. [2] Later, under the Joseon Dynasty, hanbok took on its most familiar form.",
        "Color in hanbok also carries deep meaning. [3] Color could even show a wearer's social position or life stage. [4]"
      ],
      answers: { 1: "E", 2: "B", 3: "C", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How to sew a hanbok.", "B. The history of hanbok and the meanings of its colors and patterns.", "C. Why Koreans stopped wearing hanbok.", "D. Fashion trends in modern Korea."], answer: "B", explanation: "主旨題。全文介紹韓服的歷史演變，以及顏色與刺繡的象徵意義。" },
        { id: 2, question: "During which period did hanbok take on its most familiar form?", options: ["A. The Three Kingdoms period.", "B. The Unified Silla era.", "C. The Goryeo Dynasty.", "D. The Joseon Dynasty."], answer: "D", explanation: "細節題。文中指出「It was under the Joseon Dynasty… that hanbok took on its most familiar form」。" },
        { id: 3, question: "In the obangsaek system, which color represents growth and new beginnings?", options: ["A. Blue.", "B. White.", "C. Black.", "D. Yellow."], answer: "A", explanation: "細節題。「Blue corresponds to wood, carrying the meaning of growth and new beginnings」。" },
        { id: 4, question: "If a Joseon-era woman wore a green jeogori with a red chima, what could you infer?", options: ["A. She was a young child.", "B. She was a commoner.", "C. She was married.", "D. She was a member of the royal family."], answer: "C", explanation: "推論題。文中說明婚後女性「switched to a green jeogori paired with a red chima」。" }
      ]
    }
  },

  "Unit 14": {
    title: "Cracking the Code: What's in Your Egg?",
    chineseTitle: "蛋殼上的神祕密碼，你看懂了嗎？",
    passage: `Every day, millions of eggs are consumed across Taiwan, and most people pick up a carton without a second thought. But if you look closely at a washed egg, you may notice a printed code. That tiny mark discloses more about your breakfast than you might expect.

Since 2022, Taiwan has required washed eggs sold in supermarkets, convenience stores, and certain other locations to display a traceability code containing basic information. What matters most is the final letter, which shows how the hens were raised. For example, "C" refers to conventional cages, where hens are confined to very limited spaces, while "E" indicates enriched cages with slightly more room. "B" stands for barn systems, allowing hens to move freely indoors, and "F" refers to free-range systems with outdoor access. "O," the highest standard, marks certified organic eggs.

Despite the availability of better options, most eggs in Taiwan still come from cage systems. In such environments, hens cannot spread their wings or behave naturally. These conditions can lead to weaker bones and long-term stress. While conventional cages were banned in the EU in 2012, similar discussions are now emerging in Taiwan. Certifications such as the Cage Free Alliance label help shoppers make more informed choices. As more consumers prioritize non-C eggs, many hope the industry will progressively transition toward higher-welfare farming.

Next time you grab a carton, flip it over and check that last letter. Even noticing this small detail can change how we perceive a simple egg.`,
    chineseTranslation: `每天，臺灣各地有數百萬顆雞蛋被吃下肚，而大多數人拿起一盒蛋時想都不想。但如果你仔細看一顆洗選蛋，可能會注意到上面印著一串代碼。這個小小的標記所透露的早餐資訊，可能比你想像的還要多。

自2022年起，臺灣規定在超市、便利商店及其他特定地點販售的洗選蛋，必須標示含有基本資訊的溯源代碼。其中最重要的是最後一個字母，它顯示母雞是如何被飼養的。舉例來說，「C」代表傳統籠飼，母雞被關在非常有限的空間裡；「E」則代表空間稍大的豐富化籠飼。「B」代表平飼系統，讓母雞能在室內自由活動；「F」代表有戶外活動空間的放牧系統。最高標準的「O」則代表經認證的有機雞蛋。

儘管市面上有更好的選擇，臺灣大多數的雞蛋仍來自籠飼系統。在這樣的環境中，母雞無法展開翅膀，也無法表現自然行為。這些條件可能導致骨骼較脆弱與長期壓力。歐盟早在2012年就禁止傳統籠飼，而類似的討論如今也在臺灣浮現。像「非籠飼聯盟」標章這樣的認證，能幫助消費者做出更明智的選擇。隨著越來越多消費者優先選購非 C 字頭的雞蛋，許多人期盼產業能逐步轉向更重視動物福利的飼養方式。

下次你拿起一盒蛋時，不妨把蛋翻過來，看看最後那個字母。即使只是注意到這個小細節，也可能改變我們看待一顆普通雞蛋的方式。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "traceability", pos: "n.", meaning: "可追溯性、溯源", collocations: "a traceability code 溯源代碼" },
        { id: 2, word: "conventional", pos: "adj.", meaning: "傳統的、常規的", collocations: "conventional cages 傳統籠飼" },
        { id: 3, word: "confine", pos: "v.", meaning: "限制、關住", collocations: "be confined to… 被侷限在…" },
        { id: 4, word: "certified", pos: "adj.", meaning: "經認證的", collocations: "certified organic eggs 經認證的有機蛋" },
        { id: 5, word: "prioritize", pos: "v.", meaning: "優先考慮", collocations: "prioritize non-C eggs 優先選購非C蛋" },
        { id: 6, word: "progressively", pos: "adv.", meaning: "逐步地", collocations: "progressively transition 逐步轉型" }
      ],
      grammarNotes: [
        { id: "G1", title: "what 引導名詞子句作主詞", excerpt: "What matters most", analysis: "What matters most 為名詞子句作主詞，表「最重要的是…」，後接 is the final letter。" },
        { id: "G2", title: "分詞構句 + allow + O + to V", excerpt: "allowing hens to move freely indoors", analysis: "現在分詞 allowing 引導分詞構句補充說明平飼系統的特點；allow + 受詞 + to V 表「讓…能夠…」。" }
      ],
      patternNotes: [
        { id: "P1", title: "despite + N. (儘管…)", excerpt: "Despite the availability of better options", analysis: "despite 為介系詞，後接名詞片語，表「儘管有更好的選擇」。" },
        { id: "P2", title: "help + O + V (幫助某人做…)", excerpt: "help shoppers make more informed choices", analysis: "help + 受詞 + 原形動詞（或 to V），表「幫助某人做某事」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Every day, millions of eggs are consumed across Taiwan, and most people pick up a carton without a second thought. But if you look closely at a washed egg, you may notice a printed code. That tiny mark discloses more about your breakfast than you might expect.` }
        ],
        [
          { type: 'text', text: `Since 2022, Taiwan has required washed eggs sold in supermarkets, convenience stores, and certain other locations to display a ` },
          { type: 'vocab', text: `traceability`, vid: 1 },
          { type: 'text', text: ` code containing basic information. ` },
          { type: 'grammar', text: `What matters most`, gid: 'G1' },
          { type: 'text', text: ` is the final letter, which shows how the hens were raised. For example, "C" refers to ` },
          { type: 'vocab', text: `conventional`, vid: 2 },
          { type: 'text', text: ` cages, where hens are ` },
          { type: 'vocab', text: `confined`, vid: 3 },
          { type: 'text', text: ` to very limited spaces, while "E" indicates enriched cages with slightly more room. "B" stands for barn systems, ` },
          { type: 'grammar', text: `allowing hens to move freely indoors`, gid: 'G2' },
          { type: 'text', text: `, and "F" refers to free-range systems with outdoor access. "O," the highest standard, marks ` },
          { type: 'vocab', text: `certified`, vid: 4 },
          { type: 'text', text: ` organic eggs.` }
        ],
        [
          { type: 'pattern', text: `Despite the availability of better options`, pid: 'P1' },
          { type: 'text', text: `, most eggs in Taiwan still come from cage systems. In such environments, hens cannot spread their wings or behave naturally. These conditions can lead to weaker bones and long-term stress. While conventional cages were banned in the EU in 2012, similar discussions are now emerging in Taiwan. Certifications such as the Cage Free Alliance label ` },
          { type: 'pattern', text: `help shoppers make more informed choices`, pid: 'P2' },
          { type: 'text', text: `. As more consumers ` },
          { type: 'vocab', text: `prioritize`, vid: 5 },
          { type: 'text', text: ` non-C eggs, many hope the industry will ` },
          { type: 'vocab', text: `progressively`, vid: 6 },
          { type: 'text', text: ` transition toward higher-welfare farming.` }
        ],
        [
          { type: 'text', text: `Next time you grab a carton, flip it over and check that last letter. Even noticing this small detail can change how we perceive a simple egg.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Many shoppers prefer food with clear ______, so they know exactly where it came from.", options: ["A. flavor", "B. traceability", "C. packaging", "D. discount"], answer: "B", explanation: "【選項解析】\n- (A) flavor (n.) 風味\n- (B) traceability (n.) 可追溯性 (正解)\n- (C) packaging (n.) 包裝\n- (D) discount (n.) 折扣" },
      { id: 2, question: "During the lockdown, many people were ______ to their homes for weeks.", options: ["A. confined", "B. invited", "C. welcomed", "D. returned"], answer: "A", explanation: "【選項解析】\n- (A) confined (v.) 被侷限 (正解)\n- (B) invited (v.) 被邀請\n- (C) welcomed (v.) 被歡迎\n- (D) returned (v.) 被歸還" },
      { id: 3, question: "Only ______ teachers are allowed to teach in public schools.", options: ["A. retired", "B. hungry", "C. absent", "D. certified"], answer: "D", explanation: "【選項解析】\n- (A) retired (adj.) 退休的\n- (B) hungry (adj.) 飢餓的\n- (C) absent (adj.) 缺席的\n- (D) certified (adj.) 經認證的 (正解)" },
      { id: 4, question: "Students should learn to ______ their tasks and finish the most important ones first.", options: ["A. ignore", "B. delay", "C. prioritize", "D. forget"], answer: "C", explanation: "【選項解析】\n- (A) ignore (v.) 忽視\n- (B) delay (v.) 延後\n- (C) prioritize (v.) 排定優先順序 (正解)\n- (D) forget (v.) 忘記" },
    ],
    cloze: {
      text: "Every day, millions of eggs are consumed across Taiwan, and most people pick up a carton without a second thought. But if you look closely at a washed egg, you may notice a printed code. That tiny mark [1] more about your breakfast than you might expect.\n\nSince 2022, Taiwan has required washed eggs sold in supermarkets, convenience stores, and certain other locations to display a traceability code containing basic information. What matters most is the final letter, which shows [2] the hens were raised. For example, \"C\" refers to conventional cages, where hens are confined to very limited spaces, while \"E\" indicates enriched cages with slightly more room. \"B\" [3] barn systems, allowing hens to move freely indoors, and \"F\" refers to free-range systems with outdoor access. \"O,\" the highest standard, marks certified organic eggs.\n\nDespite the [4] of better options, most eggs in Taiwan still come from cage systems. In such environments, hens cannot spread their wings or behave naturally. These conditions can lead to weaker bones and long-term stress. While conventional cages were banned in the EU in 2012, similar discussions are now emerging in Taiwan. Certifications such as the Cage Free Alliance label help shoppers make more informed choices. As more consumers prioritize non-C eggs, many hope the industry will progressively transition toward higher-welfare farming.\n\nNext time you grab a carton, [5] and check that last letter. Even noticing this small detail can change how we perceive a simple egg.",
      questions: [
        { id: 1, options: ["A. provokes", "B. discloses", "C. sews", "D. embraces"], answer: "B", explanation: "【選項解析】\n- (A) provokes 激起\n- (B) discloses 透露、揭露 (正解)：小小的代碼「透露」出許多早餐的資訊\n- (C) sews 縫製\n- (D) embraces 擁抱、欣然接受" },
        { id: 2, options: ["A. what", "B. which", "C. when", "D. how"], answer: "D", explanation: "how 引導名詞子句作 shows 的受詞，表「母雞是如何被飼養的」；後方子句結構完整，不能用 what/which，而上下文說明的是飼養方式而非時間，故不選 when。" },
        { id: 3, options: ["A. figures out", "B. looks after", "C. stands for", "D. calls on"], answer: "C", explanation: "【選項解析】\n- (A) figures out 理解、想出\n- (B) looks after 照顧\n- (C) stands for 代表 (正解)：字母 B 代表平飼系統\n- (D) calls on 拜訪、號召" },
        { id: 4, options: ["A. availability", "B. discouragement", "C. frequency", "D. protein"], answer: "A", explanation: "【選項解析】\n- (A) availability 可取得性 (正解)：儘管「有」更好的選擇可買\n- (B) discouragement 氣餒\n- (C) frequency 頻率\n- (D) protein 蛋白質" },
        { id: 5, options: ["A. turn it down", "B. breathe a sigh of relief", "C. flip it over", "D. work your way up"], answer: "C", explanation: "【選項解析】\n- (A) turn it down 拒絕；調低\n- (B) breathe a sigh of relief 鬆一口氣\n- (C) flip it over 把它翻過來 (正解)：把蛋盒翻過來檢查最後一個字母\n- (D) work your way up 逐步往上爬" },
      ]
    },
    wordBank: {
      words: ["(A) barn", "(B) cage", "(C) carton", "(D) consumer", "(E) hen", "(F) label", "(G) organic", "(H) standard", "(I) welfare", "(J) wing"],
      passage: "She bought a [1] of twelve eggs at the supermarket.\n\nA [2] is a female chicken that lays eggs.\n\nIn a small [3], a hen cannot move around freely.\n\nHens in a [4] system can walk around indoors.\n\nA bird needs enough space to spread each [5].\n\nFood produced without artificial chemicals is called [6] food.\n\nAnimal [7] refers to how well animals are treated and cared for.\n\nLook for the [8] on the package to learn how the eggs were produced.\n\nEvery [9] has the right to know what they are buying.\n\nOrganic eggs meet the highest [10] in the system.",
      answers: { 1: "C", 2: "E", 3: "B", 4: "A", 5: "J", 6: "G", 7: "I", 8: "F", 9: "D", 10: "H" }
    },
    discourse: {
      options: [
        "A. Most eggs in Taiwan, however, still come from cage systems where hens have little room.",
        "B. For example, \"C\" means conventional cages, while \"F\" means free-range systems.",
        "C. Eggs are an excellent source of protein and vitamins.",
        "D. Checking the last letter can help shoppers make more informed choices.",
        "E. Since 2022, washed eggs in many stores must carry a traceability code."
      ],
      paragraphs: [
        "Most people buy eggs without paying much attention to what is printed on them.",
        "However, a small code on each egg can tell us a lot. [1] The final letter of the code is the most important part. [2]",
        "Better options are available in stores today. [3] Living in such tight spaces can cause weak bones and long-term stress.",
        "As more people learn about these codes, shopping habits may change. [4]"
      ],
      answers: { 1: "E", 2: "B", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How to cook eggs properly.", "B. What the code on Taiwanese eggs means and why it matters.", "C. Why eggs are becoming expensive.", "D. The history of the European Union."], answer: "B", explanation: "主旨題。全文說明蛋殼上溯源代碼的意義，以及它與動物福利的關係。" },
        { id: 2, question: "What does the letter \"B\" on an egg mean?", options: ["A. The hens were raised in a barn system.", "B. The hens were kept in conventional cages.", "C. The hens had outdoor access.", "D. The eggs are certified organic."], answer: "A", explanation: "細節題。文中指出「\"B\" stands for barn systems」。" },
        { id: 3, question: "Which is mentioned as a problem for hens kept in cages?", options: ["A. They eat too much.", "B. They lay too many eggs.", "C. They cannot spread their wings.", "D. They are exposed to cold weather."], answer: "C", explanation: "細節題。文中指出籠飼環境下「hens cannot spread their wings or behave naturally」。" },
        { id: 4, question: "Why does the author encourage readers to check the last letter?", options: ["A. To find the cheapest eggs.", "B. To check the expiration date.", "C. To avoid imported eggs.", "D. To make choices that support better treatment of hens."], answer: "D", explanation: "推論題。作者希望消費者優先選購非C蛋，促使產業轉向更重視動物福利的飼養方式。" }
      ]
    }
  },

  "Unit 15": {
    title: "The Martian: Stranded but Never Defeated",
    chineseTitle: "用科學對抗絕望：《火星任務》裡的生存課",
    passage: `The mission was supposed to be straightforward. Six astronauts landed on Mars, conducted their research, and prepared to depart. Then a violent storm arrived without warning. Strong winds swept across the surface and sent sharp debris through the air. One fragment struck Mark Watney and threw him into the chaos of the storm. His crew searched desperately, but their instruments showed no signs of life. With conditions worsening and the storm threatening to cripple their vessel, his teammates were convinced he had died. They had no choice but to leave Mars.

Hours later, Mark woke up in terrible pain. He found himself entirely alone in the silent red wasteland and realized he had been left behind. The communication equipment was broken, and no one on Earth knew he had survived. Worse still, his provisions would sustain him for only approximately 300 days. Rescue seemed impossible because the next planned Mars mission was still four years away.

Instead of giving up, Mark resolved to tackle one obstacle at a time. As a trained botanist, he transformed the mission's living quarters into a functional greenhouse and planted the few remaining whole potatoes. He collected food scraps and organic waste to use as compost, and then mixed it with Martian and Earth soil so he could grow crops. He also carried out dangerous experiments to generate water for the crops.

At the same time, Mark began documenting everything in daily video logs. He spoke to the camera as if he were talking to a close friend. Even in constant danger, he continued making jokes and fighting to survive. He wouldn't let this red desert become his grave.

Back on Earth, while reviewing satellite images of Mars, a NASA analyst noticed that the equipment at the abandoned base had been moved. It was evidence that someone was still alive. The discovery quickly spread, and scientists soon confirmed that the survivor was Mark Watney. Meanwhile, Mark recovered an old probe called Pathfinder and re-established contact with Earth.

However, rescue remained a distant prospect, and Mark's situation soon became worse. Repeated use of the airlock caused part of the habitat to tear open. The sudden loss of pressure destroyed his greenhouse and wiped out most of his crops. Although NASA scrambled to launch a supply rocket after the accident, it disintegrated shortly after liftoff. For the second time, survival seemed out of reach for Mark.

Then a scientist specializing in orbital mechanics proposed a bold alternative. He calculated a trajectory that would allow Mark's crewmates to swing their ship back toward Mars and rescue him. The plan was dangerous and would force the crew to remain in space far longer than originally scheduled. After learning the truth, the crew voted to return without hesitation, even if it meant openly defying orders from Earth.

Mark prepared for one final journey. He modified a rover and drove hundreds of kilometers to reach the meeting point. From there, he launched himself into orbit aboard a stripped-down rocket. The rendezvous became tense when he drifted helplessly through space. Then one teammate tethered himself to the ship and pushed out into open space to reach Mark. Together, they made it safely back aboard. After 549 sols on Mars, Mark Watney was finally rescued, but the journey home had only just begun.

The story behind The Martian is almost as extraordinary as the novel itself. Before becoming a bestselling author, Andy Weir worked as a software engineer who wrote science fiction as a hobby and had a passion for space. The Martian was originally posted on his personal blog, and he subsequently turned the story into an e-book and sold it on Amazon. A publisher soon bought the rights, and Hollywood adapted it into a blockbuster film starring Matt Damon in 2015.

One reason the novel remains memorable is its portrayal of human resilience. Mark endures repeated disasters, but he refuses to surrender to despair. Each time a crisis strikes, he calmly searches for another solution. His humor proves just as indispensable, as jokes help him survive emotionally. The story also champions scientific thinking. Rather than depending on luck, Mark survives through planning and experimentation. Knowledge, the novel suggests, is the most powerful survival tool of all.

Mark's story is also one of human connection. Stranded on Mars, he records daily logs and counts every passing day until contact with Earth is restored. That longing is answered when an entire world unites to save him despite risks and political pressure. Even the Chinese space agency provides NASA with a critical rocket booster during the rescue mission. The story shows that great challenges require collective effort, not individual heroism.

Beyond its themes, The Martian succeeds in how it tells the story. Weir weaves scientific details so naturally that even readers without a science background can enjoy the novel. Pick up a copy and let Mark's story remind you that even on the loneliest journey, hope is never out of reach.`,
    chineseTranslation: `這次任務原本應該很單純。六名太空人登陸火星，進行研究，然後準備離開。接著，一場猛烈的沙塵暴毫無預警地來襲。強風席捲地表，將尖銳的碎片吹得漫天飛舞。其中一塊碎片擊中了馬克·瓦特尼，把他捲進風暴的混亂之中。他的組員拚命搜尋，但儀器顯示沒有任何生命跡象。隨著情況惡化，風暴又可能癱瘓他們的太空船，隊友們都認定他已經罹難。他們別無選擇，只能離開火星。

幾個小時後，馬克在劇痛中醒來。他發現自己孤零零地身處寂靜的紅色荒原，這才意識到自己被留下了。通訊設備已經損壞，地球上沒有人知道他還活著。更糟的是，他的補給只夠撐大約300天。救援看似不可能，因為下一次預定的火星任務還要四年後才會到來。

馬克沒有放棄，而是決心一次解決一個難關。身為受過訓練的植物學家，他把任務的居住艙改造成一座可運作的溫室，並種下僅剩的幾顆完整馬鈴薯。他收集廚餘與有機廢物作為堆肥，再將其與火星和地球的土壤混合，好讓自己能種植作物。他也進行了危險的實驗，為作物製造水。

與此同時，馬克開始在每天的影像日誌中記錄一切。他對著鏡頭說話，彷彿在跟一位好朋友聊天。即使時時身處險境，他依然不停開玩笑，奮力求生。他不會讓這片紅色沙漠成為他的墳墓。

回到地球，一位 NASA 分析師在檢視火星的衛星影像時，注意到被遺棄基地裡的設備被移動過。這證明有人還活著。消息迅速傳開，科學家很快就確認這名倖存者正是馬克·瓦特尼。同一時間，馬克找回了一具名為「拓荒者號」的舊探測器，重新與地球取得聯繫。

然而，救援依舊遙遙無期，馬克的處境很快變得更加惡劣。反覆使用氣閘導致居住艙的一部分破裂。氣壓驟降摧毀了他的溫室，也讓大部分作物毀於一旦。雖然 NASA 在事故後緊急發射一枚補給火箭，但火箭在升空後不久就解體了。馬克再一次看似無法生還。

接著，一位專精軌道力學的科學家提出了一個大膽的替代方案。他計算出一條軌道，能讓馬克的組員駕駛太空船繞回火星救他。這項計畫很危險，而且會迫使組員在太空中停留比原定時間長得多的時間。得知真相後，組員們毫不猶豫地投票決定返回，即使這意味著要公然違抗地球的命令。

馬克為最後一段旅程做準備。他改裝了一輛探測車，開了數百公里抵達會合點。他從那裡搭乘一枚精簡過的火箭，把自己發射進軌道。會合過程十分緊張，他無助地在太空中漂流。這時，一名隊友將自己繫在太空船上，推進開放太空中去接馬克。他們一起安全回到船上。在火星上度過549個火星日後，馬克·瓦特尼終於獲救，但回家的旅程才剛剛開始。

《火星任務》背後的故事，幾乎和小說本身一樣不凡。在成為暢銷作家之前，安迪·威爾是一名軟體工程師，把寫科幻小說當作嗜好，而且熱愛太空。《火星任務》最初發表在他的個人部落格上，後來他把故事做成電子書在亞馬遜上販售。不久之後，一家出版社買下了版權，好萊塢也在2015年將它改編成由麥特·戴蒙主演的賣座電影。

這部小說令人難忘的原因之一，在於它對人類韌性的刻畫。馬克一再遭遇災難，卻拒絕向絕望低頭。每當危機來襲，他總是冷靜地尋找另一個解決辦法。他的幽默感同樣不可或缺，因為玩笑幫助他在情緒上撐下去。這個故事也推崇科學思維。馬克不是靠運氣，而是靠計畫與實驗才得以存活。小說告訴我們，知識才是最強大的求生工具。

馬克的故事也是一個關於人與人連結的故事。受困火星的他每天錄製日誌，數著每一天，直到與地球恢復聯繫。這份渴望在整個世界團結起來救他時得到了回應，即使要冒著風險、承受政治壓力。就連中國的太空機構也在救援任務中提供 NASA 一具關鍵的火箭推進器。這個故事說明了，重大的挑戰需要眾人的共同努力，而不是個人英雄主義。

除了主題之外，《火星任務》在說故事的方式上也很成功。威爾將科學細節編織得如此自然，即使是沒有科學背景的讀者也能享受這部小說。拿起一本來讀吧，讓馬克的故事提醒你：即使在最孤獨的旅途上，希望也從不遙不可及。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "debris", pos: "n.", meaning: "碎片、殘骸", collocations: "sharp debris 尖銳的碎片" },
        { id: 2, word: "provisions", pos: "n.", meaning: "糧食、補給品", collocations: "provisions would sustain him 補給足以維持他的生活" },
        { id: 3, word: "botanist", pos: "n.", meaning: "植物學家", collocations: "a trained botanist 受過訓練的植物學家" },
        { id: 4, word: "disintegrate", pos: "v.", meaning: "解體、碎裂", collocations: "disintegrated shortly after liftoff 升空後不久就解體" },
        { id: 5, word: "trajectory", pos: "n.", meaning: "軌道、彈道", collocations: "calculate a trajectory 計算軌道" },
        { id: 6, word: "resilience", pos: "n.", meaning: "韌性、復原力", collocations: "human resilience 人類的韌性" }
      ],
      grammarNotes: [
        { id: "G1", title: "with + O + V-ing (附帶狀況)", excerpt: "With conditions worsening and the storm threatening to cripple their vessel", analysis: "with + 受詞 + 現在分詞 表示附帶狀況或原因，說明在情況惡化、風暴威脅太空船的情形下，隊友認定他已死亡。" },
        { id: "G2", title: "as if + 假設語氣 (彷彿…)", excerpt: "as if he were talking to a close friend", analysis: "as if 後接與現在事實相反的假設，be 動詞一律用 were，表「彷彿在跟好友說話」（事實上並非如此）。" }
      ],
      patternNotes: [
        { id: "P1", title: "have no choice but to + V (別無選擇只好…)", excerpt: "had no choice but to leave Mars", analysis: "have no choice but to + 原形動詞，表「除了…之外別無選擇」。" },
        { id: "P2", title: "as + adj. + as (和…一樣…)", excerpt: "is almost as extraordinary as the novel itself", analysis: "as + 形容詞原級 + as 表同等比較，almost 修飾，表「幾乎和小說本身一樣不凡」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `The mission was supposed to be straightforward. Six astronauts landed on Mars, conducted their research, and prepared to depart. Then a violent storm arrived without warning. Strong winds swept across the surface and sent sharp ` },
          { type: 'vocab', text: `debris`, vid: 1 },
          { type: 'text', text: ` through the air. One fragment struck Mark Watney and threw him into the chaos of the storm. His crew searched desperately, but their instruments showed no signs of life. ` },
          { type: 'grammar', text: `With conditions worsening and the storm threatening to cripple their vessel`, gid: 'G1' },
          { type: 'text', text: `, his teammates were convinced he had died. They ` },
          { type: 'pattern', text: `had no choice but to leave Mars`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Hours later, Mark woke up in terrible pain. He found himself entirely alone in the silent red wasteland and realized he had been left behind. The communication equipment was broken, and no one on Earth knew he had survived. Worse still, his ` },
          { type: 'vocab', text: `provisions`, vid: 2 },
          { type: 'text', text: ` would sustain him for only approximately 300 days. Rescue seemed impossible because the next planned Mars mission was still four years away.` }
        ],
        [
          { type: 'text', text: `Instead of giving up, Mark resolved to tackle one obstacle at a time. As a trained ` },
          { type: 'vocab', text: `botanist`, vid: 3 },
          { type: 'text', text: `, he transformed the mission's living quarters into a functional greenhouse and planted the few remaining whole potatoes. He collected food scraps and organic waste to use as compost, and then mixed it with Martian and Earth soil so he could grow crops. He also carried out dangerous experiments to generate water for the crops.` }
        ],
        [
          { type: 'text', text: `At the same time, Mark began documenting everything in daily video logs. He spoke to the camera ` },
          { type: 'grammar', text: `as if he were talking to a close friend`, gid: 'G2' },
          { type: 'text', text: `. Even in constant danger, he continued making jokes and fighting to survive. He wouldn't let this red desert become his grave.` }
        ],
        [
          { type: 'text', text: `Back on Earth, while reviewing satellite images of Mars, a NASA analyst noticed that the equipment at the abandoned base had been moved. It was evidence that someone was still alive. The discovery quickly spread, and scientists soon confirmed that the survivor was Mark Watney. Meanwhile, Mark recovered an old probe called Pathfinder and re-established contact with Earth.` }
        ],
        [
          { type: 'text', text: `However, rescue remained a distant prospect, and Mark's situation soon became worse. Repeated use of the airlock caused part of the habitat to tear open. The sudden loss of pressure destroyed his greenhouse and wiped out most of his crops. Although NASA scrambled to launch a supply rocket after the accident, it ` },
          { type: 'vocab', text: `disintegrated`, vid: 4 },
          { type: 'text', text: ` shortly after liftoff. For the second time, survival seemed out of reach for Mark.` }
        ],
        [
          { type: 'text', text: `Then a scientist specializing in orbital mechanics proposed a bold alternative. He calculated a ` },
          { type: 'vocab', text: `trajectory`, vid: 5 },
          { type: 'text', text: ` that would allow Mark's crewmates to swing their ship back toward Mars and rescue him. The plan was dangerous and would force the crew to remain in space far longer than originally scheduled. After learning the truth, the crew voted to return without hesitation, even if it meant openly defying orders from Earth.` }
        ],
        [
          { type: 'text', text: `Mark prepared for one final journey. He modified a rover and drove hundreds of kilometers to reach the meeting point. From there, he launched himself into orbit aboard a stripped-down rocket. The rendezvous became tense when he drifted helplessly through space. Then one teammate tethered himself to the ship and pushed out into open space to reach Mark. Together, they made it safely back aboard. After 549 sols on Mars, Mark Watney was finally rescued, but the journey home had only just begun.` }
        ],
        [
          { type: 'text', text: `The story behind The Martian ` },
          { type: 'pattern', text: `is almost as extraordinary as the novel itself`, pid: 'P2' },
          { type: 'text', text: `. Before becoming a bestselling author, Andy Weir worked as a software engineer who wrote science fiction as a hobby and had a passion for space. The Martian was originally posted on his personal blog, and he subsequently turned the story into an e-book and sold it on Amazon. A publisher soon bought the rights, and Hollywood adapted it into a blockbuster film starring Matt Damon in 2015.` }
        ],
        [
          { type: 'text', text: `One reason the novel remains memorable is its portrayal of human ` },
          { type: 'vocab', text: `resilience`, vid: 6 },
          { type: 'text', text: `. Mark endures repeated disasters, but he refuses to surrender to despair. Each time a crisis strikes, he calmly searches for another solution. His humor proves just as indispensable, as jokes help him survive emotionally. The story also champions scientific thinking. Rather than depending on luck, Mark survives through planning and experimentation. Knowledge, the novel suggests, is the most powerful survival tool of all.` }
        ],
        [
          { type: 'text', text: `Mark's story is also one of human connection. Stranded on Mars, he records daily logs and counts every passing day until contact with Earth is restored. That longing is answered when an entire world unites to save him despite risks and political pressure. Even the Chinese space agency provides NASA with a critical rocket booster during the rescue mission. The story shows that great challenges require collective effort, not individual heroism.` }
        ],
        [
          { type: 'text', text: `Beyond its themes, The Martian succeeds in how it tells the story. Weir weaves scientific details so naturally that even readers without a science background can enjoy the novel. Pick up a copy and let Mark's story remind you that even on the loneliest journey, hope is never out of reach.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "After the typhoon, the streets were covered with ______ from fallen trees.", options: ["A. jewelry", "B. furniture", "C. debris", "D. laughter"], answer: "C", explanation: "【選項解析】\n- (A) jewelry (n.) 珠寶\n- (B) furniture (n.) 家具\n- (C) debris (n.) 碎片、殘骸 (正解)\n- (D) laughter (n.) 笑聲" },
      { id: 2, question: "The hikers packed enough ______ to last them a week in the mountains.", options: ["A. complaints", "B. passports", "C. tickets", "D. provisions"], answer: "D", explanation: "【選項解析】\n- (A) complaints (n.) 抱怨\n- (B) passports (n.) 護照\n- (C) tickets (n.) 票\n- (D) provisions (n.) 糧食補給 (正解)" },
      { id: 3, question: "The old letter was so fragile that it almost ______ when I touched it.", options: ["A. multiplied", "B. disintegrated", "C. expanded", "D. flourished"], answer: "B", explanation: "【選項解析】\n- (A) multiplied (v.) 倍增\n- (B) disintegrated (v.) 碎裂 (正解)\n- (C) expanded (v.) 擴張\n- (D) flourished (v.) 繁盛" },
      { id: 4, question: "Her ______ helped her recover quickly from failure.", options: ["A. resilience", "B. laziness", "C. jealousy", "D. confusion"], answer: "A", explanation: "【選項解析】\n- (A) resilience (n.) 韌性 (正解)\n- (B) laziness (n.) 懶惰\n- (C) jealousy (n.) 嫉妒\n- (D) confusion (n.) 困惑" },
    ],
    cloze: {
      text: "In The Martian, astronaut Mark Watney is left behind on Mars [1] his crew believes he has died. With limited food, he uses his knowledge of plants [2] potatoes inside the base. After contact with Earth is restored, scientists work hard to plan a rescue. Mark faces one disaster after another, [3] he never gives up. In the end, his crewmates return to save him, [4] it means disobeying orders. The novel shows that knowledge and teamwork [5] help people survive even the hardest situations.",
      questions: [
        { id: 1, options: ["A. although", "B. unless", "C. so that", "D. because"], answer: "D", explanation: "because 引導原因子句，說明馬克被留在火星的原因是組員以為他已死亡。" },
        { id: 2, options: ["A. grow", "B. to grow", "C. grown", "D. grew"], answer: "B", explanation: "不定詞 to grow 表目的，「為了」種植馬鈴薯。" },
        { id: 3, options: ["A. so", "B. for", "C. but", "D. or"], answer: "C", explanation: "but 表轉折，接連遭遇災難「但」從不放棄。" },
        { id: 4, options: ["A. even though", "B. so that", "C. because", "D. unless"], answer: "A", explanation: "even though 表讓步「即使」，組員即使要違抗命令仍返回救援。" },
        { id: 5, options: ["A. is", "B. was", "C. has", "D. can"], answer: "D", explanation: "助動詞 can 後接原形動詞 help，表「能夠」幫助人度過難關。" },
      ]
    },
    wordBank: {
      words: ["(A) astronaut", "(B) base", "(C) crew", "(D) crop", "(E) disaster", "(F) humor", "(G) orbit", "(H) rescue", "(I) survival", "(J) novel"],
      passage: "The Martian was first a [1] posted online before it became a film.\n\nThe entire [2] worked together to complete the mission.\n\nAn [3] is trained to travel and work in space.\n\nEach new [4] made his situation even worse.\n\nThe abandoned [5] became Mark's home on Mars.\n\nHis sense of [6] helped him stay positive.\n\nMark planted potatoes as his main [7].\n\nKnowledge, not luck, was the key to his [8].\n\nHe launched a rocket into [9] to meet his crewmates.\n\nNASA began planning a [10] mission to bring him home.",
      answers: { 1: "J", 2: "C", 3: "A", 4: "E", 5: "B", 6: "F", 7: "D", 8: "I", 9: "G", 10: "H" }
    },
    discourse: {
      options: [
        "A. Then a scientist found a way for the crew to turn their ship around and return for him.",
        "B. Using his skills as a botanist, he managed to grow potatoes inside the base.",
        "C. He soon realized that no one on Earth knew he was still alive.",
        "D. Andy Weir first published the story on his personal blog.",
        "E. Mars is the fourth planet from the Sun."
      ],
      paragraphs: [
        "The Martian tells the story of an astronaut who is accidentally left behind on Mars.",
        "After a violent storm, Mark Watney wakes up alone. [1] Instead of giving up, he decides to solve one problem at a time. [2]",
        "Later, an accident destroys his crops, and a supply rocket fails. [3] After a dangerous final journey, Mark is finally rescued.",
        "The story behind the novel is also remarkable. [4] It later became a bestseller and a Hollywood film."
      ],
      answers: { 1: "C", 2: "B", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How NASA builds rockets.", "B. A summary of The Martian and the themes that make it memorable.", "C. The life of Matt Damon.", "D. How to grow potatoes on Mars."], answer: "B", explanation: "主旨題。文章先介紹小說情節，再說明作者背景與小說的主題。" },
        { id: 2, question: "How did NASA learn that Mark was still alive?", options: ["A. Mark sent them an email.", "B. A Chinese scientist called them.", "C. An analyst noticed in satellite images that equipment had been moved.", "D. His crew heard his voice on the radio."], answer: "C", explanation: "細節題。NASA 分析師檢視衛星影像時「noticed that the equipment at the abandoned base had been moved」。" },
        { id: 3, question: "How was The Martian first shared with readers?", options: ["A. It was posted on Andy Weir's personal blog.", "B. It was printed by a major publisher.", "C. It was released as a film.", "D. It was read on the radio."], answer: "A", explanation: "細節題。文中指出「The Martian was originally posted on his personal blog」。" },
        { id: 4, question: "Which statement best reflects the novel's message?", options: ["A. Luck matters more than knowledge.", "B. Heroes should always act alone.", "C. Science is too difficult for ordinary readers.", "D. Knowledge and cooperation can help people overcome great challenges."], answer: "D", explanation: "推論題。文中強調知識是最強大的求生工具，且重大挑戰需要集體努力而非個人英雄主義。" }
      ]
    }
  }
};
if (typeof window !== 'undefined') { window.MAGAZINE_UNITS_DIGEST202510 = MAGAZINE_UNITS_DIGEST202510; }
