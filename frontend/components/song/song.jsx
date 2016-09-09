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
    this.getPlaylistFromUser = this.getPlaylistFromUser.bind(this);
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

  _handleModalClick(){
    this.setState({ modalOpen: true });
  }

  _modalClose(){
    this.setState({ modalOpen: false });
  }

  getPlaylistFromUser(song) {
    if(Object.keys(this.props.playlists).length > 0){
      this.props.addSongToPlaylist(this.props.playlists[1], song);
    }
  }

  // onClick={this.getPlaylistFromUser.bind(null, this.props.song)}

  render() {
    return (
      <div className = 'song-button'>
        <img src={this.songButton()} onClick={this.playPause} className="play-button"></img>
        <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/VisualEditor_-_Icon_-_Add-item.svg/2000px-VisualEditor_-_Icon_-_Add-item.svg.png'
          onClick={this._handleModalClick} className='add-button' />

          <Modal
            isOpen = {this.state.modalOpen} onRequestClose={this._modalClose} >
            <AddToPlaylistContainer closeModal = {this._modalClose} song = {this.props.song}/>
          </Modal>
      </div>
    );
  }

}

export default Song;
