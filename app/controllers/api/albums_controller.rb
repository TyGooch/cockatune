class Api::AlbumsController < ApplicationController
  def index
    @albums = Artist.find_by(id: album_params[:artist_id]).albums
  end

  def show

  end

  private

  def album_params
    params.require(:album).permit(:title, :artist_id, :album_picture_url)
  end
end
