<template>
  <div id="app">
    <router-view/>
<!--    当前路由v-show="$route"添加meta属性，进行路由的区别 meta{showfooter:true}  meta默认为空对象，值为false-->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
