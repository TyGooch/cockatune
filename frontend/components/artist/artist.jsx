import React from 'react';
import AlbumIndex from '../album/album_index';

export const ArtistHeader = ({artist}) => (
  <div className = 'artist-header-container'>
    <img className = 'artist-header-image'
      src={artist.header_image_url} />
    <div className='artist-header-name'>
      {artist.name}
    </div>
  </div>
);

class Artist extends React.Component {
  componentWillMount(){
    this.props.requestArtist(this.props.artistId);
  }

  render(){
    if(Object.keys(this.props.artist).length > 0){
      return(
        <div className = 'artist-container'>
          <ArtistHeader artist = {this.props.artist} />
          <AlbumIndex albums = {this.props.artist.albums}/>
        </div>
      );
    }
  else{
    return <div></div> ;
  }
  }
}
export default Artist;
