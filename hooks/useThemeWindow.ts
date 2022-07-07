import { ThemeWindowContext } from 'context/ThemeWindowContext';
import { createSafeContext } from 'context/createSafeContext';

export const useThemeWindow = createSafeContext(ThemeWindowContext);
