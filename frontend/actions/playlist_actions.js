import * as APIUtil from '../util/playlist_util'

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_ERRORS = 'RECEIVE_ERROS';
export const RECEIVE_OWNED_PLAYLISTS = 'RECEIVE_OWNED_PLAYLISTS';

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

export const createPlaylist = playlist => dispatch => (
  APIUtil.createPlaylist(playlist).then(playlist => {
    dispatch(receiveCurrentPlaylist(playlist));
    return (playlist)
  })
);


export const getPlaylists = query => dispatch => {
  return (
  APIUtil.getPlaylists(query).then(playlists => (
    dispatch(receiveOwnedPlaylists(playlists))
  ))
)};
