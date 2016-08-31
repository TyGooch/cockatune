import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    {children}
  </div>
);
// <Link to="/" className="header-link"><h1>Cockatune</h1></Link>

export default App;
