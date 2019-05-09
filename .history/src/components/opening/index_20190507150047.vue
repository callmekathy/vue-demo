<template>
  <div class="data-wrap">
    <ul class="cm-data-list">
      <li class="loading-item" v-show='loading' v-for="(i,k) in pageEnd" :key="k" v-if="k>=pageStart">
        <div class="animated-background">
          <div class="shade shade-icon-right"></div>
          <div class="shade shade-icon-right_bottom"></div>
          <div class="shade shade-top"></div>
          <div class="shade shade-middle"></div>
          <div class="shade shade-icon-right_bottom"></div>
          <!-- <div class="shade shade-bottom"></div>
          <div class="shade shade-txt-top"></div>
          <div class="shade shade-txt-bottom"></div> -->
        </div>
        <!-- <div class="animated-background"></div> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: true,
      pageEnd: 100,
      pageStart: 0
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "src/assets/styles/mixin";
  @import "src/assets/styles/common";
  .open {
    height: 100vh;
    background: #fff;
  }
</style>
