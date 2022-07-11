// Client
export const ROBOTS =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

const DOMAIN_URL =
  process.env.NODE_ENV === 'production' ? 'https://tiktofiy.com' : 'http://localhost:3000';

export const SONGS_ENDPOINT = '/api/songs';
export const SONGS_RECOGNITION_ENDPOINT = SONGS_ENDPOINT + '/recognition';

export const SONGS_BASE_URL = DOMAIN_URL + SONGS_ENDPOINT;
export const SONGS_RECOGNITION_BASE_URL = DOMAIN_URL + SONGS_RECOGNITION_ENDPOINT;

export const TABLE_TITLES = ['Id', 'Cover', 'Artist', 'Title'] as const;

// Server
export const TIKTOK_API_URL = 'https://tiktok.com/api/item/detail/?agent_user=&itemId=';
export const SHAZAM_API_URL = 'https://shazam.p.rapidapi.com/songs/v2/detect';
