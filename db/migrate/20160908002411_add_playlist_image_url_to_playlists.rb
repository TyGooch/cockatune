class AddPlaylistImageUrlToPlaylists < ActiveRecord::Migration
  def change
    add_column :playlists, :playlist_image_url, :string, default: 'http://www.nichebuilder.com/Shared/PageBuilder/images/empty-image-placeholder.png'
  end
end
