import React from 'react';
import { Link, hashHistory } from 'react-router';

const ArtistIndexItem = ({artist}) => (
  <li className = 'artist-index-item'>
    <Link to={`/artists/${artist.id}`} ><img className = 'artist-index-item-image'
      src={artist.artist_picture_url}
    />
  <div className = 'artist-index-item-name'>
        <span>{artist.name}</span>
      </div>
    </Link>
  </li>
);

export default ArtistIndexItem;
