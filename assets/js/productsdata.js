const products = [
  {
  id:"p001",
  name:"衣索比亞 耶加雪菲 G1",
  priceOptions:{
  "227g":320,
  "454g":580,
  "1kg":1100
  },
  weight:"227g / 454g / 1kg",
  roast:"淺焙",
  origin:"衣索比亞",
  desc:"帶有茉莉花香、柑橘與莓果調性，酸值明亮且層次豐富。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p001.png"
  },
  {
  id:"p002",
  name:"衣索比亞 古吉 烏拉嘎",
  priceOptions:{
  "227g":350,
  "454g":650,
  "1kg":1200
  },
  weight:"227g / 454g / 1kg",
  roast:"淺焙",
  origin:"衣索比亞",
  desc:"花香濃郁，帶有水蜜桃與佛手柑風味。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p002.png"
  },
  {
  id:"p003",
  name:"衣索比亞 西達摩",
  priceOptions:{
  "227g":300,
  "454g":560,
  "1kg":1050
  },
  weight:"227g / 454g / 1kg",
  roast:"淺焙",
  origin:"衣索比亞",
  desc:"檸檬、莓果與蜂蜜甜感兼具。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p003.png"
  },
  {
  id:"p004",
  name:"哥倫比亞 薇拉",
  priceOptions:{
  "227g":320,
  "454g":590,
  "1kg":1120
  },
  weight:"227g / 454g / 1kg",
  roast:"中焙",
  origin:"哥倫比亞",
  desc:"焦糖、堅果與巧克力香氣均衡。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p004.png"
  },
  {
  id:"p005",
  name:"哥斯大黎加 塔拉珠",
  priceOptions:{
  "227g":340,
  "454g":620,
  "1kg":1180
  },
  weight:"227g / 454g / 1kg",
  roast:"中淺焙",
  origin:"哥斯大黎加",
  desc:"柑橘果香與焦糖甜感明顯。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p005.png"
  },
  {
  id:"p006",
  name:"瓜地馬拉 安提瓜",
  priceOptions:{
  "227g":330,
  "454g":600,
  "1kg":1150
  },
  weight:"227g / 454g / 1kg",
  roast:"中焙",
  origin:"瓜地馬拉",
  desc:"可可與煙燻堅果風味。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p006.png"
  },
  {
  id:"p007",
  name:"巴拿馬 波奎特",
  priceOptions:{
  "227g":420,
  "454g":780,
  "1kg":1500
  },
  weight:"227g / 454g / 1kg",
  roast:"淺焙",
  origin:"巴拿馬",
  desc:"花香與熱帶水果風味突出。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p007.png"
  },
  {
  id:"p008",
  name:"肯亞 AA TOP",
  priceOptions:{
  "227g":380,
  "454g":700,
  "1kg":1350
  },
  weight:"227g / 454g / 1kg",
  roast:"中淺焙",
  origin:"肯亞",
  desc:"黑醋栗與葡萄柚風味濃郁。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p008.png"
  },
  {
  id:"p009",
  name:"巴西 喜拉朵",
  priceOptions:{
  "227g":280,
  "454g":520,
  "1kg":980
  },
  weight:"227g / 454g / 1kg",
  roast:"中焙",
  origin:"巴西",
  desc:"堅果與牛奶巧克力調性。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p009.png"
  },
  {
  id:"p010",
  name:"印尼 曼特寧",
  priceOptions:{
  "227g":360,
  "454g":680,
  "1kg":1280
  },
  weight:"227g / 454g / 1kg",
  roast:"中深焙",
  origin:"印尼",
  desc:"厚實草本與木質香氣。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p010.png"
  },
  {
  id:"p011",
  name:"薩爾瓦多 聖塔安娜",
  priceOptions:{
  "227g":310,
  "454g":580,
  "1kg":1080
  },
  weight:"227g / 454g / 1kg",
  roast:"中焙",
  origin:"薩爾瓦多",
  desc:"焦糖與核桃風味。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p011.png"
  },
  {
  id:"p012",
  name:"宏都拉斯 SHG",
  priceOptions:{
  "227g":300,
  "454g":550,
  "1kg":1050
  },
  weight:"227g / 454g / 1kg",
  roast:"中焙",
  origin:"宏都拉斯",
  desc:"巧克力與紅糖甜感。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p012.png"
  },
  {
  id:"p013",
  name:"盧安達 天空之城",
  priceOptions:{
  "227g":350,
  "454g":650,
  "1kg":1200
  },
  weight:"227g / 454g / 1kg",
  roast:"淺焙",
  origin:"盧安達",
  desc:"莓果與花香調性鮮明。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p013.png"
  },
  {
  id:"p014",
  name:"秘魯 有機咖啡",
  priceOptions:{
  "227g":330,
  "454g":620,
  "1kg":1180
  },
  weight:"227g / 454g / 1kg",
  roast:"中焙",
  origin:"秘魯",
  desc:"黑糖與可可尾韻。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p014.png"
  },
  {
  id:"p015",
  name:"沉湖月色 招牌綜合豆",
  priceOptions:{
  "227g":360,
  "454g":680,
  "1kg":1280
  },
  weight:"227g / 454g / 1kg",
  roast:"中焙",
  origin:"綜合配方",
  desc:"焦糖、可可與堅果香氣均衡。",
  storage:"避免陽光直射及潮濕環境",
  image:"assets/img/products/p015.png"
  }
  ];