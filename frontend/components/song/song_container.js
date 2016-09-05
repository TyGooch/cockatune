import React from 'react';
import { connect } from 'react-redux';
import Song from './song';
import { playSong } from '../../actions/song_actions';

const mapStateToProps = (state) => ({
  currentSong: state.currentSong
});

const mapDispatchToProps = dispatch => ({
  playSong: (id) => dispatch(playSong(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Song);
