import { addMinutes } from 'date-fns';
import { LockLocalStorage } from 'modules/Lock/constants';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { WEB_PASSWORD } from 'shared/configs/App';
import { AuthStore, User as StoreUser } from 'shared/types/Store';
import LocalStorageUtil from 'shared/utils/LocalStorage';

interface User extends StoreUser {
  about?: string;
  companies?: string;
  createdAt?: string;
  currentPeriodEnd?: string;
  currentPeriodStart?: string;
  customUrl?: string;
  firstName?: string;
  imdbUrl?: string;
  instagramUrl?: string;
  lastName?: string;
  linkedinUrl?: string;
  phone?: string;
  planName?: string;
  planPrice?: string;
  planInterval?: string;
  primaryGoal?: string;
  profilePhoto?: string;
  supportEmail?: string;
  twitterUrl?: string;
  updatedAt?: string;
  websiteUrl?: string;
  stripeId?: string;
}

export const useAuthStore = create(
  immer<AuthStore>(set => ({
    /* States */
    isAuth: false,
    user: null as User | null,
    authToken: null as string | null,
    isAuthenticated: false,
    loading: false,
    error: null,

    /* Functions */
    setUser: (user: User | null) => {
      set((state: AuthStore) => {
        state.user = user;
        state.isAuth = !!user;
        if (user?.authToken) {
          state.authToken = user.authToken;
          LocalStorageUtil.set('authToken', user.authToken);
        }
      });
    },

    logout: () => {
      set((state: AuthStore) => {
        state.user = null;
        state.isAuth = false;
        state.authToken = null;
        LocalStorageUtil.set('authToken', '');
      });
    },

    unlock: (password: string) => {
      set((state: AuthStore) => {
        if (password === WEB_PASSWORD) {
          state.isAuth = true;
          const expiration = addMinutes(new Date(), 15);
          LocalStorageUtil.set(LockLocalStorage.Expiration, expiration);
        }
      });
    },

    verify: () => {
      set((state: AuthStore) => {
        const currentExpiration = LocalStorageUtil.get(LockLocalStorage.Expiration);
        const hasExpiration = !!currentExpiration;
        const expiration = hasExpiration ? new Date(currentExpiration) : new Date();
        const now = new Date();

        if (now.getTime() >= expiration.getTime()) {
          state.isAuth = false;
          LocalStorageUtil.set(LockLocalStorage.Expiration, '');
        } else {
          state.isAuth = true;
        }
      });
    },

    initializeAuth: () => {
      set((state: AuthStore) => {
        const storedToken = LocalStorageUtil.get('authToken');
        if (storedToken) {
          state.authToken = storedToken;
          state.isAuth = true;
        }
      });
    },

    login: (user: User | null) => {
      if (user) {
        set({
          user,
          isAuthenticated: true,
          loading: false,
        });
      } else {
        set({ loading: true, error: null });
      }
    },
  }))
);
