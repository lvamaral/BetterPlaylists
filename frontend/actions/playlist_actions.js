import * as APIUtil from '../util/playlist_util'

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_ERRORS = 'RECEIVE_ERROS';

export const receiveCurrentPlaylist = currentPlaylist => ({
  type: RECEIVE_CURRENT_PLAYLIST,
  currentPlaylist
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createPlaylist = playlist => dispatch => (
  APIUtil.createPlaylist(playlist).then(playlist => (
    dispatch(receiveCurrentPlaylist(playlist))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
