import { object, number, string } from 'yup';
import { getConfig } from 'utils/config';

export const recognitionSchema = object({
  url: string().required(),
  settings: object({
    shazamApiKey: string()
      .default(getConfig('SHAZAM_API_KEY'))
      .nullable()
      .required()
      .transform(value => (typeof value === 'string' && !!value.length ? value : undefined)),
    start: number().required().min(0),
    end: number().required().min(0),
  }).required(),
}).required();
