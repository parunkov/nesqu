<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  outline?: boolean
  danger?: boolean
  icon?: boolean
  mini?: boolean
}>()

const classes = computed(() => ({
  btn: true,
  'btn--outline': props.outline,
  'btn--danger': props.danger,
  'btn--icon': props.icon,
  'btn--mini': props.mini,
}))
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 19px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: #fff;
  background: #9218c0;
  border-radius: 10px;
  border: 1px solid #9218c0;
  stroke: currentColor;
  transition: 0.2s ease;

  &--icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &--danger {
    color: var(--color-danger);
    border-color: var(--color-danger);
    background: var(--color-white);
  }

  &--outline {
    background: none;
    border-color: currentColor;
  }

  &--mini {
    padding: vw(10);
    height: min-content;
    width: min-content;
  }
}
</style>
