import { useEffect, useState } from 'react';

export const useArrowNavigation = (childrenLength: number) => {
  const [position, setPosition] = useState(-1);

  useEffect(() => {
    setPosition(-1);
  }, [childrenLength]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      if (position < childrenLength - 1) {
        setPosition(prevState => prevState + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (position > 0) {
        setPosition(prevState => prevState - 1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return position;
};
