import fs from 'fs';
import { ClearMediaError } from 'utils/errors';
import { returnPath } from 'utils/utils';

export const clearMedia = async (filenames: string[]) => {
	const unlinks = filenames.map(filename => fs.promises.unlink(returnPath(filename)));

	try {
		await Promise.all(unlinks);

		console.log('Media has been cleaned successfully.');
	} catch (err) {
		throw new ClearMediaError('Failed to clear media.');
	}
};
