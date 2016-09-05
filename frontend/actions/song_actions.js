export const SongConstants = {
  PLAY_SONG: "PLAY_SONG",
};

export const playSong = (song) => ({
  type: SongConstants.PLAY_SONG,
  song
});
