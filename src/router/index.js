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
    meta: {
      title: '菜鸟教程 - 学的不仅是技术，更是梦想',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: load('home'),
    meta: {
      title: '菜鸟教程 - 学的不仅是技术，更是梦想',
    },
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
        meta: {
          title: '重置密码|菜鸟教程',
        },
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
        meta: {
          title: '菜鸟笔记|菜鸟教程',
        },
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
        meta: {
          title: '菜鸟工具 - 不止于工具',
        },
      },
      {
        path: '/examples',
        name: 'examples',
        component: load('tool', 'examples'),
        meta: {
          title: '实例归档|菜鸟工具',
        },
      },
    ],
  },
  {
    path: '/userNoteBase',
    name: 'userNoteBase',
    component: load('userNote', 'base'),
    children: [
      {
        path: '/userNote',
        name: 'userNote',
        component: load('userNote', 'index'),
        meta: {
          title: '笔记列表|菜鸟教程',
        },
      },
    ],
  },
]

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes,
})
