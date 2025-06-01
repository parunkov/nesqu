<script lang="ts" setup>
import StatisticChart from '@/components/StatisticChart.vue'
import type { ChartStatistics } from '@/types/staticstics.ts'
import { ref } from 'vue'
import { useModeratorStore } from '@/stores/moderator.ts'

const chart = ref<ChartStatistics | null>(null)

useModeratorStore()
  .getDaysStatistics()
  .then((data) => (chart.value = data))

// const chart = {
//   categories: Array.from({ length: 60 }, (_, i) => `День ${i + 1}`),
//   series: [
//     {
//       name: 'Заходы на сайт',
//       data: Array.from({ length: 60 }, () => Math.floor(Math.random() * 100)),
//     },
//     {
//       name: 'Регистрации',
//       data: Array.from({ length: 60 }, () => Math.floor(Math.random() * 50)),
//     },
//     {
//       name: 'Скачивания',
//       data: Array(30)
//         .fill(null)
//         .concat(Array.from({ length: 30 }, () => Math.floor(Math.random() * 20))),
//     },
//   ],
// }
</script>

<template>
  <StatisticChart v-if="chart" :chart="chart" />
</template>

<style></style>
