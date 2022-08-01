import { generateRandomString } from './utils';

// recognitionSchema mocks
export const validRecognitionSchemaMocks = [
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    startTime: 0,
    duration: 10,
  },
  {
    url: 'https://www.google.com/',
    startTime: 0,
    duration: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: null,
    startTime: 0,
    duration: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: '',
    startTime: 0,
    duration: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: '',
  },
  {
    url: 'https://www.google.com/',
  },
];

export const invalidRecognitionSchemaMocks = [
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    startTime: 10,
    duration: 0,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    startTime: 0,
    duration: 0,
  },
  {
    url: '',
    shazamApiKey: 'some-key',
    startTime: 0,
    duration: 10,
  },
  {
    url: null,
    shazamApiKey: 'some-key',
    startTime: 0,
    duration: 10,
  },
  {
    shazamApiKey: 'some-key',
    startTime: 0,
    duration: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    startTime: -1,
    duration: -1,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    startTime: -1,
    duration: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    startTime: 0,
    duration: -1,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    startTime: 0,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    duration: 10,
  },
];

// HTTP mocks
export const mockRequest = {
  method: 'POST',
  url: '/api/songs/recognition',
  body: {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    startTime: 0,
    duration: 10,
  },
};

// TikTok URLs mocks
export const validTikTokUrls = Array.from({ length: 10 }, () => {
  const url = `https://www.tiktok.com/@${generateRandomString(6)}/${generateRandomString(
    19,
    true,
  )}`;
  return url;
});
