<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarMenu from '@/components/SidebarMenu.vue'
import { useModeratorStore } from '@/stores/moderator.ts'
useModeratorStore()
</script>


<template>
  <main class="user-management">
    <SidebarMenu />

    <div class="dashboard">
      <div class="content">
        <RouterView ></RouterView>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.dashboard {
  display: flex;
  background-color: var(--color-primary-900);
  flex: 1;
  padding-top: 20px;
  align-self: stretch;
  box-sizing: inherit;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

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
