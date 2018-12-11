<template>
  <div class="debugger-box p-20">
    <div class="center-flex-v">
      <img src="./assets/img/home.svg" class="wh-25" alt="" srcset="">
      <div class="p-lr6">|</div>
      <div class="">{{bridgeName}}</div>
    </div>
    <h3>调试</h3>
    <div class="btn-item center-flex" v-for="(btn, index) in debuggerArr" :key="`btn${index}`">{{btn.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'DebuggerBox',
  computed: {
    debuggerArr () {
      return this.$slots.content.map((item, index) => {
        return {
          js: (item.children[0] && item.children[0].text) || '',
          title: this.$slots.content.length > 1 ? `${this.bridgeName}调试${index}` : `${this.bridgeName}调试`
        }
      })
    },
    //? 桥接名称
    bridgeName () {
      let path = this.$route.path.split('/')
      return (path.length > 2 && path[2]) || ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.p-20
  padding 20px
.wh-25
  width 25px
  height 25px
.p-lr6
  padding-left 6px
  padding-right 6px
.btn-item
  height 47px
  background-color #27a55b
  color #FFF
  border-radius 5px
  user-select none
  &:active
    opacity .8
</style>
