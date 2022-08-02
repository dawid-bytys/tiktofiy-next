import { useMemo } from 'react';
import { useDebounce } from './useDebounce';

export const useFilteredThemes = (themeCollection: string[], filter: string, debounce?: number) => {
  const debouncedFilter = useDebounce(filter, debounce);

  const filteredThemes = useMemo(() => {
    return themeCollection.filter(theme => theme.includes(debouncedFilter));
  }, [debouncedFilter]);

  return filteredThemes;
};
