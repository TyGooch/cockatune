import React from 'react';
import ArtistIndexContainer from '../artist/artist_index_container';

const exploreHeader = () => (
  <div className="explore-header">
    <div className ='explore-header-text'>EXPLORE</div>
  </div>
);

const Explore = () => (
  <div className = 'explore-container'>
    {exploreHeader()}
    <div className='explore-content-container'>
      <ArtistIndexContainer />
    </div>
  </div>
);

export default Explore;
