import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_PLAYLIST,
  RECEIVE_OWNED_PLAYLISTS,
  RECEIVE_ERRORS
} from '../actions/playlist_actions';

const sample = {
  ownedplaylists: {},
  currentPlaylist: {}
}


const PlaylistReducer = (state = sample, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_PLAYLIST:
      return {ownedPlaylists: state.ownedPlaylists, currentPlaylist: action.currentPlaylist};
    case RECEIVE_OWNED_PLAYLISTS:
      return {ownedPlaylists: action.ownedPlaylists, currentPlaylist: state.currentPlaylist};
    default:
      return state;
  };
};

export default PlaylistReducer;
