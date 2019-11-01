import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import NewsList from '../pages/NewsList'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 资讯列表
    {
      path: '/NewsList',
      name: 'NewsList',
      component: NewsList
    }
  ]
})
