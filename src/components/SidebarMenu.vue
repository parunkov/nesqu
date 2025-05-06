<script setup lang="ts">
import MenuLink from "./MenuLink.vue";
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <div class="logo-container">
        <img src="/icons/logo.png" class="logo" alt="Logo" />
      </div>
      <nav class="navigation">
        <MenuLink icon="/icons/calendar.png" title="Мероприятия" :isActive="true" />
        <MenuLink icon="/icons/user.png" title="Пользователи" :isActive="false" />
      </nav>
    </div>
    <div class="user-profile">
      <div class="user-profile__content">
        <img src="/icons/log-out.png" class="user-profile__icon" alt="User" />
        <span class="user-profile__name">username@...</span>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  background-color: var(--color-primary-900);
  height: 100vh;
  padding: vw(30);
  width: vw(300);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-top: vw(40);
  width: 100%;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: vw(20);
  color: var(--color-white);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.2px;
  line-height: 1;
}

.user-profile {
  border-radius: vw(10);
  display: flex;
  width: 100%;
  padding: vw(10) vw(8);
  align-items: center;
  gap: vw(12);
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: vw(18);
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
  min-width: vw(240);
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  align-items: center;
  gap: vw(10);
  justify-content: flex-start;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

.user-profile__icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: vw(30);
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
  flex-shrink: 1;
  flex-basis: 0%;
}
</style>
