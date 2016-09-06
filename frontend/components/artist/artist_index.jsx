import React from 'react';
import ArtistIndexItem from './artist_index_item';
import Masonry from 'react-masonry-component';

class ArtistIndex extends React.Component {
  componentDidMount(){
    this.props.requestArtists();
  }

  render(){
    let artistIndexItems = Object.keys(this.props.artists).map((key, idx) => (
      <ArtistIndexItem artist = {this.props.artists[key]} key = {idx}/>
    ));
    return(
        <Masonry className='artist-index-container' options={{fitWidth: true}}>
          {artistIndexItems}
        </Masonry>
    );
  }
}

export default ArtistIndex;
