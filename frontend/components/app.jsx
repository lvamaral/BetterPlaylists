import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Splash from './splash';

const App = () => (
  <switch>
    <AuthRoute path="/" component={Splash} />
    <ProtectedRoute path="/home" component={Main} />
    <Redirect to="/home" />
  </switch>
);

export default App;
