import React from 'react';
import { Route } from 'react-router-dom';
import {includes, values, some, isEqual} from 'lodash';
import size from 'lodash/size'
import {Link, Redirect} from 'react-router-dom'


class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {owned: ""}
  }

  componentDidMount() {
    this.props.getPlaylist(this.props.match.params.id);

  }


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.getPlaylist(nextProps.match.params.id);
    }
  }

  convertTime(timestamp){
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);
     if (seconds < 10) { seconds = '0' + seconds; }
     timestamp = minutes + ':' + seconds;
     return timestamp;
    }

    songPlaying(song) {
      if (song === this.props.currentSong) {
        return (<i className="fa fa-play-circle playing" aria-hidden="true"></i>)
      } else {
        return (<i className="fa fa-play-circle" aria-hidden="true" onClick={() => this.props.playSong(song)}></i>)
      }
    }

    pauseSong(){
      let audio = document.getElementById('audio');
      audio.pause();
    }

    hasSongs(){
      const playlist = this.props.currentPlaylist
      if (!isEqual(playlist.songs, {})) {
        return (<div className="playlist-detail-uploader"><h3>{playlist.songs.length} songs <span id="playlist-members">{size(playlist.members)}<i className="fa fa-users" aria-hidden="true"></i></span></h3></div>)
      } else {
        return (<div className="playlist-detail-uploader"><h3><span id="playlist-members">{size(playlist.members)}<i className="fa fa-users" aria-hidden="true"></i></span></h3></div>)
      }
    }

    isPublic(){
      const playlist = this.props.currentPlaylist
      if (playlist.public === true) {
        return (<span id="playlist-public"><i className="fa fa-globe" aria-hidden="true"></i></span>)
      } else {
        return (<span id="playlist-public"><i className="fa fa-lock" aria-hidden="true"></i></span>)
      }
    }

    playFirstSong() {
      if (this.props.currentPlaylist.songs[0] != undefined) {
        this.props.playSong(this.props.currentPlaylist.songs[0])
      }
    }

    renderFollow(owned){
      if (this.props.currentPlaylist.creator.username === this.props.currentUser.username) {
        return (<span id="follow">EDIT</span>)
      }
      else if (owned ){
        return (<span id="follow">UNFOLLOW</span>)
      } else {
        return (<span id="follow">FOLLOW</span>)
      }

    }

    isFollowing(playlist){
      let owned
      if (playlist != undefined){
        if (values(this.props.ownedPlaylists).some(owned => owned.id === playlist.id )) {
          owned = true
        } else {
          owned = false
        }
      }
      return owned
    }


  render() {
    const playlist = this.props.currentPlaylist
    let owned = this.isFollowing(playlist);

    if (!isEqual(playlist, {}) && !owned && !this.props.currentPlaylist.public) {
      return(
        <Redirect to="/home/featured"/>
      )
    }

    let playlist_detail = ""
    let songs = (<p className="no-songs">Use the search bar on the right to add songs</p>)
    if (!isEqual(playlist, {})) {
      playlist_detail = (
        <div id="playlist-title-box">
          <div className="playlist-detail-img"><img src={playlist.art_url}/></div>
          <div className="playlist-detail-core">
            <div className="playlist-detail-title"><h2>{playlist.title}</h2></div>
            <div className="playlist-detail-uploader"><h3>By <Link to="/">{playlist.creator.username}</Link></h3></div>
            {this.hasSongs()}
            <div className="playlist-detail-buttons">
              <button onClick={this.playFirstSong.bind(this)}>PLAY</button>
              <div className="playlist-detail-buttons-h">
                <p id="follow">{this.renderFollow(owned)}</p>
                <p id="edit"></p>
              </div>
            </div>
          </div>
        </div>
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
                  {this.songPlaying(song)}
                </div>
                <div className="playlist-song-core">
                  <div className="playlist-core-title">
                    <div className="playlist-core-title2">
                      <p><span id="title">{song.title}</span></p>
                      <p><span id="artist">{song.artist}</span></p>
                    </div>
                    <div className="playlist-core-length">{this.convertTime(song.length)}</div>
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
