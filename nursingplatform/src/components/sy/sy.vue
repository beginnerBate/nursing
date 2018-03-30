<template>
  <div  class="sy">
      <div class="sy-left">
          <!-- 正在输液 -->
          <div class="sy-left-first">
              <div>
                  <header class="bg-1">正在输液</header>
                  <section></section>
              </div>
          </div>
          <!-- 呼叫 -->
          <div class="sy-left-second">
              <div>
                  <header class="bg-2">
                      呼叫
                  </header>
                  <section></section>
              </div>
          </div>
          <!-- 刻度表 -->
          <div class="sy-left-third"></div>
      </div>
      <div class="sy-right"></div>
  </div>
</template>
<script>
export default {
  created () {
      this.$store.commit('changeheadmenu','输液管理')
  }
}
</script>

<style scoped>
.sy{
    display: flex
}
.sy-left header{
    height: 40px;
    color:#fff;
    line-height: 40px;
    min-width: 150px;
    text-align: center;
    font-weight: 600px;
    letter-spacing: 3px;
}
.bg-1{
    background-color: #57b5e3;
}
.bg-2{
    background-color: #E86538;
}
.sy-left-first,.sy-left-second{
    border: 1px solid #d4d4d4;
    margin-bottom: 20px;
}
.sy-left-first>div>section{
    min-height: 100px;
}
.sy-left-second>div>section{
    min-height: 180px;
}
</style>

