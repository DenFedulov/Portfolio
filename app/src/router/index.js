import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/projects',
      component: () => import('@/views/Projects.vue')
    },
  ],
})

export default router
