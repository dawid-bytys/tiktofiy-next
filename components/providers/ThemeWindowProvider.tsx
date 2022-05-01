import { useState } from 'react';
import { ThemeWindowContext } from '../../context/ThemeWindowContext';
import type { ChildrenProps } from '../../utils/types';

export const ThemeWindowProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleThemeWindow = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <ThemeWindowContext.Provider value={{ isOpen, toggleThemeWindow }}>
      {children}
    </ThemeWindowContext.Provider>
  );
};
