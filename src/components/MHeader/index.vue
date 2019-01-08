<template>
  <div class="m-header">
    <div class="icon"></div>
    <div class="text">音 悦</div>
  </div>
</template>

<script>
export default {
  name: 'MHeader'
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/const.scss";
@import "@/common/scss/mixin.scss";

.m-header {
  position: relative;
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 32px;
    height: 32px;
    margin-right: 9px;
    @include bg-image("logo");
    background-size: 32px 32px;
  }
  .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: $font-size-large;
  }
}
</style>
