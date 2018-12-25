import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/Rank'
import Search from '@/components/Search'
import Recommend from '@/components/Recommend'
import Singer from '@/components/Singer'

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
