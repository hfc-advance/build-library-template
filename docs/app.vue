<template>
  <div class="content-box">
    <div class="flex bg-f">
      <div class="menu-wrapper">
        <menu></menu>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './components/layout/menu.vue'
export default {
  name: 'APP',
  components: {
    Menu
  }
}
</script>

<style lang="stylus" scoped>
.content-box
  padding 50px
.menu-wrapper
  width 500px
  min-width 500px
  overflow hidden
</style>
