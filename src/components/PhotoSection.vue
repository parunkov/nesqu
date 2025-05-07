<template>
  <section class="photo-section">
    <header class="section-header">
      <h2 class="section-title">Фото</h2>
    </header>

    <div class="section-content">
      <p class="upload-text">Загрузите от 1 до 6 фотографий</p>

      <div class="photos-container">
        <div v-if="photos.length > 0" class="photo-preview">
          <img :src="photos[0]" alt="" class="preview-image" />
          <button class="delete-btn">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/24e0392bbc33a7d9e489af789945c6f801393f99?placeholderIfAbsent=true"
              alt="Delete"
              class="delete-icon"
            />
          </button>
        </div>

        <label class="upload-btn">
          <input
            type="file"
            accept="image/*"
            @change="handlePhotoUpload"
            class="file-input"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/2af0401ca9c4aed8362cf80ec6bc2b6920a279c1?placeholderIfAbsent=true"
            alt=""
            class="upload-icon"
          />
          <span class="upload-text">+ Фото</span>
        </label>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const photos = ref<string[]>([
  "https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/c8608cf0d2eeeaf956c29c6d4f69432f38dbd8e1?placeholderIfAbsent=true",
]);

const handlePhotoUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        photos.value.push(e.target.result as string);
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
};
</script>

<style scoped>
.photo-section {
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

.upload-text {
  color: rgba(68, 65, 69, 1);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
}

.photos-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 5px;
}

.photo-preview {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete-btn {
  position: absolute;
  top: 10px;
  right: 5px;
  background-color: #fff;
  border: 1px solid rgba(237, 234, 238, 1);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.delete-icon {
  width: 20px;
  height: 20px;
}

.upload-btn {
  border-radius: 10px;
  background-color: rgba(249, 246, 250, 1);
  border: 2px dashed rgba(227, 155, 253, 1);
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.file-input {
  display: none;
}

.upload-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
}

.upload-text {
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(68, 65, 69, 1);
  font-weight: 500;
}

@media (max-width: 991px) {
  .photo-section {
    max-width: 100%;
  }
}
</style>
