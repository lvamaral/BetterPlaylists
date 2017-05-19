import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_PLAYLIST,
  RECEIVE_ERRORS
} from '../actions/playlist_actions';

const PlaylistReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action);
  switch(action.type) {
    case RECEIVE_CURRENT_PLAYLIST:
      return merge(state, action.currentPlaylist)
    default:
      return state;
  };
};

export default PlaylistReducer;
