import { connect } from 'react-redux';
import Playbar from './playbar';
import {playSong} from '../../actions/playbar_actions';

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  playbar: state.playbar
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
