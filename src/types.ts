// 타입 정의
export type Theme = "light" | "dark";

export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Notification {
  id: number;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

// ThemeContext 타입 정의
export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}
