<script setup lang="ts">
import type { Event } from '@/types/events.ts'

const title = defineModel<Event['name']>('title')
const description = defineModel<Event['description']>('description')
</script>

<template>
  <div class="content-card">
    <div class="content-card__inner">
      <div class="content-card__head">
        <h3 class="content-card__title">Контент</h3>
      </div>

      <div class="content-card__body">
        <div class="form-group">
          <div class="form-block">
            <div class="form-item">
              <label for="" class="form-item__label">Название*</label>

              <input type="text" class="field" v-model="title" placeholder=" " />
            </div>
          </div>

          <div class="form-block">
            <div class="form-item">
              <label for="" class="form-item__label">Описание</label>

              <textarea
                class="field field--textarea"
                v-model="description"
                placeholder=" "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/helpers' as *;

.field {
  display: block;
  width: 100%;
  padding: vw(10) 0;
  border: vw(1) solid var(--color-gray-300);
  border-radius: vw(10);
  font-weight: 400;
  font-size: vw(18);
  line-height: 1.11;
  color: #000;
  background: #f9f6fa;

  transition:
    border-color 0.33s ease,
    background 0.33s ease;

  &::placeholder {
    color: #767377;
    font-size: inherit;
  }

  &:focus,
  &:has(input:focus) {
    border-color: #9218c0;
  }

  &--textarea {
    min-height: vw(120);
  }
}

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
    border-color: #9218c0;
  }
}

.content-card {
  box-shadow: 0 vw(5) vw(15) 0 rgba(39, 18, 47, 0.1);
  border-radius: vw(20);
  background: #fff;

  + .content-card {
    margin-top: vw(20);
  }

  // .content-card__inner

  &__inner {
  }

  // .content-card__head

  &__head {
    padding: vw(10) vw(20);
    background: var(--color-gray-300);
    border-radius: vw(20) vw(20) 0 0;
  }

  // .content-card__title

  &__title {
    font-weight: 600;
    font-size: vw(18);
    line-height: 1.67;
    color: #242125;
  }

  // .content-card__body

  &__body {
  }
}

.form-group {
  padding: vw(20);

  + .form-group {
    border-top: vw(1) solid var(--color-gray-300);
  }
}

.form-block {
  + .form-block {
    margin-top: vw(10);
  }
}

.form-item {
  // .form-block__label

  &__label {
    display: block;
    margin-bottom: vw(5);
    font-weight: 500;
    font-size: vw(16);
    line-height: 1.56;
    color: #444145;
  }
}
</style>
