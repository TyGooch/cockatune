import { ArtistConstants } from '../actions/artist_actions';
import merge from 'lodash/merge';

const ArtistReducer = function(state = {}, action){
  switch(action.type){
    case ArtistConstants.RECEIVE_ARTISTS:
      return action.artists;
    case ArtistConstants.RECEIVE_ARTIST:
      const newArtist = {[action.artist.id]: action.artist};
      return merge({}, state, newArtist);
    default:
      return state;
  }
};



export default ArtistReducer;
