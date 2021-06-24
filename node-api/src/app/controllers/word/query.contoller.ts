import { NextFunction, Request, Response } from 'express';
import { Word } from '../../models/word';
import { httpSuccess } from '../../utils/messages/http.message';

export const queryDict = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const words = await Word.findAll();
    res.json(httpSuccess('Success', { data: words }));
  } catch (err) {
    next(err);
  }
};
