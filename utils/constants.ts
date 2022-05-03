export const WEBSITE_URL = 'https://tiktofiy.com';
export const ROBOTS =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
export const BASE_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/audio/recognize'
    : 'https://tiktofiy.com/api/audio/recognize';
