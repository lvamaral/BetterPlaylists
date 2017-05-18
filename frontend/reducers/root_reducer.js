import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SongReducer from './song_reducer';
import PlaylistReducer from './playlist_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  currentPlaylist: PlaylistReducer,
  songs: SongReducer
});

export default RootReducer;
