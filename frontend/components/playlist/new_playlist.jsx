import React from 'react';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual'

class NewPlaylist extends React.Component {
  constructor(props) {
    super(props);
    const set = new Set()
    this.state = {query: "", title: "", members: set, songs: [], newmember: {}}
    // this.getUser = this.props.getUser.bind(this)
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


    handleSubmit() {

    }

    addMember(id){
      const newState = merge({}, this.state)
      newState.members.add(id)
      this.setState(newState)
    }

    render() {
      const users = this.props.users
      console.log("users", users);

      let userList = ""
      if (!isEqual(users, {}) && !isEqual(users, {users: {}})) {
        debugger
        userList = users.users.map(user => (
          <div className="user-row" key={user.id} onClick={(e) => {
            let id = user.id
            this.addMember(id)
          }}>
            <div className="user-image"><img src={user.image_url}></img></div>
            <div className="user-name">{user.username}</div>
          </div>)
          )
        }


      return (
        <div className="new-playlist">
          <form onSubmit={this.handleSubmit} className="new-playlist-form">
            <h2>New Playlist</h2>
            <span className="input input--isao">
              <input value={this.state.title} onChange={this.update('title')} className="input__field input__field--isao" type="text" id="input-38" />
              <label className="input__label input__label--isao" htmlFor="input-38" data-content="Playlist Name">
                <span className="input__label-content input__label-content--isao">Playlist Name</span>
              </label>
            </span>
          <br/>
          <input onChange={this.update('query')} type="text" placeholder="Add Users..."/>
          <div className="members">
          </div>
          <div className="user-search-results">
            {userList}
          </div>
          </form>
        </div>
      )
    }
  }

  export default NewPlaylist;
