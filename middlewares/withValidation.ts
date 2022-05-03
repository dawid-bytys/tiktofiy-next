import { CustomError, InvalidRequestDataError } from '../utils/errors';
import type { Schema } from 'joi';
import type { NextApiRequest, NextApiResponse } from 'next';

export const withValidation =
  (schema: Schema, endpointHandler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const validationResult = schema.validate(req.body);
      if (validationResult.error) {
        throw new InvalidRequestDataError('Invalid request data');
      }

      return endpointHandler(req, res);
    } catch (err) {
      if (err instanceof CustomError) {
        res.status(err.statusCode).send(err.message);
      }
    }
  };
