<!--suppress ALL -->














<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SearchBar from "./SearchBar.vue";
import AppTable from '@/components/AppTable.vue'
import AppCheckbox from '@/components/AppCheckbox.vue'
import { useEventsStore } from '@/stores/events.ts'
import type { EventCard } from '@/types/events.ts'
import DeleteButton from '@/components/DeleteButton.vue'

const infiniteScrollTrigger = ref(null)
let observer: IntersectionObserver
const eventStore = useEventsStore()
const emit = defineEmits(['changeMode'])

const tableData = ref<EventCard[]>([])

const addEvent = () => emit('changeMode')

eventStore.getEvents().then((res) => tableData.value.push(...res))

const searchQuery = ref('')
const activeOnly = ref(false)


const filterEvents = () =>{
  filteredEvents.value = tableData.value.filter((el) => ((activeOnly.value  === el.is_hiden) || !activeOnly.value) && el.user_name.includes(searchQuery.value))
}

const filteredEvents = ref(tableData.value)

let firstCall = false
onMounted(() => {
  setTimeout(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && eventStore.nextPage && !firstCall) {
        eventStore.loadMore()
      }
      firstCall = false
    }, {
      rootMargin: '100px',
    })

    if (infiniteScrollTrigger.value)
      observer.observe(infiniteScrollTrigger.value)
  }, 500)

})

onBeforeUnmount(() => {
  if (observer && infiniteScrollTrigger.value)
    observer.unobserve(infiniteScrollTrigger.value)
})

</script>

<template>
  <header class="controls">
    <SearchBar v-model:search-query="searchQuery" v-model:activeOnly="activeOnly" @search="filterEvents"/>
    <button @click="addEvent" class="create-button">+ Создать Мероприятие</button>
  </header>
  <AppTable class="event-table">
    <template #thead>
    <tr>
      <th class=" table-cell--id">
        <div>ID</div>
      </th>
      <th class=" table-cell--active">
        <div>Active</div>
      </th>
      <th class=" table-cell--top">
        <div>Топ</div>
      </th>
      <th class=" table-cell--user">
        <div>User ID</div>
      </th>
      <th class=" table-cell--email">
        <div>E-mail</div>
      </th>
      <th class=" table-cell--title">
        <div>Название</div>
      </th>
      <th class=" table-cell--date">
        <div>Дата начала</div>
      </th>
    </tr>
  </template>
  <template #tbody>
    <tr v-for="row in filteredEvents" :key="row.id">
      <td class=" table-cell--id">
        <div>{{ row.id }}</div>
      </td>
      <td class=" table-cell--active">
        <div><AppCheckbox v-model="row.is_hiden" /></div>
      </td>
      <td class=" table-cell--top">
        <div><AppCheckbox v-model="row.top" /></div>
      </td>
      <td class=" table-cell--user">
        <div>{{ row.user_id }}</div>
      </td>
      <td class=" table-cell--email">
        <div>{{ row.user_name }}</div>
      </td>
      <td class=" table-cell--title">
        <div>{{ row.name }}</div>
      </td>
      <td class=" table-cell--date">
        <div>
        <div>{{ row.date_from }}</div>
        <div class="cell action-cell">
          <DeleteButton class="delete"/>
        </div>
        </div>
      </td>
    </tr>
  </template>
  </AppTable>
  <div ref="infiniteScrollTrigger"></div>
</template>

<style scoped lang="scss">
.delete {
}

.table-cell--email {
  width: 20%;
}
.table-cell--title {
  width: 30%;
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

.table-container {
  background-color: var(--color-gray-100);
  overflow: hidden;
  flex: 1;
}

</style>
