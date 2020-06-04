// pages/search/search.js
const innerAudioContext = wx.createInnerAudioContext();
Page({
  data: {
    i: 1,
    culturelist: [{
      id: 1,
      name: "文化",
      title: "新疆博湖本土文化符号引领乡村旅游",
      img: "https://gitee.com/KingCrimson/xiang/raw/master/images/culture.jpg",
      massage: "2019-06-26 来源：农民日报作者:何阳 刘昊",
      text: "夏日的新疆博斯腾湖大河口景区游人如织，此起彼伏的歌声、笑声、掌声，汇聚成一片欢乐的海洋。日前，继“中国西海·东归梦回”博湖县第五届萨吾尔登故乡文化艺术节开篇“舞动博斯腾”后，“歌唱博斯腾”篇章在该县大河口景区正式拉开帷幕，短调民歌对唱、戏曲联唱、书画展等，让广大游客置身于“文化+”的喜庆祥和氛围之中，感受传统民俗文化的魅力。\n在博斯腾湖大河口景区西海沙浪景点，来自全县500余位能歌善舞的非遗传承人和民间艺人们，穿着蒙古族盛装，在舞台上尽情表演。他们用生动的表演、动人的旋律，演绎着蒙古族传统淳朴短调民歌，赢得了现场观众阵阵掌声。\n今年59岁的巴都木才次克是新疆博湖县查干诺尔乡村民，也是自治州级短调非遗文化继承人。她从小就喜欢唱歌，每当唱起短调，就仿佛置身于大草原之中，眼前浮现蔚蓝的天空、成群的牛羊、奔驰的骏马、自由的牧人……她说：“这几年，我和姐妹们一直致力于短调的整理、传唱与继承，现在好多年轻人，对优秀传统文化非常喜欢，和我们一起学习演唱，一看到哪儿有活动，都会积极去参与。我们要让短调继续传唱下去。”\n在大河口景区西海长廊，30余幅画家名师的作品展现在游客面前。当日，巴州美术家协会写生创作基地落地博湖县。\n由京剧、豫剧、黄梅戏等组成的戏曲联唱也为游客们带来了一场精彩的视听盛宴。\n观美丽风景、听优美曲调、品特色美食、感“文化旅游+”魅力，博湖县按照“生态立县、旅游兴县、绿色崛起、同步小康”的发展战略，坚持将旅游业作为县域经济的战略性支柱产业来培育，依托博斯腾湖奇特的旅游资源，规划精品全域旅游线路，采取挖掘具有浓郁博湖特色的美食、规范乡村旅游接待标准、开发博湖特色旅游纪念品等措施，推进文旅融合、旅游+第三产业、旅游扶贫等旅游融合发展，丰富产品供给，完善要素，突出特色，构建全域旅游共建共享体系。\n“今后，博湖县将持续打造渔文化、沙文化、水文化、西游文化等特色系列文化，在全季游、全时游、全域游、全民游上下功夫，积极探索发展‘风景观光、沙漠探险、冬季冰雪、民俗风情、农业休闲’等互动体验项目，不断提升博湖旅游的吸引力和竞争力。”博湖县文化体育广播电视和旅游局局长战立军说。",
      pages: ['']
    }],
  },


  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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

})