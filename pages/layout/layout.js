// pages/layout/layout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getDom()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  getDom() {
    const query = wx.createSelectorQuery()
    query.selectAll('.item').boundingClientRect()
    query.exec(function(res) {
      console.log(res)
    })
  }

})