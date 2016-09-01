class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :album_picture_url, default: 'http://res.cloudinary.com/dtatkxxcm/image/upload/v1472748852/albumDefaultImage_bj4xid.png'
      t.timestamps null: false
    end
    add_index :albums, :artist_id
  end
end
