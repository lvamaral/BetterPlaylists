import React from 'react';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import PlaylistList from './playlist_list'

class NewPlaylist extends React.Component {
  constructor(props) {
    super(props);
    const set = new Set()
    this.state = {query: "", title: "", members: set, redirect: false}

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

    handleSubmit(e) {
      e.preventDefault();
      const newState = merge({}, this.state)
      newState.members.add(this.props.currentUser.id)
      this.setState(newState)

      const member_array = Array.from(this.state.members);
      const playlist = {title: this.state.title, creator_id: this.props.currentUser.id, user_ids: member_array  };
      this.props.createPlaylist(playlist).then(
           (res) => this.props.history.push(`/home/playlist/${res.id}` )).then(this.props.getPlaylists(this.props.currentUser.id))
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
            <span className="input input--isao">
              <input value={this.state.title} onChange={this.update('title')} className="input__field input__field--isao" type="text" id="input-38" />
              <label className="input__label input__label--isao" htmlFor="input-38" data-content="Playlist Name">
                <span className="input__label-content input__label-content--isao">Playlist Name</span>
              </label>
            </span>
          <br/>

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


  // <div className="btn">
  //     <span>Create</span>
  //     <div className="dot"></div>
  // </div>

  // const users = this.props.users
  // console.log("state", this.state);
  //
  // let userList = ""
  // let userArray = []
  //
  //
  //
  // if (!isEqual(users, {})) {
  //   userList = users.users.map(user => (
  //     <div className="user-row" key={user.id} onClick={(e) => {
  //       let id = user.id
  //       this.addMember(id)
  //     }}>
  //       <div className="user-image"><img src={user.image_url}></img></div>
  //       <div className="user-name">{user.username}</div>
  //     </div>)
  //     )
  //   }
    // <input onChange={this.update('query')} type="text" placeholder="Add Users..."/>
