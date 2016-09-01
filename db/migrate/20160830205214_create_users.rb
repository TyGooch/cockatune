class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null:false
      t.string :password_digest, null:false
      t.string :session_token, null: false
      t.string :profile_picture_url, default: 'http://res.cloudinary.com/dtatkxxcm/image/upload/v1472688884/Profile-blank-male_awwzd2.png'

      t.timestamps null: false
    end

    add_index :users, :session_token, unique: true
    add_index :users, :username, unique: true
  end
end
