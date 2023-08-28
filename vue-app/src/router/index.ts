import { createRouter, createWebHistory } from 'vue-router'
import { getMicroApp } from 'vite-plugin-legacy-qiankun'
import pkg from '../../package.json' // your micro app name (pkg.name)

const microApp = getMicroApp(pkg.name)
// 路由懒加载
const HomeView = () => import('@/views/HomeView.vue')
const About = () => import('@/views/AboutView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(microApp.__POWERED_BY_QIANKUN__ ? '/vue-app' : import.meta.env.BASE_URL),
  routes
})

export default router

