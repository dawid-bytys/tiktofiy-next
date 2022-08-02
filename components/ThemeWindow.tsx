import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useRef, useCallback } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { useFilteredThemes } from 'hooks/useFilteredThemes';
import { useThemeWindowContext } from 'hooks/useThemeWindowContext';
import themeCollection from 'utils/themes.json';
import { opacityTransition } from 'utils/transitions';
import type { MouseEvent, ChangeEvent } from 'react';

export const ThemeWindow = () => {
  const [filter, setFilter] = useState('');
  const filteredThemes = useFilteredThemes(themeCollection, filter, 200);
  const { toggleThemeWindow } = useThemeWindowContext();
  const { setTheme } = useTheme();
  const themeWindowRef = useRef<HTMLDivElement>(null);
  useClickOutside<HTMLDivElement>(themeWindowRef, () => toggleThemeWindow(false));

  const handleFilterChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  }, []);

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setTheme(e.currentTarget.innerText);
    toggleThemeWindow(false);
  }, [])

  return (
    <motion.div
      ref={themeWindowRef}
      {...opacityTransition()}
      className="overflow-hidden flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 max-w-[55rem] max-h-[40rem] bg-background rounded-2xl"
    >
      <input
        placeholder="Search for theme..."
        aria-label="Find a theme"
        className="p-5 text-sm text-foreground bg-input placeholder-subactive font-medium"
        onChange={handleFilterChange}
      />
      <div className="flex-1 relative">
        <ul className="overflow-y-auto absolute inset-0">
          {filteredThemes.map(theme => (
            <li key={theme}>
              <button
                aria-label="Set theme"
                className="w-full p-5 text-left text-sm hover:bg-subactive transition-colors ease-in-out duration-300"
                onClick={handleClick}
              >
                {theme}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
