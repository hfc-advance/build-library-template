<template>
  <div>
    <!-- 调试模式 -->
    <template v-if="isDebugger">
       <router-view class="debugger-router-wrapper"></router-view>
    </template>
    <!-- 文档模式 -->
    <template v-else>
      <Header></Header>
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
  </div>
</template>

<script>
import Menu from './components/layout/menu.vue'
import Header from './components/layout/header.vue'
export default {
  name: 'APP',
  components: {
    Menu,
    Header
  },
  computed: {
    //? 是否调试模式
    isDebugger () {
      return /^(\/debugger)/.test(this.$route.path)
    }
  }
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
