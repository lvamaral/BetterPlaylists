import {merge, at} from 'lodash';

import {
  RECEIVE_CURRENT_PLAYLIST,
  RECEIVE_OWNED_PLAYLISTS,
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST_ERRORS,
  RECEIVE_SONG,
  RECEIVE_MEMBER,
  DELETE_MEMBER
} from '../actions/playlist_actions';

const sample = {
  ownedplaylists: {},
  currentPlaylist: {},
  allPlaylists: {},
  errors: []
}


const PlaylistReducer = (state = sample, action) => {
  let newState
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
    case RECEIVE_MEMBER:
      newState = merge({}, state)
      newState.currentPlaylist.members[action.member.id] = action.member
      return newState
    case DELETE_MEMBER:
      newState = merge({}, state)
      delete newState.currentPlaylist.members[action.member.id]
      return newState
    default:
      return state
  };
};

export default PlaylistReducer;
