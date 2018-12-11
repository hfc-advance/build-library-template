<template>
  <div>
    <div class="center-flex-v">
      <h1>{{currentDoc.bridgeName}}</h1>
      <div class="center-flex-v relative-view">
       <svg
        @mouseover="isQrcodeShow = true"
        @mouseleave="isQrcodeShow = false" t="1544527082874" class="icon wh-25 m-l6 icon-active" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4878" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><defs></defs><path d="M199.143 336.285h137.143v-137.143h-137.143v137.143zM893.428 542h68.572v214.286h-68.572v-68.572h-68.572v-77.142h-68.572v-68.572h68.572v68.572h68.572v-68.572zM687.715 687.715h137.143v137.143h68.572v68.572h68.572v68.572h-137.143v-68.572h-68.572v-137.143h-68.572v68.572h-77.142v68.572h77.142v68.572h-145.714v-420h145.714v68.572h-77.142v145.714h77.142v-68.572zM62 962h411.428v-420h-411.428v420zM130.572 610.571h274.285v282.858h-274.285v-282.858zM199.143 824.857h137.143v-137.143h-137.143v137.143zM542 62v411.428h420v-411.428h-420zM893.428 404.857h-282.858v-274.285h282.858v274.285zM62 473.428h411.428v-411.428h-411.428v411.428zM130.572 130.572h274.285v274.285h-274.285v-274.285zM824.857 199.143h-137.143v137.143h137.143v-137.143z" p-id="4879" fill="#000000"></path></svg>
      <transition name="slide-fade">
          <div class="center-flex wh-170 qrcode-box" v-show="isQrcodeShow">
            <span>
              <p class="c-5e6 f-12 text-center">扫码调试</p>
              <qr-code class="qr-img" :text="preview"></qr-code>
            </span>
          </div>
        </transition>
      </div>
    </div>
    <div class="c-5e6 f-14">{{currentDoc.bridgeEffect}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { docs as docConfig } from '../config/bridge.doc.js'
import VueQRCodeComponent from 'vue-qrcode-component'
export default {
  name: 'RouterWrapper',
  components: {
    'qr-code': VueQRCodeComponent
  },
  computed: {
    //? 调试地址
    preview () {
      return window.location.href.split('#')[0] + this.$route.path.replace(/\/doc\//, '#/debugger/')
    },
    //? 当前文档配置数据
    currentDoc () {
      let path = this.$route.path.split('/')
      let bridgeName = path.length > 2 ? path[2] : ''
      let result = {}
      for (let i = 0; i < docConfig.length; i++) {
        let model = docConfig[i]
        if (model.bridgeName === bridgeName) {
          result = model
          break
        }
      }
      return result
    }
  },
  data () {
    return {
      isQrcodeShow: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.c-5e6
  color #5e6d82
.f-14
  font-size 14px
.f-12
  font-size 12px
.wh-25
  width 25px
  height 25px
.wh-170
  width 170px
  height 170px
.m-l6
  margin-left 6px
.qrcode-box
  position absolute
  top 100%
  left 50%
  transform translate(-50%, 5px)
  background-color #FFF
  padding: 10px 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,.08);
  border-radius: 4px;
  border: 1px solid #f0f0f0
.qr-img >>> img
  width 100px
  height 100px
.icon-active:hover
  path
    fill #27a55b
</style>
