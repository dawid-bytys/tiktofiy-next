import Spinner from 'assets/svg/spinner.svg';
import Image from 'next/image';
import { Paragraph } from './Paragraph';
import { File } from 'react-kawaii';
import { isSongFound } from 'utils/utils';
import type { Status, RecognitionResult, AnnouncementProps, Result } from 'utils/types';

const renderSwitch = (result: Result<RecognitionResult>) => {
	switch (result.status) {
		case 'idle':
			return (
				<>
					<File size={120} mood="happy" color="#fff" />
					<Paragraph text="come one... search for something" className="mt-8" />
				</>
			);
		case 'error':
			return (
				<>
					<File size={120} mood="ko" color="#fff" />
				</>
			);
		case 'success':
			if (!isSongFound(result.data)) {
				return (
					<>
						<File size={120} mood="sad" color="#fff" />
						<Paragraph text="we weren't able to find anything" className="mt-8" />
					</>
				);
			}

			return (
				<>
					<Paragraph text="look what we've just found for you" />
					<div className="mt-8">
						<Image
							src={result.data.albumImage!}
							alt="Album Image"
							width={150}
							height={150}
							className="rounded-3xl"
						/>
					</div>
					<p className="mt-8 text-xl text-center font-robotomonomedium">
						{result.data.artist} - {result.data.title}
					</p>
				</>
			);
		case 'loading':
			return <Spinner />;
	}
};

export const Announcement = ({ result }: AnnouncementProps) => {
	return <div className="flex flex-col items-center mt-24">{renderSwitch(result)}</div>;
};
