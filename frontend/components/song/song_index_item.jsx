import React from 'react';
import SongContainer from './song_container';
// import { Link, hashHistory } from 'react-router';

const getLengthString = (length) =>{
  let minutes = Math.floor(length / 60);
  let seconds = length % 60;
  if(seconds < 10){
    seconds = `0${seconds}`;
  }
  return(
    `${minutes}:${seconds}`
  );
};

const SongIndexItem = ({song}) => {
  if(song){
    return(
      <li className = 'song-index-item'>
        <SongContainer id = {song.id} song = {song} />
        <div className = 'song-index-item-info'>
          <div className = 'song-index-item-title'>
              {song.title}
          </div>
          <div className = 'song-length'>
            {getLengthString(song.length)}
          </div>
        </div>
      </li>
    );
  }
  else{
    return <div></div> ;
  }
};

export default SongIndexItem;
