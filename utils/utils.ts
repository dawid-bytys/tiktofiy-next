import crypto from 'crypto';
import path from 'path';
import type { RecognitionResult, SongFound } from './types';

export const isSongFound = (result: RecognitionResult): result is SongFound => {
	return result.isFound;
};

export const returnPath = (filename: string) => {
	return path.resolve('media', filename);
};

export const generateRandomString = (length = 16) => {
	return crypto.randomBytes(length).toString('hex');
};

export const getTikTokId = (url: string) => {
	const firstPattern =
		/https:\/\/www.tiktok.com\/foryou\?is_copy_url=1&is_from_webapp=v1&item_id=[0-9]{19}/;
	const secondPattern = /https:\/\/www.tiktok.com\/@[a-zA-Z0-9_.]{1,}\/video\/[0-9]{19}.*/;
	const thirdPattern = /https:\/\/m.tiktok.com\/v\/[0-9]{19}.html.*/;

	if (firstPattern.test(url)) {
		return url.substring(70, 90);
	}

	if (secondPattern.test(url)) {
		return url.split('video/')[1].substring(0, 19);
	}

	if (thirdPattern.test(url)) {
		return url.substring(23, 42);
	}

	return;
};
