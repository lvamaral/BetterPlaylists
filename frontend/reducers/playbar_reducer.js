import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_SONG,
} from '../actions/playbar_actions';

const sample = {
  currentSong: "",
  currentQueue: "",
  playStatus: ""
}


const PlaybarReducer = (state = sample, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      return {
        currentSong: action.song,
        currentQueue: "",
        playStatus: "play"
      }

    default:
      return state;
  };
};

export default PlaybarReducer;
