<script lang="ts" setup>
import StatisticChart from '@/components/StatisticChart.vue'

const chart = {
  categories: Array.from({ length: 60 }, (_, i) => `День ${i + 1}`),
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
}
</script>

<template>
  <StatisticChart :chart="chart" />
</template>

<style></style>
