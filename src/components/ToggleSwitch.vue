<script setup lang="ts">
const modelValue = defineModel<boolean>()
</script>

<template>
  <div class="toggle" :class="{ 'toggle--active': modelValue }" @click="modelValue = !modelValue">
    <div class="toggle__button"></div>
  </div>
</template>

<style scoped lang="scss">
.toggle {
  position: relative;
  width: 36px;
  height: 20px;
  border-radius: 12px;
  padding: 2px;
  background-color: var(--color-gray-600);
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.toggle--active {
  background-color: var(--color-primary-600);
}

.toggle__button {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-white);
  transition: transform 0.3s ease;
  transform: translateX(0);
}

.toggle--active .toggle__button {
  transform: translateX(16px); // плавно едет вправо
}
</style>
