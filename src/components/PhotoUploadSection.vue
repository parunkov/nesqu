<template>
  <section class="photo-section" aria-labelledby="photo-section-title">
    <header class="section-header">
      <h2 id="photo-section-title" class="section-title">Фото</h2>
    </header>

    <div class="section-content">
      <p class="upload-instruction">Загрузите от 1 до 6 фотографий</p>

      <div class="photo-grid">
        <div class="photo-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/c8608cf0d2eeeaf956c29c6d4f69432f38dbd8e1?placeholderIfAbsent=true"
            alt="Uploaded photo"
            class="photo-preview"
          />
          <button type="button" class="delete-button" aria-label="Delete photo">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/24e0392bbc33a7d9e489af789945c6f801393f99?placeholderIfAbsent=true"
              alt=""
              class="delete-icon"
            />
          </button>
        </div>

        <button type="button" class="upload-button">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/2af0401ca9c4aed8362cf80ec6bc2b6920a279c1?placeholderIfAbsent=true"
            alt=""
            class="upload-icon"
          />
          <span class="upload-text">+ Фото</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "./_colors.scss";

.photo-section {
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

.upload-instruction {
  color: $text-gray;
  font-size: 18px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  line-height: 2;
  margin-bottom: 5px;
}

.photo-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.photo-item {
  position: relative;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.photo-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete-button {
  position: absolute;
  top: 10px;
  right: 5px;
  background-color: $bg-white;
  border: 1px solid $border-gray;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: $bg-light;
  }
}

.delete-icon {
  width: 20px;
  height: 20px;
}

.upload-button {
  border-radius: 10px;
  background-color: $bg-light;
  border: 2px dashed $primary-lighter-purple;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: darken($bg-light, 2%);
  }
}

.upload-icon {
  width: 30px;
  height: 30px;
}

.upload-text {
  color: $text-gray;
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
}
</style>
