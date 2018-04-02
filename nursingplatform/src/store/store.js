import Vue from 'vue'
import Vuex from 'vuex'
import loS from '@/api/loStorage'

// 在使用vuex之前使用，先初始化相关数据
const init = [
    {name:'isLogin',value:''},
    {name:'themeType',value:'day'},
    {name:'headmenu',value:'首页'},
    {name:'headText',value:'< 未登录 >'},
]
loS.initData(init)
Vue.use(Vuex)
const state = {
    headmenu: loS.getItem('headmenu', true),
    themeType: loS.getItem('themeType', true),
    isLogin: loS.getItem('isLogin', true),
    headText: loS.getItem('headText', true),
}
const mutations = {
    changeheadmenu (state, name) {
        loS.setItem('headmenu',name);
        state.headmenu = loS.getItem('headmenu',true)
    },
    changeheadText (state, name) {
        loS.setItem('headText',name);
        state.headText = loS.getItem('headText',true)
    },
    setTheme (state, code) {
        loS.setItem('themeType',code);
        state.themeType = loS.getItem('themeType',true)
    },
    setLogin (state, code) {
        loS.setItem('isLogin', code)
        state.isLogin = loS.getItem('isLogin',true)
    }
}
export default new Vuex.Store({
    state,
    mutations
})