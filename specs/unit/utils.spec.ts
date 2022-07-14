import path from 'path';
import { isSongFound, getMediaPath, generateRandomString, getTikTokId } from 'utils/utils';
import type { SongFound, SongNotFound } from 'utils/types';

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

  it('should return the path to the .mp3 file', () => {
    expect(getMediaPath('file')).toBe(path.resolve('media', 'file.mp3'));
  });

  it('should return a random string', () => {
    expect(generateRandomString(8)).toHaveLength(8);
  });

  it('should throw an error if length is less than 1', () => {
    expect(() => generateRandomString(0)).toThrowError('Length must be greater than 0');
  });

  it('should throw an error if length is not even', () => {
    expect(() => generateRandomString(3)).toThrowError('Length must be even');
  });

  it('should return a tiktok id', () => {
    const validTikTokUrls = [
      'https://www.tiktok.com/@sherryj_054/video/7119104964017933594?is_copy_url=1&is_from_webapp=v1',
      'https://vm.tiktok.com/ZMNP6b5wU',
    ];
    validTikTokUrls.map(url => expect(getTikTokId(url)).toHaveLength(19));
  });
});
