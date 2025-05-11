const AUTH = {
  LOGIN: "/account/mail/login",
} as const


const EVENTS = {
  ADD_EVENT: '/event/new',
  LIST: '/event/list',
  STATUS: '/status',
} as const

const EVENT = {
  PICS: 'pics',
  UPDATE: '/update',
  DELETE: '/',
} as const

export {
  EVENTS,
  EVENT,
  AUTH,
}
