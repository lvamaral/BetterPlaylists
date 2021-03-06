import * as APIUtil from '../util/playlist_util'

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';
export const RECEIVE_OWNED_PLAYLISTS = 'RECEIVE_OWNED_PLAYLISTS';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';

export const receiveCurrentPlaylist = currentPlaylist => ({
  type: RECEIVE_CURRENT_PLAYLIST,
  currentPlaylist
});

export const receiveOwnedPlaylists = ownedPlaylists => ({
  type: RECEIVE_OWNED_PLAYLISTS,
  ownedPlaylists
});

export const receiveAllPlaylists = Playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  Playlists
});


export const receiveErrors = errors => ({
  type: RECEIVE_PLAYLIST_ERRORS,
  errors
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receiveMember = member => ({
  type: RECEIVE_MEMBER,
  member
});

export const deleteMember = member => ({
  type: DELETE_MEMBER,
  member
});

export const createPlaylist = playlist => dispatch => (
  APIUtil.createPlaylist(playlist).then(playlist => (
    dispatch(receiveCurrentPlaylist(playlist))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getPlaylists = (id) => dispatch => {
  return (
  APIUtil.getPlaylists(id).then(playlists => (
    dispatch(receiveOwnedPlaylists(playlists))
  ))
)};

export const followPlaylist = (user_id, playlist_id) => dispatch => {(
  APIUtil.followPlaylist(user_id, playlist_id).then(member => dispatch(receiveMember(member)))
)};

export const unFollowPlaylist = (user_id, playlist_id) => dispatch => {(
  APIUtil.unFollowPlaylist(user_id, playlist_id).then(member => dispatch(deleteMember(member)))
)};


export const getAllPlaylists = () => dispatch => {
  return (
  APIUtil.getAllPlaylists().then(playlists => (
    dispatch(receiveAllPlaylists(playlists))
  ))
)};

export const getPlaylist = (id) => dispatch => {
  return (
  APIUtil.getPlaylist(id).then(playlist => (
    dispatch(receiveCurrentPlaylist(playlist))
  ))
)};

export const updatePlaylist = (id, title) => dispatch => {
  return (
  APIUtil.updatePlaylist(id, title).then(playlist => (dispatch(receiveCurrentPlaylist(playlist))
  ))
)}


export const addSong = (song_id, playlist_id, user_id) => dispatch => {
  return (
  APIUtil.addSong(song_id, playlist_id, user_id).then(playlist => (
    dispatch(receiveCurrentPlaylist(playlist))
  ))
)};
