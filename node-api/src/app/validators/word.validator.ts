import { checkSchema, check } from 'express-validator';
import { RequestHandler } from 'express';
import { validator } from '../configs/validator.config';

const wordBodySchema = checkSchema({
  word: {
    in: ['body'],
    errorMessage: 'word is required.',
    isString: true,
  },
});

export const validateWordBody: RequestHandler[] = validator(wordBodySchema);
