<template>
  <!--1.navbar 标题-->
  <van-nav-bar
    class="navbar"
    left-arrow
    @click-left="goBack"
  >
    <h1 slot="title"></h1>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'CommonNav',
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
</style>
