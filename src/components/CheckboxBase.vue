<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(["update:modelValue"])
const toggleCheckbox = () => {
  emits("update:modelValue", !props.modelValue);
};

</script>

<template>
  <div class="checkbox" :class="{ 'checkbox--checked': modelValue }" @click="toggleCheckbox"></div>
</template>
<style scoped lang="scss">
.checkbox {
  border-radius: vw(4);
  background-color: var(--color-gray-300);
  border: vw(1) solid var(--color-gray-400);
  min-height: vw(20);
  width: vw(20);
  height: vw(20);
  cursor: pointer;
}

.checkbox--checked {
  background-color: var(--color-primary-600);
  border-color: var(--color-primary-600);
  position: relative;
}

.checkbox--checked::after {
  content: "";
  position: absolute;
  top: vw(3);
  left: vw(7);
  width: vw(4);
  height: vw(8);
  border: solid var(--color-white);
  border-width: 0 vw(2) vw(2) 0;
  transform: rotate(45deg);
}
</style>
