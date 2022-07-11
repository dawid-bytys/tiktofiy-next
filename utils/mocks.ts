// recognitionSchema mocks
export const validRecognitionSchemaMocks = [
  {
    url: 'https://www.google.com/',
    settings: {
      shazamApiKey: null,
      start: 0,
      end: 0,
    },
  },
  {
    url: 'https://www.google.com/',
    settings: {
      shazamApiKey: null,
      start: 0,
      end: 7,
    },
  },
  {
    url: 'https://www.google.com/',
    settings: {
      shazamApiKey: 'some-key',
      start: 0,
      end: 7,
    },
  },
];

export const invalidRecognitionSchemaMocks = [
  {
    url: 'https://www.google.com/',
    settings: {
      shazamApiKey: null,
      start: 0,
      end: -1,
    },
  },
  {
    url: 'https://www.google.com/',
    settings: {
      shazamApiKey: null,
      start: -1,
      end: 0,
    },
  },
  {
    url: 'https://www.google.com/',
    settings: {
      shazamApiKey: null,
      end: 0,
    },
  },
  {
    url: 'https://www.google.com/',
    settings: {
      shazamApiKey: null,
      start: 0,
    },
  },
  {
    url: 'https://www.google.com/',
  },
];
