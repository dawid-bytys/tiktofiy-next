import { object, number, string, ref } from 'yup';
import { getConfig } from 'utils/config';

export const recognitionSchema = object().shape(
  {
    url: string().trim().url('Provide a valid url').required('Url is required'),
    shazamApiKey: string()
      .trim()
      .nullable()
      .default(getConfig('SHAZAM_API_KEY'))
      .transform((value: string | null) => value || getConfig('SHAZAM_API_KEY')),
    startTime: number()
      .min(0, 'startTime must not be negative')
      .when('duration', {
        is: (duration?: number) => typeof duration === 'number',
        then: number().required('startTime is required when a duration is provided'),
      }),
    duration: number()
      .min(1, 'Duration must be positive')
      .when('startTime', {
        is: (startTime?: number) => typeof startTime === 'number',
        then: number()
          .required('Duration is required when a startTime is provided')
          .moreThan(ref<number>('startTime'), 'Duration must be greater than startTime'),
      }),
  },
  [
    ['startTime', 'duration'],
    ['duration', 'startTime'],
  ],
);
