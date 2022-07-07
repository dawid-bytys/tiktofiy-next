import { useState } from 'react';
import { SettingsContext } from 'context/SettingsContext';
import type { ChildrenProps, SettingsKeys, Settings } from 'utils/types';

const initialState: Settings = {
	shazamApiKey: '',
	start: 0,
	end: 0,
};

export const SettingsProvider = ({ children }: ChildrenProps) => {
	const [settingsState, setSettingsState] = useState(initialState);

	const setSettings = <T extends SettingsKeys>(key: T, value: Settings[T]) => {
		setSettingsState(prevState => ({
			...prevState,
			[key]: value,
		}));
	};

	return (
		<SettingsContext.Provider
			value={{
				settings: settingsState,
				setSettings: setSettings,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};
