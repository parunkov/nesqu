<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useModeratorStore } from '@/stores/moderator.ts'

useModeratorStore()
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped lang="scss"></style>
