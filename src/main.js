// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from '@/store'

import '@/common/scss/index.scss'

// 解决移动端3秒延迟
FastClick.attach(document.body)

// 初始化懒加载
Vue.use(VueLazyload, {
  loading: require('@/common/images/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
