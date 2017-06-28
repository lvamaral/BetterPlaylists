
import React from 'react';
import { Route } from 'react-router-dom';
import {includes, values, some, isEqual, at} from 'lodash';
import size from 'lodash/size';
import {Link, Redirect} from 'react-router-dom';
import SongDetailContainer from './song_detail_container';


class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {owned: "", editing: false, title: ""}
  }

  componentDidMount() {
    this.props.getPlaylist(this.props.match.params.id);
    let title = $("#playlistTitle").text();
    this.setState({title: title})
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.getPlaylist(nextProps.match.params.id);
    }
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

    playFirstSong() {
      if (this.props.currentPlaylist.songs[0] != undefined) {
        this.props.playSong(this.props.currentPlaylist.songs[0])
        // $(".playbarmid").toggleClass("no-song")
      }
    }

    renderFollow(){
      let owned = this.isFollowing()

      if (this.state.editing) {
        return (<span id="follow" onClick={this.handleSubmit.bind(this)}>DONE</span>)
      } else if (this.props.currentPlaylist.creator.username === this.props.currentUser.username) {
        return (<span id="follow" onClick={this.startEdit.bind(this)}>EDIT</span>)
      }
      else if (owned){
        return (<span id="follow" onClick={this.toggleFollow.bind(this)}>UNFOLLOW</span>)
      } else {
        return (<span id="follow" onClick={this.toggleFollow.bind(this)}>FOLLOW</span>)
      }
    }

    toggleFollow(){
      if (this.isFollowing() == true) {
        this.unFollow()
      } else {
        this.follow()
      }
    }

    follow(){
      this.props.followPlaylist(this.props.currentUser.id, this.props.currentPlaylist.id);
    }

    unFollow(){
      const playlist_members = this.props.currentPlaylist.members
      const id = this.props.currentUser.id
      const ref = _.at(playlist_members,[`${id}.membership_id[0].id`])
      this.props.unFollowPlaylist(this.props.currentUser.id, this.props.currentPlaylist.id);

    }

    isFollowing(){
      let owned = false
      if (this.props.members !== undefined){
        if (Object.keys(this.props.members).includes(String(this.props.currentUser.id))) {
          owned = true
        } else {
          owned = false
        }
      }
      return owned
    }

    startEdit(){
      this.setState({editing: true});

    }

    isEditing(){
      if (this.state.editing) {
        return (<input type="text" autoFocus id="title-edit" value={this.state.title} onChange={this.update('title')}/>)
      } else {
        return (this.props.currentPlaylist.title)
      }
    }


    update(property) {
      return e => {
        this.setState({[property]: e.target.value})
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      this.setState({editing: false})
      this.props.updatePlaylist(this.props.currentPlaylist.id, this.state.title)
    }


  render() {

    $(".left").show();
    $(".search").show();
    const playlist = this.props.currentPlaylist;
    let owned = this.isFollowing();

    if (!isEqual(playlist, {}) && !owned && !this.props.currentPlaylist.public) {
      return(
        <Redirect to="/home/featured"/>
      )
    }

    let playlist_detail = ""
    let songs = (<p className="no-songs">There are no songs here yet! Use the search bar on the right to add songs to this playlist</p>)
    if (!isEqual(playlist, {})) {
      playlist_detail = (
        <div id="playlist-title-box">
          <div className="playlist-detail-img"><img src={playlist.art_url}/></div>
          <div className="playlist-detail-core">
            <div className="playlist-detail-title"><h2 id="playlistTitle">{this.isEditing()}</h2></div>
            <div className="playlist-detail-uploader"><h3>By <Link to={`/home/users/${playlist.creator.id}`}>{playlist.creator.username}</Link></h3></div>
            {this.hasSongs()}
            <div className="playlist-detail-buttons">
              <button onClick={this.playFirstSong.bind(this)}>PLAY</button>
              <div className="playlist-detail-buttons-h">
                <p id="follow">{this.renderFollow()}</p>
                <p id="edit"></p>
              </div>
            </div>
          </div>
        </div>
      )
      if (!isEqual(playlist.songs, [])) {
        songs = playlist.songs.map( (song) => (
          <SongDetailContainer key={song.id} song={song}/>
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


// if (!isEqual(playlist.songs, {})) {
//   songs = playlist.songs.map( (song) => (
//     <div className="playlist-detail-song" key={song.id}>
//       <div className="playlist-uploader">
//         <img src={song.uploader.image_url}></img>
//         <div><Link to={`/home/users/${song.uploader.id}`}>{song.uploader.username}</Link></div>
//       </div>
//       <div className="playlist-song-info">
//           <div className="playlist-song-playbtn">
//             {this.songPlaying(song)}
//           </div>
//           <div className="playlist-song-core">
//             <div className="playlist-core-title">
//               <div className="playlist-core-title2">
//                 <p><span id="title">{song.title}</span></p>
//                 <p><span id="artist">{song.artist}</span></p>
//               </div>
//               <div className="playlist-core-length">{song.length}</div>
//             </div>
//
//             <div className="vote-box">
//               <i className="fa fa-chevron-up" aria-hidden="true" id="up"></i>
//               <i className="fa fa-chevron-down" aria-hidden="true" id="down"></i>
//             </div>
//           </div>
//       </div>
//     </div>
//   ))
// }
