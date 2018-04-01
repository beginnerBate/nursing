import Vue from 'vue'
import Vuex from 'vuex'
import loS from '@/api/loStorage'

// 在使用vuex之前使用，先初始化相关数据
const init = [
    {name:'isLogin',value:'false'},
    {name:'themeType',value:'day'}
    // {name:'isLogin',value:'false'},
    // {name:'isLogin',value:'false'},
]
loS.initData(init)

Vue.use(Vuex)

const state = {
    headmenu: '首页',
    themeType: loS.getItem('themeType', true)
}
const mutations = {
    changeheadmenu (state, name) {
        state.headmenu = name
    },
    setTheme (state, code) {
        loS.setItem('themeType',code);
        state.themeType = loS.getItem('themeType',true)
    }
}
export default new Vuex.Store({
    state,
    mutations
})