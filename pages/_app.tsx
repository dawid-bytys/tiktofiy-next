import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { SettingsProvider } from 'components/providers/SettingsProvider';
import { ThemeWindowProvider } from 'components/providers/ThemeWindowProvider';
import { Template } from 'components/Template';
import themeCollection from 'utils/themes.json';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider storageKey="data-theme" defaultTheme="default" themes={themeCollection}>
			<ThemeWindowProvider>
				<SettingsProvider>
					<Template>
						<Component {...pageProps} />
					</Template>
				</SettingsProvider>
			</ThemeWindowProvider>
		</ThemeProvider>
	);
};

export default MyApp;
