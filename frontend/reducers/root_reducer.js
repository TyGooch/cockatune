import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';
import SongReducer from './song_reducer';

export default combineReducers({
  session: SessionReducer,
  artists: ArtistReducer,
  currentSong: SongReducer
});
