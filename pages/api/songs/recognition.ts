import { withValidation } from 'hofs/withValidation';
import { recognitionSchema } from 'schemas/recognitionSchema';
import {
  getAudioStream,
  getConvertedAudioBase64,
  getRecognizedAudio,
  getTikTokFinalUrl,
  getTikTokAudioUrl,
} from 'services/server/audioService';
import { getDatabaseSongByUrl, storeDatabaseSong } from 'services/server/databaseService';
import { getConfig } from 'utils/config';
import { isSongFound } from 'utils/typeguards';

export default withValidation(['POST'], {
  body: recognitionSchema,
})(async (req, res) => {
  const { url, shazamApiKey, startTime, duration } = req.body;

  const finalUrl = await getTikTokFinalUrl(url);
  const audioUrl = await getTikTokAudioUrl(finalUrl);

  if (getConfig('NODE_ENV') !== 'testing') {
    const song = await getDatabaseSongByUrl(audioUrl);
    if (song !== null) {
      return res.status(200).send({
        isFound: true,
        artist: song.artist,
        title: song.title,
        albumImage: song.albumImage,
      });
    }
  }

  const audioStream = await getAudioStream(audioUrl);
  const audioBase64 = await getConvertedAudioBase64(audioStream, startTime, duration);
  // yup is not able to infer that shazamApiKey is a string because of .transform() so the assertion is safe here
  const recognizedAudio = await getRecognizedAudio(audioBase64, shazamApiKey as string);

  if (getConfig('NODE_ENV') !== 'testing' && isSongFound(recognizedAudio)) {
    await storeDatabaseSong({
      url: audioUrl,
      artist: recognizedAudio.artist,
      title: recognizedAudio.title,
      albumImage: recognizedAudio.albumImage,
    });
  }

  res.status(200).send(recognizedAudio);
});
