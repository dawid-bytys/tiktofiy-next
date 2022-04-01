import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { File } from 'react-kawaii';

import { useFadeRightTransition } from '../../hooks/useFadeRightTransition';
import { useFetch } from '../../hooks/useFetch';
import { BASE_API_URL } from '../../utils/constants';
import { isSongFound } from '../../utils/utils';

import type { EmptyObject, ErrorAlertProps, RecognitionResult } from '../../utils/types';
import type { ChangeEvent } from 'react';

const ErrorAlert = dynamic<ErrorAlertProps>(() =>
  import(/* webpackChunkName: "ErrorAlert" */ '../atoms/ErrorAlert').then(mod => mod.ErrorAlert),
);
const Loading = dynamic<EmptyObject>(() =>
  import(/* webpackChunkName: "Loading" */ '../atoms/Loading').then(mod => mod.Loading),
);

export const MainHome = () => {
  const [url, setUrl] = useState('');
  const motionProps = useFadeRightTransition();
  const { fetchingState, performFetching } = useFetch<RecognitionResult>(BASE_API_URL);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  return (
    <motion.main
      {...motionProps}
      className="flex items-center flex-1 flex-col p-8 sm:py-16 sm:px-0"
    >
      {fetchingState.status === 'error' && <ErrorAlert errorMessage={fetchingState.errorMessage} />}
      <div className="relative flex flex-col items-center">
        <input
          placeholder="Paste a TikTok url..."
          className="p-4 mt-10 bg-input w-full sm:w-96 md:w-144 xl:w-196 rounded-2xl text-sm font-medium text-foreground placeholder-subactive"
          onChange={handleChange}
        />
        <button
          aria-label="Find a song"
          onClick={() => void performFetching(url)}
          className="mt-10 w-48 p-3 rounded-3xl bg-primary text-sm text-bold"
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
                  <File size={120} mood="ko" color="#fff" />
                  <div className="text-center mt-16">come one... search for something</div>
                </>
              );
          }
        })()}
      </div>
    </motion.main>
  );
};
