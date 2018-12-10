import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import('./components/assets/style/base.styl')
import('./components/assets/style/markdown.styl')

new Vue({
  id: 'app',
  components: {
    App
  },
  router,
  template: `<App></App>`
}).$mount('#app')
