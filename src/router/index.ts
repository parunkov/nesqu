import { createRouter, createWebHistory } from 'vue-router'
import UserManagementView from '@/views/UserManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserManagementView,
    },
  ],
})

export default router
