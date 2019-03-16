<template>
  <div class="recommend-detail">
    <div class="back">
      <i class="icon-back" @click="back"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/common/scss/mixin.scss';
@import '@/common/scss/const.scss';

.recommend-detail {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100111;
  background: $color-background;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 100;
    .icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
}
</style>
