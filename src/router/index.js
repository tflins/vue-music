import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/views/Rank'
import Search from '@/views/Search'
import Recommend from '@/views/Recommend'
import Singer from '@/views/Singer'
import Login from '@/views/Login'
import SingerDetail from '@/views/SingerDetail'
import RecommendDetail from '@/views/RecommendDetail'
import Register from '@/views/Register'
import UserCenter from '@/views/UserCenter'

Vue.use(Router)

const router = new Router({
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
          path: ':id',
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
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})

// 登录拦截
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !localStorage.token && to.path !== '/register') {
    return next('/login')
  }
  next()
})

export default router
