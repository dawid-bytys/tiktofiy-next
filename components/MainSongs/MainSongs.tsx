import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { fadeRightTransition } from 'utils/transitions';
import type { ErrorAlertProps, SongsListProps, SongsResponse } from 'utils/types';

const ErrorAlert = dynamic<ErrorAlertProps>(
  () =>
    import(/* webpackChunkName: 'ErrorAlert' */ 'components/MainHome/ErrorAlert').then(
      mod => mod.ErrorAlert,
    ),
  {
    ssr: false,
  },
);
const SongsList = dynamic<SongsListProps>(
  () =>
    import(/* webpackChunkName: 'SongsListProps' */ 'components/MainSongs/SongsList').then(
      mod => mod.SongsList,
    ),
  {
    ssr: false,
  },
);

interface MainSongsProps {
  readonly result: SongsResponse;
}

const renderSwitch = (result: SongsResponse) => {
  switch (result.status) {
    case 'error':
      return <ErrorAlert errorMessage={result.errorMessage} />;
    case 'success':
      if (result.data.length === 0) {
        return <h2 className="m-auto text-center text-xl md:text-3xl">No songs found</h2>;
      }
      return <SongsList songs={result.data} />;
  }
};

export const MainSongs = ({ result }: MainSongsProps) => {
  return (
    <motion.main {...fadeRightTransition} className="flex-1 px-10 sm:px-20 md:px-0">
      {renderSwitch(result)}
    </motion.main>
  );
};
