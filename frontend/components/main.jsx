import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import PlaybarContainer from './playbar/playbar_container'
import SearchBarContainer from './search/search_container'
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Start from './greeting/start';
import PlaylistListContainer from './playlist/playlist_list_container';
import PlaylistDetailContainer from './playlist/playlist_detail_container';

const Main = () => (
  <div className="main">
    <header className="header">
        <div className="title">
            <h1>BetterPlaylists</h1>
        </div>
        <div className="midheader account-nav">
          <GreetingContainer />
        </div>
        <div className="rightheader">
        </div>
    </header>

    <div className="content">
      <div className="left">
        <div className="playlist-list"><PlaylistListContainer /></div>
        <Link to="/home/new">
          <div className="add-new-playlist">
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
            <p>New Playlist</p>
          </div>
        </Link>
      </div>

      <div className="mid" id="mid">
        <Switch>
          <ProtectedRoute path="/home/playlist/:id" component={PlaylistDetailContainer} />
          <Start />
        </Switch>
      </div>

      <div className="right">
        <SearchBarContainer />
      </div>
    </div>


    <PlaybarContainer />
  </div>
 )

export default Main;
