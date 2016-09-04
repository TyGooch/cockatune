import React from 'react';
// import { Link, hashHistory } from 'react-router';

const SongIndexItem = ({song}) => (
  <li className = 'song-index-item'>
    <div className = 'song-index-item-title'>
        {song.title} {Math.floor(song.length / 60)}:{song.length % 60}
    </div>
  </li>
);

export default SongIndexItem;
