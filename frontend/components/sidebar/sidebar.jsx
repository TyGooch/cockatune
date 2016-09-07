import React from 'react';

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
        <img src = {artists[currentSong.artist_id].albums.filter(el => el.id === currentSong.album_id)[0].album_picture_url}
          className = 'sidebar-album-picture' />
      </div>
    );
  }
  else{
    return(
      <div></div>
    );
  }
};

const Sidebar = ({currentSong, artists}) => (
    <div className ='sidebar'>
      <div className = 'sidebar-playing-container'>
        {nowPlaying(currentSong, artists)}
      </div>
    </div>
);

export default Sidebar;
