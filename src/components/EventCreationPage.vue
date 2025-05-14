<template>
  <div class="content-wrap">
    <div class="content-wrap__inner">
      <div class="content-wrap__head">
        <img @click="() => emit('changeMode')"
             src="/icons/back.svg"
             alt="" class="header-icon" />
        <h2 class="content-wrap__title">
          Новое Мероприятие
        </h2>
      </div>
      <div class="content-wrap__body">
        <div class="content-wrap__column">
          <InfoSection />
          <ContentSection />
          <PhotoSection />
        </div>
        <div class="content-wrap__column">
          <CategoriesSection />
        </div>
      </div>
      <div class="content-wrap__foot">
        <button class="button button--icon button--outline button--danger" type="button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996"
              stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          Удалить
        </button>

        <button class="button" type="button">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoSection from '@/components/InfoSection.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import ContentSection from '@/components/ContentSection.vue'
import PhotoSection from '@/components/PhotoSection.vue'


const emit = defineEmits(['changeMode'])

</script>
<style scoped lang="scss">
@use "../assets/scss/helpers" as *;
.content-wrap {
  padding-top: 20px;

  @include one {
    padding-top: 0;
  }

  // .content-wrap__inner

  &__inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #fff;
    border-radius: 20px 0 0 0;

    @include one {
      border-radius: 0;
    }
  }

  // .content-wrap__head

  &__head {
    padding: 20px;
    border-bottom: 1px solid #edeaee;
    display: flex;
    gap: 10px;
  }

  // .content-wrap__title

  &__title {
    display: flex;
    align-items: center;
    gap: 26px;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.33;
    letter-spacing: 0.01em;
    color: #000;
  }

  // .content-wrap__body

  &__body {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 680px 430px;
    padding: 20px;
    gap: 20px;

    @include one {
      grid-template-columns: 1fr;
    }
  }

  // .content-wrap__column

  &__column {
  }

  // .content-wrap__foot

  &__foot {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
  }
}

.button {
  padding: 19px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: #fff;
  background: #9218c0;
  border-radius: 10px;
  border: 1px solid #9218c0;
  stroke: currentColor;

  &--icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &--danger {
    color:  #f60b0f;
  }

  &--outline {
    background: none;
    border-color: currentColor;
  }
}

</style>
