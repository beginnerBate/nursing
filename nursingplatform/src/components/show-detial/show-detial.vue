<template>
  <div class="show-info" v-if="show">
     <alert :min='min' :max='max' :type='type' :title="title" @hide='hide()'>
       <div class="show-info-content">
         <div class="table-header">
           <div v-if="tableDatas.head" v-for="(item, index) in tableDatas.head" :key="index"><span>{{item}}</span></div>
         </div>
         <ul class="table-row">
          <li v-if="tableDatas.data" v-for='(item,index) in tableDatas.data' :key="index">
            <span>{{index}}</span>
            <span v-if="item" v-for="(itemchild,index) in item" :key="index">{{itemchild}}</span>
          </li>
         </ul>
       </div>
     </alert>
  </div>
</template>
<script>
import Alert from 'base/alert/alert'
export default {
  props: {
    show:false
  },
  data() {
    return {
      min: true,
      max: true,
      type:'close',
      title:'病人详细信息',
      tableDatas: {
        head:['序号','床位号','姓名','年龄','性别','住院号','责任医生','护理级别','住院次数'],
        data:[
          ['47','板材组','87岁','男','172633','谢小雅','I级护理',1],
          ['42','测试数据','87岁','男','172633','谢小雅','II级护理',2],
          ['41','测试数据','87岁','男','172633','谢小雅','III级护理',3],
          ['39','测试数据','87岁','男','172633','谢小雅','II级护理',4],
          ['38','测试数据','87岁','男','172633','谢小雅','级护理',5]
        ]
      }
    }
  },
  methods: {
    hide() {
      this.$emit('hide')
    }
  },
  components: {
    Alert
  }
}
</script>
<style lang="stylus" scoped>
.show-info-content
  padding 15px
.table-header
  display flex
  justify-content space-between
  font-size 16px
  font-weight 600
  height 42px
  align-items center
  border: 1px solid #d4d4d4
  text-align center
  line-height 42px
.table-header>div 
  height 100%
  flex-basis 10%
  border-left:1px solid #d4d4d4
.table-header>div:first-child
  flex-basis 5%
  border-left:0
.table-header>div:nth-child(7)
  flex-basis 15%
.table-header>div:nth-child(8)
  flex-basis 15%
.table-row
  width 100%
.table-row li
  display flex
  justify-content space-between
  font-size 16px
  // font-weight 600
  height 42px
  color #666
  align-items center
  border-bottom: 1px solid #d4d4d4
  border-left 1px solid #d4d4d4
  border-right 1px solid #d4d4d4
  text-align center
  line-height 42px
.table-row>li>span
  height 100%
  flex-basis 10%
  border-left:1px solid #d4d4d4
.table-row>li>span:first-child
  flex-basis 5%
  border-left:0
.table-row>li>span:nth-child(7)
  flex-basis 15%
.table-row>li>span:nth-child(8)
  flex-basis 15%
</style>


