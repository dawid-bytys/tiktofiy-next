import { getConfig } from 'utils/config';

describe('testing getConfig function', () => {
  it('should return a value of type string', () => {
    const results = ['NODE_ENV', 'SHAZAM_API_KEY'].map(getConfig);
    results.map(result => expect(typeof result).toBe('string'));
  });
});
