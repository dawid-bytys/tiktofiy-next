import 'styles/globals.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Template } from 'components/Template';
import { SettingsProvider } from 'components/providers/SettingsProvider';
import { ThemeWindowProvider } from 'components/providers/ThemeWindowProvider';
import themeCollection from 'utils/themes.json';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storageKey="data-theme" defaultTheme="default" themes={themeCollection}>
        <ThemeWindowProvider>
          <SettingsProvider>
            <Template>
              <Component {...pageProps} />
            </Template>
          </SettingsProvider>
        </ThemeWindowProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
