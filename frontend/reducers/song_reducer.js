import merge from 'lodash/merge';

import {
  RECEIVE_SONGS
} from '../actions/song_actions';


const SongReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_SONGS:
      const songs = action.songs;

      return {songs: songs}
    default:
      return state;
  }
};

export default SongReducer;
