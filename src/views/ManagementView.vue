<script setup lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue';
import UserTable from '@/components/UserTable.vue';
import { shallowRef, type Component } from 'vue';

const currentMode = shallowRef<Component>(UserTable)

const updateView = (newView: Component) => currentMode.value = newView
</script>

<template>
  <main class="user-management">
    <SidebarMenu @update-view="(newView: Component) => updateView(newView)" />
    <component :is="currentMode" />
  </main>
</template>

<style scoped lang="scss">
.user-management {
  background-color: var(--color-primary-900);
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 100vh;
}
</style>
