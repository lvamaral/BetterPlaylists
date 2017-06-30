import React from 'react';
import {Link} from 'react-router-dom'

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {playStatus: this.props.playbar.playStatus, playTime: 0}
  }

  componentDidMount(){
    this.setState({playStatus: this.props.playbar.playStatus});
    let audio = document.getElementById('audio');
    $(window).keypress( (e) => {
    
        if (e.keyCode === 0 || e.keyCode === 32) {
          e.preventDefault()
          if (this.state.playStatus === "play" || this.state.playStatus === "pause" ) {
            this.togglePlay();
          }
        }
      }).bind(this)

  }

  nextSong() {
    let audio = document.getElementById('audio');
    const playlist = this.props.currentPlaylist.songs
    const current_idx = playlist.indexOf(this.props.playbar.currentSong)

    let nextSong
    if (current_idx + 1 >= playlist.length) {
      nextSong = playlist[current_idx + 1 - playlist.length]
    } else {
      nextSong = playlist[current_idx + 1]
    }

    audio.pause();
    this.props.playSong(nextSong)
    audio.play();
  }


    previousSong() {
      let audio = document.getElementById('audio');
      const playlist = this.props.currentPlaylist.songs
      const current_idx = playlist.indexOf(this.props.playbar.currentSong)

      let previousSong
      if (current_idx - 1 < 0) {
        previousSong = playlist[playlist.length - 1]
      } else {
        previousSong = playlist[current_idx - 1]
      }

      audio.pause();
      this.props.playSong(previousSong)
      audio.play();
    }


  componentWillReceiveProps(nextProps, nextState){
    if(nextProps.playbar != this.props.playbar){
      this.setState({playStatus: nextProps.playbar.playStatus});
      let _this = this;
      window.interval = window.setInterval(function() {
         _this.updateTime();
       }, 100);
    }
  }

  convertTime(timestamp){
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);
     if (seconds < 10) { seconds = '0' + seconds; }
     timestamp = minutes + ':' + seconds;
     return timestamp;
    }

    isPlaying(){
      if (this.state.playStatus === "play") {
        return (<i className="fa fa-pause" aria-hidden="true" onClick={()=> this.togglePlay()}></i>)
      } else if (this.state.playStatus === "pause") {
        return (<i className="fa fa-play" aria-hidden="true" onClick={()=> this.togglePlay()}></i>)
      } else {
        return (<i className="fa fa-play" aria-hidden="true"></i>)
      }
    }

    hasLength(){
      if (this.props.playbar.currentSong !== undefined) {
        let len = this.props.playbar.currentSong.length
        return (<p>{len}</p>)
      } else {
        return (<p></p>)
      }
    }

    togglePlay(){
       let status = this.state.playStatus;
       let audio = document.getElementById('audio');
       if(status === 'play') {
         this.props.pauseSong()
         status = 'pause'; audio.pause();
         window.clearInterval(window.interval)
       } else {
         this.props.playSong(this.props.playbar.currentSong)
         status = 'play'; audio.play();
         let _this = this;
         window.interval = window.setInterval(function() {
            _this.updateTime();
          }, 100);
       }
       this.setState({ playStatus: status });
      }

      updateTime(){
        let audio = document.getElementById('audio');
        let time = this.convertTime(Math.floor(audio.currentTime))
        this.setState({playTime: time})
        let percentage = (audio.currentTime/audio.duration)*100
        $(".inner-timebar").css('width',`${percentage}%`);
        if (audio.currentTime === audio.duration) {
          this.nextSong()
        }
      }

      changeTime(e){
        let fullWidth = $(".outer-timebar").width()
        let relative = e.pageX - $(e.target).offset().left
        let percent = relative/fullWidth

        let audio = document.getElementById('audio');
        audio.currentTime = percent * audio.duration;
        let time = this.convertTime(Math.floor(audio.currentTime))
        this.setState({playTime: time})
      }


    render() {

      const playbarleft = (
        <div className="play-title"></div>
      );

      const playbarmid = (
          <div className="play-control">
            <i className="fa fa-step-backward" aria-hidden="true" onClick={this.previousSong.bind(this)}></i>
            {this.isPlaying()}
            <i className="fa fa-step-forward" aria-hidden="true" onClick={this.nextSong.bind(this)}></i>
          </div>
      );

      let scrobble = (<div className="scrobble"></div>);
      let audio = (<audio id="audio"></audio>);
      let image = "";

      if (this.props.playbar.currentSong !== "") {
        scrobble = (
          <div className="scrobble">
            <p>{this.state.playTime}</p><div className="outer-timebar" onClick={e => this.changeTime(e)}><div className="inner-timebar"></div></div>{this.hasLength()}
          </div>
        );

        audio = (<audio autoPlay id="audio" src={this.props.playbar.currentSong.song_url}></audio>);
        image = (<img src={this.props.playbar.currentSong.art_url}></img>)
      };

      let displayBar = (
        <div className="playbarmid">
          {audio}
        </div>
      )
      if (this.props.playbar.currentSong !== "") {
          displayBar = (
            <div className="playbarmid">
              {playbarmid}
              {scrobble}
              {audio}
            </div>
          )
      }
      return (
      <div className="playbar">
        <div className="playbarleft">
          <div className="cover-art">
            {image}
          </div>
          <div className="playbar-info">
            <p><span id="title">{this.props.playbar.currentSong.title}</span></p>
            <p><span id="artist">{this.props.playbar.currentSong.artist}</span></p>
          </div>
        </div>
        {displayBar}
        <div className="playbarright">
        </div>
      </div>
    );
  }

}

// <div className="playbarmid">
//   {playbarmid}
//   {scrobble}
//   {audio}
// </div>

export default Playbar;
