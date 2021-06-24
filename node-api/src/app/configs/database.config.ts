import { DB_CONST } from '../utils/constants/db.constant';
import * as mongoose from 'mongoose';

class Database {
  constructor() {}

  connect = async (): Promise<void> => {
    try {
      (<any>mongoose).Promise = Promise;
      const options = this.getDefaultOptions({
        user: DB_CONST.USER,
        pass: DB_CONST.PASS,
        ...DB_CONST.OPTIONS,
      });
      const connect = await mongoose.connect(`${DB_CONST.URI}`, options);
      console.info('Connect database');
    } catch (err) {
      console.info(err.message);
      throw new Error(`Can't connect database`);
    }
  };

  init = async (): Promise<any> => {};

  getDefaultOptions = (options) => {
    const defaultOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    const removeOptions = Object.entries(options).reduce((acc, curr) => {
      const [k, v]: [string, any] = curr;
      if (![null, undefined, ''].includes(v)) {
        acc[k] = v;
      }
      return acc;
    }, {});
    return Object.assign(defaultOptions, removeOptions);
  };

  static getSession = async (): Promise<any> => mongoose.startSession();

  static async startSession() {
    const session = await this.getSession();
    session.startTransaction();
    return session;
  }

  static endSession = async (session, isCommited): Promise<any> => {
    (await isCommited) ? session.commitTransaction() : session.abortTransaction();
    session.endSession();
  };
}

export default Database;
