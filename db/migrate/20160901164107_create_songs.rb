class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :length, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null: false

      t.timestamps null: false
    end
    add_index :songs, [:artist_id, :album_id]
  end
end
