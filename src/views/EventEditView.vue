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

const saveEvent = () => {
  console.log(currentEvent)
  if (!currentEvent) return
  eventStore.updateEvent(currentEvent, Number(realId))
}

onMounted(() => {
  const id = useRoute().params.id as string
  realId = id
  eventStore.getEvent(Number(id)).then((data) => {
    Object.assign(currentEvent, data)
  })
})

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
      <div class="content-wrap__foot">
        <button
          @click="router.back()"
          class="button button--icon button--outline button--danger"
          type="button"
        >
          <img src="/icons/delete.svg" alt="Удалить" />

          <span>Удалить</span>
        </button>

        <button @click="saveEvent" class="button" type="button">Сохранить</button>
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
    border-bottom: 1px solid #edeaee;
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

.button {
  padding: 19px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: #fff;
  background: #9218c0;
  border-radius: 10px;
  border: 1px solid #9218c0;
  stroke: currentColor;

  span {
    line-height: 1;
  }

  &--icon {
    display: flex;
    align-items: end;
    gap: 10px;
  }

  &--danger {
    color: #f60b0f;
  }

  &--outline {
    background: none;
    border-color: currentColor;
  }
}
</style>
