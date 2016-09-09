import React from 'react';
import Modal from 'react-modal';

import AddToPlaylistContainer from '../playlist/add_to_playlist_container';


class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.playPause = this.playPause.bind(this);
    this.songButton = this.songButton.bind(this);
    this.addButton = this.addButton.bind(this);
    // this.getPlaylistFromUser = this.getPlaylistFromUser.bind(this);
    this._handleModalClick = this._handleModalClick.bind(this);
    this._modalClose = this._modalClose.bind(this);
  }

  playPause() {
   if (window.as[0].mp3 !== this.props.song.audio_url) {
     this.props.playSong(this.props.song);
     this.forceUpdate();
   } else if (!window.as[0].playing) {
     window.as[0].play();
     this.forceUpdate();
   } else {
     window.as[0].pause();
     this.forceUpdate();
   }
 }

 songButton() {
  if (window.as[0].playing && this.props.currentSong.id === this.props.song.id) {
    return "http://res.cloudinary.com/dtatkxxcm/image/upload/v1473113147/pause_dj_music_club_party-128_ietf2s.png" ;
  } else {
      return "http://res.cloudinary.com/dtatkxxcm/image/upload/v1473113149/play_dj_music_club_party-512_n8xnqx.png" ;
    }
  }

  addButton() {
    if(this.props.currentUser){
      return(
        <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/VisualEditor_-_Icon_-_Add-item.svg/2000px-VisualEditor_-_Icon_-_Add-item.svg.png'
          onClick={this._handleModalClick} className='add-button' />
      );
    }
    else{
      return(
        <div></div>
      );
    }
  }

  _handleModalClick(){
    this.setState({ modalOpen: true });
  }

  _modalClose(){
    this.setState({ modalOpen: false });
  }

  // getPlaylistFromUser(song) {
  //   if(Object.keys(this.props.playlists).length > 0){
  //     this.props.addSongToPlaylist(this.props.playlists[1], song);
  //   }
  // }


  render() {
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

    return (
      <div className = 'song-button'>
        <img src={this.songButton()} onClick={this.playPause} className="play-button"></img>
        {this.addButton()}


          <Modal
            isOpen = {this.state.modalOpen} onRequestClose={this._modalClose} style = {style} >
            <AddToPlaylistContainer closeModal = {this._modalClose} song = {this.props.song}/>
          </Modal>
      </div>
    );
  }

}

export default Song;
