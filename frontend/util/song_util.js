export const songs = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
    data: {query: query}
  })
);

export const getVotes = (user_id, song_id, playlist_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/song_votes',
    data: {user_id: user_id, song_id: song_id, playlist_id: playlist_id}
  })
);


export const createVote = (type, user_id, playlist_id, song_id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/song_votes`,
    data: {type: type, user_id: user_id, playlist_id: playlist_id, song_id: song_id }
    });
};

export const updateVote = (type, user_id, playlist_id, song_id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/song_votes/1`,
    data: {type: type, user_id: user_id, playlist_id: playlist_id, song_id: song_id }
    })
  };
