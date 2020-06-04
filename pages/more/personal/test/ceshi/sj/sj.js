//index.js
//获取应用实例
const app = getApp()
const questionData = require("../../../../../../data/question.js")
Page({
  data: {
    cur: 1,
    n: 0,
    sj: 0,
    questions: {},
    color: "#FBFBFB", //初始颜色
    zqcolor: "#FFB6C1",//正确颜色
    cwcolor: "#0000CD",//错误颜色
    xxA: '',
    xxB: '',
    xxC: '',
    xxD: '',
    analysisjiexi: "jiexi" //解析
  },
  onLoad: function () {
    this.setData({
      questions: questionData.questionList.results,
      n: questionData.questionList.results.length,
      sj: Math.floor(Math.random() * questionData.questionList.results.length),
    })
  },
  // 点击下一题
  onclick: function () {
    var that = this;
    var sj = that.data.cur - 1;
    this.setData({
      xxA: that.data.color,
      xxb: that.data.color,
      xxC: that.data.color,
      xxD: that.data.color,
    })
    if (sj < that.data.n - 1) {
      that.setData({
        sj: Math.floor(Math.random() * questionData.questionList.results.length),
      })
    } else {
      wx.showToast({
        icon: 'none', //提示图标
        title: '结束',
        duration: 1500
      })
    }
  },
  //再来一次
  zailaiyici: function () {
    var that = this;
    this.setData({
      xxA: that.data.color
    });
    this.setData({
      xxB: that.data.color
    });
    this.setData({
      xxC: that.data.color
    });
    this.setData({
      xxD: that.data.color
    });
  },
  // 点击答案
  dianji: function (e) {
    var that = this;
    var daan = questionData.questionList.results[that.data.sj].daan;
    var selection = e.currentTarget.id;
    if (selection == daan) {
      if (selection == "A") {
        this.setData({
          xxA: that.data.zqcolor,
        });
      } else if (selection == 'B') {
        this.setData({
          xxB: that.data.zqcolor,
        });
      } else if (selection == 'C') {
        this.setData({
          xxC: that.data.zqcolor,
        });
      } else if (selection == 'D') {
        this.setData({
          xxD: that.data.zqcolor,
        });
      }
    } else {
      if (selection == 'A') {
        wx.showToast({
          icon: 'none', //提示图标
          title: '錯誤',
          duration: 1500
        })
      } else if (selection == 'B') {
        wx.showToast({
          icon: 'none', //提示图标
          title: '錯誤',
          duration: 1500
        })

      } else if (selection == 'C') {
        wx.showToast({
          icon: 'none', //提示图标
          title: '錯誤',
          duration: 1500,
        })

      } else if (selection == 'D') {
        wx.showToast({
          icon: "none",
          title: '错误',
          duration: 1500
        })
      }
    }
  },
  jiexi: function () {
    var that = this;
    this.setData({
      analysisjiexi: questionData.questionList.analysis,
    })
  }
})