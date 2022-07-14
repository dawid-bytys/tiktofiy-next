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
    start: number()
      .min(0, 'Start must not be negative')
      .when('end', {
        is: (end?: number) => typeof end === 'number',
        then: number().required('Start is required when an end is provided'),
      }),
    end: number()
      .min(1, 'End must be positive')
      .when('start', {
        is: (start?: number) => typeof start === 'number',
        then: number()
          .required('End is required when a start is provided')
          .moreThan(ref<number>('start'), 'End must be greater than start'),
      }),
  },
  [
    ['start', 'end'],
    ['end', 'start'],
  ],
);
