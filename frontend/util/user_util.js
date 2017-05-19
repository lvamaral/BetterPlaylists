export const users = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: {query: query}
  })
);

export const user = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  })
);
