import React from 'react';
import { connect } from 'react-redux';
import Song from './song';
import { playSong } from '../../actions/song_actions';
import { requestPlaylists, addSongToPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  currentSong: state.currentSong,
  playlists: state.playlists,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  playSong: (id) => dispatch(playSong(id)),
  requestPlaylists: () => dispatch(requestPlaylists()),
  addSongToPlaylist: (playlist, song) => dispatch(addSongToPlaylist(playlist, song))
});

export default connect(mapStateToProps, mapDispatchToProps)(Song);
