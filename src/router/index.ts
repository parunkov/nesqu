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
import DaysStatistics from '@/views/DaysStatistics.vue'
import EventsOrganizerView from '@/views/EventsOrganizerView.vue'
import { useAuthStore } from '@/stores/auth.ts'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      meta: {
        authRequired: true,
        onlyForQuests: false,
        meta: {
          requiredRoles: ['organizer', 'moderator', 'owner'],
        },
      },
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
          meta: {
            requiredRoles: ['moderator', 'owner'],
          },
        },
        {
          path: 'event-create',
          name: 'event-create',
          component: EventCreationView,
          meta: {
            requiredRoles: ['organizer', 'moderator', 'owner'],
          },
        },
        {
          path: 'events-statistics',
          name: 'events-statistics',
          component: EventsStatisticsView,
          meta: {
            requiredRoles: ['moderator', 'owner'],
          },
        },
        {
          path: 'event/:id',
          name: 'event-edit',
          component: EventEditView,
          meta: {
            requiredRoles: ['organizer', 'moderator', 'owner'],
          },
        },
        {
          path: 'cities-statistics',
          name: 'cities-statistics',
          component: CitiesStatisticsView,
          meta: {
            requiredRoles: ['moderator', 'owner'],
          },
        },
        {
          path: 'days-statistics',
          name: 'days-statistics',
          component: DaysStatistics,
          meta: {
            requiredRoles: ['moderator', 'owner'],
          },
        },
        {
          path: 'organizer-events',
          name: 'organizer-events',
          component: EventsOrganizerView,
          meta: {
            requiredRoles: ['organizer', 'moderator', 'owner'],
          },
        },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      meta: {
        authRequired: false,
        onlyForGuests: true,
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView,
          meta: {
            authRequired: false,
            onlyForGuests: true,
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta?.title) {
    document.title = to.meta.title
  }

  const layoutRequiresAuth = to.matched.some((record) => record.meta.authRequired)
  const layoutOnlyForGuests = to.matched.some((record) => record.meta.onlyForGuests)

  if (layoutRequiresAuth && !authStore.currentUser) {
    return next({ name: 'login' })
  }

  if (layoutOnlyForGuests && authStore.currentUser) {
    return next({ name: 'events' })
  }

  const requiredRoles = to.meta.requiredRoles
  if (
    requiredRoles &&
    authStore.currentUser &&
    !requiredRoles.includes(authStore.currentUser.role)
  ) {
    return next({ name: 'events' })
  }

  next()
})

export default router
