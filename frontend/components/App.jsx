import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Splash from './splash';

// const header = (
//   <header>
//     <nav>
//       <div className="title">
//         <Link to="/" className="header-link">
//           <h1>BetterPlaylists</h1>
//         </Link>
//       </div>
//       <div className="account_nav">
//         <GreetingContainer />
//       </div>
//     </nav>
//   </header>
// )

// <div>
//   <AuthRoute path="/home" component={Main} />
//   <Switch>
//     <AuthRoute path="/" component={SessionFormContainer} />
//     <AuthRoute path="/signup" component={SessionFormContainer} />
//   </Switch>
// </div>

const App = () => (
  <div>
    <AuthRoute path="/" component={Splash} />
    <ProtectedRoute path="/home" component={Main} />
  </div>
);

export default App;
