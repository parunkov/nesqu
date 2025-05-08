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
  border-radius: vw(20);
  /* заменено на vw */
  box-shadow: 0 vw(5) vw(15) 0 rgba(39, 18, 47, 0.1);
  /* заменено на vw */
  width: 100%;
  overflow: hidden;
  background-color: var(--color-white);
  /* заменено на var(--color-white) */
  margin-top: vw(20);
  /* заменено на vw */
}

.section-header {
  background-color: var(--color-gray-100);
  /* заменено на var(--color-gray-100) */
  padding: vw(10) vw(20);
  /* заменено на vw */
}

.section-title {
  font-size: vw(18);
  /* заменено на vw */
  color: var(--color-gray-1000);
  /* заменено на var(--color-gray-1000) */
  font-weight: 600;
}

.section-content {
  padding: vw(20);
  /* заменено на vw */
}

.form-group {
  margin-bottom: vw(10);
  /* заменено на vw */
}

.form-label {
  color: var(--color-gray-900);
  /* заменено на var(--color-gray-900) */
  font-size: vw(16);
  /* заменено на vw */
  font-weight: 500;
  display: block;
  margin-bottom: vw(5);
  /* заменено на vw */
}

.form-input,
.form-textarea {
  border-radius: vw(10);
  /* заменено на vw */
  background-color: var(--color-gray-100);
  /* заменено на var(--color-gray-100) */
  border: 1px solid var(--color-gray-200);
  /* заменено на var(--color-gray-200) */
  padding: vw(10);
  /* заменено на vw */
  width: 100%;
  font-size: vw(18);
  /* заменено на vw */
}

.form-textarea {
  min-height: vw(120);
  /* заменено на vw */
  resize: vertical;
}

@media (max-width: 991px) {
  .content-section {
    max-width: 100%;
  }
}
</style>
