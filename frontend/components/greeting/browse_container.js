import { connect } from 'react-redux';
import Browse from './browse';
import {getPlaylists, getAllPlaylists} from '../../actions/playlist_actions'

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  ownedPlaylists: state.playlists.ownedPlaylists,
  currentUser: state.session.currentUser,
  allPlaylists: state.playlists.allPlaylists
});

const mapDispatchToProps = dispatch => ({
  getPlaylists: query => dispatch(getPlaylists(query)),
  getAllPlaylists: () => dispatch(getAllPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
