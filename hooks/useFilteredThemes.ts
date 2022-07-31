import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export const useFilteredThemes = (themeCollection: string[], filter: string, debounce?: number) => {
  const [themes, setThemes] = useState(themeCollection);
  const debouncedFilter = useDebounce(filter, debounce);

  useEffect(() => {
    const filteredThemes = themeCollection.filter(theme => theme.includes(debouncedFilter));
    setThemes(filteredThemes);
  }, [filter, debouncedFilter, themeCollection]);

  return themes;
};
