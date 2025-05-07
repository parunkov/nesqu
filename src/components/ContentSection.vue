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

<style scoped>
.content-section {
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px rgba(39, 18, 47, 0.1);
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  margin-top: 20px;
}

.section-header {
  background-color: rgba(237, 234, 238, 1);
  padding: 10px 20px;
}

.section-title {
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  color: #242125;
  font-weight: 600;
}

.section-content {
  padding: 20px;
}

.form-group {
  margin-bottom: 10px;
}

.form-label {
  color: rgba(68, 65, 69, 1);
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  border-radius: 10px;
  background-color: rgba(249, 246, 250, 1);
  border: 1px solid rgba(237, 234, 238, 1);
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
