<template>
  <div class="news-list">
    <!--1.navbar 标题-->
    <van-nav-bar
      title="健康资讯"
      left-arrow
      @click-left="goBack"
    />
    <!--2.news list 列表-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <news-list-cnt class="padding-top88"></news-list-cnt>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from 'axios'
import NewsListCnt from '../components/NewsListCnt' // 引入公共获取资讯列表组件

export default {
  name: 'NewsList',
  components: {
    NewsListCnt
  },
  data () {
    return {
      newsList: [], // 新闻列表
      total: '', // 新闻列表总数
      loading: false, // 上拉加载 - 继续加载
      finished: false, // 上拉加载 - 完成态
      isLoading: false, // 下拉刷新
      error: false // 错误提示
    }
  },
  methods: {
    // 回到上一级目录
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    // 上拉加载
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        // 获取新闻列表数据
        this.getNewsListHandle()
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.newsList.length >= this.total) {
          this.finished = true
        }
      }, 500)
    },
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.newsList = [] // 重新变回空数组
        this.getNewsListHandle() // 获取后台数据
      }, 500)
    },
    // 获取后台数据
    getNewsListHandle () {
      axios.get('../static/mock/news.json')
        .then((res) => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.newsList = data.newsList // 列表
            this.total = data.total // 列表总数
          }
        })
        .catch(() => {
          this.error = true // 加载错误，点击重新加载
        })
    }
  },
  mounted () {}
}
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
@import "~style/mixins.styl"
@import "~style/varibles.styl"

/* 加载数据位置 loading */
.news-list >>> .van-pull-refresh__head
  top 0

/* 列表项 */
.list-item
  position relative
  padding-top .32rem
  display flex
  justify-content space-between
  height 1.6rem
  overflow hidden
  /*内容容器*/
  .list-item-cnt
    width 100%
    padding-right 1.84rem
    boxSizing()
    /*标题*/
    .item-cnt-title
      height .82rem
      overflow hidden
      line-height .44rem
      font-size .32rem
      font-weight 500
    /*日期*/
    .item-cnt-date
      margin-top .44rem
      font-size .24rem
      font-weight 400
      line-height .34rem
      color $textLight
  /*图片容器(用于数据图片无法显示)*/
  .list-item-img
    position absolute
    right 0
    width 1.6rem
    height 1.6rem
    border-radius $borderRadius8
    background url("../assets/image/default-square.png") no-repeat
    background-size 100% 100%
    /*图片（div承载）*/
    .img
      width 1.6rem
      height 1.6rem
      border-radius $borderRadius8
      background-repeat no-repeat
      background-size cover
      background-position center center

</style>
