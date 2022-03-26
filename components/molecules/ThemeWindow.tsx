import { motion } from 'framer-motion';
import { useRef } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';
import { useThemeWindow } from '../../hooks/useThemeWindow';

const ThemeWindow = () => {
  const themeWindowRef = useRef<HTMLDivElement>(null);
  const { toggleThemeWindow } = useThemeWindow();
  useClickOutside<HTMLDivElement>(themeWindowRef, () => toggleThemeWindow(false));

  return (
    <motion.div
      ref={themeWindowRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/4 h-3/4 bg-black rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  );
};

export default ThemeWindow;
