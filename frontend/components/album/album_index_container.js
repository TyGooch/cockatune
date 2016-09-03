import { connect } from 'react-redux';
// import { requestArtists } from '../../actions/artist_actions';
import AlbumIndex from './album_index';

const mapStateToProps = state => ({
  albums: state.artists[1].albums
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
)(AlbumIndex);
