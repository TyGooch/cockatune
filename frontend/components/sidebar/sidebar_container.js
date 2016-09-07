import { connect } from 'react-redux';
// import Greeting from './greeting';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  currentSong: state.currentSong,
  artists: state.artists
});

export default connect(
  mapStateToProps
)(Sidebar);
