import React from 'react';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual'

class PlaylistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPlaylist: {}, ownedPlaylists: {}}

  }

  componentDidMount(){
    this.props.getPlaylists()
  }


  render() {
    const playlists = this.props.ownedPlaylists;
    let playlistList = ""

    if (playlists !== undefined) {
      playlistList = playlists.map(playlist => (
        <div className="prow" key={playlist.id}>
          <div className="playlist-item">{playlist.title}</div>
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
