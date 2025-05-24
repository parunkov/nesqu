import client from '@/http/client.ts'
import type { EventCard, EventData, EventsFilter, EventStatus, EventInfo } from '@/types/events'
import { EVENT } from '@/api/endpoints.ts'

export default class EventService {
  async addEvent(eventData: EventData): Promise<{ id: number }> {
    return client.post(EVENT.ADD_EVENT, eventData)
  }

  async getEvents(params: EventsFilter): Promise<{ next: number | null; results: EventCard[] }> {
    return client.get(EVENT.LIST, { params })
  }

  async getEvent(id: number): Promise<EventInfo> {
    return client.get(EVENT.EVENT.replace('{id}', String(id)))
  }

  async deleteEvent(id: number): Promise<void> {
    return client.delete(EVENT.DELETE.replace('{id}', String(id)))
  }

  async uploadPics(pics: string[], id: number): Promise<void> {
    const formData = new FormData()
    pics.forEach((pic) => formData.append('image', pic))

    return client.patch(EVENT.PICS.replace('{id}', String(id)), formData, {
      'Content-Type': 'multipart/form-data',
    })
  }

  async updateEventStatus(updateStatusData: EventStatus[]): Promise<void> {
    return client.patch(EVENT.STATUS, updateStatusData)
  }

  async updateEvent(event: EventInfo, id: number): Promise<[]> {
    return client.patch(EVENT.UPDATE.replace('{id}', String(id)), event)
  }
}
