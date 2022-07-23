import crypto from 'crypto';
import path from 'path';

export const getMediaPath = (filename: string) => {
  return path.resolve('media', `${filename}.mp3`);
};

export const generateRandomString = (length: number) => {
  if (length < 1) {
    throw new Error('Length must be greater than 0');
  }

  if (length % 2 !== 0) {
    throw new Error('Length must be even');
  }

  return crypto.randomBytes(length / 2).toString('hex');
};

export const getTikTokId = (url: string) => {
  return new URL(url).pathname.split('/').at(-1);
};
