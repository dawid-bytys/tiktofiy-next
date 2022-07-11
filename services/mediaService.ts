import fs from 'fs';
import { ClearMediaError } from 'utils/errors';
import { getMediaPath } from 'utils/utils';

export const clearLocalMedia = async (filenames: string[]) => {
	const unlinks = filenames.map(filename => fs.promises.unlink(getMediaPath(filename)));

	try {
		await Promise.all(unlinks);

		console.log('Media has been cleaned successfully.');
	} catch (err) {
		throw new ClearMediaError('Failed to clear media.');
	}
};
