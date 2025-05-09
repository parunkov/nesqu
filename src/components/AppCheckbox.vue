<script setup lang="ts">

const model = defineModel({
  type: Boolean,
})

</script>

<template>
  <div class="AppCheckbox" :class="{ 'AppCheckbox--checked': model }" @click="model = !model"></div>
</template>

<style scoped lang="scss">
.AppCheckbox {
  border-radius: 4px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-400);
  min-height: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.AppCheckbox--checked {
  background-color: var(--color-primary-600);
  border-color: var(--color-primary-600);
  position: relative;
}

.AppCheckbox--checked::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 7px;
  width: 4px;
  height: 8px;
  border: solid var(--color-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>

