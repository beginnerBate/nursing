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
                  <span class="name">{{item.name}}</span>
                  <span class="count">总计： <i>{{item.data.length}}</i></span>
                  <span class= 'mydata' v-for="(itemchild,itemindex) in item.data" v-bind:key='itemindex'>
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

<style scoped>
  .kp {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      box-shadow: 1px 1px 7px #d4d4d4
  }
  .kpheader{
      flex: 0 0 14%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 3px;
      text-shadow: 1px 1px 5px #45aee0;
      border-top-left-radius: 5px;
      border-top-right-radius:5px;
      background: #56CCF2;  /* fallback for old browsers */
      background: linear-gradient(to top,#75d0f8,#bee5f5)/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .choose-row{
      display: flex;
  }
  .choose-row li{
      padding: 0 12px;
  }
  .kpcontent{
    flex: 1;
  }
  .kpcontent-list{
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction: column;
      padding-bottom:10px;
  }
  .kpcontent-list li{
     flex: 0 0 20%;
     padding: 0 8px;
     background-color: #fff;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     color:#333;
  }
  .kpcontent-list li:nth-of-type(2n+1) {
      background-color: #e1e9e9;
  }
  .kpcontent-list li span.name{
      padding: 6px 10px;
      display: inline-block;
      background: #45aee0;
      color:#fff;
      margin-right: 15px;
      /* flex: 0 0 70px; */
      text-align: center;
      border-radius: 5px;
  }
  .kpcontent-list li span.count i{ 
      color:orange;
      padding-right: 50px;
  }
  .kpcontent-list li span.mydata{
      padding: 0 15px;
  }
  .kpcontent-list li span.mydata i{
      color:#d73d32;
  }
  .kpfooter{
      flex: 0 0 14%;
  }
  .kpfooter ul {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      height:100%;
  }
  .kpfooter ul li {
      flex: 1;
      color:#666;
      height: 100%;
      background-color: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: 4px;
      box-shadow: 0px -1px 4px #e1e9e9
  }
  .kpfooter ul li span{
      vertical-align: -100%;
  }
  .kpfooter ul li:hover{
      background-color: #eee;
  }
  .kpfooter ul li.active {
      color: #fff;
      background-color: #45aee0;
  }
</style>

