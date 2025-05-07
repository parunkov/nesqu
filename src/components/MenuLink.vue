<script setup lang="ts">
import type { MenuItemProps } from "./types";

defineProps<MenuItemProps>()
</script>

<template>
  <div class="menu-link" :class="{ 'menu-link--active': isActive }">
    <div class="menu-link__content">
      <img :src="icon" class="menu-link__icon" alt="" />
      <span class="menu-link__title">{{ title }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-link {
  border-radius: vw(10);
  display: flex;
  min-height: vw(60);
  width: 100%;
  padding: vw(15) vw(8) vw(15) vw(10);
  align-items: center;
  gap: vw(12);
  justify-content: flex-start;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-link--active {
  background-color: var(--color-primary-800);
}

.menu-link:hover:not(.menu-link--active) {
  background-color: var(--color-primary-800);
}

.menu-link__content {
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

.menu-link__icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: vw(30);
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
}

.menu-link__title {
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}
</style>
