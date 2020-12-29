// index.js
// 获取应用实例
const app = getApp();

Page({
    data: {
        list: [
            {
                path: '/pages/animation/animation',
                name: '动画'
            }, {
                path: '/pages/region/region',
                name: '省份选择'
            }, {
                path: '/pages/layout/layout',
                name: '布局'
            }
        ]
    },

    onLoad() {

    },
    jump(e) {
        const {path} = e.currentTarget.dataset;
        wx.navigateTo({
            url: path
        });
    }

});
