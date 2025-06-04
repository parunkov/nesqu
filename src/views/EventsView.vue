<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import AppTable from '@/components/AppTable.vue'
import AppCheckbox from '@/components/AppCheckbox.vue'
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

const statusToogle = (event: EventCard) => {
  console.log()
  eventStore.updateEventsStatus([
    {
      id: event.id,
      is_validated: false,
      is_hiden: event.is_hiden,
      top: event.top,
    },
  ])
}

const goTo = (name: string) => router.push({ name: name })

const editEvent = (id: number) => router.push({ name: 'event-edit', params: { id: id } })
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}
</script>

<template>
  <header class="controls">
    <SearchBar v-model:search-query="searchQuery" v-model:activeOnly="activeOnly" @search="filterEvents" />
    <button @click="goTo('event-create')" class="create-button">+ Создать Мероприятие</button>
  </header>
  <AppTable class="event-table">
    <template #thead>
      <tr class="table-header">
        <th class="table-cell--id">
          <div>ID</div>
        </th>
        <th class="table-cell--active">
          <div>Active</div>
        </th>
        <th class="table-cell--top">
          <div>Топ</div>
        </th>
        <th class="table-cell--user">
          <div>User ID</div>
        </th>
        <th class="table-cell--email">
          <div>E-mail</div>
        </th>
        <th class="table-cell--title">
          <div>Название</div>
        </th>
        <th class="table-cell--date">
          <div>Дата начала</div>
        </th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="(row, index) in filteredEvents" @click.stop="editEvent(row.id)"
        :class="{ 'is-warning': row.is_validated === null, 'is-error': row.is_validated === false }" :key="row.id">
        <td class="table-cell--id">
          <div>{{ row.id }}</div>
        </td>
        <td class="table-cell--active">
          <div>
            <AppCheckbox @click="statusToogle(row)" v-model="row.is_hiden" />
          </div>
        </td>
        <td class="table-cell--top">
          <div>
            <AppCheckbox @click="statusToogle(row)" v-model="row.top" />
          </div>
        </td>
        <td class="table-cell--user">
          <div>{{ row.user_id }}</div>
        </td>
        <td class="table-cell--email">
          <div>{{ row.user_name }}</div>
        </td>
        <td class="table-cell--title">
          <div>{{ row.name }}</div>
        </td>
        <td class="table-cell--date">
          <div>
            <div>{{ formatDate(row.date_from) }}</div>
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
.table-header {
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  background-color: var(--color-gray-2);
  height: 38px;

  th {
    border: 1px solid var(--color-gray-3);
    border-bottom-color: var(--color-gray-3);
    padding: 9px 10px;

    &:first-child {
      border-left-color: var(--color-gray-3);
    }

    &:last-child {
      border-right-color: var(--color-gray-3);
    }
  }

  .table-cell--id,
  .table-cell--active,
  .table-cell--top,
  .table-cell--user,
  .table-cell--email {
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    border-left: 1px solid var(--color-gray-3);
    text-align: left;

    div {
      font-weight: 500;
    }
  }

  .table-cell--id,
  .table-cell--active,
  .table-cell--top,
  .table-cell--user {
    text-align: center;
  }

  .table-cell--start-date {
    width: 155px;
  }

  .table-cell--end-date {
    width: 225px;
  }
}

.table-cell {
  &--id {
    text-align: center;
    width: 73px;

    div {
      margin: 0;
    }
  }

  &--active,
  &--top {
    width: 66px;

    div {
      margin: 0;
    }

    .content-wrap {
      justify-content: center;
    }
  }

  &--user {
    text-align: center;
    width: 84px;  

    div {
      margin: 0;
    }
  }

  &--email {
    width: 20%; 

    div {
      margin: 0;
    }
  }

  &--date {
    width: 205px;
    padding-left: 10px;

    div {
      margin: 0;
      margin-right: 10px;
    }
  }
}

.table-cell--date>div {
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
  padding: 19px 20px;
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
</style>
