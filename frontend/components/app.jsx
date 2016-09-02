import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import ExploreContainer from './explore/explore_container';
import FooterContainer from './footer/footer_container';

const App = ({children}) => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <div className = 'app-container' >
      <div className='sidebar-container' >
        SIDEBAR
      </div>
      <div className = 'app-content-container'>
        {children}
      </div>
    </div>
    <FooterContainer />
  </div>
);
// <Link to="/" className="header-link"><h1>Cockatune</h1></Link>

export default App;
