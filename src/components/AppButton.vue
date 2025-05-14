<script setup lang="ts">

</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 19px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: #fff;
  background: #9218c0;
  border-radius: 10px;
  border: 1px solid #9218c0;
  stroke: currentColor;

  &--icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &--danger {
    color:  #f60b0f;
  }

  &--outline {
    background: none;
    border-color: currentColor;
  }
}

</style>
