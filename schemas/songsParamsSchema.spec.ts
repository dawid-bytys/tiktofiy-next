import { invalidSongsParamsSchemaMocks, validSongsParamsSchemaMocks } from 'utils/mocks';
import { songsParamsSchema } from './songsParamsSchema';

describe('testing songsParamsSchema', () => {
  it('should validate all schemas successfully', () => {
    for (const mock of validSongsParamsSchemaMocks) {
      expect(songsParamsSchema.isValidSync(mock)).toBe(true);
    }
  });

  it('should fail to validate all schemas', () => {
    for (const mock of invalidSongsParamsSchemaMocks) {
      expect(songsParamsSchema.isValidSync(mock)).toBe(false);
    }
  });
});
