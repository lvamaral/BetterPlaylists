import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const Main = () => (
  <div>
  <header className="header">
      <div className="title">
          <h1>BetterPlaylists</h1>
      </div>
      <GreetingContainer />
  </header>
  </div>

 )

export default Main;
