<!--
    * 订单详情页面
    * 筛查订单
    -->

<template>
  <div class="order-detail">
    <!--1.navbar 导航-->
    <van-nav-bar
      title="我的订单"
      class="navbar"
      left-arrow
      @click-left="goBack"
    />

    <!--2.二维码-->
    <div class="code-show padding-top88">
      <!--2.1 固定背景-->
      <div class="navbar-bg"></div>
      <!--2.2 码展示盒子-->
      <div class="show-box pb-30">
        <main class="cnt">
          <div class="img-box">
            <!--二维码-->
            <div class="qrcode">
              <img src="../../assets/image/order/qrcode@2x.png" alt="">
            </div>
            <!--条形码-->
            <div class="barcode">
              <img src="../../assets/image/order/barcode@2x.png" alt="">
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetailCheck',
  methods: {
    // 回到上一级目录
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~style/mixins"
  @import "~style/varibles"

  [class*=van-hairline]::after
    border none
.order-detail
  width 100%
  height 100%
  position fixed
  background-color $bgLightGray
  /*1.navbar 导航*/
  .navbar
    height .88rem
    line-height .88rem
    background-color $bgMainBlue
    /*1.1 back*/
    .van-nav-bar__left
      .van-icon
        color #fff
    /*1.2 title*/
    .van-nav-bar__title
      color #fff
      font-weight bold

  /*2.码展示*/
  .code-show
    /*2.1 背景*/
    .navbar-bg
      position fixed
      width 100%
      height 0
      padding-bottom 26.67%
      border-radius $RadiusAll48
      background-color $bgMainBlue
    /*2.2 码展示盒子*/
    .show-box
      position relative
      width 100%
      height 4.56rem
      .cnt
        width 100%
        height 100%
        background-color $bgWhite
        box-shadow $boxShadow
        border-radius $borderRadius8
        /*2.2 展示码*/
        .img-box
          width 100%
          height 100%
          text-align center
          background-color $bgWhite
          border-radius $borderRadius8
          /*2.2.1 二维码*/
          .qrcode
            width 100%
            box-sizing border-box
            text-align center
            padding-top .32rem
            padding-bottom .32rem
            img
              width 2.4rem
              height  2.4rem
              max-width 100%
        /*2.2.1 二维码*/
        .barcode
          width 100%
          text-align center
          border-bottom .32rem
          img
            width 4.8rem
            height 1.2rem

</style>
