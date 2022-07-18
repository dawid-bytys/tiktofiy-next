import fs from 'fs';
import { withValidation } from 'hofs/withValidation';
import { recognitionSchema } from 'schemas/recognitionSchema';
import {
  convertAudio,
  cutAudio,
  downloadAudio,
  getTikTokAudioUrl,
  getTikTokFinalUrl,
  recognizeAudio,
} from 'services/audioService';
import { getSongByUrl, storeSong } from 'services/databaseService';
import { clearLocalMedia } from 'services/mediaService';
import { getConfig } from 'utils/config';
import { isSongFound } from 'utils/typeguards';
import { generateRandomString, getMediaPath } from 'utils/utils';

export default withValidation(
  ['POST'],
  recognitionSchema,
)(async (req, res) => {
  const { url, shazamApiKey, start, end } = req.body;

  const finalUrl = await getTikTokFinalUrl(url);
  const audioUrl = await getTikTokAudioUrl(finalUrl);

  if (getConfig('NODE_ENV') !== 'testing') {
    const storedTikTok = await getSongByUrl(audioUrl);
    if (storedTikTok) {
      return res.status(200).send({
        isFound: true,
        artist: storedTikTok.artist,
        title: storedTikTok.title,
        albumImage: storedTikTok.albumImage,
      });
    }
  }

  const audioFilename = generateRandomString(16);
  const cutAudioFilename = generateRandomString(16);
  const cutConvertedAudioFilename = generateRandomString(16);

  await downloadAudio(audioUrl, audioFilename);
  await cutAudio(audioFilename, cutAudioFilename, start, end);
  await convertAudio(cutAudioFilename, cutConvertedAudioFilename);

  const audioBase64 = fs.readFileSync(getMediaPath(cutConvertedAudioFilename), {
    encoding: 'base64',
  });
  const recognizedAudio = await recognizeAudio(audioBase64, shazamApiKey as string); // yup is not able to infer that shazamApiKey is a string because of .transform() so the assertion is safe here

  if (getConfig('NODE_ENV') !== 'testing' && isSongFound(recognizedAudio)) {
    await storeSong({
      url: audioUrl,
      artist: recognizedAudio.artist,
      title: recognizedAudio.title,
      albumImage: recognizedAudio.albumImage,
    });
  }

  await clearLocalMedia([audioFilename, cutAudioFilename, cutConvertedAudioFilename]);

  res.status(200).send(recognizedAudio);
});
