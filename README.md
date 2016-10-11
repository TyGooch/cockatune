# Cockatune

[Cockatune live][cockatune]

[cockatune]: https://www.cockatune.io

Cockatune is a full-stack application inspired by Spotify. It uses Ruby on Rails with a PostgreSQL database on the backend and React.js with a Redux architectural framework on the frontend.

![Cockatune home page: http://www.cockatune.io][home page]
[home page]: ./docs/images/home.png "Cockatune home page"

## Features & Implementation

### Single-Page App

Cockatune is a single-page application; all content is delivered on one static page and tracks play continously during navigation of the site. Upon load of the DOM, the app checks to see if a user is logged in with a call to `window.currentUser` -- which is set in the Rails view.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
     const initialState = {session: {currentUser: window.currentUser}};
     store = configureStore(initialState);
   } else {
     store = configureStore();
   }
   window.store = store;

   Modal.setAppElement(document.body);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store = {store}/>, root);
});
```

### Audio Player

Cockatune uses a custom fork of [Audio.js](https://github.com/kolber/audiojs) for its audio player. Upon render of the app component, the player is configured and stays in place for the duration of the user's stay on the page. When a song is played, the current song's information is displayed in the sidebar.

### Playlists

Users can create named playlists which are displayed on their user profile. Songs can be added to playlists using the add button on the track listing. In future updates, users will be able to follow each other and like other user's playlists.
