import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter, Link} from 'react-router-dom';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", source: "title", songs: this.props.songs}
  }

  componentDidMount(){
    this.props.getSongs();
  }

  update(property) {
    return e => {
      this.props.getSongs(e.target.value)
      this.setState({[property]: e.target.value})
    }
  }

  addSong(song_id, playlist_id, user_id) {
    this.props.addSong(song_id, playlist_id, user_id);
  }

  isFollowing(){
    let following = false

    if (this.props.currentPlaylist.members !== undefined){
      if (this.props.currentPlaylist.creator.id === this.props.currentUser.id || Object.keys(this.props.currentPlaylist.members).includes(String(this.props.currentUser.id))) {
        following = true
      } else {

        following = false
      }
    }

    return following
  }

  songIcon(currentSong) {
    let addIcon = <div className="addicon"></div>
    if (this.props.currentPlaylist.id != undefined) {
      let songIds = this.props.currentPlaylist.songs.map( song => song.id)
      if (songIds.includes(currentSong.id)) {
        addIcon = <div className="addicon"><i className="fa fa-check" aria-hidden="true"></i></div>
      } else if (this.isFollowing()) {
        addIcon =  <div className="addicon"><i className="fa fa-plus" aria-hidden="true" onClick={() => this.addSong(currentSong.id, this.props.currentPlaylist.id, this.props.currentUser.id)}></i></div>
      }
    }
    return addIcon
  }


  handleClick(e){
    let source = $(e.target).html()
    this.setState({source: source})

    $(".head").removeClass("source-selected")
    $(e.target).addClass("source-selected")
  }

  isPlaying(song) {
    if (song === this.props.currentSong) {
      return (<div className="stitle playing"><p>{song.title}</p></div>)
    } else {
      return (<div className="stitle"><p>{song.title}</p></div>)
    }
  }

  render() {
    let songList = ""
    if (this.props.songs.songs !== undefined) {
      songList = this.props.songs.songs.map(song => (
        <div className="srow" key={song.id} >
          <div className="sart" onClick={() => this.props.playSong(song)}><img src={song.art_url}></img></div>
          <div className="score" onClick={() => this.props.playSong(song)}>
            {this.isPlaying(song)}
            <div className="sartist">{song.artist}</div>
          </div>
          {this.songIcon(song)}
        </div>)
        )
      }
      if (songList.length < 1 && this.state.query != "") {
        songList = <p className="noSongsMatch">No songs match your query...</p>
      }


    return (
        <div className="search">
          <div className="search-top">
            <div className="searchbar">
            <label><i id="searchIcon" className="fa fa-search button" aria-hidden="true"></i>
                <input id='searchInput' onChange={this.update('query')} type="text" placeholder="Search..."/>
              </label>
            </div>

            <div id="search-results">
              {songList}
            </div>
          </div>
          <Link to="/home/new">
            <div className="add-new-playlist">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              <p>New Playlist</p>
            </div>
          </Link>

        </div>
      )
    }
  }


export default withRouter(SearchBar);
//
// <Link to="/home/new">
//   <div className="add-new-playlist">
//     <i className="fa fa-plus-circle" aria-hidden="true"></i>
//     <p>New Playlist</p>
//   </div>
// </Link>
