import { connect } from 'react-redux';
import Album from './album';

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.params.artistId);
  const albumId = parseInt(ownProps.params.albumId);
  const artist = state.artists[artistId] || {};
  const album = state.artists[artistId].albums[albumId-1] || {};
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
