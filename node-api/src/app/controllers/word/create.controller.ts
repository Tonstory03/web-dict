import { NextFunction, Request, Response } from 'express';
import { Word } from '../../models/word';
import { httpSuccess } from '../../utils/messages';

export const createDict = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { word } = req.body;
    await Word.create(word);
    res.json(httpSuccess());
  } catch (err) {
    next(err);
  }
};
