<script setup lang="ts">
import { ref } from 'vue';
import type { Event } from './types';
import AppCheckbox from "./AppCheckbox.vue"

const tableData = ref<Event[]>([
  {
    id: 1,
    active: false,
    top: false,
    userId: 10,
    email: 'username@mail.com',
    title: 'Быстрые свидания в Москве',
    startDate: '15.04.2025',
  },
  {
    id: 2,
    active: false,
    top: false,
    userId: 12,
    email: 'username@mail.com',
    title: 'Быстрые свидания в Москве',
    startDate: '15.04.2025',
  },
  {
    id: 3,
    active: false,
    top: false,
    userId: 13,
    email: 'username@mail.com',
    title: 'Быстрые свидания в Москве',
    startDate: '15.04.2025',
  }
]);
</script>

<template>
  <div class="table-container">
    <div class="table-wrapper">
      <!-- Header Row -->
      <div class="table-row header-row">
        <div class="cell id-cell">
          <div class="cell-content">ID</div>
        </div>
        <div class="cell active-cell">
          <div class="cell-content">Active</div>
        </div>
        <div class="cell top-cell">
          <div class="cell-content">Топ</div>
        </div>
        <div class="cell userid-cell">
          <div class="cell-content">user_id</div>
        </div>
        <div class="cell email-cell">
          <div class="cell-content">E-mail</div>
        </div>
        <div class="cell title-cell">
          <div class="cell-content">Название</div>
        </div>
        <div class="cell date-cell">
          <div class="cell-content">Дата начала</div>
        </div>
      </div>

      <!-- Data Rows -->
      <div class="table-body">
        <div v-for="row in tableData" :key="row.id" class="table-row data-row">
          <div class="cell id-cell">
            <div class="cell-content">{{ row.id }}</div>
          </div>

          <AppCheckbox v-model="row.active" />
          <AppCheckbox v-model="row.top" />

          <div class="cell userid-cell">
            <div class="cell-content">{{ row.userId }}</div>
          </div>

          <div class="cell email-cell">
            <div class="cell-content">{{ row.email }}</div>
          </div>

          <div class="cell title-cell">
            <div class="cell-content">{{ row.title }}</div>
          </div>

          <div class="cell date-cell">
            <div class="cell-content">{{ row.startDate }}</div>
          </div>

          <div class="cell action-cell">
            <div class="action-content">
              <img src="/icons/delete.png" class="action-icon" alt="Action" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.table-container {
  background-color: var(--color-gray-100);
  display: flex;
  padding: vw(20);
  align-items: start;
  gap: vw(20);
  overflow: hidden;
  justify-content: start;
  height: 100%;
}

.table-wrapper {
  border-radius: vw(10);
  min-width: vw(240);
  width: 100%;
  overflow: hidden;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

.table-row {
  display: flex;
  width: 100%;
  align-items: stretch;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;
  padding: vw(10);
}

.header-row {
  border-radius: vw(10);
  border: 1px solid var(--color-gray-400);
  background-color: var(--color-gray-300);
}

.data-row {
  border-radius: vw(20);
  background-color: var(--color-white);
  margin-top: vw(10);
}

.cell {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-size: vw(16);
  color: var(--color-gray-900);
  font-weight: 400;
  white-space: nowrap;
  line-height: 1;
  justify-content: center;
}

.cell-content {
  align-self: stretch;
  flex: 1;
  width: 100%;
  padding: vw(10);
  gap: vw(10);
  overflow: hidden;
}

.id-cell {
  width: vw(40);
  text-align: center;
}

.active-cell,
.top-cell {
  width: vw(66);
}

.userid-cell {
  width: vw(73);
}

.email-cell {
  width: vw(235);
}

.title-cell {
  min-width: vw(240);
  flex: 1;
}

.date-cell {
  width: vw(155);
}

.action-cell {
  width: vw(40);
}

.action-content {
  display: flex;
  width: 100%;
  padding: vw(10);
  align-items: center;
  gap: vw(10);
  overflow: hidden;
  justify-content: start;
}

.action-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: vw(20);
  align-self: stretch;
  margin: auto;
  flex: 1;
}

.table-body {
  margin-top: vw(10);
  width: 100%;
}
</style>
