<template>
  <footer class="form-actions">
    <button type="button" class="delete-btn" @click="handleDelete">
      <img
        src="/icons/delete.svg"
        alt="" class="btn-icon" />
      <span class="btn-text">Удалить</span>
    </button>

    <button type="submit" class="save-btn" @click="handleSave">
      <span class="btn-text">Сохранить</span>
    </button>
  </footer>
</template>

<script setup lang="ts">
const handleDelete = () => {
  // Handle delete action
  console.log('Delete clicked');
};

const handleSave = () => {
  // Handle save action
  console.log('Save clicked');
};
</script>

<style scoped lang="scss">
.form-actions {
  background-color: var(--color-white);
}
</style>
