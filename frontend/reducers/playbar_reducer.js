import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_SONG, PAUSE_SONG
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
    case PAUSE_SONG:
    
      return {
        currentSong: state.currentSong,
        currentQueue: "",
        playStatus: "pause"
      }
    default:
      return state;
  };
};

export default PlaybarReducer;
