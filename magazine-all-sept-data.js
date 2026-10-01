// ALL+互動英語 9月號 — 全部 Unit 皆為原雜誌已完整製作的內容（非 Claude 原創產製），直接轉檔自 all_9.tsx。
const MAGAZINE_UNITS_ALL202509 = {
  "Unit 1": {
    title: "Questions Remain After Pentagon Releases UFO Files",
    chineseTitle: "五角大廈公布幽浮檔案，部分疑點仍待釐清",
    passage: `The Pentagon has released 161 files about unidentified anomalous phenomena (UAPs), commonly known as UFOs. The release is part of a US government effort to share military reports about strange objects seen in the sky with the general public.\n\nThe files include pilot reports, declassified notes, and data from radar and other sensors. In one case, navy pilots spotted a fast-moving object off the US East Coast. It then suddenly changed direction and disappeared from radar. In another, military personnel filmed glowing lights moving in unusual patterns above a training area. Experts say that natural weather effects and everyday objects such as balloons and drones account for most UAP sightings. However, a small number of cases remain unexplained due to limited data.\n\nThe release has been met with mixed reactions. Some people support the government's openness and say it helps reduce rumors. Others argue that the files still leave too many important questions unanswered. The Pentagon says it will continue collecting and studying UAP reports to strengthen flight safety and better understand these mysterious sightings.`,
    chineseTranslation: `五角大廈公布了 161 份關於「不明異常現象」（UAPs，俗稱幽浮）的檔案。此次公開是美國政府致力於向大眾分享天空中出現神祕物體之軍事報告的一部分。\n\n這些檔案包含飛行員報告、解密筆記以及來自雷達與其他感測器的數據。在一個案例中，海軍飛行員在美國東岸外海目擊了一個快速移動的物體。接著它突然改變方向並從雷達上消失。在另一個案例中，軍事人員拍攝到發光體在訓練區上方以不尋常的模式移動。專家表示，自然天氣效應以及如氣球與無人機等日常物體，解釋了大多數的 UAP 目擊事件。然而，少數案件因數據有限仍無法解釋。\n\n此次公布引起了褒貶不一的反應。有些人支持政府的公開透明，並表示這有助於減少謠言。其他人則主張這些檔案仍留下太多未解的關鍵問題。五角大廈表示將持續收集並研究 UAP 報告，以強化飛航安全並更深入了解這些神祕的目擊事件。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "unidentified", pos: "adj.", meaning: "身分不明的、未知的", collocations: "unidentified flying object 不明飛行物" },
        { id: 2, word: "disappeared", pos: "v.", meaning: "消失、失蹤", collocations: "disappear from radar 從雷達上消失" },
        { id: 3, word: "account", pos: "v.", meaning: "解釋、說明（與 for 連用）", collocations: "account for most sightings 解釋了多數目擊事件" },
        { id: 4, word: "rumors", pos: "n.", meaning: "謠言、傳聞", collocations: "reduce rumors 減少謠言" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞作形容詞修飾", excerpt: "strange objects seen in the sky", analysis: "seen 為過去分詞，修飾前面的 objects，表示「被看見的」神祕物體。" }
      ],
      patternNotes: [
        { id: "P1", title: "現在完成式被動語態", excerpt: "The release has been met with mixed reactions.", analysis: "has been + p.p. 表示從過去至今的被動狀態，指「此次公開遭遇了正反兩極的反應」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'The Pentagon has released 161 files about ' },
          { type: 'vocab', text: 'unidentified', vid: 1 },
          { type: 'text', text: ' anomalous phenomena (UAPs), commonly known as UFOs. The release is part of a US government effort to share military reports about ' },
          { type: 'grammar', text: 'strange objects seen in the sky', gid: 'G1' },
          { type: 'text', text: ' with the general public.' }
        ],
        [
          { type: 'text', text: 'The files include pilot reports, declassified notes, and data from radar and other sensors. In one case, navy pilots spotted a fast-moving object off the US East Coast. It then suddenly changed direction and ' },
          { type: 'vocab', text: 'disappeared', vid: 2 },
          { type: 'text', text: ' from radar. In another, military personnel filmed glowing lights moving in unusual patterns above a training area. Experts say that natural weather effects and everyday objects such as balloons and drones ' },
          { type: 'vocab', text: 'account', vid: 3 },
          { type: 'text', text: ' for most UAP sightings. However, a small number of cases remain unexplained due to limited data.' }
        ],
        [
          { type: 'pattern', text: 'The release has been met with mixed reactions.', pid: 'P1' },
          { type: 'text', text: ' Some people support the government\'s openness and say it helps reduce ' },
          { type: 'vocab', text: 'rumors', vid: 4 },
          { type: 'text', text: '. Others argue that the files still leave too many important questions unanswered. The Pentagon says it will continue collecting and studying UAP reports to strengthen flight safety and better understand these mysterious sightings.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The police are trying to trace the owner of the ______ vehicle parked in front of the bank.", options: ["A. unidentified", "B. regional", "C. competitive", "D. emotional"], answer: "A", explanation: "【選項解析】\n- (A) unidentified (adj.) 身分不明的、未知的 (正解)\n- (B) regional (adj.) 地區的、區域的\n- (C) competitive (adj.) 競爭的\n- (D) emotional (adj.) 情感的、情緒化的" },
      { id: 2, question: "After a thick fog rolled in, the distant mountains completely ______ from our view.", options: ["A. disappeared", "B. established", "C. generated", "D. tracked"], answer: "A", explanation: "【選項解析】\n- (A) disappeared (v.) 消失、不見 (正解)\n- (B) established (v.) 建立、設立\n- (C) generated (v.) 產生、生成\n- (D) tracked (v.) 追蹤" },
      { id: 3, question: "Bad weather and heavy traffic combined to ______ for the major delay in product delivery.", options: ["A. account", "B. inspire", "C. exchange", "D. attract"], answer: "A", explanation: "【選項解析】\n- (A) account (v.) 解釋、導致 (與 for 連用) (正解)\n- (B) inspire (v.) 啟發、鼓舞\n- (C) exchange (v.) 交換\n- (D) attract (v.) 吸引" },
      { id: 4, question: "The celebrity issued a public statement to deny the false ______ spreading on social media.", options: ["A. rumors", "B. sensors", "C. flights", "D. records"], answer: "A", explanation: "【選項解析】\n- (A) rumors (n.) 謠言、傳聞 (正解)\n- (B) sensors (n.) 感測器\n- (C) flights (n.) 航班\n- (D) records (n.) 紀錄" }
    ],
    cloze: {
      text: "The US Pentagon recently declassified over 160 files detailing unidentified anomalous phenomena (UAPs). This disclosure represents a significant effort to provide the public [1] transparent military data regarding strange aerial objects. These documents compile observations from navy pilots and advanced radar sensors. In one notable incident, a rapidly moving entity radically shifted its trajectory and vanished without a [2]. While meteorologists emphasize that weather balloons and commercial drones account [3] the vast majority of sightings, a fraction of reports remain genuinely mysterious. The public reaction is predictably [4]. Supporters appreciate the honesty, which effectively minimizes wild rumors. Critics, [5], argue that the release ultimately leaves the most profound questions unanswered.",
      questions: [
        { id: 1, options: ["A. with", "B. for", "C. to", "D. on"], answer: "A", explanation: "provide sb with sth 表示「提供某人某事物」。" },
        { id: 2, options: ["A. trace", "B. flight", "C. effort", "D. trick"], answer: "A", explanation: "vanished without a trace 為固定用法，表「無影無蹤地消失」。" },
        { id: 3, options: ["A. for", "B. in", "C. about", "D. of"], answer: "A", explanation: "account for 表示「解釋、占...比例」。" },
        { id: 4, options: ["A. mixed", "B. pure", "C. single", "D. total"], answer: "A", explanation: "大眾反應「褒貶不一/好壞參半」，選 mixed。" },
        { id: 5, options: ["A. however", "B. therefore", "C. instead", "D. moreover"], answer: "A", explanation: "前後語氣轉折（支持者 vs 批評者），使用 however（然而）。" }
      ]
    },
    wordBank: {
      words: ["(A) openness", "(B) disappeared", "(C) account", "(D) objects", "(E) mysterious", "(F) strengthen", "(G) radar", "(H) unanswered", "(I) release", "(J) spotted"],
      passage: "The US government recently made headlines with the [1] of classified documents regarding UAPs. These files document unexplained [2] navigating the skies. In several instances, military aviators [3] crafts demonstrating impossible physics before they swiftly [4] from advanced [5] screens. Analysts believe that natural phenomena and modern drones [6] for most of these occurrences. Despite this, a handful of [7] cases continue to baffle experts. The government's new [8] aims to dispel conspiracy theories while attempting to [9] national aviation safety. Still, skeptics complain that the data leaves essential questions completely [10].",
      answers: { 1: "I", 2: "D", 3: "J", 4: "B", 5: "G", 6: "C", 7: "E", 8: "A", 9: "F", 10: "H" }
    },
    discourse: {
      options: [
        "A. Conversely, skeptics argue that releasing partial data merely raises more questions than it answers.",
        "B. They immediately launched military strikes against all foreign civilian aircraft.",
        "C. These declassified documents compile evidence from highly trained pilots and advanced tracking sensors.",
        "D. The US Pentagon has taken an unprecedented step by releasing dozens of files related to UFOs.",
        "E. While most encounters have logical explanations, a small percentage defy current scientific understanding."
      ],
      paragraphs: [
        "The mysterious nature of unidentified flying objects has fascinated the public for decades. In a shift toward transparency, the US military has officially published numerous reports detailing these aerial anomalies.",
        "[1] In one compelling encounter, navy aviators tracked a fast-moving object that executed maneuvers seemingly impossible for modern technology before vanishing completely.",
        "[2] Experts routinely point out that weather balloons, atmospheric illusions, and commercial drones are responsible for the vast majority of these sightings.",
        "Public response to this disclosure has been decidedly mixed. Supporters praise the transparency for combating internet rumors. [3] Regardless, the Pentagon pledges to continue analyzing these events to ensure future aviation safety. [4]"
      ],
      answers: { 1: "C", 2: "E", 3: "A", 4: "D" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the primary purpose of the Pentagon's release of the UAP files?", options: ["A. To declare war on alien civilizations", "B. To share military reports about strange aerial objects with the general public", "C. To sell advanced radar technology to civilian airlines", "D. To recruit more navy pilots for outer space missions"], answer: "B", explanation: "文章首段指明，發布檔案是政府致力於與大眾分享天空中神祕物體之軍事報告的一部分。" },
        { id: 2, question: "According to experts, what accounts for the vast majority of UAP sightings?", options: ["A. Secret time-travel machines", "B. Extraterrestrial spacecraft from other galaxies", "C. Natural weather effects and everyday objects like balloons and drones", "D. Errors in military computer coding"], answer: "C", explanation: "第二段明確提到專家表示自然天氣效應以及氣球、無人機等日常物體解釋了多數目擊事件。" },
        { id: 3, question: "How did some critics react to the release of the UAP files?", options: ["A. They argued that the files still leave too many important questions unanswered", "B. They praised the government for solving every single UFO mystery", "C. They demanded that all military personnel be fired immediately", "D. They claimed the documents were completely blank"], answer: "A", explanation: "第三段提到其他人（反對者）主張這些檔案仍留下太多未解的關鍵問題。" },
        { id: 4, question: "What is one specific incident described in the declassified files?", options: ["A. A UFO landing on the roof of the White House", "B. Navy pilots spotting a fast-moving object off the US East Coast that suddenly changed direction", "C. An alien creature stealing a weather balloon", "D. A drone crashing into a commercial airplane"], answer: "B", explanation: "第二段描述了海軍飛行員在美國東岸外海目擊快速移動物體並突然改變方向從雷達消失的案例。" }
      ]
    }
  },

  "Unit 2": {
    title: "The Secret Lives of Plants",
    chineseTitle: "植物的祕密生活",
    passage: `Day 1\nPlants may seem simple and predictable, yet their lives are far more complex than they appear. From hidden communication systems to clever survival strategies, the plant world is full of surprising details that challenge conventional ideas about what plants can do. Here are six fascinating examples of just how inventive plants can be.\n\nPlants That Generate Heat\nSome plants produce heat through thermogenesis. The sacred lotus and skunk cabbage use this warmth to spread their scents and attract pollinators. In colder regions, it can even melt surrounding snow, giving them an early seasonal advantage.\n\nPlants That Warn Each Other\nWhen attacked by insects, some plants release airborne chemical signals that nearby plants detect, which prompts them to strengthen their own defenses. Observed in species like tobacco and lima bean, this system allows entire groups of plants to respond to threats faster than they could individually.\n\nThe Forest's Underground Network\nBeneath the forest floor, tree roots are linked by fungal networks that allow trees to exchange nutrients and information. Ecologist Suzanne Simard found that Douglas fir and paper birch use these connections to support younger, shaded neighbors. This suggests that cooperation, not just competition, plays a part in forest survival.\n\nDay 2\nWhy Cacti "Breathe" at Night\nIn harsh desert environments, conserving water is essential. Unlike most plants, cacti open their stomata—the tiny pores through which they exchange gases—at night rather than during the day. By absorbing carbon dioxide when temperatures are cooler, they dramatically reduce water loss that scorching daytime heat would otherwise cause. It's a simple but very effective way to adapt to extreme heat.\n\nWhy Trees Can Only Grow So Tall\nTrees cannot grow endlessly upward. Their heights are limited by their ability to transport water from roots to leaves—a process driven by evaporation and internal pressure. The taller a tree grows, the harder it becomes for water to reach its highest branches. That is why even the coastal redwood rarely exceeds 130 meters. Even the mightiest trees must follow the laws of physics.\n\nWhy Sunflowers Stop Following the Sun\nYoung sunflowers track the sun through a behavior called heliotropism. But once mature, the common sunflower settles into a fixed eastward-facing position. This allows it to warm up quickly each morning, which attracts more pollinators early in the day. Sometimes, stillness is the smarter strategy.`,
    chineseTranslation: `【第 1 天】\n植物看似簡單且可預測，然而牠們的生活遠比表面上看起來複雜得多。從隱蔽的通訊系統到聰明的生存策略，植物世界充滿了令人驚奇的細節，挑戰了我們對植物能力的傳統觀念。以下是六個展示植物有多麼具創造力的迷人例子。\n\n會發熱的植物\n有些植物透過產熱作用產生熱量。神聖的蓮花與臭菘利用這種熱度散播氣味並吸引授粉者。在較寒冷的地區，這甚至能融化周圍的雪，賦予牠們早季的優勢。\n\n會互相警告的植物\n當受到昆蟲攻擊時，有些植物會釋放空氣傳播的化學訊號供周遭植物偵測，這促使牠們強化自身的防禦。這種在菸草與皇帝豆等物種中觀察到的系統，讓整個植物群體能比單獨個體更快速地應對威脅。\n\n森林的地下網路\n在森林地表下，樹根被真菌網路連結，允許樹木交換養分與資訊。生態學家發現花旗松與紙樺利用這些連結來支援較年輕、處於陰影下的鄰居。這表明「合作」而不僅僅是「競爭」，在森林生存中扮演了重要角色。\n\n【第 2 天】\n為什麼仙人掌在夜間「呼吸」\n在嚴酷的沙漠環境中，保存水分至關重要。與多數植物不同，仙人掌在夜間而非白天打開氣孔（牠們交換氣體的微小孔洞）。透過在氣溫較涼爽時吸收二氧化碳，牠們大幅減少了炎熱白天本會造成的流失。這是適應極端高溫簡單卻極有效的方法。\n\n為什麼樹木無法無限長高\n樹木無法無止盡地向上生長。牠們的高度受限於將水分從根部輸送到葉片的能力——這個過程由蒸散作用與內部壓力驅動。樹長得越高，水分就越難抵達最高的樹枝。這就是為什麼即便是海岸紅木也很少超過 130 公尺。即使是最宏偉的樹木也必須遵守物理定律。\n\n為什麼向日葵不再追隨太陽\n年輕的向日葵透過向光性追蹤太陽。但一旦成熟，普通的向日葵就會固定在朝東的位置。這讓牠每天早晨能快速暖身，從而在清晨吸引更多授粉者。有時候，靜止反而是更聰明的策略。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "generate", pos: "v.", meaning: "產生、生成", collocations: "generate heat 產生熱能" },
        { id: 2, word: "detect", pos: "v.", meaning: "偵測、察覺", collocations: "detect chemical signals 偵測化學訊號" },
        { id: 3, word: "conserving", pos: "v.", meaning: "保存、節約", collocations: "conserving water 節約水分" },
        { id: 4, word: "exceeds", pos: "v.", meaning: "超過、超越", collocations: "rarely exceeds 130 meters 鮮少超過 130 公尺" }
      ],
      grammarNotes: [
        { id: "G1", title: "which 引導非限定關係子句", excerpt: "which prompts them to strengthen their own defenses", analysis: "which 關係代名詞代指前面「植物釋放化學訊號」整件事，作 prompts 的主詞。" },
        { id: "G2", title: "rather than 的用法", excerpt: "at night rather than during the day", analysis: "rather than 表示「而不是」，用來連接前後對等的介系詞片語，強調夜間而非白天。" }
      ],
      patternNotes: [
        { id: "P1", title: "The + 比較級..., the + 比較級... (越...就越...)", excerpt: "The taller a tree grows, the harder it becomes...", analysis: "大考必考句型，表示兩件事物成正比發展：「樹長得越高，水分輸送就越困難」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'Plants may seem simple and predictable, yet their lives are far more complex than they appear. From hidden communication systems to clever survival strategies, the plant world is full of surprising details that challenge conventional ideas about what plants can do. Here are six fascinating examples of just how inventive plants can be.' }
        ],
        [
          { type: 'text', text: 'Plants That ' },
          { type: 'vocab', text: 'Generate', vid: 1 },
          { type: 'text', text: ' Heat\nSome plants produce heat through thermogenesis. The sacred lotus and skunk cabbage use this warmth to spread their scents and attract pollinators. In colder regions, it can even melt surrounding snow, giving them an early seasonal advantage.' }
        ],
        [
          { type: 'text', text: 'Plants That Warn Each Other\nWhen attacked by insects, some plants release airborne chemical signals that nearby plants ' },
          { type: 'vocab', text: 'detect', vid: 2 },
          { type: 'text', text: ', ' },
          { type: 'grammar', text: 'which prompts them to strengthen their own defenses', gid: 'G1' },
          { type: 'text', text: '. Observed in species like tobacco and lima bean, this system allows entire groups of plants to respond to threats faster than they could individually.' }
        ],
        [
          { type: 'text', text: 'The Forest\'s Underground Network\nBeneath the forest floor, tree roots are linked by fungal networks that allow trees to exchange nutrients and information. Ecologist Suzanne Simard found that Douglas fir and paper birch use these connections to support younger, shaded neighbors. This suggests that cooperation, not just competition, plays a part in forest survival.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Why Cacti "Breathe" at Night\nIn harsh desert environments, ' },
          { type: 'vocab', text: 'conserving', vid: 3 },
          { type: 'text', text: ' water is essential. Unlike most plants, cacti open their stomata—the tiny pores through which they exchange gases—' },
          { type: 'grammar', text: 'at night rather than during the day', gid: 'G2' },
          { type: 'text', text: '. By absorbing carbon dioxide when temperatures are cooler, they dramatically reduce water loss that scorching daytime heat would otherwise cause. It\'s a simple but very effective way to adapt to extreme heat.' }
        ],
        [
          { type: 'text', text: 'Why Trees Can Only Grow So Tall\nTrees cannot grow endlessly upward. Their heights are limited by their ability to transport water from roots to leaves—a process driven by evaporation and internal pressure. ' },
          { type: 'pattern', text: 'The taller a tree grows, the harder it becomes', pid: 'P1' },
          { type: 'text', text: ' for water to reach its highest branches. That is why even the coastal redwood rarely ' },
          { type: 'vocab', text: 'exceeds', vid: 4 },
          { type: 'text', text: ' 130 meters. Even the mightiest trees must follow the laws of physics.' }
        ],
        [
          { type: 'text', text: 'Why Sunflowers Stop Following the Sun\nYoung sunflowers track the sun through a behavior called heliotropism. But once mature, the common sunflower settles into a fixed eastward-facing position. This allows it to warm up quickly each morning, which attracts more pollinators early in the day. Sometimes, stillness is the smarter strategy.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Wind turbines are highly effective devices designed to ______ clean electrical energy.", options: ["A. exceed", "B. generate", "C. prompt", "D. melt"], answer: "B", explanation: "【選項解析】\n- (B) generate (v.) 產生、生成 (正解)\n- (A) exceed (v.) 超越、超過\n- (C) prompt (v.) 促使、引起\n- (D) melt (v.) 融化" },
      { id: 2, question: "Advanced security systems can easily ______ unauthorized intrusions immediately.", options: ["A. conserve", "B. detect", "C. transport", "D. attract"], answer: "B", explanation: "【選項解析】\n- (B) detect (v.) 偵測、察覺 (正解)\n- (A) conserve (v.) 保存、節約\n- (C) transport (v.) 運輸\n- (D) attract (v.) 吸引" },
      { id: 3, question: "During severe droughts, local governments emphasize ______ fresh water resources.", options: ["A. conserving", "B. releasing", "C. settling", "D. exceeding"], answer: "A", explanation: "【選項解析】\n- (A) conserving (v.) 節約、保存 (正解)\n- (B) releasing (v.) 釋放\n- (C) settling (v.) 安頓\n- (D) exceeding (v.) 超越" },
      { id: 4, question: "The highway speed limit is strictly enforced, and no vehicle should ______ 110 km/h.", options: ["A. exceed", "B. prompt", "C. absorb", "D. track"], answer: "A", explanation: "【選項解析】\n- (A) exceed (v.) 超過、超越 (正解)\n- (B) prompt (v.) 促使\n- (C) absorb (v.) 吸收\n- (D) track (v.) 追蹤" }
    ],
    cloze: {
      text: "The botanical world possesses survival mechanisms far more intricate than most presume. For instance, specific flora can organically generate heat [1] snow and disperse attractive scents to pollinators. Additionally, species like tobacco exhibit defensive solidarity. Upon suffering insect damage, they release airborne chemicals [2] warn neighboring vegetation. Below ground, immense fungal networks interlink forest roots. Far from pure competition, older trees utilize this web [3] vital nutrients to shaded saplings. Furthermore, desert cacti demonstrate physiological brilliance by opening their stomata exclusively at night [4] extreme water evaporation. Finally, physical laws dictate natural limits; [5] a tree climbs, the more monumental the challenge of pumping water against gravity.",
      questions: [
        { id: 1, options: ["A. melting", "B. to melt", "C. melted", "D. melts"], answer: "B", explanation: "不定詞 to melt 表「為了融化雪」的目的。" },
        { id: 2, options: ["A. what", "B. who", "C. which", "D. where"], answer: "C", explanation: "關係代名詞 which 代替前方的 chemicals，作為 warn 的主詞。" },
        { id: 3, options: ["A. transferring", "B. to transfer", "C. transferred", "D. transfer"], answer: "B", explanation: "utilize sth to V. 表「利用某物來做某事」。" },
        { id: 4, options: ["A. to prevent", "B. preventing", "C. prevented", "D. prevents"], answer: "A", explanation: "不定詞 to prevent 表目的「為了防止水分極端蒸發」。" },
        { id: 5, options: ["A. The higher", "B. Highly", "C. As high as", "D. High"], answer: "A", explanation: "The + 比較級..., the + 比較級... 句型，表「樹長得越高，挑戰就越大」。" }
      ]
    },
    wordBank: {
      words: ["(A) mature", "(B) detect", "(C) conserve", "(D) strategies", "(E) absorb", "(F) exceed", "(G) complex", "(H) transport", "(I) release", "(J) cooperate"],
      passage: "The quiet exterior of plant life disguises remarkably [1] biological systems. To ensure survival, plants utilize creative [2]. When facing predators, certain species [3] distress chemicals that nearby companions [4] to trigger immune responses. Forests operate similarly; deep root networks allow trees to [5] and share vital resources, protecting the vulnerable. In arid regions, cacti [6] their internal water by opening pores only during cool nights to [7] carbon dioxide. Meanwhile, towering redwoods rarely [8] maximum vertical limits because gravity severely restricts their ability to [9] fluids upward. Finally, [10] sunflowers intelligently fix their gaze eastward to harvest morning warmth, proving nature's profound adaptability.",
      answers: { 1: "G", 2: "D", 3: "I", 4: "B", 5: "J", 6: "C", 7: "E", 8: "F", 9: "H", 10: "A" }
    },
    discourse: {
      options: [
        "A. By engaging in this internal heating process, they secure an early seasonal advantage.",
        "B. They aggressively uproot smaller plants to steal groundwater during summer droughts.",
        "C. Plants are fundamentally perceived as stationary organisms, yet they possess astonishingly dynamic survival mechanisms.",
        "D. This sophisticated chemical communication grants the entire grove crucial preparation time.",
        "E. The physical exertion required to pull water upward against gravity eventually overcomes the tree's growth."
      ],
      paragraphs: [
        "Most people consider botany a serene, uneventful science. [1] Modern ecological research consistently reveals that flora exhibit cooperative, communicative, and highly adaptive behaviors.",
        "Some plant species demonstrate active self-defense through airborne warning systems. When chewing insects attack a leaf, the damaged plant emits specific aromatic compounds. [2]",
        "Furthermore, unique species like the skunk cabbage generate literal warmth to melt surrounding ice and spread their aroma. [3]",
        "Lastly, towering giants face unavoidable physical limitations. Even the mighty redwood stops growing near 130 meters. [4] Nature proves that boundless growth must inevitably respect the laws of physics."
      ],
      answers: { 1: "C", 2: "D", 3: "A", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "How does the skunk cabbage utilize thermogenesis in colder climates?", options: ["A. To permanently freeze predatory insects", "B. To generate warmth that melts snow and spreads scents to attract pollinators", "C. To cook its own seeds before dropping them", "D. To signal to human farmers that it needs water"], answer: "B", explanation: "細節題。Day 1 提到臭菘利用產熱融化雪並散播氣味吸引授粉者。" },
        { id: 2, question: "Why do cacti choose to open their stomata during the nighttime?", options: ["A. Because moonlight is required for photosynthesis", "B. To absorb carbon dioxide when it is cooler, dramatically reducing water loss", "C. To release toxic gases that repel nocturnal desert bats", "D. Because daytime sunlight physically glues the pores shut"], answer: "B", explanation: "細節題。Day 2 指出仙人掌夜間氣溫較低時打開氣孔吸收二氧化碳，可大幅減少水分流失。" },
        { id: 3, question: "What physical constraint prevents coastal redwoods from growing infinitely tall?", options: ["A. The inability to transport water from the roots to the highest branches against gravity", "B. The lack of oxygen in the upper atmosphere", "C. Fungal networks deliberately strangling the highest roots", "D. The heavy weight of mature sunflowers resting on their branches"], answer: "A", explanation: "細節題。樹木長高受限於將水分從根部輸送到最高樹枝的能力（受物理定律限制）。" },
        { id: 4, question: "What is the strategic advantage of mature sunflowers fixing their position facing eastward?", options: ["A. It hides them from westward-blowing sandstorms", "B. It allows them to warm up quickly in the morning, attracting early pollinators", "C. It prevents their seeds from falling into the ocean", "D. It confuses herbivorous insects looking for green leaves"], answer: "B", explanation: "細節題。成熟向日葵朝東可讓牠們在清晨快速暖身，從而吸引更多授粉者。" }
      ]
    }
  },

  "Unit 3": {
    title: "Why Italians Take Food So Seriously",
    chineseTitle: "為什麼義大利人對食物這麼講究？",
    passage: `In Italy, food is about more than just flavor. It's a matter of culture, family traditions, and regional pride. As a result, Italians sometimes react strongly when people in other countries change classic Italian dishes. A recipe that seems completely fine in Taiwan or the US might seem totally wrong in Italy.\n\nPasta dishes typically stir up the biggest disagreements. Around the world, people often eat "spaghetti Bolognese," but in Bologna, the famous meat sauce is usually served with tagliatelle, not spaghetti. Carbonara sparks similar debates. The traditional recipe from Rome contains only guanciale, egg yolk, pecorino cheese, and black pepper. So for Italians, adding cream is not considered a variation; it's considered a mistake.\n\nPizza can also lead to strong opinions. Hawaiian pizza, with pineapple on top, surprises many Italians because they usually prefer classic combinations. Coffee has unwritten rules as well. In Italy, ordering a cappuccino after dinner is often seen as a clear sign that someone is a tourist.\n\nUltimately, these reactions are not simply about personal taste. For many Italians, traditional recipes carry the stories and craftsmanship of generations—and that, most would agree, deserves to be taken seriously.`,
    chineseTranslation: `在義大利，食物不僅僅關乎風味。它是文化、家庭傳統與地區自豪感的問題。因此，當其他國家的人改變經典義式料理時，義大利人有時會有強烈的反應。在台灣或美國看似完全沒問題的食譜，在義大利可能會被認為是大錯特錯。\n\n義大利麵料理通常會引發最大的分歧。在世界各地，人們常吃「番茄肉醬義大利細麵（spaghetti Bolognese）」，但在波隆那，著名的肉醬通常是搭配寬扁麵（tagliatelle），而非細麵（spaghetti）。培根蛋麵（Carbonara）也引發了類似的爭論。來自羅馬的傳統食譜僅包含風乾豬頰肉、蛋黃、佩科里諾羊奶起司和黑胡椒。所以對義大利人來說，加入鮮奶油不被認為是一種變化；它被認為是一個錯誤。\n\n披薩也可能引發強烈的意見。上面放著鳳梨的夏威夷披薩令許多義大利人感到驚訝，因為他們通常偏好經典的組合。咖啡也有不成文的規定。在義大利，晚餐後點卡布奇諾通常被視為某人是觀光客的明顯標誌。\n\n歸根究柢，這些反應不單純只是個人口味的問題。對許多義大利人而言，傳統食譜承載了世世代代的故事與工藝——而多數人都會同意，這值得被嚴肅對待。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "regional", pos: "adj.", meaning: "地區的、區域的", collocations: "regional pride 地區自豪感" },
        { id: 2, word: "variation", pos: "n.", meaning: "變化、變體", collocations: "considered a variation 被視為一種變化" },
        { id: 3, word: "combinations", pos: "n.", meaning: "組合、搭配", collocations: "classic combinations 經典組合" },
        { id: 4, word: "craftsmanship", pos: "n.", meaning: "工藝、手藝", collocations: "stories and craftsmanship 故事與工藝" }
      ],
      grammarNotes: [
        { id: "G1", title: "that 關係代名詞作主詞", excerpt: "A recipe that seems completely fine", analysis: "that 引導形容詞子句修飾 a recipe，並在子句中作 seems 的主詞。" }
      ],
      patternNotes: [
        { id: "P1", title: "is considered + N. (被認為是...)", excerpt: "it's considered a mistake", analysis: "consider 為授與動詞，被動語態後直接保留受詞補語 a mistake。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'In Italy, food is about more than just flavor. It\'s a matter of culture, family traditions, and ' },
          { type: 'vocab', text: 'regional', vid: 1 },
          { type: 'text', text: ' pride. As a result, Italians sometimes react strongly when people in other countries change classic Italian dishes. ' },
          { type: 'grammar', text: 'A recipe that seems completely fine', gid: 'G1' },
          { type: 'text', text: ' in Taiwan or the US might seem totally wrong in Italy.' }
        ],
        [
          { type: 'text', text: 'Pasta dishes typically stir up the biggest disagreements. Around the world, people often eat "spaghetti Bolognese," but in Bologna, the famous meat sauce is usually served with tagliatelle, not spaghetti. Carbonara sparks similar debates. The traditional recipe from Rome contains only guanciale, egg yolk, pecorino cheese, and black pepper. So for Italians, adding cream is not considered a ' },
          { type: 'vocab', text: 'variation', vid: 2 },
          { type: 'text', text: '; ' },
          { type: 'pattern', text: 'it\'s considered a mistake', pid: 'P1' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'Pizza can also lead to strong opinions. Hawaiian pizza, with pineapple on top, surprises many Italians because they usually prefer classic ' },
          { type: 'vocab', text: 'combinations', vid: 3 },
          { type: 'text', text: '. Coffee has unwritten rules as well. In Italy, ordering a cappuccino after dinner is often seen as a clear sign that someone is a tourist.' }
        ],
        [
          { type: 'text', text: 'Ultimately, these reactions are not simply about personal taste. For many Italians, traditional recipes carry the stories and ' },
          { type: 'vocab', text: 'craftsmanship', vid: 4 },
          { type: 'text', text: ' of generations—and that, most would agree, deserves to be taken seriously.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The chef took great pride in mastering the specific ______ cuisines of southern Italy.", options: ["A. regional", "B. medical", "C. competitive", "D. emotional"], answer: "A", explanation: "【選項解析】\n- (A) regional (adj.) 地區的、區域的 (正解)\n- (B) medical (adj.) 醫療的\n- (C) competitive (adj.) 競爭的\n- (D) emotional (adj.) 情感的" },
      { id: 2, question: "Adding spicy chili to the classic mild soup was an interesting ______ on the original recipe.", options: ["A. combination", "B. variation", "C. operation", "D. reservation"], answer: "B", explanation: "【選項解析】\n- (B) variation (n.) 變化、變體 (正解)\n- (A) combination (n.) 結合、組合\n- (C) operation (n.) 操作、手術\n- (D) reservation (n.) 預訂、保留" },
      { id: 3, question: "The new café offers bizarre flavor ______ like strawberry and garlic on their pizzas.", options: ["A. generations", "B. combinations", "C. institutions", "D. destinations"], answer: "B", explanation: "【選項解析】\n- (B) combinations (n.) 組合、搭配 (正解)\n- (A) generations (n.) 世代\n- (C) institutions (n.) 機構\n- (D) destinations (n.) 目的地" },
      { id: 4, question: "This handmade wooden table displays exceptional ______ that machines simply cannot replicate.", options: ["A. craftsmanship", "B. ownership", "C. leadership", "D. partnership"], answer: "A", explanation: "【選項解析】\n- (A) craftsmanship (n.) 手藝、工藝 (正解)\n- (B) ownership (n.) 所有權\n- (C) leadership (n.) 領導力\n- (D) partnership (n.) 合夥關係" }
    ],
    cloze: {
      text: "Italian culinary philosophy extends far beyond mere physical nourishment; it embodies deep historical and regional pride. Consequently, foreign modifications to traditional recipes [1] intense cultural friction. Pasta serves as a primary battlefield. For instance, authentic Roman Carbonara strictly relies on egg yolks and pecorino cheese. [2], pouring heavy cream into the pan is condemned not as a creative twist, but as a culinary crime. Pizza toppings also generate controversy, [3] Hawaiian pineapple pizzas clashing against classic purist aesthetics. Even coffee etiquette operates under rigid social codes—consuming a milky cappuccino post-dinner immediately [4] the drinker as a foreign tourist. Ultimately, adhering to classic formulas preserves ancestral [5] rather than merely satisfying personal taste buds.",
      questions: [
        { id: 1, options: ["A. frequently spark", "B. has sparked", "C. sparking", "D. to spark"], answer: "A", explanation: "主詞 modifications 為複數，需接複數動詞，故選 frequently spark。" },
        { id: 2, options: ["A. Therefore", "B. However", "C. Otherwise", "D. Instead"], answer: "A", explanation: "前後語氣為因果關係（傳統嚴格，因此加鮮奶油被視為犯罪），選 Therefore。" },
        { id: 3, options: ["A. with", "B. by", "C. for", "D. from"], answer: "A", explanation: "with + O + V-ing 獨立分詞結構表附帶狀態。" },
        { id: 4, options: ["A. identifies", "B. identifies with", "C. identity", "D. identical"], answer: "A", explanation: "identify sb as... 將某人辨識/認定為...。" },
        { id: 5, options: ["A. craftsmanship", "B. combinations", "C. variations", "D. disagreements"], answer: "A", explanation: "保存祖先的「工藝（craftsmanship）」。" }
      ]
    },
    wordBank: {
      words: ["(A) traditional", "(B) seriously", "(C) variation", "(D) tourists", "(E) flavor", "(F) ingredients", "(G) proud", "(H) unwritten", "(I) strictly", "(J) mistake"],
      passage: "Italian gastronomy is not just about achieving good [1]; it serves as a robust pillar of national identity. Citizens are fiercely [2] of their regional specialties. Thus, substituting core [3] often sparks fierce global debate. Authentic Carbonara, for example, [4] requires egg yolk and cured pork cheek. Adding cream is rejected outright as a culinary [5], not celebrated as an innovative [6]. Similarly, placing sweet pineapple onto a pizza completely defies [7] Italian sensibilities. Beverage consumption also follows [8] social rules; ordering a cappuccino after a heavy evening meal immediately exposes diners as foreign [9]. Fundamentally, these rigid boundaries ensure that ancestral culinary arts are taken [10] by future generations.",
      answers: { 1: "E", 2: "G", 3: "F", 4: "I", 5: "J", 6: "C", 7: "A", 8: "H", 9: "D", 10: "B" }
    },
    discourse: {
      options: [
        "A. Altering these historic formulas is frequently interpreted as an insult rather than innovation.",
        "B. They immediately declared pizza illegal and banned it from all public restaurants.",
        "C. Italian cuisine is deeply woven into the fabric of regional heritage and generational pride.",
        "D. An equally strict set of unwritten rules dictates daily coffee consumption habits.",
        "E. The globally ubiquitous 'spaghetti Bolognese' is a prime example of culinary distortion."
      ],
      paragraphs: [
        "Food in Italy transcends the basic human need for sustenance. [1] Consequently, Italians fiercely guard the authenticity of their classic dishes against foreign misinterpretation.",
        "[2] While the world enthusiastically mixes rich meat sauce with thin spaghetti, true Bologna residents mandate broader tagliatelle ribbons. Likewise, authentic Roman Carbonara strictly outlaws the inclusion of dairy cream.",
        "Beverage etiquette is monitored with similar cultural vigilance. [3] Ordering a milk-heavy cappuccino following a hearty dinner instantly flags the consumer as an uninitiated tourist.",
        "These passionate reactions stem from a profound respect for historical continuity. [4] Adhering to authentic recipes honors the meticulous craftsmanship of Italian ancestors."
      ],
      answers: { 1: "C", 2: "E", 3: "D", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "Why do Italians frequently object to foreign modifications of classic dishes?", options: ["A. Because the imported ingredients are inherently poisonous", "B. Because food represents deep cultural, regional, and generational pride", "C. Because foreign chefs always overcook the pasta", "D. Because Italian law fines citizens for eating modified foods"], answer: "B", explanation: "第一段指出，食物關乎文化、家庭傳統與地區自豪感，因此他們對食譜被改動反應強烈。" },
        { id: 2, question: "According to authentic Bologna tradition, what type of pasta should accompany their famous meat sauce?", options: ["A. Spaghetti", "B. Tagliatelle", "C. Macaroni", "D. Penne"], answer: "B", explanation: "第二段指出在波隆那，著名的肉醬通常搭配寬扁麵（tagliatelle），而非細麵（spaghetti）。" },
        { id: 3, question: "In Italy, what is the social implication of ordering a cappuccino after dinner?", options: ["A. It marks the drinker as a high-society noble", "B. It is a clear sign that the person is a foreign tourist", "C. It signifies that the diner refuses to pay the bill", "D. It means the restaurant has run out of espresso"], answer: "B", explanation: "第三段提到晚餐後點卡布奇諾通常被視為觀光客的明顯標誌。" },
        { id: 4, question: "How do traditional Italians view the addition of cream to a Carbonara recipe?", options: ["A. As a creative modern variation", "B. As an unforgivable culinary mistake", "C. As an expensive luxury upgrade", "D. As a mandatory health requirement"], answer: "B", explanation: "第二段末指出對義大利人來說，加鮮奶油不被認為是變化，而是個錯誤（mistake）。" }
      ]
    }
  },

  "Unit 4": {
    title: "When Dreams Led to Scientific Breakthroughs",
    chineseTitle: "當夢境引領科學突破",
    passage: `Day 1\nLaboratories are the workshops of science. However, some of the most important scientific breakthroughs didn't occur in labs, but in the quiet, unpredictable world of dreams. For centuries, scientists have reported moments when solutions appeared through images and patterns formed during sleep rather than through careful calculations. While this may sound mysterious, modern neuroscience suggests that the brain continues to process information and make connections even when we're not consciously thinking.\n\nOne of the most famous examples involves Dmitri Mendeleev. On March 1, 1869, after struggling to organize the chemical elements in a logical, systematic way, he reportedly fell asleep at his desk and saw, in a dream, "a table where all the elements fell into place as required." Upon waking, he immediately wrote it down—and what he had envisioned was what we now recognize as the periodic table.\n\nRemarkably, a similar discovery had occurred just a few years before. August Kekulé had long endeavored unsuccessfully to determine the structure of benzene. Then one night, he dreamed of a snake biting its own tail and forming a ring. This striking vision led him to propose a circular molecular structure—a landmark breakthrough in organic chemistry.\n\nDay 2\nOf course, dream-inspired insights have not been limited to 19th-century chemists; later thinkers have also experienced them. The mathematician Srinivasa Ramanujan often claimed that mathematical formulas appeared to him in dreams. He believed these insights came from a Hindu goddess named Namagiri. His findings still required careful proof, but many of the equations he dreamed up later proved highly important in modern mathematics.\n\nSimilarly, the physicist Niels Bohr is said to have dreamed of electrons orbiting the nucleus like planets around the sun. This vivid image inspired his model of the atom, making an abstract concept far easier to visualize and understand. Bohr would go on to win the Nobel Prize in Physics, in large part for these groundbreaking contributions to our understanding of atomic structure.\n\nToday, scientists believe dreams may help speed such discoveries by strengthening memory and forging unexpected links. When the mind is relaxed, it becomes freer to explore possibilities without the limits of logic or doubt. In other words, creativity doesn't always come simply from working harder. Sometimes, letting the mind wander, even in sleep, can allow surprising new solutions to surface.`,
    chineseTranslation: `【第 1 天】\n實驗室是科學的工作坊。然而，一些最重要的科學突破並非發生在實驗室裡，而是發生在安靜、不可預測的夢境世界中。幾個世紀以來，科學家們曾報告過許多時刻，解決方案是透過睡眠期間形成的圖像與模式，而非透過仔細計算出現的。雖然這聽起來有些神祕，但現代神經科學指出，大腦即使在我們沒有意識思考時，仍會持續處理資訊並建立連結。\n\n最著名的例子之一涉及德米特里·門得列夫。在 1869 年 3 月 1 日，在努力以合乎邏輯、系統化的方式組織化學元素後，據說他在書桌前睡著了，並在夢中看見「一張所有元素都各就各位的表格」。醒來後，他立刻將其寫下——而他所想像的，正是我們現在所熟知的元素週期表。\n\n值得注意的是，幾年前也發生過類似的發現。奧古斯特·凱庫勒長期以來一直試圖確定苯的結構，卻徒勞無功。後來有一天晚上，他夢見一條蛇咬住自己的尾巴形成一個圓環。這個驚人的幻象引導他提出環狀分子結構——這是有機化學領域具備里程碑意義的突破。\n\n【第 2 天】\n當然，受夢境啟發的洞見並不侷限於 19 世紀的化學家；後來的思想家也經歷過。數學家斯里尼瓦瑟·拉馬努金經常聲稱數學公式是在夢中向他顯現的。他相信這些洞見來自一位名叫娜瑪吉莉的印度教女神。他的發現仍需要仔細的證明，但他夢見的許多方程式後來被證明在現代數學中非常重要。\n\n同樣地，物理學家尼爾斯·波耳據說曾夢見電子像行星繞行太陽般繞著原子核運轉。這個生動的畫面啟發了他的原子模型，讓一個抽象的概念變得更容易視覺化與理解。波耳後來贏得了諾貝爾物理學獎，這在很大程度上歸功於這些對我們理解原子結構的開創性貢獻。\n\n如今，科學家相信夢境可以透過強化記憶與鍛造意想不到的連結來幫助加速此類發現。當心智放鬆時，它變得更自由，能在沒有邏輯或懷疑限制的情況下探索各種可能性。換句話說，創造力並不總是單純來自於更努力地工作。有時候，讓心靈漫遊，即使是在睡眠中，也能讓令人驚訝的新解決方案浮現。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "unpredictable", pos: "adj.", meaning: "不可預測的", collocations: "unpredictable world 不可預測的世界" },
        { id: 2, word: "organize", pos: "v.", meaning: "組織、安排", collocations: "organize elements 組織元素" },
        { id: 3, word: "abstract", pos: "adj.", meaning: "抽象的", collocations: "abstract concept 抽象概念" },
        { id: 4, word: "groundbreaking", pos: "adj.", meaning: "開創性的、突破性的", collocations: "groundbreaking contributions 開創性貢獻" }
      ],
      grammarNotes: [
        { id: "G1", title: "upon + V-ing (一...就...)", excerpt: "Upon waking, he immediately wrote it down", analysis: "upon 介系詞後接動名詞，表示時間上的緊接發生，相當於 as soon as he woke up。" }
      ],
      patternNotes: [
        { id: "P1", title: "not... but... (不是...而是...)", excerpt: "didn't occur in labs, but in the quiet, unpredictable world", analysis: "對等連接詞片語，凸顯科學突破發生的場域出人意表。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'Laboratories are the workshops of science. However, some of the most important scientific breakthroughs ' },
          { type: 'pattern', text: 'didn\'t occur in labs, but in the quiet, unpredictable world', pid: 'P1' },
          { type: 'text', text: ' of dreams. For centuries, scientists have reported moments when solutions appeared through images and patterns formed during sleep rather than through careful calculations. While this may sound mysterious, modern neuroscience suggests that the brain continues to process information and make connections even when we\'re not consciously thinking.' }
        ],
        [
          { type: 'text', text: 'One of the most famous examples involves Dmitri Mendeleev. On March 1, 1869, after struggling to ' },
          { type: 'vocab', text: 'organize', vid: 2 },
          { type: 'text', text: ' the chemical elements in a logical, systematic way, he reportedly fell asleep at his desk and saw, in a dream, "a table where all the elements fell into place as required." ' },
          { type: 'grammar', text: 'Upon waking, he immediately wrote it down', gid: 'G1' },
          { type: 'text', text: '—and what he had envisioned was what we now recognize as the periodic table.' }
        ],
        [
          { type: 'text', text: 'Remarkably, a similar discovery had occurred just a few years before. August Kekulé had long endeavored unsuccessfully to determine the structure of benzene. Then one night, he dreamed of a snake biting its own tail and forming a ring. This striking vision led him to propose a circular molecular structure—a landmark breakthrough in organic chemistry.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Of course, dream-inspired insights have not been limited to 19th-century chemists; later thinkers have also experienced them. The mathematician Srinivasa Ramanujan often claimed that mathematical formulas appeared to him in dreams. He believed these insights came from a Hindu goddess named Namagiri. His findings still required careful proof, but many of the equations he dreamed up later proved highly important in modern mathematics.' }
        ],
        [
          { type: 'text', text: 'Similarly, the physicist Niels Bohr is said to have dreamed of electrons orbiting the nucleus like planets around the sun. This vivid image inspired his model of the atom, making an ' },
          { type: 'vocab', text: 'abstract', vid: 3 },
          { type: 'text', text: ' concept far easier to visualize and understand. Bohr would go on to win the Nobel Prize in Physics, in large part for these ' },
          { type: 'vocab', text: 'groundbreaking', vid: 4 },
          { type: 'text', text: ' contributions to our understanding of atomic structure.' }
        ],
        [
          { type: 'text', text: 'Today, scientists believe dreams may help speed such discoveries by strengthening memory and forging unexpected links. When the mind is relaxed, it becomes freer to explore possibilities without the limits of logic or doubt. In other words, creativity doesn\'t always come simply from working harder. Sometimes, letting the mind wander, even in sleep, can allow surprising new solutions to surface.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The weather in the mountains is notoriously ______; a sunny morning can quickly turn into a violent blizzard.", options: ["A. unpredictable", "B. regional", "C. competitive", "D. emotional"], answer: "A", explanation: "【選項解析】\n- (A) unpredictable (adj.) 不可預測的 (正解)\n- (B) regional (adj.) 地區的\n- (C) competitive (adj.) 競爭的\n- (D) emotional (adj.) 情感的" },
      { id: 2, question: "The frustrated student struggled to ______ the messy data into a coherent research paper.", options: ["A. organize", "B. disappear", "C. account", "D. detect"], answer: "A", explanation: "【選項解析】\n- (A) organize (v.) 組織、整理 (正解)\n- (B) disappear (v.) 消失\n- (C) account (v.) 解釋\n- (D) detect (v.) 偵測" },
      { id: 3, question: "Quantum mechanics often deals with highly ______ theories that defy everyday human logic.", options: ["A. abstract", "B. colorful", "C. practical", "D. modest"], answer: "A", explanation: "【選項解析】\n- (A) abstract (adj.) 抽象的 (正解)\n- (B) colorful (adj.) 色彩鮮豔的\n- (C) practical (adj.) 實用的\n- (D) modest (adj.) 謙虛的、適度的" },
      { id: 4, question: "The invention of the internet was a ______ achievement that completely transformed global communication.", options: ["A. groundbreaking", "B. clumsy", "C. greedy", "D. hostile"], answer: "A", explanation: "【選項解析】\n- (A) groundbreaking (adj.) 開創性的、突破性的 (正解)\n- (B) clumsy (adj.) 笨拙的\n- (C) greedy (adj.) 貪婪的\n- (D) hostile (adj.) 懷敵意的" }
    ],
    cloze: {
      text: "Scientific innovation is typically associated with rigorous laboratory testing. However, some monumental breakthroughs occurred entirely within the subconscious realm of sleep. Neuroscientists posit that the relaxed brain continues [1] complex data beyond our waking awareness. The renowned chemist Dmitri Mendeleev exemplifies this phenomenon. Struggling to systemize the elements, he drifted asleep and visualized a flawless table [2] every atomic unit fell perfectly into place. [3] awakening, he instantly documented this vision, giving birth to the periodic table. Similarly, August Kekulé envisioned a snake devouring its own tail, [4] prompted his discovery of benzene's circular molecular structure. By forging unexpected neural links, dream states allow brilliant minds to transcend rigid logic and unlock truly [5] solutions.",
      questions: [
        { id: 1, options: ["A. processing", "B. to processing", "C. processed", "D. process"], answer: "A", explanation: "continue + V-ing 表持續進行某動作。" },
        { id: 2, options: ["A. where", "B. which", "C. what", "D. whom"], answer: "A", explanation: "關係副詞 where 修飾先行的名詞 table（表格中）。" },
        { id: 3, options: ["A. Upon", "B. Despite", "C. Within", "D. Under"], answer: "A", explanation: "Upon + V-ing 表「一...就...」，一醒來立刻記錄。" },
        { id: 4, options: ["A. which", "B. who", "C. what", "D. that"], answer: "A", explanation: "非限定關係代名詞 which 代替前方整個「看見蛇咬尾巴」的事件。" },
        { id: 5, options: ["A. groundbreaking", "B. unpredictable", "C. abstract", "D. regional"], answer: "A", explanation: "解鎖真正的「開創性（groundbreaking）」解決方案。" }
      ]
    },
    wordBank: {
      words: ["(A) logic", "(B) abstract", "(C) structure", "(D) visually", "(E) breakthroughs", "(F) organize", "(G) calculations", "(H) insights", "(I) memory", "(J) conscious"],
      passage: "History demonstrates that extreme intellectual focus combined with deep sleep can yield miraculous scientific [1]. Rather than relying strictly on conscious [2], geniuses occasionally receive sudden answers through dreams. Dmitri Mendeleev wrestled exhaustively to [3] chemical properties before an unconscious vision provided the exact layout of the periodic table. Likewise, Kekulé deciphered benzene's ring [4] after dreaming of a serpent biting its tail. This phenomenon extends to physics; Niels Bohr transformed an [5] atomic concept into a tangible model by dreaming of planets orbiting a central sun. Today, experts theorize that a sleeping mind unburdened by strict [6] can forge novel connections. Sleep effectively consolidates [7] and permits unexpected [8] to bubble up to the surface.",
      answers: { 1: "E", 2: "G", 3: "F", 4: "C", 5: "B", 6: "A", 7: "I", 8: "H" }
    },
    discourse: {
      options: [
        "A. The renowned periodic table was born not at a chalkboard, but during a midday nap.",
        "B. They completely outlawed laboratory testing in favor of mandated afternoon sleep.",
        "C. A striking dream of a snake forming a circle successfully resolved his agonizing molecular dilemma.",
        "D. Although laboratories dictate modern methodology, historical genius frequently blossomed during deep slumber.",
        "E. Bohr famously conceptualized atomic structure by dreaming of planets orbiting the solar sun."
      ],
      paragraphs: [
        "Empirical observation and mathematical rigor constitute the backbone of modern science. [1] Free from waking anxieties, the human brain seemingly fabricates profound solutions utilizing symbolic dream imagery.",
        "Nineteenth-century chemistry offers legendary examples of this subconscious magic. Dmitri Mendeleev struggled endlessly to classify the elements systematically before experiencing a revelatory vision. [2] Shortly before this, August Kekulé had wrestled similarly with the elusive structure of benzene. [3]",
        "This phenomenon is not confined to chemistry; brilliant physicists have also benefited from nocturnal inspiration. [4] This visual metaphor simplified an immensely complex abstract reality, ultimately earning him a Nobel Prize.",
        "Modern neurobiology supports these historical anecdotes. While dreaming, the brain organizes memories and experiments with unorthodox conceptual associations. Creativity demands persistent labor, but occasionally, surrendering to sleep unlocks the final door."
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What scientific breakthrough did Dmitri Mendeleev achieve as a direct result of a dream?", options: ["A. He invented the first electronic calculator", "B. He envisioned the correct systematic organization of the periodic table of elements", "C. He discovered the structure of human DNA", "D. He successfully split the atomic nucleus"], answer: "B", explanation: "Day 1 提到門得列夫在夢中看見元素各就各位的表格，醒來後寫下，成為我們熟知的元素週期表。" },
        { id: 2, question: "How did August Kekulé decipher the molecular structure of benzene?", options: ["A. By dreaming of a snake biting its own tail to form a ring", "B. By observing water droplets under an advanced microscope", "C. By calculating the orbital trajectory of Mars", "D. By receiving mathematical formulas from a Hindu goddess"], answer: "A", explanation: "Day 1 指出凱庫勒夢見一條蛇咬住自己的尾巴形成圓環，啟發了他提出環狀分子結構。" },
        { id: 3, question: "What astronomical imagery inspired Niels Bohr's model of the atom?", options: ["A. A shooting star crashing into the ocean", "B. Electrons orbiting the nucleus like planets revolving around the sun", "C. A black hole absorbing surrounding light", "D. A spiral galaxy expanding outward"], answer: "B", explanation: "Day 2 提到波耳夢見電子像行星繞行太陽般繞著原子核運轉。" },
        { id: 4, question: "According to modern neuroscience, why might dreams facilitate problem-solving?", options: ["A. Because the brain physically grows larger during sleep", "B. Because a relaxed mind can forge unexpected links and explore possibilities without the strict limits of logic", "C. Because dreams permanently erase all incorrect memories", "D. Because scientists are secretly visited by aliens at night"], answer: "B", explanation: "Day 2 末段指出，當心智放鬆時，能在沒有邏輯限制的情況下自由探索並建立意想不到的連結。" }
      ]
    }
  },

  "Unit 6": {
    title: "The City That Never Sleeps: Discovering New York City",
    chineseTitle: "不夜城：探索紐約市",
    passage: `Day 1\nLocated on the East Coast of the United States, New York City is one of the liveliest cities in the world. Its variety and energy provide an amazing range of sights and experiences, from historic landmarks and cultural performances to upscale shopping and beloved sports traditions. Travelers from around the globe come to explore its unique charm and endless possibilities. The following six places highlight what makes this city truly unlike any other.\n\nA. Broadway\nA global center for world-class theater, Broadway attracts millions of visitors each year. From musicals to dramas, audiences can enjoy live performances of every kind, with top performers bringing compelling stories to life onstage. For many, attending a show here is a marvelous experience that leaves a lasting impression.\n\nB. Fifth Avenue\nStretching through the heart of Manhattan, Fifth Avenue is among the most famous shopping streets in the world. Lined with flagship stores for luxury brands, it is a paradise for those who appreciate high-end fashion and the vibrancy of city life. During major holidays, elaborately decorated shop windows draw crowds and add a cheerful charm to the street.\n\nDay 2\nC. The High Line\nBuilt on a former raised railway, the High Line is an unusual urban park where visitors can walk along a green pathway looking over the Hudson River. Lifted above the city's bustle, it offers a rare mix of peaceful surroundings and imaginative design.\n\nD. SoHo\nWith its vibrant artistic atmosphere, SoHo attracts those seeking something different from the typical tourist experience. Art galleries, independent boutiques, and stylish cafés line its streets, while many buildings still feature 19th-century cast-iron architecture. This combination of creative energy and historical character gives the neighborhood a strong identity.\n\nE. The 9/11 Memorial & Museum\nA place of quiet reflection, the 9/11 Memorial & Museum honors the victims of the September 11, 2001, terrorist attacks. Through powerful displays and carefully designed spaces, it invites visitors to bear witness to history and pay their respects.\n\nF. Yankee Stadium\nBaseball fans should not miss Yankee Stadium, home to one of the most well-known teams in professional sports. Watching a game here means stepping into the heart of American sports culture and being surrounded by the stadium's energetic fans and lively atmosphere—an experience every sports lover will treasure.`,
    chineseTranslation: `【第 1 天】\n座落於美國東岸的紐約市是世界上最充滿活力的城市之一。它的多樣性與能量提供了驚人的一系列景點與體驗，從歷史地標、文化表演到高檔購物與深受喜愛的體育傳統。來自全球的旅人前來探索其獨特魅力與無限可能。以下六個地方突顯了這座城市為何真正與眾不同。\n\nA. 百老匯\n身為世界級劇場的全球中心，百老匯每年吸引數百萬遊客。從音樂劇到舞台劇，觀眾能享受各種形式的現場表演，頂尖表演者將引人入勝的故事在舞台上賦予生命。對許多人而言，在這裡看戲是一次令人驚豔且留下深刻印象的體驗。\n\nB. 第五大道\n延伸穿過曼哈頓心臟地帶的第五大道，是世界上最著名的購物街之一。街道兩旁林立著奢侈品牌的旗艦店，對於欣賞高端時尚與城市活力的人來說，這裡是天堂。在重大節日期間，精心裝飾的櫥窗吸引了大批人群，為這條街增添了愉悅的魅力。\n\n【第 2 天】\nC. 高線公園\n建於昔日的高架鐵路上，高線公園是一座不尋常的城市公園。遊客可以沿著綠意盎然的小徑漫步，俯瞰哈德遜河。它高舉於城市的喧囂之上，提供了寧靜環境與富有想像力設計的罕見融合。\n\nD. 蘇活區\n憑藉其充滿活力的藝術氛圍，蘇活區吸引了那些尋求不同於典型觀光體驗的人。藝術畫廊、獨立精品店與時尚咖啡館林立於街道兩側，而許多建築仍保留著 19 世紀的鑄鐵建築特色。這種創意能量與歷史特色的結合賦予了該街區強烈的身分認同。\n\nE. 9/11 紀念館與博物館\n這是一個供人靜靜反思的地方，9/11 紀念館與博物館旨在紀念 2001 年 9 月 11 日恐怖攻擊的受害者。透過震撼人心的展示與精心設計的空間，它邀請遊客見證歷史並致上敬意。\n\nF. 洋基體育場\n棒球迷絕對不能錯過洋基體育場，這裡是職業體育界最著名的球隊之一的主場。在這裡看一場比賽意味著踏入美國體育文化的核心，並被體育場熱情洋溢的球迷與熱鬧氛圍所包圍——這是每個體育愛好者都會珍惜的體驗。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "upscale", pos: "adj.", meaning: "高檔的、高級的", collocations: "upscale shopping 高檔購物" },
        { id: 2, word: "compelling", pos: "adj.", meaning: "引人入勝的、令人信服的", collocations: "compelling stories 引人入勝的故事" },
        { id: 3, word: "vibrancy", pos: "n.", meaning: "活力、生氣", collocations: "vibrancy of city life 城市生活的活力" },
        { id: 4, word: "identity", pos: "n.", meaning: "身分認同、特性", collocations: "a strong identity 強烈的特性/認同" }
      ],
      grammarNotes: [
        { id: "G1", title: "with + O + V-ing (附帶狀況)", excerpt: "with top performers bringing compelling stories to life", analysis: "with 引導獨立分詞結構，主動語態用 bringing，描述頂尖表演者在舞台上賦予故事生命的伴隨狀態。" }
      ],
      patternNotes: [
        { id: "P1", title: "what 引導名詞子句", excerpt: "what makes this city truly unlike any other", analysis: "what 在此等於 the things that，引導名詞子句作為 highlight 的受詞。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'Located on the East Coast of the United States, New York City is one of the liveliest cities in the world. Its variety and energy provide an amazing range of sights and experiences, from historic landmarks and cultural performances to ' },
          { type: 'vocab', text: 'upscale', vid: 1 },
          { type: 'text', text: ' shopping and beloved sports traditions. Travelers from around the globe come to explore its unique charm and endless possibilities. The following six places highlight ' },
          { type: 'pattern', text: 'what makes this city truly unlike any other', pid: 'P1' },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'A. Broadway\nA global center for world-class theater, Broadway attracts millions of visitors each year. From musicals to dramas, audiences can enjoy live performances of every kind, ' },
          { type: 'grammar', text: 'with top performers bringing compelling stories to life', gid: 'G1' },
          { type: 'text', text: ' onstage. For many, attending a show here is a marvelous experience that leaves a lasting impression.' }
        ],
        [
          { type: 'text', text: 'B. Fifth Avenue\nStretching through the heart of Manhattan, Fifth Avenue is among the most famous shopping streets in the world. Lined with flagship stores for luxury brands, it is a paradise for those who appreciate high-end fashion and the ' },
          { type: 'vocab', text: 'vibrancy', vid: 3 },
          { type: 'text', text: ' of city life. During major holidays, elaborately decorated shop windows draw crowds and add a cheerful charm to the street.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'C. The High Line\nBuilt on a former raised railway, the High Line is an unusual urban park where visitors can walk along a green pathway looking over the Hudson River. Lifted above the city\'s bustle, it offers a rare mix of peaceful surroundings and imaginative design.' }
        ],
        [
          { type: 'text', text: 'D. SoHo\nWith its vibrant artistic atmosphere, SoHo attracts those seeking something different from the typical tourist experience. Art galleries, independent boutiques, and stylish cafés line its streets, while many buildings still feature 19th-century cast-iron architecture. This combination of creative energy and historical character gives the neighborhood a strong ' },
          { type: 'vocab', text: 'identity', vid: 4 },
          { type: 'text', text: '.' }
        ],
        [
          { type: 'text', text: 'E. The 9/11 Memorial & Museum\nA place of quiet reflection, the 9/11 Memorial & Museum honors the victims of the September 11, 2001, terrorist attacks. Through powerful displays and carefully designed spaces, it invites visitors to bear witness to history and pay their respects.' }
        ],
        [
          { type: 'text', text: 'F. Yankee Stadium\nBaseball fans should not miss Yankee Stadium, home to one of the most well-known teams in professional sports. Watching a game here means stepping into the heart of American sports culture and being surrounded by the stadium\'s energetic fans and lively atmosphere—an experience every sports lover will treasure.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The newly renovated hotel caters exclusively to an ______ clientele seeking luxury and premium service.", options: ["A. upscale", "B. unpredictable", "C. abstract", "D. unidentified"], answer: "A", explanation: "【選項解析】\n- (A) upscale (adj.) 高檔的、高級的 (正解)\n- (B) unpredictable (adj.) 不可預測的\n- (C) abstract (adj.) 抽象的\n- (D) unidentified (adj.) 未知的" },
      { id: 2, question: "The defense attorney presented a highly ______ argument that ultimately convinced the jury.", options: ["A. compelling", "B. clumsy", "C. freezing", "D. regional"], answer: "A", explanation: "【選項解析】\n- (A) compelling (adj.) 令人信服的、引人入勝的 (正解)\n- (B) clumsy (adj.) 笨拙的\n- (C) freezing (adj.) 酷寒的\n- (D) regional (adj.) 地區的" },
      { id: 3, question: "The cultural festival successfully captured the dynamic ______ and diversity of the immigrant neighborhood.", options: ["A. vibrancy", "B. barrier", "C. compensation", "D. routine"], answer: "A", explanation: "【選項解析】\n- (A) vibrancy (n.) 活力、生氣 (正解)\n- (B) barrier (n.) 障礙\n- (C) compensation (n.) 補償\n- (D) routine (n.) 常規" },
      { id: 4, question: "Preserving historical architecture helps a rapidly modernizing city maintain its unique cultural ______.", options: ["A. identity", "B. mushroom", "C. weapon", "D. mascot"], answer: "A", explanation: "【選項解析】\n- (A) identity (n.) 身分認同、特性 (正解)\n- (B) mushroom (n.) 蘑菇\n- (C) weapon (n.) 武器\n- (D) mascot (n.) 吉祥物" }
    ],
    cloze: {
      text: "New York City commands global attention as an unparalleled metropolis of diverse experiences. Visitors seeking top-tier theatrical productions inevitably gravitate toward Broadway, [1] world-class performers deliver unforgettable narratives. Shoppers with luxurious tastes find paradise along Fifth Avenue, a thoroughfare famous [2] its extravagant flagship stores and holiday window displays. For those pursuing urban tranquility, the High Line provides an elevated green sanctuary constructed upon [3] was once a commercial railway. Downtown, the SoHo district uniquely blends 19th-century cast-iron architecture with independent boutiques, giving the community a powerful visual [4]. No matter what travelers seek, the city's endless vibrancy guarantees an [5] journey.",
      questions: [
        { id: 1, options: ["A. where", "B. which", "C. what", "D. whom"], answer: "A", explanation: "關係副詞 where 修飾前方的 Broadway（在該處）。" },
        { id: 2, options: ["A. for", "B. with", "C. as", "D. to"], answer: "A", explanation: "famous for... 表示「以...聞名」。" },
        { id: 3, options: ["A. what", "B. that", "C. which", "D. where"], answer: "A", explanation: "what 相當於 the thing which，作為 upon 的受詞及 was once 的主詞。" },
        { id: 4, options: ["A. identity", "B. prediction", "C. argument", "D. limitation"], answer: "A", explanation: "給予社區強烈的視覺「特性/身分認同（identity）」。" },
        { id: 5, options: ["A. amazing", "B. amazingly", "C. amazed", "D. amaze"], answer: "A", explanation: "修飾 journey 需用形容詞 amazing（令人驚嘆的）。" }
      ]
    },
    wordBank: {
      words: ["(A) upscale", "(B) reflection", "(C) energetic", "(D) atmosphere", "(E) endless", "(F) performances", "(G) luxury", "(H) character", "(I) pathway", "(J) heart"],
      passage: "New York City offers an [1] array of attractions for global tourists. Broadway dominates the theatrical world, delivering compelling live [2] nightly. For elite shopping, Fifth Avenue serves as the ultimate paradise filled with [3] flagship boutiques. If seeking tranquility, visitors can stroll along the High Line, an elevated green [4] overlooking the Hudson. The SoHo neighborhood provides a deeply artistic [5] by combining creative galleries with historical cast-iron [6]. For solemn remembrance, the 9/11 Memorial provides a space for quiet [7]. Finally, baseball lovers can step into the [8] of American sports at Yankee Stadium, surrounded by [9] crowds. Together, these sites form a truly [10] urban experience.",
      answers: { 1: "E", 2: "F", 3: "G", 4: "I", 5: "D", 6: "H", 7: "B", 8: "J", 9: "C", 10: "A" }
    },
    discourse: {
      options: [
        "A. Broadway boasts unparalleled live theatrical productions that captivate international audiences nightly.",
        "B. They immediately decided to tear down the historic buildings to construct modern skyscrapers.",
        "C. The city bursts with diverse attractions ranging from historic sanctuaries to high-energy sporting arenas.",
        "D. Meanwhile, the High Line provides a rare, elevated oasis constructed atop abandoned train tracks.",
        "E. The 9/11 Memorial offers a solemn space dedicated to reflection and honoring tragic loss."
      ],
      paragraphs: [
        "New York City remains an undisputed global capital, drawing millions of eager visitors annually. [1] Six distinct locations beautifully summarize the metropolis's unique charm.",
        "[2] Just blocks away, Fifth Avenue satisfies desires for luxury fashion and extravagant holiday window displays.",
        "For those seeking aesthetic contrast, the city provides remarkable architectural respites. [3] Similarly, SoHo preserves 19th-century cast-iron aesthetics alongside independent modern art galleries.",
        "Cultural depth in New York extends beyond entertainment and shopping. [4] Conversely, the boisterous crowds at Yankee Stadium represent the beating heart of passionate American sports culture."
      ],
      answers: { 1: "C", 2: "A", 3: "D", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the primary feature that makes Fifth Avenue a paradise for specific travelers?", options: ["A. It hosts daily professional baseball games", "B. It is lined with flagship stores for luxury brands offering high-end fashion", "C. It contains elevated green parks built on old railways", "D. It is a quiet place designed exclusively for solemn reflection"], answer: "B", explanation: "Day 1 提到第五大道兩旁林立著奢侈品牌的旗艦店，是喜愛高端時尚者的天堂。" },
        { id: 2, question: "How does the High Line differ from traditional city parks?", options: ["A. It is located entirely underground", "B. It is an urban park built on a former raised railway lifted above the city's bustle", "C. It is filled with noisy roller coasters", "D. It exclusively sells cast-iron architecture"], answer: "B", explanation: "Day 2 指出高線公園建於昔日高架鐵路上，高舉於城市喧囂之上。" },
        { id: 3, question: "Which neighborhood is renowned for its 19th-century cast-iron architecture and vibrant artistic atmosphere?", options: ["A. Broadway", "B. Fifth Avenue", "C. SoHo", "D. Yankee Stadium"], answer: "C", explanation: "Day 2 提到蘇活區（SoHo）保留 19 世紀鑄鐵建築且充滿藝術畫廊與咖啡館。" },
        { id: 4, question: "What experience awaits visitors at Yankee Stadium?", options: ["A. Watching world-class theater musicals", "B. Stepping into the heart of American sports culture surrounded by energetic fans", "C. Shopping for luxury fashion brands", "D. Viewing historical terrorist attack artifacts"], answer: "B", explanation: "Day 2 指出在洋基體育場看球意味著踏入美國體育文化核心並被熱情球迷包圍。" }
      ]
    }
  },

  "Unit 8": {
    title: "Beef Versus Cow: The Linguistic History Hidden on Your Plate",
    chineseTitle: "藏在你餐盤裡的英語歷史",
    passage: `Day 1\nIn most languages, a single word is used for both a living animal and the meat it produces. English, however, is a curious outlier. A farmer tends to cows and pigs, but a diner orders beef and pork. This linguistic divide is no coincidence; it's a permanent mark left by a thousand-year-old conquest that greatly reshaped English society and its class structure.\n\nThe story begins in 1066 with the Battle of Hastings. William the Conqueror, Duke of Normandy, invaded England and overthrew the Anglo-Saxon monarchy, taking control of the land and its people almost overnight. This established a rigid new social order: The French-speaking Normans became the ruling aristocracy, while the native Anglo-Saxons were reduced to the laboring peasantry, stripped of political power and social status.\n\nFor the next three centuries, England was effectively bilingual. The Anglo-Saxon peasants continued to speak Old English, a Germanic tongue rooted in the language of their ancestors. They were the ones who worked the land and raised the livestock. However, they rarely saw the fruits of their labor on their own tables. To them, the animal was simply a cū (cow), a picg (pig), or a sceap (sheep).\n\nDay 2\nMeanwhile, in the great halls of Norman castles, a very different language was spoken at the dining table. The Old French-speaking nobles rarely encountered living cows, pigs, and sheep; they only saw them as prepared dishes served at lavish feasts. Naturally, they used French terms for what they were eating: bœuf, porc, and mouton—terms that would eventually evolve into the modern English words "beef," "pork," and "mutton."\n\nAs the two cultures gradually merged into a single English identity, both sets of vocabulary survived, but their social roles remained distinct. The pattern extended further, with "veal" (from French veau) and "venison" (from French venaison) following the same logic. Conversely, for smaller animals such as chicken and fish—foods eaten by all social classes—the original Germanic names survived for both the animal and the dish.\n\nToday, this duality endures as a fascinating reminder of linguistic history. Whenever we read a menu, we see the echoes of a medieval class struggle. These echoes are reminders that those who raised the food and those who ate it once spoke entirely different languages. What we eat may have changed, but the words we use still carry the weight of history.`,
    chineseTranslation: `【第 1 天】\n在多數語言中，活著的動物與其產出的肉類使用的是同一個單字。然而，英語卻是一個奇特的例外。農夫照顧的是 cows（牛）和 pigs（豬），但用餐者點的卻是 beef（牛肉）和 pork（豬肉）。這種語言上的分歧絕非巧合；它是一場千年征服所留下的永久印記，這場征服極大地重塑了英國社會及其階級結構。\n\n故事始於 1066 年的黑斯廷斯戰役。諾曼第公爵征服者威廉入侵英格蘭並推翻了盎格魯-撒克遜君主制，幾乎一夜之間奪取了這片土地與人民的控制權。這確立了一個森嚴的新社會秩序：說法語的諾曼人成為統治貴族，而本土的盎格魯-撒克遜人則淪為勞動農民，被剝奪了政治權力與社會地位。\n\n在接下來的三個世紀裡，英格蘭實質上是雙語的。盎格魯-撒克遜農民繼續說古英語，這是一種源於他們祖先語言的日耳曼語。他們是耕種土地和飼養家畜的人。然而，他們很少在自己的餐桌上看到勞動的果實。對他們來說，這些動物就只是 cū（cow）、picg（pig）或 sceap（sheep）。\n\n【第 2 天】\n與此同時，在諾曼城堡的大廳裡，餐桌上說著一種截然不同的語言。說古法語的貴族很少接觸活生生的牛、豬和羊；他們只將牠們視為在奢華宴會上端上桌的精緻佳餚。自然地，他們用發語詞彙來稱呼他們正在吃的東西：bœuf、porc 和 mouton——這些詞彙最終演變成現代英語單字 beef、pork 和 mutton。\n\n隨著這兩種文化逐漸融合為單一的英國身分認同，這兩套詞彙都存活了下來，但它們的社會角色依然涇渭分明。這種模式進一步延伸，veal（小牛肉，源自法語 veau）與 venison（鹿肉，源自法語 venaison）也遵循著相同的邏輯。相反地，對於雞和魚等較小的動物——所有社會階級都吃的食物——其動物與菜餚皆保留了最初的日耳曼名稱。\n\n如今，這種雙重性作為語言歷史的迷人提醒而延續下來。每當我們閱讀菜單時，我們都會看到中世紀階級鬥爭的迴聲。這些迴聲提醒我們，那些飼養食物的人與吃食物的人曾經說著完全不同的語言。我們吃的東西或許已經改變，但我們使用的文字依然承載著歷史的重量。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "outlier", pos: "n.", meaning: "例外、離群值", collocations: "a curious outlier 一個奇特的例外" },
        { id: 2, word: "conquest", pos: "n.", meaning: "征服、佔領", collocations: "a thousand-year-old conquest 千年前的征服" },
        { id: 3, word: "aristocracy", pos: "n.", meaning: "貴族階級", collocations: "the ruling aristocracy 統治貴族" },
        { id: 4, word: "distinct", pos: "adj.", meaning: "截然不同的、明顯區分的", collocations: "remained distinct 依然涇渭分明" }
      ],
      grammarNotes: [
        { id: "G1", title: "reduced to + N (淪落為...)", excerpt: "native Anglo-Saxons were reduced to the laboring peasantry", analysis: "be reduced to 表示被迫處於較差的狀態或地位，to 為介系詞。" }
      ],
      patternNotes: [
        { id: "P1", title: "Those who... (那些...的人)", excerpt: "Those who raised the food and those who ate it", analysis: "大考常見代名詞句型，those 代替複數名詞（指人），後接關係子句。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'In most languages, a single word is used for both a living animal and the meat it produces. English, however, is a curious ' },
          { type: 'vocab', text: 'outlier', vid: 1 },
          { type: 'text', text: '. A farmer tends to cows and pigs, but a diner orders beef and pork. This linguistic divide is no coincidence; it\'s a permanent mark left by a thousand-year-old ' },
          { type: 'vocab', text: 'conquest', vid: 2 },
          { type: 'text', text: ' that greatly reshaped English society and its class structure.' }
        ],
        [
          { type: 'text', text: 'The story begins in 1066 with the Battle of Hastings. William the Conqueror, Duke of Normandy, invaded England and overthrew the Anglo-Saxon monarchy, taking control of the land and its people almost overnight. This established a rigid new social order: The French-speaking Normans became the ruling ' },
          { type: 'vocab', text: 'aristocracy', vid: 3 },
          { type: 'text', text: ', while the ' },
          { type: 'grammar', text: 'native Anglo-Saxons were reduced to the laboring peasantry', gid: 'G1' },
          { type: 'text', text: ', stripped of political power and social status.' }
        ],
        [
          { type: 'text', text: 'For the next three centuries, England was effectively bilingual. The Anglo-Saxon peasants continued to speak Old English, a Germanic tongue rooted in the language of their ancestors. They were the ones who worked the land and raised the livestock. However, they rarely saw the fruits of their labor on their own tables. To them, the animal was simply a cū (cow), a picg (pig), or a sceap (sheep).' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Meanwhile, in the great halls of Norman castles, a very different language was spoken at the dining table. The Old French-speaking nobles rarely encountered living cows, pigs, and sheep; they only saw them as prepared dishes served at lavish feasts. Naturally, they used French terms for what they were eating: bœuf, porc, and mouton—terms that would eventually evolve into the modern English words "beef," "pork," and "mutton."' }
        ],
        [
          { type: 'text', text: 'As the two cultures gradually merged into a single English identity, both sets of vocabulary survived, but their social roles remained ' },
          { type: 'vocab', text: 'distinct', vid: 4 },
          { type: 'text', text: '. The pattern extended further, with "veal" (from French veau) and "venison" (from French venaison) following the same logic. Conversely, for smaller animals such as chicken and fish—foods eaten by all social classes—the original Germanic names survived for both the animal and the dish.' }
        ],
        [
          { type: 'text', text: 'Today, this duality endures as a fascinating reminder of linguistic history. Whenever we read a menu, we see the echoes of a medieval class struggle. These echoes are reminders that ' },
          { type: 'pattern', text: 'those who raised the food and those who ate it', pid: 'P1' },
          { type: 'text', text: ' once spoke entirely different languages. What we eat may have changed, but the words we use still carry the weight of history.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Most members supported the new proposal, making John a curious ______ when he firmly voted against it.", options: ["A. outlier", "B. combination", "C. compensation", "D. mascot"], answer: "A", explanation: "【選項解析】\n- (A) outlier (n.) 例外、離群值 (正解)\n- (B) combination (n.) 組合\n- (C) compensation (n.) 補償\n- (D) mascot (n.) 吉祥物" },
      { id: 2, question: "The ruthless ______ of neighboring territories expanded the ancient empire's borders significantly.", options: ["A. conquest", "B. blanket", "C. curfew", "D. review"], answer: "A", explanation: "【選項解析】\n- (A) conquest (n.) 征服、佔領 (正解)\n- (B) blanket (n.) 毛毯\n- (C) curfew (n.) 宵禁\n- (D) review (n.) 評論" },
      { id: 3, question: "During the medieval period, political power was held almost exclusively by a small, wealthy ______.", options: ["A. aristocracy", "B. atmosphere", "C. argument", "D. adventure"], answer: "A", explanation: "【選項解析】\n- (A) aristocracy (n.) 貴族階級 (正解)\n- (B) atmosphere (n.) 大氣、氛圍\n- (C) argument (n.) 爭論\n- (D) adventure (n.) 冒險" },
      { id: 4, question: "The two twin brothers have incredibly ______ personalities despite looking exactly alike.", options: ["A. distinct", "B. fluffy", "C. freezing", "D. clumsy"], answer: "A", explanation: "【選項解析】\n- (A) distinct (adj.) 截然不同的 (正解)\n- (B) fluffy (adj.) 蓬鬆的\n- (C) freezing (adj.) 酷寒的\n- (D) clumsy (adj.) 笨拙的" }
    ],
    cloze: {
      text: "The English language features a unique linguistic split where living farm animals and cooked meats bear different names. This divide is a direct consequence of the Norman [1] in 1066. Following the invasion, French-speaking nobles became the ruling [2], while the native Anglo-Saxons were relegated to farming. Because the peasants raised the livestock, Germanic words like 'cow' and 'pig' survived for the living creatures. Conversely, the French aristocrats, [3] only encountered these animals as lavish roasted dishes, utilized words like 'bœuf' and 'porc'. As the two languages slowly merged, these social distinctions [4] embedded in modern vocabulary. This fascinating historical quirk remains visible every time we browse a restaurant menu, [5] as a permanent echo of medieval class inequality.",
      questions: [
        { id: 1, options: ["A. conquest", "B. combination", "C. variation", "D. promotion"], answer: "A", explanation: "Norman conquest 諾曼征服事件。" },
        { id: 2, options: ["A. aristocracy", "B. peasant", "C. criminal", "D. victim"], answer: "A", explanation: "貴族階級成為統治者，選 aristocracy。" },
        { id: 3, options: ["A. who", "B. which", "C. where", "D. what"], answer: "A", explanation: "非限定關係代名詞 who 補充說明前方的 French aristocrats。" },
        { id: 4, options: ["A. became", "B. becoming", "C. become", "D. to become"], answer: "A", explanation: "主要子句動詞用過去式 became。" },
        { id: 5, options: ["A. serving", "B. served", "C. serve", "D. to serve"], answer: "A", explanation: "分詞構句表伴隨狀態，主動作為迴聲用 serving。" }
      ]
    },
    wordBank: {
      words: ["(A) distinct", "(B) peasants", "(C) livestock", "(D) outlier", "(E) entirely", "(F) bilingual", "(G) rigid", "(H) encountered", "(I) nobles", "(J) duality"],
      passage: "English stands as a linguistic [1] when naming animals and their corresponding meats. This separation resulted from a [2] social class division established in 1066. Following the Norman invasion, England became a functionally [3] nation. The Anglo-Saxon [4] spoke Germanic dialects while tending to the [5] in muddy fields, calling them cows and pigs. In contrast, the French-speaking [6] only [7] these creatures as exquisite meals, utilizing words like beef and pork. Over centuries, these terms fused into English, yet their definitions remained [8]. Today, this linguistic [9] serves as a living museum, reminding us that farmers and lords once spoke [10] different languages.",
      answers: { 1: "D", 2: "G", 3: "F", 4: "B", 5: "C", 6: "I", 7: "H", 8: "A", 9: "J", 10: "E" }
    },
    discourse: {
      options: [
        "A. Thus, they retained original Germanic roots for universally accessible foods.",
        "B. They immediately forced every English peasant to learn perfect French grammar.",
        "C. The roots of this bizarre vocabulary split stretch back to the dramatic Norman invasion of 1066.",
        "D. The English language possesses a peculiar habit of separating the names of animals from their meats.",
        "E. Consequently, French terminology became permanently attached to prepared dining."
      ],
      paragraphs: [
        "While a Spanish speaker uses 'cerdo' for both the pig and the pork chop, English differentiates the living creature from the culinary dish. [1]",
        "[2] When William the Conqueror violently seized the English throne, he installed a French-speaking aristocracy over the native Anglo-Saxon peasants.",
        "This abrupt societal fracture birthed two parallel linguistic realities. The subjugated farmers maintained their Germanic tongue while raising cows and sheep in the mud. Meanwhile, the noble lords only saw these animals when served on silver platters in castle dining halls. [3]",
        "Interestingly, this class division did not apply to smaller, cheaper animals like chickens, which were eaten by both rich and poor. [4] Today, every steakhouse menu secretly preserves the memory of this medieval class struggle."
      ],
      answers: { 1: "D", 2: "C", 3: "E", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "Why is the English language considered an 'outlier' regarding animal and meat vocabulary?", options: ["A. Because it has no words for vegetarian food", "B. Because it uses completely different words for the living animal and the meat it produces", "C. Because it banned the consumption of pork in 1066", "D. Because it only borrows words from modern Spanish"], answer: "B", explanation: "Day 1 首段指出，英語的奇特之處在於活著的動物與食用的肉類使用不同的單字。" },
        { id: 2, question: "Who primarily raised the livestock (cows, pigs, sheep) after the 1066 conquest?", options: ["A. The French-speaking Norman aristocracy", "B. The native Anglo-Saxon peasantry", "C. William the Conqueror himself", "D. Roman gladiators"], answer: "B", explanation: "Day 1 第三段指出，是本土的盎格魯-撒克遜農民（peasantry）繼續耕種土地並飼養家畜。" },
        { id: 3, question: "Why do the words 'beef' and 'pork' originate from French?", options: ["A. Because cows and pigs were first imported from Paris", "B. Because French-speaking nobles only saw these animals as prepared dishes at feasts", "C. Because Anglo-Saxon farmers refused to name the animals", "D. Because French was the only legal language for writing menus"], answer: "B", explanation: "Day 2 提到說法語的貴族只在宴會上看到做好的佳餚，自然用法語（bœuf, porc）稱呼，進而演變成 beef 和 pork。" },
        { id: 4, question: "Why do 'chicken' and 'fish' share the same word for both the animal and the meat?", options: ["A. They were considered sacred by the Normans", "B. They were exclusively eaten by French kings", "C. They were foods eaten by all social classes, allowing the original Germanic names to survive", "D. They went extinct during the Middle Ages"], answer: "C", explanation: "Day 2 第二段末指出，雞和魚是所有階級都吃的食物，因此保留了最初的日耳曼名稱。" }
      ]
    }
  },

  "Unit 9": {
    title: "Dress to De-Stress: How the Clothes You Wear Can Impact Your Mood",
    chineseTitle: "穿出好心情、甩掉壓力：服裝如何左右你的情緒",
    passage: `Day 1\nYou know the feeling: You're getting ready for something important—a presentation, a birthday dinner, a big interview—but nothing in your wardrobe feels right. The colors seem off. The style doesn't match your mood. Everything leaves you feeling flat. What you need is a dose of dopamine dressing.\n\nFirst coined during the COVID-19 pandemic, the term means choosing clothes for their mood-boosting powers. However, to understand how it works, we need to explore the neuroscience involved. Dopamine is produced by the brain in response to enjoyable activities. Nicknamed the "happiness hormone," it creates that pleasurable rush you get from eating something delicious or accomplishing something difficult. Wearing clothes we like, whether they're fresh purchases or comfortable old favorites, has the ability to trigger the same response.\n\nColor is also central to dopamine dressing. According to color psychology—the study of how various hues affect us—different colors are connected with different feelings. Blue, for example, tends to convey calmness, while brown signals stability. Some colors are even capable of affecting us in more significant ways, with red being capable of raising heart rates and green being linked to greater creativity.\n\nDay 2\nA concept closely related to dopamine dressing is enclothed cognition, the idea that what we wear shapes our mindset. Simply put, this means that clothes hold associations, and those associations influence how we think and behave. Switching out of pajamas and into workwear, for instance, can help us shift from a relaxed mood to an energetic one. Similarly, in one well-known study, participants who wore white lab coats scored significantly better on attention tests than those wearing their regular clothes. The participants associated the coats with focus and precision, and this connection appeared to sharpen how they thought.\n\nAll of this has practical implications. Casual clothing can be comfortable, but it isn't always ideal for maintaining focus and motivation. Instead, dress for the task at hand. For example, a more polished outfit can help you feel more capable and confident for an interview or presentation. The same applies to color choices. Wearing shades you associate with energy or calm will likely reinforce those feelings.\n\nYour wardrobe, it turns out, is more than just a collection of clothes. Used thoughtfully, it's one of the most accessible tools you have for managing your mood and improving your focus.`,
    chineseTranslation: `【第 1 天】\n你懂這種感覺：你正為重要的事情做準備——一場簡報、一頓生日晚餐、一次重要面試——但衣櫃裡沒有一件衣服感覺是對的。顏色看起來不搭。風格不符合你的心情。每件衣服都讓你覺得平淡無奇。你需要的是一劑「多巴胺穿搭」。\n\n這個詞首創於 COVID-19 疫情期間，指的是為了提升情緒的力量而挑選衣服。然而，要了解它的運作原理，我們需要探索其中涉及的神經科學。多巴胺是由大腦在應對令人愉快的活動時產生的。被暱稱為「快樂荷爾蒙」，它創造了你從吃美味食物或完成困難任務時獲得的愉悅衝動。穿著我們喜歡的衣服，無論是新買的還是舒適的舊愛，都有能力觸發相同的反應。\n\n顏色也是多巴胺穿搭的核心。根據色彩心理學（研究各種色調如何影響我們的學問），不同的顏色與不同的感受相關聯。例如，藍色往往傳達平靜，而棕色則象徵穩定。有些顏色甚至能夠以更顯著的方式影響我們，紅色能提高心率，而綠色則與更強的創造力有關。\n\n【第 2 天】\n與多巴胺穿搭密切相關的一個概念是「穿著認知」，即我們穿的衣服會塑造我們的心態。簡單來說，這意味著衣服帶有聯想，而這些聯想會影響我們的思考與行為方式。例如，脫下睡衣換上工作服，可以幫助我們從放鬆的情緒轉變為充滿活力的情緒。同樣地，在一項著名的研究中，穿著白色實驗袍的參與者在注意力測試中的得分顯著高於穿著便服的人。參與者將實驗袍與專注和精確聯想在一起，而這種連結似乎使他們的思維變得更加敏銳。\n\n這一切都有其實際意涵。休閒服裝可能很舒適，但對於維持專注與動力而言，它並不總是理想的選擇。取而代之的是，為手邊的任務穿著打扮。例如，更精緻的服裝可以幫助你在面試或簡報時感到更有能力與自信。這同樣適用於顏色的選擇。穿著你聯想到活力或平靜的色調，很可能會強化這些感受。\n\n事實證明，你的衣櫃不僅僅是衣服的集合。若經過深思熟慮地使用，它是你用來管理情緒與提高專注力最容易取得的工具之一。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "presentation", pos: "n.", meaning: "簡報、報告", collocations: "prepare for a presentation 準備簡報" },
        { id: 2, word: "trigger", pos: "v.", meaning: "觸發、引起", collocations: "trigger the same response 觸發相同反應" },
        { id: 3, word: "capability", pos: "n.", meaning: "能力、才能 (文中 capable 為形容詞)", collocations: "feel more capable 感到更有能力" },
        { id: 4, word: "motivation", pos: "n.", meaning: "動力、積極性", collocations: "maintaining focus and motivation 維持專注與動力" }
      ],
      grammarNotes: [
        { id: "G1", title: "with + O + V-ing/Adj. (附帶狀態)", excerpt: "with red being capable of raising heart rates", analysis: "with 獨立分詞結構，補充說明紅色能提高心率的附加科學現象。" }
      ],
      patternNotes: [
        { id: "P1", title: "more than just... (不僅僅是...)", excerpt: "is more than just a collection of clothes", analysis: "強調衣櫃的價值遠超越表面上的衣服集合，具備心理學上的實用功能。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'You know the feeling: You\'re getting ready for something important—a ' },
          { type: 'vocab', text: 'presentation', vid: 1 },
          { type: 'text', text: ', a birthday dinner, a big interview—but nothing in your wardrobe feels right. The colors seem off. The style doesn\'t match your mood. Everything leaves you feeling flat. What you need is a dose of dopamine dressing.' }
        ],
        [
          { type: 'text', text: 'First coined during the COVID-19 pandemic, the term means choosing clothes for their mood-boosting powers. However, to understand how it works, we need to explore the neuroscience involved. Dopamine is produced by the brain in response to enjoyable activities. Nicknamed the "happiness hormone," it creates that pleasurable rush you get from eating something delicious or accomplishing something difficult. Wearing clothes we like, whether they\'re fresh purchases or comfortable old favorites, has the ability to ' },
          { type: 'vocab', text: 'trigger', vid: 2 },
          { type: 'text', text: ' the same response.' }
        ],
        [
          { type: 'text', text: 'Color is also central to dopamine dressing. According to color psychology—the study of how various hues affect us—different colors are connected with different feelings. Blue, for example, tends to convey calmness, while brown signals stability. Some colors are even capable of affecting us in more significant ways, ' },
          { type: 'grammar', text: 'with red being capable of raising heart rates', gid: 'G1' },
          { type: 'text', text: ' and green being linked to greater creativity.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'A concept closely related to dopamine dressing is enclothed cognition, the idea that what we wear shapes our mindset. Simply put, this means that clothes hold associations, and those associations influence how we think and behave. Switching out of pajamas and into workwear, for instance, can help us shift from a relaxed mood to an energetic one. Similarly, in one well-known study, participants who wore white lab coats scored significantly better on attention tests than those wearing their regular clothes. The participants associated the coats with focus and precision, and this connection appeared to sharpen how they thought.' }
        ],
        [
          { type: 'text', text: 'All of this has practical implications. Casual clothing can be comfortable, but it isn\'t always ideal for maintaining focus and ' },
          { type: 'vocab', text: 'motivation', vid: 4 },
          { type: 'text', text: '. Instead, dress for the task at hand. For example, a more polished outfit can help you feel more ' },
          { type: 'vocab', text: 'capable', vid: 3 },
          { type: 'text', text: ' and confident for an interview or presentation. The same applies to color choices. Wearing shades you associate with energy or calm will likely reinforce those feelings.' }
        ],
        [
          { type: 'text', text: 'Your wardrobe, it turns out, ' },
          { type: 'pattern', text: 'is more than just a collection of clothes', pid: 'P1' },
          { type: 'text', text: '. Used thoughtfully, it\'s one of the most accessible tools you have for managing your mood and improving your focus.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The marketing executive prepared a stunning PowerPoint ______ to secure the new client.", options: ["A. presentation", "B. combination", "C. compensation", "D. limitation"], answer: "A", explanation: "【選項解析】\n- (A) presentation (n.) 簡報、報告 (正解)\n- (B) combination (n.) 組合\n- (C) compensation (n.) 補償\n- (D) limitation (n.) 限制" },
      { id: 2, question: "Certain strong smells can instantly ______ vivid childhood memories in our brains.", options: ["A. exceed", "B. trigger", "C. melt", "D. disguise"], answer: "B", explanation: "【選項解析】\n- (B) trigger (v.) 觸發、引起 (正解)\n- (A) exceed (v.) 超越\n- (C) melt (v.) 融化\n- (D) disguise (v.) 偽裝" },
      { id: 3, question: "Dressing in professional business attire makes her feel highly ______ and confident during interviews.", options: ["A. capable", "B. clumsy", "C. freezing", "D. greedy"], answer: "A", explanation: "【選項解析】\n- (A) capable (adj.) 有能力的、能幹的 (正解)\n- (B) clumsy (adj.) 笨拙的\n- (C) freezing (adj.) 酷寒的\n- (D) greedy (adj.) 貪婪的" },
      { id: 4, question: "Praising employees for their hard work is a great way to boost team ______.", options: ["A. motivation", "B. curiosity", "C. blanket", "D. mushroom"], answer: "A", explanation: "【選項解析】\n- (A) motivation (n.) 動力、積極性 (正解)\n- (B) curiosity (n.) 好奇心\n- (C) blanket (n.) 毛毯\n- (D) mushroom (n.) 蘑菇" }
    ],
    cloze: {
      text: "The psychological phenomenon known as 'dopamine dressing' asserts that our clothing choices profoundly impact our emotional states. First popularized during the pandemic, this trend explores how wearing beloved outfits can [1] the brain's happiness hormones. Science supports this: donning a favorite vibrant sweater produces a neurological rush similar [2] tasting delicious food. A related scientific concept, enclothed cognition, argues that apparel carries subconscious associations [3] alter our cognitive performance. For instance, individuals wearing white lab coats scored significantly higher on concentration tests because they associated the garment [4] scientific precision. Therefore, exchanging casual pajamas for polished workwear can effectively boost professional [5] and focus while working remotely.",
      questions: [
        { id: 1, options: ["A. trigger", "B. avoid", "C. damage", "D. forget"], answer: "A", explanation: "觸發（trigger）大腦的快樂荷爾蒙。" },
        { id: 2, options: ["A. to", "B. for", "C. with", "D. by"], answer: "A", explanation: "similar to 表示「與...相似」。" },
        { id: 3, options: ["A. that", "B. what", "C. who", "D. whom"], answer: "A", explanation: "關係代名詞 that 代替 associations，作為 alter 的主詞。" },
        { id: 4, options: ["A. with", "B. over", "C. under", "D. beyond"], answer: "A", explanation: "associate A with B 將 A 與 B 聯想在一起。" },
        { id: 5, options: ["A. motivation", "B. exhaustion", "C. argument", "D. tragedy"], answer: "A", explanation: "提升專業的「動力/積極性（motivation）」。" }
      ]
    },
    wordBank: {
      words: ["(A) trigger", "(B) wardrobe", "(C) mood", "(D) focus", "(E) capable", "(F) associations", "(G) casual", "(H) presentation", "(I) shift", "(J) colors"],
      passage: "When staring blankly at your [1] before a stressful morning [2], you might feel uninspired. However, fashion psychologists advocate for 'dopamine dressing' to elevate your [3]. The brain naturally releases dopamine during enjoyable activities, and wearing beloved garments can [4] the exact same neurological reward. Furthermore, enclothed cognition dictates that clothes carry symbolic [5]. Changing out of [6] sweatpants into formal attire can forcefully [7] a lazy mindset into an energetic one. Researchers noted that subjects wearing lab coats demonstrated improved [8] due to subconscious links to scientific precision. Consequently, selecting specific [9] and structured outfits can leave you feeling vastly more [10] to tackle daily challenges.",
      answers: { 1: "B", 2: "H", 3: "C", 4: "A", 5: "F", 6: "G", 7: "I", 8: "D", 9: "J", 10: "E" }
    },
    discourse: {
      options: [
        "A. Dopamine dressing suggests that donning a favorite outfit acts as a powerful neurological mood-booster.",
        "B. They completely outlawed the wearing of bright colors in corporate office environments.",
        "C. Enclothed cognition posits that the symbolic meaning of our attire actively alters our mental performance.",
        "D. The psychological relationship between clothing and human emotion is more profound than mere aesthetics.",
        "E. Similarly, wearing polished professional attire elevates confidence during high-stakes presentations."
      ],
      paragraphs: [
        "Most people have experienced the frustration of staring at a closet full of clothes yet feeling completely uninspired. [1]",
        "[2] The brain secretes dopamine during rewarding experiences, such as consuming chocolate or achieving a goal. Slipping into a cherished jacket triggers this identical chemical rush, instantly elevating one's spirits.",
        "A sister concept operates alongside this chemical reaction. [3] In one study, volunteers performed drastically better on rigorous attention tasks simply because they were given white medical lab coats to wear.",
        "These principles carry immense practical value for daily life. While pajamas are universally comfortable, they subconsciously prime the brain for lethargy. [4] Ultimately, your closet is a therapeutic tool waiting to be utilized."
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "According to the passage, what is 'dopamine dressing'?", options: ["A. Wearing heavy armor to protect against physical injury", "B. Choosing specific clothes for their ability to boost your mood and trigger happiness hormones", "C. A medical procedure involving injections of dopamine", "D. Wearing exclusively black clothing during the winter"], answer: "B", explanation: "Day 1 提到多巴胺穿搭是指為了提升情緒而挑選衣服，穿喜歡的衣服能觸發大腦產生快樂荷爾蒙。" },
        { id: 2, question: "Based on color psychology, how might wearing the color red affect someone?", options: ["A. It induces immediate deep sleep", "B. It is capable of physically raising heart rates", "C. It completely erases short-term memory", "D. It conveys a strong sense of cool calmness"], answer: "B", explanation: "Day 1 末段明確提到紅色能夠提高心率（raising heart rates）。" },
        { id: 3, question: "What did the study regarding 'enclothed cognition' and white lab coats reveal?", options: ["A. Participants wearing lab coats scored significantly better on attention tests because they associated the coats with focus", "B. Participants wearing lab coats became dangerously aggressive", "C. The lab coats made participants forget how to read", "D. The lab coats physically lowered the room's temperature"], answer: "A", explanation: "Day 2 提到穿白袍的參與者在注意力測試中得分顯著較高，因為他們將白袍與專注精確連結在一起。" },
        { id: 4, question: "What practical advice does the author give regarding casual clothing like pajamas?", options: ["A. You should wear them to all formal job interviews", "B. They are ideal for intense cardiovascular workouts", "C. They are comfortable but not always ideal for maintaining professional focus and motivation", "D. They legally cannot be worn outside the house"], answer: "C", explanation: "Day 2 最後一段建議，休閒服裝雖舒適，但不見得利於維持專注與動力，應依任務穿著適當服裝。" }
      ]
    }
  },

  "Unit 10": {
    title: "Kjell Lindgren: How a Kid from Taipei Reached the Stars",
    chineseTitle: "林琪兒：從臺北走向星辰的太空人",
    passage: `Day 1\nAt age 11, Kjell Lindgren did something most kids wouldn't even imagine: He applied to the US Air Force Academy. He never received a response, but that didn't stop him. Lindgren was born in Taipei in 1973 to a Taiwanese mother and an American father who was serving in the US Air Force. The family moved often, and he spent much of his childhood in England before returning to the US for high school. From an early age, he knew he wanted to be an astronaut, and books like The Right Stuff inspired him to map out a path to get there.\n\nAfter college, Lindgren began pilot training—only to be disqualified due to asthma. "That was a pretty significant valley," he said. "But then I reworked my map and began climbing out of that valley." Following his revised plan, Lindgren earned a medical degree before going on to complete training in aerospace medicine.\n\nThese achievements opened new doors. Lindgren worked as a flight surgeon at NASA and later supported astronaut training in Russia. In 2009, his persistence paid off: He was selected as a NASA astronaut candidate—one of only nine chosen from roughly 3,500 applicants.\n\nDay 2\nLindgren's childhood dream finally became reality on July 22, 2015, when he launched on his first mission to the International Space Station (ISS). There, he conducted scientific experiments on the effects of long-term spaceflight on human health and plant growth, in addition to completing two space walks.\n\nSeven years later, Lindgren returned to the ISS for his second mission, this time as commander. He spent 170 days in space, leading the crew through all stages of flight. He also helped conduct over 200 experiments, including research into how microgravity affects the human immune system.\n\nBesides being a skilled scientist and mission leader, Lindgren isn't afraid to express himself. In November 2015, he played "Amazing Grace" on bagpipes aboard the ISS to honor a colleague who had recently passed away. It was the first time bagpipes were ever played in space. He has also spoken out about the importance of protecting the environment, a stance informed by his unique experiences as an astronaut. "From orbit, it is clear that . . . our resources are finite . . . This is our home—the only planet we have. We have to take care of it!"`,
    chineseTranslation: `【第 1 天】\n在 11 歲時，林琪兒（Kjell Lindgren）做了多數孩子想都想不到的事：他申請了美國空軍官校。他從未收到回音，但這並沒有阻止他。林琪兒 1973 年出生於臺北，母親是臺灣人，父親是在美國空軍服役的美國人。這家人經常搬家，他在英國度過了大部分的童年，隨後回到美國讀高中。從小，他就知道自己想成為一名太空人，《太空先鋒》（The Right Stuff）等書籍啟發他規畫了一條通往目標的道路。\n\n大學畢業後，林琪兒開始了飛行員訓練——結果卻因氣喘而被取消資格。「那是一個相當巨大的低谷，」他說。「但後來我重新制定了我的地圖，並開始爬出那個低谷。」遵循他修改後的計畫，林琪兒獲得了醫學學位，隨後完成了航空航天醫學的訓練。\n\n這些成就為他開啟了新大門。林琪兒在 NASA 擔任航空軍醫，後來在俄羅斯支援太空人訓練。2009 年，他的堅持獲得了回報：他入選為 NASA 太空人候選人——這是大約 3,500 名申請者中僅選出的 9 人之一。\n\n【第 2 天】\n2015 年 7 月 22 日，林琪兒的童年夢想終於成真，當時他升空執行前往國際太空站（ISS）的首次任務。在那裡，他進行了關於長期太空飛行對人體健康與植物生長影響的科學實驗，此外還完成了兩次太空漫步。\n\n七年後，林琪兒回到 ISS 執行他的第二次任務，這次是擔任指揮官。他在太空中度過了 170 天，帶領機組人員完成所有飛行階段。他還協助進行了 200 多項實驗，包括研究微重力如何影響人體免疫系統。\n\n除了是一名熟練的科學家與任務領導者之外，林琪兒也不害怕表達自我。2015 年 11 月，他在 ISS 上用風笛吹奏了〈奇異恩典〉，以紀念最近過世的一位同事。這是有史以來第一次在太空中吹奏風笛。他也公開談論保護環境的重要性，這個立場是受到他作為太空人的獨特經歷所啟發。「從軌道上看，很明顯……我們的資源是有限的……這是我們的家——我們擁有的唯一星球。我們必須愛護它！」`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "disqualified", pos: "v.", meaning: "取消資格、使不合格", collocations: "disqualified due to asthma 因氣喘被取消資格" },
        { id: 2, word: "persistence", pos: "n.", meaning: "堅持、毅力", collocations: "persistence paid off 堅持得到了回報" },
        { id: 3, word: "commander", pos: "n.", meaning: "指揮官", collocations: "as mission commander 擔任任務指揮官" },
        { id: 4, word: "finite", pos: "adj.", meaning: "有限的", collocations: "resources are finite 資源是有限的" }
      ],
      grammarNotes: [
        { id: "G1", title: "only to + V (結果卻...)", excerpt: "only to be disqualified due to asthma", analysis: "only to 加上原形動詞，常用來表達與期待相反的意外結果或挫折。" }
      ],
      patternNotes: [
        { id: "P1", title: "It is clear that... (很明顯...)", excerpt: "it is clear that . . . our resources are finite", analysis: "It 為虛主詞，代替後方 that 帶出的真正主詞子句，強調地球資源有限是個不爭的事實。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'At age 11, Kjell Lindgren did something most kids wouldn\'t even imagine: He applied to the US Air Force Academy. He never received a response, but that didn\'t stop him. Lindgren was born in Taipei in 1973 to a Taiwanese mother and an American father who was serving in the US Air Force. The family moved often, and he spent much of his childhood in England before returning to the US for high school. From an early age, he knew he wanted to be an astronaut, and books like The Right Stuff inspired him to map out a path to get there.' }
        ],
        [
          { type: 'text', text: 'After college, Lindgren began pilot training—' },
          { type: 'grammar', text: 'only to be disqualified due to asthma', gid: 'G1' },
          { type: 'text', text: '. "That was a pretty significant valley," he said. "But then I reworked my map and began climbing out of that valley." Following his revised plan, Lindgren earned a medical degree before going on to complete training in aerospace medicine.' }
        ],
        [
          { type: 'text', text: 'These achievements opened new doors. Lindgren worked as a flight surgeon at NASA and later supported astronaut training in Russia. In 2009, his ' },
          { type: 'vocab', text: 'persistence', vid: 2 },
          { type: 'text', text: ' paid off: He was selected as a NASA astronaut candidate—one of only nine chosen from roughly 3,500 applicants.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'Lindgren\'s childhood dream finally became reality on July 22, 2015, when he launched on his first mission to the International Space Station (ISS). There, he conducted scientific experiments on the effects of long-term spaceflight on human health and plant growth, in addition to completing two space walks.' }
        ],
        [
          { type: 'text', text: 'Seven years later, Lindgren returned to the ISS for his second mission, this time as ' },
          { type: 'vocab', text: 'commander', vid: 3 },
          { type: 'text', text: '. He spent 170 days in space, leading the crew through all stages of flight. He also helped conduct over 200 experiments, including research into how microgravity affects the human immune system.' }
        ],
        [
          { type: 'text', text: 'Besides being a skilled scientist and mission leader, Lindgren isn\'t afraid to express himself. In November 2015, he played "Amazing Grace" on bagpipes aboard the ISS to honor a colleague who had recently passed away. It was the first time bagpipes were ever played in space. He has also spoken out about the importance of protecting the environment, a stance informed by his unique experiences as an astronaut. "From orbit, ' },
          { type: 'pattern', text: 'it is clear that . . . our resources are finite', pid: 'P1' },
          { type: 'text', text: ' . . . This is our home—the only planet we have. We have to take care of it!"' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The athlete was permanently ______ from the Olympic games after failing a mandatory drug test.", options: ["A. disqualified", "B. generated", "C. accounted", "D. triggered"], answer: "A", explanation: "【選項解析】\n- (A) disqualified (v.) 取消資格 (正解)\n- (B) generated (v.) 生成\n- (C) accounted (v.) 解釋\n- (D) triggered (v.) 觸發" },
      { id: 2, question: "Through sheer hard work and ______, the struggling musician eventually won a Grammy award.", options: ["A. persistence", "B. combination", "C. variation", "D. limitation"], answer: "A", explanation: "【選項解析】\n- (A) persistence (n.) 堅持、毅力 (正解)\n- (B) combination (n.) 組合\n- (C) variation (n.) 變異\n- (D) limitation (n.) 限制" },
      { id: 3, question: "The naval ______ issued immediate orders for the submarine fleet to dive into the trench.", options: ["A. commander", "B. follower", "C. barrier", "D. mascot"], answer: "A", explanation: "【選項解析】\n- (A) commander (n.) 指揮官 (正解)\n- (B) follower (n.) 追隨者\n- (C) barrier (n.) 屏障\n- (D) mascot (n.) 吉祥物" },
      { id: 4, question: "Environmentalists urgently warn that the Earth's natural resources are strictly ______ and depleting rapidly.", options: ["A. finite", "B. fluffy", "C. clumsy", "D. arrogant"], answer: "A", explanation: "【選項解析】\n- (A) finite (adj.) 有限的 (正解)\n- (B) fluffy (adj.) 蓬鬆的\n- (C) clumsy (adj.) 笨拙的\n- (D) arrogant (adj.) 傲慢的" }
    ],
    cloze: {
      text: "Kjell Lindgren’s journey to the stars is a testament to extraordinary resilience. Born in Taipei, he dreamed of space exploration since childhood. He pursued military pilot training, only [1] disqualified due to severe asthma. Rather than surrendering, he altered his trajectory and attained a medical degree. His clinical expertise and unwavering [2] eventually secured him a coveted spot as a NASA astronaut. On the International Space Station, Lindgren served multiple tours, ultimately acting as the mission [3]. Beyond conducting microgravity experiments on the human immune system, Lindgren brought cultural humanity to space by playing bagpipes to honor a deceased colleague. Furthermore, viewing Earth from orbit instilled in him a profound ecological awareness. He consistently reminds audiences that our planetary resources are strictly [4], emphasizing [5] humanity must safeguard its only home.",
      questions: [
        { id: 1, options: ["A. to be", "B. being", "C. been", "D. be"], answer: "A", explanation: "only to be 表出乎意料的結果（結果卻被取消資格）。" },
        { id: 2, options: ["A. persistence", "B. hesitation", "C. curiosity", "D. objection"], answer: "A", explanation: "不屈不撓的「堅持/毅力（persistence）」。" },
        { id: 3, options: ["A. commander", "B. victim", "C. peasant", "D. criminal"], answer: "A", explanation: "擔任任務的「指揮官（commander）」。" },
        { id: 4, options: ["A. finite", "B. endless", "C. eternal", "D. unlimited"], answer: "A", explanation: "地球資源是「有限的（finite）」。" },
        { id: 5, options: ["A. that", "B. what", "C. which", "D. where"], answer: "A", explanation: "that 引導名詞子句作 emphasizing 的受詞。" }
      ]
    },
    wordBank: {
      words: ["(A) candidate", "(B) disqualified", "(C) finite", "(D) surgeon", "(E) persistence", "(F) environment", "(G) experiments", "(H) commander", "(I) childhood", "(J) orbit"],
      passage: "Kjell Lindgren transformed a seemingly impossible [1] dream into a stellar reality. Born in Taipei, he originally pursued combat flight training but was unfortunately [2] because of asthma. Demonstrating immense [3], he pivoted his career and became an aerospace flight [4]. This medical expertise earned him a position as a highly sought-after NASA astronaut [5]. During his multiple tours on the ISS, Lindgren not only managed complex scientific [6] but eventually led the entire crew as mission [7]. Looking down from high [8], the fragility of Earth deeply moved him. He now actively advocates for the protection of our [9], reminding everyone that our fragile planet's resources are inherently [10].",
      answers: { 1: "I", 2: "B", 3: "E", 4: "D", 5: "A", 6: "G", 7: "H", 8: "J", 9: "F", 10: "C" }
    },
    discourse: {
      options: [
        "A. Looking down upon the Earth fundamentally transformed his perspective on global ecology.",
        "B. He was permanently banned from joining any government agency due to a security violation.",
        "C. The road from Taipei to the International Space Station required remarkable resilience.",
        "D. During his second deployment, he assumed the demanding role of mission commander.",
        "E. After a childhood defined by global relocation, he set his sights on the stars."
      ],
      paragraphs: [
        "[1] Born to a Taiwanese mother and American military father, Kjell Lindgren possessed an unwavering ambition to become an astronaut. [2]",
        "His journey suffered a severe blow when an asthma diagnosis disqualified him from pilot training. Refusing defeat, Lindgren charted a new course through aerospace medicine, eventually earning a coveted slot as a NASA astronaut.",
        "His dream materialized when he launched to the ISS to conduct pivotal microgravity research. [3] His leadership ensured the successful execution of hundreds of biological experiments over 170 days.",
        "Beyond science, Lindgren infused his spaceflight with deep humanity. [4] He passionately reminds humanity that our planetary resources are fragile, finite, and urgently in need of preservation."
      ],
      answers: { 1: "C", 2: "E", 3: "D", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "Why was Kjell Lindgren initially disqualified from becoming a military pilot?", options: ["A. He failed the mathematics examination", "B. He was disqualified due to an asthma diagnosis", "C. He was too tall to fit inside the fighter jets", "D. He refused to wear the official military uniform"], answer: "B", explanation: "Day 1 提到他大學後開始飛行員訓練，結果因氣喘（asthma）被取消資格。" },
        { id: 2, question: "How did Lindgren ultimately bypass his flight disqualification to reach NASA?", options: ["A. He secretly sneaked onto a commercial rocket ship", "B. He earned a medical degree and became an aerospace flight surgeon", "C. He bribed NASA officials with immense wealth", "D. He invented a completely new type of jet engine"], answer: "B", explanation: "Day 1 指出他修改計畫，獲得醫學學位並成為 NASA 的航空軍醫，藉此開啟了新大門。" },
        { id: 3, question: "What unique musical event did Lindgren perform aboard the International Space Station?", options: ["A. He played the bagpipes to honor a deceased colleague", "B. He played a grand piano during a live global broadcast", "C. He sang an Italian opera song for the Russian crew", "D. He drummed on the ISS walls using titanium wrenches"], answer: "A", explanation: "Day 2 提到他在 ISS 上用風笛（bagpipes）吹奏奇異恩典以紀念過世同事。" },
        { id: 4, question: "What ecological realization did Lindgren gain from viewing Earth from orbit?", options: ["A. That the Earth is actually a flat disk", "B. That humanity possesses infinite clean water", "C. That our resources are finite and we must protect our only planetary home", "D. That weather patterns are controlled by alien satellites"], answer: "C", explanation: "Day 2 結尾引述他的話，從軌道上看很明顯資源是有限的（finite），我們必須愛護這個唯一的家。" }
      ]
    }
  },

  "Unit 12": {
    title: "The Big Lap",
    chineseTitle: "大環澳：澳洲版的環島之旅",
    passage: `For young Taiwanese, taking an around-the-island trip, or huandao, is an important rite of passage—one that promises many unforgettable experiences. A typical huandao covers around 1,000 km and can be completed in less than two weeks. But what if the journey were more like 14,500 km? This is the reality Australians face when they attempt their own version of a huandao: the Big Lap.\n\nBecause it covers such a vast distance, the Big Lap unsurprisingly requires far more time to complete than a huandao. By car, the trip typically takes between three and six months. By bicycle, though, the Big Lap can take an entire year!\n\nUndertaking such a trip calls for many months of research and planning. For some, that may seem like a lot of effort, but the payoff is certainly worthwhile. Australia offers an extraordinary variety of landscapes to travel through, from dusty deserts to snow-covered hills, along with an equally diverse cast of characters to meet along the way. If you've completed a huandao and are ready for a bigger challenge, the Big Lap might be the perfect next adventure for you.`,
    chineseTranslation: `對於臺灣年輕人來說，環島（huandao）是一項重要的成年禮——一項承諾會帶來許多難忘經歷的儀式。一趟典型的環島大約涵蓋 1,000 公里，且能在不到兩週的時間內完成。但如果這趟旅程更像是 14,500 公里呢？這就是澳洲人在嘗試他們自己版本的環島「大環澳（the Big Lap）」時所面臨的現實。\n\n毫不意外地，由於涵蓋如此廣闊的距離，大環澳需要比環島多得多的時間來完成。開車的話，這趟旅程通常需要三到六個月。然而，如果是騎自行車，大環澳可能要花上一整年！\n\n進行這樣一趟旅程需要好幾個月的研究與規畫。對某些人來說，那似乎得費很大力氣，但回報絕對是值得的。澳洲提供了極其多樣化的風景供人穿梭遊歷，從塵土飛揚的沙漠到白雪覆蓋的山丘，一路上還能遇見同樣形形色色的人物。如果你已經完成過環島並準備好迎接更大的挑戰，大環澳或許會是你完美的下一個冒險。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "passage", pos: "n.", meaning: "通過、通道（文中指 rite of passage 成年禮）", collocations: "rite of passage 人生必經的儀式" },
        { id: 2, word: "attempt", pos: "v.", meaning: "嘗試、企圖", collocations: "attempt a journey 嘗試一趟旅程" },
        { id: 3, word: "diverse", pos: "adj.", meaning: "多樣的、多元的", collocations: "diverse cast of characters 形形色色的人物" },
        { id: 4, word: "adventure", pos: "n.", meaning: "冒險、奇遇", collocations: "perfect next adventure 完美的下個冒險" }
      ],
      grammarNotes: [
        { id: "G1", title: "what if + 假設語氣", excerpt: "what if the journey were more like 14,500 km", analysis: "what if 後接與現在事實相反的假設語氣，故 be 動詞使用 were，表示「如果旅程長達一萬四千多公里會怎樣呢？」" }
      ],
      patternNotes: [
        { id: "P1", title: "calls for (需要、要求)", excerpt: "Undertaking such a trip calls for many months of research", analysis: "call for 為常見動詞片語，表示某件事物極其需要特定的行動或準備。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: 'For young Taiwanese, taking an around-the-island trip, or huandao, is an important rite of ' },
          { type: 'vocab', text: 'passage', vid: 1 },
          { type: 'text', text: '—one that promises many unforgettable experiences. A typical huandao covers around 1,000 km and can be completed in less than two weeks. But ' },
          { type: 'grammar', text: 'what if the journey were more like 14,500 km', gid: 'G1' },
          { type: 'text', text: '? This is the reality Australians face when they ' },
          { type: 'vocab', text: 'attempt', vid: 2 },
          { type: 'text', text: ' their own version of a huandao: the Big Lap.' }
        ],
        [
          { type: 'text', text: 'Because it covers such a vast distance, the Big Lap unsurprisingly requires far more time to complete than a huandao. By car, the trip typically takes between three and six months. By bicycle, though, the Big Lap can take an entire year!' }
        ],
        [
          { type: 'pattern', text: 'Undertaking such a trip calls for many months of research', pid: 'P1' },
          { type: 'text', text: ' and planning. For some, that may seem like a lot of effort, but the payoff is certainly worthwhile. Australia offers an extraordinary variety of landscapes to travel through, from dusty deserts to snow-covered hills, along with an equally ' },
          { type: 'vocab', text: 'diverse', vid: 3 },
          { type: 'text', text: ' cast of characters to meet along the way. If you\'ve completed a huandao and are ready for a bigger challenge, the Big Lap might be the perfect next ' },
          { type: 'vocab', text: 'adventure', vid: 4 },
          { type: 'text', text: ' for you.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Graduating from high school is considered a significant rite of ______ in many modern cultures.", options: ["A. passage", "B. blanket", "C. mushroom", "D. weapon"], answer: "A", explanation: "【選項解析】\n- (A) passage (n.) 通過、過渡 (rite of passage 成年禮/人生必經階段) (正解)\n- (B) blanket (n.) 毛毯\n- (C) mushroom (n.) 蘑菇\n- (D) weapon (n.) 武器" },
      { id: 2, question: "The exhausted climber failed in his first ______ to reach the summit of Mount Everest.", options: ["A. attempt", "B. outline", "C. compensation", "D. combination"], answer: "A", explanation: "【選項解析】\n- (A) attempt (n./v.) 嘗試、企圖 (正解)\n- (B) outline (n.) 大綱\n- (C) compensation (n.) 補償\n- (D) combination (n.) 組合" },
      { id: 3, question: "The international university boasts a highly ______ student body representing over 50 countries.", options: ["A. diverse", "B. freezing", "C. fluffy", "D. clumsy"], answer: "A", explanation: "【選項解析】\n- (A) diverse (adj.) 多樣的、多元的 (正解)\n- (B) freezing (adj.) 極凍的\n- (C) fluffy (adj.) 蓬鬆的\n- (D) clumsy (adj.) 笨拙的" },
      { id: 4, question: "Sailing across the Atlantic Ocean solo was the greatest ______ of the old captain's life.", options: ["A. adventure", "B. atmosphere", "C. identity", "D. routine"], answer: "A", explanation: "【選項解析】\n- (A) adventure (n.) 冒險、歷險 (正解)\n- (B) atmosphere (n.) 大氣、氛圍\n- (C) identity (n.) 身分認同\n- (D) routine (n.) 慣例" }
    ],
    cloze: {
      text: "While circling Taiwan spans roughly 1,000 kilometers, traversing Australia's perimeter demands a staggering 14,500-kilometer commitment. Known [1] 'the Big Lap,' this epic journey represents the ultimate rite of passage for Australian adventurers. Because the continent possesses an extraordinarily [2] climate, travelers must thoroughly prepare for dusty deserts and snowy hills alike. Taking on this challenge calls [3] months of logistical planning and vehicle preparation. For those driving, the expedition generally requires up to half a year, [4] cyclists might spend an entire twelve months pedaling the route. Ultimately, those who successfully [5] the Big Lap are rewarded with unforgettable memories and character-building resilience.",
      questions: [
        { id: 1, options: ["A. as", "B. to", "C. for", "D. with"], answer: "A", explanation: "be known as 被稱為..." },
        { id: 2, options: ["A. diverse", "B. identical", "C. predictable", "D. narrow"], answer: "A", explanation: "澳洲擁有極其「多樣化（diverse）」的氣候。" },
        { id: 3, options: ["A. for", "B. in", "C. on", "D. over"], answer: "A", explanation: "call for 表示「需要、要求」。" },
        { id: 4, options: ["A. whereas", "B. because", "C. despite", "D. therefore"], answer: "A", explanation: "whereas 表轉折對比（開車半年，而騎腳踏車要一年）。" },
        { id: 5, options: ["A. attempt", "B. attempts", "C. attempted", "D. to attempt"], answer: "A", explanation: "關係子句中 those為複數主詞，動詞用原形 attempt。" }
      ]
    },
    wordBank: {
      words: ["(A) distance", "(B) completed", "(C) challenge", "(D) attempt", "(E) passage", "(F) requires", "(G) landscapes", "(H) vehicle", "(I) worthwhile", "(J) planning"],
      passage: "A circumnavigation of Taiwan serves as an exciting rite of [1] for local youth. The 1,000-kilometer loop is usually [2] in under two weeks. However, Australians face a significantly tougher test when they [3] the Big Lap. Spanning an immense [4] of 14,500 kilometers, circling Australia inherently [5] substantial time and effort. Undertaking this monumental task involves months of detailed [6] and mechanical preparation. Motorists spend up to six months exploring striking [7] ranging from arid deserts to snowy peaks. Despite the physical exhaustion, the breathtaking scenery makes the lengthy excursion entirely [8]. For seasoned cyclists seeking a massive new [9], the Big Lap offers the ultimate endurance [10].",
      answers: { 1: "E", 2: "B", 3: "D", 4: "A", 5: "F", 6: "J", 7: "G", 8: "I", 9: "C", 10: "H" }
    },
    discourse: {
      options: [
        "A. Compared to a Taiwanese huandao, the Big Lap tests human endurance on an entirely different scale.",
        "B. They completely outlawed the use of bicycles on the Australian highway system.",
        "C. Preparing for such a gargantuan excursion necessitates meticulous logistical research.",
        "D. Circling one's home country stands as an exhilarating rite of passage for many young adults.",
        "E. Because of its sheer size, traversing Australia exposes adventurers to wildly varying ecological zones."
      ],
      paragraphs: [
        "[1] In Taiwan, the classic 1,000-kilometer 'huandao' promises unforgettable scenic memories within a mere two weeks.",
        "[2] Traversing Australia's 14,500-kilometer perimeter takes motorists roughly half a year, while cyclists routinely spend an entire twelve months battling the coastal winds.",
        "[3] Without proper vehicular maintenance and survival supplies, travelers risk stranding themselves in desolate regions.",
        "Despite the grueling effort, the payoff remains spectacular. [4] Ultimately, the Big Lap offers seasoned travelers the definitive outback adventure."
      ],
      answers: { 1: "D", 2: "A", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "Approximately how long is the route for Australia's 'Big Lap'?", options: ["A. 1,000 km", "B. 5,000 km", "C. 14,500 km", "D. 30,000 km"], answer: "C", explanation: "文章第一段明確提到大環澳的旅程大約是 14,500 公里。" },
        { id: 2, question: "How long does the Big Lap typically take to complete if traveling by bicycle?", options: ["A. Less than two weeks", "B. Exactly one month", "C. Three to six months", "D. An entire year"], answer: "D", explanation: "第二段指出如果是騎自行車（By bicycle），大環澳可能要花上一整年（an entire year）。" },
        { id: 3, question: "What requirement is heavily emphasized for undertaking the Big Lap?", options: ["A. Securing an expensive international passport", "B. Conducting many months of research and planning", "C. Traveling strictly without any modern technology", "D. Learning how to fly a commercial airplane"], answer: "B", explanation: "第三段首句指出進行這樣一趟旅程需要好幾個月的研究與規畫（many months of research and planning）。" },
        { id: 4, question: "What contrasting landscapes does the author mention exist along the Australian route?", options: ["A. Deep underwater caves and tropical volcanoes", "B. Dusty deserts and snow-covered hills", "C. Dense bamboo forests and icy glaciers", "D. Endless urban skyscrapers and underground subway tunnels"], answer: "B", explanation: "第三段提到澳洲提供了極其多樣化的風景，從塵土飛揚的沙漠（dusty deserts）到白雪覆蓋的山丘（snow-covered hills）。" }
      ]
    }
  },

  "Unit 13": {
    title: "Anesthesia: The Discovery That Transformed Medicine",
    chineseTitle: "麻醉：改寫醫學史的重大發現",
    passage: `Day 1\nThere are countless reasons to be grateful for living in the modern world. Technologies from phones and planes to fridges and blenders make our lives much more comfortable and luxurious than those of our ancestors. But perhaps no innovations have spared people from more misery than anesthetics, the medicines that put us to sleep and stop us from feeling pain during surgeries.\n\nBefore anesthesia was invented, surgery was one of the most terrifying experiences a person could face. Patients remained fully awake as doctors cut into their bodies, physically held down by four or more strong men. A patient's screams were simply part of the procedure. Surgeons focused on speed to make the suffering as brief as possible—the Scottish surgeon Robert Liston could amputate a leg in 25 seconds—but the agony was still appalling.\n\nOther methods for reducing pain included giving the patient alcohol, opium, or nitrous oxide, substances that people otherwise used for pleasure. Sometimes, surgeons even tried to hypnotize patients or knock them unconscious with a blow to the head. None of these methods, however, were particularly effective.\n\nDay 2\nThis all changed in 1846, when an American dentist named William Morton demonstrated the use of ether as an anesthetic. When inhaled, ether made Morton's patient unconscious, allowing the dentist to operate. Upon waking up, the patient confirmed that he hadn't felt any pain during the procedure. It was a miraculous breakthrough, and within weeks, Liston started using ether in London.\n\nWhile ether clearly had massive benefits, it wasn't perfect. Breathing it in was very unpleasant, which often caused patients to cough or vomit, and it could easily catch fire. Chloroform soon started to be used instead, but finding the right dosage proved to be difficult, as too much could cause a patient's death. The English physician John Snow experimented with different doses, carefully working out exactly how much should be used. He was so confident that he even gave chloroform to Queen Victoria when she gave birth in 1853.\n\nToday, anesthesia is an established part of modern medicine. It allows us to undergo important procedures in a safe and relatively comfortable way. We may take it for granted, but we should always remember how lucky we are to have it.`,
    chineseTranslation: `【第 1 天】\n生活在現代世界有數不清的理由讓人心存感激。從手機、飛機到冰箱和果汁機等科技，使我們的生活比祖先們舒適奢華得多。但或許沒有任何創新能比麻醉劑（在手術期間讓我們入睡並停止感受疼痛的藥物）讓人免受更多苦難。\n\n在麻醉發明之前，手術是一個人所能面臨最恐怖的經歷之一。當醫生切開病人的身體時，病人保持完全清醒，並被四名或更多強壯的男子強行壓住。病人的尖叫聲簡直就是手術過程的一部分。外科醫生專注於速度，以使痛苦盡可能短暫——蘇格蘭外科醫生羅伯特·李斯頓能在 25 秒內截肢一條腿——但那種痛苦仍然令人震驚。\n\n其他減輕疼痛的方法包括給病人服用酒精、鴉片或笑氣，這些通常是人們用來尋歡作樂的物質。有時候，外科醫生甚至嘗試催眠病人，或猛擊頭部將他們打昏。然而，這些方法沒有一種是特別有效的。\n\n【第 2 天】\n這一切在 1846 年發生了改變，當時一位名叫威廉·莫頓的美國牙醫示範了將乙醚作為麻醉劑的使用。吸入後，乙醚使莫頓的病人失去知覺，讓牙醫得以動手術。醒來後，病人確認他在手術過程中沒有感覺到任何疼痛。這是一個奇蹟般的突破，不到幾週，李斯頓就開始在倫敦使用乙醚。\n\n雖然乙醚顯然有巨大的好處，但它並不完美。吸入它非常不舒服，這經常導致病人咳嗽或嘔吐，而且它很容易著火。很快地，人們開始改用氯仿（哥羅芳），但事實證明要找到正確的劑量很困難，因為過量可能會導致病人死亡。英國醫生約翰·斯諾對不同的劑量進行了實驗，仔細計算出究竟應該使用多少。他非常有自信，甚至在 1853 年維多利亞女王分娩時給她使用了氯仿。\n\n如今，麻醉已成為現代醫學確立的一部分。它讓我們能夠以安全且相對舒適的方式進行重要的醫療程序。我們可能認為這是理所當然的，但我們應該永遠記住，能擁有它我們有多麼幸運。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "miserable", pos: "adj.", meaning: "悲慘的、痛苦的 (名詞 misery)", collocations: "spared people from more misery 讓人免受更多苦難" },
        { id: 2, word: "procedure", pos: "n.", meaning: "程序、手術過程", collocations: "part of the procedure 手術過程的一部分" },
        { id: 3, word: "unpleasant", pos: "adj.", meaning: "令人不快的、不舒服的", collocations: "very unpleasant 非常不舒服" },
        { id: 4, word: "dosage", pos: "n.", meaning: "劑量", collocations: "the right dosage 正確的劑量" }
      ],
      grammarNotes: [
        { id: "G1", title: "allowing + O + to V (分詞構句表結果)", excerpt: "allowing the dentist to operate", analysis: "allowing 為現在分詞，引導結果分詞片語，表示乙醚使病人昏迷的結果是「讓牙醫得以動手術」。" }
      ],
      patternNotes: [
        { id: "P1", title: "take... for granted (將...視為理所當然)", excerpt: "We may take it for granted", analysis: "大考極高頻片語，表示習慣了某事物的存在而不懂得珍惜或感恩。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: '【Day 1】' }
        ],
        [
          { type: 'text', text: 'There are countless reasons to be grateful for living in the modern world. Technologies from phones and planes to fridges and blenders make our lives much more comfortable and luxurious than those of our ancestors. But perhaps no innovations have spared people from more misery than anesthetics, the medicines that put us to sleep and stop us from feeling pain during surgeries.' }
        ],
        [
          { type: 'text', text: 'Before anesthesia was invented, surgery was one of the most terrifying experiences a person could face. Patients remained fully awake as doctors cut into their bodies, physically held down by four or more strong men. A patient\'s screams were simply part of the ' },
          { type: 'vocab', text: 'procedure', vid: 2 },
          { type: 'text', text: '. Surgeons focused on speed to make the suffering as brief as possible—the Scottish surgeon Robert Liston could amputate a leg in 25 seconds—but the agony was still appalling.' }
        ],
        [
          { type: 'text', text: 'Other methods for reducing pain included giving the patient alcohol, opium, or nitrous oxide, substances that people otherwise used for pleasure. Sometimes, surgeons even tried to hypnotize patients or knock them unconscious with a blow to the head. None of these methods, however, were particularly effective.' }
        ],
        [
          { type: 'text', text: '【Day 2】' }
        ],
        [
          { type: 'text', text: 'This all changed in 1846, when an American dentist named William Morton demonstrated the use of ether as an anesthetic. When inhaled, ether made Morton\'s patient unconscious, ' },
          { type: 'grammar', text: 'allowing the dentist to operate', gid: 'G1' },
          { type: 'text', text: '. Upon waking up, the patient confirmed that he hadn\'t felt any pain during the procedure. It was a miraculous breakthrough, and within weeks, Liston started using ether in London.' }
        ],
        [
          { type: 'text', text: 'While ether clearly had massive benefits, it wasn\'t perfect. Breathing it in was very ' },
          { type: 'vocab', text: 'unpleasant', vid: 3 },
          { type: 'text', text: ', which often caused patients to cough or vomit, and it could easily catch fire. Chloroform soon started to be used instead, but finding the right ' },
          { type: 'vocab', text: 'dosage', vid: 4 },
          { type: 'text', text: ' proved to be difficult, as too much could cause a patient\'s death. The English physician John Snow experimented with different doses, carefully working out exactly how much should be used. He was so confident that he even gave chloroform to Queen Victoria when she gave birth in 1853.' }
        ],
        [
          { type: 'text', text: 'Today, anesthesia is an established part of modern medicine. It allows us to undergo important procedures in a safe and relatively comfortable way. ' },
          { type: 'pattern', text: 'We may take it for granted', pid: 'P1' },
          { type: 'text', text: ', but we should always remember how lucky we are to have it.' }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Without central heating during the brutal winter, the poor family's living conditions were incredibly ______.", options: ["A. miserable", "B. abstract", "C. competitive", "D. upscale"], answer: "A", explanation: "【選項解析】\n- (A) miserable (adj.) 悲慘的、痛苦的 (正解)\n- (B) abstract (adj.) 抽象的\n- (C) competitive (adj.) 競爭的\n- (D) upscale (adj.) 高檔的" },
      { id: 2, question: "The senior surgeon carefully explained the risks involved in the complex heart ______.", options: ["A. procedure", "B. combination", "C. compensation", "D. foundation"], answer: "A", explanation: "【選項解析】\n- (A) procedure (n.) 程序、手術過程 (正解)\n- (B) combination (n.) 組合\n- (C) compensation (n.) 補償\n- (D) foundation (n.) 基礎" },
      { id: 3, question: "Leaving the garbage out in the summer heat creates an extremely ______ odor.", options: ["A. unpleasant", "B. fluffy", "C. freezing", "D. adorable"], answer: "A", explanation: "【選項解析】\n- (A) unpleasant (adj.) 令人不快的、難聞的 (正解)\n- (B) fluffy (adj.) 蓬鬆的\n- (C) freezing (adj.) 酷寒的\n- (D) adorable (adj.) 可愛的" },
      { id: 4, question: "The pharmacist warned the patient not to exceed the recommended daily ______ of painkillers.", options: ["A. dosage", "B. identity", "C. mushroom", "D. landmark"], answer: "A", explanation: "【選項解析】\n- (A) dosage (n.) 劑量、服藥量 (正解)\n- (B) identity (n.) 身分\n- (C) mushroom (n.) 蘑菇\n- (D) landmark (n.) 地標" }
    ],
    cloze: {
      text: "Prior to the invention of surgical anesthetics, operating rooms were scenes of unimaginable horror. Patients were forcibly restrained [1] surgeons operated at breakneck speeds to minimize physical agony. Historical methods for numbing pain—ranging from heavy alcohol consumption [2] physical blows to the skull—proved largely ineffective. The medical landscape transformed forever in 1846 when an American dentist successfully utilized ether gas. Inhaling the substance rendered the patient completely unconscious, [3] doctors to slice tissue without triggering screams. Despite its revolutionary impact, ether was highly flammable and possessed an incredibly [4] odor. Consequently, physicians transitioned to chloroform. Determining the precise clinical [5] required extensive experimentation, as minor miscalculations could prove fatally toxic.",
      questions: [
        { id: 1, options: ["A. while", "B. unless", "C. despite", "D. because of"], answer: "A", explanation: "連接詞 while 表「當...之際」。" },
        { id: 2, options: ["A. to", "B. for", "C. with", "D. from"], answer: "A", explanation: "ranging from A to B 表「範圍從 A 到 B」。" },
        { id: 3, options: ["A. allowing", "B. allowed", "C. allows", "D. to allow"], answer: "A", explanation: "分詞構句表結果，主動允許用 allowing。" },
        { id: 4, options: ["A. unpleasant", "B. adorable", "C. abstract", "D. elegant"], answer: "A", explanation: "乙醚氣味「令人不快/難聞（unpleasant）」。" },
        { id: 5, options: ["A. dosage", "B. limitation", "C. variation", "D. compensation"], answer: "A", explanation: "精確的臨床「劑量（dosage）」。" }
      ]
    },
    wordBank: {
      words: ["(A) terrifying", "(B) inhaled", "(C) dosage", "(D) procedure", "(E) misery", "(F) unconscious", "(G) granted", "(H) miraculous", "(I) effective", "(J) speed"],
      passage: "Modern medicine shields humanity from intense physical [1] during surgical interventions. Before anesthetics, entering an operating theater was a deeply [2] ordeal. Patients were awake, necessitating extreme surgical [3] to shorten the unbearable suffering. Crude attempts to knock patients [4] using alcohol or physical trauma were scarcely [5]. The paradigm shifted when dentist William Morton introduced ether. When [6] through the lungs, it safely suspended consciousness. The patient later reported feeling absolutely zero pain during the invasive [7]. This [8] discovery swiftly swept across Europe. However, volatile ether was soon replaced by chloroform, forcing doctors to meticulously calculate the proper [9] to prevent accidental fatalities. Today, painless surgery is universally taken for [10].",
      answers: { 1: "E", 2: "A", 3: "J", 4: "F", 5: "I", 6: "B", 7: "D", 8: "H", 9: "C", 10: "G" }
    },
    discourse: {
      options: [
        "A. Determining the exact dosage proved exceptionally dangerous, as over-administration caused immediate death.",
        "B. They completely banned all surgical operations across the European continent.",
        "C. Before the 1840s, undergoing the surgeon's knife was an agonizing and traumatic waking nightmare.",
        "D. Anesthetics arguably represent the most merciful pharmacological innovation in human history.",
        "E. This monumental demonstration verified that complex operations could be performed entirely without pain."
      ],
      paragraphs: [
        "Humanity owes an immense debt of gratitude to the pioneers of modern pain relief. [1] By inducing temporary unconsciousness, these drugs revolutionized medical capability and compassion.",
        "[2] Held down by muscular assistants, patients endured raw surgical trauma while doctors worked frantically to finish within seconds. Makeshift painkillers like alcohol or head trauma provided minimal relief.",
        "The turning point arrived in 1846 when dentist William Morton successfully employed ether gas. [3] Surgeons worldwide rapidly adopted the miraculous vapor.",
        "Despite its efficacy, ether was highly flammable and induced severe vomiting. The medical community soon turned to chloroform. [4] Eventually, careful scientific calibration stabilized its usage, gifting the modern world with painless, safe surgical care."
      ],
      answers: { 1: "D", 2: "C", 3: "E", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "Prior to the invention of anesthesia, what was a surgeon's primary strategy for minimizing a patient's suffering?", options: ["A. Administering large doses of modern antibiotics", "B. Working with extreme speed to make the procedure as brief as possible", "C. Playing loud music to drown out the patient's screams", "D. Using laser technology instead of metal scalpels"], answer: "B", explanation: "Day 1 提到外科醫生專注於速度（focused on speed），以使痛苦盡可能短暫。" },
        { id: 2, question: "What medical breakthrough did American dentist William Morton demonstrate in 1846?", options: ["A. The successful invention of the electric toothbrush", "B. The use of inhaled ether as an anesthetic to render a patient unconscious during an operation", "C. The discovery of Penicillin", "D. The first successful heart transplant"], answer: "B", explanation: "Day 2 首段指出莫頓示範了將乙醚作為麻醉劑，吸入後使病人失去知覺順利動刀且無痛。" },
        { id: 3, question: "Why did the medical community eventually seek alternatives to ether, such as chloroform?", options: ["A. Ether was far too expensive to manufacture", "B. Breathing ether was highly unpleasant, caused vomiting, and was a severe fire hazard", "C. Ether permanently erased patients' memories", "D. Ether turned the patients' skin bright green"], answer: "B", explanation: "Day 2 第二段指出吸入乙醚非常不舒服、常導致咳嗽嘔吐，且極易著火（catch fire）。" },
        { id: 4, question: "What major challenge did early doctors face when utilizing chloroform?", options: ["A. It was entirely ineffective at stopping pain", "B. It evaporated too quickly in cold weather", "C. Finding the precise safe dosage was extremely difficult, and too much could be fatal", "D. It was illegal to use on anyone except royalty"], answer: "C", explanation: "Day 2 第二段提到尋找正確的劑量很困難，因為過量的氯仿可能會導致病人死亡（fatal）。" }
      ]
    }
  }
};

if (typeof window !== 'undefined') { window.MAGAZINE_UNITS_ALL202509 = MAGAZINE_UNITS_ALL202509; }

