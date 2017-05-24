import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_PLAYLIST,
  RECEIVE_OWNED_PLAYLISTS,
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_ERRORS,
  RECEIVE_SONG
} from '../actions/playlist_actions';

const sample = {
  ownedplaylists: {},
  currentPlaylist: {},
  allPlaylists: {}
}


const PlaylistReducer = (state = sample, action) => {
  Object.freeze(state);
  let newOwned
  switch(action.type) {
    case RECEIVE_CURRENT_PLAYLIST:
      return {ownedPlaylists: state.ownedPlaylists, currentPlaylist: action.currentPlaylist, allPlaylists: state.allPlaylists};
    case RECEIVE_OWNED_PLAYLISTS:
      return {ownedPlaylists: action.ownedPlaylists, currentPlaylist: state.currentPlaylist, allPlaylists: state.allPlaylists};
    case RECEIVE_ALL_PLAYLISTS:
    console.log(action.Playlists);
      return {ownedPlaylists: state.ownedPlaylists, currentPlaylist: state.currentPlaylist, allPlaylists: action.Playlists};
    default:
      return state;
  };
};

export default PlaylistReducer;
