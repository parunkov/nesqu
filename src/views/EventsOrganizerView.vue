<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppTable from '@/components/AppTable.vue'
import { useEventsStore } from '@/stores/events.ts'
import type { EventCard } from '@/types/events.ts'
import DeleteButton from '@/components/DeleteButton.vue'
import router from '@/router'

const infiniteScrollTrigger = ref(null)
let observer: IntersectionObserver
const eventStore = useEventsStore()

const tableData = ref<EventCard[]>([])

eventStore.getEvents().then((res) => tableData.value.push(...res))

const searchQuery = ref('')
const activeOnly = ref(false)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filterEvents = () => {
  filteredEvents.value = tableData.value.filter(
    (el) =>
      (activeOnly.value === el.is_hiden || !activeOnly.value) &&
      el.user_name.includes(searchQuery.value),
  )
}

const filteredEvents = ref(tableData.value)
let firstCall = false
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
    <h1 class="title">Мероприятия</h1>
    <button @click="goTo('event-create')" class="create-button">+ Создать Мероприятие</button>
  </header>
  <AppTable class="event-table">
    <template #thead>
      <tr class="table-header">
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
      <tr
        v-for="(row, index) in filteredEvents"
        @click.stop="editEvent(row.id)"
        :class="{ 'is-warning': row.is_validated === null, 'is-error': row.is_validated === false }"
        :key="row.id"
      >
        <td class="table-cell--image">
          <img :src="row.image" />
        </td>
        <td class="table-cell--name">
          {{ row.name }}
        </td>
        <td class="table-cell--start-date">
          {{ row.date_from }}
        </td>
        <td class="table-cell--end-date">
          <div>
            <div>{{ row.date_to }}</div>
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
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 10px;

  .title {
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.9px;
    color: var(--color-black);
    margin: 0;
    flex: 1;
    display: flex;
    align-items: center;
  }
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
  border: 1px solid var(--color-primary-700);
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    opacity: 0.8;
  }
}

th {
  .table-cell--end-date {
    text-align: left;
  }
}
</style>
