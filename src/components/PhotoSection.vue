<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Event as EventType } from '@/types/events.ts'
// Максимальное количество изображений
const MAX_IMAGES = 6

const eventImages = defineModel<EventType['images']>()

const images = ref<
  {
    src: string
    file: File | null
  }[]
>(
  eventImages.value
    ? eventImages.value.map((el) => {
        return { src: 'http://' + el, file: null }
      })
    : [],
)

watch(
  () => eventImages.value,
  () => {
    images.value = eventImages.value
      ? eventImages.value.map((el) => {
          return { src: 'http://' + el, file: null }
        })
      : []
  },
  { deep: true, once: true, immediate: false },
)

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files) return

  const files = Array.from(input.files).slice(0, MAX_IMAGES - images.value.length)

  files.forEach((file) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = () => {
        images.value.push({
          src: reader.result as string,
          file,
        })
        updateUploadState()
      }
      reader.readAsDataURL(file)
    }
  })
}

// Функция для удаления изображения
const removeImage = (index: number) => {
  images.value.splice(index, 1)
  updateUploadState()
}

// Функция для обновления состояния кнопки загрузки
const updateUploadState = () => {
  const uploadButton = document.querySelector('.form-file__upload-button') as HTMLElement
  if (images.value.length >= MAX_IMAGES) {
    uploadButton.style.opacity = '0'
    uploadButton.style.transform = 'translateY(10px)'
  } else {
    uploadButton.style.opacity = '1'
    uploadButton.style.transform = 'translateY(0)'
  }
}

watch(
  images,
  () => {
    updateUploadState()
    // Только пути (src) сохраняем в модель
    eventImages.value = images.value.map((img) => img.src)
  },
  { deep: true },
)
</script>

<template>
  <div class="content-card">
    <div class="content-card__inner">
      <div class="content-card__head">
        <h3 class="content-card__title">Фото</h3>
      </div>

      <div class="content-card__body">
        <div class="form-group">
          <div class="form-item">
            <label for="imageUpload" class="form-item__label"
              >Загрузите от 1 до 6 фотографий*</label
            >

            <!-- Превью изображений -->
            <div class="form-file__inner">
              <div
                v-for="(image, index) in images"
                :key="index"
                class="form-file__card form-file__preview"
              >
                <img :src="image.src" alt="Preview" class="form-file__preview-img" />
                <button class="form-file__delete-button" @click="removeImage(index)">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996"
                      stroke="#F60B0F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div v-if="images.length < 6" class="form-file">
                <div class="form-file__inner">
                  <label class="form-file__card form-file__upload-button" for="imageUpload">
                    <input
                      class="form-file__upload-input"
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      multiple
                      @change="handleImageUpload"
                    />
                    <div class="form-file__icon">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.34012 25.9099L13.5858 17.6642C14.0808 17.1692 14.3283 16.9217 14.6137 16.8289C14.8648 16.7474 15.1352 16.7474 15.3863 16.8289C15.6717 16.9217 15.9192 17.1692 16.4142 17.6642L24.6049 25.8549M17.5 18.75L21.0858 15.1642C21.5808 14.6692 21.8283 14.4217 22.1137 14.3289C22.3648 14.2474 22.6352 14.2474 22.8863 14.3289C23.1717 14.4217 23.4192 14.6692 23.9142 15.1642L27.5 18.75M12.5 11.25C12.5 12.6307 11.3807 13.75 10 13.75C8.61929 13.75 7.5 12.6307 7.5 11.25C7.5 9.86929 8.61929 8.75 10 8.75C11.3807 8.75 12.5 9.86929 12.5 11.25ZM8.5 26.25H21.5C23.6002 26.25 24.6503 26.25 25.4525 25.8413C26.1581 25.4817 26.7317 24.9081 27.0913 24.2025C27.5 23.4003 27.5 22.3502 27.5 20.25V9.75C27.5 7.6498 27.5 6.5997 27.0913 5.79754C26.7317 5.09193 26.1581 4.51825 25.4525 4.15873C24.6503 3.75 23.6002 3.75 21.5 3.75H8.5C6.3998 3.75 5.3497 3.75 4.54754 4.15873C3.84193 4.51825 3.26825 5.09193 2.90873 5.79754C2.5 6.5997 2.5 7.6498 2.5 9.75V20.25C2.5 22.3502 2.5 23.4003 2.90873 24.2025C3.26825 24.9081 3.84193 25.4817 4.54754 25.8413C5.3497 26.25 6.3998 26.25 8.5 26.25Z"
                          stroke="#444145"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span class="form-file__caption">+ Фото</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/helpers' as *;

.content-card {
  box-shadow: 0 5px 15px 0 rgba(39, 18, 47, 0.1);
  border-radius: 20px;
  background: #fff;

  + .content-card {
    margin-top: 20px;
  }

  // .content-card__head

  &__head {
    padding: 10px 20px;
    background: #edeaee;
    border-radius: 20px 20px 0 0;
  }

  // .content-card__title

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.67;
    color: #242125;
  }
}

.form-file {
  // .form-file__inner

  &__inner {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  // .form-file__card

  &__card {
    border-radius: 10px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include one {
      width: 130px;
      height: 130px;
    }
  }

  // .form-file__previews

  // &__previews {
  //   display: flex;
  //   flex-wrap: wrap;

  //   gap: 15px;
  // }

  // .form-file__preview

  &__preview {
    position: relative;
    border: 1px solid #edeaee;
    background: #f9f6fa;
  }

  &__preview-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  // .form-file__delete-button

  &__delete-button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #edeaee;
    border-radius: 10px;
    background: #fff;
  }

  // .form-file__upload-button

  &__upload-button {
    border: 2px dashed #e39bfd;
  }

  // .form-file__icon

  &__icon {
    svg {
      display: block;
    }
  }

  // .form-file__caption

  &__caption {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #444145;
  }

  // .form-file__upload-input

  &__upload-input {
    display: none;
  }

  // .form-file__alert

  &__alert {
    margin-top: 10px;
    font-size: 14px;
    color: #f60b0f;
  }
}

.form-group {
  padding: 20px;

  + .form-group {
    border-top: 1px solid #edeaee;
  }
}
</style>
