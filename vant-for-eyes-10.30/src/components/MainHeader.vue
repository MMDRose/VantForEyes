<template>
  <van-nav-bar class="navbar" title="来吧建康" @click-right="onGetMsg">
    <!--     <van-image width=".48rem" height=".44rem" slot="right" :src="info"  />-->
    <van-icon class="icon-info" name="comment-o" dot color="#fff"  slot="right" />
  </van-nav-bar>
</template>

<script>
export default {
  name: 'MainHeader',
  methods: {
    onGetMsg () {
      alert('hahaha')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*navbar 导航*/
  .navbar
    height .88rem
    line-height .88rem
    background-color #14CCCC
    /*navbar 标题*/
    .van-nav-bar__title
      color #fff
      font-weight bold
</style>
