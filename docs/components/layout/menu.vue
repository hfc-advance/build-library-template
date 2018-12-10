<template>
  <div class="menu-box">
    <nav class="menu-wrapper">
      <div v-for="(menu,index) in docConfig" :key="`menu${index}`">
        <router-link :class="{'menu-item-active': $route.path === `/doc/${menu.bridgeName}`}" class="menu-item flex ellipsis" :to="`/doc/${menu.bridgeName}`">
          {{menu.bridgeName}}
          <span class="ellipsis flex-full">{{menu.bridgeEffect}}测试房间里的撒发了多少</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { docs as docConfig } from '../../config/bridge.doc.js'
export default {
  name: 'Menu',
  data () {
    return {
      docConfig
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-wrapper
  margin 20px 0
.menu-item
  display: block;
  position: relative;
  padding: 6px 6px 6px 32px;
  color: #616367;
  font-size: 14px;
  &:hover
    color: #27A55B;
    background-color: rgba(236,242,252,0.25);
  span
    padding-left: 6px;
    font-size: 12px;
    opacity: 0.6;
.menu-item-active
  background-color rgba(236,242,252,0.25);
  position relative
  &:after
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: #27A55B;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 1px 0 12px 0 #27A55B;
</style>
