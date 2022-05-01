import { createContext } from 'react';
import type { Settings, SettingsKeys } from '../utils/types';

interface SettingsContext {
  settings: Settings;
  setSettings: <T extends SettingsKeys>(
    key: T,
    value: T extends 'shazamApiKey' ? string : number,
  ) => void;
}

export const SettingsContext = createContext<SettingsContext | undefined>(undefined);
