<template>
  <div  class="res" ref="reswrapper">

      <ul class="reswrapper" v-if="resdata">
          <li v-for="(item,index) in resdata" :key="index" class="item">
              <div class="item-title">
                  <span>{{item.Doctor}}</span>
                  <span>简介</span>
                  <span>患者({{item.Prompt}})</span>
                  <span class="fa " :class="classObject" @click="showBq($event)" :data-show='displaying' ref='showBtn'></span>
              </div>
              <div class="item-content" >
                <div v-for="itemchild in item.Patients" :key="itemchild.length">
                <header>{{itemchild.rycw}}</header>
                <div class="rycw-info-emptybed">
                    <i class="icon-emptybed"></i>
                </div>    
                </div>
              </div>
          </li>
      </ul>

  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    data () {
        return {
            resdata: null,
            error: null,
            loading: false,
            Bscroll: '',
            displaying: true,
           classObject:{
             'icon-page1': true,
             'icon-icon_page_close': false
           }
        }
    },
    created () {
      this.$store.commit('changeheadmenu','责任医护')
      //  组件创建完成后获取数据，
      //  此时data已经被observed了
      this.fetchData()
    },
    watch:{
        //如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    mounted () {
      var that = this
        this.$nextTick(()=> {
          setTimeout(function(){
            that.Bscroll = new Bscroll(that.$refs.reswrapper,{click:true})
            console.log(that.Bscroll)
          },300)

        })
    },
    methods: {
        fetchData () {
           this.error = this.post = null
           this.loading = true
            //  请求数据
            var that = this;
            this.axios.get('static/ajax.json').then((response) => {
              this.loading = false
                that.resdata = response.data.businessInfo.rows
            }, (err) => {
                this.error = err.toString()
            })
        },
        showBq (event) {
          var btnshow = event.target.dataset.show
          var btn = event.target
          var itemContent = event.target.parentNode.nextElementSibling
          if(btnshow == "true") {
             itemContent.classList.add('hide')
             btn.dataset.show = false
             btn.classList.remove('icon-page1')
             btn.classList.add('icon-icon_page_close')
          }else {
             btn.classList.remove('icon-icon_page_close')
             btn.classList.add('icon-page1')
             itemContent.classList.remove('hide')
             btn.dataset.show = true
          }
         
        }
    }
}
</script>
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
       flex-wrap: wrap;
       /* padding: 0 20px; */
       transition: all 3s ease;
       overflow: hidden;
   }
   .hide{
     height: 0;
     /* overflow: hidden; */
   }
   .item-content>div{
     flex: 0 0 16.6%;
     background-color: #fafafa;
     box-shadow: 1px 1px 5px #d5d5d5;
     border-radius: 4px;
     /* padding: 6px; */
     margin:6px;

   }
   .item-content>div>header{
     height: 40px;
     font-family: 'Courier New', Courier, monospace;
     font-weight: 600;
     color:#333;
     font-size: 18px;
     padding-left: 20px;
     line-height: 40px;
   }
   .item-content>div>.rycw-info-emptybed{
     border-top:1px solid #d4d4d4;
      min-height: 100px;
      padding: 12px;
      text-align: center
   }
   .item-content>div>.rycw-info-emptybed>i{
     font-size: 6em;
     color:#ababab;
   }
   @media screen {
    
   }
</style>

