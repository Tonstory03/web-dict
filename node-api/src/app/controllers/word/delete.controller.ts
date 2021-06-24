import { NextFunction, Request, Response } from 'express';
import { Word } from '../../models/word';
import { httpNotfound, httpSuccess } from '../../utils/messages';

export const deleteDict = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { word } = req.body;
    const deleteWord = await Word.deleteByWord(word);
    const { deletedCount } = deleteWord;
    const dataResponse = deletedCount ? httpSuccess('Delete Success') : httpNotfound(`Word ${word} not Found`);
    res.json(dataResponse);
  } catch (err) {
    next(err);
  }
};
