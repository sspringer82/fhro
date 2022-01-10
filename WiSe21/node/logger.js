import { join } from 'path';
import { createWriteStream } from 'fs';

import morgan from 'morgan';

import __dirname from './dirname.js';

export default function logger(app) {
  const accessLogStream = createWriteStream(join(__dirname, 'access.log'), {
    flags: 'a',
  });
  app.use(morgan('combined', { stream: accessLogStream }));
}
