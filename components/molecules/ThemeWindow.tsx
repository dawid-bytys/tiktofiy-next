import { motion } from 'framer-motion';
import { useRef } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';
import { useOpacityTransition } from '../../hooks/useOpacityTransition';
import { useThemeWindow } from '../../hooks/useThemeWindow';

export const ThemeWindow = () => {
  const themeWindowRef = useRef<HTMLDivElement>(null);
  const motionProps = useOpacityTransition();
  const { toggleThemeWindow } = useThemeWindow();
  useClickOutside<HTMLDivElement>(themeWindowRef, () => toggleThemeWindow(false));

  return (
    <motion.div
      ref={themeWindowRef}
      {...motionProps}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/4 h-3/4 2xl:w-1/2 bg-background rounded-2xl"
    ></motion.div>
  );
};
