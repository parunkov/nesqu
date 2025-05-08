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
  padding-top: vw(20);
  align-self: stretch;
  box-sizing: inherit;
}

.sidebar {
  min-width: vw(240);
  width: vw(330);
  padding: vw(30);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  width: vw(220);
  aspect-ratio: 5.49;
  object-fit: contain;
}

.nav-links {
  margin-top: vw(40);

  font-size: vw(20);
  color: var(--color-white);
  font-weight: 500;
  letter-spacing: vw(0.2);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: vw(10);
  padding: vw(15) vw(10);
  border-radius: vw(10);
  text-decoration: none;
  color: inherit;
  margin-bottom: vw(10);
}

.nav-link-active {
  background-color: var(--color-primary-800);
}

.nav-icon {
  width: vw(30);
  height: vw(30);
  object-fit: contain;
}

.user-info {
  display: flex;
  align-items: center;
  gap: vw(10);
  padding: vw(10);
  border-radius: vw(10);
  color: var(--color-white);

  font-size: vw(18);
  font-weight: 500;
  letter-spacing: vw(0.18);
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>