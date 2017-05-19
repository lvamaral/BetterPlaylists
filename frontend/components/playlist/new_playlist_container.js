import { connect } from 'react-redux';
import NewPlaylist from './new_playlist';
import {getUsers, getUser} from '../../actions/user_actions';
import {createPlaylist} from '../../actions/playlist_actions';
import * as APIUtil from '../../util/user_util';

const mapStateToProps = (state) => ({
  users: state.users.users,
  newMember: state.users.newMember,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getUsers: query => dispatch(getUsers(query)),
  getUser: id => dispatch(getUser(id)),
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylist);
