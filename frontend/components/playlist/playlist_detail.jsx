import React from 'react';
import { Route } from 'react-router-dom';
import isEqual from 'lodash/isEqual';


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

    let playlist_detail = ""
    let songs = (<p>Use the search bar on the right to add songs</p>)
    if (!isEqual(playlist, {})) {
      playlist_detail = (
        <span id="playlist-title-box">
          <div className="playlist-detail-title"><h2>{playlist.title}</h2></div>
          <div className="playlist-detail-uploader"><h3>By: {playlist.creator.username}</h3></div>
        </span>
      )
      if (!isEqual(playlist.songs, {})) {
        songs = playlist.songs.map( (song) => (
          <div className="playlist-detail-song" key={song.id}>
            <div className="playlist-uploader">
              <img src={song.uploader.image_url}></img>
              <div>{song.uploader.username}</div>
            </div>
            <div className="playlist-song-info">
                <div className="playlist-song-playbtn">
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </div>
                <div className="playlist-song-core">
                  <div className="playlist-core-title">
                    <div className="playlist-core-title2">
                      <p><span id="title">{song.title}</span></p>
                      <p><span id="artist">{song.artist}</span></p>
                    </div>
                    <div className="playlist-core-length">{song.length}</div>
                  </div>

                  <div className="vote-box">
                    <i className="fa fa-chevron-up" aria-hidden="true" id="up"></i>
                    <i className="fa fa-chevron-down" aria-hidden="true" id="down"></i>
                  </div>
                </div>
            </div>
          </div>
        ))
      }
    }





    return (
      <div className="playlist-detail">
        {playlist_detail}
        <div id="song-list">{songs}</div>
      </div>
    );
  }
}

export default PlaylistDetail;
