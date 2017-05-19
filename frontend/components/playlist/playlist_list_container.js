import { connect } from 'react-redux';
import PlaylistList from './playlist_list';
import {getPlaylists} from '../../actions/playlist_actions'

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  ownedPlaylists: state.playlists.ownedPlaylists
});

const mapDispatchToProps = dispatch => ({
  getPlaylists: query => dispatch(getPlaylists(query)) ,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistList);
