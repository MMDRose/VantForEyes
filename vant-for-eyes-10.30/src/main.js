// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vant/lib/index.css'
import 'style/reset.css'
import 'style/cover-vant.css'

import Vue from 'vue'
import Vant from 'vant'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import global_ from './components/Global' // 引入全局js全局变量
Vue.prototype.GLOBAL = global_ // js全局变量挂载到Vue实例上面

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
