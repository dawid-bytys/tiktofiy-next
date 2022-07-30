import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { RiPaletteLine } from 'react-icons/ri';
import { useThemeWindowContext } from 'hooks/useThemeWindowContext';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = () => {
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
    <header className="pt-8 pb-16 md:pt-12 md:pb-24">
      <Logo />
      <div className="flex flex-row justify-center items-center mt-6">
        <Navigation />
        <button
          onClick={() => toggleThemeWindow(true)}
          aria-label="Toggle theme window"
          className="flex flex-row items-center p-3 ml-6 md:ml-24 text-subactive font-medium"
        >
          <span className="sr-only">Toggle theme window</span>
          {theme} <RiPaletteLine className="ml-3 w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
