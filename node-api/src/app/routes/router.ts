import * as express from 'express';

export class Router {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
  }
}
