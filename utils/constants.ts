import { getConfig } from './config';

// Client
export const ROBOTS =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

export const DOMAIN_URL =
  getConfig('NODE_ENV') === 'production' ? 'https://tiktofiy.com' : 'http://localhost:3000';

export const AUDIO_ENDPOINT = '/api/audio/recognize';
export const SONGS_ENDPOINT = '/api/songs';

export const AUDIO_BASE_URL = DOMAIN_URL + AUDIO_ENDPOINT;
export const SONGS_BASE_URL = DOMAIN_URL + SONGS_ENDPOINT;

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Image',
    accessor: 'albumImage',
  },
  {
    Header: 'Artist',
    accessor: 'artist',
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Audio',
    accessor: 'url',
  },
];

// Server
export const TIKTOK_API_URL = 'https://tiktok.com/api/item/detail/?agent_user=&itemId=';
export const SHAZAM_API_URL = 'https://shazam.p.rapidapi.com/songs/v2/detect';
