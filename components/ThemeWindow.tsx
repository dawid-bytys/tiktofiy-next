import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { useDebounce } from 'hooks/useDebounce';
import { useThemeWindow } from 'hooks/useThemeWindow';
import themeCollection from 'utils/themes.json';
import { opacityTransition } from 'utils/transitions';
import type { MouseEvent, ChangeEvent } from 'react';

export const ThemeWindow = () => {
  const [query, setQuery] = useState('');
  const [themes, setThemes] = useState(themeCollection);
  const debouncedQuery = useDebounce(query, 200);
  const themeWindowRef = useRef<HTMLDivElement>(null);
  const { toggleThemeWindow } = useThemeWindow();
  const { setTheme } = useTheme();
  useClickOutside<HTMLDivElement>(themeWindowRef, () => toggleThemeWindow(false));

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setTheme(e.currentTarget.innerText);
    toggleThemeWindow(false);
  };

  const filterThemes = useCallback(() => {
    const filteredThemes = themeCollection.filter(theme => theme.startsWith(debouncedQuery));
    setThemes(filteredThemes);
  }, [debouncedQuery]);

  useEffect(() => {
    filterThemes();
  }, [debouncedQuery, filterThemes]);

  return (
    <motion.div
      ref={themeWindowRef}
      {...opacityTransition()}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/4 h-3/4 2xl:w-1/2 bg-background rounded-2xl"
    >
      <input
        placeholder="Search for theme..."
        aria-label="Find a theme"
        className="w-full p-5 text-sm text-foreground bg-input placeholder-subactive font-robotomonomedium"
        onChange={handleQueryChange}
      />
      <ul className="flex flex-col flex-1">
        {themes.map(theme => (
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
    </motion.div>
  );
};
