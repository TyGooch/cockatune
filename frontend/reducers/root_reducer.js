import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';

export default combineReducers({
  session: SessionReducer,
  artist: ArtistReducer
});
