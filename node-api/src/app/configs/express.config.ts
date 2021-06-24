import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { createServer } from 'http';
import { NextFunction, Request, Response } from 'express';
import * as routes from '../routes';
import { ENV } from '../utils/constants';
import { CustomError } from '../types/CustomError';
import * as path from 'path';
// import { http_error } from '../utils/messages/responses/http.response'
import MorganMiddleware from './morgan.config';
// import { http_error } from '../utils/messages/responses/http.response'
import ErrnoException = NodeJS.ErrnoException;
import * as morgan from 'morgan';

export class Express {
  public app: express.Application;
  public morganMiddleware: MorganMiddleware;

  constructor() {
    this.app = express();
    this.morganMiddleware = new MorganMiddleware();
  }

  setMorgan = async (): Promise<void> => {
    this.app.use(morgan(this.morganMiddleware.customFormat()));
    this.morganMiddleware.declareToken();
  };

  setConfig = (): void => {
    this.app.disable('etag');
    this.app.disable('x-powered-by');
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  };

  setOrigin = (): void => {
    this.app.use(cors({ origin: '*', methods: ['GET', 'POST', 'OPTIONS'] }));
  };

  setPublic = (): void => {};

  setLoging = (): void => {};

  setRoute = (): void => {
    this.app.use('/api', [routes.wordRoute]);
  };

  exceptError = (): void => {
    this.app.use((req: Request, res: Response, next: NextFunction) => res.sendStatus(404));

    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      const [httpStatus, statusCode] = err instanceof CustomError ? [err.httpStatus, err.statusCode] : [500, '50000'];
      res.status(httpStatus).json({
        status: false,
        message: err.message,
        statusCode,
      });
    });
  };

  onerror = (error: ErrnoException): void => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    switch (error.code) {
      case 'EACCES':
        process.exit(1);
      case 'EADDRINUSE':
        process.exit(1);
      default:
        throw error;
    }
  };

  listen = (): void => {
    const port = ENV.APP_PORT || 8080;
    const server = createServer(this.app);
    console.log(ENV);
    server.listen(port, () => console.info(`Start Server with port ${port}`));
    server.on('error', this.onerror);
  };
}
