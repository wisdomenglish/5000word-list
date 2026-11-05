// 空中美語 4U 11月號（課文 Unit 1-12 + News 1,2 + 封面，共 15 篇）
// 原始課文來源：空中美語4U11月號_文章彙整.docx（Google Drive，使用者逐字轉錄，掃描辨識錯誤已人工校對）。
// Unit 12 原雜誌本身即為文意選填題型（6 格、選項 A–F），挖空位置與選項取自原文，答案由 Claude 依上下文判斷；
// 其餘題型皆由 Claude 依黃金標準規範原創產製。單字題/克漏字正解字母與篇章結構填空對應從下筆就隨機打散，
// 並避免以正解的近義詞當干擾項（唯一解）。已逐一通過結構性驗證，但建議實際使用前仍抽查內容品質。
const MAGAZINE_UNITS_4U202511 = {
  "Unit 1": {
    title: "A World of Sandwiches in Every Bite",
    chineseTitle: "小小三明治 大大美味！",
    passage: `The sandwich is one of the world's most popular foods. Have you ever wondered about the origin of this famous dish?

The story begins in the 18th century with a British nobleman, John Montagu, whose title was the 4th Earl of Sandwich. As one famous tale goes, he was very fond of card games. He would spend countless hours at the card table. One problem was that stopping for a proper meal could interrupt the game. He wanted to keep playing while he ate, so he needed to hold his food in one hand. To solve this problem, Montagu requested a simple meal that had meat between two slices of bread. This way, he could eat with one hand and keep playing cards. He could also keep his fingers clean throughout the game.

At that time, nobles were often called by their titles. As people began asking for "the same as Sandwich," the dish gradually became known as a sandwich.

Today, people celebrate World Sandwich Day on November 3 to remember the creation of the sandwich. This specific date is said to be the birthday of John Montagu.

The spirit of this day is simple. It encourages everyone to enjoy this familiar dish in creative ways. A sandwich can be quick to make, plus it's filling and easy to carry. In fact, "sandwich" has a broad meaning, and there are many different types around the world.

One famous example is the club sandwich from the US. It is made with three slices of toast and is usually filled with chicken, bacon, lettuce, and tomato. Another is the Italian panini, which is commonly made with flat Italian bread, ham, cheese, tomato, and vegetables. It is often pressed and heated until the bread becomes crispy. In Vietnam, the bánh mì combines a baguette with meat and fresh vegetables. Vietnamese ingredients like pickled carrots and cilantro give bánh mì a fresh taste.

So, which sandwich will you try next?`,
    chineseTranslation: `三明治是世界上最受歡迎的食物之一。你是否曾經好奇這道知名料理的起源？

故事要從18世紀一位英國貴族約翰·蒙塔古說起，他的頭銜是第四代三明治伯爵。根據一則著名的傳說，他非常喜歡玩紙牌遊戲，常常在牌桌前一待就是好幾個小時。問題是，停下來好好吃一頓飯會打斷牌局。他想邊吃邊繼續玩，所以需要用一隻手拿著食物。為了解決這個問題，蒙塔古要人準備一份簡單的餐點：兩片麵包中間夾著肉。這樣一來，他就能用一隻手吃東西、繼續打牌，整場牌局手指也能保持乾淨。

當時，貴族常以頭銜相稱。當人們開始點「跟三明治（伯爵）一樣的」，這道料理就漸漸被稱為三明治了。

如今，人們會在11月3日慶祝世界三明治日，紀念三明治的誕生。據說這一天正是約翰·蒙塔古的生日。

這個節日的精神很簡單，就是鼓勵大家用有創意的方式享受這道熟悉的料理。三明治做起來快速，又有飽足感、方便攜帶。事實上，「三明治」的意義很廣，世界各地有許多不同的種類。

一個著名的例子是美國的總匯三明治，它用三片吐司製成，通常夾有雞肉、培根、生菜和番茄。另一個是義大利帕尼尼，通常用扁平的義式麵包、火腿、起司、番茄和蔬菜製成，常會壓製加熱直到麵包變得酥脆。在越南，越式法國麵包（bánh mì）結合了法國長棍麵包與肉類和新鮮蔬菜，醃紅蘿蔔和香菜等越南食材讓它吃起來格外清爽。

那麼，你下一個要嘗試哪一種三明治呢？`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "origin", pos: "n.", meaning: "起源", collocations: "the origin of… …的起源" },
        { id: 2, word: "nobleman", pos: "n.", meaning: "貴族", collocations: "a British nobleman 一位英國貴族" },
        { id: 3, word: "interrupt", pos: "v.", meaning: "打斷、中斷", collocations: "interrupt the game 打斷牌局" },
        { id: 4, word: "gradually", pos: "adv.", meaning: "逐漸地", collocations: "gradually became known as… 漸漸被稱為…" },
        { id: 5, word: "filling", pos: "adj.", meaning: "有飽足感的", collocations: "quick, filling and easy to carry 快速、有飽足感又方便攜帶" },
        { id: 6, word: "crispy", pos: "adj.", meaning: "酥脆的", collocations: "become crispy 變得酥脆" }
      ],
      grammarNotes: [
        { id: "G1", title: "關係代名詞 whose (所有格)", excerpt: "whose title was the 4th Earl of Sandwich", analysis: "whose 引導形容詞子句修飾 John Montagu，表「他的頭銜是…」，代替所有格 his。" },
        { id: "G2", title: "As 引導時間子句 (當…時)", excerpt: "As people began asking for \"the same as Sandwich,\"", analysis: "As 表「當…的時候、隨著…」，說明人們開始這樣點餐時，這道料理逐漸得名。" }
      ],
      patternNotes: [
        { id: "P1", title: "be fond of + N./V-ing (喜歡…)", excerpt: "he was very fond of card games", analysis: "be fond of 表「喜愛、愛好」，後接名詞或動名詞。" },
        { id: "P2", title: "keep + V-ing (持續做…)", excerpt: "He wanted to keep playing while he ate", analysis: "keep + V-ing 表「繼續、持續做某事」，說明他想邊吃邊玩不中斷。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `The sandwich is one of the world's most popular foods. Have you ever wondered about the ` },
          { type: 'vocab', text: `origin`, vid: 1 },
          { type: 'text', text: ` of this famous dish?` }
        ],
        [
          { type: 'text', text: `The story begins in the 18th century with a British ` },
          { type: 'vocab', text: `nobleman`, vid: 2 },
          { type: 'text', text: `, John Montagu, ` },
          { type: 'grammar', text: `whose title was the 4th Earl of Sandwich`, gid: 'G1' },
          { type: 'text', text: `. As one famous tale goes, ` },
          { type: 'pattern', text: `he was very fond of card games`, pid: 'P1' },
          { type: 'text', text: `. He would spend countless hours at the card table. One problem was that stopping for a proper meal could ` },
          { type: 'vocab', text: `interrupt`, vid: 3 },
          { type: 'text', text: ` the game. ` },
          { type: 'pattern', text: `He wanted to keep playing while he ate`, pid: 'P2' },
          { type: 'text', text: `, so he needed to hold his food in one hand. To solve this problem, Montagu requested a simple meal that had meat between two slices of bread. This way, he could eat with one hand and keep playing cards. He could also keep his fingers clean throughout the game.` }
        ],
        [
          { type: 'text', text: `At that time, nobles were often called by their titles. ` },
          { type: 'grammar', text: `As people began asking for "the same as Sandwich,"`, gid: 'G2' },
          { type: 'text', text: ` the dish ` },
          { type: 'vocab', text: `gradually`, vid: 4 },
          { type: 'text', text: ` became known as a sandwich.` }
        ],
        [
          { type: 'text', text: `Today, people celebrate World Sandwich Day on November 3 to remember the creation of the sandwich. This specific date is said to be the birthday of John Montagu.` }
        ],
        [
          { type: 'text', text: `The spirit of this day is simple. It encourages everyone to enjoy this familiar dish in creative ways. A sandwich can be quick to make, plus it's ` },
          { type: 'vocab', text: `filling`, vid: 5 },
          { type: 'text', text: ` and easy to carry. In fact, "sandwich" has a broad meaning, and there are many different types around the world.` }
        ],
        [
          { type: 'text', text: `One famous example is the club sandwich from the US. It is made with three slices of toast and is usually filled with chicken, bacon, lettuce, and tomato. Another is the Italian panini, which is commonly made with flat Italian bread, ham, cheese, tomato, and vegetables. It is often pressed and heated until the bread becomes ` },
          { type: 'vocab', text: `crispy`, vid: 6 },
          { type: 'text', text: `. In Vietnam, the bánh mì combines a baguette with meat and fresh vegetables. Vietnamese ingredients like pickled carrots and cilantro give bánh mì a fresh taste.` }
        ],
        [
          { type: 'text', text: `So, which sandwich will you try next?` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Nobody knows the exact ______ of this old folk song.", options: ["A. ending", "B. price", "C. origin", "D. volume"], answer: "C", explanation: "【選項解析】\n- (A) ending (n.) 結局\n- (B) price (n.) 價格\n- (C) origin (n.) 起源 (正解)\n- (D) volume (n.) 音量" },
      { id: 2, question: "Please don't ______ me while I'm talking on the phone.", options: ["A. interrupt", "B. repair", "C. invite", "D. describe"], answer: "A", explanation: "【選項解析】\n- (A) interrupt (v.) 打斷 (正解)\n- (B) repair (v.) 修理\n- (C) invite (v.) 邀請\n- (D) describe (v.) 描述" },
      { id: 3, question: "As spring arrived, the weather became ______ warmer day by day.", options: ["A. hardly", "B. seldom", "C. never", "D. gradually"], answer: "D", explanation: "【選項解析】\n- (A) hardly (adv.) 幾乎不\n- (B) seldom (adv.) 很少\n- (C) never (adv.) 從不\n- (D) gradually (adv.) 逐漸地 (正解)" },
      { id: 4, question: "This big bowl of beef noodles is very ______; I can't eat anything else.", options: ["A. light", "B. filling", "C. tiny", "D. cheap"], answer: "B", explanation: "【選項解析】\n- (A) light (adj.) 清淡的、份量少的\n- (B) filling (adj.) 有飽足感的 (正解)\n- (C) tiny (adj.) 極小的\n- (D) cheap (adj.) 便宜的" },
    ],
    cloze: {
      text: "The sandwich is named after John Montagu, a British nobleman [1] loved playing cards. He did not want to stop his games [2] meals, so he asked for meat between two slices of bread. This simple idea let him eat with one hand [3] keeping his fingers clean. Today, people [4] World Sandwich Day on November 3. Sandwiches remain popular because they are quick to make and easy [5].",
      questions: [
        { id: 1, options: ["A. which", "B. who", "C. whose", "D. where"], answer: "B", explanation: "who 引導形容詞子句修飾先行詞 nobleman（人），並在子句中作主詞。" },
        { id: 2, options: ["A. at", "B. on", "C. by", "D. for"], answer: "D", explanation: "stop … for meals 表「為了吃飯而停下」，for 表目的。" },
        { id: 3, options: ["A. while", "B. unless", "C. because", "D. until"], answer: "A", explanation: "while + V-ing 表「同時」，邊吃邊保持手指乾淨。" },
        { id: 4, options: ["A. celebrated", "B. celebrating", "C. celebrate", "D. to celebrate"], answer: "C", explanation: "主詞 people 搭配現在式動詞 celebrate，敘述現今的習慣。" },
        { id: 5, options: ["A. carry", "B. to carry", "C. carried", "D. carrying"], answer: "B", explanation: "easy to + V 表「容易…」，easy to carry 即「方便攜帶」。" },
      ]
    },
    wordBank: {
      words: ["(A) bacon", "(B) baguette", "(C) card", "(D) dish", "(E) crispy", "(F) ingredient", "(G) nobleman", "(H) origin", "(I) slice", "(J) title"],
      passage: "John Montagu was a British [1] who lived in the 18th century.\n\nHis [2] was the 4th Earl of Sandwich.\n\nHe loved to play [3] games for many hours.\n\nEach [4] of bread held the meat inside.\n\nFew people know the [5] of the word 'sandwich.'\n\nToday, the sandwich is a popular [6] around the world.\n\nA panini is pressed until its bread becomes [7].\n\nA club sandwich is usually filled with chicken, [8], lettuce, and tomato.\n\nThe bread of a bánh mì is a French [9].\n\nPickled carrots are one [10] that gives bánh mì its fresh taste.",
      answers: { 1: "G", 2: "J", 3: "C", 4: "I", 5: "H", 6: "D", 7: "E", 8: "A", 9: "B", 10: "F" }
    },
    discourse: {
      options: [
        "A. He asked for meat between two slices of bread so he could eat with one hand.",
        "B. In Vietnam, the bánh mì combines a baguette with meat and fresh vegetables.",
        "C. People celebrate it on November 3, which is said to be Montagu's birthday.",
        "D. Because nobles were called by their titles, the dish became known as a sandwich.",
        "E. Many people prefer to eat salad for lunch."
      ],
      paragraphs: [
        "The sandwich is one of the most popular foods in the world, and its story goes back to the 18th century.",
        "John Montagu, the 4th Earl of Sandwich, loved card games and did not want to stop playing to eat. [1] Soon, other people began asking for \"the same as Sandwich.\" [2]",
        "Today, the sandwich even has its own special day. [3]",
        "There are many kinds of sandwiches around the world. [4]"
      ],
      answers: { 1: "A", 2: "D", 3: "C", 4: "B" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How to make a club sandwich.", "B. Why card games are popular.", "C. The history of Vietnam.", "D. The origin of the sandwich and some famous types around the world."], answer: "D", explanation: "主旨題。文章先介紹三明治的起源，再介紹世界三明治日與各國有名的三明治。" },
        { id: 2, question: "Why did John Montagu want meat between two slices of bread?", options: ["A. He did not like vegetables.", "B. He wanted to keep playing cards while eating.", "C. Bread was cheap at that time.", "D. His doctor told him to."], answer: "B", explanation: "細節題。他「wanted to keep playing while he ate」，所以要能用一隻手拿著吃。" },
        { id: 3, question: "When is World Sandwich Day?", options: ["A. November 3.", "B. November 30.", "C. March 3.", "D. It changes every year."], answer: "A", explanation: "細節題。文中指出「people celebrate World Sandwich Day on November 3」。" },
        { id: 4, question: "Which sandwich is made with three slices of toast?", options: ["A. The panini.", "B. The bánh mì.", "C. The club sandwich.", "D. The baguette."], answer: "C", explanation: "細節題。總匯三明治「is made with three slices of toast」。" }
      ]
    }
  },

  "Unit 2": {
    title: "Breaking News! You Might Be Doomscrolling!",
    chineseTitle: "壞消息看不停？認識末日滑手機",
    passage: `"Just one more story," you tell yourself as you keep scrolling before bedtime. An hour passes without you noticing, and you are reading one upsetting news story after another.

This habit is called doomscrolling. The word became widely used in early 2020, during the first months of COVID-19. As lockdowns began, people stayed home, anxious for updates and glued to scary news online. Although the word doomscrolling is relatively new, the behavior is not—it comes from a basic human instinct.

Our brains are built to notice danger first. For our ancestors, this helped them react quickly and survive in the wild. Today, however, social media can turn that instinct into a trap. Alarming posts can cause worry or fear, and these emotions may keep people reading longer.

So, how do we break the habit? Set limits on your screen time, turn off news notifications, and choose to look for positive stories instead. Real-life connections with family and friends also calm the mind far better than scrolling ever could.`,
    chineseTranslation: `「再看一則就好。」睡前你一邊這樣告訴自己，一邊繼續往下滑。一個小時不知不覺過去了，你還在一則接一則地看令人不安的新聞。

這種習慣叫做「末日滑手機」（doomscrolling）。這個字在2020年初，也就是新冠肺炎爆發的頭幾個月開始被廣泛使用。隨著封城展開，人們待在家中，焦急地等待最新消息，緊盯著網路上可怕的新聞。雖然 doomscrolling 這個字相對較新，這種行為卻不新——它源自人類的一種基本本能。

我們的大腦天生會先注意到危險。對我們的祖先來說，這有助於他們在野外迅速反應、存活下來。然而如今，社群媒體可能把這種本能變成陷阱。令人擔憂的貼文會引起擔心或恐懼，而這些情緒可能讓人越看越久。

那麼，我們要如何戒掉這個習慣呢？為螢幕使用時間設下限制、關掉新聞通知，並選擇去找正面的故事。與家人朋友在現實生活中的連結，也遠比滑手機更能讓心情平靜。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "upsetting", pos: "adj.", meaning: "令人不安的、令人難過的", collocations: "upsetting news 令人不安的新聞" },
        { id: 2, word: "anxious", pos: "adj.", meaning: "焦慮的、渴望的", collocations: "anxious for updates 焦急地等待最新消息" },
        { id: 3, word: "instinct", pos: "n.", meaning: "本能", collocations: "a basic human instinct 人類的基本本能" },
        { id: 4, word: "ancestor", pos: "n.", meaning: "祖先", collocations: "our ancestors 我們的祖先" },
        { id: 5, word: "alarming", pos: "adj.", meaning: "令人擔憂的、驚人的", collocations: "alarming posts 令人擔憂的貼文" },
        { id: 6, word: "notification", pos: "n.", meaning: "通知", collocations: "turn off notifications 關閉通知" }
      ],
      grammarNotes: [
        { id: "G1", title: "without + O + V-ing (某人沒有…)", excerpt: "An hour passes without you noticing", analysis: "without 後接受詞 you 與動名詞 noticing，表「在你沒注意到的情況下」。" },
        { id: "G2", title: "省略重複部分的對比句", excerpt: "Although the word doomscrolling is relatively new, the behavior is not", analysis: "the behavior is not 後面省略了 relatively new，避免重複；Although 引導讓步子句形成對比。" }
      ],
      patternNotes: [
        { id: "P1", title: "be glued to… (緊盯著…)", excerpt: "glued to scary news online", analysis: "be glued to + N. 字面是「被黏在…上」，引申為「目不轉睛地盯著」。" },
        { id: "P2", title: "far + 比較級 (遠比…更…)", excerpt: "calm the mind far better than scrolling ever could", analysis: "far 修飾比較級 better，加強語氣表「遠比…好得多」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `"Just one more story," you tell yourself as you keep scrolling before bedtime. ` },
          { type: 'grammar', text: `An hour passes without you noticing`, gid: 'G1' },
          { type: 'text', text: `, and you are reading one ` },
          { type: 'vocab', text: `upsetting`, vid: 1 },
          { type: 'text', text: ` news story after another.` }
        ],
        [
          { type: 'text', text: `This habit is called doomscrolling. The word became widely used in early 2020, during the first months of COVID-19. As lockdowns began, people stayed home, ` },
          { type: 'vocab', text: `anxious`, vid: 2 },
          { type: 'text', text: ` for updates and ` },
          { type: 'pattern', text: `glued to scary news online`, pid: 'P1' },
          { type: 'text', text: `. ` },
          { type: 'grammar', text: `Although the word doomscrolling is relatively new, the behavior is not`, gid: 'G2' },
          { type: 'text', text: `—it comes from a basic human ` },
          { type: 'vocab', text: `instinct`, vid: 3 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `Our brains are built to notice danger first. For our ` },
          { type: 'vocab', text: `ancestors`, vid: 4 },
          { type: 'text', text: `, this helped them react quickly and survive in the wild. Today, however, social media can turn that instinct into a trap. ` },
          { type: 'vocab', text: `Alarming`, vid: 5 },
          { type: 'text', text: ` posts can cause worry or fear, and these emotions may keep people reading longer.` }
        ],
        [
          { type: 'text', text: `So, how do we break the habit? Set limits on your screen time, turn off news ` },
          { type: 'vocab', text: `notifications`, vid: 6 },
          { type: 'text', text: `, and choose to look for positive stories instead. Real-life connections with family and friends also ` },
          { type: 'pattern', text: `calm the mind far better than scrolling ever could`, pid: 'P2' },
          { type: 'text', text: `.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The ______ news about the accident made everyone in the class sad.", options: ["A. upsetting", "B. cheerful", "C. funny", "D. relaxing"], answer: "A", explanation: "【選項解析】\n- (A) upsetting (adj.) 令人難過的 (正解)\n- (B) cheerful (adj.) 令人愉快的\n- (C) funny (adj.) 好笑的\n- (D) relaxing (adj.) 令人放鬆的" },
      { id: 2, question: "She was so ______ about her test results that she couldn't sleep.", options: ["A. calm", "B. relaxed", "C. bored", "D. anxious"], answer: "D", explanation: "【選項解析】\n- (A) calm (adj.) 冷靜的\n- (B) relaxed (adj.) 放鬆的\n- (C) bored (adj.) 無聊的\n- (D) anxious (adj.) 焦慮的 (正解)" },
      { id: 3, question: "Newborn babies cry by ______; nobody has to teach them.", options: ["A. mistake", "B. instinct", "C. luck", "D. accident"], answer: "B", explanation: "【選項解析】\n- (A) by mistake 弄錯地\n- (B) by instinct 出於本能 (正解)\n- (C) by luck 靠運氣\n- (D) by accident 意外地" },
      { id: 4, question: "I turned off all the ______ on my phone so the messages wouldn't distract me while studying.", options: ["A. batteries", "B. cameras", "C. notifications", "D. speakers"], answer: "C", explanation: "【選項解析】\n- (A) batteries (n.) 電池\n- (B) cameras (n.) 相機\n- (C) notifications (n.) 通知 (正解)\n- (D) speakers (n.) 喇叭" },
    ],
    cloze: {
      text: "Many people keep scrolling through bad news late at night, [1] they know it makes them feel worse. This habit, [2] is called doomscrolling, became common in 2020. Our brains notice danger first, which once helped our ancestors [3] in the wild. To break the habit, we can turn off news notifications and spend more time [4] family and friends. Real-life connections calm the mind far better [5] scrolling does.",
      questions: [
        { id: 1, options: ["A. because", "B. unless", "C. even though", "D. so that"], answer: "C", explanation: "even though 表讓步「即使」：明知會更難受，仍繼續滑。" },
        { id: 2, options: ["A. which", "B. that", "C. what", "D. who"], answer: "A", explanation: "逗號後的非限定形容詞子句修飾事物 habit，只能用 which，不能用 that。" },
        { id: 3, options: ["A. survived", "B. surviving", "C. to surviving", "D. survive"], answer: "D", explanation: "help + 受詞 + 原形動詞（或 to V），helped our ancestors survive。" },
        { id: 4, options: ["A. on", "B. with", "C. at", "D. for"], answer: "B", explanation: "spend time with + 人 表「與某人共度時光」。" },
        { id: 5, options: ["A. as", "B. then", "C. to", "D. than"], answer: "D", explanation: "比較級 better 後接 than，表「比…更好」。" },
      ]
    },
    wordBank: {
      words: ["(A) alarming", "(B) ancestor", "(C) bedtime", "(D) danger", "(E) habit", "(F) instinct", "(G) limit", "(H) lockdown", "(I) positive", "(J) scroll"],
      passage: "Many people check their phones right before [1].\n\nOnce you start to [2] through the news, it is hard to stop.\n\nDoing something again and again can turn it into a [3].\n\nDuring the COVID-19 [4], people had to stay at home.\n\nOur brains are built to notice [5] first.\n\nYour great-great-grandfather is one [6] of yours.\n\nAnimals run from fire by [7]; no one has to teach them.\n\nHeadlines that are [8] can make readers feel worried.\n\nSet a [9] on how long you spend on your phone each day.\n\nLook for [10] stories that make you feel hopeful.",
      answers: { 1: "C", 2: "J", 3: "E", 4: "H", 5: "D", 6: "B", 7: "F", 8: "A", 9: "G", 10: "I" }
    },
    discourse: {
      options: [
        "A. Turning off news notifications and setting screen-time limits can help.",
        "B. The word became widely used in 2020, when lockdowns kept people at home.",
        "C. For our ancestors, this helped them react quickly and survive in the wild.",
        "D. Many news websites charge readers a monthly fee.",
        "E. You keep reading one upsetting story after another without noticing the time."
      ],
      paragraphs: [
        "Have you ever stayed up late reading bad news on your phone?",
        "Doomscrolling often happens right before bed. [1] The habit has a name, and the name is fairly new. [2]",
        "Our brains are built to notice danger first. [3] Today, however, social media can turn this instinct into a trap.",
        "Luckily, there are simple ways to break the habit. [4]"
      ],
      answers: { 1: "E", 2: "B", 3: "C", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. The history of COVID-19.", "B. What doomscrolling is, why it happens, and how to stop it.", "C. How social media companies make money.", "D. Why news reports are always negative."], answer: "B", explanation: "主旨題。全文說明末日滑手機的定義、成因與戒除方法。" },
        { id: 2, question: "When did the word doomscrolling become widely used?", options: ["A. In the 1990s.", "B. Before the internet existed.", "C. Last year.", "D. In early 2020."], answer: "D", explanation: "細節題。文中指出「The word became widely used in early 2020」。" },
        { id: 3, question: "Why are our brains built to notice danger first?", options: ["A. It helped our ancestors survive.", "B. Danger is more interesting than good news.", "C. Social media trained us to.", "D. We read too much news."], answer: "A", explanation: "細節題。這種本能「helped them react quickly and survive in the wild」。" },
        { id: 4, question: "Which of the following is NOT suggested as a way to break the habit?", options: ["A. Setting limits on screen time.", "B. Turning off news notifications.", "C. Reading more news before bed.", "D. Spending time with family and friends."], answer: "C", explanation: "細節題。文中建議設限、關通知、找正面故事、與親友相處，並未建議睡前多看新聞。" }
      ]
    }
  },

  "Unit 3": {
    title: "The Town Musicians of Bremen",
    chineseTitle: "《布萊梅樂隊》",
    passage: `Once upon a time, there was a donkey who worked at a mill in a small German town. As he grew old, his master planned to cast him aside. The donkey decided to leave and set out for the city of Bremen. There, he hoped to live freely as a town musician.

Along the way, he met animals in similar trouble. First, he found an old dog that nobody wanted because he couldn't hunt. Next, he met an old cat. His owner had almost drowned him because he couldn't catch mice. Finally, they met a rooster who was about to be made into soup the next day. The donkey welcomed them, and they traveled on together.

That evening, the four animals discovered a house in the forest. Inside, three robbers were enjoying a feast. The hungry animals hoped to earn a meal by performing. They climbed on top of one another outside the window and began to sing loudly. The robbers, however, were terrified by the strange music and ran away. Afterward, the animals feasted and settled in for the night.

At midnight, one of the robbers returned to the house to find out what had happened. He searched for a light to look around and noticed two glowing spots near the fireplace. He thought they were burning coals, so he held out a match and moved closer.

However, those spots were actually the cat's eyes. The cat scratched the robber's face. The man then cried out and tried to escape, but the dog chased him and bit his leg. The donkey kicked him as the rooster crowed above him, and the robber stumbled out in panic.

The robber never truly saw what was inside the house. Yet he claimed: "A witch scratched my face. A man stabbed my leg with a knife. A monster beat me with a club. A judge shouted from the roof about sending criminals to jail."

In the end, the robbers were too frightened to return to the house. The animals never reached Bremen to be town musicians, but they didn't need to worry about where to stay anymore. They had found themselves a home.`,
    chineseTranslation: `從前從前，德國一座小鎮的磨坊裡有一頭驢子在工作。驢子年紀漸長，主人打算把牠拋棄。驢子決定離開，動身前往布萊梅市，希望能在那裡自由自在地當個鎮上的樂手。

一路上，牠遇到了同樣處境艱難的動物。牠先是遇到一隻老狗，因為不會打獵而沒人要。接著，牠遇到一隻老貓，主人因為牠抓不到老鼠，差點把牠淹死。最後，牠們遇到一隻公雞，隔天就要被煮成湯了。驢子歡迎牠們加入，大家便一起繼續上路。

那天傍晚，四隻動物在森林裡發現一棟房子。屋裡有三個強盜正在享用大餐。飢腸轆轆的動物們希望靠表演換一頓飯。牠們在窗外一個疊一個，開始大聲唱歌。然而，強盜們被這奇怪的音樂嚇壞了，紛紛逃走。之後，動物們飽餐一頓，便安頓下來準備過夜。

半夜，其中一名強盜回到屋裡，想查明到底發生了什麼事。他找了個亮光四處查看，注意到壁爐附近有兩個發光的點。他以為那是燃燒中的炭火，便拿出火柴靠了過去。

然而，那兩個點其實是貓的眼睛。貓抓傷了強盜的臉。那人大叫一聲想要逃跑，狗卻追上去咬了他的腿。驢子踢了他一腳，公雞則在他上方啼叫，強盜驚慌失措地跌跌撞撞逃了出去。

強盜從沒真正看清屋裡有什麼，卻聲稱：「一個女巫抓傷了我的臉，一個男人拿刀刺我的腿，一個怪物拿棍子打我，還有一個法官在屋頂上大喊要把罪犯關進牢裡。」

最後，強盜們嚇得再也不敢回到那棟房子。動物們始終沒有抵達布萊梅成為鎮上的樂手，但牠們再也不必擔心沒地方住了——牠們為自己找到了一個家。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "mill", pos: "n.", meaning: "磨坊", collocations: "work at a mill 在磨坊工作" },
        { id: 2, word: "drown", pos: "v.", meaning: "淹死", collocations: "almost drowned him 差點把牠淹死" },
        { id: 3, word: "robber", pos: "n.", meaning: "強盜", collocations: "three robbers 三個強盜" },
        { id: 4, word: "feast", pos: "n.", meaning: "盛宴、大餐", collocations: "enjoy a feast 享用大餐" },
        { id: 5, word: "terrified", pos: "adj.", meaning: "非常害怕的", collocations: "be terrified by… 被…嚇壞" },
        { id: 6, word: "stumble", pos: "v.", meaning: "跌跌撞撞地走", collocations: "stumble out in panic 驚慌地跌撞而出" }
      ],
      grammarNotes: [
        { id: "G1", title: "be about to + 被動 (即將被…)", excerpt: "who was about to be made into soup the next day", analysis: "be about to + V 表「即將…」，接被動 be made into soup，表「即將被煮成湯」。" },
        { id: "G2", title: "what 引導名詞子句", excerpt: "The robber never truly saw what was inside the house", analysis: "what was inside the house 為名詞子句，作 saw 的受詞，表「屋裡有什麼」。" }
      ],
      patternNotes: [
        { id: "P1", title: "set out for + 地方 (動身前往…)", excerpt: "set out for the city of Bremen", analysis: "set out for 表「出發前往某地」。" },
        { id: "P2", title: "too + adj. + to V (太…而不能…)", excerpt: "the robbers were too frightened to return to the house", analysis: "too … to 表「太…以致於不能…」，強盜嚇得不敢回去。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Once upon a time, there was a donkey who worked at a ` },
          { type: 'vocab', text: `mill`, vid: 1 },
          { type: 'text', text: ` in a small German town. As he grew old, his master planned to cast him aside. The donkey decided to leave and ` },
          { type: 'pattern', text: `set out for the city of Bremen`, pid: 'P1' },
          { type: 'text', text: `. There, he hoped to live freely as a town musician.` }
        ],
        [
          { type: 'text', text: `Along the way, he met animals in similar trouble. First, he found an old dog that nobody wanted because he couldn't hunt. Next, he met an old cat. His owner had almost ` },
          { type: 'vocab', text: `drowned`, vid: 2 },
          { type: 'text', text: ` him because he couldn't catch mice. Finally, they met a rooster ` },
          { type: 'grammar', text: `who was about to be made into soup the next day`, gid: 'G1' },
          { type: 'text', text: `. The donkey welcomed them, and they traveled on together.` }
        ],
        [
          { type: 'text', text: `That evening, the four animals discovered a house in the forest. Inside, three ` },
          { type: 'vocab', text: `robbers`, vid: 3 },
          { type: 'text', text: ` were enjoying a ` },
          { type: 'vocab', text: `feast`, vid: 4 },
          { type: 'text', text: `. The hungry animals hoped to earn a meal by performing. They climbed on top of one another outside the window and began to sing loudly. The robbers, however, were ` },
          { type: 'vocab', text: `terrified`, vid: 5 },
          { type: 'text', text: ` by the strange music and ran away. Afterward, the animals feasted and settled in for the night.` }
        ],
        [
          { type: 'text', text: `At midnight, one of the robbers returned to the house to find out what had happened. He searched for a light to look around and noticed two glowing spots near the fireplace. He thought they were burning coals, so he held out a match and moved closer.` }
        ],
        [
          { type: 'text', text: `However, those spots were actually the cat's eyes. The cat scratched the robber's face. The man then cried out and tried to escape, but the dog chased him and bit his leg. The donkey kicked him as the rooster crowed above him, and the robber ` },
          { type: 'vocab', text: `stumbled`, vid: 6 },
          { type: 'text', text: ` out in panic.` }
        ],
        [
          { type: 'grammar', text: `The robber never truly saw what was inside the house`, gid: 'G2' },
          { type: 'text', text: `. Yet he claimed: "A witch scratched my face. A man stabbed my leg with a knife. A monster beat me with a club. A judge shouted from the roof about sending criminals to jail."` }
        ],
        [
          { type: 'text', text: `In the end, ` },
          { type: 'pattern', text: `the robbers were too frightened to return to the house`, pid: 'P2' },
          { type: 'text', text: `. The animals never reached Bremen to be town musicians, but they didn't need to worry about where to stay anymore. They had found themselves a home.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The farmer took his wheat to the ______ to be ground into flour.", options: ["A. library", "B. mill", "C. stadium", "D. museum"], answer: "B", explanation: "【選項解析】\n- (A) library (n.) 圖書館\n- (B) mill (n.) 磨坊 (正解)\n- (C) stadium (n.) 體育場\n- (D) museum (n.) 博物館" },
      { id: 2, question: "The lifeguard saved a boy who almost ______ in the deep pool.", options: ["A. danced", "B. laughed", "C. drowned", "D. slept"], answer: "C", explanation: "【選項解析】\n- (A) danced (v.) 跳舞\n- (B) laughed (v.) 大笑\n- (C) drowned (v.) 淹死 (正解)\n- (D) slept (v.) 睡覺" },
      { id: 3, question: "The little kids were ______ by the loud thunder and hid under the bed.", options: ["A. terrified", "B. delighted", "C. bored", "D. amused"], answer: "A", explanation: "【選項解析】\n- (A) terrified (adj.) 非常害怕的 (正解)\n- (B) delighted (adj.) 高興的\n- (C) bored (adj.) 無聊的\n- (D) amused (adj.) 覺得好笑的" },
      { id: 4, question: "He ______ over a rock in the dark and almost fell to the ground.", options: ["A. slept", "B. sang", "C. read", "D. stumbled"], answer: "D", explanation: "【選項解析】\n- (A) slept (v.) 睡覺\n- (B) sang (v.) 唱歌\n- (C) read (v.) 閱讀\n- (D) stumbled (v.) 絆倒、跌跌撞撞 (正解)" },
    ],
    cloze: {
      text: "An old donkey decided to leave his master and [1] for Bremen. On the way, he met a dog, a cat, and a rooster, and all of [2] were in trouble. That night, they found a house [3] three robbers were eating dinner. The animals sang so loudly [4] the robbers ran away in fear. Later, one robber came back, but the animals attacked him. After that, the robbers were too frightened [5] again.",
      questions: [
        { id: 1, options: ["A. set out", "B. give up", "C. put on", "D. take after"], answer: "A", explanation: "set out for + 地方 表「動身前往某地」。" },
        { id: 2, options: ["A. which", "B. whom", "C. them", "D. whose"], answer: "C", explanation: "前面已有連接詞 and，後面是獨立子句，用受格代名詞 them 作介系詞 of 的受詞。" },
        { id: 3, options: ["A. which", "B. when", "C. what", "D. where"], answer: "D", explanation: "where 引導形容詞子句修飾地點 house，子句本身結構完整。" },
        { id: 4, options: ["A. as", "B. that", "C. so", "D. than"], answer: "B", explanation: "so + adv. + that 表「如此…以致於…」。" },
        { id: 5, options: ["A. return", "B. returning", "C. to return", "D. returned"], answer: "C", explanation: "too + adj. + to V 表「太…而不能…」。" },
      ]
    },
    wordBank: {
      words: ["(A) coal", "(B) crow", "(C) feast", "(D) fireplace", "(E) master", "(F) mill", "(G) musician", "(H) panic", "(I) robber", "(J) witch"],
      passage: "The donkey had worked hard at a [1] for many years.\n\nWhen he grew old, his [2] no longer wanted him.\n\nHe hoped to become a town [3] in Bremen.\n\nInside the house, the robbers were enjoying a big [4] of food.\n\nA [5] is someone who steals things from other people.\n\nThe cat sat quietly near the [6] in the dark.\n\nThe robber thought the cat's eyes were burning pieces of [7].\n\nRoosters usually [8] early in the morning.\n\nThe robber ran out of the house in [9].\n\nHe told his friends that a [10] had scratched his face.",
      answers: { 1: "F", 2: "E", 3: "G", 4: "C", 5: "I", 6: "D", 7: "A", 8: "B", 9: "H", 10: "J" }
    },
    discourse: {
      options: [
        "A. The robbers were frightened by the strange noise and ran away.",
        "B. Along the way, he met a dog, a cat, and a rooster that also had nowhere to go.",
        "C. Bremen is a city in the north of Germany.",
        "D. In the dark, the cat scratched him, the dog bit him, and the donkey kicked him.",
        "E. The animals never reached Bremen, but they found a home instead."
      ],
      paragraphs: [
        "An old donkey ran away from his master and set out for Bremen to become a musician.",
        "He did not travel alone for long. [1] Together, they continued their journey.",
        "That evening, they found a house where robbers were having a feast. The animals sang loudly to earn a meal. [2] Later, one robber came back to look around. [3]",
        "After that night, the robbers never returned to the house. [4]"
      ],
      answers: { 1: "B", 2: "A", 3: "D", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the story mainly about?", options: ["A. How robbers steal from houses.", "B. Why donkeys work at mills.", "C. How four unwanted animals scared off robbers and found a home.", "D. The history of the city of Bremen."], answer: "C", explanation: "主旨題。四隻被主人嫌棄的動物合力嚇跑強盜，最後找到了家。" },
        { id: 2, question: "Why did the cat's owner almost drown him?", options: ["A. He couldn't catch mice.", "B. He was too noisy.", "C. He bit the owner.", "D. He was sick."], answer: "A", explanation: "細節題。主人差點淹死牠「because he couldn't catch mice」。" },
        { id: 3, question: "What did the robber think the cat's eyes were?", options: ["A. Stars in the sky.", "B. Two candles.", "C. A witch's eyes.", "D. Burning coals."], answer: "D", explanation: "細節題。他「thought they were burning coals」。" },
        { id: 4, question: "What can be inferred about the robber's story?", options: ["A. It was completely true.", "B. He described the animals as scary people because he could not see them clearly.", "C. A real judge lived on the roof.", "D. He wanted to go back to the house."], answer: "B", explanation: "推論題。強盜在黑暗中沒看清楚，便把貓、狗、驢子和公雞說成女巫、拿刀的男人、怪物和法官。" }
      ]
    }
  },

  "News 1": {
    title: "The Secret Power of Garlic: How It Keeps Insects Away",
    chineseTitle: "不是因為氣味！科學家揭開大蒜驅蚊蟲祕密",
    passage: `Garlic has long been used to keep insects away. Now, scientists have found a possible reason why it works.

Fruit flies usually mate and lay their eggs on fruit. A team at Yale University in the US wondered whether something in fruit made the insects want to breed. To find out, they tested 43 fruits and vegetables and watched the insects' breeding behavior. The results were surprising. Garlic did the opposite: it stopped the flies from mating and reproducing due to a powerful compound called diallyl disulfide. In fact, it is the taste of the garlic, not the smell, that repels these insects. Diallyl disulfide activates TrpA1, a taste receptor that tells an insect its food is bitter. The chemical also switches on a gene that makes the insect feel full.

Since flies mate and lay their eggs on their food, a food source that tastes bitter and leaves them feeling full is not a place they want to stay. They simply move on and breed somewhere else.

These findings offer an exciting new way to fight dangerous pests that spread diseases. In the future, garlic-based products might replace harsh chemical pesticides, giving us eco-friendly ways to protect our crops and public health.`,
    chineseTranslation: `長久以來，大蒜一直被用來驅趕昆蟲。如今，科學家找到了它之所以有效的可能原因。

果蠅通常在水果上交配、產卵。美國耶魯大學的一個團隊想知道，水果中是否有某種成分讓這些昆蟲想要繁殖。為了找出答案，他們測試了43種水果和蔬菜，並觀察昆蟲的繁殖行為。結果令人意外：大蒜的效果恰恰相反——由於一種名為二烯丙基二硫的強效化合物，大蒜讓果蠅停止交配與繁殖。事實上，驅趕這些昆蟲的是大蒜的味道，而不是氣味。二烯丙基二硫會活化 TrpA1，這是一種味覺受器，會告訴昆蟲牠的食物是苦的。這種化學物質還會開啟一個讓昆蟲感到飽足的基因。

由於果蠅會在食物上交配和產卵，一個嚐起來苦、又讓牠們覺得飽的食物來源，就不是牠們想停留的地方。牠們乾脆離開，到別處去繁殖。

這些發現為對抗傳播疾病的危險害蟲提供了令人興奮的新方法。未來，以大蒜製成的產品或許能取代刺激性的化學殺蟲劑，讓我們用環保的方式保護農作物與公共衛生。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "mate", pos: "v.", meaning: "交配", collocations: "mate and lay eggs 交配並產卵" },
        { id: 2, word: "breed", pos: "v.", meaning: "繁殖", collocations: "want to breed 想要繁殖" },
        { id: 3, word: "compound", pos: "n.", meaning: "化合物", collocations: "a powerful compound 一種強效化合物" },
        { id: 4, word: "repel", pos: "v.", meaning: "驅趕、擊退", collocations: "repel insects 驅趕昆蟲" },
        { id: 5, word: "receptor", pos: "n.", meaning: "受器", collocations: "a taste receptor 味覺受器" },
        { id: 6, word: "pesticide", pos: "n.", meaning: "殺蟲劑", collocations: "chemical pesticides 化學殺蟲劑" }
      ],
      grammarNotes: [
        { id: "G1", title: "分裂句 It is … that … (強調)", excerpt: "it is the taste of the garlic, not the smell, that", analysis: "It is + 強調部分 + that… 為分裂句，強調「是味道而不是氣味」趕走了昆蟲。" },
        { id: "G2", title: "Since 引導原因子句 (由於…)", excerpt: "Since flies mate and lay their eggs on their food", analysis: "Since 表「因為、既然」，說明果蠅會離開的原因。" }
      ],
      patternNotes: [
        { id: "P1", title: "keep + O + away (使…遠離)", excerpt: "keep insects away", analysis: "keep sth away 表「讓某物遠離、驅趕」。" },
        { id: "P2", title: "stop + O + from + V-ing (阻止…做…)", excerpt: "it stopped the flies from mating and reproducing", analysis: "stop / prevent + 受詞 + from + V-ing 表「阻止某人／某物做某事」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Garlic has long been used to ` },
          { type: 'pattern', text: `keep insects away`, pid: 'P1' },
          { type: 'text', text: `. Now, scientists have found a possible reason why it works.` }
        ],
        [
          { type: 'text', text: `Fruit flies usually ` },
          { type: 'vocab', text: `mate`, vid: 1 },
          { type: 'text', text: ` and lay their eggs on fruit. A team at Yale University in the US wondered whether something in fruit made the insects want to ` },
          { type: 'vocab', text: `breed`, vid: 2 },
          { type: 'text', text: `. To find out, they tested 43 fruits and vegetables and watched the insects' breeding behavior. The results were surprising. Garlic did the opposite: ` },
          { type: 'pattern', text: `it stopped the flies from mating and reproducing`, pid: 'P2' },
          { type: 'text', text: ` due to a powerful ` },
          { type: 'vocab', text: `compound`, vid: 3 },
          { type: 'text', text: ` called diallyl disulfide. In fact, ` },
          { type: 'grammar', text: `it is the taste of the garlic, not the smell, that`, gid: 'G1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `repels`, vid: 4 },
          { type: 'text', text: ` these insects. Diallyl disulfide activates TrpA1, a taste ` },
          { type: 'vocab', text: `receptor`, vid: 5 },
          { type: 'text', text: ` that tells an insect its food is bitter. The chemical also switches on a gene that makes the insect feel full.` }
        ],
        [
          { type: 'grammar', text: `Since flies mate and lay their eggs on their food`, gid: 'G2' },
          { type: 'text', text: `, a food source that tastes bitter and leaves them feeling full is not a place they want to stay. They simply move on and breed somewhere else.` }
        ],
        [
          { type: 'text', text: `These findings offer an exciting new way to fight dangerous pests that spread diseases. In the future, garlic-based products might replace harsh chemical ` },
          { type: 'vocab', text: `pesticides`, vid: 6 },
          { type: 'text', text: `, giving us eco-friendly ways to protect our crops and public health.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Many birds build nests and ______ in the spring.", options: ["A. melt", "B. vanish", "C. retire", "D. breed"], answer: "D", explanation: "【選項解析】\n- (A) melt (v.) 融化\n- (B) vanish (v.) 消失\n- (C) retire (v.) 退休\n- (D) breed (v.) 繁殖 (正解)" },
      { id: 2, question: "This spray will ______ mosquitoes, so they won't bite you.", options: ["A. attract", "B. repel", "C. feed", "D. invite"], answer: "B", explanation: "【選項解析】\n- (A) attract (v.) 吸引\n- (B) repel (v.) 驅趕 (正解)\n- (C) feed (v.) 餵食\n- (D) invite (v.) 邀請" },
      { id: 3, question: "Farmers use ______ to kill the insects that damage their crops.", options: ["A. fertilizers", "B. vitamins", "C. pesticides", "D. perfumes"], answer: "C", explanation: "【選項解析】\n- (A) fertilizers (n.) 肥料\n- (B) vitamins (n.) 維他命\n- (C) pesticides (n.) 殺蟲劑 (正解)\n- (D) perfumes (n.) 香水" },
      { id: 4, question: "Salt is a chemical ______ made of sodium and chlorine.", options: ["A. compound", "B. receptor", "C. dessert", "D. machine"], answer: "A", explanation: "【選項解析】\n- (A) compound (n.) 化合物 (正解)\n- (B) receptor (n.) 受器\n- (C) dessert (n.) 甜點\n- (D) machine (n.) 機器" },
    ],
    cloze: {
      text: "Scientists at Yale University tested 43 fruits and vegetables to see [1] anything in fruit made fruit flies want to breed. They found that garlic did the opposite. A compound in garlic stopped the flies [2] mating. Surprisingly, it was the taste, not the smell, [3] kept the insects away. The bitter taste also made the flies feel full, so they moved on [4] their eggs somewhere else. In the future, garlic-based products may [5] harsh chemical pesticides.",
      questions: [
        { id: 1, options: ["A. whether", "B. that", "C. what", "D. which"], answer: "A", explanation: "whether 引導名詞子句作 see 的受詞，表「是否」有任何東西讓果蠅想繁殖。" },
        { id: 2, options: ["A. from", "B. to", "C. with", "D. at"], answer: "A", explanation: "stop + 受詞 + from + V-ing 表「阻止…做…」。" },
        { id: 3, options: ["A. what", "B. who", "C. when", "D. that"], answer: "D", explanation: "分裂句 It was … that …，強調「是味道」趕走了昆蟲。" },
        { id: 4, options: ["A. lay", "B. laid", "C. to lay", "D. laying"], answer: "C", explanation: "不定詞 to lay 表目的：離開「去」別處產卵。" },
        { id: 5, options: ["A. require", "B. replace", "C. produce", "D. spread"], answer: "B", explanation: "replace 表「取代」：大蒜產品可能取代化學殺蟲劑。" },
      ]
    },
    wordBank: {
      words: ["(A) bitter", "(B) breed", "(C) chemical", "(D) crop", "(E) disease", "(F) eco-friendly", "(G) full", "(H) gene", "(I) insect", "(J) pest"],
      passage: "A fruit fly is a small [1] that is often found near fruit.\n\nAnimals usually [2] in places where their babies will have food.\n\nScientists mix one [3] with another to see how they react.\n\nThis medicine tastes [4], so many children don't like it.\n\nAfter a big meal, you feel [5] and don't want to eat more.\n\nEach [6] carries information that decides how a living thing grows.\n\nMosquitoes can spread a serious [7] such as malaria.\n\nA rat is a [8] that can damage food in big cities.\n\nRice is the most important [9] in many parts of Asia.\n\nUsing cloth bags instead of plastic ones is an [10] choice.",
      answers: { 1: "I", 2: "B", 3: "C", 4: "A", 5: "G", 6: "H", 7: "E", 8: "J", 9: "D", 10: "F" }
    },
    discourse: {
      options: [
        "A. Since flies mate and lay eggs on their food, they leave and breed somewhere else.",
        "B. Researchers at Yale tested 43 fruits and vegetables to study the flies' behavior.",
        "C. Garlic-based products might one day replace harsh chemical pesticides.",
        "D. Garlic is also a popular ingredient in Italian cooking.",
        "E. The compound activates a taste receptor that tells insects their food is bitter."
      ],
      paragraphs: [
        "People have used garlic to keep insects away for a long time, and scientists may now know why.",
        "Fruit flies usually mate and lay their eggs on fruit. [1] They found that a compound in garlic stopped the flies from mating.",
        "Surprisingly, it is the taste of garlic, not its smell, that matters. [2] Food that tastes bitter and makes flies feel full is not a good place to stay. [3]",
        "These findings could help us fight pests that spread diseases. [4]"
      ],
      answers: { 1: "B", 2: "E", 3: "A", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the news report mainly about?", options: ["A. Why garlic keeps insects away and how this could be used.", "B. How to cook with garlic.", "C. Why fruit flies love fruit.", "D. How Yale University was founded."], answer: "A", explanation: "主旨題。報導說明大蒜驅蟲的原因，以及未來可能的應用。" },
        { id: 2, question: "What did the Yale team test?", options: ["A. 43 kinds of insects.", "B. Different garlic recipes.", "C. 43 fruits and vegetables.", "D. Chemical pesticides."], answer: "C", explanation: "細節題。他們「tested 43 fruits and vegetables」。" },
        { id: 3, question: "According to the study, what repels the insects?", options: ["A. The smell of garlic.", "B. The taste of garlic.", "C. The color of garlic.", "D. The shape of garlic."], answer: "B", explanation: "細節題。「it is the taste of the garlic, not the smell, that repels these insects」。" },
        { id: 4, question: "How might these findings be used in the future?", options: ["A. To make garlic taste sweeter.", "B. To help fruit flies breed faster.", "C. To raise more fruit flies for research.", "D. To create eco-friendly ways to protect crops."], answer: "D", explanation: "推論題。大蒜產品可能取代化學殺蟲劑，提供保護農作物的環保方法。" }
      ]
    }
  },

  "Unit 4": {
    title: "A Closer Look at South Korea's Surprising Customs",
    chineseTitle: "韓國生活冷知識大公開！那些讓你意想不到的在地習俗",
    passage: `South Korea is internationally known for K-pop, dramas, and busy urban life. Yet there is another side that most people never see—one full of interesting traditions hidden in everyday moments.

Many South Korean families have a special refrigerator just for kimchi. Because kimchi continues to ferment over time, storing it properly can be tricky. A kimchi fridge keeps the temperature low, which slows fermentation and helps the flavor develop just right.

A bowl of soup can also tell a family story. On their birthdays, many South Koreans have seaweed soup. This tradition has a warm and meaningful background. South Korean mothers often eat seaweed soup after they give birth to help their bodies recover. When people have it on their birthday, they are also honoring their mother's love and care.

South Korean manners can also be seen when people drink together. In many social settings, people usually avoid pouring their own drinks. Instead, they fill one another's glasses. This small action helps people show respect and turns drinking into a shared act of consideration.

In South Korea, the first day in a new home often involves special traditions. After boxes are unpacked, many families order jajangmyeon for everyone who helped them move. Jajangmyeon is a noodle dish in a thick black-bean sauce. It is filling and easy to get delivered, so it has become a popular first meal in a new home. Guests may also bring toilet paper or laundry detergent as housewarming gifts. Toilet paper usually unrolls smoothly, so it suggests that life will go well. Laundry detergent makes a lot of bubbles that keep rising, which can stand for growing wealth and good fortune.

On college entrance exam day, the entire country comes together to support test-takers. Many companies open later to keep the roads clear for test-takers. The police often help those who are running late reach test centers on time. Some airlines even pause takeoffs and landings during the English listening test. This way, students are not disturbed by the noise.

Isn't it charming how a country's true character often hides in its smallest habits?`,
    chineseTranslation: `南韓以 K-pop、韓劇和忙碌的都市生活聞名國際。然而，它還有大多數人從未見過的另一面——充滿了藏在日常生活中的有趣傳統。

許多南韓家庭都有一台專門放泡菜的冰箱。由於泡菜會隨著時間持續發酵，要妥善保存並不容易。泡菜冰箱能維持低溫，減緩發酵速度，讓風味發展得恰到好處。

一碗湯也能訴說一個家庭的故事。許多南韓人在生日當天會喝海帶湯。這個傳統有著溫暖而有意義的背景：南韓的媽媽們生產後常會喝海帶湯來幫助身體復原。人們在生日喝海帶湯，也是在感念母親的愛與照顧。

南韓人的禮節也能從一起喝酒時看出來。在許多社交場合，人們通常會避免替自己倒酒，而是為彼此斟滿酒杯。這個小動作能幫助人們表達尊重，也讓喝酒變成一種彼此體貼的共同行為。

在南韓，搬進新家的第一天常伴隨著特別的傳統。紙箱拆完後，許多家庭會為所有幫忙搬家的人叫炸醬麵。炸醬麵是一道裹著濃稠黑豆醬的麵食，既有飽足感又方便外送，因此成了新家第一餐的熱門選擇。客人也可能帶衛生紙或洗衣精當作喬遷禮物。衛生紙通常能順順地展開，象徵生活一帆風順；洗衣精會產生許多不斷往上冒的泡泡，可以代表財富增長與好運。

在大學入學考試當天，全國上下一起為考生加油。許多公司會延後上班，讓道路保持暢通供考生通行。警察常會幫助快遲到的考生準時抵達考場。有些航空公司甚至會在英文聽力測驗期間暫停飛機起降，這樣考生就不會受到噪音干擾。

一個國家真正的性格，常常就藏在它最小的習慣裡，這不是很迷人嗎？`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "ferment", pos: "v.", meaning: "發酵", collocations: "continue to ferment 持續發酵" },
        { id: 2, word: "tricky", pos: "adj.", meaning: "棘手的、不容易的", collocations: "can be tricky 可能不容易" },
        { id: 3, word: "recover", pos: "v.", meaning: "復原、康復", collocations: "help their bodies recover 幫助身體復原" },
        { id: 4, word: "honor", pos: "v.", meaning: "向…表示敬意、紀念", collocations: "honor their mother's love 感念母親的愛" },
        { id: 5, word: "detergent", pos: "n.", meaning: "清潔劑、洗衣精", collocations: "laundry detergent 洗衣精" },
        { id: 6, word: "disturb", pos: "v.", meaning: "打擾、干擾", collocations: "be disturbed by the noise 被噪音干擾" }
      ],
      grammarNotes: [
        { id: "G1", title: "非限定 which 指整個前句", excerpt: "which slows fermentation and helps the flavor develop just right", analysis: "逗號後的 which 指前面整句「冰箱保持低溫」這件事，補充說明其效果。" },
        { id: "G2", title: "否定疑問句＋虛主詞 it", excerpt: "Isn't it charming how a country's true character often hides in its smallest habits", analysis: "Isn't it…? 為否定疑問句，期待對方同意；it 是虛主詞，真主詞是 how 引導的名詞子句。" }
      ],
      patternNotes: [
        { id: "P1", title: "avoid + V-ing (避免…)", excerpt: "avoid pouring their own drinks", analysis: "avoid 後面只能接動名詞，表「避免做某事」。" },
        { id: "P2", title: "stand for… (代表、象徵)", excerpt: "stand for growing wealth and good fortune", analysis: "stand for 表「代表、象徵」，泡泡上升象徵財富增長。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `South Korea is internationally known for K-pop, dramas, and busy urban life. Yet there is another side that most people never see—one full of interesting traditions hidden in everyday moments.` }
        ],
        [
          { type: 'text', text: `Many South Korean families have a special refrigerator just for kimchi. Because kimchi continues to ` },
          { type: 'vocab', text: `ferment`, vid: 1 },
          { type: 'text', text: ` over time, storing it properly can be ` },
          { type: 'vocab', text: `tricky`, vid: 2 },
          { type: 'text', text: `. A kimchi fridge keeps the temperature low, ` },
          { type: 'grammar', text: `which slows fermentation and helps the flavor develop just right`, gid: 'G1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `A bowl of soup can also tell a family story. On their birthdays, many South Koreans have seaweed soup. This tradition has a warm and meaningful background. South Korean mothers often eat seaweed soup after they give birth to help their bodies ` },
          { type: 'vocab', text: `recover`, vid: 3 },
          { type: 'text', text: `. When people have it on their birthday, they are also ` },
          { type: 'vocab', text: `honoring`, vid: 4 },
          { type: 'text', text: ` their mother's love and care.` }
        ],
        [
          { type: 'text', text: `South Korean manners can also be seen when people drink together. In many social settings, people usually ` },
          { type: 'pattern', text: `avoid pouring their own drinks`, pid: 'P1' },
          { type: 'text', text: `. Instead, they fill one another's glasses. This small action helps people show respect and turns drinking into a shared act of consideration.` }
        ],
        [
          { type: 'text', text: `In South Korea, the first day in a new home often involves special traditions. After boxes are unpacked, many families order jajangmyeon for everyone who helped them move. Jajangmyeon is a noodle dish in a thick black-bean sauce. It is filling and easy to get delivered, so it has become a popular first meal in a new home. Guests may also bring toilet paper or laundry ` },
          { type: 'vocab', text: `detergent`, vid: 5 },
          { type: 'text', text: ` as housewarming gifts. Toilet paper usually unrolls smoothly, so it suggests that life will go well. Laundry detergent makes a lot of bubbles that keep rising, which can ` },
          { type: 'pattern', text: `stand for growing wealth and good fortune`, pid: 'P2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `On college entrance exam day, the entire country comes together to support test-takers. Many companies open later to keep the roads clear for test-takers. The police often help those who are running late reach test centers on time. Some airlines even pause takeoffs and landings during the English listening test. This way, students are not ` },
          { type: 'vocab', text: `disturbed`, vid: 6 },
          { type: 'text', text: ` by the noise.` }
        ],
        [
          { type: 'grammar', text: `Isn't it charming how a country's true character often hides in its smallest habits`, gid: 'G2' },
          { type: 'text', text: `?` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "If you leave grape juice for a long time, it may ______ and slowly turn into wine.", options: ["A. ferment", "B. evaporate", "C. shrink", "D. explode"], answer: "A", explanation: "【選項解析】\n- (A) ferment (v.) 發酵 (正解)\n- (B) evaporate (v.) 蒸發\n- (C) shrink (v.) 縮小\n- (D) explode (v.) 爆炸" },
      { id: 2, question: "Getting the cat into its carrier can be ______ because it hates traveling.", options: ["A. simple", "B. relaxing", "C. pleasant", "D. tricky"], answer: "D", explanation: "【選項解析】\n- (A) simple (adj.) 簡單的\n- (B) relaxing (adj.) 令人放鬆的\n- (C) pleasant (adj.) 愉快的\n- (D) tricky (adj.) 棘手的 (正解)" },
      { id: 3, question: "It took him two months to ______ from his knee injury.", options: ["A. graduate", "B. recover", "C. retire", "D. borrow"], answer: "B", explanation: "【選項解析】\n- (A) graduate (v.) 畢業\n- (B) recover (v.) 康復 (正解)\n- (C) retire (v.) 退休\n- (D) borrow (v.) 借入" },
      { id: 4, question: "Please keep your voice down so you don't ______ the sleeping baby.", options: ["A. feed", "B. hug", "C. disturb", "D. carry"], answer: "C", explanation: "【選項解析】\n- (A) feed (v.) 餵\n- (B) hug (v.) 擁抱\n- (C) disturb (v.) 打擾 (正解)\n- (D) carry (v.) 抱、攜帶" },
    ],
    cloze: {
      text: "In South Korea, many families keep a special fridge just [1] kimchi. On birthdays, people eat seaweed soup to honor their mothers, [2] often eat it after giving birth. When drinking together, people avoid [3] their own glasses. After moving into a new home, families often order noodles for everyone [4] helped them. On exam day, some airlines even pause flights so that students are not [5] by the noise.",
      questions: [
        { id: 1, options: ["A. by", "B. to", "C. at", "D. for"], answer: "D", explanation: "a fridge just for kimchi 表「專門用來放泡菜的冰箱」。" },
        { id: 2, options: ["A. which", "B. who", "C. whose", "D. what"], answer: "B", explanation: "who 引導非限定形容詞子句修飾 mothers（人），並在子句中作主詞。" },
        { id: 3, options: ["A. filling", "B. to fill", "C. fill", "D. filled"], answer: "A", explanation: "avoid 後接動名詞，avoid filling 表「避免倒滿」。" },
        { id: 4, options: ["A. which", "B. whom", "C. who", "D. whose"], answer: "C", explanation: "who 引導形容詞子句修飾 everyone，並在子句中作主詞。" },
        { id: 5, options: ["A. disturb", "B. disturbing", "C. to disturb", "D. disturbed"], answer: "D", explanation: "be + 過去分詞為被動語態，students are not disturbed 表「學生不被打擾」。" },
      ]
    },
    wordBank: {
      words: ["(A) birthday", "(B) bubble", "(C) detergent", "(D) exam", "(E) fridge", "(F) gift", "(G) noodle", "(H) respect", "(I) seaweed", "(J) wealth"],
      passage: "Kimchi is often kept in a special [1] to slow fermentation.\n\nMothers often eat [2] soup after giving birth.\n\nPeople pour drinks for one another to show [3].\n\nJajangmyeon is a [4] dish in a thick black-bean sauce.\n\nGuests often bring a small [5] when visiting a new home.\n\nLaundry [6] is used to wash clothes.\n\nEach [7] in the soapy water rose higher and higher.\n\nRising bubbles can stand for growing [8] and good fortune.\n\nOn the day of the college entrance [9], some airlines pause flights.\n\nOn your [10], your mother may cook you something special.",
      answers: { 1: "E", 2: "I", 3: "H", 4: "G", 5: "F", 6: "C", 7: "B", 8: "J", 9: "D", 10: "A" }
    },
    discourse: {
      options: [
        "A. Guests also bring toilet paper or laundry detergent as housewarming gifts.",
        "B. Many families have a special fridge that slows the fermentation of kimchi.",
        "C. On exam day, some airlines pause flights during the English listening test.",
        "D. K-pop groups often perform at stadiums around the world.",
        "E. People also avoid pouring their own drinks and fill one another's glasses instead."
      ],
      paragraphs: [
        "Beyond K-pop and dramas, South Korea has many interesting everyday traditions.",
        "Food plays an important role in these customs. [1] On birthdays, people eat seaweed soup to honor their mothers.",
        "Good manners matter, too. [2] Moving into a new home also comes with special customs, such as eating jajangmyeon together. [3]",
        "Sometimes, the whole country works together to help others. [4]"
      ],
      answers: { 1: "B", 2: "E", 3: "A", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How to make kimchi at home.", "B. Some surprising everyday customs in South Korea.", "C. Why K-pop is popular around the world.", "D. How Korean students study English."], answer: "B", explanation: "主旨題。文章介紹南韓日常生活中令人意外的各種習俗。" },
        { id: 2, question: "Why do many South Koreans eat seaweed soup on their birthdays?", options: ["A. It is the cheapest soup.", "B. It helps them study better.", "C. It is the only soup they like.", "D. To honor their mothers' love and care."], answer: "D", explanation: "細節題。在生日喝海帶湯「they are also honoring their mother's love and care」。" },
        { id: 3, question: "What does toilet paper as a housewarming gift suggest?", options: ["A. That life will go smoothly.", "B. That the family will become rich.", "C. That the guests are polite.", "D. That the house is clean."], answer: "A", explanation: "細節題。衛生紙順順展開，「suggests that life will go well」。" },
        { id: 4, question: "Which of the following is NOT mentioned as something done on exam day?", options: ["A. Companies open later.", "B. Police help students who are running late.", "C. Schools give students free lunch.", "D. Airlines pause takeoffs and landings."], answer: "C", explanation: "細節題。文中提到公司延後上班、警察協助、航空公司暫停起降，並未提到學校提供免費午餐。" }
      ]
    }
  },

  "Unit 5": {
    title: "The UK's Tobacco and Vapes Act: A Bold Step Toward a Smoke-Free Future",
    chineseTitle: "邁向無菸世代！英國通過《菸草與電子菸法案》",
    passage: `The UK has taken a major step toward creating a smoke-free generation. In April 2026, the UK officially passed the Tobacco and Vapes Act. People born on or after January 1, 2009, will never be able to legally buy tobacco in the UK. This law is expected to come into force on January 1, 2027.

The Tobacco and Vapes Act gives the UK government more power to control how tobacco and vaping products are sold. For example, it may set rules on how these products are displayed and marketed. The law also aims to make vapes less attractive to young people by controlling flavors, packaging, and advertising.

Supporters say the law will protect young people from nicotine dependence and future health problems. However, some argue that once people become adults, they should be free to make their own choices. There are also concerns that tighter restrictions may lead to illegal sales.

Only time will tell if this law will achieve its goals. For now, the whole world is watching to see what happens next.`,
    chineseTranslation: `英國朝打造無菸世代邁出了一大步。2026年4月，英國正式通過《菸草與電子菸法案》。2009年1月1日當天或之後出生的人，將永遠無法在英國合法購買菸草。這項法律預計於2027年1月1日生效。

《菸草與電子菸法案》賦予英國政府更大的權力，管控菸草與電子菸產品的販售方式。例如，政府可以規定這些產品如何陳列與行銷。這項法律也打算透過管控口味、包裝與廣告，讓電子菸對年輕人不再那麼有吸引力。

支持者表示，這項法律能保護年輕人免於尼古丁依賴與未來的健康問題。然而，也有人主張，人一旦成年，就應該可以自由地做自己的選擇。另外也有人擔心，更嚴格的限制可能導致非法販售。

這項法律能否達成目標，只有時間能證明。目前，全世界都在關注接下來的發展。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "generation", pos: "n.", meaning: "世代", collocations: "a smoke-free generation 無菸世代" },
        { id: 2, word: "legally", pos: "adv.", meaning: "合法地", collocations: "legally buy tobacco 合法購買菸草" },
        { id: 3, word: "market", pos: "v.", meaning: "行銷、推銷", collocations: "displayed and marketed 陳列與行銷" },
        { id: 4, word: "attractive", pos: "adj.", meaning: "有吸引力的", collocations: "less attractive to young people 對年輕人較沒吸引力" },
        { id: 5, word: "dependence", pos: "n.", meaning: "依賴", collocations: "nicotine dependence 尼古丁依賴" },
        { id: 6, word: "restriction", pos: "n.", meaning: "限制", collocations: "tighter restrictions 更嚴格的限制" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞片語修飾名詞", excerpt: "People born on or after January 1, 2009,", analysis: "born on or after… 是過去分詞片語，修飾 People，等於 People who were born on or after…。" },
        { id: "G2", title: "once 引導條件／時間子句 (一旦…)", excerpt: "once people become adults, they should be free to make their own choices", analysis: "once 作連接詞表「一旦…就…」，說明成年後應能自由選擇。" }
      ],
      patternNotes: [
        { id: "P1", title: "come into force (生效)", excerpt: "come into force on January 1, 2027", analysis: "come into force 用於法律、規定，表「開始生效」。" },
        { id: "P2", title: "Only time will tell (只有時間能證明)", excerpt: "Only time will tell", analysis: "固定說法，表「現在還無法確定，要等時間來證明」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `The UK has taken a major step toward creating a smoke-free ` },
          { type: 'vocab', text: `generation`, vid: 1 },
          { type: 'text', text: `. In April 2026, the UK officially passed the Tobacco and Vapes Act. ` },
          { type: 'grammar', text: `People born on or after January 1, 2009,`, gid: 'G1' },
          { type: 'text', text: ` will never be able to ` },
          { type: 'vocab', text: `legally`, vid: 2 },
          { type: 'text', text: ` buy tobacco in the UK. This law is expected to ` },
          { type: 'pattern', text: `come into force on January 1, 2027`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The Tobacco and Vapes Act gives the UK government more power to control how tobacco and vaping products are sold. For example, it may set rules on how these products are displayed and ` },
          { type: 'vocab', text: `marketed`, vid: 3 },
          { type: 'text', text: `. The law also aims to make vapes less ` },
          { type: 'vocab', text: `attractive`, vid: 4 },
          { type: 'text', text: ` to young people by controlling flavors, packaging, and advertising.` }
        ],
        [
          { type: 'text', text: `Supporters say the law will protect young people from nicotine ` },
          { type: 'vocab', text: `dependence`, vid: 5 },
          { type: 'text', text: ` and future health problems. However, some argue that ` },
          { type: 'grammar', text: `once people become adults, they should be free to make their own choices`, gid: 'G2' },
          { type: 'text', text: `. There are also concerns that tighter ` },
          { type: 'vocab', text: `restrictions`, vid: 6 },
          { type: 'text', text: ` may lead to illegal sales.` }
        ],
        [
          { type: 'pattern', text: `Only time will tell`, pid: 'P2' },
          { type: 'text', text: ` if this law will achieve its goals. For now, the whole world is watching to see what happens next.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Smartphones changed the lives of a whole ______ of young people.", options: ["A. pair", "B. minute", "C. generation", "D. bottle"], answer: "C", explanation: "【選項解析】\n- (A) pair (n.) 一對\n- (B) minute (n.) 分鐘\n- (C) generation (n.) 世代 (正解)\n- (D) bottle (n.) 瓶子" },
      { id: 2, question: "In Taiwan, you must be at least 18 to ______ drive a car.", options: ["A. legally", "B. rarely", "C. loudly", "D. sadly"], answer: "A", explanation: "【選項解析】\n- (A) legally (adv.) 合法地 (正解)\n- (B) rarely (adv.) 很少\n- (C) loudly (adv.) 大聲地\n- (D) sadly (adv.) 悲傷地" },
      { id: 3, question: "The new phone has an ______ design that many teenagers love.", options: ["A. ugly", "B. boring", "C. outdated", "D. attractive"], answer: "D", explanation: "【選項解析】\n- (A) ugly (adj.) 醜的\n- (B) boring (adj.) 無聊的\n- (C) outdated (adj.) 過時的\n- (D) attractive (adj.) 有吸引力的 (正解)" },
      { id: 4, question: "The city put new ______ on fireworks to keep people safe during the festival.", options: ["A. rewards", "B. restrictions", "C. vacations", "D. compliments"], answer: "B", explanation: "【選項解析】\n- (A) rewards (n.) 獎勵\n- (B) restrictions (n.) 限制 (正解)\n- (C) vacations (n.) 假期\n- (D) compliments (n.) 讚美" },
    ],
    cloze: {
      text: "The UK has passed a new law [1] aims to create a smoke-free generation. People born on or after January 1, 2009, will never be able [2] tobacco legally. The law also gives the government more power to control [3] tobacco and vapes are sold. Supporters believe it will protect young people [4] nicotine dependence. Others, however, worry that the law may lead [5] illegal sales.",
      questions: [
        { id: 1, options: ["A. that", "B. what", "C. who", "D. where"], answer: "A", explanation: "that 引導形容詞子句修飾 law（事物），並在子句中作主詞。" },
        { id: 2, options: ["A. buy", "B. buying", "C. to buy", "D. bought"], answer: "C", explanation: "be able to + 原形動詞 表「能夠…」。" },
        { id: 3, options: ["A. what", "B. how", "C. which", "D. whom"], answer: "B", explanation: "how 引導名詞子句作 control 的受詞，表「如何被販售」；子句結構完整，不能用 what。" },
        { id: 4, options: ["A. at", "B. with", "C. into", "D. from"], answer: "D", explanation: "protect A from B 表「保護 A 免於 B」。" },
        { id: 5, options: ["A. to", "B. for", "C. on", "D. by"], answer: "A", explanation: "lead to + N. 表「導致…」。" },
      ]
    },
    wordBank: {
      words: ["(A) adult", "(B) advertising", "(C) display", "(D) flavor", "(E) freedom", "(F) health", "(G) illegal", "(H) nicotine", "(I) packaging", "(J) tobacco"],
      passage: "Cigarettes are made from dried [1] leaves.\n\nThe addictive chemical in cigarettes is called [2].\n\nSmoking can cause serious [3] problems.\n\nMango is a popular [4] of ice cream.\n\nPlain [5] with no colorful designs makes products less attractive.\n\nTV [6] can make young people want to try new products.\n\nShops may not [7] tobacco products where children can see them.\n\nSelling drugs is [8] in most countries.\n\nOnce you turn 18, you are considered an [9] in many countries.\n\nSome people say adults should have the [10] to make their own choices.",
      answers: { 1: "J", 2: "H", 3: "F", 4: "D", 5: "I", 6: "B", 7: "C", 8: "G", 9: "A", 10: "E" }
    },
    discourse: {
      options: [
        "A. Some argue that adults should be free to make their own choices.",
        "B. It also controls how vapes are flavored, packaged, and advertised.",
        "C. Only time will tell whether the law will achieve its goals.",
        "D. Many people in the UK enjoy drinking tea every afternoon.",
        "E. Anyone born on or after January 1, 2009, will never be able to legally buy tobacco."
      ],
      paragraphs: [
        "The UK has passed a new law that aims to create a smoke-free generation.",
        "Under the Tobacco and Vapes Act, the rules depend on a person's birth date. [1] The law also gives the government more power over how tobacco is sold. [2]",
        "Not everyone agrees with the law. Supporters say it will protect young people from nicotine dependence. [3]",
        "The law is expected to take effect in 2027. [4]"
      ],
      answers: { 1: "E", 2: "B", 3: "A", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the news report mainly about?", options: ["A. The history of tobacco in Europe.", "B. Why vapes are healthier than cigarettes.", "C. A new UK law on tobacco and vapes and the debate about it.", "D. How to quit smoking."], answer: "C", explanation: "主旨題。報導介紹英國新通過的菸草與電子菸法案，以及各方意見。" },
        { id: 2, question: "Who will never be able to legally buy tobacco in the UK?", options: ["A. People born on or after January 1, 2009.", "B. All adults.", "C. Tourists visiting the UK.", "D. People born before 2009."], answer: "A", explanation: "細節題。「People born on or after January 1, 2009, will never be able to legally buy tobacco」。" },
        { id: 3, question: "Which of the following is NOT mentioned as a way to make vapes less attractive?", options: ["A. Controlling flavors.", "B. Controlling packaging.", "C. Controlling advertising.", "D. Lowering prices."], answer: "D", explanation: "細節題。文中提到管控口味、包裝與廣告，並未提到降價（降價反而會更吸引人）。" },
        { id: 4, question: "What concern do some people have about the law?", options: ["A. It will make tobacco cheaper.", "B. Tighter rules may lead to illegal sales.", "C. It will take effect too early.", "D. It only affects adults."], answer: "B", explanation: "細節題。「There are also concerns that tighter restrictions may lead to illegal sales」。" }
      ]
    }
  },

  "Unit 6": {
    title: "Man Caves? She Sheds? A Space to Call Your Own",
    chineseTitle: "一方小空間 你的祕密基地在哪裡？",
    passage: `Everyone needs a place where they can slow down and regain some balance in life. It gives people room for leisure and quiet time away from everyday demands. In many homes, this need for personal space takes the form of man caves and she sheds.

The term man cave became popular in the 1990s. A man cave is usually a basement or a garage, and sometimes a spare room in the house. The room may include a large TV, a gaming system, or a comfortable couch. The owner may decorate the space with sports posters, movie memorabilia, instruments, or other treasured items.

At times, the owner might invite friends over to watch a game, share snacks, and catch up. When the owner is alone, he may listen to music, read, or simply do nothing at all. Either way, the space lets him unwind freely without disturbing others or being disturbed. More than a room for fun, the man cave becomes a personal retreat after a long day.

Popular since the 2010s, a she shed offers a similar escape. In Western countries, a she shed is often built outdoors in a yard or a garden. Where outdoor space is limited, it may simply be a spare room or a quiet corner indoors. Because it sits apart from the rest of the house, the owner can step away from interruptions.

A she shed is used for a wide range of activities, including painting, knitting, writing, and hosting friends. By spending time on things the owner enjoys, she can ease stress and return to daily life with a clearer mind.

Altogether, man caves and she sheds point to the same need: room to breathe. These names come from an older way of thinking, and not everyone likes them. They suggest that men and women always want different things. In reality, the need for personal space has nothing to do with gender. What matters is not the name, but the fact that everyone deserves a corner of their own.`,
    chineseTranslation: `每個人都需要一個能放慢腳步、重新找回生活平衡的地方。它讓人們有空間享受閒暇與安靜的時光，遠離日常生活的種種要求。在許多家庭裡，這種對個人空間的需求就以「男人窩」和「女人小屋」的形式出現。

「男人窩」這個詞在1990年代開始流行。男人窩通常是地下室或車庫，有時則是家中的一間空房。房間裡可能有大電視、遊戲主機或舒適的沙發。主人可能會用運動海報、電影紀念品、樂器或其他珍藏物品來布置這個空間。

有時候，主人會邀朋友來看比賽、分享零食、聊聊近況。獨處時，他可能聽音樂、看書，或乾脆什麼都不做。無論如何，這個空間讓他能自在地放鬆，既不打擾別人，也不被打擾。男人窩不只是玩樂的房間，更成了漫長一天後的私人避風港。

「女人小屋」從2010年代開始流行，提供了類似的逃離空間。在西方國家，女人小屋常蓋在戶外的院子或花園裡。在戶外空間有限的地方，它可能只是一間空房或室內安靜的一角。因為它與房子其他部分分開，主人可以遠離干擾。

女人小屋可以用來從事各式各樣的活動，包括畫畫、編織、寫作和招待朋友。透過花時間做自己喜歡的事，她可以紓解壓力，帶著更清晰的頭腦回到日常生活。

總之，男人窩和女人小屋指向同一個需求：喘息的空間。這些名稱來自比較舊的思維方式，並不是每個人都喜歡。它們暗示男人和女人總是想要不同的東西。事實上，對個人空間的需求與性別無關。重要的不是名稱，而是每個人都應該擁有一個屬於自己的角落。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "leisure", pos: "n.", meaning: "閒暇、休閒", collocations: "room for leisure 休閒的空間" },
        { id: 2, word: "spare", pos: "adj.", meaning: "空著的、多餘的", collocations: "a spare room 一間空房" },
        { id: 3, word: "memorabilia", pos: "n.", meaning: "紀念品", collocations: "movie memorabilia 電影紀念品" },
        { id: 4, word: "unwind", pos: "v.", meaning: "放鬆", collocations: "unwind freely 自在地放鬆" },
        { id: 5, word: "retreat", pos: "n.", meaning: "避風港、休憩處", collocations: "a personal retreat 私人避風港" },
        { id: 6, word: "interruption", pos: "n.", meaning: "打擾、干擾", collocations: "step away from interruptions 遠離干擾" }
      ],
      grammarNotes: [
        { id: "G1", title: "形容詞片語置於句首作補充說明", excerpt: "Popular since the 2010s, a she shed offers a similar escape", analysis: "Popular since the 2010s 是省略 Being 的形容詞片語，補充說明主詞 a she shed，等於 A she shed, which has been popular since the 2010s, …。" },
        { id: "G2", title: "what 名詞子句作主詞＋not A but B", excerpt: "What matters is not the name, but the fact that everyone deserves a corner of their own", analysis: "What matters 為名詞子句作主詞；not A but B 表「不是A而是B」；the fact that… 中 that 引導同位語子句說明 fact 的內容。" }
      ],
      patternNotes: [
        { id: "P1", title: "take the form of… (以…的形式出現)", excerpt: "takes the form of man caves and she sheds", analysis: "take the form of 表「以某種形式呈現」。" },
        { id: "P2", title: "have nothing to do with… (與…無關)", excerpt: "has nothing to do with gender", analysis: "have nothing to do with 表「和…沒有關係」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Everyone needs a place where they can slow down and regain some balance in life. It gives people room for ` },
          { type: 'vocab', text: `leisure`, vid: 1 },
          { type: 'text', text: ` and quiet time away from everyday demands. In many homes, this need for personal space ` },
          { type: 'pattern', text: `takes the form of man caves and she sheds`, pid: 'P1' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The term man cave became popular in the 1990s. A man cave is usually a basement or a garage, and sometimes a ` },
          { type: 'vocab', text: `spare`, vid: 2 },
          { type: 'text', text: ` room in the house. The room may include a large TV, a gaming system, or a comfortable couch. The owner may decorate the space with sports posters, movie ` },
          { type: 'vocab', text: `memorabilia`, vid: 3 },
          { type: 'text', text: `, instruments, or other treasured items.` }
        ],
        [
          { type: 'text', text: `At times, the owner might invite friends over to watch a game, share snacks, and catch up. When the owner is alone, he may listen to music, read, or simply do nothing at all. Either way, the space lets him ` },
          { type: 'vocab', text: `unwind`, vid: 4 },
          { type: 'text', text: ` freely without disturbing others or being disturbed. More than a room for fun, the man cave becomes a personal ` },
          { type: 'vocab', text: `retreat`, vid: 5 },
          { type: 'text', text: ` after a long day.` }
        ],
        [
          { type: 'grammar', text: `Popular since the 2010s, a she shed offers a similar escape`, gid: 'G1' },
          { type: 'text', text: `. In Western countries, a she shed is often built outdoors in a yard or a garden. Where outdoor space is limited, it may simply be a spare room or a quiet corner indoors. Because it sits apart from the rest of the house, the owner can step away from ` },
          { type: 'vocab', text: `interruptions`, vid: 6 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `A she shed is used for a wide range of activities, including painting, knitting, writing, and hosting friends. By spending time on things the owner enjoys, she can ease stress and return to daily life with a clearer mind.` }
        ],
        [
          { type: 'text', text: `Altogether, man caves and she sheds point to the same need: room to breathe. These names come from an older way of thinking, and not everyone likes them. They suggest that men and women always want different things. In reality, the need for personal space ` },
          { type: 'pattern', text: `has nothing to do with gender`, pid: 'P2' },
          { type: 'text', text: `. ` },
          { type: 'grammar', text: `What matters is not the name, but the fact that everyone deserves a corner of their own`, gid: 'G2' },
          { type: 'text', text: `.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "We keep a ______ bedroom upstairs so guests can stay overnight.", options: ["A. crowded", "B. spare", "C. broken", "D. missing"], answer: "B", explanation: "【選項解析】\n- (A) crowded (adj.) 擁擠的\n- (B) spare (adj.) 空著的 (正解)\n- (C) broken (adj.) 壞掉的\n- (D) missing (adj.) 不見的" },
      { id: 2, question: "After a long day at work, I like to ______ by listening to soft music.", options: ["A. argue", "B. hurry", "C. complain", "D. unwind"], answer: "D", explanation: "【選項解析】\n- (A) argue (v.) 爭吵\n- (B) hurry (v.) 趕快\n- (C) complain (v.) 抱怨\n- (D) unwind (v.) 放鬆 (正解)" },
      { id: 3, question: "The quiet mountain cabin is a ______ where we escape from busy city life.", options: ["A. highway", "B. factory", "C. retreat", "D. market"], answer: "C", explanation: "【選項解析】\n- (A) highway (n.) 公路\n- (B) factory (n.) 工廠\n- (C) retreat (n.) 休憩處 (正解)\n- (D) market (n.) 市場" },
      { id: 4, question: "Reading and gardening are my favorite ______ activities on weekends.", options: ["A. leisure", "B. medical", "C. military", "D. legal"], answer: "A", explanation: "【選項解析】\n- (A) leisure (n.) 休閒 (正解)\n- (B) medical (adj.) 醫療的\n- (C) military (adj.) 軍事的\n- (D) legal (adj.) 法律的" },
    ],
    cloze: {
      text: "Everyone needs a place [1] they can relax. For some men, this place is a man cave, a room filled with things they love. Some owners invite friends over, [2] others prefer to spend time there alone. A she shed is similar, but it is often built [3] in a yard or garden. These spaces let owners step away from interruptions and [4] stress. In the end, the need for personal space has nothing to do [5] gender.",
      questions: [
        { id: 1, options: ["A. which", "B. what", "C. where", "D. who"], answer: "C", explanation: "where 引導形容詞子句修飾 place，子句本身結構完整。" },
        { id: 2, options: ["A. while", "B. so", "C. because", "D. unless"], answer: "A", explanation: "while 表對比「而」：有些人邀朋友來，有些人則喜歡獨處。" },
        { id: 3, options: ["A. inside", "B. outdoors", "C. upstairs", "D. underground"], answer: "B", explanation: "依文意，女人小屋常蓋在「戶外」的院子或花園裡，outdoors 與 in a yard or garden 相符。" },
        { id: 4, options: ["A. raise", "B. cause", "C. create", "D. ease"], answer: "D", explanation: "ease stress 表「紓解壓力」；其他選項都會讓壓力增加。" },
        { id: 5, options: ["A. with", "B. for", "C. from", "D. by"], answer: "A", explanation: "have nothing to do with 為固定片語，表「與…無關」。" },
      ]
    },
    wordBank: {
      words: ["(A) balance", "(B) basement", "(C) couch", "(D) garden", "(E) gender", "(F) knit", "(G) poster", "(H) snack", "(I) stress", "(J) treasure"],
      passage: "A man cave is often in the [1] under the house.\n\nHe hung a sports [2] on the wall.\n\nShe lay down on the [3] to watch TV.\n\nPopcorn is my favorite [4] during movies.\n\nHer grandmother taught her how to [5] a scarf.\n\nShe built a small shed in her [6] among the flowers.\n\nSpending time alone can reduce [7] after a busy day.\n\nWork and rest must be in [8] for a healthy life.\n\nThis old guitar is a [9] I will never sell.\n\nThe need for personal space has nothing to do with [10].",
      answers: { 1: "B", 2: "G", 3: "C", 4: "H", 5: "F", 6: "D", 7: "I", 8: "A", 9: "J", 10: "E" }
    },
    discourse: {
      options: [
        "A. A she shed is often built in a yard or garden, away from the rest of the house.",
        "B. A man cave is usually a basement, a garage, or a spare room filled with things the owner loves.",
        "C. In reality, the need for personal space has nothing to do with gender.",
        "D. Many houses in the US have two-car garages.",
        "E. Owners can watch games with friends or simply enjoy time alone there."
      ],
      paragraphs: [
        "Everyone needs a place to slow down and find balance in life.",
        "For many men, this place is a man cave. [1] It is a space for both fun and rest. [2]",
        "Women have their own version, too. [3] There, they can paint, knit, write, or host friends.",
        "However, these names come from an older way of thinking. [4]"
      ],
      answers: { 1: "B", 2: "E", 3: "A", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. Why everyone needs a personal space, such as a man cave or a she shed.", "B. How to build a garage.", "C. The history of the 1990s.", "D. Why men and women always want different things."], answer: "A", explanation: "主旨題。文章介紹男人窩與女人小屋，並指出每個人都需要屬於自己的空間。" },
        { id: 2, question: "Where is a she shed often built in Western countries?", options: ["A. In a basement.", "B. On the roof.", "C. In a yard or a garden.", "D. In a garage."], answer: "C", explanation: "細節題。「a she shed is often built outdoors in a yard or a garden」。" },
        { id: 3, question: "What might someone do in a she shed?", options: ["A. Repair cars.", "B. Store sugar.", "C. Raise animals.", "D. Paint, knit, or write."], answer: "D", explanation: "細節題。女人小屋用於「painting, knitting, writing, and hosting friends」。" },
        { id: 4, question: "What is the writer's opinion about the names man cave and she shed?", options: ["A. They are perfect names.", "B. They come from an older way of thinking, and the need for space is not about gender.", "C. Only men need personal space.", "D. They should be used more often."], answer: "B", explanation: "推論題。作者認為這些名稱來自舊思維，對個人空間的需求與性別無關。" }
      ]
    }
  },

  "Unit 7": {
    title: "Ready, Set, Sell! Busy Day at the School Fair",
    chineseTitle: "校慶園遊會熱鬧開跑！",
    passage: `Narrator: (Ethan and Talia are making the final preparations for their class stand.)

Talia: Are we all set for tomorrow's 50th-anniversary school fair?

Ethan: I think so! Our lemonade stand is fully decorated.

Talia: Let's double-check our shifts and duties one last time. I'm at the stand with Sam from 10 a.m. to 1 p.m. You're taking orders in the afternoon, right?

Ethan: Yes. I'm scheduled to work from 1 p.m. to 3 p.m. I'll be handling the cashbox, managing the line, and taking orders.

Talia: Great, and Tracy will prepare the lemonade while you serve the customers.

Ethan: Exactly. Last year one person did everything, and people waited forever. Sharing the work this year should help the line move faster and keep the counter from getting too crowded.

Talia: Has anyone confirmed that all the ingredients have arrived?

Ethan: Yep, I checked an hour ago. They're safely stored in the refrigerator in the home economics room.

Talia: That's a relief. Now I just hope we can handle the rush smoothly tomorrow.

Ethan: Don't worry. We'll do great!

The day of the school fair

Narrator: (It's the day of the school fair. Ethan, Talia, and their classmates are working hard at their stand.)

Ethan: Hi, Talia. I'm here for my afternoon shift.

Talia: Thank goodness! Sam and I have been working nonstop since 10 a.m. My arms are so tired!

Ethan: You guys did a great job. You can take a break now. Leave the rest to us!

Talia: Thanks! It's pure chaos here. Kyle and Megan are helping mix the lemonade as fast as they can, but the line keeps getting longer.

Ethan: Don't worry. We're fully staffed. Do we still have enough ingredients?

Talia: The lemonade is selling rapidly. We are almost out of lemons!

Ethan: Wow, already?

Talia: At this rate, we will sell out early. That means a nice profit for our class fund!

Ethan: Awesome! I'll get to work. Go enjoy the fair and have some fun!

Talia: I will. Best of luck with the afternoon rush!`,
    chineseTranslation: `旁白：（Ethan 和 Talia 正在為他們班的攤位做最後的準備。）

Talia：明天的50週年校慶園遊會，我們都準備好了嗎？

Ethan：我想是吧！我們的檸檬汁攤位已經布置好了。

Talia：我們最後再確認一次輪班和分工吧。我上午10點到下午1點跟 Sam 一起顧攤，你下午負責接單，對吧？

Ethan：對。我排的是下午1點到3點。我會負責收銀箱、管理排隊人潮和接單。

Talia：太好了，你招呼客人的時候，Tracy 會負責調檸檬汁。

Ethan：沒錯。去年一個人包辦所有事情，大家等到天荒地老。今年分工合作，應該能讓隊伍消化得更快，櫃檯也不會太擁擠。

Talia：有人確認過所有食材都送到了嗎？

Ethan：有，我一個小時前檢查過了。都好好地放在家政教室的冰箱裡。

Talia：那我就放心了。現在只希望明天能順利應付人潮。

Ethan：別擔心，我們一定會做得很好的！

園遊會當天

旁白：（今天是園遊會。Ethan、Talia 和同學們正在攤位上努力工作。）

Ethan：嗨，Talia。我來接下午的班了。

Talia：謝天謝地！Sam 和我從上午10點就一直忙個不停，我的手臂好痠！

Ethan：你們做得很棒。現在可以休息了，剩下的交給我們吧！

Talia：謝啦！這裡簡直一團亂。Kyle 和 Megan 正在用最快的速度幫忙調檸檬汁，但隊伍還是越排越長。

Ethan：別擔心，我們人手很充足。食材還夠嗎？

Talia：檸檬汁賣得超快，檸檬快用完了！

Ethan：哇，已經快沒了？

Talia：照這個速度，我們會提早賣完。這表示我們的班費會有一筆不錯的收入！

Ethan：太棒了！我要開始工作了。你去逛逛園遊會，好好玩吧！

Talia：我會的。下午的人潮就祝你們好運了！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "anniversary", pos: "n.", meaning: "週年紀念", collocations: "50th-anniversary school fair 50週年校慶園遊會" },
        { id: 2, word: "shift", pos: "n.", meaning: "輪班、班次", collocations: "an afternoon shift 下午的班" },
        { id: 3, word: "confirm", pos: "v.", meaning: "確認", collocations: "confirm that… 確認…" },
        { id: 4, word: "ingredient", pos: "n.", meaning: "食材、原料", collocations: "all the ingredients 所有食材" },
        { id: 5, word: "chaos", pos: "n.", meaning: "混亂", collocations: "pure chaos 一團混亂" },
        { id: 6, word: "profit", pos: "n.", meaning: "利潤、收益", collocations: "a nice profit 不錯的收益" }
      ],
      grammarNotes: [
        { id: "G1", title: "動名詞片語作主詞＋help + O + V", excerpt: "Sharing the work this year should help the line move faster", analysis: "Sharing the work this year 為動名詞片語作主詞；help + 受詞 + 原形動詞，表「幫助…更快移動」。" },
        { id: "G2", title: "現在完成進行式", excerpt: "Sam and I have been working nonstop since 10 a.m.", analysis: "have been + V-ing 搭配 since，表示從過去某時一直持續到現在、仍在進行的動作。" }
      ],
      patternNotes: [
        { id: "P1", title: "be scheduled to + V (預定…)", excerpt: "I'm scheduled to work from 1 p.m. to 3 p.m.", analysis: "be scheduled to 表「按照安排、預定要…」。" },
        { id: "P2", title: "be (almost) out of + N. (快用完…)", excerpt: "We are almost out of lemons", analysis: "be out of 表「用完、缺少」，almost 表「快要」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Narrator: (Ethan and Talia are making the final preparations for their class stand.)\n\nTalia: Are we all set for tomorrow's 50th-` },
          { type: 'vocab', text: `anniversary`, vid: 1 },
          { type: 'text', text: ` school fair?\n\nEthan: I think so! Our lemonade stand is fully decorated.\n\nTalia: Let's double-check our ` },
          { type: 'vocab', text: `shifts`, vid: 2 },
          { type: 'text', text: ` and duties one last time. I'm at the stand with Sam from 10 a.m. to 1 p.m. You're taking orders in the afternoon, right?\n\nEthan: Yes. ` },
          { type: 'pattern', text: `I'm scheduled to work from 1 p.m. to 3 p.m.`, pid: 'P1' },
          { type: 'text', text: ` I'll be handling the cashbox, managing the line, and taking orders.\n\nTalia: Great, and Tracy will prepare the lemonade while you serve the customers.\n\nEthan: Exactly. Last year one person did everything, and people waited forever. ` },
          { type: 'grammar', text: `Sharing the work this year should help the line move faster`, gid: 'G1' },
          { type: 'text', text: ` and keep the counter from getting too crowded.\n\nTalia: Has anyone ` },
          { type: 'vocab', text: `confirmed`, vid: 3 },
          { type: 'text', text: ` that all the ` },
          { type: 'vocab', text: `ingredients`, vid: 4 },
          { type: 'text', text: ` have arrived?\n\nEthan: Yep, I checked an hour ago. They're safely stored in the refrigerator in the home economics room.\n\nTalia: That's a relief. Now I just hope we can handle the rush smoothly tomorrow.\n\nEthan: Don't worry. We'll do great!\n\nThe day of the school fair\n\nNarrator: (It's the day of the school fair. Ethan, Talia, and their classmates are working hard at their stand.)\n\nEthan: Hi, Talia. I'm here for my afternoon shift.\n\nTalia: Thank goodness! ` },
          { type: 'grammar', text: `Sam and I have been working nonstop since 10 a.m.`, gid: 'G2' },
          { type: 'text', text: ` My arms are so tired!\n\nEthan: You guys did a great job. You can take a break now. Leave the rest to us!\n\nTalia: Thanks! It's pure ` },
          { type: 'vocab', text: `chaos`, vid: 5 },
          { type: 'text', text: ` here. Kyle and Megan are helping mix the lemonade as fast as they can, but the line keeps getting longer.\n\nEthan: Don't worry. We're fully staffed. Do we still have enough ingredients?\n\nTalia: The lemonade is selling rapidly. ` },
          { type: 'pattern', text: `We are almost out of lemons`, pid: 'P2' },
          { type: 'text', text: `!\n\nEthan: Wow, already?\n\nTalia: At this rate, we will sell out early. That means a nice ` },
          { type: 'vocab', text: `profit`, vid: 6 },
          { type: 'text', text: ` for our class fund!\n\nEthan: Awesome! I'll get to work. Go enjoy the fair and have some fun!\n\nTalia: I will. Best of luck with the afternoon rush!` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "My parents will celebrate their 20th wedding ______ next month.", options: ["A. graduation", "B. vacation", "C. interview", "D. anniversary"], answer: "D", explanation: "【選項解析】\n- (A) graduation (n.) 畢業\n- (B) vacation (n.) 假期\n- (C) interview (n.) 面試\n- (D) anniversary (n.) 週年紀念 (正解)" },
      { id: 2, question: "The nurse works the night ______ at the hospital this week.", options: ["A. menu", "B. shift", "C. ticket", "D. bill"], answer: "B", explanation: "【選項解析】\n- (A) menu (n.) 菜單\n- (B) shift (n.) 輪班 (正解)\n- (C) ticket (n.) 票\n- (D) bill (n.) 帳單" },
      { id: 3, question: "Please ______ your hotel booking by email before Friday.", options: ["A. confirm", "B. forget", "C. destroy", "D. borrow"], answer: "A", explanation: "【選項解析】\n- (A) confirm (v.) 確認 (正解)\n- (B) forget (v.) 忘記\n- (C) destroy (v.) 破壞\n- (D) borrow (v.) 借" },
      { id: 4, question: "The store earned a big ______ by selling winter coats during the cold wave.", options: ["A. noise", "B. hole", "C. profit", "D. tunnel"], answer: "C", explanation: "【選項解析】\n- (A) noise (n.) 噪音\n- (B) hole (n.) 洞\n- (C) profit (n.) 利潤 (正解)\n- (D) tunnel (n.) 隧道" },
    ],
    cloze: {
      text: "Ethan and Talia's class is running a lemonade stand at the school fair. Talia works [1] 10 a.m. to 1 p.m., and Ethan takes the afternoon shift. Last year, one person did everything, [2] made customers wait a long time. This year, they are sharing the work so that the line will move [3]. On the day of the fair, the lemonade sells so quickly that they are almost [4] of lemons. Talia is happy because the money will go [5] their class fund.",
      questions: [
        { id: 1, options: ["A. at", "B. from", "C. since", "D. by"], answer: "B", explanation: "from … to … 表時間範圍「從…到…」。" },
        { id: 2, options: ["A. what", "B. that", "C. who", "D. which"], answer: "D", explanation: "逗號後的非限定子句用 which 指前面整件事（一個人包辦一切）。" },
        { id: 3, options: ["A. faster", "B. slowest", "C. slow", "D. fastest"], answer: "A", explanation: "與去年相比，用比較級 faster 表「更快」。" },
        { id: 4, options: ["A. off", "B. away", "C. out", "D. down"], answer: "C", explanation: "be out of + N. 表「用完…」。" },
        { id: 5, options: ["A. by", "B. to", "C. on", "D. at"], answer: "B", explanation: "go to + N. 表「歸入、交給…」，收入進到班費。" },
      ]
    },
    wordBank: {
      words: ["(A) cashbox", "(B) chaos", "(C) customer", "(D) decorate", "(E) fund", "(F) ingredient", "(G) lemonade", "(H) line", "(I) refrigerator", "(J) shift"],
      passage: "Their class is selling [1] at the school fair.\n\nThey used balloons to [2] the stand.\n\nEthan works the afternoon [3] from 1 p.m. to 3 p.m.\n\nThe money is kept safely in the [4].\n\nEach [5] has to wait in line to order.\n\nSugar is one important [6] in lemonade.\n\nThe lemons are stored in the [7] to keep them fresh.\n\nThe [8] of people waiting kept getting longer.\n\nWith so many people shouting orders, it was pure [9].\n\nThe money they earn goes into the class [10].",
      answers: { 1: "G", 2: "D", 3: "J", 4: "A", 5: "C", 6: "F", 7: "I", 8: "H", 9: "B", 10: "E" }
    },
    discourse: {
      options: [
        "A. Talia and Sam have been working nonstop since 10 a.m.",
        "B. This year, the work is shared so the line can move faster.",
        "C. The ingredients are safely stored in a refrigerator.",
        "D. Talia plans to buy a new bike with her pocket money.",
        "E. They are almost out of lemons, so they may sell out early."
      ],
      paragraphs: [
        "Ethan and Talia's class is running a lemonade stand at the school fair.",
        "The day before the fair, they check their plans. Last year, one person did everything, and customers waited forever. [1] They also make sure everything they need has arrived. [2]",
        "On the day of the fair, the stand is very busy. [3] When Ethan arrives, he tells Talia to take a break.",
        "The lemonade is selling quickly. [4] That means a nice profit for the class fund."
      ],
      answers: { 1: "B", 2: "C", 3: "A", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the conversation mainly about?", options: ["A. How to make lemonade.", "B. Why school fairs are boring.", "C. A fight between two classmates.", "D. Two students preparing for and working at their class stand at the school fair."], answer: "D", explanation: "主旨題。對話描述兩人在園遊會前一天的準備，以及當天顧攤的情形。" },
        { id: 2, question: "When is Ethan's shift?", options: ["A. From 1 p.m. to 3 p.m.", "B. From 10 a.m. to 1 p.m.", "C. All day.", "D. In the evening."], answer: "A", explanation: "細節題。Ethan 說「I'm scheduled to work from 1 p.m. to 3 p.m.」。" },
        { id: 3, question: "Why did they decide to share the work this year?", options: ["A. Tracy was sick.", "B. They had more lemons this year.", "C. Last year, one person did everything and people waited forever.", "D. The teacher told them to."], answer: "C", explanation: "細節題。「Last year one person did everything, and people waited forever」。" },
        { id: 4, question: "How does Talia probably feel at the end of the conversation?", options: ["A. Angry and upset.", "B. Tired but happy about the sales.", "C. Bored and sleepy.", "D. Worried that no one will come."], answer: "B", explanation: "推論題。她手臂很痠，但對檸檬汁熱賣、班費會有收入感到開心。" }
      ]
    }
  },

  "Unit 8": {
    title: "The Royal Theatre of Toone: Where Wooden Puppets Carry a City's Soul",
    chineseTitle: "一桿撐起的傳奇——皇家托恩劇院的百年榮耀",
    passage: `In the heart of Brussels, the capital of Belgium, a narrow alley leads to a very special place: the Royal Theatre of Toone. This is a theater that keeps one of Brussels' oldest puppet arts alive: the rod marionette tradition.

The Royal Theatre of Toone was founded in 1830. Its shows employ rod marionettes, which are wooden puppets that are controlled from above with long rods. One puppeteer, the "Toone," gives voice to every character on stage. Long ago, when few people could read, these expressive puppet shows gave many working-class families their first taste of classic works.

The Royal Theatre of Toone is the city's only traditional puppet theater still in operation. Its plays are performed in a mix of several languages, showing off the diverse culture of Brussels. They are also full of special local humor that pokes fun at the news of the day.

In 2025, Brussels' rod marionette tradition was added to UNESCO's Intangible Cultural Heritage list. Yet even with this honor, the theater quietly keeps its doors open, passing its magic down to future generations.`,
    chineseTranslation: `在比利時首都布魯塞爾的市中心，一條狹窄的巷子通往一個非常特別的地方：皇家托恩劇院。這座劇院讓布魯塞爾最古老的偶戲藝術之一——桿操縱偶傳統——得以延續下去。

皇家托恩劇院創立於1830年。它的演出使用桿操縱偶，也就是用長桿從上方操控的木偶。一位被稱為「托恩」的操偶師為台上每個角色配音。很久以前，在識字的人還不多的年代，這些表情豐富的偶戲讓許多勞工家庭第一次接觸到經典作品。

皇家托恩劇院是這座城市唯一仍在營運的傳統偶戲劇院。它的戲劇以多種語言混合演出，展現布魯塞爾多元的文化。劇中也充滿了獨特的在地幽默，拿當天的新聞開玩笑。

2025年，布魯塞爾的桿操縱偶傳統被列入聯合國教科文組織的非物質文化遺產名錄。然而，即使獲得了這項殊榮，劇院依然低調地敞開大門，把它的魔力傳承給後代。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "alley", pos: "n.", meaning: "小巷", collocations: "a narrow alley 一條狹窄的巷子" },
        { id: 2, word: "found", pos: "v.", meaning: "創立", collocations: "be founded in 1830 創立於1830年" },
        { id: 3, word: "puppeteer", pos: "n.", meaning: "操偶師", collocations: "one puppeteer 一位操偶師" },
        { id: 4, word: "expressive", pos: "adj.", meaning: "表情豐富的、富表現力的", collocations: "expressive puppet shows 表情豐富的偶戲" },
        { id: 5, word: "diverse", pos: "adj.", meaning: "多元的", collocations: "the diverse culture 多元的文化" },
        { id: 6, word: "intangible", pos: "adj.", meaning: "無形的、非物質的", collocations: "Intangible Cultural Heritage 非物質文化遺產" }
      ],
      grammarNotes: [
        { id: "G1", title: "非限定 which＋被動語態", excerpt: "which are wooden puppets that are controlled from above with long rods", analysis: "which 補充說明 rod marionettes；子句內 that are controlled 為被動語態，表「被從上方操控」。" },
        { id: "G2", title: "when 引導時間子句修飾 Long ago", excerpt: "Long ago, when few people could read", analysis: "when 補充說明「很久以前」的情況：在識字的人還不多的年代。" }
      ],
      patternNotes: [
        { id: "P1", title: "keep + O + adj. (使…保持…)", excerpt: "keeps one of Brussels' oldest puppet arts alive", analysis: "keep + 受詞 + 形容詞 alive，表「讓…延續下去」。" },
        { id: "P2", title: "poke fun at… (嘲弄、拿…開玩笑)", excerpt: "pokes fun at the news of the day", analysis: "poke fun at 表「取笑、拿…開玩笑」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `In the heart of Brussels, the capital of Belgium, a narrow ` },
          { type: 'vocab', text: `alley`, vid: 1 },
          { type: 'text', text: ` leads to a very special place: the Royal Theatre of Toone. This is a theater that ` },
          { type: 'pattern', text: `keeps one of Brussels' oldest puppet arts alive`, pid: 'P1' },
          { type: 'text', text: `: the rod marionette tradition.` }
        ],
        [
          { type: 'text', text: `The Royal Theatre of Toone was ` },
          { type: 'vocab', text: `founded`, vid: 2 },
          { type: 'text', text: ` in 1830. Its shows employ rod marionettes, ` },
          { type: 'grammar', text: `which are wooden puppets that are controlled from above with long rods`, gid: 'G1' },
          { type: 'text', text: `. One ` },
          { type: 'vocab', text: `puppeteer`, vid: 3 },
          { type: 'text', text: `, the "Toone," gives voice to every character on stage. ` },
          { type: 'grammar', text: `Long ago, when few people could read`, gid: 'G2' },
          { type: 'text', text: `, these ` },
          { type: 'vocab', text: `expressive`, vid: 4 },
          { type: 'text', text: ` puppet shows gave many working-class families their first taste of classic works.` }
        ],
        [
          { type: 'text', text: `The Royal Theatre of Toone is the city's only traditional puppet theater still in operation. Its plays are performed in a mix of several languages, showing off the ` },
          { type: 'vocab', text: `diverse`, vid: 5 },
          { type: 'text', text: ` culture of Brussels. They are also full of special local humor that ` },
          { type: 'pattern', text: `pokes fun at the news of the day`, pid: 'P2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `In 2025, Brussels' rod marionette tradition was added to UNESCO's ` },
          { type: 'vocab', text: `Intangible`, vid: 6 },
          { type: 'text', text: ` Cultural Heritage list. Yet even with this honor, the theater quietly keeps its doors open, passing its magic down to future generations.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The cat ran into a dark, narrow ______ between two buildings.", options: ["A. alley", "B. ocean", "C. stadium", "D. highway"], answer: "A", explanation: "【選項解析】\n- (A) alley (n.) 小巷 (正解)\n- (B) ocean (n.) 海洋\n- (C) stadium (n.) 體育場\n- (D) highway (n.) 公路" },
      { id: 2, question: "Our school was ______ in 1920 by a group of teachers.", options: ["A. eaten", "B. sung", "C. founded", "D. melted"], answer: "C", explanation: "【選項解析】\n- (A) eaten (v.) 被吃掉\n- (B) sung (v.) 被唱\n- (C) founded (v.) 被創立 (正解)\n- (D) melted (v.) 被融化" },
      { id: 3, question: "The actor's ______ face showed exactly how he felt.", options: ["A. empty", "B. expressive", "C. frozen", "D. hidden"], answer: "B", explanation: "【選項解析】\n- (A) empty (adj.) 空的\n- (B) expressive (adj.) 富表情的 (正解)\n- (C) frozen (adj.) 僵住的\n- (D) hidden (adj.) 藏起來的" },
      { id: 4, question: "Our school has a ______ group of students from many different countries.", options: ["A. single", "B. tiny", "C. lonely", "D. diverse"], answer: "D", explanation: "【選項解析】\n- (A) single (adj.) 單一的\n- (B) tiny (adj.) 極小的\n- (C) lonely (adj.) 孤單的\n- (D) diverse (adj.) 多元的 (正解)" },
    ],
    cloze: {
      text: "The Royal Theatre of Toone is a puppet theater in Brussels [1] was founded in 1830. Its wooden puppets are controlled [2] above with long rods. One puppeteer gives voice to every character [3] stage. Long ago, when few people could read, the shows helped working-class families [4] classic stories. In 2025, the tradition was added to UNESCO's list, but the theater still keeps its doors open [5] future generations.",
      questions: [
        { id: 1, options: ["A. where", "B. what", "C. that", "D. who"], answer: "C", explanation: "that 引導形容詞子句修飾 theater（事物），並在子句中作主詞。" },
        { id: 2, options: ["A. under", "B. from", "C. into", "D. behind"], answer: "B", explanation: "from above 表「從上方」操控。" },
        { id: 3, options: ["A. in", "B. at", "C. under", "D. on"], answer: "D", explanation: "on stage 為固定用法，表「在舞台上」。" },
        { id: 4, options: ["A. enjoy", "B. enjoying", "C. to enjoying", "D. enjoyed"], answer: "A", explanation: "help + 受詞 + 原形動詞（或 to V），helped families enjoy。" },
        { id: 5, options: ["A. by", "B. with", "C. for", "D. off"], answer: "C", explanation: "for future generations 表「為了後代」。" },
      ]
    },
    wordBank: {
      words: ["(A) capital", "(B) character", "(C) culture", "(D) heritage", "(E) humor", "(F) language", "(G) puppet", "(H) rod", "(I) theater", "(J) wooden"],
      passage: "Brussels is the [1] of Belgium.\n\nA marionette is a kind of [2] controlled by strings or rods.\n\nEach puppet is moved with a long metal [3].\n\nThe puppets are made of [4] parts, not plastic.\n\nOne man gives voice to every [5] in the play.\n\nThe plays mix French, Dutch, and another local [6].\n\nThe shows are full of local [7] that makes people laugh.\n\nBrussels has a rich and diverse [8].\n\nThe [9] has been putting on shows since 1830.\n\nUNESCO protects important cultural [10] around the world.",
      answers: { 1: "A", 2: "G", 3: "H", 4: "J", 5: "B", 6: "F", 7: "E", 8: "C", 9: "I", 10: "D" }
    },
    discourse: {
      options: [
        "A. One puppeteer, called the \"Toone,\" gives voice to every character.",
        "B. Long ago, the shows gave many working-class families their first taste of classic works.",
        "C. In 2025, the tradition was added to UNESCO's Intangible Cultural Heritage list.",
        "D. Belgium is also famous for its chocolate and waffles.",
        "E. Its plays mix several languages and poke fun at the news of the day."
      ],
      paragraphs: [
        "In a narrow alley in Brussels, there is a very special puppet theater: the Royal Theatre of Toone.",
        "The theater uses wooden puppets controlled from above with long rods. [1] These shows have a long history. [2]",
        "Today, it is the only traditional puppet theater still running in the city. [3]",
        "The theater has also received international recognition. [4]"
      ],
      answers: { 1: "A", 2: "B", 3: "E", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How to make wooden toys.", "B. A historic puppet theater in Brussels and its tradition.", "C. The history of Belgium's languages.", "D. Why puppets are popular with children."], answer: "B", explanation: "主旨題。文章介紹布魯塞爾的皇家托恩劇院與桿操縱偶傳統。" },
        { id: 2, question: "When was the Royal Theatre of Toone founded?", options: ["A. In 2025.", "B. In 1930.", "C. In 1803.", "D. In 1830."], answer: "D", explanation: "細節題。「The Royal Theatre of Toone was founded in 1830」。" },
        { id: 3, question: "How are rod marionettes controlled?", options: ["A. With strings from below.", "B. By hand from inside.", "C. From above with long rods.", "D. By remote control."], answer: "C", explanation: "細節題。它們「are controlled from above with long rods」。" },
        { id: 4, question: "What does the theater's use of several languages show?", options: ["A. The diverse culture of Brussels.", "B. That the actors are tourists.", "C. That no one understands the plays.", "D. That the plays are only for children."], answer: "A", explanation: "細節題。多種語言演出「showing off the diverse culture of Brussels」。" }
      ]
    }
  },

  "封面": {
    title: "Experience the Gothic Fairy Tale of Holly Humberstone's Cruel World",
    chineseTitle: "一場關於愛與成長的暗黑童話——歡迎來到荷莉哈伯史東的殘酷世界",
    passage: `British singer-songwriter Holly Humberstone invites listeners into a dark but beautiful universe on her second album, Cruel World. Released on April 10, 2026, the record reached number four on the UK Albums Chart. It marks another major step for the 2022 BRITs Rising Star winner.

The album combines pop and electronic sounds in the style of a dark, gothic fairy tale. Humberstone writes openly about growing up, complicated love, and how young women learn to see themselves and each other. Childhood objects, memories, and imagined monsters appear throughout the record, giving its emotional stories a magical yet uneasy atmosphere.

The title track, "Cruel World," captures both the excitement and pain of a long-distance relationship, making it the emotional heart of the album. Other songs explore different sides of love as well. "Make It All Better" promises to protect and comfort a partner, imagining a love that lasts into old age. "Lucy" quietly reminds a young woman that flowers still grow after the rain. "Beauty Pageant," supported by piano and strings, examines the pressure on young women to appear perfect.

With intimate lyrics and carefully layered sounds, Cruel World moves between pain and pleasure, darkness and hope. It shows Humberstone becoming more confident without losing her honesty about the confusion of early adulthood.`,
    chineseTranslation: `英國創作歌手荷莉·哈伯史東在她的第二張專輯《殘酷世界》（Cruel World）中，邀請聽眾進入一個黑暗卻美麗的宇宙。這張專輯於2026年4月10日發行，登上英國專輯排行榜第四名，也標誌著這位2022年全英音樂獎新人獎得主又邁出了重要的一步。

這張專輯以黑暗哥德式童話的風格，結合流行與電子音樂。哈伯史東坦率地描寫成長、複雜的愛情，以及年輕女性如何學著看待自己與彼此。童年的物品、回憶與想像中的怪物貫穿整張專輯，為其中充滿情感的故事增添一種奇幻卻又令人不安的氛圍。

主打歌〈Cruel World〉同時捕捉了遠距離戀愛的興奮與痛苦，成為整張專輯的情感核心。其他歌曲也探索了愛情的不同面向。〈Make It All Better〉承諾要保護與安慰伴侶，想像一份延續到老的愛；〈Lucy〉溫柔地提醒一位年輕女性，雨後花朵依然會生長；〈Beauty Pageant〉以鋼琴與弦樂伴奏，探討年輕女性必須表現得完美的壓力。

憑藉私密的歌詞與層次細膩的聲音，《殘酷世界》在痛苦與歡愉、黑暗與希望之間游移。它讓人看見哈伯史東變得更有自信，卻沒有失去她面對初入成年時的迷惘所展現的那份坦誠。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "combine", pos: "v.", meaning: "結合", collocations: "combine A and B 結合A與B" },
        { id: 2, word: "complicated", pos: "adj.", meaning: "複雜的", collocations: "complicated love 複雜的愛情" },
        { id: 3, word: "atmosphere", pos: "n.", meaning: "氛圍、氣氛", collocations: "an uneasy atmosphere 令人不安的氛圍" },
        { id: 4, word: "capture", pos: "v.", meaning: "捕捉、表現出", collocations: "capture the pain 捕捉痛苦" },
        { id: 5, word: "examine", pos: "v.", meaning: "探討、檢視", collocations: "examine the pressure 探討壓力" },
        { id: 6, word: "intimate", pos: "adj.", meaning: "私密的、親密的", collocations: "intimate lyrics 私密的歌詞" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞構句 (表被動)", excerpt: "Released on April 10, 2026, the record reached number four", analysis: "Released… 為過去分詞構句，等於 After it was released on April 10, 2026，主詞是 the record。" },
        { id: "G2", title: "show + O + V-ing (顯示某人正在…)", excerpt: "It shows Humberstone becoming more confident without losing her honesty", analysis: "show + 受詞 + 現在分詞，表「呈現某人正在…」；without + V-ing 表「沒有…」。" }
      ],
      patternNotes: [
        { id: "P1", title: "both A and B (A與B兩者都)", excerpt: "both the excitement and pain of a long-distance relationship", analysis: "both A and B 表「A和B兩者」，同時捕捉興奮與痛苦。" },
        { id: "P2", title: "pressure on sb to V (要某人…的壓力)", excerpt: "the pressure on young women to appear perfect", analysis: "the pressure on + 人 + to V 表「要求某人做某事的壓力」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `British singer-songwriter Holly Humberstone invites listeners into a dark but beautiful universe on her second album, Cruel World. ` },
          { type: 'grammar', text: `Released on April 10, 2026, the record reached number four`, gid: 'G1' },
          { type: 'text', text: ` on the UK Albums Chart. It marks another major step for the 2022 BRITs Rising Star winner.` }
        ],
        [
          { type: 'text', text: `The album ` },
          { type: 'vocab', text: `combines`, vid: 1 },
          { type: 'text', text: ` pop and electronic sounds in the style of a dark, gothic fairy tale. Humberstone writes openly about growing up, ` },
          { type: 'vocab', text: `complicated`, vid: 2 },
          { type: 'text', text: ` love, and how young women learn to see themselves and each other. Childhood objects, memories, and imagined monsters appear throughout the record, giving its emotional stories a magical yet uneasy ` },
          { type: 'vocab', text: `atmosphere`, vid: 3 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The title track, "Cruel World," ` },
          { type: 'vocab', text: `captures`, vid: 4 },
          { type: 'text', text: ` ` },
          { type: 'pattern', text: `both the excitement and pain of a long-distance relationship`, pid: 'P1' },
          { type: 'text', text: `, making it the emotional heart of the album. Other songs explore different sides of love as well. "Make It All Better" promises to protect and comfort a partner, imagining a love that lasts into old age. "Lucy" quietly reminds a young woman that flowers still grow after the rain. "Beauty Pageant," supported by piano and strings, ` },
          { type: 'vocab', text: `examines`, vid: 5 },
          { type: 'text', text: ` ` },
          { type: 'pattern', text: `the pressure on young women to appear perfect`, pid: 'P2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `With ` },
          { type: 'vocab', text: `intimate`, vid: 6 },
          { type: 'text', text: ` lyrics and carefully layered sounds, Cruel World moves between pain and pleasure, darkness and hope. ` },
          { type: 'grammar', text: `It shows Humberstone becoming more confident without losing her honesty`, gid: 'G2' },
          { type: 'text', text: ` about the confusion of early adulthood.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "This dish ______ sweet and sour flavors in a surprising way.", options: ["A. removes", "B. freezes", "C. destroys", "D. combines"], answer: "D", explanation: "【選項解析】\n- (A) removes (v.) 移除\n- (B) freezes (v.) 冷凍\n- (C) destroys (v.) 破壞\n- (D) combines (v.) 結合 (正解)" },
      { id: 2, question: "The instructions were so ______ that nobody could follow them.", options: ["A. simple", "B. complicated", "C. clear", "D. short"], answer: "B", explanation: "【選項解析】\n- (A) simple (adj.) 簡單的\n- (B) complicated (adj.) 複雜的 (正解)\n- (C) clear (adj.) 清楚的\n- (D) short (adj.) 短的" },
      { id: 3, question: "The candles and soft music created a romantic ______ at dinner.", options: ["A. traffic", "B. homework", "C. atmosphere", "D. receipt"], answer: "C", explanation: "【選項解析】\n- (A) traffic (n.) 交通\n- (B) homework (n.) 作業\n- (C) atmosphere (n.) 氣氛 (正解)\n- (D) receipt (n.) 收據" },
      { id: 4, question: "The photographer managed to ______ the beauty of the sunset in a single picture.", options: ["A. capture", "B. erase", "C. ignore", "D. delete"], answer: "A", explanation: "【選項解析】\n- (A) capture (v.) 捕捉 (正解)\n- (B) erase (v.) 擦掉\n- (C) ignore (v.) 忽視\n- (D) delete (v.) 刪除" },
    ],
    cloze: {
      text: "Holly Humberstone is a British singer-songwriter [1] second album is called Cruel World. [2] in April 2026, the album reached number four on the UK Albums Chart. It combines pop and electronic sounds in the style of a dark fairy tale. The title track is about a long-distance relationship, [3] other songs explore different sides of love. Through her honest lyrics, Humberstone shows how young women learn to see themselves [4] each other. The album shows that she has become more confident [5] losing her honesty.",
      questions: [
        { id: 1, options: ["A. who", "B. whose", "C. which", "D. whom"], answer: "B", explanation: "whose 為所有格關係代名詞，whose second album 表「她的第二張專輯」。" },
        { id: 2, options: ["A. Released", "B. Releasing", "C. Release", "D. To release"], answer: "A", explanation: "專輯是「被發行」的，用過去分詞構句 Released…。" },
        { id: 3, options: ["A. so", "B. because", "C. unless", "D. while"], answer: "D", explanation: "while 表對比「而」：主打歌談遠距離戀愛，其他歌曲則探討愛的不同面向。" },
        { id: 4, options: ["A. or", "B. but", "C. and", "D. nor"], answer: "C", explanation: "see themselves and each other 表「看待自己與彼此」，用 and 連接。" },
        { id: 5, options: ["A. with", "B. without", "C. by", "D. for"], answer: "B", explanation: "without + V-ing 表「沒有…」：變得更有自信卻沒有失去坦誠。" },
      ]
    },
    wordBank: {
      words: ["(A) album", "(B) chart", "(C) electronic", "(D) fairy", "(E) lyric", "(F) monster", "(G) piano", "(H) pressure", "(I) relationship", "(J) singer"],
      passage: "Holly Humberstone is a British [1] and songwriter.\n\nYoung women may feel [2] to look perfect.\n\nHer second [3] has twelve songs.\n\nChildren are often afraid of the [4] under the bed.\n\nThe song reached number four on the music [5].\n\nThe album feels like a dark [6] tale.\n\nEach [7] in the song tells part of a story.\n\nThe album mixes pop with [8] sounds made by computers.\n\nA long-distance [9] can be both painful and exciting.\n\nThe song is supported by [10] and strings.",
      answers: { 1: "J", 2: "H", 3: "A", 4: "F", 5: "B", 6: "D", 7: "E", 8: "C", 9: "I", 10: "G" }
    },
    discourse: {
      options: [
        "A. The title track captures both the excitement and pain of a long-distance relationship.",
        "B. Released in April 2026, the album reached number four on the UK Albums Chart.",
        "C. Many fans buy concert tickets months in advance.",
        "D. Childhood objects and imagined monsters appear throughout the record.",
        "E. It shows her becoming more confident while staying honest."
      ],
      paragraphs: [
        "British singer-songwriter Holly Humberstone has released her second album, Cruel World.",
        "The album has been a big success. [1] It combines pop and electronic sounds in the style of a gothic fairy tale. [2]",
        "Love is an important theme on the album. [3] Other songs explore different sides of love.",
        "Overall, Cruel World moves between pain and pleasure, darkness and hope. [4]"
      ],
      answers: { 1: "B", 2: "D", 3: "A", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How to become a famous singer.", "B. The history of the BRIT Awards.", "C. Holly Humberstone's new album and its themes.", "D. Why gothic music is popular."], answer: "C", explanation: "主旨題。文章介紹荷莉·哈伯史東的新專輯《殘酷世界》與其中的主題。" },
        { id: 2, question: "How did Cruel World do on the UK Albums Chart?", options: ["A. It reached number four.", "B. It reached number one.", "C. It did not enter the chart.", "D. It reached number ten."], answer: "A", explanation: "細節題。「the record reached number four on the UK Albums Chart」。" },
        { id: 3, question: "Which song is about the pressure on young women to appear perfect?", options: ["A. \"Cruel World.\"", "B. \"Beauty Pageant.\"", "C. \"Lucy.\"", "D. \"Make It All Better.\""], answer: "B", explanation: "細節題。「\"Beauty Pageant\" … examines the pressure on young women to appear perfect」。" },
        { id: 4, question: "What does \"Lucy\" remind a young woman of?", options: ["A. That love never lasts.", "B. That she should always look perfect.", "C. That monsters are real.", "D. That flowers still grow after the rain."], answer: "D", explanation: "細節題。「\"Lucy\" quietly reminds a young woman that flowers still grow after the rain」。" }
      ]
    }
  },

  "Unit 9": {
    title: "Is Your Face Your Wallet? Step into the Next Chapter of Payment",
    chineseTitle: "零接觸支付再進化——看懂人臉支付",
    passage: `During the COVID-19 pandemic, people did not want to touch cash or machines. They worried about germs. Some shops even stopped taking cash. After the pandemic, this habit stayed. More and more people now pay with credit cards, QR codes, or mobile wallets. Today, another method is being tested: facial recognition payment, also known as pay-by-face.

Pay-by-face is simple. All users have to do is show their face to a camera. Before people use the service, they must set up an account. They link a payment method, such as a bank card or a mobile wallet, to the system. Then, the system scans their face. However, the system does not save the photo. It turns facial features into digital data. These features may include the distance between the eyes, the shape of the nose, or the width of the face. This data becomes a kind of digital face ID. When a user pays, the camera captures the user's facial data again. The system then compares it with the existing data. If the two match, the payment is approved.

One major advantage of pay-by-face is convenience. People may forget their credit cards or phones, but their faces are always with them. Pay-by-face can be particularly useful in busy places such as convenience stores and train stations. As the payment process only takes a few seconds, it may help shorten lines. For people who cannot easily use their hands, using faces may be much easier than using cards or phones.

Still, the technology raises serious concerns, especially about data security and privacy. If a password is stolen, you can change it. If facial data is leaked, though, the problem is much harder to deal with, because you cannot change your face. Some people may also worry that their data could be collected, stored, or used without permission. Accuracy is another issue. Despite recent advances, facial recognition systems are not perfect. Poor lighting, aging, or changes in appearance may affect the result.

As technology continues to improve, developers will find new ways to make these systems more accurate and secure. But before you pay with your face, it is worth asking one question: do you want to?`,
    chineseTranslation: `在新冠疫情期間，人們不想碰觸現金或機器，擔心上面有病菌。有些商店甚至不再收現金。疫情過後，這個習慣保留了下來。現在越來越多人用信用卡、QR 碼或行動錢包付款。如今，另一種方式正在測試中：臉部辨識支付，也就是「刷臉支付」。

刷臉支付很簡單，使用者只要把臉對著鏡頭就行了。在使用這項服務之前，必須先設定帳戶，把銀行卡或行動錢包等付款方式連結到系統。接著，系統會掃描他們的臉。不過，系統並不會儲存照片，而是把臉部特徵轉換成數位資料。這些特徵可能包括兩眼之間的距離、鼻子的形狀或臉的寬度。這些資料就成了一種數位臉部身分證。使用者付款時，鏡頭會再次擷取使用者的臉部資料，系統再拿它和既有資料比對。如果兩者相符，付款就會核准。

刷臉支付的一大優點是方便。人們可能忘記帶信用卡或手機，但臉總是跟著自己。刷臉支付在便利商店和火車站等繁忙的地方特別有用。由於付款過程只需要幾秒鐘，或許有助於縮短排隊時間。對於不方便用手的人來說，用臉付款可能比用卡片或手機容易得多。

然而，這項技術也引發了嚴重的疑慮，尤其是在資料安全與隱私方面。密碼被偷了可以換掉；但臉部資料一旦外洩，問題就難處理得多，因為你沒辦法換一張臉。有些人也可能擔心自己的資料在未經允許的情況下被蒐集、儲存或使用。準確度是另一個問題。儘管近年有所進步，臉部辨識系統仍不完美，光線不足、老化或外貌改變都可能影響結果。

隨著技術持續進步，開發者會找出新方法讓這些系統更準確、更安全。但在你用臉付款之前，值得問自己一個問題：你想要這樣做嗎？`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "pandemic", pos: "n.", meaning: "全球大流行病", collocations: "the COVID-19 pandemic 新冠疫情" },
        { id: 2, word: "germ", pos: "n.", meaning: "病菌", collocations: "worry about germs 擔心病菌" },
        { id: 3, word: "recognition", pos: "n.", meaning: "辨識", collocations: "facial recognition 臉部辨識" },
        { id: 4, word: "convenience", pos: "n.", meaning: "方便", collocations: "one major advantage is convenience 一大優點是方便" },
        { id: 5, word: "privacy", pos: "n.", meaning: "隱私", collocations: "data security and privacy 資料安全與隱私" },
        { id: 6, word: "accuracy", pos: "n.", meaning: "準確度", collocations: "Accuracy is another issue. 準確度是另一個問題。" }
      ],
      grammarNotes: [
        { id: "G1", title: "現在進行式被動 (is being + p.p.)", excerpt: "Today, another method is being tested", analysis: "is being tested 為現在進行式的被動語態，表「正在被測試」。" },
        { id: "G2", title: "As 引導原因子句 (因為…)", excerpt: "As the payment process only takes a few seconds", analysis: "As 表「因為、由於」，說明刷臉支付可能縮短排隊的原因。" }
      ],
      patternNotes: [
        { id: "P1", title: "All sb have to do is (to) V (某人只需要…)", excerpt: "All users have to do is show their face to a camera", analysis: "All … have to do is + 原形動詞（或 to V），強調「只要…就好」。" },
        { id: "P2", title: "be worth + V-ing (值得…)", excerpt: "it is worth asking one question", analysis: "be worth 後接動名詞，表「值得做某事」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `During the COVID-19 ` },
          { type: 'vocab', text: `pandemic`, vid: 1 },
          { type: 'text', text: `, people did not want to touch cash or machines. They worried about ` },
          { type: 'vocab', text: `germs`, vid: 2 },
          { type: 'text', text: `. Some shops even stopped taking cash. After the pandemic, this habit stayed. More and more people now pay with credit cards, QR codes, or mobile wallets. ` },
          { type: 'grammar', text: `Today, another method is being tested`, gid: 'G1' },
          { type: 'text', text: `: facial ` },
          { type: 'vocab', text: `recognition`, vid: 3 },
          { type: 'text', text: ` payment, also known as pay-by-face.` }
        ],
        [
          { type: 'text', text: `Pay-by-face is simple. ` },
          { type: 'pattern', text: `All users have to do is show their face to a camera`, pid: 'P1' },
          { type: 'text', text: `. Before people use the service, they must set up an account. They link a payment method, such as a bank card or a mobile wallet, to the system. Then, the system scans their face. However, the system does not save the photo. It turns facial features into digital data. These features may include the distance between the eyes, the shape of the nose, or the width of the face. This data becomes a kind of digital face ID. When a user pays, the camera captures the user's facial data again. The system then compares it with the existing data. If the two match, the payment is approved.` }
        ],
        [
          { type: 'text', text: `One major advantage of pay-by-face is ` },
          { type: 'vocab', text: `convenience`, vid: 4 },
          { type: 'text', text: `. People may forget their credit cards or phones, but their faces are always with them. Pay-by-face can be particularly useful in busy places such as convenience stores and train stations. ` },
          { type: 'grammar', text: `As the payment process only takes a few seconds`, gid: 'G2' },
          { type: 'text', text: `, it may help shorten lines. For people who cannot easily use their hands, using faces may be much easier than using cards or phones.` }
        ],
        [
          { type: 'text', text: `Still, the technology raises serious concerns, especially about data security and ` },
          { type: 'vocab', text: `privacy`, vid: 5 },
          { type: 'text', text: `. If a password is stolen, you can change it. If facial data is leaked, though, the problem is much harder to deal with, because you cannot change your face. Some people may also worry that their data could be collected, stored, or used without permission. ` },
          { type: 'vocab', text: `Accuracy`, vid: 6 },
          { type: 'text', text: ` is another issue. Despite recent advances, facial recognition systems are not perfect. Poor lighting, aging, or changes in appearance may affect the result.` }
        ],
        [
          { type: 'text', text: `As technology continues to improve, developers will find new ways to make these systems more accurate and secure. But before you pay with your face, ` },
          { type: 'pattern', text: `it is worth asking one question`, pid: 'P2' },
          { type: 'text', text: `: do you want to?` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Wash your hands often to get rid of ______ that can make you sick.", options: ["A. homework", "B. germs", "C. tickets", "D. diamonds"], answer: "B", explanation: "【選項解析】\n- (A) homework (n.) 作業\n- (B) germs (n.) 病菌 (正解)\n- (C) tickets (n.) 票\n- (D) diamonds (n.) 鑽石" },
      { id: 2, question: "Online shopping offers great ______ because you can buy things without leaving home.", options: ["A. danger", "B. noise", "C. silence", "D. convenience"], answer: "D", explanation: "【選項解析】\n- (A) danger (n.) 危險\n- (B) noise (n.) 噪音\n- (C) silence (n.) 寂靜\n- (D) convenience (n.) 方便 (正解)" },
      { id: 3, question: "Please respect my ______ and don't read my diary.", options: ["A. privacy", "B. victory", "C. energy", "D. harvest"], answer: "A", explanation: "【選項解析】\n- (A) privacy (n.) 隱私 (正解)\n- (B) victory (n.) 勝利\n- (C) energy (n.) 能量\n- (D) harvest (n.) 收成" },
      { id: 4, question: "The ______ of the weather report was poor; it said sunny, but it rained all day.", options: ["A. color", "B. length", "C. accuracy", "D. volume"], answer: "C", explanation: "【選項解析】\n- (A) color (n.) 顏色\n- (B) length (n.) 長度\n- (C) accuracy (n.) 準確度 (正解)\n- (D) volume (n.) 音量" },
    ],
    cloze: {
      text: "During the pandemic, many people stopped [1] cash because they worried about germs. Now a new payment method is being tested: pay-by-face. Users link a bank card to the system, [2] then scans their faces and turns their features into digital data. When they pay, the system compares the new data [3] the saved data. Pay-by-face is convenient, but it raises concerns about privacy. [4] a password, your face cannot be changed if your data is leaked. Before using it, it is worth [5] whether you really want to.",
      questions: [
        { id: 1, options: ["A. using", "B. use", "C. used", "D. to using"], answer: "A", explanation: "stop + V-ing 表「停止做某事」，stopped using cash 即「不再使用現金」。" },
        { id: 2, options: ["A. that", "B. what", "C. which", "D. who"], answer: "C", explanation: "逗號後的非限定形容詞子句修飾 system，只能用 which。" },
        { id: 3, options: ["A. at", "B. with", "C. from", "D. by"], answer: "B", explanation: "compare A with B 表「拿 A 和 B 比較」。" },
        { id: 4, options: ["A. Because of", "B. Instead of", "C. Thanks to", "D. Unlike"], answer: "D", explanation: "Unlike 表「不像」：密碼可以換，臉卻不能換。" },
        { id: 5, options: ["A. asking", "B. ask", "C. asked", "D. to asking"], answer: "A", explanation: "be worth + V-ing 表「值得…」。" },
      ]
    },
    wordBank: {
      words: ["(A) advantage", "(B) camera", "(C) cash", "(D) data", "(E) feature", "(F) lighting", "(G) password", "(H) payment", "(I) recognition", "(J) wallet"],
      passage: "Some shops no longer accept [1]; you must pay by card.\n\nLook straight into the [2] when you pay with your face.\n\nA mobile [3] lets you pay with your phone.\n\nThe shape of your nose is one facial [4].\n\nThe system turns your face into digital [5].\n\nFacial [6] technology can identify people by their faces.\n\nSpeed is one big [7] of pay-by-face.\n\nIf someone steals your [8], you can simply change it.\n\nPoor [9] in a dark room may affect the result.\n\nThe [10] was approved in just a few seconds.",
      answers: { 1: "C", 2: "B", 3: "J", 4: "E", 5: "D", 6: "I", 7: "A", 8: "G", 9: "F", 10: "H" }
    },
    discourse: {
      options: [
        "A. Users link a payment method, and the system turns their facial features into digital data.",
        "B. People may forget their cards or phones, but their faces are always with them.",
        "C. If facial data is leaked, you cannot simply change your face like a password.",
        "D. Many convenience stores in Taiwan are open 24 hours a day.",
        "E. After the pandemic, more people began paying with cards, QR codes, or mobile wallets."
      ],
      paragraphs: [
        "Ways of paying for things have changed a lot in recent years.",
        "During the pandemic, people did not want to touch cash. [1] Now, a new method is being tested: pay-by-face.",
        "Using pay-by-face is simple. [2] When users pay, the system compares their faces with the saved data. One big advantage is convenience. [3]",
        "However, the technology also raises serious concerns. [4] Accuracy is another problem."
      ],
      answers: { 1: "E", 2: "A", 3: "B", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How COVID-19 spread.", "B. Why cash is better than cards.", "C. How to take a good selfie.", "D. How pay-by-face works and its pros and cons."], answer: "D", explanation: "主旨題。文章說明刷臉支付的運作方式，以及它的優點與疑慮。" },
        { id: 2, question: "What does the pay-by-face system store?", options: ["A. A photo of the user's face.", "B. Digital data based on facial features.", "C. The user's password.", "D. The user's home address."], answer: "B", explanation: "細節題。系統不存照片，而是「turns facial features into digital data」。" },
        { id: 3, question: "Why is leaked facial data a bigger problem than a stolen password?", options: ["A. You cannot change your face.", "B. Faces are more expensive.", "C. Passwords are never stolen.", "D. Cameras cannot see faces."], answer: "A", explanation: "細節題。「the problem is much harder to deal with, because you cannot change your face」。" },
        { id: 4, question: "Which of the following may affect the accuracy of facial recognition?", options: ["A. The price of the item.", "B. The time of payment.", "C. Poor lighting or changes in appearance.", "D. The type of bank card."], answer: "C", explanation: "細節題。「Poor lighting, aging, or changes in appearance may affect the result」。" }
      ]
    }
  },

  "News 2": {
    title: "Colossal Biosciences Hatches Chicks in the World's First Artificial Egg System",
    chineseTitle: "科學家研發「人造蛋殼」創下生技領域里程碑",
    passage: `In May 2026, an American biotechnology company called Colossal Biosciences announced it had hatched 26 healthy chickens in a new artificial egg system.

The system does not produce a complete egg from scratch. Soon after a hen lays an egg, scientists break it open. They pour everything inside—the yolk, the white, and the tiny embryo—into a small 3D-printed cup. The container is lined with a thin silicone membrane that lets oxygen in, keeps moisture inside, and blocks germs. Additionally, there is a clear window at the top of the container, allowing scientists to observe the embryo grow. Colossal's main goal is not to hatch farmed chickens. In the future, the company hopes to bring back extinct birds, such as the dodo and the South Island giant moa.

However, some scientists want more proof. Colossal has not published its results in a scientific journal, and it has not said how many eggs failed. Critics also argue that a revived dodo would not be a real dodo, but a modern bird with modified DNA. "I think they still have a long way to go," said Hans Cheng, a geneticist at Michigan State University in the US. For now, the 26 chickens are just chickens.`,
    chineseTranslation: `2026年5月，一家名為「巨大生物科學」（Colossal Biosciences）的美國生技公司宣布，已在一套新的人造蛋系統中孵出26隻健康的小雞。

這套系統並不是從零開始製造一顆完整的蛋。母雞產下蛋後不久，科學家就把蛋打開，將裡面的所有東西——蛋黃、蛋白和小小的胚胎——倒進一個以3D列印製成的小杯子裡。容器內襯一層薄薄的矽膠膜，能讓氧氣進入、保持內部濕度，並阻擋病菌。此外，容器頂端還有一扇透明窗，讓科學家能觀察胚胎的成長。Colossal 的主要目標不是孵化養殖雞；這家公司希望未來能讓渡渡鳥和南島巨型恐鳥等已滅絕的鳥類復活。

然而，有些科學家希望看到更多證據。Colossal 並未在科學期刊上發表研究結果，也沒有說明有多少顆蛋失敗。批評者也主張，復活的渡渡鳥不會是真正的渡渡鳥，而是 DNA 經過修改的現代鳥類。美國密西根州立大學的遺傳學家漢斯·程說：「我認為他們還有很長的路要走。」目前，這26隻雞就只是雞而已。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "hatch", pos: "v.", meaning: "孵化", collocations: "hatch chickens 孵出小雞" },
        { id: 2, word: "artificial", pos: "adj.", meaning: "人造的", collocations: "an artificial egg system 人造蛋系統" },
        { id: 3, word: "embryo", pos: "n.", meaning: "胚胎", collocations: "the tiny embryo 小小的胚胎" },
        { id: 4, word: "moisture", pos: "n.", meaning: "濕氣、水分", collocations: "keep moisture inside 保持內部濕度" },
        { id: 5, word: "extinct", pos: "adj.", meaning: "滅絕的", collocations: "extinct birds 已滅絕的鳥類" },
        { id: 6, word: "journal", pos: "n.", meaning: "期刊", collocations: "a scientific journal 科學期刊" }
      ],
      grammarNotes: [
        { id: "G1", title: "分詞構句＋allow + O + to V", excerpt: "allowing scientists to observe the embryo grow", analysis: "allowing… 是分詞構句，補充說明透明窗的功能；allow + 受詞 + to V 表「讓某人能…」，observe + 受詞 + 原形動詞表「觀察…生長」。" },
        { id: "G2", title: "not A but B (不是A而是B)", excerpt: "a revived dodo would not be a real dodo, but a modern bird with modified DNA", analysis: "not A but B 表「不是A而是B」；would 表假設語氣，指「若真的復活」的情況。" }
      ],
      patternNotes: [
        { id: "P1", title: "from scratch (從零開始)", excerpt: "does not produce a complete egg from scratch", analysis: "from scratch 表「從頭開始、白手起家」。" },
        { id: "P2", title: "have a long way to go (還有很長的路要走)", excerpt: "they still have a long way to go", analysis: "have a long way to go 表「離目標還很遠」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `In May 2026, an American biotechnology company called Colossal Biosciences announced it had ` },
          { type: 'vocab', text: `hatched`, vid: 1 },
          { type: 'text', text: ` 26 healthy chickens in a new ` },
          { type: 'vocab', text: `artificial`, vid: 2 },
          { type: 'text', text: ` egg system.` }
        ],
        [
          { type: 'text', text: `The system ` },
          { type: 'pattern', text: `does not produce a complete egg from scratch`, pid: 'P1' },
          { type: 'text', text: `. Soon after a hen lays an egg, scientists break it open. They pour everything inside—the yolk, the white, and the tiny ` },
          { type: 'vocab', text: `embryo`, vid: 3 },
          { type: 'text', text: `—into a small 3D-printed cup. The container is lined with a thin silicone membrane that lets oxygen in, keeps ` },
          { type: 'vocab', text: `moisture`, vid: 4 },
          { type: 'text', text: ` inside, and blocks germs. Additionally, there is a clear window at the top of the container, ` },
          { type: 'grammar', text: `allowing scientists to observe the embryo grow`, gid: 'G1' },
          { type: 'text', text: `. Colossal's main goal is not to hatch farmed chickens. In the future, the company hopes to bring back ` },
          { type: 'vocab', text: `extinct`, vid: 5 },
          { type: 'text', text: ` birds, such as the dodo and the South Island giant moa.` }
        ],
        [
          { type: 'text', text: `However, some scientists want more proof. Colossal has not published its results in a scientific ` },
          { type: 'vocab', text: `journal`, vid: 6 },
          { type: 'text', text: `, and it has not said how many eggs failed. Critics also argue that ` },
          { type: 'grammar', text: `a revived dodo would not be a real dodo, but a modern bird with modified DNA`, gid: 'G2' },
          { type: 'text', text: `. "I think ` },
          { type: 'pattern', text: `they still have a long way to go`, pid: 'P2' },
          { type: 'text', text: `," said Hans Cheng, a geneticist at Michigan State University in the US. For now, the 26 chickens are just chickens.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The baby birds will ______ from their eggs in about two weeks.", options: ["A. melt", "B. vote", "C. hatch", "D. retire"], answer: "C", explanation: "【選項解析】\n- (A) melt (v.) 融化\n- (B) vote (v.) 投票\n- (C) hatch (v.) 孵化 (正解)\n- (D) retire (v.) 退休" },
      { id: 2, question: "These flowers are ______; they are made of plastic.", options: ["A. artificial", "B. fresh", "C. wild", "D. natural"], answer: "A", explanation: "【選項解析】\n- (A) artificial (adj.) 人造的 (正解)\n- (B) fresh (adj.) 新鮮的\n- (C) wild (adj.) 野生的\n- (D) natural (adj.) 天然的" },
      { id: 3, question: "Dinosaurs became ______ millions of years ago, so we can only see their bones today.", options: ["A. popular", "B. hungry", "C. famous", "D. extinct"], answer: "D", explanation: "【選項解析】\n- (A) popular (adj.) 受歡迎的\n- (B) hungry (adj.) 飢餓的\n- (C) famous (adj.) 有名的\n- (D) extinct (adj.) 滅絕的 (正解)" },
      { id: 4, question: "The professor published her research in a famous science ______.", options: ["A. menu", "B. journal", "C. ticket", "D. receipt"], answer: "B", explanation: "【選項解析】\n- (A) menu (n.) 菜單\n- (B) journal (n.) 期刊 (正解)\n- (C) ticket (n.) 票\n- (D) receipt (n.) 收據" },
    ],
    cloze: {
      text: "Colossal Biosciences has hatched 26 chicks using an artificial egg system. Scientists break open a newly laid egg and pour everything inside [1] a 3D-printed cup. A thin membrane lets oxygen in [2] keeping germs out. A clear window allows scientists [3] the embryo grow. The company's main goal is to bring back birds [4] have become extinct, such as the dodo. However, some scientists want more proof [5] the results have not been published in a journal.",
      questions: [
        { id: 1, options: ["A. off", "B. against", "C. through", "D. into"], answer: "D", explanation: "pour A into B 表「把A倒進B」。" },
        { id: 2, options: ["A. so", "B. while", "C. unless", "D. because"], answer: "B", explanation: "while + V-ing 表「同時」：讓氧氣進入，同時阻擋病菌。" },
        { id: 3, options: ["A. watching", "B. watch", "C. to watch", "D. watched"], answer: "C", explanation: "allow + 受詞 + to V 表「讓某人能…」。" },
        { id: 4, options: ["A. that", "B. what", "C. who", "D. where"], answer: "A", explanation: "that 引導形容詞子句修飾 birds，並在子句中作主詞。" },
        { id: 5, options: ["A. so", "B. unless", "C. although", "D. because"], answer: "D", explanation: "because 引導原因子句：結果尚未在期刊發表，所以科學家想要更多證據。" },
      ]
    },
    wordBank: {
      words: ["(A) chick", "(B) critic", "(C) dodo", "(D) egg", "(E) embryo", "(F) geneticist", "(G) membrane", "(H) oxygen", "(I) proof", "(J) yolk"],
      passage: "A [1] is a baby chicken.\n\nA hen lays about one [2] a day.\n\nThe yellow part of an egg is called the [3].\n\nAn [4] is a baby animal in its earliest stage of development.\n\nThe [5] was a bird that died out hundreds of years ago.\n\nA [6] is a scientist who studies genes and DNA.\n\nLiving things need [7] to breathe.\n\nA thin [8] covers the inside of the container.\n\nSome scientists want more [9] before they believe the results.\n\nOne [10] said the revived bird would not be a real dodo.",
      answers: { 1: "A", 2: "D", 3: "J", 4: "E", 5: "C", 6: "F", 7: "H", 8: "G", 9: "I", 10: "B" }
    },
    discourse: {
      options: [
        "A. A thin membrane lets oxygen in, keeps moisture inside, and blocks germs.",
        "B. Its main goal is to bring back extinct birds such as the dodo.",
        "C. Colossal has not published its results in a scientific journal.",
        "D. Chicken is one of the most popular meats in the world.",
        "E. Scientists pour everything inside a newly laid egg into a 3D-printed cup."
      ],
      paragraphs: [
        "An American biotech company says it has hatched 26 healthy chicks in an artificial egg system.",
        "The system does not make a whole egg from scratch. [1] The cup is designed to protect the growing embryo. [2]",
        "But hatching chickens is not the company's real aim. [3]",
        "Some scientists, however, want more proof. [4] Critics also say a revived dodo would not be a real dodo."
      ],
      answers: { 1: "E", 2: "A", 3: "B", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the news report mainly about?", options: ["A. A company's artificial egg system and doubts about its goals.", "B. How to raise chickens at home.", "C. Why dodos became extinct.", "D. How 3D printers work."], answer: "A", explanation: "主旨題。報導介紹 Colossal 的人造蛋系統，以及科學家對其目標的質疑。" },
        { id: 2, question: "What is placed in the 3D-printed cup?", options: ["A. Only the yolk.", "B. A whole unbroken egg.", "C. A fake egg.", "D. Everything inside a newly laid egg."], answer: "D", explanation: "細節題。科學家把「everything inside—the yolk, the white, and the tiny embryo」倒進杯中。" },
        { id: 3, question: "What is Colossal's main goal?", options: ["A. To sell more chickens.", "B. To bring back extinct birds.", "C. To make cheaper eggs.", "D. To build better 3D printers."], answer: "B", explanation: "細節題。公司「hopes to bring back extinct birds, such as the dodo」。" },
        { id: 4, question: "Why do some scientists want more proof?", options: ["A. The chicks were unhealthy.", "B. The company used real hens.", "C. The results have not been published, and the number of failures was not reported.", "D. The cups were too expensive."], answer: "C", explanation: "細節題。Colossal 尚未在期刊發表結果，也沒說明有多少顆蛋失敗。" }
      ]
    }
  },

  "Unit 10": {
    title: "Step into Magic at Ten Drum Creative Park",
    chineseTitle: "臺南十鼓文創園區——百年糖廠的華麗轉身",
    passage: `Ten Drum Creative Park is an attraction in Rende District, Tainan. It used to be an old sugar factory. Now, it's one of the city's most special cultural spots. The park keeps many old warehouses from the Japanese colonial period. In 2005, some of the warehouses were rented to the Ten Drum Culture and Creativity Company. The group slowly turned the old industrial space into a creative park for music, art, history, and recreation. Today, Ten Drum Creative Park is known for being Asia's first cultural and creative park with a drum-music theme.

The Ten Drum team did not simply use the factory as a background. Instead, they gave the factory's old buildings, machines, and tall structures a new use. One of the most exciting attractions is the Chimney Slide. It is a five-story-high slide rebuilt from a room that once stored sugarcane fibers. In just six to eight seconds, visitors can race all the way to the bottom and feel their hearts pound!

Another popular spot is the Magic Space. This area was once used to store sugar. Now, visitors can walk past a huge wall of more than 3,000 books. They are not real books, but each one was made by hand. Above them, other books seem to float in the air. A designated photo zone called God's Painting frames a view of a tree and the blue sky outside. Together, they look just like a natural painting. Visitors can take stunning photos and create wonderful memories here.

The Dream Sugar Theater is also an important part of the park. Here, visitors can watch daily performances by the Ten Drum Art Percussion Group. The shows combine traditional drumming, stage lighting, and body movement to create a powerful stage experience. Besides regular shows, the park sometimes presents special evening productions.

Ten Drum Creative Park offers surprises around every corner, so visitors can easily spend a whole day exploring. Whether you love history or a bit of adventure, Ten Drum Creative Park is well worth a visit.`,
    chineseTranslation: `十鼓文創園區是位於臺南仁德區的景點，前身是一座老糖廠，如今則是臺南最特別的文化景點之一。園區保留了許多日治時期的老倉庫。2005年，部分倉庫租給了十鼓文化創意公司，這個團隊慢慢把這片老工業空間改造成結合音樂、藝術、歷史與休閒的創意園區。如今，十鼓文創園區以亞洲第一座以鼓樂為主題的文化創意園區而聞名。

十鼓團隊並不只是把糖廠當作背景，而是賦予糖廠的老建築、機具和高聳的結構全新的用途。最刺激的景點之一是「煙囪溜滑梯」，這座五層樓高的溜滑梯是由一間過去存放甘蔗渣的房間改建而成。只要六到八秒，遊客就能一路衝到底，感受心臟怦怦狂跳！

另一個熱門景點是「魔幻空間」。這裡過去是存放砂糖的地方，現在遊客可以走過一面擺滿三千多本書的巨大書牆。這些不是真的書，但每一本都是手工製作的。書牆上方還有其他書本彷彿漂浮在空中。一處名為「上帝的畫作」的指定拍照區，框住了窗外一棵樹與藍天的景色，看起來就像一幅天然的畫。遊客可以在這裡拍出驚豔的照片，創造美好的回憶。

「夢想糖廠劇場」也是園區的重要部分。遊客可以在這裡觀賞十鼓擊樂團每天的演出。表演結合傳統鼓藝、舞台燈光與肢體動作，打造出震撼的舞台體驗。除了常態演出，園區有時也會推出特別的晚間節目。

十鼓文創園區處處充滿驚喜，遊客可以輕鬆地花上一整天探索。無論你熱愛歷史，還是喜歡來點冒險，十鼓文創園區都非常值得一遊。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "warehouse", pos: "n.", meaning: "倉庫", collocations: "old warehouses 老倉庫" },
        { id: 2, word: "colonial", pos: "adj.", meaning: "殖民的", collocations: "the Japanese colonial period 日治時期" },
        { id: 3, word: "recreation", pos: "n.", meaning: "休閒、娛樂", collocations: "music, art, history, and recreation 音樂、藝術、歷史與休閒" },
        { id: 4, word: "structure", pos: "n.", meaning: "結構、建築物", collocations: "tall structures 高聳的結構" },
        { id: 5, word: "stunning", pos: "adj.", meaning: "令人驚豔的", collocations: "stunning photos 驚豔的照片" },
        { id: 6, word: "percussion", pos: "n.", meaning: "打擊樂", collocations: "a percussion group 擊樂團" }
      ],
      grammarNotes: [
        { id: "G1", title: "過去分詞片語修飾名詞", excerpt: "It is a five-story-high slide rebuilt from a room that once stored sugarcane fibers", analysis: "rebuilt from… 是過去分詞片語修飾 slide，等於 which was rebuilt from…，表「由…改建而成」。" },
        { id: "G2", title: "Whether A or B (無論是A還是B)", excerpt: "Whether you love history or a bit of adventure", analysis: "Whether … or … 引導讓步子句，表「不論是…還是…」。" }
      ],
      patternNotes: [
        { id: "P1", title: "be known for + N./V-ing (以…聞名)", excerpt: "is known for being Asia's first cultural and creative park", analysis: "be known for 表「因…而有名」，後接名詞或動名詞。" },
        { id: "P2", title: "be (well) worth + N. (很值得…)", excerpt: "is well worth a visit", analysis: "be worth a visit 表「值得一遊」，well 加強語氣。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Ten Drum Creative Park is an attraction in Rende District, Tainan. It used to be an old sugar factory. Now, it's one of the city's most special cultural spots. The park keeps many old ` },
          { type: 'vocab', text: `warehouses`, vid: 1 },
          { type: 'text', text: ` from the Japanese ` },
          { type: 'vocab', text: `colonial`, vid: 2 },
          { type: 'text', text: ` period. In 2005, some of the warehouses were rented to the Ten Drum Culture and Creativity Company. The group slowly turned the old industrial space into a creative park for music, art, history, and ` },
          { type: 'vocab', text: `recreation`, vid: 3 },
          { type: 'text', text: `. Today, Ten Drum Creative Park ` },
          { type: 'pattern', text: `is known for being Asia's first cultural and creative park`, pid: 'P1' },
          { type: 'text', text: ` with a drum-music theme.` }
        ],
        [
          { type: 'text', text: `The Ten Drum team did not simply use the factory as a background. Instead, they gave the factory's old buildings, machines, and tall ` },
          { type: 'vocab', text: `structures`, vid: 4 },
          { type: 'text', text: ` a new use. One of the most exciting attractions is the Chimney Slide. ` },
          { type: 'grammar', text: `It is a five-story-high slide rebuilt from a room that once stored sugarcane fibers`, gid: 'G1' },
          { type: 'text', text: `. In just six to eight seconds, visitors can race all the way to the bottom and feel their hearts pound!` }
        ],
        [
          { type: 'text', text: `Another popular spot is the Magic Space. This area was once used to store sugar. Now, visitors can walk past a huge wall of more than 3,000 books. They are not real books, but each one was made by hand. Above them, other books seem to float in the air. A designated photo zone called God's Painting frames a view of a tree and the blue sky outside. Together, they look just like a natural painting. Visitors can take ` },
          { type: 'vocab', text: `stunning`, vid: 5 },
          { type: 'text', text: ` photos and create wonderful memories here.` }
        ],
        [
          { type: 'text', text: `The Dream Sugar Theater is also an important part of the park. Here, visitors can watch daily performances by the Ten Drum Art ` },
          { type: 'vocab', text: `Percussion`, vid: 6 },
          { type: 'text', text: ` Group. The shows combine traditional drumming, stage lighting, and body movement to create a powerful stage experience. Besides regular shows, the park sometimes presents special evening productions.` }
        ],
        [
          { type: 'text', text: `Ten Drum Creative Park offers surprises around every corner, so visitors can easily spend a whole day exploring. ` },
          { type: 'grammar', text: `Whether you love history or a bit of adventure`, gid: 'G2' },
          { type: 'text', text: `, Ten Drum Creative Park ` },
          { type: 'pattern', text: `is well worth a visit`, pid: 'P2' },
          { type: 'text', text: `.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "The company stores its products in a large ______ near the port.", options: ["A. warehouse", "B. bedroom", "C. classroom", "D. bathroom"], answer: "A", explanation: "【選項解析】\n- (A) warehouse (n.) 倉庫 (正解)\n- (B) bedroom (n.) 臥室\n- (C) classroom (n.) 教室\n- (D) bathroom (n.) 浴室" },
      { id: 2, question: "Swimming and hiking are popular forms of ______ in summer.", options: ["A. homework", "B. surgery", "C. recreation", "D. punishment"], answer: "C", explanation: "【選項解析】\n- (A) homework (n.) 作業\n- (B) surgery (n.) 手術\n- (C) recreation (n.) 休閒活動 (正解)\n- (D) punishment (n.) 懲罰" },
      { id: 3, question: "The view from the top of the mountain was absolutely ______; we took hundreds of photos.", options: ["A. boring", "B. ugly", "C. tiny", "D. stunning"], answer: "D", explanation: "【選項解析】\n- (A) boring (adj.) 無聊的\n- (B) ugly (adj.) 醜的\n- (C) tiny (adj.) 極小的\n- (D) stunning (adj.) 令人驚豔的 (正解)" },
      { id: 4, question: "Drums and cymbals are ______ instruments that you play by hitting them.", options: ["A. string", "B. percussion", "C. wind", "D. keyboard"], answer: "B", explanation: "【選項解析】\n- (A) string (n.) 弦樂\n- (B) percussion (n.) 打擊樂 (正解)\n- (C) wind (n.) 管樂\n- (D) keyboard (n.) 鍵盤樂" },
    ],
    cloze: {
      text: "Ten Drum Creative Park in Tainan used [1] an old sugar factory. In 2005, a drum company rented some of its warehouses and turned them [2] a creative park. One exciting attraction is a slide [3] was rebuilt from an old storage room. Visitors can also see a wall of more than 3,000 handmade books. Every day, the Ten Drum Art Percussion Group performs shows [4] combine drumming, lighting, and body movement. Whether you love history [5] adventure, the park is well worth a visit.",
      questions: [
        { id: 1, options: ["A. being", "B. been", "C. to be", "D. be"], answer: "C", explanation: "used to + V 表「過去曾經是」，used to be an old sugar factory。" },
        { id: 2, options: ["A. off", "B. down", "C. over", "D. into"], answer: "D", explanation: "turn A into B 表「把A變成B」。" },
        { id: 3, options: ["A. that", "B. where", "C. what", "D. who"], answer: "A", explanation: "that 引導形容詞子句修飾 slide，並在子句中作主詞。" },
        { id: 4, options: ["A. what", "B. that", "C. where", "D. whose"], answer: "B", explanation: "that 引導形容詞子句修飾 shows，並在子句中作主詞。" },
        { id: 5, options: ["A. and", "B. but", "C. or", "D. so"], answer: "C", explanation: "Whether A or B 為固定句型，表「無論是A還是B」。" },
      ]
    },
    wordBank: {
      words: ["(A) chimney", "(B) drum", "(C) factory", "(D) memory", "(E) painting", "(F) performance", "(G) slide", "(H) sugar", "(I) theme", "(J) warehouse"],
      passage: "The park used to be a [1] that made sugar.\n\nA [2] is a building used only for storing goods.\n\nSmoke used to rise from the tall [3] of the factory.\n\nChildren love to race down the [4] at the playground.\n\nSugarcane is used to make [5].\n\nThe park is built around a drum-music [6].\n\nHe hit the [7] with two wooden sticks.\n\nThe view through the window looks like a [8] on the wall.\n\nThe group gives a powerful [9] every day.\n\nThe trip left us with a wonderful [10] we will never forget.",
      answers: { 1: "C", 2: "J", 3: "A", 4: "G", 5: "H", 6: "I", 7: "B", 8: "E", 9: "F", 10: "D" }
    },
    discourse: {
      options: [
        "A. One of the most exciting attractions is a five-story-high slide called the Chimney Slide.",
        "B. In 2005, a drum company rented some of its old warehouses and turned them into a creative park.",
        "C. Visitors can watch daily shows by the Ten Drum Art Percussion Group.",
        "D. Taiwan produces some of the best oolong tea in the world.",
        "E. A wall of more than 3,000 handmade books fills the Magic Space."
      ],
      paragraphs: [
        "Ten Drum Creative Park in Tainan used to be an old sugar factory.",
        "The factory's story did not end when it closed. [1] Today, it is Asia's first cultural and creative park with a drum-music theme.",
        "The park gives old buildings new uses. [2] Another popular spot was once used to store sugar. [3]",
        "Music is also at the heart of the park. [4]"
      ],
      answers: { 1: "B", 2: "A", 3: "E", 4: "C" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How sugar is made.", "B. An old sugar factory that became a creative park with many attractions.", "C. The history of Japanese rule in Taiwan.", "D. How to play the drums."], answer: "B", explanation: "主旨題。文章介紹由老糖廠改造而成的十鼓文創園區與其景點。" },
        { id: 2, question: "What was the Chimney Slide rebuilt from?", options: ["A. A room that once stored sugarcane fibers.", "B. A real working chimney.", "C. An old train station.", "D. A theater."], answer: "A", explanation: "細節題。它是「rebuilt from a room that once stored sugarcane fibers」。" },
        { id: 3, question: "What is special about the books in the Magic Space?", options: ["A. They are rare old books.", "B. Visitors can borrow them.", "C. They were written by famous writers.", "D. They are not real books, but each one was made by hand."], answer: "D", explanation: "細節題。「They are not real books, but each one was made by hand」。" },
        { id: 4, question: "What do the shows at the Dream Sugar Theater combine?", options: ["A. Singing and dancing only.", "B. Movies and music.", "C. Traditional drumming, stage lighting, and body movement.", "D. Cooking and storytelling."], answer: "C", explanation: "細節題。表演「combine traditional drumming, stage lighting, and body movement」。" }
      ]
    }
  },

  "Unit 11": {
    title: "Beyond the Court: The Story of Basketball",
    chineseTitle: "籃球——「籃」不住的全球魅力",
    passage: `In the winter of 1891, a snowstorm hit Springfield, Massachusetts, in the US. Students at the International YMCA Training School (now known as Springfield College) could barely exercise outdoors in the snow. They were stuck with dull gym classes that offered little excitement. Before long, the students grew restless.

That was when James Naismith, a physical education teacher at the school, came up with a solution. He set out to design an active, simple, and safe game that could work in a compact gym. Eventually, he found two peach baskets and nailed them to a high rail at each end of the gym. Naismith then divided the students into two teams and gave them one objective: throw the ball into the baskets.

Once the game began, however, Naismith wondered whether he had made a mistake. The game quickly became chaotic without clear rules. Students pushed, kicked, and even punched one another as they struggled to score. Even so, they enjoyed the game so much that they asked to play again. Naismith went on to shape this rough indoor game into the sport we know as basketball today.

By 1892, basketball had become more than a gym-class activity. Its first public game was held in the same school gym and drew about 200 spectators. Interest grew, and the school newspaper published the game's rules. Copies of the newspaper were then sent through regional YMCA networks across the US. As the rules reached new places, so did the game. International students at the training school brought the sport back to their home countries. Over time, basketball came to be recognized globally as a sport.

Even as basketball grew more popular, its early form was still far from standardized. The number of players on the court, for instance, could vary a lot depending on the size of each gym. It was only later that five players per team became the standard.

The equipment was also rather basic in the early days. At first, players aimed at peach baskets with closed bottoms. So, someone had to climb a ladder to retrieve the ball after each score. As for the ball, early players used a soccer ball before a proper basketball was produced.

Over the next 100 years, basketball kept evolving—and modern media helped turn it into a popular form of entertainment. Through live broadcasts, people can enjoy the excitement of a game from home as it happens. They can also watch short highlights online later, catching the biggest moments they may have missed.

A larger audience means professional basketball leagues gain more attention. Among them, the National Basketball Association (NBA) stands out. It plays a major role in making top players into superstars. Fans follow their favorite athletes on social media and copy their moves. Brands also work with these popular players to sell merchandise, such as team jerseys and sneakers. The sport has become not only exciting to watch but also highly valuable as a business. This commercial success likely helps basketball reach even more countries, building a wider fan base around the world.

Today, basketball is far more than the simple game that Naismith created. It has become a cultural force that brings players and fans together across borders.`,
    chineseTranslation: `1891年冬天，一場暴風雪襲擊了美國麻薩諸塞州的春田市。國際基督教青年會訓練學校（現稱春田學院）的學生幾乎無法在雪中做戶外運動，只能上沒什麼樂趣、枯燥乏味的體育課。沒過多久，學生們就變得焦躁不安。

就在這時，該校的體育老師詹姆士·奈史密斯想出了一個解決辦法。他著手設計一種活潑、簡單又安全，而且能在小型體育館裡進行的遊戲。最後，他找來兩個桃子籃，把它們分別釘在體育館兩端高處的欄杆上。接著，奈史密斯把學生分成兩隊，只給了他們一個目標：把球投進籃子裡。

然而，比賽一開始，奈史密斯就懷疑自己是不是做錯了。因為沒有明確的規則，比賽很快陷入一片混亂。學生們為了得分，互相推擠、踢人，甚至揮拳。儘管如此，他們玩得非常開心，還要求再玩一次。奈史密斯後來把這種粗野的室內遊戲，逐步塑造成我們今天所知的籃球運動。

到了1892年，籃球已不只是體育課上的活動。第一場公開比賽在同一間學校體育館舉行，吸引了約200名觀眾。人們的興趣越來越濃厚，校刊也刊登了比賽規則。這些校刊接著透過各地區的基督教青年會網絡寄送到美國各地。規則傳到哪裡，這項運動就跟著傳到哪裡。訓練學校的國際學生也把這項運動帶回自己的國家。久而久之，籃球成為全球公認的一項運動。

即使籃球越來越受歡迎，早期的形式仍遠未標準化。舉例來說，場上的球員人數會因各體育館大小不同而有很大差異。直到後來，每隊五人才成為標準。

早期的器材也相當簡陋。一開始，球員瞄準的是底部封閉的桃子籃，所以每次得分後，都得有人爬梯子把球拿回來。至於球，早期球員用的是足球，後來才有真正的籃球。

接下來的一百年，籃球不斷演變——現代媒體也幫助它成為受歡迎的娛樂形式。透過現場直播，人們可以在家即時享受比賽的刺激；之後也能上網觀看精華短片，補看可能錯過的精彩時刻。

觀眾越多，代表職業籃球聯盟受到越多關注。其中，美國職業籃球聯盟（NBA）格外突出，在把頂尖球員打造成超級巨星方面扮演重要角色。球迷在社群媒體上追蹤自己喜愛的球員，並模仿他們的動作。品牌也與這些人氣球員合作，銷售球衣和球鞋等周邊商品。這項運動不僅看起來刺激，作為一門生意也極具價值。這種商業上的成功，可能也幫助籃球傳播到更多國家，在全世界建立更廣大的球迷基礎。

如今，籃球早已遠遠超越奈史密斯當初創造的簡單遊戲，成為一股跨越國界、凝聚球員與球迷的文化力量。`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "restless", pos: "adj.", meaning: "焦躁不安的", collocations: "grow restless 變得焦躁不安" },
        { id: 2, word: "objective", pos: "n.", meaning: "目標", collocations: "one objective 一個目標" },
        { id: 3, word: "chaotic", pos: "adj.", meaning: "混亂的", collocations: "become chaotic 陷入混亂" },
        { id: 4, word: "spectator", pos: "n.", meaning: "觀眾", collocations: "draw about 200 spectators 吸引約200名觀眾" },
        { id: 5, word: "retrieve", pos: "v.", meaning: "取回", collocations: "retrieve the ball 把球拿回來" },
        { id: 6, word: "merchandise", pos: "n.", meaning: "商品", collocations: "sell merchandise 銷售商品" }
      ],
      grammarNotes: [
        { id: "G1", title: "so + 助動詞 + 主詞 (…也是如此)", excerpt: "As the rules reached new places, so did the game", analysis: "so did the game 為倒裝句，表「這項運動也是如此（也傳到新地方）」，did 代替 reached new places。" },
        { id: "G2", title: "分裂句 It was only later that… (直到後來才…)", excerpt: "It was only later that five players per team became the standard", analysis: "It was … that … 強調 only later，表「直到後來，每隊五人才成為標準」。" }
      ],
      patternNotes: [
        { id: "P1", title: "come up with… (想出…)", excerpt: "came up with a solution", analysis: "come up with 表「想出（點子、辦法）」。" },
        { id: "P2", title: "not only A but also B (不僅A而且B)", excerpt: "not only exciting to watch but also highly valuable as a business", analysis: "not only A but also B 連接兩個形容詞片語，表「不僅…而且…」。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `In the winter of 1891, a snowstorm hit Springfield, Massachusetts, in the US. Students at the International YMCA Training School (now known as Springfield College) could barely exercise outdoors in the snow. They were stuck with dull gym classes that offered little excitement. Before long, the students grew ` },
          { type: 'vocab', text: `restless`, vid: 1 },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `That was when James Naismith, a physical education teacher at the school, ` },
          { type: 'pattern', text: `came up with a solution`, pid: 'P1' },
          { type: 'text', text: `. He set out to design an active, simple, and safe game that could work in a compact gym. Eventually, he found two peach baskets and nailed them to a high rail at each end of the gym. Naismith then divided the students into two teams and gave them one ` },
          { type: 'vocab', text: `objective`, vid: 2 },
          { type: 'text', text: `: throw the ball into the baskets.` }
        ],
        [
          { type: 'text', text: `Once the game began, however, Naismith wondered whether he had made a mistake. The game quickly became ` },
          { type: 'vocab', text: `chaotic`, vid: 3 },
          { type: 'text', text: ` without clear rules. Students pushed, kicked, and even punched one another as they struggled to score. Even so, they enjoyed the game so much that they asked to play again. Naismith went on to shape this rough indoor game into the sport we know as basketball today.` }
        ],
        [
          { type: 'text', text: `By 1892, basketball had become more than a gym-class activity. Its first public game was held in the same school gym and drew about 200 ` },
          { type: 'vocab', text: `spectators`, vid: 4 },
          { type: 'text', text: `. Interest grew, and the school newspaper published the game's rules. Copies of the newspaper were then sent through regional YMCA networks across the US. ` },
          { type: 'grammar', text: `As the rules reached new places, so did the game`, gid: 'G1' },
          { type: 'text', text: `. International students at the training school brought the sport back to their home countries. Over time, basketball came to be recognized globally as a sport.` }
        ],
        [
          { type: 'text', text: `Even as basketball grew more popular, its early form was still far from standardized. The number of players on the court, for instance, could vary a lot depending on the size of each gym. ` },
          { type: 'grammar', text: `It was only later that five players per team became the standard`, gid: 'G2' },
          { type: 'text', text: `.` }
        ],
        [
          { type: 'text', text: `The equipment was also rather basic in the early days. At first, players aimed at peach baskets with closed bottoms. So, someone had to climb a ladder to ` },
          { type: 'vocab', text: `retrieve`, vid: 5 },
          { type: 'text', text: ` the ball after each score. As for the ball, early players used a soccer ball before a proper basketball was produced.` }
        ],
        [
          { type: 'text', text: `Over the next 100 years, basketball kept evolving—and modern media helped turn it into a popular form of entertainment. Through live broadcasts, people can enjoy the excitement of a game from home as it happens. They can also watch short highlights online later, catching the biggest moments they may have missed.` }
        ],
        [
          { type: 'text', text: `A larger audience means professional basketball leagues gain more attention. Among them, the National Basketball Association (NBA) stands out. It plays a major role in making top players into superstars. Fans follow their favorite athletes on social media and copy their moves. Brands also work with these popular players to sell ` },
          { type: 'vocab', text: `merchandise`, vid: 6 },
          { type: 'text', text: `, such as team jerseys and sneakers. The sport has become ` },
          { type: 'pattern', text: `not only exciting to watch but also highly valuable as a business`, pid: 'P2' },
          { type: 'text', text: `. This commercial success likely helps basketball reach even more countries, building a wider fan base around the world.` }
        ],
        [
          { type: 'text', text: `Today, basketball is far more than the simple game that Naismith created. It has become a cultural force that brings players and fans together across borders.` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "After three hours in the car, the children grew ______ and kept asking, \"Are we there yet?\"", options: ["A. calm", "B. patient", "C. silent", "D. restless"], answer: "D", explanation: "【選項解析】\n- (A) calm (adj.) 冷靜的\n- (B) patient (adj.) 有耐心的\n- (C) silent (adj.) 沉默的\n- (D) restless (adj.) 焦躁不安的 (正解)" },
      { id: 2, question: "Our team's main ______ this year is to win the championship.", options: ["A. accident", "B. objective", "C. disaster", "D. weakness"], answer: "B", explanation: "【選項解析】\n- (A) accident (n.) 意外\n- (B) objective (n.) 目標 (正解)\n- (C) disaster (n.) 災難\n- (D) weakness (n.) 弱點" },
      { id: 3, question: "The classroom became ______ when the teacher left and everyone started shouting.", options: ["A. chaotic", "B. peaceful", "C. empty", "D. tidy"], answer: "A", explanation: "【選項解析】\n- (A) chaotic (adj.) 混亂的 (正解)\n- (B) peaceful (adj.) 平靜的\n- (C) empty (adj.) 空的\n- (D) tidy (adj.) 整齊的" },
      { id: 4, question: "The stadium shop sells team ______ such as jerseys, caps, and mugs.", options: ["A. medicine", "B. furniture", "C. merchandise", "D. vegetables"], answer: "C", explanation: "【選項解析】\n- (A) medicine (n.) 藥\n- (B) furniture (n.) 家具\n- (C) merchandise (n.) 商品 (正解)\n- (D) vegetables (n.) 蔬菜" },
    ],
    cloze: {
      text: "In the winter of 1891, students at a school in Springfield could not exercise outdoors [1] of the snow. Their teacher, James Naismith, came up [2] an idea. He nailed two peach baskets to the walls and told the students to throw a ball into them. At first, the game was chaotic [3] there were no clear rules. Still, the students enjoyed it so much [4] they asked to play again. Today, basketball has become a cultural force [5] brings people together around the world.",
      questions: [
        { id: 1, options: ["A. instead", "B. because", "C. in spite", "D. out"], answer: "B", explanation: "because of + N. 表原因：因為下雪無法到戶外運動。" },
        { id: 2, options: ["A. to", "B. for", "C. with", "D. against"], answer: "C", explanation: "come up with 為固定片語，表「想出」。" },
        { id: 3, options: ["A. unless", "B. although", "C. so that", "D. because"], answer: "D", explanation: "because 引導原因子句：因為沒有明確規則，所以比賽很混亂。" },
        { id: 4, options: ["A. that", "B. which", "C. as", "D. than"], answer: "A", explanation: "so + adv. + that 表「如此…以致於…」。" },
        { id: 5, options: ["A. what", "B. that", "C. where", "D. whose"], answer: "B", explanation: "that 引導形容詞子句修飾 force，並在子句中作主詞。" },
      ]
    },
    wordBank: {
      words: ["(A) audience", "(B) basket", "(C) broadcast", "(D) court", "(E) jersey", "(F) ladder", "(G) league", "(H) rule", "(I) score", "(J) snowstorm"],
      passage: "A heavy [1] kept the students indoors.\n\nNaismith nailed a peach [2] to each end of the gym.\n\nAt first, the game did not have a single clear [3].\n\nThe number of players on the [4] depended on the size of the gym.\n\nSomeone had to climb a [5] to get the ball back.\n\nEach time a team made a basket, a point was added to its [6].\n\nFans can watch the game through a live [7] on TV.\n\nThe NBA is the most famous basketball [8] in the world.\n\nThe first public game drew an [9] of about 200 people.\n\nFans buy their favorite player's [10] to wear at games.",
      answers: { 1: "J", 2: "B", 3: "H", 4: "D", 5: "F", 6: "I", 7: "C", 8: "G", 9: "A", 10: "E" }
    },
    discourse: {
      options: [
        "A. He nailed two peach baskets to the walls and told the students to throw a ball into them.",
        "B. The rules were printed in the school newspaper and spread across the US.",
        "C. For example, players used a soccer ball before a proper basketball was produced.",
        "D. Football is also a popular sport in the US.",
        "E. Live broadcasts and online highlights help millions of fans enjoy the games."
      ],
      paragraphs: [
        "Basketball began in 1891, when a snowstorm kept students indoors at a school in Springfield.",
        "Their teacher, James Naismith, wanted a safe indoor game. [1] The game was chaotic at first, but the students loved it.",
        "The game soon spread far beyond the school gym. [2] Still, early basketball was quite different from today's game. [3]",
        "In modern times, the media has made basketball even more popular. [4]"
      ],
      answers: { 1: "A", 2: "B", 3: "C", 4: "E" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. Why snowstorms are dangerous.", "B. How the NBA makes money.", "C. How basketball started and grew into a global sport.", "D. The life of James Naismith's family."], answer: "C", explanation: "主旨題。文章敘述籃球的起源，以及它如何發展成全球運動。" },
        { id: 2, question: "Why did Naismith create the game?", options: ["A. Students could not exercise outdoors because of the snow.", "B. He wanted to sell peach baskets.", "C. The school asked him to start a soccer team.", "D. He wanted to become famous."], answer: "A", explanation: "細節題。暴風雪使學生「could barely exercise outdoors」，變得焦躁不安。" },
        { id: 3, question: "Why did someone have to climb a ladder after each score?", options: ["A. To fix the lights.", "B. To get a better view of the game.", "C. To change the scoreboard.", "D. The peach baskets had closed bottoms."], answer: "D", explanation: "細節題。桃子籃「with closed bottoms」，球進了不會掉下來。" },
        { id: 4, question: "How did basketball spread to other countries?", options: ["A. Through TV broadcasts in 1892.", "B. International students brought it back to their home countries.", "C. The NBA sent players abroad.", "D. Soccer players taught it."], answer: "B", explanation: "細節題。「International students at the training school brought the sport back to their home countries」。" }
      ]
    }
  },

  "Unit 12": {
    title: "Mate: The South American Drink You Need to Try",
    chineseTitle: "認識瑪黛茶 你不可錯過的南美洲茶飲",
    passage: `Picture a group of friends passing a small cup around, hand to hand. Every November 30, people in Argentina celebrate National Mate Day. This special day is all about mate, a drink that is especially popular in Argentina, Paraguay, Uruguay, and southern Brazil.

Mate is made from the dried leaves of a South American evergreen tree. It has a strong, grassy taste, similar to green tea. Traditionally, people place the leaves in a gourd and pour hot water over them. Then, they sip the tea through a metal straw called a bombilla. This straw has a filter at the bottom, which keeps the leaves from being swallowed. In South America, sharing a gourd of mate with others is a welcoming sign of friendship.

Mate is more than a cultural tradition—it's also becoming popular around the world for its impressive health benefits. It contains caffeine, so it helps people feel awake and focused. Plus, it's packed with antioxidants, which may help protect the body's cells. If you want a natural, healthy way to boost your energy, get a gourd, add some mate, and sip away!`,
    chineseTranslation: `想像一群朋友手傳手地傳遞著一個小杯子。每年11月30日，阿根廷人會慶祝全國瑪黛茶日。這個特別的節日就是為了瑪黛茶——一種在阿根廷、巴拉圭、烏拉圭和巴西南部特別受歡迎的飲料。

瑪黛茶是用一種南美洲常綠樹的乾燥葉片製成的，帶有濃郁的青草味，和綠茶有些相似。傳統上，人們會把茶葉放進葫蘆杯裡，再倒入熱水，接著用一根名為「bombilla」的金屬吸管啜飲。這種吸管底部有濾網，可以避免把茶葉吞下去。在南美洲，和別人分享一杯瑪黛茶，是表示歡迎與友誼的象徵。

瑪黛茶不只是一種文化傳統——它也因為對健康有顯著的益處，在世界各地越來越受歡迎。它含有咖啡因，能幫助人保持清醒和專注。此外，它富含抗氧化物，可能有助於保護身體的細胞。如果你想用天然、健康的方式提振精神，就準備一個葫蘆杯，加些瑪黛茶，好好啜飲吧！`,
    annotations: {
      keyVocabList: [
        { id: 1, word: "evergreen", pos: "adj.", meaning: "常綠的", collocations: "an evergreen tree 常綠樹" },
        { id: 2, word: "gourd", pos: "n.", meaning: "葫蘆（容器）", collocations: "a gourd of mate 一葫蘆杯的瑪黛茶" },
        { id: 3, word: "sip", pos: "v.", meaning: "啜飲", collocations: "sip the tea 啜飲茶" },
        { id: 4, word: "filter", pos: "n.", meaning: "濾網、過濾器", collocations: "a filter at the bottom 底部的濾網" },
        { id: 5, word: "swallow", pos: "v.", meaning: "吞下", collocations: "keep… from being swallowed 避免被吞下" },
        { id: 6, word: "antioxidant", pos: "n.", meaning: "抗氧化物", collocations: "packed with antioxidants 富含抗氧化物" }
      ],
      grammarNotes: [
        { id: "G1", title: "keep + O + from + being p.p. (使…免於被…)", excerpt: "which keeps the leaves from being", analysis: "keep A from B 表「阻止A…」；from 後接被動動名詞 being swallowed，表「茶葉被吞下」。which 補充說明 filter 的功能。" },
        { id: "G2", title: "條件子句＋祈使句", excerpt: "If you want a natural, healthy way to boost your energy, get a gourd", analysis: "If 子句提出條件，主要子句用祈使句 get…, add…, and sip away 給建議。" }
      ],
      patternNotes: [
        { id: "P1", title: "be all about… (全是關於…、重點就在…)", excerpt: "is all about mate", analysis: "be all about 表「完全和…有關、以…為核心」。" },
        { id: "P2", title: "be packed with… (充滿、富含…)", excerpt: "it's packed with", analysis: "be packed with 表「裝滿、富含」，後接名詞。" }
      ],
      paragraphs: [
        [
          { type: 'text', text: `Picture a group of friends passing a small cup around, hand to hand. Every November 30, people in Argentina celebrate National Mate Day. This special day ` },
          { type: 'pattern', text: `is all about mate`, pid: 'P1' },
          { type: 'text', text: `, a drink that is especially popular in Argentina, Paraguay, Uruguay, and southern Brazil.` }
        ],
        [
          { type: 'text', text: `Mate is made from the dried leaves of a South American ` },
          { type: 'vocab', text: `evergreen`, vid: 1 },
          { type: 'text', text: ` tree. It has a strong, grassy taste, similar to green tea. Traditionally, people place the leaves in a ` },
          { type: 'vocab', text: `gourd`, vid: 2 },
          { type: 'text', text: ` and pour hot water over them. Then, they ` },
          { type: 'vocab', text: `sip`, vid: 3 },
          { type: 'text', text: ` the tea through a metal straw called a bombilla. This straw has a ` },
          { type: 'vocab', text: `filter`, vid: 4 },
          { type: 'text', text: ` at the bottom, ` },
          { type: 'grammar', text: `which keeps the leaves from being`, gid: 'G1' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `swallowed`, vid: 5 },
          { type: 'text', text: `. In South America, sharing a gourd of mate with others is a welcoming sign of friendship.` }
        ],
        [
          { type: 'text', text: `Mate is more than a cultural tradition—it's also becoming popular around the world for its impressive health benefits. It contains caffeine, so it helps people feel awake and focused. Plus, ` },
          { type: 'pattern', text: `it's packed with`, pid: 'P2' },
          { type: 'text', text: ` ` },
          { type: 'vocab', text: `antioxidants`, vid: 6 },
          { type: 'text', text: `, which may help protect the body's cells. ` },
          { type: 'grammar', text: `If you want a natural, healthy way to boost your energy, get a gourd`, gid: 'G2' },
          { type: 'text', text: `, add some mate, and sip away!` }
        ]
      ]
    },
    vocab: [
      { id: 1, question: "Pine trees are ______; they stay green all year round.", options: ["A. evergreen", "B. dead", "C. hollow", "D. tiny"], answer: "A", explanation: "【選項解析】\n- (A) evergreen (adj.) 常綠的 (正解)\n- (B) dead (adj.) 死的\n- (C) hollow (adj.) 中空的\n- (D) tiny (adj.) 極小的" },
      { id: 2, question: "He took a small ______ of the hot tea and smiled.", options: ["A. bite", "B. step", "C. sip", "D. look"], answer: "C", explanation: "【選項解析】\n- (A) bite (n.) 一口（咬）\n- (B) step (n.) 一步\n- (C) sip (n.) 一小口（喝） (正解)\n- (D) look (n.) 一眼" },
      { id: 3, question: "The coffee machine has a paper ______ that keeps the coffee grounds out of your cup.", options: ["A. handle", "B. filter", "C. button", "D. label"], answer: "B", explanation: "【選項解析】\n- (A) handle (n.) 把手\n- (B) filter (n.) 濾紙、過濾器 (正解)\n- (C) button (n.) 按鈕\n- (D) label (n.) 標籤" },
      { id: 4, question: "Chew your food well before you ______ it.", options: ["A. cook", "B. buy", "C. wash", "D. swallow"], answer: "D", explanation: "【選項解析】\n- (A) cook (v.) 烹煮\n- (B) buy (v.) 購買\n- (C) wash (v.) 清洗\n- (D) swallow (v.) 吞下 (正解)" },
    ],
    cloze: {
      text: "Mate is a popular drink in several South American countries, [1] Argentina and Uruguay. It is made from dried leaves and tastes a bit like green tea. People drink it [2] a metal straw with a filter at the bottom. Sharing mate is a sign of friendship, so friends often pass one gourd around [3] one person to another. Mate is also becoming popular worldwide [4] its health benefits. It contains caffeine, [5] helps people stay awake and focused.",
      questions: [
        { id: 1, options: ["A. instead of", "B. because of", "C. except", "D. including"], answer: "D", explanation: "including 表「包括」，舉出阿根廷與烏拉圭為例。" },
        { id: 2, options: ["A. into", "B. through", "C. over", "D. across"], answer: "B", explanation: "drink through a straw 表「用吸管喝」。" },
        { id: 3, options: ["A. by", "B. on", "C. from", "D. at"], answer: "C", explanation: "from one person to another 表「從一個人傳到另一個人」。" },
        { id: 4, options: ["A. because of", "B. in spite of", "C. instead of", "D. regardless of"], answer: "A", explanation: "because of + N. 表原因：因為對健康有益而受歡迎。" },
        { id: 5, options: ["A. that", "B. what", "C. who", "D. which"], answer: "D", explanation: "逗號後的非限定形容詞子句修飾 caffeine，只能用 which。" },
      ]
    },
    wordBank: {
      words: ["(A) cells", "(B) benefits", "(C) celebrate", "(D) natural", "(E) similar", "(F) pour"],
      passage: "Picture a group of friends passing a small cup around, hand to hand. Every November 30, people in Argentina [1] National Mate Day. This special day is all about mate, a drink that is especially popular in Argentina, Paraguay, Uruguay, and southern Brazil.\n\nMate is made from the dried leaves of a South American evergreen tree. It has a strong, grassy taste, [2] to green tea. Traditionally, people place the leaves in a gourd and [3] hot water over them. Then, they sip the tea through a metal straw called a bombilla. This straw has a filter at the bottom, which keeps the leaves from being swallowed. In South America, sharing a gourd of mate with others is a welcoming sign of friendship.\n\nMate is more than a cultural tradition—it's also becoming popular around the world for its impressive health [4]. It contains caffeine, so it helps people feel awake and focused. Plus, it's packed with antioxidants, which may help protect the body's [5]. If you want a [6], healthy way to boost your energy, get a gourd, add some mate, and sip away!",
      answers: { 1: "C", 2: "E", 3: "F", 4: "B", 5: "A", 6: "D" }
    },
    discourse: {
      options: [
        "A. It contains caffeine and is packed with antioxidants.",
        "B. People in Argentina celebrate National Mate Day every November 30.",
        "C. Coffee is the most popular drink in many Western countries.",
        "D. Sharing a gourd of mate with others is a sign of friendship.",
        "E. The leaves are placed in a gourd, and people sip the tea through a metal straw."
      ],
      paragraphs: [
        "Mate is a drink that is especially popular in parts of South America.",
        "The drink even has its own special day. [1] Mate is made from the dried leaves of an evergreen tree.",
        "There is a traditional way to drink mate. [2] It is often shared among friends. [3]",
        "Today, mate is becoming popular around the world for its health benefits. [4]"
      ],
      answers: { 1: "B", 2: "E", 3: "D", 4: "A" }
    },
    reading: {
      questions: [
        { id: 1, question: "What is the article mainly about?", options: ["A. How to grow evergreen trees.", "B. What mate is, how people drink it, and why it is good for health.", "C. The history of Argentina.", "D. Why green tea is popular."], answer: "B", explanation: "主旨題。文章介紹瑪黛茶是什麼、傳統的喝法，以及它對健康的益處。" },
        { id: 2, question: "What is a bombilla?", options: ["A. A cup made from a gourd.", "B. A type of leaf.", "C. A national holiday.", "D. A metal straw with a filter."], answer: "D", explanation: "細節題。bombilla 是「a metal straw」，底部有濾網。" },
        { id: 3, question: "Why does the bombilla have a filter at the bottom?", options: ["A. To keep the leaves from being swallowed.", "B. To keep the tea hot.", "C. To add flavor to the tea.", "D. To make the tea sweeter."], answer: "A", explanation: "細節題。濾網「keeps the leaves from being swallowed」。" },
        { id: 4, question: "Why might mate help people feel awake?", options: ["A. It is served cold.", "B. It is shared with friends.", "C. It contains caffeine.", "D. It tastes like grass."], answer: "C", explanation: "細節題。「It contains caffeine, so it helps people feel awake and focused」。" }
      ]
    }
  }
};
if (typeof window !== 'undefined') { window.MAGAZINE_UNITS_4U202511 = MAGAZINE_UNITS_4U202511; }
