import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
  }

   playSong () {
    if (window.as) {
      if (this.props.song && this.props.song.audio_url != window.as[0].mp3 ) {
        window.as[0].load(this.props.song.audio_url);
        window.as[0].play();
      }
    }
  }

  render() {
    this.playSong();
    return (
      <div className="audio-player-container">
        <div><audio preload="none" /></div>
      </div>
    );
  }

}

export default AudioPlayer;
