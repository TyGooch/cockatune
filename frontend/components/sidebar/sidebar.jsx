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
      const PlaylistTitleItems = userPlaylists.map((userPlaylist, idx) => (
        <PlaylistTitleItem playlist = {userPlaylist} key = {idx}/>
      ));
      return(
        <div className = 'sidebar-playlist-container-'>
          <div className = 'sidebar-playlist-header'>Your Playlists</div>
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
      <div className = 'now-playing-container'>
        <div className = 'now-playing-header'>Now Playing</div>
        <div className = 'now-playing-title'>{currentSong.title}</div>
        <div className = 'now-playing-artist'>{artists[currentSong.artist_id].name}</div>
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
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    };

    this._handleModalClick = this._handleModalClick.bind(this);
    this._modalClose = this._modalClose.bind(this);
    this.createPlaylistButton = this.createPlaylistButton.bind(this);
  }




  _handleModalClick(){
    this.setState({ modalOpen: true });
  }

  _modalClose(){
    this.setState({ modalOpen: false });
  }

  createPlaylistButton(){
    if(this.props.currentUser){
      return(
        <button className = 'create-playlist-button' onClick={this._handleModalClick}>
          Create Playlist
        </button>
      );
    }
    else{
      return(
        <div></div>
      );
    }
  }

  render(){
    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(0,0,0,0.75)'
      },
      content : {
        position        : 'fixed',
        top             : '200px',
        left            : '400px',
        right           : '400px',
        bottom          : '200px',
        border          : '1px solid #ccc',
        borderRadius : '5px',
        padding         : '20px',
        textAlign : 'center',
        backgroundColor : 'rgba(0,0,0,0.45)',
        color : 'white'
      }
    };

    return(
      <div className ='sidebar'>
        {playlistSidebar(this.props.currentUser, this.props.playlists)}

      {this.createPlaylistButton()}

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
