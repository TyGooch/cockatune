import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <ul className="login-signup">
    <li><Link to="/login" activeClassName="current">Login</Link></li>
    &nbsp;or&nbsp;
    <li><Link to="/signup" activeClassName="current">Sign Up!</Link></li>
  </ul>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

function Greeting({currentUser, logout}){
  if (currentUser){
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

function Header({currentUser, logout}){
  // debugger;
  return(
    <div className ='header-container'>
      <a href='/' ><img src='http://res.cloudinary.com/dtatkxxcm/image/upload/v1472675224/cockatuneLogoPadded_vzgskl.png'
        className='header-logo'/></a>
      <Greeting currentUser = {currentUser} logout = {logout}/>
    </div>
  );
}

// export default Greeting;
export default Header;
