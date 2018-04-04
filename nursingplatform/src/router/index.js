import Vue from 'vue'
import Router from 'vue-router'
import thisday from 'components/thisday/thisday'
import res from 'components/res/res.vue'

import eboard from 'components/eboard/eboard.vue'
import sy from 'components/sy/sy.vue'

// 皮试提醒
const Skintest = (resolve) => {
  import('components/skintest/skintest.vue').then((module) => {
    resolve(module)
  })
}
// 等待执行
const Perform = (resolve) => {
  import('components/perform/perform').then((module)=>{
    resolve(module)
  })
}
// 护士宣教
const Nursing = (resolve) => {
  import('components/nursing/nursing').then((module) =>{
    resolve(module)
  })
}
// 护士交班
const Shift = (resolve) => {
  import('components/shift/shift').then((module) =>{
    resolve(module)
  })
}
// 病区一览
const Ward = (resolve) => {
  import('components/ward/ward').then((module) =>{
    resolve(module)
  })
}
// 病区排班
const Pb = (resolve) => {
  import('components/pb/pb').then((module) =>{
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/thisday'
    },
    {
      path:'/thisday',
      component:thisday
    },
    {
      path:'/zryh',
      component: res
    },
    {
      path: '/eboard',
      component: eboard
    },
    {
      path: '/sy',
      component: sy
    },
    {
      path: '/skintest',
      component:Skintest
    },
    {
      path: '/perform',
      component: Perform
    },
    {
      path: '/nursing',
      component: Nursing
    },
    {
      path: '/shift',
      component: Shift
    },
    {
      path:'/ward',
      component: Ward
    },
    {
      path:'/pb',
      component: Pb
    }
  ]
})
