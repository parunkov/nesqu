<template>
  <section class="content-section" aria-labelledby="content-section-title">
    <header class="section-header">
      <h2 id="content-section-title" class="section-title">Контент</h2>
    </header>

    <div class="section-content">
      <div class="field-group">
        <label class="field-label" for="event-name">Название*</label>
        <input type="text" id="event-name" class="text-input" required />
      </div>

      <div class="field-group">
        <label class="field-label" for="event-description">Описание</label>
        <textarea id="event-description" class="text-area" rows="4"></textarea>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "./_colors.scss";

.content-section {
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px $shadow-color;
  width: 100%;
  overflow: hidden;
  background-color: $bg-white;
}

.section-header {
  background-color: $bg-gray;
  border-bottom: 1px solid $border-gray;
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
  color: $text-dark;
  font-weight: 600;
  line-height: 2;
}

.section-content {
  padding: 20px;
}

.field-group {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.field-label {
  color: $text-gray;
  font-size: 16px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  line-height: 2;
  display: block;
  margin-bottom: 5px;
}

.text-input,
.text-area {
  border-radius: 10px;
  background-color: $bg-light;
  border: 1px solid $border-gray;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: $text-black;

  &:focus {
    outline: none;
    border-color: $primary-light-purple;
  }
}

.text-area {
  resize: vertical;
  min-height: 120px;
}
</style>
