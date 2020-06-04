
Page({
  // onClickLeft() {
  //   wx.showToast({ title: '点击返回', icon: 'none' });
  // },
  // onClickRight() {
  //   wx.showToast({ title: '点击按钮', icon: 'none' });
  // },
  testsj: function () {
    wx.navigateTo({
      url: 'ceshi/sj/sj',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  testsx: function () {
    wx.navigateTo({
      url: 'ceshi/sx/sx',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  cuotiji:function(){
    wx.navigateTo({
      url: 'ceshi/ctj/ctj',
    })
  }
  
})