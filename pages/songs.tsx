import axios from 'axios';
import { NextSeo } from 'next-seo';
import { MainSongs } from 'components/MainSongs/MainSongs';
import { SONGS_BASE_URL } from 'utils/constants';
import { isApiError } from 'utils/typeguards';
import type { Song, SongsResponse } from 'utils/types';

const Songs = (props: SongsResponse) => {
  return (
    <>
      <NextSeo title="Tiktofiy! • find a song from TikTok" canonical="https://tiktofiy.com/songs" />
      <MainSongs result={props} />
    </>
  );
};

export const getServerSideProps = async (): Promise<{ props: SongsResponse }> => {
  try {
    const { data } = await axios.get<Song[]>(`${SONGS_BASE_URL}?skip=0&take=10`);
    return {
      props: {
        status: 'success',
        data,
      },
    };
  } catch (err) {
    if (isApiError(err)) {
      return {
        props: {
          status: 'error',
          errorMessage:
            err.response.status === 503
              ? 'Server is currently not available'
              : err.response.data.message,
        },
      };
    }

    return {
      props: {
        status: 'error',
        errorMessage: 'Unexpected error has occured',
      },
    };
  }
};

export default Songs;
