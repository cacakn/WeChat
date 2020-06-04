Page({
 bindrecode:function(){
   wx.navigateTo({
     url: '../record/login/login',
   })
 },
  data: {
 
  },

  ddd: function () {

 
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  bindlogin: function () {
    if ( this.data.phone == undefined || this.data.password == undefined||this.data.phone.length == 0 || this.data.password.length == 0 ) {
      wx.showToast({

        title: '用户名密码为空',
        icon: 'loading',
        duration: 2000
      })
    } else if (this.data.phone == "admin" && this.data.password == "123" || this.data.phone == "mzc" && this.data.password == "0427" || this.data.phone == "mjq" && this.data.password == "123456789"){
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
      wx.reLaunch({
        url: '../index/index',
      })
    }
    else{
      wx.showToast({
        title: '账号密码错误',
        icon: 'loading',
        duration: 2000
      })
    }

  } 
})