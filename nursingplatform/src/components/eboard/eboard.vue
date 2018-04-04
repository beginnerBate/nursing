<template>
  <div class="board">
    <canvas ref="myboard" ></canvas>
    <div  class="board-menu">
      <div class="choose-color">
        <input type="color"  @change="selectColor($event)" v-model="colorValue">
        <span>{{colorValue}}</span>
      </div>
      <div class="choose-size">
        <input type="range">
      </div>
      <div class="choose-shape">
        <span @click="choosePen()">画笔</span>
        <span @click="chooseLine()">直线</span>
        <span @click="chooseRect()">矩形</span>
        <span @click="chooseCircle()">圆形</span>
      </div>
      <div class="choose-operate">
        <span @click="chooseEaser()">皮擦</span>
        <span @click="chooseCancel()">撤销</span>
        <span @click="chooseBack()">还原</span>
        <span @click="chooseClear()">清空</span>
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
          colorValue: '#F00056',
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
      // this._drawPen()
      // this.selectColor()
      // this._selectLine()
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
      ele.addEventListener(startEvent,function(EV){
        let ev = EV || event
        let sx = ev.clientX || ev.changedTouches[0].clientX
        let sy = ev.clientY || ev.changedTouches[0].clientY 
        this.PENS++
        // 画笔性能优化  每36ms去一个点
        let onOff = true
        ele.addEventListener(moveEvent,penmovefuc,false)
        ev.target.addEventListener(endEvent,function(){
          ele.removeEventListener(moveEvent,penmovefuc,false)
        },false)
      function penmovefuc(EV){
          if(!onOff) return
          onOff = false
          setTimeout(function(){
            onOff = true
          },36)
          let ev = EV || event
          let ex = ev.clientX || ev.changedTouches[0].clientX
          let ey = ev.clientY || ev.changedTouches[0].clientY 
          let n = MYDATA.length
          MYDATA[n] = new Object()
          // 为画笔绘制的对象定义属性 'point-line'
          // 该对象存入绘制数据
          MYDATA[n].attr = 'point-line'
          MYDATA[n].count = that.PENS
          MYDATA[n].sx = sx
          MYDATA[n].sy = sy
          MYDATA[n].ex = ex
          MYDATA[n].ey = ey
          MYDATA[n].w = that.LINE
          MYDATA[n].c = that.COLOR

          // 直接绘制
          that.CTX.beginPath()
          that.CTX.moveTo(sx,sy)
          that.CTX.lineTo(ex,ey)
          that.CTX.closePath()
          that.CTX.strokeStyle = that.COLOR
          that.CTX.lineJoin = 'round'
          that.CTX.lineCap = 'round'
          that.CTX.lineWidth = that.LINE
          that.CTX.stroke()
          //  存储数据
          sx = ex
          sy = ey
        }
        return false
      })

    },
    // 直线绘制
    _drawLine (){
      const that = this
      const ele = this.$refs.myboard
      ele.addEventListener(startEvent,function(EV){
        let ev = EV || event
        let sx = ev.clientX || ev.changedTouches[0].clientX
        let sy = ev.clientY || ev.changedTouches[0].clientY
        let n = MYDATA.length
        ele.addEventListener(moveEvent,linemovefuc,false)
        function linemovefuc(EV){
          let ev = EV || event
          let ex = ev.clientX || ev.changedTouches[0].clientX
          let ey = ev.clientY || ev.changedTouches[0].clientY 

          MYDATA[n] = new Object()
          // 该对象存入绘制数据
          MYDATA[n].attr = 'line'
          MYDATA[n].sx = sx
          MYDATA[n].sy = sy
          MYDATA[n].ex = ex
          MYDATA[n].ey = ey
          MYDATA[n].w = that.LINE
          MYDATA[n].c = that.COLOR

          // 直接绘制时，实时渲染
          that._canvasrender()
          console.table(MYDATA[n])
        }
        ele.addEventListener(endEvent,function(){
          ele.removeEventListener(moveEvent,linemovefuc,false)
        },false)
        return false
      },false)
    },
    // 绘制圆形
    _drawCircle(){
      const that = this
      const ele = this.$refs.myboard
      ele.addEventListener(startEvent,function(EV){
        let ev = EV || event
        let sx = ev.clientX || ev.changedTouches[0].clientX
        let sy = ev.clientY || ev.changedTouches[0].clientY
        let n = MYDATA.length

        ele.addEventListener(moveEvent,movefuc,false)
        function movefuc(EV) {
          let ev = EV || event
          let ex = ev.clientX || ev.changedTouches[0].clientX
          let ey = ev.clientY || ev.changedTouches[0].clientY
          
          let cx = ex - sx
          let cy = ey - sy
          let R = Math.sqrt(cx * cx + cy * cy)/2

          MYDATA[n] = new Object()
          MYDATA[n].attr = 'circle'
          MYDATA[n].x = cx/2 + sx
          MYDATA[n].y = cy/2 + sy
          MYDATA[n].r = R
          MYDATA[n].c = that.COLOR

          that._canvasrender()
        }
        ele.addEventListener(endEvent,function(){
          ele.removeEventListener(moveEvent,movefuc,false)
          console.log ('end！！')
          console.log(ele[moveEvent])
        },false)
        return false
      },false)
    },
    // 绘制矩形
    _drawRect(){
      const that = this
      const ele = this.$refs.myboard
      ele.addEventListener(startEvent,function(EV){
        let ev = EV || event
        let sx = ev.clientX || ev.changedTouches[0].clientX
        let sy = ev.clientY || ev.changedTouches[0].clientY
        let n = MYDATA.length

        ele.addEventListener(moveEvent,movefuc,false)
        function movefuc (EV){
          let ev = EV || event
          let ex = ev.clientX || ev.changedTouches[0].clientX
          let ey = ev.clientY || ev.changedTouches[0].clientY

          let cx = ex - sx
          let cy = ey - sy

          MYDATA[n] = new Object()
          MYDATA[n].attr = 'rect'
          MYDATA[n].x = sx
          MYDATA[n].y = sy
          MYDATA[n].w = cx
          MYDATA[n].h = cy
          MYDATA[n].c = that.COLOR

          that._canvasrender()
        }
        ele.addEventListener(endEvent,function(){
          ele.removeEventListener(moveEvent,movefuc,false)
        },false)
      },false)
    },
    // 橡皮檫
    _eraser(){
      const that = this
      const ele = this.$refs.myboard
      ele.addEventListener(startEvent,function(EV){
        let ev = EV || event
        that.ERAS++
        ele.addEventListener(moveEvent,movefuc,false)
        function movefuc (EV){
          let ev = EV || event
          let ex = ev.clientX || ev.changedTouches[0].clientX
          let ey = ev.clientY || ev.changedTouches[0].clientY
          let n = MYDATA.length

          MYDATA[n] = new Object()
          // 为橡皮擦绘制的方块定义属性 'clear-rect'
          MYDATA[n].attr = 'clear-rect'
          MYDATA[n].count = that.ERAS
          MYDATA[n].x = ex - 15
          MYDATA[n].y = ey - 15
          // 为橡皮檫固定高度
          MYDATA[n].w = 30
          MYDATA[n].h = 30
          MYDATA[n].c = "#fff"
          that.CTX.fillStyle = "#fff"
          that.CTX.beginPath()
          that.CTX.fillRect(ex - 15, ey -15,30,30)
          that.CTX.closePath()
          that.CTX.fill()
        }
        ele.addEventListener(endEvent,function(){
          ele.removeEventListener(moveEvent,movefuc,false)
        },false)
      },false)
    },
    // 渲染图像
    _canvasrender(){
      //清空画布
      this.CTX.clearRect(0,0,this.W,this.H)
      console.log(this.W)
      const that = this
      for (let i = 0; i < MYDATA.length; i++) {
        switch(MYDATA[i].attr) {
          // 橡皮擦矩形
          case 'clear-rect':
          case 'rect':
            that.CTX.fillStyle = MYDATA[i].c
            that.CTX.beginPath()
            that.CTX.fillRect(MYDATA[i].x,MYDATA[i].y,MYDATA[i].w,MYDATA[i].h)
            that.CTX.fill()
            that.CTX.closePath()
          break;
          // 圆形
          case 'circle':
            that.CTX.beginPath()
            that.CTX.arc(MYDATA[i].x, MYDATA[i].y, MYDATA[i].r, 0, 2 * Math.PI, false)
            that.CTX.closePath()
            that.CTX.fillStyle = MYDATA[i].c
            that.CTX.fill()
          break;
          // 画笔，直线按下列规则绘制
          case 'point-line':
          case 'line':
            that.CTX.beginPath()
            that.CTX.moveTo(MYDATA[i].sx, MYDATA[i].sy)
            that.CTX.lineTo(MYDATA[i].ex, MYDATA[i].ey)
            that.CTX.closePath()
            that.CTX.lineJoin = 'round'
            that.CTX.lineCap = 'round'
            that.CTX.strokeStyle = MYDATA[i].c
            that.CTX.lineWidth = MYDATA[i].w
            that.CTX.stroke()
          break;
        }
      }
    },
    // 选择颜色
    selectColor(event){
      const that = this
      this.COLOR = this.colorValue
      console.log('---你重新选择了颜色----',that.COLOR)
    },
    // 选择线条粗线
    selectLine () {
      console.log('---你重新选择了画笔宽度----')
    },
    toBack (){
      const that = this
      let lastData = MYDATA[MYDATA.length-1]
      if(!lastData){
        console.log('撤退无效！你没有绘画')
        return false
      }
      let attr = lastData.attr
      switch (attr) {
        case 'line':
        case 'circle':
        case 'rect':
          MYDATA.pop()
        break;
        case 'point-line':
        case 'clear-rect':
          let count = MYDATA[MYDATA.length -1].count
          for (var i = MYDATA.length -1; i>=0; i--){
            if (attr == MYDATA.attr && count == MYDATA[i].count) {
              MYDATA.pop()
            }else {
              break;
            }
          }
        break;
      }
      that._canvasrender()
      return true
    },
    choosePen () {
      this._drawPen()
      console.log('你选择了画笔工具')
    },
    chooseLine () {
      this._drawLine()
      console.log('--你选择了直线---')
    },
    chooseRect() {
      this._drawRect()
      console.log('----你选择了矩形---')
    }, 
    chooseCircle () {
      this._drawCircle()
      console.log('你选择了圆形工具')
    },
    chooseEaser() {
      this._eraser()
    },   
    chooseCancel() {
      this.toBack()
      console.log('cancle')
    },   
    chooseBack() {
      console.log('back')
    },   
    chooseClear() {
      this.CTX.clearRect(0,0,this.W,this.H)
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
  }
}
</script>


