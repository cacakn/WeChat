//discovery.js
var util = require('../../utils/util.js')
const innerAudioContext = wx.createInnerAudioContext();
Page({
  data: {
    i: 1,
    navTab: ["简介", "文化", "非遗", "饮食", "旅游",],

    culturelist: [{
      id: 1,
      name: "文化",
      title: "新疆博湖本土文化符号引领乡村旅游",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/culture.jpg",
      massage: "2019-06-26 来源：农民日报作者:何阳 刘昊",
      pages: ['']
    },
    {

      id: 2,
      name: "文化",
      title: "新疆喀什：迈向国际丝路文化旅游目的地",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/3.png",
      massage: "2019-07-12来源：深圳新闻网作者：王志明",
      pages: ['']
    },
    {
      id: 3,
      name: "文化",
      title: "新疆阿图什开展文化下乡活动",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/culture3.png",
      massage: "2018-12-27来源：新疆维吾尔自治区党委宣传部",
      pages: ['']
    },
    {
      id: 4,
      name: "文化",
      title: "新疆维吾尔自治区库车县热斯坦历史文化街区",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/culture4.jpg",
      massage: "来源：住建部",
      pages: ['']
    }
    ],


    ICHlist: [{
      id: 5,
      name: "非遗",
      title: "抒写晋疆情 合力谱新篇",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/ICH1.jpg",
      massage: "2019-03-20 来源：新疆兵团学习平台",
      pages: ['']
    },
    {
      id: 6,
      name: "非遗",
      title: "新疆的文化保护与发展新疆的文化保护与发展",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/ICH2.jpg",
      massage: "2018-11-15 来源：新华社",
      pages: ['']
    },
    {
      id: 7,
      name: "非遗",
      title: "维吾尔族民歌 喀什木卡姆《太孜》",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/ICH3.jpg",
      massage: "2019-03-21 来源：上海音乐出版社",
      pages: ['']
    },
    {
      id: 8,
      name: "非遗",
      title: "新疆克州：文体旅互融促全域发展",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/ICH4.jpg",
      massage: "2019-08-06 来源:中国旅游报 作者:何先茂",
      pages: ['']
    }
    ],

    dietlist: [{
      id: 9,
      name: "饮食",
      title: "新疆乌鲁木齐：从“地摊买卖”到“食、游、购、娱”",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/diet1.jpg",
      massage: "2019-09-03 来源：新疆学习平台",
      pages: ['']
    },
    {
      id: 10,
      name: "饮食",
      title: "160多种葡萄集体亮相 大美新疆香飘世园",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/diet2.jpg",
      massage: "2019-09-18 来源:北京日报",
      pages: ['']
    },
    {
      id: 11,
      name: "饮食",
      title: "【新疆美食】黄面和烤肉",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/diet3.jpg",
      massage: "2019-09-06 来源:新疆学习平台",
      pages: ['']
    },
    {
      id: 12,
      name: "饮食",
      title: "新疆美食：沙湾大盘鸡",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/diet4.jpg",
      massage: "2019-09-06 来源:新疆学习平台",
      pages: ['']
    }
    ],



    tourismlist: [{
      id: 13,
      name: "旅游",
      title: "旅游打造新疆最迷人的名片",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/tourism1.jpg",
      massage: "2019-09-19 来源:新疆学习平台",
      pages: ['']
    },
    {

      id: 14,
      name: "旅游",
      title: "“舌尖上的新疆”成旅游新品牌",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/tourism2.jpg",
      massage: "2019-08-19 来源:新疆日报 作者:任江",
      pages: ['']
    },
    {
      id: 15,
      name: "旅游",
      title: "新疆福海县阿克乌提克勒村：奏响特色乡村旅游发展三部曲",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/tourism3.jpg",
      massage: "2019-08-11 来源:经济日报 作者:文汇 韩荣",
      pages: ['']
    },
    {
      id: 16,
      name: "旅游",
      title: "旅游专列画中行：坐着火车游新疆成新时尚",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/tourism.jpg",
      massage: "2019-07-07 来源:新疆日报 作者:张海峰",
      pages: ['']
    }
    ],

    // discovery的格式
    currentNavtab: "0",
    activeNames: ['1'],
    imgUrls: [
      'https://gitee.com/KingCrimson/xiang/raw/master/images/hdf.png',
      'https://gitee.com/KingCrimson/xiang/raw/master/images/pic1.png',
      'https://gitee.com/KingCrimson/xiang/raw/master/images/pic2.png',
      'https://gitee.com/KingCrimson/xiang/raw/master/images/pic3.png'

    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0,
    motto: '新疆远离海洋，深居内陆，四周有高山阻隔，海洋气流不易到达，形成明显的温带大陆性气候。气温温差较大，日照时间充足，降水量少，气候干燥。新疆年平均降水量为150毫米左右，但各地降水量相差很大，南疆的气温高于北疆，北疆的降水量高于南疆。由于新疆大部分地区春夏和秋冬之交日温差极大，故历来有“早穿皮袄午穿纱，围着火炉吃西瓜”之说。山脉与盆地相间排列盆地与高山环抱、喻称“三山夹二盆”。北部阿尔泰山，南部为昆仑山系；天山横亘于新疆中部，把新疆分为南北两半，南部是塔里木盆地，北部是准噶尔盆地。习惯上称天山以南为南疆，天山以北为北疆，把哈密、吐鲁番盆地为东疆',
    motto1: ' 提及新疆的历史文化，大多数人都会联想到丝绸之路，但是这只是新疆历史文化的一部分。心里的历史文化主要分为丝绸之路的文化、游牧民族文化、以佛为信仰的宗教文化，“丝绸之路”是古代中国连接其他洲的商业贸易之路。它把亚洲、欧洲。非洲连接起来，进行贸易和文化的交流丝绸之路起源于汉武帝时期，当时汉武帝派遣张骞出使西域，这就是丝绸之路的最初形态。丝绸之路的起始地位于当时的洛阳，在到达新疆之后，分为了北中南三路，到达了地中海东岸，东罗马帝国等地方。 贸易带来的是经济的繁荣和文化的交流。当时的新疆在丝绸之路的沿途是有村落的，而且还是比较繁华的，但是随着时间的变迁，那些村庄已经成为了历史。留下的只有少许的村落遗迹。在我国丝绸之路的沿途地方，仍有不少地区还保存着丝绸之路贸易回来的商品。',
    motto2: '张骞（前164年―前114年），字子文，汉中郡城固（今陕西省汉中市城固县）人，中国汉代杰出的外交家、旅行家、探险家。张骞富有开拓和冒险精神，建元二年（前139年），奉汉武帝之命，由甘父做向导，率领一百多人出使西域，打通了汉朝通往西域的南北道路，即赫赫有名的丝绸之路，汉武帝以军功封其为博望侯。张骞是丝绸之路的开拓者，被誉为“第一个睁开眼睛看世界的中国人”。他将中原文明传播至西域，又从西域诸国引进了汗血马、葡萄、苜蓿、石榴、胡麻等物种到中原，促进了东西方文明的交流。',
    motto3: '天山天池： 享有“天山明珠”盛誉的天山天池，是一个天然的高山湖泊。它坐落在北天山东段博格达峰下的半山腰，海拔1980米。湖面呈半月形，长3400米，最宽处约1500米，面积4.9平方公里。湖深数米到105米。湖水清澈，晶莹如玉。四周群山环抱，绿草如茵，野花似锦。挺拔、苍翠的云杉、塔松，漫山遍岭，遮天蔽日。 天池东南面就是雄伟的博格达主峰(蒙古语“博格达”，意为灵山、圣山)，海拔5445米。主峰左右又有两峰肩连。抬头远眺，三峰并起，突兀插云，状如笔架。峰顶的冰川积雪，闪烁着皑皑银光，与天池瓦蓝澄碧的湖水相映成趣，构成了这个高山平湖绰约多姿的自然景观。天池属冰碛湖。',
  },

  // discovery的格式
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },


  onLoad: function () {

  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },


  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
    console.log("lower")
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //网络请求数据, 实现刷新
  refresh0: function () {
    var index_api = '';
    util.getData(index_api)
      .then(function (data) {
        //this.setData({
        //
        //});
        console.log(data);
      });
  },

  //使用本地 fake 数据实现刷新效果
  refresh: function () {
    var feed = util.getDiscovery();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function () {
    var next = util.discoveryNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  },
  say: function (e) {
    var that = this;
    // console.log(e.currentTarget.dataset.text);
    var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(e.currentTarget.dataset.text);
    innerAudioContext.src = url;
    this.data.i = this.data.i + 1;
    if (this.data.i % 2 == false) {
      innerAudioContext.play();
    }
    else {
      innerAudioContext.stop();
    }
  }

});
