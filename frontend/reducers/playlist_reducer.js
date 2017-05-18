import merge from 'lodash/merge';

// import {
//   RECEIVE_SONGS
// } from '../actions/song_actions';


const PlaylistReducer = (state = 1, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  };
};

export default PlaylistReducer;
