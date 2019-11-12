<template>
 <div class="home commmon-wrap">
   <!--1. navbar 导航(公共一级)-->
   <van-nav-bar class="navbar" title="来吧建康"></van-nav-bar>

   <!--2. banner 轮播图-->
   <div class="banner padding-top88">
     <!--2.1 背景图-->
     <div class="banner-bg"></div>
     <!--2.2 轮播-->
     <div class="box-banner">
       <van-swipe :autoplay="3000" indicator-color="yellow">
         <van-swipe-item v-for="item of bannerList" :key="item.id">
           <img :src="item.imgUrl" :alt="item.title">
         </van-swipe-item>
       </van-swipe>
     </div>
   </div>

   <!--3. 快速入口-->
   <div class="quick-access">
     <ul class="box">
       <!--注意！！！此处需要传参-->
       <!--3.1 健康档案-->
       <li class="access-item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetHealthRecords')">
         <div class="access-img-wrap">
           <img class="access-img" src="../assets/image/home/home_icon_HealthRecords@2x.png" alt="HealthRecords">
         </div>
         <h3 class="access-name">健康档案</h3>
       </li>
       <!--3.2 缴费检查-->
       <li class="access-item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetPayCheck')">
         <div class="access-img-wrap">
           <img class="access-img" src="../assets/image/home/home_icon_PayCheck@2x.png" alt="PayCheck">
         </div>
         <h3 class="access-name">缴费检查</h3>
       </li>
       <!--3.3 问诊记录-->
       <li class="access-item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetInterrogation')">
         <div class="access-img-wrap">
           <img class="access-img" src="../assets/image/home/home_icon_Interrogation@2x.png" alt="Interrogation">
         </div>
         <h3 class="access-name">问诊记录</h3>
       </li>
       <!--3.4 讲堂学习-->
       <li class="access-item" @click="getOriginMethod('{\'t\': \'0\'}', 'onGetClassroom')">
         <div class="access-img-wrap">
           <img class="access-img" src="../assets/image/home/home_icon_classroom@2x.png" alt="classroom">
         </div>
         <h3 class="access-name">讲堂学习</h3>
       </li>
     </ul>
   </div>

   <!--3. news list 资讯列表-->
   <div class="news-list">
     <router-link to="/newsList" tag="h1" class="news-list-title">
       <span class="line"></span>
       <span>健康资讯</span>
       <span class="arrow">
         <img src="../assets/image/home/home_icon_more@2x.png" alt="">
       </span>
     </router-link>

     <!--3.2 插入列表组件，动态加载数据-->
     <news-list-cnt></news-list-cnt>
   </div>
 </div>
</template>

<script>
import axios from 'axios'
import NewsListCnt from '../components/NewsListCnt' // 引入公共获取资讯列表组件

export default {
  name: 'Home',
  components: {
    NewsListCnt // 公共资讯列表
  },
  data () {
    return {
      info: require('../assets/image/icon-info.png'),
      bannerList: [] // 轮播数据
    }
  },
  methods: {
    onGetMsg () {
      alert('hahaha')
    },
    // 获取轮播数据
    getBannerData () {
      axios.get('../static/mock/home.json')
        .then((res) => {
          res = res.data
          if (res.success && res.data) {
            const data = res.data
            this.bannerList = data.bannerList
          }
        })
        .catch()
    }
  },
  created () {
    this.getBannerData() // 获取轮播数据
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~style/mixins"
  @import "~style/varibles"

  .van-hairline--bottom::after
    border none

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
      position relative
      width 100%
      height auto
      padding 1.04rem .3rem .32rem /*0.88 + 0.16 =1.04*/
      box-sizing border-box
      /*2.1 背景图*/
      .banner-bg
        width 100%
        height 0
        padding-bottom 26.6667%
        background-color $bgMainBlue
        position absolute
        top .88rem
        left 0
        right 0
        border-radius $RadiusAll48
      /*2.2 轮播*/
      .box-banner
        position relative
        overflow hidden
        width 100%
        height 0
        padding-bottom: 40%
        border-radius .08rem
        background url("../assets/image/home/home-banner-default.png") no-repeat center center
        background-size 100% 100%
        background rgba(238,238,238,1)
        box-shadow 0 .08rem .16rem 0 rgba(0,0,0,0.12)
        img
          max-width 100%

    /*3.quick access*/
    .quick-access
      width 100%
      height 1.69rem /*1.36 + .32 +.01*/
      padding 0 .46rem
      box-sizing border-box
      /*限定宽度容器*/
      .box
        display flex
        justify-content space-between
        width 100%
        height 100%
        box-sizing border-box
        /*循环列表*/
        .access-item
          width .96rem
          height 100%
          /*3.1 图片容器*/
          .access-img-wrap
            width .96rem
            height 1.12rem
            .access-img
              width 100%
              height 100%
              max-width 100%
          /*3.2 入口名*/
          .access-name
            font-size .2rem
            font-weight 400
            line-height .28rem

    /*4.news list*/
    .news-list
      border-top .24rem solid $borderColorEE
      /*padding-top .34rem*/
      padding-bottom .34rem
      /*4.1 模块标题*/
      .news-list-title
        display flex
        align-items center
        overflow hidden
        width 100%
        padding30()
        height 1rem
        line-height 1rem
        font-weight bold
        font-size .4rem
        border-bottom .01rem solid $borderColorEE
        /*4.11 标题前竖线*/
        .line
          margin-right .16rem
          width .08rem
          height .4rem
          background-color $colorMainBlue
          border-radius $borderRadius4
        /* 4.13 vant 进入箭头*/
        .arrow
          flex 1
          text-align right
          img
            width .8rem
            height .4rem

      /*修改公共组件中部分列表间距*/
      .van-list
        >>> .news-list-ul
          .list-item
            padding-top .16rem
          .list-item:first-child
            padding-top .34rem

</style>
