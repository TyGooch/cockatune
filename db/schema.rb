# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160907203803) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",                                                                                                                   null: false
    t.integer  "artist_id",                                                                                                               null: false
    t.string   "album_picture_url", default: "http://res.cloudinary.com/dtatkxxcm/image/upload/v1472748852/albumDefaultImage_bj4xid.png"
    t.datetime "created_at",                                                                                                              null: false
    t.datetime "updated_at",                                                                                                              null: false
  end

  add_index "albums", ["artist_id"], name: "index_albums_on_artist_id", using: :btree

  create_table "artists", force: :cascade do |t|
    t.string   "name",                                                                                                                         null: false
    t.string   "genre"
    t.string   "artist_picture_url", default: "http://res.cloudinary.com/dtatkxxcm/image/upload/v1472748793/artistDefaultImage_gk2jck.png"
    t.datetime "created_at",                                                                                                                   null: false
    t.datetime "updated_at",                                                                                                                   null: false
    t.string   "header_image_url",   default: "http://demo.select-themes.com/nouveau/wp-content/uploads/2014/04/title_black_and_white_03.jpg"
  end

  create_table "playlist_songs", force: :cascade do |t|
    t.integer "playlist_id", null: false
    t.integer "song_id",     null: false
  end

  create_table "playlists", force: :cascade do |t|
    t.string  "name",    default: "unnamed playlist"
    t.integer "user_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "audio_url",  null: false
    t.integer  "length",     null: false
    t.integer  "artist_id",  null: false
    t.integer  "album_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "songs", ["artist_id", "album_id"], name: "index_songs_on_artist_id_and_album_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                                   null: false
    t.string   "password_digest",                                                                                                            null: false
    t.string   "session_token",                                                                                                              null: false
    t.string   "profile_picture_url", default: "http://res.cloudinary.com/dtatkxxcm/image/upload/v1472688884/Profile-blank-male_awwzd2.png"
    t.datetime "created_at",                                                                                                                 null: false
    t.datetime "updated_at",                                                                                                                 null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
