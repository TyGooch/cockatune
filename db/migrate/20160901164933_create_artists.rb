class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :genre
      t.string :artist_picture_url, default: 'http://res.cloudinary.com/dtatkxxcm/image/upload/v1472748793/artistDefaultImage_gk2jck.png'

      t.timestamps null: false
    end
  end
end
