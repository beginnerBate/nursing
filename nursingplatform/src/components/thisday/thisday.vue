<template>
  <div class="thisday">
      <div class="thisday-left">
          <div class="key-wrapper">
              <keyproject></keyproject>
          </div>
          <div class="special-wrapper">
              <specialproject></specialproject>
          </div>
      </div>
      <div class="thisday-right">
          <div  ref="thisdayrightwrapper" class="thisdayrightwrapper">
            <div class="thisday-right-content">
                <div>
                    <!-- 今日值班医生 -->
                    <medicalpermanence></medicalpermanence>
                </div>
                <div>
                    <!-- 今日值班护士 -->
                    <nursingpermanence></nursingpermanence>
                </div>
                <div>
                    <!-- 工作提醒 -->
                    <worktips></worktips>
                </div>
                <div>
                    <!-- 物品借出管理 -->
                    <itemsborrowed></itemsborrowed>
                </div>
                <div>
                    <!-- 病区床信息 -->
                    <changebedinfo></changebedinfo>
                </div>
                <div>
                    <!-- 备忘录 -->
                    <memo></memo>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
import keyproject from 'components/keyproject/keyproject.vue'
import specialproject from 'components/specialproject/specialproject.vue'
import medicalpermanence from 'components/medicalpermanence/medicalpermanence.vue'
import nursingpermanence from 'components/nursingpermanence/nursingpermanence.vue'
import worktips from 'components/worktips/worktips.vue'
import itemsborrowed from 'components/itemsborrowed/itemsborrowed.vue'
import changebedinfo from 'components/changebedinfo/changebedinfo.vue'
import memo from 'components/memo/memo.vue'
import Bscroll from 'better-scroll'
export default {
    created () {
        this.$store.commit('changeheadmenu','首页')
    },
    components: {
        keyproject,
        specialproject,
        medicalpermanence,
        nursingpermanence,
        worktips,
        itemsborrowed,
        changebedinfo,
        memo
    },
    mounted () {
        this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.thisdayrightwrapper, {
            click:true
        })
        })
    } 
}
</script>
