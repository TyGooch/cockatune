import React from 'react';
import { withRouter } from 'react-router';

class PlaylistForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      name: '',
      user_id: this.props.currentUser.id
    };
  }

  update(e) {
    this.setState({name: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const playlist = this.state;
    this.props.closeModal();
    this.props.createPlaylist({playlist});
  }
  render() {
    return (
        <div className="new-playlist-container">
          <div className="new-playlist-form">
            <h3 className="new-playlist-title">Create A Playlist</h3>

            <form onSubmit={this.handleSubmit}>
              <label className="playlist-field">Name</label>
              <input type="text" defaultValue={this.state.name}
                onChange = {this.update} className="playlist-field"/>

              <div className="button-holder">
                <input type="submit" value="Create Playlist" className="new-playlist-button"/>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default withRouter(PlaylistForm);
