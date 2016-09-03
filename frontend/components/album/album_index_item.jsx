import React from 'react';
import { Link, hashHistory } from 'react-router';

const AlbumIndexItem = ({album}) => (
  <li><h1>{album.title}</h1></li>
);

export default AlbumIndexItem;
