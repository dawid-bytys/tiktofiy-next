import { withValidation } from '../../../middlewares/withValidation';
import { AudioSchema } from '../../../schemas/audioSchema';
import type { RequestData, DeepReadonly } from '../../../utils/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const recognizeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const { url, settings }: DeepReadonly<RequestData> = req.body;
};

export default withValidation(AudioSchema, recognizeHandler);
