import { Themes } from './Theme';

type StoreResponse<T = any> = {
  data: T;
  error: any | null;
} | void;

export interface User {
  id: string;
  fullName: string;
  email: string;
  authToken?: string;
  subscriptionStatus: string;
}

export interface ThemeStore {
  /* States */
  theme: Themes;

  /* Computed States */
  // computed: {};

  /* Functions */
  setTheme: (theme: Themes) => StoreResponse;
}

export interface AuthStore {
  isAuth: boolean;
  user: User | null;
  authToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: any | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  unlock: (password: string) => void;
  verify: () => void;
  initializeAuth: () => void;
  login: (user: User | null) => void;
}
