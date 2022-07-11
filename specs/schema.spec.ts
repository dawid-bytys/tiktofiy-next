import { recognitionSchema } from 'schemas/recognitionSchema';
import { validRecognitionSchemaMocks, invalidRecognitionSchemaMocks } from 'utils/mocks';

describe('testing recognitionSchema', () => {
	it('should validate the schema successfully', () => {
		for (const mock of validRecognitionSchemaMocks) {
			expect(recognitionSchema.isValidSync(mock)).toBe(true);
		}
	});

	it('should fail to validate the schema', () => {
		for (const mock of invalidRecognitionSchemaMocks) {
			expect(recognitionSchema.isValidSync(mock)).toBe(false);
		}
	});
});
