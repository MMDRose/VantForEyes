<template>
  <div class="center">
    <!--1. navbar 导航(公共一级)-->
    <van-nav-bar class="navbar" title="" @click-right="onGetMsg">
      <van-icon class="icon-info" name="comment-o" dot color="#fff"  slot="right" />
    </van-nav-bar>

    <!--2. 个人信息-->
    <header class="pb-30 w-100">
      <!--未登录状态-->
      <div class="personal" v-if="ifLogin">
        <!--2.1 图片容器-->
        <div class="img-box">
          <img src="../assets/image/center/center-default-head.png" alt="">
        </div>
        <!--2.2 用户昵称-->
        <div class="name-box">
          <h1 class="name">点击登录</h1>
        </div>
      </div>

      <!--登录状态-->
      <div class="personal" v-else>
        <!--2.1 图片容器-->
        <div class="img-box">
          <img src="../assets/image/center/center-default-head.png" alt="">
        </div>
        <!--2.2 用户昵称-->
        <div class="name-box">
          <h1 class="name">点击登录</h1>
        </div>
      </div>
    </header>

    <!--3. 主要功能-->
    <main class="main-function pb-30 w-100">
      <div class="main-function-box">
        <h1 class="function-title">我的服务</h1>
        <van-grid :border="false" :column-num="3">
          <!--3.1 循环项，点击转原生方法-->
          <van-grid-item @click="getOriginMethod({'t':'0'},item.getMethod)">
            <van-image :src="item.image"></van-image>
            <h2 class="func-name" v-text="item.title"></h2>
          </van-grid-item>
        </van-grid>
      </div>
    </main>

    <!--4. 辅助功能-->
    <div class="sub-function pb-30 w-100">
      <ul class="w-100 sub-items">
        <!--4.1 意见反馈-->
        <li class="item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetQA')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-01.png" alt="">
            <span class="center-sub-name">意见反馈</span>
          </h1>
          <img class="enter" src="../assets/image/enter.png" alt="">
        </li>
        <!--4.2 隐私条款-->
        <li class="item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetPolicy')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-02.png" alt="">
            <span class="center-sub-name">隐私条款</span>
          </h1>
          <img class="enter" src="../assets/image/enter.png" alt="">
        </li>
        <!--4.3 关于我们-->
        <li class="item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetAbout')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-03.png" alt="">
            <span class="center-sub-name">关于我们</span>
          </h1>
          <img class="enter" src="../assets/image/enter.png" alt="">
        </li>
        <!--4.4 设置-->
        <li class="item"  @click="getOriginMethod('{\'t\': \'0\'}', 'onGetSetting')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-04.png" alt="">
            <span class="center-sub-name">设置</span>
          </h1>
          <img class="enter" src="../assets/image/enter.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {
      funcList: [
        require('../assets/image/center/center-func-icon01.png'),
        require('../assets/image/center/center-func-icon02.png'),
        require('../assets/image/center/center-func-icon03.png')
      ],
      functionList: [{
        'title': '就诊人管理',
        'image': require('../assets/image/center/center-func-icon01.png'),
        'getMethod': ''
      }, {
        'title': '健康档案',
        'image': require('../assets/image/center/center-func-icon02.png'),
        'getMethod': ''
      }, {
        'title': '我的订单',
        'image': require('../assets/image/center/center-func-icon03.png'),
        'getMethod': ''
      }]
    }
  },
  methods: {
    // 点击获取通知
    onGetMsg () {
      alert('hahaha')
    },
    test () {
      this.getOriginMethod('参数', '方法')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~style/varibles"
@import "~style/mixins"
  .van-hairline--bottom::after
    border none

  .main-function >>> .van-image
    width 1.1rem
    height 1.16rem
    img
      max-width 100%
      width 100%

  /*1. navbar 导航*/
  .navbar
    height .88rem
    line-height .88rem
    background-color #14CCCC
    /*navbar 标题*/
    .van-nav-bar__title
      color #fff
      font-weight bold
  /*2. 个人信息展示*/
  header
    position relative
    top: .88rem
    width 100%
    height auto
    min-height 3.28rem
    background-color red
    background url("../assets/image/center/center-header-bg.png") no-repeat
    background-size 100% auto
    /*个人信息内容*/
    .personal
      width 100%
      height 1.2rem
      /*2.1 图片容器*/
      .img-box
        float left
        width 1.2rem
        height 1.2rem
        border-radius 50%
        img
          max-width 100%
      /*2.2 用户昵称*/
      .name-box
        float left
        margin-left .16rem
        width 2.8rem
        height 1.2rem
        line-height 1.2rem
        .name
          width 2.8rem
          ellipsis()
          font-size .48rem
          font-weight 500
          color $colorWhite

  /*3. 主要内容*/
  .main-function
    position relative
    margin-top -.8rem
    /*padding-top .2rem*/
    background transparent
    .main-function-box
      overflow hidden
      width 100%
      height 2.6rem
      box-shadow 0 .04rem .12rem 0 rgba(0,0,0,0.1)
      background-color $bgWhite
      border-radius $borderRadius8
      /*3.1 标题*/
      .function-title
        width 100%
        height .8rem
        line-height .8rem
        padding 0 .16rem
        box-sizing border-box
        font-size .32rem
        font-weight 400
        color $textMainTitle
        border-bottom .01rem solid $borderColorEE
      .van-grid
        .func-name
          margin-top -.12rem
          color $textSub
          font-weight 400
          font-size .2rem

  /*4. 辅助内容列表*/
  .sub-function
    margin-top .64rem
    .sub-items
      /*li*/
      .item
        display flex
        align-items center
        justify-content space-between
        height 1rem
        line-height 1rem
        border-bottom .01rem solid $borderColorEE
        /*ul*/
        h1
          /*3.1 icon*/
          .center-sub-icon
            margin-right .2rem
            width .32rem
            height .32rem
          /*3.2 title*/
          .center-sub-name
            color $text
            font-weight 400
            font-size .32rem
        /*3.3 enter icon*/
        .enter
          width .24rem
          height .24rem
</style>
