<template>
  <transition name="slide">
    <div class="user-center">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>
      <div class="title">
        <span>用户中心</span>
      </div>
      <div class="btn-wrapper" style="">
        <div class="btn" @click="createSongList">
          <span class="text">创建歌单</span>
        </div>
        <div class="btn">
          <span class="text">修改密码</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UserCenter',
  methods: {
    back() {
      this.$router.back()
    },
    createSongList() {
      alert('das')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/const.scss";

.user-center {
  position: fixed;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: $color-background;
  &.slide-enter-active, &.slide-leave-active {
    transition: all 0.3s;
  }
  &.slide-enter, &.slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .back {
      position: absolute;
      top: 0;
      left: 6px;
      z-index: 50;
      .icon-back {
        display: block;
        padding: 10px;
        font-size: $font-size-large-x;
        color: $color-theme;
      }
  }
  .title {
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    color: $color-theme;
    text-align: center;
    font-size: $font-size-large;
  }
  .btn-wrapper {
      position: absolute;
      top: 100px;
      z-index: 100;
      width: 100%;
      .btn {
        box-sizing: border-box;
        width: 200px;
        padding: 7px 0;
        margin: 20px auto;
        text-align: center;
        border: 1px solid $color-theme;
        color: $color-theme;
        border-radius: 100px;
        font-size: 0;
        .text {
          display: inline-block;
          vertical-align: middle;
          font-size: $font-size-medium-x;
        }
      }
    }
}
</style>
