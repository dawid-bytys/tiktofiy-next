import Joi from 'joi';

export const AudioSchema = Joi.object({
  url: Joi.string().required(),
  settings: Joi.object({
    shazamApiKey: Joi.string().allow('').required(),
    start: Joi.number().required(),
    end: Joi.number().required(),
  }).required(),
})
  .required()
  .meta({ className: 'Audio' });
