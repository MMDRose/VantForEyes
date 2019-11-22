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
      <div class="show-box pb-30 pt16">
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

    <!--3.支付详情-->
    <div class="paid-box pt16 pb-30">
      <div class="paid-cnt">

        <!--3.1 part 01 检查项-->
        <div class="part-check">
          <!--3.1.1 标题-->
          <van-cell>
            <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
              <van-tag color="#009999">支付成功</van-tag>
              <span class="custom-title">南开爱眼检查活动</span>
            </template>
          </van-cell>
          <!--3.1.2 内容-->
          <van-cell title="检查项1" value="× 1" />
          <van-cell title="检查项1" value="× 1" />
          <van-cell title="检查项1" value="× 1" />
          <van-cell title="检查项1" value="× 1" />
          <van-cell title="检查项1" value="× 1" />
          <van-cell class="calc">
            <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
              <span class="num">共5项</span>
            </template>
            <template slot="default">
              <span class="total">总额<span class="paid">￥99</span></span>
            </template>
          </van-cell>
        </div>

        <!--3.2 part 02 支付信息-->
        <div class="part-paid">
          <van-cell title="订单编号" label="SW012345678901234567890123456789" />
          <van-cell title="支付方式" value="微信支付" />
          <van-cell title="下单时间" value="2019-11-07 15:40" />
        </div>
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
  .van-cell:not(:last-child)::after
    border none

  /*list item*/
  .order-detail  >>> .van-cell
    padding 0 .24rem
    height 1rem
    line-height 1rem
    overflow hidden
    font-size .28rem
    font-weight 400
    color $text

.order-detail
  width 100%
  height 100%
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
      .cnt
        width 100%
        height 4.56rem
        /*height 100%*/
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

  /*3. 付款详情*/
  .paid-box
    padding-bottom .48rem
    width 100%
    box-sizing border-box
    .paid-cnt
      padding-top 0 .24rem
      width 100%
      background-color $bgWhite
      box-shadow $boxShadow
      border-radius $borderRadius8
      /*第一部分 part 01 检查记录*/
      .part-check
        border-bottom $allBorder
        /*总计*/
        .calc
          font-size .24rem
          /*支付金额*/
          .paid
            padding-left .04rem
            font-size .4rem
            font-weight bold
            color $colorMainRed
        /*首行标题*/
        >>> .van-cell:first-child
          font-size .32rem
          font-weight bold
          color $textMainTitle

      /*第二部分 part 02 支付信息*/
      .part-paid
        margin-top .24rem
        >>> .van-cell .van-cell__title
          color $textMainTitle
          font-weight bold
          .van-cell__label
            font-weight 400
        >>> .van-cell:first-child
          overflow visible
          line-height .4rem
</style>
