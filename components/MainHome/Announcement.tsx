import Image from 'next/image';
import { memo } from 'react';
import { BiMessageError, BiSearchAlt } from 'react-icons/bi';
import { RiEmotionSadLine } from 'react-icons/ri';
import Spinner from 'assets/svg/spinner.svg';
import { isSongFound } from 'utils/typeguards';
import { Paragraph } from './Paragraph';
import type { AnnouncementProps } from 'utils/types';

const returnCorrectAnnouncement = ({ resultStatus, fetchStatus, data }: AnnouncementProps) => {
  if (fetchStatus === 'idle' && resultStatus === 'loading') {
    return (
      <>
        <BiSearchAlt size={120} fill="#fff" className="mx-auto" />
        <Paragraph text="come one... search for something" className="mt-8" />
      </>
    );
  }

  if (fetchStatus === 'idle' && resultStatus === 'success' && data !== undefined) {
    if (!isSongFound(data)) {
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
            src={data.albumImage || '/images/no-album-image.jpg'}
            alt="Album Image"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            className="rounded-3xl"
          />
        </div>
        <p className="mt-8 text-xl text-center font-medium w-full max-w-xl mx-auto">
          {data.artist} - {data.title}
        </p>
      </>
    );
  }

  if (resultStatus === 'error') {
    return <BiMessageError size={120} fill="#fff" className="mx-auto" />;
  }

  if (fetchStatus === 'fetching') {
    return <Spinner className="w-36 h-auto" />;
  }
};

export const Announcement = memo<AnnouncementProps>(props => {
  return <div className="mt-16 md:mt-24">{returnCorrectAnnouncement(props)}</div>;
});
