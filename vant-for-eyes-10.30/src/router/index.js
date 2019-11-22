import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import NewsList from '../pages/NewsList' // 资讯列表
import CommonNav from '../components/CommonNav' // 公共导航条（fixed）
import NewsListCnt from '../components/NewsListCnt' // 动态获取资讯列表内容
import NewsDetail from '../pages/NewsDetail' // 资讯详情
import OrderList from '../pages/order/OrderList' // 订单列表
import Code from '../pages/order/Code' // 获取状态码
import OrderDetailCheck from '../pages/order/OrderDetailCheck' // 订单详情 -- 检查记录
import Center from '../pages/Center' // 个人中心
import Ttext from '../pages/Ttext' // 测试
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 公共导航组件
    {
      path: '/commonnav',
      name: 'CommonNav',
      component: CommonNav
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
    // 订单列表
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
    },
    // 订单详情 -- 筛查
    {
      path: '/orderdetailcheck',
      name: 'OrderDetailCheck',
      component: OrderDetailCheck
    },
    // 码展示
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    // 测试组件
    {
      path: '/ttext',
      name: 'Ttext',
      component: Ttext
    }
  ]
})
