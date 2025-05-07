<template>
  <footer class="form-actions">
    <button type="button" class="delete-btn" @click="handleDelete">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/24e0392bbc33a7d9e489af789945c6f801393f99?placeholderIfAbsent=true"
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