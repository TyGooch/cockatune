import React from 'react';

class Artist extends React.Component {
  componentDidMount(){
    this.props.requestArtist(this.props.artistId);
  }

  render(){
    return(
      <div className = 'artist-container'>
        <div className = 'artist-header-container'>
          <h1>{this.props.artist.name}</h1>
        </div>
        <div className = 'artist-albums-container'>
            <p>ALBUMS GO HERE </p>
        </div>
      </div>
    );
  }
}
export default Artist;
