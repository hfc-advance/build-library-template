<template>
  <div class="header-wrapper h-80 center-flex-v p-lr50">
    <img class="wh-30" src="../assets/img/logo.jpg" alt="" srcset="">
    <div class="logo-title">QK BRIDGE</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
.h-80
  height 80px
  background-color: #fff;
  box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
  opacity: 0.98;
.wh-30
  width 30px
  height 30px
.p-lr50
  padding-left 50px
  padding-right 50px
.logo-title
  padding-left 10px
  font-size 16px
  font-weight bold
  color #27a55b
</style>
