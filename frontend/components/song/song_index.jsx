import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  render(){
    let songIndexItems = Object.keys(this.props.songs).map(key => (
      <SongIndexItem song = {this.props.songs[key]} key = {key} />
    ));

    return(
        <ul className='song-index-container'>
          {songIndexItems}
        </ul>
    );
  }
}

export default SongIndex;
