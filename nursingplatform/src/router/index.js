import Vue from 'vue'
import Router from 'vue-router'
import thisday from 'components/thisday/thisday'
import responsibility from 'components/responsibility/responsibility'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/thisday',
      name: 'thisday',
      component: thisday
    },
    {
      path: '/responsibility',
      name:'responsibility',
      component:responsibility
    }
  ]
})
