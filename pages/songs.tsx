import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { File } from 'react-kawaii';
import { Noti } from '../components/atoms/Noti';
import { useFadeRightTransition } from '../hooks/useFadeRightTransition';
import { SONGS_BASE_URL, TABLE_TITLES } from '../utils/constants';
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
    <motion.main
      {...motionProps}
      className="flex items-center flex-1 flex-col p-10 sm:px-0 xl:py-24"
    >
      <table className="  w-full max-w-4xl border-separate text-left overflow-hidden">
        <thead>
          <tr className="bg-input">
            {TABLE_TITLES.map(title => (
              <th key={title} className="p-3">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map(({ id, albumImage, artist, title }, idx) => (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>
                {albumImage && <Image src={albumImage} width={48} height={48} alt="Album image" />}
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
