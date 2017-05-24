export const createPlaylist = (playlist) => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlists/',
    data: { playlist:
      {title: playlist.title,
      creator_id: playlist.creator_id,
      user_ids: playlist.user_ids,
      public: true}
    }
  });
};

export const getPlaylists = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists/',
    data: {currentUser_id: id}
  });
};

export const getAllPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists/'
  });
};

export const getPlaylist = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  });
};

export const addSong = (song_id, playlist_id, user_id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/playlist_songs`,
    data: {playlist_song: {song_id: song_id, user_id: user_id, playlist_id: playlist_id}}
  });
};
