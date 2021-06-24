import { Express } from './configs/express.config';
import Database from './configs/database.config';

export class Server {
  private express: Express;
  private database: Database;

  constructor() {}

  start = async (): Promise<void> => {
    try {
      this.express = new Express();
      this.database = new Database();
      await this.connectDatabase();
      await this.setting();
      await this.listen();
    } catch (err) {
      console.info(err.message);
      process.exit(0);
    }
  };

  setting = async (): Promise<void> => {
    await this.express.setMorgan();
    await this.express.setConfig();
    await this.express.setLoging();
    await this.express.setOrigin();
    await this.express.setPublic();
    await this.express.setRoute();
    await this.express.exceptError();
  };

  listen = async (): Promise<void> => {
    await this.express.listen();
  };

  connectDatabase = async (): Promise<void> => {
    await this.database.connect();
  };
}
