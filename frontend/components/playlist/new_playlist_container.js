import { connect } from 'react-redux';
import NewPlaylist from './new_playlist';
import {getUsers, getUser} from '../../actions/user_actions'
import * as APIUtil from '../../util/user_util'

const mapStateToProps = (state) => ({
  users: state.users.users,
  newMember: state.users.newMember
});

const mapDispatchToProps = dispatch => ({
  getUsers: query => dispatch(getUsers(query)),
  getUser: id => dispatch(getUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylist);
