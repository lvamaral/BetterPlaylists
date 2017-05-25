import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail';
import {getPlaylist, followPlaylist, unFollowPlaylist, updatePlaylist} from '../../actions/playlist_actions';
import {playSong} from '../../actions/playbar_actions';

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  members: state.playlists.currentPlaylist.members,
  ownedPlaylists: state.playlists.ownedPlaylists,
  currentUser: state.session.currentUser,
  currentSong: state.playbar.currentSong,
  playbar: state.playbar
});

const mapDispatchToProps = dispatch => ({
  getPlaylist: query => dispatch(getPlaylist(query)),
  playSong: song => dispatch(playSong(song)),
  followPlaylist: (user_id, playlist_id) => dispatch(followPlaylist(user_id,playlist_id)),
  unFollowPlaylist: (user_id, playlist_id) => dispatch(unFollowPlaylist(user_id, playlist_id)),
  updatePlaylist: (id, title) => dispatch(updatePlaylist(id, title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
