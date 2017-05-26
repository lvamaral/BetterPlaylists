import merge from 'lodash/merge';

import {
  RECEIVE_SONGS,
  RECEIVE_VOTE,
  RECEIVE_VOTES
} from '../actions/song_actions';

const sample = {
  searchedSongs: [],
  votes: {}
}

const SongReducer = (state = sample, action) => {
  Object.freeze(state)
  let newState;
  switch(action.type) {
    case RECEIVE_SONGS:
      const songs = action.songs;
      return {songs: songs, votes: state.votes}
    case RECEIVE_VOTE:
      const vote = action.vote
      newState = merge({},state)
      newState.votes[vote.id] = vote
      return newState
    case RECEIVE_VOTES:
      return {songs: state.songs, votes: action.votes}
    default:
      return state;
  }
};

export default SongReducer;
