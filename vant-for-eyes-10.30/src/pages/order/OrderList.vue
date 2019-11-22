<!--
   订单列表页面
-->

<template>
  <div class="order-list">
    <!--1.navbar 标题-->
    <van-nav-bar
      class="navbar"
      title="我的订单"
      left-arrow
      @click-left="goBack"
    />

    <!--2.二维码-->
    <div class="code-show padding-top88">
      <!--2.1 固定背景-->
      <div class="navbar-bg"></div>
      <!--2.2 列表盒子-->
      <div class="show-box pb-30">
        <main class="cnt">
          <van-tabs v-model="activeName" swipeable swipe-threshold=3>
            <!--2.2.1 列表1 检查订单-->
            <van-tab title="检查订单" name="checkOrder">

              <!--状态1：支付成功-->
              <!--列表项-->
              <div class="item item-a status-success">
                <!--列表左侧内容-->
                <div class="left">
                  <h1 class="item-title"><van-tag color="#009999">支付成功</van-tag>南开爱眼筛查活动</h1>
                  <ul class="item-list">
                    <li class="per-list">检查项1</li>
                    <li class="per-list">检查项2</li>
                    <li class="per-list">...</li>
                  </ul>
                  <div class="totally">
                    <div class="list-total">共4项</div>
                    <div class="list-paid">总额 <span>￥99</span></div>
                    <div class="list-date">2019-10-21 16:51:36</div>
                  </div>
                </div>
                <!--列表右侧内容-->
                <div class="right">
                  <div class="part-model part-top"><img class="icon-code" src="../../assets/image/order/icon_code@2x.png" alt="">条码</div>
                  <div class="line"></div>
                  <div class="part-model part-botom"><van-button plain color="#999" size="small" round>详情</van-button></div>
                </div>
              </div>

              <!--状态2：还未支付-->
              <!--列表项-->
              <div class="item item-a status-standby">
                <!--列表左侧内容-->
                <div class="left">
                  <h1 class="item-title"><van-tag color="#F5A631">还未支付</van-tag>南开爱眼筛查活动</h1>
                  <ul class="item-list">
                    <li class="per-list">检查项1</li>
                    <li class="per-list">检查项2</li>
                    <li class="per-list">...</li>
                  </ul>
                  <div class="totally">
                    <div class="list-total">共4项</div>
                    <div class="list-paid">总额 <span>￥99</span></div>
                    <div class="list-date">2019-10-21 16:51:36</div>
                  </div>
                </div>
                <!--列表右侧内容-->
                <div class="right">
                  <div class="part-model part-top"><van-button plain color="#999" size="small" round>去支付</van-button></div>
                  <div class="line"></div>
                  <div class="part-model part-botom"><van-button plain color="#999" size="small" round>详情</van-button></div>
                </div>
              </div>

              <!--状态3：支付失败-->
              <!--列表项-->
              <div class="item item-a status-fail">
                <!--列表左侧内容-->
                <div class="left">
                  <h1 class="item-title"><van-tag color="#FF6666">支付失败</van-tag>南开爱眼筛查活动</h1>
                  <ul class="item-list">
                    <li class="per-list">检查项1</li>
                    <li class="per-list">检查项2</li>
                    <li class="per-list">...</li>
                  </ul>
                  <div class="totally">
                    <div class="list-total">共4项</div>
                    <div class="list-paid">总额 <span>￥99</span></div>
                    <div class="list-date">2019-10-21 16:51:36</div>
                  </div>
                </div>
                <!--列表右侧内容-->
                <div class="right">
                  <div class="part-model part-top"><van-button plain color="#999" size="small" round>去支付</van-button></div>
                  <div class="line"></div>
                  <div class="part-model part-botom"><van-button plain color="#999" size="small" round>详情</van-button></div>
                </div>
              </div>
            </van-tab>
            <!--2.2.2 列表2 问诊订单-->
            <van-tab title="问诊订单" name="doctorOrder">
              <!--列表项-->
              <div class="item item-a status-success">
                <!--列表左侧内容-->
                <div class="left">
                  <h1 class="item-title"><img class="icon-doctor" src="../../assets/image/order/icon_doctor@2x.png">zang医师</h1>
                  <ul class="item-list">
                    <li class="per-list">检查项1</li>
                    <li class="per-list">检查项2</li>
                    <li class="per-list">...</li>
                  </ul>
                  <div class="totally">
                    <div class="list-total">共4项</div>
                    <div class="list-paid">总额 <span>￥99</span></div>
                    <div class="list-date">2019-10-21 16:51:36</div>
                  </div>
                </div>
                <!--列表右侧内容-->
                <div class="right">
                  <div class="part-model part-top"><img class="icon-ask" src="../../assets/image/order/icon_ask@2x.png" alt=""></div>
                  <div class="line"></div>
                  <div class="part-model part-botom"><van-button plain color="#999" size="small" round>详情</van-button></div>
                </div>
              </div>
            </van-tab>
            <!--2.2.3 列表3-->
            <van-tab title="讲堂订单" name="classOrder">内容 3</van-tab>
          </van-tabs>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data () {
    return {
      activeName: 'checkOrder' // 默认选择检查记录订单
    }
  },
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

  .order-list >>> .van-button
    position inherit
  .order-list >>> [class*=van-hairline]::after
    border none
    position relative !important
  .order-list >>> van-tabs__wrap
    position fixed
  .order-list >>> .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after
    border none
  /*tab 标签 容器*/
  .order-list >>> .van-tabs--line .van-tabs__wrap
    height .8rem
    width calc(100% - .6rem)
    z-index 999
    position fixed
    .van-tabs__nav
      background-color $bgMainBlue
      .van-tab
        color #fff
        font-size .32rem
        font-weight 400
      .van-tab--active
        color #fff
      .van-tabs__line
        width .62rem !important
        height .04rem
        border-radius $borderRadius4
        background-color #fff
  /*tab 内容 容器*/
  .order-list >>> .van-tabs__content
    padding-top 1.32rem
    /*列表项*/
    .item
      margin-bottom .32rem
      display flex
      width 100%
      height 3.6rem
      background-color $bgWhite
      box-shadow $boxShadow
      border-radius $borderRadius8
      .left
        padding 0 .16rem 0 .24rem
        box-sizing border-box
        overflow hidden
        width 73.91%
        height 100%
        border-right .02rem dashed $borderColorE6
        /*检查标题*/
        .item-title
          height 1rem
          line-height 1rem
          ellipsis()
          font-size .32rem
          font-weight bold
          color $textMainTitle
          .icon-doctor
            width .32rem
            margin-right .08rem
          .van-tag
            font-weight 400
            margin-right .08rem
        /*ul*/
        .item-list
          width 100%
          /*li 检查列表展示项*/
          .per-list
            display inline-block
            width 100%
            height .6rem
            font-size .28rem
            color $text
            line-height .6rem
        /*总计*/
        .totally
          width 100%
          display flex
          height .8rem
          align-items center
          font-size .24rem
          color $text
          font-weight 400
          /*总额*/
          .list-paid
            padding-left .16rem
            padding-right .38rem
            box-sizing border-box
            /*具体金额*/
            span
              font-size .32rem
              color $textMainTitle
              font-weight bold
          /*日期*/
          .list-date
            color $textSub
      /*右侧按钮*/
      .right
        width 26.09%
        height 100%
        /*模块分割线*/
        .line
          width .8rem
          height .02rem
          background-color $borderColorEE
          margin 0 auto
          .van-divider
            margin 0
            color $borderColorEE
            height .02rem
        /*模块统一*/
        .part-model
          width 100%
          height 50%
          display flex
          align-items center
          justify-content center
          .van-button
            border-color $borderColorCC !important
        .part-top
          .icon-code
            width .32rem
            margin-right .08rem
          .icon-ask
            width .96rem

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
    background-color $bgLightGray
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
        height auto
        /*height 100%*/
       /* background-color $bgWhite
        box-shadow $boxShadow
        border-radius $borderRadius8*/

</style>
