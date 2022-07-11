import fs from 'fs';
import validUrl from 'valid-url';
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
import { InvalidUrlError } from 'utils/errors';
import { generateRandomString, isSongFound, getMediaPath } from 'utils/utils';

export default withValidation(
	['POST'],
	recognitionSchema,
)(async (req, res) => {
	const {
		url,
		settings: { shazamApiKey, start, end },
	} = req.body;
	if (!validUrl.isUri(url)) {
		throw new InvalidUrlError('Invalid url has been provided');
	}

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

	const audioFilename = generateRandomString();
	const cutAudioFilename = generateRandomString();
	const cutConvertedAudioFilename = generateRandomString();

	await downloadAudio(audioUrl, audioFilename);
	await cutAudio(audioFilename, cutAudioFilename, start, end);
	await convertAudio(cutAudioFilename, cutConvertedAudioFilename);

	const audioBase64 = fs.readFileSync(getMediaPath(cutConvertedAudioFilename), {
		encoding: 'base64',
	});
	const recognizedAudio = await recognizeAudio(audioBase64, shazamApiKey);

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
