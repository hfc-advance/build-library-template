import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* @init<%
let load${TplBridgeNameUpper} = () => import(${TplAnnotationStart} webpackChunkName: "md.${bridgeName}" ${TplAnnotationEnd}'./md/${bridgeName}.md')%> */

let routes = [
  /* @init<%
  {
    path: '/doc/${bridgeName}',
    name: '${TplBridgeNameUpper}',
    component: load${TplBridgeNameUpper},
    meta: {
      keepAlive: true,
      title: '${bridgeEffect}'
    }
  },%> */
]

export let router = new VueRouter({
  routes
})

export default router
