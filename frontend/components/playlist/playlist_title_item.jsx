import React from 'react';
import { Link, hashHistory } from 'react-router';

const PlaylistTitleItem = ({playlist}) => {
  return(
  <li className = 'playlist-title-item'>
    <Link to={`/playlists/${playlist.id}`} >
      <div className = 'playlist-title-item-name'>
        <span>{playlist.name}</span>
      </div>
    </Link>
  </li>
);
};

export default PlaylistTitleItem;
