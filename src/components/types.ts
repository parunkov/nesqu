export interface User {
  id: number;
  active: boolean;
  email: string;
}

export interface MenuItemProps {
  icon: string;
  title: string;
  isActive?: boolean;
}

export interface Event {
    id: number,
    active: boolean,
    top: boolean,
    userId: number,
    email: string,
    title: string,
    startDate: string,
}

export interface EventFormData {
  city: string;
  startDate: string;
  endDate: string;
  price: number;
  isFree: boolean;
  title: string;
  description: string;
  photos: string[];
  categories: string[];
}

export interface NavigationItem {
  icon: string;
  title: string;
  isActive?: boolean;
}
