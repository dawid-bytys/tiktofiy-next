import { getAllSongs } from 'services/databaseService';
import { CustomError, InvalidHTTPMethodError } from 'utils/errors';
import type { NextApiRequest, NextApiResponse } from 'next';

const songsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method !== 'GET') {
			throw new InvalidHTTPMethodError('Only GET method is allowed');
		}

		const songs = await getAllSongs();

		res.status(200).send(songs);
	} catch (err) {
		if (err instanceof CustomError) {
			return res.status(err.statusCode).send({ message: err.message });
		}

		res.status(500).send({ message: 'Unexpected error has occured' });
	}
};

export default songsHandler;
