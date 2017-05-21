import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail';
import {getPlaylist} from '../../actions/playlist_actions'

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getPlaylist: query => dispatch(getPlaylist(query)) ,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
