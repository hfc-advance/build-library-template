import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import DemoBox from './components/demobox.vue'
import DebuggerBox from './components/debuggerbox.vue'
import 'highlight.js/styles/atom-one-dark.css'
import './components/assets/style/base.styl'
import './components/assets/style/markdown.styl'

Vue.component('demo-box', DemoBox)
Vue.component('debugger-box', DebuggerBox)

new Vue({
  id: 'app',
  components: {
    App
  },
  router,
  template: `<App></App>`
}).$mount('#app')
