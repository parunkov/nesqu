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
