import { useCallback, useState } from 'react';
import { createSafeContext } from 'context/createSafeContext';
import type { ChildrenProps } from 'utils/types';

type ThemeWindowContext = {
  isOpen: boolean;
  toggleThemeWindow: (value: boolean) => void;
};

export const [useSafeContext, Provider] = createSafeContext<ThemeWindowContext>();

export const ThemeWindowProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleThemeWindow = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  return <Provider value={{ isOpen, toggleThemeWindow }}>{children}</Provider>;
};
