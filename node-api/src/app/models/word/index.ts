import * as mongoose from 'mongoose';

export interface IWord extends mongoose.Document {
  word: string;
  createdAt: string;
  updatedAt: string;
}

export * from './word.model';
