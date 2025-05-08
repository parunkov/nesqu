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
              alt="Delete" class="delete-icon" />
          </button>
        </div>

        <label class="upload-btn">
          <input type="file" accept="image/*" @change="handlePhotoUpload" class="file-input" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/2af0401ca9c4aed8362cf80ec6bc2b6920a279c1?placeholderIfAbsent=true"
            alt="" class="upload-icon" />
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
<style scoped lang="scss">
.photo-section {
  border-radius: vw(20);
  box-shadow: 0 vw(5) vw(15) 0 rgba(39, 18, 47, 0.1);
  width: 100%;
  overflow: hidden;
  background-color: var(--color-white);
  margin-top: vw(20);
}

.section-header {
  background-color: var(--color-gray-300);
  padding: vw(10) vw(20);
}

.section-title {

  font-size: vw(18);
  color: var(--color-gray-1000);
  font-weight: 600;
}

.section-content {
  padding: vw(20);
}

.upload-text {
  color: var(--color-gray-900);
  font-size: vw(18);
  font-weight: 500;
  margin-bottom: vw(5);
}

.photos-container {
  display: flex;
  gap: vw(20);
  flex-wrap: wrap;
  margin-top: vw(5);
}

.photo-preview {
  position: relative;
  width: vw(200);
  height: vw(200);
  border-radius: vw(10);
  overflow: hidden;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete-btn {
  position: absolute;
  top: vw(10);
  right: vw(5);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: vw(10);
  width: vw(40);
  height: vw(40);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.delete-icon {
  width: vw(20);
  height: vw(20);
}

.upload-btn {
  border-radius: vw(10);
  background-color: var(--color-gray-100);
  border: vw(2) dashed var(--color-primary-300);
  width: vw(200);
  height: vw(200);
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
  width: vw(30);
  height: vw(30);
  margin-bottom: vw(10);
}

.upload-text {

  font-size: vw(14);
  color: var(--color-gray-900);
  font-weight: 500;
}

@media (max-width: 991px) {
  .photo-section {
    max-width: 100%;
  }
}
</style>
