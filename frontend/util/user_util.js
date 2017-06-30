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

export const postPhoto = (id, photo) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: {image_url: photo}
  })
)
