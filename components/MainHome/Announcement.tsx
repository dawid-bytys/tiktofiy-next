import Image from 'next/image';
import { memo } from 'react';
import { BiMessageError, BiSearchAlt } from 'react-icons/bi';
import { RiEmotionSadLine } from 'react-icons/ri';
import Spinner from 'assets/svg/spinner.svg';
import { isSongFound } from 'utils/typeguards';
import { Paragraph } from './Paragraph';
import type { RecognitionResult, AnnouncementProps, Result } from 'utils/types';

const renderSwitch = (result: Result<RecognitionResult>) => {
  switch (result.status) {
    case 'idle':
      return (
        <>
          <BiSearchAlt size={120} fill="#fff" className="mx-auto" />
          <Paragraph text="come one... search for something" className="mt-8" />
        </>
      );
    case 'success':
      if (!isSongFound(result.data)) {
        return (
          <>
            <RiEmotionSadLine size={120} fill="#fff" className="mx-auto" />
            <Paragraph text="we weren't able to find anything" className="mt-8" />
          </>
        );
      }

      return (
        <>
          <Paragraph text="look what we've just found for you" />
          <div className="mt-8 mx-auto w-36 aspect-square shadow-md">
            <Image
              src={result.data.albumImage || '/images/no-album-image.jpg'}
              alt="Album Image"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              className="rounded-3xl"
            />
          </div>
          <p className="mt-8 text-xl text-center font-medium w-full max-w-xl mx-auto">
            {result.data.artist} - {result.data.title}
          </p>
        </>
      );
    case 'error':
      return <BiMessageError size={120} fill="#fff" className="mx-auto" />;
    case 'loading':
      return <Spinner className="w-36 aspect-square mx-auto" />;
  }
};

export const Announcement = memo<AnnouncementProps>(({ result }) => {
  return <div className="mt-16 md:mt-24">{renderSwitch(result)}</div>;
});
