export type AuthToken = {
  "access_token": string,
  "token_type": string,
}

export type User = {
  id: number,
  name: string,
  role?: string,
}

export type UsersFilters = Partial<Omit<User, 'id'>> & {page: number}
