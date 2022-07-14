import fs from 'fs';
import { clearLocalMedia } from 'services/mediaService';
import { getMediaPath } from 'utils/utils';

beforeAll(() => {
  const mediaPath = getMediaPath('mock');
  fs.writeFileSync(mediaPath, 'mock');
});

describe('testing clearLocalMedia service', () => {
  it('should clear a mock.mp3 file in the media folder', async () => {
    await expect(clearLocalMedia(['mock'])).resolves.toBeUndefined();
  });
});
