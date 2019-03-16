import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/views/Rank'
import Search from '@/views/Search'
import Recommend from '@/views/Recommend'
import Singer from '@/views/Singer'
import Login from '@/views/Login'
import SingerDetail from '@/views/SingerDetail'
import RecommendDetail from '@/views/RecommendDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: 'recommenddetail',
          component: RecommendDetail
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
