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
  {
    path: '/homeBase',
    name: 'homeBase',
    component: load('home', 'base'),
    children: [],
  },
  {
    path: '/account',
    name: 'account',
    component: load('account', 'base'),
    children: [
      {
        path: '/resetPassword',
        name: 'resetPassword',
        component: load('account', 'resetPassword'),
      },
    ],
  },
  {
    path: '/noteBase',
    name: 'noteBase',
    component: load('note', 'base'),
    children: [
      {
        path: '/note',
        name: 'note',
        component: load('note', 'index'),
      },
    ],
  },
  {
    path: '/noteDetail',
    name: 'noteDetail',
    component: load('note', 'detail'),
  },
  {
    path: '/toolIndex',
    name: 'toolIndex',
    component: load('tool', 'base'),
    children: [
      {
        path: '/tool',
        name: 'tool',
        component: load('tool', 'index'),
      },
      {
        path: '/examples',
        name: 'examples',
        component: load('tool', 'examples'),
      },
    ],
  },
]

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes,
})
