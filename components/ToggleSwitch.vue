<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits(['update:modelValue'])

const toggleSwitch = () => {
  emits("update:modelValue", !props.modelValue);
};
</script>

<template>
  <div class="toggle" :class="{ 'toggle--active': modelValue }" @click="toggleSwitch">
    <div class="toggle__button"></div>
  </div>
</template>
<style scoped lang="scss">
.toggle {
  justify-content: end;
  align-items: center;
  border-radius: vw(12);
  display: flex;
  min-height: vw(20);
  width: vw(36);
  padding: vw(2);
  overflow: hidden;
  background-color: var(--color-gray-600);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle--active {
  background-color: var(--color-primary-600);
  justify-content: flex-end;
}

.toggle__button {
  filter: drop-shadow(0px vw(1) vw(2) rgba(16, 24, 40, 0.06)) drop-shadow(0px vw(1) vw(3) rgba(16, 24, 40, 0.1));
  background-color: var(--color-white);
  border-radius: 50%;
  align-self: stretch;
  display: flex;
  min-height: vw(16);
  margin-top: auto;
  margin-bottom: auto;
  width: vw(16);
  height: vw(16);
  fill: var(--color-white);
  transition: transform 0.3s ease;
}
</style>
