<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
  icon: {
    type: String,
    required: true,
  },
})
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
  border-radius: 10px;
  display: flex;
  min-height: 60px;
  width: 100%;
  padding: 15px 8px 15px 10px;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  cursor: pointer;
  transition: background-color 0.3s ease;

  font-size: 20px;
  color: var(--color-white);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.2px;
  line-height: 1;
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
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  flex: 1;
  flex-basis: 0;
}

.menu-link__icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
}

.menu-link__title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex: 1;
  flex-basis: 0;
  line-height: 1.2;
}
</style>
