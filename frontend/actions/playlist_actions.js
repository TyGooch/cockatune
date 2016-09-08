export const PlaylistConstants = {
  RECEIVE_PLAYLISTS: "RECEIVE_PLAYLISTS",
  RECEIVE_PLAYLIST: "RECEIVE_PLAYLIST",
  REQUEST_PLAYLISTS: "REQUEST_PLAYLISTS",
  REQUEST_PLAYLIST: "REQUEST_PLAYLIST",
  CREATE_PLAYLIST: "CREATE_PLAYLIST"
};

export const requestPlaylists = () => ({
  type: PlaylistConstants.REQUEST_PLAYLISTS
});

export const requestPlaylist = id => ({
  type: PlaylistConstants.REQUEST_PLAYLIST,
  id
});

export const receivePlaylists = playlists => ({
  type: PlaylistConstants.RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: PlaylistConstants.RECEIVE_PLAYLIST,
  playlist
});

export const createPlaylist = playlist => ({
  type: PlaylistConstants.CREATE_PLAYLIST,
  playlist
});
