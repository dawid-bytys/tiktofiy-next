import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { ThemeWindowProvider } from '../components/ThemeWindowProvider';
import { Template } from '../components/templates/Template';
import themeCollection from '../utils/themes.json';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider storageKey="data-theme" defaultTheme="default" themes={themeCollection}>
      <ThemeWindowProvider>
        <Template>
          <Component {...pageProps} />
        </Template>
      </ThemeWindowProvider>
    </ThemeProvider>
  );
};

export default MyApp;
