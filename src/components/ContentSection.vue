<template>
  <section class="content-section">
    <header class="section-header">
      <h2 class="section-title">Контент</h2>
    </header>

    <div class="section-content">
      <div class="form-group">
        <label class="form-label">Название*</label>
        <input v-model="title" type="text" class="form-input" />
      </div>

      <div class="form-group">
        <label class="form-label">Описание</label>
        <textarea v-model="description" class="form-textarea"></textarea>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref("");
const description = ref("");
</script>

<style scoped lang="scss">
.content-section {
  border-radius: 20px;
  box-shadow: 0 5px 15px 0 rgba(39, 18, 47, 0.1);
  width: 100%;
  overflow: hidden;
  background-color: var(--color-white);
  margin-top: 20px;
}

.section-header {
  background-color: var(--color-gray-100);
  padding: 10px 20px;
}

.section-title {
  font-size: 18px;
  color: var(--color-gray-1000);
  font-weight: 600;
}

.section-content {
  padding: 20px;
}

.form-group {
  margin-bottom: 10px;
}

.form-label {
  color: var(--color-gray-900);
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  border-radius: 10px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-200);
  padding: 10px;
  width: 100%;
  font-size: 18px;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

@media (max-width: 991px) {
  .content-section {
    max-width: 100%;
  }
}
</style>

