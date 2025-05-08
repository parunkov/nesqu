<script setup lang="ts">
import { ref, computed } from "vue";
import SearchBar from "./SearchBar.vue";
import AppCheckbox from "./AppCheckbox.vue";
import type { User } from "./types";

const searchQuery = ref("");
const showActiveOnly = ref(false);

const users = ref<User[]>([
  { id: 1, active: false, email: "username@mail.com" },
  { id: 2, active: true, email: "username@mail.com" },
  { id: 3, active: false, email: "username@mail.com" },
]);

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    const matchesSearch =
      searchQuery.value === "" ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesActive = !showActiveOnly.value || user.active;
    return matchesSearch && matchesActive;
  });
});

const handleSearch = (query: string) => {
  searchQuery.value = query;
};

const handleToggleActive = (value: boolean) => {
  showActiveOnly.value = value;
};

</script>

<template>
  <section class="user-table-section">
    <header class="search-header">
      <SearchBar @search="handleSearch" @toggle-active="handleToggleActive" />
    </header>
    <main class="table-container">
      <div class="user-table">
        <div class="table-header">
          <div class="table-row">
            <div class="table-cell table-cell--id">
              <div class="table-cell__content">ID</div>
            </div>
            <div class="table-cell table-cell--active">
              <div class="table-cell__content">Active</div>
            </div>
            <div class="table-cell table-cell--email">
              <div class="table-cell__content">email/tg-name</div>
            </div>
          </div>
        </div>
        <div class="table-body">
          <div v-for="user in filteredUsers" :key="user.id" class="table-row table-row--data">
            <div class="table-cell table-cell--id">
              <div class="table-cell__content">{{ user.id }}</div>
            </div>
            <div class="table-cell table-cell--active">
              <div class="table-cell__content table-cell__content--centered">
                <AppCheckbox v-model="user.active" />
              </div>
            </div>
            <div class="table-cell table-cell--email">
              <div class="table-cell__content">{{ user.email }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<style scoped lang="scss">
.user-table-section {
  align-self: stretch;
  min-width: vw(240);
  height: 100vh;
  padding-top: vw(20);
  flex: 1;
  flex-shrink: 1;
  flex-basis: vw(60);
}

.search-header {
  border-radius: vw(20) 0 0 0;
  background-color: var(--color-white);
  display: flex;
  width: 100%;
  padding: vw(20);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.table-container {
  background-color: var(--color-gray-100);
  display: flex;
  width: 100%;
  padding: vw(20);
  align-items: flex-start;
  gap: vw(20);
  overflow: hidden;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
}

.user-table {
  border-radius: vw(10);
  min-width: vw(240);
  width: vw(460);
  overflow: hidden;
}

.table-header {
  width: 100%;

  font-size: vw(15);
  color: var(--color-black);
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;
}

.table-header .table-row {
  border: vw(1) solid var(--color-gray-400);
}

.table-row {
  border-radius: vw(10);
  display: flex;
  width: 100%;
  align-items: flex-start;
  overflow: hidden;
  justify-content: flex-start;
}

.table-row--data {
  border-radius: vw(20);
  background-color: var(--color-white);
  padding: vw(10);
  align-items: stretch;
  margin-top: vw(10);
}

.table-cell {
  background-color: var(--color-gray-300);
  border-left: vw(1) solid var(---color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.table-row--data .table-cell {
  background-color: transparent;
  border-left: none;
}

.table-cell--id {
  width: vw(50);
  text-align: center;
}

.table-cell--active {
  width: vw(66);
}

.table-cell--email {
  min-width: vw(240);
  width: vw(344);
}

.table-cell__content {
  align-self: stretch;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  width: 100%;
  padding: vw(10);
  gap: vw(10);
  overflow: hidden;
}

.table-cell__content--centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-body {
  margin-top: vw(10);
  width: 100%;
}

.table-row--data .table-cell--id,
.table-row--data .table-cell--email {

  font-size: vw(16);
  color: var(--color-gray-800);
  font-weight: 400;
  white-space: nowrap;
  line-height: 1;
}

.table-row--data .table-cell--id {
  text-align: center;
}
</style>
