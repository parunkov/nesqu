<script setup lang="ts">
import InfoSection from '@/components/InfoSection.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import ContentSection from '@/components/ContentSection.vue'
import PhotoSection from '@/components/PhotoSection.vue'
import type { Event } from '@/types/events.ts'
import { ref } from 'vue'
import { useEventsStore } from '@/stores/events.ts'
import router from '@/router'
import AppButton from '@/components/AppButton.vue'
import { useModeratorStore } from '@/stores/moderator.ts'

const moderatorStore = useModeratorStore()
const eventStore = useEventsStore()

const newEvent = ref<Event>({
  city: 0,
  types: [0],
  name: '',
  contacts: [],
  datetime: [],
  prices: [''],
  address: '',
  description: '',
  images: [],
})

const saveEvent = () => {
  const { images, ...eventWithoutImages } = newEvent.value
  eventStore.addEvent(eventWithoutImages).then((res) => {
    if (images) eventStore.uploadImage(images, res.id)
  })
}
</script>

<template>
  <div class="content-wrap">
    <div class="content-wrap__inner">
      <div class="content-wrap__head">
        <img @click="() => router.back()" src="/icons/back.svg" alt="" class="header-icon" />
        <h2 class="content-wrap__title">Новое Мероприятие</h2>
      </div>
      <div v-if="!moderatorStore.isLoading" class="content-wrap__body">
        <div class="content-wrap__column">
          <InfoSection
            v-model:city="newEvent.city"
            v-model:dates="newEvent.datetime"
            v-model:prices="newEvent.prices"
          />
          <ContentSection
            v-model:description="newEvent.description"
            v-model:title="newEvent.name"
          />
          <PhotoSection v-model="newEvent.images" />
        </div>
        <div class="content-wrap__column">
          <CategoriesSection v-model="newEvent.types" />
        </div>
      </div>
      <div class="content-wrap__foot">
        <AppButton @click="router.back()" outline danger icon>
          <img src="/icons/delete.svg" alt="Удалить" />
          <span>Удалить</span>
        </AppButton>
        <AppButton @click="saveEvent" type="button"> Сохранить</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/helpers/index' as *;

.content-wrap {
  @include one {
    padding-top: 0;
  }

  // .content-wrap__inner

  &__inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--color-white);
    border-radius: vw(20) 0 0 0;

    @include one {
      border-radius: 0;
    }
  }

  // .content-wrap__head

  &__head {
    padding: vw(20);
    border-bottom: vw(1) solid var(--color-gray-300);
    display: flex;
    gap: vw(10);
  }

  // .content-wrap__title

  &__title {
    display: flex;
    align-items: center;
    gap: vw(26);
    font-weight: 700;
    font-size: vw(30);
    line-height: 1.33;
    letter-spacing: 0.01em;
    color: var(--colorr-black);
  }

  // .content-wrap__body

  &__body {
    flex-grow: 1;
    display: grid;
    grid-template-columns: vw(680) vw(430);
    padding: vw(20);
    gap: vw(20);

    @include one {
      grid-template-columns: 1fr;
    }
  }

  // .content-wrap__column

  &__column {
  }

  // .content-wrap__foot

  &__foot {
    display: flex;
    justify-content: space-between;
    padding: vw(20);
    gap: vw(20);
  }
}
</style>
