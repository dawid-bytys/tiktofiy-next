import { useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { Announcement } from './Announcement';
import { ErrorAlert } from './ErrorAlert';
import { Form } from './Form';
import { SONGS_RECOGNITION_BASE_URL } from 'utils/constants';
import type { RequestData, RecognitionResult } from 'utils/types';
import type { SyntheticEvent, ChangeEvent } from 'react';

export const MainHome = () => {
	const [url, setUrl] = useState('');
	const { settings } = useSettings();
	const { result, performFetching } = useFetch<RecognitionResult, RequestData>(
		'POST',
		SONGS_RECOGNITION_BASE_URL,
		{
			url,
			settings,
		},
	);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		void performFetching();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUrl(e.currentTarget.value);
	};

	return (
		<main className="flex-1 relative my-20">
			{result.status === 'error' && <ErrorAlert errorMessage={result.errorMessage} />}
			<Form handleSubmit={handleSubmit} handleChange={handleChange} />
			<Announcement result={result} />
		</main>
	);
};
