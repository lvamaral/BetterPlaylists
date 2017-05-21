import React from 'react';
import { Route } from 'react-router-dom';


class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getPlaylist(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.getPlaylist(nextProps.match.params.id);
    }
  }

  render() {
    const playlist = this.props.currentPlaylist
    return (
      <div className="playlist-detail">
        <h1>HEY PLAYLIST</h1>
        {playlist.title}
      </div>
    );
  }
}

export default PlaylistDetail;
