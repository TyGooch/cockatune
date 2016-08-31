import React from 'react';

const exploreHeader = () => (
  <div className="explore-header">
    <img src='http://res.cloudinary.com/dtatkxxcm/image/upload/v1472669919/exploreHeader_ilzyq7.png'
      className="explore-header-image" />
  </div>
)

const Explore = () => (
  <div className = 'explore-comtainer'>
    {exploreHeader()}
  </div>
);

export default Explore;
