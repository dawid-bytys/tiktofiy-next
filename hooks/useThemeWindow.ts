import { useContext } from 'react';

import { ThemeWindowContext } from '../context/ThemeWindowContext';

export const useThemeWindow = () => useContext(ThemeWindowContext);
