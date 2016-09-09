import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

import PlaylistTitleItem from '../playlist/playlist_title_item';
import PlaylistFormContainer from '../playlist/playlist_form_container';

export const playlistSidebar = (currentUser, playlists) => {
  if(currentUser && playlists){
    if(Object.keys(playlists).length > 0){
      const userPlaylists = [];

      Object.keys(playlists).forEach(key => {
        if(playlists[key].user_id === currentUser.id){
          userPlaylists.push(playlists[key]);
        }
      });
      const PlaylistTitleItems = userPlaylists.map(userPlaylist => (
        <PlaylistTitleItem playlist = {userPlaylist} />
      ));
      return(
        <div>
          Your Playlists
          <ul className = 'sidebar-playlist-index'>
            {PlaylistTitleItems}
          </ul>
        </div>
      );
    }
  }
  else{
    return <div></div> ;
  }
};

export const nowPlaying = (currentSong, artists) => {
  if(currentSong){
    return(
      <div>
        Now Playing
        <br />
        {currentSong.title}
        <br />
        {artists[currentSong.artist_id].name}
        <br />
        <Link to={`/artists/${currentSong.artist_id}/albums/${currentSong.album_id}`}>
          <img src = {artists[currentSong.artist_id].albums.filter(el => el.id === currentSong.album_id)[0].album_picture_url}
            className = 'sidebar-album-picture' />
        </Link>
      </div>
    );
  }
  else{
    return(
      <div></div>
    );
  }
};

class Sidebar extends React.Component {
  constructor({currentSong, artists, playlists, currentUser}){
    super({currentSong, artists, playlists, currentUser});
    this.state = {
      modalOpen: false
    };

    this._handleModalClick = this._handleModalClick.bind(this);
    this._modalClose = this._modalClose.bind(this);
  }




  _handleModalClick(){
    this.setState({ modalOpen: true });
  }

  _modalClose(){
    this.setState({ modalOpen: false });
  }

  render(){
    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.75)'
      },
      content : {
        position        : 'fixed',
        top             : '100px',
        left            : '150px',
        right           : '150px',
        bottom          : '100px',
        border          : '1px solid #ccc',
        padding         : '20px'
      }
    };

    return(
      <div className ='sidebar'>
        {playlistSidebar(this.props.currentUser, this.props.playlists)}

        <button className = 'create-playlist-button' onClick={this._handleModalClick}>
          Create Playlist
        </button>

        <Modal
          isOpen = {this.state.modalOpen} onRequestClose={this._modalClose} style={style}>
          <PlaylistFormContainer closeModal = {this._modalClose} />
        </Modal>

        <div className = 'sidebar-playing-container'>
          {nowPlaying(this.props.currentSong, this.props.artists)}
        </div>
      </div>
  );
}
}

export default Sidebar;
