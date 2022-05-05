import axios from 'axios';
import { File } from 'react-kawaii';
import { useTable } from 'react-table';
import { Noti } from '../components/atoms/Noti';
import { COLUMNS, SONGS_BASE_URL } from '../utils/constants';
import type { SavedSongs, SuccessfulRequest, UnsuccessfulRequest } from '../utils/types';

type SongsProps = SuccessfulRequest | UnsuccessfulRequest;

const Songs = (props: SongsProps) => {
  const songsTable = useTable({ columns: COLUMNS, data: props.isSuccess && props.data });

  if (!props.isSuccess) {
    return (
      <Noti
        icon={<File size={120} mood="ko" color="#fff" />}
        message="something went wrong while fetching the songs..."
      />
    );
  }

  return <main></main>;
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
