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
  const firstPattern =
    /https:\/\/www.tiktok.com\/foryou\?is_copy_url=1&is_from_webapp=v1&item_id=[0-9]{19}/;
  const secondPattern = /https:\/\/www.tiktok.com\/@[a-zA-Z0-9_.]{1,}\/video\/[0-9]{19}.*/;
  const thirdPattern = /https:\/\/m.tiktok.com\/v\/[0-9]{19}.html.*/;

  if (firstPattern.test(url)) {
    return url.substring(70, 90);
  }

  if (secondPattern.test(url)) {
    return url.split('video/')[1].substring(0, 19);
  }

  if (thirdPattern.test(url)) {
    return url.substring(23, 42);
  }

  return;
};
