import { motion } from 'framer-motion';
import { ErrorAlert } from 'components/MainHome/ErrorAlert';
import { fadeRightTransition } from 'utils/transitions';
import { SongsList } from './SongsList';
import type { SongsResponse } from 'utils/types';

interface MainSongsProps {
  readonly result: SongsResponse;
}

const renderSwitch = (result: SongsResponse) => {
  switch (result.status) {
    case 'error':
      return <ErrorAlert errorMessage={result.errorMessage} />;
    case 'success':
      if (result.data.length === 0) {
        return <p>No songs found</p>;
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
