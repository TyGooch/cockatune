export const fetchArtists = success => {
  $.ajax({
    method: 'GET',
    url: '/api/artists',
    success
  });
};

export const fetchArtist = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/artists/${id}`,
    success
  });
};
