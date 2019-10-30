// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vant/lib/index.css'

import Vue from 'vue'
import Vant from 'vant'
import App from './App'
import router from './router'
import fastClick from 'fastclick'

Vue.config.productionTip = false
// 初始化fastClick
fastClick.attach(document.body)
// 全局使用Vant
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
