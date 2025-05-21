import client from '@/http/client.ts'
import type { CityStatistics } from '@/types/city.ts'
import { MODERATOR } from '@/api/endpoints.ts'
import type { User } from '@/types/user.ts'

export default class ModeratorService {
  async getUsers(): Promise<User[]> {
    return client.get(MODERATOR.LIST)
  }

  async getCityStatistics(): Promise<CityStatistics[]> {
    return client.get(MODERATOR.STATS_CITIES)
  }

  async getDaysStatistics(): Promise<unknown> {
    return client.get(MODERATOR.STATS_CITIES)
  }

  async patchUsersStatus(statusIndo: Pick<User, 'id' | 'role'>[]): Promise<unknown> {
    return client.patch(MODERATOR.USERS_STATUS, statusIndo)
  }
}
