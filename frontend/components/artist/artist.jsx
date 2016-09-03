import React from 'react';
import AlbumIndex from '../album/album_index';

class Artist extends React.Component {
  componentWillMount(){
    this.props.requestArtist(this.props.artistId);
  }

  render(){
    return(
      <div className = 'artist-container'>
        <div className = 'artist-header-container'>
          <img className = 'artist-header-image'
            src={this.props.artist.header_image_url} />
          <div className='artist-header-name'>
            {this.props.artist.name}
          </div>
        </div>
        <AlbumIndex albums = {this.props.artist.albums}/>
      </div>
    );
  }
}
export default Artist;
