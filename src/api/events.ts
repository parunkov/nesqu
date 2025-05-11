import client from '@/http/client.ts'
import type { EventCard, EventData, EventsFilter } from '@/api/types.ts'
import { EVENT, EVENTS } from '@/api/endpoints.ts'

export default class EventService {
  async addEvent(eventData: EventData): Promise<{id: number}> {
    return client.post(EVENTS.ADD_EVENT, eventData)
  }

  async getEvents(params: EventsFilter): Promise<EventCard[]> {
    return client.get(EVENTS.LIST, {params})
  }

  async deleteEvent(id: number): Promise<void> {
    return client.delete(EVENT.DELETE+id)
  }

  async uploadPics(pics: string[]): Promise<void> {
    const formData = new FormData()
    pics.forEach(pic => formData.append('image', pic))

    return client.patch(EVENT.PICS, formData, {
      'Content-Type': 'multipart/form-data'
    })
  }

  async updateEvent(eventData: Partial<EventData>): Promise<void> {
    return client.patch(EVENT.UPDATE, eventData)
  }

  async updateEventStatus(updateStatusData: Pick<EventCard, 'id' | 'is_hiden' | 'top'>): Promise<void> {
    return client.patch(EVENTS.STATUS, updateStatusData)
  }
}
