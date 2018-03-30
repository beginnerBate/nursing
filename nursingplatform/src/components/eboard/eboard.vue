<template>
  <div>{{mydata}}</div>
</template>
<script>
export default {
  data () {
      return {
          mydata: 'eboard'
      }
  },
  created () {
    this.$store.commit('changeheadmenu','电子白板')
  }
}
</script>

