import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { SONGS_RECOGNITION_BASE_URL } from 'utils/constants';
import { fadeLeftTransition } from 'utils/transitions';
import { Announcement } from './Announcement';
import { ErrorAlert } from './ErrorAlert';
import { Form } from './Form';
import type { SyntheticEvent, ChangeEvent } from 'react';
import type { RequestData, RecognitionResult } from 'utils/types';

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

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      void performFetching();
    },
    [performFetching],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  }, []);

  return (
    <motion.main {...fadeLeftTransition} className="flex-1 relative my-24">
      {result.status === 'error' && <ErrorAlert errorMessage={result.errorMessage} />}
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isLoading={result.status === 'loading'}
      />
      <Announcement result={result} />
    </motion.main>
  );
};
