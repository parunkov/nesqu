<script setup lang="ts">
import InfoSection from '@/components/InfoSection.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import ContentSection from '@/components/ContentSection.vue'
import PhotoSection from '@/components/PhotoSection.vue'
import type { EventInfo } from '@/types/events.ts'
import { onMounted, reactive, ref, watch } from 'vue'
import { useEventsStore } from '@/stores/events.ts'
import router from '@/router'
import { useRoute } from 'vue-router'
import AppButton from '@/components/AppButton.vue'
import { useAuthStore } from '@/stores/auth.ts'

const authStore = useAuthStore()
const eventStore = useEventsStore()
let realId = '0'
const currentEvent = reactive<EventInfo>({} as EventInfo)

watch(
  () => currentEvent,
  () => console.log(currentEvent),
  {
    deep: true,
  },
)

onMounted(() => {
  const id = useRoute().params.id as string
  realId = id
  eventStore.getEvent(Number(id)).then((data) => {
    Object.assign(currentEvent, data)
  })
})

const saveEvent = () => {
  if (!currentEvent) return
  eventStore.updateEvent(currentEvent, Number(realId))
}

const banEvent = () => {
  eventStore.updateEventsStatus([
    {
      id: Number(realId),
      top: false,
      is_hiden: false,
      is_validated: false,
    },
  ])
}

const deleteEvent = () => {
  eventStore.deleteEvent(Number(realId))
  router.back()
}

const publishEvent = () => {
  eventStore.updateEventsStatus([
    {
      id: Number(realId),
      top: false,
      is_hiden: false,
      is_validated: true,
    },
  ])
}

const currentCity = ref(1)
</script>

<template>
  <div v-if="currentEvent" class="content-wrap">
    <div class="content-wrap__inner">
      <div class="content-wrap__head">
        <img @click="() => router.back()" src="/icons/back.svg" alt="" class="header-icon" />
        <h2 class="content-wrap__title">Редактирование мероприятия</h2>
      </div>
      <div class="content-wrap__body">
        <div class="content-wrap__column">
          <InfoSection
            v-model:city="currentCity"
            v-model:dates="currentEvent.datetime"
            v-model:prices="currentEvent.prices"
          />
          <ContentSection
            v-model:description="currentEvent.description"
            v-model:title="currentEvent.name"
          />
          <PhotoSection v-model="currentEvent.images" />
        </div>
        <div class="content-wrap__column">
          <CategoriesSection />
        </div>
      </div>
      <div v-if="authStore.currentUser?.role == 'organizer'" class="content-wrap__foot">
        <AppButton @click="deleteEvent" outline danger icon>
          <img src="/icons/delete.svg" alt="Удалить" />
          <span>Удалить</span>
        </AppButton>
        <AppButton @click="saveEvent" type="button"> Сохранить</AppButton>
      </div>
      <div v-else class="content-wrap__foot">
        <AppButton @click="banEvent" outline danger icon>
          <span>Забанить</span>
        </AppButton>
        <AppButton @click="publishEvent" type="button"> Опубликовать</AppButton>
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
    background: #fff;
    border-radius: 20px 0 0 0;

    @include one {
      border-radius: 0;
    }
  }

  // .content-wrap__head

  &__head {
    padding: 20px;
    border-bottom: 1px solid var(--color-gray-300);
    display: flex;
    gap: 10px;
  }

  // .content-wrap__title

  &__title {
    display: flex;
    align-items: center;
    gap: 26px;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.33;
    letter-spacing: 0.01em;
    color: #000;
  }

  // .content-wrap__body

  &__body {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 680px 430px;
    padding: 20px;
    gap: 20px;

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
    padding: 20px;
    gap: 20px;
  }
}
</style>
