<script setup lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue';
import EventsDashboard from '@/components/EventsDashboard.vue';
import { shallowRef, type Component, ref } from 'vue'

const currentMode = shallowRef<Component>(EventsDashboard)

const updateView = (newView: Component) => currentMode.value = newView

const showMobile = ref(false)
</script>

<template>
  <main class="user-management">
    <SidebarMenu :class="{'showMobile': showMobile}"  @update-view="(newView: Component) => updateView(newView)" />
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

@media (max-width: 991px) {
  .user-management {
    flex-direction: column;
    align-items: stretch;
  }

  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    justify-content: space-between;
  }

}
</style>
