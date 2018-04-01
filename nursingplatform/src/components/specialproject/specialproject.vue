<template>
  <div class="kp">
      <div class="spheader">
          <h1><i  class="fa icon-icon_important"></i> 今日概况-重点项目</h1>
          <ul class="choose-row">
              <li>每行</li>
              <li>2</li>
              <li>4</li>
              <li>6</li>
              <li>8</li>
          </ul>
      </div>
      <div class="spcontent spcontent">
          <div class="spcontent-list-wrapper" ref='spcontentleftwrapper'>
          <ul class="spcontent-list" >
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
          <ul class="spcontent-list" >
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

</style>

