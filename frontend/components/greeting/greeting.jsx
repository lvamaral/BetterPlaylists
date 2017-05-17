import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </nav>
);


      // <button onClick={logout}>Log Out</button>

const personalGreeting = (currentUser, logout) => (
	<div className="account-nav">
    <h2 className="header-name">{currentUser.username}</h2>
    <div className="header-button">
      <i className="fa fa-search button" aria-hidden="true"></i>
      <i className="fa fa-chevron-down button" id="dropdown" aria-hidden="true"></i>
    </div>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
