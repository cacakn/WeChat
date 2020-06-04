//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  note:function(){
    wx.navigateTo({
      url: 'personal/note/note',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  record: function () {
    wx.navigateTo({
      url: 'personal/record/record',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  collection: function () {
    wx.navigateTo({
      url: 'personal/collection/collection',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  achievement: function () {
    wx.navigateTo({
      url: 'personal/achievement/achievement',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  test: function () {
    wx.navigateTo({
      url: 'personal/test/test',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  feedback: function () {
    wx.navigateTo({
      url: 'personal/feedback/feedback',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  setup: function () {
    wx.navigateTo({
      url: 'personal/setup/setup',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
bindViewTap: function(){
  wx.navigateTo({
    url: 'personal/information/information',
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
},
  


  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})