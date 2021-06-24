// load environment.
require('./app/configs/dotenv.config');
import { Server } from './app';

(async () => {
  await new Server().start();
  // console.log = () => {}
})();
