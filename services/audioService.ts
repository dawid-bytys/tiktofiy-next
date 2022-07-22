import fs from 'fs';
import { pipeline } from 'stream/promises';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import axios from 'axios';
import ffmpeg from 'fluent-ffmpeg';
import randomUseragent from 'random-useragent';
import { SHAZAM_API_URL, TIKTOK_API_URL } from 'utils/constants';
import {
  AudioConvertError,
  AudioCutError,
  AudioDownloadError,
  InvalidUrlFormatError,
  ShazamRequestError,
  TikTokRequestError,
  TikTokUnavailableError,
} from 'utils/errors';
import { getTikTokId, getMediaPath } from 'utils/utils';
import type {
  RecognitionResult,
  ShazamResponse,
  TikTokMetadata,
  ExtendedAxiosResponse,
} from 'utils/types';

// Configure ffmpeg
ffmpeg.setFfmpegPath(ffmpegPath.path);

export const getTikTokFinalUrl = async (url: string) => {
  const response: ExtendedAxiosResponse = await axios.get(url);
  if (response.status !== 200 || typeof response.request === 'undefined') {
    throw new TikTokRequestError(
      'Something went wrong while performing the TikTok request, try again',
    );
  }

  const tiktokId = getTikTokId(response.request?.res.responseUrl);
  if (tiktokId === undefined) {
    throw new InvalidUrlFormatError('Provide a valid format of TikTok url');
  }

  return TIKTOK_API_URL + tiktokId;
};

// User-Agent header is required by TikTok to perform a successful request
export const getTikTokAudioUrl = async (url: string) => {
  try {
    const response = await axios.get<TikTokMetadata>(url, {
      headers: {
        'user-agent': randomUseragent.getRandom(),
      },
    });
    if (response.status === 10217) {
      throw new TikTokUnavailableError('Provided TikTok is not available');
    }
    return response.data.itemInfo.itemStruct.music.playUrl;
  } catch (err) {
    throw new TikTokRequestError(
      'Something went wrong while performing the TikTok request, try again',
    );
  }
};

export const downloadAudio = async (url: string, output: string) => {
  try {
    const response = await axios.get(url, {
      responseType: 'stream',
    });
    await pipeline(response.data, fs.createWriteStream(getMediaPath(output)));
  } catch (err) {
    throw new AudioDownloadError('Failed to download the audio file, try again');
  }
};

export const cutAudio = (
  input: string,
  output: string,
  start?: number,
  end?: number,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg(getMediaPath(input))
      .outputOptions('-ss', `${start || 0}`, '-to', `${end || 5}`)
      .output(getMediaPath(output))
      .on('end', () => {
        resolve();
      })
      .on('error', () => {
        reject(new AudioCutError('Could not cut the audio'));
      })
      .run();
  });
};

export const convertAudio = (input: string, output: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg(getMediaPath(input))
      .outputOptions('-f', 's16le', '-ac', '1', '-ar', '44100')
      .output(getMediaPath(output))
      .on('end', () => {
        resolve();
      })
      .on('error', () => {
        reject(new AudioConvertError('Could not convert the audio'));
      })
      .run();
  });
};

export const recognizeAudio = async (
  audioBase64: string,
  shazamApiKey: string,
): Promise<RecognitionResult> => {
  try {
    const {
      data: { track },
    } = await axios.post<ShazamResponse>(SHAZAM_API_URL, audioBase64, {
      headers: {
        'content-type': 'text/plain',
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
        'x-rapidapi-key': shazamApiKey,
      },
    });
    if (typeof track === 'undefined') {
      return {
        isFound: false,
      };
    }

    return {
      isFound: true,
      artist: track.subtitle,
      title: track.title,
      albumImage: track.images?.background,
    };
  } catch (err) {
    throw new ShazamRequestError(
      'Shazam service is probably temporarily unavailable, try again later or check API Key',
    );
  }
};
