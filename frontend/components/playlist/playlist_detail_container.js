import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail';
import {getPlaylist} from '../../actions/playlist_actions';
import {playSong} from '../../actions/playbar_actions'

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  currentUser: state.session.currentUser,
  currentSong: state.playbar.currentSong,
  playbar: state.playbar
});

const mapDispatchToProps = dispatch => ({
  getPlaylist: query => dispatch(getPlaylist(query)),
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
