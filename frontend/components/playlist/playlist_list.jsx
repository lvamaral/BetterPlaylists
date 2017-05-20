import React from 'react';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual'

class PlaylistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPlaylist: {}, ownedPlaylists: {}}

  }

  componentDidMount(){
    this.props.getPlaylists(this.props.currentUser)
  }


  render() {
    const playlists = this.props.ownedPlaylists;
    let playlistList = ""

    if (playlists !== undefined) {
      playlistList = playlists.map(playlist => (
        <div className="prow" key={playlist.id}>
          <div className="playlist-members">
            {playlist.member_count}
            <i className="fa fa-users" aria-hidden="true"></i>
          </div>
          <div className="playlist-title">{playlist.title}</div>
          <div className="playlist-info"><i className="fa fa-question" aria-hidden="true"></i></div>
        </div>
        )
      )
    }

      return (
        <div>
          {playlistList}
        </div>
      )
  }

}

export default PlaylistList;
