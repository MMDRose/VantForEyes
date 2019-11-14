<template>
  <div class="order-list" style="height: 1000px">
    <!--1.navbar 标题-->
    <van-nav-bar
      class="navbar"
      title="我的订单"
      left-arrow
      @click-left="goBack"
    />
    <!--2.header-->
    <div class="cnt padding-top88">
      <!--2.1 固定背景-->
      <div class="navbar-bg"></div>
      <!--2.2 内容-->
      <main class="tab-cnt pb-30">
        <van-tabs v-model="activeName" swipeable swipe-threshold="3">
          <van-tab title="标签 1" name="a">
            kai
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>

            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>

            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>

            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>

            内容 1<br>内容 1<br>内容 1<br>内容 1<br>内容 1<br>
            the end
          </van-tab>
          <van-tab title="标签 2" name="b">内容 2</van-tab>
          <van-tab title="标签 3" name="c">内容 3</van-tab>
        </van-tabs>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data () {
    return {
      activeName: 'a'
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

  [class*=van-hairline]::after
    border none
  .order-list >>> van-tabs__wrap
    position fixed
  .order-list >>> .van-tabs--line .van-tabs__wrap
    height .8rem

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

  /*2.tab*/
  .cnt
    position fixed
    width 100%
    height calc(100% - .88rem)
    background-color rebeccapurple
    /*2.1 背景*/
    .navbar-bg
      position fixed
      width 100%
      height 0
      padding-bottom 26.67%
      border-radius $RadiusAll48
      background-color $bgMainBlue
    /*2.2 内容*/
    .tab-cnt
      position relative
      width 100%
      >>> .van-tabs__content
        width 100%
        height calc(100% - 1.88rem)
        overflow-y scroll
        background-color #000
</style>
