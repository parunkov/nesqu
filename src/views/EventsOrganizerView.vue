<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppTable from '@/components/AppTable.vue'
import { useEventsStore } from '@/stores/events.ts'
import type { EventCard } from '@/types/events.ts'
import DeleteButton from '@/components/DeleteButton.vue'
import { formatDate } from '@/utils/dateConverter.ts'
import router from '@/router'

const infiniteScrollTrigger = ref(null)
let observer: IntersectionObserver
const eventStore = useEventsStore()

const tableData = ref<EventCard[]>([])

eventStore.getEvents().then((res) => tableData.value.push(...res))

const filteredEvents = ref(tableData.value)
let firstCall = true
onMounted(() => {
  setTimeout(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && eventStore.nextPage && !firstCall) {
          eventStore.loadMore().then((res) => tableData.value.push(...res))
        }
        firstCall = false
      },
      {
        rootMargin: '100px',
      },
    )

    if (infiniteScrollTrigger.value) observer.observe(infiniteScrollTrigger.value)
  }, 600)
})

onBeforeUnmount(() => {
  if (observer && infiniteScrollTrigger.value) observer.unobserve(infiniteScrollTrigger.value)
})

const deleteEvent = (id: number, index: number) => {
  eventStore.deleteEvent(id).then(() => {
    tableData.value.splice(index, 1)
  })
}

const goTo = (name: string) => router.push({ name: name })

const editEvent = (id: number) => router.push({ name: 'event-edit', params: { id: id } })
</script>

<template>
  <header class="controls">
    <h2 class="title">Мероприятия</h2>
    <button @click="goTo('event-create')" class="create-button">+ Создать Мероприятие</button>
  </header>
  <AppTable class="event-table">
    <template #thead>
      <tr>
        <th class="table-cell--image">
          <div>Фото</div>
        </th>
        <th class="table-cell--name">
          <div>Название</div>
        </th>
        <th class="table-cell--start-date">
          <div>Дата начала</div>
        </th>
        <th class="table-cell--end-date">
          <div>Дата окончания</div>
        </th>
      </tr>
    </template>
    <template #tbody>
      <tr class="sub-header">
        <td colspan="4">На модерации</td>
      </tr>
      <tr
        v-for="(row, index) in filteredEvents.filter(
          (el) => el.is_validated === null || el.is_validated === undefined,
        )"
        @click.stop="editEvent(row.id)"
        :key="row.id"
      >
        <td class="table-cell--image">
          <img :src="row.image" />
        </td>
        <td class="table-cell--name">
          {{ row.name }}
        </td>
        <td class="table-cell--start-date">
          {{ formatDate(row.date_from) }}
        </td>
        <td class="table-cell--end-date">
          <div>
            <div>{{ row.date_to ? formatDate(row.date_to) : '' }}</div>
            <div class="cell action-cell">
              <DeleteButton @delete="deleteEvent(row.id, index)" class="delete" />
            </div>
          </div>
        </td>
      </tr>
      <tr class="sub-header">
        <td colspan="4">Опубликованные</td>
      </tr>
      <tr
        v-for="(row, index) in filteredEvents.filter((el) => el.is_validated === true)"
        @click.stop="editEvent(row.id)"
        :key="row.id"
      >
        <td class="table-cell--image">
          <img :src="row.image" />
        </td>
        <td class="table-cell--name">
          {{ row.name }}
        </td>
        <td class="table-cell--start-date">
          {{ formatDate(row.date_from) }}
        </td>
        <td class="table-cell--end-date">
          <div>
            <div>{{ row.date_to ? formatDate(row.date_to) : '' }}</div>
            <div class="cell action-cell">
              <DeleteButton @delete="deleteEvent(row.id, index)" class="delete" />
            </div>
          </div>
        </td>
      </tr>
      <tr class="sub-header">
        <td colspan="4">Не прошедшие модерацию</td>
      </tr>
      <tr
        v-for="(row, index) in filteredEvents.filter((el) => el.is_validated === false)"
        @click.stop="editEvent(row.id)"
        :key="row.id"
      >
        <td class="table-cell--image">
          <img :src="row.image" />
        </td>
        <td class="table-cell--name">
          {{ row.name }}
        </td>
        <td class="table-cell--start-date">
          {{ formatDate(row.date_from) }}
        </td>
        <td class="table-cell--end-date">
          <div>
            <div>{{ row.date_to ? formatDate(row.date_to) : '' }}</div>
            <div class="cell action-cell">
              <DeleteButton @delete="deleteEvent(row.id, index)" class="delete" />
            </div>
          </div>
        </td>
      </tr>
    </template>
  </AppTable>
  <div ref="infiniteScrollTrigger"></div>
</template>

<style scoped lang="scss">
.table-cell--end-date > div {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .action-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
}

.table-cell {
  &--image {
    width: 150px;
    text-align: center;

    img {
      object-fit: contain;
      width: 100px;
      height: 100px;
    }
  }

  &--end-date {
    text-align: center;
    min-width: 100px;

    div > div {
      font-weight: 600;
    }
  }

  &--email {
    width: 20%;
  }

  &--title {
    width: 30%;
  }
}

.table-cell--date > div {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .action-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
}

.controls {
  background-color: var(--color-white);
  border-radius: 20px 0 0 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);
  border-radius: 10px;
  width: 235px;
}

.create-button {
  background-color: var(--color-primary-700);
  color: var(--color-white);
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}

th {
  .table-cell--end-date {
    text-align: left;
  }
}
</style>
