<script setup lang="ts">
import { ref, computed } from "vue";
import SearchBar from "./SearchBar.vue";
import AppCheckbox from "./AppCheckbox.vue";
import type { User } from "./types";
import AppTable from "./AppTable.vue";

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
    <div class="wrapper">
    <AppTable class="user-table">
      <template #thead>
        <tr>
          <th class=" table-cell--id">
            <div>ID</div>
          </th>
          <th class=" table-cell--active">
            <div>Active</div>
          </th>
          <th class=" table-cell--email">
            <div>Email/TG</div>
          </th>
        </tr>
      </template>

      <template #tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td class=" table-cell--id">
            <div>{{ user.id }}</div>
          </td>
          <td class=" table-cell--active">
            <div><AppCheckbox v-model="user.active" /></div>
          </td>
          <td class=" table-cell--email">
            <div>{{ user.email }}</div>
          </td>
        </tr>
      </template>
    </AppTable>
    </div>
  </section>
</template>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  background-color: var(--color-gray-100);
}

.user-table {
  max-width: vw(460);
}

.user-table-section {
  align-self: stretch;
  min-width: vw(240);
  height: 100vh;
  padding-top: vw(20);
  flex: 1;
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


.table-cell--id {
  width: auto;
  text-align: center;
}

.table-cell--active {
  display: flex;
  width: min-content;
  justify-self: center;
}

.table-cell--email {
  width: 100%
}
</style>
