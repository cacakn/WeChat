//index.js

var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
  
  },
  onLoad: function () {
  },
  go_food: function(){
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/food_pic/food_pic',
      })
    }, 500);
  },
  go_culture: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/culture_pic/culture_pic',
      })
    }, 500);
  },
  go_scape: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/scape_pic/scape_pic',
      })
    }, 500);
  },
  go_winter: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/winter/winter',
      })
    }, 500);
  },
})
