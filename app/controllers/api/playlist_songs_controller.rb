class Api::PlaylistSongsController < ApplicationController
    def create
      @playlist_song = PlaylistSong.new({playlist_id: params[:playlist_song][:playlist], song_id: params[:playlist_song][:song]})

      if @playlist_song.save
        render 'api/playlist_songs/show'
      else
        render json: @playlist_song.errors.full_messages, status: 422
      end
    end

    def destroy
      @playlist_song = PlaylistSong.find(params[:id])
      @playlist_song.delete
    end
end
