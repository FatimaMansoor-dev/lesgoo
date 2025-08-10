import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { ThemeStore } from 'shared/types/Store';
import { Themes } from 'shared/types/Theme';

export const useThemeStore = create(
  immer<ThemeStore>(set => ({
    /* States */
    theme: Themes.Light,

    /* Computed States */
    // computed: {},

    /* Functions */
    setTheme: (theme: Themes) => {
      set((state: ThemeStore) => {
        state.theme = theme;
      });
    },
  }))
);
