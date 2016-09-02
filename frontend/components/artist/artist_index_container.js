import { connect } from 'react-redux';
import { requestArtists } from '../../actions/artist_actions';
import ArtistIndex from './artist_index';

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = dispatch => ({
  requestArtists: () => dispatch(requestArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
