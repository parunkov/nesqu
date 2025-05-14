<script setup lang="ts">
import ToggleSwitch from '@/components/ToggleSwitch.vue'
</script>

<template>
  <div class="form-group">
    <div class="form-item">
      <label for="" class="form-item__label">Цена</label>

      <div class="form-price">
        <div class="form-price__values">
          <div class="form-price__value field">
                              <span class="form-price__caption">
                                ₽
                              </span>

            <input class="form-price__input" type="text" placeholder="0">
          </div>
        </div>

        <div class="form-price__free-checkbox custom-checkbox">
          <label class="custom-checkbox__label">
            <ToggleSwitch />
            <span class="custom-checkbox__caption">Бесплатно</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/helpers" as *;

.custom-checkbox {
  // .custom-checkbox__label

  &__label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  // .custom-checkbox__checkbox

  &__checkbox {
    display: none;
  }

  &__checkbox:checked + &__decor::before {
    left: calc(100% - 27px);
  }

  // .custom-checkbox__decor

  &__decor {
    position: relative;
    width: 54px;
    height: 30px;
    background: #f2f4f7;
    border-radius: 18px;

    &::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;
      background: #fff;
      box-shadow: 0 1px 3px 0 rgba(16, 24, 40, 0.06), 0 1px 4px 0 rgba(16, 24, 40, 0.1);
      border-radius: 50%;

      transition: left .33s ease;
    }
  }

  // .custom-checkbox__caption

  &__caption {
    font-size: 18px;
    line-height: 1.11;
    color: #444145;
    user-select: none;
  }
}

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


.form-group {
  padding: 20px;

  + .form-group {
    border-top: 1px solid  #edeaee;
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
.form-price {
  // .form-price__values

  &__values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    transition: opacity 0.33s ease;

    @include one {
      grid-template-columns: 200px;
    }

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  // .form-price__value

  &__value {
    display: flex;
    align-items: center;
    padding: 19px 14px;
  }

  // .form-price__caption

  &__caption {
    flex-shrink: 0;
    display: block;
    width: 20px;
    margin-right: 5px;
    text-align: center;
    font-size: 20px;
    line-height: 1;
    color: #444145;
  }

  // .form-price__input

  &__input {
    max-width: 100%;
    width: 100%;
    margin-right: 10px;
    flex-grow: 1;
  }

  // .form-price__delete

  &__delete {
  }

  // .form-price__free-checkbox

  &__free-checkbox {
    margin-top: 15px;
  }

  // .form-price__alert

  &__alert {
  }
}

</style>
