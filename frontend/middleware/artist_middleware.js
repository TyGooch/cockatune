// Artist API Util
import { fetchArtists, fetchArtist } from '../util/artist_api_util';
//Artist Action
import { requestArtists,
         requestArtist,
         receiveArtists,
         receiveArtist,
         ArtistConstants
       } from '../actions/artist_actions';

export default ({getState, dispatch}) => next => action => {
  const artistsSuccess = data => dispatch(receiveArtists(data));
  const artistSuccess = data => dispatch(receiveArtist(data));
  const result = next(action);

  switch(action.type) {
    case ArtistConstants.REQUEST_ARTISTS:
      fetchArtists(artistsSuccess);
      break;
    case ArtistConstants.REQUEST_ARTIST:
      fetchArtist(action.id, artistSuccess);
      break;
    default:
      break;
  }
  return result;
};
