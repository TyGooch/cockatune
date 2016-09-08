import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from '../app';
import HomePageContainer from '../home_page/home_page';
import SessionFormContainer from '../session_form/session_form_container';
import ExploreContainer from '../explore/explore_container';
import ArtistShowContainer from '../artist/artist_show_container';
import AlbumShowContainer from '../album/album_show_container';
import UserShowContainer from '../user/user_show_container';
import PlaylistFormContainer from '../playlist/playlist_form_container';

import { requestArtists } from '../../actions/artist_actions';
import { requestPlaylists } from '../../actions/playlist_actions';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._populateArtists = this._populateArtists.bind(this);
    this._populatePlaylists = this._populatePlaylists.bind(this);
    this._populateStore = this._populateStore.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  _populateArtists(nextState, replace) {
    this.context.store.dispatch(requestArtists());
  }

  _populatePlaylists(nextState, replace) {
    this.context.store.dispatch(requestPlaylists());
  }

  _populateStore() {
    this._populateArtists();
    this._populatePlaylists();
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter = { this._populateStore } >
          <IndexRoute component={ HomePageContainer } />
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/explore" component={ ExploreContainer } />
          <Route path="/artists/:artistId" component={ ArtistShowContainer } />
          <Route path="/artists/:artistId/albums/:albumId" component={ AlbumShowContainer } />
          <Route path="/users/:userId" component={ UserShowContainer } />
          <Route path="/playlists/new" component={ PlaylistFormContainer } />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
