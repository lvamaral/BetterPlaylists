import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<div className="account-nav">
    <h2 className="header-name">{currentUser.username}</h2>
    <div className="header-button">
      <button onClick={logout}>Log Out</button>
    </div>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
