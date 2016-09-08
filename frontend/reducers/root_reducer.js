import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';
import SongReducer from './song_reducer';
import UserReducer from './user_reducer';
import PlaylistReducer from './playlist_reducer';

export default combineReducers({
  session: SessionReducer,
  users: UserReducer,
  artists: ArtistReducer,
  playlists: PlaylistReducer,
  currentSong: SongReducer
});
