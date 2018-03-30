<template>
  <div  class="res" ref="reswrapper">
      <div>dd</div>
      <ul class="reswrapper" :data-isLoading = 'isLoading'>
          <li v-for="(item,index) in resdata" :key="index" class="item">
              <div class="item-title">
                  <span>{{item.Doctor}}</span>
                  <span>简介</span>
                  <span>患者({{item.Prompt}})</span>
                  <span class="fa icon-page1"></span>
              </div>
              <div class="item-content" >
                <div v-for="itemchild in item.Patients" :key="itemchild.length">
                <header>{{itemchild.rycw}}</header>
                <div>
                    <i class="rycw">gggg</i>
                </div>    
                </div>
              </div>
          </li>
      </ul>
  </div>
</template>
<style scoped>
  .res{
      position: absolute;
      overflow: hidden;
      top: 10px;
      bottom: 10px;
      right:10px;
      left:10px;
  }
  .res-wrapper{

   }
   .item {
       color:#333;
   }
   .item-title {

   }
   .item-title span {
       letter-spacing: 2px;
       display: inline-block;
        min-width: 120px;
       height: 40px;
       border: 2px solid #d4d4d4;
       margin: 10px;
       text-align: center;
       line-height: 40px;
       border-radius: 10px;
       box-shadow: 1px 1px 5px #dddddd;
   }
   .item-content {
       display: flex;
       flex-wrap: wrap；
   }
   .item-content>div{
       flex-basis: 300px;
       background-color: aqua；
   }
</style>

<script>
import Bscroll from 'better-scroll'
export default {
    data () {
        return {
            resdata: null,
            error: null,
            isLoading: false
        }
    },
    created () {
        //  组件创建完成后获取数据，
        //  此时data已经被observed了
        this.fetchData()
    },
    watch:{
        //如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    mounted () {
        this.$nextTick(()=> {
            this.Bscroll = new Bscroll(this.$refs.reswrapper,{click:true})
        })
    },
    methods: {
        fetchData () {
           this.error = this.post = null
           this.loading = true
            //  请求数据
            var that = this;
            this.axios.get('static/ajax.json').then((response) => {
                that.resdata = response.data.businessInfo.rows
            }, (err) => {
                this.error = err.toString()
            })
        }
    }
}
</script>

