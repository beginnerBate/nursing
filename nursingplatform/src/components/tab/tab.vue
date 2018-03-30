<template>
  <div class="tabs">
    <template v-for="(item, index) in tabs">
      <router-link tag="div" class="tabs-item" :to="item.urlLink" :key='index'>
        <i class="fa" :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </router-link>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          {
            name: '电子白板',
            icon: 'icon-menu_pannel',
            urlLink: '/eboard'
          },
          {
            name: '责任医护',
            icon:'icon-menu_zryh',
            urlLink: '/zryh'
          },
          {
            name: '输液管理',
            icon: 'icon_sy',
            urlLink: '/sy'
          },
          {
            name: '皮试提醒',
            icon: 'icon_ps',
            urlLink: '/skintest'
          },
          {
            name: '今日概况',
            icon: 'icon-menu_main',
            urlLink: '/thisDay'
          },
          {
            name: `等待执行`,
            icon: 'icon-menu_main',
            urlLink: '/perform'
          },
          {
            name: '护士宣教',
            icon:'icon-menu_hsxj',
            urlLink: '/nursing'
          },
          {
            name:'护士交班',
            icon: 'icon-menu_hsjb',
            urlLink: '/shift'
          },
          {
            name: '病区一览',
            icon: 'icon-menu_bqyl',
            urlLink: '/ward'
          },
          {
            name: '病区排班',
            icon: 'icon-menu_bqpb',
            urlLink: '/pb'
          }
        ]
      }
    }
  }
  </script>
  <style scoped>
    .tabs{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
      align-content: space-between;
      padding: 10px;
      padding-bottom: 20px;
      /* min-height: 100%; */
    }
    .tabs-item{
      flex: 1;
      flex-basis:40px;
      min-width: 180px;
      font-size: 24px;
      color: #8a8b8c;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      margin: 20px 0;
    }
    .icon_sy {
      background: url('../../assets/icons/menu_shygl.png') no-repeat;
      width: 30px;
      height: 34px;
      display: inline-block;
    }
    .icon_ps{
      background: url('../../assets/icons/menu_pstx.png') no-repeat;
      width: 18px;
      height:40px;
      display: inline-block; 
    }
  </style>
  