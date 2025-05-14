<script setup lang="ts">

</script>

<template>
  <div class="form-date__item">
    <div class="form-date__element form-item">
      <label for="" class="form-item__label">
        Дата начала*
      </label>

      <div class="form-date__values field">
        <input class="form-date__input form-date__input-date" type="text" placeholder="ДД.ММ">
        <input class="form-date__input form-date__input-time" type="text" placeholder="ЧЧ.ММ">
      </div>
    </div>

    <span class="form-date__item-separator">
                            </span>

    <div class="form-date__element form-item">
      <label for="" class="form-item__label">
        Дата окончания
      </label>

      <div class="form-date__values field">
        <input class="form-date__input form-date__input-date" type="text" placeholder="ДД.ММ">
        <input class="form-date__input form-date__input-time" type="text" placeholder="ЧЧ.ММ">
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
.form-date {
  // .form-date__row

  &__row {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  &__row + &__row {
    margin-top: 20px;
  }

  // .form-date__item

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  // .form-date__element

  &__element {
    max-width: 185px;
  }

  // .form-date__values

  &__values {
    display: flex;
    gap: 5px;
  }

  &__hint {
    height: 0;
    font-size: 10px;
    color: #f60b0f;
    margin-top: 2px;
  }

  // .form-date__input

  &__input {
    width: 5ch;
    font-size: inherit;
    font-family: inherit;

    &::placeholder {
      color: #767377;
      font-family: inherit;
      font-size: inherit;
      text-transform: lowercase;
    }
  }

  // .form-date__item-separator

  &__item-separator {
    align-self: flex-end;
    height: 1px;
    width: 10px;
    margin: 20px 0;
    background: #9f9ca0;
  }

  // .form-date__actions

  &__actions {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  // .form-date__remove-btn

  &__add-day-btn,
  &__remove-btn,
  &__add-week-btn {
    min-width: 40px;
    height: 40px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__remove-btn {
    &::before {
      content: "";
      display: block;
      width: 14px;
      height: 2px;
      background: #f60b0f;
      border-radius: 50%;
    }
  }

  // .form-date__add-day-btn

  &__add-day-btn {
  }

  // .form-date__add-week-btn

  &__add-week-btn {
  }
}

</style>
