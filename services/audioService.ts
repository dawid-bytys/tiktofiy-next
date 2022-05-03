import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import axios from 'axios';
import fetch from 'node-fetch';
import randomUseragent from 'random-useragent';
import { TIKTOK_API_URL } from '../utils/constants';
import {
  AudioDownloadError,
  InvalidUrlFormatError,
  TikTokRequestError,
  TikTokUnavailableError,
} from '../utils/errors';
import { getTikTokId, returnPath } from '../utils/utils';
import type { TikTokMetadata } from '../utils/types';

// Using node-fetch here because on Linux axios does not work as expected
export const getFinalUrl = async (url: string) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new TikTokRequestError(
      'Something went wrong while performing the TikTok request, try again',
    );
  }

  const tiktokId = getTikTokId(response.url);
  if (!tiktokId) {
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
    if (response.data.statusCode === 10217) {
      throw new TikTokUnavailableError('Provided TikTok is currently not available');
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

    const pipelineAsync = promisify(pipeline);
    void pipelineAsync(response.data, fs.createWriteStream(returnPath(`${output}.mp3`)));

    console.log('Successfully downloaded the audio file');
  } catch (err) {
    throw new AudioDownloadError('Failed to download the audio file, try again');
  }
};
