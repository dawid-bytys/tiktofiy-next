import { useCallback, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from 'assets/svg/spinner.svg';
import { ErrorAlert } from 'components/MainHome/ErrorAlert';
import { useFetch } from 'hooks/useFetch';
import { SONGS_BASE_URL } from 'utils/constants';
import { SongTile } from './SongTile';
import type { Song } from 'utils/types';

interface SongsListProps {
  readonly songs: Song[];
}

export const SongsList = ({ songs }: SongsListProps) => {
  const [hasMore, setHasMore] = useState(true);
  const [additionalSongs, setAdditionalSongs] = useState(songs);
  const { result, performFetching } = useFetch<Song[]>(
    'GET',
    `${SONGS_BASE_URL}?skip=${additionalSongs.length}&take=10`,
  );

  useEffect(() => {
    if (result.status === 'success') {
      setAdditionalSongs(prevState => [...prevState, ...result.data]);
      setHasMore(result.data.length === 10);
    }
  }, [result]);

  if (result.status === 'error') {
    return <ErrorAlert errorMessage={result.errorMessage} />;
  }

  return (
    <ul className="max-w-2xl mx-auto">
      <InfiniteScroll
        dataLength={additionalSongs.length}
        next={performFetching}
        hasMore={hasMore}
        loader={<Spinner className="w-24 h-auto" />}
      >
        {additionalSongs.map(song => (
          <SongTile {...song} key={song.id} />
        ))}
      </InfiniteScroll>
    </ul>
  );
};
