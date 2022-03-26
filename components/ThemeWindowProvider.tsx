import { useState } from 'react';

import { ThemeWindowContext } from '../context/ThemeWindowContext';

interface ThemeWindowProviderProps {
  children: React.ReactNode;
}

const ThemeWindowProvider = ({ children }: ThemeWindowProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleThemeWindow = (value: boolean) => {
    setIsOpen(value);
  };

  return <ThemeWindowContext.Provider value={{ isOpen, toggleThemeWindow }}>{children}</ThemeWindowContext.Provider>;
};

export default ThemeWindowProvider;
