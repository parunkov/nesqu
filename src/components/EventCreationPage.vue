<template>
  <main class="event-creation">
    <section class="event-content">
      <header class="event-header">
        <img @click="() => emit('changeMode')"
          src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/753b3f4ef1c20af83a91234be20f8554883918ba?placeholderIfAbsent=true"
          alt="" class="header-icon" />
        <h1 class="header-title">Новое Мероприятие</h1>
      </header>
      <div class="divider"></div>
      <EventForm />
      <FormActions />
    </section>
  </main>
</template>

<script setup lang="ts">
import EventForm from "./EventForm.vue";
import FormActions from "./FormActions.vue";


const emit = defineEmits(['changeMode'])

</script>
<style scoped lang="scss">
.event-creation {
  background-color: var(--color-primary-700);
  /* заменено на var(--color-primary-700) */
  display: flex;
  align-items: stretch;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;
}

.event-content {
  min-width: vw(240);
  /* заменено на vw */
  margin-top: auto;
  margin-bottom: auto;
  padding-top: vw(20);
  /* заменено на vw */
  flex: 1;
  flex-shrink: 1;
  flex-basis: vw(60);
  /* заменено на vw */
}

.event-header {
  border-radius: vw(40) 0 0 0;
  /* заменено на vw */
  background-color: var(--color-white);
  /* заменено на var(--color-white) */
  display: flex;
  width: 100%;
  padding: vw(20);
  /* заменено на vw */
  align-items: center;
  gap: vw(20);
  /* заменено на vw */
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
}

.header-icon {
  aspect-ratio: 1;
  object-fit: contain;
  width: vw(30);
  /* заменено на vw */
}

.header-title {
  font-size: vw(30);
  /* заменено на vw */
  color: var(--color-gray-900);
  /* заменено на var(--color-gray-900) */
  font-weight: 700;
  letter-spacing: vw(0.3);
  /* заменено на vw */
  flex: 1;
}

.divider {
  aspect-ratio: 1000;
  object-fit: contain;
  width: 100%;
}

@media (max-width: 991px) {
  .event-content {
    max-width: 100%;
  }

  .event-header {
    max-width: 100%;
  }
}
</style>
