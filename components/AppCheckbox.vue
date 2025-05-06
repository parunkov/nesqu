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
  border-radius: vw(4);
  background-color: var(--color-gray-100);
  border: vw(1) solid var(--color-gray-400);
  min-height: vw(20);
  width: vw(20);
  height: vw(20);
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
  top: vw(3);
  left: vw(7);
  width: vw(4);
  height: vw(8);
  border: solid var(--color-white);
  border-width: 0 vw(2) vw(2) 0;
  transform: rotate(45deg);
}
</style>
