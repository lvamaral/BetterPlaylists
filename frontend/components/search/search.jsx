import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", songs: this.props.songs}
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
    this.props.addSong(song_id, playlist_id, user_id)
    // .then(this.props.getPlaylist(playlist_id));
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

  render() {
    let songList = ""
    if (this.props.songs.songs !== undefined) {
      songList = this.props.songs.songs.map(song => (
        <div className="srow" key={song.id}>
          {this.songIcon(song)}
          <div className="stitle" id="test">{song.title}</div>
          <div className="sartist">{song.artist}</div>
          <div className="salbum">{song.album}</div>
        </div>)
        )
      }

    return (

        <div className="search">
          <div className="searchbar">
          <label><i className="fa fa-search button" aria-hidden="true"></i>
              <input onChange={this.update('query')} type="text" placeholder="Search..."/>
            </label>
          </div>

          <div id="search-results">
            <div className="srow2">
              <div className="addicon"></div>
              <div className="stitle head">Title</div>
              <div className="sartist head">Artist</div>
              <div className="salbum head">Album</div>
            </div>
            <hr></hr>
            {songList}

          </div>
        </div>
      )
    }
  }


export default withRouter(SearchBar);
