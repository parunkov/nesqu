<script setup lang="ts">
import MenuLink from '@/components/MenuLink.vue'
import router from '@/router'

const goTo = (url: string) => router.push(url)
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <div class="logo-container">
        <img src="/icons/logo.png" class="logo" alt="Logo" />
      </div>
      <nav class="navigation">
        <MenuLink icon="/icons/calendar.svg" title="Мероприятия"  @click="goTo('/events')"  :isActive="router.currentRoute.value.name == `events`"/>
        <MenuLink icon="/icons/calendar.svg" title="Мероприятия стат."  @click="goTo('/events-statistics')"  :isActive="router.currentRoute.value.name == `events-statistics`"/>
        <MenuLink icon="/icons/user.svg" title="Пользователи" @click="goTo('/users')" :isActive="router.currentRoute.value.name == `users`"/>
      </nav>
    </div>
    <div class="user-profile">
      <MenuLink icon="/icons/exit.svg" title="veryVeryLongEmail2025@mail.ru" />
    </div>
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
  border-radius: 10px;
  display: flex;
  width: 100%;
  padding: 10px 8px;
  align-items: center;
  gap: 12px;

  font-size: 18px;
  color: var(--color-white);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.18px;
  line-height: 1;
  justify-content: flex-start;
}

</style>
