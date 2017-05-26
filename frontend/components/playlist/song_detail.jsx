import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {values, last} from 'lodash';
import{size, isEqual} from 'lodash';

class SongDetail extends React.Component{
  constructor(props) {
    super(props)
    this.song = this.props.song
    this.state = {voted: ""}
  }

  componentDidMount(){
    this.props.getVotes(this.props.currentUser.id, this.song.id, this.props.currentPlaylist.id);
    if (!isEqual(this.props.votes, {}) && !isEqual(this.props.votes, [])) {
      this.setState({voted: true})
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

    vote(){
     const type = 1;
     const user_id = this.props.currentUser.id;
     const playlist_id = this.props.currentPlaylist.id;
     const song_id = this.props.song.id
     this.props.createVote(type, user_id, playlist_id, song_id)
    }

    renderUpVote(){
      if (this.state.voted === true || this.props.votes.length > 0)
      {
        return (<i className="fa fa-chevron-up up-voted" aria-hidden="true" id="up"></i>)
      } else {
        return (<i className="fa fa-chevron-up" aria-hidden="true" id="up" onClick={()=>this.vote()}></i>)
      }
    }

    // renderDownVote(){
    //   if (this.votes.some(vote => vote.user_id === this.props.currentUser.id)
    //   && this.votes.some(vote => vote.song_id === this.song.id)) {
    //     return (<i className="fa fa-chevron-up up-voted" aria-hidden="true" id="up"></i>)
    //   } else {
    //     return (<i className="fa fa-chevron-up" aria-hidden="true" id="up" onClick={()=>this.vote()}></i>)
    //   }
    // }


  render ()  {
    const songDetail = (
        <div className="playlist-detail-song">
          <div className="playlist-uploader">
            <img src={this.song.uploader.image_url}></img>
            <div><Link to={`/home/users/${this.song.uploader.id}`}>{this.song.uploader.username}</Link></div>
          </div>
          <div className="playlist-song-info">
              <div className="playlist-song-playbtn">
                {this.songPlaying(this.song)}
              </div>
              <div className="playlist-song-core">
                <div className="playlist-core-title">
                  <div className="playlist-core-title2">
                    <p><span id="title">{this.song.title}</span></p>
                    <p><span id="artist">{this.song.artist}</span></p>
                  </div>
                  <div className="playlist-core-length">{this.song.length}</div>

                </div>

                <div className="vote-box">


                </div>
              </div>
          </div>
        </div>
      )

    return(
      <span>
        {songDetail}
      </span>
    )
  }

}

export default SongDetail;
      // {this.renderDownVote()}
        // {this.renderUpVote()}
          // {this.renderUpVote()}
      // {this.songPlaying(this.song)}

      // <i className="fa fa-chevron-up" aria-hidden="true" id="up" onClick={()=>this.vote()}></i>
      // <i className="fa fa-chevron-down" aria-hidden="true" id="down"></i>
