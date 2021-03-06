import { connect } from 'react-redux';
import Search from './search';
import {getSongs} from '../../actions/song_actions';
import {addSong, getPlaylist} from '../../actions/playlist_actions';
import {playSong} from '../../actions/playbar_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentPlaylist: state.playlists.currentPlaylist,
    currentUser: state.session.currentUser,
    songs: state.songs,
    currentSong: state.playbar.currentSong
  }
};

const mapDispatchToProps = dispatch => ({
  getSongs: query => dispatch(getSongs(query)),
  addSong: (song_id, playlist_id, user_id) => dispatch(addSong(song_id, playlist_id, user_id)),
  getPlaylist: query => dispatch(getPlaylist(query)),
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
