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

  songIcon(currentSong) {
    let addIcon = <div className="addicon"></div>
    if (this.props.currentPlaylist.id != undefined) {
      let songIds = this.props.currentPlaylist.songs.map( song => song.id)
      if (songIds.includes(currentSong.id)) {
        addIcon = <div className="addicon"><i className="fa fa-check" aria-hidden="true"></i></div>
      } else {
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
    console.log("state",this.state)
  }

  isPlaying(song) {
    if (song === this.props.currentSong) {
      return (<div className="stitle playing">{song.title}</div>)
    } else {
      return (<div className="stitle">{song.title}</div>)
    }
  }




  render() {
    let songList = ""
    if (this.props.songs.songs !== undefined) {
      songList = this.props.songs.songs.map(song => (
        <div className="srow" key={song.id} onClick={() => this.props.playSong(song)}>
          <div className="sart"><img src={song.art_url}></img></div>
          <div className="score">
            {this.isPlaying(song)}
            <div className="sartist">{song.artist} - {song.album}</div>
          </div>
          {this.songIcon(song)}
        </div>)
        )
      }


    return (
        <div className="search">
          <div className="search-top">
            <div className="searchbar">
            <label><i className="fa fa-search button" aria-hidden="true"></i>
                <input onChange={this.update('query')} type="text" placeholder="Search..."/>
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

  // <div className="srow2">
  //   <div className="addicon"></div>
  //   <div className="stitle2 head" onClick={this.handleClick.bind(this)}>Title</div>
  //   <div className="sartist2 head" onClick={this.handleClick.bind(this)}>Artist</div>
  //   <div className="salbum2 head" onClick={this.handleClick.bind(this)}>Album</div>
  // </div>

export default withRouter(SearchBar);
