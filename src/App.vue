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
</style>
