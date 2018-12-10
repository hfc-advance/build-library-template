<template>
  <div class="content-box">
    <div class="flex bg-f relative-view">
      <div class="menu-wrapper">
        <Menu></Menu>
      </div>
      <!-- 1px border -->
      <div class="menu-split-line"></div>
      <div>
        <router-view class="qk-markdown"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/layout/menu.vue'
export default {
  components: {
    Menu
  },
  name: 'APP'
}
</script>

<style lang="stylus" scoped>
.content-box
  padding 50px
.menu-wrapper
  width 200px
  min-width 200px
  overflow hidden
.menu-split-line
  position absolute
  left 200px
  top 20px
  bottom 20px
  width 1px
  background-color #ECECEC
</style>
