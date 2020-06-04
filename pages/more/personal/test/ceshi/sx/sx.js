//index.js
//获取应用实例
const app = getApp()
const questionData = require("../../../../../../data/question.js")

Page({
  data: {

    cur: 1,
    n: 0,
    c: 0,
    a: 1,
    d: 0,
    e: 0,
    max: 0,
    zuida: 1,
    questions: {},
    color: "#FBFBFB", //初始颜色
    zqcolor: "#FFB6C1", //正确颜色
    xxA: '',
    xxB: '',
    xxC: '',
    xxD: '',
    analysisjiexi: "jiexi", //解析
    // dianjicishu:0,
    index: 1,

  },
  //错题集
  cuotijianniu: function () {
    wx.navigateTo({
      url: '../hello/hello',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function () {
    this.data.zuida=0
    this.setData({
      questions: questionData.questionList.results,
      n: questionData.questionList.results.length,
      zuida: 0
    })
  },
  // 点击下一题
  onclick: function () {
    this.data.a += 1
    var that = this;
    var i = that.data.cur - 1;
    this.setData({
      xxA: that.data.color,
      xxB: that.data.color,
      xxC: that.data.color,
      xxD: that.data.color,
    })
    if (i < that.data.n - 1) {
      that.setData({
        cur: that.data.cur + 1,
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
    // this.data.dianjicishu+=1;
    var that = this;
    var daan = questionData.questionList.results[that.data.cur - 1].daan;
    var selection = e.currentTarget.id;
    if (selection == daan) {
      // this.data.dianjicishu = 0;
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
  //加入错题库
  jiarucuotiji: function () {
    var that = this;
    if (this.data.zuida > this.data.max) {
      this.setData({
        max: this.data.zuida
      })
    }
    wx.getStorage({
      key: 'b[' + this.data.a + ']',
      success() {
        wx.showToast({
          icon: "none",
          title: '在错题集里面了',
          duration: 1500
        })
      },
      fail() {
        that.data.c += 1
        wx.setStorage({
          key: 'b[' + that.data.c + ']',
          data: that.data.cur,
        })
        wx.setStorage({
          key: 'zuida',
          data: that.data.max + 1
        })
        that.data.zuida += 1
      }
    })
  },
  
})