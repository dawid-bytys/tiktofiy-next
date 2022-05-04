import axios from 'axios';
import { SONGS_BASE_URL } from '../utils/constants';
import type { SavedSongs, SuccessfulRequest, UnsuccessfulRequest } from '../utils/types';

type SongsProps = SuccessfulRequest | UnsuccessfulRequest;

const Songs = (props: SongsProps) => {
  return <div></div>;
};

export const getServerSideProps = async (): Promise<{ props: SongsProps }> => {
  try {
    const songs = await axios.get<SavedSongs[]>(SONGS_BASE_URL);

    return {
      props: {
        isSuccess: true,
        data: songs.data,
      },
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        props: {
          isSuccess: false,
          errorMessage: err.response?.data.message,
        },
      };
    }

    return {
      props: {
        isSuccess: false,
        errorMessage: 'Unexpected error has occured',
      },
    };
  }
};

export default Songs;
