import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <ul className="login-signup">
    <li><Link to="/login" className="login-signup-button">SIGN IN</Link></li>
    &nbsp;  &nbsp;
    <li><Link to="/signup" className="login-signup-button">SIGN UP</Link></li>
  </ul>
);

const profileLinks = (currentUser, logout) => (
	<ul className="profile-links">
    <li>
      <a href={`#/users/${currentUser.id}`}><img
        src = {currentUser.profile_picture_url}
        className="profile-picture"/></a>
    </li>
		<li className="user-username">{currentUser.username}</li>
		<button className="logout-button" onClick={logout}>Log Out</button>
	</ul>
);

function HeaderLinks({currentUser, logout}){
  if (currentUser){
    return profileLinks(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

function Header({currentUser, logout}){
  return(
    <div className ='header-container'>
      <a href='/#/explore' ><img src='http://res.cloudinary.com/dtatkxxcm/image/upload/v1472675224/cockatuneLogoPadded_vzgskl.png'
        className='header-logo'/></a>
      <HeaderLinks currentUser = {currentUser} logout = {logout}/>
    </div>
  );
}

// export default Greeting;
export default Header;
