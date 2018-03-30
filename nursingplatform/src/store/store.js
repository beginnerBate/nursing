import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    headmenu: '首页'
}
const mutations = {
    changeheadmenu (state, name) {
        state.headmenu = name
    }
}
export default new Vuex.Store({
    state,
    mutations
})