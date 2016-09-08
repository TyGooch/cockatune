import React from 'react';
import PlaylistTitleItem from './playlist_title_item';

class PlaylistSidebarIndex extends React.Component {
  render(){
    let playlistSidebarIndexItems = Object.keys(this.props.playlists).map((key, idx) => (
      <PlaylistTitleItem playlist = {this.props.playlists[key]} key = {idx}/>
    ));
    return(
        <ul className='playlist-index-container'>
          {playlistSidebarIndexItems}
        </ul>
    );
  }
}

export default PlaylistSidebarIndex;
