import React from 'react';
import AlbumIndex from '../album/album_index';

class Artist extends React.Component {
  componentWillMount(){
    this.props.requestArtist(this.props.artistId);
  }

  render(){
    debugger;
    return(
      <div className = 'artist-container'>
        <div className = 'artist-header-container'>
          <h1>{this.props.artist.name}</h1>
        </div>
        <AlbumIndex albums = {this.props.artist.albums}/>
      </div>
    );
  }
}
export default Artist;
