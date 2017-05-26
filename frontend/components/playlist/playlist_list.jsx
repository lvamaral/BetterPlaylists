import React from 'react';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import { NavLink, Link } from 'react-router-dom';

class PlaylistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPlaylist: this.props.currentPlaylist, ownedPlaylists: this.props.ownedPlaylists};
  }

  componentDidMount(){
    this.props.getPlaylists(this.props.currentUser.id);
  }

  render() {

    const playlists = this.props.ownedPlaylists;
    let playlistList = ""

    if (playlists !== undefined) {
      playlistList = playlists.map(playlist => (
        <NavLink to={`/home/playlist/${playlist.id}`} exact={true} className="playlist-link" activeClassName="active" key={playlist.id}>
          <div className="prow" >
            <div className="playlist-members">
              {playlist.member_count}
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className="playlist-title">{playlist.title}</div>
            <div className="playlist-info"><i className="fa fa-info-circle" aria-hidden="true"></i></div>
          </div>
        </NavLink>
        )
      )
    }

      return (
        <div className="playlist-list">
          {playlistList}
        </div>
      )
  }
}

export default PlaylistList;
