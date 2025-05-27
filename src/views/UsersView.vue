<script setup lang="ts">
import { ref, computed } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import type { Roles, User } from '@/types/user'
import AppTable from '../components/AppTable.vue'
import AppDropDown from '@/components/AppDropDown.vue'
import { useModeratorStore } from '@/stores/moderator.ts'

const searchQuery = ref('')
const showActiveOnly = ref(false)

const moderatorStore = useModeratorStore()

const users = ref<User[]>([
  { id: 1, role: 'admin', name: 'username@mail.com' },
  { id: 2, role: 'user', name: 'username@mail.com' },
  { id: 3, role: 'admin', name: 'username@mail.com' },
])

const roleNames: Record<Roles, string> = {
  user: 'Пользователь',
  organizer: 'Организатор',
  admin: 'Администратор',
  owner: 'Владелец',
}

// Явно перебираем все роли — TS будет ругаться, если какая-то роль пропущена
const roles: Roles[] = ['user', 'organizer', 'admin', 'owner']

const rolesOptions = roles.map((role) => ({
  id: role,
  value: roleNames[role],
}))

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    const matchesSearch =
      searchQuery.value === '' || user.role.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesActive = !showActiveOnly.value
    return matchesSearch && matchesActive
  })
})

const changeRole = (id: number, newRole: string | number) => {
  const role = newRole as string as User['role']
  moderatorStore.patchUsersStatus([{ id, role }])
}
</script>

<template>
  <section class="user-table-section">
    <header class="search-header">
      <SearchBar v-model:active-only="showActiveOnly" v-model:search-query="searchQuery" />
    </header>
    <div class="wrapper">
      <AppTable class="user-table">
        <template #thead>
          <tr>
            <th class="table-cell--id">
              <div>ID</div>
            </th>
            <th class="table-cell--role">
              <div>Роль</div>
            </th>
            <th class="table-cell--name">
              <div>Email/tg</div>
            </th>
          </tr>
        </template>

        <template #tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td class="table-cell--id">
              <div>{{ user.id }}</div>
            </td>
            <td class="table-cell--role">
              <div>
                <AppDropDown
                  @change-value="(newRole) => changeRole(user.id, newRole.id)"
                  :start-value="rolesOptions.findIndex((el) => el.id == user.role)"
                  :options="rolesOptions"
                />
              </div>
            </td>
            <td class="table-cell--name">
              <div>{{ user.name }}</div>
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
  box-sizing: content-box;
  width: 460px;
}

.user-table-section {
  align-self: stretch;
  min-width: 240px;
  height: 100vh;
  padding-top: 20px;
  flex: 1;
  flex-basis: 60px;
}

.search-header {
  border-radius: 20px 0 0 0;
  background-color: var(--color-white);
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.table-cell--id {
  text-align: center;
  min-width: 100px;
}

.table-cell--role {
  text-align: center;
  width: 100%;
}

.table-cell--name {
  width: 100%;
}
</style>
