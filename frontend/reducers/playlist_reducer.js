import { PlaylistConstants } from '../actions/playlist_actions';
import merge from 'lodash/merge';

const PlaylistReducer = function(state = {}, action){
  switch(action.type){
    case PlaylistConstants.RECEIVE_PLAYLISTS:
      return action.playlists;
    case PlaylistConstants.RECEIVE_PLAYLIST:
      const newPlaylist = {[action.playlist.id]: action.playlist};
      return merge({}, state, newPlaylist);
    case PlaylistConstants.RECEIVE_SONG:
      const newState = merge({}, state);
      const newId = newState[action.song.playlist_id].playlist_songs.length;
      newState[action.song.playlist_id].playlist_songs.push({playlist_id: action.song.playlist_id, song_id: action.song.song.id});
      return newState;

    default:
      return state;
  }
};

export default PlaylistReducer;
