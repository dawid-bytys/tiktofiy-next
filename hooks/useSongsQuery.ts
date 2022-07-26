import { useQuery } from '@tanstack/react-query';
import { getSongs } from 'services/client/songsService';
import type { UseQueryResult } from '@tanstack/react-query';
import type { Song } from 'utils/types';

export const useSongsQuery = (skip: number) => {
  const result: UseQueryResult<Song[], Error> = useQuery(['songs', skip], () => getSongs(skip), {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return result;
};
