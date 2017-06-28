import { connect } from 'react-redux';
import SongDetail from './song_detail';
import {playSong, pauseSong} from '../../actions/playbar_actions';
import {createVote, updateVote, getVotes} from '../../actions/song_actions'

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlists.currentPlaylist,
  ownedPlaylists: state.playlists.ownedPlaylists,
  currentUser: state.session.currentUser,
  currentSong: state.playbar.currentSong,
  playStatus: state.playbar.playStatus,
  votes: state.songs.votes
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song)),
  pauseSong: () => dispatch(pauseSong()),
  createVote: (type, user_id, playlist_id, song_id) => dispatch(createVote(type, user_id, playlist_id, song_id)),
  getVotes: (user_id, song_id, playlist_id) => dispatch(getVotes(user_id, song_id, playlist_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
