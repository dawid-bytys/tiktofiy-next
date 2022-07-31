import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { RiPaletteLine } from 'react-icons/ri';
import { useThemeWindowContext } from 'hooks/useThemeWindowContext';

export const ThemeWindowButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  const { toggleThemeWindow } = useThemeWindowContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={() => toggleThemeWindow(true)}
      aria-label="Toggle theme window"
      className="flex flex-row items-center p-3 ml-6 md:ml-24 text-subactive font-medium"
    >
      <span className="sr-only">Toggle theme window</span>
      {theme} <RiPaletteLine className="ml-3 w-6 h-6" />
    </button>
  );
};
