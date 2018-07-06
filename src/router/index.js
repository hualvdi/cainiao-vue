import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * Asynchronously load view
 * @subdir {string} 二级目录
 * @name  {string} vue文件名
 */
function load(subdir, name) {
  const view = name || subdir
  return () => import(`@/views/${subdir}/${view}.vue`) // eslint-disable-line
}

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }
  return { x: 0, y: 0 }
}

const routes = [
  {
    path: '/',
    name: '/',
    component: load('home'),
  },
  {
    path: '/home',
    name: 'home',
    component: load('home'),
  },
]

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes,
})
