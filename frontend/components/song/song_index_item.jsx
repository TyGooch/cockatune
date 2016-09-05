import React from 'react';
import SongContainer from './song_container';
// import { Link, hashHistory } from 'react-router';

const SongIndexItem = ({song}) => (
  <li className = 'song-index-item'>
    <SongContainer id = {song.id} song = {song} />
    <div className = 'song-index-item-title'>
        {song.title} {Math.floor(song.length / 60)}:{song.length % 60}
    </div>
  </li>
);

export default SongIndexItem;
