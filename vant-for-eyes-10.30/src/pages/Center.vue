<template>
  <div class="center">
    <!--1. navbar 导航(公共一级)-->
    <van-nav-bar class="navbar" title=""></van-nav-bar>

    <!--2. 个人信息-->
    <header class="pb-30 w-100">
      <!--登录状态-->
      <div class="personal" v-if="ifLogin">
        <!--2.1 图片容器-->
        <div class="img-box">
          <img src="../assets/image/center/center-default-head.png" alt="">
        </div>
        <!--2.2 用户昵称-->
        <div class="name-box">
          <h1 class="name">小小小肥肥</h1>
        </div>
      </div>

      <!--未登录状态-->
      <div class="personal" v-else @click="getOriginMethod({'t':'0'},'onGetLogin')">
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

    <div class="transform-bg">
      <img src="../assets/image/center/center-header-bg.png" alt="">
    </div>

    <!--3. 主要功能-->
    <main class="main-function w-100">
      <div class="main-function-box">
        <van-grid :border="false" :column-num="3">
          <van-grid-item @click="getOriginMethod({'t':'0'},'onGetPatient')">
            <van-image :src="this.iconImg[0]"></van-image>
            <h2 class="func-name">就诊人管理</h2>
          </van-grid-item>
          <van-grid-item @click="getOriginMethod({'t':'0'},'onGetArchives')">
            <van-image :src="this.iconImg[1]"></van-image>
            <h2 class="func-name">健康档案</h2>
          </van-grid-item>
          <!--订单跳转到H5订单列表-->
          <van-grid-item @click="onGetOrderList">
            <van-image :src="this.iconImg[2]"></van-image>
            <h2 class="func-name">我的订单</h2>
          </van-grid-item>
        </van-grid>
      </div>
    </main>

    <!--4. 辅助功能-->
    <div class="sub-function w-100">
      <ul class="w-100 sub-items">
        <!--4.0 消息中心-->
        <!--需要与原生界面做交互，反馈最新提示信息-->
        <li class="item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetMsg')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-00.png" alt="消息中心">
            <span class="center-sub-name">消息中心</span>
          </h1>
          <div class="tips">
            <van-tag class="tag-new">您有<span class="num">1</span>条未读消息</van-tag>
          </div>
          <img class="enter" src="../assets/image/enter.png" alt="enter">
        </li>
        <!--4.1 意见反馈-->
        <li class="item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetQA')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-01.png" alt="意见反馈">
            <span class="center-sub-name">意见反馈</span>
          </h1>
          <img class="enter" src="../assets/image/enter.png" alt="enter">
        </li>
        <!--4.2 隐私条款-->
        <li class="item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetPolicy')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-02.png" alt="隐私条款">
            <span class="center-sub-name">隐私条款</span>
          </h1>
          <img class="enter" src="../assets/image/enter.png" alt="enter">
        </li>
        <!--4.3 关于我们-->
        <li class="item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetAbout')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-03.png" alt="关于我们">
            <span class="center-sub-name">关于我们</span>
          </h1>
          <img class="enter" src="../assets/image/enter.png" alt="enter">
        </li>
        <!--4.4 设置-->
        <li class="item"  @click="getOriginMethod('{\'t\': \'0\'}', 'onGetSetting')">
          <h1>
            <img class="center-sub-icon" src="../assets/image/center/center-sub-04.png" alt="设置">
            <span class="center-sub-name">设置</span>
          </h1>
          <img class="enter" src="../assets/image/enter.png" alt="enter">
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
      'ifLogin': false, // 是否登录状态（默认false未登录）
      'iconImg': [ // 图片引入
        require('../assets/image/center/center-func-icon01.png'),
        require('../assets/image/center/center-func-icon02.png'),
        require('../assets/image/center/center-func-icon03.png')
      ]
    }
  },
  methods: {
    // 点击获取通知
    onGetMsg () {
      alert('点击获取通知')
    },
    // 关于订单
    onGetOrderList () {
      alert('订单处理')
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
    width .9rem
    height .9rem
    img
      max-width 100%
      width 100%
.center
  position relative
  /*1. navbar 导航*/
  .navbar
    position relative
    height .88rem
    line-height .88rem
    background-color $bgMainBlue
    /*navbar 标题*/
    .van-nav-bar__title
      color #fff
      font-weight bold
  /*2. 个人信息展示*/
  header
    position relative
    height 1.98rem
    width 100%
    text-align center
    background-color $bgMainBlue
    /*个人信息内容*/
    .personal
      width 100%
      height 1.2rem
      /*2.1 图片容器*/
      .img-box
        margin 0 auto
        width 1.2rem
        height 1.2rem
        border-radius 50%
        img
          max-width 100%
      /*2.2 用户昵称*/
      .name-box
        margin-top .08rem
        width 100%
        height .5rem
        line-height .5rem
        overflow hidden
        .name
          font-size .36rem
          font-weight 500
          color $colorWhite

  /*过度背景*/
  .transform-bg
    position absolute
    top 2.78rem
    width 100%
    height auto
    img
      width 100%
      height auto
      max-width 100%
      border none

/*3. 主要内容*/
  .main-function
    padding auto .8rem
    box-sizing border-box
    position relative
    top: .34rem
    height 1.98rem
    .main-function-box
      overflow hidden
      text-align center
      width 100%
      height 1.98rem
      .van-grid
        .func-name
          margin-top .16rem
          color $textSub
          font-weight 400
          font-size .2rem

  /*4. 辅助内容列表*/
  .sub-function
    margin-top .32rem
    .sub-items
      /*li*/
      .item
        padding 0 .3rem
        box-sizing border-box
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
      .item:first-child
        height 1.48rem
        border-top .24rem solid $borderColorEE
        border-bottom .24rem solid $borderColorEE
        .tips
          flex 1
          text-align right
          .tag-new
            margin .16rem
            display inline-block !important
            width 2.4rem
            height .4rem
            line-height .4rem
            text-align center
            border-radius $borderRadius8
            font-size .24rem
            font-weight 400
            background-color $bgSubRed
            color $colorMainRed

</style>
