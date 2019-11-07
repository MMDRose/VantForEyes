import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import NewsList from '../pages/NewsList'
import NewsListCnt from '../components/NewsListCnt'
import NewsDetail from '../pages/NewsDetail'
import Center from '../pages/Center'
import Ttext from '../pages/Ttext'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 个人中心
    {
      path: '/center',
      name: 'Center',
      component: Center
    },
    // 资讯列表
    {
      path: '/newslist',
      name: 'NewsList',
      component: NewsList
    },
    // 资讯列表common
    {
      path: '/newslistcnt',
      name: 'NewsListCnt',
      component: NewsListCnt
    },
    // 资讯
    {
      path: '/newsdetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    // 测试组件
    {
      path: '/ttext',
      name: 'Ttext',
      component: Ttext
    }
  ]
})
