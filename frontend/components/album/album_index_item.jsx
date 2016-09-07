import React from 'react';
import { Link, hashHistory } from 'react-router';

const AlbumIndexItem = ({album}) => (
  <li className = 'album-index-item'>
    <Link to={`/artists/${album.artist_id}/albums/${album.id}`}>
      <img className = 'album-index-item-image'
        src={album.album_picture_url} />
      <div className = 'album-index-item-title'>
          <span>{album.title}</span>
      </div>
    </Link>
  </li>
);

export default AlbumIndexItem;
