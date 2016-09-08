import React from 'react';
import PlaylistIndex from './playlist_index';
import SongIndex from '../song/song_index';

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.getPlaylistSongs = this.getPlaylistSongs.bind(this);
  }

  getPlaylistSongs(){
    const songs = [];
    Object.keys(this.props.artists).forEach(key => {
      this.props.artists[key].songs.forEach(song => songs.push(song));
    });

    const playlistSongs = [];
    this.props.playlist.playlist_songs.forEach(pSong => {
      playlistSongs.push(songs[pSong.song_id]);
    });
    return(playlistSongs);
  }
  render(){
    if(Object.keys(this.props.playlist).length > 0){
      const playlistSongs = this.getPlaylistSongs();
      return(
        <div className = "playlist-show-container">
          {this.props.playlist.name}
          <SongIndex songs={playlistSongs} />
        </div>
      );
    }
    else{
      return <div></div> ;
    }

  }
}
export default Playlist;
