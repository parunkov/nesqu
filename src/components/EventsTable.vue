<!--suppress ALL -->














<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from "./SearchBar.vue";
import AppTable from '@/components/AppTable.vue'
import AppCheckbox from '@/components/AppCheckbox.vue'

const emit = defineEmits(['changeMode'])

interface EventRow {
  id: number;
  active: boolean;
  top: boolean;
  userId: number;
  email: string;
  title: string;
  date: string;
}

const addEvent = () => emit('changeMode')

const searchQuery = ref('')
const activeOnly = ref(false)


const filterEvents = () =>{
  filteredEvents.value = tableData.value.filter((el) => ((activeOnly.value  === el.active) || !activeOnly.value) && el.email.includes(searchQuery.value))
}

const tableData = ref<EventRow[]>([
  {
    id: 1,
    active: false,
    top: false,
    userId: 10,
    email: "username@mail.com",
    title: "Быстрые свидания в Москве",
    date: "15.04.2025",
  },
  {
    id: 2,
    active: false,
    top: false,
    userId: 12,
    email: "username@mail.com",
    title: "Быстрые свидания в Москве",
    date: "15.04.2025",
  },
  {
    id: 3,
    active: false,
    top: false,
    userId: 13,
    email: "username@mail.com",
    title: "Быстрые свидания в Москве",
    date: "15.04.2025",
  },
]);

const filteredEvents = ref(tableData.value)
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
      <div><AppCheckbox v-model="row.active" /></div>
    </td>
    <td class=" table-cell--top">
      <div><AppCheckbox v-model="row.top" /></div>
    </td>
    <td class=" table-cell--user">
      <div>{{ row.userId }}</div>
    </td>
    <td class=" table-cell--email">
      <div>{{ row.email }}</div>
    </td>
    <td class=" table-cell--title">
      <div>{{ row.title }}</div>
    </td>
    <td class=" table-cell--date">
      <div>
      <div>{{ row.date }}</div>
      <div class="cell action-cell">
        <img
          src="/icons/delete.svg"
          alt="Actions" class="action-icon" />
      </div>
      </div>
    </td>
  </tr>
</template>
  </AppTable>
</template>

<style scoped lang="scss">

.table-cell--email {
  width: 40%;
}
.table-cell--title {
  width: 60%;
}

.table-cell--date > div {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .action-cell {
    display: flex;
    align-items: center;
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
