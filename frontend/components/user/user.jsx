import React from 'react';
import PlaylistIndex from '../playlist/playlist_index';

class User extends React.Component {
  constructor(){
    super();
    this.getUserPlaylists = this.getUserPlaylists.bind(this);
  }
  componentWillMount(){
    this.props.requestUser(this.props.userId);
  }

  getUserPlaylists(playlists){
    Object.keys(playlists).forEach(key => {
      if(this.props.userId !== playlists[key].user_id){
        delete playlists[key];
      }
    });
    return playlists;
  }

  render(){
    if(Object.keys(this.props.user).length > 0){
      return(
        <div className = 'user-container'>
          <div className = 'user-header-container'>
              <img src = {this.props.user.profile_picture_url}
                className = 'user-header-profile-picture' />
              <div className = 'user-header-username'>
                {this.props.user.username}
              </div>
              <div className = 'user-header-follows'>
                XXXXXX FOLLOWERS
              </div>
          </div>
          <div className = 'user-playlist-container'>
            PLAYLISTS GO HERE
            <PlaylistIndex playlists = {this.getUserPlaylists(this.props.playlists)} />
          </div>

        </div>
      );
    }
  else{
    return <div></div> ;
  }
  }
}
export default User;
