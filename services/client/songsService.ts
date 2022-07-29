import axios from 'axios';
import { SONGS_BASE_URL } from 'utils/constants';
import { isApiError } from 'utils/typeguards';
import type { Song } from 'utils/types';

export const getSongs = async (skip: number) => {
  try {
    const { data } = await axios.get<Song[]>(SONGS_BASE_URL, {
      params: {
        skip,
        take: 10,
      },
    });
    return data;
  } catch (err) {
    if (isApiError(err)) {
      throw new Error(err.response.data.message);
    }
    throw new Error('Unexpected error has occured');
  }
};
