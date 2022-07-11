import { useCallback, useEffect } from 'react';
import type { RefObject } from 'react';

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, callback: () => void) => {
  const handleMouseClick = useCallback(
    (e: MouseEvent) => {
      const el = ref?.current;
      if (el && !el.contains(e.target as Node)) {
        callback();
      }
    },
    [callback, ref],
  );

  const handleKeyboardClick = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseClick, true);
    document.addEventListener('keydown', handleKeyboardClick, true);

    return () => {
      document.removeEventListener('mousedown', handleMouseClick, true);
      document.removeEventListener('keydown', handleKeyboardClick, true);
    };
  }, [handleMouseClick, handleKeyboardClick]);
};
