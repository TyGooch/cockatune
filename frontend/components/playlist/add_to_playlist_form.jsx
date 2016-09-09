import React from 'react';
import { withRouter } from 'react-router';


//pass song as props

class AddToPlaylistForm extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.playlistItem = this.playlistItem.bind(this);
    this.userPlaylistItems = this.userPlaylistItems.bind(this);

    this.state = {
      user_id: this.props.currentUser.id
    };
  }


  handleClick(playlist){
    this.props.addSongToPlaylist(playlist, this.props.song);
    this.props.closeModal();
  }

  playlistItem(playlist){
    return(
      <button onClick={this.handleClick.bind(null, playlist)} className = 'add-to-playlist-button' key = {playlist.id}>
        {playlist.name}
      </button>
    );
  }

  userPlaylistItems() {
    const currentUser = this.props.currentUser;
    const playlists = this.props.playlists;
    if(currentUser && playlists){
      if(Object.keys(playlists).length > 0){
        const userPlaylists = [];

        Object.keys(playlists).forEach(key => {
          if(playlists[key].user_id === currentUser.id){
            userPlaylists.push(playlists[key]);
          }
        });

        const PlaylistItems = userPlaylists.map(userPlaylist => (
          this.playlistItem(userPlaylist)
        ));
        return(
            <ul className = 'user-playlist-items'>
              {PlaylistItems}
            </ul>
        );
      }
    }
    else{
      return <div></div> ;
    }
  }

  render() {
    return (
        <div className="add-to-playlist-form-container">
            <h3 className="add-to-playlist-header">Which playlist do you want to add {`${this.props.song.title}`} to?</h3>
            {this.userPlaylistItems()}
        </div>
    );
  }
}

export default withRouter(AddToPlaylistForm);
