import { connect } from 'react-redux';
import Album from './album';

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.params.artistId);
  const albumId = parseInt(ownProps.params.albumId);
  let artist = {};
  let album = {};
  if(Object.keys(state.artists).length > 0){
    artist = state.artists[artistId];
    album = state.artists[artistId].albums.filter(el => el.id === albumId) || {};
  }
  return{
    artistId,
    artist,
    albumId,
    album
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
