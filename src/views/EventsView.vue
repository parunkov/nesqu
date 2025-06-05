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
          <div>Создано</div>
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
  font-size: vw(15);
  font-weight: 500;
  line-height: vw(20);
  background-color: var(--color-gray-2);
  height: vw(38);

  th {
    border: vw(1) solid var(--color-gray-3);
    border-bottom-color: var(--color-gray-3);
    padding: vw(9) vw(10);

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
    font-size: vw(15);
    font-weight: 500;
    line-height: vw(20);
    border-left: vw(1) solid var(--color-gray-3);
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
    width: vw(155);
  }

  .table-cell--end-date {
    width: vw(225);
  }
}

.table-cell {
  &--id {
    text-align: center;
    width: vw(73);

    div {
      margin: 0;
    }
  }

  &--active,
  &--top {
    width: vw(66);

    div {
      margin: 0;
    }

    .content-wrap {
      justify-content: center;
    }
  }

  &--user {
    text-align: center;
    width: vw(84);  

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
    width: vw(205);
    padding-left: vw(10);

    div {
      margin: 0;
      margin-right: vw(10);
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
  border-radius: vw(20) 0 0 0;
  padding: vw(19) vw(20);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: vw(20);
}

.search-bar {
  display: flex;
  align-items: center;
  gap: vw(10);
  padding: vw(10);
  background-color: var(--color-gray-100);
  border: vw(1) solid var(--color-gray-300);
  border-radius: vw(10);
  width: vw(235);
}

.create-button {
  background-color: var(--color-primary-700);
  color: var(--color-white);
  border: vw(1) solid var(--color-primary-700);
  border-radius: vw(10);
  padding: vw(10);
  font-size: vw(18);
  font-weight: 500;
  line-height: vw(20);
  letter-spacing: vw(0.4);
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
