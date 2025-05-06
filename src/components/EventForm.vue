<template>
  <form class="event-form" @submit.prevent="handleSubmit">
    <div class="form-sections">
      <InfoSection />
      <ContentSection />
      <PhotoUploadSection />
      <CategorySection />
    </div>
  </form>
</template>

<script setup lang="ts">
import InfoSection from "./InfoSection.vue";
import ContentSection from "./ContentSection.vue";
import PhotoUploadSection from "./PhotoUploadSection.vue";
import CategorySection from "./CategorySection.vue";

const handleSubmit = () => {
  // Handle form submission
};
</script>

<style scoped lang="scss">
@import "./_colors.scss";

.event-form {
  background-color: $bg-light;
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: start;
  gap: 20px;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
  }
}

.form-sections {
  display: flex;
  min-width: 240px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex: 1;
  gap: 20px;
  flex-shrink: 1;
  flex-basis: 0%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
}
</style>
