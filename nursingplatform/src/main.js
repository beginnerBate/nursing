// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/reset.css'
import './assets/css/icomoon.css'
import 'font-awesome/css/font-awesome.css'
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
