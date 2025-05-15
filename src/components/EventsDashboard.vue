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

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
