import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, OverlayTrigger, Tooltip , mountNode } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.currentPlaylist = this.props.currentPlaylist.currentPlaylist
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

  render() {
    const songs = this.props.songs
    let songList = ""
    if (songs.songs !== undefined) {
      songList = songs.songs.map(song => (
        <div className="srow" key={song.id}>
          <div className="addicon tooltip"><span className="tooltiptext">Click to add</span><i className="fa fa-plus" aria-hidden="true"></i></div>
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


export default SearchBar;
