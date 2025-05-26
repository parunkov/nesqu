import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import EventsView from '@/views/EventsView.vue'
import EventCreationView from '@/views/EventCreationView.vue'
import LoginView from '@/views/LoginView.vue'
import EventsStatisticsView from '@/views/EventsStatisticsView.vue'
import EventEditView from '@/views/EventEditView.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CitiesStatisticsView from '@/views/CitiesStatisticsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: 'events',
          name: 'events',
          component: EventsView,
        },
        {
          path: 'users',
          name: 'users',
          component: UsersView,
        },
        {
          path: 'event-create',
          name: 'event-create',
          component: EventCreationView,
        },
        {
          path: 'events-statistics',
          name: 'events-statistics',
          component: EventsStatisticsView,
        },
        {
          path: 'event/:id',
          name: 'event-edit',
          component: EventEditView,
        },
        {
          path: 'cities-statistics',
          name: 'cities-statistics',
          component: CitiesStatisticsView,
        },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [{ path: 'login', name: 'login', component: LoginView }],
    },
  ],
})

export default router
