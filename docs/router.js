import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    component: () => import('./test.md')
  }
]

export let router = new VueRouter({
  routes
})

export default router
