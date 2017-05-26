import * as APIUtil from '../util/song_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const RECEIVE_VOTES = "RECEIVE_VOTES";
export const UPDATE_VOTE = "UPDATE_VOTE";


export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs: songs
});

export const receiveVote = vote => ({
  type: RECEIVE_VOTE,
  vote: vote
});

export const receiveVotes = votes => ({
  type: RECEIVE_VOTES,
  votes: votes
});

export const getSongs = query => dispatch => {
  return (
  APIUtil.songs(query).then(songs => (
    dispatch(receiveSongs(songs))
  ))
)};

export const getVotes = (user_id, song_id, playlist_id) => dispatch => {
  return (
  APIUtil.getVotes(user_id, song_id, playlist_id).then(votes => (
    dispatch(receiveVotes(votes))
  ))
)};

export const createVote = (type, user_id, playlist_id, song_id) => dispatch => {(
  APIUtil.createVote(type, user_id, playlist_id, song_id).then(vote => dispatch(receiveVote(vote)))
)};

export const updateVote = (type, user_id, playlist_id, song_id) => dispatch => {(
  APIUtil.updateVote(type, user_id, playlist_id, song_id).then(member => dispatch(receiveVote(vote)))
)};
