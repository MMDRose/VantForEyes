export default {
  install (Vue, options) {
    /**
     * 公共方法一
     * name     ： getOriginMethod
     * function ： 调用原生方法
     * params   ： 传入参数
     * methods  ： 传入调用方法名
     * how      ： this.getOriginMethod('参数','方法名')
     * @click   ： getOriginMethod('{\'t\': \'0\'}', '方法')
     * */
    Vue.prototype.getOriginMethod = function (myParams, myMethods) {
      alert('params:' + myParams + '---' + myMethods)
      // 获取用户代理
      let userAgent = navigator.userAgent
      // 是android终端 或者 uc浏览器
      let AndroidSys = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1
      // 是IOS系统
      let IosSys = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      // Android 处理方法
      if (AndroidSys) {
        alert('Android 处理方法')
        window.jsInterface.myMethods(JSON.stringify(myParams))
      }
      // IOS 处理方法
      if (IosSys) {
        alert('IOS 处理方法')
        window.webkit.messageHandlers.myMethods.postMessage(myParams)
      }
    }
  }
}
