import { ValidationError, object } from 'yup';
import { CustomError, InvalidHTTPMethodError } from 'utils/errors';
import type { NextApiResponse } from 'next';
import type { HTTPMethod, CustomNextApiRequest, SomeSchema } from 'utils/types';
import type { InferType, ObjectSchema } from 'yup';

export const withValidation = <
  T extends
    | {}
    | {
        readonly body?: ObjectSchema<SomeSchema>;
        readonly query?: ObjectSchema<SomeSchema>;
      },
>(
  methods: HTTPMethod[],
  schema: T,
) => {
  const schemaObj = object().shape(schema).unknown(true);

  return <V extends CustomNextApiRequest<InferType<typeof schemaObj>>>(
    handler: (req: V, res: NextApiResponse) => Promise<unknown>,
  ) => {
    return async (req: V, res: NextApiResponse) => {
      try {
        if (!methods.includes(req.method as HTTPMethod)) {
          throw new InvalidHTTPMethodError(
            `Only ${methods.join('/')} requests are allowed on this endpoint`,
          );
        }

        const validatedValues = await schemaObj.validate(req);
        await handler({ ...req, ...validatedValues }, res);
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
