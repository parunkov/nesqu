import { createRouter, createWebHistory } from 'vue-router'
import ManagementView from '@/views/ManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ManagementView,
    },
  ],
})

export default router
