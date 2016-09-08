import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import SessionMiddleware from '../middleware/session_middleware';
import ArtistMiddleware from '../middleware/artist_middleware';
import UserMiddleware from '../middleware/user_middleware';
import PlaylistMiddleware from '../middleware/playlist_middleware';

const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ArtistMiddleware,
  UserMiddleware,
  PlaylistMiddleware,
  loggerMiddleware
);

export default RootMiddleware;
