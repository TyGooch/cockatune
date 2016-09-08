import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import Masonry from 'react-masonry-component';

class PlaylistIndex extends React.Component {
  // componentDidMount(){
  //   this.props.requestPlaylists();
  // }

  render(){
    let playlistIndexItems = Object.keys(this.props.playlists).map((key, idx) => (
      <PlaylistIndexItem playlist = {this.props.playlists[key]} key = {idx}/>
    ));
    return(
        <Masonry className='playlist-index-container' options={{fitWidth: true}}>
          {playlistIndexItems}
        </Masonry>
    );
  }
}

export default PlaylistIndex;
