<template>
 <div class="home commmon-wrap">
   <!--1. navbar 导航-->
   <van-nav-bar class="navbar" title="来吧建康" @click-right="onClickRight">
      <van-image width=".48rem" height=".44rem" slot="right" :src="info" />
   </van-nav-bar>

   <!--2. banner 轮播图-->
   <div class="banner">
     <div class="box-banner">
       <van-swipe :autoplay="3000" indicator-color="yellow">
         <van-swipe-item>
           <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
         </van-swipe-item>
         <van-swipe-item>
           <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt="">
         </van-swipe-item>
       </van-swipe>
     </div>
   </div>

   <!--3. news list 资讯列表-->
 </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      info: require('../assets/image/icon-info.png')
    }
  },
  methods: {
    onClickRight () {
      alert('hahaha')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home >>> .van-swipe__track
    width 100%
    height 0
    padding-bottom 40%
    border-radius .08rem
  .home >>> .van-swipe-item
    width 100%
    height 0
    padding-bottom 40%
    overflow hidden
    border-radius .08rem
  .home >>> .van-swipe-item img
    max-width 100%

  img
    max-width 100%

  .home
    width 100%
    /*1.navbar 导航*/
    .navbar
      height .88rem
      line-height .88rem
      background-color #14CCCC
      .van-nav-bar__title
        color #fff
        font-weight bold
      .van-nav-bar__right
        top .12rem
    /*2.banner 轮播图*/
    .banner
      width 100%
      height auto
      padding .16rem .3rem .32rem
      box-sizing border-box
      background-color red
      .box-banner
        overflow hidden
        width 100%
        padding 0 0 .7rem
        box-sizing border-box
        border-radius .08rem
        background-color blue
        .van-swiper
          border-radius .08rem
          overflow visible
          width 100%
          height 0
          padding-bottom 40%
          background-color #07c160
          img
            width 100%
            max-height 100%
            border-radius .08rem
</style>
