import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class SongDetail extends React.Component{
  constructor(props) {
    super(props)
    this.song = this.props.song
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
                  <i className="fa fa-chevron-up" aria-hidden="true" id="up"></i>
                  <i className="fa fa-chevron-down" aria-hidden="true" id="down"></i>
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

      // {this.songPlaying(this.song)}
