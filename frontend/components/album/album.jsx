import React from 'react';
import AlbumIndex from './album_index';
import SongIndex from '../song/song_index';
import { ArtistHeader } from '../artist/artist' ;

class Album extends React.Component {
  render(){
    const albumSongs = this.props.artist.songs.filter(song => song.album_id === this.props.albumId);
    const otherAlbums = this.props.artist.albums.filter(el => el.id !== this.props.albumId);
    return(
      <div>
        <ArtistHeader artist = {this.props.artist} />
        <div className = 'album-container'>
          <div className = 'album-content-container'
          >
            <div className = 'album-header'>
              <div  >
                <img src={this.props.album[0].album_picture_url}
                  className= 'album-header-image'/>
              </div>
              <div className = 'album-header-name'>
                {this.props.album[0].title}
              </div>
            </div>
            <div className = 'album-song-index'>
              <SongIndex songs={albumSongs} />
            </div>
          </div>
          <div className = 'album-sidebar-index-container'>
            <div className = 'album-sidebar-index-header'>
              More by {this.props.artist.name}
            </div>
            <AlbumIndex albums = {otherAlbums} />
          </div>
        </div>
      </div>
    );
  }
}
export default Album;
