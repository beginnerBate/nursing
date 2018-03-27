<template>
  <div id="app" class="day">
    <header class="app-header">
      <div class="app-header-left">
        <span><i class="fa icon-icon1_nav"></i> <span>智能护理</span></span>
        <span>首页</span>
        <span>{{headText}}</span>
      </div>
      <div class="app-header-right">
        <span><i class="fa fa-power-off"></i></span>
        <span><i class="fa fa-moon-o"></i></span>
      </div>
    </header>
    <div class="content">
      <router-view/>
    </div>
    <footer>
     <button class="fa fa-navicon " @click="displayTab()"></button>
    </footer>
    <div class="right-tab" ref="rightTab" v-bind:data-display="tabdisplay">
      <tab></tab>
    </div>
  </div>
</template>

<script>
import tab from './components/tab/tab.vue'
export default {
  name: 'App',
  data () {
    return {
      headText: '< 未登录 >',
      tabdisplay:false
    }
  },
  components:{
    tab
  },
  methods: {
    displayTab() {
     if(this.tabdisplay === false) {
       this.tabdisplay = true
     } else {
       this.tabdisplay = false
     }
     console.log(this.tabdisplay)
    }
  }
}
</script>
<style>
#app{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
#app>header,#app>footer{
   flex: 0 0 40px;
}
#app>.content{
  flex: 1;
  /* background:red; */
}
.app-header{
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  background: #45aee0;
  color:#fff;
  padding: 0 20px;
}
.app-header-left{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  letter-spacing: 1px;
}
.app-header-left>span>i{
  margin-right: 10px;
  font-size: 110%;
}
.app-header-left>span:first-child>span{
  font-size: 22px;
  font-weight:500;
}
.app-header-left>span{
  margin-right: 35px;
  cursor: pointer;
}
.app-header-right>span:first-child{
  margin-left: 6px;
}
.app-header-right>span{
  display: inline-block;
  border-radius: 5px;
  background-color: #57b5e3;
  border-color: #57b5e3;
  padding: 10px 18px;
  margin-bottom: 2px;
  cursor: pointer;
}
.app-header-right>span:hover{
  background-color: #6ec2ea;
}
.app-header-right>span>i{
  color:#d73d32;
  font-size:20px;
}
.app-header-right>span:last-child>i{
  color: white;
}
/* footer */
footer{
  box-shadow: 1px 1px 10px #45aee0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
footer button{
  outline: none;
  appearance: none;
  border:none;

}
footer button.fa{
  display: inline-block;
  width: 60px;
  height: 40px;
  color: steelblue;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 15px;
  cursor: pointer;
  background: #ffffff;
  transition: background 0.2s ease;
}
footer button.fa:focus{
  background:rgba(173, 169, 150, 0.14);  /* fallback for old browsers */
  transition: background 0.2s ease;
}
/* righttabstyle*/
.right-tab{
  position: absolute;
  top:40px;
  bottom: 40px;
  transition: all 0.75s ease;
  width: 0;
    right:0;
    overflow: hidden;
    background: grey;
  
 
}
.right-tab[data-display='false'] {
   /* display: none; */
    
}
.right-tab[data-display='true']{
  /* display:block; */
   width: 200px;
}
</style>

