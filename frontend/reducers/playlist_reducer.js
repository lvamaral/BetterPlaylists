import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_PLAYLIST,
  RECEIVE_OWNED_PLAYLISTS,
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST_ERRORS,
  RECEIVE_SONG
} from '../actions/playlist_actions';

const sample = {
  ownedplaylists: {},
  currentPlaylist: {},
  allPlaylists: {},
  errors: []
}


const PlaylistReducer = (state = sample, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_PLAYLIST:
      return {ownedPlaylists: state.ownedPlaylists, currentPlaylist: action.currentPlaylist, allPlaylists: state.allPlaylists, errors: state.errors};
    case RECEIVE_OWNED_PLAYLISTS:
      return {ownedPlaylists: action.ownedPlaylists, currentPlaylist: state.currentPlaylist, allPlaylists: state.allPlaylists, errors: state.errors};
    case RECEIVE_ALL_PLAYLISTS:
      return {ownedPlaylists: state.ownedPlaylists, currentPlaylist: state.currentPlaylist, allPlaylists: action.Playlists, errors: state.errors};
    case RECEIVE_PLAYLIST_ERRORS:
      return {ownedPlaylists: state.ownedPlaylists, currentPlaylist: state.currentPlaylist, allPlaylists: state.allPlaylists, errors: action.errors};
    default:
      return state
  };
};

export default PlaylistReducer;
