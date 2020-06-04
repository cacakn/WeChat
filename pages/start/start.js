Page({
  data: {

  },
  onLoad: function () {
    
    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
  }, 8000)
  },
})      