import React from 'react';
import { Link, hashHistory } from 'react-router';

const PlaylistIndexItem = ({playlist}) => (
  <li className = 'playlist-index-item'>
    <Link to={`/playlists/${playlist.id}`} >
      <img src = {playlist.playlist_image_url} className = 'playlist-image'/>
      <div className = 'playlist-index-item-name'>
        <span>{playlist.name}</span>
      </div>
    </Link>
  </li>
);

export default PlaylistIndexItem;
