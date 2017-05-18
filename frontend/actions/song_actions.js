import * as APIUtil from '../util/song_util'

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs: songs
});

export const getSongs = query => dispatch => {
  return (
  APIUtil.songs(query).then(songs => (
    dispatch(receiveSongs(songs))
  ))
)};
