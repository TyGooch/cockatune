import { connect } from 'react-redux';
import AddToPlaylistForm from './add_to_playlist_form';
import { addSongToPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => ({
  addSongToPlaylist: (playlist, song) => dispatch(addSongToPlaylist(playlist, song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToPlaylistForm);
