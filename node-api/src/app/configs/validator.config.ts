import { validationResult, ValidationChain } from 'express-validator';
import { NextFunction, Request, Response, RequestHandler } from 'express';
import { httpBadRequest } from '../utils/messages/http.message';

const handlingError = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  if (error.isEmpty()) next();
  else {
    const errorMessage = error
      .formatWith(({ msg, param }) => `${msg}`)
      .array()
      .join(',');
    res.status(400).json(httpBadRequest(errorMessage));
  }
};

export const validator = (rules: ValidationChain[]): RequestHandler[] => {
  return [...rules, handlingError];
};
