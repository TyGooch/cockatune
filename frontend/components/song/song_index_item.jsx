import React from 'react';
import SongContainer from './song_container';
// import { Link, hashHistory } from 'react-router';

const SongIndexItem = ({song}) => (
  <li className = 'song-index-item'>
    <SongContainer id = {song.id} song = {song} />
    <div className = 'song-index-item-info'>
      <div className = 'song-index-item-title'>
          {song.title}
      </div>
      <div className = 'song-length'>
        {Math.floor(song.length / 60)}:{song.length % 60}
      </div>
    </div>
  </li>
);

export default SongIndexItem;
