<template>
  <div id="app">
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from '@/components/MHeader/MHeader'

export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="scss">
@import "@/common/scss/const.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: color-text;
  margin-top: 60px;
}
</style>
