<template>
  <div class="content-card">
    <div class="content-card__inner">
      <div class="content-card__head">
        <h3 class="content-card__title">
          Информация
        </h3>
      </div>

      <div class="content-card__body">

        <div class="form-group">
          <div class="form-item">
            <label for="" class="form-item__label">Город</label>

            <AppDropDown/>
          </div>
        </div>

        <div class="form-group">
          <div class="form-date">
            <div class="form-date__row">
              <EventDates />
            </div>
          </div>
        </div>

        <PriceInput />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppDropDown from '@/components/AppDropDown.vue'
import EventDates from '@/components/EventDates.vue'
import PriceInput from '@/components/PriceInput.vue'
</script>

<style scoped lang="scss">
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


.dropdown {
  position: relative;

  // .dropdown__trigger

  &--active &__trigger {
    border-color: #9218c0;

    &::after {
      transform: rotate(180deg);
    }
  }

  &__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &.field {
      background: #fff;
    }

    &::after {
      content: url('data:image/svg+xml,<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="%23444145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>');
      line-height: 0;
      transition: transform .33s ease;
    }
  }

  // .dropdown__wrapper

  &__wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.5s ease-in-out;

    &[aria-hidden="false"] {
      grid-template-rows: 1fr;
    }
  }

  // .dropdown__inner

  &__inner {
    overflow: hidden;
  }

  // .dropdown__content

  &__content {
    padding-top: 8px;
  }

  // .dropdown__select-native

  &__select-native {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }
}

.dropdown-list {
  border: 1px solid #edeaee;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;

  // .dropdown-list__item

  &__item {
    cursor: pointer;
    padding: 10px;

    transition: background .33s ease;

    &:hover {
      background: #e39bfd;
    }
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
</style>

