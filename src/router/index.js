import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/views/Rank'
import Search from '@/views/Search'
import Recommend from '@/views/Recommend'
import Singer from '@/views/Singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
