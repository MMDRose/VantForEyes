<template>
  <div class="code">
    <!--1.navbar 标题-->
    <van-nav-bar
      class="navbar"
      title="条码"
      left-arrow
      @click-left="goBack"
    />
    <!--2. 码展示-->
    <div class="show pb-30">
      <main class="cnt">
        <header><h1 class="user-name">MR.E</h1></header>
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
</template>

<script>
export default {
  name: 'Code',
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

  /*去border*/
  [class*=van-hairline]::after
    border none

  /*当前页面整体设置*/
  .code
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-color $bgMainBlue
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
    .show
      width 100%
      padding-top .88rem
      .cnt
        width 100%
        background-color $bgWhite
        border-radius $borderRadius8
        /*2.1 用户名*/
        header
          margin-top .16rem
          width 100%
          height 1.01rem
          line-height 1.01rem
          padding 0 .24rem
          box-sizing border-box
          .user-name
            text-align center
            font-size .48rem
            font-weight 500
            border-bottom $allBorder
        /*2.2 展示码*/
        .img-box
          width 100%
          height 6rem
          text-align center
          background-color $bgWhite
          border-radius $borderRadius8
          /*2.2.1 二维码*/
          .qrcode
            width 100%
            box-sizing border-box
            text-align center
            padding-top .8rem
            padding-bottom .8rem
            img
              width 2.4rem
              height  2.4rem
              max-width 100%
        /*2.2.1 二维码*/
        .barcode
          width 100%
          text-align center
          border-bottom .8rem
          img
            width 4.8rem
            height 1.2rem

</style>
