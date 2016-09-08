export const fetchPlaylists = (filters, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/playlists',
    success
  });
};

export const fetchPlaylist = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`,
    success
  });
};

export const createPlaylist = (playlist, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: playlist,
    success
  });
};

export const updatePlaylist = (playlist, success) => {
  $.ajax({
    method: 'PATCH',
    url: 'api/playlists',
    data: playlist,
    success
  });
};

export const addSongToPlaylist = (playlist, song, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/playlist_songs',
    data: {playlist_song: {playlist: playlist.id, song: song.id}},
    success
  });
};
