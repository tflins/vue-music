<template>
  <div class="login">
    <div class="logo">
      <div class="icon"></div>
      <div class="logo-desc">音 悦</div>
    </div>
    <div class="input-wrapper">
      <label>
        <input type="text" placeholder="E-mail">
      </label>
      <label>
        <input type="text" placeholder="密码">
      </label>
    </div>
    <div class="button-group">
      <button>登 录</button>
      <button>注 册</button>
    </div>
  </div>
</template>

<script>
export default {}
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
      border-bottom: 2px solid #fff;
      width: 70%;
      color: $color-text;
      font-size: $font-size-large-x;
      margin: 20px;
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
      color: $color-text;
      outline: none;
    }
  }
}
</style>
