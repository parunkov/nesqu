const AUTH = {
  LOGIN: "/account/mail/login/",
  LIST: '/super/user/list/'
} as const

const MODERATOR = {
  USERS_STATUS: '/moderator/user/status/',
  STATS_CITIES: '/moderator/stats/cities/',
  STAT_DAYS: '/moderator/stats/days/',
  LIST: '/moderator/user/list/'
} as const

const EVENT = {
  PICS: '/event/{id}/pics/',
  UPDATE: 'event/{id}/update/',
  DELETE: '/event/{id}/',
  ADD_EVENT: '/event/new/',
  LIST: '/event/list/',
  STATUS: '/event/status/',
} as const

export {
  MODERATOR,
  EVENT,
  AUTH,
}
