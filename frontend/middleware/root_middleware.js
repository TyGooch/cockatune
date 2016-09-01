import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import SessionMiddleware from '../middleware/session_middleware';
import ArtistMiddleware from '../middleware/artist_middleware';

const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ArtistMiddleware,
  loggerMiddleware
);

export default RootMiddleware;
