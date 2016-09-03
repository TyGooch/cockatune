import React from 'react';
import Masonry from 'react-masonry-component';

import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  render(){
    let albumIndexItems = Object.keys(this.props.albums).map(key => (
      <AlbumIndexItem album = {this.props.albums[key]} />
    ));

    return(
        <Masonry className='album-index-container' options={{fitWidth: true}}>
          {albumIndexItems}
        </Masonry>
    );
  }
}

export default AlbumIndex;
