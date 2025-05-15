import client from '@/http/client.ts'
import type { EventCard, EventData, EventsFilter, EventStatus } from '@/types/events'
import { EVENT, EVENTS } from '@/api/endpoints.ts'

export default class EventService {
  async addEvent(eventData: EventData): Promise<{id: number}> {
    return client.post(EVENTS.ADD_EVENT, eventData)
  }

  async getEvents(params: EventsFilter): Promise<{next: number | null, results: EventCard[]}> {
    return client.get(EVENTS.LIST, {params})
  }

  async deleteEvent(id: number): Promise<void> {
    return client.delete(EVENT.DELETE+`${id}/`)
  }

  async uploadPics(pics: string[], id: number): Promise<void> {
    const formData = new FormData()
    pics.forEach(pic => formData.append('image', pic))

    return client.patch(EVENT.PICS + `/event/${id}/pics/`, formData, {
      'Content-Type': 'multipart/form-data'
    })
  }
  async updateEventStatus(updateStatusData: EventStatus[]): Promise<void> {
    return client.patch(EVENTS.STATUS, updateStatusData)
  }
}
