import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import dynamic from 'next/dynamic';
import type { ImageProps } from 'next/image';
import type { Song } from 'utils/types';

const Image = dynamic<ImageProps>(import(/* webpackChunkName: 'Image' */ 'next/image'), {
  ssr: true,
});

dayjs.extend(localizedFormat);

export const SongTile = ({ createdAt, artist, title, albumImage, url }: Song) => {
  return (
    <li className="mb-10 shadow-md last:mb-0">
      <a href={url} className="relative flex flex-col md:flex-row bg-gray-700 rounded-xl p-5">
        <div className="w-20 md:w-32 aspect-square shadow-xl">
          <Image
            src={albumImage || '/images/no-album-image.jpg'}
            alt="Album Image"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <p className="text-base md:text-lg text-gray-400">
            <b>{artist}</b>
          </p>
          <p className="text-sm md:text-base mt-1 font-medium">{title}</p>
        </div>
        <time className="absolute bottom-5 right-5 text-xs text-gray-400 font-medium">
          <i>{dayjs(createdAt).format('lll')}</i>
        </time>
      </a>
    </li>
  );
};
