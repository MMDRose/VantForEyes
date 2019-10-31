# vant_eyes

> a H5 project for company

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
文件和功能
``` bash
assets：     静态资源文件。包含图片、js、css、iconfont
components： 通用模块组件。可复用组件，如弹框等
pages：      主要页面组件
router：     路由设置文件，指定路由对应组件
store：      vuex需要的状态关联文件，设置公共的state、mutations
http：       与后台api相关内容。如axios配置文件等

App.vue:     入口组件，pages 里的组件会被插入此组件中，此组件再插入 index.html 文件里，形成单页面应用；
main.js:     入口 js 文件，影响全局，作用是引入全局使用的库、公共的样式和方法、设置路由等。

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
