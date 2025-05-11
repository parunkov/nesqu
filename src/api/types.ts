export type AuthToken = {
  "access_token": string,
  "token_type": string,
}

type DateTime = {
  from: string,
  to?: string
}

export type EventData = {
  city: number,
  types: number[],
  name: string,
  contacts?: string[],
  datetime:  DateTime[],
  prices?: string[],
  address?: string,
  description?: string,
}

export type EventsFilter = {
  page: number;
  types?: string;
  cities?: string;
  date_from?: string;
  date_to?: string
}

export type EventCard = {
  id: number;
  top: boolean;
  address: string | null;
  name: string;
  date_from: string;
  date_to?: string;
  image: string;
  description: string;
  favorite?: boolean;
  is_hiden: boolean;
  user_name: string;
  user_id: string;
}
