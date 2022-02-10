import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _749cc495 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _770861ac = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _014b06f3 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _3798ac22 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _189435ea = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _749cc495,
    name: "404"
  }, {
    path: "/about",
    component: _770861ac,
    name: "about"
  }, {
    path: "/posts",
    component: _014b06f3,
    name: "posts"
  }, {
    path: "/",
    component: _3798ac22,
    name: "index"
  }, {
    path: "/:slug",
    component: _189435ea,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
