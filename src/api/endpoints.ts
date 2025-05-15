const AUTH = {
  LOGIN: "/account/mail/login",
  LIST: '/super/user/list/'
} as const


const EVENTS = {
  ADD_EVENT: '/organizer/event/new/',
  LIST: '/organizer/event/list/',
  STATUS: '/organizer/event/status/',
} as const

const EVENT = {
  PICS: '/organizer',
  UPDATE: '/organizer/update/',
  DELETE: '/organizer/event/',
} as const

export {
  EVENTS,
  EVENT,
  AUTH,
}
