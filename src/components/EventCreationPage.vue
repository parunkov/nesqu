
<script setup lang="ts">
import InfoSection from '@/components/InfoSection.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import ContentSection from '@/components/ContentSection.vue'
import PhotoSection from '@/components/PhotoSection.vue'
import type { Event } from '@/types/events.ts'
import { ref, watch } from 'vue'
import { useEventsStore } from '@/stores/events.ts'

const eventStore = useEventsStore()

const newEvent = ref<Event>({
  city: 0,
  types: [],
  name: "",
  contacts: [],
  datetime: [],
  prices: [],
  address: "",
  description: "",
  images: []
})

const emit = defineEmits(['changeMode'])

watch(() => newEvent.value, () => console.log(newEvent.value), {
  deep: true,
})

const deleteEvent = () => {
  emit('changeMode')
}

const saveEvent = () => {
  const { images, ...eventWithoutImages } = newEvent.value;
  eventStore.addEvent(eventWithoutImages)
    .then(res => {
      if (images)
        eventStore.uploadImage(images, res.id)
    })
}

</script>

<template>
  <div class="content-wrap">
    <div class="content-wrap__inner">
      <div class="content-wrap__head">
        <img @click="() => emit('changeMode')"
             src="/icons/back.svg"
             alt="" class="header-icon" />
        <h2 class="content-wrap__title">
          Новое Мероприятие
        </h2>
      </div>
      <div class="content-wrap__body">
        <div class="content-wrap__column">
          <InfoSection v-model:city="newEvent.city" v-model:dates="newEvent.datetime" v-model:prices="newEvent.prices"/>
          <ContentSection v-model:description="newEvent.description" v-model:title="newEvent.name"/>
          <PhotoSection v-model="newEvent.images" />
        </div>
        <div class="content-wrap__column">
          <CategoriesSection />
        </div>
      </div>
      <div class="content-wrap__foot">
        <button  @click="deleteEvent" class="button button--icon button--outline button--danger" type="button">
          <img src="/icons/delete.svg" alt="Удалить">

          <span>Удалить</span>
        </button>

        <button @click="saveEvent" class="button" type="button">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/helpers" as *;
.content-wrap {
  padding-top: 20px;

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
    color:  #f60b0f;
  }

  &--outline {
    background: none;
    border-color: currentColor;
  }
}

</style>
