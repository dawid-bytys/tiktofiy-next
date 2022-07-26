import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from 'assets/svg/spinner.svg';
import { useSongsQuery } from 'hooks/useSongsQuery';
import { SongTile } from './SongTile';
import type { ErrorAlertProps, Song, SongsListProps } from 'utils/types';

const ErrorAlert = dynamic<ErrorAlertProps>(() =>
  import(/* webpackChunkName: 'ErrorAlert' */ 'components/MainHome/ErrorAlert').then(
    mod => mod.ErrorAlert,
  ),
);

export const SongsList = ({ songs }: SongsListProps) => {
  const [hasMore, setHasMore] = useState(true);
  const [additionalSongs, setAdditionalSongs] = useState(songs);
  const { status, error, data, refetch } = useSongsQuery(additionalSongs.length);

  useEffect(() => {
    if (status === 'success') {
      setAdditionalSongs(prevState => [...prevState, ...data]);
      setHasMore(data.length === 10);
    }
  }, [data, status]);

  if (status === 'error') {
    return <ErrorAlert errorMessage={error.message} />;
  }

  return (
    <ul className="max-w-2xl mx-auto">
      <InfiniteScroll
        dataLength={additionalSongs.length}
        next={refetch}
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
