import { useState } from 'react';
import { SettingsContext } from 'context/SettingsContext';
import type { ChildrenProps, SettingsKeys, Settings } from 'utils/types';

const initialState: Settings = {
  shazamApiKey: null,
  startTime: 0,
  duration: 5,
};

export const SettingsProvider = ({ children }: ChildrenProps) => {
  const [settingsState, setSettingsState] = useState(initialState);

  const setSettings = <T extends SettingsKeys>(key: T, value: Settings[T]) => {
    setSettingsState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: settingsState,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
