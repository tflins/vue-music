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
      <div class="song-list">
        <dialog-component :is-show="showCreateSongList" @on-close="closeDialog">
          <div slot="header">请输入歌单信息</div>
          <div class="dialog_publish_main" slot="main">
            <label>
              歌单名称:
              <input type="text" name="" id="">
            </label>
            <br/>
            <label>
              歌单描述:
              <input type="text" name="" id="">
            </label>
            <br/>
            <button>保存</button>
          </div>
        </dialog-component>
      </div>
    </div>
  </transition>
</template>

<script>
import Dialog from '@/base/Dialog'

export default {
  name: 'UserCenter',
  data() {
    return {
      showCreateSongList: false
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    createSongList() {
      this.showCreateSongList = true
    },
    closeDialog() {
      this.showCreateSongList = false
    }

  },
  components: {
    'dialog-component': Dialog
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
    .song-list {
      input {
        margin-top: 10px;
      }
    }
}
</style>
