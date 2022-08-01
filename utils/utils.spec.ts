import { generateRandomString, getTikTokId } from 'utils/utils';
import type { SongFound, SongNotFound } from 'utils/types';
import { isSongFound } from 'utils/typeguards';
import { validTikTokUrls } from 'utils/mocks';

describe('testing utils functions', () => {
  it('should return true if song is found', () => {
    const song: SongFound = {
      isFound: true,
      title: 'Nothing',
      artist: 'Bruno Major',
      albumImage: 'https://i.ytimg.com/vi/QH2-TGUlwu4/default.jpg',
    };
    expect(isSongFound(song)).toBe(true);
  });

  it('should return false if song is not found', () => {
    const song: SongNotFound = {
      isFound: false,
    };
    expect(isSongFound(song)).toBe(false);
  });

  it('should return numeric random string', () => {
    const numericString = generateRandomString(16, true);
    expect(numericString).toHaveLength(16);
    expect(numericString).toMatch(/^[0-9]+$/);
  });

  it('should return random string', () => {
    const numericString = generateRandomString(16);
    expect(numericString).toHaveLength(16);
    expect(numericString).toMatch(/^[a-zA-Z0-9]+$/);
  });

  it('should return a tiktok id', () => {
    validTikTokUrls.map(url => expect(getTikTokId(url)).toHaveLength(19));
  });
});
