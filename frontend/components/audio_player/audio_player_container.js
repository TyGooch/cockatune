import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './audio_player';

const mapStateToProps = (state, ownProps) => ({
  song: state.currentSong
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
