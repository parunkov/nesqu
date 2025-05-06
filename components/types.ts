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