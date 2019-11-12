<template>
 <div class="home commmon-wrap">
   <!--1. navbar 导航(公共一级)-->
   <van-nav-bar class="navbar" title="来吧建康"></van-nav-bar>

   <!--2. banner 轮播图-->
   <div class="banner padding-top88">
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
   <div class="news-list">
     <router-link to="/newsList" tag="h1" class="news-list-title">
       <span class="line"></span>
       <span>健康资讯</span>
       <van-icon class="arrow" name="arrow" size=".4rem"></van-icon>
     </router-link>
     <news-list-cnt></news-list-cnt>
   </div>
 </div>
</template>

<script>
// import axios from 'axios'
import NewsListCnt from '../components/NewsListCnt' // 引入公共获取资讯列表组件

export default {
  name: 'Home',
  components: {
    NewsListCnt // 公共资讯列表
  },
  data () {
    return {
      info: require('../assets/image/icon-info.png')
    }
  },
  methods: {
    onGetMsg () {
      alert('hahaha')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~style/mixins"
  @import "~style/varibles"

  .van-hairline--bottom::after
    border none

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
      background-color $bgMainBlue
      .van-nav-bar__title
        color #fff
        font-weight bold
      .van-nav-bar__right
        /*top .12rem*/
        .icon-info
          color: #fff
    /*2.banner 轮播图*/
    .banner
      width 100%
      height auto
      padding 1.04rem .3rem .32rem
      /*padding .16rem .3rem .32rem*/
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
    /*3.news list*/
    .news-list
      padding-top .34rem
      padding-bottom .34rem
      /*3.1 模块标题*/
      .news-list-title
        overflow hidden
        width 100%
        padding30()
        height .56rem
        line-height .56rem
        font-weight bold
        font-size .4rem
        /*3.11 标题前竖线*/
        .line
          float left
          margin-top .1rem
          margin-right .16rem
          width .08rem
          height .4rem
          background-color $colorMainBlue
          border-radius $borderRadius4
        /* 3.13 vant 进入箭头*/
        .arrow
          top .06rem
          float right
          color $textLight
          font-weight bold
</style>
