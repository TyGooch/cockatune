import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.playPause = this.playPause.bind(this);
    this.playPauseIcon = this.playPauseIcon.bind(this);
  }

  playPause () {
   if (window.as[0].mp3 !== this.props.song.audio_url) {
     this.props.playSong(this.props.song);
   } else if (!window.as[0].playing) {
     window.as[0].play();
   } else {
     window.as[0].pause();
   }
 }

 playPauseIcon () {
    if (window.as[0].playing && this.props.currentSong.id === this.props.song.id) {
      return "http://findicons.com/files/icons/2579/iphone_icons/40/pause.png" ;
    } else {
      return "http://livingthingshabitat.weebly.com/uploads/2/0/5/9/20594030/5020026.png" ;
    }
  }

  render() {
    return (
      <div>
        <img src={this.playPauseIcon()} onClick={this.playPause} className="play-button"></img>
      </div>
    );
  }

}

export default Song;
