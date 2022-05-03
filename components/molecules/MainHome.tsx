import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { File, Ghost } from 'react-kawaii';
import { useFadeRightTransition } from '../../hooks/useFadeRightTransition';
import { useFetch } from '../../hooks/useFetch';
import { useSettings } from '../../hooks/useSettings';
import { BASE_API_URL } from '../../utils/constants';
import { isSongFound } from '../../utils/utils';
import type {
  EmptyObject,
  ErrorAlertProps,
  RecognitionResult,
  RequestData,
} from '../../utils/types';
import type { ChangeEvent } from 'react';

const ErrorAlert = dynamic<ErrorAlertProps>(() =>
  import(/* webpackChunkName: "ErrorAlert" */ '../atoms/ErrorAlert').then(mod => mod.ErrorAlert),
);
const Loading = dynamic<EmptyObject>(() =>
  import(/* webpackChunkName: "Loading" */ '../atoms/Loading').then(mod => mod.Loading),
);

export const MainHome = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [url, setUrl] = useState('');
  const motionProps = useFadeRightTransition();
  const { settings } = useSettings();
  const { fetchingState, performFetching } = useFetch<RecognitionResult, RequestData>(
    'POST',
    BASE_API_URL,
    {
      url: url,
      settings: settings,
    },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  // Hack for the server/client side difference
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.main
      {...motionProps}
      className="flex items-center flex-1 flex-col p-8 sm:py-16 sm:px-0"
    >
      <div className="relative flex flex-col items-center w-full sm:w-96 md:w-144 xl:w-196">
        {fetchingState.status === 'error' && (
          <ErrorAlert errorMessage={fetchingState.errorMessage} />
        )}
        <input
          placeholder="Paste a TikTok url..."
          className="p-4 bg-input w-full rounded-2xl text-sm font-robotomonomedium text-foreground placeholder-subactive"
          onChange={handleChange}
        />
        <button
          aria-label="Find a song"
          onClick={() => void performFetching()}
          className="mt-10 w-48 p-3 rounded-3xl bg-primary text-sm font-robotomonomedium"
        >
          Find a song
        </button>
        {fetchingState.status === 'loading' && <Loading />}
      </div>
      <div className="flex flex-col items-center mt-24">
        {(() => {
          switch (fetchingState.status) {
            case 'success':
              return isSongFound(fetchingState.data) ? (
                <>
                  <Image src={fetchingState.data.albumImage} alt="Album image" />
                  <div>
                    {fetchingState.data.artist} - {fetchingState.data.title}
                  </div>
                </>
              ) : (
                <>
                  <File size={120} mood="ko" color="#fff" />
                  <div className="text-center mt-16">
                    sorry, we weren&apost able to find anything
                  </div>
                </>
              );
            case 'idle':
              return (
                <>
                  <Ghost size={120} mood="blissful" color="#fff" />
                  <div className="text-center mt-16">come one... search for something</div>
                </>
              );
            case 'error':
              return (
                <>
                  <File size={120} mood="ko" color="#fff" />
                  <div className="text-center mt-16">something went wrong...</div>
                </>
              );
          }
        })()}
      </div>
    </motion.main>
  );
};
