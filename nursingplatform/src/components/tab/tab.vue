<template>
  <div class="tabs">
    <template v-for="(item, index) in tabs">
      <router-link tag="div" class="tabs-item" :to="item.urlLink" :key='index'>
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
            urlLink: '/eboard'
          },
          {
            name: '责任医护',
            urlLink: '/responsibility '
          },
          {
            name: '输液管理',
            urlLink: '/transfusion'
          },
          {
            name: '皮试测试',
            urlLink: '/skintest'
          },
          {
            name: '待执行',
            urlLink: '/perform'
          },
          {
            name: '护士宣教',
            urlLink: '/nursing'
          },
          {
            name: '病区一览',
            urlLink: '/ward'
          },
          {
            name: '病区排班',
            urlLink: '/scheduling'
          }
        ]
      }
    }
  }
  </script>