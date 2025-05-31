<script setup lang="ts">
import MenuLink from '@/components/MenuLink.vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth.ts'

const authStore = useAuthStore()

const showTab = (pageName: string) => {
  const route = router.getRoutes().find((r) => r.name === pageName)

  if (!route) {
    console.warn(`Маршрут с именем "${pageName}" не найден`)
    return false
  }

  const requiredRoles = route.meta?.requiredRoles
  const userRole = authStore.currentUser?.role

  if (!requiredRoles || requiredRoles.length === 0) {
    return true
  }

  return userRole && requiredRoles.includes(userRole)
}

const goTo = (name: string) => router.push({ name: name })

const logout = () => {
  useAuthStore().logout()
  goTo('login')
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <div class="logo-container">
        <img src="/icons/logo.png" class="logo" alt="Logo" />
      </div>
      <nav class="navigation">
        <MenuLink
          v-if="showTab(`events`)"
          icon="/icons/calendar.svg"
          title="Мероприятия"
          @click="goTo('events')"
          :isActive="router.currentRoute.value.name == `events`"
        />
        <MenuLink
          v-if="showTab(`events-statistics`)"
          icon="/icons/stat.svg"
          title="Мероприятия стат."
          @click="goTo('events-statistics')"
          :isActive="router.currentRoute.value.name == `events-statistics`"
        />
        <MenuLink
          v-if="showTab(`users`)"
          icon="/icons/user.svg"
          title="Пользователи"
          @click="goTo('users')"
          :isActive="router.currentRoute.value.name == `users`"
        />
        <MenuLink
          v-if="showTab(`cities-statistics`)"
          icon="/icons/stat.svg"
          title="Города стат."
          @click="goTo('cities-statistics')"
          :isActive="router.currentRoute.value.name == `cities-statistics`"
        />
      </nav>
    </div>
    <MenuLink
      icon="/icons/exit.svg"
      :title="authStore.currentUser?.email || `Выйти`"
      @click="logout"
    />
  </aside>
</template>
<style scoped lang="scss">
.sidebar {
  background-color: var(--color-primary-900);
  height: 100vh;
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
}

.sidebar__top {
  width: 100%;
}

.logo-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
}

.logo {
  aspect-ratio: 5.49;
  object-fit: contain;
  object-position: center;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
}

.navigation {
  margin-top: 40px;
  width: 100%;

  font-size: 20px;
  color: var(--color-white);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.2px;
  line-height: 1;
}

.user-profile {
  font-size: 18px;
  color: var(--color-white);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.18px;
  line-height: 1;
  justify-content: flex-start;
}
</style>
