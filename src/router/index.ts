import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import EventsView from '@/views/EventsView.vue'
import EventCreationView from '@/views/EventCreationView.vue'
import LoginView from '@/views/LoginView.vue'
import EventsStatisticsView from '@/views/EventsStatisticsView.vue'
import EventEditView from '@/views/EventEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
    },
    {
      path: '/event-create',
      name: 'event-create',
      component: EventCreationView,
    },
    {
      path: '/events-statistics',
      name: 'events-statistics',
      component: EventsStatisticsView,
    },
    {
      path: '/event/:id',
      name: 'event-edit',
      component: EventEditView,
    },
  ],
})

export default router
