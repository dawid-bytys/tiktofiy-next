import { createContext } from 'react';

export interface ThemeWindowContext {
  isOpen: boolean;
  toggleThemeWindow: (value: boolean) => void;
}

export const ThemeWindowContext = createContext<ThemeWindowContext>({} as ThemeWindowContext);
