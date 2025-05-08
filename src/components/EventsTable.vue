<template>
  <header class="controls">
    <SearchBar />
    <button @click="addEvent" class="create-button">+ Создать Мероприятие</button>
  </header>
  <section class="table-container">
    <header class="table-header">
      <div class="header-row">
        <div class="header-cell id-cell">ID</div>
        <div class="header-cell checkbox-cell">Active</div>
        <div class="header-cell checkbox-cell">Топ</div>
        <div class="header-cell">user_id</div>
        <div class="header-cell email-cell">E-mail</div>
        <div class="header-cell title-cell">Название</div>
        <div class="header-cell date-cell">Дата начала</div>
      </div>
    </header>

    <div class="table-body">
      <TableRow v-for="row in tableData" :key="row.id" :row-data="row" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TableRow from "./TableRow.vue";
import SearchBar from "./SearchBar.vue";

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
</script>

<style scoped lang="scss">
.controls {
  background-color: var(--color-white);
  border-radius: vw(20) 0 0 0;
  padding: vw(20);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: vw(20);
}

.search-group {
  display: flex;
  align-items: center;
  gap: vw(20);
}

.search-bar {
  display: flex;
  align-items: center;
  gap: vw(10);
  padding: vw(10);
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);
  border-radius: vw(10);
  width: vw(235);
}

.search-input {
  border: none;
  background: none;
  flex: 1;

  font-size: vw(16);
  color: var(--color-gray-900);
}

.search-input::placeholder {
  color: var(--color-gray-900);
}

.search-icon,
.clear-icon {
  width: vw(20);
  height: vw(20);
  object-fit: contain;
}

.active-filter {
  display: flex;
  align-items: center;
  gap: vw(10);

  font-size: vw(16);
  color: var(--color-gray-900);
}

.create-button {
  background-color: var(--color-primary-700);
  color: var(--color-white);
  border: none;
  border-radius: vw(10);
  padding: vw(10);

  font-size: vw(18);
  font-weight: 500;
  cursor: pointer;
}

.table-container {
  background-color: var(--color-gray-100);
  overflow: hidden;
  flex: 1;
}

.table-header {

  font-size: vw(15);
  color: var(--color-black);
  font-weight: 500;
  line-height: 1;
}

.header-row {
  display: flex;
  border: 1px solid var(--color-gray-400);
}

.header-cell {
  background-color: var(--color-gray-300);
  padding: vw(10);
  border-left: 1px solid var(--color-gray-400);
  display: flex;
  align-items: center;
}

.id-cell {
  width: vw(40);
  justify-content: center;
}

.checkbox-cell {
  width: vw(66);
  justify-content: center;
}

.email-cell {
  width: vw(235);
}

.title-cell {
  flex: 1;
  min-width: vw(240);
}

.date-cell {
  width: vw(155);
}

.table-body {
  margin-top: vw(10);
}
</style>
