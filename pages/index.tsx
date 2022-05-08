import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Ghost, File } from 'react-kawaii';
import { Noti } from '../components/atoms/Noti';
import { useFadeRightTransition } from '../hooks/useFadeRightTransition';
import { useFetch } from '../hooks/useFetch';
import { useSettings } from '../hooks/useSettings';
import { AUDIO_BASE_URL } from '../utils/constants';
import { isSongFound } from '../utils/utils';
import type {
  EmptyObject,
  ErrorAlertProps,
  RecognitionResult,
  RequestData,
  SeoProps,
} from '../utils/types';
import type { ChangeEvent, FormEvent } from 'react';

const Seo = dynamic<SeoProps>(() =>
  import(/* webpackChunkName: "Seo" */ '../components/Seo').then(mod => mod.Seo),
);
const ErrorAlert = dynamic<ErrorAlertProps>(() =>
  import(/* webpackChunkName: "ErrorAlert" */ '../components/atoms/ErrorAlert').then(
    mod => mod.ErrorAlert,
  ),
);
const Loading = dynamic<EmptyObject>(() =>
  import(/* webpackChunkName: "Loading" */ '../components/atoms/Loading').then(mod => mod.Loading),
);

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [url, setUrl] = useState('');
  const motionProps = useFadeRightTransition();
  const { settings } = useSettings();
  const { fetchingState, performFetching } = useFetch<RecognitionResult, RequestData>(
    'POST',
    AUDIO_BASE_URL,
    { url, settings },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void performFetching();
  };

  // Hack for the server/client side difference
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Seo title="Tiktofiy! • find your favourite song" />
      <motion.main {...motionProps} className="flex items-center flex-1 flex-col p-10 xl:py-24">
        <div
          className={`relative flex flex-col items-center w-full max-w-xl ${
            fetchingState.status === 'loading' && 'opacity-40 pointer-events-none select-none'
          }`}
        >
          {fetchingState.status === 'error' && (
            <ErrorAlert errorMessage={fetchingState.errorMessage} />
          )}
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <input
              placeholder="Paste a TikTok url..."
              aria-label="TikTok url"
              className="p-4 bg-input w-full rounded-2xl text-sm font-robotomonomedium text-foreground placeholder-subactive"
              onChange={handleChange}
            />
            <button
              type="submit"
              aria-label="Find a song"
              className="mt-10 w-48 p-3 rounded-3xl bg-primary text-sm font-robotomonomedium"
            >
              Find a song
            </button>
          </form>
        </div>
        <div className="mt-24">
          {(() => {
            switch (fetchingState.status) {
              case 'success':
                return isSongFound(fetchingState.data) ? (
                  <>
                    <p className="text-sm text-center">look what we have just found for you</p>
                    {fetchingState.data.albumImage && (
                      <div className="flex items-center justify-center mt-10">
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
                  <Noti
                    icon={<File size={120} mood="ko" color="#fff" />}
                    message="sorry, we weren't able to find anything"
                  />
                );
              case 'idle':
                return (
                  <Noti
                    icon={<Ghost size={120} mood="blissful" color="#fff" />}
                    message="come one... search for something"
                  />
                );
              case 'error':
                return (
                  <Noti
                    icon={<File size={120} mood="ko" color="#fff" />}
                    message="something went wrong..."
                  />
                );
              case 'loading':
                return <Loading />;
            }
          })()}
        </div>
      </motion.main>
    </>
  );
};

export default Home;
