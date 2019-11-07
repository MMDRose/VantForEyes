<template>
  <h1 style="background: red;width: 100%;height: 200px;font-size: 50px;color:#fff">{{ userSite }}</h1>
</template>

<script>
// import global_ from '../components/Global'
// export default {
//   name: 'test',
//   data () {
//     return {
//       serverSrc: global_.serverSrc // 将全局变量赋值到data里面，也可以直接使用global_.token
//     }
//   }
// }
export default {
  name: 'Ttext',
  data () {
    return {
      userSite: this.GLOBAL.userSite // 直接通过this访问全局变量。
    }
  }
}
</script>

<style scoped>

</style>
