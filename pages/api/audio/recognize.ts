import validUrl from 'valid-url';
import { withValidation } from '../../../middlewares/withValidation';
import { AudioSchema } from '../../../schemas/audioSchema';
import { downloadAudio, getFinalUrl, getTikTokAudioUrl } from '../../../services/audioService';
import { CustomError, InvalidHTTPMethodError, InvalidUrlError } from '../../../utils/errors';
import type { RequestData, DeepReadonly } from '../../../utils/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const recognizeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      throw new InvalidHTTPMethodError('Only POST method is allowed');
    }

    const { url, settings }: DeepReadonly<RequestData> = req.body;
    if (!validUrl.isUri(url)) {
      throw new InvalidUrlError('Invalid url has been provided');
    }
  } catch (err) {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ message: err.message });
    }

    res.status(500).send({ message: 'Unexpected error has occured' });
  }
};

export default withValidation(AudioSchema, recognizeHandler);
