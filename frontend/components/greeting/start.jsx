import React from 'react';
import NewPlaylist from '../playlist/new_playlist';
import { Route, HashRouter, Link, Switch } from 'react-router-dom';

const Start = () => (
  <Switch>
      <Route path="/home/new" render={ () => <span>NewPlaylist</span>} />
      <Route path="/home" render={() => <div className="start"><h2>Select a playlist to get started, or <Link to="/home/new">make your own</Link>.</h2></div>} />
  </Switch>
)

export default Start;
