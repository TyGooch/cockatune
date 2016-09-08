
// Playlist API Util
import { fetchPlaylists,
         fetchPlaylist,
         createPlaylist
       } from '../util/playlist_api_util';
// Playlist Action
import { requestPlaylists,
         receivePlaylist,
         receivePlaylists,
         PlaylistConstants
       } from '../actions/playlist_actions';

export default ({getState, dispatch}) => next => action => {
  const playlistsSuccess = data => dispatch(receivePlaylists(data));
  const playlistSuccess = data => dispatch(receivePlaylist(data));
  const result = next(action);
  switch(action.type){
    case PlaylistConstants.REQUEST_PLAYLISTS:
      const filters = getState().filters;
      fetchPlaylists(filters, playlistsSuccess);
      break;
    case PlaylistConstants.REQUEST_PLAYLIST:
      fetchPlaylist(action.id, playlistSuccess);
      break;
    case PlaylistConstants.CREATE_PLAYLIST:
      createPlaylist(action.playlist, playlistSuccess);
      break;
    default:
      break;
  }
  return result;
};
