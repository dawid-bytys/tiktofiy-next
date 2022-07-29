import { useCallback, useState } from 'react';
import { createSafeContext } from 'context/createSafeContext';
import type { ChildrenProps, SettingsKeys, Settings } from 'utils/types';

const initialState: Settings = {
  shazamApiKey: null,
  startTime: 0,
  duration: 5,
};

type SettingsContext = {
  settings: Settings;
  setSettings: <T extends SettingsKeys>(key: T, value: Settings[T]) => void;
};

export const [useSafeContext, Provider] = createSafeContext<SettingsContext>();

export const SettingsProvider = ({ children }: ChildrenProps) => {
  const [settingsState, setSettingsState] = useState(initialState);

  const setSettings = useCallback(<T extends SettingsKeys>(key: T, value: Settings[T]) => {
    setSettingsState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  return (
    <Provider
      value={{
        settings: settingsState,
        setSettings,
      }}
    >
      {children}
    </Provider>
  );
};
