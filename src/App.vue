<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from '@/components/MHeader'
import Tab from '@/components/Tab'

export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="scss">
</style>
