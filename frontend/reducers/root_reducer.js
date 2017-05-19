import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import SongReducer from './song_reducer';
import PlaylistReducer from './playlist_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer,
  users: UserReducer
});

export default RootReducer;
