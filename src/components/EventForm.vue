<template>
  <form class="event-form" @submit.prevent="handleSubmit">
    <InfoSection />
    <ContentSection />
    <PhotoSection />
    <CategoriesSection />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { EventFormData } from "./types";
import InfoSection from "./InfoSection.vue";
import ContentSection from "./ContentSection.vue";
import PhotoSection from "./PhotoSection.vue";
import CategoriesSection from "./CategoriesSection.vue";

const formData = ref<EventFormData>({
  city: "Сочи",
  startDate: "19.04 19:40",
  endDate: "",
  price: 10000,
  isFree: false,
  title: "",
  description: "",
  photos: [],
  categories: [],
});

const handleSubmit = () => {
  // Handle form submission
  console.log("Form submitted:", formData.value);
};
</script>

<style scoped>
.event-form {
  background-color: rgba(249, 246, 250, 1);
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: start;
  gap: 20px;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .event-form {
    max-width: 100%;
  }
}
</style>
