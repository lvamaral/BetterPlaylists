import { connect } from 'react-redux';
import SongDetail from './song_detail';
import {playSong} from '../../actions/playbar_actions';

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  ownedPlaylists: state.playlists.ownedPlaylists,
  currentUser: state.session.currentUser,
  currentSong: state.playbar.currentSong
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
