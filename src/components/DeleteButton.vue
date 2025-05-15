<script setup lang="ts">
const ANIMATION_DURATION = 1000;
import { computed, ref } from 'vue';

const emit = defineEmits(['delete']);

const isLoading = ref(false);
const timeoutId = ref<number | null>(null);
const animationDurationSec = computed(() => `${ANIMATION_DURATION / 1000}s`);

const handleClick = () => {
  if (isLoading.value) {
    // При повторном нажатии отменяем таймаут и сбрасываем состояние
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
      timeoutId.value = null;
    }
    isLoading.value = false;
    return;
  }

  isLoading.value = true;

  timeoutId.value = window.setTimeout(() => {
    emit('delete');
    timeoutId.value = null;
  }, ANIMATION_DURATION);
};
</script>

<template>
  <button
    class="delete-button"
    :class="{ loading: isLoading }"
    @click="handleClick"
    :style="{ '--animation-duration': animationDurationSec }"
  >
    <!-- Анимированный прогресс-круг по краю кнопки -->
    <svg
      v-if="isLoading"
      class="progress-ring"
      viewBox="0 0 40 40"
    >
      <circle
        class="progress-ring__circle"
        cx="20"
        cy="20"
        r="18"
        fill="transparent"
      />
    </svg>

    <!-- Иконка -->
    <div class="icon-wrapper">
      <img v-if="!isLoading" src="/icons/delete.svg" />
      <img v-else src="/icons/cansel.svg" />
    </div>
  </button>
</template>


<style scoped lang="scss">
.delete-button {
  margin: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;

  &.loading {
    background-color: var(--color-primary-100);
  }
}

.icon-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  img {
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.progress-ring {
  position: absolute;
  width: 40px;
  height: 40px;
  transform: rotate(-90deg);
  z-index: 1;
  pointer-events: none;
}

.progress-ring__circle {
  stroke: var(--color-primary-500);
  stroke-width: 2;
  stroke-dasharray: 113.1;
  stroke-dashoffset: 113.1;
  animation: draw-circle var(--animation-duration) linear forwards;
}

@keyframes draw-circle {
  to {
    stroke-dashoffset: 0;
  }
}

</style>



