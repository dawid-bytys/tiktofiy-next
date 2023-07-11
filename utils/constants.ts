// Client
const DOMAIN_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://incredible-sprite-a909b6.netlify.app'
    : 'http://localhost:3000';

export const SONGS_ENDPOINT = '/api/songs';
export const SONGS_RECOGNITION_ENDPOINT = SONGS_ENDPOINT + '/recognition';

export const SONGS_BASE_URL = DOMAIN_URL + SONGS_ENDPOINT;
export const SONGS_RECOGNITION_BASE_URL = DOMAIN_URL + SONGS_RECOGNITION_ENDPOINT;

// Server
export const TIKTOK_API_URL = 'https://tiktok.com/api/item/detail/?agent_user=&itemId=';
export const SHAZAM_API_URL = 'https://shazam.p.rapidapi.com/songs/v2/detect';
