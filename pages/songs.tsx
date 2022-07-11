import axios from 'axios';
import { NextSeo } from 'next-seo';
import { MainSongs } from 'components/MainSongs/MainSongs';
import { SONGS_BASE_URL } from '../utils/constants';
import type {
  ErrorResponse,
  SavedSongs,
  SuccessfulRequest,
  UnsuccessfulRequest,
} from '../utils/types';
import type { AxiosError } from 'axios';

type SongsProps = SuccessfulRequest | UnsuccessfulRequest;

const Songs = (props: SongsProps) => {
  return (
    <>
      <NextSeo
        title="Tiktofiy! • find your favourite song"
        canonical="https://tiktofiy.com/songs"
      />
      <MainSongs />
    </>
  );
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
      const error = err as AxiosError<ErrorResponse>;

      return {
        props: {
          isSuccess: false,
          errorMessage: error.response?.data.message || 'Server error has occured',
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
