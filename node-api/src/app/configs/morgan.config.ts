import * as morgan from 'morgan';
import { Request } from 'express';

class MorganMiddleware {
  private ignorePaths: Set<string>;

  constructor() {
    // super(customFormat())
    this.ignorePaths = new Set([]);
  }

  isIgnorePath = (pathUrl) => this.ignorePaths.has(pathUrl);

  declareToken = () => {
    morgan.token('request-body', (req: Request) => {
      const [pathUrl]: Array<string> = req.originalUrl.split('?');
      return !this.isIgnorePath(pathUrl) //req.originalUrl.startsWith('/api/login')
        ? JSON.stringify(req.body)
        : '-';
    });
  };

  customFormat = () => {
    const formatMap = {
      DATETIME: ':date[iso]',
      METHOD: ':method',
      URL: ':url',
      REQUEST_BODY: ':request-body',
      STATUS: ':status',
      RESPONSE_TIME: ':response-time',
    };
    return Object.entries(formatMap)
      .map(([k, v]) => [k, v].join('|'))
      .join('|');
  };
}

export default MorganMiddleware;
