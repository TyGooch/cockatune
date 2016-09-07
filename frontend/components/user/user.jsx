import React from 'react';

class User extends React.Component {
  componentWillMount(){
    this.props.requestUser(this.props.userId);
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
