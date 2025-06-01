<script lang="ts" setup>
import StatisticChart from '@/components/StatisticChart.vue'
import type { ChartStatistics } from '@/types/staticstics.ts'
import { ref } from 'vue'
import { useModeratorStore } from '@/stores/moderator.ts'
import router from '@/router'

const chart = ref<ChartStatistics | null>(null)

useModeratorStore()
  .getDaysStatistics()
  .then((data) => (chart.value = data))
/*
const chart = {
  labels: Array.from({ length: 60 }, (_, i) => `День ${i + 1}`),
  series: [
    {
      name: 'Заходы на сайт',
      data: Array.from({ length: 60 }, () => Math.floor(Math.random() * 100)),
    },
    {
      name: 'Регистрации',
      data: Array.from({ length: 60 }, () => Math.floor(Math.random() * 50)),
    },
    {
      name: 'Скачивания',
      data: Array(30)
        .fill(null)
        .concat(Array.from({ length: 30 }, () => Math.floor(Math.random() * 20))),
    },
  ],
}*/
</script>

<template>
  <div class="header">
    <img @click="() => router.back()" src="/icons/back.svg" alt="назад" />
    <h2 class="title">Статистика</h2>
  </div>
  <StatisticChart v-if="chart" :chart="chart" />
</template>

<style>
.header {
  padding: 20px;
  border-bottom: 1px solid #edeaee;
  display: flex;
  gap: 10px;
}

.title {
  display: flex;
  align-items: center;
  gap: 26px;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.33;
  letter-spacing: 0.01em;
  color: #000;
}
</style>
