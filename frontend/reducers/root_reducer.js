import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import SongReducer from './song_reducer';
import PlaybarReducer from './playbar_reducer';
import PlaylistReducer from './playlist_reducer';

// const RootReducer = combineReducers({
//   session: SessionReducer,
//   playlists: PlaylistReducer,
//   songs: SongReducer,
//   playbar: PlaybarReducer,
//   users: UserReducer
// });

const appReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer,
  playbar: PlaybarReducer,
  users: UserReducer
});

const RootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }

  return appReducer(state, action)
}

export default RootReducer;
