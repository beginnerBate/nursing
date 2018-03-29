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
      <div class="kpcontent spcontent">
          <div class="spcontent-list-wrapper" ref='spcontentleftwrapper'>
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
          <div class="spcontent-list-wrapper" ref='spcontentrightwrapper'>
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
      </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  data () {
      return {
          items:{
              name: '血压',
              data:[
                        {
                            name: '床位总数',
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
                        },
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
                        },
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
                            name: '今日腰穿病人,胸穿病人',
                            data: [{id:417,name:'班'},{id:55,name:'曹'},{id:417,name:'班'},{id:121,name:'曹'},{id:417,name:'班'},{id:110,name:'曹'}]
                        },
                        {
                            name: 'Qd',
                            data: []
                        },
                        {
                            name: 'BID',
                            data: [{id:47,name:'班'},{id:120,name:'曹'}]
                        },
                        // {
                        //     name: 'TID',
                        //     data: [{id:1,name:'班'},{id:12,name:'曹'},{id:47,name:'班'},{id:8,name:'曹'},{id:47,name:'班'},{id:50,name:'曹'},{id:47,name:'班'},{id:120,name:'曹'}]
                        // },
                        // {
                        //     name: 'QID',
                        //     data: [{id:417,name:'班'},{id:121,name:'曹'}]
                        // },
                        // {
                        //     name: '持续性',
                        //     data: [{id:417,name:'班'},{id:55,name:'曹'},{id:417,name:'班'},{id:121,name:'曹'},{id:417,name:'班'},{id:110,name:'曹'}]
                        // },
                        // {
                        //     name: 'Qd',
                        //     data: []
                        // },
                        // {
                        //     name: 'BID',
                        //     data: [{id:47,name:'班'},{id:120,name:'曹'}]
                        // },
                        // {
                        //     name: 'TID',
                        //     data: [{id:1,name:'班'},{id:12,name:'曹'},{id:47,name:'班'},{id:8,name:'曹'},{id:47,name:'班'},{id:50,name:'曹'},{id:47,name:'班'},{id:120,name:'曹'}]
                        // },
                        // {
                        //     name: 'QID',
                        //     data: [{id:417,name:'班'},{id:121,name:'曹'}]
                        // },
                        // {
                        //     name: '持续性',
                        //     data: [{id:417,name:'班'},{id:55,name:'曹'},{id:417,name:'班'},{id:121,name:'曹'},{id:417,name:'班'},{id:110,name:'曹'}]
                        // }
                  ]              
          }
      }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.spcontentleftwrapper, {})
      this.scroll = new Bscroll(this.$refs.spcontentrightwrapper,{})
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
      flex: 0 0 9%;
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
    flex: 0 0 91%;
    overflow: hidden;
    display: flex;
    position: relative;
  }
  .spcontent-list-wrapper{
      flex: 1;
      margin-right: 6px;
      box-shadow: 1px 1px 5px #fafafa;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 50%;
      left: 0;
      top: 0;
  }
  .spcontent-list-wrapper:last-child{
      left: 50%;
      /* padding-left: 2px; */
      border-left: 1px solid #d4d4d4;

  }  
  .kpcontent-list{
      width: 100%;
      /* height: 100%;
      overflow: hidden; */
      /* display:flex;
      flex-direction: column; */
      padding-bottom:10px;
  }
  .kpcontent-list li{
     /* flex: 0 0 40px; */
     min-height: 40px;
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
      /* padding: 6px 10px; */
      display: inline-block;
      /* background: #45aee0;
      color:#fff; */
      margin-right: 15px;
      /* flex: 0 0 70px; */
      text-align: center;
      min-width: 70px;
      /* border-radius: 5px; */
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
  .spcontent{
      display: flex;
  }
  .spcontent ul {
      margin-right: 10px;
  }
</style>

