import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const Splash = () => (
  <div className="splash">

    <Switch>
      <AuthRoute path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
)

export default Splash;
