import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import isEqual from 'lodash/isEqual';

class UserPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {image_url: "", user: ""}
  }

  componentDidMount(){
    this.props.getUser(this.props.match.params.user_id);
    $(".left").hide();
    $(".search").hide();
    let user = this.props.user.newMember;

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.user_id !== nextProps.match.params.user_id) {
      this.props.getUser(nextProps.match.params.user_id);
    }
  }

  upload_image(e) {
    let _this = this
    let id = this.props.match.params.user_id
      e.preventDefault();
      cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
        if(!error){
          $.ajax({
            method: 'PATCH',
            url: `api/users/${id}`,
            data: {image_url: results[0]},
            success: function(user){
              _this.setState({image_url: user.image_url})
            }
          })
        }
      }.bind(this))
    }

  renderOwnPlaylists(user){
    const playlists = user.playlists;

    let playlistList = ""
    if (playlists !== undefined) {
      playlistList = playlists.map(playlist => (
        <NavLink to={`/home/playlist/${playlist.id}`} exact={true} className="playlist-link" activeClassName="active" key={playlist.id}>
          <div className="user-playlist" >
            <div className="user-art">
              <img src={playlist.art_url}></img>
            </div>
            <div className="user-info">
              <div className="user-info-2">
                <div className="user-playlist-title">{playlist.title}</div>
                <div className="user-playlist-owner">By {playlist.creator}</div>
              </div>
              <div className="user-playlist-members">
                {playlist.members}
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <div className="user-playlist-songs">
                {playlist.songs}
                <i className="fa fa-music" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </NavLink>
        )
      )
    }
    return playlistList
  }

  ownedImage(){

    if (this.props.currentUser.id) {
      return (<img src={this.state.image_url} onClick={(e)=>this.upload_image(e)}></img>)
    } else {
      return (<img src={this.state.image_url}></img>)
    }
  }

  render() {
    const user = this.props.user.newMember;
    const userImg = this.ownedImage()

    let playlists
    let made_playlists = 0
    let uploaded_songs = 0
    if (!isEqual(user, {}) && user !== undefined) {
      playlists = this.renderOwnPlaylists(user);
      made_playlists = user.user_info.made_playlists
      uploaded_songs = user.user_info.uploaded_songs
    }


    return (
      <div className="user-page">
        <div className="user-page-upper">
          <h2>User</h2>
          <div className="user-page-pic">
            <img src={user.image_url}></img>
          </div>
          <div className="user-page-name">
            <h2>{user.username}</h2>
              <div className="user-page-info">
                <h3><span id="purple">{made_playlists}</span> playlists created</h3>
                <h3><span id="purple">{uploaded_songs}</span> songs uploaded</h3>
              </div>
          </div>

       </div>
        <div className="user-page-followed">
          <h2>Followed Playlists</h2>
          <div className="user-playlist-grid">{playlists}</div>
        </div>
      </div>
    )
  }


}

export default UserPage;
