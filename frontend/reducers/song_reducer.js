import { SongConstants } from '../actions/song_actions';
import merge from 'lodash/merge';

const SongReducer = (state = null, action) => {
  switch(action.type) {
    case SongConstants.PLAY_SONG:
      // return merge({}, state, action.song);
      return action.song;
    default:
      return state;
  }
};

export default SongReducer;
