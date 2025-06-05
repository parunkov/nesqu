<script setup lang="ts">
import type { Event } from '@/types/events.ts'
import AppInput from '@/components/AppInput.vue'

const contacts = defineModel<Event['contacts']>('contacts')
</script>

<template>
  <div v-if="contacts" class="content-card">
    <div class="content-card__inner">
      <div class="content-card__head">
        <h3 class="content-card__title">Контакты</h3>
      </div>

      <div class="content-card__body">
        <div class="form-group">
          <div class="form-block">
            <div class="form-item">
              <label for="" class="form-item__label">Сайт</label>
              <AppInput v-model="contacts[0]" placeholder=" " />
            </div>
            <div class="form-item">
              <label for="" class="form-item__label">Телеграм</label>
              <AppInput v-model="contacts[1]" placeholder=" " />
            </div>
            <div class="form-item">
              <label for="" class="form-item__label">Вотсап</label>
              <AppInput v-model="contacts[2]" placeholder=" " />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/helpers' as *;

:is(input, textarea).field:not(:placeholder-shown),
.field:has(input:not(:placeholder-shown)) {
  background: #fff;
}

textarea {
  outline: none; /* Убрать стандартную чёрную рамку */
  resize: none; /* Запретить растягивание */
  overflow: auto;

  &:focus,
  &:has(input:focus) {
    border-color: var(--color-primary-700);
  }
}

.content-card {
  box-shadow: 0 5px 15px 0 rgba(39, 18, 47, 0.1);
  border-radius: 20px;
  background: var(--color-white);

  + .content-card {
    margin-top: 20px;
  }

  // .content-card__inner

  &__inner {
  }

  // .content-card__head

  &__head {
    padding: 10px 20px;
    background: var(--color-gray-300);
    border-radius: 20px 20px 0 0;
  }

  // .content-card__title

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.67;
    color: var(--color-gray-1000);
  }

  // .content-card__body

  &__body {
  }
}

.form-group {
  padding: 20px;

  + .form-group {
    border-top: 1px solid var(--color-gray-300);
  }
}

.form-block {
  + .form-block {
    margin-top: 10px;
  }
}

.form-item {
  // .form-block__label

  &__label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.56;
    color: var(--color-gray-900);
  }
}
</style>
