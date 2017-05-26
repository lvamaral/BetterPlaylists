import React from 'react';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import shuffle from 'lodash/shuffle';
import { NavLink, Link, withRouter } from 'react-router-dom';
// import {withRouter} from "react-router"

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPlaylist: this.props.currentPlaylist, ownedPlaylists: this.props.ownedPlaylists};
  }


  componentDidMount() {
    this.props.getPlaylists(this.props.currentUser.id);
    this.props.getAllPlaylists();
    $(".left").hide();
    $(".search").hide();
  }

  browseHeader() {
    return (
      <div className="browse-header">
        <div className="browse-link"><NavLink to={`/home/featured`} activeClassName="browse-active">Featured</NavLink></div>
        <div className="browse-link"><NavLink to={`/home/explore`} exact={true} activeClassName="browse-active">Explore</NavLink></div>
        <div className="browse-link"><NavLink to={`/home/following`} exact={true} activeClassName="browse-active">Following</NavLink></div>
      </div>
    )
  }

  renderOwnPlaylists(){
    const playlists = this.props.ownedPlaylists;
    let playlistList = ""
    if (playlists !== undefined) {
      playlistList = playlists.map(playlist => (
        <NavLink to={`/home/playlist/${playlist.id}`} exact={true} className="playlist-link" activeClassName="active" key={playlist.id}>
          <div className="owned-playlist" >
            <div className="owned-art">
              <img src={playlist.art_url}></img>
            </div>
            <div className="owned-info">
              <div className="owned-info-2">
                <div className="owned-playlist-title">{playlist.title}</div>
                <div className="owned-playlist-owner">By {playlist.creator}</div>
              </div>
              <div className="owned-playlist-members">
                {playlist.member_count}
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>

            </div>
          </div>
        </NavLink>
        )
      )
    }
    return playlistList
  }

  renderAllPlaylists(){
    const playlists = this.props.allPlaylists;
    let playlistList = ""
    if (playlists !== undefined) {
      playlistList = playlists.map(playlist => (
        <NavLink to={`/home/playlist/${playlist.id}`} exact={true} className="playlist-link" activeClassName="active" key={playlist.id}>
          <div className="owned-playlist" >
            <div className="owned-art">
              <img src={playlist.art_url}></img>
            </div>
            <div className="owned-info">
              <div className="owned-info-2">
                <div className="owned-playlist-title">{playlist.title}</div>
                <div className="owned-playlist-owner">By {playlist.creator}</div>
              </div>
              <div className="owned-playlist-members">
                {playlist.member_count}
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </NavLink>
        )
      )
    }
    return playlistList
  }

  renderFeaturedPlaylists(){
    const playlists = this.props.allPlaylists;

    let playlistList = ""
    if (!isEqual(playlists, {})) {
      playlistList = playlists.map(playlist => (
        <NavLink to={`/home/playlist/${playlist.id}`} exact={true} className="playlist-link" activeClassName="active" key={playlist.id}>
          <div className="owned-playlist" >
            <div className="owned-art">
              <img src={playlist.art_url}></img>
            </div>
            <div className="owned-info">
              <div className="owned-info-2">
                <div className="owned-playlist-title">{playlist.title}</div>
                <div className="owned-playlist-owner">By {playlist.creator}</div>
              </div>
              <div className="owned-playlist-members">
                {playlist.member_count}
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </NavLink>
        )
      )
    }
    return shuffle(playlistList).slice(0,4)
  }


  render() {

    let playlist_browse = "";
    let start_message = "";
      if (this.props.match.params.browsetype === "following") {
        playlist_browse = this.renderOwnPlaylists()
        start_message = (<div className="browse-start"><h2>Select a playlist to get started, or <Link to="/home/new">make your own</Link>.</h2></div>)
      } else if (this.props.match.params.browsetype === "explore") {
        playlist_browse = this.renderAllPlaylists()
        start_message = (<div className="browse-start"><h2>What are you in the mood for?</h2></div>)
      } else {
        playlist_browse = this.renderFeaturedPlaylists()
        start_message = (<div className="browse-start"><h2>We thought you might like these.</h2></div>)
      }



      return (
        <div className="playlist-list">
          {this.browseHeader()}
          {start_message}
          <div className="playlist-grid">
            {playlist_browse}
          </div>
        </div>
      )
   }
}

export default withRouter(Browse);
