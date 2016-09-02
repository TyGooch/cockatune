import { connect } from 'react-redux';
import Artist from './artist';

import { requestArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.params.artistId);
  const artist = state.artists[artistId] || {};
  return{
    artistId,
    artist
  };
};

const mapDispatchToProps = dispatch => ({
  requestArtist: id => dispatch(requestArtist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
