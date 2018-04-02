<template>
  <div class="alert" @click.self.stop="hide()">
    <div class="alert-wrapper">
      <div class="alert-content" ref="alertwrapper">
        <header>
          <h1>{{title}}</h1>
          <ul>
            <li v-if="min && !restore" @click="changeMin()"><span class="fa fa-minus-square-o"></span></li>
            <li v-if="max && !restore" @click="changeMax()"><span class="fa fa-window-maximize"></span></li>
            <li v-if="off && !restore" @click="changeOff()"><span class="fa fa-window-close-o"></span></li>
            <li v-if="restore" @click="changeRestore()"><span class="fa fa-window-restore"></span></li>
          </ul>
        </header>
        <section>
          <slot></slot>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '请点击所属区域登录'
    },
    min:{
       type: Boolean,
       default: false
    },
    max:{
       type:Boolean,
       default: false
    },
    off:{
      type:Boolean,
      default:false
    },
    type: {
      type: String,
      default: 'onclose' //  [onclose,close]
    }
  },
  data () {
    return {
      wrapper: '',
      restore: false
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this._getWrapper()
    })
  },
  methods: {
    changeMin () {
      this.wrapper.classList.add('min')
      this.restore = true
      console.log(this.wrapper)
    },
    changeMax () {
      this.wrapper.classList.add('max')
      this.restore = true
    },
    changeRestore (){
      this.wrapper.classList.remove('min')
      this.wrapper.classList.remove('max')
      this.restore = false
    },
    changeOff(){
      // emit('off')
      console.log('off')
    },
    hide () {
      if(this.type === 'close') {
        this.$emit('hide')
        console.log('ddd')
      }
    },
    _getWrapper () {
      this.wrapper = this.$refs.alertwrapper
    }
  }
}
</script>

<style lang="stylus">
.alert
  position fixed 
  top 0
  right 0
  bottom 0
  left 0
  background rgba(0,0,0,0.5)
  text-align center 
  white-space nowrap
  z-index 99
.alert:after
  content ''
  display inline-block
  height 100%
  vertical-align middle
.alert-wrapper
  display inline-block
  vertical-align middle
  border-radius 3px
  background-color #ffffff
  text-align left 
  white-space normal
  
.alert-content
  box-sizing border-box
  width 80vw
  height 80vh
  // transition all 2s
  background-color #ffffff
.min
  position fixed
  left 0
  bottom 0
  width 400px
  height 42px
  transition all 0.5s
.max
  position fixed
  left 0
  bottom 0
  width 100%
  height 100%
  transition all 0.5s  
.alert-content header 
  display flex
  justify-content space-between
  align-items center
  padding: 0 30px 0 20px;
  height: 42px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  background-color: #F8F8F8;
.alert-content header h1
  font-weight 600
  font-size 22px
  letter-spacing 2px
.alert-content header ul
  display flex
  height 100%
  align-items center 
  li
    height 100%
    padding-left 22px
    font-size 20px
    color #797979
    display flex
    align-items center
    cursor pointer
  li:hover
    color #45aee0
    span 
      text-shadow 1px 1px 5px #d4d4d4
.alert-content section
    height 100%
</style>
