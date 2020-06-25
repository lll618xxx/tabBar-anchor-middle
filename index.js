new Vue({
    el: '#app',
    data: {
        list: ['娱乐', '体育', '财经', '懂车帝', '生命之源', '新闻资讯', '明星', '综艺'],
        activeBar: 0
    },
    methods: {
        barOnClick (index) {
            this.activeBar = index
            this.setBarCenter(index)
        },
        // 将选中Bar定位到中间
        setBarCenter (index) {
            const tab = this.$refs.tab // 获取tab容器对象
            const nav = this.$refs.tabItem // 获取tab-item对象
            
            const middleWidth = tab.offsetWidth / 2 // 获取外部容器宽度的一半

            const navWidthList = [] // 存储每个tab-item的宽度
            for (let i = 0; i < nav.length; i++) {
                navWidthList.push(nav[i].offsetWidth)
            }

            const totalWidth = navWidthList.reduce((cur, pre, i) => {
                const result = index >= i ? pre : 0
                return cur + result
              }, 0)
        
            if (totalWidth < middleWidth) {
                tab.scrollLeft = 0
            } else {
                tab.scrollLeft = totalWidth - middleWidth - navWidthList[index]/2
            }
        }
    }
})