Page({
  data: {
    number:0,
    nickName:"未登录",
    src:"/images/index1.png",
    newsList:[]
  },
  getMyInfo:function(e){
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo.avatarUrl)
        console.log(res.userInfo)
        this.setData({
          src:res.userInfo.avatarUrl,
          nickName:res.userInfo.nickName,
          isLogin:true
        })
        this.getMyFavorites()
      }
    })
    // this.setData({
    //   src:info.avatarUrl,
    //   nickName:info.nickName,
    //   isLogin:true
    // })
    // this.getMyFavorites()
  },
  getMyFavorites:function(){
    let info=wx.getStorageInfoSync()
    let keys=info.keys
    console.log("123",info)
    let num=keys.length-1
    let myList=[];
    for (var i=0;i<num;i++){
      let obj=wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    this.setData({
      newsList:myList,
      number:num
    })
  },
  goToDetial:function(e)
  {
      let id=e.currentTarget.dataset.id

      wx.navigateTo({
        url:'../detail/detail?id='+id,
      })
  },
  onShow: function () {
    if(this.data.isLogin){
      this.getMyFavorites()
    }
  },
})