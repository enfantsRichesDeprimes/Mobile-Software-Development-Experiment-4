var common= require('../../utils/common.js')
const app = getApp()
Page({
  data:{
    swiperImg:[
      {src:"https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage1.jpg"},
      {src:"http://i2.chinanews.com/simg/cmshd/2019/10/05/998e12aa71f248d4a797761b18e48418.jpg"},
      {src:"http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg"}
    ],
    newsList:[] 
  },
  goToDetial(e){
      let id=e.currentTarget.dataset.id
      wx.navigateTo({
        url:'../detail/detail?id='+id,
      })
  },
  onLoad(){
    let List=common.getNewList()
    this.setData({
      newsList:List
    })
  },
})