import React from 'react';
import AlbumIndex from './album_index';

class Album extends React.Component {
  render(){
    return(
      <div className = 'album-container'>
        <div className = 'album-content-container'>
          <div className= 'album-content-image' >
            <img src={this.props.album.album_picture_url} />
          </div>
          <div className = 'album-header'>
            <div className = 'album-header-name'>
              {this.props.album.title}
            </div>
          </div>
        </div>
        <div className = 'album-sidebar-index-container'>
          <div className = 'album-sidebar-index-header'>
            More by {this.props.artist.name}
          </div>
          <AlbumIndex albums = {this.props.artist.albums.filter(el => el.id !== this.props.album.id)} />
        </div>
      </div>
    );
  }
}
export default Album;
