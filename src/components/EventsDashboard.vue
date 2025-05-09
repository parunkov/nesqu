<template>
  <main class="dashboard">
    <section class="content">
      <EventsTable v-if="currentMode" @changeMode="changeMode(false)" />
      <EventCreationPage v-else @changeMode="changeMode(true)" />
    </section>
  </main>
</template>

<script setup lang="ts">
import EventsTable from "./EventsTable.vue";
import EventCreationPage from "./EventCreationPage.vue";
import { ref } from "vue";
const currentMode = ref<Boolean>(true)

const changeMode = (mode: boolean) => {
  currentMode.value = mode
  console.log(currentMode.value)
}
</script>
<style scoped lang="scss">
.dashboard {
  display: flex;
  background-color: var(--color-primary-900);
  flex: 1;
  padding-top: 20px;
  align-self: stretch;
  box-sizing: inherit;
}

.sidebar {
  min-width: 240px;
  width: 330px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  width: 220px;
  aspect-ratio: 5.49;
  object-fit: contain;
}

.nav-links {
  margin-top: 40px;
  font-size: 20px;
  color: var(--color-white);
  font-weight: 500;
  letter-spacing: 0.2px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  margin-bottom: 10px;
}

.nav-link-active {
  background-color: var(--color-primary-800);
}

.nav-icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  color: var(--color-white);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.18px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
