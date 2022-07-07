import { CustomError, InvalidRequestDataError } from '../utils/errors';
import type { Schema } from 'joi';
import type { NextApiRequest, NextApiResponse } from 'next';

export const withValidation =
	(schema: Schema, endpointHandler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
	(req: NextApiRequest, res: NextApiResponse) => {
		try {
			const validationResult = schema.validate(req.body);
			if (validationResult.error) {
				throw new InvalidRequestDataError('Invalid request data, probably url is missing');
			}

			endpointHandler(req, res);
		} catch (err) {
			if (err instanceof CustomError) {
				return res.status(err.statusCode).send({ message: err.message });
			}

			res.status(500).send({ message: 'Unexpected error has occured' });
		}
	};
