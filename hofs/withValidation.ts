import { ValidationError } from 'yup';
import { CustomError, InvalidHTTPMethodError } from 'utils/errors';
import type { NextApiResponse } from 'next';
import type { HTTPMethod, CustomNextApiRequest, SomeSchema } from 'utils/types';
import type { InferType } from 'yup';

export const withValidation = <T extends SomeSchema | undefined = undefined>(
  methods: HTTPMethod[],
  bodySchema?: T,
) => {
  return <V extends CustomNextApiRequest<T extends SomeSchema ? InferType<T> : undefined>>(
    handler: (req: V, res: NextApiResponse) => Promise<unknown> | unknown,
  ) => {
    return async (req: V, res: NextApiResponse) => {
      try {
        if (!methods.includes(req.method as HTTPMethod)) {
          throw new InvalidHTTPMethodError(
            `Only ${methods.join('/')} requests are allowed on this endpoint`,
          );
        }

        /* eslint-disable @typescript-eslint/no-unsafe-assignment */ // it is safe but TypeScript is dumb and is not able to infer
        if (typeof bodySchema !== 'undefined') {
          const validatedBody = await bodySchema.validate(req.body);
          req.body = validatedBody;
        }

        await handler(req, res);
      } catch (err) {
        if (err instanceof ValidationError) {
          return res.status(422).send({ message: err.message });
        }

        if (err instanceof CustomError) {
          return res.status(err.statusCode).send({
            message: err.message,
          });
        }

        res.status(500).send({ message: 'Unexpected error has occured' });
      }
    };
  };
};
