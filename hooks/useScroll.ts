import { useState, useEffect, useCallback } from 'react';

export const useScroll = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    setIsScrolledToBottom(Math.ceil(scrollHeight - scrollTop) === clientHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isScrolledToBottom;
};
