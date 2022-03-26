import { useRef } from 'react';

import withTransition from '../../hoc/withTransition';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useThemeWindow } from '../../hooks/useThemeWindow';

const ThemeWindow = () => {
  const themeWindowRef = useRef<HTMLDivElement>(null);
  const { toggleThemeWindow } = useThemeWindow();
  useClickOutside<HTMLDivElement>(themeWindowRef, () => toggleThemeWindow(false));

  return (
    <div
      ref={themeWindowRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/4 h-3/4 2xl:w-1/2 bg-background rounded-2xl"
    ></div>
  );
};

export default withTransition(ThemeWindow, 1);
