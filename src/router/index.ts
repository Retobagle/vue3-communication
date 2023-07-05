import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),   对应hash模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
