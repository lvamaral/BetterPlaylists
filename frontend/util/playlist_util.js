export const createPlaylist = (playlist) => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlists/',
    data: { playlist:
      {title: playlist.title,
      user_ids: playlist.user_ids }
    }
  });
};

export const getPlaylists = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists/'
  });
};
