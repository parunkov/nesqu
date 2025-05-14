<script setup lang="ts">

</script>

<template>
  <div class="dropdown dropdown--select">
    <div class="dropdown__trigger field">
      Сочи
    </div>

    <div class="dropdown__wrapper" aria-hidden="true">
      <div class="dropdown__inner">
        <div class="dropdown__content">
          <ul class="dropdown-list">
            <li class="dropdown-list__item">
              Сочи
            </li>

            <li class="dropdown-list__item">
              Краснодар
            </li>

            <li class="dropdown-list__item">
              Москва
            </li>
          </ul>
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

</style>
