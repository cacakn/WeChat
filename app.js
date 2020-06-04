//app.js
App({

  onLaunch: function () {
    // 显示动态数字
    wx.setTabBarBadge({
      index: 3,
      text: '9+'
    })
    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res.code)
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           console.log(res.userInfo)
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    // Info: null,
    // 推荐课程
    nominateList: [

      {
        "id": 1001,
        "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/4.png",
        "playUrl": "https://gitee.com/KingCrimson/xiang/raw/master/video/gzg.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "thumb": 1000,
        "tyep": 2,
        "name": "新疆大草原",
        "summary": "位于新疆北部的阿勒泰地区，是集冰川、湖泊、森林、草原、牧场、河流、民族风情、珍稀动植物于一体的综合景区，被誉为“东方瑞士、摄影师天堂”。",
        "author": {
          "id": 1000,
          "name": "姚明",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      }, {
        "id": 1002,
        "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/3.png",
        "playUrl": "https://gitee.com/KingCrimson/xiang/raw/master/video/gzg.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "thumb": 1500,
        "tyep": 2,
        "name": "天山",
        "summary": "北疆以优美的自然风光为主，雪山、草原、湖泊、河流、羊群、蒙古包、原始森林等，使人乐而忘返。",
        "author": {
          "id": "user_id",
          "name": "李连杰",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1002,
        "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/1.png",
        "playUrl": "https://gitee.com/KingCrimson/xiang/raw/master/video/gzg.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "thumb": 1700,
        "tyep": 2,
        "name": "北疆以优美的自然风光为主，雪山、草原、湖泊、河流、",
        "summary": "北疆以优美的自然风光为主，雪山、草原、湖泊、河流、羊群、蒙古包、原始森林等，使人乐而忘返。",
        "author": {
          "id": 1000,
          "name": "迪丽热巴",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      }
    ],



    hotList: [
      {
        "id": 1001,
        "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/5.png",
        "playUrl": "http://mvvideo10.meitudata.com/5abdf80eef17c6493_H264_3.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "thumb": 1600,
        "tyep": 2,
        "name": "库木塔各沙漠",
        "summary": "雄浑的大漠风光和 蓝天辉映相间，厚重的历史沉淀与西域文化默然相许，金色的沙漠依偎着绿洲守望家园，构成了一幅与大自然和谐共存的精美画卷，奏响了一曲浑然天成，金色涌动的天籁乐章。",
        "author": {
          "id": 1000,
          "name": "four",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      }, {
        "id": 1002,
        "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/6.png",
        "playUrl": "http://mvvideo10.meitudata.com/5abded59446e96967_H264_13.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "thumb": 1900,
        "tyep": 2,
        "name": "火焰山",
        "summary": "因神话传说和独特的自然景观而著称。主峰位于吐鲁番市区以东约40公里处，海拔高度为831.7米，火焰山上高温干旱，“飞鸟千里不敢来”。火焰山处在“丝绸之路”北道上。至今仍留存许多文化古迹和历史佳话。火焰山神奇的地貌、独特的物产，众多的文化遗址，以及《西游记》中孙悟空三借芭蕉扇扇灭火焰山等优美的传说，脍炙人口。",
        "author": {
          "id": "user_id",
          "name": "five",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1002,
        "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/1.png",
        "playUrl": "http://mvvideo10.meitudata.com/5abded59446e96967_H264_13.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "thumb": 1666,
        "tyep": 2,
        "name": "北疆以优美的自然风光为主,使人乐而忘返",
        "summary": "北疆以优美的自然风光为主，雪山、草原、湖泊、河流、羊群、蒙古包、原始森林等，使人乐而忘返。",
        "author": {
          "id": 1000,
          "name": "six",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      }
    ],
   
   
    //首页轮播图数据
    swiperList: [{
      "id": 1002,
      "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/pic1.png",
      "playUrl": "http://mvvideo10.meitudata.com/5abded59446e96967_H264_13.mp4",
      "browse": 3650,
      "collect": 87,
      "op": 7487,
      "share": 9879,
      "like": 157,
      // "price": 85.7,
      "tyep": 2,
      // "name": "You Are The Reason",
      // "summary": "晚安翻唱#我甘愿翻山越岭，穿过海洋，只为陪伴着你。歌曲：You Are The Reason - 原唱：Calum Scott）",
      "author": {
        "id": "user_id",
        // "name": "sunny",
        // "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
      }
    },
    {
      "id": 10001,
      "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/pic2.png",
      "playUrl": "http://mvvideo10.meitudata.com/5abdef97ca4d91880_H264_13.mp4",
      "name": "Alyson Stoner",
      // "summary": "Evolution of K-POP - 翻唱制作：Alyson Stoner ",
      "like": 1580,
      "collect": 587,
      "op": 87,
      "share": 79,
      "author": {
        "id": 1000,
        // "name": "sunny",
        // "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
      }
    },
    {
      "id": 10002,
      "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/pic3.png",
      "playUrl": "http://mvvideo10.meitudata.com/5a8818309202a409_H264_13.mp4",
      "name": "Medicine",
      // "summary": "我知道没有你我也很坚强，你的离开不会让我伤心太久，我已经不在乎了，你不能再左右我的心了。（歌曲：Medicine - 原唱：Kelly Clarkson - 翻唱制作：KHS）",
      "like": 10,
      "collect": 87,
      "op": 7487,
      "share": 9879,
      "author": {
        "id": 1000,
        // "name": "sunny",
        // "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
      }
    },

    {
      "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/xs.png",
      "playUrl": "http://mvvideo11.meitudata.com/5aaa6470c82e81959_H264_13.mp4",
      "id": 10005,
      // "name": "The Middle",
      // "summary": "亲爱的，你为何不愿意做出一点让步，做出一点牺牲，我快要被逼疯了",
      "like": 8810,
      "collect": 87,
      "op": 7487,
      "share": 9879,
      "author": {
        "id": 1000,
        // "name": "sunny",
        // "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
      }
    }, {
      "cover": "https://gitee.com/KingCrimson/xiang/raw/master/images/wct.png",
      "playUrl": "http://mvvideo10.meitudata.com/5a4f7d70ef4f42024_H264_3.mp4",
      "id": 10004,
      // "name": "Madilyn Bailey",
      // "summary": "来自英国的两位抒情派歌手，你们喜欢他俩组合吗？（歌曲：ADELE vs SAM SMITH Mashup - 翻唱制作：Madilyn Bailey )",
      "like": 8810,
      "collect": 87,
      "op": 7487,
      "share": 9879,
      "author": {
        "id": 1000,
        // "name": "sunny",
        // "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
      }
    }
    ],
    
   
    
  }
})