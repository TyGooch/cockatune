class AddHeaderImageUrlToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :header_image_url, :string, default: 'http://demo.select-themes.com/nouveau/wp-content/uploads/2014/04/title_black_and_white_03.jpg'
  end
end
