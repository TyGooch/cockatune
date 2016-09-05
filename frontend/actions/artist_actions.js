export const ArtistConstants = {
  REQUEST_ARTISTS: "REQUEST_ARTISTS",
  REQUEST_ARTIST: "REQUEST_ARTIST",
  RECEIVE_ARTISTS: "RECEIVE_ARTISTS",
  RECEIVE_ARTIST: "RECEIVE_ARTIST"
};

export const requestArtists = () => ({
  type: ArtistConstants.REQUEST_ARTISTS
});

export const requestArtist = id => ({
  type: ArtistConstants.REQUEST_ARTISTS,
  id
});

export const receiveArtists = artists => ({
  type: ArtistConstants.RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: ArtistConstants.RECEIVE_ARTISTS,
  artist
});
