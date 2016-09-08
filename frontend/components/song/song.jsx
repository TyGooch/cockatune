import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.playPause = this.playPause.bind(this);
    this.songButton = this.songButton.bind(this);
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

  render() {
    return (
      <div className = 'song-button'>
        <img src={this.songButton()} onClick={this.playPause} className="play-button"></img>
        <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/VisualEditor_-_Icon_-_Add-item.svg/2000px-VisualEditor_-_Icon_-_Add-item.svg.png'
          onClick={this.playPause} className='add-button' />
      </div>
    );
  }

}

export default Song;
