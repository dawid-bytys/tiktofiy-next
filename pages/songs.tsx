import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { File } from 'react-kawaii';
import { Noti } from '../components/atoms/Noti';
import { useFadeRightTransition } from '../hooks/useFadeRightTransition';
import { SONGS_BASE_URL } from '../utils/constants';
import type { SavedSongs, SuccessfulRequest, UnsuccessfulRequest } from '../utils/types';

type SongsProps = SuccessfulRequest | UnsuccessfulRequest;

const Songs = (props: SongsProps) => {
  const motionProps = useFadeRightTransition();

  if (!props.isSuccess) {
    return (
      <Noti
        icon={<File size={120} mood="ko" color="#fff" />}
        message="something went wrong while fetching the songs..."
      />
    );
  }

  return (
    <motion.main {...motionProps}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Album Image</th>
            <th>Artist</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(({ id, albumImage, artist, title }, idx) => (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>
                {albumImage && <Image src={albumImage} width={48} height={48} alt="Album image " />}
              </td>
              <td>{artist}</td>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.main>
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
