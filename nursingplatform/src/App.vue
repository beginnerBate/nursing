<template>
  <div id="app" :class="`theme-${tcolor}`">
    <header class="app-header">
      <div class="app-header-left">
        <span><i class="fa icon-icon1_nav"></i> <span>智能护理</span></span>
        <span>{{$store.state.headmenu}}</span>
        <span>{{$store.state.headText}}</span>
      </div>
      <div class="app-header-right">
        <span><i class="fa fa-power-off"></i></span>
        <span @click="changeTheme()"><i class="fa fa-moon-o"></i></span>
      </div>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer>
     <button class="fa fa-navicon " @click="displayTab()"></button>
    </footer>
    <div class="right-tab" ref="rightTab" v-bind:data-display="$store.state.tabdisplay">
      <tab></tab>
    </div>
    <login></login>
  </div>
</template>

<script>
import tab from './components/tab/tab.vue'
import Bscroll from 'better-scroll'
import Login from 'components/login/login'
export default {
  name: 'App',
  // data () {
  //   return {
  //     tabdisplay:false
  //   }
  // },
  watch: {
    $route() {
      this.$store.commit('setTab',false)
    }
  },
  computed: {
    tcolor () {
      return this.$store.state.themeType
    }
  },
  components:{
    tab,
    Login
  },
  created(){
    this.$store.commit('changeheadmenu','首页')
  },
  methods: {
    displayTab() {
     if(this.$store.state.tabdisplay === false) {
       this.$store.commit('setTab',true)
     } else {
       this.$store.commit('setTab',false)
     }
    //  console.log(this.tabdisplay)
    },
    changeTheme() {
      var type = this.$store.state.themeType
      if( type === 'day') {
        type = 'night'
      }else if (type === 'night') {
        type = 'day'
      }
      this.$store.commit('setTheme', type)
    }
  },
  mounted () {
    var that  = this
     this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.rightTab, {click: true})
      })
      window.onresize = function () {
        that.scroll = new Bscroll(that.$refs.rightTab, {click: true})
      }
      
  }
  
}
</script>
<style lang="stylus">
  @import './assets/stylus/app.styl';
</style>

