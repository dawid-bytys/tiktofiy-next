import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { useRecognitionQuery } from 'hooks/useRecognitionQuery';
import { useSettingsContext } from 'hooks/useSettingsContext';
import { fadeLeftTransition } from 'utils/transitions';
import { Form } from './Form';
import type { SyntheticEvent, ChangeEvent } from 'react';
import type { ErrorAlertProps, AnnouncementProps } from 'utils/types';

const ErrorAlert = dynamic<ErrorAlertProps>(() =>
  import(/* webpackChunkName: 'ErrorAlert' */ 'components/MainHome/ErrorAlert').then(
    mod => mod.ErrorAlert,
  ),
);
const Announcement = dynamic<AnnouncementProps>(() =>
  import(/* webpackChunkName: 'Announcement' */ 'components/MainHome/Announcement').then(
    mod => mod.Announcement,
  ),
);

export const MainHome = () => {
  const [url, setUrl] = useState('');
  const { settings } = useSettingsContext();
  const { status, error, data, fetchStatus, refetch } = useRecognitionQuery({ url, ...settings });

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      void refetch();
    },
    [refetch],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  }, []);

  return (
    <motion.main {...fadeLeftTransition} className="flex-1 px-10 sm:px-20 md:px-0">
      {status === 'error' && <ErrorAlert errorMessage={error.message} />}
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isLoading={fetchStatus === 'fetching'}
      />
      <Announcement resultStatus={status} fetchStatus={fetchStatus} data={data} />
    </motion.main>
  );
};
