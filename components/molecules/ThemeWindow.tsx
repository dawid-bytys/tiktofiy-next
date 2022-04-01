import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useRef } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';
import { useOpacityTransition } from '../../hooks/useOpacityTransition';
import { useThemeWindow } from '../../hooks/useThemeWindow';
import themes from '../../utils/themes.json';
import { Input } from '../atoms/Input';

export const ThemeWindow = () => {
  const themeWindowRef = useRef<HTMLDivElement>(null);
  const motionProps = useOpacityTransition();
  const { toggleThemeWindow } = useThemeWindow();
  const { setTheme } = useTheme();
  useClickOutside<HTMLDivElement>(themeWindowRef, () => toggleThemeWindow(false));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTheme(e.currentTarget.innerText);
    toggleThemeWindow(false);
  };

  return (
    <motion.div
      ref={themeWindowRef}
      {...motionProps}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/4 h-3/4 2xl:w-1/2 bg-background rounded-2xl"
    >
      <Input
        placeholder="Search for theme..."
        className="w-full p-5 text-base text-foreground bg-input placeholder-subactive"
      />
      <ul className="flex flex-col flex-1">
        {themes.map(theme => (
          <li key={theme}>
            <button
              aria-label="Set theme"
              className="w-full p-5 text-left hover:bg-subactive transition-colors ease-in-out duration-300"
              onClick={handleClick}
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
