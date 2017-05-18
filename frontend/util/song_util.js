export const songs = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
    data: {query: query}
  })
);
