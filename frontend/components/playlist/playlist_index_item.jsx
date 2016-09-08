import React from 'react';
import { Link, hashHistory } from 'react-router';

const PlaylistIndexItem = ({playlist}) => (
  <li className = 'playlist-index-item'>
    <Link to={`/playlists/${playlist.id}`} >
      <div className = 'playlist-index-item-name'>
        {playlist.name}
      </div>
    </Link>
  </li>
);

export default PlaylistIndexItem;
