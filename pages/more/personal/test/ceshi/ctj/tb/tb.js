var wxCharts = require('../../../../../../../utils/wxcharts.js');
const questionData = require("../../../../../../../data/question.js")
var app = getApp();
var pieChart = null;
Page({
  data: {
    ctzs: 0,
    n: 0,
  },
  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  onLoad: function (e) {
    var that = this;
    var windowWidth = 320;

    this.data.ctzs = wx.getStorageSync('zuida')
    this.data.n = questionData.questionList.results.length - wx.getStorageSync('zuida')


    console.log(this.data.ctzs)
    console.log(this.data.n)

    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '正确率',
        data: this.data.ctzs,
      }, {
        name: '错误率',
        data: this.data.n,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  },
});