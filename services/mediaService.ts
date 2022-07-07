import fs from 'fs';
import { ClearMediaError } from 'utils/errors';

export const clearMedia = async (filenames: string[]) => {
	const unlinks = filenames.map(fs.promises.unlink);

	try {
		await Promise.all(unlinks);

		console.log('Media has been cleaned successfully.');
	} catch (err) {
		throw new ClearMediaError('Failed to clear media.');
	}
};
