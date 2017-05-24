import React from 'react';
import NewPlaylistContainer from '../playlist/new_playlist_container';
import { Route, HashRouter, Link, NavLink, Switch } from 'react-router-dom';

const Start = () => (
  <Switch>

      <Route path="/home" render={()=>browseHeader} />
  </Switch>
)

const browseHeader = (
  <div className="browse-header">
    <div className="browse-link"><NavLink to={`/home/featured`} activeClassName="browse-active">Featured</NavLink></div>
    <div className="browse-link"><NavLink to={`/home/explore`} exact={true} activeClassName="browse-active">Explore</NavLink></div>
    <div className="browse-link"><NavLink to={`/home/following`} exact={true} activeClassName="browse-active">Following</NavLink></div>
  </div>
)

// <Route path="/home" render={() => <div className="start"><h2>Select a playlist to get started, or <Link to="/home/new">make your own</Link>.</h2></div>} />


export default Start;
