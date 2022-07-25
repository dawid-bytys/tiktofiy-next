import { object, number, ref } from 'yup';

export const songsParamsSchema = object().shape({
  skip: number().min(0, 'Skip must not be negative'),
  take: number().min(1, 'Take must be positive'),
});
