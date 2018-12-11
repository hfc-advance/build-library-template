import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let loadJfdlasjdlfk = () => import(/* webpackChunkName: "md.jfdlasjdlfk" */'./md/jfdlasjdlfk.md')
let loadResult = () => import(/* webpackChunkName: "md.result" */'./md/result.md')
/* @init<%
let load${TplBridgeNameUpper} = () => import(${TplAnnotationStart} webpackChunkName: "md.${bridgeName}" ${TplAnnotationEnd}'./md/${bridgeName}.md')%> */

/* eslint-disable */
let routes = [
  {
    path: '/doc/jfdlasjdlfk',
    name: 'Jfdlasjdlfk',
    component: loadJfdlasjdlfk,
    meta: {
      keepAlive: true,
      title: '的家乐福卡电视剧里附近ADSL看风景了的撒娇发了坚实的六块腹肌'
    }
  },
  {
    path: '/doc/result',
    name: 'DocResult',
    component: loadResult,
    meta: {
      keepAlive: true,
      title: 'jfldajflkd'
    }
  },
  /* @init<%
  {
    path: '/doc/${bridgeName}',
    name: 'Doc${TplBridgeNameUpper}',
    component: load${TplBridgeNameUpper},
    meta: {
      keepAlive: true,
      title: '${bridgeEffect}'
    }
  },%> */
  {
    path: '/debugger/result',
    name: 'DebuggerResult',
    component: loadResult,
    meta: {
      keepAlive: true,
      title: 'jfldajflkd'
    }
  },
  /* @init<%
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
