<template>
    <div v-if="!isLogin" class="login">
       <alert :min='min' :max='max'>
           <div class="login-content">
               <div><span class="btn-span" @click="toLogin($event)">内科一病区</span></div>
           </div>
       </alert>
    </div>
</template>

<script>
import Alert from 'base/alert/alert'
export default {
    components: {
        Alert
    },
    data () {
        return {
            isLogin: this.$store.state.isLogin,
            min: true,
            max: true
        }
    },
    watch: {
        isLogin(newValue, oldValue) {
            console.log(newValue,oldValue)
        }
    },
    methods: {
        toLogin (event) {
            this.$store.commit('setLogin','login')
            this.$store.commit('changeheadText',event.target.innerHTML)
            this.isLogin = 'login'
            console.log(this.isLogin)
        }
    },
}
</script>
<style lang='stylus' scoped>
.login-content
  height 100%
  display flex
  justify-content center
  align-content center
  align-items center
  flex-wrap wrap
  //flex-direction column
  background-image url('./login_bag.jpg')
  background-size 100% 100%
  background-repeat no-repeat
  overflow-x auto
.btn-span
  display inline-block 
  min-width 300px
  height 60px
  text-align center
  line-height 60px
  margin-right 20px
  margin-bottom 10px
  border-radius 10px
  border 0
  background #fff
.btn-span:hover
  background orange
  color #ffffff
.btn-span:active
  background orange
  color #ffffff
</style>