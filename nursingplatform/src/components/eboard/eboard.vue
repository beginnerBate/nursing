<template>
  <div class="board">
    <canvas ref="myboard" ></canvas>
    <div  class="board-menu">
      <div class="choose-color">
        <input type="color" value='#082b80'>
        <span>#082b80</span>
      </div>
      <div class="choose-size">
        <input type="range">
      </div>
      <div class="choose-shape">
        <span>直线</span>
        <span>矩形</span>
        <span>圆形</span>
        <span>三角</span>
      </div>
      <div class="choose-operate">
        <span>皮擦</span>
        <span>撤销</span>
        <span>还原</span>
        <span>清空</span>
      </div>
      <div class="choose-load">
        <span><i class="fa fa-check"></i>保存</span>
        <span><i class="fa fa-image"></i>加载白板</span>
      </div>
      <!-- 保存图像 -->
      <div class="img-show">
        <!-- <img src alt="图像"> -->
      </div>
      <!-- 新建 返回主页 -->
      <div class="choose-new">
        <span><i class="fa fa-check"></i>新建</span>
        <span @click="backHome"><i class="fa fa-image"></i>返回主页</span>
      </div>
    </div>
  </div>
</template>
<script>
var MYDATA = []
var startEvent,moveEvent,endEvent
export default {
  data () {
      return {
          W: 0,
          H: 0,
          CTX: null,
          COLOR:'#F00056',
          LINE: 5,
          PENS:0,
          ERAS:0,
          TIMER: null
      }
  },
  created () {
    this.$store.commit('changeheadmenu','电子白板'),
    this.eventHandle()
  },
  methods: {
    backHome() {
      this.$router.push({path:'/'})
    },
    //  start init canvas
    init () {
      this._showBoard()
      this._drawPen()
    },
    _showBoard () {
      // 显示画板
      this.$refs.myboard.width = this.W = document.querySelector('canvas').clientWidth
      this.$refs.myboard.height = this.H = document.querySelector('canvas').clientHeight
      this.CTX = this.$refs.myboard.getContext('2d')
    },
    eventHandle() {
      var flag = 'ontouchstart' in window
      startEvent = flag ? 'touchstart' : 'mousedown',
      moveEvent = flag ? 'touchmove' : 'mousemove',
      endEvent = flag ? 'touchend' : 'mouseup'
    },
    _drawPen () {
      // 画笔功能
      console.log('---画笔---')
      const that = this
      const ele = this.$refs.myboard
      ele.addEventListener(startEvent,function(ev){
        console.log(ev)
      },false)
      // this.$refs.myboard.onmousedown = function(ev) {
      //   console.log(ev)
      // }
    },
    tStart() {
      console.log('---touchstart----')
    },
    tMove() {
      console.log('----touchmove')
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.init()
    })
    var that = this
    window.onresize = function() {
      that.eventHandle()
      console.log('dd')
    }
  }
}
</script>


