<template>
  <a
    v-bind:href="url"
    class="nav-link"
  >
    <slot></slot>
  </a>
  <van-nav-bar title="标题" left-text="返回" left-arrow>
    <van-icon name="search" slot="right" />
  </van-nav-bar>
</template>

<script>
export default {
  name: 'NavigationLink'
}
</script>

<style scoped>

</style>
