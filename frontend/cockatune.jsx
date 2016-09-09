//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
//Actions
import configureStore from './store/store';
import {requestArtists} from './actions/artist_actions';
import Modal from 'react-modal';


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
