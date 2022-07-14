import { withValidation } from 'hofs/withValidation';
import { recognitionSchema } from 'schemas/recognitionSchema';
import { validSchemaHttpRequestMocks } from 'utils/mocks';

describe('testing withValidation HOF', () => {
  it('should pass the validation', () => {
    const func = withValidation(['POST'])((_req, res) => {
      res.send('ok');
    });

    for (const mock of validSchemaHttpRequestMocks) {
      expect(func(mock, 'res' as any));
    }
  });
});
