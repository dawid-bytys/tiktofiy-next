import HttpRequestMock from 'http-request-mock';

// recognitionSchema mocks
export const validRecognitionSchemaMocks = [
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    start: 0,
    end: 10,
  },
  {
    url: 'https://www.google.com/',
    start: 0,
    end: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: null,
    start: 0,
    end: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: '',
    start: 0,
    end: 10,
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
    start: 10,
    end: 0,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    start: 0,
    end: 0,
  },
  {
    url: '',
    shazamApiKey: 'some-key',
    start: 0,
    end: 10,
  },
  {
    url: null,
    shazamApiKey: 'some-key',
    start: 0,
    end: 10,
  },
  {
    shazamApiKey: 'some-key',
    start: 0,
    end: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    start: -1,
    end: -1,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    start: -1,
    end: 10,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    start: 0,
    end: -1,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    start: 0,
  },
  {
    url: 'https://www.google.com/',
    shazamApiKey: 'some-key',
    end: 10,
  },
];

// HTTP request mocks
export const validSchemaHttpRequestMocks = validRecognitionSchemaMocks.map(mock => ({
  url: 'api/songs/recognition',
  method: 'POST',
  body: mock,
}));

export const invalidSchemaHttpRequestMocks = invalidRecognitionSchemaMocks.map(mock => ({
  url: 'api/songs/recognition',
  method: 'POST',
  body: mock,
}));
