import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { File, Ghost } from 'react-kawaii';
import { useFadeRightTransition } from '../../hooks/useFadeRightTransition';
import { useFetch } from '../../hooks/useFetch';
import { useSettings } from '../../hooks/useSettings';
import { ENDPOINT } from '../../utils/constants';
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
    ENDPOINT,
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
      <div
        className={`relative flex flex-col items-center w-full sm:w-96 md:w-144 xl:w-196 ${
          fetchingState.status === 'loading' && 'opacity-40 pointer-events-none select-none'
        }`}
      >
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
      </div>
      <div className="mt-24">
        {(() => {
          switch (fetchingState.status) {
            case 'success':
              return isSongFound(fetchingState.data) ? (
                <>
                  <p className="text-sm text-center">look what we have just found for you</p>
                  {fetchingState.data.albumImage && (
                    <div className="flex items-center justify-center">
                      <Image
                        src={fetchingState.data.albumImage}
                        alt="Album image"
                        width={112}
                        height={112}
                        className="mt-3 rounded-xl mx-auto"
                      />
                    </div>
                  )}
                  <p className="mt-10 text-sm md:text-lg text-center">
                    {fetchingState.data.artist} - {fetchingState.data.title}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center">
                    <File size={120} mood="ko" color="#fff" />
                  </div>
                  <p className="text-center mt-16">sorry, we weren&apost able to find anything</p>
                </>
              );
            case 'idle':
              return (
                <>
                  <div className="flex items-center justify-center">
                    <Ghost size={120} mood="blissful" color="#fff" />
                  </div>
                  <p className="text-center mt-10">come one... search for something</p>
                </>
              );
            case 'error':
              return (
                <>
                  <div className="flex items-center justify-center">
                    <File size={120} mood="ko" color="#fff" />
                  </div>
                  <p className="text-center mt-16">something went wrong...</p>
                </>
              );
            case 'loading':
              return <Loading />;
          }
        })()}
      </div>
    </motion.main>
  );
};
