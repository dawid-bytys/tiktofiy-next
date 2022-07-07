import Spinner from 'assets/svg/spinner.svg';
import Image from 'next/image';
import { File } from 'react-kawaii';
import { isSongFound } from 'utils/utils';
import type { Status, RecognitionResult, AnnouncementProps, Result } from 'utils/types';

const renderSwitch = (result: Result<RecognitionResult>) => {
	switch (result.status) {
		case 'idle':
			return (
				<>
					<File size={120} mood="happy" color="#fff" />
					<p className="mt-8">come one... search for something</p>
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
						<p>we were't able to find anything</p>
					</>
				);
			}

			return (
				<>
					<p>look what we've just found for you</p>
					<Image src={result.data.albumImage!} alt="Album Image" width={50} height={50} />
					<p>
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
