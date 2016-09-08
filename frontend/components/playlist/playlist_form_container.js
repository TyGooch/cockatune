import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
