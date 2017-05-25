import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail';
import {getPlaylist, followPlaylist} from '../../actions/playlist_actions';
import {playSong} from '../../actions/playbar_actions';

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  ownedPlaylists: state.playlists.ownedPlaylists,
  currentUser: state.session.currentUser,
  currentSong: state.playbar.currentSong,
  playbar: state.playbar
});

const mapDispatchToProps = dispatch => ({
  getPlaylist: query => dispatch(getPlaylist(query)),
  playSong: song => dispatch(playSong(song)),
  followPlaylist: (user_id, playlist_id) => dispatch(followPlaylist(user_id,playlist_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
