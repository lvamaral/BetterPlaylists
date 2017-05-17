import { connect } from 'react-redux';
import Search from './search';

//
// const mapStateToProps = (state) => {
//   songs:
// };

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(processForm(user)),
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
