import { PlaylistConstants } from '../actions/playlist_actions';
import merge from 'lodash/merge';

const PlaylistReducer = function(state = {}, action){
  switch(action.type){
    case PlaylistConstants.RECEIVE_PLAYLISTS:
      return action.playlists;
    case PlaylistConstants.RECEIVE_PLAYLIST:
      const newPlaylist = {[action.playlist.id]: action.playlist};
      return merge({}, state, newPlaylist);
    default:
      return state;
  }
};

export default PlaylistReducer;
