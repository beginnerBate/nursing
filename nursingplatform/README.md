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
```
  1. 安装 npm install --save axios vue-axios
  2. 在main.js 里面引用 
      import Vue from 'vue'
      import axios from 'axios'
      import VueAxios from 'vue-axios'

      Vue.use(VueAxios, axios)
```
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
  使用vue-axios 获取静态数据
```
需求分析：页面需要滚动 使用better-scroll 插件

```
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
