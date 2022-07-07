import { createContext } from 'react';
import type { Settings, SettingsKeys } from '../utils/types';

interface SettingsContext {
	settings: Settings;
	setSettings: <T extends SettingsKeys>(key: T, value: Settings[T]) => void;
}

export const SettingsContext = createContext<SettingsContext | undefined>(undefined);
