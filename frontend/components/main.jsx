import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Playbar from './playbar/playbar'
import SearchBarContainer from './search/search_container'
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Start from './greeting/start';
import PlaylistListContainer from './playlist/playlist_list_container';

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
        <PlaylistListContainer />
      </div>

      <div className="mid" id="mid">
        <Start />
      </div>

      <div className="right">
        <SearchBarContainer />
      </div>
    </div>

    <div className="playbar">
      <div className="playbarleft">
      </div>
      <div className="playbarmid">
        <Playbar />
      </div>
      <div className="playbarright">
      </div>

    </div>
  </div>
 )

export default Main;
