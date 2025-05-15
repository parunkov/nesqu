<script setup lang="ts">
import type { Event } from '@/types/events.ts'

const title = defineModel<Event['name']>('title')
const description = defineModel<Event['description']>('description')
</script>

<template>
  <div class="content-card">
    <div class="content-card__inner">
      <div class="content-card__head">
        <h3 class="content-card__title">
          Контент
        </h3>
      </div>

      <div class="content-card__body">

        <div class="form-group">
          <div class="form-block">
            <div class="form-item">
              <label for="" class="form-item__label" >Название*</label>

              <input type="text" class="field" v-model="title" placeholder=" ">
            </div>
          </div>

          <div class="form-block">
            <div class="form-item">
              <label for="" class="form-item__label ">Описание</label>

              <textarea class="field field--textarea" v-model="description" placeholder=" "></textarea>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/helpers" as *;

.field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #edeaee;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.11;
  color: #000;
  background: #f9f6fa;

  transition: border-color 0.33s ease, background 0.33s ease;

  &::placeholder {
    color: #767377;
    font-size: inherit;
  }

  &:focus,
  &:has(input:focus) {
    border-color: #9218c0;
  }

  &--textarea {
    min-height: 120px;
  }
}

:is(input, textarea).field:not(:placeholder-shown),
.field:has(input:not(:placeholder-shown)) {
  background: #fff;
}
.content-card {
  box-shadow: 0 5px 15px 0 rgba(39, 18, 47, 0.1);
  border-radius: 20px;
  background: #fff;


  + .content-card {
    margin-top: 20px;
  }

  // .content-card__inner

  &__inner {
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

  // .content-card__body

  &__body {
  }
}
.form-group {
  padding: 20px;

  + .form-group {
    border-top: 1px solid  #edeaee;
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
    color: #444145;
  }
}
</style>

