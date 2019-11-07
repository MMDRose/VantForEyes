<template>
  <!--上拉加载的，数据列表-->
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :error.sync="error"
    error-text="请求失败，点击重新加载"
  >
    <ul class="news-list-ul w-100 pb-30">
      <!--循环列表项-->
      <li class="list-item w-100"
          v-for="item in newsList"
          :key="item.id"
      >
        <!--左侧文字-->
        <div class="list-item-cnt">
          <h1 class="item-cnt-title">{{ item.title }}</h1>
          <p class="item-cnt-date">{{ item.date }}</p>
        </div>
        <!--右侧图片-->
        <div class="list-item-img">
          <!--后台数据加载到的图片,背景形式用于居中显示不合规范图片-->
          <div
            class="img"
            :style="{ 'background-image': 'url(' + item.imgUrl + ')'}"
          >
          </div>
        </div>
      </li>
    </ul>
  </van-list>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewsListCnt',
  data () {
    return {
      newsList: [], // 新闻列表
      total: '', // 新闻列表总数
      loading: false, // 上拉加载 - 继续加载
      finished: false, // 上拉加载 - 完成态
      error: false // 错误提示
    }
  },
  methods: {
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
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
@import "~style/mixins.styl"
@import "~style/varibles.styl"

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
