<script setup lang="ts">
import MenuLink from '@/components/MenuLink.vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth.ts'
import { ref } from 'vue'

const authStore = useAuthStore()
const isMenuOpen = ref(false)

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
  <aside class="sidebar" :class="{ 'sidebar--active': isMenuOpen }">
    <div class="sidebar__top">
      <div class="logo-container">
        <img src="/icons/logo.png" class="logo" alt="Logo" />
        <div class="burger" @click="isMenuOpen = !isMenuOpen" :class="{ 'burger--active': isMenuOpen }">
          <img v-if="isMenuOpen" src="/icons/burger-cross.svg" alt="Меню" />
          <img v-else src="/icons/menu.svg" alt="Меню" />
        </div>
      </div>
      <nav class="navigation">
        <MenuLink v-if="showTab(`events`)" icon="/icons/calendar.svg" title="Мероприятия" @click="goTo('events')"
          :isActive="router.currentRoute.value.name == `events`" />
        <MenuLink v-if="showTab(`users`)" icon="/icons/user.svg" title="Пользователи" @click="goTo('users')"
          :isActive="router.currentRoute.value.name == `users`" />
        <MenuLink v-if="showTab(`events-statistics`)" icon="/icons/stat.svg" title="Стат / Мероприятия"
          @click="goTo('events-statistics')" :isActive="router.currentRoute.value.name == `events-statistics`" />
        <MenuLink v-if="showTab(`cities-statistics`)" icon="/icons/stat.svg" title="Стат / Города"
          @click="goTo('cities-statistics')" :isActive="router.currentRoute.value.name == `cities-statistics`" />
        <MenuLink v-if="showTab(`days-statistics`)" icon="/icons/stat.svg" title="Стат / По дням"
          @click="goTo('days-statistics')" :isActive="router.currentRoute.value.name == `days-statistics`" />
        <MenuLink v-if="showTab(`organizer-events`)" icon="/icons/calendar.svg" title="Мероприятия О"
          @click="goTo('organizer-events')" :isActive="router.currentRoute.value.name == `organizer-events`" />
      </nav>
    </div>
    <MenuLink icon="/icons/exit.svg" :title="authStore.currentUser?.email || `Выйти`" @click="logout" />
  </aside>
</template>
<style scoped lang="scss">
.sidebar {
  background-color: var(--color-primary-900);
  height: 100vh;
  padding: vw(30);
  width: vw(330);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;

  @media (max-width: 991px) {
    background-color: var(--color-gray-100);
  }

  &--active {
    @media (max-width: 991px) {
      background-color: var(--color-primary-900);
    }
  }
}

.sidebar__top {
  width: 100%;
}

.logo-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 991px) {
    justify-content: space-between;
  }
}

.logo {
  aspect-ratio: 5.49;
  object-fit: contain;
  object-position: center;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
}

.burger {
  display: none;

  @media (max-width: 991px) {
    display: block;
    width: 60px;
    height: 60px;
    background-color: var(--color-primary-100);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &--active {
      background-color: var(--color-primary-600);
    }
  }
}

.navigation {
  margin-top: vw(40);
  width: 100%;

  font-size: vw(20);
  color: var(--color-white);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: vw(0.2);
  line-height: 1;
}

.user-profile {
  font-size: vw(18);
  color: var(--color-white);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: vw(0.18);
  line-height: 1;
  justify-content: flex-start;
}
</style>
