class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :name, default: 'unnamed playlist'
      t.integer :user_id
    end
  end
end
