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
      <p>刷新次数: {{ count }}</p>
      <van-list
        class="padding-top88"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in list"
          :key="item"
          :title="item"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      count: 0,
      isLoading: false // 下拉刷新
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
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
@import "~style/mixins.styl"
@import "~style/varibles.styl"

</style>
