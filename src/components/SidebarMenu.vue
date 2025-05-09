<script setup lang="ts">
import { ref, type Component } from "vue";
import MenuLink from "./MenuLink.vue";
import UserTable from "./UserTable.vue";
import EventsDashboard from "./EventsDashboard.vue";
interface View {
  id: number,
  component: Component
}

const emit = defineEmits(['updateView'])

const views: Record<string, View> = {
  'usersTable': {
    id: 0,
    component: UserTable
  },
  'eventsTable': {
    id: 1,
    component: EventsDashboard
  }
}


const currentView = ref<View>(views['eventsTable'])

const changeMode = (newView: View) => {
  emit('updateView', newView.component)
  currentView.value = newView
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <div class="logo-container">
        <img src="/icons/logo.png" class="logo" alt="Logo" />
      </div>
      <nav class="navigation">
        <MenuLink icon="/icons/calendar.png" title="Мероприятия" :isActive="currentView.id == 1"
          @click="changeMode(views['eventsTable'])" />
        <MenuLink icon="/icons/user.png" title="Пользователи" :isActive="currentView.id == 0"
          @click="changeMode(views['usersTable'])" />
      </nav>
    </div>
    <div class="user-profile">
      <MenuLink icon="/icons/log-out.png" title="veryVeryLongEmail2025@mail.ru" />
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

.user-profile__content {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  flex: 1;
  flex-basis: 0;
}

.user-profile__icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
}

.user-profile__name {
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex: 1;
  flex-basis: 0;
}
</style>
