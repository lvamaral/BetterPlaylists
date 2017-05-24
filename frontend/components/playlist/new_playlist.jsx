import React from 'react';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import PlaylistList from './playlist_list'

class NewPlaylist extends React.Component {
  constructor(props) {
    super(props);
    const set = new Set()
    this.state = {query: "", title: "", public: true, members: set, redirect: false}
    this.getPlaylists = this.props.getPlaylists.bind(this)

  }

    componentDidMount() {
      this.props.getUsers();
    }

    update(property) {
      return e => {
        if (property === 'query') {
          this.props.getUsers(e.target.value)
          let users = this.props.users
          this.setState({[users]: users})
        }
        this.setState({[property]: e.target.value})
      }
    }

    updatePublic(){
      if (this.state.public === false) {
        this.setState({public: true})
      } else {
        this.setState({public: false})
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      const newState = merge({}, this.state)
      newState.members.add(this.props.currentUser.id)
      this.setState(newState)

      const member_array = Array.from(this.state.members);
      const playlist = {title: this.state.title, creator_id: this.props.currentUser.id, public: this.state.public, user_ids: member_array  };

      this.props.createPlaylist(playlist).then(
           (res) => { this.props.history.push(`/home/playlist/${res.currentPlaylist.id}`)})
    }


    toggleMember(user){
      const memberDiv = $("#members")
      const newState = merge({}, this.state)
      if (newState.members.has(user.id)) {
        newState.members.delete(user.id)

        $(`.${user.id}`).remove()
      } else {
        newState.members.add(user.id)
        memberDiv.append(`<img src=${user.image_url} alt=${user.username} class="user-image member-image ${user.id}"></img>`)
      }
      this.setState(newState)
    }

    render() {

      const users = this.props.users
      let userList = "";
      let selected = "";
      let members = this.state.members

      if (!isEqual(users, {})) {
        userList = users.users.map(user => {
          if (members.has(user.id)) {
            selected = "user-row selected"
          } else {
            selected = "user-row"
          }
            return (
            <div className={selected} key={user.id} onClick={(e) => {
              this.toggleMember(user)}}>
              <div className="user-image"><img src={user.image_url}></img></div>
              <div className="user-name">{user.username}</div>
            </div>
          );
        })
      }

      return (

        <div className="new-playlist">
          <form onSubmit={this.handleSubmit.bind(this)} className="new-playlist-form">
            <h2>New Playlist</h2>
            <div className="upper-form">
              <span className="input input--isao">
                <input value={this.state.title} onChange={this.update('title')} className="input__field input__field--isao" type="text" id="input-38" />
                <label className="input__label input__label--isao" htmlFor="input-38" data-content="Playlist Name">
                  <span className="input__label-content input__label-content--isao">Playlist Name</span>
                </label>
              </span>
              <div className="form-public">
                <div id="public"><i className="fa fa-globe" aria-hidden="true"></i><p>Public</p><input type="radio" name="public" value="true" defaultChecked onChange={this.updatePublic.bind(this)}/></div>
              <div id="private"><i className="fa fa-lock" aria-hidden="true"></i><p>Private</p><input type="radio" name="public" value="false" onChange={this.updatePublic.bind(this)}/></div>
              </div>
            <br/>
           </div>

          <div className="lower-form">
            <div className="user-search-box">
              <span className="input input--isao">
                <input value={this.state.query} onChange={this.update('query')} className="input__field input__field--isao" type="text" id="input-39" />
                <label className="input__label input__label--isao" htmlFor="input-39" data-content="Add Users">
                  <span className="input__label-content input__label-content--isao">Add Users</span>
                </label>
              </span>
              <div className="user-search-results">
                {userList}
              </div>
            </div>

            <div id="members">
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
          </div>
            <input className="formsubmit" type="submit" value="Create"/>
          </form>
        </div>
      )
    }
  }

  export default NewPlaylist;
