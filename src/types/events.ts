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
  page: number | null;
  types?: string;
  cities?: string;
  date_from?: string;
  date_to?: string
}

export type EventCard = {
  id: number;
  name: string;
  description: string;
  address: string;
  date_from: string; // ISO формат
  date_to: string | null;
  image: string;
  is_hiden: boolean;
  top: boolean;
  favorite: boolean;
  stat_fave: number;
  stat_redirect: number;
  stat_view_pwa: number;
  stat_view_tg: number;
  user_id: string;
  user_name: string;
}


export type Event = {
  city: number;
  types: number[];
  name: string;
  contacts?: string[];
  datetime: DateTime[];
  prices?: string[];
  images?: string[];
  address?: string;
  description?: string;
};

export type EventStatus =  {
  "id": number,
  "top": boolean,
  "is_hiden": boolean,
  "is_banned": boolean,
}
