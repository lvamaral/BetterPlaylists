import React from 'react';
import { Link } from 'react-router-dom';


const personalGreeting = (currentUser, logout) => (
	<div className="account-nav">
    <div className="header-pic"><Link to={`/home/users/${currentUser.id}`}><img src={currentUser.image_url}/></Link></div>
    <h2 className="header-name"><Link to={`/home/users/${currentUser.id}`}>{currentUser.username}</Link></h2>
			<div className="header-button" onClick={logout} >
				<i className="fa fa-sign-out" aria-hidden="true"></i>
			</div>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;

// <div className="header-button" onClick={logout} >
// 	<i className="fa fa-sign-out" aria-hidden="true"></i>
// </div>
