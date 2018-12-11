import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* @init<%
let load${TplBridgeNameUpper} = () => import(${TplAnnotationStart} webpackChunkName: "md.${bridgeName}" ${TplAnnotationEnd}'./md/${bridgeName}.md')%> */

/* eslint-disable */
let routes = [
  /* @init<%
  {
    path: '/doc/${bridgeName}',
    name: 'Doc${TplBridgeNameUpper}',
    component: load${TplBridgeNameUpper},
    meta: {
      keepAlive: true,
      title: '${bridgeEffect}'
    }
  },
  {
    path: '/debugger/${bridgeName}',
    name: 'Debugger${TplBridgeNameUpper}',
    component: load${TplBridgeNameUpper},
    meta: {
      keepAlive: true,
      title: '${bridgeEffect}'
    }
  },%> */
]
/* eslint-enable */

export let router = new VueRouter({
  routes
})

//? 第一个桥接为默认路由
if (routes.length > 0) {
  router.addRoutes([
    {
      path: '/',
      name: 'Home',
      redirect: routes[0].path
    }
  ])
}

export default router
