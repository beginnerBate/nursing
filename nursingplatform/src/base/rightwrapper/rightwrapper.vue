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