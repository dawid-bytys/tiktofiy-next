import { useEffect } from 'react';

// it doesn't work on iOS Safari
export const useBlockScroll = (shouldBlock: boolean) => {
  useEffect(() => {
    document.body.style.overflow = shouldBlock ? 'hidden' : 'auto';
  }, [shouldBlock]);
};
