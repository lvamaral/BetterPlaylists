import * as APIUtil from '../util/playlist_util'

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_OWNED_PLAYLISTS = 'RECEIVE_OWNED_PLAYLISTS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

export const receiveCurrentPlaylist = currentPlaylist => ({
  type: RECEIVE_CURRENT_PLAYLIST,
  currentPlaylist
});

export const receiveOwnedPlaylists = ownedPlaylists => ({
  type: RECEIVE_OWNED_PLAYLISTS,
  ownedPlaylists
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const createPlaylist = playlist => dispatch => (
  APIUtil.createPlaylist(playlist).then(playlist => {
    dispatch(receiveCurrentPlaylist(playlist));
    return (playlist)
  })
);


export const getPlaylists = (id) => dispatch => {
  return (
  APIUtil.getPlaylists(id).then(playlists => (
    dispatch(receiveOwnedPlaylists(playlists))
  ))
)};

export const getPlaylist = (id) => dispatch => {
  return (
  APIUtil.getPlaylist(id).then(playlist => (
    dispatch(receiveCurrentPlaylist(playlist))
  ))
)};

export const addSong = (song_id, playlist_id, user_id) => dispatch => {
  return (
  APIUtil.addSong(song_id, playlist_id, user_id)
)};
