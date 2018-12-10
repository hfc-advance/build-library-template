import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import('./base.styl')
import('../node_modules/highlight.js/styles/atom-one-light.css')

new Vue({
  id: 'app',
  components: {
    App
  },
  router,
  template: `<App></App>`
}).$mount('#app')
