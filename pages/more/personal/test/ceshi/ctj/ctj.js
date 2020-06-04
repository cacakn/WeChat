//index.js
//获取应用实例
const app = getApp()
const questionData = require("../../../../../../data/question.js")

Page({
  data: {
    cur: 0,
    n: 0,
    c: 0,
    ctzs: 0,
    questions: {},
    zqcolor: "#FFB6C1", //正确颜色
    color: "#FBFBFB",
    xxA: '',
    xxB: '',
    xxC: '',
    xxD: '',
    analysisjiexi: "jiexi", //解析
    // dianjicishu: 0,
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'zuida',
      success: function (res) {
        that.setData({
          ctzs: res.data
        })
      }
    })
    wx.getStorage({
      key: 'b[1]',
      success: function (res) {
        that.setData({
          cur: res.data
        })
      }
    })
    this.setData({
      questions: questionData.questionList.results,
    })
    // console.log(this.data.cuotishu);
  },
  // 点击下一题
  onclick: function () {
    var that = this;
    var i = this.data.cur;
    this.setData({
      xxA: that.data.color,
      xxB: that.data.color,
      xxC: that.data.color,
      xxD: that.data.color,
    })
    if (i <= questionData.questionList.results.length) {
      this.data.c += 1
      wx.getStorage({
        key: 'b[' + this.data.c + ']',
        success: function (res) {
          that.setData({
            cur: res.data
          })
        }
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
    // this.data.dianjicishu += 1;
    var that = this;
    var daan = questionData.questionList.results[that.data.cur - 1].daan;
    var selection = e.currentTarget.id;
    if (selection == daan) {
      this.data.dianjicishu = 0;
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
  qiko: function () {
    wx.clearStorage();
  },
  shangchu: function () {
    wx.removeStorage({
      key: 'b[' + this.data.cur + ']',
    })
  },
  pie: function () {
    wx.navigateTo({
      url: 'tb/tb',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})