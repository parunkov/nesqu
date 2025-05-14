<script lang="ts" setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div class="text">
    <div v-if="slots.leftIcon" class="text__icon">
      <slot name="leftIcon"></slot>
    </div>
    <slot></slot>
    <div v-if="slots.rightIcon" class="text__icon">
      <slot name="rightIcon"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {

  font-size: vw(16);
  line-height: 1.5;

  p {
    &:not(:first-child) {
      margin-top: vw(16);
    }
  }

  &--xs {
    font-size: vw(12);
  }

  &--sm {
    font-size: vw(14);
  }

  &--lg {
    font-size: vw(18);
  }

  &--xl {
    font-size: vw(20);
  }

  &--medium {
    font-weight: 500;
  }

  &--semibold {
    font-weight: 600;
  }

  &--bold {
    font-weight: 700;
  }

  &--extrabold {
    font-weight: 800;
  }

  &--montserrat {
    font-family: 'Montserrat', sans-serif;
  }

  &--lh-12 {
    line-height: 1.2;
  }

  &--upper {
    text-transform: uppercase;
  }

  &--gray-800 {
    color: var(--color-gray-800);
  }

  &--iflex {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &--flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  &--clamp-2 {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  &__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;

    &:first-child:not(:last-child) {
      margin-right: vw(5);
    }

    &:last-child:not(:first-child) {
      margin-left: vw(5);
    }


    &--mx-sm {
      &:first-child:not(:last-child) {
        margin-right: vw(4);
      }

      &:last-child:not(:first-child) {
        margin-left: vw(4);
      }
    }
  }

  @media (max-width: 991px) {
    font-size: vw(16, $mobile);

    p {
      &:not(:first-child) {
        margin-top: vw(16, $mobile);
      }
    }

    &--sm {
      font-size: vw(14, $mobile);
    }

    &--lg {
      font-size: vw(18, $mobile);
    }

    &--xl {
      font-size: vw(20, $mobile);
    }

    &__icon {
      &:first-child:not(:last-child) {
        margin-right: vw(5, $mobile);
      }

      &:last-child:not(:first-child) {
        margin-left: vw(5, $mobile);
      }


      &--mx-sm {
        &:first-child:not(:last-child) {
          margin-right: vw(4, $mobile);
        }

        &:last-child:not(:first-child) {
          margin-left: vw(4, $mobile);
        }
      }
    }
  }
}
</style>