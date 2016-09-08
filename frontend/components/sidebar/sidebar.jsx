import React from 'react';
import { Link, hashHistory } from 'react-router';

import PlaylistTitleItem from '../playlist/playlist_title_item';

const playlistSidebar = (currentUser, playlists) => {
  if(currentUser && playlists){
    if(Object.keys(playlists).length > 0){
      const userPlaylists = [];

      Object.keys(playlists).forEach(key => {
        if(playlists[key].user_id === currentUser.id){
          userPlaylists.push(playlists[key]);
        }
      });
      const PlaylistTitleItems = userPlaylists.map(userPlaylist => (
        <PlaylistTitleItem playlist = {userPlaylist} />
      ));
      return(
        <div>
          <ul>
            {PlaylistTitleItems}
          </ul>
        </div>
      );
    }
}
else{
  return <div></div> ;
}
};

const nowPlaying = (currentSong, artists) => {
  if(currentSong){
    return(
      <div>
        Now Playing
        <br />
        {currentSong.title}
        <br />
        {artists[currentSong.artist_id].name}
        <br />
        <Link to={`/artists/${currentSong.artist_id}/albums/${currentSong.album_id}`}>
          <img src = {artists[currentSong.artist_id].albums.filter(el => el.id === currentSong.album_id)[0].album_picture_url}
            className = 'sidebar-album-picture' />
        </Link>
      </div>
    );
  }
  else{
    return(
      <div></div>
    );
  }
};

const Sidebar = ({currentSong, artists, playlists, currentUser}) => (
    <div className ='sidebar'>
      {playlistSidebar(currentUser, playlists)}
      <div className = 'sidebar-playing-container'>
        {nowPlaying(currentSong, artists)}
      </div>
    </div>
);

export default Sidebar;
