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

ActiveRecord::Schema.define(version: 20170529045231) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "playlist_memberships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "playlist_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_playlist_memberships_on_playlist_id", using: :btree
    t.index ["user_id", "playlist_id"], name: "index_playlist_memberships_on_user_id_and_playlist_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_playlist_memberships_on_user_id", using: :btree
  end

  create_table "playlist_songs", force: :cascade do |t|
    t.integer  "song_id",     null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id",     null: false
    t.index ["song_id", "playlist_id"], name: "index_playlist_songs_on_song_id_and_playlist_id", unique: true, using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.string   "title",                                       null: false
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.integer  "creator_id",                                  null: false
    t.string   "art_url",    default: "album_art/sample.jpg"
    t.boolean  "public",                                      null: false
    t.index ["creator_id"], name: "index_playlists_on_creator_id", using: :btree
    t.index ["title"], name: "index_playlists_on_title", using: :btree
  end

  create_table "song_votes", force: :cascade do |t|
    t.integer  "vote_type",   null: false
    t.integer  "user_id",     null: false
    t.integer  "song_id",     null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["song_id", "user_id", "playlist_id"], name: "index_song_votes_on_song_id_and_user_id_and_playlist_id", unique: true, using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",             null: false
    t.string   "artist",            null: false
    t.string   "album",             null: false
    t.string   "song_url",          null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "length"
    t.string   "art_url"
    t.string   "song_file_name"
    t.string   "song_content_type"
    t.integer  "song_file_size"
    t.datetime "song_updated_at"
    t.index ["song_url"], name: "index_songs_on_song_url", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                        null: false
    t.string   "email",                                           null: false
    t.string   "password_digest",                                 null: false
    t.string   "session_token",                                   null: false
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.string   "image_url",       default: "user_pic/sample.png"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
