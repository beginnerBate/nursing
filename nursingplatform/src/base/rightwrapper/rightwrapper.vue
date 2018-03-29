<template>
  <div class="right-item">
      <header class="right-item-head">
          <i class="fa" :class="icon"></i> {{righthead}}
      </header>
      <div class="right-item-content">
          <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  props:['righthead', 'icon']
}
</script>
<style scoped>
    .right-item{
       min-height: 150px;
       /* border:1px solid #d4d4d4;
       border-top:none; */
       box-shadow: 1px 1px 7px #d4d4d4;
    }
    .right-item-head{
      display: flex;
      align-items: center;
      padding: 0 16px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 3px;
      text-shadow: 1px 1px 5px #45aee0;
      border-top-right-radius: 2px;
      border-top-left-radius: 2px;
      min-height: 46px;
      background: #56CCF2;  /* fallback for old browsers */
      background: linear-gradient(to top,#75d0f8,#bee5f5)/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .right-item-content{
        padding: 6px;
    }
</style>