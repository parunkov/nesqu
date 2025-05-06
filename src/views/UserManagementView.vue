<script setup lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue';
import UserTable from '@/components/UserTable.vue';
</script>

<template>
  <main class="user-management">
    <SidebarMenu />
    <UserTable />
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
