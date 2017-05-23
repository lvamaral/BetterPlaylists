import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';


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

  render() {
    let songList = ""
    if (this.props.songs.songs !== undefined) {
      songList = this.props.songs.songs.map(song => (
        <div className="srow" key={song.id}>
          {this.songIcon(song)}
          <div className="sart"><img src={song.art_url}></img></div>
          <div className="score">
            <div className="stitle" id="test">{song.title}</div>
            <div className="sartist">{song.artist} - {song.album}</div>
          </div>

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
              <div className="stitle2 head" onClick={this.handleClick.bind(this)}>Title</div>
              <div className="sartist2 head" onClick={this.handleClick.bind(this)}>Artist</div>
              <div className="salbum2 head" onClick={this.handleClick.bind(this)}>Album</div>
            </div>
            <hr></hr>
            {songList}

          </div>
        </div>
      )
    }
  }


export default withRouter(SearchBar);
