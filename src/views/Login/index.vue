<template>
  <div class="login">
    <div class="logo">
      <div class="icon"></div>
      <div class="logo-desc">音 悦</div>
    </div>
    <div class="input-wrapper">
      <label>
        <input type="text" placeholder="E-mail" autocomplete="off" v-model="email">
      </label>
      <label>
        <input type="password" placeholder="密码" autocomplete="new-password" v-model="password">
      </label>
    </div>
    <div class="button-group">
      <button @click="_login">登 录</button>
      <router-link to="/register">
        <button>注 册</button>
      </router-link>
    </div>
    <div>
      <br>
      <center>
        <p>测试邮箱：tflins@163.com</p>
        <br>
        <p>密码：123456</p>
      </center>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/user'
// import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    _login() {
      const userInfo = {
        email: this.email,
        password: this.password
      }
      login(userInfo).then(res => {
        console.log(res)
        if (res.success) {
          localStorage.setItem('token', res.data.token)
          location.replace('/')
        } else {
          alert(res.msg)
        }
      }).catch(err => {
        throw err
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/common/scss/const.scss";
@import "@/common/scss/mixin.scss";

.login {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: $color-background;
  .logo {
    margin-top: 44px;
    width: 100%;
    height: 100px;
    // background: #368;
    text-align: center;
    .logo-desc {
      padding: 10px;
      font-size: 30px;
      color: $color-theme;
    }
    .icon {
      display: inline-block;
      vertical-align: top;
      width: 64px;
      height: 64px;
      @include bg-image("logo");
      background-size: 64px 64px;
    }
  }
  .input-wrapper {
    padding: 10px;
    text-align: center;
    input {
      border: 0;
      outline: 0;
      background: transparent;
      border-bottom: 2px solid $color-text-ll;
      width: 70%;
      color: $color-text-ll;
      font-size: $font-size-large-x;
      margin: 20px;
    }
    input::-ms-input-placeholder {
      text-align: center;
    }
    input::-webkit-input-placeholder {
      text-align: center;
      color: $color-text-d;
    }
  }
  .button-group {
    text-align: center;
    button {
      width: 70%;
      margin: 10px;
      padding: 5px;
      font-size: $font-size-large-x;
      border-radius: 4px;
      background-color: $color-highlight-background;
      color: $color-text-l;
      outline: none;
    }
  }
}
</style>
