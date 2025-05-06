<template>
  <main class="event-creation-page">
    <SideNavigation />
    <section class="main-content">
      <header class="page-header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/753b3f4ef1c20af83a91234be20f8554883918ba?placeholderIfAbsent=true"
          alt="New Event Icon"
          class="header-icon"
        />
        <h1 class="page-title">Новое Мероприятие</h1>
      </header>
      <div class="divider"></div>
      <EventForm />
      <FormActions />
    </section>
  </main>
</template>

<script setup lang="ts">
import SideNavigation from "./SideNavigation.vue";
import EventForm from "./EventForm.vue";
import FormActions from "./FormActions.vue";
</script>

<style scoped lang="scss">
@import "./_colors.scss";

.event-creation-page {
  background-color: $primary-purple;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;
}

.main-content {
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 20px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 60px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
}

.page-header {
  border-radius: 40px 0 0 0;
  background-color: $bg-white;
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
  gap: 20px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 30px;
  color: $text-black;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
  }
}

.header-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
}

.page-title {
  align-self: stretch;
  margin: auto 0;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
}

.divider {
  aspect-ratio: 1000;
  object-fit: contain;
  object-position: center;
  width: 100%;
  background-color: $border-gray;
  height: 1px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
}
</style>
