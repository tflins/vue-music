<template>
  <transition name="slide">
    <div class="user-center">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>
      <div class="title">
        <span>欢迎: {{user.name}}</span>
      </div>
      <div class="btn-wrapper" style="">
        <div class="btn" @click="goToMySongList">
          <span class="text">我的歌单</span>
        </div>
        <div class="btn" @click="createSongList">
          <span class="text">创建歌单</span>
        </div>
        <!-- <div class="btn" @click="updatePassword">
          <span class="text">修改密码</span>
        </div> -->
        <div class="btn" @click="logout">
          <span class="text">退出登录</span>
        </div>
      </div>
      <div class="song-list">
        <dialog-component :is-show="showCreateSongList" @on-close="closeCreateSongListDialog">
          <div slot="header">请输入歌单信息</div>
          <div class="dialog_publish_main" slot="main">
            <label>
              歌单名称:
              <input type="text" name="" id="" v-model="songListInfo.name">
            </label>
            <br/>
            <label>
              歌单描述:
              <input type="text" name="" id="" v-model="songListInfo.desc">
            </label>
            <br/>
            <button @click="_createSongList">保存</button>
          </div>
        </dialog-component>
      </div>
      <div class="password-update">
        <dialog-component :is-show="showPassword" @on-close="closePasswordDialog">
          <div slot="header">修改密码</div>
          <div class="dialog_publish_main" slot="main">
            <label>
              旧密码:
              <input type="text" name="" id="">
            </label>
            <br/>
            <label>
              新密码:
              <input type="text" name="" id="">
            </label>
            <br/>
            <label>
              确认密码:
              <input type="text" name="" id="">
            </label>
            <br/>
            <button>保存</button>
          </div>
        </dialog-component>
      </div>
    <router-view></router-view>
    </div>
  </transition>
</template>

<script>
import Dialog from '@/base/Dialog'
import {current, createSongList} from '@/api/user'

export default {
  name: 'UserCenter',
  created() {
    this._getCurrentUser()
  },
  data() {
    return {
      showCreateSongList: false,
      showPassword: false,
      user: {},
      songListInfo: {
        name: '',
        desc: ''
      }
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.replace('/login')
    },
    goToMySongList() {
      this.$router.push('/user/mysonglist')
    },
    back() {
      this.$router.back()
    },
    createSongList() {
      this.showCreateSongList = true
    },
    updatePassword() {
      this.showPassword = true
    },
    closeCreateSongListDialog() {
      this.showCreateSongList = false
    },
    closePasswordDialog() {
      this.showPassword = false
    },
    _getCurrentUser() {
      current().then(res => {
        if (res.success) {
          this.user = res.data.data
        }
      }).catch(err => {
        alert('登录过期!')
        localStorage.removeItem('token')
        this.$router.replace('/login')
        throw err
      })
    },
    _createSongList() {
      createSongList(this.songListInfo).then(res => {
        if (res.success) {
          alert('添加歌单成功!')
          this.showCreateSongList = false
        } else {
          alert(res.msg)
        }
      })
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
  .user-info {
    position: absolute;
    top: 50px;
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
