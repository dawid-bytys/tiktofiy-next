import fs from 'fs';
import validUrl from 'valid-url';
import { withValidation } from '../../../middlewares/withValidation';
import { AudioSchema } from '../../../schemas/audioSchema';
import {
  convertAudio,
  cutAudio,
  downloadAudio,
  getTikTokAudioUrl,
  getTikTokFinalUrl,
  recognizeAudio,
} from '../../../services/audioService';
import { CustomError, InvalidHTTPMethodError, InvalidUrlError } from '../../../utils/errors';
import { generateRandomString, returnPath } from '../../../utils/utils';
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

    const finalUrl = await getTikTokFinalUrl(url);
    const audioUrl = await getTikTokAudioUrl(finalUrl);

    const audioFilename = generateRandomString();
    const cutAudioFilename = generateRandomString();
    const cutConvertedAudioFilename = generateRandomString();

    await downloadAudio(audioUrl, audioFilename);
    await cutAudio(audioFilename, cutAudioFilename, settings.start, settings.end);
    await convertAudio(cutAudioFilename, cutConvertedAudioFilename);

    const audioBase64 = fs.readFileSync(returnPath(`${cutConvertedAudioFilename}.mp3`), {
      encoding: 'base64',
    });
    const recognizedAudio = await recognizeAudio(audioBase64, settings.shazamApiKey);

    res.status(200).send(recognizedAudio);
  } catch (err) {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ message: err.message });
    }

    res.status(500).send({ message: 'Unexpected error has occured' });
  }
};

export default withValidation(AudioSchema, recognizeHandler);
