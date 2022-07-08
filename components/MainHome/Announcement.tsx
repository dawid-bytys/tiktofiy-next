import Image from 'next/image';
import { BiMessageError, BiSearchAlt } from 'react-icons/bi';
import { RiEmotionSadLine } from 'react-icons/ri';
import Spinner from 'assets/svg/spinner.svg';
import { isSongFound } from 'utils/utils';
import { Paragraph } from './Paragraph';
import type { RecognitionResult, AnnouncementProps, Result } from 'utils/types';

const renderSwitch = (result: Result<RecognitionResult>) => {
	switch (result.status) {
		case 'idle':
			return (
				<>
					<BiSearchAlt size={120} fill="#fff" />
					<Paragraph text="come one... search for something" className="mt-8" />
				</>
			);
		case 'success':
			if (!isSongFound(result.data)) {
				return (
					<>
						<RiEmotionSadLine size={120} fill="#fff" />
						<Paragraph text="we weren't able to find anything" className="mt-8" />
					</>
				);
			}

			return (
				<>
					<Paragraph text="look what we've just found for you" />
					<div className="mt-8">
						{result.data.albumImage && (
							<Image
								src={result.data.albumImage}
								alt="Album Image"
								width={150}
								height={150}
								className="rounded-3xl"
							/>
						)}
					</div>
					<p className="mt-8 text-xl text-center font-robotomonomedium">
						{result.data.artist} - {result.data.title}
					</p>
				</>
			);
		case 'error':
			return <BiMessageError size={120} fill="#fff" />;
		case 'loading':
			return <Spinner className="w-36 h-auto" />;
	}
};

export const Announcement = ({ result }: AnnouncementProps) => {
	return <div className="flex flex-col items-center mt-24">{renderSwitch(result)}</div>;
};
