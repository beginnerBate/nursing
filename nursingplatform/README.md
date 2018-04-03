# nursingplatform
## 项目搭建过程
1. 字体图标的使用 font-awesome
```
  ## 安装
  1. npm  i font-awesome --save
  2. 在main.js 中引入 import 'font-awesome/css/font-awesome.css'
```
2. icomoon.ttf 图标字体换号 先转成icomoon.svg 然后转 图标字体，放在css 文件夹里面
3. better-scroll 插件用作滚动列表
```
  1. 安装better-scroll -------- npm i better-scroll --save
  2. 在项目中引入better-scroll 插件
    import Bscroll from 'better-scroll'
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.rightTab, {})
    })
```
4. vue-axios的使用
```javascript
  1. 安装 npm install --save axios vue-axios
  2. 在main.js 里面引用 
      import Vue from 'vue'
      import axios from 'axios'
      import VueAxios from 'vue-axios'

      Vue.use(VueAxios, axios)
```
5. 配置vuex 
```javascript
  1. 安装vuex npm install vuex --save
  2. 新建store文件夹 并且在文件夹里面新建一个store.js 并且在里面引入 vue 和vuex 
      ##  import Vue from 'vue'
      ##  import Vuex from 'vuex'
      ##  Vue.use(Vuex)
  3. 在main.js文件夹里面引用
      ##  import store from './store' 
      ##   new Vue({
      ##    el: '#app',
      ##    router,
      ##    store,
            render: h => h(App)
          })
```
6. 路由配置 router
```

```
7. 基础组件搭建 4-2  <i style='color:green'>ok</i>
```
  1. 弹出框组件搭建 alert.vue [待优化------可移动 可伸缩 ]
  2. 加载组件搭建 loading []

```
8. 白天和黑夜主题切换
```
  stylus 变量
  大体思路:
     布局一个单独提出一个css文件-----framework.css
     主题一个单独出两个css文件 ------variable-day.css n-theme-day.css variable-night.css n-theme-night.css
     本地存在localStorage里面存储主题变量
     vuex 管理 主题状态切换
```
9. canvas画板实现 4-3 
```
  1. 页面搭建 √
  2. 功能实现
```

10. 登录退出流程实现 4-2  <i style='color:green'>ok</i>
```
   使用vuex保存登录状态 
```
11. 菜单隐藏
## 页面搭建
1. 今日概况---thisday  路由: thisday  
```
1.里面包含8个子组件
    1. 今日概况-重点项目 keyproject
    2. 今日概况-特殊项目 specialproject
    3. 值班医生组件      medicalpermanence
    4. 值班护士组件      nursingpermanence
    5. 工作提醒          worktips
    6. 物品借出管理      itemsborrowed
    7. 病区换床信息      changebedinfo
    8. 备忘录            memo

2. 使用了slot和props 

3. better-scroll 滚动 的时候高度获取问题 
```
2. 责任医护--responsibility
```
  需求分析:
  1.一级页面医生负责住院病人的可折叠列表
```
## 路由配置
  > 首页路由配置 默认到今日详情
  > 使用vuex 存首页
  ###   相关问题：
  1. vue-router 切换的是组件没有加载到router-view 里面 原因找到了是命名的问题 路径命名不能太长否则没有反应 （大大的坑）好难受啊 呜呜 (路由把我搞蒙掉了 我好难受啊特别难受）
  2. better-scroll 突然没有初始化问题 better-scroll 只能绑定第一个元素，之前有loading 所以失败了 在考虑要不要把scroll封装起来 
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
