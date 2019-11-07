<template>
  <div class="news-detail">
    <!--1.navbar 标题-->
    <van-nav-bar
      title=""
      left-arrow
      @click-left="goBack"
    />
    <!--2.box-->
    <div class="news-box">
      <!--2.1 标题-->
      <h1 class="title">三岁以前的孩子不需要检查视力吗？</h1>
      <!--2.2 辅助信息-->
      <div class="side">
        <span class="author">来吧科普</span>
        <span>·</span>
        <span class="time">23小时前发布</span>
      </div>
      <!--2.3 内容-->
      <div class="cnt">
        “开什么玩笑！我儿子刚六个月大就让他查视力？”
        “我和他爸眼睛都非常健康，孩子也不会有问题的！”
        “孩子眼睛还没有发育成熟，等上学了让学校组织查吧！”

        在我们的筛查过程中，问到家长孩子3岁之前是否需要视力检查时，我们得到的是这样的答案。

        在欧洲，孩子从一出生开始就有全面规范的眼部检查，但在国内一般要等到孩子上小学才有简单的眼部检查，家长们也普遍没有这种意识。而3岁之前的视力发展对孩子未来的视力水平至关重要，这是家长绝对不能忽视的！

        初生婴儿大多为生理性远视眼，随着视觉发育会逐渐趋于正常。3岁左右的宝宝，视觉开始变得敏锐、敏感，懂得借由眼睛来引导手去接触新事物，立体视觉的建立已接近完成。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
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
@import "~style/mixins.styl"
@import "~style/varibles.styl"
// 资讯容器
.news-box
  width 100%
  padding .88rem .3rem
  box-sizing border-box
  .title
    padding-top .32rem
    width 100%
    height 1.32rem
    line-height .66rem
    overflow hidden
    font-weight 500
    color $textMainCnt
    font-size .48rem
  .side
    padding-top .24rem
    padding-bottom .48rem
    font-size .24rem
    color $textSub
    font-weight 400
  .cnt
    line-height .4rem
    font-size .28rem
    font-weight 400
    color $text
    font-family:PingFangSC-Regular,PingFang SC
    // 富文本编辑器中出现的图片
    img
      max-width 100%
      height auto
</style>
