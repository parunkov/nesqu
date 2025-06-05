<script setup lang="ts">
import { defineModel, defineProps } from 'vue'

const model = defineModel<number | string>()

const props = defineProps<{
  placeholder?: string
  disabled?: boolean
  type?: string
  name?: string
  autocomplete?: string
  required?: boolean
}>()

const emits = defineEmits(['input'])
</script>

<template>
  <div class="field">
    <slot name="left-slot"></slot>
    <input
      v-model="model"
      required
      :name="props.name"
      :autocomplete="props.autocomplete"
      :placeholder="props.placeholder || ' '"
      :disabled="props.disabled"
      :type="props.type || 'text'"
      @input="emits('input')"
    />
    <slot name="right-slot"></slot>
  </div>
</template>

<style lang="scss" scoped>
.field {
  display: inline-flex;
  gap: 20px;
  width: 100%;
  padding: 10px 10px 10px 10px;
  border: 1px solid var(--color-gray-300);
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.11;
  color: #000;
  background: var(--color-gray-100);

  transition:
    border-color 0.33s ease,
    background 0.33s ease;

  &::placeholder {
    color: #767377;
    font-size: inherit;
  }

  &:focus,
  &:has(input:focus) {
    border-color: #9218c0;
  }

  &--textarea {
    min-height: vw(120);
  }
}

:is(input, textarea).field:not(:placeholder-shown),
.field:has(input:not(:placeholder-shown)) {
  background: #fff;
}

input {
  width: inherit;
}
</style>
