import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f991998 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _b5bd5bee = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _10d4a692 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _764da664 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _281dd589 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

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
    component: _3f991998,
    name: "404"
  }, {
    path: "/about",
    component: _b5bd5bee,
    name: "about"
  }, {
    path: "/posts",
    component: _10d4a692,
    name: "posts"
  }, {
    path: "/",
    component: _764da664,
    name: "index"
  }, {
    path: "/:slug",
    component: _281dd589,
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
