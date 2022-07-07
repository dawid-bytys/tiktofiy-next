import { createContext } from 'react';

interface ThemeWindowContext {
	isOpen: boolean;
	toggleThemeWindow: (value: boolean) => void;
}

export const ThemeWindowContext = createContext<ThemeWindowContext | undefined>(undefined);
