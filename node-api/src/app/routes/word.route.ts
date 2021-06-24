import { Router } from './router';
import { createDict, deleteDict, queryDict, updateDict } from '../controllers/word';
import { validateWordBody } from '../validators/word.validator';

export class WordRoute extends Router {
  constructor() {
    super();
    this.routeGET();
    this.routePOST();
    this.routePUT();
    this.routeDelete();
  }

  routeGET = () => {
    this.router.get(this.concatRoute('/'), queryDict);
  };

  routePOST = () => {
    this.router.post(this.concatRoute('/'), validateWordBody, createDict);
  };

  routePUT = () => {
    this.router.put(this.concatRoute('/'), updateDict);
  };

  routeDelete = () => {
    this.router.delete(this.concatRoute('/'), validateWordBody, deleteDict);
  };

  concatRoute = (path) => `/word${path}`;
}
