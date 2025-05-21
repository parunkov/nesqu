import { defineStore } from "pinia";
import { ref } from "vue";
import ModeratorService from '@/api/moderator.ts'
import { requestWrapper } from "@/utils/requestWrapper";
import type {User, UsersFilters} from "@/types/user";


export const useEventsStore = defineStore("events", () => {
  const isLoading = ref(true);
  const moderatorService = new ModeratorService();
  const filters = ref<Partial<UsersFilters>>({page: 1})
  const nextPage = ref(true)
  const users = ref<User[]>([])

  async function getUsers() {
    filters.value.page = 0
    nextPage.value = true
    return loadMoreUsers()
  }

  async function loadMoreUsers() {
    if (nextPage.value) {
      requestWrapper(isLoading, () => moderatorService.getUsers()
        .then(data => {
          //filters.value.page = data.next
          //nextPage.value = data.next !== null
          nextPage.value = false
          users.value.push(...data)
        })
      )
    }
  }

  async function getCitiesStatistics() {
    return requestWrapper(isLoading, () => moderatorService.getCityStatistics())
  }

  async function getDaysStatistics() {
    return requestWrapper(isLoading, () => moderatorService.getDaysStatistics())
  }

  async function patchUsersStatus(usersStatus: Pick<User, 'id' | 'role'>[]) {
    return requestWrapper(isLoading, () => moderatorService.patchUsersStatus(usersStatus))
  }

  return { isLoading, users, getUsers, loadMoreUsers, nextPage, filters, getCitiesStatistics, getDaysStatistics, patchUsersStatus };
});
