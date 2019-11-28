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
      // 获取用户代理
      let userAgent = navigator.userAgent
      // 是android终端 或者 uc浏览器
      let AndroidSys = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1
      // 是IOS系统
      let IosSys = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      // Android 处理方法+
      if (AndroidSys) {
        window.jsInterface[myMethods](JSON.stringify(myParams))
      }
      // IOS 处理方法
      if (IosSys) {
        window.webkit.messageHandlers[myMethods].postMessage(myParams)
      }
    }

    /**
     * 公共方法二
     * name     ： getTruthTime
     * function ： 将后台获取数据 -- 带时区的时间戳转换为正常格式
     *             并作为返回值传给当前组件进行显示
     * timeStamp： 需要转化的时间戳
     * how      ： this.getTruthTime(timeStamp)
     * Tips     ： 分和秒都进行了 '+0' 处理
     * */
    Vue.prototype.getTruthTime = function (timeStamp) {
      // 根据时间戳生成的时间对象
      let d = new Date(timeStamp)
      // 分别获取年月日，时分秒
      let date =
        (d.getMonth() + 1) + '/' +
        (d.getDate()) + ' ' +
        (d.getHours()) + ':' +
        ((d.getMinutes() >= 10) ? (d.getMinutes()) : '0' + (d.getMinutes())) + ':' +
        ((d.getSeconds() >= 10) ? (d.getSeconds()) : '0' + (d.getSeconds()))
      return date
    }

    /**
     * 公共方法三
     * name     ： getDifferenceValue
     * function ： 计算发布日期距离当前日期的天数时间差
     * timeStamp： 需要转化的时间戳
     * how      ： this.getDifferenceValue(timeStamp)
     * Tips     ： 分和秒都进行了 '+0' 处理
     * */
    Vue.prototype.getDifferenceValue = function (timeStamp) {
      // 根据时间戳生成的时间对象
      let getTimeStamp = new Date(timeStamp)
      // 获取当前日期
      let getCurrentDate = new Date()
      // 时间差毫秒数
      let diffVal = getCurrentDate - getTimeStamp
      // 计算出相差天数
      let days = Math.floor(diffVal / (24 * 3600 * 1000))
      // 计算天数后剩余的毫秒数
      var leave = diffVal % (24 * 3600 * 1000)
      // 计算出小时数
      var hours = Math.floor(leave / (3600 * 1000))
      let totalCount = days + '天' + hours + '小时' + '前发布'
      return totalCount
    }
  }
}
