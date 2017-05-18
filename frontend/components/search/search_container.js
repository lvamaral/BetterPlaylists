import { connect } from 'react-redux';
import Search from './search';
import {getSongs} from '../../actions/song_actions'

const mapStateToProps = (state) => ({
  currentPlaylist: state.currentPlaylist,
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  getSongs: query => dispatch(getSongs(query)) ,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
