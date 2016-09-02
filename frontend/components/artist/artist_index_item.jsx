import React from 'react';

const ArtistIndexItem = ({artist}) => (
  <li className = 'artist-index-item'>
    <a href='http://google.com'><img className = 'artist-index-item-image'
      src={artist.artist_picture_url}
    /></a>
    <div className = 'artist-index-item-name'>
      {artist.name}
    </div>
  </li>
);

export default ArtistIndexItem;
