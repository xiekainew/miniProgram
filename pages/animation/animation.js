// pages/animation/animation.js
Page({

    /**
   * 页面的初始数据
   */
    data: {
        isOpen: false,
        animationData: {},
    },

    /**
   * 生命周期函数--监听页面加载
   */
    onLoad() {
        this.isOpen = false;
        this.init();
    },
    init() {
        const animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        });
        this.animation = animation;
    },
    change() {
        this.isOpen = !this.isOpen;
        const height = this.isOpen ? 300 : 0;
        this.animation.height(height).step({
            duration: 500
        });
        this.setData({
            animationData: this.animation.export()
        });
    }
});
