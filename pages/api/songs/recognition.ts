import { withValidation } from 'hofs/withValidation';
import { recognitionSchema } from 'schemas/recognitionSchema';
import {
  getAudioStream,
  getConvertedAudioBase64,
  recognizeAudio,
  getTikTokFinalUrl,
  getTikTokAudioUrl,
} from 'services/audioService';
import { getSongByUrl, storeSong } from 'services/databaseService';
import { getConfig } from 'utils/config';
import { isSongFound } from 'utils/typeguards';

export default withValidation(
  ['POST'],
  recognitionSchema,
)(async (req, res) => {
  const { url, shazamApiKey, startTime, duration } = req.body;

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

  const readStream = await getAudioStream(audioUrl);
  const audioBase64 = await getConvertedAudioBase64(readStream, startTime, duration);
  const recognizedAudio = await recognizeAudio(audioBase64, shazamApiKey as string); // yup is not able to infer that shazamApiKey is a string because of .transform() so the assertion is safe here

  if (getConfig('NODE_ENV') !== 'testing' && isSongFound(recognizedAudio)) {
    await storeSong({
      url: audioUrl,
      artist: recognizedAudio.artist,
      title: recognizedAudio.title,
      albumImage: recognizedAudio.albumImage,
    });
  }

  res.status(200).send(recognizedAudio);
});
