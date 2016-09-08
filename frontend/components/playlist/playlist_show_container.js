import { connect } from 'react-redux';
import Playlist from './playlist';

const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.params.playlistId);
  let playlist = {};
  let artists = state.artists;
  if(Object.keys(state.artists).length > 0){
    playlist = state.playlists[playlistId] || {};
  }
  return{
    playlistId,
    playlist,
    artists
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
