<template>
  <transition name="slide">
  <div class="recommend-detail">
    <div class="back">
      <i class="icon-back" @click="back"></i>
    </div>
    <h1>歌单详情</h1>
  </div>
  </transition>
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
  h1 {
    margin-left: 100px;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}
.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0)
}
</style>
