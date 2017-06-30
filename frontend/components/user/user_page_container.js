import { connect } from 'react-redux';
import UserPage from './user_page';
import {getUser} from '../../actions/user_actions';
import {postPhoto} from '../../util/user_util'


const mapStateToProps = (state) => ({
    user: state.users,
    currentUser: state.session.currentUser
  });

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  postPhoto: (id, photo) => dispatch(postPhoto(id,photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
