import * as mongoose from 'mongoose';
import WordSchema from './word.schema';
import { IWord } from './index';

const WordModel = mongoose.model<IWord>('word', WordSchema, 'word');

export class Word {
  static getModel() {
    return WordModel;
  }

  static async init(word: string, options: object = {}) {
    return new WordModel({ word }).save(options);
  }

  static async create(word: object) {
    return new WordModel({ word }).save();
  }

  static update(condition: object, update: object) {
    return WordModel.findOneAndUpdate(condition, update);
  }

  static updateById(id: any, update: object) {
    return WordModel.findByIdAndUpdate(id, update);
  }

  static remove(id: any) {
    return WordModel.findByIdAndRemove(id);
  }

  static deleteByWord(word: string) {
    return WordModel.deleteOne({ word });
  }

  static findById(id: any, fields = '') {
    return WordModel.findById(id, fields);
  }

  static findOne(condition: object) {
    return WordModel.findOne(condition);
  }

  static findAll(condition: object = {}, fields = '') {
    return WordModel.find(condition, fields);
  }

  static insertMany(docs, options = {}) {
    return WordModel.insertMany(docs, options);
  }
}
