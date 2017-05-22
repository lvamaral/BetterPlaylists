import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {playStatus: "play", playTime: 0}
  }

  componentWillReceiveProps(){

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
      // console.log(this.props.playbar.currentSong);
      if (this.props.playbar.currentSong !== undefined) {
        let len = this.convertTime(this.props.playbar.currentSong.length)
        return (<p>{len}</p>)
      } else {
        return (<p></p>)
      }
    }

    togglePlay(){

       let status = this.state.playStatus;
       let audio = document.getElementById('audio');
       if(status === 'play') {
         console.log("pause");
         status = 'pause'; audio.play();
       } else {
           console.log("play");
         status = 'play'; audio.pause();
       }
       this.setState({ playStatus: status });
      }

    render() {
      console.log("props", this.props.playbar);
      console.log(this.state);

      const playbarleft = (
        <div className="play-title"></div>
      );

      const playbarmid = (
          <div className="play-control">
            <i className="fa fa-step-backward" aria-hidden="true"></i>
            {this.isPlaying()}
            <i className="fa fa-step-forward" aria-hidden="true"></i>
          </div>
      );

      let scrobble = (<div className="scrobble"></div>);
      let audio = (<audio id="audio"></audio>);

      if (this.props.playbar.currentSong !== "") {
        scrobble = (
          <div className="scrobble">
            <p>{this.state.playTime}</p><div className="timebar"></div>{this.hasLength()}
          </div>
        );

        audio = (<audio id="audio"><source src={this.props.playbar.currentSong.url}/></audio>);
      };

      return (
      <div className="playbar">
        <div className="playbarleft">
        </div>
        <div className="playbarmid">
          {playbarmid}
          {scrobble}
          {audio}
        </div>
        <div className="playbarright">
        </div>
      </div>
    );
  }

}


export default Playbar;
