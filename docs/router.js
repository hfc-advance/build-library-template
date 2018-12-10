import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let loadTest = () => import(/* webpackChunkName: "md.test" */'./md/test.md')
let loadResult = () => import(/* webpackChunkName: "md.result" */'./md/result.md')
/* @init<%
let load${TplBridgeNameUpper} = () => import(${TplAnnotationStart} webpackChunkName: "md.${bridgeName}" ${TplAnnotationEnd}'./md/${bridgeName}.md')%> */

/* eslint-disable */
let routes = [
  {
    path: '/doc/test',
    name: 'Test',
    component: loadTest,
    meta: {
      keepAlive: true,
      title: '测试用例'
    }
  },
  {
    path: '/doc/result',
    name: 'Result',
    component: loadResult,
    meta: {
      keepAlive: true,
      title: '设置原生title'
    }
  },
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
/* eslint-enable */

export let router = new VueRouter({
  routes
})

export default router
