import { recognitionSchema } from 'schemas/recognitionSchema';
import { validRecognitionSchemaMocks, invalidRecognitionSchemaMocks } from 'utils/mocks';

describe('testing recognitionSchema', () => {
  it('should validate all schemas successfully', () => {
    for (const mock of validRecognitionSchemaMocks) {
      expect(recognitionSchema.isValidSync(mock)).toBe(true);
    }
  });

  it('should fail to validate all schemas', () => {
    for (const mock of invalidRecognitionSchemaMocks) {
      expect(recognitionSchema.isValidSync(mock)).toBe(false);
    }
  });
});
