import { connect } from 'react-redux';
import UserPage from './user_page';
import {getUser} from '../../actions/user_actions';


const mapStateToProps = (state) => ({
    user: state.users
  });

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
