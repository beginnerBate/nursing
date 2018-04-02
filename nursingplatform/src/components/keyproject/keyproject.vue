<template>
  <div class="kp">
      <div class="kpheader">
          <h1><i  class="fa icon-icon_important"></i> 今日概况-重点项目</h1>
          <ul class="choose-row">
              <li>每行</li>
              <li>2</li>
              <li>4</li>
              <li>6</li>
              <li>8</li>
          </ul>
      </div>
      <div class="kpcontent">
          <ul class="kpcontent-list" >
              <li v-for="(item, index) in items.data"  v-bind:key="index">
                  <span class="name"  @click="showAlert()">{{item.name}}</span>
                  <span class="count">总计： <i>{{item.data.length}}</i></span>
                  <span class= 'mydata' v-for="(itemchild,itemindex) in item.data" v-bind:key='itemindex' @click="showDetial()">
                      <i>{{itemchild.id}}</i> {{itemchild.name}}
                      </span>
              </li>
          </ul>
      </div>
      <div class="kpfooter">
          <ul ref='kpfooterlist'>
              <li data-name = '血压'><span>血压</span></li>
              <li data-name = '血糖'><span>血糖</span></li>
              <li data-name = '雾化'><span>雾化</span></li>
              <li data-name = '冲洗'><span>冲洗</span></li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
          items:{
              name: '血压',
              data:[
                        {
                            name: 'Qd',
                            data: []
                        },
                        {
                            name: 'BID',
                            data: [{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'TID',
                            data: [{id:1,name:'班'},{id:12,name:'曹'},{id:47,name:'班'},{id:8,name:'曹'},{id:47,name:'班'},{id:50,name:'曹'},{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'QID',
                            data: [{id:417,name:'班'},{id:121,name:'曹'}]
                        },
                        {
                            name: '持续性',
                            data: [{id:417,name:'班'},{id:55,name:'曹'},{id:417,name:'班'},{id:121,name:'曹'},{id:417,name:'班'},{id:110,name:'曹'}]
                        }
                  ]              
          },
          projectName: '血压'
      }
  },
  methods: {
      xuetang () {
          var that = this;
          var list = that.$refs.kpfooterlist.getElementsByTagName('li')
          Array.from(list).forEach(function(item){
              if(that.items.name === item.getAttribute("data-name")) {
                  item.classList.add('active')
              }else {
                  item.classList.remove('active')
              }
              
              item.onclick = function() {
                  that.items.name = item.getAttribute("data-name")
                  // 请求数据模拟
                  var mydata = []
                  if( item.getAttribute("data-name") === '血糖') {
                      mydata = [
                        {
                            name: 'Qd',
                            data: []
                        },
                        {
                            name: 'BID',
                            data: [{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'TID',
                            data: [{id:1,name:'班'},{id:12,name:'曹'},{id:47,name:'班'},{id:8,name:'曹'},{id:47,name:'班'},{id:50,name:'曹'},{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'QID',
                            data: [{id:417,name:'班'},{id:121,name:'曹'}]
                        },
                        {
                            name: '每天晚上一次',
                            data: [{id:417,name:'班'},{id:55,name:'曹'},{id:417,name:'班'},{id:121,name:'曹'},{id:417,name:'班'},{id:110,name:'曹'}]
                        }
                  ]  
                  }else if (item.getAttribute("data-name") === '雾化') {
                        mydata = [
                        {
                            name: 'Qd',
                            data: []
                        },
                        {
                            name: 'BID',
                            data: [{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'TID',
                            data: [{id:1,name:'班'},{id:12,name:'曹'},{id:47,name:'班'},{id:8,name:'曹'},{id:47,name:'班'},{id:50,name:'曹'},{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'QID',
                            data: [{id:417,name:'班'},{id:121,name:'曹'}]
                        }
                  ]  
                  } else if (item.getAttribute("data-name") === '冲洗') {

                        mydata = [
                        {
                            name: 'Qd',
                            data: []
                        },
                        {
                            name: 'BID',
                            data: []
                        },
                        {
                            name: 'TID',
                            data: [{id:1,name:'班'},{id:12,name:'曹'},{id:47,name:'班'},{id:8,name:'曹'},{id:47,name:'班'},{id:50,name:'曹'},{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'QID',
                            data: [{id:417,name:'班'},{id:121,name:'曹'}]
                        }
                  ]  
                  }else {
                      mydata = [
                        {
                            name: 'Qd',
                            data: []
                        },
                        {
                            name: 'BID',
                            data: [{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'TID',
                            data: [{id:1,name:'班'},{id:12,name:'曹'},{id:47,name:'班'},{id:8,name:'曹'},{id:47,name:'班'},{id:50,name:'曹'},{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        {
                            name: 'QID',
                            data: [{id:417,name:'班'},{id:121,name:'曹'}]
                        },
                        {
                            name: '持续性',
                            data: [{id:417,name:'班'},{id:55,name:'曹'},{id:417,name:'班'},{id:121,name:'曹'},{id:417,name:'班'},{id:110,name:'曹'}]
                        }
                  ]
                  }
                  setTimeout(function getdata(){
                  that.items.data = mydata
                  },300)
                  that.projectName = item.getAttribute("data-name")
              }
          })
      },
      showAlert(event) {
          this.$emit('showInfo')
      },
      showDetial(event) {
          this.$emit('D')
          console.log('showDetial')
      }
  },
  watch: {
      projectName () {
         this.xuetang()
      }
  },
  mounted () {
      
      this.$nextTick(function(){
          this.xuetang()
      })
  }
}
</script>